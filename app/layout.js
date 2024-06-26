import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Midjourney",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#1f1f1f] `}>
      <ThemeProvider
          attribute = "class"
          defaultTheme = "system"
          enableSystem
          disableTransitionOnChange
          storageKey = "midjourney-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
