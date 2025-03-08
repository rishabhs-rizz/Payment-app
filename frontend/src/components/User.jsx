import Button from "./Button";


export default function User({UserName}) {

    return <div className="px-15 [2] flex justify-between items-center">
        <span className="font-bold capitalize">{UserName}</span>
        <Button label={"Send Money"}/>
    </div>
}