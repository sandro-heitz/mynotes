
// http://chaijs.com/
import chai from 'chai';

import { getParameterByName } from '../app/common/utils';

let should = chai.should();
let expect = chai.expect;

describe('getParameterByName', () => {
    describe('#lang', () => {
        it ('should return undefined if url is undefined', function() {
            let res = getParameterByName('lang', undefined);
            should.not.exist(res);
        });
        it ('should return undefined if query does not exist', () => {
            let res = getParameterByName('lang', 'http://test.com');
            should.not.exist(res);
        });
        it ('should return undefined if query param does not exist', () => {
            let res = getParameterByName('lang', 'http://test.com?test=eins');
            should.not.exist(res);
        });
        it ('should return the value if query param exists', () => {
            let res = getParameterByName('lang', 'http://test.com?lang=eins');
            expect(res).to.equal('eins');
        });
        it ('should return the value if query param exists (anyhow where is query)', () => {
            let res = getParameterByName('lang', 'http://test.com?lang=eins&test=zwei');
            expect(res).to.equal('eins');
        });
        it ('should return the value if query param exists (anyhow where is query)', () => {
            let res = getParameterByName('lang', 'http://test.com?test=zwei&lang=eins');
            expect(res).to.equal('eins');
        });
        it ('should return the value if query param exists (anyhow where is query)', () => {
            let res = getParameterByName('lang', 'http://test.com?test=zwei&lang=eins&ende=drei');
            expect(res).to.equal('eins');
        });
    });
});
