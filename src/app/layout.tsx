import type { Metadata } from "next";
import { inter } from "./fonts/fonts";
import "./globals.css";
import { NavbarDefault } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavbarDefault />
        {children}
      </body>
    </html>
  );
}
