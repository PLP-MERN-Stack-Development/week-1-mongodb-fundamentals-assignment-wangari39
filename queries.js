// Basic CRUD Operations
db.books.find({ genre: "Fiction" });
db.books.find({ published_year: { $gt: 2015 } });
db.books.find({ author: "George Orwell" });
db.books.updateOne({ title: "Dune" }, { $set: { price: 16.49 } });
db.books.deleteOne({ title: "1984" });

// Advanced Queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });
db.books.find().sort({ price: 1 });
db.books.find().sort({ price: -1 });
db.books.find().skip(0).limit(5);
db.books.find().skip(5).limit(5);

// Aggregation Pipeline
db.books.aggregate([{ $group: { _id: "$genre", avg_price: { $avg: "$price" } } }]);
db.books.aggregate([{ $group: { _id: "$author", count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 1 }]);
db.books.aggregate([{
  $group: {
    _id: {
      $concat: [
        { $substr: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0, 4] },
        "s"
      ]
    },
    count: { $sum: 1 }
  }
}]);

// Indexing
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: -1 });
db.books.find({ title: "Dune" }).explain("executionStats");