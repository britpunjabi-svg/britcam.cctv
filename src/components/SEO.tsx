import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  faqs?: { q: string; a: string }[];
}

export const SEO: React.FC<SEOProps> = ({
  title = "Britcam Security & Solar Solutions | Chandigarh, Punjab, Haryana",
  description = "Britcam is the leading provider of 4K CCTV, Biometrics, Home Automation, and Solar Panels in Chandigarh, Mohali, Panchkula, and surrounding areas. Serving 100km radius.",
  keywords = "CCTV Chandigarh, Solar Panels Punjab, Biometric Attendance Mohali, Home Automation Panchkula, Security Systems Chandigarh, Solar Installation Punjab, Britcam, 4K Surveillance, Smart Home, Solar Energy",
  image = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
  url = "https://britcam.in",
  type = "website",
  faqs = []
}) => {
  const siteTitle = title.includes("Britcam") ? title : `${title} | Britcam Security & Solar`;

  const structuredData: any = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Britcam Security & Solar Solutions",
      "image": image,
      "@id": "https://britcam.in",
      "url": "https://britcam.in",
      "telephone": "+917888380934",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "OFFICE NO 12, ANGREJ SINGH COMPLEX, BADHERI MAIN MARKET, SECTOR 41 D",
        "addressLocality": "Chandigarh",
        "postalCode": "160036",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.7284,
        "longitude": 76.7384
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.facebook.com/britcam.in/",
        "https://www.instagram.com/britcam.in/"
      ]
    }
  ];

  if (faqs.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
