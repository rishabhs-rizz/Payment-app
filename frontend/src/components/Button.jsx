

export default function Button({label , onClick}) {

    return <div className="px-5 pt-8"> 
        <button onClick={onClick} className="w-full bg-green-400 rounded-[5px] p-2 ">{label}</button>
    </div>
}