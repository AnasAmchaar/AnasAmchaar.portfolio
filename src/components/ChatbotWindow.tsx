import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface ChatbotWindowProps {
  onClose: () => void;
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatbotWindow = ({ onClose }: ChatbotWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! Ask me anything about Anas Amchaar." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user" as const, text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setLoading(true);
    try {
      // Placeholder: call your backend here
      const res = await fetch("/api/chatbot/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage.text }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: data.answer || "Sorry, I couldn't find an answer." },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, there was an error. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,
        right: 24,
        width: 320,
        maxWidth: "90vw",
        background: "hsl(var(--card))",
        color: "hsl(var(--foreground))",
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        zIndex: 1001,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, borderBottom: "1px solid hsl(var(--border))" }}>
        <span style={{ fontWeight: 600 }}>Ask Anas (Chatbot)</span>
        <button onClick={onClose} aria-label="Close chatbot" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}>
          <X />
        </button>
      </div>
      <div style={{ flex: 1, padding: 12, overflowY: "auto", maxHeight: 260 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            marginBottom: 8,
            textAlign: msg.sender === "user" ? "right" : "left",
          }}>
            <span
              style={{
                display: "inline-block",
                background: msg.sender === "user" ? "hsl(var(--primary))" : "hsl(var(--muted))",
                color: msg.sender === "user" ? "#fff" : "hsl(var(--foreground))",
                borderRadius: 12,
                padding: "6px 12px",
                maxWidth: 220,
                wordBreak: "break-word",
                fontSize: 14,
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: "flex", borderTop: "1px solid hsl(var(--border))", padding: 8, background: "hsl(var(--card))" }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "inherit",
            fontSize: 14,
            padding: "6px 8px",
          }}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            marginLeft: 8,
            background: "hsl(var(--primary))",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "6px 14px",
            fontWeight: 500,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWindow; 