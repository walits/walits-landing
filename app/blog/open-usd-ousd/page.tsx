'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OpenUsdPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const isKo = language === 'ko';

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
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}>KO</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
            </div>
          </div>
          <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '스테이블코인 인프라' : 'Stablecoin Infrastructure'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'Open USD (OUSD) — Visa·BlackRock·Coinbase 140개 기업이 Circle에 선전포고하다'
              : 'Open USD (OUSD) — How 140 Companies Including Visa, BlackRock, and Coinbase Declared War on Circle'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '수수료 없음. 리저브 수익은 파트너가 가져간다. 거버넌스는 컨소시엄이 공동 운영한다. Circle이 혼자 독점하던 스테이블코인 수익 모델에 140개 기업이 정면으로 도전장을 냈다. 발표 직후 Circle 주가는 17% 폭락했다.'
              : 'No fees. Reserve revenue goes to partners. Governance is shared by the consortium. 140 companies directly challenged the stablecoin revenue model Circle had monopolized alone. Circle\'s stock dropped 17% immediately after the announcement.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 7월 3일' : 'July 3, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '25분 읽기' : '25 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/openusd.jpg" alt="Open USD OUSD Stablecoin Consortium" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 1: OUSD란 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. Open USD(OUSD)란 무엇인가' : '1. What Is Open USD (OUSD)?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '2026년 6월 30일, Open Standard라는 독립 기업이 새로운 달러 스테이블코인 Open USD(티커: OUSD)를 발표했다. 단순한 스타트업의 신규 코인이 아니다. Visa, Mastercard, BlackRock, Stripe, Coinbase, Google, IBM, Ripple, Aave, MetaMask 등 140개 이상의 기업이 창립 파트너로 참여한 업계 컨소시엄 프로젝트다.'
              : 'On June 30, 2026, an independent company called Open Standard announced a new dollar stablecoin, Open USD (ticker: OUSD). This isn\'t just another startup\'s new coin. It\'s an industry consortium project with 140+ founding partner companies including Visa, Mastercard, BlackRock, Stripe, Coinbase, Google, IBM, Ripple, Aave, and MetaMask.'}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-blue-800 mb-4 text-lg">{isKo ? 'OUSD 한 줄 요약' : 'OUSD in one line'}</div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: isKo ? '수수료' : 'Fees', value: isKo ? '민팅·리딤 0원' : 'Mint & redeem: $0', color: 'text-green-700' },
                { label: isKo ? '리저브 수익' : 'Reserve revenue', value: isKo ? '파트너가 대부분 가져감' : 'Partners keep most of it', color: 'text-blue-700' },
                { label: isKo ? '거버넌스' : 'Governance', value: isKo ? '140개사 컨소시엄' : '140-company consortium', color: 'text-violet-700' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-100">
                  <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                  <div className={`font-bold text-sm ${item.color}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            {isKo
              ? 'OUSD는 아직 출시 전이다 — 2026년 하반기 출시 예정이며, 출시 첫날 Solana를 지원하고 이후 Base, Stellar, Polygon, Aptos, Tempo 등으로 확장할 예정이다. 하지만 발표만으로도 시장은 즉각 반응했다. Circle 주가는 발표 당일 17% 이상 폭락했다.'
              : 'OUSD hasn\'t launched yet — it\'s scheduled for the second half of 2026, supporting Solana on day one with Base, Stellar, Polygon, Aptos, and Tempo to follow. But the announcement alone triggered an immediate market reaction. Circle\'s stock dropped more than 17% on the day of the announcement.'}
          </p>
        </section>

        {/* Section 2: 누가 만들었나 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. 누가 만들었나 — Open Standard와 Zach Abrams' : '2. Who Built It — Open Standard and Zach Abrams'}
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-slate-900 mb-3">{isKo ? 'Open Standard' : 'Open Standard'}</div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isKo
                ? 'OUSD를 발행하고 운영하는 독립 법인. 특정 기업의 자회사가 아니라, 파트너사들로 구성된 이사회가 거버넌스를 담당한다. 설립 CEO는 Zach Abrams다.'
                : 'The independent legal entity that issues and operates OUSD. Not a subsidiary of any single company — a board composed of partner companies handles governance. The founding CEO is Zach Abrams.'}
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="font-bold text-amber-800 mb-2">{isKo ? 'Zach Abrams — Bridge 공동 창업자, Open Standard CEO' : 'Zach Abrams — Bridge co-founder, Open Standard CEO'}</div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isKo
                  ? 'Zach Abrams는 스테이블코인 오케스트레이션 플랫폼 Bridge.xyz를 공동 창업한 인물이다. Bridge는 2024년 Stripe에 $1.1B에 인수됐다. 그 Zach Abrams가 Open Standard를 창업해 CEO를 맡았다는 점은 의미심장하다. Stripe가 Bridge를 통해 OUSD 진영에 깊게 연결되어 있는 구도다. Stripe는 실제로 OUSD를 자사 플랫폼 기업들의 기본 스테이블코인으로 채택하기로 약속했다.'
                  : 'Zach Abrams co-founded Bridge.xyz, the stablecoin orchestration platform acquired by Stripe for $1.1B in 2024. The fact that this Zach Abrams founded Open Standard and took the CEO role is telling. Stripe is deeply connected to the OUSD camp through Bridge. In fact, Stripe has committed to making OUSD the default stablecoin for businesses on its platform.'}
              </p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            {isKo
              ? '흥미로운 구도다. Stripe는 한쪽으로는 Paradigm과 함께 결제 특화 L1 Tempo를 만들었고, 다른 한쪽으로는 Bridge를 통해 OUSD 컨소시엄의 핵심 허브로 자리잡았다. Stripe는 스테이블코인 결제 인프라의 두 핵심 레이어 — 체인(Tempo)과 코인(OUSD) — 모두에 발을 걸치고 있다.'
              : 'The positioning is interesting. Stripe co-created the payments-first L1 Tempo with Paradigm on one side, and through Bridge is now a core hub in the OUSD consortium on the other. Stripe has a foot in both critical layers of stablecoin payment infrastructure — the chain (Tempo) and the coin (OUSD).'}
          </p>
        </section>

        {/* Section 3: 핵심 구조 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. OUSD의 핵심 구조 — Circle과 어떻게 다른가' : '3. OUSD\'s Core Structure — How It Differs From Circle'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'OUSD를 이해하려면 먼저 Circle의 수익 모델을 이해해야 한다. Circle이 USDC로 어떻게 돈을 버는지 알면, OUSD가 왜 위협인지 즉각 이해된다.'
              : 'To understand OUSD, you first need to understand Circle\'s revenue model. Once you know how Circle makes money with USDC, you immediately see why OUSD is a threat.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <div className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <span>Circle / USDC</span>
                <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">{isKo ? '기존 모델' : 'Legacy model'}</span>
              </div>
              <div className="space-y-3 text-sm">
                {(isKo ? [
                  '기업·개인이 달러를 USDC로 바꿔 Circle에 맡김',
                  'Circle은 그 달러를 단기 미국채·머니마켓 펀드에 투자',
                  '이자 수익(리저브 수익)을 Circle이 대부분 독식',
                  'USDC 홀더나 파트너사는 이 이자를 거의 못 받음',
                  '민팅·리딤 수수료: 대형 기관은 협의, 소규모는 유료',
                ] : [
                  'Businesses/individuals convert dollars to USDC, deposited with Circle',
                  'Circle invests those dollars in short-term T-bills and money market funds',
                  'Circle keeps most of the interest (reserve revenue)',
                  'USDC holders and partners receive almost none of this interest',
                  'Mint/redeem fees: negotiated for large institutions, paid for smaller ones',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-2 text-slate-600">
                    <span className="text-red-400 shrink-0">•</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <div className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>Open Standard / OUSD</span>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">{isKo ? '컨소시엄 모델' : 'Consortium model'}</span>
              </div>
              <div className="space-y-3 text-sm">
                {(isKo ? [
                  '140개 파트너사가 OUSD 유통을 공동으로 담당',
                  '리저브는 주요 금융기관에 보관 (규제 준수)',
                  '리저브 이자를 관리 수수료 제외하고 파트너사에 분배',
                  '민팅·리딤 수수료 없음, 볼륨 한도 없음',
                  '거버넌스: 파트너사 이사회가 공동 결정',
                ] : [
                  '140 partners jointly responsible for OUSD distribution',
                  'Reserves held at major financial institutions (regulatory compliant)',
                  'Reserve interest distributed to partners after management fee',
                  'No mint/redeem fees, no volume caps',
                  'Governance: partner board makes joint decisions',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-2 text-slate-600">
                    <span className="text-green-500 shrink-0">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? '수익 흐름 비교' : 'Revenue flow comparison'}</div>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-red-400 font-bold mb-1">USDC (Circle)</div>
                <div className="font-mono text-xs text-slate-300">
                  {isKo
                    ? '사용자 달러 → Circle 보관 → T-bill/MMF 이자 → Circle 수익 (대부분)'
                    : 'User dollars → Circle holds → T-bill/MMF interest → Circle revenue (most of it)'}
                </div>
              </div>
              <div>
                <div className="text-green-400 font-bold mb-1">OUSD (Open Standard)</div>
                <div className="font-mono text-xs text-slate-300">
                  {isKo
                    ? '사용자 달러 → 금융기관 보관 → 리저브 이자 → 파트너사 분배 (관리비 차감 후)'
                    : 'User dollars → financial institution holds → reserve interest → distributed to partners (after management fee)'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 140개 파트너 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. 140개 파트너 — 누가 왜 참여했나' : '4. 140 Partners — Who Joined and Why'}
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                category: isKo ? '결제·핀테크' : 'Payments & Fintech',
                color: 'bg-blue-50 border-blue-200',
                headerColor: 'text-blue-800',
                companies: ['Visa', 'Mastercard', 'American Express', 'Stripe'],
                why: isKo
                  ? '결제망에서 처리하는 스테이블코인 거래에서 리저브 수익을 직접 취할 수 있다. USDC를 결제에 쓰면 그 이자가 Circle에 가지만, OUSD를 쓰면 자신들에게 돌아온다.'
                  : 'They can directly earn reserve revenue from stablecoin transactions on their payment networks. When they use USDC for payments, the interest goes to Circle; with OUSD, it comes back to them.',
              },
              {
                category: isKo ? '금융·자산운용' : 'Finance & Asset Management',
                color: 'bg-green-50 border-green-200',
                headerColor: 'text-green-800',
                companies: ['BlackRock', 'BNY Mellon', 'Standard Chartered', 'US Bank', 'DBS'],
                why: isKo
                  ? '리저브 자산 커스터디·운용 수익 + 컨소시엄 파트너 지위. 기존 금융기관이 스테이블코인 인프라 거버넌스에 직접 참여하는 첫 대형 사례.'
                  : 'Reserve asset custody/management revenue + consortium partner status. The first major case of traditional financial institutions directly participating in stablecoin infrastructure governance.',
              },
              {
                category: isKo ? '빅테크' : 'Big Tech',
                color: 'bg-violet-50 border-violet-200',
                headerColor: 'text-violet-800',
                companies: ['Google (Alphabet)', 'IBM', 'Shopify'],
                why: isKo
                  ? '자사 플랫폼에서 스테이블코인 결제를 처리할 때 발생하는 리저브 수익 취득. Shopify는 가맹점 결제 인프라에 OUSD 통합 가능.'
                  : 'Earn reserve revenue from stablecoin payments processed on their platforms. Shopify can integrate OUSD into merchant payment infrastructure.',
              },
              {
                category: isKo ? '크립토·DeFi' : 'Crypto & DeFi',
                color: 'bg-orange-50 border-orange-200',
                headerColor: 'text-orange-800',
                companies: ['Coinbase', 'Ripple', 'Aave', 'MetaMask', 'Fireblocks', 'Aptos'],
                why: isKo
                  ? 'Coinbase는 Base 체인 채택 + 거래소 OUSD 유동성. Aave는 DeFi 프로토콜 통합. MetaMask는 지갑 기본 스테이블코인. Ripple은 결제 레일 연동.'
                  : 'Coinbase gets Base chain adoption + exchange OUSD liquidity. Aave gets DeFi protocol integration. MetaMask gets a default stablecoin for wallets. Ripple gets payment rail integration.',
              },
            ].map((cat, i) => (
              <div key={i} className={`border rounded-2xl p-5 ${cat.color}`}>
                <div className={`font-bold text-sm mb-2 ${cat.headerColor}`}>{cat.category}</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cat.companies.map((c) => (
                    <span key={c} className="text-xs bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">{c}</span>
                  ))}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{cat.why}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="font-bold text-amber-800 mb-2">{isKo ? '왜 모두 동참했나 — 공통된 동기' : 'Why everyone joined — the common incentive'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? 'Circle의 USDC 모델에서 이들 기업은 단순한 "사용자"였다. USDC를 유통시키고, 결제를 처리하고, 유동성을 공급하면서도 리저브 이자는 Circle이 다 가져갔다. OUSD는 이 구조를 뒤집는다. 유통·처리·유동성 공급을 담당하는 파트너가 리저브 수익의 대부분을 갖는다. 140개 기업 모두에게 "우리가 USDC를 써줬을 때의 이자를 이제 우리가 직접 받겠다"는 명분이 생긴 셈이다.'
                : 'In Circle\'s USDC model, these companies were simply "users." They distributed USDC, processed payments, provided liquidity — while Circle kept all the reserve interest. OUSD flips this. Partners handling distribution, processing, and liquidity get most of the reserve revenue. All 140 companies now have the argument: "The interest we were generating for Circle by using USDC — we\'re taking that directly now."'}
            </p>
          </div>
        </section>

        {/* Section 5: 지원 체인 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. 지원 체인 — Solana부터 Tempo까지' : '5. Supported Chains — From Solana to Tempo'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              { chain: 'Solana', status: isKo ? '출시 첫날' : 'Day one', note: isKo ? '고속·저비용, 핵심 레일' : 'High-speed, low-cost, core rail', color: 'bg-purple-50 border-purple-200' },
              { chain: 'Base', status: isKo ? '출시 직후' : 'Shortly after', note: isKo ? 'Coinbase L2, Stripe 연동' : 'Coinbase L2, Stripe integration', color: 'bg-blue-50 border-blue-200' },
              { chain: 'Stellar', status: isKo ? '출시 직후' : 'Shortly after', note: isKo ? '크로스보더 결제 특화' : 'Cross-border payment focused', color: 'bg-sky-50 border-sky-200' },
              { chain: 'Polygon', status: isKo ? '출시 직후' : 'Shortly after', note: isKo ? 'EVM 생태계 접근' : 'EVM ecosystem access', color: 'bg-violet-50 border-violet-200' },
              { chain: 'Aptos', status: isKo ? '출시 직후' : 'Shortly after', note: isKo ? 'Move 언어 기반, 고성능' : 'Move-based, high-performance', color: 'bg-teal-50 border-teal-200' },
              { chain: 'Tempo', status: isKo ? '예정' : 'Planned', note: isKo ? 'Stripe 결제 L1' : 'Stripe payments L1', color: 'bg-pink-50 border-pink-200' },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="font-bold text-slate-800 mb-1">{item.chain}</div>
                <div className="text-xs font-semibold text-slate-500 mb-1">{item.status}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? 'Ethereum 메인넷이 초기 출시 체인에 없다는 점이 눈에 띈다. 가스비·속도 측면에서 결제용으로 부적합하다는 판단으로 보인다. 반면 Tempo 지원 계획은 Stripe와 OUSD의 연결고리를 체인 레벨까지 연장한다 — Stripe가 만든 결제 L1 위에 Stripe가 기본 스테이블코인으로 약속한 OUSD가 올라가는 구도.'
                : 'Notably, Ethereum mainnet is absent from the initial launch chains — likely judged unsuitable for payments in terms of gas fees and speed. Tempo\'s planned support, however, extends the Stripe-OUSD connection to the chain level: OUSD, which Stripe has committed to as its default stablecoin, landing on Tempo, the payments L1 Stripe built.'}
            </p>
          </div>
        </section>

        {/* Section 6: USDT vs USDC vs OUSD */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. USDT vs USDC vs OUSD — 3파전 비교' : '6. USDT vs USDC vs OUSD — Three-Way Comparison'}
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">{isKo ? '항목' : 'Item'}</th>
                  <th className="text-left px-4 py-3 font-semibold">USDT (Tether)</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-300">USDC (Circle)</th>
                  <th className="text-left px-4 py-3 font-semibold text-green-300 rounded-tr-xl">OUSD (Open Standard)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    item: isKo ? '발행사' : 'Issuer',
                    usdt: 'Tether (단일 기업)',
                    usdc: 'Circle (단일 기업)',
                    ousd: isKo ? 'Open Standard (컨소시엄)' : 'Open Standard (consortium)',
                  },
                  {
                    item: isKo ? '거버넌스' : 'Governance',
                    usdt: isKo ? '완전 중앙화' : 'Fully centralized',
                    usdc: isKo ? '완전 중앙화' : 'Fully centralized',
                    ousd: isKo ? '140개사 이사회' : '140-company board',
                  },
                  {
                    item: isKo ? '민팅 수수료' : 'Mint fee',
                    usdt: isKo ? '기관 협의' : 'Institutional negotiation',
                    usdc: isKo ? '기관 협의/유료' : 'Institutional/paid',
                    ousd: isKo ? '없음' : 'None',
                  },
                  {
                    item: isKo ? '리저브 수익' : 'Reserve revenue',
                    usdt: isKo ? 'Tether 독식' : 'Tether keeps all',
                    usdc: isKo ? 'Circle 독식' : 'Circle keeps all',
                    ousd: isKo ? '파트너사 분배' : 'Distributed to partners',
                  },
                  {
                    item: isKo ? '리저브 투명성' : 'Reserve transparency',
                    usdt: isKo ? '낮음 (논란 많음)' : 'Low (controversial)',
                    usdc: isKo ? '높음 (월간 감사)' : 'High (monthly attestation)',
                    ousd: isKo ? '미공개 (출시 전)' : 'Undisclosed (pre-launch)',
                  },
                  {
                    item: isKo ? '시가총액 (2026.07)' : 'Market cap (Jul 2026)',
                    usdt: '~$130B',
                    usdc: '~$62B',
                    ousd: isKo ? '미출시' : 'Not launched',
                  },
                  {
                    item: isKo ? '지원 체인' : 'Chains',
                    usdt: isKo ? '20개+ (Tron 주력)' : '20+ (Tron primary)',
                    usdc: isKo ? '15개+ (Ethereum 주력)' : '15+ (Ethereum primary)',
                    ousd: isKo ? 'Solana·Base·Stellar·Polygon·Aptos·Tempo' : 'Solana, Base, Stellar, Polygon, Aptos, Tempo',
                  },
                  {
                    item: isKo ? 'DeFi 채택' : 'DeFi adoption',
                    usdt: isKo ? '매우 높음' : 'Very high',
                    usdc: isKo ? '높음' : 'High',
                    ousd: isKo ? '미정 (Aave 파트너)' : 'TBD (Aave partner)',
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.item}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{row.usdt}</td>
                    <td className="px-4 py-3 text-blue-700 text-xs">{row.usdc}</td>
                    <td className="px-4 py-3 text-green-700 text-xs font-medium">{row.ousd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Circle에 대한 위협 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. Circle 주가 -17% — 왜 이렇게 큰 충격인가' : '7. Circle Stock -17% — Why Such a Large Shock?'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Circle은 2026년 상장한 퍼블릭 기업이다. 발표 당일 주가는 17% 이상 하락했고, 당월 누적으로는 39%까지 빠졌다. 왜 이렇게 큰 반응이 나왔나?'
              : 'Circle is a public company that went public in 2026. Its stock fell more than 17% on the day of the announcement, and dropped as much as 39% cumulatively within the month. Why such a large reaction?'}
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                title: isKo ? 'Circle의 수익 = 리저브 이자가 전부다' : 'Circle\'s revenue = reserve interest, that\'s it',
                desc: isKo
                  ? 'Circle의 비즈니스 모델은 단순하다. USDC 유통량 × 단기금리 = 수익. 2025년 기준 연 수억 달러를 이 구조로 번다. OUSD가 USDC의 유통량을 잠식하면, Circle의 수익 기반이 직격탄을 맞는다. 대체재가 없다.'
                  : 'Circle\'s business model is simple: USDC circulation × short-term interest rate = revenue. It earns hundreds of millions annually from this structure. If OUSD erodes USDC circulation, Circle\'s revenue base takes a direct hit. There\'s no alternative.',
              },
              {
                title: isKo ? '파트너들이 적군이 됐다' : 'Partners have become adversaries',
                desc: isKo
                  ? 'Coinbase는 USDC의 공동 창립자다. Base는 USDC의 핵심 유통 체인이다. Stripe는 USDC 페이아웃을 운영한다. 이들이 모두 OUSD 진영에 합류했다. Circle이 의존하던 배포 네트워크가 경쟁자로 돌아선 것이다. Jefferies 애널리스트는 "OUSD 발표 후 Circle 주식을 매수하지 말라"고 권고했다.'
                  : 'Coinbase is a co-founder of USDC. Base is a core USDC distribution chain. Stripe runs USDC payouts. All of them joined the OUSD camp. The distribution network Circle depended on has turned into competition. A Jefferies analyst recommended "don\'t buy the dip in Circle stock after the OUSD announcement."',
              },
              {
                title: isKo ? '규모가 다르다' : 'The scale is different',
                desc: isKo
                  ? 'USDC의 최대 강점은 Coinbase·Stripe 같은 대형 파트너의 배포 네트워크였다. OUSD는 그 네트워크를 그대로 흡수하고, 거기에 Visa·Mastercard·BlackRock·Google까지 추가했다. 단순한 경쟁 스테이블코인이 아니라 USDC를 만든 네트워크보다 더 강력한 연합군이 USDC를 대체하러 나선 것이다.'
                  : 'USDC\'s greatest strength was the distribution network of major partners like Coinbase and Stripe. OUSD absorbs that network wholesale, and adds Visa, Mastercard, BlackRock, and Google on top. This isn\'t simply a competing stablecoin — it\'s a coalition stronger than the network that built USDC coming to replace it.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="font-bold text-red-800 mb-2">{item.title}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-2">{isKo ? 'USDT는 상대적으로 안전한가?' : 'Is USDT relatively safe?'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? 'OUSD의 주된 설계는 기업·기관 결제 인프라를 겨냥한다. Tether/USDT는 주로 거래소 트레이딩·이머징 마켓 개인 수요 기반이다. 단기적으로 USDT보다 USDC가 더 직접적인 경쟁 대상이다. 하지만 OUSD가 DeFi 생태계까지 파고들면 (Aave가 파트너이므로 가능성 있음) USDT도 무관하지는 않다.'
                : 'OUSD\'s primary design targets institutional and enterprise payment infrastructure. Tether/USDT is primarily used for exchange trading and emerging market personal demand. Short-term, USDC faces more direct competition than USDT. But if OUSD penetrates the DeFi ecosystem (possible given Aave\'s partnership), USDT won\'t be untouched either.'}
            </p>
          </div>
        </section>

        {/* Section 8: 한계와 미확인 사항 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 정직한 평가 — 한계와 미확인 사항' : '8. Honest Assessment — Limitations and Unknowns'}
          </h2>

          <div className="space-y-3 mb-6">
            {[
              {
                flag: isKo ? '⚠ 아직 출시 안 됨' : '⚠ Not yet launched',
                desc: isKo
                  ? '2026년 하반기 출시 예정이지만 구체적 날짜 미공개. 발표와 실제 출시는 다르다. 파트너 이탈, 규제 지연 등 변수가 있다.'
                  : 'Scheduled for H2 2026 but no specific date disclosed. Announcement and actual launch are different things. Variables include partner attrition and regulatory delays.',
              },
              {
                flag: isKo ? '⚠ 리저브 구성 미공개' : '⚠ Reserve composition undisclosed',
                desc: isKo
                  ? '"주요 금융기관에 보관, 미국 규제 준수"라고만 했다. 구체적인 커스터디 기관, 감사 주기, 발행 법인을 아직 공개하지 않았다. USDC가 월간 감사를 제공하는 것과 비교하면 투명성이 부족하다.'
                  : 'Only stated "held at major financial institutions, US regulatory compliant." Specific custody institutions, attestation cadence, and issuing entity not yet disclosed. Compared to USDC\'s monthly attestations, transparency is lacking.',
              },
              {
                flag: isKo ? '⚠ 파트너 "참여"의 실질적 의미 불명확' : '⚠ Meaning of partner "participation" unclear',
                desc: isKo
                  ? '140개 파트너가 모두 동등한 역할을 하는 게 아니다. 설계 파트너, 유통 파트너, 밸리데이터 역할이 구분될 가능성이 있다. 리저브 수익 분배 기준(어떤 기여에 얼마를)도 아직 공개되지 않았다.'
                  : '140 partners don\'t all play equal roles. Design partners, distribution partners, and validator roles are likely distinct. The reserve revenue distribution formula (how much for which contribution) hasn\'t been disclosed.',
              },
              {
                flag: isKo ? '⚠ 컨소시엄 거버넌스의 복잡성' : '⚠ Complexity of consortium governance',
                desc: isKo
                  ? 'Visa와 Coinbase, BlackRock과 Aave의 이해관계가 언제나 일치하지는 않는다. 140개 기업의 이사회가 빠르게 결정을 내릴 수 있는지, 갈등이 생기면 어떻게 처리할지 아직 검증되지 않았다.'
                  : 'The interests of Visa and Coinbase, BlackRock and Aave don\'t always align. Whether a 140-company board can make decisions quickly, and how conflicts will be handled, remains unproven.',
              },
              {
                flag: isKo ? '⚠ DeFi 생태계 채택 불확실' : '⚠ DeFi ecosystem adoption uncertain',
                desc: isKo
                  ? 'Aave가 파트너지만, DeFi 사용자들이 OUSD를 USDC·USDT 대신 실제로 사용하려면 유동성 풀, 금리 모델, 인센티브 구조가 갖춰져야 한다. 이는 하루아침에 생기지 않는다.'
                  : 'Aave is a partner, but for DeFi users to actually use OUSD instead of USDC or USDT requires liquidity pools, interest rate models, and incentive structures. These don\'t materialize overnight.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-orange-200 bg-orange-50 rounded-xl p-4">
                <div className="font-bold text-orange-800 text-sm mb-1">{item.flag}</div>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: walits 관점 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '9. walits 관점 — OUSD가 우리에게 무엇을 의미하나' : '9. walits Perspective — What OUSD Means for Us'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'walits는 현재 USDC를 핵심 자산으로 사용하는 자기 보관 지갑이다. OUSD는 아직 출시 전이고 불확실성이 크지만, 스테이블코인 시장 구조 자체가 바뀔 수 있는 사건이다. 짚어봐야 할 포인트들이 있다.'
              : 'walits is currently a self-custody wallet using USDC as its core asset. OUSD hasn\'t launched yet and carries significant uncertainty, but this is an event that could reshape the stablecoin market structure itself. There are points worth examining.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: isKo ? 'Base 위에서 OUSD 지원 가능성' : 'Potential OUSD support on Base',
                desc: isKo
                  ? 'OUSD는 Base를 지원 예정 체인으로 명시했다. walits는 이미 Ethereum + Base에서 동작한다. Base 위에 OUSD가 올라오면, walits는 코드 추가 없이 기술적으로 OUSD를 지원할 수 있는 위치다. 수수료 없는 민팅·리딤과 파트너 리저브 수익이 실제로 작동한다면, walits 사용자에게 USDC 대신 OUSD를 들고 있을 이유가 생길 수도 있다.'
                  : 'OUSD explicitly named Base as a planned support chain. walits already operates on Ethereum + Base. When OUSD arrives on Base, walits is technically positioned to support OUSD with minimal additional code. If no-fee minting/redemption and partner reserve revenue actually work, walits users may have reasons to hold OUSD instead of USDC.',
                icon: '⚡',
              },
              {
                title: isKo ? '지금 당장은 지켜보는 것이 맞다' : 'Right now, watching and waiting is correct',
                desc: isKo
                  ? 'OUSD는 아직 출시 전이다. 리저브 투명성, 실제 DeFi 유동성, 규제 인가 여부가 확인되기 전까지 walits의 핵심 자산을 USDC에서 OUSD로 전환하는 것은 너무 이르다. 기술 스택을 준비해 두되, 실제 채택은 검증 후 결정하는 게 맞다.'
                  : 'OUSD hasn\'t launched yet. Switching walits\' core asset from USDC to OUSD before reserve transparency, actual DeFi liquidity, and regulatory authorization are confirmed would be premature. Prepare the technical stack, but decide on actual adoption after verification.',
                icon: '⏳',
              },
              {
                title: isKo ? 'USDC는 여전히 검증된 선택' : 'USDC remains the proven choice',
                desc: isKo
                  ? 'Circle의 USDC는 월간 감사, Ethereum 생태계 깊숙이 뿌리내린 DeFi 유동성, 광범위한 CEX 지원, 규제 명확성을 갖추고 있다. OUSD가 이것들을 단기간에 따라잡기는 어렵다. walits의 현재 선택은 옳다. 다만 OUSD가 출시되고 검증된다면 멀티 스테이블코인 지갑으로 확장하는 로드맵은 자연스럽다.'
                  : 'Circle\'s USDC has monthly attestations, deeply rooted DeFi liquidity in the Ethereum ecosystem, broad CEX support, and regulatory clarity. OUSD will find it hard to catch up on these quickly. walits\' current choice is correct. But if OUSD launches and proves itself, the roadmap to expanding as a multi-stablecoin wallet is natural.',
                icon: '✓',
              },
              {
                title: isKo ? '스테이블코인 다변화 시대가 온다' : 'The era of stablecoin diversification is coming',
                desc: isKo
                  ? 'OUSD의 등장은 "스테이블코인 = USDC 아니면 USDT"라는 이분법이 깨지는 신호다. PYUSD, USDB, RLUSD, 이제 OUSD까지. 사용자들이 상황에 따라 다른 스테이블코인을 쓰는 시대가 온다. walits가 USDC 전문 지갑에서 "스테이블코인 통합 관리 지갑"으로 발전하는 방향은 이 흐름과 정확히 일치한다.'
                  : 'OUSD\'s emergence signals the end of the "stablecoin = USDC or USDT" binary. PYUSD, USDB, RLUSD, and now OUSD. An era is coming where users use different stablecoins for different situations. walits evolving from a USDC-specialized wallet to an "integrated stablecoin management wallet" aligns exactly with this trend.',
                icon: '🌐',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex gap-4">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-slate-800 mb-2">{item.title}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-2">
              {isKo ? '한 줄 정리' : 'Bottom line'}
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              {isKo
                ? 'OUSD는 스테이블코인 시장에서 가장 강력한 도전자 중 하나다. Circle에는 실존적 위협이고, USDC·USDT 생태계 전체에도 지각변동의 시작일 수 있다. walits는 지금 당장 OUSD로 이동할 필요는 없지만, 멀티 스테이블코인 대응 준비는 지금 시작하는 것이 맞다.'
                : 'OUSD is one of the most powerful challengers in the stablecoin market. It\'s an existential threat to Circle and potentially the beginning of a tectonic shift for the entire USDC/USDT ecosystem. walits doesn\'t need to move to OUSD right now, but preparing for multi-stablecoin support should start today.'}
            </p>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-100 pt-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="font-black text-slate-900 text-lg mb-2">
              {isKo ? 'walits — 스테이블코인이 일하는 지갑' : 'walits — A wallet where stablecoins work for you'}
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {isKo
                ? 'USDC든 OUSD든, 스테이블코인은 지갑 안에서 자산 가치를 유지하면서 동시에 수익을 내야 한다. walits는 Ethereum과 Base 위에서 자기 보관으로 그것을 실현한다.'
                : 'Whether USDC or OUSD, stablecoins should maintain asset value while generating yield inside a wallet. walits makes that happen with self-custody on Ethereum and Base.'}
            </p>
            <Link href="/#solutions" className="inline-block bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {isKo ? '서비스 알아보기 →' : 'Learn more →'}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
