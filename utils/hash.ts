import { bytesToHex, concatUint8Arrays, strToUtf8 } from './utils';
import { convertHashName } from './constants';

export class Hash {
    private readonly algorithm: string;
    private buf: Uint8Array = new Uint8Array();

    constructor(algorithm: string) {
        const name = convertHashName(algorithm);
        if (name === undefined) {
            throw 'Invalid algorithm';
        }
        this.algorithm = name;
    }

    update(data: string | Uint8Array | ArrayBuffer): Hash {
        let bytes: Uint8Array;

        if (typeof data === 'string') {
            bytes = strToUtf8(data);
        } else if (data instanceof ArrayBuffer) {
            bytes = new Uint8Array(data);
        } else {
            bytes = data;
        }
        return this._update(bytes);
    }

    private _update(data: Uint8Array): Hash {
        if (this.buf === undefined) {
            this.buf = data;
        } else {
            this.buf = concatUint8Arrays(this.buf, data);
        }
        return this;
    }

    async digest(encoding?: string): Promise<string | ArrayBuffer> {
        const buf = await crypto.subtle.digest(this.algorithm, this.buf);
        if (encoding === 'hex') {
            return bytesToHex(buf);
        }
        return buf;
    }
}
