'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WalitsEnplPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [principal, setPrincipal] = useState(5000);
  const [expense, setExpense] = useState(183);
  const [apy, setApy] = useState(5.6);

  const isKo = language === 'ko';

  const monthlyYield = principal * (apy / 100) / 12;
  const coverageRatio = Math.min(100, (monthlyYield / expense) * 100);
  const requiredPrincipal = (expense / (apy / 100)) * 12;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
              ← {isKo ? '블로그' : 'Blog'}
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >KO</button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >EN</button>
            </div>
          </div>
          <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'walits 기술 심층 분석' : 'walits Tech Deep Dive'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'ENPL — Earn Now Pay Later: 원금은 그대로, 이자로 결제한다'
              : 'ENPL — Earn Now Pay Later: Keep the Principal, Pay with Yield'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '빌려서 지금 사고 나중에 갚는 BNPL의 역발상. 원금을 예치해 발생하는 이자로 매달 구독료를 결제한다. 원금은 영원히 남는다.'
              : 'The opposite of Buy Now Pay Later. Deposit principal, pay monthly subscriptions with the yield. The principal stays forever.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 4월 10일' : 'April 10, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '18분 읽기' : '18 min read'}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 0: Core Concept */}
        <section>
          <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              {isKo ? 'ENPL이란 무엇인가' : 'What is ENPL?'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'ENPL(Earn Now Pay Later)은 walits가 설계한 개인 재무 구조다. 핵심 아이디어는 단순하다: 결제에 사용할 원금을 DeFi 프로토콜에 예치하고, 매달 발생하는 이자를 자동으로 결제에 사용한다. 원금은 소비되지 않는다.'
                : 'ENPL (Earn Now Pay Later) is a personal finance structure designed by walits. The core idea is simple: deposit the principal for your expenses into a DeFi protocol, and automatically use the monthly yield to make payments. The principal is never consumed.'}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="font-black text-red-700 mb-3 text-lg">BNPL (기존)</div>
                <div className="space-y-2 text-sm text-slate-700">
                  <div>1. {isKo ? '지금 물건을 산다' : 'Buy the item now'}</div>
                  <div>2. {isKo ? '나중에 갚는다 (이자 포함)' : 'Pay later (with interest)'}</div>
                  <div>3. {isKo ? '원금 + 이자 = 실제 지출 > 가격' : 'Principal + interest = actual cost > price'}</div>
                  <div className="text-red-600 font-semibold mt-3">→ {isKo ? '부채가 생기고, 총 지출이 늘어난다' : 'Creates debt, increases total spending'}</div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-black text-green-700 mb-3 text-lg">ENPL (walits)</div>
                <div className="space-y-2 text-sm text-slate-700">
                  <div>1. {isKo ? '원금을 DeFi에 예치한다' : 'Deposit principal to DeFi'}</div>
                  <div>2. {isKo ? '매달 이자가 발생한다' : 'Yield accrues monthly'}</div>
                  <div>3. {isKo ? '이자로 구독료를 자동 결제한다' : 'Yield auto-pays subscriptions'}</div>
                  <div className="text-green-600 font-semibold mt-3">→ {isKo ? '원금 유지 + 결제는 이자에서. 총 지출 감소' : 'Principal intact + payments from yield. Total spending decreases'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Math */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 핵심 수식' : '1. Core Formula'}
          </h2>

          <div className="bg-slate-900 rounded-2xl p-8 mb-6">
            <div className="text-slate-400 text-xs mb-4 font-mono">{isKo ? '// ENPL 필요 원금 계산' : '// ENPL required principal calculation'}</div>
            <div className="space-y-4">
              <div>
                <div className="text-slate-400 text-xs mb-1 font-mono">{isKo ? '// 월 이자' : '// Monthly yield'}</div>
                <div className="text-yellow-400 font-mono text-lg">monthly_yield = principal × (APY / 12)</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1 font-mono">{isKo ? '// 커버리지 비율' : '// Coverage ratio'}</div>
                <div className="text-green-400 font-mono text-lg">coverage = monthly_yield / monthly_expense × 100%</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1 font-mono">{isKo ? '// 100% 커버를 위한 필요 원금' : '// Required principal for 100% coverage'}</div>
                <div className="text-blue-400 font-mono text-lg">required_principal = monthly_expense × 12 / APY</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-slate-900 mb-3">{isKo ? '실제 예시 (payfi-architecture 기준)' : 'Real Example (from payfi-architecture)'}</h3>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-slate-500">{isKo ? '월 구독료' : 'Monthly subscriptions'}</div>
                <div className="font-semibold">$183 / {isKo ? '월' : 'month'}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-slate-500">{isKo ? 'APY (Morpho)' : 'APY (Morpho)'}</div>
                <div className="font-semibold">5.6%</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-slate-500">{isKo ? '100% 커버 필요 원금' : 'Principal for 100% coverage'}</div>
                <div className="font-semibold text-orange-600">$183 × 12 / 0.056 = <strong>$39,107</strong></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-slate-500">{isKo ? '현재 원금 $5,000 시 월 이자' : 'With $5,000 principal, monthly yield'}</div>
                <div className="font-semibold">$5,000 × 0.056 / 12 = <strong>$23.3</strong></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-slate-500">{isKo ? '커버리지' : 'Coverage'}</div>
                <div className="font-semibold text-blue-600">$23.3 / $183 = <strong>12.7%</strong></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
            {isKo
              ? '$5,000으로 구독료의 12.7%를 커버한다. 즉 원금 $5,000이 있으면 Netlify($19) + Notion($16) + ChatGPT($20) 정도는 이자로 결제 가능하다. $39,107을 예치하면 월 $183 전체를 원금 소비 없이 결제한다.'
              : 'With $5,000, covers 12.7% of subscription costs. Meaning $5,000 principal covers Netlify ($19) + Notion ($16) + ChatGPT ($20) from yield alone. Deposit $39,107 and all $183/month subscriptions are paid without ever spending principal.'}
          </div>
        </section>

        {/* Section 2: Interactive Calculator */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. ENPL 계산기' : '2. ENPL Calculator'}
          </h2>

          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {isKo ? '현재 원금 (USDC)' : 'Current Principal (USDC)'}
                </label>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {isKo ? '월 정기 지출 (USDC)' : 'Monthly Expenses (USDC)'}
                </label>
                <input
                  type="number"
                  value={expense}
                  onChange={(e) => setExpense(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {isKo ? 'APY (%)' : 'APY (%)'}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={apy}
                  onChange={(e) => setApy(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
                <div className="text-sm text-slate-500 mb-1">{isKo ? '월 이자 수익' : 'Monthly Yield'}</div>
                <div className="text-3xl font-black text-emerald-600">${monthlyYield.toFixed(1)}</div>
              </div>
              <div className={`border rounded-xl p-5 text-center ${coverageRatio >= 100 ? 'bg-green-50 border-green-200' : coverageRatio >= 50 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'}`}>
                <div className="text-sm text-slate-500 mb-1">{isKo ? '커버리지' : 'Coverage'}</div>
                <div className={`text-3xl font-black ${coverageRatio >= 100 ? 'text-green-600' : coverageRatio >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {coverageRatio.toFixed(1)}%
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                <div className="text-sm text-slate-500 mb-1">{isKo ? '100% 커버 필요 원금' : 'Principal for 100%'}</div>
                <div className="text-2xl font-black text-blue-600">${Math.round(requiredPrincipal).toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-6 bg-slate-100 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${coverageRatio >= 100 ? 'bg-green-500' : coverageRatio >= 50 ? 'bg-yellow-500' : 'bg-orange-500'}`}
                style={{ width: `${Math.min(100, coverageRatio)}%` }}
              />
            </div>
            <div className="text-xs text-slate-500 mt-2 text-right">
              {isKo ? `월 $${expense} 중 $${monthlyYield.toFixed(1)} 커버 (이자로 자동 결제)` : `$${monthlyYield.toFixed(1)} of $${expense}/month covered by yield (auto-paid)`}
            </div>
          </div>
        </section>

        {/* Section 3: ENPL Agent Flow */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. ENPL Agent — 실행 흐름' : '3. ENPL Agent — Execution Flow'}
          </h2>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-orange-800 mb-2">{isKo ? '시나리오: 월 구독료 $183를 이자로 결제' : 'Scenario: Pay $183/month subscriptions with yield'}</h3>
            <p className="text-sm text-orange-700">
              {isKo
                ? '유저: "매달 구독료 $183를 수익으로 내고 싶어." — 이 한 마디로 ENPL Agent가 전체 구조를 설정한다.'
                : 'User: "I want to pay my $183/month subscriptions with yield." — This one sentence triggers the entire ENPL setup.'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                step: '1',
                icon: '🧮',
                title: isKo ? 'APY 조회 및 원금 계산' : 'APY query and principal calculation',
                detail: isKo
                  ? 'APY Scanner 실행 → Morpho 5.6% 확인 → 필요 원금 = $183 × 12 / 0.056 = $39,107 / 현재 잔고 $5,000 → 월 이자 $23.3 → 커버리지 12.7%'
                  : 'APY Scanner → Morpho 5.6% → Required principal = $183 × 12 / 0.056 = $39,107 / Current balance $5,000 → Monthly yield $23.3 → Coverage 12.7%',
                code: 'apy = APYScanner.query(["Aave","Morpho","Ondo"]) → max → 5.6%\nrequired = (183 × 12) / 0.056  // = $39,107',
              },
              {
                step: '2',
                icon: '📊',
                title: isKo ? '유저에게 리포트 및 승인 요청' : 'Report to user and request approval',
                detail: isKo
                  ? '현재 원금으로 가능한 커버리지(12.7%)와 100% 달성을 위한 목표 원금($39,107)을 보여준다. 유저는 부분 커버로 시작할지, 원금을 추가할지 결정한다.'
                  : 'Shows achievable coverage (12.7%) with current principal and target principal ($39,107) for 100%. User decides to start with partial coverage or add principal.',
                code: 'Agent.report({\n  current_principal: 5000,\n  monthly_yield: 23.3,\n  coverage: "12.7%",\n  target_principal: 39107\n})',
              },
              {
                step: '3',
                icon: '⚡',
                title: isKo ? '원금 예치 실행' : 'Principal deposit execution',
                detail: isKo
                  ? 'Policy Engine 검증 후 USDC.approve() → Morpho.supply() 실행. 예치 후 Morpho 포지션 ID 기록.'
                  : 'After Policy Engine validation: USDC.approve() → Morpho.supply(). Record Morpho position ID after deposit.',
                code: 'USDC.approve(MorphoBlue, 5000)\nMorpho.supply(USDC_MARKET_ID, 5000, shares=0, onBehalf=wallet)',
              },
              {
                step: '4',
                icon: '📅',
                title: isKo ? '월별 자동 결제 스케줄 등록' : 'Register monthly auto-payment schedule',
                detail: isKo
                  ? '매월 1일 이자 인출 → 구독료 결제 크론 등록. 이자가 부족하면 나머지는 원금에서 인출하지 않고 다음 달로 적립.'
                  : 'Register cron for monthly yield withdrawal → subscription payment on 1st of each month. If yield is short, remainder accumulates (not pulled from principal).',
                code: 'Cron.register({\n  schedule: "0 9 1 * *",  // 매월 1일 09:00\n  action: "withdraw_yield_and_pay",\n  amount: Math.min(monthly_yield, 183)\n})',
              },
              {
                step: '5',
                icon: '💸',
                title: isKo ? '매월 자동 결제 실행' : 'Monthly automatic payment execution',
                detail: isKo
                  ? 'Morpho.withdraw(이자분) → USDC 수령 → 구독 서비스 결제 (Circle CCTP 또는 카드 결제 프록시). 원금 Morpho 포지션은 유지.'
                  : 'Morpho.withdraw(yield amount) → receive USDC → pay subscription services (Circle CCTP or card payment proxy). Morpho principal position remains intact.',
                code: 'yield_amount = Morpho.position(wallet).interest_accrued\nMorpho.withdraw(USDC_MARKET_ID, yield_amount, ...)\nPaymentProxy.pay(subscriptions, yield_amount)',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-black text-orange-700">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span>{item.icon}</span>
                    <span className="font-bold text-slate-900">{item.title}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{item.detail}</p>
                  <div className="bg-slate-900 text-green-400 rounded-lg px-4 py-3 text-xs font-mono whitespace-pre">{item.code}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Sub Manager Preset */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. Sub Manager 프리셋 — 구독료 절감 전략' : '4. Sub Manager Preset — Subscription Cost Reduction'}
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📅</span>
              <div>
                <div className="font-black text-slate-900 text-xl">Sub Manager</div>
                <div className="text-sm text-slate-500">
                  {isKo ? 'ENPL 전략 — 구독료 자동 결제 프리셋' : 'ENPL strategy — auto subscription payment preset'}
                </div>
              </div>
            </div>
            <p className="text-slate-700 text-sm mb-6">
              {isKo
                ? 'Sub Manager는 walits의 투자 프리셋 중 ENPL을 특화한 구독료 전용 자동화다. 월 구독료를 입력하면 필요 원금을 자동 계산하고, Morpho/Aave에 예치한 뒤 매달 이자로 구독료를 결제한다. 원금은 항상 유지된다.'
                : 'Sub Manager is walits\' ENPL-specialized preset for subscription payments. Enter monthly subscriptions, auto-calculate required principal, deposit to Morpho/Aave, and pay subscriptions monthly with yield. Principal always stays intact.'}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { step: '1', label: isKo ? '구독료 입력' : 'Enter subscriptions', desc: isKo ? 'Netflix $15 + Notion $16 + ChatGPT $20 + AWS $132 = $183/월' : 'Netflix $15 + Notion $16 + ChatGPT $20 + AWS $132 = $183/mo' },
                { step: '2', label: isKo ? '자동 계산' : 'Auto-calculation', desc: isKo ? '필요 원금 $39,107 | 현재 커버 가능 비율 표시' : 'Required principal $39,107 | Show current coverage ratio' },
                { step: '3', label: isKo ? 'Morpho/Aave 예치' : 'Deposit to Morpho/Aave', desc: isKo ? 'APY 높은 프로토콜 선택 → 원금 예치 실행' : 'Select highest APY protocol → execute deposit' },
                { step: '4', label: isKo ? '매달 이자로 자동 결제' : 'Auto-pay with monthly yield', desc: isKo ? '매월 1일 이자 인출 → 구독료 결제 → 원금 유지' : 'Withdraw yield on 1st → pay subscriptions → principal intact' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white border border-slate-200 rounded-xl p-4">
                  <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center text-sm font-bold text-orange-700 shrink-0">{item.step}</div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub Manager vs Sleeping Money */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-slate-300 rounded-xl p-5">
              <div className="font-black text-slate-700 mb-3 flex items-center gap-2">
                <span>💤</span> {isKo ? 'Sleeping Money (일반 idle)' : 'Sleeping Money (general idle)'}
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• {isKo ? '유휴 잔고 전체 자동 예치' : 'Auto-deposit all idle balance'}</li>
                <li>• {isKo ? '지출 시 자동 회수' : 'Auto-withdraw on spending'}</li>
                <li>• {isKo ? '목적: 기회비용 제거' : 'Goal: eliminate opportunity cost'}</li>
                <li>• {isKo ? '원금 소비 가능' : 'Principal may be consumed'}</li>
              </ul>
            </div>
            <div className="border-2 border-orange-300 rounded-xl p-5 bg-orange-50">
              <div className="font-black text-orange-700 mb-3 flex items-center gap-2">
                <span>📅</span> {isKo ? 'Sub Manager (ENPL)' : 'Sub Manager (ENPL)'}
              </div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• {isKo ? '정기 지출 전용 원금 예치' : 'Dedicated principal for recurring expenses'}</li>
                <li>• {isKo ? '이자만 인출하여 결제' : 'Withdraw only yield for payment'}</li>
                <li>• {isKo ? '목적: 결제를 이자로 대체' : 'Goal: replace payments with yield'}</li>
                <li>• <strong>{isKo ? '원금 영구 보존' : 'Principal permanently preserved'}</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: ENPL vs BNPL */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. ENPL vs BNPL — 구조적 차이' : '5. ENPL vs BNPL — Structural Difference'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">{isKo ? '항목' : 'Item'}</th>
                  <th className="text-left px-4 py-3 text-red-300">BNPL</th>
                  <th className="text-left px-4 py-3 text-green-300 rounded-tr-lg">ENPL (walits)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [isKo ? '방향' : 'Direction', isKo ? '빌려서 지금 → 나중에 갚음' : 'Borrow now → repay later', isKo ? '예치하고 → 이자로 결제' : 'Deposit now → pay with yield'],
                  [isKo ? '부채 발생' : 'Debt created', isKo ? '있음 (원금 + 이자)' : 'Yes (principal + interest)', isKo ? '없음' : 'None'],
                  [isKo ? '이자 방향' : 'Interest direction', isKo ? '유저가 이자를 낸다' : 'User pays interest', isKo ? '유저가 이자를 받는다' : 'User receives interest'],
                  [isKo ? '원금 변화' : 'Principal change', isKo ? '감소 (상환 완료 시 0)' : 'Decreases (to 0 when repaid)', isKo ? '유지 (영구 보존)' : 'Maintained (preserved permanently)'],
                  [isKo ? '총 지출' : 'Total spending', isKo ? '상품가 + 이자 > 원가' : 'Product price + interest > cost', isKo ? '결제액 < 원금 (이자 범위 내)' : 'Payment < principal (within yield)'],
                  [isKo ? '신용 위험' : 'Credit risk', isKo ? '있음 (연체 시 패널티)' : 'Yes (penalty on late payment)', isKo ? '없음' : 'None'],
                  [isKo ? '적합한 사용처' : 'Best use case', isKo ? '일시적 현금 흐름 보완' : 'Temporary cash flow support', isKo ? '반복 정기 결제 (구독, 임금)' : 'Recurring payments (subscriptions, payroll)'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 border-b border-slate-100 font-semibold text-slate-700">{row[0]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-red-700">{row[1]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-green-700 font-medium">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Use Cases */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. ENPL 적용 시나리오' : '6. ENPL Application Scenarios'}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: '💻',
                title: isKo ? '개인 SaaS 구독' : 'Personal SaaS subscriptions',
                scenario: isKo ? 'Figma $15 + Notion $16 + ChatGPT $20 + Vercel $20 = $71/월' : 'Figma $15 + Notion $16 + ChatGPT $20 + Vercel $20 = $71/mo',
                needed: isKo ? '필요 원금: $71 × 12 / 0.056 = $15,214' : 'Required principal: $71 × 12 / 0.056 = $15,214',
                color: 'border-violet-200 bg-violet-50',
              },
              {
                icon: '🏢',
                title: isKo ? '스타트업 SaaS 비용' : 'Startup SaaS expenses',
                scenario: isKo ? 'AWS $200 + Datadog $100 + Slack $150 + GitHub $200 = $650/월' : 'AWS $200 + Datadog $100 + Slack $150 + GitHub $200 = $650/mo',
                needed: isKo ? '필요 원금: $650 × 12 / 0.056 = $139,286' : 'Required principal: $650 × 12 / 0.056 = $139,286',
                color: 'border-blue-200 bg-blue-50',
              },
              {
                icon: '👥',
                title: isKo ? '급여 자동화' : 'Payroll automation',
                scenario: isKo ? '팀원 3명 × $3,000 = $9,000/월' : '3 team members × $3,000 = $9,000/mo',
                needed: isKo ? '필요 원금: $9,000 × 12 / 0.056 = $1,928,571 (급여 전 DeFi 수익 활용)' : 'Required principal: $9,000 × 12 / 0.056 = $1,928,571 (use DeFi yield before payroll)' ,
                color: 'border-teal-200 bg-teal-50',
              },
              {
                icon: '🏠',
                title: isKo ? '임대료 / 리스' : 'Rent / Lease payments',
                scenario: isKo ? '사무실 임대료 $1,500/월' : 'Office rent $1,500/mo',
                needed: isKo ? '필요 원금: $1,500 × 12 / 0.056 = $321,429' : 'Required principal: $1,500 × 12 / 0.056 = $321,429',
                color: 'border-amber-200 bg-amber-50',
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-slate-900">{item.title}</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">{item.scenario}</div>
                <div className="text-xs text-slate-500 font-mono">{item.needed}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-600">
              <strong>{isKo ? '부분 커버 전략:' : 'Partial coverage strategy:'}</strong>{' '}
              {isKo
                ? '100% 커버 원금이 없다고 ENPL을 포기할 필요는 없다. 원금 $5,000으로 구독료의 12.7%를 커버하면 그만큼 현금 지출이 줄어든다. 원금을 점진적으로 늘려가면서 커버리지를 높이는 전략이 현실적이다.'
                : 'You don\'t need to give up ENPL because you lack full coverage principal. With $5,000, covering 12.7% of subscriptions reduces cash outflow by that amount. Gradually increasing principal to grow coverage is the practical approach.'}
            </p>
          </div>
        </section>

        {/* Section 7: On-chain Mechanics */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 온체인 실행 구조' : '7. On-chain Execution Structure'}
          </h2>

          <div className="bg-slate-900 rounded-2xl p-8 text-sm font-mono">
            <div className="text-slate-400 mb-4 text-xs">{isKo ? '// ENPL Sub Manager 월별 실행 사이클' : '// ENPL Sub Manager monthly execution cycle'}</div>
            {[
              { color: 'text-slate-400', line: '// ① 매월 1일 09:00 크론 트리거' },
              { color: 'text-blue-400', line: 'Cron → ENPL_Agent.run(wallet, subscriptions=[])' },
              { color: 'text-slate-400', line: '' },
              { color: 'text-slate-400', line: '// ② 현재 발생 이자 조회' },
              { color: 'text-yellow-400', line: 'interest = Morpho.position(wallet).supplyShares × sharePrice - principal' },
              { color: 'text-slate-400', line: '' },
              { color: 'text-slate-400', line: '// ③ 이자 인출 (원금 건드리지 않음)' },
              { color: 'text-green-400', line: 'Morpho.withdraw(USDC_MARKET, interest, maxShares, wallet, wallet)' },
              { color: 'text-slate-400', line: '' },
              { color: 'text-slate-400', line: '// ④ 구독료 결제 (이자 범위 내)' },
              { color: 'text-pink-400', line: 'for sub in subscriptions:' },
              { color: 'text-pink-400', line: '    if balance >= sub.amount:' },
              { color: 'text-pink-400', line: '        PaymentProxy.pay(sub.address, sub.amount, USDC)' },
              { color: 'text-slate-400', line: '' },
              { color: 'text-slate-400', line: '// ⑤ 남은 이자는 재예치 (복리)' },
              { color: 'text-emerald-400', line: 'remaining = interest - total_paid' },
              { color: 'text-emerald-400', line: 'if remaining > 0: Morpho.supply(USDC_MARKET, remaining, 0, wallet)' },
            ].map((line, i) => (
              <div key={i} className={`${line.color} leading-6`}>{line.line || '\u00A0'}</div>
            ))}
          </div>

          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-sm text-emerald-800">
              <strong>{isKo ? '복리 효과:' : 'Compound effect:'}</strong>{' '}
              {isKo
                ? '결제 후 남은 이자를 재예치하면 다음 달 이자 기반이 커진다. $5,000 원금에서 시작하더라도 잔여 이자 재투자로 커버리지가 매달 조금씩 증가한다.'
                : 'Reinvesting remaining yield after payments grows the next month\'s interest base. Even starting with $5,000 principal, coverage gradually increases month by month through yield reinvestment.'}
            </p>
          </div>
        </section>

        {/* Section 8: Summary */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. ENPL 요약' : '8. ENPL Summary'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-orange-400">{isKo ? '핵심 공식' : 'Core Formula'}</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-yellow-400">monthly_yield = principal × APY / 12</div>
                <div className="text-green-400">coverage = monthly_yield / expense</div>
                <div className="text-blue-400">principal_100pct = expense × 12 / APY</div>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-orange-800">{isKo ? '핵심 원칙' : 'Core Principles'}</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div>✓ {isKo ? '원금은 절대 소비하지 않는다' : 'Principal is never consumed'}</div>
                <div>✓ {isKo ? '이자만 결제에 사용한다' : 'Only yield is used for payments'}</div>
                <div>✓ {isKo ? '부채가 발생하지 않는다' : 'No debt is created'}</div>
                <div>✓ {isKo ? '원금이 클수록 커버리지가 높아진다' : 'Larger principal = higher coverage'}</div>
                <div>✓ {isKo ? '부분 커버부터 시작할 수 있다' : 'Can start with partial coverage'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-black mb-3">
            {isKo ? '지금 예치하면, 다음 달 구독료는 이자가 낸다' : 'Deposit now, next month\'s subscriptions pay themselves'}
          </h3>
          <p className="text-orange-100 mb-6">
            {isKo
              ? 'walits ENPL Agent가 원금 계산부터 자동 결제까지 전부 처리한다.'
              : 'walits ENPL Agent handles everything from principal calculation to automatic payment.'}
          </p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">
            {isKo ? 'walits 시작하기 →' : 'Get Started with walits →'}
          </Link>
        </div>

      </div>
    </div>
  );
}
