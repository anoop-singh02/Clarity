import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider as CustomClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomClerkProvider appearance={{
      variables: {
        colorPrimary: '#624cf5'
      }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </CustomClerkProvider>
  );
}
