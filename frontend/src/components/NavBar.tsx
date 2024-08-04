export const NavBar = ({username}: {username: string}) => {
  return (
    <div className="w-screen shadow-xl bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-gray-100 font-semibold text-2xl">100x Devs</h3>
        <div className="flex items-center">
          <span className="text-gray-100 mr-4">Welcome,</span>
          <div className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-medium">
            {username || "UserName"}
          </div>
        </div>
      </div>
    </div>
  );
};
