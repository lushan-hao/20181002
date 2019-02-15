import Mock from 'mockjs'
import data from './data.json'

Mock.mock('https://haoluweb.com',{data:data.List});