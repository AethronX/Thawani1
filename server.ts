import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = 3000;

// Gemini AI Setup (Server-side)
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    version: "2035.4.0",
    service: "Thawani Financial Platform Kernel",
    timestamp: new Date().toISOString(),
    aiEngine: ai ? "Gemini 3.6 Flash Active" : "Heuristic Intelligence Active",
  });
});

// Thawani AI Financial Assistant Endpoint
app.post("/api/ai/chat", async (req, res) => {
  const { message, lang = "en" } = req.body;

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Message string is required" });
    return;
  }

  const systemInstruction = `You are "Thawani Intelligence", the next-generation AI Financial Engine for Thawani Technologies — Oman's premier financial technology enterprise.
You are embedded in the Thawani 2035 Enterprise Platform.
You assist merchants, enterprise CFOs, developers, and users with:
- Payment Gateway integration & OpenAPI specs (v2/charges, v2/qr, Moyasar, DirectPay)
- Central Bank of Oman (CBO) license compliance, PCI DSS v4.0 Level 1, ISO 27001
- Instant settlement in OMR, GCC regional corridors (AED, SAR, QAR, BHD, KWD), and major currencies
- Fraud prevention, 3DS 2.2, biometric verification & AI risk scoring
- Smart POS terminals, Soundbox audio payment confirmations, and Dynamic QR codes

Tone: Highly professional, crisp, authoritative, dark-luxury fintech style (Apple meets Stripe).
If requested in Arabic (or if lang === 'ar'), respond in clear, modern, professional Arabic (الفصحى المعاصرة).
Provide direct, concise, mathematically accurate, and actionable answers.`;

  try {
    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({
        reply: response.text || "Thawani Intelligence response processed.",
        source: "Gemini 3.6 Flash",
      });
      return;
    }
  } catch (err) {
    console.error("Gemini AI error:", err);
  }

  // Graceful Fallback Intelligence Engine
  const queryLower = message.toLowerCase();
  let fallbackReply = "";

  if (queryLower.includes("qr") || queryLower.includes("scan") || message.includes("كيو ار")) {
    fallbackReply = lang === "ar"
      ? "تتيح لك تقنية ثواني Dynamic QR 2035 تحويل أجهزة التاجر أو شاشات المبيعات إلى نقاط دفع فورية فائقة السرعة مع تأكيد صوتي فوري عبر Thawani Soundbox وإسوية لحظية في الحساب البنكي."
      : "Thawani Dynamic QR 2035 enables instant screen-to-wallet micro-settlements with sub-200ms processing times, instant audio alerts on Thawani Soundbox, and zero-reconciliation overhead.";
  } else if (queryLower.includes("api") || queryLower.includes("code") || queryLower.includes("sdk") || queryLower.includes("developer")) {
    fallbackReply = lang === "ar"
      ? "يوفر توثيق ثواني للمطورين مكتبات SDK رسمية بـ Node.js, Python, PHP, Go, و cURL. يمكنك بدء إنشاء جلسة دفع باستخدام `/v2/checkout/sessions` مع دعم كامل للتوقيع الرقمي HMAC-SHA256 وتجربة Sandbox متكاملة."
      : "Thawani OpenAPI v2 features SDKs for Node.js, Python, PHP, Go, and React Native. You can create checkout sessions via `POST /v2/checkout/sessions` with automated webhooks and 256-bit HMAC signatures.";
  } else if (queryLower.includes("fee") || queryLower.includes("price") || queryLower.includes("cost") || message.includes("رسوم")) {
    fallbackReply = lang === "ar"
      ? "تعتمد ثواني تسعيرة مرنة للشركات والمؤسسات تبدأ من 0% على تحويلات P2P وشرائح مخصصة بأسعار تنافسية للمتاجر والكبار مع تسوية فورية بدون رسوم خفية."
      : "Thawani offers custom tiering: 0% P2P local transfers, highly competitive merchant MDR starting at 0.95% + 0.050 OMR with same-day or instant settlement to any Omani bank.";
  } else if (queryLower.includes("cbo") || queryLower.includes("license") || queryLower.includes("security") || queryLower.includes("pci")) {
    fallbackReply = lang === "ar"
      ? "ثواني حاصلة على ترخيص البنك المركزي العماني (CBO) وتلتزم بمعايير PCI DSS Level 1 وشهادة ISO 27001، مع تشفير طيفي 256-bit AES وتخزين البيانات داخل السحابة السيادية لسلطنة عُمان."
      : "Thawani is fully licensed by the Central Bank of Oman (CBO), certified PCI DSS v4.0 Level 1, ISO 27001 compliant, and executes all telemetry within Oman's Sovereign Cloud Infrastructure.";
  } else {
    fallbackReply = lang === "ar"
      ? `مرحباً بك في المحرك الذكي لـ "ثواني 2035". يمكنني مساعدتك في ربط بوابة الدفع، الاستفسار عن الاشتراطات التنظيمية للبنك المركزي العماني، تحليل المعاملات، أو خصائص الثواني Pay.`
      : `Welcome to Thawani 2035 Financial Intelligence. I can assist you with API integration, CBO regulatory frameworks, instant settlement corridors, POS hardware, or fraud risk parameters. How can I empower your enterprise today?`;
  }

  res.json({
    reply: fallbackReply,
    source: "Thawani Heuristic Kernel",
  });
});

// AI Fraud Analysis Simulation Endpoint
app.post("/api/ai/fraud-check", async (req, res) => {
  const { amount = 150, currency = "OMR", ipCountry = "OM", cardType = "Debit", merchantCat = "Retail" } = req.body;

  let riskScore = Math.floor(Math.random() * 15) + 3; // default low risk
  let status = "APPROVED";
  let anomaly = "Nominal behavior; velocity matches historical biometric fingerprint.";

  if (amount > 1000) {
    riskScore += 25;
    anomaly = "Elevated single-basket volume. Step-up 3DS 2.2 biometric prompt triggered.";
  }
  if (ipCountry !== "OM") {
    riskScore += 35;
    anomaly = "Cross-border IP routing detected outside Oman Sovereign corridor.";
  }

  if (riskScore > 65) {
    status = "FLAGGED_REVIEW";
  } else if (riskScore > 85) {
    status = "DECLINED";
  }

  res.json({
    transactionId: `TXN-2035-${Math.floor(100000 + Math.random() * 900000)}`,
    amount: `${amount} ${currency}`,
    riskScore,
    status,
    decisionReason: anomaly,
    latencyMs: 14,
    aiModel: "Thawani Neural Shield v4",
    timestamp: new Date().toISOString(),
  });
});

// Vite server / static fallback setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Thawani Enterprise Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
