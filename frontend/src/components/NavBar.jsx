
export default function NavBar({user, greetName}) {

    return <div className="p-2 flex justify-between items-stretch border-black border">
        <span className="p-2 bg-gray-400 rounded-[5px] ">{`${user} :)`}</span>
        <div className="pt-2">
        <span>Hello {greetName}</span>
        <span className="px-2">
        <span className="p-2 rounded-[100px] bg-gray-400">u</span>
        </span>
        </div>
    </div>
}