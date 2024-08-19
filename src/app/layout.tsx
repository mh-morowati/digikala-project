import type { Metadata } from "next";
import "./globals.css";





export const metadata: Metadata = {
  title: "فروشگاه اینترنتی دیجی کالا",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa-IR">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
