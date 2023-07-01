function SearchHeader({props}) {
  return (
    <>
      <div className="flex gap-2 pt-4 px-2">
        <button onClick={()=> props(false)} className="text-white">
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
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <input className="w-full mr-4 outline-none bg-transparent rounded-full px-2 text-white" placeholder="Search..." type="text" />
      </div>
    </>
  );
}

export default SearchHeader;
