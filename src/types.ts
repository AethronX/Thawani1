export type Language = 'en' | 'ar';

export interface EcosystemNode {
  id: string;
  nameEn: string;
  nameAr: string;
  iconName: string;
  type: 'source' | 'channel' | 'wallet' | 'switch' | 'destination' | 'status';
  status: 'active' | 'processing' | 'idle';
  metricEn: string;
  metricAr: string;
}

export interface LiveTransaction {
  id: string;
  timestamp: string;
  amountOMR: number;
  merchantName: string;
  method: 'Dynamic QR' | 'Smart POS' | 'Checkout API' | 'DirectPay';
  status: 'SETTLED' | 'PROCESSING' | 'VERIFIED';
  channel: string;
}

export interface ProductItem {
  id: string;
  tagEn: string;
  tagAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  icon: string;
  featuresEn: string[];
  featuresAr: string[];
  metricsEn: string;
  metricsAr: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  logoText: string;
  categoryEn: string;
  categoryAr: string;
  quoteEn: string;
  quoteAr: string;
  authorEn: string;
  authorAr: string;
  statEn: string;
  statAr: string;
  statLabelEn: string;
  statLabelAr: string;
  bgGlow: string;
}

export interface ApiSnippet {
  language: 'curl' | 'node' | 'python' | 'php' | 'go';
  label: string;
  code: string;
}

export interface FraudSimParams {
  amountOMR: number;
  ipLocation: 'Oman (Local)' | 'GCC Region' | 'International (High Risk)';
  deviceFingerprint: 'Verified Biometric' | 'Known Device' | 'New Untrusted Device';
  velocity: 'Normal (<3 txns/hr)' | 'High (15+ txns/hr)';
  merchantCategory: 'Grocery & Retail' | 'Digital Goods' | 'Cross-Border Luxury';
}

export interface FraudAnalysisResult {
  riskScore: number;
  status: 'APPROVED' | 'STEP_UP_3DS' | 'DECLINED_FRAUD';
  recommendationEn: string;
  recommendationAr: string;
  threatMatrix: {
    ipRisk: number;
    velocityRisk: number;
    amountRisk: number;
    deviceRisk: number;
  };
}
