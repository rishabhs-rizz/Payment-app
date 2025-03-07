import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputLabel from "../components/InputLabel";
import SubHeading from "../components/SubHeading";

export default function Signup () {
    return <div className="h-screen bg-slate-400 flex items-center justify-center">
        <div className="bg-white w-[23vw] h-[70vh]  font-extrabold rounded-2xl">
            <Heading label="Sign up" />
            <SubHeading text={"Enter your details to create an account"}/>
            <InputLabel entry={"First Name"} placeholder={"nick"} />
            <InputLabel entry={"Last Name"} placeholder={"pandey"} />
            <InputLabel entry={"Username"} placeholder={"nickyyp@gmail.com"} />
            <InputLabel entry={"Password"} placeholder={"ding_ding***"} />
            <Button label={"SUBMIT"}/>
            <BottomWarning warning={"Already have an account ! SignIn"}></BottomWarning>
        </div>
    </div>
}