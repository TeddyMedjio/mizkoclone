import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "UX/UI Designer & Educator in Sydney, Australia",
  description:
    "Hello there, I'm Mizko! I went from designer → agency owner → now founder and educator at Designership. I teach the skills and tricks that helped me build a multi-million dollar design agency, serving 50+ companies and impacting millions worldwide!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        content="UX/UI Designer &amp; Educator in Sydney, Australia"
        property="og:title"
      />
      <meta
        content="Hello there, I'm Mizko! I went from designer → agency owner → now founder and educator at Designership. I teach the skills and tricks that helped me build a multi-million dollar design agency, serving 50+ companies and impacting millions worldwide!"
        name="description"
      />
      <meta
        content="https://assets-global.website-files.com/6547600aa272d0cc570e8feb/6594e760b92dbe1e15d426a3_Mizko%20OG.jpg"
        property="og:image"
      />
      <meta
        content="UX/UI Designer &amp; Educator in Sydney, Australia"
        property="twitter:title"
      />
      <meta
        content="Hello there, I'm Mizko! I went from designer → agency owner → now founder and educator at Designership. I teach the skills and tricks that helped me build a multi-million dollar design agency, serving 50+ companies and impacting millions worldwide!"
        property="twitter:description"
      />
      <meta
        content="https://assets-global.website-files.com/6547600aa272d0cc570e8feb/6594e760b92dbe1e15d426a3_Mizko%20OG.jpg"
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
