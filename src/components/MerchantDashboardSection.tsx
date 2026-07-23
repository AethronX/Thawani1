import React, { useState } from 'react';
import { Language, LiveTransaction } from '../types';
import { GlassCard } from './GlassCard';
import { NumberCounter } from './NumberCounter';
import { 
  LayoutDashboard, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Filter, 
  Download, 
  Building, 
  Clock, 
  CheckCircle2, 
  QrCode, 
  Volume2, 
  Globe, 
  Send,
  RefreshCw,
  Search,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface MerchantDashboardSectionProps {
  lang: Language;
}

export const MerchantDashboardSection: React.FC<MerchantDashboardSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | 'ytd'>('24h');
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [methodFilter, setMethodFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const branches = [
    { id: 'all', nameEn: 'All Branches (Oman)', nameAr: 'جميع الفروع (عُمان)' },
    { id: 'muscat', nameEn: 'Muscat Mall Branch', nameAr: 'فرع مسقط مول' },
    { id: 'salalah', nameEn: 'Salalah Waterfront', nameAr: 'فرع صلالة الواجهة البحرية' },
    { id: 'sohar', nameEn: 'Sohar Port Hub', nameAr: 'فرع صحار' },
  ];

  const initialTxns: LiveTransaction[] = [
    { id: 'TXN-9021', timestamp: '10:42:15 AM', amountOMR: 145.500, merchantName: 'Lulu Hypermarket Muscat', method: 'Dynamic QR', status: 'SETTLED', channel: 'POS Terminal #04' },
    { id: 'TXN-9020', timestamp: '10:40:02 AM', amountOMR: 82.000, merchantName: 'Royal Opera Boutique', method: 'Checkout API', status: 'SETTLED', channel: 'Web Gateway' },
    { id: 'TXN-9019', timestamp: '10:38:19 AM', amountOMR: 12.250, merchantName: 'Nizwa Heritage Cafe', method: 'Smart POS', status: 'SETTLED', channel: 'Thawani Soundbox' },
    { id: 'TXN-9018', timestamp: '10:35:44 AM', amountOMR: 350.000, merchantName: 'Omantel Enterprise Link', method: 'DirectPay', status: 'VERIFIED', channel: 'WhatsApp Link' },
    { id: 'TXN-9017', timestamp: '10:30:11 AM', amountOMR: 45.800, merchantName: 'Al Mouj Marina Dining', method: 'Dynamic QR', status: 'SETTLED', channel: 'Table QR Code' },
  ];

  const [transactions, setTransactions] = useState<LiveTransaction[]>(initialTxns);

  const getMultiplier = () => {
    switch (timeRange) {
      case '24h': return 1;
      case '7d': return 6.8;
      case '30d': return 28.5;
      case 'ytd': return 310;
    }
  };

  const mult = getMultiplier();
  const grossVolumeVal = 48250.750 * mult;
  const txnCountVal = Math.floor(1840 * mult);
  const avgTicketVal = 26.220;
  const payoutOmrVal = 48010.500 * mult;

  // Filtered transactions list
  const filteredTxns = transactions.filter((t) => {
    const matchesMethod = methodFilter === 'all' || t.method.toLowerCase().includes(methodFilter.toLowerCase());
    const matchesSearch = searchQuery === '' || t.merchantName.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMethod && matchesSearch;
  });

  const simulateNewTransaction = () => {
    const methods: ('Dynamic QR' | 'Smart POS' | 'Checkout API' | 'DirectPay')[] = ['Dynamic QR', 'Smart POS', 'Checkout API', 'DirectPay'];
    const randomMethod = methods[Math.floor(Math.random() * methods.length)];
    const randomAmt = parseFloat((Math.random() * 80 + 5).toFixed(3));
    const newTxn: LiveTransaction = {
      id: `TXN-${Math.floor(9022 + Math.random() * 1000)}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: true }),
      amountOMR: randomAmt,
      merchantName: 'Thawani Live Merchant Demo',
      method: randomMethod,
      status: 'SETTLED',
      channel: 'Instant Kernel Flow',
    };
    setTransactions([newTxn, ...transactions.slice(0, 6)]);
  };

  return (
    <AnimatedSection id="dashboard" className="py-24 bg-[var(--bg-canvas)] text-[var(--text-primary)] relative border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs font-mono">
            <LayoutDashboard className="w-4 h-4 text-[var(--text-brand)]" />
            <span>{isAr ? 'منصة التاجر للقيادة المتقدمة 2035' : 'Thawani Business Command Center'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-[var(--text-primary)] tracking-tight">
            {isAr ? (
              <>لوحة تحكم إدارية <span className="text-[var(--text-brand)]">تفاعلية بالكامل</span></>
            ) : (
              <>Real-Time Treasury & <br className="hidden sm:inline" /> <span className="text-[var(--text-brand)]">Merchant Analytics</span></>
            )}
          </h2>

          <p className="text-lead text-[var(--text-secondary)]">
            {isAr
              ? 'تتبع إيرادات فروعك، تحليلات المبيعات، التسويات اللحظية T+0، وتقارير القيمة المضافة من شاشة واحدة.'
              : 'Multi-branch settlement visibility, automated VAT reports, instant T+0 payouts, and live transaction stream.'}
          </p>
        </AnimatedItem>

        {/* Deliberately Framed Dark Instrument Panel Container */}
        <div className="rounded-3xl bg-[var(--ink-900)] border border-[var(--ink-800)] p-6 sm:p-8 backdrop-blur-2xl shadow-[var(--shadow-lg)] text-white">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            
            {/* Branch Switcher Dropdown */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#00D68F]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase font-mono block">
                  {isAr ? 'الفرع المحدد' : 'Selected Branch'}
                </span>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="bg-transparent text-white font-bold text-sm border-none focus:ring-0 cursor-pointer p-0 pr-6"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id} className="bg-[#0D1117] text-white">
                      {isAr ? b.nameAr : b.nameEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Time Range Pills */}
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-white/5 p-1 rounded-xl border border-white/10">
              {(['24h', '7d', '30d', 'ytd'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    timeRange === range
                      ? 'bg-[#00D68F] text-[#0A0D0F] shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {range.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Simulated Live Refresher & Report Export */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={simulateNewTransaction}
                className="px-3.5 py-2 rounded-xl bg-[#00D68F]/10 border border-[#00D68F]/30 text-[#00D68F] hover:bg-[#00D68F]/20 text-xs font-mono font-medium transition-colors flex items-center space-x-1.5 rtl:space-x-reverse"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>{isAr ? 'ضخ عملية حية' : 'Simulate Live Txn'}</span>
              </button>

              <button className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono font-medium transition-colors flex items-center space-x-1.5 rtl:space-x-reverse">
                <Download className="w-3.5 h-3.5 text-zinc-400" />
                <span>{isAr ? 'تصدير التقرير' : 'Export CSV'}</span>
              </button>
            </div>

          </div>

          {/* Key KPI Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span>{isAr ? 'إجمالي المبيعات' : 'Gross Volume (OMR)'}</span>
                <span className="text-emerald-400 flex items-center font-mono text-[11px]">
                  <TrendingUp className="w-3.5 h-3.5 ltr:mr-0.5 rtl:ml-0.5" /> +24.8%
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono flex items-baseline space-x-1 rtl:space-x-reverse">
                <NumberCounter key={`gross-${timeRange}`} value={grossVolumeVal} decimals={3} duration={1.5} />
                <span className="text-xs text-[#00D68F] font-sans">OMR</span>
              </div>
              <div className="text-[10px] text-zinc-500 mt-2 font-mono">
                {isAr ? 'تسوية لحظية حساب البنك' : 'Instant T+0 Bank Settlement'}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span>{isAr ? 'عدد المعاملات' : 'Transaction Count'}</span>
                <span className="text-emerald-400 flex items-center font-mono text-[11px]">
                  <TrendingUp className="w-3.5 h-3.5 ltr:mr-0.5 rtl:ml-0.5" /> +18.2%
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">
                <NumberCounter key={`txn-${timeRange}`} value={txnCountVal} decimals={0} duration={1.5} />
              </div>
              <div className="text-[10px] text-zinc-500 mt-2 font-mono">
                {isAr ? 'معدل النجاح 99.98%' : 'Authorization Rate 99.98%'}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span>{isAr ? 'متوسط قيمة السلة' : 'Average Ticket Size'}</span>
                <span className="text-zinc-400 font-mono text-[11px]">OMR</span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono flex items-baseline space-x-1 rtl:space-x-reverse">
                <NumberCounter key={`avg-${timeRange}`} value={avgTicketVal} decimals={3} duration={1.2} />
                <span className="text-xs text-zinc-400 font-sans">OMR</span>
              </div>
              <div className="text-[10px] text-zinc-500 mt-2 font-mono">
                {isAr ? 'تشمل المعاملات المحلية والإقليمية' : 'Includes local & GCC cards'}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#00D68F]/10 border border-[#00D68F]/30">
              <div className="flex items-center justify-between text-xs text-emerald-300 mb-2">
                <span>{isAr ? 'المبلغ المتاح للتسوية' : 'Available Payout (T+0)'}</span>
                <span className="text-[#00D68F] font-bold font-mono text-[10px] uppercase">READY</span>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono flex items-baseline space-x-1 rtl:space-x-reverse">
                <NumberCounter key={`payout-${timeRange}`} value={payoutOmrVal} decimals={3} duration={1.5} />
                <span className="text-xs text-[#00D68F] font-sans">OMR</span>
              </div>
              <div className="text-[10px] text-emerald-400 mt-2 font-mono">
                {isAr ? 'جاهز للتحويل للبنك فوراً' : 'Instant Bank Payout Enabled'}
              </div>
            </div>

          </div>

          {/* Interactive Revenue Bar Chart Visualization */}
          <div className="mb-8 p-6 rounded-2xl bg-black/40 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono font-bold text-white uppercase">
                {isAr ? 'منحنى توزيع الإيرادات حسب القنوات' : 'Revenue Channel Breakdown Curve'}
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-[11px] font-mono text-zinc-400">
                <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-[#00D68F] ltr:mr-1.5 rtl:ml-1.5" /> Dynamic QR</span>
                <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600 ltr:mr-1.5 rtl:ml-1.5" /> Soundbox POS</span>
                <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-teal-400 ltr:mr-1.5 rtl:ml-1.5" /> Gateway API</span>
              </div>
            </div>

            {/* Simulated Bar Graph */}
            <div className="h-32 flex items-end justify-between gap-2 pt-4 border-b border-white/10 pb-2">
              {[42, 68, 55, 88, 74, 92, 60, 81, 95, 78, 100, 86, 90, 94].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                  {/* Tooltip on hover */}
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-emerald-500/40 text-[#00D68F] text-[9px] font-mono px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap z-20">
                    {(val * 14.2).toFixed(1)} OMR
                  </div>
                  <div
                    style={{ height: `${val}%` }}
                    className="w-full rounded-t bg-gradient-to-t from-emerald-900 via-[#00A86B] to-[#00D68F] group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-[9px] font-mono text-zinc-600">
                    {idx % 2 === 0 ? `${idx + 9}:00` : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Recent Transactions Stream with Filter Tabs */}
          <div>
            <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="w-4 h-4 text-[#00D68F]" />
                <span className="text-sm font-bold text-white font-display">
                  {isAr ? 'تغذية العمليات الفورية الحية' : 'Live Real-Time Transactions Feed'}
                </span>
              </div>

              {/* Method Filters */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs">
                {['all', 'QR', 'POS', 'Checkout', 'DirectPay'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setMethodFilter(f)}
                    className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
                      methodFilter === f
                        ? 'bg-[#00D68F]/20 text-[#00D68F] border border-[#00D68F]/40'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/30">
              <table className="w-full text-left rtl:text-right text-xs font-mono">
                <thead className="bg-white/[0.03] text-zinc-400 border-b border-white/5 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">{isAr ? 'رقم المعاملة' : 'Transaction ID'}</th>
                    <th className="p-3">{isAr ? 'الوقت' : 'Time'}</th>
                    <th className="p-3">{isAr ? 'المتجر/الفرع' : 'Merchant / Branch'}</th>
                    <th className="p-3">{isAr ? 'قناة الدفع' : 'Payment Method'}</th>
                    <th className="p-3">{isAr ? 'المبلغ (ريال)' : 'Amount (OMR)'}</th>
                    <th className="p-3">{isAr ? 'الحالة' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-200">
                  {filteredTxns.map((txn) => (
                    <tr key={txn.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-bold text-emerald-400">{txn.id}</td>
                      <td className="p-3 text-zinc-400">{txn.timestamp}</td>
                      <td className="p-3 text-white font-sans font-medium">{txn.merchantName}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px]">
                          {txn.method}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-white">
                        {txn.amountOMR.toFixed(3)} OMR
                      </td>
                      <td className="p-3">
                        <span className="inline-flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{txn.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
