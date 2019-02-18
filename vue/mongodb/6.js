var startTime = (new Date()).getTime();
var db = connect('hao');

var result = db.tel.find({tel: '13518322092'});
result.forEach(res=>printjson(res));

var runTime = new Date().getTime() - startTime;
print('run time is ' + runTime + 'ms');

//57978   1396ms