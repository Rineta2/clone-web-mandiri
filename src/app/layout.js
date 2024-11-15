import "@/app/globals.css";

import NavInner from "@/components/ui/layout/navInner";

import Header from "@/components/ui/layout/Header";

import Footer from "@/components/ui/layout/Footer";

export const metadata = {
  title: "Clone Bank Mandiri",
  description: "Clone Bank Mandiri",
};

export default async function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavInner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
