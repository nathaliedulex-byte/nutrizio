# Nutrizio

Production-ready full-stack starter for AI-powered nutrition and calorie estimation.

## Stack
- Frontend: React + Bootstrap + CSS variables
- Backend: Node.js + Express + MongoDB + JWT
- AI services: Python FastAPI microservice with food recognition, segmentation, portion estimation, and nutrient mapping stubs ready for real model deployment

## Monorepo structure
- `frontend/` React app
- `backend/` Express API
- `ai/` FastAPI AI service
- `assets/` branding assets
- `docs/` architecture and deployment notes

## Quick start
1. Install Node.js 20+, Python 3.11+, MongoDB 7+
2. Copy env templates in frontend/backend/ai and fill values
3. Start MongoDB
4. Backend: `cd backend && npm install && npm run dev`
5. AI service: `cd ai && pip install -r requirements.txt && uvicorn app:app --reload --port 8001`
6. Frontend: `cd frontend && npm install && npm run dev`

See `docs/setup.md` for full instructions.
