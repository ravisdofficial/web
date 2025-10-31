import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
import LogoImg from '../../assets/header/logo.png';
import ChevronDown from "/src/assets/header/chevron-down.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const Logo = styled.img`
    width: 95.33px;
    height: 67px;
    left: 120px;
    top: 14px;
  `;

  const HeaderContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row !important;
    }
  `;

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <HeaderContainer className="container mx-auto px-4 py-3">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-black-600 cursor-pointer">
          <Logo src={LogoImg} alt="Logo" />
        </Link>

        {/* Center: Menu for Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/about" className="hover:text-black-600 transition font-inter cursor-pointer">About Us</Link>
          <Link to="/farmland" className="flex flex-row hover:text-black-600 transition font-inter cursor-pointer">Managed Farmlands &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
          <Link to="/villa" className="flex flex-row hover:text-black-600 transition font-inter cursor-pointer">Luxury Villas &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
          <Link to="/revenue" className="hover:text-black-600 transition font-inter cursor-pointer">Revenue Generation</Link>
          {/* <Link to="/services" className="hover:text-black-600 transition">Services</Link>
          <Link to="/blog" className="hover:text-black-600 transition">Blog</Link> */}
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Right: Contact Us Button */}
        <div className="md:block min-w-fit">
          <Link
            to="/contact"
            className="border border-black text-black px-5 py-2 hover:bg-black hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </HeaderContainer>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-black-600 transition">Home</Link>
            <Link to="/farmland" className="flex flex-row hover:text-black-600 transition font-inter">Managed Farmlands &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
            <Link to="/project" className="flex flex-row hover:text-black-600 transition font-inter">Luxury Villas &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
            <Link to="/revenue" className="hover:text-black-600 transition font-inter">Revenue Generation</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
