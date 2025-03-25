import { expect, test } from '@jest/globals';
import * as process from 'process';
import { FuturesApi } from '../api';

const settle = 'usdt';
const apiKey = process.env.NEXT_PUBLIC_GATEIO_API_KEY;
const secret = process.env.NEXT_PUBLIC_GATEIO_API_SECRET;

test('listFuturesContracts()', async () => {
    const api = new FuturesApi();
    const { response, body } = await api.listFuturesContracts(settle, {
        limit: 2,
        offset: 0,
    });
    expect(response).toBeDefined();
    expect(body).toBeDefined();
    console.log(body);
});