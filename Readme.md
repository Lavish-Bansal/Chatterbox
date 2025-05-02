# ChatApp Assignment

## Project Overview
This project is a simple chat application designed to demonstrate real-time communication features. It allows users to send and receive messages in a user-friendly interface.

## Features
- Real-time messaging
- User authentication
- Responsive design
- Support for multiple chat rooms

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/lavish-bansal/chatterbox.git
    cd chatterbox
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Set up environment variables:

- In the `frontend` directory, create a `.env` file and add the following:
    ```bash
    VITE_BASE_URL=http://localhost:8000
    ```

- In the `backend` directory, create a `.env` file and add the following:
    ```
    PORT=8000
    MONGODB_URI
    JWT_SECRET
    ```

4. Start the application:
 - Start the backend server:
   ```bash
   cd backend
   npm start
   ```
 - Start the frontend development server in a new terminal:
   ```bash
   cd frontend
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` for the frontend.

## Usage
1. Register or log in to your account.
2. Join a chat room or create a new one.
3. Start chatting in real-time with other users.