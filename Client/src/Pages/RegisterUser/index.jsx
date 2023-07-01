import { useState } from "react";
import Logo from "./../Login/Logo";
import DataInp from "./../Login/input";
import "./style.css";
import AlertRed from "../../Components/AlertRed";

var myHeaders = new Headers();
myHeaders.append(
  "authorization",
  "nvdjvbfhvbknx jvbdfuvbguyrgyubrguybvdfhvfkvefiv"
);
myHeaders.append("Content-Type", "application/json");

function RegisterNewUser(e) {
  const [newUserData, setNewUserData] = useState({});
  const [returnStats, setReturnStats] = useState({});
  const getUserData = (e) => {
    const { id, value } = e.target;
    const password = id === "password" ? value : "";
    let userName =
      newUserData.fName && newUserData.lName
        ? newUserData.fName +
          newUserData.lName +
          Math.floor(Math.random() * 100000)
        : "";
    setNewUserData({
      ...newUserData,
      userName: userName.toLowerCase(),
      [id]: value.toLowerCase(),
      password,
    });
    console.log(newUserData);
  };

  //<--------- User Registering Function --------->

  const RegisterUser = async () => {
    var raw = JSON.stringify(newUserData);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:8080/addUser", requestOptions)
      .then((response) => response.json())
      .then((result) => setReturnStats(result))
      .catch((error) => console.log("error", error));
    return false;
  };

  return (
    <>
      <div className="p-10 h-full flex justify-center items-center register rounded-xl">
        {returnStats.originalError === undefined ? (
          <div className="w-full -mt-6">
            <Logo />
            <h1 className="mt-3 text-center text-xl mb-2">Welcome !</h1>
            <form action="submit" method="POST">
              <div className="">
                <DataInp
                  typ="text"
                  placeholder="Please enter first name"
                  id="fName"
                  label="First Name"
                  getUserData={getUserData}
                />
                <DataInp
                  typ="text"
                  placeholder="Please enter last name"
                  id="lName"
                  label="Last Name"
                  getUserData={getUserData}
                />
                <DataInp
                  typ="email"
                  placeholder="Please enter email id"
                  id="mail"
                  label="Email"
                  getUserData={getUserData}
                />
                <DataInp
                  typ="password"
                  placeholder="Please enter Password"
                  id="password"
                  label="Password"
                  getUserData={getUserData}
                />
              </div>
              <div className="mb-5 text-start"></div>
              <div className="">
                <button
                  onClick={RegisterUser}
                  className="h-[44px] bg-black text-white w-full mb-[20px] rounded-xl"
                  type="button"
                >
                  Register
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
                  Login
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="">
            <AlertRed returnStats={returnStats} />

            <button
              className="h-[44px] border-black border hover:bg-black hover:text-white text-black w-full mt-[20px] rounded-xl"
              type="submit"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default RegisterNewUser;
