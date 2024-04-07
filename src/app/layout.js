import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { getUser } from "@/src/lib/actions";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SF Hacks 2024",
  description: "Project for SF Hacks 2024",
};

export default async function RootLayout({ children }) {
  const user = await getUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Navbar user={user}></Navbar>
        {children}
      </body>
    </html>
  );
}
