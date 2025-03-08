

export default function InputLabel({entry , placeholder, onChange}) {

    return <div className=" px-10 justify-center items-center pt-3">
        <div>{entry}</div>
        <div><input onChange={onChange} type="text" placeholder = {placeholder} className="border-gray-500 border w-[90%] px-2 py-1 font-medium rounded-[5px]"  /></div>
    </div>
}