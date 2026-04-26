from fastapi import FastAPI
from pydantic import BaseModel
from services.inference import analyze_food_image, estimate_food, chatbot_reply
app = FastAPI(title='Nutrizio AI Service')
class ImagePayload(BaseModel):
    image_base64: str
    filename: str
class EstimatePayload(BaseModel):
    query: str
    grams: float = 100
class ChatPayload(BaseModel):
    message: str
    context: dict = {}
@app.get('/health')
def health():
    return {'status': 'ok'}
@app.post('/analyze-food')
def analyze_food(payload: ImagePayload):
    return analyze_food_image(payload.image_base64, payload.filename)
@app.post('/estimate-food')
def estimate(payload: EstimatePayload):
    return estimate_food(payload.query, payload.grams)
@app.post('/chat')
def chat(payload: ChatPayload):
    return {'reply': chatbot_reply(payload.message, payload.context)}
