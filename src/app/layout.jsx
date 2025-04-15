// import "./globals.css";
import "@/assests/styles/globals.css";

export const metadata = {
  title: "YihHomes",
  keywords: "rental, property, real estate",
  description: "Rent smarter, Live better.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
