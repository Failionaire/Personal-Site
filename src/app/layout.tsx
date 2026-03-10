import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyler Armando | IT Support Engineer",
  description:
    "IT Support Engineer with 10+ years of experience delivering enterprise IT services across macOS, Windows, and Linux environments. CompTIA Security+ certified.",
  openGraph: {
    title: "Tyler Armando | IT Support Engineer",
    description:
      "IT Support Engineer with 10+ years of experience in enterprise IT, security, and infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tyler Armando | IT Support Engineer",
    description:
      "IT Support Engineer with 10+ years of experience in enterprise IT, security, and infrastructure.",
  },
  other: {
    "theme-color": "#581c87",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tyler Edw. Armando",
  jobTitle: "IT Support Engineer",
  url: "https://tyler-armando.vercel.app",
  sameAs: [
    "https://linkedin.com/in/tyler-armando-026615208",
    "https://github.com/Failionaire",
    "https://credly.com/users/tyler-armando",
  ],
  knowsAbout: [
    "IT Support",
    "Enterprise IT Operations",
    "Security & Compliance",
    "Infrastructure Management",
    "Scripting & Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
