import { beforeAll, describe, test } from '@jest/globals';
import { ApiClient } from '../api/apiClient';
import { WithdrawalApi } from '../api/withdrawalApi';

let api: WithdrawalApi;

beforeAll(() => {
    const apiKey = process.env.GATEIO_API_KEY ?? '';
    const secret = process.env.GATEIO_API_SECRET ?? '';
    console.log(apiKey, secret);

    const client = new ApiClient();
    client.setApiKeySecret(apiKey!, secret!);
    api = new WithdrawalApi(client);
});

describe('WithdrawalApi', () => {
    /**
     * Requirement
     * - Both should be main accounts
     * - Minimum withdrawal amount: 1 USDT
     * - Sender account's api key should have a withdrawal permission
     */
    test.skip('withdrawPushOrder(mainUid)', async () => {
        try {
            const { response: res, body } = await api.withdrawPushOrder({
                // uid must be a main account
                receiveUid: 123456789,
                currency: 'USDT',
                // Minimum withdrawal amount: 1 USDT
                amount: '1',
            });
            console.log(res.status);
            console.log(body);
        } catch (e) {
            console.log(e);
        }
    });
});