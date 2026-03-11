import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Hussain - Portfolio",
  description: "Full-Stack Developer specializing in MERN stack, Next.js, and modern UI/UX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={geistSans.className}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
