import type {Metadata} from "next";
import {Roboto, Source_Code_Pro} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Abdoulaye Djikine | Software Engineer",
  description: "Portfolio of Abdoulaye Djikine, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${sourceCodePro.variable} antialiased bg-gradient-to-tr from-zinc-50 to-zinc-200`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
