# Headless CMS

## Overview

The Headless CMS project is a basic content management system with CRUD (Create, Read, Update, Delete) functionality. It allows users to create custom entities with specified attributes and manage entries for these entities via a simple React.js frontend. The backend is built with Express.js and connects to a MySQL database.

## Key Features

- **Entity Creation**: Users can create entities by specifying their name and attributes (e.g., `name<string>`, `email<string>`, `mobileNumber<number>`, `dateOfBirth<date>`).
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on entries for each entity directly from the frontend.
- **Dynamic Table Creation**: Automatically creates a corresponding table in the MySQL database based on the defined entity and attributes.
- **Interactive Interface**: React.js frontend for easy interaction and management of entities and entries.

## Installation

### Clone the repository:

`git clone https://github.com/TusharKesarwani/Headless-CMS.git`

### Navigate to the project directory:

`cd Headless-CMS`

## Backend Setup

### Install dependencies:

`npm install`

### Set up MySQL database:

1. Create a MySQL database named `cms`.
2. Update the database connection details in `models/db.js`:

    `const db = mysql.createConnection({`
    `host: 'localhost',`
    `user: 'yourusername',`
    `password: 'yourpassword',`
    `database: 'cms'`
    `});`

### Start the backend server:

`node server.js`

The backend server will run at http://localhost:3000.

## Frontend Setup

### Navigate to the frontend directory:

`cd ../headless-cms-frontend`

### Install dependencies:

`npm install`

### Build the frontend:

`npm run build`

### Serve the built frontend with the backend server:

1. Ensure the backend server is configured to serve static files from the React app's build directory.
2. Start the backend server again if it's not running:

    `cd ..`
    `node server.js`

The full application will be accessible at http://localhost:3000.

## Usage

1. Open your browser and navigate to http://localhost:3000.
2. Use the "Create Entity" form to define new entities with custom attributes.
3. Add entries to the created entities using the "Add Entry" form.
4. View, update, and delete entries using the "Entity List" section.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Credits

This project was created by [Tushar Kesarwani](https://github.com/TusharKesarwani) as a basic headless CMS with CRUD functionality.