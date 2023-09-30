import CryptoJS from "crypto-js";
import CryptoES from "crypto-es";

const salt_secret_key = "Lu70K$i3pu5xf7*I8tNmd@x2oODwwDRr4&xjuyTh";
const salt_iv = "RUNkk5Xk1DFr16i61EbwdmGNeik9B6lE";

export const decrypt = (encrypted: string, format: "utf8" | "base64" = "utf8"): string => {

  let cipher = encrypted;
  if (format === "base64") {
    cipher = CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Utf8);
  }

  const ivValue = generateIvFromSalt();
  const secretKey = generateSecretKeyFromSalt();

  const iv_utf8 = CryptoJS.enc.Utf8.parse(ivValue);
  const secret_key_utf8 = CryptoJS.enc.Utf8.parse(secretKey);

  const bytes = CryptoJS.AES.decrypt(cipher, secret_key_utf8, {
    iv: iv_utf8,
    mode: CryptoJS.mode.CBC,
  });

  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

export const encrypt = (data: string): string => {
  const ivValue = generateIvFromSalt();
  const secretKey = generateSecretKeyFromSalt();
  const iv_utf8 = CryptoJS.enc.Utf8.parse(ivValue);
  const secret_key_utf8 = CryptoJS.enc.Utf8.parse(secretKey);
  const encrypted = CryptoJS.AES.encrypt(data, secret_key_utf8, {
    iv: iv_utf8,
    mode: CryptoJS.mode.CBC,
  });
  const encrypted_base64 = CryptoES.enc.Utf8.parse(encrypted.toString()).toString(CryptoES.enc.Base64)
  console.log(encrypted_base64);
  return encrypted_base64.toString();
};

export const generateIvFromSalt = (): string => {
  let hash = CryptoJS.SHA256(salt_iv);
  let substring = hash.toString().substring(0, 16);
  return substring;
};

export const generateSecretKeyFromSalt = (): string => {
  const hash = CryptoJS.SHA256(salt_secret_key);
  return hash.toString().substring(0, 32);
};
