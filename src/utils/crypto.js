// Frontend Crypto Utils for React - Fixed version

/**
 * Derive key from password using PBKDF2 (Web Crypto API)
 */
const deriveKey = async (password, salt) => {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"],
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-512",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"],
  );
};

/**
 * Encrypt message using AES-256-GCM - Fixed để match với backend
 */
export const encryptMessage = async (message, sessionId) => {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);

    // Generate random salt and IV (cùng size với backend)
    const salt = crypto.getRandomValues(new Uint8Array(64)); // 64 bytes salt
    const iv = crypto.getRandomValues(new Uint8Array(12)); // 12 bytes IV cho GCM

    // Derive key from sessionId
    const key = await deriveKey(sessionId, salt);

    // Encrypt the data
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      data,
    );

    // Combine salt + iv + encrypted data (không cần tag riêng, GCM tự handle)
    const combined = new Uint8Array(
      salt.length + iv.length + encrypted.byteLength,
    );
    combined.set(salt, 0);
    combined.set(iv, salt.length);
    combined.set(new Uint8Array(encrypted), salt.length + iv.length);

    // Convert to base64 string (cùng cách với backend)
    const binaryString = String.fromCharCode(...combined);
    return btoa(binaryString);
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Failed to encrypt message");
  }
};

/**
 * Decode JWT without verification (to get sessionId)
 */
export const decodeJWT = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("JWT decode error:", error);
    throw new Error("Invalid JWT token");
  }
};
