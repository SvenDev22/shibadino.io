import telegramAPI from "../services/telegramAPI.js";
import { useState } from "react";

export const useTelegram = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (message) => {
    setLoading(true);
    setError(null);

    try {
      const result = await telegramAPI.sendMessage(message);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    sendMessage,
    loading,
    error,
    clearError,
  };
};

export default useTelegram;
