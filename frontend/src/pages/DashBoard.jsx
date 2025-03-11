import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import User from "../components/User";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashBoard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data && response.data.user) {
          setUsers(response.data.user);
        } else {
          setUsers([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data && response.data.balance) {
          setBalance(response.data.balance);
        } else {
          setBalance(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users]);

  return (
    <div className="h-screen bg-white">
      <NavBar user={"Rishabh shukla"} />
      <div className="p-15 font-bold text-2xl">
        Your Balance :- {parseFloat(balance).toFixed(3)}
      </div>
      <SearchBar
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <div>
        {" "}
        {users.map((user) => (
          <User
            firstName={user.firstName}
            lastName={user.lastName}
            id={user._id}
          />
        ))}{" "}
      </div>
    </div>
  );
}
