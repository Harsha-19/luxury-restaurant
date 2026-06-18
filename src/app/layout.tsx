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
  metadataBase: new URL("http://localhost:3000"),
  title: "Aura | Premium Dining Experience",
  description: "Experience luxury dining at its finest. Reserve your table for an unforgettable culinary journey.",
  openGraph: {
    title: "Aura | Premium Dining Experience",
    description: "Experience luxury dining at its finest. Reserve your table for an unforgettable culinary journey.",
    url: "https://aura-restaurant.example.com",
    siteName: "Aura",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Luxury Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura | Premium Dining Experience",
    description: "Experience luxury dining at its finest.",
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
    "name": "Aura",
    "image": "https://aura-restaurant.example.com/og-image.jpg",
    "description": "Experience luxury dining at its finest.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Avenue",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567",
    "servesCuisine": "Fine Dining",
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
