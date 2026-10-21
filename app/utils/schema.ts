import { company, services } from '~/data/site'

/** Спільний вузол компанії для JSON-LD на всіх сторінках */
export function businessSchema(siteUrl: string) {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteUrl}/#business`,
    'name': company.name,
    'description': 'Ландшафтний дизайн, озеленення ділянок і догляд за садом у Києві та Київській області.',
    'url': `${siteUrl}/`,
    'telephone': company.phone,
    'email': company.email,
    'image': `${siteUrl}/images/roboty/sadyba-dvir.jpg`,
    'priceRange': '500–40 000 грн',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': company.street,
      'addressLocality': company.city,
      'addressCountry': 'UA'
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Київ' },
      { '@type': 'AdministrativeArea', 'name': 'Київська область' }
    ],
    'knowsAbout': services.map(s => s.name)
  }
}

export function faqSchema(items: { q: string, a: string }[]) {
  return {
    '@type': 'FAQPage',
    'mainEntity': items.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
    }))
  }
}

export function breadcrumbSchema(siteUrl: string, name: string, path: string) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Головна', 'item': `${siteUrl}/` },
      { '@type': 'ListItem', 'position': 2, 'name': name, 'item': `${siteUrl}${path}` }
    ]
  }
}

/** Послуга з ціною з прайсу. price — число в гривнях, unit — за що ця ціна */
export function serviceSchema(siteUrl: string, opts: { name: string, description: string, path: string, price?: number, unitText?: string }) {
  return {
    '@type': 'Service',
    'name': opts.name,
    'description': opts.description,
    'url': `${siteUrl}${opts.path}`,
    'provider': { '@id': `${siteUrl}/#business` },
    'areaServed': { '@type': 'AdministrativeArea', 'name': 'Київська область' },
    ...(opts.price && {
      offers: {
        '@type': 'Offer',
        'priceCurrency': 'UAH',
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'price': opts.price,
          'priceCurrency': 'UAH',
          ...(opts.unitText && { unitText: opts.unitText })
        }
      }
    })
  }
}

/** Додає JSON-LD на сторінку */
export function useJsonLd(graph: () => object[]) {
  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({ '@context': 'https://schema.org', '@graph': graph() }))
    }]
  })
}
