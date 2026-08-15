export const COMPANY_INFO = {
  name: 'Bridge Globe Exims',
  legalName: 'Bridge Globe Exims LLP',
  tagline: 'Connecting Global Markets Through Reliable Trade Solutions',
  email: 'info@bridgeglobeexims.com',
  phone: '+91 7249222923',
  whatsapp: '917249222923',

  logoMark: '/logo/final logo-04.png',
  logoFull: '/logo/final logo_800-800.png',
  address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
  fullAddress: 'Pune, Maharashtra, India'
} as const;

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
] as const;

export const CERTIFICATIONS = [
  { name: 'IEC', description: 'Importer Exporter Code', fullForm: 'Importer Exporter Code' },
  { name: 'APEDA', description: 'Agricultural & Processed Food Products Export Authority', fullForm: 'Agri & Processed Food Export Authority' },
  { name: 'FSSAI', description: 'Food Safety and Standards Authority of India', fullForm: 'Food Safety & Standards Authority' },
  { name: 'GST', description: 'Goods and Services Tax Registration', fullForm: 'Goods and Services Tax' },
] as const;

export const EXPORT_MARKETS = [
  { country: 'UAE', flag: '🇦🇪', region: 'Middle East' },
  { country: 'Oman', flag: '🇴🇲', region: 'Middle East' },
  { country: 'Sri Lanka', flag: '🇱🇰', region: 'South Asia' },
  { country: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East' },
  { country: 'Singapore', flag: '🇸🇬', region: 'Asia Pacific' },
  { country: 'Malaysia', flag: '🇲🇾', region: 'Asia Pacific' },
  { country: 'UK', flag: '🇬🇧', region: 'Europe' },
  { country: 'Germany', flag: '🇩🇪', region: 'Europe' },
  { country: 'USA', flag: '🇺🇸', region: 'North America' },
  { country: 'Australia', flag: '🇦🇺', region: 'Oceania' },
  { country: 'Japan', flag: '🇯🇵', region: 'Asia' },
  { country: 'South Africa', flag: '🇿🇦', region: 'Africa' }
] as const;

export const IMPORT_MARKETS = [
  { country: 'New Zealand', flag: '🇳🇿', region: 'Oceania' },
  { country: 'Chile', flag: '🇨🇱', region: 'South America' },
  { country: 'South Africa', flag: '🇿🇦', region: 'Africa' },
  { country: 'Tanzania', flag: '🇹🇿', region: 'Africa' }
] as const;

export const TRADE_ROUTES = [
  { route: 'India to Middle East', duration: '7-10 days via sea freight', mode: 'sea' },
  { route: 'India to Europe', duration: '20-25 days via sea freight', mode: 'sea' },
  { route: 'India to USA', duration: '3-5 days via air cargo', mode: 'air' },
  { route: 'India to Asia Pacific', duration: '10-15 days via sea freight', mode: 'sea' },
  { route: 'India to Sri Lanka', duration: '3-5 days via sea freight', mode: 'sea' },
  { route: 'India to Africa', duration: '15-20 days via sea freight', mode: 'sea' }
] as const;

export const FRESH_PRODUCE_EXPORTS = [
  { name: 'Alphonso', image: '/products/alphanso.webp', description: 'The king of mangoes — rich, aromatic, and naturally sweet.' },
  { name: 'Pomegranate', image: '/products/pomegranate.webp', description: 'Fresh, ruby-red pomegranates known for their deep colour and flavour.' },
  { name: 'Watermelon', image: '/products/watermelon.webp', description: 'Refreshing seedless and seeded varieties, ideal for bulk supply.' },
  { name: 'Green Grapes', image: '/products/green-grapes.webp', description: 'Crisp, seedless green grapes sourced from certified farms.' },
  { name: 'Red Grapes', image: '/products/red-grapes.webp', description: 'Premium red grapes with rich flavour and firm texture.' },
  { name: 'Elephant Yam', image: '/products/elephant-yam.webp', description: 'Large, high-quality yams widely used in South Asian cuisine.' },
  { name: 'Green Chilli', image: '/products/green-chillies.webp', description: 'Fresh green chillies, sorted and packed for export quality.' },
  { name: 'Onion', image: '/products/onion.webp', description: 'Red and white onions, sourced in bulk from Indian farms.' },
  { name: 'Tender Coconut', image: '/products/fresh-coconut.webp', description: 'Fresh tender coconuts, packed for international shipping.' },
  { name: 'Semi Husked Coconut', image: '/products/dry-coconut.webp', description: 'Semi-husked coconuts with extended shelf life for export.' },
  { name: 'Banana', image: '/products/banana.webp', description: 'Fresh Indian bananas, ideal for bulk international supply.' },
] as const;

export const FRESH_PRODUCE_IMPORTS = [
  { name: 'Apple', image: '/products/apple.webp', description: 'Crisp, premium-grade apples sourced from trusted global orchards.' },
  { name: 'Kiwi', image: '/products/kiwi.webp', description: 'Fresh green kiwifruit, rich in flavour and naturally ripe.' },
  { name: 'Mandarins', image: '/products/oranges.webp', description: 'Easy-peel mandarins, sweet and refreshing — ideal for seasonal supply.' },
  { name: 'Grapes', image: '/products/green-grapes.webp', description: 'Imported premium grapes, available in green and red varieties.' },
  { name: 'Avocados', image: '/products/avacados.webp', description: 'Ripe Hass avocados, carefully packed to preserve freshness.' },
  { name: 'Dragon Fruit', image: '/products/dragon-fruit.webp', description: 'Exotic dragon fruit with vibrant colour and subtle sweetness.' },
  { name: 'Dates', image: '/products/dates.webp', description: 'Premium Medjool and Deglet Noor dates, sourced from the Middle East.' },
] as const;

export const SPICES = [
  { name: 'Garlic', image: '/products/garlic.webp', description: 'Fresh and dried garlic bulbs, sorted by size and quality.' },
  { name: 'Ginger', image: '/products/ginger.webp', description: 'Fresh ginger root, cleaned and graded for export.' },
  { name: 'Turmeric', image: '/products/turmeric.webp', description: 'High-curcumin turmeric, available in root and powder form.' },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    name: 'Fresh Produce — Exports',
    description: 'Premium fresh fruits and vegetables sourced directly from Indian farms, exported worldwide.',
    image: '/products/alphanso.webp',
    items: FRESH_PRODUCE_EXPORTS,
  },
  {
    name: 'Fresh Produce — Imports',
    description: 'Quality imported fresh produce sourced from trusted global suppliers.',
    image: '/products/apple.webp',
    items: FRESH_PRODUCE_IMPORTS,
  },
  {
    name: 'Spices',
    description: 'Premium Indian spices known worldwide for their aroma, flavor, and quality.',
    image: '/products/turmeric.webp',
    items: SPICES,
  },
] as const;

export const WHY_CHOOSE_US = [
  { title: 'Global Trade Network', description: 'Established connections across 50+ countries with trusted supplier and buyer relationships.', icon: 'Globe' },
  { title: 'Compliance Expertise', description: 'Deep understanding of international trade regulations, customs procedures, and documentation.', icon: 'ShieldCheck' },
  { title: 'Reliable Logistics', description: 'Partnerships with leading freight forwarders ensuring timely and safe deliveries.', icon: 'Truck' },
  { title: 'Verified Suppliers', description: 'Rigorous supplier vetting process guaranteeing quality and reliability.', icon: 'UserCheck' },
  { title: 'Documentation Support', description: 'End-to-end documentation management reducing administrative burden.', icon: 'FileText' },
  { title: 'Dedicated Advisors', description: 'Expert trade advisors assigned to support your business needs.', icon: 'Headphones' }
] as const;

export const TEAM_MEMBERS = [
  { name: 'Director Name 1', designation: 'Managing Director', description: 'Visionary leader with over 15 years of experience in international trade and export management.', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Director Name 2', designation: 'Director - Operations', description: 'Expert in global logistics and supply chain management, ensuring seamless export operations.', image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Director Name 3', designation: 'Director - Exports', description: 'Specialist in international market development and building strategic global partnerships.', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' }
] as const;
