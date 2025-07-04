import { decodeJWT, encryptMessage } from "../utils/crypto.js";

import axios from "axios";

// Configure axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://api.shibadino.io/api",
  timeout: 15000, // Tăng timeout để đủ thời gian mã hóa
  headers: {
    "Content-Type": "application/json",
  },
});

// Add error interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.error || error.message || "Request failed";
    const newError = new Error(message);
    newError.status = error.response?.status;
    newError.details = error.response?.data?.details;
    return Promise.reject(newError);
  },
);

const telegramAPI = {
  /**
   * Get session token from backend
   */
  async getSessionToken() {
    try {
      const response = await api.post("/telegram/get-session-key", {
        requestId: crypto.randomUUID(),
      });
      return response.data;
    } catch (error) {
      console.error("Get session token error:", error);
      throw new Error(`Failed to get session token: ${error.message}`);
    }
  },

  /**
   * Send encrypted message to backend
   */
  async sendMessage(message) {
    if (!message?.trim()) {
      throw new Error("Message cannot be empty");
    }

    if (message.length > 4000) {
      throw new Error("Message too long (max 4000 characters)");
    }

    try {
      console.log("Step 1: Getting session token...");
      // Step 1: Get session token
      const { sessionToken } = await this.getSessionToken();

      console.log("Step 2: Decoding JWT...");
      // Step 2: Decode JWT to get sessionId
      const payload = decodeJWT(sessionToken);
      if (!payload?.sessionId) {
        throw new Error("Invalid session token received");
      }

      console.log("Step 3: Encrypting message...");
      // Step 3: Encrypt message with sessionId
      const encryptedMessage = await encryptMessage(message, payload.sessionId);

      console.log("Step 4: Sending to backend...");
      // Step 4: Send encrypted message to backend
      const response = await api.post("/telegram/send-message", {
        encryptedMessage,
        sessionToken,
        timestamp: Date.now(),
      });

      console.log("✅ Message sent successfully!");
      return response.data;
    } catch (error) {
      console.error("❌ Send message error:", error);

      // Enhanced error messages
      if (error.message.includes("Failed to encrypt")) {
        throw new Error("Encryption failed. Please try again.");
      }

      if (error.message.includes("Failed to decrypt")) {
        throw new Error("Server could not decrypt message. Please try again.");
      }

      throw error;
    }
  },

  /**
   * Get bot info (for testing)
   */
  async getBotInfo() {
    try {
      const response = await api.get("/telegram/bot-info");
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get bot info: ${error.message}`);
    }
  },

  /**
   * Test simple send (no encryption)
   */
  async sendSimple(message) {
    try {
      const response = await api.post("/telegram/send-simple", {
        message: message.trim(),
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to send simple message: ${error.message}`);
    }
  },
};

export default telegramAPI;
