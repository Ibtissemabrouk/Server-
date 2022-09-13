//! les syntaxes et les filtres

const { isObjectIdOrHexString } = require("mongoose")
const { db } = require("./models/user")


//*insert many documents :
db.collection.insertMany([{doc1},{doc2},{doc3},.......,{docn}])
//* insert one doc:
db.collection.insertOne({document})


//* find document:
db.collection({filter},{rows to show})
//*filter = {} means empty filter,
//* so we return all documents
db.collection.find({},{age : 1, adress : 1})
//* 1 = ascending order ; -1 = desending order

//! find one doc 
db.collection.findOne({_id:584558f4g8484f4ff})
db.collection.findOne({title : my article})

//* count how many results we returned
db.collection.find().count()

//* return the only 3 documents of our request
db.collection.find().limit(3)

//*sort the result 
db.collection.find().sort({the field we gonna sort by})
bd.collection.find().sort({age : 1}) // 1 = ascending order ; -1 = desendeng order

//* $in find book a l'age de [20,21,22]   & $nin find book a l'age different de [20,21,22] and $or
db.books.find({AGE : {$in : [20,21,22]}})
// c'est la meme syntaxe
db.books.find({$or : [{age :20},{age :21},{age :22}]})


//* get all books which 
db.books.find({rating : {$gt : 7}})
//* their rating is grater than 7,
//* not including 7 rating
{$lte : 10} = less than or aqual to 10
{$gte : 10} = grater than or aqual to 10


//! delete docs
db.books.deleteOne({_id : ObjectId("15454611d64554f62f6")})
db.books.deleteMany({author : "ayoub"})


// ! update Many , update every book with author called ayoub
db.books.updateMany({author : "ayoub"}, {$set : {author : requestAnimationFrame.body}})

// * Update docs
$set = set new_data ;
$inc = increament SVGAnimatedInteger;
$pull = delete from Array;
$push = add to Array.
db.books.updateOne({_id: ObjectId("265")}{$push : {genres:"fantasy"}} )