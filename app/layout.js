import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTopButton from "./component/ScrollToTopButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <ScrollToTopButton/>
        <Footer />
      </body>
    </html>
  );
}
