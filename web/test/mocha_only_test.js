
import assert from 'assert';

describe('Array', () => {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            // node assert
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
    describe('#indexOf()', function() {
        it('should return 0 on checking for 1', function() {
            // node assert
            assert.equal(0, [1,2,3].indexOf(1));
        });
    });
});

