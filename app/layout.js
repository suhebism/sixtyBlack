// "use client";
// import { useState,useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import LoadingScreen from "@/components/LoadingScreen";

export const metadata = {
  title: "Sixty Black",
  description: "Next generation digital agency",
};

export default function RootLayout({ children }) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() =>{
  //   setTimeout(() => setLoading(true), 6000);
  //  });
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
