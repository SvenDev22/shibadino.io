import { decodeJWT, encryptMessage } from "../utils/crypto.js";

import axios from "axios";

// Configure axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://api.shibadino.io/api",
  timeout: 10000,
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
    return Promise.reject(newError);
  },
);

const telegramAPI = {
  /**
   * Get session token from backend
   */
  async getSessionToken() {
    const response = await api.post("/telegram/get-session-key", {
      requestId: crypto.randomUUID(),
    });
    return response.data;
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

    // Step 1: Get session token
    const { sessionToken } = await this.getSessionToken();

    // Step 2: Decode JWT to get sessionId
    const payload = decodeJWT(sessionToken);
    if (!payload?.sessionId) {
      throw new Error("Invalid session token received");
    }

    // Step 3: Encrypt message with sessionId
    const encryptedMessage = await encryptMessage(message, payload.sessionId);

    // Step 4: Send encrypted message to backend
    const response = await api.post("/telegram/send-message", {
      encryptedMessage,
      sessionToken,
      timestamp: Date.now(),
    });

    return response.data;
  },
};

export default telegramAPI;
