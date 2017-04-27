
import chai from 'chai';

describe('Array', () => {
    describe('#indexOf', () => {
        it ('should return a number if value is not present', function() {
            let res = [1,2,3].indexOf(4);
            // assert with chai
            chai.expect(res).to.be.a('number');
            chai.expect(res).to.equal(-1);
        });
        it ('should return a number if value is present', () => {
            let res = [1,2,3].indexOf(2);
            // assert with chai
            chai.assert.typeOf(res, 'number');
            chai.expect(res).to.equal(1);
        });
    });
});
