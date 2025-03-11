import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputLabel from "../components/InputLabel";
import SubHeading from "../components/SubHeading";
import axios, { Axios } from "axios";
import { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen bg-slate-400 flex items-center justify-center">
      <div className="bg-white w-[23vw] h-[70vh]  font-extrabold rounded-2xl">
        <Heading label="Sign up" />
        <SubHeading text={"Enter your details to create an account"} />
        <InputLabel
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          entry={"First Name"}
          placeholder={"nick"}
        />
        <InputLabel
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          entry={"Last Name"}
          placeholder={"pandey"}
        />
        <InputLabel
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          entry={"Username"}
          placeholder={"nickyyp@gmail.com"}
        />
        <InputLabel
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          entry={"Password"}
          placeholder={"ding_ding***"}
        />
        <Button
          onClick={async () => {
            await axios
              .post("http://localhost:3000/api/v1/user/signup", {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
              })
              .then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                window.location.href = "/signin";
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          label={"SUBMIT"}
        />
        <BottomWarning
          warning={"Already have an account ! SignIn"}
        ></BottomWarning>
      </div>
    </div>
  );
}
