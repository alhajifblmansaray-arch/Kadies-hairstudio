# Kadie's Hair Studio (KHS)

Website for KHS Hair Studio — Steinbach, Manitoba.

## Stack
- **Frontend:** React + Vite + Tailwind CSS (deployed to Vercel)
- **Backend:** FastAPI (deployed to Render)

## Local development

```bash
# Frontend
cd frontend
npm install
npm run dev   # http://localhost:5174

# Backend
cd backend
pip3 install -r requirements.txt
python3 -m uvicorn main:app --reload --port 8000
```

## Deployment
- Frontend → Vercel (root: `frontend`)
- Backend → Render (root: `backend`, start: `uvicorn main:app --host 0.0.0.0 --port $PORT`)
- Domain: kadieshairstudio.com (DNS managed at GoDaddy → Vercel)
