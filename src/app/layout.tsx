import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurum Dining | Premium Dining Experience",
  description: "Experience the pinnacle of culinary excellence with our Michelin-starred menu, breathtaking atmosphere, and world-class service.",
  openGraph: {
    title: "Aurum Dining | Premium Dining Experience",
    description: "Experience the pinnacle of culinary excellence.",
    url: "https://aurumdining.example.com",
    siteName: "Aurum Dining",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurum Dining Luxury Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum Dining | Premium Dining Experience",
    description: "Experience the pinnacle of culinary excellence.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Adding JSON-LD for Restaurant Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Aurum Dining",
    "image": "https://aurumdining.example.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 42, Khader Nawaz Khan Road",
      "addressLocality": "Chennai",
      "addressRegion": "TN",
      "postalCode": "600034",
      "addressCountry": "IN"
    },
    "telephone": "+91-98765-43210",
    "servesCuisine": "Indian Fine Dining",
    "priceRange": "$$$$"
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-text-primary)]">
        {children}
      </body>
    </html>
  );
}
