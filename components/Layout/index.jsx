import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "./Banner";
export default function Layout({children}) {
  return (
    <>
      <div className="bg-gray-100">
        <Banner/>
        <Nav />
      
          <main className="bg-slate-800 text-white items-center overflow-auto h-screen">
            {children}
          </main>
      
        <Footer />
      </div>
    </>
  );
}
