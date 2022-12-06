<!-- # API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.  -->

## API Endpoints

For example: `http://localhost:port:3000`

#### Root

| - FUNCTIONS | - Methos | - Routes |      - Description       | - Token Required | - Admin Required |
| :---------: | :------: | :------: | :----------------------: | :--------------: | :--------------: |
|    -----    |   GET    | /library | Welcome Message for user |      FALSE       |      FALSE       |

#### Users

|      - FUNCTIONS      | - Methos |     - Routes      |        - Description        | - Token Required | - Admin Required |
| :-------------------: | :------: | :---------------: | :-------------------------: | :--------------: | :--------------: |
|      createUser       |   POST   |   /users/signup   |       Create new user       |      FALSE       |      FALSE       |
|   authenticateUser    |   GET    |   /users/login    |        login a user         |      FALSE       |      FALSE       |
|        getMine        |   GET    |     /users/me     |     Show my information     |       TRUE       |      FALSE       |
|     getManyUsers      |   GET    |      /users       |       Show all users        |       TRUE       |       TRUE       |
|      getOneUser       |   GET    |    /users/:id     | Search for one user with ID |       TRUE       |       TRUE       |
|      updateUser       |   PUT    |    /users/:id     |    Update a user with ID    |       TRUE       |      FALSE       |
|      deleteUser       |  DELETE  |    /users/:id     |    Delete a user with ID    |       TRUE       |       TRUE       |
| getAllUnAvilableUsers |   GET    | /users/unavilable |  Get all unavilable users   |       TRUE       |       TRUE       |

#### Blocks

|  - FUNCTIONS  | - Methos |  - Routes   |        - Description         | - Token Required | Admin Required |
| :-----------: | :------: | :---------: | :--------------------------: | :--------------: | :------------: |
|  createBlock  |   POST   |   /blocks   |       Create new block       |       TRUE       |      TRUE      |
| getManyBlocks |   GET    |   /blocks   |       Show all blocks        |       TRUE       |     FALSE      |
|  getOneBlock  |   GET    | /blocks/:id | Search for one block with ID |       TRUE       |     FALSE      |
|  updateBlock  |   PUT    | /blocks/:id |    Update a block with ID    |       TRUE       |      TRUE      |
|  deleteBlock  |  DELETE  | /blocks/:id |    Delete a block with ID    |       TRUE       |      TRUE      |

#### Shelfs

|     - FUNCTIONS      | - Methos |     - Routes      |           - Description            | - Token Required | Admin Required |
| :------------------: | :------: | :---------------: | :--------------------------------: | :--------------: | :------------: |
|     createShelf      |   POST   |      /shelfs      |          Create new shelf          |       TRUE       |      TRUE      |
|    getManyShelfs     |   GET    |      /shelfs      |          Show all shelfs           |       TRUE       |     FALSE      |
|     getOneShelf      |   GET    |    /shelfs/:id    |    Search for one shelf with ID    |       TRUE       |     FALSE      |
| getShelfsWithBlockId |   GET    | /shelfs/block/:id | Search for one shelf with block ID |       TRUE       |     FALSE      |
|     updateShelf      |   PUT    |    /shelfs/:id    |       Update a shelf with ID       |       TRUE       |      TRUE      |
|     deleteShelf      |  DELETE  |    /shelfs/:id    |       Delete a shelf with ID       |       TRUE       |      TRUE      |

#### Books

|  - FUNCTIONS  | - Methos |      - Routes       |         - Description         | - Token Required | Admin Required |
| :-----------: | :------: | :-----------------: | :---------------------------: | :--------------: | :------------: |
|  createBook   |   POST   |       /books        |        Create new book        |       TRUE       |     FALSE      |
| getManyBooks  |   GET    |       /books        |        Show all books         |      FALSE       |     FALSE      |
| getUserBooks  |   GET    | /books/user/mybooks |         Show my books         |       TRUE       |     FALSE      |
| getBookByName |   GET    |     /books/name     | Search for one book with Name |      FALSE       |     FALSE      |
|  getBookById  |   GET    |     /books/:id      |  Search for one book with ID  |      FALSE       |     FALSE      |
|  updateBook   |   PUT    |     /books/:id      |     Update a book with ID     |       TRUE       |     FALSE      |
|  deleteBook   |  DELETE  |     /books/:id      |     Delete a book with ID     |       TRUE       |      TRUE      |

## Data Shapes

#### User

|  - columns   |        - Type         |
| :----------: | :-------------------: |
|      id      |  SERIAL PRIMARY KEY   |
|  first_name  | VARCHAR(100) NOT NULL |
|  last_name   | VARCHAR(100) NOT NULL |
|    email     | VARCHAR(100) NOT NULL |
|   password   | VARCHAR(100) NOT NULL |
|  admin_flag  |   BOOLEAN NOT NULL    |
| created_date |  TIMESTAMP NOT NULL   |
| updated_date |  TIMESTAMP NOT NULL   |

#### Block

|  - columns   |       - Type       |
| :----------: | :----------------: |
|      id      | SERIAL PRIMARY KEY |
| block_number |  integer NOT NULL  |
|  block_name  |    VARCHAR(100)    |
| created_date | TIMESTAMP NOT NULL |
| updated_date | TIMESTAMP NOT NULL |

#### Shelf

|  - columns   |                 - Type                 |
| :----------: | :------------------------------------: |
|      id      |           SERIAL PRIMARY KEY           |
| Shelf_number |            integer NOT NULL            |
|  Shelf_name  |              VARCHAR(100)              |
|   block_id   | integer REFERENCES blocks(id) NOT NULL |
| created_date |           TIMESTAMP NOT NULL           |
| updated_date |           TIMESTAMP NOT NULL           |

#### Books

|      - columns       |                 - Type                 |
| :------------------: | :------------------------------------: |
|          id          |           SERIAL PRIMARY KEY           |
|      book_code       |          VARCHAR(100) UNIQUE           |
|      book_name       |      VARCHAR(100) UNIQUE NOT NULL      |
|        author        |         VARCHAR(100) NOT NULL          |
|   number_of_copies   |            integer NOT NULL            |
|   number_of_pages    |            integer NOT NULL            |
|   number_of_parts    |                integer                 |
|    name_of_series    |              VARCHAR(100)              |
|      conclusion      |                  text                  |
|       user_id        | integer REFERENCES users(id) NOT NULL  |
|       shelf_id       | integer REFERENCES shelfs(id) NOT NULL |
| book_number_in_shelf |            integer NOT NULL            |
|     created_date     |           TIMESTAMP NOT NULL           |
|     updated_date     |           TIMESTAMP NOT NULL           |
