var path = require('path');
var {
    expect
} = require('chai');

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
    it('is an object', function () {
        expect(_).to.be.an('object');
    });

    function isEven(num) {
        return num % 2 === 0;
    }

    function isGreater4(num) {
        return num > 4;
    }
    // Identity
    describe('#identity', function () {
        it('is a function', function () {
            expect(_.identity).to.be.a('function');
        });
        it('it should return first argument', function () {
            var result = _.identity('s', 3);
            expect(result).to.eql('s');
        });
    });
    // First method
    describe('#first', function () {
        it('is a function', function () {
            expect(_.first).to.be.a('function');
        });
        it('it should return first element of array if num is undefined', function () {
            var result = _.first([1, 2, 3, 4, 5]);
            expect(result).to.eql(1);
        });
        it('it should return nth elements of array', function () {
            var result = _.first([1, 2, 3, 4, 5], 2);
            expect(result).to.eql([1, 2]);
        });
        it('it should return nth elements of array', function () {
            var result = _.first([{
                name: 'kami'
            }, {
                name: 'wassan'
            }, {
                name: 'men'
            }], 2);
            expect(result).to.eql([{
                name: 'kami'
            }, {
                name: 'wassan'
            }]);
        });
    });
    // last method
    describe('#last', function () {
        it('is a function', function () {
            expect(_.last).to.be.a('function');
        });
        it('it should return last element of array if num is undefined', function () {
            var result = _.last([1, 2, 3, 4, 5]);
            expect(result).to.eql(5);
        });
        it('it should return last nth elements of array', function () {
            var result = _.last([1, 2, 3, 4, 5], 2);
            expect(result).to.eql([4, 5]);
        });
        it('it should return last nth elements of array', function () {
            var result = _.last([{
                name: 'kami'
            }, {
                name: 'wassan'
            }, {
                name: 'men'
            }], 2);
            expect(result).to.eql([{
                name: 'wassan'
            }, {
                name: 'men'
            }]);
        });
    });
    // each method
    describe('#Each', function () {
        it('is a function', function () {
            expect(_.each).to.be.a('function');
        });
        it('calls the function as many times as items in the array', function () {
            var count = 0;

            function incrementCount() {
                count++;
            }
            _.each([1, 2, 3], incrementCount);
            expect(count).to.equal(3);
        });
        it('calls the function with each item of the array as the first argumet', function () {
            var count = 0;

            function incrementCount() {
                count++;
            }
            _.each([1, 2, 3], incrementCount);
            expect(count).to.equal(3);
        });
        it('calls the function with each item of the array as the first argumet', function () {
            var basket = [];

            function putItemInBasket(item) {
                basket.push(item);
            }
            _.each([1, 2, 3], putItemInBasket);
            expect(basket).to.eql([1, 2, 3]);
        });

        it('calls the function with the index of each item as the second argumet', function () {
            var basket = [];

            function putIndexInBasket(item, index) {
                basket.push(index);
            }
            _.each([1, 2, 3], putIndexInBasket);
            expect(basket).to.eql([0, 1, 2]);
        });

    });
    // indexOf method
    describe('#indexOf', function () {
        it('is a function', function () {
            expect(_.indexOf).to.be.a('function');
        });
        it('it should return index if found otherwise -1', function () {
            var result = _.indexOf([1, 2, 3, 4, 5], 3);
            expect(result).to.eql(2);
        });
        it('it should return -1', function () {
            var result = _.indexOf([1, 2, 3, 4, 5], 7);
            expect(result).to.eql(-1);
        });
        it('it should return index if found otherwise -1', function () {
            var result = _.indexOf([1, 2, 3, 4, 5], 1);
            expect(result).to.eql(0);
        });
        it('it should return index if found and start from given index if third argument is passed', function () {
            var result = _.indexOf([1, 2, 3, 4, 5, 1], 1, 2);
            expect(result).to.eql(5);
        });
    });
    // Filter method
    describe('#filter', function () {
        it('is a function', function () {
            expect(_.filter).to.be.a('function');
        });
        it('should return an array', function () {
            var result = _.filter([1, 2, 3, 4, 5], isEven);
            expect(result).to.be.an('array');
        });
        it('should return an array of even numbers', function () {
            var result = _.filter([1, 2, 3, 4, 5], isEven);
            expect(result).to.eql([2, 4]);
        });
    });
    // reject method
    describe('#reject', function () {
        it('is a function', function () {
            expect(_.reject).to.be.a('function');
        });
        it('should return an array', function () {
            var result = _.reject([1, 2, 3, 4, 5], isEven);
            expect(result).to.be.an('array');
        });
        it('rejects out of the array the elements that don\'t pass the condition of the function', function () {
            var result = _.reject([1, 2, 3, 4, 5], isEven);
            expect(result).to.eql([1, 3, 5]);
        });
        it('rejects out of the array the elements that greater than 4', function () {
            var result = _.reject([1, 2, 3, 4, 5], isGreater4);
            expect(result).to.eql([1, 2, 3, 4]);
        });
    });
    // uniq method
    describe('#uniq', function () {
        it('is a function', function () {
            expect(_.uniq).to.be.a('function');
        });
        it('it should return unique elements only', function () {
            var result = _.uniq([1, 2, 3, 4, 5, 2, 4, 5]);
            expect(result).to.eql([1, 2, 3, 4, 5]);
        });
        it('should return an array', function () {
            var result = _.uniq([1, 2, 3, 4, 5]);
            expect(result).to.be.an('array');
        });
        it('It should return an array of unique elements', function () {
            var result = _.uniq(['a', 'b', 'c', 'c', 'b']);
            expect(result).to.eql(['a', 'b', 'c']);
        });
    });
});