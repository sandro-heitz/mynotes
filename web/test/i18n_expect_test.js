
// https://github.com/mjackson/expect
import expect from 'expect'

import { getParameterByName } from '../app/common/utils.js';


describe('getParameterByName', () => {
    describe('#lang', () => {
        it ('should return undefined if url is undefined', function() {
            let res = getParameterByName('lang', undefined);
            expect(res).toNotExist();
        });
        it ('should return undefined if query does not exist', () => {
            let res = getParameterByName('lang', 'http://test.com');
            expect(res).toNotExist();
        });
        it ('should return undefined if query param does not exist', () => {
            let res = getParameterByName('lang', 'http://test.com?test=eins');
            expect(res).toNotExist();
        });
        it ('should return the value if query param exists', () => {
            let res = getParameterByName('lang', 'http://test.com?lang=eins');
            expect(res).toBe('eins');
        });
        it ('should return the value if query param exists (anyhow where is query)', () => {
            let res = getParameterByName('lang', 'http://test.com?lang=eins&test=zwei');
            expect(res).toBe('eins');
        });
        it ('should return the value if query param exists (anyhow where is query)', () => {
            let res = getParameterByName('lang', 'http://test.com?test=zwei&lang=eins');
            expect(res).toBe('eins');
        });
        it ('should return the value if query param exists (anyhow where is query)', () => {
            let res = getParameterByName('lang', 'http://test.com?test=zwei&lang=eins&ende=drei');
            expect(res).toBe('eins');
        });
    });
});
