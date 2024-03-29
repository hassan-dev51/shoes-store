import Navbar from "./Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const roboto = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shoes Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
