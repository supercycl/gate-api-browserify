/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { FundingAccount } from '../model/fundingAccount';
import { FundingBookItem } from '../model/fundingBookItem';
import { Loan } from '../model/loan';
import { LoanPatch } from '../model/loanPatch';
import { LoanRecord } from '../model/loanRecord';
import { MarginAccount } from '../model/marginAccount';
import { MarginCurrencyPair } from '../model/marginCurrencyPair';
import { RepayRequest } from '../model/repayRequest';
import { Repayment } from '../model/repayment';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';

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
     * Only lending loans can be cancelled
     * @summary Cancel lending loan
     * @param loanId Loan ID
     * @param currency Retrieved specified currency related data
     */
    public async cancelLoan(loanId: string, currency: string): Promise<{ response: http.IncomingMessage; body: Loan }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling cancelLoan.');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling cancelLoan.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Loan>(localVarRequestOptions, 'Loan', authSettings);
    }

    /**
     *
     * @summary Lend or borrow
     * @param loan
     */
    public async createLoan(loan: Loan): Promise<{ response: http.IncomingMessage; body: Loan }> {
        const localVarPath = this.client.basePath + '/margin/loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loan' is not null or undefined
        if (loan === null || loan === undefined) {
            throw new Error('Required parameter loan was null or undefined when calling createLoan.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(loan, 'Loan'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Loan>(localVarRequestOptions, 'Loan', authSettings);
    }

    /**
     *
     * @summary Retrieve one single loan detail
     * @param loanId Loan ID
     * @param side Lend or borrow
     */
    public async getLoan(
        loanId: string,
        side: 'lend' | 'borrow',
    ): Promise<{ response: http.IncomingMessage; body: Loan }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling getLoan.');
        }

        // verify required parameter 'side' is not null or undefined
        if (side === null || side === undefined) {
            throw new Error('Required parameter side was null or undefined when calling getLoan.');
        }

        localVarQueryParameters['side'] = ObjectSerializer.serialize(side, "'lend' | 'borrow'");

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Loan>(localVarRequestOptions, 'Loan', authSettings);
    }

    /**
     *
     * @summary Get one single loan record
     * @param loanRecordId Loan record ID
     * @param loanId Loan ID
     */
    public async getLoanRecord(
        loanRecordId: string,
        loanId: string,
    ): Promise<{ response: http.IncomingMessage; body: LoanRecord }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loan_records/{loan_record_id}'.replace(
                '{' + 'loan_record_id' + '}',
                encodeURIComponent(String(loanRecordId)),
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
        const localVarFormParams: any = {};

        // verify required parameter 'loanRecordId' is not null or undefined
        if (loanRecordId === null || loanRecordId === undefined) {
            throw new Error('Required parameter loanRecordId was null or undefined when calling getLoanRecord.');
        }

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling getLoanRecord.');
        }

        localVarQueryParameters['loan_id'] = ObjectSerializer.serialize(loanId, 'string');

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<LoanRecord>(localVarRequestOptions, 'LoanRecord', authSettings);
    }

    /**
     *
     * @summary Funding account list
     * @param opts Optional parameters
     * @param opts.currency Retrieved specified currency related data
     */
    public async listFundingAccounts(opts: {
        currency?: string;
    }): Promise<{ response: http.IncomingMessage; body: Array<FundingAccount> }> {
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
        const localVarFormParams: any = {};

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Array<FundingAccount>>(
            localVarRequestOptions,
            'Array<FundingAccount>',
            authSettings,
        );
    }

    /**
     *
     * @summary Order book of lending loans
     * @param currency Retrieved specified currency related data
     */
    public async listFundingBook(
        currency: string,
    ): Promise<{ response: http.IncomingMessage; body: Array<FundingBookItem> }> {
        const localVarPath = this.client.basePath + '/margin/funding_book';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling listFundingBook.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<Array<FundingBookItem>>(
            localVarRequestOptions,
            'Array<FundingBookItem>',
            authSettings,
        );
    }

    /**
     *
     * @summary List repayment records of specified loan
     * @param loanId Loan ID
     * @param opts Optional parameters
     * @param opts.status Loan record status
     * @param opts.page Page number
     * @param opts.limit Maximum number of records returned in one list
     */
    public async listLoanRecords(
        loanId: string,
        opts: { status?: 'loaned' | 'finished'; page?: number; limit?: number },
    ): Promise<{ response: http.IncomingMessage; body: Array<LoanRecord> }> {
        const localVarPath = this.client.basePath + '/margin/loan_records';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling listLoanRecords.');
        }

        opts = opts || {};
        localVarQueryParameters['loan_id'] = ObjectSerializer.serialize(loanId, 'string');

        if (opts.status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(opts.status, "'loaned' | 'finished'");
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Array<LoanRecord>>(localVarRequestOptions, 'Array<LoanRecord>', authSettings);
    }

    /**
     *
     * @summary List loan repayment records
     * @param loanId Loan ID
     */
    public async listLoanRepayments(
        loanId: string,
    ): Promise<{ response: http.IncomingMessage; body: Array<Repayment> }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loans/{loan_id}/repayment'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling listLoanRepayments.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Array<Repayment>>(localVarRequestOptions, 'Array<Repayment>', authSettings);
    }

    /**
     *
     * @summary List all loans
     * @param status Loan status
     * @param side Lend or borrow
     * @param opts Optional parameters
     * @param opts.currency Retrieved specified currency related data
     * @param opts.currencyPair Currency pair
     * @param opts.sortBy Specify which field is used to sort. &#x60;create_time&#x60; or &#x60;rate&#x60; is supported. Default to &#x60;create_time&#x60;
     * @param opts.reverseSort Whether to sort in descending order. Default to &#x60;true&#x60;
     * @param opts.page Page number
     * @param opts.limit Maximum number of records returned in one list
     */
    public async listLoans(
        status: 'open' | 'loaned' | 'finished' | 'auto_repaid',
        side: 'lend' | 'borrow',
        opts: {
            currency?: string;
            currencyPair?: string;
            sortBy?: 'create_time' | 'rate';
            reverseSort?: boolean;
            page?: number;
            limit?: number;
        },
    ): Promise<{ response: http.IncomingMessage; body: Array<Loan> }> {
        const localVarPath = this.client.basePath + '/margin/loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling listLoans.');
        }

        // verify required parameter 'side' is not null or undefined
        if (side === null || side === undefined) {
            throw new Error('Required parameter side was null or undefined when calling listLoans.');
        }

        opts = opts || {};
        localVarQueryParameters['status'] = ObjectSerializer.serialize(
            status,
            "'open' | 'loaned' | 'finished' | 'auto_repaid'",
        );

        localVarQueryParameters['side'] = ObjectSerializer.serialize(side, "'lend' | 'borrow'");

        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        if (opts.sortBy !== undefined) {
            localVarQueryParameters['sort_by'] = ObjectSerializer.serialize(opts.sortBy, "'create_time' | 'rate'");
        }

        if (opts.reverseSort !== undefined) {
            localVarQueryParameters['reverse_sort'] = ObjectSerializer.serialize(opts.reverseSort, 'boolean');
        }

        if (opts.page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(opts.page, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Array<Loan>>(localVarRequestOptions, 'Array<Loan>', authSettings);
    }

    /**
     *
     * @summary Margin account list
     * @param opts Optional parameters
     * @param opts.currencyPair Currency pair
     */
    public async listMarginAccounts(opts: {
        currencyPair?: string;
    }): Promise<{ response: http.IncomingMessage; body: Array<MarginAccount> }> {
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
        const localVarFormParams: any = {};

        opts = opts || {};
        if (opts.currencyPair !== undefined) {
            localVarQueryParameters['currency_pair'] = ObjectSerializer.serialize(opts.currencyPair, 'string');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Array<MarginAccount>>(localVarRequestOptions, 'Array<MarginAccount>', authSettings);
    }

    /**
     *
     * @summary List all supported currency pairs supported in margin trading
     */
    public async listMarginCurrencyPairs(): Promise<{
        response: http.IncomingMessage;
        body: Array<MarginCurrencyPair>;
    }> {
        const localVarPath = this.client.basePath + '/margin/currency_pairs';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = [];
        return this.client.request<Array<MarginCurrencyPair>>(
            localVarRequestOptions,
            'Array<MarginCurrencyPair>',
            authSettings,
        );
    }

    /**
     *
     * @summary Merge multiple lending loans
     * @param currency Retrieved specified currency related data
     * @param ids Lending loan ID list separated by &#x60;,&#x60;. Maximum of 20 IDs are allowed in one request
     */
    public async mergeLoans(currency: string, ids: string): Promise<{ response: http.IncomingMessage; body: Loan }> {
        const localVarPath = this.client.basePath + '/margin/merged_loans';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling mergeLoans.');
        }

        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling mergeLoans.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'string');

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Loan>(localVarRequestOptions, 'Loan', authSettings);
    }

    /**
     *
     * @summary Repay a loan
     * @param loanId Loan ID
     * @param repayRequest
     */
    public async repayLoan(
        loanId: string,
        repayRequest: RepayRequest,
    ): Promise<{ response: http.IncomingMessage; body: Loan }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loans/{loan_id}/repayment'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling repayLoan.');
        }

        // verify required parameter 'repayRequest' is not null or undefined
        if (repayRequest === null || repayRequest === undefined) {
            throw new Error('Required parameter repayRequest was null or undefined when calling repayLoan.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(repayRequest, 'RepayRequest'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Loan>(localVarRequestOptions, 'Loan', authSettings);
    }

    /**
     * Only `auto_renew` modification is supported currently
     * @summary Modify a loan
     * @param loanId Loan ID
     * @param loanPatch
     */
    public async updateLoan(
        loanId: string,
        loanPatch: LoanPatch,
    ): Promise<{ response: http.IncomingMessage; body: Loan }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loans/{loan_id}'.replace('{' + 'loan_id' + '}', encodeURIComponent(String(loanId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'loanId' is not null or undefined
        if (loanId === null || loanId === undefined) {
            throw new Error('Required parameter loanId was null or undefined when calling updateLoan.');
        }

        // verify required parameter 'loanPatch' is not null or undefined
        if (loanPatch === null || loanPatch === undefined) {
            throw new Error('Required parameter loanPatch was null or undefined when calling updateLoan.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(loanPatch, 'LoanPatch'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<Loan>(localVarRequestOptions, 'Loan', authSettings);
    }

    /**
     * Only `auto_renew` modification is supported currently
     * @summary Modify a loan record
     * @param loanRecordId Loan record ID
     * @param loanPatch
     */
    public async updateLoanRecord(
        loanRecordId: string,
        loanPatch: LoanPatch,
    ): Promise<{ response: http.IncomingMessage; body: LoanRecord }> {
        const localVarPath =
            this.client.basePath +
            '/margin/loan_records/{loan_record_id}'.replace(
                '{' + 'loan_record_id' + '}',
                encodeURIComponent(String(loanRecordId)),
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
        const localVarFormParams: any = {};

        // verify required parameter 'loanRecordId' is not null or undefined
        if (loanRecordId === null || loanRecordId === undefined) {
            throw new Error('Required parameter loanRecordId was null or undefined when calling updateLoanRecord.');
        }

        // verify required parameter 'loanPatch' is not null or undefined
        if (loanPatch === null || loanPatch === undefined) {
            throw new Error('Required parameter loanPatch was null or undefined when calling updateLoanRecord.');
        }

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: true,
            json: true,
            body: ObjectSerializer.serialize(loanPatch, 'LoanPatch'),
        };
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        const authSettings = ['apiv4'];
        return this.client.request<LoanRecord>(localVarRequestOptions, 'LoanRecord', authSettings);
    }
}
