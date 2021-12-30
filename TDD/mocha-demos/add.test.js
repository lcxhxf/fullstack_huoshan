// 测试脚本里应该有一个或者多个describe
// 每个describe里应该包括一个或多个it
// describe（测试套件，表示一组相关的测试。第一个参数为测试套件名称，第二个是实际执行的函数）
// it块称为“用例测试”，表示应该单独的测试 第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数
var twoNumberAdd = require('./add')
var expect = require('chai').expect // 断言库

describe('两数相加函数测试', function() {
    it('1加1应该等于2', function() {
        expect(twoNumberAdd(1,1)).to.be.equal(2)
    })

    it('0加任何数等于那个数', function() {
        expect(twoNumberAdd(0,2)).to.be.equal(2)
    })

    it('字符串数字和任何数相加，要等于值相加', function() {
        expect(twoNumberAdd(0,2)).to.be.equal(2)
    })
})