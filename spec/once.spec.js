var path = require('path');
var { expect } = require('chai');
var sinon = require('sinon');
var _ = require(path.join(__dirname, '..', 'src', './once'));


describe('#once', function () {
  it('exists', function () {
    expect(_.once).to.be.a('function');
  });
  it('should run function once which is passed to it', function () {
   var spy = sinon.spy(); 
   var spyonce = _.once(spy);
   spyonce();
   spyonce();
   spyonce();
   spyonce();
   expect(spy.callCount).to.equal(1);
 });
});