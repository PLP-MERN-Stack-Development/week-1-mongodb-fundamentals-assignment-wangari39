# PLP Bookstore MongoDB Project

## Overview
This project demonstrates MongoDB CRUD operations, advanced queries, aggregation pipelines, and indexing on a `books` collection inside a `plp_bookstore` database.

## Requirements
- MongoDB (local or MongoDB Atlas)
- MongoDB Shell (mongosh) or Compass

## Setup Instructions

1. **Insert Books:**
   Run `insert_books.js` in your MongoDB shell:
   ```bash
   mongosh < insert_books.js
   ```

2. **Run Queries:**
   You can execute commands from `queries.js` using mongosh or in MongoDB Compass.

3. **Indexing:**
   The indexing commands are included in `queries.js`. Use `explain()` to see performance improvements.

4. **Screenshot:**
   A screenshot of the data inside MongoDB Compass is included as `screenshot.png`.

## File Descriptions
- `insert_books.js`: Script to populate the books collection.
- `queries.js`: Contains all CRUD, advanced, aggregation, and indexing queries.
- `README.md`: Setup and run instructions.
- `screenshot.png`: Visual confirmation of the collection in Compass or Atlas.

## Author
Pauline Wangari Irungu