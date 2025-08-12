"use client";

import { message_chat_type } from "@/app/type/message_chat_type";

import { db } from "@/lib/firebase";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

export default function Middle_chat() {
  const [conntent, setConntent] = useState<message_chat_type[]>([]);
  const [loadingAiConntent, setLoadingAiConntent] = useState(false);
  const autoScroll = useRef<HTMLDivElement>(null);
  console.log(loadingAiConntent);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          _id: doc.id,
          content: data.content ?? "",
          createdAt: data.createdAt ?? "",
          role: data.role ?? "",
        };
      });
      setConntent(msgs);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (autoScroll.current) {
      autoScroll.current.scrollTop = autoScroll.current.scrollHeight;
    }
  }, [conntent, loadingAiConntent]);

  useEffect(() => {
    const lastContent = conntent[conntent.length - 1];
    const aiConntent = lastContent && lastContent.role !== "ai";
    if (aiConntent) {
      setLoadingAiConntent(true);
    } else {
      setLoadingAiConntent(false);
    }
  }, [conntent]);

  return (
    <div ref={autoScroll} className="h-[550px] p-4 overflow-x-auto space-y-2.5">
      {conntent.map((item: message_chat_type) => {
        return (
          <div
            className={`${
              item.role === "user" ? " items-end " : "items-start"
            } flex flex-col`}
            key={item._id}
          >
            <div className="">
              {item.role === "ai" ? (
                <p className="font-light text-sm mb-0.5">Sellaro</p>
              ) : (
                <p className="font-light text-sm mb-0.5">User</p>
              )}

              <p
                className={`${
                  item.role === "ai"
                    ? " bg-background-gray w-fit p-2.5 rounded-tl-md rounded-r-md whitespace-pre-line "
                    : " border-[0.1px] border-black/15 w-fit p-2.5 rounded-tl-md rounded-r-md  "
                }`}
              >
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
      {loadingAiConntent && <Loading />}
    </div>
  );
}
