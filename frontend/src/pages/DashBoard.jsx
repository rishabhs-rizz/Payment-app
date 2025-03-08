import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import User from "../components/User";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashBoard({ Amount }) {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk" + filter)
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  return (
    <div className="h-screen bg-white">
      <NavBar user={"Rishabh shukla"} />
      <div className="p-15 font-bold text-2xl">Your Balance :- {Amount}</div>
      <SearchBar
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <div>
        {" "}
        {users.map((user) => (
          <User UserName={user.firstName + " " + user.lastName} />
        ))}{" "}
      </div>
    </div>
  );
}
