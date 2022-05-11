import { FC } from 'react';
import Link from "next/link";
export const ContentContainer: FC = props => {
  const wrapper = { 
    sidenav:'p-4 overflow-y-auto menu w-80 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg'
  }

  return (
    <div className="flex-1 drawer h-52">
     {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">
        {props.children}
      </div>

      {/* SideBar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className={wrapper.sidenav}>
          <li>
            <h1>Menu</h1>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Basics</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Collections</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>LaunchPad</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Auctions</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Drop Calender</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Statistics</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Creators</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Community</a>
            </Link>
          </li>
          <li>
            <Link href="/basics">
              <a>Resources</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
