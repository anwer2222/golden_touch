import type { Metadata } from "next";
import { Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Oswald({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Touch Interiors",
  // description: "Design that feels like home",
  description: "Professional installation of pre-designed office environments, wall systems, and furniture in Ottawa. Delivering service with precision and intention.",
  keywords: ["Office Installation", "Tekion Installation", "Wall Installation","Ottawa Furniture Assembly", "Wall Systems", "Golden Touch Interiors", "Office Relocation Ottawa"],
  authors: [{ name: "Golden Touch Interiors" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Define the JSON-LD object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Golden Touch Interiors",
    "image": "https://www.goldentouchinteriors.ca/_next/image?url=%2Foffice_icon.png&w=128&q=75", // Replace with your actual logo URL
    "@id": "https://www.goldentouchinteriors.ca",
    "url": "https://www.goldentouchinteriors.ca",
    "telephone": "+1-613-913-4264",
    "email": "info@goldentouchinteriors.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased content-center`}
      >
        {/* Add the JSON-LD Script here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
