const ALGORITHM_TABLE = {
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
};

export function convertHashName(algorithm: string): string | undefined {
    return ALGORITHM_TABLE[algorithm];
}
