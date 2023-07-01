import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
function InputSection({ sendMsg, setCovData, covData }) {
  const [textArea, setTextArea] = useState(20);
  const [choseEmoji, setChoseEmoji] = useState(true);

  const sendMsgOnEnter = (e) => {
    if (e.key === "Enter") {
      sendMsg();
    }
  };

  const textScroll = (e) => {
    var lines = e.target.value.split(/\r|\r\n|\n/).length;
    const text = e.target.value;
    const charWidths = [];
    let txt = 0;
    for (let i = 0; i < text.length; i++) {
      const hdn = document.createElement("span");
      hdn.style.visibility = "hidden";
      hdn.style.position = "absolute";
      hdn.style.whiteSpace = "nowrap";
      hdn.textContent = text[i];
      document.body.appendChild(hdn);
      const width = hdn.offsetWidth;
      document.body.removeChild(hdn);
      txt = txt + width;
      charWidths.push({ char: text[i], width });
    }

    setTextArea(Math.floor(txt / 190 + lines) * 20);
  };
  return (
    <>
      <div className="flex justify-between px-1 gap-2 relative">
        <div
          style={{ height: 20 + textArea }}
          className="w-full max-h-36 flex items-end pb-2 gap-2 outline-none rounded-lg px-2 bg-white py-1"
        >
          <button>
            {choseEmoji ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            ) : (
              <div className="absolute bottom-0 left-0.5">
                <EmojiPicker
                  emojiStyle="google"
                  lazyLoadEmojis="true"
                  searchDisabled="true"
                />
              </div>
            )}
          </button>
          <textarea
            value={ covData}
            onChange={(e) => {setCovData(e.target.value)}}
            onKeyDown={sendMsgOnEnter}
            style={{ height: textArea }}
            className="w-full max-h-32 min-h-[20px] resize-none outline-none scroll-hide text-sm"
            name=""
            id=""
            cols="0"
            placeholder="Type here..."
            rows={textArea / 20}
          ></textarea>
          <div className="flex gap-3 pr-2">
            <button>
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
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </button>
            <button>
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
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-end">
          <button
            onClick={() => sendMsg()}
            className="w-10 h-10 flex justify-center items-center text-white bg-[#008069] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default InputSection;
