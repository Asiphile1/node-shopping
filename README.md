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
git clone (https://github.com/Asiphile1/node-shopping/tree/main)
cd shopping-list-api
```


## 2. Install Dependencies
This project doesn’t have any external dependencies, but if you need to add more later, use the following command:

```bash


npm init -y
```

## 3. Run the Server
To run the server, use the following command:

```bash


node api.js
```
The server will be available at http://localhost:3000.

## 4. Test the API Endpoints 
You can test the API using Postman or any API testing tool.

## GET /shopping-list
* Method: GET
* URL: http://localhost:3000/shopping-list
* Description: Retrieves all items in the shopping list.

## POST /shopping-list

* Method: POST
* URL: http://localhost:3000/shopping-list
* Request Body:

```json

{
  "name": "Item Name"
}
```
Description: Adds a new item to the shopping list. The item must include a name.

## PUT /shopping-list/{id}

* Method: PUT
* URL: http://localhost:3000/shopping-list/{id}
* Request Body:
  
```json

{
  "name": "Updated Item Name"
}
```
Description: Updates an existing item in the shopping list by its ID.

## DELETE /shopping-list/{id}

* Method: DELETE
* URL: http://localhost:3000/shopping-list/{id}
* Description: Deletes an item from the shopping list by its ID.

## 5. Error Handling
If a request is made with invalid data (e.g., a missing name field), the API will return a 400 status code with an error message:

```json

{
  "error": "Item must have a name"
}
```
If an invalid item ID is provided, the API will return a 404 status code with an error message:

```json

{
  "error": "Item not found"
}
```

## 6. Data Storage

The shopping list data is stored in a local JSON file located in the data/shoppingList.json file.
The API uses the fs module to read and write data to this file.

# screenshots
![Image](https://github.com/user-attachments/assets/63866357-9e90-4d1c-ac61-287f687c886b)

![Image](https://github.com/user-attachments/assets/d95b4673-09d7-4b97-9bf0-1cdbc723425a)

![Image](https://github.com/user-attachments/assets/214c323f-418a-44b3-b3b7-78e8741feff2)
