import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav/Nav";
import Footer from "./_components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "description for Ecommerce site",
  icons:{
    icon:'../images/bag-shopping-solid.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav /> 
        {children}
        <Footer />
        </body>
    </html>
  );
}
