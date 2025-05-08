/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Toast = ({ message, type = "info", onClose, open }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Match animation duration
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  } as any;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-lg p-4 text-white shadow-lg ${typeStyles[type]} flex min-w-[300px] items-center justify-between`}
        >
          <span>{message}</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:text-gray-200"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
