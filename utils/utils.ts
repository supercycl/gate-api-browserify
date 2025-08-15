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

export function concatUint8Arrays(a: Uint8Array, b: Uint8Array): Uint8Array {
    const ret = new Uint8Array(a.length + b.length);
    ret.set(a);
    ret.set(b, a.length);
    return ret;
}

export function getPathnameFromUrl(url: string): string {
    try {
        const u = new URL(url);
        return u.pathname;
    } catch (e) {
        const regex = /^([^?#]*).*$/;
        const match = url.match(regex);
        if (match === null) {
            throw new TypeError(`Invalid url: ${url}`);
        }

        const pathname = match[1];
        if (!pathname.startsWith('/')) {
            throw new TypeError(`Invalid url: ${url}`);
        }

        return pathname;
    }
}