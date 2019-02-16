import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.weichuang.com/getList', {data: data.list});

Mock.mock('http://www.weichuang.com/getUser', {
    'name|2': 'weichuang',
    'age|18-35': 20
});
