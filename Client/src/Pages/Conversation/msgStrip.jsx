import { useEffect, useRef } from "react";

function MsgStrip({ selectedUser, props }) {
  const scrollHeight = useRef(null);
  const data = (a) => {
    return a;
  };
  const handleScroll = () => {
    if (scrollHeight.current !== null) {
      const scrollTotalHeight = scrollHeight.current.scrollHeight;
      scrollHeight.current.scrollTop = scrollTotalHeight;
    }
  };
  useEffect(() => {
    handleScroll();
    data(JSON.parse(localStorage.getItem(selectedUser.name)) || []);
  }, [handleScroll, props]);
  return (
    <>
      <div className="h-[640px] max-h-[640px] w-full rounded-b-xl bg-slate-800 pb-20">
        <div
          ref={scrollHeight}
          //   onLoad={handleScroll}
          className="mb-32 max-h-[580px] overflow-y-scroll scroll-hide"
        >
          <div className="flex justify-center items-center gap-5">
            <h1 className="bg-white shadow-md px-4 py-0.5 rounded mt-3 text-xs">
              Today
            </h1>
          </div>
          {data(JSON.parse(localStorage.getItem(selectedUser.name)) || []).map((v, i) => {
            return (
              <>
                {true ? (
                  <div className="flex justify-end">
                    <div className="relative bg-[#E7FFDB] w-fit max-w-[260px] rounded-b-lg rounded-tl-lg m-1 min-w-[80px] text-start px-3 pb-3 py-1 shadow-md">
                      <p className="text-sm">{v.msg}</p>
                      <span className="absolute bottom-0 right-3 text-[#373737] text-[9px] flex gap-1">
                        {v.date}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="w-3 h-3 text-[#1FA2FF]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start">
                    <div className="relative bg-white w-fit max-w-[260px] rounded-b-2xl rounded-tr-2xl m-2 text-start px-3 pb-3 py-1 shadow-md">
                      <p className="text-sm">
                        Hello dear, My name is jone i am from USA and come to
                        india for visit, So pl
                      </p>
                      <span className="absolute bottom-0 right-3 text-[#373737] text-[9px]">
                        11:10 AM
                      </span>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MsgStrip;
