import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import InputSection from "./InputSection";
import MsgStrip from "./msgStrip";

function Conversation({ goToConversation, selectedUser }) {
  const date = Date().slice(15, 25);

  const [covData, setCovData] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(selectedUser.name)) || []
  );
  const sendMsg = (e) => {
    if (covData !== "\n" && covData.length > 0) {
      setData([
        ...data,
        { date: date, msg: covData, userName: selectedUser.name },
      ]);
      console.log(data);
      setCovData("");
      localStorage.setItem(selectedUser.name, JSON.stringify(data));
    } else {
      setCovData("");
    }
  };
  return (
    <>
      <div className="relative">
        <ChatHeader
          selectedUser={selectedUser}
          goToConversation={goToConversation}
        />
        <MsgStrip selectedUser={selectedUser} props={data} />
        <div className="absolute bottom-0 w-full py-1 rounded-b-xl">
          <InputSection
            sendMsg={sendMsg}
            covData={covData}
            setCovData={setCovData}
          />
        </div>
      </div>
    </>
  );
}

export default Conversation;
