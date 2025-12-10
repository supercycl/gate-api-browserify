import { describe, expect, test } from '@jest/globals';
import { getPathnameFromUrl } from '../utils/utils';

test('getPathnameFromUrl()', () => {
    const args = [
        { url: 'http://www.example.com/user?id=1234', expected: '/user' },
        { url: 'https://www.example.com/user?id=1234#info', expected: '/user' },
        { url: 'https://www.example.com/team/user?id=1234#info', expected: '/team/user' },
        { url: '/user?id=1234#info', expected: '/user' },
        {
            url: 'http://www.example.com/api/v4/futures/usdt/positions/%E5%B8%81%E5%AE%89%E4%BA%BA%E7%94%9F_USDT',
            expected: '/api/v4/futures/usdt/positions/%E5%B8%81%E5%AE%89%E4%BA%BA%E7%94%9F_USDT',
        },
        { url: 'user?id=1234#info', error: true },
        { url: '', error: true },
        { url: '   ', error: true }
    ]

    for (const arg of args) {
        if (arg.error) {
            expect(() => { getPathnameFromUrl(arg.url) }).toThrowError(TypeError);
        } else {
            const pathname = getPathnameFromUrl(arg.url);
            expect(pathname).toEqual(arg.expected);
        }
    }
});