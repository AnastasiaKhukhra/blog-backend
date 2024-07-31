# Blog API Backend

## Overview

This is the backend for a simple Blog application built with Node.js, Express, Sequelize, and PostgreSQL. The backend provides RESTful APIs for managing blog posts, including creating, reading, updating, and deleting posts. The project also includes Swagger API documentation and is containerized using Docker.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Database Migration](#database-migration)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (if running without Docker)
- [npm](https://www.npmjs.com/get-npm) (if running without Docker)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blog-api-backend.git
   cd blog-api-backend

2. **Install dependencies:**

   If you are not using Docker, install the dependencies locally:

   ```bash
   npm install

### Running the Application

#### Using Docker

1. **Build and start the containers:**

   ```bash
   docker-compose up --build
  
2. **Access the application:**

   The API will be accessible at `http://localhost:8000`.

3. **Stopping the application:**

   To stop the containers, run:

   ```bash
   docker-compose down

#### Running Locally without Docker

1. **Set up the environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   DATABASE_URL=postgres://admin:WfJQneuXGgH4@localhost:5432/blog_db
   NODE_ENV=development

2. **Start the application:**

   ```bash
   npm start

The API will be accessible at `http://localhost:8000`.

## API Documentation

Swagger UI is used for API documentation. To access the documentation:

1. **Start the application** using Docker or locally as described above.

2. **Navigate to Swagger UI**:

   Open your browser and go to `http://localhost:8000/api-docs`.

## Project Structure


```bash
├── controllers      # Contains the logic for handling requests
├── models           # Sequelize models and database setup
├── routes           # API routes
├── services         # Business logic and helper functions
├── swagger          # Swagger documentation
├── config           # Configuration files (e.g., database)
├── .env.example     # Example environment variables
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## Environment Variables

The application uses environment variables to configure the database connection and other settings. The following environment variables are required:

- `DATABASE_URL`: The connection string for the PostgreSQL database.
- `NODE_ENV`: Set to `development` for local development.

## Database Migration

If you need to perform database migrations manually:

1. **Run migrations:**

   ```bash
   npx sequelize-cli db:migrate

2. **Revert migrations:**

   ```bash
   npx sequelize-cli db:migrate:undo

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.
