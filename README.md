# Ecommerce-rest-api

## About
This is a rest API made in node.js for an ecommerce site using Json Web Tokens(JWT)

## Technologies Used
1. Node.js
2. Express
3. MongoDB
4. Mongoose
5. Postman

## Features
1. User Auth
- Register
- Login
- Logout
- Refresh Token
 
2. Product Auth
- Create a Product
- Update a Product
- Delete Products
- Get All Products
- Get a Single Product
 
Users by default are registered as "customers".

Only users registerd with role as "admin" can Create/Update/Delete Products.

## Download project
```bash
git clone https://github.com/Aryan271/Ecommerce-rest-api.git
```

## Install Dependancies
After cloning/downloading the source code, change directory to project folder ( project root folder ). Run following command: 
```bash
npm install
```

### This command will install all the required dependancies.

## Setup Environment
Create a new file called .env. Copy all the content from .env.example and paste it into .env Change DB_URL to yours db url.

## Run the server
```bash
npm run dev
```
