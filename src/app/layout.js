import "@/app/globals.css";

import NavInner from "@/components/ui/layout/NavInner";

import Header from "@/components/ui/layout/Header";

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
      </body>
    </html>
  );
}
