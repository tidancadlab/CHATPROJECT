import Logo from "./Logo";
import DataInp from "./input";

function Login() {
  return (
    <>
      <div className="p-10 h-full flex justify-center items-center">
        <div className="w-full">
          <Logo />
          <h1 className="mt-[43px] text-xl text-start mb-6">Welcome Back !</h1>
          <form action="submit">
            <div className="">
              <DataInp
                typ="email"
                placeholder="Please enter email"
                id="email"
                label="Email"
              />
              <DataInp
                typ="password"
                placeholder="Please enter Password"
                id="password"
                label="Password"
              />
            </div>
            <div className="mb-5 text-start">
              <a className="text-sm text-blue-500 hover:underline" href="#">
                Forget Password
              </a>
            </div>
            <div className="">
              <button
                className="h-[44px] bg-black text-white w-full mb-[20px] rounded-xl"
                type="submit"
              >
                Login
              </button>
              <div className="flex gap-4 justify-center">
                <span>---------------</span>
                or
                <span>---------------</span>
              </div>
              <button
                className="h-[44px] border-black border hover:bg-black hover:text-white text-black w-full mt-[20px] rounded-xl"
                type="submit"
              >
                New User Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
