import Chat from "../Chat";
import Status from "../Status";
import Calls from "../Calls";
import Conversation from "../Conversation";
import Header from "./Header";
import { useState, useRef, useEffect } from "react";
import HomeOption from "./ThreeDotOption";

function MainChatPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isConversation, setIsConversation] = useState(true);
  const [selectedUser, setSelectedUser] = useState([]);

  const goToConversation = (e) => {
    setIsConversation(e);
  };

  const containerRef = useRef(null);
  const handleScroll = () => {
    if (containerRef.current !== null) {
      const scrollTop = containerRef.current.scrollLeft;
      setScrollPosition(scrollTop);
    }
  };
  const scrollToStatusSet = () => {
    if (containerRef.current !== null) {
      containerRef.current.scrollLeft = 0;
    }
  };
  const scrollToChats = () => {
    if (containerRef.current !== null) {
      containerRef.current.scrollLeft = 360;
    }
  };
  const scrollToStatus = () => {
    if (containerRef.current !== null) {
      containerRef.current.scrollLeft = 720;
    }
  };
  const scrollToCalls = () => {
    if (containerRef.current !== null) {
      containerRef.current.scrollLeft = 1080;
    }
  };
  useEffect(()=>{
    scrollToChats()
  },[])
  return (
    <>
      <div className="relative h-full">
        <div>
          {isConversation ? (
            <>
              <Header
                scroll={{ scrollToChats, scrollToStatus, scrollToCalls, scrollToStatusSet }}
                scrollPosition={scrollPosition}
              />
              <div
                ref={containerRef}
                onScroll={handleScroll}
                id="MainPage"
                className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scroll-hide"
              >
                <HomeOption />
                <Chat
                  goToConversation={goToConversation}
                  setSelectedUser={setSelectedUser}
                />
                <Status />
                <Calls />
              </div>
            </>
          ) : (
            <Conversation
              selectedUser={selectedUser}
              goToConversation={goToConversation}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default MainChatPage;
