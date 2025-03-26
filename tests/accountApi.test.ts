import { describe, expect, test } from '@jest/globals';
import * as process from 'process';
import { ApiClient, AccountApi } from "../api";

const apiKey = process.env.NEXT_PUBLIC_GATEIO_API_KEY ?? '';
const secret = process.env.NEXT_PUBLIC_GATEIO_API_SECRET ?? '';

describe('AccountApi', () => {
    test.skip('getAccountDetail()', async () => {
        const client = new ApiClient();
        client.setApiKeySecret(apiKey!, secret!);
        const api = new AccountApi(client);

        const { response, body } = await api.getAccountDetail();
        expect(response.status).toBe(200);
        expect(body.userId).toBeDefined();
        console.log(body);
    });
});
