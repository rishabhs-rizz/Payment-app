import Heading from "../components/Heading";
import InputLabel from "../components/InputLabel";
import SubHeading from "../components/SubHeading";

export default function Signup () {
    return <div className="h-screen bg-slate-400 flex justify-center">
        <div className="bg-white w-[25vw] h-[80vh] font-extrabold">
            <Heading label="Sign up" />
            <SubHeading text={"Enter your details to create an account"}/>
            <InputLabel entry={"First Name"} placeholder={"nick"} />
            <InputLabel entry={"Last Name"} placeholder={"pandey"} />
            <InputLabel entry={"username"} placeholder={"nickyyp@gmail.com"} />
            <InputLabel entry={"password"} placeholder={"ding ding***"} />
        </div>
    </div>
}