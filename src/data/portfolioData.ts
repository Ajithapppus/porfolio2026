export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Performance Ads' | 'SEO Campaigns' | 'Web Development' | 'Social Media';
  tagline: string;
  image: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string[];
  results: { label: string; value: string }[];
  toolsUsed: string[];
  linkText?: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export const PERSONAL_INFO = {
  name: 'Ajith B',
  role: 'Digital Marketing Professional | SEO Specialist | Performance Marketer',
  headline: 'Turning Digital Ideas Into Measurable Growth.',
  location: 'Thiruvananthapuram, Kerala, India',
  email: 'ajithappus207@gmail.com',
  whatsappNumber: '+919876543210', // Easily editable
  whatsappDisplay: '+91 (Kerala, India)',
  linkedinUrl: 'https://linkedin.com/in/ajith-b-marketer',
  instagramUrl: 'https://instagram.com/ajith.marketer',
  bio: 'Digital Marketing Professional and freelance growth specialist based in Thiruvananthapuram, Kerala. Dedicated to helping businesses scale their online visibility, capture high-intent search traffic, lower customer acquisition costs, and transform clicks into sustainable revenue through data-backed SEO, Meta Ads, and high-converting WordPress web experiences.',
};

export const ACHIEVEMENTS = [
  {
    id: 'organic-growth',
    number: 35000,
    suffix: '+',
    label: 'Organic Growth',
    detail: 'Organic search impressions & monthly website visitors scaled across SEO client campaigns.',
  },
  {
    id: 'ad-spend',
    number: 85000,
    prefix: '₹',
    suffix: '+',
    label: 'Meta Ads Managed',
    detail: 'High-efficiency ad spend optimized for positive ROAS, low cost-per-lead, and verified bookings.',
  },
  {
    id: 'lead-growth',
    number: 30,
    suffix: '%',
    label: 'Lead Growth',
    detail: 'Average inbound qualified lead volume improvement across active client partner funnels.',
  },
  {
    id: 'clients-scaled',
    number: 10,
    suffix: '+',
    label: 'Client Accounts',
    detail: 'Businesses partnered across wellness, home maintenance, e-commerce, and regional services.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'seo-mastery',
    title: 'Search Engine Optimization (SEO)',
    category: 'Search & Visibility',
    description: 'Comprehensive organic search engine ranking strategies tailored to put your business at the top of Google for high-intent purchase searches.',
    deliverables: [
      'Comprehensive Technical Website Audit',
      'Competitor Keyword Gap Analysis',
      'Google Core Web Vitals Optimization',
      'Local SEO & Google Business Profile Domination',
    ],
    icon: 'Search',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    category: 'Paid Performance',
    description: 'Laser-targeted paid ad campaigns engineered to capture prospective customers on Instagram and Facebook with persuasive creatives and low cost-per-lead.',
    deliverables: [
      'Audience Persona Research & Custom Audiences',
      'Creative Copywriting & Dynamic Ad Variations',
      'Meta Pixel & Conversions API Setup',
      'Retargeting Funnels for Warm Prospects',
    ],
    icon: 'Share2',
  },
  {
    id: 'google-ads',
    title: 'Google Ads (Search & Performance Max)',
    category: 'Paid Performance',
    description: 'Direct-response Google Search, Display, and Performance Max campaigns that intercept ready-to-buy searchers right when they need your service.',
    deliverables: [
      'High-Intent Keyword Matching & Negative Keyword Lists',
      'Ad Copy Writing & Extension Optimization',
      'Conversion Value Bidding Strategies',
      'ROAS-Focused Budget Allocation',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    category: 'Brand & Growth',
    description: 'End-to-end social media growth strategies designed to build authentic engagement, brand authority, and consistent follower community growth.',
    deliverables: [
      'Monthly Content Calendar & Theme Pillars',
      'High-Retention Reels & Story Strategies',
      'Community Engagement & DM Lead Qualification',
      'Influencer & Partnership Outreach',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'wordpress-dev',
    title: 'WordPress Website Development',
    category: 'Web Experience',
    description: 'Fast, responsive, conversion-focused WordPress and Elementor websites built with clean code, mobile-first layouts, and technical SEO foundations.',
    deliverables: [
      'Custom Responsive Layouts with Elementor Pro',
      'Speed Optimization (< 2s Page Load Time)',
      'Lead Capture Form & WhatsApp Integration',
      'Security Hardening & SSL Setup',
    ],
    icon: 'Globe',
  },
  {
    id: 'technical-seo',
    title: 'On-Page, Off-Page & Technical SEO',
    category: 'Search & Visibility',
    description: 'Deep technical audits, site architecture restructuring, schema markup implementation, internal linking strategy, and authoritative backlink outreach.',
    deliverables: [
      'Schema.org Structured Data Implementation',
      'Crawl Error Resolution & XML Sitemap Structuring',
      'Meta Title & Heading Tag Hierarchy',
      'White-Hat High-Authority Link Building',
    ],
    icon: 'Cpu',
  },
  {
    id: 'keyword-content',
    title: 'Keyword Research & Content Optimization',
    category: 'Content Strategy',
    description: 'Data-driven content strategies that identify untapped search demand, answer customer pain points, and outrank established competitors.',
    deliverables: [
      'Search Volume & Keyword Difficulty Mapping',
      'Search Intent Topic Clusters & Silos',
      'Existing Content Refresh & Re-optimization',
      'Editorial Guidelines for High-Ranking Articles',
    ],
    icon: 'FileText',
  },
  {
    id: 'analytics-tag-manager',
    title: 'Google Analytics 4 & Tag Manager',
    category: 'Data & Tracking',
    description: 'Full-stack tracking architecture to accurately measure every click, form submission, phone call, and dollar of revenue generated across your marketing channels.',
    deliverables: [
      'Google Tag Manager (GTM) Container Configuration',
      'GA4 Custom Event & Conversion Goal Tracking',
      'Google Search Console Health Monitoring',
      'Looker Studio Executive Reporting Dashboards',
    ],
    icon: 'BarChart3',
  },
  {
    id: 'creative-design',
    title: 'Creative Content & Social Media Design',
    category: 'Brand & Creative',
    description: 'Eye-catching visual designs and ad creatives tailored to stop the social feed scroll, communicate value propositions quickly, and spike click-through rates.',
    deliverables: [
      'High-CTR Ad Banner & Carousel Graphics',
      'Social Media Post Templates & Infographics',
      'Promotional Video & Reel Storyboarding',
      'Consistent Brand Identity Guidelines',
    ],
    icon: 'Palette',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Performance Advertising',
    description: 'Data-driven paid media execution focused on cost efficiency and conversion scale.',
    skills: [
      { name: 'Meta Ads Manager', focus: 'Lead Gen & Conversions' },
      { name: 'Google Ads (Search & PMax)', focus: 'High-Intent Traffic' },
      { name: 'Audience Segmentation', focus: 'Lookalike & Custom Funnels' },
      { name: 'Dynamic Retargeting', focus: 'Cart & Lead Nurturing' },
      { name: 'A/B Creative Testing', focus: 'Ad Copy & Visual Hook Iteration' },
    ],
  },
  {
    category: 'Search Engine Optimization',
    description: 'Organic search engineering that builds enduring domain authority and rankings.',
    skills: [
      { name: 'Technical SEO Audits', focus: 'Crawlability & Indexation' },
      { name: 'Keyword Intent Mapping', focus: 'High-Value Query Strategy' },
      { name: 'On-Page Optimization', focus: 'Semantic HTML & Schema Markup' },
      { name: 'Local SEO & Maps', focus: 'Google Business Profile Dominance' },
      { name: 'Core Web Vitals', focus: 'LCP, CLS & Page Speed Tuning' },
    ],
  },
  {
    category: 'Analytics & Tracking',
    description: 'Accurate measurement architecture to ensure zero blind spots in campaign ROI.',
    skills: [
      { name: 'Google Analytics 4 (GA4)', focus: 'Funnel & User Flow Analysis' },
      { name: 'Google Tag Manager', focus: 'Event Triggers & Tag Governance' },
      { name: 'Google Search Console', focus: 'Index Coverage & Query Trends' },
      { name: 'Meta Pixel & CAPI', focus: 'Server-Side Signal Resilience' },
      { name: 'Conversion Rate Optimization', focus: 'Heatmaps & Form Drop-off Fixing' },
    ],
  },
  {
    category: 'Web & Content Strategy',
    description: 'Modern content workflows and CMS management for maximum conversion retention.',
    skills: [
      { name: 'WordPress & Elementor', focus: 'Custom Landing Pages & Portals' },
      { name: 'Content Architecture', focus: 'Topic Clusters & Pillar Content' },
      { name: 'Social Media Strategy', focus: 'Organic Reach & Engagement' },
      { name: 'Canva & Design Tools', focus: 'High-CTR Visual Production' },
      { name: 'Copywriting & Value Hooks', focus: 'Direct-Response Storytelling' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ayursparsham',
    title: 'Ayursparsham Ayurvedic Care',
    client: 'Ayursparsham Holistic Health & Wellness',
    category: 'Web Development',
    tagline: 'Brand repositioning, high-speed website, and local patient acquisition funnel in Kerala.',
    image: '/src/assets/images/project_ayursparsham_1791798694776.jpg',
    overview: 'Ayursparsham is a holistic Ayurvedic wellness and treatment brand. They needed a trustworthy, modern digital presence to showcase authentic treatments, allow easy patient consultation bookings, and capture regional search queries for specialized Ayurvedic care.',
    challenge: 'The legacy online presence lacked mobile responsiveness, was not ranking for key regional healthcare terms in Kerala, and suffered high drop-off rates on treatment inquiry forms.',
    strategy: 'Engineered a serene, fast-loading WordPress website with structured treatment pages, integrated WhatsApp direct scheduling, and rolled out local SEO paired with geotargeted Meta video campaigns.',
    execution: [
      'Designed a custom, clean responsive website highlighting authentic treatments and practitioner credentials.',
      'Configured Google Business Profile and local citation signals targeting wellness travelers and local patients.',
      'Set up Google Tag Manager event tracking on consultation buttons and WhatsApp click-to-chats.',
      'Launched educational social video ad reels highlighting patient recovery stories and wellness treatments.',
    ],
    results: [
      { label: 'Consultation Inquiries', value: '+140%' },
      { label: 'Mobile Page Speed', value: '94/100' },
      { label: 'Local Map Pack Rank', value: 'Top 3' },
    ],
    toolsUsed: ['WordPress', 'Elementor', 'Local SEO', 'Google Analytics 4', 'Meta Ads'],
  },
  {
    id: 'fixo-expert',
    title: 'Fixo Expert On-Demand Services',
    client: 'Fixo Expert Home Solutions',
    category: 'Performance Ads',
    tagline: 'Hyper-targeted Meta and Google Search campaigns generating rapid technician bookings.',
    image: '/src/assets/images/project_fixo_expert_1791798707572.jpg',
    overview: 'Fixo Expert provides on-demand home maintenance, electrical, plumbing, and appliance repair services. The primary goal was to acquire immediate repair bookings from homeowners at a predictable customer acquisition cost.',
    challenge: 'Fierce competition in the home repair vertical led to rising cost-per-click rates and wasted ad spend on unqualified leads outside of active technician coverage areas.',
    strategy: 'Implemented precise radius geotargeting on Meta Ads and high-intent Google Search campaigns focusing strictly on emergency repair queries ("AC repair near me", "emergency electrician"). Set up instant call-now extensions and automated lead capture.',
    execution: [
      'Restructured Meta Ads Manager account with localized creative hooks for seasonal maintenance.',
      'Engineered custom landing page with quick 3-step booking flow and instant WhatsApp dispatch.',
      'Deployed negative keyword pruning daily to eliminate non-commercial exploratory queries.',
      'Tracked every booking through GA4 conversion events and Meta Pixel offline lead matching.',
    ],
    results: [
      { label: 'Cost Per Lead Reduction', value: '-32%' },
      { label: 'Verified Bookings', value: '1,400+' },
      { label: 'Ad Spend Managed', value: '₹85,000+' },
    ],
    toolsUsed: ['Meta Ads Manager', 'Google Ads', 'Google Tag Manager', 'Landing Page Optimization'],
  },
  {
    id: 'ecommerce-optimization',
    title: 'E-Commerce Storefront Scaling',
    client: 'D2C Lifestyle & Apparel Retailer',
    category: 'Web Development',
    tagline: 'Technical speed overhaul, dynamic product ads, and checkout abandonment reduction.',
    image: '/src/assets/images/project_ecommerce_opt_1791798720029.jpg',
    overview: 'An emerging Direct-to-Consumer retail brand experienced high traffic from social media but suffered from low checkout completion and slow mobile load times.',
    challenge: 'Mobile product pages took over 4.8 seconds to load, causing severe bounce rates. Ad spend on Meta Catalog campaigns was returning subpar ROAS due to generic product feed targeting.',
    strategy: 'Conducted a deep technical performance cleanup, compressed media, streamlined the checkout funnel, and segmented Meta dynamic catalog campaigns by top-selling collections.',
    execution: [
      'Optimized Core Web Vitals, reducing First Contentful Paint to 1.1s and cumulative layout shift to zero.',
      'Restructured Meta Pixel events to include ViewContent, AddToCart, and Purchase with currency values.',
      'Built custom retargeting sequences for users who abandoned carts within 48 hours.',
      'Designed cohesive promotional banners and product highlight slides with high visual contrast.',
    ],
    results: [
      { label: 'Conversion Rate', value: '+38%' },
      { label: 'Page Load Time', value: '1.4s' },
      { label: 'Catalog Ad ROAS', value: '4.2x' },
    ],
    toolsUsed: ['WordPress WooCommerce', 'Technical SEO', 'Meta Dynamic Ads', 'GA4 E-commerce'],
  },
  {
    id: 'kerala-seo-campaign',
    title: 'Regional Search Engine Dominance',
    client: 'Professional Services & Consulting',
    category: 'SEO Campaigns',
    tagline: 'Long-term organic authority and ranking top 3 for competitive regional search terms.',
    image: '/src/assets/images/project_seo_growth_1791798730224.jpg',
    overview: 'A regional consultancy required a sustainable, non-paid acquisition channel to generate inquiries without constant ad spend dependency.',
    challenge: 'The domain had minimal backlink authority, thin content, and was completely absent from Google page 1 for core business keywords.',
    strategy: 'Formulated a comprehensive search silo strategy with in-depth cornerstone guides, schema structured data, local entity building, and authoritative outreach.',
    execution: [
      'Mapped 50+ high-volume, low-competition regional keyword targets.',
      'Published search-optimized topical content with proper header hierarchies and FAQs.',
      'Fixed broken internal links, duplicate title tags, and crawl budget bottlenecks.',
      'Implemented LocalBusiness schema and verified regional directory citations.',
    ],
    results: [
      { label: 'Organic Impressions', value: '35,000+' },
      { label: 'Keywords in Top 3', value: '24 Terms' },
      { label: 'Organic Inbound Leads', value: '+65%' },
    ],
    toolsUsed: ['Google Search Console', 'SEMrush', 'Technical SEO', 'Schema Markup'],
  },
  {
    id: 'social-media-growth',
    title: 'Social Engagement & Community Build',
    client: 'Consumer Brand & Local Storefront',
    category: 'Social Media',
    tagline: 'Organic short-form video strategy creating viral community resonance and direct orders.',
    image: '/src/assets/images/project_ayursparsham_1791798694776.jpg',
    overview: 'A growing lifestyle brand sought to build an active Instagram and Facebook community rather than relying solely on sporadic paid boosts.',
    challenge: 'Inconsistent posting schedule, low algorithmic engagement, and disconnected visual identity across channels.',
    strategy: 'Constructed an editorial calendar revolving around 3 core pillars: Educational Value, Behind-The-Scenes Craft, and Customer Spotlights.',
    execution: [
      'Produced engaging vertical video reel concepts tailored to audio trends and visual hooks.',
      'Created standardized carousel templates for educational infographics.',
      'Implemented an active DM response protocol converting story replies into qualified buyer leads.',
    ],
    results: [
      { label: 'Account Reach', value: '+310%' },
      { label: 'Active Followers', value: '4,500+' },
      { label: 'Direct DM Inquiries', value: '180+/mo' },
    ],
    toolsUsed: ['Canva', 'Meta Business Suite', 'Content Strategy', 'Social Copywriting'],
  },
  {
    id: 'creative-ad-testing',
    title: 'High-CTR Performance Ad Matrix',
    client: 'Educational & Skill Academy',
    category: 'Performance Ads',
    tagline: 'Creative testing framework reducing acquisition costs across competitive student enrollment cycles.',
    image: '/src/assets/images/project_fixo_expert_1791798707572.jpg',
    overview: 'An educational institute needed to fill seats for seasonal professional certifications against established national competitors.',
    challenge: 'Audience fatigue with standard text ads resulted in sub-1% click-through rates and high cost per lead.',
    strategy: 'Designed a structured creative testing matrix with 12 distinct visual hooks, testimonial quotes, and contrasting color palettes.',
    execution: [
      'A/B tested headline angles focusing on career transformation versus technical curriculum.',
      'Optimized landing page lead capture forms with progressive question disclosure.',
      'Scaled top-performing ad sets while killing fatigue-prone variations within 72 hours.',
    ],
    results: [
      { label: 'Ad CTR Increase', value: '3.8%' },
      { label: 'Cost Per Enrollment Lead', value: '-27%' },
      { label: 'Batch Fill Rate', value: '100%' },
    ],
    toolsUsed: ['Meta Ads Manager', 'Graphic Design', 'Conversion Funnels', 'GA4'],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'freelance-lead',
    role: 'Freelance Digital Marketer & Growth Consultant',
    company: 'Independent Practice',
    location: 'Thiruvananthapuram, Kerala',
    period: '2023 — Present',
    current: true,
    description: 'Spearheading end-to-end digital marketing, SEO architectures, and paid media strategy for SMEs, healthcare brands, and local enterprises.',
    achievements: [
      'Delivered 35,000+ organic search visitors across client websites through technical SEO and strategic content silos.',
      'Managed ₹85,000+ in Meta Ads ad spend maintaining consistent sub-target cost-per-lead and profitable ROAS.',
      'Engineered conversion-focused WordPress & Elementor sites with average page load times under 2 seconds.',
      'Partnered directly with business owners to translate commercial goals into trackable GA4 KPIs.',
    ],
  },
  {
    id: 'performance-marketer',
    role: 'Digital Marketing & SEO Specialist',
    company: 'Digital Growth Initiatives & Client Projects',
    location: 'Kerala, India',
    period: '2022 — 2023',
    current: false,
    description: 'Managed search visibility campaigns, Google Search Console optimization, and paid ad funnels for service and retail businesses.',
    achievements: [
      'Restructured Google Ads Search campaigns, reducing wasted negative-keyword spend by 22%.',
      'Implemented Google Tag Manager tracking setups across 8+ client websites for accurate attribution.',
      'Authored search-optimized content clusters that achieved page 1 Google rankings for 30+ commercial keywords.',
    ],
  },
  {
    id: 'web-content',
    role: 'WordPress Web Developer & Social Media Strategist',
    company: 'Creative & Digital Agency Engagements',
    location: 'Kerala, India',
    period: '2021 — 2022',
    current: false,
    description: 'Designed responsive WordPress websites, crafted engaging social media graphics, and established brand identities.',
    achievements: [
      'Built and launched 12+ responsive client websites optimized for mobile users and fast browsing.',
      'Established cohesive social media visual identity systems and engagement calendars for regional brands.',
      'Integrated lead capture forms with automated email notifications and WhatsApp business routing.',
    ],
  },
];
