import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SendMoney() {
  const [amount, setAmount] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  console.log("id", id, "name", name);

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 class="text-2xl font-semibold text-center mb-4">Send Money</h2>

        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full text-lg font-semibold">
            {name[0].toUpperCase()}
          </div>
          <span class="text-lg font-medium">{name}</span>
        </div>

        <label class="block text-gray-700 text-sm mb-1">Amount (in Rs)</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          placeholder="Enter amount"
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none mb-4"
        />

        <button
          onClick={() => {
            axios
              .post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                  to: id,
                  amount: amount,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then(() => {
                alert("Transfer initiated successfully");
                window.location.href = "/success";
              });
          }}
          class="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}
