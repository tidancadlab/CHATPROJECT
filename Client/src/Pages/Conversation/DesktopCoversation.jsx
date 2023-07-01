function DesktopConversation() {
  return (
    <>
      <div className="h-[720px] xl:w-[1220px] lg:w-96 xs:w-0 bg-gray-800 shadow rounded-xl relative ease-in-out duration-1000">
        <div className="h-20 bg-gray-900 rounded-t-xl relative flex items-center justify-between px-6 xs:hidden sm:flex">
          <div className="flex flex-row items-center gap-4">
            <button className="h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
            <div
              className="profile-img w-12 h-12 rounded-full border"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="text-left text-white">
              <h1 className="text-xl">Praveen Kumar</h1>
              <p className="text-sm flex items-center gap-4">Online</p>
            </div>
          </div>
          <div>
            <div role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopConversation;
