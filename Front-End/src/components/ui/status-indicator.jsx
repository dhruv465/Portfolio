import React, { useState, useEffect } from "react";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// API endpoint
const API_URL = "https://portfolio-d10i.onrender.com";

export function StatusIndicator() {
  const [status, setStatus] = useState("checking"); // 'checking', 'online', 'offline'
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    checkSystemStatus();

    // Check system status every 60 seconds
    const intervalId = setInterval(checkSystemStatus, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const checkSystemStatus = async () => {
    try {
      setStatus("checking");
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(`${API_URL}/health`, {
        method: "GET",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setStatus("online");
      } else {
        setStatus("offline");
      }
    } catch (err) {
      setStatus("offline");
    }
  };

  // Get the appropriate icon based on status
  const getStatusIcon = () => {
    switch (status) {
      case "online":
        return <Check size={14} />;
      case "offline":
        return <AlertCircle size={14} />;
      default:
        return <Loader2 size={14} className="animate-spin" />;
    }
  };

  // Get the color based on status
  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };

  // Get the glow color class based on status
  const getGlowColor = () => {
    switch (status) {
      case "online":
        return "shadow-green-500/50";
      case "offline":
        return "shadow-red-500/50";
      default:
        return "shadow-yellow-500/50";
    }
  };

  return (
    <motion.div
      className="inline-flex items-center gap-2 cursor-pointer"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      onClick={checkSystemStatus}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className={`relative w-1.5 h-1.5 rounded-full ${getStatusColor()} shadow-lg`}
          style={{
            boxShadow: `0 0 5px 2px ${
              status === "online"
                ? "#10B981"
                : status === "offline"
                ? "#EF4444"
                : "#F59E0B"
            }`,
          }}
          animate={{
            boxShadow: [
              `0 0 5px 2px ${
                status === "online"
                  ? "#10B981"
                  : status === "offline"
                  ? "#EF4444"
                  : "#F59E0B"
              }`,
              `0 0 10px 4px ${
                status === "online"
                  ? "#10B981"
                  : status === "offline"
                  ? "#EF4444"
                  : "#F59E0B"
              }`,
              `0 0 5px 2px ${
                status === "online"
                  ? "#10B981"
                  : status === "offline"
                  ? "#EF4444"
                  : "#F59E0B"
              }`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {status === "online" && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#10B981" }}
              animate={{
                opacity: [0.7, 0.2, 0.7],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )}
        </motion.div>

        <motion.span
          className="text-xs"
          animate={{ opacity: isExpanded ? 1 : 0.7 }}
        >
          {isExpanded ? (
            <span className="flex items-center gap-1">
              {getStatusIcon()}
              <span>
                {status === "online"
                  ? "All systems operational"
                  : status === "offline"
                  ? "System disruption"
                  : "Checking status..."}
              </span>
            </span>
          ) : (
            "System status"
          )}
        </motion.span>
      </div>
    </motion.div>
  );
}
