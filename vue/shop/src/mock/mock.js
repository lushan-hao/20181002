import Mock from 'mockjs'
import data from './data.json'

Mock.mock('https://haoluweb.com/get',{data:data.List});