import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatbotWindow from "./ChatbotWindow";

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "hsl(var(--primary))",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          zIndex: 1000,
          display: open ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          border: "none",
        }}
      >
        <MessageCircle size={28} />
      </button>
      {open && <ChatbotWindow onClose={() => setOpen(false)} />}
    </>
  );
};

export default ChatbotButton; 