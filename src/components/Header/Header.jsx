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

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <Logo src={LogoImg} alt="Logo" />
        </Link>

        {/* Center: Menu for Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/about" className="hover:text-blue-600 transition font-inter">About Us</Link>
          <Link to="/team" className="flex flex-row hover:text-blue-600 transition font-inter">Managed Farmlands &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
          <Link to="/projects" className="flex flex-row hover:text-blue-600 transition font-inter">Luxury Villas &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
          <Link to="/projects" className="hover:text-blue-600 transition font-inter">Revenue Generation</Link>
          {/* <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link> */}
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-blue-600 transition">Home</Link>
            <Link to="/team" className="flex flex-row hover:text-blue-600 transition font-inter">Managed Farmlands &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
            <Link to="/projects" className="flex flex-row hover:text-blue-600 transition font-inter">Luxury Villas &nbsp; <img src={ChevronDown} alt="Chevron Down" /></Link>
            <Link to="/projects" className="hover:text-blue-600 transition font-inter">Revenue Generation</Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
