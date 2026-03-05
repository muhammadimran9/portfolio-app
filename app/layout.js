import { Geist } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Imran - Portfolio",
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
            <div className="flex min-h-screen bg-background text-foreground">
              <Header />
              <main className="flex-1 lg:ml-64">
                {children}
              </main>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
