var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './shuffle'));


describe('#shuffle', function () {
  it('exists', function () {
    expect(_.shuffle).to.be.a('function');
  });
  it('should not return original array', function () {
    expect(_.shuffle([1,2,3,4,5])).to.not.eql([1,2,3,4,5]);
  });
});