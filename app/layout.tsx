import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grace Art Place — Beauty Coworking",
  description: "Современное пространство для мастеров beauty-индустрии. Аренда рабочих мест, мероприятия и атмосфера, в которую хочется возвращаться.",
  keywords: ["beauty coworking", "аренда рабочего места", "парикмахер", "маникюр", "beauty пространство", "Grace Art Place"],
  authors: [{ name: "Grace Art Place" }],
  openGraph: {
    title: "Grace Art Place — Beauty Coworking",
    description: "Современное пространство для мастеров beauty-индустрии",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}