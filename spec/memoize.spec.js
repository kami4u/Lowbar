var path = require('path');
var {
    expect
} = require('chai');
var sinon = require('sinon');
var _ = require(path.join(__dirname, '..', 'src', './memoize'));


describe('memoize()', function () {
    it('exists', function () {
        expect(_.memoize).to.be.a('function');
    });
    it('should run function which is passed to it', function () {
        var spy = sinon.stub();
        spy.returns(1);
        var memoizeSpy = _.memoize(spy);
        memoizeSpy(1);
        memoizeSpy(1);
        expect(spy.callCount).to.equal(1);
        memoizeSpy(2);
        expect(spy.callCount).to.equal(2);
    });
});