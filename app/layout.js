import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chiakyotuteye",
  description:
    "my name is Chiaky Otuteye, and when I can’t stop thinking about something, I write it down. I have always wondered why important issues that affect everyone are discussed in language that the average person, like you and I, find difficult to understand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
