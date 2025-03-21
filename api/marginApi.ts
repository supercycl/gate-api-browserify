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
import { AutoRepaySetting } from '../model/autoRepaySetting';
import { CrossMarginAccount } from '../model/crossMarginAccount';
import { CrossMarginAccountBook } from '../model/crossMarginAccountBook';
import { CrossMarginCurrency } from '../model/crossMarginCurrency';
import { CrossMarginLoan } from '../model/crossMarginLoan';
import { CrossMarginRepayRequest } from '../model/crossMarginRepayRequest';
import { CrossMarginRepayment } from '../model/crossMarginRepayment';
import { CrossMarginTransferable } from '../model/crossMarginTransferable';
import { FundingAccount } from '../model/fundingAccount';
import { MarginAccount } from '../model/marginAccount';
import { MarginAccountBook } from '../model/marginAccountBook';
import { MarginTransferable } from '../model/marginTransferable';
import { UniLoanInterestRecord } from '../model/uniLoanInterestRecord';
import { UnifiedBorrowable } from '../model/unifiedBorrowable';
import { ObjectSerializer } from '../model/models';
import { ApiClient, RequestConfig } from './apiClient';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class MarginApi {
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
     * @summary Margin account list
     * @param opts Optional parameters
     * @param opts.currencyPair Currency pair
     */
    public async listMarginAccounts(opts: {
        currencyPair?: string;
    }): Promise<{ response: Response; body: Array<MarginAccount> }> {
        const localVarPath = this.client.basePath + '/margin/accounts';
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
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<MarginAccount>>(config, 'Array<MarginAccount>', authSettings);
    }

    /**
     * Only transferals from and to margin account are provided for now. Time range allows 30 days at most
     * @summary List margin account balance change history
     * @param opts Optional parameters
     * @param opts.currency List records related to specified currency only. If specified, &#x60;currency_pair&#x60; is also required.
     * @param opts.currencyPair List records related to specified currency pair. Used in combination with &#x60;currency&#x60;. Ignored if &#x60;currency&#x60; is not provided
     * @param opts.type Only retrieve changes of the specified type. All types will be returned if not specified.
     * @param opts.from Start timestamp of the query
     * @param opts.to Time range ending, default to current time
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     */
    public async listMarginAccountBook(opts: {
        currency?: string;
        currencyPair?: string;
        type?: string;
        from?: number;
        to?: number;
        page?: number;
        limit?: number;
    }): Promise<{ response: Response; body: Array<MarginAccountBook> }> {
        const localVarPath = this.client.basePath + '/margin/account_book';
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
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        if (opts.type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(opts.type, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<MarginAccountBook>>(config, 'Array<MarginAccountBook>', authSettings);
    }

    /**
     *
     * @summary Funding account list
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     */
    public async listFundingAccounts(opts: {
        currency?: string;
    }): Promise<{ response: Response; body: Array<FundingAccount> }> {
        const localVarPath = this.client.basePath + '/margin/funding_accounts';
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
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<FundingAccount>>(config, 'Array<FundingAccount>', authSettings);
    }

    /**
     *
     * @summary Retrieve user auto repayment setting
     */
    public async getAutoRepayStatus(): Promise<{ response: Response; body: AutoRepaySetting }> {
        const localVarPath = this.client.basePath + '/margin/auto_repay';
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

        const authSettings = ['apiv4'];
        return this.client.request<AutoRepaySetting>(config, 'AutoRepaySetting', authSettings);
    }

    /**
     *
     * @summary Update user\'s auto repayment setting
     * @param status New auto repayment status. &#x60;on&#x60; - enabled, &#x60;off&#x60; - disabled
     */
    public async setAutoRepay(status: string): Promise<{ response: Response; body: AutoRepaySetting }> {
        const localVarPath = this.client.basePath + '/margin/auto_repay';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling setAutoRepay.');
        }

        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, 'string');

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<AutoRepaySetting>(config, 'AutoRepaySetting', authSettings);
    }

    /**
     *
     * @summary Get the max transferable amount for a specific margin currency
     * @param currency Retrieve data of the specified currency
     * @param opts Optional parameters
     * @param opts.currencyPair Currency pair
     */
    public async getMarginTransferable(
        currency: string,
        opts: { currencyPair?: string },
    ): Promise<{ response: Response; body: MarginTransferable }> {
        const localVarPath = this.client.basePath + '/margin/transferable';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getMarginTransferable.');
        }

        opts = opts || {};
        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<MarginTransferable>(config, 'MarginTransferable', authSettings);
    }

    /**
     *
     * @summary Currencies supported by cross margin.(deprecated)
     */
    public async listCrossMarginCurrencies(): Promise<{ response: Response; body: Array<CrossMarginCurrency> }> {
        const localVarPath = this.client.basePath + '/margin/cross/currencies';
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
        return this.client.request<Array<CrossMarginCurrency>>(config, 'Array<CrossMarginCurrency>', authSettings);
    }

    /**
     *
     * @summary Retrieve detail of one single currency supported by cross margin. (deprecated)
     * @param currency Currency name
     */
    public async getCrossMarginCurrency(
        currency: string,
    ): Promise<{ response: Response; body: CrossMarginCurrency }> {
        const localVarPath =
            this.client.basePath +
            '/margin/cross/currencies/{currency}'.replace('{' + 'currency' + '}', encodeURIComponent(String(currency)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getCrossMarginCurrency.');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = [];
        return this.client.request<CrossMarginCurrency>(config, 'CrossMarginCurrency', authSettings);
    }

    /**
     *
     * @summary Retrieve cross margin account. (deprecated)
     */
    public async getCrossMarginAccount(): Promise<{ response: Response; body: CrossMarginAccount }> {
        const localVarPath = this.client.basePath + '/margin/cross/accounts';
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

        const authSettings = ['apiv4'];
        return this.client.request<CrossMarginAccount>(config, 'CrossMarginAccount', authSettings);
    }

    /**
     * The record query time range is not allowed to exceed 30 days.  When using the limit&page paging function to retrieve data, the maximum number of pages is 100,000, that is, (limit page - 1) <= 100000.
     * @summary Retrieve cross margin account change history. (deprecated)
     * @param opts Optional parameters
     * @param opts.currency Filter by currency
     * @param opts.from Start timestamp of the query
     * @param opts.to Time range ending, default to current time
     * @param opts.page Page number
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.type Only retrieve changes of the specified type. All types will be returned if not specified.
     */
    public async listCrossMarginAccountBook(opts: {
        currency?: string;
        from?: number;
        to?: number;
        page?: number;
        limit?: number;
        type?: string;
    }): Promise<{ response: Response; body: Array<CrossMarginAccountBook> }> {
        const localVarPath = this.client.basePath + '/margin/cross/account_book';
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
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(opts.type, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<CrossMarginAccountBook>>(
            config,
            'Array<CrossMarginAccountBook>',
            authSettings,
        );
    }

    /**
     * Sort by creation time in descending order by default. Set `reverse=false` to return ascending results.
     * @summary List cross margin borrow history. (deprecated)
     * @param status Filter by status. Supported values are 2 and 3. (deprecated.)
     * @param opts Optional parameters
     * @param opts.currency Filter by currency
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     * @param opts.reverse Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results
     */
    public async listCrossMarginLoans(
        status: number,
        opts: { currency?: string; limit?: number; offset?: number; reverse?: boolean },
    ): Promise<{ response: Response; body: Array<CrossMarginLoan> }> {
        const localVarPath = this.client.basePath + '/margin/cross/loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listCrossMarginLoans.');
        }

        opts = opts || {};
        localVarQueryParameters['status'] = ObjectSerializer.serialize(status, 'number');

        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        if (opts.reverse !== undefined) {
            localVarQueryParameters['reverse'] = ObjectSerializer.serialize(opts.reverse, 'boolean');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<CrossMarginLoan>>(config, 'Array<CrossMarginLoan>', authSettings);
    }

    /**
     * Borrow amount cannot be less than currency minimum borrow amount
     * @summary Create a cross margin borrow loan. (deprecated)
     * @param crossMarginLoan
     */
    public async createCrossMarginLoan(
        crossMarginLoan: CrossMarginLoan,
    ): Promise<{ response: Response; body: CrossMarginLoan }> {
        const localVarPath = this.client.basePath + '/margin/cross/loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'crossMarginLoan' is not null or undefined
        if (crossMarginLoan === null || crossMarginLoan === undefined) {
            throw new Error(
                'Required parameter crossMarginLoan was null or undefined when calling createCrossMarginLoan.',
            );
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(crossMarginLoan, 'CrossMarginLoan'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<CrossMarginLoan>(config, 'CrossMarginLoan', authSettings);
    }

    /**
     *
     * @summary Retrieve single borrow loan detail. (deprecated)
     * @param loanId Borrow loan ID
     */
    public async getCrossMarginLoan(loanId: string): Promise<{ response: Response; body: CrossMarginLoan }> {
        const localVarPath =
            this.client.basePath +
            '/margin/cross/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling getCrossMarginLoan.');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<CrossMarginLoan>(config, 'CrossMarginLoan', authSettings);
    }

    /**
     * Sort by creation time in descending order by default. Set `reverse=false` to return ascending results.
     * @summary Retrieve cross margin repayments. (deprecated)
     * @param opts Optional parameters
     * @param opts.currency
     * @param opts.loanId
     * @param opts.limit Maximum number of records to be returned in a single list
     * @param opts.offset List offset, starting from 0
     * @param opts.reverse Whether to sort in descending order, which is the default. Set &#x60;reverse&#x3D;false&#x60; to return ascending results
     */
    public async listCrossMarginRepayments(opts: {
        currency?: string;
        loanId?: string;
        limit?: number;
        offset?: number;
        reverse?: boolean;
    }): Promise<{ response: Response; body: Array<CrossMarginRepayment> }> {
        const localVarPath = this.client.basePath + '/margin/cross/repayments';
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
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.loanId !== undefined) {
            localVarQueryParameters['loan_id'] = ObjectSerializer.serialize(opts.loanId, 'string');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        if (opts.reverse !== undefined) {
            localVarQueryParameters['reverse'] = ObjectSerializer.serialize(opts.reverse, 'boolean');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<CrossMarginRepayment>>(config, 'Array<CrossMarginRepayment>', authSettings);
    }

    /**
     * When the liquidity of the currency is insufficient and the transaction risk is high, the currency will be disabled, and funds cannot be transferred.When the available balance of cross-margin is insufficient, the balance of the spot account can be used for repayment. Please ensure that the balance of the spot account is sufficient, and system uses cross-margin account for repayment first
     * @summary Cross margin repayments. (deprecated)
     * @param crossMarginRepayRequest
     */
    public async repayCrossMarginLoan(
        crossMarginRepayRequest: CrossMarginRepayRequest,
    ): Promise<{ response: Response; body: Array<CrossMarginLoan> }> {
        const localVarPath = this.client.basePath + '/margin/cross/repayments';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'crossMarginRepayRequest' is not null or undefined
        if (crossMarginRepayRequest === null || crossMarginRepayRequest === undefined) {
            throw new Error(
                'Required parameter crossMarginRepayRequest was null or undefined when calling repayCrossMarginLoan.',
            );
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(crossMarginRepayRequest, 'CrossMarginRepayRequest'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<CrossMarginLoan>>(config, 'Array<CrossMarginLoan>', authSettings);
    }

    /**
     *
     * @summary Interest records for the cross margin account. (deprecated)
     * @param opts Optional parameters
     * @param opts.currency Retrieve data of the specified currency
     * @param opts.page Page number
     * @param opts.limit Maximum response items.  Default: 100, minimum: 1, Maximum: 100
     * @param opts.from Start timestamp
     * @param opts.to End timestamp
     */
    public async getCrossMarginInterestRecords(opts: {
        currency?: string;
        page?: number;
        limit?: number;
        from?: number;
        to?: number;
    }): Promise<{ response: Response; body: Array<UniLoanInterestRecord> }> {
        const localVarPath = this.client.basePath + '/margin/cross/interest_records';
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
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
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
        return this.client.request<Array<UniLoanInterestRecord>>(config, 'Array<UniLoanInterestRecord>', authSettings);
    }

    /**
     *
     * @summary Get the max transferable amount for a specific cross margin currency. (deprecated)
     * @param currency Retrieve data of the specified currency
     */
    public async getCrossMarginTransferable(
        currency: string,
    ): Promise<{ response: Response; body: CrossMarginTransferable }> {
        const localVarPath = this.client.basePath + '/margin/cross/transferable';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error(
                'Required parameter currency was null or undefined when calling getCrossMarginTransferable.',
            );
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<CrossMarginTransferable>(config, 'CrossMarginTransferable', authSettings);
    }

    /**
     * Please note that the interest rates are subject to change based on the borrowing and lending demand, and therefore, the provided rates may not be entirely accurate.
     * @summary Estimated interest rates. (deprecated)
     * @param currencies An array of up to 10 specifying the currency name
     */
    public async getCrossMarginEstimateRate(
        currencies: Array<string>,
    ): Promise<{ response: Response; body: { [key: string]: string } }> {
        const localVarPath = this.client.basePath + '/margin/cross/estimate_rate';
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
                'Required parameter currencies was null or undefined when calling getCrossMarginEstimateRate.',
            );
        }

        localVarQueryParameters['currencies'] = ObjectSerializer.serialize(currencies, 'Array<string>');

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<{ [key: string]: string }>(config, '{ [key: string]: string; }', authSettings);
    }

    /**
     *
     * @summary Get the max borrowable amount for a specific cross margin currency. (deprecated)
     * @param currency Retrieve data of the specified currency
     */
    public async getCrossMarginBorrowable(
        currency: string,
    ): Promise<{ response: Response; body: UnifiedBorrowable }> {
        const localVarPath = this.client.basePath + '/margin/cross/borrowable';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getCrossMarginBorrowable.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<UnifiedBorrowable>(config, 'UnifiedBorrowable', authSettings);
    }
}
