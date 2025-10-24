import React from 'react'
import { Helmet } from "react-helmet-async";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function MainLayout({ children, meta }) {
  const { title, description } = meta || {};

  return (
    <>
      <Helmet>
        <title>{title || "My Website"}</title>
        <meta name="description" content={description || "Default description"} />
      </Helmet>

     <Header />

      <main className="min-h-[80vh] pt-[91px]">{children}</main>
    <Footer />
    </>
  );
}
