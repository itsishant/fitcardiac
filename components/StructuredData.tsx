export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'FIT CARDIAC DIAGNOSTIC CENTRE',
    description:
      'FIT CARDIAC DIAGNOSTIC CENTRE is a fully digital cardiac imaging and stress testing centre in Canada, offering echocardiography, ECG, Holter monitoring, stress testing, and ambulatory blood pressure monitoring.',
    url: 'https://fitcardiac.example.com',
    logo: 'https://fitcardiac.example.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-416-555-1234',
      contactType: 'Customer Service',
      areaServed: 'CA',
      availableLanguage: 'English',
    },
    sameAs: [],
    medicalSpecialty: 'Cardiology',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FIT CARDIAC DIAGNOSTIC CENTRE',
    url: 'https://fitcardiac.example.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fitcardiac.example.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const medicalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: 'Cardiac Diagnostic Imaging Services',
    description:
      'Digital echocardiography, ECG, Holter monitoring, stress echo, stress testing, and ambulatory BP monitoring services.',
    provider: {
      '@type': 'MedicalOrganization',
      name: 'FIT CARDIAC DIAGNOSTIC CENTRE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    medicalSpecialty: 'Cardiology',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }}
      />
    </>
  )
}

