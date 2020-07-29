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

export class RepayRequest {
    /**
     * Currency pair
     */
    'currencyPair': string;
    /**
     * Loan currency
     */
    'currency': string;
    /**
     * Repay mode. all - repay all; partial - repay only some portion
     */
    'mode': RepayRequest.Mode;
    /**
     * Repay amount. Required in `partial` mode
     */
    'amount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'mode',
            baseName: 'mode',
            type: 'RepayRequest.Mode',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return RepayRequest.attributeTypeMap;
    }
}

export namespace RepayRequest {
    export enum Mode {
        All = <any>'all',
        Partial = <any>'partial',
    }
}
