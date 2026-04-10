'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WalitsIdleTimeDetectorPage() {
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
          <div className="inline-block bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'walits 기술 심층 분석' : 'walits Tech Deep Dive'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'Idle Time Detector — 유휴 USDC가 자동으로 수익을 내는 방법'
              : 'Idle Time Detector — How Idle USDC Earns Yield Automatically'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '입금 감지 → 유휴 기간 예측 → 프로토콜 선택 → 온체인 예치. 유저가 아무것도 하지 않아도 USDC는 매 순간 일한다.'
              : 'Deposit detected → idle duration predicted → protocol selected → on-chain deposit. Your USDC works every moment without you doing anything.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 4월 10일' : 'April 10, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '20분 읽기' : '20 min read'}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 0: Core Idea */}
        <section>
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              {isKo ? '핵심 명제: 돈이 쉬는 시간은 존재하지 않는다' : 'Core Premise: Money Never Rests'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '전통 금융에서 계좌에 있는 돈은 "대기 중"이다. DeFi에서 대기 중인 돈은 기회비용이다. walits의 Idle Time Detector는 이 기회비용을 0으로 만들기 위해 설계된 시스템이다. 입금이 발생하는 순간부터 다음 지출 예정일까지의 시간을 계산해, 그 시간에 최적화된 DeFi 프로토콜에 자동으로 예치한다.'
                : 'In traditional finance, money in an account is "waiting." In DeFi, waiting money has an opportunity cost. walits\' Idle Time Detector is designed to eliminate that opportunity cost. From the moment a deposit arrives to the next scheduled outflow, it calculates the available window and automatically deposits funds into the optimal DeFi protocol for that duration.'}
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: isKo ? '감지' : 'Detect', desc: isKo ? '입금 이벤트\n실시간 감지' : 'Deposit event\nreal-time detection', icon: '👁️' },
                { label: isKo ? '예측' : 'Predict', desc: isKo ? '유휴 기간\n자동 계산' : 'Idle duration\nauto-calculation', icon: '🧮' },
                { label: isKo ? '실행' : 'Execute', desc: isKo ? '최적 프로토콜\n온체인 예치' : 'Optimal protocol\non-chain deposit', icon: '⚡' },
              ].map((s, i) => (
                <div key={i} className="bg-white border border-sky-200 rounded-xl p-4">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="font-bold text-slate-900 mb-1">{s.label}</div>
                  <div className="text-xs text-slate-500 whitespace-pre-line">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: 3-Tier Protocol Selection */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '1. 3단계 프로토콜 선택 로직' : '1. Three-Tier Protocol Selection Logic'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'walits는 유휴 기간 길이에 따라 세 개의 DeFi 프로토콜 중 하나를 선택한다. 핵심 기준은 유동성(언제 빼낼 수 있는가)와 APY(얼마를 버는가)의 균형이다.'
              : 'walits selects one of three DeFi protocols based on idle duration. The key criteria are liquidity (when can you exit?) and APY (how much do you earn?).'}
          </p>

          <div className="space-y-4">
            {[
              {
                tier: isKo ? '단기 (24시간 미만)' : 'Short-term (Under 24h)',
                protocol: 'Aave V3',
                apy: '5.1%',
                reason: isKo ? '즉시 출금 (출금 = 1 트랜잭션)' : 'Instant withdrawal (1 transaction)',
                color: 'bg-green-50 border-green-300',
                badge: 'bg-green-500',
                detail: isKo
                  ? 'Aave의 aUSDC는 언제든지 1:1로 USDC로 전환된다. 이자는 매 블록마다 aUSDC 잔고 증가 형태로 발생한다. 단기 유동성이 필요한 자금에 최적이다.'
                  : 'Aave\'s aUSDC converts to USDC 1:1 at any time. Interest accrues each block as increasing aUSDC balance. Optimal for funds needing short-term liquidity.',
                callout: isKo ? '예치: supply(USDC, amount) → 회수: withdraw(USDC, amount)' : 'Deposit: supply(USDC, amount) → Withdraw: withdraw(USDC, amount)',
              },
              {
                tier: isKo ? '중기 (1~7일)' : 'Mid-term (1–7 days)',
                protocol: 'Morpho',
                apy: '5.6%',
                reason: isKo ? 'P2P 매칭으로 Aave보다 높은 금리' : 'P2P matching yields higher rates than Aave',
                color: 'bg-blue-50 border-blue-300',
                badge: 'bg-blue-500',
                detail: isKo
                  ? 'Morpho는 Aave/Compound 위에서 공급자와 대출자를 P2P로 직접 매칭한다. 중간 수수료가 없어 Aave 예치보다 APY가 높다. 1~7일 예상 유휴기간에서 리스크 없이 수익을 최대화한다.'
                  : 'Morpho directly P2P-matches suppliers and borrowers on top of Aave/Compound. No intermediary fee means higher APY than Aave deposits. Maximizes returns risk-free for 1–7 day idle windows.',
                callout: isKo ? '예치: supply(marketId, amount, shares, onBehalf) → Morpho 내부 _matchBorrowers() 실행' : 'Deposit: supply(marketId, amount, shares, onBehalf) → Morpho internally calls _matchBorrowers()',
              },
              {
                tier: isKo ? '장기 (7일 이상)' : 'Long-term (7+ days)',
                protocol: 'Ondo USDY',
                apy: '5.0%',
                reason: isKo ? '미국 국채 기반 수익, 최고 안전성' : 'US Treasury-backed yield, maximum safety',
                color: 'bg-amber-50 border-amber-300',
                badge: 'bg-amber-500',
                detail: isKo
                  ? 'Ondo USDY는 미국 단기 국채(T-Bill)와 은행 예금 담보 대출로 수익을 낸다. BlackRock이 운용하는 BUIDL 펀드 등 RWA 자산을 기반으로 하므로 DeFi 프로토콜 스마트컨트랙트 리스크보다 낮다. 리베이스 메커니즘으로 보유자의 USDY 수량이 매일 증가한다.'
                  : 'Ondo USDY generates returns from US T-Bills and bank deposit collateral loans. Backed by RWA assets including BlackRock\'s BUIDL fund — lower smart contract risk than pure DeFi. The rebase mechanism increases USDY balance daily.',
                callout: isKo ? '예치: USDC → USDY mint. 이자: 매일 리베이스 → USDY 잔고 증가' : 'Deposit: USDC → USDY mint. Interest: daily rebase → USDY balance increases',
              },
            ].map((tier, i) => (
              <div key={i} className={`border-2 rounded-2xl p-6 ${tier.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${tier.badge}`}>{tier.tier}</span>
                    <span className="ml-3 font-black text-slate-900 text-lg">{tier.protocol}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-emerald-600">{tier.apy}</div>
                    <div className="text-xs text-slate-500">APY</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-700 mb-2">✓ {tier.reason}</div>
                <p className="text-sm text-slate-600 mb-3">{tier.detail}</p>
                <div className="bg-slate-900 text-green-400 rounded-lg px-4 py-2 text-xs font-mono">
                  {tier.callout}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Decision Flow */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. 실행 흐름 — 입금부터 예치까지' : '2. Execution Flow — From Deposit to Yield'}
          </h2>

          <div className="bg-slate-900 rounded-2xl p-8 text-sm font-mono">
            <div className="text-slate-400 mb-4 text-xs">{isKo ? '// Idle Time Detector 실행 흐름' : '// Idle Time Detector execution flow'}</div>
            {[
              { step: '1', color: 'text-blue-400', code: isKo ? 'EVENT: USDC.transfer() 감지 (잔고 증가)' : 'EVENT: USDC.transfer() detected (balance increase)' },
              { step: '2', color: 'text-yellow-400', code: isKo ? '스케줄 조회: 유저의 다음 지출 예정일 확인' : 'Schedule check: retrieve next scheduled outflow date' },
              { step: '3', color: 'text-yellow-400', code: isKo ? '유휴 기간 계산: T_idle = T_next_payment - T_now' : 'Idle duration: T_idle = T_next_payment - T_now' },
              { step: '4a', color: 'text-green-400', code: 'if T_idle < 24h  →  APY Scanner → Aave  (5.1%, instant exit)' },
              { step: '4b', color: 'text-cyan-400', code: 'if 1d ≤ T_idle < 7d  →  APY Scanner → Morpho (5.6%, P2P)' },
              { step: '4c', color: 'text-amber-400', code: 'if T_idle ≥ 7d  →  APY Scanner → Ondo USDY (5.0%, T-Bill)' },
              { step: '5', color: 'text-purple-400', code: isKo ? 'Policy Engine 검증: 허용 컨트랙트 / 허용 토큰 / 한도 체크' : 'Policy Engine validation: allowed contracts / tokens / limits' },
              { step: '6', color: 'text-pink-400', code: isKo ? 'AI Agent 실행: USDC.approve() → Protocol.deposit()' : 'AI Agent executes: USDC.approve() → Protocol.deposit()' },
              { step: '7', color: 'text-emerald-400', code: isKo ? '알림 전송: "450 USDC → Morpho 예치 완료 (연 5.6%)"' : 'Push notification: "450 USDC → Morpho deposited (5.6% APY)"' },
            ].map((line, i) => (
              <div key={i} className="flex gap-3 mb-2">
                <span className="text-slate-500 w-6 shrink-0">{line.step}.</span>
                <span className={line.color}>{line.code}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              <strong>{isKo ? '예비금 유지:' : 'Reserve maintenance:'}</strong>{' '}
              {isKo
                ? '전액 예치가 아닌, 잔고의 10~15%는 항상 현금(USDC)으로 유지한다. 예상치 못한 즉시 지출에 대응하기 위해서다. 예치 금액 = 잔고 × 0.90.'
                : 'Not the full balance — 10–15% is always kept as liquid USDC. This covers unexpected immediate expenses. Deposit amount = balance × 0.90.'}
            </p>
          </div>
        </section>

        {/* Section 3: APY Scanner */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. APY Scanner — 실시간 최적 프로토콜 탐색' : '3. APY Scanner — Real-Time Optimal Protocol Search'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? '유휴 기간이 결정되면 APY Scanner가 해당 기간에 맞는 프로토콜 후보군의 현재 APY를 조회한다. APY는 온체인 상태에 따라 실시간으로 변하므로, 단순히 고정 테이블을 쓰는 것이 아니라 매번 컨트랙트를 조회한다.'
              : 'Once the idle duration is determined, the APY Scanner queries current APYs of candidate protocols for that window. APYs change in real time based on on-chain state, so each execution fetches live contract data rather than using a static table.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                protocol: 'Aave V3',
                query: isKo ? 'getReserveData(USDC).currentLiquidityRate' : 'getReserveData(USDC).currentLiquidityRate',
                note: isKo ? 'Ray 단위 (1e27) → APY 변환. 블록마다 업데이트.' : 'Ray unit (1e27) → APY conversion. Updates each block.',
                color: 'bg-green-50 border-green-200',
              },
              {
                protocol: 'Morpho Blue',
                query: isKo ? 'market(marketId).supplyRate (누적 이자율)' : 'market(marketId).supplyRate (accrued interest rate)',
                note: isKo ? 'P2P 매칭 여부에 따라 실제 수익률 변동. 풀 모드 시 Aave 기반.' : 'Actual yield varies by P2P match status. Pool mode uses Aave base rate.',
                color: 'bg-blue-50 border-blue-200',
              },
              {
                protocol: 'Ondo USDY',
                query: isKo ? 'Oracle 가격 기반 NAV 계산 (T-Bill yield 반영)' : 'Oracle price-based NAV (reflects T-Bill yield)',
                note: isKo ? '온체인 리베이스. 미국 국채 수익률 변화에 연동.' : 'On-chain rebase. Linked to US T-Bill yield changes.',
                color: 'bg-amber-50 border-amber-200',
              },
              {
                protocol: 'Huma Finance',
                query: isKo ? 'TrancheVault.getAPY() — 공급망 금융 수익' : 'TrancheVault.getAPY() — trade finance yield',
                note: isKo ? '실물 인보이스 기반 수익. 락업 기간 고려 필요.' : 'Real invoice-based yield. Lockup period consideration required.',
                color: 'bg-teal-50 border-teal-200',
              },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                <div className="font-black text-slate-900 mb-2">{item.protocol}</div>
                <div className="bg-slate-900 text-green-400 rounded-lg px-3 py-2 text-xs font-mono mb-2">{item.query}</div>
                <div className="text-xs text-slate-600">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-900 mb-3">{isKo ? '최종 선택 기준' : 'Final Selection Criteria'}</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <div>① {isKo ? '유휴 기간 티어 결정 (24h / 1-7d / 7d+)' : 'Determine idle tier (24h / 1-7d / 7d+)'}</div>
              <div>② {isKo ? '해당 티어 후보 프로토콜 APY 실시간 조회' : 'Real-time APY query for candidate protocols in that tier'}</div>
              <div>③ {isKo ? 'Policy Engine 화이트리스트 교차 검증' : 'Cross-validate with Policy Engine whitelist'}</div>
              <div>④ {isKo ? '최고 APY 프로토콜 선택 → 예치 실행' : 'Select highest APY protocol → execute deposit'}</div>
            </div>
          </div>
        </section>

        {/* Section 4: Idle Money Agent Scenario */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. Idle Money Agent — 실제 시나리오' : '4. Idle Money Agent — Real Scenario'}
          </h2>

          <div className="space-y-6">
            {/* Scenario A */}
            <div className="border-2 border-violet-300 rounded-2xl overflow-hidden">
              <div className="bg-violet-600 text-white px-6 py-3 font-bold">
                {isKo ? '시나리오 A — 새벽 3시 자동 실행' : 'Scenario A — 3 AM Automatic Execution'}
              </div>
              <div className="p-6 space-y-3">
                {[
                  { label: isKo ? '상황' : 'Situation', val: isKo ? '잔고 500 USDC, 유저 명령 없음. 당분간 지출 예정 없음 (캘린더 스캔 결과)' : '$500 USDC balance, no user input. No scheduled outflows (calendar scan)' },
                  { label: isKo ? '유휴 기간' : 'Idle duration', val: isKo ? '7일 이상으로 예측' : 'Predicted 7+ days' },
                  { label: isKo ? 'APY 스캔' : 'APY scan', val: 'Aave 5.1% / Morpho 5.6% / Ondo USDY 5.0%' },
                  { label: isKo ? '선택' : 'Selected', val: isKo ? 'Morpho 5.6% (1-7일 티어, 최고 APY)' : 'Morpho 5.6% (1-7 day tier, highest APY)' },
                  { label: isKo ? '실행' : 'Executed', val: isKo ? 'USDC.approve(Morpho, 450) → Morpho.supply(marketId, 450, ...)' : 'USDC.approve(Morpho, 450) → Morpho.supply(marketId, 450, ...)' },
                  { label: isKo ? '예비금' : 'Reserve', val: isKo ? '50 USDC 현금 유지 (잔고의 10%)' : '50 USDC kept liquid (10% of balance)' },
                  { label: isKo ? '아침 알림' : 'Morning alert', val: isKo ? '"어젯밤 유휴 $450 USDC를 Morpho에 자동 예치했어요. 연 5.6% 이자 발생 중 💰"' : '"Last night I auto-deposited $450 idle USDC to Morpho. Earning 5.6% APY 💰"' },
                ].map((r, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-semibold text-slate-500">{r.label}</div>
                    <div className="col-span-2 text-slate-800">{r.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scenario B */}
            <div className="border-2 border-blue-300 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-3 font-bold">
                {isKo ? '시나리오 B — 단기 거래처 결제 전 수익 극대화' : 'Scenario B — Maximize Yield Before Short-term Vendor Payment'}
              </div>
              <div className="p-6 space-y-3">
                {[
                  { label: isKo ? '상황' : 'Situation', val: isKo ? '유저: "다음주 거래처 $5,000 결제 있어. 그전까지 굴려줘"' : 'User: "I have a $5,000 vendor payment next week. Earn yield until then"' },
                  { label: isKo ? '유휴 기간' : 'Idle duration', val: isKo ? '6일 → 1-7일 티어' : '6 days → 1-7 day tier' },
                  { label: isKo ? 'APY 스캔' : 'APY scan', val: isKo ? '6일 락업 고려 → Morpho 5.6%, Ondo USDY 5.0% (7일 락업 제외)' : '6-day lockup considered → Morpho 5.6%, Ondo USDY excluded (7-day lockup)' },
                  { label: isKo ? '선택' : 'Selected', val: 'Morpho 5.6%' },
                  { label: isKo ? '실행' : 'Executed', val: 'USDC.approve(Morpho, 5000) → Morpho.supply(marketId, 5000, ...)' },
                  { label: isKo ? '결제 1시간 전' : '1hr before payment', val: isKo ? 'Morpho.withdraw() → USDC 회수 → 거래처 즉시 정산 (2초)' : 'Morpho.withdraw() → retrieve USDC → instant settlement to vendor (2 sec)' },
                  { label: isKo ? '수익' : 'Yield earned', val: isKo ? '6일 × 5.6% / 365 × $5,000 = $4.6 (수수료 $0)' : '6 days × 5.6% / 365 × $5,000 = $4.6 (fees $0)' },
                ].map((r, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-semibold text-slate-500">{r.label}</div>
                    <div className="col-span-2 text-slate-800">{r.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scenario C */}
            <div className="border-2 border-teal-300 rounded-2xl overflow-hidden">
              <div className="bg-teal-600 text-white px-6 py-3 font-bold">
                {isKo ? '시나리오 C — 프리랜서 수령 즉시 운용' : 'Scenario C — Freelancer Instant Deployment on Receipt'}
              </div>
              <div className="p-6 space-y-3">
                {[
                  { label: isKo ? '상황' : 'Situation', val: isKo ? '미국 클라이언트로부터 $3,000 USDC 수령. 이번 달 지출 예정 없음.' : '$3,000 USDC received from US client. No planned expenses this month.' },
                  { label: isKo ? '유휴 기간' : 'Idle duration', val: isKo ? '30일 이상 → 7일+ 티어' : '30+ days → 7d+ tier' },
                  { label: isKo ? 'APY 스캔' : 'APY scan', val: 'Ondo USDY 5.0% (T-Bill), Morpho 5.6% (DeFi)' },
                  { label: isKo ? '선택' : 'Selected', val: isKo ? 'Morpho 5.6% (APY 최고, 장기 유동성 유지)' : 'Morpho 5.6% (highest APY, maintains long-term liquidity)' },
                  { label: isKo ? '실행' : 'Executed', val: 'USDC.approve(Morpho, 2700) → Morpho.supply() (reserve $300)' },
                  { label: isKo ? '월 수익' : 'Monthly yield', val: isKo ? '$2,700 × 5.6% / 12 = $12.6 (커피 25잔 ☕)' : '$2,700 × 5.6% / 12 = $12.6 (25 coffees ☕)' },
                ].map((r, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-semibold text-slate-500">{r.label}</div>
                    <div className="col-span-2 text-slate-800">{r.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Policy Engine Integration */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. Policy Engine 연동 — 자동화의 안전장치' : '5. Policy Engine Integration — Automation Safety Net'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'Idle Time Detector가 예치 프로토콜을 선택하면, 실행 전 반드시 Policy Engine을 통과해야 한다. AI Agent가 자율적으로 동작하더라도 유저가 설정한 정책 범위를 벗어날 수 없다.'
              : 'Before the Idle Time Detector executes a deposit, it must pass through the Policy Engine. Even if the AI Agent acts autonomously, it cannot exceed user-defined policy boundaries.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: '💰',
                title: isKo ? '1회 한도' : 'Per-transaction limit',
                desc: isKo ? '단일 트랜잭션에서 예치할 수 있는 최대 금액. 초과 시 실행 거부.' : 'Maximum amount per single deposit transaction. Rejected if exceeded.',
                example: isKo ? '예: 최대 $500/회' : 'Example: max $500/tx',
              },
              {
                icon: '📅',
                title: isKo ? '일일 한도' : 'Daily limit',
                desc: isKo ? '24시간 내 누적 예치 한도. 합산이 초과되면 나머지는 다음 날로 이월.' : '24h cumulative deposit limit. Excess carried to next day.',
                example: isKo ? '예: 최대 $2,000/일' : 'Example: max $2,000/day',
              },
              {
                icon: '🪙',
                title: isKo ? '허용 토큰' : 'Allowed tokens',
                desc: isKo ? '예치 가능한 토큰 화이트리스트. USDC만 허용 설정 시 다른 토큰 예치 불가.' : 'Whitelist of depositable tokens. USDC-only setting blocks all other tokens.',
                example: isKo ? '예: USDC 전용' : 'Example: USDC only',
              },
              {
                icon: '🔒',
                title: isKo ? '허용 컨트랙트' : 'Allowed contracts',
                desc: isKo ? '상호작용 가능한 스마트컨트랙트 주소 화이트리스트. Aave, Morpho, Ondo만 허용 등.' : 'Whitelist of approved smart contract addresses. E.g. Aave, Morpho, Ondo only.',
                example: isKo ? '예: Aave + Morpho만 허용' : 'Example: Aave + Morpho only',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                <div className="text-sm text-slate-600 mb-2">{item.desc}</div>
                <div className="text-xs text-blue-600 font-medium">{item.example}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-sm text-orange-800">
              <strong>{isKo ? '프리셋과 연동:' : 'Preset integration:'}</strong>{' '}
              {isKo
                ? '🍊 Orange 프리셋은 Ondo 전용 컨트랙트만 허용 + 보수적 한도. 🌶️ Chili 프리셋은 Huma Finance + Morpho + Maple 허용 + 공격적 한도. 유저는 프리셋을 선택하는 것만으로 Policy Engine 설정이 완료된다.'
                : '🍊 Orange preset allows only Ondo contract + conservative limits. 🌶️ Chili preset allows Huma Finance + Morpho + Maple + aggressive limits. Users complete Policy Engine setup simply by selecting a preset.'}
            </p>
          </div>
        </section>

        {/* Section 6: Why This Matters */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 왜 Idle Time Detector가 PayFi의 심장인가' : '6. Why the Idle Time Detector Is the Heart of PayFi'}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: isKo ? '기회비용 = 0' : 'Opportunity cost = 0',
                desc: isKo ? '전통 은행 계좌에서 1달러가 대기 중인 1초도 DeFi에서는 수익 기회다. Idle Time Detector는 이 기회비용을 제거한다.' : 'Every second $1 waits in a traditional bank account is a yield opportunity in DeFi. The Idle Time Detector eliminates this opportunity cost.',
                icon: '⏱️',
                color: 'border-blue-200 bg-blue-50',
              },
              {
                title: isKo ? '유저 개입 불필요' : 'Zero user intervention',
                desc: isKo ? '"Morpho에 예치해줘"라고 말할 필요가 없다. 입금이 발생하는 순간 자동으로 최적 프로토콜에 예치된다.' : 'No need to say "deposit to Morpho." The moment funds arrive, they\'re automatically deposited to the optimal protocol.',
                icon: '🤖',
                color: 'border-violet-200 bg-violet-50',
              },
              {
                title: isKo ? '지출 계획과 연동' : 'Synced with spending plan',
                desc: isKo ? '언제 돈이 필요한지 알기 때문에, 그 직전에 자동으로 회수한다. 유동성을 잃지 않고 수익을 낸다.' : 'Because it knows when money is needed, it automatically withdraws just before. Earns yield without sacrificing liquidity.',
                icon: '🗓️',
                color: 'border-emerald-200 bg-emerald-50',
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-slate-900 mb-2">{item.title}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <div className="text-slate-400 text-sm mb-2">{isKo ? '연간 수익 시뮬레이션 ($10,000 잔고 기준)' : 'Annual yield simulation ($10,000 balance)'}</div>
            <div className="grid grid-cols-3 gap-6 text-white">
              {[
                { label: isKo ? '은행 예금' : 'Bank account', val: '$20', sub: '0.2% APY' },
                { label: isKo ? '수동 DeFi' : 'Manual DeFi', val: '$280', sub: isKo ? '2.8% (활성화율 50%)' : '2.8% (50% utilization)' },
                { label: isKo ? 'walits Idle Detector' : 'walits Idle Detector', val: '$504', sub: '5.04% (95% utilization)', highlight: true },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-4 ${item.highlight ? 'bg-emerald-600' : 'bg-slate-700'}`}>
                  <div className="text-sm mb-1 text-slate-300">{item.label}</div>
                  <div className="text-3xl font-black">{item.val}</div>
                  <div className="text-xs mt-1 text-slate-400">{item.sub}</div>
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-500 mt-4">{isKo ? '* 유휴 활성화율: 은행 예금 0%, 수동 DeFi ~50%, walits ~95%' : '* Idle utilization: bank 0%, manual DeFi ~50%, walits ~95%'}</div>
          </div>
        </section>

        {/* Section 7: Technical Summary */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 기술 요약' : '7. Technical Summary'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">{isKo ? '구성 요소' : 'Component'}</th>
                  <th className="text-left px-4 py-3">{isKo ? '역할' : 'Role'}</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">{isKo ? '구현' : 'Implementation'}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [isKo ? '잔고 감지기' : 'Balance detector', isKo ? 'USDC 입금 이벤트 구독' : 'Subscribe to USDC deposit events', 'USDC.Transfer event listener'],
                  [isKo ? '스케줄 분석기' : 'Schedule analyzer', isKo ? '다음 지출 예정일 계산' : 'Calculate next outflow date', isKo ? '유저 캘린더 + 구독 스케줄 DB' : 'User calendar + subscription schedule DB'],
                  ['APY Scanner', isKo ? '프로토콜별 현재 APY 조회' : 'Query current APY per protocol', isKo ? '각 프로토콜 컨트랙트 직접 호출' : 'Direct contract calls per protocol'],
                  ['Policy Engine', isKo ? '예치 전 정책 검증' : 'Pre-deposit policy validation', isKo ? '백엔드 검증 레이어' : 'Backend validation layer'],
                  ['AI Agent', isKo ? '온체인 트랜잭션 실행' : 'On-chain transaction execution', isKo ? 'Claude + LangChain + wallets-mpc' : 'Claude + LangChain + walits-mpc'],
                  [isKo ? '알림 시스템' : 'Notification system', isKo ? '실행 결과 유저에게 전달' : 'Deliver execution results to user', isKo ? '푸시 알림 (앱/브라우저)' : 'Push notification (app/browser)'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 border-b border-slate-100 font-mono text-xs">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-black mb-3">
            {isKo ? '지금 이 순간도 당신의 USDC는 쉬고 있다' : 'Your USDC is idle right now'}
          </h3>
          <p className="text-blue-100 mb-6">
            {isKo
              ? 'walits Idle Time Detector는 입금 순간부터 자동으로 작동한다. 설정은 프리셋 하나 선택으로 끝난다.'
              : 'walits Idle Time Detector activates automatically from the moment of deposit. Setup is just choosing a preset.'}
          </p>
          <Link href="/" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
            {isKo ? 'walits 시작하기 →' : 'Get Started with walits →'}
          </Link>
        </div>

      </div>
    </div>
  );
}
