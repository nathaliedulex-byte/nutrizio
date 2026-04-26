# Architecture

## Services
- React SPA for client UI
- Express API for auth, meals, dashboard, chatbot proxy, manual estimation, and image-analysis orchestration
- FastAPI AI service for model inference and USDA mapping
- MongoDB for users, meals, logs, password reset tokens, and analytics snapshots

## Security
- bcrypt password hashing
- JWT auth middleware
- express-rate-limit on auth and chat routes
- helmet and CORS policy
- optional field encryption for sensitive profile data
- audit-friendly validation with zod

## Compliance
- Consent checkbox for analytics and data policy
- Data export and delete endpoints
- Minimal retention defaults for reset tokens and transient upload files

## Data model highlights
- `User` has indexed email and profile
- `MealLog` indexed on `user`, `loggedAt`, and compound daily queries
- `NutritionQueryCache` optional for repeated USDA lookups
