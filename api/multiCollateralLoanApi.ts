/**
 * Gate API v4
 * Welcome to Gate.io API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { CollateralAdjust } from '../model/collateralAdjust';
import { CollateralAdjustRes } from '../model/collateralAdjustRes';
import { CollateralCurrentRate } from '../model/collateralCurrentRate';
import { CollateralFixRate } from '../model/collateralFixRate';
import { CollateralLtv } from '../model/collateralLtv';
import { CreateMultiCollateralOrder } from '../model/createMultiCollateralOrder';
import { CurrencyQuota } from '../model/currencyQuota';
import { MultiCollateralCurrency } from '../model/multiCollateralCurrency';
import { MultiCollateralOrder } from '../model/multiCollateralOrder';
import { MultiCollateralRecord } from '../model/multiCollateralRecord';
import { MultiRepayRecord } from '../model/multiRepayRecord';
import { MultiRepayResp } from '../model/multiRepayResp';
import { OrderResp } from '../model/orderResp';
import { RepayMultiLoan } from '../model/repayMultiLoan';
import { ObjectSerializer } from '../model/models';
import { ApiClient, RequestConfig } from './apiClient';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class MultiCollateralLoanApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     *
     * @summary List Multi-Collateral Orders
     * @param opts Optional parameters
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.sort Sort types: time_desc - default sorting by creation time in descending order, ltv_asc - ascending order of ltv, ltv_desc - descending order of ltv.
     * @param opts.orderType Order type, current - query current orders, fixed - query fixed orders. If not specified, default to querying current orders
     */
    public async listMultiCollateralOrders(opts: {
        page?: number;
        limit?: number;
        sort?: string;
        orderType?: string;
    }): Promise<{ response: Response; body: Array<MultiCollateralOrder> }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(opts.sort, 'string');
        }

        if (opts.orderType !== undefined) {
            localVarQueryParameters['order_type'] = ObjectSerializer.serialize(opts.orderType, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<MultiCollateralOrder>>(config, 'Array<MultiCollateralOrder>', authSettings);
    }

    /**
     *
     * @summary Create Multi-Collateral Order
     * @param createMultiCollateralOrder
     */
    public async createMultiCollateral(
        createMultiCollateralOrder: CreateMultiCollateralOrder,
    ): Promise<{ response: Response; body: OrderResp }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/orders';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'createMultiCollateralOrder' is not null or undefined
        if (createMultiCollateralOrder === null || createMultiCollateralOrder === undefined) {
            throw new Error(
                'Required parameter createMultiCollateralOrder was null or undefined when calling createMultiCollateral.',
            );
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(createMultiCollateralOrder, 'CreateMultiCollateralOrder'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<OrderResp>(config, 'OrderResp', authSettings);
    }

    /**
     *
     * @summary Get Multi-Collateral Order Detail
     * @param orderId Order ID returned on successful order creation
     */
    public async getMultiCollateralOrderDetail(
        orderId: string,
    ): Promise<{ response: Response; body: MultiCollateralOrder }> {
        const localVarPath =
            this.client.basePath +
            '/loan/multi_collateral/orders/{order_id}'.replace(
                '{' + 'order_id' + '}',
                encodeURIComponent(String(orderId)),
            );
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error(
                'Required parameter orderId was null or undefined when calling getMultiCollateralOrderDetail.',
            );
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<MultiCollateralOrder>(config, 'MultiCollateralOrder', authSettings);
    }

    /**
     *
     * @summary List Multi-Collateral Repay Records
     * @param type Operation type: repay - Regular repayment, liquidate - Liquidation
     * @param opts Optional parameters
     * @param opts.borrowCurrency Borrowed currency
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.from Start timestamp of the query
     * @param opts.to Time range ending, default to current time
     */
    public async listMultiRepayRecords(
        type: string,
        opts: { borrowCurrency?: string; page?: number; limit?: number; from?: number; to?: number },
    ): Promise<{ response: Response; body: Array<MultiRepayRecord> }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/repay';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling listMultiRepayRecords.');
        }

        opts = opts || {};
        localVarQueryParameters['type'] = ObjectSerializer.serialize(type, 'string');

        if (opts.borrowCurrency !== undefined) {
            localVarQueryParameters['borrow_currency'] = ObjectSerializer.serialize(opts.borrowCurrency, 'string');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<MultiRepayRecord>>(config, 'Array<MultiRepayRecord>', authSettings);
    }

    /**
     *
     * @summary Repay Multi-Collateral Loan
     * @param repayMultiLoan
     */
    public async repayMultiCollateralLoan(
        repayMultiLoan: RepayMultiLoan,
    ): Promise<{ response: Response; body: MultiRepayResp }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/repay';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'repayMultiLoan' is not null or undefined
        if (repayMultiLoan === null || repayMultiLoan === undefined) {
            throw new Error(
                'Required parameter repayMultiLoan was null or undefined when calling repayMultiCollateralLoan.',
            );
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(repayMultiLoan, 'RepayMultiLoan'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<MultiRepayResp>(config, 'MultiRepayResp', authSettings);
    }

    /**
     *
     * @summary Query collateral adjustment records
     * @param opts Optional parameters
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.from Start timestamp of the query
     * @param opts.to Time range ending, default to current time
     * @param opts.collateralCurrency Collateral
     */
    public async listMultiCollateralRecords(opts: {
        page?: number;
        limit?: number;
        from?: number;
        to?: number;
        collateralCurrency?: string;
    }): Promise<{ response: Response; body: Array<MultiCollateralRecord> }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/mortgage';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.collateralCurrency !== undefined) {
            localVarQueryParameters['collateral_currency'] = ObjectSerializer.serialize(
                opts.collateralCurrency,
                'string',
            );
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<MultiCollateralRecord>>(config, 'Array<MultiCollateralRecord>', authSettings);
    }

    /**
     *
     * @summary Operate Multi-Collateral
     * @param collateralAdjust
     */
    public async operateMultiCollateral(
        collateralAdjust: CollateralAdjust,
    ): Promise<{ response: Response; body: CollateralAdjustRes }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/mortgage';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'collateralAdjust' is not null or undefined
        if (collateralAdjust === null || collateralAdjust === undefined) {
            throw new Error(
                'Required parameter collateralAdjust was null or undefined when calling operateMultiCollateral.',
            );
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(collateralAdjust, 'CollateralAdjust'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<CollateralAdjustRes>(config, 'CollateralAdjustRes', authSettings);
    }

    /**
     *
     * @summary List User Currency Quota
     * @param type Currency types: collateral - collateral currency, borrow - borrowing currency.
     * @param currency When specifying collateral currencies, you can use commas to separate multiple currencies; for borrowing currencies, only one currency can be provided.
     */
    public async listUserCurrencyQuota(
        type: string,
        currency: string,
    ): Promise<{ response: Response; body: Array<CurrencyQuota> }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/currency_quota';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling listUserCurrencyQuota.');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling listUserCurrencyQuota.');
        }

        localVarQueryParameters['type'] = ObjectSerializer.serialize(type, 'string');

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<CurrencyQuota>>(config, 'Array<CurrencyQuota>', authSettings);
    }

    /**
     *
     * @summary Query supported borrowing and collateral currencies in Multi-Collateral
     */
    public async listMultiCollateralCurrencies(): Promise<{ response: Response; body: MultiCollateralCurrency }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/currencies';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<MultiCollateralCurrency>(config, 'MultiCollateralCurrency', authSettings);
    }

    /**
     * The Multi-Collateral ratio is fixed, irrespective of the currency.
     * @summary Get Multi-Collateral ratio
     */
    public async getMultiCollateralLtv(): Promise<{ response: Response; body: CollateralLtv }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/ltv';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<CollateralLtv>(config, 'CollateralLtv', authSettings);
    }

    /**
     *
     * @summary Query fixed interest rates for the currency for 7 days and 30 days
     */
    public async getMultiCollateralFixRate(): Promise<{ response: Response; body: Array<CollateralFixRate> }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/fixed_rate';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<CollateralFixRate>>(config, 'Array<CollateralFixRate>', authSettings);
    }

    /**
     * Query the current interest rate of the currency in the last hour. The current interest rate is updated every hour.
     * @summary Query the current interest rate of the currency
     * @param currencies Specify the currency name to query the array. The array is separated by commas and has a maximum of 100 items.
     * @param opts Optional parameters
     * @param opts.vipLevel VIP level, defaults to 0 if not transferred
     */
    public async getMultiCollateralCurrentRate(
        currencies: Array<string>,
        opts: { vipLevel?: string },
    ): Promise<{ response: Response; body: Array<CollateralCurrentRate> }> {
        const localVarPath = this.client.basePath + '/loan/multi_collateral/current_rate';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currencies' is not null or undefined
        if (currencies === null || currencies === undefined) {
            throw new Error(
                'Required parameter currencies was null or undefined when calling getMultiCollateralCurrentRate.',
            );
        }

        opts = opts || {};
        localVarQueryParameters['currencies'] = ObjectSerializer.serialize(currencies, 'Array<string>');

        if (opts.vipLevel !== undefined) {
            localVarQueryParameters['vip_level'] = ObjectSerializer.serialize(opts.vipLevel, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<Array<CollateralCurrentRate>>(config, 'Array<CollateralCurrentRate>', authSettings);
    }
}
