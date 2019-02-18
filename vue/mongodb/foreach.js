var db = connect('hao');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
});