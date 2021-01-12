<h1 align="center">Agroic - Reforming Agri Living <br /></h1>  
<p align="center">
  <img src="https://user-images.githubusercontent.com/49508237/104348350-a5485a80-5527-11eb-854b-b2477bfeb96d.png?" width="500" >
</p>

## 🌱Agricultural Web Application for University Project Built with Reactjs + Expressjs + Nodejs + MongoDB (MERN)💻

## Features

- ChatBot
- Seller Profile
- Add/Delete Products
- Edit Profile
- Add/Edit Personal & Company Address
- Farmer Profile
- Add/Delete Grains
- Edit Profile
- Add/Edit Address
- Buy Seeds/Pesticides or Rent Machines
- Buy Loan & Credit Card
- Consumer
- Edit Profile
- Add/Edit Address
- Buy Materials From Farmer
- Payapal Gateway
- Cart Page
- Change Quantity
- Remove Product from Cart Page
and much more

## Usage

### ES Modules in Node

Used ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
Create a .env file inside frontend and add the following

```
REACT_APP_GOOGLE_KEY = "add google map api key"
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## License

The MIT License

Copyright (c) 2020 Sanjula De Alwis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
