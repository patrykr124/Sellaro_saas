import { dummy_message } from "@/data/dummy_message";

export default function Middle_chat() {
  return (
    <div className="h-[520px] p-4">
      {dummy_message.map((item) => {
        return (
          <div key={item.id}>
            {item.type === "BOT" && <p className="font-light text-sm mb-0.5">Sellaro</p>}
            <p
              className={`${
                item.type === "BOT"
                  ? " bg-background-gray w-fit p-2.5 rounded-tl-md rounded-r-md  "
                  : " "
              }`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
