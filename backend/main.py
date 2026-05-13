from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
import os

app = FastAPI(title="KHS Hair Studio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── In-memory stores (replace with MongoDB in production) ──────────────────────
contacts_db: list[dict] = []
settings_db: dict = {
    "booking_url": "https://app.squareup.com/appointments/book/8fbb00znetx358/LN5H9T8R4SMYS/start",
    "services_url": "https://book.squareup.com/appointments/8fbb00znetx358/location/LN5H9T8R4SMYS/services",
    "phone": "+1 (403) 352-3923",
    "address": "178 PTH 12 North, Steinbach, MB R5G 1T7, Canada",
    "instagram_url": "https://instagram.com/khs.hairstudio",
    "hours": "Tuesday – Saturday: 9am – 6pm",
}

# ── Models ─────────────────────────────────────────────────────────────────────
class ContactSubmission(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    message: str

class SettingsUpdate(BaseModel):
    booking_url: Optional[str] = None
    services_url: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    instagram_url: Optional[str] = None
    hours: Optional[str] = None

# ── Contact endpoints ──────────────────────────────────────────────────────────
@app.post("/api/contact", status_code=201)
async def submit_contact(data: ContactSubmission):
    if not data.name.strip():
        raise HTTPException(status_code=422, detail="Name is required.")
    if not data.message.strip():
        raise HTTPException(status_code=422, detail="Message is required.")

    contact = {
        "id": str(len(contacts_db) + 1),
        "name": data.name.strip(),
        "email": data.email,
        "phone": data.phone,
        "message": data.message.strip(),
        "created_at": datetime.utcnow().isoformat(),
    }
    contacts_db.append(contact)
    return contact


@app.get("/api/contact")
async def get_contacts():
    return sorted(contacts_db, key=lambda c: c["created_at"], reverse=True)

# ── Settings endpoints ─────────────────────────────────────────────────────────
@app.get("/api/settings")
async def get_settings():
    return settings_db


@app.put("/api/settings")
async def update_settings(data: SettingsUpdate):
    updates = data.model_dump(exclude_none=True)
    settings_db.update(updates)
    return settings_db
