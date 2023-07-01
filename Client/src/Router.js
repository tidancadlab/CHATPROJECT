import MainChatPage from "./Pages/Home/index";
import Login from "./Pages/Login";
import RegisterNewUser from "./Pages/RegisterUser";

function AppRouter() {
    return ( <>
    <div className="bg-white h-[720px] w-[360px] rounded-xl relative">
        {/* <Login/> */}
        <MainChatPage/>
        {/* <RegisterNewUser/> */}
    </div>
    </> );
}

export default AppRouter;