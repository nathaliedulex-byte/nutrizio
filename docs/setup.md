# Nutrizio setup

## Environment variables

### backend/.env
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/nutrizio
JWT_SECRET=change-me
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
AI_SERVICE_URL=http://localhost:8001
USDA_API_KEY=your_usda_key
GEMINI_API_KEY=your_gemini_key
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user
SMTP_PASS=pass
SMTP_FROM=no-reply@nutrizio.app
ENCRYPTION_KEY=32_characters_long_key_here_123
```

### frontend/.env
```env
VITE_API_URL=http://localhost:5000/api
```

### ai/.env
```env
USDA_API_KEY=your_usda_key
MODEL_BACKEND=torch
```

## Install and run

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### AI service
```bash
cd ai
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload --port 8001
```

## Production notes
- Put the React app behind Nginx or Vercel
- Run Express behind a reverse proxy
- Use MongoDB Atlas with IP allowlists, backups, and encryption at rest
- Store secrets in a vault, not in source control
- Configure CORS per environment
- Enable HTTPS only cookies if you move JWT to cookies
- Add a job for daily MongoDB backups and retention

## AI deployment notes
- Replace demo inference in `ai/services/inference.py` with EfficientNet/ResNet classification, U-Net segmentation, and MiDaS or mobile depth estimation
- Calibrate portion estimation with a reference object or monocular depth prior
- Cache USDA food lookups for popular labels
