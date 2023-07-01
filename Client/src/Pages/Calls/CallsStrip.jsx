function CallsStrip({ v, i }) {
  return (
    <>
      <div className="flex justify-between items-center p-2 cursor-default first:mt-4">
        <div className="flex gap-2">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="w-11 h-11 rounded-full profile-img"
          ></div>
          <div className="w-48 text-start">
            <p className="font-bold text-base truncate">{v.name}</p>
            <p className="truncate text-sm flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-3 h-3 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </svg>
              </span>
              February 11, 23:17
            </p>
          </div>
        </div>
        <div className="text-end flex flex-col mr-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6 fill-[#01AB84] text-[#01AB84]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default CallsStrip;
