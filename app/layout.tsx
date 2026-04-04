import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dateme.zachrubin.com";

export const metadata: Metadata = {
  title: "Meet Zachary — Maybe We Should.",
  description:
    "I'm Zachary. Energetic, adventurous, Jewish, and looking for someone who shares my values. I made this page so you could actually get to know me — no filters, no algorithm.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Meet Zachary — Maybe We Should.",
    description:
      "Energetic, adventurous, Jewish, and looking for someone who shares my values. I made this page so you could actually get to know me.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Zachary",
      },
    ],
    siteName: "Meet Zachary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Zachary — Maybe We Should.",
    description:
      "Energetic, adventurous, Jewish, and looking for someone who shares my values. I made this page so you could actually get to know me.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-charcoal text-warm-white antialiased">{children}</body>
    </html>
  );
}
