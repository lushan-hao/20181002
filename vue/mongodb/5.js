function getTel() {
    var prefixArr = ['130', '131', '132', '133', '135', '186', '187', '188', '199', '155'];
    var tel = prefixArr[parseInt(Math.random() * 10)];                //随机取一个
    for (var i = 0; i < 8; i++) {
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}
// console.log(getTel());
var startTime = (new Date()).getTime();         //1970年到现在的所有毫秒数
var db = connect('hao');
var tempInfo = [];
for (var i = 0; i < 1000000; i++) {
    tempInfo.push({
        logintime: new Date(),
        tel: getTel()
    });
}
db.tel.insert(tempInfo);
var runTime = new Date().getTime() - startTime;
print('run time is ' + runTime + 'ms');