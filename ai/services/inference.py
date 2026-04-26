import base64
from typing import Dict

def analyze_food_image(image_base64: str, filename: str) -> Dict:
    _ = base64.b64decode(image_base64)
    items = [
        {'label': 'Grilled chicken', 'grams': 140, 'calories': 231, 'protein': 43, 'carbs': 0, 'fat': 5},
        {'label': 'Steamed rice', 'grams': 160, 'calories': 208, 'protein': 4, 'carbs': 45, 'fat': 0.4},
        {'label': 'Broccoli', 'grams': 75, 'calories': 26, 'protein': 2.2, 'carbs': 5, 'fat': 0.3}
    ]
    total = {
        'calories': round(sum(i['calories'] for i in items), 1),
        'protein': round(sum(i['protein'] for i in items), 1),
        'carbs': round(sum(i['carbs'] for i in items), 1),
        'fat': round(sum(i['fat'] for i in items), 1)
    }
    return {
        'filename': filename,
        'pipeline': {
            'classifier': 'EfficientNet/ResNet placeholder',
            'segmenter': 'U-Net placeholder',
            'depth_estimator': 'MiDaS placeholder',
            'nutrition_source': 'USDA FoodData Central mapping stub'
        },
        'items': items,
        'total': total
    }

def estimate_food(query: str, grams: float) -> Dict:
    kcal_per_100g = {
        'banana': 89,
        'apple': 52,
        'grilled salmon': 208,
        'rice': 130,
        'egg': 155
    }
    matched = next((k for k in kcal_per_100g if k in query.lower()), 'rice')
    calories = round(kcal_per_100g[matched] * grams / 100, 1)
    return {'label': matched.title(), 'grams': grams, 'calories': calories}

def chatbot_reply(message: str, context: Dict) -> str:
    goal = context.get('user', {}).get('goal', 'maintenance')
    text = message.lower()
    if 'recipe' in text:
        return f"For a {goal} goal, try a bowl with lean protein, whole grains, olive oil, and colorful vegetables."
    if 'calorie' in text:
        return 'Calories depend on portion size, cooking method, and ingredients. Use image analysis or the manual estimator for a better estimate.'
    return 'I can help with calories, nutrients, balanced meals, hydration, and practical food swaps.'
