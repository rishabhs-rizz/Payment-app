import { CheckCircle } from "lucide-react";
import Button from "../components/Button";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />

        <h1 className="text-2xl font-semibold mt-4">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        <Button
          label={"PAY AGAIN"}
          className="mt-6"
          onClick={() => (window.location.href = "/dashboard")}
        ></Button>
      </div>
    </div>
  );
}
