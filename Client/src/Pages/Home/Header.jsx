import { useState } from "react";
import SearchHeader from "./Search";

function Header({ scroll, scrollPosition }) {
  const [searchActive, setSearchActive] = useState(false);


  return (
    <>
      <div className="h-20 bg-[#008069] rounded-t-xl relative">
        {!searchActive ? (
          <div className="text-white flex items-center justify-between w-full px-2 py-3">
            <h1 className="text-xl font-thin text-start">ChatApp</h1>
            <div className="flex gap-4">
              <div>
                <button onClick={() => setSearchActive(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <SearchHeader props={setSearchActive} />
        )}
        <div className="text-gray-300 font-thin flex justify-between gap-1 px-2.5 bottom-0 absolute w-full mb-1">
          <button onClick={scroll.scrollToStatusSet} className="w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={scrollPosition >= 359 ? "currentColor" : "rgb(147 197 253)"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </button>
          <div
            onClick={scroll.scrollToChats}
            style={{ color: scrollPosition === 360 && "rgb(147 197 253)" }}
            className="w-28 cursor-pointer"
          >
            <button className={"font-semibold"}>
              Chats
            </button>
          </div>
          <div
            onClick={scroll.scrollToStatus}
            style={{ color: scrollPosition === 720 && "rgb(147 197 253)" }}
            className="w-28 cursor-pointer"
          >
            <button className={"font-semibold"}>
              Status
            </button>
          </div>
          <div
            onClick={scroll.scrollToCalls}
            style={{ color: scrollPosition === 1080 && "rgb(147 197 253)" }}
            className="w-28 cursor-pointer"
          >
            <button className={"font-semibold"}>
              Calls
            </button>
          </div>
        </div>
        <div
          style={scrollPosition > 359 ? { left: (scrollPosition + scrollPosition * 0.06 - 250) / 3.6 } : {left: 2}}
          className={`${scrollPosition <= 359 ? "w-10" : "w-[101.33px]"} absolute -bottom-0 h-1 flex justify-center ease-in-out duration-300`}
        >
          <div className={`${scrollPosition <= 359 ? "w-9" : "w-14"} bg-blue-300 h-full rounded-t-md ease-in-out duration-300`}>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
