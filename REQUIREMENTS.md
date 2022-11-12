<!-- # API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.  -->

## API Endpoints

For example: `http://localhost:port:3000`

#### Root

|     - FUNCTIONS    | - Methos |     - Routes       |         - Description             | Token Required |
|:------------------:|:--------:|--------------------|-----------------------------------|:--------------:|
|        -----       |    GET   |         /          | Welcome Message for user          |      FALSE     |

#### Users

| - FUNCTIONS | - Methos |  - Routes  |               - Description                 | Token Required |
|:-----------:|:--------:|------------|---------------------------------------------|:--------------:|
|     Index   |    GET   | /users     | Show all users                              |      TRUE      |
|      Show   |    GET   | /users/:id | Search for one user with ID                 |      TRUE      |
|     Create  |   POST   | /users     | Create new user                             |      FALSE     |
|     Update  |    PUT   | /users/:id | Update a user with ID                       |      TRUE      |
|     Delete  |  DELETE  | /users/:id | Delete a user with ID                       |      TRUE      |

#### Blocks

| - FUNCTIONS | - Methos |  - Routes   |               - Description                | Token Required |
|:-----------:|:--------:|-------------|--------------------------------------------|:--------------:|
|     Index   |    GET   | /blocks     | Show all blocks                            |      TRUE      |
|      Show   |    GET   | /blocks/:id | Search for one block with ID               |      TRUE      |
|     Create  |   POST   | /blocks     | Create new block                           |      TRUE      |
|     Update  |    PUT   | /blocks/:id | Update a block with ID                     |      TRUE      |
|     Delete  |  DELETE  | /blocks/:id | Delete a block with ID                     |      TRUE      |


#### Shelf

| - FUNCTIONS | - Methos |  - Routes   |               - Description                | Token Required |
|:-----------:|:--------:|-------------|--------------------------------------------|:--------------:|
|     Index   |    GET   | /shelfs     | Show all shelfs                            |      TRUE      |
|      Show   |    GET   | /shelfs/:id | Search for one shelf with ID               |      TRUE      |
|     Create  |   POST   | /shelfs     | Create new shelf                           |      TRUE      |
|     Update  |    PUT   | /shelfs/:id | Update a shelf with ID                     |      TRUE      |
|     Delete  |  DELETE  | /shelfs/:id | Delete a shelf with ID                     |      TRUE      |

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
|            Delete          |  DELETE  | /orders/:id      | Delete a product with ID                 |      TRUE      | -->

## Data Shapes

#### User

|    - columns     |       - Type          |
|:----------------:|:---------------------:|
|       id         |   SERIAL PRIMARY KEY  |
|    first_name    | VARCHAR(100) NOT NULL |
|    last_name     | VARCHAR(100) NOT NULL |
|      email       | VARCHAR(100) NOT NULL |
|     password     | VARCHAR(100) NOT NULL |
|    admin_flag    |    BOOLEAN NOT NULL   |
|   created_date   |   TIMESTAMP NOT NULL  |
|   updated_date   |   TIMESTAMP NOT NULL  |

#### Block

|    - columns     |         - Type        |
|:----------------:|:---------------------:|
|       id         |   SERIAL PRIMARY KEY  |
|   block_number   |    integer NOT NULL   |
|    block_name    |      VARCHAR(100)     |
|   created_date   |   TIMESTAMP NOT NULL  |
|   updated_date   |   TIMESTAMP NOT NULL  |


#### Shelf

|    - columns     |                 - Type                 |
|:----------------:|:--------------------------------------:|
|       id         |          SERIAL PRIMARY KEY            |
|   Shelf_number   |           integer NOT NULL             |
|    Shelf_name    |             VARCHAR(100)               |
|     block_id     | integer REFERENCES blocks(id) NOT NULL |
|   created_date   |          TIMESTAMP NOT NULL            |
|   updated_date   |          TIMESTAMP NOT NULL            |

<!-- #### Orders Products

|  - columns |                  - Type                  |
|:----------:|:----------------------------------------:|
|     id     |            SERIAL PRIMARY KEY            |
|  order_id  |  integer REFERENCES orders(id) NOT NULL  |
| product_id | integer REFERENCES products(id) NOT NULL |
|  quantity  |             integer NOT NULL             | -->
