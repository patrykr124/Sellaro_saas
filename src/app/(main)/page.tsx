
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-[50rem] w-full overflow-hidden  antialiased md:items-start md:justify-center">
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 md:mt-42 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Discover the Power of Seamless <br /> Your AI Chat Solutions
        </h1>
        <div className="w-full absolute items-center flex justify-center translate-y-20">
          <Image
            className=""
            alt="iphone"
            src={"/iphone.png"}
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
