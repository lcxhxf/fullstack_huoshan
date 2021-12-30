var divid = require('./divid')
var expect = require('chai').expect // 断言库

describe('测试除法', function() {
   it('4 除 2 应该等于 2 ', function() {
        expect(divid(4, 2)).to.be.equal(2)
   }) 
   it('分母不能为0', function() {
    expect(divid(4, 0)).to.be.
}) 
})