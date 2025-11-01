// src/config/menuConfig.js
const menuConfig = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  {
    title: "Managed Farmlands",
    path: "/farmland",
  },
  {
    title: "Luxury Villas",
    path: "/villa",
    children: [
      { title: "Kaira", path: "/kaira-2" },
    ],
  },
  { title: "Revenue Generation", path: "/revenue" },
  { title: "Contact Us", path: "/contact" },
];

export default menuConfig;
