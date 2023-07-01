import userData from "./chat.json";
import UserStrip from "./userStrip";
import msgIcon from "../../Images/msgicon.png";
import { useEffect, useState } from "react";

var myHeaders = new Headers();
myHeaders.append(
  "authorization",
  "nvdjvbfhvbknx jvbdfuvbguyrgyubrguybvdfhvfkvefiv"
);
myHeaders.append("Content-Type", "application/json");

function Chat({ goToConversation, setSelectedUser }) {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch("http://localhost:8080/", requestOptions)
      .then((response) => response.json())
      .then((result) => setUsers(result[0]))
      .catch((error) => console.log("error", error));
  };
  
  useEffect(() => {
    getUsers();
  }, [1]);

  return (
    <>
      <div
        id="Chats"
        className="relative min-w-full max-h-[624px] snap-always snap-center overflow-y-scroll scroll-hide scroll-smooth"
      >
        {userData.map((v, i) => (
          <UserStrip
            setSelectedUser={setSelectedUser}
            key={i}
            v={v}
            goToConversation={goToConversation}
          />
        ))}
        <button className="sticky w-14 h-14 bg-[#00AB81] rounded-full left-72 bottom-10">
          <img
            className="w-[30px] h-[21px] absolute top-4 left-4"
            src={msgIcon}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Chat;
