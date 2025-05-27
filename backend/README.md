# Backend Service

## Project Overview
This is a TypeScript-based RESTful backend service using Node.js and Prisma ORM.

## Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- PostgreSQL database

## Setup and Installation

1. Clone the repository
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
- Copy `.env.example` to `.env`
- Fill in the required database connection details

4. Initialize Prisma
```bash
npx prisma generate
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
```

## Running the Application

### Development Mode
```bash
npm run dev
```
- Starts the server 
- Default port: 9000

### Generate documentation
```bash
npm run generate-docs
```
- It will generate the swagger documentation and can be found at /api-docs

### Production Mode
```bash
npm run build
npm start
```

## API Endpoints
Detailed API documentation can be found in the `documentation` directory.

## Logging
- Application logs are stored in the `logs` directory
- Access logs are recorded in `access.log`


## Project Structure
- `controllers/`: Business logic
- `routes/`: API route definitions
- `middleware/`: Request processing middleware
- `prisma/`: Database schema and migrations
- `dtos/`: Data Transfer Objects
- `utils/`: Utility functions
- `logs`: Log folder
- `documentaion`:Swagger documentation folder
- `templates`:Email Template folder

## Expected Output
- Successful server start will display:
  ```
  Connected to database
  ```
- API responses will be in JSON format
- Errors will include descriptive messages and appropriate HTTP status codes

## Troubleshooting
- Ensure all environment variables are correctly set
- Check database connection details
- Verify Node.js and npm versions
