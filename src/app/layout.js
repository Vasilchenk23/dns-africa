import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dns-africa-879w.vercel.app/"),
  title: "DNS Africa - Experts in Solar Energy Solutions",
  description:
    "Comprehensive solar energy solutions: feasibility studies, engineering, installation, and maintenance in Tunisia and Africa.",
  keywords:
    "solar energy, DNS Africa, photovoltaic systems, green energy, solar panels, Tunisia, Africa, sustainable energy",
  author: "DNS Africa",
  robots: "index, follow",
  url: "https://dns-africa-879w.vercel.app/",
  openGraph: {
    title: "DNS Africa - Experts in Solar Energy Solutions",
    description:
      "We provide high-quality solar energy solutions tailored to your needs.",
    url: "https://dns-africa-879w.vercel.app/",
    siteName: "DNS Africa",
    images: [
      {
        url: "/img/slogan.png",
        width: 1200,
        height: 630,
        alt: "DNS Africa - Solar Energy Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DNS Africa - Solar Energy Experts",
    description:
      "We provide top-notch solar energy solutions in Tunisia and across Africa.",
    site: "@dnsafrica",
    image: "/img/slogan.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" type="image/png" href="/img/logo.svg" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
