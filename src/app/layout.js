import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DNS Africa - Leading Solutions",
  description: "We provide top-notch services for your business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <ContactUs/>
        <Footer/>
      </body>
    </html>
  );
}
