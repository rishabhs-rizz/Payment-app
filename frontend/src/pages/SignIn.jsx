import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputLabel from "../components/InputLabel";
import SubHeading from "../components/SubHeading";

export default function SignIn() {

    return <div className="h-screen bg-slate-400 flex items-center justify-center">
            <div className="bg-white w-[23vw] h-[50vh]  font-extrabold rounded-2xl">
                <Heading label="Sign In" />
                <SubHeading text={"Enter your details to log into your account"}/>
                <InputLabel entry={"Username"} placeholder={"nickyyp@gmail.com"} />
                <InputLabel entry={"Password"} placeholder={"ding_ding***"} />
                <Button label={"SUBMIT"}/>
                <BottomWarning warning={"Don't have an account ! SignUp"}></BottomWarning>
            </div>
        </div>
}