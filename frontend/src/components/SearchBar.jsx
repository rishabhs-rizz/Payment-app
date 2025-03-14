export default function SearchBar({ onChange }) {
  return (
    <div>
      <p className="font-bold text-2xl px-15">Users</p>{" "}
      <div className="px-15 py-4">
        <input
          onChange={onChange}
          type="text"
          placeholder="o^o Search Account"
          className="w-full border-black border rounded py-1 px-2"
        />
      </div>
    </div>
  );
}
