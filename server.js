const express = require('express')
, bodyParser = require('body-parser')

var userCtrl = require('./userCtrl.js')

var app = module.exports = express()

app.use(bodyParser.json())

// app.get('url', function(req, res) {
//   var response = userCtrl.methodName(/*arguments if needed. eg: req.params.id*/);

//   res.status(/*status needed to make test work*/).send(response);
// });

app.get('/api/users', function(req, res, next){
   var response = userCtrl.readAll()
   res.status(200).json(response)
})

app.get('/api/users/:id', function(req, res, next){
   var response = userCtrl.findUserById(req.params.id)
   res.status(200).json(response)
})

app.get('/api/admins', function(req, res, next){
   var response = userCtrl.getAdmins()
   res.status(200).json(response)
})

app.get('/api/nonadmins', function(req, res, next){
   var response = userCtrl.getNonAdmins()
   res.status(200).json(response)
})

app.put('/api/users/:id', function(req, res, next){
   var response = userCtrl.updateUser(req.params.id, req.body)
   res.status(200).json(response)
})

app.post('/api/users', function(req, res, next){
   var response = userCtrl.createUser(req.body)
   res.status(200).json(response)
})

app.delete('/api/users/:id', function(req, res, next){
   var response = userCtrl.removeUser(req.params.id)
   res.status(200).json(response)
})


// app.listen(3000, function(){
//    console.log("Listening on 3000")
// })

module.exports = app