import Main from './logo';

const Navbar = () => {
  return (
    <div className="p-1 rounded-lg shadow-md">
      <nav className="flex justify-between items-center py-1 px-6">
        <div className="flex items-center">
          <a className="btn btn-ghost" href="https://www.kluniversity.in/">
            <Main />
          </a>
        </div>
        <div className="hidden lg:flex space-x-4">
          {/* Buttons for larger screens */}
          <div className="btn btn-outline btn-primary">Sign Up</div>
          <div className="btn btn-outline btn-primary">Login</div>
        </div>
        <div className="flex lg:hidden">
          {/* Hamburger menu icon for smaller screens */}
          <button className="btn btn-ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
