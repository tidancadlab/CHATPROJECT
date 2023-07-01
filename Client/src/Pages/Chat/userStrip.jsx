function UserStrip({v, goToConversation, setSelectedUser}) {
  return (
    <>
      <div onClick={() => {goToConversation(false); setSelectedUser(v)}} className="flex justify-between items-center p-2 hover:bg-green-100 cursor-pointer first:mt-4">
        <div style={{ backgroundSize:"cover", backgroundPosition:"center"}} className="w-11 h-11 rounded-full profile-img">
          
        </div>
        <div className="w-48 text-start">
          <p className="font-bold text-base truncate capitalize">{v.name || v.fName + " "+ v.lName}</p>
          <p className="truncate text-sm">Don't Know</p>
        </div>
        <div className="w-20 text-end flex flex-col gap-1">
          <span className="font-bold text-xs text-[#5F5F5F]">11:10 AM</span>
          <div className="flex justify-end">
            {v.pendingMsg !== 0 ? <div className="relative h-6 w-6 bg-[#03AA82] rounded-full text-xs font-semibold">
              <p className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">1</p>
            </div> : <span className=" rounded-full px-[6.76px] py-0.5 text-xs font-bold">
            </span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserStrip;
