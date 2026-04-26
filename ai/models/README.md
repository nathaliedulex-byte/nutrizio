# Model integration plan

## Recommended models
- Classification: EfficientNet-B3 or ResNet-50 fine-tuned on Food-101, UECFood256, or custom meal data
- Segmentation: U-Net or DeepLabV3 for food item masks
- Portion sizing: MiDaS or mobile depth model with camera calibration
- Nutrient mapping: USDA FoodData Central lookup with fuzzy matching and confidence thresholds

## Serving
- Export PyTorch models to TorchScript or ONNX
- Add batching and model warm-up
- Cache nutrition responses for repeated items
