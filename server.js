var express=require("express"),
    app=express(),
    mongojs=require("mongojs"),
    db=mongojs("employeedetails",["employeedetails"]),
    bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/employeedetails",function(request,response) {
    


    db.employeedetails.find(function(err,data) {
        console.log(data);
        response.json(data);
    });
});
app.post("/employeedetails" , function(req , res) {
    console.log(req.body);
    db.employeedetails.insert(req.body, function(err , data) {
        res.json(data);
    })
})
app.put("/employeedetails/:id" , function(req , res) {
    var id = req.params.id;
    // console.log(req.body.name);
    db.employeedetails.findAndModify({query : {_id : mongojs.ObjectId(id)},
        update : {$set : {name : req.body.name , email : req.body.firstName , number : req.body.phoneNumber}},
        new : true} ,function(err,data) {
            res.json(data);
        }
    );
});
app.listen(8700,function() {
    console.log("Server running on port 8700");
})