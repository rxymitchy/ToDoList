# To-Do List Application - Frontend

## Overview

This is the front-end part of a simple To-Do List application built with **React**. The application allows users to add, mark as complete, and delete to-do items, with a clean and intuitive user interface.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React components that implement Google's Material Design.
- **Redux**: State management for React applications.
- **Axios**: Promise-based HTTP client for making requests to the back-end API.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app/frontend
   ```

2. **Install Dependencies:**

   Ensure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Start the Application:**

   To start the development server, run:

   ```bash
   npm start
   ```

   The application will open in your default web browser at `http://localhost:3000`.

## Usage

- **Add a New To-Do Item**: Enter a task in the input field and click the "Add" button.
- **Mark a To-Do Item as Complete**: Click the checkbox next to the to-do item to mark it as complete.
- **Delete a To-Do Item**: Click the "Delete" button next to the item you want to remove.
- **View All To-Do Items**: The application displays all your to-do items, with completed items visually distinct.

## Features

- User-friendly interface with Material-UI.
- State management using Redux for handling application state.
- Persistent storage of to-do items via API requests to the back-end.
- Ability to view, add, delete, and mark items as complete.

## Folder Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TodoList.js
│   │   ├── TodoItem.js
│   │   └── AddTodo.js
│   ├── redux/
│   │   ├── actions/
│   │   └── reducers/
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE] file for details.
