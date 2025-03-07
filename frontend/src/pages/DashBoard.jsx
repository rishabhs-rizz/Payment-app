import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import User from "../components/User";


export default function DashBoard({Amount}) {

    return <div className="h-screen bg-white">
        <NavBar user={"Rishabh shukla" }/>
        <div className="p-15 font-bold text-2xl">Your Balance :- {Amount}</div>
        <SearchBar/>
        <User UserName={"harkirat singh"} />
        <User UserName={"harkirat singh"} />
        <User UserName={"harkirat singh"} />
    </div>
}