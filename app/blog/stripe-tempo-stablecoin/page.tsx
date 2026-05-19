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
              ? 'Stripe Tempo — 결제 특화 L1 블록체인 완전 해부'
              : 'Stripe Tempo — Complete Deep Dive into the Payments-First L1 Blockchain'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'Stripe와 Paradigm이 직접 만든 결제 특화 L1. 기존 블록체인이 결제에 맞지 않아서 새 체인을 만들었다. 100K+ TPS, 가스 토큰 없음, EVM 호환, AI 에이전트 결제. Visa·OpenAI·Shopify가 설계에 참여했고 2026년 3월 메인넷이 떴다.'
              : 'A payments-first L1 built from scratch by Stripe and Paradigm because existing blockchains weren\'t fit for payments. 100K+ TPS, no gas token, EVM-compatible, AI agent payments. Visa, OpenAI, and Shopify helped design it. Mainnet launched March 2026.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 5월' : 'May 2026'}</span>
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

        {/* Section 1: 왜 새 체인을 만들었나 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 왜 Stripe와 Paradigm은 새 L1을 직접 만들었나' : '1. Why Stripe and Paradigm Built a New L1 From Scratch'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Stripe는 연간 $1조 이상을 처리하는 결제 인프라 회사다. 내부적으로 초당 10,000건 이상의 피크 트래픽을 처리한다. 스테이블코인 수요가 커지면서 Stripe는 기존 블록체인을 결제 레일로 써보려 했다. 결론은 간단했다 — 기존 블록체인은 결제에 맞지 않는다.'
              : 'Stripe processes over $1 trillion annually, with peak internal traffic exceeding 10,000 transactions per second. As stablecoin demand grew, Stripe tried using existing blockchains as payment rails. The conclusion was simple: existing blockchains aren\'t built for payments.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? 'Patrick Collison (Stripe CEO)' : 'Patrick Collison, Stripe CEO'}</div>
            <p className="text-slate-200 text-sm leading-relaxed italic">
              {isKo
                ? '"스테이블코인과 크립토의 사용이 Stripe, Bridge, Privy 전반에서 늘어나면서, 기존 블록체인이 이런 사용 사례에 최적화되어 있지 않다는 것을 발견했다. 예를 들어 서로 다른 스테이블코인 플랫폼 중립성을 확보하는 것, 그리고 결제 수수료를 어떻게 처리할지가 중요한데 기존 체인은 이를 해결하지 못한다."'
                : '"As the use of stablecoins and crypto grows across Stripe, Bridge, and Privy, we found that existing blockchains are not optimized for these use cases — for example, platform neutrality with respect to different stablecoins, and how to handle payment fees."'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                problem: isKo ? '가스 토큰 문제' : 'Gas token problem',
                desc: isKo ? 'ETH·SOL 같은 변동성 자산으로 수수료를 내야 한다. 결제 서비스에 변동성 자산 의존은 치명적이다.' : 'Fees must be paid in volatile assets like ETH or SOL. Volatile dependencies are fatal for payment services.',
                color: 'bg-red-50 border-red-200 text-red-800',
              },
              {
                problem: isKo ? '스테이블코인 중립성 부재' : 'No stablecoin neutrality',
                desc: isKo ? 'USDC냐 USDT냐를 체인 레벨에서 강요받는다. 결제 인프라는 특정 스테이블코인에 중립적이어야 한다.' : 'Chains force a choice between USDC and USDT at the protocol level. Payment infrastructure must be stablecoin-neutral.',
                color: 'bg-amber-50 border-amber-200 text-amber-800',
              },
              {
                problem: isKo ? '결제 최적화 부재' : 'No payment optimization',
                desc: isKo ? '메모, 배치 결제, 예약 결제, 정책 컴플라이언스가 프로토콜 레벨에 없다. DeFi용 체인에 결제를 억지로 구겨 넣는 꼴이다.' : 'No protocol-level memos, batch payments, scheduled payments, or policy compliance. Forcing payments into DeFi-optimized chains.',
                color: 'bg-orange-50 border-orange-200 text-orange-800',
              },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="font-bold text-sm mb-2">{item.problem}</div>
                <p className="text-xs leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed">
            {isKo
              ? '해결책은 기존 체인을 수정하거나 L2를 올리는 것이 아니었다. 결제를 위해 처음부터 설계한 L1을 직접 만드는 것이었다. Stripe의 Patrick Collison과 Paradigm의 Matt Huang이 손을 잡았다.'
              : 'The solution wasn\'t to patch an existing chain or build an L2. It was to build a new L1 designed from the ground up for payments. Stripe\'s Patrick Collison and Paradigm\'s Matt Huang joined forces.'}
          </p>
        </section>

        {/* Section 2: Stripe 크립토 역사와 Bridge */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. Stripe의 크립토 역사와 Bridge.xyz 인수' : '2. Stripe\'s Crypto History and the Bridge.xyz Acquisition'}
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-slate-900 mb-4">{isKo ? 'Stripe × 크립토 연표' : 'Stripe × crypto timeline'}</div>
            <div className="space-y-3">
              {[
                { year: '2014', event: isKo ? 'Bitcoin 결제 지원 시작 — 가맹점에 BTC 수취 허용' : 'Launch Bitcoin payments — merchants can accept BTC' },
                { year: '2018', event: isKo ? 'Bitcoin 지원 종료 — "결제 수단으로 부적합 (변동성)"' : 'Drop Bitcoin — "not suitable as payment (volatility)"' },
                { year: '2024.03', event: isKo ? 'USDC 페이아웃 재출시 — 크리에이터·기업에 USDC로 지급' : 'USDC payouts relaunch — pay creators and businesses in USDC' },
                { year: '2024.10', event: isKo ? 'Bridge.xyz 인수 ($1.1B) — Stripe 역사상 최대 인수' : 'Acquire Bridge.xyz ($1.1B) — largest acquisition in Stripe history' },
                { year: '2024.11', event: isKo ? '결제창에 USDC·USDT 수취 기능 추가 (Privy 지갑 통합)' : 'Add USDC/USDT acceptance to checkout (Privy wallet integration)' },
                { year: '2025.08', event: isKo ? 'Matt Huang (Paradigm 공동 창업자), Tempo CEO로 발표' : 'Matt Huang (Paradigm co-founder) announced as Tempo CEO' },
                { year: '2025.09', event: isKo ? 'Tempo 공식 발표 — 결제 특화 L1 블록체인' : 'Tempo officially announced — payments-first L1 blockchain' },
                { year: '2025.10', event: isKo ? '$500M Series A ($5B 밸류에이션) — Thrive Capital, Greenoaks, Sequoia' : '$500M Series A at $5B valuation — Thrive Capital, Greenoaks, Sequoia' },
                { year: '2025.12', event: isKo ? '공개 테스트넷 런칭. UBS, Mastercard, Kalshi 파트너 추가' : 'Public testnet launch. UBS, Mastercard, Kalshi added as partners' },
                { year: '2026.03', event: isKo ? '메인넷 런칭 + MPP (Machine Payment Protocol) 공개' : 'Mainnet launch + MPP (Machine Payment Protocol) released' },
                { year: '2026.04', event: isKo ? 'Visa, Tempo 밸리데이터 노드 공식 런칭' : 'Visa officially launches validator node on Tempo' },
                { year: '2026.05', event: isKo ? 'World Liberty Financial, USD1 스테이블코인 Tempo 네이티브 출시' : 'World Liberty Financial launches USD1 stablecoin natively on Tempo' },
              ].map((row, i) => (
                <div key={i} className="flex gap-4 text-sm">
                  <span className="font-mono text-violet-600 font-bold w-24 shrink-0">{row.year}</span>
                  <span className="text-slate-600">{row.event}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
            <div className="font-bold text-blue-800 mb-3">{isKo ? 'Bridge.xyz vs Tempo — 역할 구분' : 'Bridge.xyz vs Tempo — Role Distinction'}</div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isKo
                ? 'Bridge와 Tempo는 모두 Stripe 생태계에 속하지만 서로 다른 레이어를 담당한다. Bridge를 "Tempo의 미들웨어"로 읽으면 안 된다. 이 둘은 상호 보완적인 별개의 제품이다.'
                : 'Bridge and Tempo both belong to the Stripe ecosystem but serve different layers. Don\'t read Bridge as "Tempo\'s middleware" — they are separate, complementary products.'}
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                { layer: 'Privy', role: isKo ? '지갑 레이어 — 엔드유저 키 관리, 임베디드 지갑' : 'Wallet layer — end-user key management, embedded wallets', color: 'bg-white border-blue-200' },
                { layer: 'Bridge.xyz', role: isKo ? '스테이블코인 컴플라이언스·뱅킹 레이어 — KYC/AML, 법정화폐 환전, 150개국 규제 처리' : 'Stablecoin compliance & banking layer — KYC/AML, fiat conversion, 150-country compliance', color: 'bg-white border-blue-200' },
                { layer: 'Tempo', role: isKo ? '온체인 결제 레이어 — 블록체인 장부, 최종 정산, 프로토콜' : 'On-chain payment layer — blockchain ledger, final settlement, protocol', color: 'bg-violet-50 border-violet-300' },
              ].map((item, i) => (
                <div key={i} className={`border rounded-lg p-3 ${item.color}`}>
                  <div className="font-bold text-slate-800 text-sm mb-1">{item.layer}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Tempo L1 — 무엇인가 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. Tempo L1 — 정확히 무엇인가?' : '3. Tempo L1 — What Exactly Is It?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Tempo는 결제 특화 목적으로 처음부터 설계된 독립적인 L1 블록체인이다. EVM과 호환되지만 이더리움의 복사본이 아니다. 기존 체인에서 결제에 불필요한 것을 제거하고, 결제에 필수적인 것을 프로토콜 레벨에 내장했다.'
              : 'Tempo is an independent L1 blockchain designed from scratch specifically for payments. It\'s EVM-compatible but not a copy of Ethereum. It strips out what\'s unnecessary for payments from existing chains and bakes what\'s essential directly into the protocol.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: isKo ? 'Tempo는 이것이다' : 'What Tempo IS',
                items: isKo ? [
                  '결제 특화 L1 블록체인 (독립 네트워크)',
                  'EVM 호환 (Ethereum 툴 그대로 사용 가능)',
                  'Reth SDK 기반 고성능 실행 레이어',
                  '스테이블코인 전용 결제 인프라',
                  'AI 에이전트 자율 결제를 위한 MPP 프로토콜',
                  'Stripe + Paradigm 공동 창립, 독립 기업',
                ] : [
                  'Payments-first L1 blockchain (independent network)',
                  'EVM-compatible (use existing Ethereum tooling)',
                  'Reth SDK-based high-performance execution layer',
                  'Stablecoin-dedicated payment infrastructure',
                  'MPP protocol for autonomous AI agent payments',
                  'Co-founded by Stripe + Paradigm, independent company',
                ],
                color: 'bg-green-50 border-green-200',
                textColor: 'text-green-800',
                icon: '✓',
                iconColor: 'text-green-500',
              },
              {
                title: isKo ? 'Tempo는 이것이 아니다' : 'What Tempo is NOT',
                items: isKo ? [
                  '범용 스마트컨트랙트 플랫폼 (DeFi 포커스 아님)',
                  'Stripe의 API 미들웨어 레이어',
                  'Bridge.xyz의 연장선',
                  'Ethereum L2 (독립 L1)',
                  '퍼블릭 크립토 투기 플랫폼',
                  '기존 스테이블코인 (새 스테이블코인 발행하지 않음)',
                ] : [
                  'General-purpose smart contract platform (not DeFi-focused)',
                  'Stripe\'s API middleware layer',
                  'An extension of Bridge.xyz',
                  'Ethereum L2 (it\'s an independent L1)',
                  'Public crypto speculation platform',
                  'A new stablecoin (doesn\'t issue its own)',
                ],
                color: 'bg-red-50 border-red-200',
                textColor: 'text-red-800',
                icon: '✗',
                iconColor: 'text-red-400',
              },
            ].map((col, i) => (
              <div key={i} className={`border rounded-xl p-5 ${col.color}`}>
                <div className={`font-bold mb-3 ${col.textColor}`}>{col.title}</div>
                <div className="space-y-2">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className={`shrink-0 ${col.iconColor}`}>{col.icon}</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 기술 아키텍처 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. 기술 아키텍처 — Reth, TIP-20, FeeAMM, TIP-403, MPP' : '4. Technical Architecture — Reth, TIP-20, FeeAMM, TIP-403, MPP'}
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                name: 'Reth SDK + Simplex Consensus',
                badge: isKo ? '실행 레이어' : 'Execution layer',
                badgeColor: 'bg-blue-100 text-blue-700',
                desc: isKo
                  ? 'Rust 기반 EVM 실행 클라이언트 Reth를 기반으로, Commonware의 Simplex 합의 알고리즘을 결합했다. 목표 처리량 100,000+ TPS, 최종성 ~0.6초. EVM 호환이므로 기존 Solidity 스마트컨트랙트, ethers.js, Hardhat 등을 그대로 사용할 수 있다. Osaka EVM 하드포크를 타겟으로 한다.'
                  : 'Built on Reth, the Rust-based EVM execution client, combined with Commonware\'s Simplex consensus algorithm. Target throughput: 100,000+ TPS, finality ~0.6 seconds. EVM-compatible means existing Solidity contracts, ethers.js, and Hardhat work without modification. Targets the Osaka EVM hard fork.',
              },
              {
                name: 'TIP-20 토큰 스탠다드',
                badge: isKo ? '토큰 표준' : 'Token standard',
                badgeColor: 'bg-violet-100 text-violet-700',
                desc: isKo
                  ? 'TIP-20은 Tempo의 결제 최적화 토큰 표준으로, Ethereum ERC-20과 호환되면서 결제에 필수적인 기능을 추가했다: (1) 결제 전용 블록 공간 확보 (payment lanes), (2) 온체인 메모 — 인보이스 번호·결제 참조 등을 거래에 포함, (3) 배치 결제 — 급여·정산에 활용, (4) 예약 결제 — 구독·자동이체, (5) TIP-403 정책 레지스트리와 연동. USDC, USDT 등 기존 스테이블코인은 TIP-20으로 네이티브 발행 가능하다.'
                  : 'TIP-20 is Tempo\'s payment-optimized token standard, ERC-20 compatible but extended with payment essentials: (1) dedicated block space for token transfers (payment lanes), (2) on-chain memos — attach invoice numbers and payment references to transactions, (3) batch payments for payroll and settlements, (4) scheduled payments for subscriptions, (5) integration with the TIP-403 Policy Registry. Existing stablecoins like USDC and USDT can be issued natively as TIP-20.',
              },
              {
                name: 'FeeAMM (Enshrined AMM)',
                badge: isKo ? '수수료 메커니즘' : 'Fee mechanism',
                badgeColor: 'bg-green-100 text-green-700',
                desc: isKo
                  ? 'Tempo의 가장 중요한 혁신 중 하나. 네이티브 가스 토큰이 없다. 대신 TIP-20 스테이블코인 어떤 것으로도 트랜잭션 수수료를 낼 수 있다. FeeAMM은 프로토콜 레벨에 내장된 AMM으로, 사용자가 USDC로 수수료를 내면 FeeAMM이 자동으로 밸리데이터가 선호하는 스테이블코인으로 환전해 준다. 사용자도, 개발자도 수수료용 별도 토큰을 보유할 필요가 없다. 진정한 가스리스 UX가 가능하다.'
                  : 'One of Tempo\'s most important innovations: no native gas token. Instead, transaction fees can be paid in any TIP-20 stablecoin. The FeeAMM is an AMM enshrined at the protocol level — if a user pays fees in USDC, the FeeAMM automatically converts to the validator\'s preferred stablecoin. Neither users nor developers need to hold a separate fee token. True gasless UX becomes possible.',
              },
              {
                name: 'TIP-403 Policy Registry',
                badge: isKo ? '컴플라이언스' : 'Compliance',
                badgeColor: 'bg-amber-100 text-amber-700',
                desc: isKo
                  ? '스테이블코인 발행자가 프로토콜 레벨에서 화이트리스트/블랙리스트 정책을 적용할 수 있는 온체인 정책 레지스트리다. 예를 들어 Circle이 USDC를 Tempo에 TIP-20으로 발행할 때, OFAC 제재 주소로의 전송을 프로토콜 레벨에서 자동 차단할 수 있다. 기관 투자자·규제 기관이 요구하는 컴플라이언스를 체인 레벨에서 구현한다.'
                  : 'An on-chain policy registry that allows stablecoin issuers to enforce whitelist or blacklist policies at the protocol level. For example, when Circle issues USDC as TIP-20 on Tempo, transfers to OFAC-sanctioned addresses can be automatically blocked at the protocol level. Implements the compliance requirements of institutional investors and regulators directly on-chain.',
              },
              {
                name: 'MPP (Machine Payment Protocol)',
                badge: isKo ? 'AI 에이전트' : 'AI agents',
                badgeColor: 'bg-pink-100 text-pink-700',
                desc: isKo
                  ? 'Stripe와 Tempo가 공동 개발한 AI 에이전트 결제 오픈 스탠다드. "결제를 위한 HTTP"라고 불린다. HTTP 402 "Payment Required" 상태 코드를 활용해, AI 에이전트가 웹 서비스에 자율적으로 결제할 수 있는 표준 프로토콜이다. 개발자는 에이전트 지갑에 자금을 넣고 지출 한도를 설정하면, 에이전트가 사람 개입 없이 API 호출·서비스 이용 비용을 자동으로 결제한다. mpp.dev에 오픈 스탠다드로 공개되어 있다.'
                  : 'An open standard for AI agent payments co-developed by Stripe and Tempo. Called "HTTP for payments." Uses the HTTP 402 "Payment Required" status code to create a standard protocol for AI agents to autonomously pay for web services. Developers fund an agent wallet and set spending limits — the agent then automatically pays for API calls and service usage without human intervention. Published as an open standard at mpp.dev.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 flex items-center gap-3">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 text-xs mb-4">{isKo ? 'Tempo 아키텍처 스택' : 'Tempo architecture stack'}</div>
            <div className="space-y-1 text-xs">
              <div className="text-pink-400 font-bold">{isKo ? '[ AI 에이전트 레이어 ]' : '[ AI Agent Layer ]'}</div>
              <div className="text-slate-400 pl-4">MPP (Machine Payment Protocol) — HTTP 402 기반 자율 결제</div>
              <div className="text-slate-600 pl-4">↕</div>
              <div className="text-violet-400 font-bold">{isKo ? '[ 애플리케이션 레이어 ]' : '[ Application Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? '지갑 앱 / 결제 서비스 / Stripe 대시보드 / EVM DApp' : 'Wallet apps / Payment services / Stripe Dashboard / EVM DApps'}</div>
              <div className="text-slate-600 pl-4">↕ JSON-RPC (EVM 호환)</div>
              <div className="text-amber-400 font-bold">{isKo ? '[ TIP-20 토큰 + TIP-403 정책 레이어 ]' : '[ TIP-20 Token + TIP-403 Policy Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? 'USDC/USDT/USD1 등 스테이블코인 — 결제 레인, 메모, 배치, 컴플라이언스' : 'USDC/USDT/USD1 stablecoins — payment lanes, memos, batches, compliance'}</div>
              <div className="text-slate-600 pl-4">↕</div>
              <div className="text-green-400 font-bold">{isKo ? '[ FeeAMM — 가스리스 수수료 레이어 ]' : '[ FeeAMM — Gasless Fee Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? '모든 스테이블코인으로 수수료 납부 → 자동 환전 → 밸리데이터 지급' : 'Any stablecoin for fees → auto-convert → pay validator'}</div>
              <div className="text-slate-600 pl-4">↕</div>
              <div className="text-blue-400 font-bold">{isKo ? '[ Reth SDK + Simplex 합의 — L1 실행 레이어 ]' : '[ Reth SDK + Simplex Consensus — L1 Execution Layer ]'}</div>
              <div className="text-slate-400 pl-4">{isKo ? '100K+ TPS 목표 / ~0.6초 최종성 / EVM (Osaka 하드포크) / 밸리데이터: Visa, Stripe, Zodia Custody' : '100K+ TPS target / ~0.6s finality / EVM (Osaka HF) / Validators: Visa, Stripe, Zodia Custody'}</div>
            </div>
          </div>
        </section>

        {/* Section 5: 파트너와 자금 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. 누가 참여했나 — 파트너·밸리데이터·자금' : '5. Who\'s Involved — Partners, Validators, and Funding'}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
              <div className="font-bold text-violet-800 mb-3">{isKo ? '설계 파트너 (2025.09 발표)' : 'Design Partners (announced Sep 2025)'}</div>
              <p className="text-slate-500 text-xs mb-3">{isKo ? '아키텍처 설계에 직접 인풋을 준 기업들' : 'Companies that directly contributed to architecture design'}</p>
              <div className="flex flex-wrap gap-1.5">
                {['Anthropic', 'OpenAI', 'Visa', 'Shopify', 'Deutsche Bank', 'Standard Chartered', 'Revolut', 'Nubank', 'DoorDash', 'Mercury', 'Lead Bank', 'Coupang'].map((p) => (
                  <span key={p} className="text-xs bg-white border border-violet-200 text-slate-700 px-2 py-0.5 rounded">{p}</span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-bold text-blue-800 mb-3">{isKo ? '테스트넷 파트너 (2025.12 추가)' : 'Testnet Partners (added Dec 2025)'}</div>
              <p className="text-slate-500 text-xs mb-3">{isKo ? '공개 테스트넷에 합류한 추가 파트너' : 'Partners joining the public testnet'}</p>
              <div className="flex flex-wrap gap-1.5">
                {['UBS', 'Mastercard', 'Kalshi', 'Ramp', 'Klarna'].map((p) => (
                  <span key={p} className="text-xs bg-white border border-blue-200 text-slate-700 px-2 py-0.5 rounded">{p}</span>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-3">{isKo ? '운영 밸리데이터 (메인넷)' : 'Active Validators (mainnet)'}</div>
              <p className="text-slate-500 text-xs mb-3">{isKo ? '실제 블록 생성에 참여하는 밸리데이터' : 'Validators actively producing blocks'}</p>
              <div className="flex flex-wrap gap-1.5">
                {['Visa', 'Stripe', 'Zodia Custody (Standard Chartered)'].map((p) => (
                  <span key={p} className="text-xs bg-white border border-green-200 text-slate-700 px-2 py-0.5 rounded">{p}</span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-2">{isKo ? 'Visa: 2026년 4월 14일 공식 발표' : 'Visa: officially announced April 14, 2026'}</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '자금 조달 현황' : 'Funding status'}</div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: isKo ? '시리즈 A 조달액' : 'Series A raised', value: '$500M', sub: isKo ? '2025년 10월' : 'October 2025' },
                { label: isKo ? '밸류에이션' : 'Valuation', value: '$5B', sub: isKo ? 'Thrive Capital·Greenoaks·Sequoia 리드' : 'Led by Thrive Capital, Greenoaks, Sequoia' },
                { label: isKo ? 'Stripe·Paradigm 출자' : 'Stripe & Paradigm invested', value: isKo ? '없음' : 'None', sub: isKo ? '설립자로서 지분 보유 (현금 출자 없음)' : 'Hold equity as founders (no cash invested)' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-violet-400 mb-1">{item.value}</div>
                  <div className="text-white text-sm font-semibold">{item.label}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="font-bold text-amber-800 mb-2">{isKo ? 'CEO: Matt Huang' : 'CEO: Matt Huang'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? 'Paradigm 공동 창업자 겸 Managing Partner이면서 동시에 Tempo CEO를 맡고 있다. Stripe 이사회 멤버이기도 하다 (2021년부터). Fortune이 단독 보도했고 Paradigm 공식 블로그에서 "Tempo의 창업자 겸 CEO"로 소개됐다.'
                : 'Co-founder and Managing Partner of Paradigm while simultaneously serving as Tempo\'s CEO. Also a Stripe board member since 2021. Reported exclusively by Fortune and introduced as "founder and CEO of Tempo" in the official Paradigm blog post.'}
            </p>
          </div>
        </section>

        {/* Section 6: 실제 수치와 현실 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 목표 수치 vs 메인넷 초기 현실' : '6. Target Numbers vs Early Mainnet Reality'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Tempo에 대해 정직하게 말할 필요가 있다. 공식 발표 수치와 메인넷 초기 실제 사용량 사이에는 간극이 있다. 이는 기술 실패가 아니라 초기 채택 단계의 자연스러운 현상이다.'
              : 'We need to be honest about Tempo. There\'s a gap between the official announced numbers and actual early mainnet usage. This isn\'t a technical failure — it\'s the natural state of early adoption.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="font-bold text-slate-900 mb-4">{isKo ? '공식 발표 목표 수치' : 'Official target numbers'}</div>
              <div className="space-y-3">
                {[
                  { metric: 'TPS', target: '100,000+', note: isKo ? '이론적 최대 처리량' : 'Theoretical maximum throughput' },
                  { metric: isKo ? '최종성 (Finality)' : 'Finality', target: '~0.6초', note: isKo ? 'Simplex 합의 기준' : 'Based on Simplex consensus' },
                  { metric: isKo ? '수수료' : 'Fee', target: '<$0.001', note: isKo ? '목표 트랜잭션 비용' : 'Target transaction cost' },
                  { metric: isKo ? '가스 토큰' : 'Gas token', target: isKo ? '없음' : 'None', note: isKo ? '스테이블코인으로 수수료 납부' : 'Pay fees in any stablecoin' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{row.metric}</span>
                    <div className="text-right">
                      <div className="font-bold text-green-700">{row.target}</div>
                      <div className="text-xs text-slate-400">{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <div className="font-bold text-orange-900 mb-4">{isKo ? '메인넷 초기 실제 사용량' : 'Early mainnet actual usage'}</div>
              <div className="space-y-3">
                {[
                  { metric: isKo ? '실제 TPS (런칭 초기)' : 'Actual TPS (early launch)', value: '~2.5', note: isKo ? 'Token Terminal 데이터 기준' : 'Based on Token Terminal data' },
                  { metric: isKo ? '비교: Bitcoin 평균 TPS' : 'Comparison: Bitcoin avg TPS', value: '~5.1', note: isKo ? 'Tempo가 Bitcoin보다 낮다는 보도 존재' : 'Reports that Tempo was lower than Bitcoin' },
                  { metric: isKo ? '메인넷 런칭일' : 'Mainnet launch date', value: '2026.03.18', note: isKo ? '메인넷 + MPP 동시 공개' : 'Mainnet + MPP released together' },
                  { metric: isKo ? '평가' : 'Assessment', value: isKo ? '초기 단계' : 'Early stage', note: isKo ? '채택 진행 중, 기술적 문제 아님' : 'Adoption underway, not a technical failure' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{row.metric}</span>
                    <div className="text-right">
                      <div className="font-bold text-orange-700">{row.value}</div>
                      <div className="text-xs text-slate-500">{row.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? '초기 TPS가 낮은 것은 인프라 성능 문제가 아니라 아직 Tempo 위에 올라온 사용자와 서비스가 적기 때문이다. 밸리데이터도 아직 Visa·Stripe·Zodia Custody 세 곳뿐이다. Visa가 2026년 4월에 밸리데이터를 시작했고, World Liberty Financial이 5월에 USD1을 Tempo에 네이티브 런칭하면서 생태계가 실질적으로 채워지기 시작했다.'
                : 'The low early TPS reflects not infrastructure performance issues but the simple fact that few users and services have yet built on Tempo. There are only three validators: Visa, Stripe, and Zodia Custody. Visa launched its validator in April 2026, and World Liberty Financial natively launching USD1 in May 2026 marks the beginning of real ecosystem fill-in.'}
            </p>
          </div>
        </section>

        {/* Section 7: SWIFT vs Tempo vs 직접 온체인 */}
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
                  <th className="text-left px-4 py-3 font-semibold text-violet-300">Tempo L1</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-300 rounded-tr-xl">{isKo ? '직접 온체인 (Base)' : 'Direct on-chain (Base)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { item: isKo ? '처리 속도' : 'Speed', swift: '2–5영업일', tempo: '~0.6초', chain: '~2초' },
                  { item: isKo ? '목표 처리량' : 'Target TPS', swift: '수백 TPS', tempo: '100K+ TPS', chain: '~2K TPS' },
                  { item: isKo ? '수수료' : 'Fee', swift: '$25–50 + 1–3% FX', tempo: '<$0.001', chain: '~$0.001' },
                  { item: isKo ? '가스 토큰' : 'Gas token', swift: '해당없음', tempo: isKo ? '없음 (FeeAMM)' : 'None (FeeAMM)', chain: isKo ? 'ETH 필요' : 'ETH required' },
                  { item: isKo ? '24/7 운영' : '24/7 operation', swift: '❌', tempo: '✅', chain: '✅' },
                  { item: isKo ? 'EVM 호환' : 'EVM-compatible', swift: '❌', tempo: '✅', chain: '✅' },
                  { item: isKo ? '컴플라이언스 내장' : 'Built-in compliance', swift: '✅ (은행)', tempo: '✅ (TIP-403)', chain: '❌' },
                  { item: isKo ? 'AI 에이전트 결제' : 'AI agent payments', swift: '❌', tempo: '✅ (MPP)', chain: '제한적' },
                  { item: isKo ? 'DeFi 수익' : 'DeFi yield', swift: '❌', tempo: '초기 단계', chain: '✅' },
                  { item: isKo ? '자기 보관' : 'Self-custody', swift: '❌', tempo: '✅', chain: '✅' },
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
        </section>

        {/* Section 8: 현황과 한계 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 2026년 5월 현황과 남은 과제' : '8. May 2026 Status and Outstanding Challenges'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="font-bold text-slate-900 mb-3">{isKo ? '달성한 것' : 'What\'s been achieved'}</div>
              <div className="space-y-2">
                {(isKo ? [
                  'L1 메인넷 런칭 완료 (2026.03.18)',
                  'EVM 호환 — 기존 Solidity 에코시스템 호환',
                  '가스 토큰 없는 스테이블코인 수수료 구현',
                  'Visa·Stripe·Zodia Custody 밸리데이터 운영 중',
                  'MPP 오픈 스탠다드 공개 (AI 에이전트 결제)',
                  'USD1 (World Liberty Financial) 네이티브 런칭',
                  'TIP-20·TIP-403 토큰 표준 명세 완성',
                  '$500M 조달 완료, $5B 밸류에이션',
                ] : [
                  'L1 mainnet launched (March 18, 2026)',
                  'EVM-compatible — existing Solidity ecosystem works',
                  'Gasless stablecoin fee system live',
                  'Visa, Stripe, Zodia Custody validators running',
                  'MPP open standard released (AI agent payments)',
                  'USD1 (World Liberty Financial) natively launched',
                  'TIP-20 and TIP-403 token standards finalized',
                  '$500M raised, $5B valuation',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-green-500 shrink-0">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold text-slate-900 mb-3">{isKo ? '남은 과제' : 'Outstanding challenges'}</div>
              <div className="space-y-2">
                {[
                  { item: isKo ? '실제 TPS 저조 — 초기 사용량 ~2.5 TPS에 불과' : 'Low actual TPS — early usage only ~2.5 TPS', level: isKo ? '채택 과제' : 'Adoption' },
                  { item: isKo ? '밸리데이터 수 적음 — 탈중앙화 수준 낮음' : 'Few validators — low decentralization level', level: isKo ? '구조적' : 'Structural' },
                  { item: isKo ? 'DeFi 생태계 부재 — 결제 전용 설계로 DeFi 얇음' : 'Thin DeFi ecosystem — payment-focused design limits DeFi', level: isKo ? '설계 트레이드오프' : 'Design trade-off' },
                  { item: isKo ? '한국 등 일부 국가 규제 접근성 미확인' : 'Regulatory access in Korea and some countries unconfirmed', level: isKo ? '규제' : 'Regulatory' },
                  { item: isKo ? 'USDC·USDT TIP-20 네이티브 발행 공식 확인 필요' : 'USDC/USDT TIP-20 native issuance officially unconfirmed', level: isKo ? '확인 필요' : 'Pending' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-orange-400 shrink-0">•</span>
                    <span className="text-slate-600 flex-1">{item.item}</span>
                    <span className="text-xs text-slate-400 shrink-0">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: walits + Tempo */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '9. walits + Tempo — 가스리스 멀티 스테이블코인 지갑의 미래' : '9. walits + Tempo — The Future of a Gasless Multi-Stablecoin Wallet'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'walits는 현재 Ethereum과 Base 위에서 USDC 전문 자기 보관 지갑으로 운영된다. Tempo는 EVM 호환 L1이다. 이 두 가지 사실이 맞닿으면 흥미로운 미래가 열린다.'
              : 'walits currently runs as a USDC-specialized self-custody wallet on Ethereum and Base. Tempo is an EVM-compatible L1. When these two facts meet, an interesting future opens up.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: isKo ? '가스리스 UX — walits의 가장 큰 과제 해결' : 'Gasless UX — solving walits\' biggest challenge',
                desc: isKo
                  ? 'walits 사용자가 가장 불편해하는 것 중 하나는 가스비다. ETH를 별도로 보유해야 USDC를 보낼 수 있는 구조. Tempo의 FeeAMM은 이 문제를 프로토콜 레벨에서 해결한다. USDC만 있으면 수수료도 USDC로 낸다. walits가 Tempo를 지원하면 진정한 "USDC 지갑" — ETH 없이도 USDC만으로 모든 것이 가능한 경험을 제공할 수 있다.'
                  : 'One of the biggest UX pain points for walits users is gas fees — you need to hold ETH separately just to send USDC. Tempo\'s FeeAMM solves this at the protocol level. If you have USDC, you pay fees in USDC. If walits supports Tempo, it can deliver a true "USDC wallet" experience — everything possible with USDC alone, no ETH required.',
                icon: '⛽',
                highlight: true,
              },
              {
                title: isKo ? '멀티 스테이블코인 지갑 — USDC 넘어서' : 'Multi-stablecoin wallet — beyond USDC',
                desc: isKo
                  ? 'Tempo의 TIP-20 표준 위에서 USDC, USDT, USD1, 그 이후 등장할 스테이블코인들이 동일한 방식으로 작동한다. walits는 USDC 전문 지갑에서 출발했지만, Tempo 위에서라면 모든 주요 스테이블코인을 단일 인터페이스로 관리하는 "스테이블코인 지갑"으로 확장할 수 있다. 사용자는 어떤 스테이블코인을 보유하든 동일한 경험을 받는다.'
                  : 'On top of Tempo\'s TIP-20 standard, USDC, USDT, USD1, and future stablecoins all work identically. walits started as a USDC-specialized wallet, but on Tempo it could expand to a "stablecoin wallet" managing all major stablecoins through a single interface. Users get the same experience regardless of which stablecoin they hold.',
                icon: '🏦',
                highlight: false,
              },
              {
                title: isKo ? 'EVM 호환 — 코드 재사용, 낮은 전환 비용' : 'EVM-compatible — code reuse, low migration cost',
                desc: isKo
                  ? 'walits의 스마트컨트랙트와 SDK는 EVM 기반으로 작성되어 있다. Tempo는 EVM 호환 L1이다. 즉 walits가 Tempo를 지원하려면 새 언어나 새 아키텍처를 배울 필요가 없다. 기존 컨트랙트를 Tempo에 배포하고, RPC 엔드포인트를 추가하는 정도로 지원이 가능하다. Ethereum·Base·Tempo를 동시에 지원하는 멀티체인 지갑이 기술적으로 무리 없는 로드맵이다.'
                  : 'walits\' smart contracts and SDK are written for EVM. Tempo is EVM-compatible. That means supporting Tempo doesn\'t require learning a new language or rearchitecting. Deploy existing contracts to Tempo, add an RPC endpoint. A multi-chain wallet supporting Ethereum, Base, and Tempo simultaneously is a technically straightforward roadmap.',
                icon: '⚡',
                highlight: false,
              },
              {
                title: isKo ? 'AI 에이전트 결제 — walits의 미래 기능' : 'AI agent payments — walits\' future feature',
                desc: isKo
                  ? 'MPP는 AI 에이전트가 자율적으로 결제하는 오픈 스탠다드다. walits가 Tempo 위에서 AI 에이전트 지갑을 제공하면, 에이전트가 사람 없이 스스로 서비스 비용을 지불하고 USDC를 운용하는 시나리오가 가능해진다. walits의 Idle Time Detector가 유휴 USDC를 DeFi에 넣는 것처럼, AI 에이전트가 walits 지갑을 직접 제어해 자율적으로 자산을 관리할 수 있다.'
                  : 'MPP is the open standard for autonomous AI agent payments. If walits provides AI agent wallets on Tempo, agents can autonomously pay for services and manage USDC without human intervention. Just as walits\' Idle Time Detector deploys idle USDC into DeFi, AI agents could directly control walits wallets to autonomously manage assets.',
                icon: '🤖',
                highlight: false,
              },
              {
                title: isKo ? '기업 고객 유입 경로' : 'Enterprise customer acquisition path',
                desc: isKo
                  ? 'Visa·Deutsche Bank·Shopify·Standard Chartered 같은 기업들이 Tempo 생태계로 들어오고 있다. Tempo 위에서 이들 기업의 결제를 처리하면, USDC 수익을 더 잘 관리하고 싶은 니즈가 자연스럽게 생긴다. walits 기업용 지갑이 그 다음 레이어다. Tempo가 스테이블코인을 기업에 도입하면, walits는 그 자산을 24시간 일하게 만드는 레이어가 된다.'
                  : 'Companies like Visa, Deutsche Bank, Shopify, and Standard Chartered are entering the Tempo ecosystem. As they process payments on Tempo, the natural next need is to better manage and grow their USDC holdings. walits enterprise wallets become that next layer. Tempo brings stablecoins into enterprises; walits makes those assets work 24/7.',
                icon: '🏢',
                highlight: false,
              },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-5 flex gap-4 ${item.highlight ? 'bg-violet-50 border-violet-200' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <div className={`font-bold mb-2 ${item.highlight ? 'text-violet-800' : 'text-slate-800'}`}>{item.title}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-4">
              {isKo ? 'walits × Tempo 통합 로드맵 시나리오' : 'walits × Tempo integration roadmap scenario'}
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {[
                {
                  step: isKo ? '1단계' : 'Step 1',
                  title: isKo ? 'Tempo 지원 추가' : 'Add Tempo support',
                  items: isKo
                    ? ['Tempo RPC 엔드포인트 연결', 'TIP-20 USDC 송수신', '가스리스 USDC 전송']
                    : ['Connect Tempo RPC endpoint', 'TIP-20 USDC send/receive', 'Gasless USDC transfers'],
                },
                {
                  step: isKo ? '2단계' : 'Step 2',
                  title: isKo ? '멀티 스테이블코인' : 'Multi-stablecoin',
                  items: isKo
                    ? ['USDT·USD1 지원 확장', '스테이블코인 간 FeeAMM 환전', '단일 UI로 모든 달러 자산 관리']
                    : ['Expand to USDT, USD1', 'Inter-stablecoin FeeAMM swaps', 'Manage all dollar assets in one UI'],
                },
                {
                  step: isKo ? '3단계' : 'Step 3',
                  title: isKo ? 'AI 에이전트 지갑' : 'AI agent wallet',
                  items: isKo
                    ? ['MPP 기반 에이전트 결제', '자율 DeFi 수익 운용', '기업용 자동화 결제']
                    : ['MPP-based agent payments', 'Autonomous DeFi yield deployment', 'Enterprise automated payments'],
                },
              ].map((phase, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <div className="text-xs text-violet-200 mb-1">{phase.step}</div>
                  <div className="font-bold mb-2">{phase.title}</div>
                  <ul className="space-y-1">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-violet-100 text-xs">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                ? 'Tempo가 가스리스 스테이블코인 결제 레일을 깔아준다면, walits는 그 위에서 USDC를 24시간 DeFi 수익과 함께 운용하는 자기 보관 지갑이다. Ethereum과 Base, 그리고 Tempo까지.'
                : 'If Tempo lays the gasless stablecoin payment rail, walits is the self-custody wallet that runs USDC on it 24/7 alongside DeFi yield. Ethereum, Base, and eventually Tempo.'}
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
