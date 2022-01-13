const { deleteMany } = require("./node-mongodb-todo/models/todo")

db.todomodels.find().sort({record:1})
show dbs
db.todomodels.find({"record":"bbb"}) //find by record
db.newemp.update({empname:"manager"},{$set:{"empname":"new_manager"}},{multi:true}) //update multiple records
db.todomodels.find({"record":{$gt:1}}) //for greater than
db.todomodels.find({"record":{$lt:1}}) //for less than
db.todomodels.find({"record":{$gte:1}}) //for greater than or equal to
db.todomodels.find({"record":{$lte:1}}) //for less than or equal to
db.todomodels.find({"record":{$ne:1}}) //for not equal to
db.todomodels.find({"record":{$in:[1,2,3]}}) //for in
db.todomodels.find({"record":{$nin:[1,2,3]}}) //for not in
db.todomodels.find({"record":{$mod:[2,1]}}) //for mod
db.todomodels.find({"record":{$exists:true}}) //for exists
db.todomodels.find({"record":{$type:"string"}}) //for type
db.todomodels.find({"record":{$size:1}}) //for size
db.todomodels.find({"record":{$regex:"^a"}}) //for regex
db.todomodels.find({"record":{$text:{$search:"a"}}}) //for text search
db.todomodels.find({"record":{$where:"this.record>1"}}) //for where
db.todomodels.find({"record":{$geoWithin:{$center:[10,10,10]}}}) //for geoWithin
db.todomodels.explain("executionStats").find({"record":"bbb"}) //get the number of  records it searched
db.Student.aggregrate([{$match:{"Section":{$gt:20}}},{$group:{_id:"$age",count:{$sum:1}}}]) //for group
db.Student.aggregrate([{ "$project": { _id:0, "name": 1, "age": 1, "Section": 1, "marks": { "$sum": "$marks" } } }]) //selecting columns
db.Student.aggregrate([{$match: {"Section":"A"}} , { "$project": { _id:0, "name": 1, "age": 1, "Section": 1 } }]) //selecting columns where section=a
db.Student.aggregrate([{"$group":{"_id":{"Section": "$Section"},"totalMarks":{"$sum":"$Marks"},"Count":{"$sum":1}, "Average": {"$avg": "$Marks"}}}]) //selecting totalmarks of sections id is must




