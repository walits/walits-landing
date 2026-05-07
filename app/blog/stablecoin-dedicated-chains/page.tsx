'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StablecoinDedicatedChainsPage() {
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
            {isKo ? '인프라 심층 분석' : 'Infrastructure Deep Dive'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? '스테이블코인 전용 체인 — Base, Tether Plasma, Circle Arc, Stripe Tempo'
              : 'Stablecoin-Dedicated Chains — Base, Tether Plasma, Circle Arc, Stripe Tempo'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '코인베이스, 테더, 써클, 스트라이프. 스테이블코인 업계의 4대 플레이어가 각자 전용 체인·레일을 만들고 있다. 왜 범용 L2로는 부족한가, 각각 무엇이 다른가.'
              : 'Coinbase, Tether, Circle, Stripe. The four major stablecoin players are each building their own dedicated chain or rail. Why general-purpose L2s aren\'t enough — and how each approach differs.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 5월 7일' : 'May 7, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '22분 읽기' : '22 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/stablecoin-chains.jpg" alt="Stablecoin Dedicated Chains" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 1: 왜 전용 체인인가 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 왜 스테이블코인 전용 체인인가?' : '1. Why Build a Stablecoin-Dedicated Chain?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Ethereum 메인넷에서 USDC를 전송하면 수 달러의 가스비가 든다. Arbitrum이나 Optimism 같은 범용 L2에서도 전송 비용이 있고, 컨트랙트 인터랙션이 복잡해질수록 수수료가 올라간다. 결제에 쓰기엔 여전히 비싸다. 무엇보다 범용 L2는 수많은 앱이 경쟁하는 공간이라 예측 불가능한 혼잡이 발생한다.'
              : 'Sending USDC on Ethereum mainnet costs several dollars in gas. Even general-purpose L2s like Arbitrum or Optimism carry transfer costs that rise with contract complexity. Too expensive for payments. Worse, general-purpose L2s are shared spaces where countless apps compete — creating unpredictable congestion.'}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                problem: isKo ? '높은 수수료' : 'High fees',
                desc: isKo ? 'Ethereum 메인넷 USDC 전송 $2~10. 소액 결제에 쓸 수 없다.' : 'Ethereum mainnet USDC transfer $2–10. Unusable for micropayments.',
                icon: '💸',
              },
              {
                problem: isKo ? '예측 불가 혼잡' : 'Unpredictable congestion',
                desc: isKo ? '범용 L2는 DeFi·NFT·게임과 블록공간을 공유. 피크타임 수수료 급등.' : 'General L2s share blockspace with DeFi, NFTs, games. Fee spikes at peak.',
                icon: '🚦',
              },
              {
                problem: isKo ? '컴플라이언스 부재' : 'No compliance layer',
                desc: isKo ? '범용 체인은 KYC·AML·제재 필터링을 프로토콜 수준에서 지원하지 않는다.' : 'General chains have no protocol-level KYC, AML, or sanctions filtering.',
                icon: '🔒',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-bold text-slate-800 mb-2">{item.problem}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed">
            {isKo
              ? '해답은 "스테이블코인 이동에 최적화된 전용 체인 또는 레일"이다. 2023년부터 각 메이저 플레이어가 본격적으로 이 방향으로 움직이기 시작했다.'
              : 'The answer: a dedicated chain or rail optimized purely for stablecoin movement. Starting in 2023, each major player began moving seriously in this direction.'}
          </p>
        </section>

        {/* Section 2: Base */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">B</div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">2. Base — Coinbase의 L2</h2>
              <p className="text-slate-400 text-sm">{isKo ? 'Coinbase · OP Stack · 2023년 8월 메인넷' : 'Coinbase · OP Stack · Mainnet August 2023'}</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Base는 Coinbase가 만든 Ethereum L2다. Optimism의 OP Stack을 기반으로 하며, "1억 명의 Coinbase 사용자를 온체인으로 데려오겠다"는 목표로 설계됐다. 스테이블코인 전용 체인은 아니지만, USDC 네이티브 발행과 CCTP 통합, 극히 낮은 수수료로 사실상 스테이블코인 결제 인프라의 핵심 레이어로 자리잡았다.'
              : 'Base is Coinbase\'s Ethereum L2, built on Optimism\'s OP Stack. Its stated goal: "bring 1 billion users onchain." Not a stablecoin-exclusive chain, but native USDC issuance, CCTP integration, and near-zero fees have made it the de facto stablecoin payment layer.'}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-blue-800 mb-4">{isKo ? 'Base 핵심 스펙' : 'Base key specs'}</div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { label: isKo ? '기반 스택' : 'Stack', val: 'OP Stack (Optimism)' },
                { label: isKo ? '블록 시간' : 'Block time', val: '2초' },
                { label: isKo ? 'USDC 전송 수수료' : 'USDC transfer fee', val: '~$0.001' },
                { label: isKo ? 'USDC 타입' : 'USDC type', val: isKo ? 'Circle 네이티브 발행' : 'Circle native issuance' },
                { label: isKo ? 'CCTP 지원' : 'CCTP support', val: 'V1 + V2' },
                { label: 'TVL (2026)', val: '$8B+' },
              ].map((row, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="text-blue-500 font-semibold w-32 shrink-0">{row.label}</span>
                  <span className="text-slate-700">{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? 'Coinbase의 전략' : 'Coinbase\'s strategy'}</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isKo
                ? 'Coinbase는 Base를 통해 두 가지를 동시에 얻는다. 첫째, 시퀀서 수수료 수익 — Coinbase가 Base의 시퀀서를 운영하며 트랜잭션 처리 수수료를 가져간다. 둘째, USDC 생태계 확장 — Base에서 USDC가 유통될수록 Circle로부터 받는 수익 배분(USDC 준비금 이자)이 늘어난다. Base는 Coinbase의 비즈니스 모델과 완벽하게 정렬된 체인이다.'
                : 'Coinbase gets two things from Base simultaneously. First, sequencer fee revenue — Coinbase operates the Base sequencer and earns transaction processing fees. Second, USDC ecosystem growth — more USDC circulating on Base means more revenue sharing from Circle (interest on USDC reserves). Base is a chain perfectly aligned with Coinbase\'s business model.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="font-bold text-green-800 mb-2">{isKo ? '강점' : 'Strengths'}</div>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• {isKo ? '네이티브 USDC — Circle이 직접 발행' : 'Native USDC — minted directly by Circle'}</li>
                <li>• {isKo ? 'Coinbase 앱 → Base 원클릭 온보딩' : 'Coinbase app → Base one-click onboarding'}</li>
                <li>• {isKo ? 'Aerodrome 등 성숙한 DeFi 생태계' : 'Mature DeFi ecosystem (Aerodrome, etc.)'}</li>
                <li>• {isKo ? 'EVM 완전 호환 — 기존 스마트컨트랙트 재사용' : 'Full EVM compatibility — reuse existing contracts'}</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="font-bold text-red-800 mb-2">{isKo ? '한계' : 'Limitations'}</div>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• {isKo ? '시퀀서 중앙화 — Coinbase가 단독 운영' : 'Centralized sequencer — run solely by Coinbase'}</li>
                <li>• {isKo ? '범용 L2라 스테이블코인만의 특화 기능 없음' : 'General-purpose L2, no stablecoin-specific features'}</li>
                <li>• {isKo ? 'Ethereum 보안에 의존 (7일 출금 지연)' : 'Ethereum security dependency (7-day withdrawal delay)'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Tether Plasma */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-lg">P</div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">3. Tether Plasma — USDT 전용 Bitcoin L2</h2>
              <p className="text-slate-400 text-sm">{isKo ? 'Tether · Bitcoin 기반 · Paolo Ardoino 주도' : 'Tether · Bitcoin-based · Led by Paolo Ardoino'}</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Plasma는 Tether가 직접 개발 중인 Bitcoin 기반 L2다. USDT 전송에 특화된 체인으로, Bitcoin의 보안을 기반으로 하면서 USDT 이동을 초고속·무수수료에 가깝게 처리하는 것을 목표로 한다. Tether CEO Paolo Ardoino가 직접 진두지휘하며 "USDT의 전용 결제 레일"을 표방한다.'
              : 'Plasma is a Bitcoin-based L2 being developed directly by Tether. Dedicated to USDT transfers, it aims to leverage Bitcoin\'s security while processing USDT movement at near-zero fees with extreme speed. Tether CEO Paolo Ardoino is leading it personally, positioning it as "USDT\'s dedicated payment rail."'}
          </p>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-green-800 mb-4">{isKo ? 'Plasma 핵심 설계 철학' : 'Plasma core design philosophy'}</div>
            <div className="space-y-4">
              {[
                {
                  title: isKo ? 'Bitcoin 보안 상속' : 'Inheriting Bitcoin security',
                  desc: isKo ? 'Ethereum L2가 아닌 Bitcoin을 베이스 레이어로 선택. Tether는 이미 Bitcoin(Omni Layer)에서 시작했으며, 비트코인 네트워크의 검열 저항성과 탈중앙성을 그대로 가져온다.' : 'Chose Bitcoin as the base layer, not Ethereum. Tether started on Bitcoin (Omni Layer) and wants to carry forward Bitcoin\'s censorship resistance and decentralization.',
                },
                {
                  title: isKo ? 'USDT 전용 최적화' : 'USDT-only optimization',
                  desc: isKo ? '범용 스마트컨트랙트 실행이 아닌 USDT 전송에만 집중. 불필요한 복잡도를 제거해 처리량과 속도를 극대화한다.' : 'Focused exclusively on USDT transfer, not general smart contract execution. Removing unnecessary complexity maximizes throughput and speed.',
                },
                {
                  title: isKo ? '수수료 없는 결제' : 'Fee-less payments',
                  desc: isKo ? '목표는 가스비 제로에 가까운 USDT 전송. 이머징 마켓의 소액 송금, 급여 지급, P2P 결제에 활용한다.' : 'Goal is near-zero gas USDT transfers — for remittances, payroll, P2P payments in emerging markets.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-800 text-sm mb-1">{item.title}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="font-bold text-amber-800 mb-2">{isKo ? 'Tether의 배경 — 왜 직접 체인을 만드나?' : 'Why is Tether building its own chain?'}</div>
            <p className="text-amber-700 text-sm leading-relaxed">
              {isKo
                ? 'USDT는 유통량 1,400억 달러 이상으로 세계 최대 스테이블코인이다. 하지만 대부분 Tron과 Ethereum에 분산돼 있다. Tron은 빠르고 싸지만 탈중앙성이 약하고, Ethereum은 안전하지만 비싸다. Tether는 "USDT의 결제 레일은 우리가 직접 통제해야 한다"는 판단으로 Plasma를 만들고 있다.'
                : 'USDT has over $140B in circulation — the world\'s largest stablecoin. But it\'s split across Tron and Ethereum. Tron is fast and cheap but weakly decentralized; Ethereum is safe but expensive. Tether\'s conclusion: "We need to control USDT\'s payment rail directly." That\'s Plasma.'}
            </p>
          </div>
        </section>

        {/* Section 4: Circle Arc */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white font-black text-lg">A</div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">4. Circle Arc — 기관용 컴플라이언스 레이어</h2>
              <p className="text-slate-400 text-sm">{isKo ? 'Circle · 허가형 DeFi · KYC/AML 온체인' : 'Circle · Permissioned DeFi · KYC/AML on-chain'}</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Circle Arc는 Circle이 기관 고객을 위해 설계한 허가형(Permissioned) 블록체인 네트워크다. 핵심 아이디어는 단순하다 — KYC/AML 인증을 완료한 참여자만 접근할 수 있는 온체인 환경을 만드는 것이다. 규제 기관과 대형 금융기관이 "DeFi는 좋은데 익명 지갑이 문제"라고 말할 때, Arc는 그 문제를 해결하는 인프라다.'
              : 'Circle Arc is a permissioned blockchain network Circle designed for institutional clients. The core idea is simple: create an on-chain environment accessible only to KYC/AML-verified participants. When regulators and large financial institutions say "DeFi is good but anonymous wallets are the problem," Arc is the infrastructure that solves it.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-bold text-blue-800 mb-3">{isKo ? 'Arc가 해결하는 문제' : 'Problems Arc solves'}</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? '기관은 익명 지갑과 거래 불가 — 컴플라이언스 위반' : 'Institutions cannot transact with anonymous wallets — compliance violation'}</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? '공개 체인은 제재 대상자 차단 불가' : 'Public chains cannot block sanctioned addresses'}</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? '금융 규제기관이 요구하는 감사 추적 어려움' : 'Audit trails required by financial regulators are difficult'}</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-bold text-blue-800 mb-3">{isKo ? 'Arc의 핵심 기능' : 'Arc core features'}</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? '온체인 KYC 자격증명 — Verite 표준 사용' : 'On-chain KYC credentials — using Verite standard'}</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? '허가된 참여자만 USDC 트랜잭션 가능' : 'Only permissioned participants can transact USDC'}</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? 'OFAC 제재 목록 실시간 필터링' : 'Real-time OFAC sanctions list filtering'}</li>
                <li className="flex gap-2"><span className="text-blue-400 shrink-0">•</span>{isKo ? '완전한 감사 추적 제공' : 'Full audit trail'}</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? 'Arc의 역설 — 허가형 DeFi' : 'Arc\'s paradox — permissioned DeFi'}</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isKo
                ? '"DeFi는 탈중앙이어야 한다"는 원칙에서 보면 Arc는 역설이다. 하지만 현실에서 BlackRock, Fidelity 같은 기관들이 DeFi에 참여하려면 규제 당국에 "우리는 KYC를 했다"는 증명이 필요하다. Arc는 기관 자금이 DeFi로 유입되는 컴플라이언트 게이트웨이 역할을 한다. Circle의 목표는 USDC가 기관 금융에서도 쓰이는 것이기 때문에, Arc는 그 전략의 핵심이다.'
                : '"DeFi should be permissionless" — Arc appears to contradict this. But in practice, for institutions like BlackRock or Fidelity to participate in DeFi, they need to prove to regulators that KYC was done. Arc acts as the compliant gateway for institutional capital flowing into DeFi. Since Circle\'s goal is USDC in institutional finance, Arc is central to that strategy.'}
            </p>
          </div>
        </section>

        {/* Section 5: Stripe Tempo */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white font-black text-lg">T</div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">5. Stripe Tempo — 결제 회사의 스테이블코인 레일</h2>
              <p className="text-slate-400 text-sm">{isKo ? 'Stripe · Bridge 인수 · 스테이블코인 결제 인프라' : 'Stripe · Bridge acquisition · Stablecoin payment infrastructure'}</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Stripe는 2024년 스테이블코인 인프라 스타트업 Bridge를 약 11억 달러에 인수했다. 그리고 Tempo를 발표했다 — 스테이블코인 기반 금융 계좌와 결제 레일이다. Stripe의 접근은 다른 플레이어들과 다르다. 새 체인을 만드는 것이 아니라, 기존 스테이블코인 인프라(USDC, USDT) 위에서 "결제 경험"을 만든다.'
              : 'In 2024, Stripe acquired stablecoin infrastructure startup Bridge for ~$1.1B. Then came Tempo — stablecoin-based financial accounts and payment rails. Stripe\'s approach differs from the others: instead of building a new chain, it builds "payment experiences" on top of existing stablecoin infrastructure (USDC, USDT).'}
          </p>

          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-violet-800 mb-4">{isKo ? 'Tempo의 핵심 기능' : 'Tempo\'s core capabilities'}</div>
            <div className="space-y-4">
              {[
                {
                  title: isKo ? '스테이블코인 금융 계좌' : 'Stablecoin financial accounts',
                  desc: isKo ? '전 세계 어디서든 USDC·USDT 기반 계좌를 개설하고 달러 잔액을 유지할 수 있다. 은행 계좌가 없는 국가에서도 달러 경제에 참여 가능.' : 'Open USDC/USDT-based accounts from anywhere in the world and hold dollar balances. Enables participation in the dollar economy even without a bank account.',
                },
                {
                  title: isKo ? '크로스보더 즉시 송금' : 'Instant cross-border transfers',
                  desc: isKo ? 'SWIFT 2~5일 대신 스테이블코인 레일로 수 초 내 국제 송금. Stripe의 기존 결제 네트워크와 통합해 법정화폐↔스테이블코인 환전을 자동 처리.' : 'Seconds instead of SWIFT\'s 2–5 days for international transfers. Integrated with Stripe\'s existing payment network for automatic fiat↔stablecoin conversion.',
                },
                {
                  title: isKo ? '머천트 결제 통합' : 'Merchant payment integration',
                  desc: isKo ? 'Stripe를 사용하는 수백만 기업이 스테이블코인 결제를 즉시 받을 수 있다. 기존 Stripe 대시보드에서 스테이블코인 수취·지급 모두 관리.' : 'Millions of businesses using Stripe can instantly accept stablecoin payments. Manage both stablecoin receipt and payouts from the existing Stripe dashboard.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 bg-violet-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">{item.title}</div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? 'Stripe가 체인을 만들지 않는 이유' : 'Why Stripe isn\'t building a chain'}</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isKo
                ? 'Stripe의 강점은 수백만 기업과의 관계, 규제 라이선스, 결제 UX다. 새 체인을 만들면 이 강점과 무관한 기술적 복잡도를 떠안는다. 대신 Bridge 인수를 통해 USDC·USDT·여러 체인을 추상화하는 미들웨어 레이어를 확보했다. Stripe에게 스테이블코인은 새 화폐가 아니라 더 빠르고 싼 달러 전송 수단이다.'
                : 'Stripe\'s strength is its relationships with millions of businesses, regulatory licenses, and payment UX. Building a new chain would add technical complexity unrelated to those strengths. Instead, acquiring Bridge gave Stripe a middleware layer abstracting USDC, USDT, and multiple chains. For Stripe, stablecoins aren\'t a new currency — they\'re just faster, cheaper dollar transfers.'}
            </p>
          </div>
        </section>

        {/* Section 6: 비교표 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 4대 플레이어 비교' : '6. Four-Player Comparison'}
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">{isKo ? '항목' : 'Item'}</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-300">Base</th>
                  <th className="text-left px-4 py-3 font-semibold text-green-300">Tether Plasma</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-300">Circle Arc</th>
                  <th className="text-left px-4 py-3 font-semibold text-violet-300 rounded-tr-xl">Stripe Tempo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    item: isKo ? '운영사' : 'Operator',
                    base: 'Coinbase', plasma: 'Tether', arc: 'Circle', tempo: 'Stripe',
                  },
                  {
                    item: isKo ? '타입' : 'Type',
                    base: isKo ? '범용 L2' : 'General L2',
                    plasma: isKo ? 'USDT 전용 L2' : 'USDT-only L2',
                    arc: isKo ? '허가형 네트워크' : 'Permissioned network',
                    tempo: isKo ? '결제 레일 (미들웨어)' : 'Payment rail (middleware)',
                  },
                  {
                    item: isKo ? '베이스 레이어' : 'Base layer',
                    base: 'Ethereum', plasma: 'Bitcoin', arc: 'Ethereum', tempo: isKo ? '멀티체인' : 'Multi-chain',
                  },
                  {
                    item: isKo ? '주요 스테이블코인' : 'Primary stablecoin',
                    base: 'USDC (네이티브)', plasma: 'USDT', arc: 'USDC', tempo: 'USDC + USDT',
                  },
                  {
                    item: isKo ? '허가 여부' : 'Permissioned',
                    base: isKo ? '무허가 (퍼블릭)' : 'Permissionless',
                    plasma: isKo ? '무허가' : 'Permissionless',
                    arc: isKo ? '허가형 (KYC 필수)' : 'Permissioned (KYC required)',
                    tempo: isKo ? '허가형 (Stripe 심사)' : 'Permissioned (Stripe vetting)',
                  },
                  {
                    item: isKo ? '타깃 유저' : 'Target users',
                    base: isKo ? '개인·개발자·DeFi' : 'Retail, devs, DeFi',
                    plasma: isKo ? '이머징 마켓·P2P 결제' : 'Emerging markets, P2P',
                    arc: isKo ? '기관·규제 금융' : 'Institutions, regulated finance',
                    tempo: isKo ? 'Stripe 기업 고객' : 'Stripe business customers',
                  },
                  {
                    item: isKo ? '출시 상태' : 'Status',
                    base: isKo ? '라이브 (2023.08)' : 'Live (Aug 2023)',
                    plasma: isKo ? '개발 중' : 'In development',
                    arc: isKo ? '출시' : 'Live',
                    tempo: isKo ? '출시' : 'Live',
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.item}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{row.base}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{row.plasma}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{row.arc}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{row.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: 공통점과 의미 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 공통점 — 왜 모두 같은 방향인가?' : '7. What They Share — Why Is Everyone Moving the Same Direction?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '4개의 프로젝트는 배경도, 접근 방식도, 타깃도 다르다. 하지만 한 가지 공통된 확신을 가지고 있다 — "스테이블코인이 글로벌 금융의 기본 레이어가 된다."'
              : 'These four projects have different backgrounds, approaches, and targets. But they share one conviction: "Stablecoins will become the base layer of global finance."'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                theme: isKo ? '달러의 인터넷화' : 'The internet-ification of dollars',
                desc: isKo ? 'SWIFT는 느리고 비싸다. 스테이블코인은 달러를 인터넷처럼 — 즉시, 프로그래머블하게, 24/7 — 이동시킨다. 모든 플레이어가 이 레일을 장악하려 한다.' : 'SWIFT is slow and expensive. Stablecoins move dollars like the internet — instantly, programmably, 24/7. Every player wants to own this rail.',
                icon: '🌐',
              },
              {
                theme: isKo ? '각자의 기존 해자 활용' : 'Leveraging existing moats',
                desc: isKo ? 'Coinbase는 거래소 유저, Tether는 USDT 유통망, Circle은 기관 관계, Stripe는 가맹점 네트워크. 누가 이기든 기존 강점을 스테이블코인 레일로 연장하는 구조다.' : 'Coinbase has exchange users, Tether has USDT distribution, Circle has institutional relationships, Stripe has merchant network. Whoever wins extends their existing moat into stablecoin rails.',
                icon: '🏰',
              },
              {
                theme: isKo ? '규제 대응' : 'Regulatory preparation',
                desc: isKo ? '미국 스테이블코인 법안(GENIUS Act 등)이 통과되면 규제된 발행사만 스테이블코인을 발행할 수 있다. 지금 레일을 깔아두는 것은 그 시장을 선점하는 작업이다.' : 'When US stablecoin legislation (GENIUS Act, etc.) passes, only regulated issuers can mint stablecoins. Building rails now means claiming that market before the rules lock.',
                icon: '⚖️',
              },
              {
                theme: isKo ? '이머징 마켓' : 'Emerging markets',
                desc: isKo ? '인플레이션이 심한 국가의 시민들이 달러 스테이블코인으로 이동하고 있다. 아르헨티나, 나이지리아, 터키가 대표적. 이 시장은 수십억 명 규모다.' : 'Citizens in high-inflation countries are moving to dollar stablecoins. Argentina, Nigeria, Turkey are leading examples. This market is billions of people.',
                icon: '🌍',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-slate-800 mb-2">{item.theme}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: walits 관점 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. walits 관점 — 어떤 체인을 쓸 것인가?' : '8. walits Perspective — Which Chain to Use?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'walits는 스테이블코인 지갑으로서 이 체인들과 직접 연동된다. 어떤 체인을 지원하느냐는 유저 경험과 비용, 규제 대응을 결정하는 전략적 선택이다.'
              : 'As a stablecoin wallet, walits integrates directly with these chains. Which chains to support is a strategic choice that determines user experience, cost, and regulatory positioning.'}
          </p>

          <div className="space-y-3">
            {[
              {
                chain: 'Base',
                use: isKo ? '개인 유저 USDC 결제·DeFi 수익' : 'Personal user USDC payments & DeFi yield',
                reason: isKo ? '가장 낮은 수수료, 네이티브 USDC, Coinbase 유저 유입 경로. walits 개인용 지갑의 기본 체인.' : 'Lowest fees, native USDC, Coinbase user inflow. Default chain for walits personal wallet.',
                status: isKo ? '현재 지원' : 'Currently supported',
                statusColor: 'bg-green-100 text-green-700',
              },
              {
                chain: 'Ethereum',
                use: isKo ? '고가 거래·DeFi 원본 프로토콜 접근' : 'High-value transactions & access to original DeFi protocols',
                reason: isKo ? 'Aave, Morpho, Ondo 등 주요 DeFi 프로토콜의 원본 배포 체인. 금액이 클수록 수수료 비중이 낮아진다.' : 'Origin chain for major DeFi protocols like Aave, Morpho, Ondo. Fee ratio decreases as transaction size grows.',
                status: isKo ? '현재 지원' : 'Currently supported',
                statusColor: 'bg-green-100 text-green-700',
              },
              {
                chain: 'Tether Plasma',
                use: isKo ? 'USDT 특화 소액 결제·이머징 마켓 송금' : 'USDT micropayments & emerging market remittances',
                reason: isKo ? '수수료 제로에 가까운 USDT 전송이 목표. 완성되면 이머징 마켓 유저에게 강력한 옵션.' : 'Near-zero USDT transfers when complete. Powerful option for emerging market users.',
                status: isKo ? '출시 후 검토' : 'Evaluate at launch',
                statusColor: 'bg-yellow-100 text-yellow-700',
              },
              {
                chain: 'Circle Arc',
                use: isKo ? '기업 고객 규제 컴플라이언스' : 'Enterprise regulatory compliance',
                reason: isKo ? 'walits 기업용 지갑이 금융기관·규제 산업 고객을 받으려면 KYC 온체인 증명이 필요해질 수 있다.' : 'walits enterprise wallet may need on-chain KYC proof to serve financial institutions and regulated industries.',
                status: isKo ? '기업용 지갑 로드맵 검토' : 'Enterprise wallet roadmap review',
                statusColor: 'bg-blue-100 text-blue-700',
              },
            ].map((row, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-black text-slate-900">{row.chain}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.statusColor}`}>{row.status}</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 mb-1">{row.use}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{row.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-slate-100 pt-8">
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-2">
              {isKo ? 'walits — 스테이블코인 레일 위의 지갑' : 'walits — A wallet built on stablecoin rails'}
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              {isKo
                ? 'Base, Ethereum 위에서 USDC·USDT를 관리하고, DeFi 수익을 자동으로 쌓는 개인·기업용 스테이블코인 지갑.'
                : 'A personal and enterprise stablecoin wallet that manages USDC & USDT on Base and Ethereum while automatically stacking DeFi yield.'}
            </p>
            <Link href="/#solutions" className="inline-block bg-white text-blue-600 font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              {isKo ? '서비스 알아보기 →' : 'Learn more →'}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
