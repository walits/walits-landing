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
            <span>{isKo ? '35분 읽기' : '35 min read'}</span>
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
              {
                category: isKo ? '한국 기업 (명단 포함)' : 'Korean companies (named on list)',
                color: 'bg-red-50 border-red-200',
                headerColor: 'text-red-800',
                companies: ['삼성전자', '두나무', '신한금융', '카카오뱅크', '케이뱅크', '현대카드', 'KB국민카드', '삼성카드', '한화'],
                why: isKo
                  ? '⚠ 논란: 국내 기업 상당수가 공식 협의 없이 명단에 포함됐다. 삼성전자는 "공식 협의가 없었고 역할도 모른다", 신한금융·두나무·케이뱅크 등은 "검토하겠다고 했더니 구성원으로 이름이 올랐다"며 당혹감을 표했다. 실질적 참여 여부는 미확인 상태다.'
                  : '⚠ Controversy: Many Korean companies were listed without formal consultation. Samsung Electronics said "there was no official consultation and we don\'t know our role." Shinhan, Dunamu, and K-bank said they only replied "we\'ll consider it" and found themselves listed as members — expressing surprise.',
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

        {/* Section 9: USDC가 살아남을 수 있는 이유 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '9. OUSD vs USDC — 차별점과 Circle이 그럼에도 살아남을 수 있는 이유' : '9. OUSD vs USDC — Key Differences and Why Circle Can Still Survive'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'OUSD의 등장이 USDC의 즉각적인 소멸을 의미하지는 않는다. 두 스테이블코인은 구조가 근본적으로 다르고, 각자 강점이 있다. 차별점을 정확히 이해해야 USDC가 어떤 포지션을 유지할 수 있는지 보인다.'
              : 'OUSD\'s emergence doesn\'t mean USDC\'s immediate extinction. The two stablecoins are fundamentally different in structure, each with distinct strengths. Understanding the differences precisely reveals what position USDC can still hold.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                aspect: isKo ? '투명성 — 지금은 USDC가 압도적' : 'Transparency — USDC dominates for now',
                usdc: isKo ? 'Circle은 매월 독립 감사 법인의 리저브 증명(Attestation)을 공개한다. 어느 기관에 얼마를 맡겼는지, 어떤 자산으로 보유하는지 공개되어 있다. 기관 투자자·규제 기관이 요구하는 투명성 기준을 이미 충족한다.' : 'Circle publishes monthly independent attestations from auditing firms. Which institutions hold the reserves, and in what assets, are disclosed. It already meets the transparency standards required by institutional investors and regulators.',
                ousd: isKo ? 'Open Standard는 출시 전 기준으로 "주요 금융기관, 미국 규제 준수"만 밝혔다. 커스터디 기관, 감사 주기, 발행 법인이 미공개다. 투명성에서 지금은 USDC에 뒤진다.' : 'Open Standard has only disclosed "major financial institutions, US regulatory compliant" pre-launch. Custody institutions, attestation cadence, and issuing entity are undisclosed. Currently behind USDC on transparency.',
                winner: 'USDC',
              },
              {
                aspect: isKo ? 'DeFi 유동성 — USDC의 독보적 해자' : 'DeFi liquidity — USDC\'s moat',
                usdc: isKo ? 'Ethereum DeFi 생태계에서 USDC는 수년간 축적된 유동성 해자를 갖고 있다. Aave, Compound, Uniswap, Curve 등 주요 프로토콜에서 USDC는 기본 스테이블코인이다. 담보 자산으로서 신뢰도, 유동성 깊이, 이자율 모델 모두 검증됐다.' : 'USDC has a years-built liquidity moat in Ethereum DeFi. It\'s the default stablecoin in major protocols like Aave, Compound, Uniswap, and Curve. Its trustworthiness as collateral, liquidity depth, and interest rate models are all proven.',
                ousd: isKo ? 'Aave가 OUSD 파트너지만, 실제 DeFi 유동성 풀이 생기고 유저들이 OUSD를 담보로 쓰기 시작하려면 수개월~수년이 필요하다. Ethereum 메인넷 초기 출시 체인에서 빠졌다는 점도 DeFi 채택에 불리하다.' : 'Aave is an OUSD partner, but it will take months to years before real DeFi liquidity pools form and users start using OUSD as collateral. Being absent from Ethereum mainnet at initial launch also disadvantages DeFi adoption.',
                winner: 'USDC',
              },
              {
                aspect: isKo ? '수익 모델 — OUSD의 구조적 우위' : 'Revenue model — OUSD\'s structural advantage',
                usdc: isKo ? 'Circle이 리저브 이자를 거의 독식한다. 파트너사 입장에서 USDC를 유통시켜줄 경제적 인센티브가 약하다. 파트너는 "사용자 편의를 위해" 쓰는 것이지, 직접 이익이 없다.' : 'Circle keeps nearly all reserve interest. Partners have weak economic incentive to distribute USDC. Partners use it "for user convenience," not for direct benefit.',
                ousd: isKo ? '리저브 이자를 파트너사가 대부분 가져간다. Visa·Mastercard·Stripe 같은 파트너들이 OUSD를 적극적으로 밀 경제적 이유가 생긴다. 시간이 지날수록 네트워크 효과가 OUSD에 유리하게 작용할 수 있다.' : 'Partners keep most of the reserve interest. Visa, Mastercard, Stripe, and others have economic reasons to actively push OUSD. Over time, network effects may favor OUSD.',
                winner: 'OUSD',
              },
              {
                aspect: isKo ? '규제 인가·법적 명확성' : 'Regulatory authorization & legal clarity',
                usdc: isKo ? 'Circle은 수년에 걸쳐 뉴욕 NYDFS 허가, EU MiCA 준수, 다수 국가 라이선스를 취득했다. 기관 투자자·기업이 USDC를 쓸 때 법적 리스크가 낮다.' : 'Circle has obtained NYDFS approval, EU MiCA compliance, and licenses in multiple countries over years. Legal risk for institutions and businesses using USDC is low.',
                ousd: isKo ? 'Open Standard는 미국 규제 준수를 선언했지만, 아직 구체적인 규제 인가 내역이 공개되지 않았다. 미출시 상태라 각국 규제 기관의 판단도 나오지 않았다. 기관이 OUSD를 쓰려면 이 부분이 먼저 해결돼야 한다.' : 'Open Standard has declared US regulatory compliance, but specific regulatory authorizations aren\'t yet disclosed. Pre-launch, no national regulators have issued rulings. Institutions need this resolved before using OUSD.',
                winner: 'USDC',
              },
              {
                aspect: isKo ? '브랜드·신뢰 — 검증된 시간' : 'Brand & trust — proven over time',
                usdc: isKo ? '2018년 출시 이후 8년. FTX 사태, 실리콘밸리은행 사태 등 여러 위기를 겪고도 달러 페그를 유지했다. "Circle이 망하지 않는 한 USDC는 안전하다"는 인식이 기관 사이에 형성되어 있다.' : 'Launched in 2018, now 8 years old. Maintained its dollar peg through multiple crises including FTX and Silicon Valley Bank. Among institutions, the perception that "USDC is safe as long as Circle doesn\'t collapse" is established.',
                ousd: isKo ? '아직 출시도 안 됐다. 위기 상황에서 어떻게 반응하는지, 리딤 프로세스가 실제로 매끄러운지, 컨소시엄 거버넌스가 긴급 상황에서 빠르게 작동하는지 — 모두 미검증이다.' : 'Not even launched yet. How it responds in a crisis, whether the redemption process is actually smooth, whether consortium governance moves fast in emergencies — all unproven.',
                winner: 'USDC',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 flex items-center justify-between">
                  <div className="font-bold text-slate-800 text-sm">{item.aspect}</div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.winner === 'USDC' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {item.winner} {isKo ? '우위' : 'advantage'}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  <div className="p-4">
                    <div className="text-xs font-bold text-blue-600 mb-2">USDC</div>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.usdc}</p>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-green-600 mb-2">OUSD</div>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.ousd}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="font-bold text-blue-800 mb-3">{isKo ? 'Circle이 살아남을 수 있는 현실적 시나리오' : 'Realistic scenarios where Circle survives'}</div>
            <div className="space-y-3">
              {(isKo ? [
                { title: 'DeFi·개발자 생태계', desc: 'Ethereum 기반 DeFi는 OUSD가 단기간에 잠식하기 어렵다. 개발자·프로토콜 입장에서 기존에 USDC로 짜인 코드와 인프라를 바꾸는 비용이 크다. OUSD가 Ethereum 메인넷을 미지원한 점도 이 해자를 지킨다.' },
                { title: '투명성·규제 준수 포지션', desc: '기관 투자자·국부펀드·ETF 등은 "감사된 스테이블코인"을 요구한다. Circle이 투명성에서 계속 앞서 나가면, 규제가 강한 시장(유럽·싱가포르·홍콩 등)에서 USDC는 프리미엄 포지션을 유지할 수 있다.' },
                { title: '위기 대응 검증', desc: '다음번 크립토 시장 위기에서 OUSD보다 USDC가 안정적으로 버틴다면, 오히려 격차가 벌어질 수 있다. 컨소시엄 거버넌스의 느린 의사결정이 위기 시 약점으로 드러날 가능성이 있다.' },
                { title: '공존 시나리오', desc: 'USDC와 OUSD가 용도를 나눠 공존할 수도 있다. USDC는 DeFi·개발자·투명성 중시 기관에, OUSD는 기업 결제·급여·크로스보더 파트너 생태계에 특화되는 구도다.' },
              ] : [
                { title: 'DeFi & developer ecosystem', desc: 'Ethereum-based DeFi is hard for OUSD to erode quickly. For developers and protocols, the cost of changing code and infrastructure built around USDC is high. OUSD\'s absence from Ethereum mainnet also preserves this moat.' },
                { title: 'Transparency & regulatory compliance positioning', desc: 'Institutional investors, sovereign wealth funds, and ETFs demand "audited stablecoins." If Circle continues to lead on transparency, USDC can maintain a premium position in heavily regulated markets (EU, Singapore, Hong Kong, etc.).' },
                { title: 'Crisis response validation', desc: 'If USDC weathers the next crypto market crisis more stably than OUSD, the gap could actually widen. The consortium governance\'s slow decision-making could emerge as a weakness in a crisis.' },
                { title: 'Coexistence scenario', desc: 'USDC and OUSD may coexist by dividing use cases: USDC for DeFi, developers, and transparency-focused institutions; OUSD for enterprise payments, payroll, and cross-border partner ecosystems.' },
              ]).map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">→</span>
                  <div>
                    <span className="font-semibold text-slate-800">{item.title}: </span>
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: 파이 확장 테제 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '10. OUSD가 파이를 키운다 — USDC·USDT와의 관계 재정의' : '10. OUSD Expands the Pie — Redefining the Relationship with USDC and USDT'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'OUSD의 등장을 단순히 "USDC 점유율 빼앗기 전쟁"으로 보는 것은 절반의 그림이다. 더 중요한 효과는 따로 있다 — 스테이블코인 시장 전체의 신뢰성과 규모가 커지는 것이다.'
              : 'Framing OUSD\'s emergence purely as a "war to steal USDC market share" misses half the picture. The more important effect may be elsewhere: expanding the credibility and scale of the entire stablecoin market.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-3">{isKo ? 'OUSD의 시장 확장 효과' : 'OUSD\'s market expansion effect'}</div>
              <div className="space-y-3 text-sm">
                {(isKo ? [
                  { icon: '📣', point: '신뢰 신호 전달', desc: 'Visa, BlackRock, DBS가 컨소시엄에 이름을 올린다는 사실 자체가 "스테이블코인은 이제 실험적 자산이 아니다"라는 메시지를 전통 금융권에 보낸다. 이 신호는 OUSD뿐 아니라 USDC·USDT 전체에 대한 기관 채택을 앞당긴다.' },
                  { icon: '🏢', point: '기업 결제 시장 개척', desc: 'OUSD가 B2B 결제·급여 시장을 공략하면 그 시장 자체가 커진다. 기업들이 스테이블코인 결제를 도입하면 USDC·USDT의 수요도 같이 늘어난다. 마치 아이폰이 스마트폰 시장 전체를 키운 것처럼.' },
                  { icon: '🌐', point: '달러 스테이블코인 글로벌화', desc: '140개 글로벌 기업의 참여는 "달러 스테이블코인을 국제 결제 인프라로 쓰자"는 암묵적 합의를 만든다. 이는 달러 스테이블코인 전체의 지위를 높이는 효과를 낸다.' },
                ] : [
                  { icon: '📣', point: 'Trust signal broadcast', desc: 'The mere fact that Visa, BlackRock, and DBS are joining the consortium sends a message to traditional finance: "stablecoins are no longer experimental assets." This signal accelerates institutional adoption not just for OUSD but for USDC and USDT as well.' },
                  { icon: '🏢', point: 'Opening the corporate payments market', desc: 'When OUSD targets B2B payments and payroll, the market itself grows. As companies adopt stablecoin payments, demand for USDC and USDT also rises — much like how the iPhone grew the entire smartphone market.' },
                  { icon: '🌐', point: 'Globalizing dollar stablecoins', desc: 'The participation of 140 global companies creates an implicit consensus to use dollar stablecoins as international payment infrastructure. This elevates the standing of dollar stablecoins as a category.' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-700 text-xs mb-0.5">{item.point}</div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="font-bold text-slate-800 mb-3">{isKo ? '그런데 진짜 병목은 여기다' : 'But here\'s the real bottleneck'}</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {isKo
                  ? 'OUSD가 파이를 키워도 그 파이를 먹을 수 없는 나라들이 있다. 문제는 단순히 법제화가 "느리다"가 아니다 — 법제화의 방향 자체가 글로벌 흐름과 어긋나는 경우가 더 큰 문제다.'
                  : 'Even if OUSD expands the pie, some countries can\'t eat it. The problem isn\'t just that legislation is "slow" — countries where the direction of legislation diverges from global norms face a far bigger problem.'}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-1.5 text-slate-500 font-semibold">{isKo ? '국가' : 'Country'}</th>
                      <th className="text-left py-1.5 text-slate-500 font-semibold">{isKo ? '속도' : 'Speed'}</th>
                      <th className="text-left py-1.5 text-slate-500 font-semibold">{isKo ? '방향' : 'Direction'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(isKo ? [
                      { country: '🇺🇸 미국', speed: '빠름', direction: '달러 스테이블코인 제도화', ok: true },
                      { country: '🇪🇺 EU', speed: '빠름', direction: '유로 + 외화 통합 수용 (MiCA)', ok: true },
                      { country: '🇸🇬 싱가포르', speed: '빠름', direction: '결제 수단 공식 인정', ok: true },
                      { country: '🇰🇷 한국', speed: '느림', direction: 'KRW 우선, 외화는 나중', ok: false },
                    ] : [
                      { country: '🇺🇸 US', speed: 'Fast', direction: 'Institutionalizing dollar stablecoins', ok: true },
                      { country: '🇪🇺 EU', speed: 'Fast', direction: 'Accepts both Euro + foreign (MiCA)', ok: true },
                      { country: '🇸🇬 Singapore', speed: 'Fast', direction: 'Official recognition as payment', ok: true },
                      { country: '🇰🇷 Korea', speed: 'Slow', direction: 'KRW first, foreign currency later', ok: false },
                    ]).map((row, i) => (
                      <tr key={i}>
                        <td className="py-1.5 text-slate-700 font-medium">{row.country}</td>
                        <td className={`py-1.5 font-semibold ${row.ok ? 'text-green-600' : 'text-red-500'}`}>{row.speed}</td>
                        <td className={`py-1.5 ${row.ok ? 'text-slate-600' : 'text-red-500'}`}>{row.direction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 mb-4">
            <div className="font-bold text-amber-900 mb-3 text-lg">
              {isKo ? '한국의 아이러니 — 글로벌 시장이 커질수록 격차가 벌어진다' : 'Korea\'s irony — the bigger the global market grows, the wider the gap'}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              {isKo
                ? 'OUSD가 글로벌 결제 인프라로 자리잡아 달러 스테이블코인 시장 전체가 성장하는 동안, 한국은 KRW 스테이블코인 법제화에 에너지를 쏟는다. 그 사이 한국 기업과 개인의 달러화(dollarization) 수요 — 해외 결제, 수출입, 해외 급여 — 는 오히려 높아진다. 그런데 그 수요를 공식 제도 안에서 충족할 방법이 없으니, 사람들은 해외 서비스를 우회해서 사용한다.'
                : 'While OUSD becomes global payment infrastructure and the entire dollar stablecoin market grows, Korea will be spending energy on KRW stablecoin legislation. Meanwhile, the demand from Korean businesses and individuals for dollarization — overseas payments, imports/exports, foreign payroll — only increases. But since there\'s no way to meet that demand within the official system, people route through overseas services.'}
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              {isKo
                ? '법이 없어서 막는 사이, 수요가 제도 밖으로 새는 구조다. 역설적으로, 입법이 완성될 시점에 OUSD가 글로벌 표준으로 자리잡아 있다면 한국은 결국 수용할 수밖에 없는 흐름이 되고 — 그 시간 동안 한국 사용자들이 누릴 수 있었던 혜택은 사라진 셈이다. 법제화의 속도보다, 방향이 맞는지가 더 중요한 이유다.'
                : 'While the law blocks participation, demand leaks outside the system. Paradoxically, if OUSD has become the global standard by the time Korean legislation is finalized, Korea will have no choice but to accept it — and the benefits Korean users could have enjoyed in the interim are simply lost. This is why the direction of legislation matters more than its speed.'}
            </p>
          </div>
        </section>

        {/* Section 11: 각국 규제와의 관계 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '11. 각국 규제와의 관계 — OUSD가 넘어야 할 벽' : '11. Regulatory Landscape — The Walls OUSD Must Climb'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'OUSD의 컨소시엄 구조와 리저브 수익 공유 모델은 기존 스테이블코인 규제 프레임에 깔끔하게 들어맞지 않는다. 주요 국가별로 OUSD가 마주할 규제 지형을 짚어본다.'
              : 'OUSD\'s consortium structure and reserve revenue-sharing model doesn\'t fit cleanly into existing stablecoin regulatory frameworks. Here\'s the regulatory terrain OUSD faces in key jurisdictions.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                country: isKo ? '미국' : 'United States',
                flag: '🇺🇸',
                status: isKo ? '핵심 시장, 규제 진행 중' : 'Core market, regulation in progress',
                statusColor: 'bg-amber-100 text-amber-700',
                desc: isKo
                  ? '2025년 GENIUS Act(스테이블코인법)가 미국에서 논의됐다. 핵심 요건은 1:1 리저브, 월간 감사, 발행사 명확화다. OUSD의 리저브 수익 공유 구조가 "이익 분배형 금융상품"으로 분류될 경우 증권법(SEC) 적용 가능성이 있다. Open Standard가 미국 법인이고 CEO가 Bridge 출신이므로 규제 당국과 긴밀하게 협의 중일 가능성이 높다. 미국에서 명확한 라이선스 없이는 기관 채택이 어렵다.'
                  : '2025 saw discussions of the GENIUS Act (stablecoin legislation) in the US. Core requirements: 1:1 reserves, monthly audits, clear issuer identity. If OUSD\'s reserve revenue-sharing structure is classified as a "profit-distributing financial product," SEC securities law could apply. Since Open Standard is a US entity and the CEO comes from Bridge, close coordination with regulators is likely underway. Without clear US licensing, institutional adoption is difficult.',
              },
              {
                country: isKo ? 'EU (유럽연합)' : 'EU (European Union)',
                flag: '🇪🇺',
                status: isKo ? 'MiCA 프레임 존재, 적용 복잡' : 'MiCA framework exists, complex application',
                statusColor: 'bg-orange-100 text-orange-700',
                desc: isKo
                  ? 'EU는 2024년부터 MiCA(Markets in Crypto-Assets Regulation)가 시행됐다. EMT(전자화폐토큰)로 분류되면 EU 은행 면허 또는 전자화폐 면허가 필요하다. OUSD의 수익 공유 구조는 EMT보다 "자산참조토큰(ART)"에 가까울 수 있는데, ART는 규제 요건이 더 까다롭다. Deutsche Bank·Standard Chartered 같은 파트너가 EU 면허를 보유하고 있어 인가 경로는 있지만, 복잡한 구조가 승인을 늦출 수 있다. Tether USDT는 MiCA 요건을 충족하지 못해 EU 주요 거래소에서 상장폐지됐는데, OUSD가 이를 공략할 기회이기도 하다.'
                  : 'MiCA (Markets in Crypto-Assets Regulation) has been in effect since 2024. If classified as an EMT (Electronic Money Token), an EU banking or e-money license is required. OUSD\'s revenue-sharing structure may fit closer to ART (Asset-Referenced Token), which has stricter requirements. Partner banks like Deutsche Bank and Standard Chartered hold EU licenses, providing a licensing pathway, but the complex structure could delay approval. USDT was delisted from major EU exchanges for failing MiCA requirements — an opportunity for OUSD to capture.',
              },
              {
                country: isKo ? '영국' : 'United Kingdom',
                flag: '🇬🇧',
                status: isKo ? '스테이블코인법 제정 중, 기회 시장' : 'Stablecoin law forming, opportunity market',
                statusColor: 'bg-green-100 text-green-700',
                desc: isKo
                  ? '영국은 2025~2026년 디지털자산 규제 프레임을 구축 중이다. FCA(금융행위감독청)가 스테이블코인을 결제 수단으로 인정하는 방향으로 가고 있다. Standard Chartered(런던 본사)가 파트너이므로 영국 시장 접근에 유리한 고지를 점하고 있다. 브렉시트 이후 EU MiCA와 별도 프레임을 만들고 있어, EU에서 막혀도 영국에서 먼저 인가받는 경로가 가능하다.'
                  : 'The UK is building a digital asset regulatory framework in 2025–2026. The FCA (Financial Conduct Authority) is moving to recognize stablecoins as payment instruments. With Standard Chartered (London-headquartered) as a partner, OUSD has an advantageous position for UK market access. Post-Brexit UK is building a separate framework from EU MiCA, so even if blocked in the EU, the path to UK authorization first is viable.',
              },
              {
                country: isKo ? '싱가포르·홍콩' : 'Singapore & Hong Kong',
                flag: '🇸🇬',
                status: isKo ? '친크립토 규제, 선점 기회' : 'Crypto-friendly regulation, early mover opportunity',
                statusColor: 'bg-green-100 text-green-700',
                desc: isKo
                  ? '싱가포르 MAS는 2023년 스테이블코인 프레임워크를 도입했고, 홍콩도 VASP 라이선스 체계를 갖췄다. DBS(싱가포르 최대 은행)가 OUSD 파트너로 참여하고 있어, 싱가포르 인가 경로가 가장 빠를 수 있다. 아시아 크로스보더 결제 시장에서 OUSD의 조기 교두보가 될 수 있다. 한국은 2025~2026년 가상자산 관련 법률 시행 중이지만, 스테이블코인 발행·유통에 대한 명확한 프레임이 아직 완성되지 않아 OUSD 접근이 단기간 내 어려울 수 있다.'
                  : 'Singapore\'s MAS introduced a stablecoin framework in 2023, and Hong Kong has a VASP licensing system. With DBS (Singapore\'s largest bank) as an OUSD partner, Singapore authorization may be the fastest path. OUSD could establish an early foothold in the Asian cross-border payments market. South Korea is enforcing crypto-related laws in 2025–2026, but a clear framework for stablecoin issuance and distribution isn\'t finalized yet, making near-term OUSD access potentially difficult.',
              },
              {
                country: isKo ? '이머징 마켓 (라틴아메리카·아프리카·동남아)' : 'Emerging Markets (LatAm, Africa, SE Asia)',
                flag: '🌍',
                status: isKo ? '수요 높음, 규제 공백 다수' : 'High demand, many regulatory gaps',
                statusColor: 'bg-blue-100 text-blue-700',
                desc: isKo
                  ? '아르헨티나·나이지리아·터키 같은 인플레이션 고통 국가들이 달러 스테이블코인 수요가 가장 크다. 이 시장들은 규제 프레임이 상대적으로 느슨하거나 아직 만들어지는 중이다. USDC와 USDT가 이미 이 시장에서 점유율을 높이고 있는 가운데, OUSD의 수수료 없는 모델과 Stripe·Visa 같은 익숙한 브랜드 파트너십이 채택을 앞당길 수 있다. 다만 규제 공백이 곧 리스크이기도 하다 — 특정 국가에서 OUSD를 막는 갑작스러운 규제가 나올 수 있다.'
                  : 'Countries suffering high inflation like Argentina, Nigeria, and Turkey have the strongest demand for dollar stablecoins. These markets have relatively loose or still-forming regulatory frameworks. While USDC and USDT are already gaining share in these markets, OUSD\'s no-fee model and familiar brand partnerships like Stripe and Visa could accelerate adoption. But regulatory gaps are also risks — sudden regulations blocking OUSD in specific countries remain a possibility.',
              },
              {
                country: isKo ? '한국' : 'South Korea',
                flag: '🇰🇷',
                status: isKo ? '규제 불명확, 단기 접근 어려움' : 'Regulatory unclear, near-term access difficult',
                statusColor: 'bg-red-100 text-red-700',
                desc: isKo
                  ? '한국은 2025년 가상자산이용자보호법을 시행했고 2단계 입법이 논의 중이다. 스테이블코인 발행 및 유통에 대한 명시적 허용 규정이 아직 없다. 금융당국은 외화 스테이블코인의 국내 유통에 외국환 규제가 적용될 수 있다는 입장이다. OUSD가 국내에서 공식적으로 서비스되려면 별도 라이선스 또는 금융당국 승인이 필요할 가능성이 높다. 단기적으로는 국내 CEX에 상장되거나 기업 결제에 공식 사용되기 어려울 수 있다.'
                  : 'South Korea enacted the Virtual Asset User Protection Act in 2025, with second-stage legislation under discussion. There are no explicit provisions permitting stablecoin issuance and distribution. The financial authorities have indicated that foreign exchange regulations may apply to domestic circulation of foreign-currency stablecoins. For OUSD to officially operate in Korea, separate licensing or regulatory approval is likely required. Short-term listing on domestic CEXs or official use in business payments may be difficult.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 flex items-center gap-3">
                  <span className="text-2xl">{item.flag}</span>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 text-sm">{item.country}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.statusColor}`}>{item.status}</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '규제 준비도 매트릭스 (추정)' : 'Regulatory readiness matrix (estimated)'}</div>
            <div className="grid grid-cols-3 gap-2 text-xs text-center">
              <div className="text-slate-400 font-semibold py-2">{isKo ? '국가·지역' : 'Region'}</div>
              <div className="text-slate-400 font-semibold py-2">{isKo ? 'OUSD 단기 접근' : 'OUSD near-term'}</div>
              <div className="text-slate-400 font-semibold py-2">{isKo ? 'USDC 현황' : 'USDC status'}</div>
              {[
                { region: isKo ? '미국' : 'US', ousd: isKo ? '조건부 가능' : 'Conditional', usdc: isKo ? '허용' : 'Permitted', ousdColor: 'text-amber-400', usdcColor: 'text-green-400' },
                { region: 'EU', ousd: isKo ? '협의 필요' : 'Needs negotiation', usdc: 'MiCA 준수', ousdColor: 'text-amber-400', usdcColor: 'text-green-400' },
                { region: isKo ? '영국' : 'UK', ousd: isKo ? '가능성 있음' : 'Likely', usdc: isKo ? '허용' : 'Permitted', ousdColor: 'text-green-400', usdcColor: 'text-green-400' },
                { region: isKo ? '싱가포르' : 'Singapore', ousd: isKo ? '가장 빠를 듯' : 'Fastest path', usdc: isKo ? '허용' : 'Permitted', ousdColor: 'text-green-400', usdcColor: 'text-green-400' },
                { region: isKo ? '한국' : 'Korea', ousd: isKo ? '단기 어려움' : 'Difficult near-term', usdc: isKo ? '불명확' : 'Unclear', ousdColor: 'text-red-400', usdcColor: 'text-amber-400' },
                { region: isKo ? '이머징 마켓' : 'Emerging', ousd: isKo ? '공백 활용 가능' : 'Gap opportunity', usdc: isKo ? '사실상 허용' : 'De facto OK', ousdColor: 'text-blue-400', usdcColor: 'text-green-400' },
              ].map((row, i) => (
                <>
                  <div key={`r-${i}`} className="text-slate-300 py-2 border-t border-slate-800">{row.region}</div>
                  <div key={`o-${i}`} className={`py-2 border-t border-slate-800 font-medium ${row.ousdColor}`}>{row.ousd}</div>
                  <div key={`u-${i}`} className={`py-2 border-t border-slate-800 font-medium ${row.usdcColor}`}>{row.usdc}</div>
                </>
              ))}
            </div>
          </div>
        </section>

        {/* Section 12: 한국 스테이블코인 입법 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '12. 한국 스테이블코인 입법화 — OUSD와 얼마나 안 맞나' : '12. Korea\'s Stablecoin Legislation — How Misaligned Is It with OUSD?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '한국의 스테이블코인 규제는 늦고, 방향도 OUSD 같은 글로벌 컨소시엄 스테이블코인과 맞지 않는 부분이 많다. OUSD가 글로벌 결제 인프라로 자리잡더라도 한국 사용자가 그 혜택을 누리려면 별도의 입법 해결이 필요한 상황이다.'
              : 'Korea\'s stablecoin regulation is late, and in many ways misaligned with global consortium stablecoins like OUSD. Even if OUSD establishes itself as global payment infrastructure, Korean users would need separate legislative resolution to benefit from it.'}
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-slate-900 mb-4">{isKo ? '한국 가상자산 입법 타임라인' : 'Korea virtual asset legislation timeline'}</div>
            <div className="space-y-3">
              {[
                { year: '2023.07', event: isKo ? '가상자산 이용자보호법 제정 — 1단계: 불공정거래·이용자 보호 중심' : 'Virtual Asset User Protection Act enacted — Phase 1: focus on unfair trading and user protection' },
                { year: '2025.01', event: isKo ? '가상자산위원회, 2단계 입법 계획 발표 — 스테이블코인 규율 포함 명시' : 'Virtual Asset Committee announces Phase 2 legislation plan — explicitly includes stablecoin regulation' },
                { year: '2025', event: isKo ? '디지털자산기본법 발의 예고됐으나 국회 제출 지연' : 'Digital Asset Basic Act announced but national assembly submission delayed' },
                { year: '2026 초', event: isKo ? '정부, 원화 스테이블코인·ICO 허용 담은 디지털자산기본법 국회 제출 전망' : 'Government expected to submit Digital Asset Basic Act to assembly (KRW stablecoin + ICO provisions)' },
                { year: '2026~', event: isKo ? '22대 국회 일정·지방선거 등으로 실질 입법 지연 가능성 높음' : '22nd National Assembly schedule and local elections make actual legislation likely delayed' },
              ].map((row, i) => (
                <div key={i} className="flex gap-4 text-sm">
                  <span className="font-mono text-blue-600 font-bold w-20 shrink-0">{row.year}</span>
                  <span className="text-slate-600">{row.event}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="font-bold text-red-800 mb-3">{isKo ? 'OUSD와 한국 규제의 충돌 지점' : 'Where OUSD clashes with Korean regulation'}</div>
              <div className="space-y-3 text-sm">
                {(isKo ? [
                  { title: '외환 규제', desc: 'OUSD는 달러 표시 스테이블코인이다. 한국 외국환거래법상 달러 스테이블코인의 국내 유통은 외화 송금·보유와 같이 취급될 수 있다. 금융당국은 외화 스테이블코인 유통에 외환 규제 적용 가능성을 열어두고 있다.' },
                  { title: '리저브 수익 공유 → 금융상품 여부', desc: 'OUSD 파트너사가 리저브 이자를 받는 구조는 "이자 배당형 금융상품"으로 해석될 수 있다. 한국에서 이자 지급형 상품은 은행법·자본시장법 규율 대상이 되어 스테이블코인 단독으로는 허용되기 어렵다.' },
                  { title: '컨소시엄 거버넌스 → 발행사 불명확', desc: '한국 규제는 스테이블코인 발행사를 명확히 특정하도록 요구하는 방향이다. 140개사 컨소시엄 구조는 "누가 최종 책임 발행사인가"라는 질문에 쉽게 답하기 어렵다.' },
                ] : [
                  { title: 'Foreign exchange regulation', desc: 'OUSD is a dollar-denominated stablecoin. Under Korea\'s Foreign Exchange Transaction Act, domestic circulation of dollar stablecoins may be treated like foreign currency remittance/holding. Authorities have left open the possibility of applying forex regulations.' },
                  { title: 'Reserve revenue sharing → financial product?', desc: 'OUSD partners receiving reserve interest may be interpreted as an "interest-paying financial product." In Korea, interest-paying products fall under the Banking Act and Capital Markets Act — difficult to permit as a stablecoin alone.' },
                  { title: 'Consortium governance → unclear issuer', desc: 'Korean regulation is moving toward requiring a clearly identified stablecoin issuer. A 140-company consortium structure struggles to answer "who is the final responsible issuer?"' },
                ]).map((item, i) => (
                  <div key={i} className="border-b border-red-100 last:border-0 pb-2 last:pb-0">
                    <div className="font-semibold text-slate-700 text-xs mb-0.5">{item.title}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="font-bold text-amber-800 mb-3">{isKo ? '한국 입법의 방향과 한계' : 'Direction and limits of Korean legislation'}</div>
              <div className="space-y-3 text-sm">
                {(isKo ? [
                  { title: '원화 스테이블코인 중심', desc: '현재 논의되는 디지털자산기본법은 원화(KRW) 스테이블코인 허용에 집중되어 있다. 달러 OUSD 같은 외화 스테이블코인은 논의의 주변부에 있다. 원화 스테이블코인이 먼저 자리잡으면 달러 스테이블코인 유통 허용은 더 늦어질 수 있다.' },
                  { title: '결제 기능 규제가 핵심 변수', desc: '"투자 목적 보유는 허용하되 결제·송금 기능은 별도 규제"라는 분리 접근이 유력하다. 이 경우 OUSD를 한국 사용자가 투자 자산으로 보유할 수는 있어도, 실제 결제·급여 지급에 쓰는 것은 막힌다. OUSD의 핵심 가치가 결제·수익 공유인 만큼 치명적이다.' },
                  { title: '글로벌 표준과 괴리', desc: '미국 GENIUS Act, EU MiCA, 싱가포르 MAS 프레임은 모두 달러 스테이블코인의 결제 수단 활용을 전제로 설계됐다. 한국만 유독 원화 스테이블코인 중심, 외화 스테이블코인 규제 방향으로 가면 글로벌 OUSD 생태계와 단절되는 구도가 된다.' },
                ] : [
                  { title: 'KRW stablecoin-centric', desc: 'The Digital Asset Basic Act currently under discussion focuses on permitting Korean won (KRW) stablecoins. Dollar-based foreign currency stablecoins like OUSD are at the periphery. If KRW stablecoins establish first, permitting foreign currency stablecoin circulation may be delayed further.' },
                  { title: 'Payment function regulation is the key variable', desc: 'A bifurcated approach — "allow holding for investment but regulate payment/remittance functions separately" — is likely. In this case, Korean users might hold OUSD as an investment asset but not use it for actual payments or payroll. This is fatal given OUSD\'s core value is payments and revenue sharing.' },
                  { title: 'Divergence from global standards', desc: 'US GENIUS Act, EU MiCA, and Singapore MAS frameworks are all designed assuming dollar stablecoins as payment instruments. If Korea uniquely moves toward KRW-stablecoin-first with restrictions on foreign currency stablecoins, Korea becomes disconnected from the global OUSD ecosystem.' },
                ]).map((item, i) => (
                  <div key={i} className="border-b border-amber-100 last:border-0 pb-2 last:pb-0">
                    <div className="font-semibold text-slate-700 text-xs mb-0.5">{item.title}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 mb-4">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '시나리오별 한국 OUSD 접근성' : 'Korea OUSD accessibility by scenario'}</div>
            <div className="space-y-3 text-sm">
              {(isKo ? [
                { scenario: '시나리오 A — 외화 스테이블코인 결제 허용', result: 'OUSD 국내 결제·급여 활용 가능. 글로벌 표준 채택 시나리오. 가능성: 낮음 (단기)', color: 'text-green-400' },
                { scenario: '시나리오 B — 투자 보유만 허용, 결제 금지', result: 'OUSD 거래소 상장 가능하나 핵심 기능(결제·수익공유) 불가. 반쪽짜리 허용. 가능성: 중간', color: 'text-amber-400' },
                { scenario: '시나리오 C — 원화 스테이블코인 우선, 외화 추후 검토', result: 'OUSD 국내 서비스 사실상 불가. 입법 완료까지 2~3년 이상. 가능성: 높음 (단기)', color: 'text-red-400' },
                { scenario: '시나리오 D — 규제 공백 지속', result: '법적 불확실성 유지. 기업 도입 불가, 개인은 해외 서비스 우회 사용. 가능성: 현재 상태', color: 'text-orange-400' },
              ] : [
                { scenario: 'Scenario A — Allow foreign currency stablecoin payments', result: 'OUSD usable for domestic payments and payroll. Global standards adoption scenario. Probability: Low (near-term)', color: 'text-green-400' },
                { scenario: 'Scenario B — Allow holding only, ban payments', result: 'OUSD can list on exchanges but core functions (payments/revenue sharing) blocked. Half-permission. Probability: Medium', color: 'text-amber-400' },
                { scenario: 'Scenario C — KRW stablecoin first, foreign currency later', result: 'OUSD effectively unavailable domestically. 2-3+ years until legislation complete. Probability: High (near-term)', color: 'text-red-400' },
                { scenario: 'Scenario D — Regulatory gap persists', result: 'Legal uncertainty continues. No corporate adoption, individuals route through overseas services. Probability: Current state', color: 'text-orange-400' },
              ]).map((item, i) => (
                <div key={i} className="flex gap-3 border-t border-slate-800 pt-3 first:border-0 first:pt-0">
                  <span className="text-slate-500 shrink-0 text-xs w-4">{i + 1}</span>
                  <div className="flex-1">
                    <div className="text-slate-300 text-xs font-semibold mb-0.5">{item.scenario}</div>
                    <div className={`text-xs ${item.color}`}>{item.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="font-bold text-blue-800 mb-2">{isKo ? '결론: 한국은 OUSD의 단기 공백 시장' : 'Conclusion: Korea is a near-term gap market for OUSD'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? '한국 입법은 늦고, 방향도 달러 스테이블코인 활성화보다 원화 스테이블코인 육성에 무게가 실려 있다. OUSD가 미국·EU·싱가포르에서 결제 인프라로 자리잡아도 한국 사용자는 그 혜택을 제도적으로 누리기 어려울 수 있다. 글로벌 스테이블코인 경쟁에서 한국만 뒤처지는 구도가 될 위험이 있다. 반대로 보면, 입법이 완성되는 시점에 OUSD가 글로벌 표준으로 자리잡아 있다면 한국도 결국 수용할 수밖에 없는 흐름이 된다.'
                : 'Korean legislation is slow, and its direction favors KRW stablecoin development over enabling dollar stablecoins. Even if OUSD establishes itself as payment infrastructure in the US, EU, and Singapore, Korean users may find it institutionally difficult to access those benefits. There\'s a risk of Korea alone falling behind in the global stablecoin competition. Looking at it the other way: if OUSD is the established global standard by the time Korean legislation is complete, Korea will have no choice but to adapt.'}
            </p>
          </div>
        </section>

        {/* Section 13: walits 관점 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '13. walits 관점 — OUSD가 우리에게 무엇을 의미하나' : '13. walits Perspective — What OUSD Means for Us'}
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
