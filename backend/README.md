# To-Do List Application - Backend

## Overview

This is the back-end part of a simple To-Do List application built with **Node.js** and **Express**. The application provides a RESTful API for managing to-do items, allowing users to create, read, update, and delete their tasks. Data is stored in a MongoDB database.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to build APIs.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: Module to load environment variables from a `.env` file.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app/backend
   ```

2. **Install Dependencies:**

   Make sure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root of the `backend` directory and add your MongoDB connection string:

   ```env
   MONGODB_URI=mongodb://localhost:27017/todo-db
   PORT=5000
   ```

4. **Start the Server:**

   To start the back-end server, run:

   ```bash
   node server.js
   ```

   The server will run on `http://localhost:5000`.

## Usage

- The back-end server provides a RESTful API for managing to-do items. Ensure that your front-end application is configured to point to the correct back-end URL.

## API Endpoints

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| GET    | `/api/todos`           | Retrieve all to-do items           |
| POST   | `/api/todos`           | Create a new to-do item            |
| PUT    | `/api/todos/:id`       | Update the status of a to-do item  |
| DELETE | `/api/todos/:id`       | Delete a to-do item                |

### Example Requests

- **Get All To-Dos**:

  ```bash
  GET http://localhost:5000/api/todos
  ```

- **Add a New To-Do**:

  ```bash
  POST http://localhost:5000/api/todos
  Content-Type: application/json

  {
      "task": "Learn MongoDB",
      "status": "incomplete",
      "createdAt": "2024-10-08T00:00:00.000Z"
  }
  ```

- **Update a To-Do**:

  ```bash
  PUT http://localhost:5000/api/todos/:id
  Content-Type: application/json

  {
      "status": "complete"
  }
  ```

- **Delete a To-Do**:

  ```bash
  DELETE http://localhost:5000/api/todos/:id
  ```

## Database Structure

The MongoDB database contains a `todos` collection with the following document structure:

```json
{
    "_id": "ObjectId",
    "task": "String",
    "status": "String", // "incomplete" or "complete"
    "createdAt": "Date"
}
```

## Folder Structure

```
backend/
├── models/
│   └── Todo.js
├── routes/
│   └── todoRoutes.js
├── .env
├── package.json
├── server.js
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE] file for details.