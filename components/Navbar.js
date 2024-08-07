import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/Logo.png';
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5"; // Import the close icon

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="topStrip">
        <h6 className="stripHeading">Lorem, ipsum dolor</h6>
        <h6 className="stripHeading">Lorem, ipsum dolor</h6>
        <h6 className="stripHeading">Lorem, ipsum dolor</h6>
      </div>
      <div className="content">
        <div className="upperSection">
          <div className="sidebar-with-icon">
            <VscThreeBars className='sidebar-icon' size={26} onClick={toggleSidebar} />
            <div className="left">
              <Image src={Logo} alt="Logo image" width={36} height={36} />
            </div>
          </div>
          <div className="center">
            <h1>LOGO</h1>
          </div>
          <div className="right">
            <div className="icons">
              <CiSearch size={28} />
              <CiHeart size={28} />
              <IoBagRemoveOutline size={28} />
              <CiUser size={28} />
              <span className="language">
                ENG <IoIosArrowDown size={28} />
              </span>
            </div>
          </div>
        </div>
        <div className={`bottomSection ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="close-button">
            <IoCloseOutline size={30} onClick={toggleSidebar} />
          </div>
          <ul className="navMenu">
            <li><Link href="/shop">SHOP</Link></li>
            <li><Link href="/skills">SKILLS</Link></li>
            <li><Link href="/stories">STORIES</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact-us">CONTACT US</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
