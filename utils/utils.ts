type HashAlgorithm = 'SHA-256' | 'SHA-384' | 'SHA-512';

export function bytesToHex(data: Uint8Array | ArrayBuffer): string {
    const bytes: Uint8Array = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
    return Array.from(bytes)
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
}

export function strToUtf8(text: string, encoder?: TextEncoder): Uint8Array {
    if (!(encoder instanceof TextEncoder)) {
        encoder = new TextEncoder();
    }
    return encoder.encode(text);
}

export async function createHash(hashAlg: HashAlgorithm, data: Uint8Array): Promise<ArrayBuffer> {
    return crypto.subtle.digest(hashAlg, data);
}

/*
export async function createHmac(hashAlg: HashAlgorithm, secret: string, signatureString: string): Promise<ArrayBuffer> {
    const key = await crypto.subtle.importKey(
        'raw',
        strToUtf8(secret),
        { name: 'HMAC', hash: hashAlg },
        false,
        ['sign']
    );
    return crypto.subtle.sign('HMAC', key, strToUtf8(signatureString));
}
*/

export function getUTCTimestamp(): number {
    return int(Date.now() / 1000);
}

export function int(v: number): number {
    return v | 0;
}

export function concatUint8Arrays(a: Uint8Array, b: Uint8Array): Uint8Array {
    const ret = new Uint8Array(a.length + b.length);
    ret.set(a);
    ret.set(b, a.length);
    return ret;
}

export function isBrowser() {
    return !(typeof window !== 'undefined' && typeof window.document !== 'undefined');
}
