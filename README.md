# Shopping List API

This is a simple API to manage a shopping list, which allows you to perform CRUD (Create, Read, Update, Delete) operations. The API is built using Node.js and interacts with a local JSON file to store and retrieve data.

## Features
- **GET** `/shopping-list`: Retrieve the list of shopping items.
- **POST** `/shopping-list`: Add a new item to the shopping list.
- **PUT** `/shopping-list/{id}`: Update an existing item by its ID.
- **DELETE** `/shopping-list/{id}`: Delete an item by its ID.

## Prerequisites
Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/): JavaScript runtime for running the server.
- [Postman](https://www.postman.com/): API testing tool (optional, but recommended).

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/shopping-list-api.git
cd shopping-list-api
