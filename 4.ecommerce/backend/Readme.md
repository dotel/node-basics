## Possible endpoints for ecom

Product Endpoints:

GET /products: Retrieve a list of all products.
GET /products/{id}: Retrieve details of a specific product.
POST /products: Create a new product.
PUT /products/{id}: Update details of a specific product.
DELETE /products/{id}: Delete a specific product.

Category Endpoints:

GET /categories: Retrieve a list of all product categories.
GET /categories/{id}: Retrieve details of a specific product category.
POST /categories: Create a new product category.
PUT /categories/{id}: Update details of a specific product category.
DELETE /categories/{id}: Delete a specific product category.

Order Endpoints:

GET /orders: Retrieve a list of all orders.
GET /orders/{id}: Retrieve details of a specific order.
POST /orders: Create a new order.
PUT /orders/{id}: Update details of a specific order.
DELETE /orders/{id}: Delete a specific order.

User Endpoints:

GET /users: Retrieve a list of all users.
GET /users/{id}: Retrieve details of a specific user.
POST /users: Create a new user.
PUT /users/{id}: Update details of a specific user.
DELETE /users/{id}: Delete a specific user.
GET /users/{id}/orders: Retrieve a list of orders placed by a specific user.
GET /users/{id}/reviews: Retrieve a list of reviews submitted by a specific user.

Cart Endpoints:

GET /cart: Retrieve the shopping cart for the authenticated user.
POST /cart/items: Add an item to the shopping cart.
PUT /cart/items/{id}: Update quantity or details of a specific item in the shopping cart.
DELETE /cart/items/{id}: Remove a specific item from the shopping cart.

Address Endpoints:

GET /addresses: Retrieve a list of addresses for the authenticated user.
GET /addresses/{id}: Retrieve details of a specific address.
POST /addresses: Add a new address for the authenticated user.
PUT /addresses/{id}: Update details of a specific address.
DELETE /addresses/{id}: Delete a specific address.

User Authentication Endpoints:

POST /auth/register: Register a new user.
POST /auth/login: Authenticate and log in a user.
POST /auth/logout: Log out the currently authenticated user.
POST /auth/refresh: Refresh the authentication token.

User Account Endpoints:

GET /users/me: Retrieve the profile and account details of the currently authenticated user.
PUT /users/me: Update the profile and account details of the currently authenticated user.
DELETE /users/me: Delete the account of the currently authenticated user.
