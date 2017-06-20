var users = require('./users.js')

// methodName: function(/*Parameters here if input is needed*/) {
//     // Find/Add/Update/Delete something
//     return somethingArray; // Or null if it is required.
//   }

//     "id": 1,
//     "first_name": "Jesse",
//     "last_name": "Stone",
//     "email": "jstone0@hatena.ne.jp",
//     "gender": "Male",
//     "language": "klingon",
//     "age": 49,
//     "city": "Scranton",
//     "state": "Pennsylvania",
//     "type": "user",
//     "favorites": [
//       "angular",
//       "html",
//       "css",
//       "react"
//     ]
  

module.exports = {
   readAll: function() {
      return users.find(null, null)
   },

   findUserById: function(userId){
      return users.findOne('id', userId)
   },

   getAdmins: function(key, value){
      return users.find('type', 'admin')
   },

   getNonAdmins: function(key, value){
      return users.find('type', 'user')
   },

   getUsersByFavorite: function(val){
      var allUsers = users.find(null, null)
      var usersWithFavorite = allUsers.filter(function(user){
         return (user.favorites.indexOf(val) != -1)
      })
      return usersWithFavorite
   },

   getUsersByAgeLimit: function(limit){
      var allUsers = users.find(null, null)
      var usersUnderAge = allUsers.filter(function(user){
         return (user.age <= limit)
      })
      return usersUnderAge
   },

   findUserByQuery: function(query, val){
      return users.find(query, val)
   },

   createUser: function(user){
      return users.add(user)
   },

   updateUser: function(val, update){
      return users.update('id', val, update)
   },

   removeUser: function(userId){
      return users.remove('id', userId)
   }


}