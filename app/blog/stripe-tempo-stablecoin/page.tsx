'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StripeTempoPage() {
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
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'}`}>KO</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
            </div>
          </div>
          <div className="inline-block bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '인프라 심층 분석' : 'Infrastructure Deep Dive'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'Stripe Tempo — $1.1B Bridge 인수부터 스테이블코인 결제 인프라 완전 해부'
              : 'Stripe Tempo — From the $1.1B Bridge Acquisition to Stablecoin Payment Infrastructure'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '연간 $1조 달러를 처리하는 결제 인프라 회사가 스테이블코인을 선택했다. SWIFT 5일을 수 초로, 수수료 3%를 0에 가깝게. Stripe Tempo의 탄생 배경, 기술 구조, 실제 사용 사례, 그리고 USDC 지갑에 무엇을 의미하는지.'
              : 'The payment infrastructure company processing $1 trillion annually chose stablecoins. SWIFT\'s 5 days down to seconds, 3% fees down to near-zero. The backstory of Stripe Tempo, its technical architecture, real use cases, and what it means for USDC wallets.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 5월 18일' : 'May 18, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '30분 읽기' : '30 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/tempo.jpg" alt="Stripe Tempo Stablecoin Infrastructure" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 1: Stripe가 다시 크립토로 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. Stripe의 역사 — 크립토를 떠났다가 돌아온 이유' : '1. Stripe\'s History — Why They Left Crypto and Came Back'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Stripe는 2014년 세계 최초로 비트코인 결제를 지원한 주요 결제사 중 하나였다. 하지만 2018년, 비트코인 결제 지원을 종료했다. 이유는 단순했다 — 변동성이 너무 크고, 실제 결제 수단으로 아무도 쓰지 않는다.'
              : 'Stripe was among the first major payment processors to support Bitcoin in 2014. Then in 2018, they dropped it. The reason was simple: too volatile, and nobody actually used it for payments.'}
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <div className="font-bold text-slate-900 mb-4">{isKo ? 'Stripe × 크립토 연표' : 'Stripe × crypto timeline'}</div>
            <div className="space-y-3">
              {[
                { year: '2014', event: isKo ? 'Bitcoin 결제 지원 시작 — 가맹점에 BTC 수취 허용' : 'Launch Bitcoin payments — merchants can accept BTC' },
                { year: '2018', event: isKo ? 'Bitcoin 지원 종료 — "결제 수단으로 부적합"' : 'Drop Bitcoin — "not suitable as a payment method"' },
                { year: '2022', event: isKo ? '크립토 팀 내부 조용히 재가동 — 스테이블코인 연구 시작' : 'Internal crypto team quietly restarts — stablecoin research begins' },
                { year: '2024.03', event: isKo ? 'USDC 페이아웃 재출시 — 크리에이터·기업에 USDC로 지급' : 'USDC payouts relaunch — pay creators and businesses in USDC' },
                { year: '2024.10', event: isKo ? 'Bridge.xyz 인수 ($1.1B) — Stripe 역사상 최대 인수' : 'Acquire Bridge.xyz ($1.1B) — largest acquisition in Stripe history' },
                { year: '2024.11', event: isKo ? 'Stripe 결제창에 USDC·USDT 수취 기능 추가' : 'Add USDC/USDT acceptance to Stripe checkout' },
                { year: '2025.01', event: isKo ? 'Stablecoin Financial Accounts 출시 (101개국)' : 'Launch Stablecoin Financial Accounts (101 countries)' },
                { year: '2025.Q2', event: isKo ? 'Tempo 브랜드로 통합·공식 런칭' : 'Unified under Tempo brand, official launch' },
                { year: '2026', event: isKo ? 'Tempo 글로벌 확장 — 150개국 이상 지원' : 'Tempo global expansion — 150+ countries supported' },
              ].map((row, i) => (
                <div key={i} className="flex gap-4 text-sm">
                  <span className="font-mono text-violet-600 font-bold w-20 shrink-0">{row.year}</span>
                  <span className="text-slate-600">{row.event}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            {isKo
              ? '2018년 Stripe가 비트코인을 떠난 이유는 "크립토"가 싫어서가 아니었다. "변동성 있는 자산"이 결제에 맞지 않아서였다. USDC처럼 달러와 1:1로 페깅된 스테이블코인은 그 문제를 해결한다. 결제 수단으로서 달러의 안정성 + 블록체인의 속도·비용 효율. Stripe는 6년을 기다렸다가 정확한 시점에 돌아왔다.'
              : 'When Stripe left Bitcoin in 2018, it wasn\'t because they hated crypto — it was because a volatile asset doesn\'t work for payments. USDC, pegged 1:1 to the dollar, solves that problem. The stability of dollars + the speed and cost efficiency of blockchain. Stripe waited 6 years and came back at exactly the right moment.'}
          </p>
        </section>

        {/* Section 2: Bridge 인수 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. Bridge.xyz 인수 $1.1B — 무엇을 샀나?' : '2. The $1.1B Bridge.xyz Acquisition — What Did Stripe Buy?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '2024년 10월 Stripe가 Bridge를 인수했다. 크립토 스타트업 역사상 최대 규모의 인수였다. Bridge는 2022년 Zach Abrams와 Sean Yu가 창업한 스테이블코인 오케스트레이션 플랫폼이다.'
              : 'In October 2024, Stripe acquired Bridge — the largest acquisition in crypto startup history. Bridge was founded in 2022 by Zach Abrams and Sean Yu as a stablecoin orchestration platform.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
              <div className="font-bold text-violet-800 mb-3">{isKo ? 'Bridge가 해결한 문제' : 'What Bridge solved'}</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {isKo
                  ? '스테이블코인을 실제 비즈니스에 통합하려면 수십 개의 체인, 수십 개의 스테이블코인, 각국 컴플라이언스, 법정화폐 환전을 모두 처리해야 한다. Bridge는 이것을 단일 API로 추상화했다.'
                  : 'Integrating stablecoins into a real business means handling dozens of chains, dozens of stablecoins, per-country compliance, and fiat conversion. Bridge abstracted all of this into a single API.'}
              </p>
              <div className="space-y-2 text-sm">
                {[
                  isKo ? '멀티체인 USDC/USDT 통합 API' : 'Multi-chain USDC/USDT unified API',
                  isKo ? '법정화폐 ↔ 스테이블코인 자동 환전' : 'Automatic fiat ↔ stablecoin conversion',
                  isKo ? '150개국 컴플라이언스 처리' : 'Compliance handling for 150+ countries',
                  isKo ? 'KYC/AML 내장' : 'Built-in KYC/AML',
                  isKo ? 'USDB (Bridge 자체 스테이블코인) 발행' : 'USDB issuance (Bridge\'s own stablecoin)',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-slate-600">
                    <span className="text-violet-400 shrink-0">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="font-bold text-slate-800 mb-3">{isKo ? 'Bridge의 실 사용 사례 (인수 전)' : 'Bridge real use cases (pre-acquisition)'}</div>
              <div className="space-y-3">
                {[
                  { org: 'SpaceX', desc: isKo ? '해외 자회사로 달러 송금 — 수수료와 환율 손실 제거' : 'Dollar transfers to overseas subsidiaries — eliminated fees and FX slippage' },
                  { org: isKo ? '미국 국무부' : 'US State Department', desc: isKo ? '우크라이나 지원금 USDC로 즉시 지급' : 'Instant USDC disbursement for Ukraine aid' },
                  { org: 'Mercury', desc: isKo ? '스타트업 은행 계좌에 스테이블코인 레일 연결' : 'Connected stablecoin rails to startup bank accounts' },
                  { org: 'Bitso', desc: isKo ? '라틴아메리카 크립토 거래소 달러 결제 처리' : 'Dollar payment processing for Latin America crypto exchange' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-slate-200 last:border-0 py-2">
                    <span className="font-semibold text-slate-800 text-sm">{item.org}</span>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? 'Stripe가 $1.1B를 쓴 진짜 이유' : 'The real reason Stripe paid $1.1B'}</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isKo
                ? 'Stripe가 산 것은 코드가 아니다. Bridge의 인프라는 Stripe가 직접 만들 수 있다. Stripe가 산 것은 세 가지다: (1) 150개국 규제 라이선스와 컴플라이언스 네트워크 — 이것은 돈으로도 수년이 걸린다. (2) SpaceX·국무부 같은 대형 기관 고객과의 레퍼런스 — 신뢰는 구매할 수 없지만 Bridge는 이미 가지고 있었다. (3) Zach Abrams 팀 — 스테이블코인 결제 인프라 구축 경험을 가진 최고 수준의 팀.'
                : 'Stripe didn\'t buy code — they could have built that. What Stripe bought was three things: (1) Regulatory licenses and compliance networks across 150 countries — impossible to build in less than years. (2) Reference customers like SpaceX and the State Department — trust can\'t be purchased, but Bridge already had it. (3) Zach Abrams\'s team — world-class experience building stablecoin payment infrastructure.'}
            </p>
          </div>
        </section>

        {/* Section 3: Tempo란 무엇인가 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. Stripe Tempo — 정확히 무엇인가?' : '3. Stripe Tempo — What Exactly Is It?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Tempo는 Stripe의 스테이블코인 금융 플랫폼이다. 새로운 블록체인이 아니다. 새로운 스테이블코인도 아니다. 기존 스테이블코인 인프라(USDC, USDT, Ethereum, Base, Solana 등) 위에 결제·계좌·환전을 통합한 API 레이어다.'
              : 'Tempo is Stripe\'s stablecoin financial platform. It\'s not a new blockchain. It\'s not a new stablecoin. It\'s an API layer that unifies payments, accounts, and conversion on top of existing stablecoin infrastructure (USDC, USDT, Ethereum, Base, Solana, etc.).'}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                product: isKo ? '스테이블코인 계좌' : 'Stablecoin Accounts',
                icon: '🏦',
                desc: isKo ? '일부 국가의 기업 고객에게 USDC/USDB 기반 스테이블코인 금융 계좌 제공. KYC 및 해당 국가 규제 준수 필요.' : 'Stablecoin financial accounts (USDC/USDB) for business customers in supported countries. KYC and local regulations apply.',
                detail: isKo ? '101개국 → 150개국 이상 (기업 대상)' : '101 → 150+ countries (business-focused)',
              },
              {
                product: isKo ? '크로스보더 결제' : 'Cross-Border Payments',
                icon: '⚡',
                desc: isKo ? 'SWIFT 대신 스테이블코인 레일로 수 초 내 국제 송금. 수신자는 현지 통화로 수취 가능.' : 'International transfers in seconds via stablecoin rails instead of SWIFT. Recipients can receive in local currency.',
                detail: isKo ? '약 30초 완료, 수수료 0.1% 내외' : '~30 sec completion, ~0.1% fee',
              },
              {
                product: isKo ? '머천트 결제 통합' : 'Merchant Payment Integration',
                icon: '🛒',
                desc: isKo ? '기존 Stripe 가맹점이 스테이블코인 수취 즉시 추가. Stripe 대시보드에서 USDC 잔액 관리.' : 'Existing Stripe merchants add stablecoin acceptance instantly. Manage USDC balance in Stripe dashboard.',
                detail: isKo ? '5분 연동, 코드 변경 최소' : '5 min integration, minimal code change',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-slate-900 mb-2">{item.product}</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                <div className="text-xs font-mono text-violet-600 bg-violet-50 px-2 py-1 rounded">{item.detail}</div>
              </div>
            ))}
          </div>

          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
            <div className="font-bold text-violet-800 mb-4">{isKo ? 'Tempo vs 기존 Stripe 결제의 차이' : 'Tempo vs traditional Stripe payments'}</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-violet-200">
                    <th className="text-left py-2 pr-4 text-violet-600 font-semibold">{isKo ? '항목' : 'Item'}</th>
                    <th className="text-left py-2 pr-4 text-violet-600 font-semibold">{isKo ? '기존 Stripe (카드)' : 'Traditional Stripe (card)'}</th>
                    <th className="text-left py-2 text-violet-600 font-semibold">Stripe Tempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-violet-100">
                  {[
                    { item: isKo ? '국내 결제 수수료' : 'Domestic fee', old: '2.9% + $0.30', new: '~0.1%' },
                    { item: isKo ? '해외 결제 수수료' : 'International fee', old: '3.9% + $0.30 + FX', new: '~0.1–0.5%' },
                    { item: isKo ? '정산 시간' : 'Settlement time', old: isKo ? '2–7 영업일' : '2–7 business days', new: isKo ? '수 초–수 분' : 'Seconds to minutes' },
                    { item: isKo ? '24/7 처리' : '24/7 processing', old: '❌', new: '✅' },
                    { item: isKo ? '프로그래머블' : 'Programmable', old: '제한적', new: isKo ? '완전 (조건부 결제, 자동화)' : 'Full (conditional, automated)' },
                    { item: isKo ? '환율 손실' : 'FX slippage', old: isKo ? '1–3% 내외' : '1–3%', new: isKo ? '거의 없음 (USDC 기준)' : 'Near zero (USDC denominated)' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-4 font-medium text-slate-700">{row.item}</td>
                      <td className="py-2 pr-4 text-red-600 text-xs">{row.old}</td>
                      <td className="py-2 text-green-600 text-xs font-semibold">{row.new}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: 기술 아키텍처 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. 기술 아키텍처 — Bridge 오케스트레이션 레이어' : '4. Technical Architecture — The Bridge Orchestration Layer'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Tempo의 핵심 기술은 Bridge에서 왔다. Bridge는 스테이블코인 오케스트레이션 레이어를 표방한다 — 복잡한 멀티체인·멀티통화 처리를 단일 API 뒤로 숨긴다.'
              : 'Tempo\'s core technology comes from Bridge. Bridge calls itself a stablecoin orchestration layer — hiding complex multi-chain, multi-currency processing behind a single API.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 text-xs mb-4">{isKo ? '전체 아키텍처 스택' : 'Full architecture stack'}</div>
            <div className="space-y-1">
              <div className="text-violet-400 font-bold">{isKo ? '[ 애플리케이션 레이어 ]' : '[ Application Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? 'Stripe Dashboard / Tempo API / 파트너 앱' : 'Stripe Dashboard / Tempo API / Partner apps'}</div>
              <div className="text-slate-600 pl-4">↕ REST API + Webhooks</div>
              <div className="text-blue-400 font-bold mt-2">{isKo ? '[ Bridge 오케스트레이션 레이어 ]' : '[ Bridge Orchestration Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? '라우팅 엔진  컴플라이언스  KYC/AML  FX 환전  잔액 관리' : 'Routing engine  Compliance  KYC/AML  FX conversion  Balance mgmt'}</div>
              <div className="text-slate-600 pl-4">↕ {isKo ? '체인별 어댑터' : 'Chain-specific adapters'}</div>
              <div className="text-green-400 font-bold mt-2">{isKo ? '[ 블록체인 / 레일 레이어 ]' : '[ Blockchain / Rail Layer ]'}</div>
              <div className="text-slate-400 pl-4">Ethereum (USDC)  Base (USDC)  Solana (USDC/PYUSD)  Tron (USDT)  Stellar (USDC)</div>
              <div className="text-slate-600 pl-4">↕ {isKo ? '온/오프 램프' : 'On/off ramps'}</div>
              <div className="text-amber-400 font-bold mt-2">{isKo ? '[ 법정화폐 레이어 ]' : '[ Fiat Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? '은행 파트너  ACH  SEPA  현지 결제 레일  법정화폐 계좌' : 'Banking partners  ACH  SEPA  Local payment rails  Fiat accounts'}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="font-bold text-slate-800 mb-3">{isKo ? '라우팅 엔진 — 최적 경로 자동 선택' : 'Routing engine — automatic optimal path'}</div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                {isKo
                  ? 'USDC를 보낼 때 어느 체인으로 보낼지 자동으로 결정한다. 수신자 국가, 금액, 속도, 수수료를 종합해 최적 경로를 선택한다.'
                  : 'When sending USDC, automatically decides which chain to route through. Considers recipient country, amount, speed, and fees to pick the optimal path.'}
              </p>
              <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-slate-300">
                {isKo
                  ? `예: 나이지리아 $500 송금\n→ Base (수수료 $0.001, 2초)\n→ 현지 NGN 환전 후 계좌 입금`
                  : `e.g. Send $500 to Nigeria\n→ Base (fee $0.001, 2 sec)\n→ Convert to NGN, deposit to account`}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="font-bold text-slate-800 mb-3">{isKo ? '컴플라이언스 엔진 — 150개국 실시간 처리' : 'Compliance engine — 150 countries real-time'}</div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                {isKo
                  ? '각국의 자금이동 규제, OFAC 제재 목록, AML 규칙을 실시간으로 적용한다. 이 네트워크를 구축하는 데만 수년이 걸린다.'
                  : 'Applies each country\'s money transfer regulations, OFAC sanctions, and AML rules in real time. Building this network alone takes years.'}
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                {(isKo ? [
                  '• OFAC SDN 목록 실시간 스크리닝',
                  '• 거래 패턴 이상 탐지 (AML)',
                  '• 국가별 송금 한도 자동 적용',
                  '• 고객 위험도 자동 평가',
                ] : [
                  '• Real-time OFAC SDN list screening',
                  '• Transaction pattern anomaly detection (AML)',
                  '• Per-country transfer limit enforcement',
                  '• Automated customer risk assessment',
                ]).map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="font-bold text-blue-800 mb-3">{isKo ? '지원 체인 및 스테이블코인 (2026년 기준)' : 'Supported chains and stablecoins (as of 2026)'}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { chain: 'Ethereum', coins: 'USDC, USDT', speed: '~12초' },
                { chain: 'Base', coins: 'USDC', speed: '~2초' },
                { chain: 'Solana', coins: 'USDC, PYUSD', speed: '~0.4초' },
                { chain: 'Tron', coins: 'USDT', speed: '~3초' },
                { chain: 'Stellar', coins: 'USDC', speed: '~5초' },
                { chain: 'Arbitrum', coins: 'USDC', speed: '~2초' },
                { chain: 'Polygon', coins: 'USDC, USDT', speed: '~2초' },
                { chain: 'Avalanche', coins: 'USDC', speed: '~2초' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center border border-blue-100">
                  <div className="font-bold text-slate-800 text-sm">{item.chain}</div>
                  <div className="text-xs text-blue-600 mt-0.5">{item.coins}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.speed}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: API */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. Tempo API — 개발자가 실제로 쓰는 방법' : '5. Tempo API — How Developers Actually Use It'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Tempo의 가장 강력한 점은 기존 Stripe API와 동일한 패턴을 따른다는 것이다. Stripe를 이미 쓰는 개발자라면 학습 비용이 거의 없다.'
              : 'Tempo\'s greatest strength is that it follows the same patterns as the existing Stripe API. Developers already using Stripe face almost no learning curve.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: isKo ? '스테이블코인 계좌 생성' : 'Create a stablecoin account',
                desc: isKo ? '고객에게 USDC 계좌 발급. Virtual IBAN 또는 가상 계좌 연동 가능.' : 'Issue a USDC account to a customer. Can link to Virtual IBAN or virtual account.',
                code: `// 스테이블코인 계좌 생성
const account = await stripe.financialAccounts.create({
  features: {
    financial_addresses: { aba: { requested: true } },
    inbound_transfers: { ach: { requested: true } },
    outbound_payments: {
      ach: { requested: true },
      us_domestic_wire: { requested: true },
    },
  },
  stablecoin_currency: 'usdc',
});
// → account.id, account.financial_addresses[0].aba`,
              },
              {
                title: isKo ? '크로스보더 스테이블코인 송금' : 'Cross-border stablecoin transfer',
                desc: isKo ? '수신자에게 USDC를 즉시 전송. 수신자 국가에 따라 현지 통화로 자동 환전 옵션.' : 'Instant USDC transfer to recipient. Automatic local currency conversion based on recipient country.',
                code: `// 크로스보더 USDC 송금
const transfer = await stripe.transfers.create({
  amount: 50000,        // $500.00 (cents 단위)
  currency: 'usd',
  destination: 'acct_recipient_id',
  transfer_group: 'payroll_2026_05',
  metadata: {
    settlement_currency: 'usdc',
    destination_chain: 'base',  // 자동 라우팅 가능
  },
});`,
              },
              {
                title: isKo ? '웹훅으로 스테이블코인 입금 감지' : 'Detect stablecoin deposits via webhook',
                desc: isKo ? 'USDC가 계좌에 들어오면 웹훅으로 즉시 알림. 기존 Stripe 웹훅 인프라 그대로 재사용.' : 'Instant webhook notification when USDC arrives. Reuse existing Stripe webhook infrastructure.',
                code: `// 웹훅 핸들러
app.post('/webhook', (req, res) => {
  const event = stripe.webhooks.constructEvent(
    req.body, sig, process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === 'treasury.received_credit.created') {
    const credit = event.data.object;
    // credit.currency     → 'usdc'
    // credit.amount       → 50000 ($500)
    // credit.network      → 'base'
    // credit.transaction  → 트랜잭션 ID
    await handleUsdcDeposit(credit);
  }
  res.json({ received: true });
});`,
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3">
                  <div className="font-bold text-slate-800">{item.title}</div>
                  <div className="text-slate-500 text-sm mt-0.5">{item.desc}</div>
                </div>
                <div className="bg-slate-900 p-5">
                  <pre className="text-xs font-mono text-green-300 leading-relaxed overflow-x-auto">{item.code}</pre>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="font-bold text-amber-800 mb-2">{isKo ? 'Tempo SDK vs 직접 온체인 연동 비교' : 'Tempo SDK vs direct on-chain integration'}</div>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <div className="text-sm font-semibold text-slate-700 mb-2">{isKo ? 'Tempo API 사용 시' : 'Using Tempo API'}</div>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>✅ {isKo ? '체인 선택 자동 (라우팅 엔진)' : 'Auto chain selection (routing engine)'}</li>
                  <li>✅ {isKo ? 'KYC/컴플라이언스 내장' : 'Built-in KYC/compliance'}</li>
                  <li>✅ {isKo ? '법정화폐 환전 포함' : 'Fiat conversion included'}</li>
                  <li>✅ {isKo ? '기존 Stripe 인프라 재사용' : 'Reuse existing Stripe infrastructure'}</li>
                  <li>❌ {isKo ? '수수료 0.1~0.5%' : '0.1–0.5% fee'}</li>
                  <li>❌ {isKo ? 'Stripe에 의존' : 'Dependent on Stripe'}</li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-700 mb-2">{isKo ? '직접 온체인 (walits 방식)' : 'Direct on-chain (walits approach)'}</div>
                <ul className="space-y-1 text-xs text-slate-600">
                  <li>✅ {isKo ? '수수료 최소화 (가스만)' : 'Minimal fees (gas only)'}</li>
                  <li>✅ {isKo ? '완전한 자기 보관' : 'Full self-custody'}</li>
                  <li>✅ {isKo ? 'DeFi 수익 직접 접근' : 'Direct DeFi yield access'}</li>
                  <li>❌ {isKo ? 'KYC/컴플라이언스 직접 구축' : 'Must build KYC/compliance'}</li>
                  <li>❌ {isKo ? '법정화폐 환전 별도 필요' : 'Fiat conversion needed separately'}</li>
                  <li>❌ {isKo ? '체인 관리 직접 필요' : 'Must manage chain integrations'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 실사용 사례 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 실제 사용 사례 — 누가 어떻게 쓰고 있나?' : '6. Real Use Cases — Who Is Using It and How?'}
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                category: isKo ? '글로벌 급여 지급 (Payroll)' : 'Global Payroll',
                color: 'bg-blue-50 border-blue-200',
                headerColor: 'text-blue-800',
                examples: [
                  {
                    company: 'Remote.com / Deel',
                    desc: isKo
                      ? '해외 프리랜서·계약직에게 USDC로 즉시 급여 지급. 수신자가 40개국 현지 통화로 자동 환전 수취. 기존 SWIFT 대비 수수료 90% 절감.'
                      : 'Instant USDC payroll to overseas freelancers and contractors. Recipients auto-convert to local currency in 40 countries. 90% fee reduction vs SWIFT.',
                  },
                ],
              },
              {
                category: isKo ? '이머징 마켓 달러화 (Dollarization)' : 'Emerging Market Dollarization',
                color: 'bg-green-50 border-green-200',
                headerColor: 'text-green-800',
                examples: [
                  {
                    company: isKo ? '아르헨티나·나이지리아·터키 사용 사례' : 'Argentina, Nigeria, Turkey use cases',
                    desc: isKo
                      ? '자국 통화 인플레이션이 심한 국가(아르헨티나, 나이지리아 등)에서 USDC로 가치 보존을 시도하는 수요가 실재한다. 다만 Stripe Tempo를 통한 서비스는 규제상 허용 여부가 국가마다 다르며, 실제 접근 가능성은 현지 규제에 달려 있다.'
                      : 'In countries with severe local currency inflation (Argentina, Nigeria, etc.), real demand exists for preserving value in USDC. However, access through Stripe Tempo varies by country depending on local regulations.',
                  },
                ],
              },
              {
                category: isKo ? '크로스보더 B2B 결제' : 'Cross-Border B2B Payments',
                color: 'bg-violet-50 border-violet-200',
                headerColor: 'text-violet-800',
                examples: [
                  {
                    company: 'SpaceX (Bridge 시절)',
                    desc: isKo
                      ? '해외 자회사에서 발생한 달러 수익을 미국 본사로 이동할 때 USDC 레일 사용. 기존 은행 대비 정산 T+0, 수수료 대폭 절감.'
                      : 'Used USDC rails to move dollar revenue from overseas subsidiaries to US HQ. T+0 settlement vs banks, dramatically lower fees.',
                  },
                ],
              },
              {
                category: isKo ? '디지털 상품·구독 결제' : 'Digital Goods & Subscription Payments',
                color: 'bg-orange-50 border-orange-200',
                headerColor: 'text-orange-800',
                examples: [
                  {
                    company: isKo ? 'SaaS / 미디어 / 게임' : 'SaaS / Media / Gaming',
                    desc: isKo
                      ? '카드 결제가 어려운 국가(인도, 동남아 등) 사용자에게 USDC 결제 옵션 제공. 결제 성공률 향상, 해외 카드 수수료 제거. 크리에이터 플랫폼의 글로벌 수익 지급에도 활용.'
                      : 'Offer USDC payment option in countries where card payments are difficult (India, SE Asia, etc.). Higher payment success rates, no international card fees. Also used for global creator payouts.',
                  },
                ],
              },
            ].map((cat, i) => (
              <div key={i} className={`border rounded-2xl p-5 ${cat.color}`}>
                <div className={`font-bold text-sm mb-3 ${cat.headerColor}`}>{cat.category}</div>
                {cat.examples.map((ex, j) => (
                  <div key={j}>
                    <div className="font-semibold text-slate-800 text-sm mb-1">{ex.company}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{ex.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: SWIFT와 비교 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. SWIFT vs Stripe Tempo vs 직접 온체인 — 완전 비교' : '7. SWIFT vs Stripe Tempo vs Direct On-Chain — Full Comparison'}
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">{isKo ? '항목' : 'Item'}</th>
                  <th className="text-left px-4 py-3 font-semibold">SWIFT</th>
                  <th className="text-left px-4 py-3 font-semibold text-violet-300">Stripe Tempo</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-300 rounded-tr-xl">{isKo ? '직접 온체인 (Base)' : 'Direct on-chain (Base)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { item: isKo ? '처리 속도' : 'Speed', swift: '2–5 영업일', tempo: '수 초–수 분', chain: '~2초' },
                  { item: isKo ? '수수료' : 'Fee', swift: '$25–50 + 1–3% FX', tempo: '~0.1–0.5%', chain: '~$0.001 (가스)' },
                  { item: isKo ? '24/7 운영' : '24/7 operation', swift: '❌', tempo: '✅', chain: '✅' },
                  { item: isKo ? '법정화폐 환전' : 'Fiat conversion', swift: '✅ (느리고 비쌈)', tempo: '✅ (자동, 저렴)', chain: '❌ (별도 필요)' },
                  { item: isKo ? 'KYC/컴플라이언스' : 'KYC/compliance', swift: '✅ (은행 처리)', tempo: '✅ (자동)', chain: '❌ (직접 구축)' },
                  { item: isKo ? '프로그래머블' : 'Programmable', swift: '❌', tempo: '✅ (제한적)', chain: '✅ (완전)' },
                  { item: isKo ? 'DeFi 수익' : 'DeFi yield', swift: '❌', tempo: '❌', chain: '✅' },
                  { item: isKo ? '자기 보관' : 'Self-custody', swift: '❌', tempo: '❌ (Stripe 보관)', chain: '✅' },
                  { item: isKo ? '개발 난이도' : 'Dev complexity', swift: '높음', tempo: '낮음 (Stripe SDK)', chain: '중간' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.item}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{row.swift}</td>
                    <td className="px-4 py-3 text-violet-700 text-xs font-medium">{row.tempo}</td>
                    <td className="px-4 py-3 text-blue-700 text-xs font-medium">{row.chain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? '세 가지는 경쟁 관계가 아니라 각자의 포지션이 있다. SWIFT는 중앙화 금융기관 간 대형 기업 거래에 여전히 쓰인다. Stripe Tempo는 Stripe 생태계 안에서 비즈니스가 스테이블코인을 쉽게 쓰게 해주는 미들웨어다. 직접 온체인은 자기 보관과 DeFi 수익을 원하는 사용자에게 맞는 방식이다 — walits가 이 포지션이다.'
                : 'These three aren\'t competing — each has its position. SWIFT still handles large enterprise transactions between centralized financial institutions. Stripe Tempo is middleware that makes it easy for businesses inside the Stripe ecosystem to use stablecoins. Direct on-chain suits users who want self-custody and DeFi yield — that\'s where walits sits.'}
            </p>
          </div>
        </section>

        {/* Section 8: 수수료 구조 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 수수료 구조 상세' : '8. Fee Structure in Detail'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Tempo의 수수료는 거래 유형과 경로에 따라 다르다. 완전 공개된 구조는 아니지만 알려진 내용을 정리한다.'
              : 'Tempo fees vary by transaction type and route. The full structure isn\'t entirely public, but here\'s what\'s known.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                type: isKo ? '스테이블코인 → 스테이블코인 (동일 체인)' : 'Stablecoin → Stablecoin (same chain)',
                fee: '~0.0%',
                note: isKo ? '실질적으로 가스비만. 매우 저렴.' : 'Essentially gas only. Very cheap.',
                color: 'bg-green-50 border-green-200 text-green-800',
              },
              {
                type: isKo ? '스테이블코인 → 스테이블코인 (크로스체인)' : 'Stablecoin → Stablecoin (cross-chain)',
                fee: '~0.1%',
                note: isKo ? '브릿지 및 라우팅 수수료 포함.' : 'Includes bridge and routing fees.',
                color: 'bg-blue-50 border-blue-200 text-blue-800',
              },
              {
                type: isKo ? '스테이블코인 → 법정화폐 (출금)' : 'Stablecoin → Fiat (offramp)',
                fee: '0.1–0.8%',
                note: isKo ? '국가별 환전 마진 포함. 이머징 마켓일수록 높음.' : 'Includes country-specific FX margin. Higher for emerging markets.',
                color: 'bg-amber-50 border-amber-200 text-amber-800',
              },
              {
                type: isKo ? '법정화폐 → 스테이블코인 (입금)' : 'Fiat → Stablecoin (onramp)',
                fee: '0.1–1.5%',
                note: isKo ? 'ACH/SEPA는 저렴, 카드는 비쌈. 국가마다 다름.' : 'ACH/SEPA is cheap, card is expensive. Varies by country.',
                color: 'bg-orange-50 border-orange-200 text-orange-800',
              },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="text-3xl font-black mb-1">{item.fee}</div>
                <div className="font-bold text-sm mb-1">{item.type}</div>
                <div className="text-xs opacity-80">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-5">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? '실제 수수료 시나리오 — $1,000 해외 송금' : 'Real fee scenario — $1,000 international transfer'}</div>
            <div className="space-y-3 font-mono text-sm">
              {[
                { method: 'Bank wire (SWIFT)', fee: '$35 + $10–30 FX = ~$45–65', pct: '4.5–6.5%', color: 'text-red-400' },
                { method: 'Western Union', fee: '$5–15 + 3–5% FX = ~$35–65', pct: '3.5–6.5%', color: 'text-red-400' },
                { method: 'Wise (TransferWise)', fee: '~0.4–1.5% = ~$4–15', pct: '0.4–1.5%', color: 'text-yellow-400' },
                { method: 'Stripe Tempo', fee: '~0.1–0.5% = ~$1–5', pct: '0.1–0.5%', color: 'text-green-400' },
                { method: 'Direct on-chain (Base)', fee: '~$0.001 가스 = $0.001', pct: '~0.0001%', color: 'text-blue-400' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs w-40 shrink-0">{row.method}</span>
                  <span className={`${row.color} text-xs`}>{row.fee}</span>
                  <span className={`${row.color} font-bold text-sm w-20 text-right`}>{row.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: 경쟁 구도 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '9. 경쟁 구도 — Tempo의 포지션' : '9. Competitive Landscape — Where Tempo Sits'}
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">{isKo ? '플레이어' : 'Player'}</th>
                  <th className="text-left px-4 py-3 font-semibold">{isKo ? '강점' : 'Strength'}</th>
                  <th className="text-left px-4 py-3 font-semibold">{isKo ? '약점' : 'Weakness'}</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">{isKo ? 'Tempo와의 차이' : 'vs Tempo'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    player: 'Stripe Tempo',
                    strength: isKo ? '가맹점 3M+ 네트워크, 개발자 친화적 API' : '3M+ merchant network, dev-friendly API',
                    weakness: isKo ? '자기 보관 없음, DeFi 접근 없음' : 'No self-custody, no DeFi access',
                    diff: isKo ? '기준점' : 'Baseline',
                    highlight: true,
                  },
                  {
                    player: 'Circle Payments Network',
                    strength: isKo ? 'USDC 발행사 직접, 기관 신뢰도' : 'Direct USDC issuer, institutional trust',
                    weakness: isKo ? '소비자·소규모 기업 접근 어려움' : 'Hard for consumers and small businesses to access',
                    diff: isKo ? '기관 전용 vs Tempo의 중소기업 포커스' : 'Institutional-only vs Tempo\'s SMB focus',
                    highlight: false,
                  },
                  {
                    player: 'Wise (TransferWise)',
                    strength: isKo ? '법정화폐 FX 전문, 낮은 환전 수수료' : 'Fiat FX specialist, low conversion fees',
                    weakness: isKo ? '스테이블코인 없음, 블록체인 없음' : 'No stablecoins, no blockchain',
                    diff: isKo ? '법정화폐 중심 vs Tempo의 스테이블코인 중심' : 'Fiat-centric vs Tempo\'s stablecoin-centric',
                    highlight: false,
                  },
                  {
                    player: 'Ripple / RLUSD',
                    strength: isKo ? 'XRP Ledger 속도, 은행 파트너십' : 'XRP Ledger speed, bank partnerships',
                    weakness: isKo ? '규제 불확실성, 생태계 한정' : 'Regulatory uncertainty, ecosystem limited',
                    diff: isKo ? 'XRP 생태계 한정 vs Tempo의 멀티체인' : 'XRP ecosystem-bound vs Tempo\'s multi-chain',
                    highlight: false,
                  },
                  {
                    player: 'PayPal (PYUSD)',
                    strength: isKo ? '4억 사용자 기반, 소비자 친화적' : '400M user base, consumer-friendly',
                    weakness: isKo ? 'DeFi 생태계 매우 작음' : 'Very small DeFi ecosystem',
                    diff: isKo ? '소비자 지갑 vs Tempo의 B2B 결제' : 'Consumer wallet vs Tempo\'s B2B payments',
                    highlight: false,
                  },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-violet-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className={`px-4 py-3 font-bold text-sm ${row.highlight ? 'text-violet-700' : 'text-slate-800'}`}>{row.player}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{row.strength}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{row.weakness}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 10: 현황과 한계 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '10. 2026년 현황과 남은 한계' : '10. 2026 Status and Remaining Limitations'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="font-bold text-slate-900 mb-3">{isKo ? '현재 달성한 것' : 'What\'s been achieved'}</div>
              <div className="space-y-2">
                {(isKo ? [
                  '150개국 이상 기업 대상 스테이블코인 계좌 지원 (국가별 규제 적용)',
                  '8개 이상 체인에서 USDC/USDT 처리',
                  'Stripe 대시보드에서 스테이블코인 통합 관리',
                  '수천 개 기업 고객 활성 사용 중',
                  '기존 Stripe 가맹점 즉시 연동 가능',
                  'USDC 페이아웃 글로벌 출시 완료',
                ] : [
                  '150+ countries supported for stablecoin accounts',
                  'USDC/USDT processing across 8+ chains',
                  'Unified management in Stripe dashboard',
                  'Thousands of active enterprise customers',
                  'Instant integration for existing Stripe merchants',
                  'USDC payouts globally launched',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-green-500 shrink-0">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-3">{isKo ? '남은 한계' : 'Remaining limitations'}</div>
              <div className="space-y-2">
                {[
                  { item: isKo ? '자기 보관 없음 — Stripe가 키 관리' : 'No self-custody — Stripe holds the keys', level: isKo ? '구조적' : 'Structural' },
                  { item: isKo ? 'DeFi 수익 없음 — 유휴 USDC가 일하지 않음' : 'No DeFi yield — idle USDC doesn\'t work', level: isKo ? '중요' : 'Important' },
                  { item: isKo ? '일부 국가 법정화폐 환전 느림' : 'Slow fiat conversion in some countries', level: isKo ? '개선 중' : 'Improving' },
                  { item: isKo ? 'Stripe 의존성 — 중단 시 결제 불가' : 'Stripe dependency — outage means no payments', level: isKo ? '리스크' : 'Risk' },
                  { item: isKo ? '가스비 추상화가 불완전 (일부 체인)' : 'Gas abstraction incomplete (some chains)', level: isKo ? '개선 중' : 'Improving' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-red-400 shrink-0">•</span>
                    <span className="text-slate-600">{item.item}</span>
                    <span className="text-xs text-slate-400 ml-auto shrink-0">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: walits와의 관계 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '11. walits와 Stripe Tempo — 왜 Tempo의 보편화가 중요한가?' : '11. walits and Stripe Tempo — Why Tempo\'s Adoption Matters'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'walits는 Ethereum과 Base 위에서 USDC를 다루는 자기 보관 지갑이다. Stripe Tempo와 직접 경쟁하지 않는다 — 포지션이 다르다. 그런데도 Tempo가 빨리 보편화될수록 walits에게 좋은 이유가 있다.'
              : 'walits is a self-custody wallet handling USDC on Ethereum and Base. It doesn\'t directly compete with Stripe Tempo — they occupy different positions. Yet there are clear reasons why faster Tempo adoption benefits walits.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: isKo ? 'USDC 유통량 폭발 = walits 가치 상승' : 'USDC circulation explosion = walits value up',
                desc: isKo
                  ? 'Stripe가 3M+ 가맹점에 USDC 결제를 보급하면, 시장 전체의 USDC 유통량이 급증한다. USDC가 범용 결제 수단이 될수록 USDC 전문 지갑인 walits의 필요성도 커진다. 더 많은 사람이 USDC를 받고, 더 많은 사람이 USDC를 관리할 지갑이 필요해진다.'
                  : 'When Stripe rolls out USDC payments to 3M+ merchants, total USDC circulation surges. The more USDC becomes a universal payment method, the greater the need for a USDC-specialized wallet like walits.',
                icon: '📈',
              },
              {
                title: isKo ? 'Base 생태계 강화 = walits 인프라 강화' : 'Base ecosystem growth = walits infrastructure strengthened',
                desc: isKo
                  ? 'Tempo는 Base를 핵심 레일 중 하나로 사용한다. Stripe가 Base 위의 USDC 거래를 늘릴수록 Base 생태계가 성숙하고, Base 위에서 돌아가는 walits의 DeFi 수익 전략(Aave, Morpho 등)도 더 안정적이고 유동적이 된다.'
                  : 'Tempo uses Base as one of its core rails. As Stripe drives more USDC transactions on Base, the Base ecosystem matures — making walits\' DeFi yield strategies (Aave, Morpho, etc.) more stable and liquid.',
                icon: '⚡',
              },
              {
                title: isKo ? '가스비 문제 완화' : 'Gas fee problem easing',
                desc: isKo
                  ? 'walits의 가장 큰 UX 문제 중 하나는 가스비다. Tempo가 Base 트래픽을 늘리면 Base의 생태계 투자(인프라, 가스 최적화)가 가속된다. 장기적으로 온체인 수수료가 더 낮아지는 방향으로 작용한다. Tempo 자체가 Base 위에서 가스를 추상화하는 방향으로도 가고 있다.'
                  : 'One of walits\' biggest UX challenges is gas fees. As Tempo drives more Base traffic, ecosystem investment in infrastructure and gas optimization accelerates. Over time, this pushes on-chain fees lower.',
                icon: '⛽',
              },
              {
                title: isKo ? '기업 고객 유입 경로' : 'Enterprise customer onboarding path',
                desc: isKo
                  ? 'Stripe Tempo를 쓰는 기업 고객이 "USDC를 더 잘 관리하고 싶다", "유휴 USDC에서 수익을 내고 싶다"고 느끼면, walits 기업용 지갑이 그 다음 단계다. Tempo는 스테이블코인을 기업에 소개하는 첫 번째 레이어, walits는 그 자산을 더 잘 다루는 레이어다.'
                  : 'When enterprise customers using Stripe Tempo want to better manage their USDC or earn yield on idle funds, walits enterprise wallets are the natural next step. Tempo introduces stablecoins to businesses; walits is the layer that maximizes what those assets can do.',
                icon: '🏢',
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

          <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-3">
              {isKo ? 'Tempo + walits = 서로 다른 레이어, 같은 방향' : 'Tempo + walits = Different layers, same direction'}
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-bold mb-2">Stripe Tempo</div>
                <ul className="space-y-1 text-violet-100 text-xs">
                  <li>• {isKo ? '비즈니스용 스테이블코인 결제 레일' : 'Stablecoin payment rail for businesses'}</li>
                  <li>• {isKo ? '법정화폐 ↔ 스테이블코인 환전' : 'Fiat ↔ stablecoin conversion'}</li>
                  <li>• {isKo ? '기존 Stripe 인프라 통합' : 'Integration with existing Stripe infrastructure'}</li>
                  <li>• {isKo ? '수탁형 (Stripe 관리)' : 'Custodial (Stripe manages)'}</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="font-bold mb-2">walits</div>
                <ul className="space-y-1 text-blue-100 text-xs">
                  <li>• {isKo ? 'USDC 자기 보관 + DeFi 수익' : 'USDC self-custody + DeFi yield'}</li>
                  <li>• {isKo ? '유휴 USDC 자동 운용 (Idle Time Detector)' : 'Auto-deploy idle USDC (Idle Time Detector)'}</li>
                  <li>• {isKo ? 'AI Agent 자동 결제' : 'AI Agent auto-payments'}</li>
                  <li>• {isKo ? '비수탁형 (유저 보관)' : 'Non-custodial (user holds)'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-100 pt-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="font-black text-slate-900 text-lg mb-2">
              {isKo ? 'walits — USDC가 일하는 지갑' : 'walits — A wallet where USDC works for you'}
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {isKo
                ? 'Stripe Tempo가 기업에 USDC를 소개한다면, walits는 그 USDC가 24시간 수익을 내도록 만든다. Ethereum과 Base 위에서, 자기 보관으로, DeFi 수익과 함께.'
                : 'If Stripe Tempo introduces USDC to businesses, walits makes that USDC earn yield 24/7. On Ethereum and Base, self-custody, with DeFi yield.'}
            </p>
            <Link href="/#solutions" className="inline-block bg-violet-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
              {isKo ? '서비스 알아보기 →' : 'Learn more →'}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
