<!-- # API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.  -->

## API Endpoints

For example: `http://localhost:port:3000`

#### Root

|     - FUNCTIONS    | - Methos |     - Routes       |         - Description             | Token Required |
|:------------------:|:--------:|--------------------|-----------------------------------|:--------------:|
|        -----       |    GET   |         /          | Welcome Message for user          |      FALSE     |

<!-- #### Products

|     - FUNCTIONS    | - Methos |     - Routes       |         - Description             | Token Required |
|:------------------:|:--------:|--------------------|-----------------------------------|:--------------:|
|         Index      |    GET   | /products          | Show all products                 |      FALSE     |
|         Show       |    GET   | /products/:id      | Search for one product with ID    |      FALSE     |
|        Create      |   POST   | /products          | Create new Product                |      TRUE      |
|        Update      |    PUT   | /products/:id      | Update a product with ID          |      TRUE      |
|        Delete      |  DELETE  | /products/:id      | Delete a product with ID          |      TRUE      |
|        popular     |    GET   | /products/popular  | Top 5 most popular products       |      FALSE     |
|   Show by category |    GET   | /products/category | Search for products with category |      FALSE     | -->

#### Users

| - FUNCTIONS | - Methos |  - Routes  |                 - Description                   | Token Required |
|:-----------:|:--------:|------------|-------------------------------------------------|:--------------:|
|     Index   |    GET   | /users     | Show all users                                  |      TRUE      |
|      Show   |    GET   | /users/:id | Search for one user with ID                     |      TRUE      |
|     Create  |   POST   | /users     | Create new User                                 |      FALSE     |
|     Update  |    PUT   | /users/:id | Update a product with ID                        |      TRUE      |
|     Delete  |  DELETE  | /users/:id | Delete a product with ID                        |      TRUE      |

<!-- #### Orders

|         - FUNCTIONS        | - Methos |    - Routes      |            - Description                 | Token Required |
|:--------------------------:|:--------:|------------------|------------------------------------------|:--------------:|
|             Index          |    GET   | /orders          | Show all orders                          |      TRUE      |
|             Show           |    GET   | /orders/:id      | Search for one order with ID             |      TRUE      |
|        Show By User ID     |    GET   | /orders/user/:id | Search for orders with User ID           |      TRUE      |
|   Show complete By User ID |    GET   | /orders/complete | Search for Completed orders with User ID |      TRUE      |
|    Show Active By User ID  |    GET   | /orders/active   | Search for Active orders with User ID    |      TRUE      |
|            Create          |   POST   | /orders          | Create new User                          |      TRUE      |
|            Update          |    PUT   | /orders/:id      | Update a product with ID                 |      TRUE      |
|            Delete          |  DELETE  | /orders/:id      | Delete a product with ID                 |      TRUE      |

#### Orders Products

| - FUNCTIONS | - Methos |       - Routes      |                - Description               | Token Required |
|:-----------:|:--------:|:-------------------:|:------------------------------------------:|:--------------:|
|     Index   |    GET   | /ordersproducts     | Show all orders products                   |      TRUE      |
|      Show   |    GET   | /ordersproducts/:id | Search for one order product with order ID |      TRUE      |
|     Create  |   POST   | /ordersproducts     | Create new orders products                 |      TRUE      |
|     Update  |    PUT   | /ordersproducts/:id | Update a orders productswith order ID      |      TRUE      |
|     Delete  |  DELETE  | /ordersproducts/:id | Delete a orders products  with order ID    |      TRUE      | -->

## Data Shapes

<!-- #### Product

|    - columns   |         - Type        |
|:--------------:|:---------------------:|
|        id      |   SERIAL PRIMARY KEY  |
|      title     | VARCHAR(100) NOT NULL |
|      price     |    integer NOT NULL   |
|   description  |          text         |
|     category   | VARCHAR(100) NOT NULL | -->

#### User

|   - columns    |       - Type          |
|:--------------:|:---------------------:|
|     id         |   SERIAL PRIMARY KEY  |
|   first_name   | VARCHAR(100) NOT NULL |
|   last_name    | VARCHAR(100) NOT NULL |
|    email       | VARCHAR(100) NOT NULL |
|   password     | VARCHAR(100) NOT NULL |
|  admin_flag    |    BOOLEAN NOT NULL   |
|  created_date  |   TIMESTAMP NOT NULL  |
|  updated_date  |   TIMESTAMP NOT NULL  |

<!-- #### Orders

|  - columns |                 - Type                |
|:----------:|:-------------------------------------:|
|     id     |           SERIAL PRIMARY KEY          |
|   status   |          VARCHAR(30) NOT NULL         |
|   user_id  | integer REFERENCES users(id) NOT NULL |
| order_time |           TIMESTAMP NOT NULL          |

#### Orders Products

|  - columns |                  - Type                  |
|:----------:|:----------------------------------------:|
|     id     |            SERIAL PRIMARY KEY            |
|  order_id  |  integer REFERENCES orders(id) NOT NULL  |
| product_id | integer REFERENCES products(id) NOT NULL |
|  quantity  |             integer NOT NULL             | -->
