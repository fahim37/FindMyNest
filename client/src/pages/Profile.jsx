import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser);
  console.log(currentUser.avatar);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full w-24 h-24 self-center cursor-pointer m-1"
          src={currentUser.currentUser.avatar}
          alt="DP"
        />
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 uppercase">
          Update
        </button>
      </form>
      <div className="mt-3 flex justify-between">
        <span className="text-red-700 font-semibold cursor-pointer">
          Delete Account
        </span>
        <span className="text-red-700 font-semibold cursor-pointer">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
