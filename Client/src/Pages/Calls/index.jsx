import CallsStrip from "./CallsStrip";
import userData from "./../Chat/chat.json";

function Calls() {
  return (
    <>
      <div id="Calls" className="min-w-full snap-always snap-center overflow-y-scroll max-h-[625px] scroll-hide">
        {userData.map((v, i) => (
          <CallsStrip key={i} v={v} />
        ))}
      </div>
    </>
  );
}

export default Calls;
