db = db.getSiblingDB('plp_bookstore');

db.books.insertMany([
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 15.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 13.49,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 17.99,
    in_stock: false,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    published_year: 1965,
    price: 14.99,
    in_stock: true,
    pages: 412,
    publisher: "Ace"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 11.99,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 12.50,
    in_stock: false,
    pages: 310,
    publisher: "HarperCollins"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    published_year: 2020,
    price: 16.99,
    in_stock: true,
    pages: 304,
    publisher: "Viking"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 9.99,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 18.99,
    in_stock: false,
    pages: 443,
    publisher: "Harper"
  }
]);