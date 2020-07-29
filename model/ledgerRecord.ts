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

export class LedgerRecord {
    /**
     * Record ID
     */
    'id'?: string;
    /**
     * Hash record of the withdrawal
     */
    'txid'?: string;
    /**
     * Record time
     */
    'timestamp'?: string;
    /**
     * Trade amount
     */
    'amount': string;
    /**
     * Record currency
     */
    'currency': string;
    /**
     * Withdrawal address. Required for withdrawals
     */
    'address'?: string;
    /**
     * Extra withdrawal memo
     */
    'memo'?: string;
    /**
     * Record status.  - DONE: done - CANCEL: cancelled - REQUEST: requesting - MANUAL: waiting for manual approval - BCODE: GateCode operation
     */
    'status'?: LedgerRecord.Status;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'txid',
            baseName: 'txid',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'address',
            baseName: 'address',
            type: 'string',
        },
        {
            name: 'memo',
            baseName: 'memo',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'LedgerRecord.Status',
        },
    ];

    static getAttributeTypeMap() {
        return LedgerRecord.attributeTypeMap;
    }
}

export namespace LedgerRecord {
    export enum Status {
        DONE = <any>'DONE',
        CANCEL = <any>'CANCEL',
        REQUEST = <any>'REQUEST',
        MANUAL = <any>'MANUAL',
        BCODE = <any>'BCODE',
    }
}
