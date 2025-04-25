// import "./globals.css";
import "@/assests/styles/globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "YihHomes",
  keywords: "rental, property, real estate",
  description: "Rent smarter, Live better.",
};

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
