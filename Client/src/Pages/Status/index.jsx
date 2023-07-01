import chatData from "../Chat/chat.json";

function Status() {
  return (
    <>
      <div
        id="Status"
        className="min-w-full snap-always snap-center p-2.5 pt-4 overflow-y-scroll h-[625px] scroll-hide scroll-smooth"
      >
        <div className="flex items-center gap-4 relative">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-14 h-14 rounded-full profile-img"
          ></div>
          <div className="absolute w-5 h-5 rounded-full bg-[#03AA82] bottom-0.5 left-10 text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="text-start">
            <h1 className=" text-lg font-bold">My status</h1>
            <p className=" text-sm font-thin">Tap to add status update</p>
          </div>
        </div>
        <div className="">
          <h1 className=" text-lg font-bold text-[#34393A] mt-4 mb-5 text-start">
            Recent updates
          </h1>
          {chatData.map((v, i) => {
            return (
              <div key={i} className="flex items-center gap-4 mb-3">
                <div className="relative w-16 h-16 flex justify-center items-center">
                  <svg className="absolute" height="62" width="62">
                    <circle
                      cx="31"
                      cy="31"
                      r="30"
                      stroke="#05A351"
                      strokeLinecap="round"
                      strokeDashoffset="387.69908169872417"
                      strokeWidth="2"
                      strokeDasharray={
                        v.statusImg === 1
                          ? 0
                          : 188.4 / v.statusImg - 5 + " " + 5
                      }
                      fill="transparent"
                    />
                    Sorry, your browser does not support inline SVG.
                  </svg>

                  <div
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-14 h-14 rounded-full profile-img"
                  ></div>
                </div>
                <div className="text-start">
                  <h1 className=" text-lg font-bold">{v.name}</h1>
                  <p className=" text-sm font-thin">8 minutes ago</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Status;
