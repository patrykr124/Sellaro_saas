"use client";
import { Send } from "lucide-react";
import Recommended_chat from "./Recommended_chat";
import Logo_chat from "./Logo_chat";
import { useState } from "react";

export default function Footer_chat() {
  const [contentMessage, setContentMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!contentMessage.trim()) return;

    try {
      setLoading(true);

      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "user", content: contentMessage }),
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
      setContentMessage("");
    }
  }

  return (
    <div className=" pt-2">
      <div className="h-[120px] px-4  ">
        <div className="overflow-hidden flex flex-col items-center justify-center gap-1.5">
          <div className="">
            <Recommended_chat />
          </div>
          <form onSubmit={handleSubmit} className="relative w-full ">
            <textarea
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              value={contentMessage}
              onChange={(e) => setContentMessage(e.target.value)}
              placeholder="Type your message here..."
              className={`${
                loading && "bg-background-gray "
              } border-[0.5px] outline-none  p-2 rounded-lg w-full max-h-[42px] resize-none border-black/20 `}
            />
            <button type="submit">
              <Send
                className={`${
                  loading && " text-black/20  "
                } absolute top-2.5 right-3 cursor-pointer`}
              />
            </button>
          </form>
          <Logo_chat />
        </div>
      </div>
    </div>
  );
}
