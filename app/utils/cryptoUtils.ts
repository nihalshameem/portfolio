import CryptoJS from "crypto-js";

// Define encryption parameters
const secretKey =
  process.env.NEXT_PUBLIC_ENCRYPTION_SECRET_KEY || "your-secret-key";

// Encrypt function
export function clientEncrypt(text: string): string {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

// Decrypt function
export function clientDecrypt(encryptedText: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
  let str = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(str);
}
