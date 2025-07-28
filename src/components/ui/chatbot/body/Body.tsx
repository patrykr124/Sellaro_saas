import Footer_chat from "./Footer_chat";
import Header_chat from "./Header_chat";


import Middle_chat from "./Middle_chat";

export default function Body() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header_chat />
      <Middle_chat />
      <Footer_chat />
    </div>
  );
}
