type HashAlgorithm = 'SHA-256' | 'SHA-384' | 'SHA-512';

export function bytesToHex(bytes: Uint8Array): string {
    return Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
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

export function getUTCTimestamp(): number {
    return int(Date.now() / 1000);
}

export function int(v: number): number {
    return (v | 0);
}