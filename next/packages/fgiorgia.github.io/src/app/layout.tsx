import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Giorgia Faedda | Data Analyst",
  description: "Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-grow flex-col`}
      >
        <header>
          <div className="flex-row w-full min-h-12 bg-red-50"></div>
        </header>
        <main className="flex flex-grow flex-col">
          {children}
        </main>
        <footer>
          <div className="flex-row w-full min-h-32 bg-red-50"></div>
        </footer>
      </body>
    </html>
  );
}
