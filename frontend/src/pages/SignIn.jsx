import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputLabel from "../components/InputLabel";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  return (
    <div className="h-screen bg-slate-400 flex items-center justify-center">
      <div className="bg-white w-[23vw] h-[50vh]  font-extrabold rounded-2xl">
        <Heading label="Sign In" />
        <SubHeading text={"Enter your details to log into your account"} />
        <InputLabel
          onChange={() => {
            setUsername(e.target.value);
          }}
          entry={"Username"}
          placeholder={"nickyyp@gmail.com"}
        />
        <InputLabel entry={"Password"} placeholder={"ding_ding***"} />
        <Button
          onClick={async () => {
            await axios
              .post("http://localhost:3000/api/v1/user/signin", {
                username: username,
              })
              .then((response) => {
                console.log(response);
                window.location.href = "/dashboard";
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          label={"SUBMIT"}
        />
        <BottomWarning
          warning={"Don't have an account ! SignUp"}
        ></BottomWarning>
      </div>
    </div>
  );
}
