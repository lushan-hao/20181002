var modify = {
    findAndModify: 'user',
    query: {name: 'xiecheng'},                   //查询
    update: {$set: {age: 32}},
    new: true                           //true修改之后的结果 ，false修改之前的结果
};

var result = db.runCommand(modify);                //跑
printjson(result);                                 //格式化输出


//数据查找

db.user.find(
    {age: {$gte: 20, $lte: 30}},   //大于，小于
    {name: true, age: true, _id: false}
)

db.user.find(
    {age: { $in: [20, 25]}},      // 之间
    {name: true, age: true, _id: false}
)


db.user.find({                     //and和 or或 not非
    $and: [
        {age: { $gte: 20}},
        {'pc.brand': 'IBM'}
    ]},
    {name: true, age: true, _id: false}
)

//数组查询

db.user.find(
    {hobby: '篮球'},              //'篮球'外面有中括号代表只包括篮球，没有中括号代表其中有篮球      {hobby: ['篮球']}
    {name: true, age: true, _id: false}
);

db.user.find(
    {hobby: {$in: ['篮球', '敲代码']}},                //$all全都满足篮球，敲代码  $in有篮球或者敲代码
    {name: true, age: true, _id: false}
);


db.user.find(
    {hobby: {$size: 3}},                        //$size根据数组里面数据个数进行查找
    {name: true, age: true, _id: false}
);



db.user.find(
    {},                                               //分页limit查几条 skip从哪条+1开始查 sort按...查找
    {name: true, age: true, _id: false}
).limit(10).skip(20).sort({age: -1})



