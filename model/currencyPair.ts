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


/**
* Spot currency pair
*/
export class CurrencyPair {
    /**
    * Currency pair
    */
    'id'?: string;
    /**
    * Base currency
    */
    'base'?: string;
    /**
    * Transaction currency name
    */
    'baseName'?: string;
    /**
    * Quote currency
    */
    'quote'?: string;
    /**
    * Name of the denominated currency
    */
    'quoteName'?: string;
    /**
    * Trading fee
    */
    'fee'?: string;
    /**
    * Minimum amount of base currency to trade, `null` means no limit
    */
    'minBaseAmount'?: string;
    /**
    * Minimum amount of quote currency to trade, `null` means no limit
    */
    'minQuoteAmount'?: string;
    /**
    * Maximum amount of base currency to trade, `null` means no limit
    */
    'maxBaseAmount'?: string;
    /**
    * Maximum amount of quote currency to trade, `null` means no limit
    */
    'maxQuoteAmount'?: string;
    /**
    * Amount scale
    */
    'amountPrecision'?: number;
    /**
    * Price scale
    */
    'precision'?: number;
    /**
    * How currency pair can be traded  - untradable: cannot be bought or sold - buyable: can be bought - sellable: can be sold - tradable: can be bought or sold
    */
    'tradeStatus'?: CurrencyPair.TradeStatus;
    /**
    * Sell start unix timestamp in seconds
    */
    'sellStart'?: number;
    /**
    * Buy start unix timestamp in seconds
    */
    'buyStart'?: number;
    /**
    * Trading pair type, normal: normal, premarket: pre-market
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "base",
            "baseName": "base",
            "type": "string"
        },
        {
            "name": "baseName",
            "baseName": "base_name",
            "type": "string"
        },
        {
            "name": "quote",
            "baseName": "quote",
            "type": "string"
        },
        {
            "name": "quoteName",
            "baseName": "quote_name",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "string"
        },
        {
            "name": "minBaseAmount",
            "baseName": "min_base_amount",
            "type": "string"
        },
        {
            "name": "minQuoteAmount",
            "baseName": "min_quote_amount",
            "type": "string"
        },
        {
            "name": "maxBaseAmount",
            "baseName": "max_base_amount",
            "type": "string"
        },
        {
            "name": "maxQuoteAmount",
            "baseName": "max_quote_amount",
            "type": "string"
        },
        {
            "name": "amountPrecision",
            "baseName": "amount_precision",
            "type": "number"
        },
        {
            "name": "precision",
            "baseName": "precision",
            "type": "number"
        },
        {
            "name": "tradeStatus",
            "baseName": "trade_status",
            "type": "CurrencyPair.TradeStatus"
        },
        {
            "name": "sellStart",
            "baseName": "sell_start",
            "type": "number"
        },
        {
            "name": "buyStart",
            "baseName": "buy_start",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CurrencyPair.attributeTypeMap;
    }
}

export namespace CurrencyPair {
    export enum TradeStatus {
        Untradable = <any> 'untradable',
        Buyable = <any> 'buyable',
        Sellable = <any> 'sellable',
        Tradable = <any> 'tradable'
    }
}
