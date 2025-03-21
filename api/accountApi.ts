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
import { AccountDetail } from '../model/accountDetail';
import { AccountRateLimit } from '../model/accountRateLimit';
import { DebitFee } from '../model/debitFee';
import { StpGroup } from '../model/stpGroup';
import { StpGroupUser } from '../model/stpGroupUser';
import { ObjectSerializer } from '../model/models';
import { ApiClient, RequestConfig } from './apiClient';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class AccountApi {
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
     * @summary Get account detail
     */
    public async getAccountDetail(): Promise<{ response: Response; body: AccountDetail }> {
        const localVarPath = this.client.basePath + '/account/detail';
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
        return this.client.request<AccountDetail>(config, 'AccountDetail', authSettings);
    }

    /**
     *
     * @summary Get user transaction rate limit information
     */
    public async getAccountRateLimit(): Promise<{ response: Response; body: Array<AccountRateLimit> }> {
        const localVarPath = this.client.basePath + '/account/rate_limit';
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
        return this.client.request<Array<AccountRateLimit>>(config, 'Array<AccountRateLimit>', authSettings);
    }

    /**
     * Retrieve the list of STP groups created by the main account user only
     * @summary List STP Groups
     * @param opts Optional parameters
     * @param opts.name Perform a fuzzy search based on the name
     */
    public async listSTPGroups(opts: { name?: string }): Promise<{ response: Response; body: Array<StpGroup> }> {
        const localVarPath = this.client.basePath + '/account/stp_groups';
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
        if (opts.name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(opts.name, 'string');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<StpGroup>>(config, 'Array<StpGroup>', authSettings);
    }

    /**
     * Only the main account is allowed to create a new STP user group
     * @summary Create STP Group
     * @param stpGroup
     */
    public async createSTPGroup(stpGroup: StpGroup): Promise<{ response: Response; body: StpGroup }> {
        const localVarPath = this.client.basePath + '/account/stp_groups';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'stpGroup' is not null or undefined
        if (stpGroup === null || stpGroup === undefined) {
            throw new Error('Required parameter stpGroup was null or undefined when calling createSTPGroup.');
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(stpGroup, 'StpGroup'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<StpGroup>(config, 'StpGroup', authSettings);
    }

    /**
     * Only the main account that created this STP group is allowed to list the user ID of the STP group
     * @summary List users of the STP group
     * @param stpId STP Group ID
     */
    public async listSTPGroupsUsers(stpId: number): Promise<{ response: Response; body: Array<StpGroupUser> }> {
        const localVarPath =
            this.client.basePath +
            '/account/stp_groups/{stp_id}/users'.replace('{' + 'stp_id' + '}', encodeURIComponent(String(stpId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'stpId' is not null or undefined
        if (stpId === null || stpId === undefined) {
            throw new Error('Required parameter stpId was null or undefined when calling listSTPGroupsUsers.');
        }

        const config: RequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<StpGroupUser>>(config, 'Array<StpGroupUser>', authSettings);
    }

    /**
     * - Only the master account that created the STP user group is allowed to add users to the STP user group.- Only accounts under the main account are allowed to be added. Cross-account is not permitted
     * @summary Add users to the STP group
     * @param stpId STP Group ID
     * @param requestBody User ID
     */
    public async addSTPGroupUsers(
        stpId: number,
        requestBody: Array<number>,
    ): Promise<{ response: Response; body: Array<StpGroupUser> }> {
        const localVarPath =
            this.client.basePath +
            '/account/stp_groups/{stp_id}/users'.replace('{' + 'stp_id' + '}', encodeURIComponent(String(stpId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'stpId' is not null or undefined
        if (stpId === null || stpId === undefined) {
            throw new Error('Required parameter stpId was null or undefined when calling addSTPGroupUsers.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling addSTPGroupUsers.');
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(requestBody, 'Array<number>'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<StpGroupUser>>(config, 'Array<StpGroupUser>', authSettings);
    }

    /**
     * - Only the main account that created this STP group is allowed to delete users from the STP user group - Deletion is limited to accounts under the current main account; cross-account deletion is not permitted
     * @summary Delete the user in the STP group
     * @param stpId STP Group ID
     * @param userId STP user ID, multiple can be separated by commas
     */
    public async deleteSTPGroupUsers(
        stpId: number,
        userId: number,
    ): Promise<{ response: Response; body: Array<StpGroupUser> }> {
        const localVarPath =
            this.client.basePath +
            '/account/stp_groups/{stp_id}/users'.replace('{' + 'stp_id' + '}', encodeURIComponent(String(stpId)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'stpId' is not null or undefined
        if (stpId === null || stpId === undefined) {
            throw new Error('Required parameter stpId was null or undefined when calling deleteSTPGroupUsers.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteSTPGroupUsers.');
        }

        localVarQueryParameters['user_id'] = ObjectSerializer.serialize(userId, 'number');

        const config: RequestConfig = {
            method: 'DELETE',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<StpGroupUser>>(config, 'Array<StpGroupUser>', authSettings);
    }

    /**
     * Query the current GT deduction configuration for the account.
     * @summary Query GT deduction configuration.
     */
    public async getDebitFee(): Promise<{ response: Response; body: DebitFee }> {
        const localVarPath = this.client.basePath + '/account/debit_fee';
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
        return this.client.request<DebitFee>(config, 'DebitFee', authSettings);
    }

    /**
     * Enable or disable GT deduction for the current account.
     * @summary Set GT deduction.
     * @param debitFee
     */
    public async setDebitFee(debitFee: DebitFee): Promise<{ response: Response; body?: any }> {
        const localVarPath = this.client.basePath + '/account/debit_fee';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'debitFee' is not null or undefined
        if (debitFee === null || debitFee === undefined) {
            throw new Error('Required parameter debitFee was null or undefined when calling setDebitFee.');
        }

        const config: RequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(debitFee, 'DebitFee'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }
}
