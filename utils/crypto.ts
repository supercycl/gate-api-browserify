import { Hash } from './hash';
import { Hmac } from './hmac';

export function createHash(algorithm: string): Hash {
    return new Hash(algorithm);
}

export function createHmac(algorithm: string, secret: string): Hmac {
    return new Hmac(algorithm, secret);
}
