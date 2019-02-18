var userName = "hao";
var time = Date.parse(new Date());
var data = {
    "username": userName,
    "registTime": time
};
var db = connect('hao');
db.user.insert(data);
print('insert success');