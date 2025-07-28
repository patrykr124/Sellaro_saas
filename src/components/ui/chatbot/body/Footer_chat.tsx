import { Send } from "lucide-react";
import Recommended_chat from "./Recommended_chat";
import Logo_chat from "./Logo_chat";

export default function Footer_chat() {
  return (
    <div className="">
      <div className="h-[120px]  px-4  ">
        <div className="overflow-hidden flex flex-col items-center justify-center gap-1.5">
          <div className="">
            <Recommended_chat />
          </div>
          <div className="relative w-full ">
            <textarea placeholder="Type your message here..." className=" border-[0.5px] outline-none  p-2 rounded-lg w-full max-h-[42px] resize-none border-black/20 " />
            <Send className="absolute top-2.5 right-3 cursor-pointer" />
          </div>
          <Logo_chat />
        </div>
      </div>
    </div>
  );
}
