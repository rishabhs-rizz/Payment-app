import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function User({ firstName, lastName, id }) {
  const navigate = useNavigate();
  return (
    <div className="px-15 [2] flex justify-between items-center">
      <span className="font-bold">
        {firstName} {lastName}
      </span>
      <Button
        onClick={(e) => {
          navigate("/sendMoney?id=" + id + "&name=" + firstName);
        }}
        label={"Send Money"}
      />
    </div>
  );
}
