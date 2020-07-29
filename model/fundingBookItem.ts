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

export class FundingBookItem {
    /**
     * Loan rate
     */
    'rate'?: string;
    /**
     * Borrowable amount
     */
    'amount'?: string;
    /**
     * How long the loan should be repaid
     */
    'days'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'rate',
            baseName: 'rate',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'days',
            baseName: 'days',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return FundingBookItem.attributeTypeMap;
    }
}
