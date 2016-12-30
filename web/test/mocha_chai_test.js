
import chai from 'chai';

describe('Array', () => {
    describe('#indexOf', () => {
        it ('should return a number if value is not present', function() {
            let res = [1,2,3].indexOf(4);
            chai.expect(res).to.be.a('number');
        });
        it ('should return a number if value is present', () => {
            let res = [1,2,3].indexOf(2);
            chai.assert.typeOf(res, 'number');
        });
    });
});
