import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Bigchez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
