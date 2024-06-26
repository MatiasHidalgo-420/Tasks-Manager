import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout,user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }>
        <h1 className="text-2xl text-white font-bold transition duration-300 ease-in-out hover:text-indigo-500 transition transform duration-300 hover:scale-105">Task Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="text-white font-semibold pr-8">Welcome User {user.username}</li>
            <li>
              <Link to="/add-task"
              className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700 "
              >Add Task</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"
              className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700"
              >Login</Link>
            </li>
            <li>
              <Link to="/register"
              className="bg-indigo-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700"
              >Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
