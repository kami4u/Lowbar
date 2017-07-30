var path = require('path');
var {
    expect
} = require('chai');
var _ = require(path.join(__dirname, '..', 'src', './invoke'));


describe('#invoke', function () {
    it('runs the input function on each item in the array, and returns a list of results', function () {
        var reverse = function () {
            return this.split('').reverse().join('');
        };
        var reversedStrings = _.invoke(['dog', 'cat'], reverse);
        expect(reversedStrings).to.eql(['god', 'tac']);
    });
    it('runs the specified method on each item in the array, and returns a list of results', function () {
        var upperCasedStrings = _.invoke(['dog', 'cat'], 'toUpperCase');
        expect(upperCasedStrings).to.eql(['DOG', 'CAT']);
    });
});