

export default function SendMoney() {

    return <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-semibold text-center mb-4">Send Money</h2>
      
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full text-lg font-semibold">
          A
        </div>
        <span class="text-lg font-medium">Friend's Name</span>
      </div>
  
      <label class="block text-gray-700 text-sm mb-1">Amount (in Rs)</label>
      <input type="text" placeholder="Enter amount"
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none mb-4" />
  
      <button class="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition">
        Initiate Transfer
      </button>
    </div>
  </div>
  
}