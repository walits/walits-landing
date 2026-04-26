'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function USDeSyntheticDollarPayFiPage() {
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
          <div className="inline-block bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'DeFi 심층 분석' : 'DeFi Deep Dive'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'USDe — 스테이블코인이 아닌 합성 달러, 그리고 PayFi 고수익 전략'
              : 'USDe — Not a Stablecoin, a Synthetic Dollar: PayFi High-Yield Strategy'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'USDC·USDT와 달러 가치는 같지만 구조는 완전히 다르다. 델타 중립 전략으로 연 8~25% APY를 만드는 USDe의 원리, 리스크, walits PayFi 통합 방안까지.'
              : 'Same dollar value as USDC/USDT, but fundamentally different structure. Delta-neutral strategy generating 8–25% APY — how USDe works, its risks, and how walits PayFi can integrate it.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 4월 26일' : 'April 26, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '22분 읽기' : '22 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/usde.jpg" alt="USDe Synthetic Dollar PayFi" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 0: USDe는 스테이블코인인가 */}
        <section>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              {isKo ? '먼저 답부터: USDe는 스테이블코인이 아니다' : 'Answer first: USDe is not a stablecoin'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'Ethena Labs는 USDe를 공식적으로 "Synthetic Dollar(합성 달러)"라고 부른다. 달러에 페깅되어 있고 $1 가치를 유지하지만, USDC·USDT처럼 은행에 실제 달러가 담보로 있는 게 아니다. 대신 파생상품 포지션의 수학적 균형으로 달러 가치를 만들어낸다.'
                : 'Ethena Labs officially calls USDe a "Synthetic Dollar," not a stablecoin. It pegs to the dollar and maintains $1 value, but unlike USDC/USDT, there is no actual dollar sitting in a bank as collateral. Instead, dollar value is created through the mathematical balance of derivative positions.'}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg">{isKo ? '종류' : 'Type'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '예시' : 'Example'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '달러 페그 방법' : 'Peg mechanism'}</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg">{isKo ? '실제 달러 담보' : 'Real $ backing'}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [isKo ? '법정화폐 담보' : 'Fiat-backed', 'USDC, USDT', isKo ? '은행에 실제 달러 예치' : 'Real USD in bank/custodian', '✅'],
                    [isKo ? '암호화폐 담보' : 'Crypto-backed', 'DAI', isKo ? 'ETH 150%+ 과담보' : 'ETH 150%+ overcollateral', '❌'],
                    [isKo ? '알고리즘 (실패)' : 'Algorithmic (failed)', 'UST', isKo ? 'LUNA 소각 알고리즘' : 'LUNA burn algorithm', '❌'],
                    [isKo ? '합성 달러' : 'Synthetic dollar', 'USDe', isKo ? '델타 중립 파생상품 헤지' : 'Delta-neutral derivative hedge', '❌'],
                  ].map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} ${row[1] === 'USDe' ? 'font-bold text-violet-700' : ''}`}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 border-b border-slate-100">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 1: 델타 중립 전략 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 델타 중립 전략 — USDe가 $1를 유지하는 방법' : '1. Delta-Neutral Strategy — How USDe Maintains $1'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'Ethena는 사용자가 USDC나 ETH를 예치하면, 같은 금액만큼 무기한 선물 시장에서 숏 포지션을 연다. 현물 롱 + 선물 숏 = 순 포지션 0. ETH 가격이 어떻게 움직여도 포트폴리오 가치는 달러 기준으로 중립을 유지한다.'
              : 'When users deposit USDC or ETH, Ethena opens an equivalent short position in the perpetual futures market. Spot long + futures short = net position zero. No matter how ETH price moves, portfolio value stays neutral in dollar terms.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-8 mb-6 font-mono text-sm">
            <div className="text-slate-400 text-xs mb-4">{isKo ? '// 델타 중립 시뮬레이션 — ETH $3,000 기준' : '// Delta-neutral simulation — ETH at $3,000'}</div>
            <div className="space-y-2">
              {[
                { label: isKo ? '사용자 예치' : 'User deposits', val: 'USDC $3,000', color: 'text-blue-400' },
                { label: isKo ? 'Ethena 현물 매수' : 'Ethena buys spot', val: 'ETH 1개 @ $3,000 (롱)', color: 'text-green-400' },
                { label: isKo ? 'Ethena 선물 숏' : 'Ethena opens short', val: 'ETH 1개 무기한 선물 숏 @ $3,000', color: 'text-red-400' },
                { label: '', val: '', color: '' },
                { label: isKo ? '시나리오 A — ETH $4,000' : 'Scenario A — ETH $4,000', val: '', color: 'text-slate-500' },
                { label: isKo ? '현물 수익' : 'Spot gain', val: '+$1,000', color: 'text-green-400' },
                { label: isKo ? '선물 손실' : 'Futures loss', val: '-$1,000', color: 'text-red-400' },
                { label: isKo ? '순 포지션' : 'Net position', val: '= $3,000 ✓', color: 'text-yellow-400' },
                { label: '', val: '', color: '' },
                { label: isKo ? '시나리오 B — ETH $2,000' : 'Scenario B — ETH $2,000', val: '', color: 'text-slate-500' },
                { label: isKo ? '현물 손실' : 'Spot loss', val: '-$1,000', color: 'text-red-400' },
                { label: isKo ? '선물 수익' : 'Futures gain', val: '+$1,000', color: 'text-green-400' },
                { label: isKo ? '순 포지션' : 'Net position', val: '= $3,000 ✓', color: 'text-yellow-400' },
              ].map((line, i) => line.val ? (
                <div key={i} className="flex justify-between">
                  <span className="text-slate-400">{line.label}</span>
                  <span className={line.color}>{line.val}</span>
                </div>
              ) : line.label ? (
                <div key={i} className={`mt-3 ${line.color}`}>{line.label}</div>
              ) : <div key={i} className="h-2" />)}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-sm text-blue-800">
              <strong>{isKo ? '핵심:' : 'Key point:'}</strong>{' '}
              {isKo
                ? '달러 가치가 유지되는 이유는 은행에 달러가 있어서가 아니라, 현물과 선물의 손익이 항상 상쇄되기 때문이다. 이 균형이 깨지지 않는 한 USDe = $1.'
                : 'Dollar value is maintained not because dollars sit in a bank, but because spot and futures P&L always cancel each other. As long as this balance holds, USDe = $1.'}
            </p>
          </div>
        </section>

        {/* Section 2: 수익 원리 — 펀딩비 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. 수익 원리 — 펀딩비(Funding Rate)' : '2. Yield Mechanism — Funding Rate'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? '델타 중립 포지션 자체는 수익이 없다. Ethena의 수익은 무기한 선물의 펀딩비에서 온다. 무기한 선물에는 현물 가격과의 괴리를 좁히기 위한 펀딩비가 주기적으로 정산된다.'
              : 'The delta-neutral position itself generates no return. Ethena\'s yield comes from perpetual futures funding rates — periodic payments that keep futures prices aligned with spot prices.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-black text-green-700 mb-2">{isKo ? '강세장 (펀딩비 양수)' : 'Bull market (positive funding)'}</div>
              <p className="text-sm text-slate-700 mb-3">
                {isKo
                  ? '시장이 강세일 때 롱 포지션이 많아진다. 선물 가격 > 현물 가격. 균형을 위해 롱이 숏에게 펀딩비를 지급한다.'
                  : 'In bull markets, more longs pile in. Futures > spot. To rebalance, longs pay shorts funding fees.'}
              </p>
              <div className="bg-slate-900 text-green-400 rounded-lg p-3 text-xs font-mono">
                {isKo ? '롱 → 숏(Ethena)에게 펀딩비 지급\n→ USDe 보유자 수익 ↑' : 'Longs pay shorts (Ethena)\n→ USDe holders earn yield ↑'}
              </div>
              <div className="text-green-600 font-bold text-sm mt-2">APY: 15~30%+</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="font-black text-red-700 mb-2">{isKo ? '약세장 (펀딩비 음수)' : 'Bear market (negative funding)'}</div>
              <p className="text-sm text-slate-700 mb-3">
                {isKo
                  ? '시장이 약세일 때 숏 포지션이 많아진다. 선물 가격 < 현물 가격. 균형을 위해 숏이 롱에게 펀딩비를 지급한다.'
                  : 'In bear markets, shorts dominate. Futures < spot. Shorts pay longs to rebalance.'}
              </p>
              <div className="bg-slate-900 text-red-400 rounded-lg p-3 text-xs font-mono">
                {isKo ? '숏(Ethena) → 롱에게 펀딩비 지급\n→ 준비금 펀드로 방어' : 'Shorts (Ethena) pay longs\n→ Reserve fund absorbs cost'}
              </div>
              <div className="text-red-600 font-bold text-sm mt-2">APY: 2~5% (준비금 방어)</div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-900 mb-3">{isKo ? 'sUSDe — 수익을 실제로 받는 방법' : 'sUSDe — How to Actually Receive Yield'}</h3>
            <div className="flex items-center gap-3 text-sm flex-wrap">
              {[
                { label: isKo ? 'USDe 보유' : 'Hold USDe', color: 'bg-slate-200 text-slate-700' },
                { label: '→', color: '' },
                { label: isKo ? 'sUSDe 스테이킹' : 'Stake → sUSDe', color: 'bg-violet-100 text-violet-700' },
                { label: '→', color: '' },
                { label: isKo ? '펀딩비 자동 누적' : 'Funding fee auto-accrues', color: 'bg-green-100 text-green-700' },
                { label: '→', color: '' },
                { label: isKo ? 'sUSDe 가치 증가 (리베이스 없음)' : 'sUSDe value increases (no rebase)', color: 'bg-blue-100 text-blue-700' },
              ].map((item, i) => item.label === '→' ? (
                <span key={i} className="text-slate-400 font-bold">{item.label}</span>
              ) : (
                <span key={i} className={`px-3 py-1.5 rounded-full font-medium ${item.color}`}>{item.label}</span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              {isKo
                ? '* USDe 자체는 수익 없음. sUSDe는 시간이 지날수록 교환 비율이 올라가는 방식 (1 sUSDe = 점점 더 많은 USDe).'
                : '* USDe itself earns nothing. sUSDe exchange rate grows over time (1 sUSDe = progressively more USDe).'}
            </p>
          </div>
        </section>

        {/* Section 3: APY 이력 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. sUSDe APY — 실제 수익률 범위' : '3. sUSDe APY — Real Yield Range'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: isKo ? '강세장 피크' : 'Bull market peak', val: '30%+', desc: isKo ? '2024년 3월 BTC ETF 이후' : 'Post BTC ETF Mar 2024', color: 'bg-green-500' },
              { label: isKo ? '평균 (강세)' : 'Average (bull)', val: '15~25%', desc: isKo ? '강세장 지속 구간' : 'Sustained bull conditions', color: 'bg-emerald-500' },
              { label: isKo ? '중립 시장' : 'Neutral market', val: '8~12%', desc: isKo ? '일반적인 시장 환경' : 'Normal market conditions', color: 'bg-blue-500' },
              { label: isKo ? '약세장' : 'Bear market', val: '2~5%', desc: isKo ? '준비금 펀드로 방어' : 'Reserve fund defense', color: 'bg-orange-500' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-slate-200">
                <div className={`${item.color} text-white text-center py-2 text-xs font-semibold`}>{item.label}</div>
                <div className="p-4 text-center">
                  <div className="text-2xl font-black text-slate-900">{item.val}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-600">
              <strong>{isKo ? '비교:' : 'Comparison:'}</strong>{' '}
              {isKo
                ? 'Aave 5.1% · Morpho 5.6% · Ondo USDY 5.0%는 수익률이 안정적이지만 낮다. sUSDe는 시장 상황에 따라 3~6배 더 높을 수 있지만, 반대로 더 낮아질 수도 있다. 기대수익률 자체는 역사적으로 10% 이상을 꾸준히 기록했다.'
                : 'Aave 5.1% · Morpho 5.6% · Ondo USDY 5.0% are stable but low. sUSDe can be 3–6x higher depending on market conditions, but can also drop lower. Historically, the expected yield has consistently exceeded 10%.'}
            </p>
          </div>
        </section>

        {/* Section 4: UST와 다른 점 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. "또 다른 UST 아닌가?" — 결정적 차이' : '4. "Is This Just Another UST?" — The Key Difference'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? '합성 달러라는 설명을 들으면 2022년 붕괴한 Terra UST를 떠올리기 쉽다. 하지만 구조적으로 완전히 다르다.'
              : 'Hearing "synthetic dollar" naturally recalls Terra UST, which collapsed in 2022. But the structures are fundamentally different.'}
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">{isKo ? '항목' : 'Item'}</th>
                  <th className="text-left px-4 py-3 text-red-300">Terra UST (실패)</th>
                  <th className="text-left px-4 py-3 text-violet-300 rounded-tr-lg">USDe (Ethena)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [isKo ? '담보 자산' : 'Collateral', isKo ? '없음 (순수 알고리즘)' : 'None (pure algorithm)', isKo ? 'ETH/BTC 현물 실물 보유' : 'Real ETH/BTC spot holdings'],
                  [isKo ? '페그 유지 방법' : 'Peg mechanism', isKo ? 'LUNA 소각/발행 차익거래' : 'LUNA burn/mint arbitrage', isKo ? '델타 중립 헤지 (수학적)' : 'Delta-neutral hedge (mathematical)'],
                  [isKo ? '담보 가치가 0이 될 수 있나' : 'Can collateral go to zero', isKo ? '가능 (LUNA 무한 발행)' : 'Yes (LUNA infinite minting)', isKo ? '불가 (ETH가 0이 되지 않는 한)' : 'No (unless ETH goes to zero)'],
                  [isKo ? '수익 원천' : 'Yield source', isKo ? 'Anchor Protocol (지속 불가 20%)' : 'Anchor Protocol (unsustainable 20%)', isKo ? '실제 시장 펀딩비' : 'Real market funding rates'],
                  [isKo ? '붕괴 시나리오' : 'Collapse scenario', isKo ? 'LUNA 가치 하락 → 페그 이탈 → 뱅크런' : 'LUNA value drop → depeg → bank run', isKo ? '펀딩비 장기 음수 + 준비금 고갈' : 'Extended negative funding + reserve depletion'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 border-b border-slate-100 font-semibold text-slate-700">{row[0]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-red-600">{row[1]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-violet-700 font-medium">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <p className="text-sm text-violet-900">
              <strong>{isKo ? '핵심 차이:' : 'Core difference:'}</strong>{' '}
              {isKo
                ? 'UST는 담보가 없었다. USDe는 실제 ETH/BTC를 보유하고 있고, 그 자산으로 헤지 포지션을 유지한다. ETH가 $3,000에서 $100으로 폭락해도 현물 손실과 선물 이익이 상쇄되어 달러 가치는 유지된다. 단, 펀딩비가 장기간 음수이면 준비금이 소진될 수 있다는 리스크는 존재한다.'
                : 'UST had no collateral. USDe holds real ETH/BTC and maintains hedge positions with those assets. Even if ETH crashes from $3,000 to $100, spot losses and futures gains cancel out. The real risk is extended negative funding rates depleting the reserve fund.'}
            </p>
          </div>
        </section>

        {/* Section 5: 리스크 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. USDe의 실제 리스크' : '5. Real Risks of USDe'}
          </h2>

          <div className="space-y-4">
            {[
              {
                level: isKo ? '중간' : 'Medium',
                color: 'border-yellow-300 bg-yellow-50',
                badge: 'bg-yellow-500',
                title: isKo ? '펀딩비 음수 리스크' : 'Negative funding rate risk',
                desc: isKo
                  ? '약세장이 길어지면 펀딩비가 음수로 전환된다. Ethena는 준비금 펀드(Insurance Fund)로 방어하지만, 준비금이 충분하지 않으면 APY가 마이너스가 될 수 있다. 역사적으로 음수 펀딩비 지속 기간은 수주를 넘기지 않았다.'
                  : 'Extended bear markets turn funding rates negative. Ethena defends with an Insurance Fund, but insufficient reserves could push APY negative. Historically, negative funding periods have not exceeded a few weeks.',
                fact: isKo ? '역사적 음수 펀딩 비율: 전체 기간의 약 10~20%' : 'Historical negative funding ratio: ~10–20% of all time',
              },
              {
                level: isKo ? '중간' : 'Medium',
                color: 'border-orange-300 bg-orange-50',
                badge: 'bg-orange-500',
                title: isKo ? 'CEX 거래상대방 리스크' : 'CEX counterparty risk',
                desc: isKo
                  ? 'Ethena의 숏 포지션은 Binance, OKX, Bybit, Deribit 등 중앙화 거래소에 있다. 거래소 중 하나가 파산하면 해당 포지션의 마진이 손실될 수 있다. Copper, Ceffu, Cobo 등 오프-체인 커스터디를 통해 거래소에 자산을 직접 입금하지 않는 방식으로 일부 완화.'
                  : 'Ethena\'s short positions sit on centralized exchanges — Binance, OKX, Bybit, Deribit. If one exchange fails, margin on those positions could be lost. Partially mitigated by off-exchange settlement via Copper, Ceffu, Cobo — assets never directly deposited on CEXs.',
                fact: isKo ? '분산 거래소 사용으로 단일 CEX 리스크 < 전체 포지션의 25%' : 'Distributed across exchanges: single CEX exposure < 25% of total',
              },
              {
                level: isKo ? '낮음' : 'Low',
                color: 'border-blue-300 bg-blue-50',
                badge: 'bg-blue-500',
                title: isKo ? '일시적 디페그 리스크' : 'Temporary depeg risk',
                desc: isKo
                  ? '시장 극단적 충격 시 USDe가 일시적으로 $1 아래로 내려갈 수 있다. 차익거래자들이 USDe를 매입해 페그를 복구하는 메커니즘이 있다. 장기 디페그는 델타 중립 구조상 발생하기 어렵다.'
                  : 'Under extreme market stress, USDe may temporarily drop below $1. Arbitrageurs buy discounted USDe to restore the peg. Sustained depeg is structurally difficult given the delta-neutral backing.',
                fact: isKo ? '2024년 최대 디페그: $0.97 (수시간 내 회복)' : '2024 max depeg: $0.97 (recovered within hours)',
              },
              {
                level: isKo ? '낮음' : 'Low',
                color: 'border-slate-300 bg-slate-50',
                badge: 'bg-slate-500',
                title: isKo ? '스마트컨트랙트 리스크' : 'Smart contract risk',
                desc: isKo
                  ? 'USDe, sUSDe 컨트랙트 버그 또는 해킹. 여러 차례 외부 감사를 거쳤으나 완전히 0이 아님.'
                  : 'USDe/sUSDe contract bugs or exploits. Multiple external audits completed but risk is never exactly zero.',
                fact: isKo ? '감사: Trail of Bits, Zellic, Quantstamp 등' : 'Audited by: Trail of Bits, Zellic, Quantstamp, etc.',
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.level}</span>
                  <span className="font-bold text-slate-900">{item.title}</span>
                </div>
                <p className="text-sm text-slate-700 mb-2">{item.desc}</p>
                <div className="text-xs text-slate-500 font-mono">{item.fact}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: walits PayFi 통합 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. walits PayFi — sUSDe 통합 전략' : '6. walits PayFi — sUSDe Integration Strategy'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'sUSDe의 변동 수익률은 walits의 안정 수익 프로토콜(Aave/Morpho/Ondo)과 상호보완적이다. 유휴 기간이 길고 리스크 허용도가 높은 자금에 sUSDe를 배치하면 전체 포트폴리오 APY를 끌어올릴 수 있다.'
              : 'sUSDe\'s variable yield complements walits\' stable-yield protocols (Aave/Morpho/Ondo). Deploying sUSDe for longer idle windows with higher risk tolerance can lift overall portfolio APY.'}
          </p>

          {/* Idle Time Detector 확장 */}
          <div className="bg-slate-900 rounded-2xl p-8 mb-6 font-mono text-sm">
            <div className="text-slate-400 text-xs mb-4">{isKo ? '// Idle Time Detector — sUSDe 추가 시 확장 로직' : '// Idle Time Detector — Extended logic with sUSDe'}</div>
            {[
              { color: 'text-green-400', line: 'if T_idle < 24h    →  Aave    5.1%  (즉시 출금)' },
              { color: 'text-cyan-400',  line: 'if 1d ≤ T_idle < 7d →  Morpho  5.6%  (P2P 최적)' },
              { color: 'text-amber-400', line: 'if T_idle ≥ 7d     →  Ondo USDY 5.0% (국채, 안정)' },
              { color: 'text-slate-400', line: '' },
              { color: 'text-slate-400', line: '// 고수익 프리셋 선택 시 추가 옵션' },
              { color: 'text-violet-400', line: 'if T_idle ≥ 7d && preset === "chili"' },
              { color: 'text-violet-400', line: '  → APYScanner.compare(Ondo, sUSDe)' },
              { color: 'text-violet-400', line: '  → sUSDe APY > Ondo APY ? sUSDe : Ondo' },
            ].map((line, i) => (
              <div key={i} className={`${line.color} leading-7`}>{line.line || '\u00A0'}</div>
            ))}
          </div>

          {/* 프리셋 업데이트 */}
          <h3 className="font-bold text-slate-900 mb-4">{isKo ? '투자 프리셋 업데이트안' : 'Investment Preset Update'}</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                emoji: '🍊', name: 'Orange', apy: '4–5%',
                current: isKo ? 'Ondo USDY 100%' : 'Ondo USDY 100%',
                updated: isKo ? '변경 없음 — 안정성 최우선' : 'No change — stability first',
                change: false,
                color: 'border-orange-200 bg-orange-50',
              },
              {
                emoji: '🍎', name: 'Apple', apy: '6–8%',
                current: isKo ? 'Ondo 40% + Morpho 40% + Aave 20%' : 'Ondo 40% + Morpho 40% + Aave 20%',
                updated: isKo ? '변경 없음 — 현 구성 최적' : 'No change — current allocation optimal',
                change: false,
                color: 'border-red-200 bg-red-50',
              },
              {
                emoji: '🌶️', name: 'Chili', apy: '10–18%',
                current: isKo ? 'Huma 50% + Morpho 30% + Maple 20%' : 'Huma 50% + Morpho 30% + Maple 20%',
                updated: isKo ? 'Huma 40% + sUSDe 30% + Morpho 30%' : 'Huma 40% + sUSDe 30% + Morpho 30%',
                change: true,
                color: 'border-red-400 bg-red-50',
              },
              {
                emoji: '🔥', name: isKo ? 'High Yield (신규)' : 'High Yield (new)',
                apy: '15–25%',
                current: '—',
                updated: isKo ? 'sUSDe 60% + Huma Finance 40%' : 'sUSDe 60% + Huma Finance 40%',
                change: true,
                color: 'border-violet-300 bg-violet-50',
              },
            ].map((preset, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${preset.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{preset.emoji}</span>
                    <span className="font-black text-slate-900">{preset.name}</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{preset.apy}</span>
                </div>
                {preset.change ? (
                  <>
                    <div className="text-xs text-slate-400 line-through mb-1">{preset.current}</div>
                    <div className="text-xs font-semibold text-violet-700">→ {preset.updated}</div>
                  </>
                ) : (
                  <div className="text-xs text-slate-600">{preset.updated}</div>
                )}
              </div>
            ))}
          </div>

          {/* ENPL과 결합 */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-bold text-orange-800 mb-2">{isKo ? 'ENPL + sUSDe 조합' : 'ENPL + sUSDe Combination'}</h3>
            <p className="text-sm text-slate-700 mb-3">
              {isKo
                ? 'ENPL(원금 예치 → 이자로 결제) 구조에서 sUSDe를 원금 운용처로 쓰면 커버리지 목표 원금이 대폭 줄어든다.'
                : 'Using sUSDe as ENPL principal deployment dramatically reduces the required principal for 100% coverage.'}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-3 py-2 rounded-tl-lg">{isKo ? '운용 프로토콜' : 'Protocol'}</th>
                    <th className="text-left px-3 py-2">APY</th>
                    <th className="text-left px-3 py-2 rounded-tr-lg">{isKo ? '$183/월 100% 커버 필요 원금' : 'Required principal for $183/mo'}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Morpho', '5.6%', '$39,107'],
                    ['Ondo USDY', '5.0%', '$43,920'],
                    ['sUSDe (중립)', '10%', '$21,960'],
                    ['sUSDe (강세)', '20%', '$10,980'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-3 py-2 border-b border-slate-100 font-medium">{row[0]}</td>
                      <td className="px-3 py-2 border-b border-slate-100 text-emerald-600 font-bold">{row[1]}</td>
                      <td className={`px-3 py-2 border-b border-slate-100 font-bold ${i >= 2 ? 'text-violet-600' : 'text-slate-700'}`}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {isKo ? '* sUSDe APY는 시장 상황에 따라 변동. 보수적 계산은 10% 기준 권장.' : '* sUSDe APY varies by market. Conservative calculation recommended at 10%.'}
            </p>
          </div>
        </section>

        {/* Section 7: 요약 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 요약 — USDe를 어떻게 볼 것인가' : '7. Summary — How to Think About USDe'}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: isKo ? '스테이블코인인가?' : 'Is it a stablecoin?',
                answer: isKo ? '아니다. 합성 달러다.' : 'No. It\'s a synthetic dollar.',
                detail: isKo ? '달러 가치는 유지하지만 실제 달러 담보 없음. 파생상품 헤지로 페그 유지.' : 'Maintains dollar value but has no real dollar backing. Peg maintained via derivatives hedge.',
                icon: '🔍',
                color: 'border-slate-200',
              },
              {
                title: isKo ? 'UST처럼 망하나?' : 'Will it collapse like UST?',
                answer: isKo ? '구조가 다르다.' : 'Different structure.',
                detail: isKo ? 'ETH/BTC 실물 자산 보유. 담보 없는 순수 알고리즘이 아님. 단, 고수익은 시장 조건 의존.' : 'Holds real ETH/BTC. Not a pure algorithm with no collateral. High yield depends on market conditions.',
                icon: '⚡',
                color: 'border-yellow-200',
              },
              {
                title: isKo ? 'walits에 넣을 수 있나?' : 'Can walits use it?',
                answer: isKo ? '가능, 조건부로.' : 'Yes, conditionally.',
                detail: isKo ? '장기 유휴 + 고수익 허용 프리셋(Chili, High Yield)에 한해 통합. 단기·안정형에는 Aave/Morpho/Ondo 유지.' : 'Integrate for long-term idle + high-yield presets (Chili, High Yield). Keep Aave/Morpho/Ondo for short-term and stable strategies.',
                icon: '✅',
                color: 'border-green-200',
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-slate-500 text-sm mb-1">{item.title}</div>
                <div className="font-black text-slate-900 text-lg mb-2">{item.answer}</div>
                <div className="text-sm text-slate-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-black mb-3">
            {isKo ? 'walits로 시장 상황에 맞는 최적 수익을 자동으로' : 'Automatically earn optimal yield for any market with walits'}
          </h3>
          <p className="text-violet-100 mb-6">
            {isKo
              ? 'Aave·Morpho·Ondo의 안정 수익과 sUSDe의 고수익을 APY Scanner가 실시간 비교해 자동 선택한다.'
              : 'APY Scanner compares Aave·Morpho·Ondo stable yields with sUSDe high yields in real time and auto-selects the best.'}
          </p>
          <Link href="/" className="inline-block bg-white text-violet-700 font-bold px-8 py-3 rounded-full hover:bg-violet-50 transition-colors">
            {isKo ? 'walits 시작하기 →' : 'Get Started with walits →'}
          </Link>
        </div>

      </div>
    </div>
  );
}
