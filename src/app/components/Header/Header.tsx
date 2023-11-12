import Image from 'next/image';
import { HeaderNavigation } from './HeaderNavigation';

const Header = () => {
  return (
    <header className="drawer mb-16 md:mb-28">
      <input id="drawerToggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4">
        <div className="navbar w-full max-w-7xl">
          <nav className="navbar-start">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </nav>
          <nav className="navbar-center hidden lg:flex">
            <HeaderNavigation />
          </nav>
          <nav className="navbar-end">
            <div className="dropdown">
              <label
                tabIndex={0}
                htmlFor="drawerToggle"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </nav>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawerToggle"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <nav id="drawer-menu" className="menu p-4 w-80 min-h-full bg-neutral">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <HeaderNavigation orientation="vertical" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
