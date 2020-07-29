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

export class OrderBook {
    /**
     * Asks order depth
     */
    'asks': Array<Array<string>>;
    /**
     * Bids order depth
     */
    'bids': Array<Array<string>>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'asks',
            baseName: 'asks',
            type: 'Array<Array<string>>',
        },
        {
            name: 'bids',
            baseName: 'bids',
            type: 'Array<Array<string>>',
        },
    ];

    static getAttributeTypeMap() {
        return OrderBook.attributeTypeMap;
    }
}
