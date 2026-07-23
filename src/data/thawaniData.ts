import { ProductItem, CaseStudy, ApiSnippet, EcosystemNode } from '../types';

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'customer',
    nameEn: 'Customer Mobile',
    nameAr: 'تطبيق العميل',
    iconName: 'Smartphone',
    type: 'source',
    status: 'active',
    metricEn: 'Sub-200ms Latency',
    metricAr: 'استجابة أقل من 200ms',
  },
  {
    id: 'qr',
    nameEn: 'Dynamic QR 2035',
    nameAr: 'رمز QR الديناميكي',
    iconName: 'QrCode',
    type: 'channel',
    status: 'active',
    metricEn: '256-bit Encrypted',
    metricAr: 'تشفير 256 بت',
  },
  {
    id: 'wallet',
    nameEn: 'Thawani Ledger',
    nameAr: 'محفظة ثواني الذكية',
    iconName: 'Wallet',
    type: 'wallet',
    status: 'processing',
    metricEn: 'Zero Latency Vault',
    metricAr: 'معالجة فائقة السرعة',
  },
  {
    id: 'bank',
    nameEn: 'CBO Sovereign Switch',
    nameAr: 'المقسم الوطني للبنك المركزي',
    iconName: 'Building2',
    type: 'switch',
    status: 'active',
    metricEn: 'RTGS Instant Settlement',
    metricAr: 'تسوية تسديد فورية',
  },
  {
    id: 'merchant',
    nameEn: 'Merchant Soundbox POS',
    nameAr: 'جهاز التاجر الصوتي',
    iconName: 'Store',
    type: 'destination',
    status: 'active',
    metricEn: 'Instant Audio Ping',
    metricAr: 'تأكيد صوتي لحظي',
  },
  {
    id: 'confirmation',
    nameEn: 'Verified Settlement',
    nameAr: 'تأكيد الدفع والخصم',
    iconName: 'CheckCircle2',
    type: 'status',
    status: 'active',
    metricEn: '99.999% SLA Guaranteed',
    metricAr: 'ضمان استمرارية 99.999%',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'thawani-pay',
    tagEn: 'Consumer FinTech',
    tagAr: 'تطبيق الأفراد',
    titleEn: 'Thawani Pay Super App',
    titleAr: 'تطبيق ثواني للأفراد',
    descEn: 'Next-generation digital wallet with zero-fee instant P2P transfers, split-bill intelligence, virtual card issuance, and biometric direct checkout.',
    descAr: 'المحفظة الرقمية الجيل القادم للتحويل الفوري مجاناً، تقسيم الفواتير الذكي، وإصدار البطاقات الافتراضية مع البصمة الحيوية.',
    icon: 'Smartphone',
    featuresEn: ['Instant OMR P2P Transfers', 'Biometric Tap & Pay', 'Dynamic QR Reader', 'Multi-Currency Wallet'],
    featuresAr: ['تحويل مجاني فوري بالريال', 'الدفع البيومتري بلمسة واحدة', 'قراءة كيو ار الديناميكية', 'محفظة متعددة العملات'],
    metricsEn: '1.8M+ Active Oman Users',
    metricsAr: 'أكثر من 1.8 مليون مستخدم',
  },
  {
    id: 'merchant-hub',
    tagEn: 'Merchant Enterprise',
    tagAr: 'منصة التجار Enterprise',
    titleEn: 'Thawani Business Command',
    titleAr: 'لوحة تحكم التجار المتقدمة',
    descEn: 'Unified command center providing real-time multi-branch settlement, staff permission rings, dynamic invoicing, and predictive cash flow analytics.',
    descAr: 'مركز قيادة موحد للتجار لإدارة المبيعات والتسويات الفورية لجميع الفروع، الصلاحيات المتقدمة، والتحليلات التنبؤية.',
    icon: 'LayoutDashboard',
    featuresEn: ['Instant T+0 Payout Engine', 'Multi-Branch Staff Matrix', 'Automated Tax / VAT Export', 'AI Revenue Forecasting'],
    featuresAr: ['محرك تسوية فورية T+0', 'إدارة صلاحيات الفروع', 'تصدير التقرير الضريبي تلقائياً', 'تنبؤ الإيرادات بالذكاء الاصطناعي'],
    metricsEn: '42,000+ Active Merchants',
    metricsAr: 'أكثر من 42 ألف تاجر معتمد',
  },
  {
    id: 'checkout-gateway',
    tagEn: 'E-Commerce Gateway',
    tagAr: 'بوابة المتاجر الإلكترونية',
    titleEn: 'Next-Gen Payment Gateway',
    titleAr: 'بوابة الدفع الإلكترونية السريعة',
    descEn: 'Ultra-low friction online checkout with 3DS 2.2 biometric auth, tokenized 1-click buy, and 99.8% authorization success rates.',
    descAr: 'بوابة إلكترونية فائقة السرعة تدعم التحقق البيومتري، الشراء بنقرة واحدة، وأعلى معدل قبول للمعاملات بالسلطنة.',
    icon: 'Globe',
    featuresEn: ['Sub-300ms Processing', 'Apple Pay / Google Pay Native', 'Tokenized Cards On File', 'Custom CSS Glass Styling'],
    featuresAr: ['معالجة في أجزاء من الثانية', 'دعم ناتيف لـ Apple Pay', 'حفظ البطاقات المشفرة', 'تخصيص الواجهة بالكامل'],
    metricsEn: '$3.4B Annual Processed Volume',
    metricsAr: 'أكثر من 3.4 مليار دولار سنوياً',
  },
  {
    id: 'moyasar-billing',
    tagEn: 'Smart Invoicing',
    tagAr: 'الفواتير والروابط الديناميكية',
    titleEn: 'DirectPay & Smart Links',
    titleAr: 'روابط الدفع المباشرة والذكية',
    descEn: 'Create encrypted payment links in seconds for WhatsApp, Instagram, or B2B contracts with automatic SMS notification & instant settlement.',
    descAr: 'إنشاء روابط دفع مشفرة في ثوانٍ لمشاركتها عبر الواتساب والانستجرام والعقود، مع إشعارات SMS وتسوية لحظية.',
    icon: 'Send',
    featuresEn: ['One-Click WhatsApp Pay Links', 'Partial Payment Installments', 'Expiry Time Locking', 'Auto QR Generation'],
    featuresAr: ['روابط واتساب مباشرة', 'تقسيط الفواتير الذكي', 'تأمين انتهاء الصلاحية', 'توليد تلقائي للكيو ار'],
    metricsEn: '12M+ Invoices Generated',
    metricsAr: 'أكثر من 12 مليون فاتورة',
  },
  {
    id: 'soundbox-pos',
    tagEn: 'Hardware & Audio POS',
    tagAr: 'الأجهزة والتأكيد الصوتي',
    titleEn: 'Thawani Soundbox & Smart POS',
    titleAr: 'جهاز التاجر الصوتي وأجهزة POS',
    descEn: 'Cellular-connected audio notification speaker that speaks payment confirmation aloud in Arabic and English within 0.1 seconds.',
    descAr: 'جهاز بث صوتي متصل ببطاقة 4G/5G ينطق بمبلغ الدفع فوراً باللغتين العربية والإنجليزية خلال 0.1 ثانية.',
    icon: 'Volume2',
    featuresEn: ['Dual Arabic/English Audio', '7-Day Battery Standby', '4G Cellular eSIM Embedded', 'Water-Resistant Casing'],
    featuresAr: ['صوت ثنائي باللغتين', 'بطارية تدوم 7 أيام', 'شريحة eSIM 5G مدمجة', 'مقاوم للماء والصدمات'],
    metricsEn: '85,000+ POS & Soundboxes deployed',
    metricsAr: 'أكثر من 85 ألف جهاز منتشر',
  },
  {
    id: 'gcc-pay',
    tagEn: 'Regional Corridors',
    tagAr: 'الربط الإقليمي الخليجي',
    titleEn: 'GCC Gulf Pay 2035',
    titleAr: 'شبكة الدفع الخليجي الموحد',
    descEn: 'Direct inter-GCC real-time settlement engine supporting OMR, AED, SAR, QAR, BHD, and KWD with zero currency exchange markup.',
    descAr: 'شبكة المقاصة الخليجية الفورية المباشرة بدعم كامل للريال العُماني، الدرهم، الريال السعودي وبقية عملات الخليج بدون عمولات صرف مضاعفة.',
    icon: 'Layers',
    featuresEn: ['Instant GCC Cross-Border', 'Zero FX Surcharge Options', 'Unified Compliance API', 'Real-time Sovereign FX'],
    featuresAr: ['تحويل خليجي فورى', 'أسعار صرف تنافسية جداً', 'امتثال تنظيم موحد', 'تحديث حي لأسعار العملات'],
    metricsEn: '6 Regional Economies Linked',
    metricsAr: 'ربط 6 دول خليجية بالكامل',
  },
];

export const TRUST_METRICS = [
  {
    id: 'cbo',
    badgeEn: 'CBO Licensed',
    badgeAr: 'مرخص من البنك المركزي',
    titleEn: 'Central Bank of Oman License',
    titleAr: 'ترخيص البنك المركزي العُماني',
    descEn: 'Fully regulated Payment System Operator & Payment Service Provider under CBO circulars and Oman Banking Law.',
    descAr: 'مرخص رسمياً كخادم ومزود خدمات دفع الكتروني وفق الأنظمة المصرفية للبنك المركزي العماني.',
    icon: 'ShieldCheck',
  },
  {
    id: 'pci',
    badgeEn: 'PCI DSS v4.0 Level 1',
    badgeAr: 'شهادة PCI DSS عالمية',
    titleEn: 'Highest Security Rating',
    titleAr: 'أعلى معايير أمان البطاقات العالمية',
    descEn: 'Audited annually by QSA with 100% compliance across all 12 security control layers.',
    descAr: 'تدقيق سنوي معتمد لأعلى مستويات الحماية والتشفير لبيانات بطاقات الدفع العالمية.',
    icon: 'Lock',
  },
  {
    id: 'sovereign',
    badgeEn: 'Oman Sovereign Cloud',
    badgeAr: 'السحابة السيادية العُمانية',
    titleEn: '100% In-Country Data Residency',
    titleAr: 'استضافة البيانات داخل سلطنة عُمان 100%',
    descEn: 'All encrypted ledgers, customer records, and transaction logs reside inside Oman tier-4 data centers.',
    descAr: 'تخزين جميع السجلات والمعاملات المشفرة داخل مراكز البيانات الوطنية عالية الأمان بسلطنة عُمان.',
    icon: 'Server',
  },
  {
    id: 'uptime',
    badgeEn: '99.999% SLA',
    badgeAr: 'جاهزية 99.999%',
    titleEn: 'High-Availability Kernel',
    titleAr: 'نظام تشغيل غير قابل للانقطاع',
    descEn: 'Multi-region failover infrastructure with sub-10ms intra-node transaction replication.',
    descAr: 'بنية تحتية موزعة تضمن استمرارية الخدمة بدون أي توقف طوال العام مع معالجة فائقة السرعة.',
    icon: 'Activity',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bank-muscat-partner',
    clientName: 'Bank Muscat Merchant Network',
    logoText: 'BANK MUSCAT',
    categoryEn: 'Banking & Enterprise Integration',
    categoryAr: 'القطاع المصرفي وكبار التجار',
    quoteEn: 'Thawani’s 2035 API architecture allowed us to deploy instant QR checkout across 12,000 enterprise merchants in less than 14 days with zero downtime.',
    quoteAr: 'مكّنتنا بنية ثواني المتقدمة من نشر نظام الدفع السريع عبر QR لدى أكثر من 12,000 تجار خلال أقل من 14 يوماً وبكفاءة 100%.',
    authorEn: 'Executive Director of Digital Payments',
    authorAr: 'الرئيس التنفيذي للمدفوعات الرقمية',
    statEn: '+340%',
    statAr: '+340%',
    statLabelEn: 'Digital Payment Adoption',
    statLabelAr: 'نمو المدفوعات الرقمية',
    bgGlow: 'rgba(0, 214, 143, 0.15)',
  },
  {
    id: 'omantel',
    clientName: 'Omantel Telecommunications',
    logoText: 'OMANTEL',
    categoryEn: 'Telecommunications & Utilities',
    categoryAr: 'قطاع الاتصالات والخدمات',
    quoteEn: 'Integrating Thawani DirectPay reduced bill settlement friction for over 1.2 million subscribers while cutting chargebacks to 0.001%.',
    quoteAr: 'ساهم ربط ثواني DirectPay في تسهيل تحصيل الفواتير لأكثر من 1.2 مليون مشترك مع خفض النزاعات إلى النسبة الصفرية.',
    authorEn: 'VP of Customer Technology',
    authorAr: 'نائب الرئيس لتقنية العملاء',
    statEn: '<0.1s',
    statAr: 'أقل من 0.1 ثانية',
    statLabelEn: 'Avg Bill Settlement Latency',
    statLabelAr: 'سرعة تحصيل الفاتورة',
    bgGlow: 'rgba(0, 168, 107, 0.15)',
  },
  {
    id: 'omran-group',
    clientName: 'OMRAN Group Hospitality',
    logoText: 'OMRAN HOTELS',
    categoryEn: 'Tourism & Luxury Hospitality',
    categoryAr: 'السياحة والفنادق الفاخرة',
    quoteEn: 'Our international guests enjoy seamless contact-free payments with multi-currency dynamic conversion directly at check-in.',
    quoteAr: 'يحظى ضيوفنا الدوليون بتجربة دفع لا تلامسية فاخرة تدعم العملات المتعددة والتحويل الفوري عند الاستقبال.',
    authorEn: 'Chief Financial Officer',
    authorAr: 'الرئيس التنفيذي للمالية',
    statEn: '$18M+',
    statAr: '18+ مليون دولار',
    statLabelEn: 'Cross-Border Volume',
    statLabelAr: 'حجم المعاملات الدولية',
    bgGlow: 'rgba(5, 150, 105, 0.15)',
  },
];

export const API_SNIPPETS: ApiSnippet[] = [
  {
    language: 'curl',
    label: 'cURL',
    code: `curl -X POST https://api.thawani.om/v2/checkout/sessions \\
  -H "Authorization: Bearer thawani_live_sec_98f7a29..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_reference_id": "ORDER-2035-8841",
    "mode": "payment",
    "amount": 15000,
    "currency": "OMR",
    "products": [
      {
        "name": "Luxury Suite Booking",
        "unit_amount": 15000,
        "quantity": 1
      }
    ],
    "success_url": "https://merchant.om/success",
    "cancel_url": "https://merchant.om/cancel"
  }'`,
  },
  {
    language: 'node',
    label: 'Node.js',
    code: `import { ThawaniClient } from '@thawani/sdk';

const thawani = new ThawaniClient({
  secretKey: process.env.THAWANI_SECRET_KEY,
  environment: 'live', // Oman Sovereign Gateway
});

const session = await thawani.checkout.createSession({
  clientReferenceId: 'ORDER-2035-8841',
  amount: 15.000, // 15.000 OMR (Baiza precision)
  currency: 'OMR',
  metadata: { customerCivilId: '10982341' },
  instantSettlement: true,
});

console.log('Redirecting to checkout:', session.paymentUrl);`,
  },
  {
    language: 'python',
    label: 'Python',
    code: `from thawani import ThawaniEnterprise

client = ThawaniEnterprise(
    secret_key=os.getenv("THAWANI_SECRET_KEY"),
    sovereign_region="om-central"
)

session = client.checkout_sessions.create(
    client_reference_id="ORDER-2035-8841",
    amount_baiza=15000, # 15.000 OMR
    currency="OMR",
    enable_soundbox_ping=True,
    success_url="https://merchant.om/success"
)

print(f"Session Token: {session.id}")`,
  },
  {
    language: 'php',
    label: 'PHP / Laravel',
    code: `<?php
use Thawani\\SDK\\ThawaniGateway;

$thawani = new ThawaniGateway(config('services.thawani.secret'));

$session = $thawani->createCheckoutSession([
    'client_reference_id' => 'ORDER-2035-8841',
    'amount' => 15000, // Baizas
    'currency' => 'OMR',
    'return_url' => route('thawani.callback'),
]);

return redirect($session->redirect_url);`,
  },
  {
    language: 'go',
    label: 'Go',
    code: `package main

import (
    "context"
    "fmt"
    "github.com/thawani/thawani-go"
)

func main() {
    client := thawani.NewClient("thawani_live_sec_98f7a29...")
    
    session, err := client.Checkout.Create(context.Background(), &thawani.CheckoutParams{
        Amount: 15000,
        Currency: "OMR",
        ReferenceID: "ORDER-2035-8841",
    })
    
    if err == nil {
        fmt.Println("Payment URL:", session.URL)
    }
}`,
  },
];
