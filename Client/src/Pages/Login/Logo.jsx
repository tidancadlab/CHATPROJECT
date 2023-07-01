import LOGO from "../../Images/Logo.png"
function Logo() {
  return (
    <div className="flex justify-center items-center flex-col">
      <img className="w-[42px] h-[42px]" src={LOGO} alt="" />
      <h1>ChatApp</h1>
    </div>
  );
}

export default Logo;
