# 🛣️ RVTE: React • Vite • TypeScript • Express project template

This project is a simple frontend and backend TypeScript solution created using `create-vite` and recommendations from [ChatGPT](https://chatgpt.com/share/67e4326e-9530-8008-8d06-a39dcc5b24b1). It demonstrates a basic setup for a full-stack application with a React frontend and an Express backend.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install the dependencies:

   ```sh
   npm i
   ```

3. Create a `.env` file based on the `.env.template`:

   ```sh
   cp .env.template .env
   ```

4. Add your OpenAI API key to the `.env` file:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. Start the backend server:
   ```sh
   npm run dev
   ```

The backend server will be running at `http://localhost:5000`.

### Frontend

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install the dependencies:

   ```sh
   npm i
   ```

3. Create a `.env` file based on the `.env.template`:

   ```sh
   cp .env.template .env
   ```

4. Add the API URL to the `.env` file:

   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. Start the frontend development server:
   ```sh
   npm run dev
   ```

The frontend application will be running at `http://localhost:5173`.
