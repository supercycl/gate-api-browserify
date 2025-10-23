import { describe, expect, test } from "@jest/globals";
import * as process from 'process';
import { ApiClient, FuturesApi } from '../api';

const settle = 'usdt';
const apiKey = process.env.NEXT_PUBLIC_GATEIO_API_KEY;
const secret = process.env.NEXT_PUBLIC_GATEIO_API_SECRET;

describe('FuturesApi', () => {
    test('listFuturesContracts()', async () => {
        const api = new FuturesApi();
        const { response, body } = await api.listFuturesContracts(settle, {
            limit: 2,
            offset: 0,
        });
        expect(response.status).toBe(200);
        expect(body).toBeDefined();
        console.log(body);
    });

    test('listFuturesOrderBook()', async () => {
        const api = new FuturesApi();
        const { response, body } = await api.listFuturesOrderBook(settle, 'BTC_USDT', {
            interval: '0.1',
            limit: 5,
            withId: true,
        });
        expect(response.status).toBe(200);
        expect(body).toBeDefined();
        console.log(body);
    });

    test.skip('futuresFee()', async () => {
        const client = new ApiClient();
        client.setApiKeySecret(apiKey!, secret!);

        const contracts = [
            'BTC_USDT', 'ETH_USDT', 'SOL_USDT', 'ICX_USDT'
        ];
        const api = new FuturesApi(client);
        try {
            for (const contract of contracts) {
                const { response, body } = await api.getFuturesFee('usdt', {
                    contract
                });

                expect(response.status).toBe(200);
                expect(body).toBeDefined();
                // console.log(response);
                console.log(JSON.stringify(body));
            }
        } catch (e) {
            console.log(e);
        }
    });
})
