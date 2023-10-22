import Footer from "@/components/Footer";
import Navigate from "@/components/Navigate";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="">
        <Navigate />
        {children}
        <Footer />
      </body>
    </html>
  );
}
