'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SolanaDefiDeepDivePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          ← 블로그 목록
        </Link>
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {(['ko', 'en'] as const).map((l) => (
            <button key={l} onClick={() => setLanguage(l)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === l ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>
              {l === 'ko' ? '한국어' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-violet-900 to-green-900">
          <Image src="/blog/solana.jpg" alt="Solana DeFi" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-violet-700/80 text-white px-3 py-1 rounded-full">
              {language === 'ko' ? 'DeFi 시리즈 14' : 'DeFi Series 14'}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 14 — Solana DeFi 심층 분석: Jupiter + Kamino로 완성하는 고속 수익 전략</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">Jupiter 최적 라우팅 · Kamino CLMM 볼트 · PayFi · Solana vs Ethereum</p>
            <p className="text-gray-400 text-xs font-mono mb-10">2026년 4월 6일 · 25분</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Solana TPS', value: '65,000+', sub: '이론적 최대 처리량' },
                { label: '평균 수수료', value: '$0.001', sub: '트랜잭션당' },
                { label: 'Jupiter 거래량', value: '$1B+/일', sub: '일일 DEX 거래량' },
                { label: 'Kamino TVL', value: '$2B+', sub: '2025년 기준' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · 왜 Solana DeFi인가?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ethereum은 DeFi의 탄생지다. Uniswap, Aave, Compound — 이름만 들어도 알 수 있는 프로토콜들이 모두 Ethereum 위에서 시작됐다. 그런데 2023년 이후 눈에 띄게 성장한 체인이 있다. 바로 <strong>Solana</strong>다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solana가 주목받는 이유는 단순하다. <strong>빠르고, 싸다.</strong> 이 두 가지가 DeFi 사용 경험을 근본적으로 바꾼다. 소액 스왑에 $20 수수료를 내야 했던 Ethereum과 달리, Solana에서는 $0.001 미만으로 동일한 작업을 할 수 있다.
            </p>

            {/* 비교 표 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Ethereum DeFi vs Solana DeFi — 핵심 지표 비교</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { metric: '처리 속도', eth: '15 TPS', sol: '65,000+ TPS', winner: 'sol' },
                  { metric: '평균 수수료', eth: '$5 ~ $50', sol: '$0.001', winner: 'sol' },
                  { metric: '블록 확정성', eth: '12초', sol: '400ms', winner: 'sol' },
                ].map((row, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{row.metric}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Ethereum</span>
                        <span className="text-sm font-semibold text-orange-500">{row.eth}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Solana</span>
                        <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{row.sol}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">walits가 ETH + SOL 동시 지원하는 이유</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                대금액 DeFi(담보 대출, 장기 유동성)는 Ethereum의 보안성과 깊은 TVL이 유리하다. 반면 <strong>빈번한 소액 거래, 즉시 송금, 실시간 스왑</strong>에는 Solana의 속도와 수수료 우위가 결정적이다. walits는 두 체인의 강점을 모두 활용하기 위해 멀티체인을 지원한다.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solana 생태계 규모는 이미 $8B+ TVL로 성숙 단계에 진입했다. Jupiter(DEX 애그리게이터), Kamino(렌딩+볼트), Marinade(스테이킹), Jito(MEV 최적화 스테이킹) 등 각 카테고리에 검증된 플레이어가 자리 잡았다.
            </p>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Solana DeFi 지형도</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Solana DeFi 생태계는 각 카테고리별로 명확한 강자가 있다. 각 프로토콜을 한 줄로 이해해보자.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  cat: 'DEX',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  items: [
                    { name: 'Raydium', desc: 'Solana 최초 AMM DEX. 오더북(OpenBook)과 유동성 연동. 집중 유동성(CLMM) 풀 지원.' },
                    { name: 'Orca', desc: 'Whirlpool CLMM을 통해 자본 효율성 극대화. 유저 친화적 UI로 개인 투자자에게 인기.' },
                  ],
                },
                {
                  cat: '애그리게이터',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  items: [
                    { name: 'Jupiter', desc: 'Solana 모든 DEX 유동성을 한 번에 스캔해 최적 경로로 스왑. Limit Order, DCA, Perps까지 통합.' },
                  ],
                },
                {
                  cat: '렌딩',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  items: [
                    { name: 'Kamino', desc: '렌딩 + CLMM 볼트 통합 플랫폼. Multiply로 원클릭 레버리지, 자동 복리 볼트 제공.' },
                    { name: 'MarginFi', desc: '리스크 엔진 기반의 크로스 마진 렌딩. 고급 사용자를 위한 포트폴리오 마진 지원.' },
                    { name: 'Solend', desc: 'Solana 최초 렌딩 프로토콜. 안정적이고 검증된 TVL 보유.' },
                  ],
                },
                {
                  cat: '스테이킹',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  dot: 'bg-teal-500',
                  items: [
                    { name: 'Marinade (mSOL)', desc: '액체 스테이킹 SOL. 다수의 밸리데이터에 자동 분산해 탈중앙성 강화.' },
                    { name: 'Jito (jitoSOL)', desc: 'MEV 수익을 스테이킹 APY에 추가. mSOL 대비 소폭 높은 수익률.' },
                  ],
                },
                {
                  cat: '스테이블코인',
                  badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10',
                  dot: 'bg-yellow-500',
                  items: [
                    { name: 'USDC (native)', desc: 'Circle이 Solana에 네이티브 발행. 브릿지 없이 원본 USDC 사용 가능. 최고 유동성.' },
                    { name: 'USDT', desc: 'Tether의 Solana 버전. USDC와 함께 Solana DeFi의 양대 스테이블코인.' },
                  ],
                },
              ].map((cat, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${cat.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${cat.dot}`} />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cat.badge}`}>{cat.cat}</span>
                    </div>
                    <div className="space-y-2">
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex gap-2 items-start text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-violet-500 flex-shrink-0 mt-0.5 font-bold">▸</span>
                          <span><strong>{item.name}</strong> — {item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Jupiter: Solana의 1inch</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Jupiter는 Solana 위에 존재하는 모든 DEX(Raydium, Orca, Whirlpool, Meteora 등)의 유동성을 한 번에 스캔해 최적의 경로로 스왑을 실행하는 <strong>DEX 애그리게이터</strong>다. Ethereum의 1inch, Paraswap과 같은 역할이지만 Solana의 속도와 수수료 덕분에 훨씬 더 자주, 더 작은 금액에도 유효하게 작동한다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: 'Jupiter Swap',
                  sub: '최적 라우팅 DEX 스왑',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  titleColor: 'text-violet-700 dark:text-violet-300',
                  points: [
                    '멀티홉 라우팅: A→B→C 경로로 더 좋은 가격 탐색',
                    '스플릿 라우트: 여러 DEX에 동시 분산 실행',
                    '실시간 가격 비교 후 최소 슬리피지 경로 선택',
                  ],
                },
                {
                  title: 'Jupiter Limit Order',
                  sub: '지정가 주문',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  points: [
                    '목표 가격 도달 시 자동 스왑 실행',
                    '온체인에서 처리 — 중앙화 거래소 불필요',
                    '수수료 없이 원하는 가격에 자동 매매',
                  ],
                },
                {
                  title: 'Jupiter DCA',
                  sub: '자동 분할 매수 (Dollar Cost Averaging)',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  titleColor: 'text-green-700 dark:text-green-300',
                  points: [
                    '일/주/월 단위로 자동 분할 매수 스케줄 설정',
                    '시장 타이밍 리스크를 시간 분산으로 완화',
                    '소액 수수료로 완전 자동화 DCA 실행',
                  ],
                },
                {
                  title: 'Jupiter Perps',
                  sub: '온체인 무기한 선물',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                  titleColor: 'text-orange-700 dark:text-orange-300',
                  points: [
                    'SOL, ETH, BTC 무기한 선물 거래',
                    '최대 100x 레버리지 (온체인)',
                    'JLP(Jupiter Liquidity Pool) 유동성 제공으로 수수료 수익',
                  ],
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-5 ${card.color}`}>
                  <p className={`text-sm font-bold mb-0.5 ${card.titleColor}`}>{card.title}</p>
                  <p className="text-xs text-gray-500 mb-3">{card.sub}</p>
                  <ul className="space-y-1.5">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">JUP 토큰 거버넌스</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                JUP는 Jupiter 프로토콜의 거버넌스 토큰이다. 보유자는 새 기능 추가, 수수료 구조 변경, 파트너십 승인 등 주요 결정에 투표권을 행사할 수 있다. 또한 Jupiter는 수익의 일부를 JUP 스테이킹 보상으로 환원하는 구조를 논의 중이다.
              </p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Jupiter 라우팅이 왜 중요한가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              단순히 "여러 DEX 중 최저가"를 찾는 것이 전부가 아니다. Jupiter의 핵심은 <strong>한 번의 스왑을 여러 DEX에 동시에 분산 실행</strong>함으로써 슬리피지 자체를 줄이는 데 있다. 큰 금액일수록 이 차이가 극적으로 벌어진다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">SOL → USDC 10,000달러 스왑 시나리오 비교</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">Raydium 직접 스왑</p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">슬리피지</span>
                      <span className="font-bold text-red-500 text-lg">0.80%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">실질 손실</span>
                      <span className="font-bold text-red-500 text-lg">$80</span>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-2">
                      <p className="text-xs text-gray-400">단일 풀에 $10,000 집중 → 가격 충격 발생</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-violet-600 dark:text-violet-400 border-b border-violet-200 dark:border-violet-800 pb-2">Jupiter 최적 라우팅</p>
                  <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">슬리피지</span>
                      <span className="font-bold text-violet-600 dark:text-violet-400 text-lg">0.15%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">실질 손실</span>
                      <span className="font-bold text-green-600 dark:text-green-400 text-lg">$15</span>
                    </div>
                    <div className="border-t border-violet-100 dark:border-violet-800/50 pt-2">
                      <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">3개 DEX 동시 분산 실행 → 가격 충격 최소화</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-white dark:bg-gray-900 rounded-lg p-4">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">$10,000 스왑 시 절감액 비교</p>
                <div className="space-y-2">
                  {[
                    { label: 'Raydium 직접 손실', value: '$80', color: 'text-red-500', bar: 'w-[80%] bg-red-200 dark:bg-red-900/40' },
                    { label: 'Jupiter 손실', value: '$15', color: 'text-violet-600 dark:text-violet-400 font-bold', bar: 'w-[15%] bg-violet-300 dark:bg-violet-700' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 w-36 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className={`h-2 rounded-full ${row.bar}`} />
                      </div>
                      <span className={`w-16 text-right ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-violet-500 mt-2">Jupiter에서 $65 절감 — 수수료 대비 순이익 (Raydium 직접 대비 -81%)</p>
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-violet-700 dark:text-violet-400 mb-2">walits에서의 Jupiter 활용</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                walits는 토큰 스왑 시 Jupiter API를 활용해 사용자에게 항상 최적의 가격을 제공한다. 사용자는 어떤 DEX를 사용할지 고민할 필요 없이 walits 앱 내에서 최적 라우팅이 자동 적용된다.
              </p>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Kamino Finance: Solana의 Morpho</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kamino은 Solana에서 가장 정교한 DeFi 플랫폼 중 하나다. 단순한 렌딩 프로토콜을 넘어 <strong>렌딩, 레버리지, CLMM 유동성 볼트</strong>를 하나의 플랫폼에서 통합 제공한다. Ethereum의 Morpho가 Aave 위에서 효율성을 극대화했다면, Kamino은 Solana의 CLMM DEX(Orca Whirlpool, Raydium) 위에서 자본 효율성을 극대화한다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Kamino Lend',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: '렌딩',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  points: [
                    'USDC, SOL, JitoSOL, mSOL 등 주요 자산 예치 및 대출',
                    'USDC 예치 APY: ~6~8% (Solana 생태계 수요 반영)',
                    'JitoSOL 담보로 USDC 대출 → 스테이킹 수익 + 유동성 동시 확보',
                    '격리 마켓(Isolated Markets)으로 리스크 분리',
                  ],
                },
                {
                  title: 'Kamino Multiply',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  badgeText: '레버리지',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    '한 번의 클릭으로 레버리지 SOL 또는 JitoSOL 포지션 구성',
                    '자동 루핑: SOL 담보 → USDC 대출 → SOL 구매 → 반복',
                    '레버리지 배수 선택 가능 (1x ~ 최대 약 5x)',
                    '청산 리스크 모니터링 및 자동 건강도 관리',
                  ],
                },
                {
                  title: 'Kamino Liquidity Vaults',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  badgeText: 'CLMM 볼트',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  points: [
                    'Orca Whirlpool, Raydium CLMM LP 포지션 자동 관리',
                    '가격 범위 이탈 시 자동 리밸런싱',
                    '수수료 수익 자동 복리 재투자',
                    '단일 자산(USDC) 예치만으로 LP 수익 획득 가능',
                  ],
                },
              ].map((product, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${product.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${product.dot}`} />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${product.badge}`}>{product.badgeText}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {product.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Kamino의 CLMM 자동 관리 — 복잡함을 없애다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap v3가 도입한 집중 유동성(CLMM, Concentrated Liquidity Market Maker)은 기존 AMM 대비 훨씬 높은 자본 효율성을 제공한다. Solana에서는 Orca의 Whirlpool과 Raydium이 같은 방식을 구현한다. 그런데 이 강력한 기능에는 치명적인 문제가 있다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">CLMM의 문제점과 Kamino의 해결책</p>
              <div className="space-y-0">
                {[
                  {
                    step: '문제 1',
                    title: '범위 이탈 시 수수료 못 받음',
                    desc: '유동성을 $90~$110 범위에 집중했는데 SOL 가격이 $115로 올라가면? 범위를 벗어난 순간부터 수수료 수입이 0이 된다. 그동안 유동성은 "잠겨있는" 상태.',
                    color: 'bg-red-500',
                  },
                  {
                    step: '문제 2',
                    title: '지속적 리밸런싱 필요',
                    desc: '최적의 수수료를 유지하려면 가격 움직임에 따라 수시로 범위를 조정해야 한다. Gas(트랜잭션 수수료), 시간, 전문 지식이 필요한 작업 — 대부분의 개인 투자자는 불가능.',
                    color: 'bg-orange-500',
                  },
                  {
                    step: '해결책',
                    title: 'Kamino Vault: 자동 범위 조정 + 복리',
                    desc: '사용자는 USDC만 예치하면 된다. Kamino이 현재 시장 상황에 맞게 LP 범위를 자동 조정하고, 수수료 수익을 자동으로 복리 재투자한다. 전문 지식 없이도 CLMM 최고 효율 달성.',
                    color: 'bg-green-500',
                  },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{i + 1}</span>
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{s.step}</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2">walits에서의 Kamino 볼트 활용</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                사용자가 walits에 USDC를 보유하면 Kamino 볼트에 자동 예치되어 수수료 수익과 이자가 복리로 쌓인다. 사용자는 볼트 관리나 리밸런싱에 대해 전혀 신경 쓸 필요가 없다.
              </p>
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Solana PayFi 생태계</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solana는 단순한 DeFi 체인을 넘어 실제 결제 인프라로 진화하고 있다. 수수료가 $0.001 수준이고 확정성이 400ms라는 특성은 기존 금융 결제 시스템과 경쟁할 수 있는 조건이다.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Circle CCTP on Solana',
                  sub: 'Cross-Chain Transfer Protocol',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  desc: 'Ethereum에서 Solana로 USDC를 이동할 때 기존 브릿지 대신 Circle의 공식 CCTP를 사용하면 수수료가 최소화되고 신뢰 리스크가 제거된다. 네이티브 USDC를 체인 간 원활하게 이동.',
                },
                {
                  title: 'Visa × Solana USDC 파일럿',
                  sub: '2023년~ 카드 결제 정산 실험',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  desc: 'Visa는 2023년부터 Solana USDC를 카드 거래 정산 수단으로 활용하는 파일럿을 진행 중이다. 기존 은행 간 결제(T+2)를 블록체인 즉시 결제로 대체하는 실험으로, Solana의 처리 속도가 핵심 채택 이유다.',
                },
                {
                  title: 'Huma Finance on Solana',
                  sub: '공급망 금융 (Trade Finance)',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  desc: '공급망 금융(인보이스 파이낸싱, 무역 금융)을 Solana 체인에서 처리하는 프로토콜. 기존에 수일~수주 걸리던 대금 결제를 온체인 즉시 처리로 전환. 개발도상국 SME 기업들의 운전 자본 조달을 혁신.',
                },
                {
                  title: 'walits: SOL 기반 즉시 송금 + 자동 예치',
                  sub: 'Kamino 볼트 연동',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  dot: 'bg-teal-500',
                  desc: 'walits는 Solana 기반의 즉시 송금과 Kamino 자동 예치를 결합한다. 송금 대기 중인 USDC는 Kamino 볼트에서 수익을 올리고, 송금 시점에 즉시 인출되어 전송된다. 유휴 자금 제로.',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 ml-5">{item.sub}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed ml-5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Ethereum DeFi vs Solana DeFi 비교표</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              두 체인은 경쟁이 아닌 보완 관계다. 각자 잘하는 영역이 다르며, 스마트한 사용자는 용도에 따라 두 체인을 모두 활용한다.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-bold text-gray-700 dark:text-gray-300 rounded-tl-lg">항목</th>
                    <th className="text-center p-3 font-bold text-orange-600 dark:text-orange-400">Ethereum</th>
                    <th className="text-center p-3 font-bold text-violet-600 dark:text-violet-400 rounded-tr-lg">Solana</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '수수료', eth: '$5 ~ $50', sol: '$0.001', solWin: true },
                    { item: '거래 속도', eth: '12초 블록', sol: '400ms 확정', solWin: true },
                    { item: 'TVL', eth: '$50B+', sol: '$8B+', solWin: false },
                    { item: 'DEX 다양성', eth: 'Uniswap·Curve·Balancer 등', sol: 'Raydium·Orca·Meteora 등', solWin: false },
                    { item: '렌딩', eth: 'Aave·Compound·Morpho', sol: 'Kamino·MarginFi·Solend', solWin: false },
                    { item: '스테이블코인', eth: 'USDC·USDT·DAI·FRAX', sol: 'USDC·USDT (네이티브)', solWin: false },
                    { item: '소액 거래 적합성', eth: '낮음 (수수료 과다)', sol: '매우 높음', solWin: true },
                    { item: '대금액 보안성', eth: '매우 높음 (검증된 트랙레코드)', sol: '높음 (다운 이력 있음)', solWin: false },
                    { item: '적합한 용도', eth: '장기 DeFi, 대규모 담보 대출', sol: '빈번한 스왑, 즉시 결제, 소액 DCA', solWin: true },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">{row.item}</td>
                      <td className={`p-3 text-center ${row.solWin ? 'text-gray-500' : 'text-orange-600 dark:text-orange-400 font-semibold'}`}>{row.eth}</td>
                      <td className={`p-3 text-center ${row.solWin ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-500'}`}>{row.sol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* S9 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · Solana DeFi 리스크</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Solana의 장점이 실제라면, 리스크도 실제다. 균형 잡힌 시각이 필요하다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: '네트워크 다운 이력',
                  level: '높음',
                  lc: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
                  desc: '2021~2022년 Solana는 여러 차례 네트워크 중단을 경험했다. 2022년 4월에는 약 7시간 다운타임이 발생했다. 2023년 이후 안정성이 크게 개선됐지만, Ethereum 대비 운영 이력이 짧다는 점은 여전한 리스크다.',
                  color: 'border-red-200 dark:border-red-800',
                },
                {
                  title: '중앙화 우려',
                  level: '중간',
                  lc: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: '밸리데이터(검증자 노드) 운영에 고사양 하드웨어가 필요해 진입 장벽이 높다. 상위 일부 밸리데이터에 스테이킹이 집중되는 경향이 있으며, Solana Labs(팀)의 영향력도 여전히 크다.',
                  color: 'border-orange-200 dark:border-orange-800',
                },
                {
                  title: 'SOL 토큰 변동성',
                  level: '높음',
                  lc: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'SOL 가격 급락은 Solana DeFi 전체에 연쇄 청산을 유발할 수 있다. JitoSOL, mSOL을 담보로 한 포지션은 SOL 하락 시 담보 가치가 동시에 하락한다. 스테이블코인(USDC) 전략이 SOL 노출 대비 방어적이다.',
                  color: 'border-red-200 dark:border-red-800',
                },
                {
                  title: '스마트컨트랙트 리스크',
                  level: '중간',
                  lc: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'Solana 프로그램(스마트컨트랙트)은 Rust로 작성된다. 상대적으로 새로운 개발 환경으로 Solidity(Ethereum) 대비 감사 전문가 풀이 작다. 새로운 Solana 프로토콜은 추가적인 검증 시간이 필요하다.',
                  color: 'border-orange-200 dark:border-orange-800',
                },
              ].map((r, i) => (
                <div key={i} className={`border rounded-xl p-5 ${r.color}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* S10 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · walits × Solana 전략</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              두 체인의 특성을 이해하면 상황에 따른 최적 전략이 보인다. walits는 이를 자동화해 사용자가 체인을 의식하지 않아도 최적의 경로가 선택되도록 한다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  scenario: '소액 + 빈번한 거래',
                  chain: 'Solana',
                  chainColor: 'text-violet-600 dark:text-violet-400',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    '$1,000 이하 스왑 → Solana 수수료 우위가 절대적',
                    '일일 DCA 전략 → Jupiter DCA로 완전 자동화',
                    '빈번한 소액 송금 → Solana 즉시 결제 ($0.001/건)',
                  ],
                },
                {
                  scenario: '대금액 + 안전성',
                  chain: 'Ethereum',
                  chainColor: 'text-orange-600 dark:text-orange-400',
                  badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                  dot: 'bg-orange-500',
                  points: [
                    '$50,000+ 렌딩 포지션 → Ethereum Morpho/Aave 더 안전',
                    '장기 유동성 제공 → Ethereum TVL 깊이가 더 안정적',
                    '기관급 안전 요구 시 → Ethereum 보안 트랙레코드',
                  ],
                },
                {
                  scenario: 'Jupiter + Kamino 조합',
                  chain: 'Solana 최적화',
                  chainColor: 'text-green-600 dark:text-green-400',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  points: [
                    'Jupiter로 최적 스왑 → 슬리피지 최소화',
                    'Kamino Lend로 유휴 USDC 자동 수익 (~6~8% APY)',
                    'Kamino Multiply로 SOL 강세장 레버리지 전략',
                  ],
                },
                {
                  scenario: 'CCTP로 체인 간 원활한 이동',
                  chain: '멀티체인',
                  chainColor: 'text-teal-600 dark:text-teal-400',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  dot: 'bg-teal-500',
                  points: [
                    'Ethereum USDC → Solana USDC: Circle CCTP로 수수료 최소화',
                    '브릿지 해킹 리스크 없는 공식 경로 사용',
                    'walits에서 원클릭 체인 간 자금 이동 지원',
                  ],
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${s.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${s.dot}`} />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{s.scenario}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${s.badge}`}>{s.chain}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {s.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* S11 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">Ethereum이 DeFi의 은행이라면, Solana는 DeFi의 결제 터미널이다</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Solana DeFi는 Ethereum DeFi를 대체하는 것이 아니다. 서로 다른 영역에서 서로 다른 강점을 발휘한다. Ethereum은 신뢰와 깊이, Solana는 속도와 접근성.
                </p>
                <p>
                  Jupiter는 Solana 위의 모든 유동성을 하나로 묶어 개인 투자자도 기관급 스왑 효율성을 누릴 수 있게 한다. Kamino은 복잡한 CLMM 전략을 자동화해 누구나 LP 수익과 렌딩 이자를 동시에 올릴 수 있는 환경을 제공한다.
                </p>
                <p>
                  <strong className="text-white">walits에서 Solana는 일상 결제와 소액 DeFi의 인프라다.</strong> 이주 노동자가 $200를 본국에 보낼 때, 자영업자가 매일 소액으로 DCA를 실행할 때, 유휴 USDC가 Kamino에서 자동으로 수익을 올릴 때 — 그 모든 순간에 Solana가 작동한다.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY 수치는 시장 상황에 따라 변동됩니다. 예시 수치는 특정 시점을 기준으로 합니다. 투자 전 반드시 공식 문서와 감사 보고서를 확인하세요.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 14 — Solana DeFi Deep Dive: High-Speed Yield Strategies with Jupiter + Kamino</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">Jupiter Optimal Routing · Kamino CLMM Vaults · PayFi · Solana vs Ethereum</p>
            <p className="text-gray-400 text-xs font-mono mb-10">April 6, 2026 · 25 min read</p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Solana TPS', value: '65,000+', sub: 'Theoretical max throughput' },
                { label: 'Avg. Fee', value: '$0.001', sub: 'Per transaction' },
                { label: 'Jupiter Volume', value: '$1B+/day', sub: 'Daily DEX volume' },
                { label: 'Kamino TVL', value: '$2B+', sub: 'As of 2025' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Why Solana DeFi?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ethereum is the birthplace of DeFi. Uniswap, Aave, Compound — protocols that need no introduction — all started on Ethereum. Yet since 2023, one chain has grown remarkably fast: <strong>Solana</strong>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The reason is simple: <strong>it's fast and cheap.</strong> These two properties fundamentally change the DeFi experience. Unlike Ethereum where a small swap could cost $20 in fees, Solana executes the same transaction for under $0.001.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Ethereum DeFi vs Solana DeFi — Key Metrics</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { metric: 'Throughput', eth: '15 TPS', sol: '65,000+ TPS', winner: 'sol' },
                  { metric: 'Avg. Fee', eth: '$5 – $50', sol: '$0.001', winner: 'sol' },
                  { metric: 'Finality', eth: '12 seconds', sol: '400ms', winner: 'sol' },
                ].map((row, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{row.metric}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Ethereum</span>
                        <span className="text-sm font-semibold text-orange-500">{row.eth}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Solana</span>
                        <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{row.sol}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">Why walits supports both ETH + SOL</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Large-amount DeFi (collateralized loans, deep liquidity) benefits from Ethereum's security and TVL depth. But <strong>frequent small transactions, instant transfers, and real-time swaps</strong> decisively favor Solana's speed and fee advantage. walits supports both chains to harness the strengths of each.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The Solana ecosystem has already reached maturity with $8B+ TVL. Jupiter (DEX aggregator), Kamino (lending + vaults), Marinade (staking), and Jito (MEV-optimized staking) represent proven players in each category.
            </p>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · The Solana DeFi Landscape</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The Solana DeFi ecosystem has clear leaders in each category. Here's a one-line overview of each protocol.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  cat: 'DEX',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  items: [
                    { name: 'Raydium', desc: "Solana's first AMM DEX. Integrates with OpenBook order book. Supports CLMM concentrated liquidity pools." },
                    { name: 'Orca', desc: 'Maximizes capital efficiency via Whirlpool CLMM. User-friendly UI popular with retail investors.' },
                  ],
                },
                {
                  cat: 'Aggregator',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  items: [
                    { name: 'Jupiter', desc: 'Scans all DEX liquidity on Solana simultaneously and routes swaps optimally. Integrates Limit Order, DCA, and Perps.' },
                  ],
                },
                {
                  cat: 'Lending',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  items: [
                    { name: 'Kamino', desc: 'Integrated lending + CLMM vault platform. Multiply for one-click leverage; automatic compounding vaults.' },
                    { name: 'MarginFi', desc: 'Cross-margin lending with a risk engine. Portfolio margin support for advanced users.' },
                    { name: 'Solend', desc: "Solana's first lending protocol. Stable and battle-tested TVL." },
                  ],
                },
                {
                  cat: 'Staking',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  dot: 'bg-teal-500',
                  items: [
                    { name: 'Marinade (mSOL)', desc: 'Liquid staked SOL. Auto-distributes to many validators to enhance decentralization.' },
                    { name: 'Jito (jitoSOL)', desc: 'Adds MEV revenue on top of staking APY. Slightly higher yield than mSOL.' },
                  ],
                },
                {
                  cat: 'Stablecoins',
                  badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10',
                  dot: 'bg-yellow-500',
                  items: [
                    { name: 'USDC (native)', desc: "Circle natively issues USDC on Solana. Use original USDC without bridging. Highest liquidity." },
                    { name: 'USDT', desc: "Tether's Solana version. Together with USDC, the two dominant stablecoins in Solana DeFi." },
                  ],
                },
              ].map((cat, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${cat.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${cat.dot}`} />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cat.badge}`}>{cat.cat}</span>
                    </div>
                    <div className="space-y-2">
                      {cat.items.map((item, j) => (
                        <div key={j} className="flex gap-2 items-start text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-violet-500 flex-shrink-0 mt-0.5 font-bold">▸</span>
                          <span><strong>{item.name}</strong> — {item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Jupiter: The 1inch of Solana</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Jupiter is a <strong>DEX aggregator</strong> that simultaneously scans all DEXes on Solana (Raydium, Orca, Whirlpool, Meteora, etc.) and routes swaps through the optimal path. It plays the same role as 1inch or Paraswap on Ethereum — but thanks to Solana's speed and fees, it's useful for far more frequent and smaller transactions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: 'Jupiter Swap',
                  sub: 'Optimal routing DEX swap',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  titleColor: 'text-violet-700 dark:text-violet-300',
                  points: [
                    'Multi-hop routing: A→B→C path for better prices',
                    'Split routes: execute across multiple DEXes simultaneously',
                    'Real-time price comparison for minimum slippage path',
                  ],
                },
                {
                  title: 'Jupiter Limit Order',
                  sub: 'Price-target orders',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  points: [
                    'Auto-executes swap when target price is reached',
                    'Processed on-chain — no centralized exchange needed',
                    'Automated buying/selling at desired prices without fees',
                  ],
                },
                {
                  title: 'Jupiter DCA',
                  sub: 'Dollar Cost Averaging automation',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  titleColor: 'text-green-700 dark:text-green-300',
                  points: [
                    'Set daily/weekly/monthly auto-purchase schedules',
                    'Mitigate market timing risk through time diversification',
                    'Fully automated DCA execution at minimal fees',
                  ],
                },
                {
                  title: 'Jupiter Perps',
                  sub: 'On-chain perpetual futures',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                  titleColor: 'text-orange-700 dark:text-orange-300',
                  points: [
                    'SOL, ETH, BTC perpetual futures trading',
                    'Up to 100x leverage (on-chain)',
                    'Earn fees by providing liquidity to JLP (Jupiter Liquidity Pool)',
                  ],
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-5 ${card.color}`}>
                  <p className={`text-sm font-bold mb-0.5 ${card.titleColor}`}>{card.title}</p>
                  <p className="text-xs text-gray-500 mb-3">{card.sub}</p>
                  <ul className="space-y-1.5">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">JUP Token Governance</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                JUP is Jupiter's governance token. Holders vote on key decisions including new feature additions, fee structure changes, and partnership approvals. Jupiter is also discussing routing a portion of protocol revenue to JUP staking rewards.
              </p>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Why Jupiter Routing Matters</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              It's not just about finding "the cheapest DEX." Jupiter's core value is <strong>splitting a single swap across multiple DEXes simultaneously</strong> to reduce slippage itself. The difference becomes dramatic at larger amounts.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">$10,000 SOL → USDC Swap Scenario Comparison</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">Raydium Direct Swap</p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Slippage</span>
                      <span className="font-bold text-red-500 text-lg">0.80%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Effective loss</span>
                      <span className="font-bold text-red-500 text-lg">$80</span>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-2">
                      <p className="text-xs text-gray-400">$10,000 concentrated in single pool → price impact</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-violet-600 dark:text-violet-400 border-b border-violet-200 dark:border-violet-800 pb-2">Jupiter Optimal Routing</p>
                  <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Slippage</span>
                      <span className="font-bold text-violet-600 dark:text-violet-400 text-lg">0.15%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Effective loss</span>
                      <span className="font-bold text-green-600 dark:text-green-400 text-lg">$15</span>
                    </div>
                    <div className="border-t border-violet-100 dark:border-violet-800/50 pt-2">
                      <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">Split across 3 DEXes simultaneously → minimal price impact</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-white dark:bg-gray-900 rounded-lg p-4">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">Savings comparison on $10,000 swap</p>
                <div className="space-y-2">
                  {[
                    { label: 'Raydium direct loss', value: '$80', color: 'text-red-500', bar: 'w-[80%] bg-red-200 dark:bg-red-900/40' },
                    { label: 'Jupiter loss', value: '$15', color: 'text-violet-600 dark:text-violet-400 font-bold', bar: 'w-[15%] bg-violet-300 dark:bg-violet-700' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 w-36 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className={`h-2 rounded-full ${row.bar}`} />
                      </div>
                      <span className={`w-16 text-right ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-violet-500 mt-2">$65 saved with Jupiter — net gain vs. fees (−81% vs. Raydium direct)</p>
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-violet-700 dark:text-violet-400 mb-2">Jupiter API in walits</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                walits leverages the Jupiter API for token swaps, ensuring users always receive the optimal price. Users don't need to think about which DEX to use — optimal routing is applied automatically within the walits app.
              </p>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Kamino Finance: The Morpho of Solana</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kamino is one of the most sophisticated DeFi platforms on Solana. Going beyond a simple lending protocol, it provides <strong>lending, leverage, and CLMM liquidity vaults</strong> in a single integrated platform. Just as Ethereum's Morpho maximizes efficiency on top of Aave, Kamino maximizes capital efficiency on top of Solana's CLMM DEXes (Orca Whirlpool, Raydium).
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Kamino Lend',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: 'Lending',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  points: [
                    'Deposit and borrow USDC, SOL, JitoSOL, mSOL and other major assets',
                    'USDC deposit APY: ~6–8% (reflecting Solana ecosystem demand)',
                    'Use JitoSOL as collateral to borrow USDC — earn staking yield + maintain liquidity',
                    'Isolated Markets for separate risk management',
                  ],
                },
                {
                  title: 'Kamino Multiply',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  badgeText: 'Leverage',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    'Build leveraged SOL or JitoSOL positions in one click',
                    'Auto-looping: SOL collateral → borrow USDC → buy SOL → repeat',
                    'Choose leverage multiplier (1x up to ~5x)',
                    'Liquidation risk monitoring and automatic health management',
                  ],
                },
                {
                  title: 'Kamino Liquidity Vaults',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  badgeText: 'CLMM Vaults',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  points: [
                    'Auto-manages Orca Whirlpool and Raydium CLMM LP positions',
                    'Automatic rebalancing when price exits range',
                    'Auto-compounds fee revenue back into the position',
                    'Earn LP yields by depositing a single asset (USDC)',
                  ],
                },
              ].map((product, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${product.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${product.dot}`} />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${product.badge}`}>{product.badgeText}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {product.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Kamino's CLMM Auto-Management — Eliminating Complexity</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Concentrated Liquidity Market Makers (CLMM), introduced by Uniswap v3, offer dramatically higher capital efficiency than traditional AMMs. On Solana, Orca's Whirlpool and Raydium implement the same approach. But this powerful feature has a fatal problem.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">CLMM Problems and Kamino's Solutions</p>
              <div className="space-y-0">
                {[
                  {
                    step: 'Problem 1',
                    title: 'No fees earned when price exits range',
                    desc: 'You concentrated liquidity in the $90–$110 range but SOL price moves to $115? The moment price exits the range, fee income drops to zero. Meanwhile your liquidity is "locked" and idle.',
                    color: 'bg-red-500',
                  },
                  {
                    step: 'Problem 2',
                    title: 'Continuous rebalancing required',
                    desc: 'Maintaining optimal fees requires adjusting your range constantly as price moves. This requires gas (transaction fees), time, and expertise — impossible for most retail investors.',
                    color: 'bg-orange-500',
                  },
                  {
                    step: 'Solution',
                    title: 'Kamino Vault: Auto range adjustment + compounding',
                    desc: 'Users just deposit USDC. Kamino automatically adjusts the LP range to match current market conditions and auto-compounds fee revenue. Maximum CLMM efficiency with zero expertise required.',
                    color: 'bg-green-500',
                  },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{i + 1}</span>
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{s.step}</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-2">Kamino Vault in walits</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                When users hold USDC in walits, it is automatically deposited into a Kamino vault where fee revenue and interest compound automatically. Users don't need to think about vault management or rebalancing at all.
              </p>
            </div>

            {/* S7 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · The Solana PayFi Ecosystem</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Solana is evolving beyond a DeFi chain into real payment infrastructure. Fees of $0.001 and 400ms finality create conditions that can genuinely compete with traditional financial payment systems.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Circle CCTP on Solana',
                  sub: 'Cross-Chain Transfer Protocol',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  desc: "When moving USDC from Ethereum to Solana, using Circle's official CCTP instead of traditional bridges minimizes fees and eliminates trust risks. Move native USDC seamlessly across chains.",
                },
                {
                  title: 'Visa × Solana USDC Pilot',
                  sub: 'Card payment settlement experiment, 2023–present',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  desc: "Since 2023, Visa has been piloting the use of Solana USDC as a card transaction settlement medium. This experiment replaces traditional interbank settlement (T+2) with instant blockchain settlement — Solana's throughput is the key reason for adoption.",
                },
                {
                  title: 'Huma Finance on Solana',
                  sub: 'Trade Finance on-chain',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  desc: 'A protocol that processes supply chain finance (invoice financing, trade finance) on the Solana chain. Converting payment settlements that traditionally took days or weeks into instant on-chain processing. Revolutionizing working capital access for SMEs in emerging markets.',
                },
                {
                  title: 'walits: SOL-based instant transfer + auto-deposit',
                  sub: 'Kamino vault integration',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  dot: 'bg-teal-500',
                  desc: 'walits combines Solana-based instant transfers with Kamino auto-deposit. USDC waiting to be sent earns yield in Kamino vaults, then is instantly withdrawn and transferred at the moment of sending. Zero idle funds.',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 ml-5">{item.sub}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed ml-5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* S8 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Ethereum DeFi vs Solana DeFi — Comparison Table</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The two chains are complementary, not competitive. Each excels in different areas, and smart users leverage both depending on their needs.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-bold text-gray-700 dark:text-gray-300 rounded-tl-lg">Category</th>
                    <th className="text-center p-3 font-bold text-orange-600 dark:text-orange-400">Ethereum</th>
                    <th className="text-center p-3 font-bold text-violet-600 dark:text-violet-400 rounded-tr-lg">Solana</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'Fees', eth: '$5 – $50', sol: '$0.001', solWin: true },
                    { item: 'Speed', eth: '12s blocks', sol: '400ms finality', solWin: true },
                    { item: 'TVL', eth: '$50B+', sol: '$8B+', solWin: false },
                    { item: 'DEX diversity', eth: 'Uniswap · Curve · Balancer+', sol: 'Raydium · Orca · Meteora+', solWin: false },
                    { item: 'Lending', eth: 'Aave · Compound · Morpho', sol: 'Kamino · MarginFi · Solend', solWin: false },
                    { item: 'Stablecoins', eth: 'USDC · USDT · DAI · FRAX', sol: 'USDC · USDT (native)', solWin: false },
                    { item: 'Small tx suitability', eth: 'Low (fees too high)', sol: 'Very high', solWin: true },
                    { item: 'Large-amount security', eth: 'Very high (proven track record)', sol: 'High (past downtime history)', solWin: false },
                    { item: 'Best use case', eth: 'Long-term DeFi, large collateral loans', sol: 'Frequent swaps, instant payments, micro DCA', solWin: true },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="p-3 font-semibold text-gray-700 dark:text-gray-300">{row.item}</td>
                      <td className={`p-3 text-center ${row.solWin ? 'text-gray-500' : 'text-orange-600 dark:text-orange-400 font-semibold'}`}>{row.eth}</td>
                      <td className={`p-3 text-center ${row.solWin ? 'text-violet-600 dark:text-violet-400 font-semibold' : 'text-gray-500'}`}>{row.sol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* S9 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · Solana DeFi Risks</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              If Solana's advantages are real, so are the risks. A balanced perspective is essential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: 'Network Downtime History',
                  level: 'High',
                  lc: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'Between 2021 and 2022, Solana experienced multiple network outages. In April 2022, a roughly 7-hour downtime occurred. Stability has improved significantly since 2023, but Solana still has a shorter operational track record compared to Ethereum.',
                  color: 'border-red-200 dark:border-red-800',
                },
                {
                  title: 'Centralization Concerns',
                  level: 'Medium',
                  lc: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'Validator node operation requires high-spec hardware, creating high barriers to entry. Staking tends to concentrate among a small number of top validators, and Solana Labs (the team) still wields considerable influence.',
                  color: 'border-orange-200 dark:border-orange-800',
                },
                {
                  title: 'SOL Token Volatility',
                  level: 'High',
                  lc: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'A sharp SOL price drop can trigger cascading liquidations across Solana DeFi. Positions collateralized with JitoSOL or mSOL see collateral value fall simultaneously with SOL. Stablecoin (USDC) strategies are more defensive against SOL exposure.',
                  color: 'border-red-200 dark:border-red-800',
                },
                {
                  title: 'Smart Contract Risk',
                  level: 'Medium',
                  lc: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'Solana programs (smart contracts) are written in Rust. As a relatively newer development environment, the pool of audit specialists is smaller than for Solidity (Ethereum). New Solana protocols require additional validation time.',
                  color: 'border-orange-200 dark:border-orange-800',
                },
              ].map((r, i) => (
                <div key={i} className={`border rounded-xl p-5 ${r.color}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* S10 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · walits × Solana Strategy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Understanding the characteristics of each chain reveals the optimal strategy for each situation. walits automates this so users don't need to think about chains — the optimal path is selected automatically.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  scenario: 'Small amounts + frequent transactions',
                  chain: 'Solana',
                  chainColor: 'text-violet-600 dark:text-violet-400',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    'Swaps under $1,000 → Solana fee advantage is absolute',
                    'Daily DCA strategy → fully automated with Jupiter DCA',
                    'Frequent micro-transfers → Solana instant settlement ($0.001/tx)',
                  ],
                },
                {
                  scenario: 'Large amounts + security',
                  chain: 'Ethereum',
                  chainColor: 'text-orange-600 dark:text-orange-400',
                  badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                  dot: 'bg-orange-500',
                  points: [
                    '$50,000+ lending positions → Ethereum Morpho/Aave safer',
                    'Long-term liquidity provision → Ethereum TVL depth more stable',
                    'Institutional-grade security required → Ethereum security track record',
                  ],
                },
                {
                  scenario: 'Jupiter + Kamino combination',
                  chain: 'Solana-optimized',
                  chainColor: 'text-green-600 dark:text-green-400',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  dot: 'bg-green-500',
                  points: [
                    'Jupiter for optimal swaps → minimize slippage',
                    'Kamino Lend for idle USDC auto-yield (~6–8% APY)',
                    'Kamino Multiply for SOL bull-market leverage strategy',
                  ],
                },
                {
                  scenario: 'CCTP for seamless cross-chain movement',
                  chain: 'Multi-chain',
                  chainColor: 'text-teal-600 dark:text-teal-400',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  dot: 'bg-teal-500',
                  points: [
                    'Ethereum USDC → Solana USDC: Circle CCTP for minimal fees',
                    'Official path with no bridge hack risk',
                    'One-click cross-chain fund movement supported in walits',
                  ],
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${s.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${s.dot}`} />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{s.scenario}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${s.badge}`}>{s.chain}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {s.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">If Ethereum is DeFi's Bank, Solana is DeFi's Payment Terminal</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Solana DeFi doesn't replace Ethereum DeFi. Each excels in a different domain. Ethereum delivers trust and depth; Solana delivers speed and accessibility.
                </p>
                <p>
                  Jupiter unifies all liquidity on Solana, giving retail investors institutional-grade swap efficiency. Kamino automates complex CLMM strategies so anyone can earn LP fees and lending interest simultaneously.
                </p>
                <p>
                  <strong className="text-white">In walits, Solana is the infrastructure for everyday payments and micro DeFi.</strong> When a migrant worker sends $200 home. When a freelancer runs a daily micro-DCA. When idle USDC automatically earns yield in Kamino. Solana powers every one of those moments.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY figures vary with market conditions. Example numbers reflect specific moments in time. Always review official documentation and audit reports before investing.
                </p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
