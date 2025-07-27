import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "urbanRush",
  description: "urbanRush",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="sticky top-0 z-50">
        <Navbar />
        </div>
        {children}
        {/* <div className="sticky bottom-0 z-50"> */}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
