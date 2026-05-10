import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Event Guru",
  url: "https://www.youreventguru.ca",
  logo: "https://www.youreventguru.ca/images/logos/event-guru-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-437-987-2153",
    contactType: "customer service",
    areaServed: "CA",
    availableLanguage: "English",
  },
  areaServed: [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Oakville",
    "Scarborough",
    "North York",
    "Vaughan",
    "Milton",
    "Etobicoke",
    "GTA",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.youreventguru.ca"),
  title: {
    default: "Event Staffing & Valet Parking Toronto | Event Guru",
    template: "%s | Event Guru",
  },
  description:
    "Professional event staffing and valet parking services across Toronto, Mississauga, Brampton, Oakville and the GTA. Serving staff, hostesses, and uniformed valet attendants for weddings, corporate events, and private parties.",
  keywords: [
    "event staffing toronto",
    "valet parking toronto",
    "event staff gta",
    "serving staff mississauga",
    "hostess toronto",
    "wedding staffing toronto",
    "corporate event staff gta",
    "valet parking mississauga",
  ],
  openGraph: {
    siteName: "Event Guru",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="min-h-screen pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
