export default function Button({ label, onClick }) {
  return (
    <div className="px-5 py-4">
      <button
        onClick={onClick}
        className="w-full bg-green-400 rounded-[5px] p-2 hover:bg-green-500 cursor-pointer text-white"
      >
        {label}
      </button>
    </div>
  );
}
