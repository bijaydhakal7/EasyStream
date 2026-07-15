import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { AmbientBackground } from "@/components/AmbientBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans antialiased")}
    >
      <body
        className="
          min-h-screen
          bg-background
          text-foreground
          antialiased
          overflow-x-hidden
        "
      >
        <ThemeProvider>
          <QueryProvider>
            <AmbientBackground />
            <Navbar />
            {children}

            <Toaster
              richColors
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "var(--card)",
                  border: "var(--border)",
                  color: "var(--card-foreground)",
                },
              }}
            />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}