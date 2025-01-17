import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/app/components/ThemeProvider";
import ThemeToggle from "@/app/components/ThemeToggle";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'São Paulo Explorer',
  description: 'Explore os pontos turísticos de São Paulo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}