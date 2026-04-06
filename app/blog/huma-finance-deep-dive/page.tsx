'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HumaFinanceDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900">
          <Image src="/blog/huma.jpg" alt="Huma Finance" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-teal-700/80 text-white px-3 py-1 rounded-full">
              {language === 'ko' ? 'DeFi 시리즈 10' : 'DeFi Series 10'}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 10 — Huma Finance: DeFi 최초의 실물 수익 기반 PayFi 프로토콜</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">PayFi · 공급망 금융 · Arf · 크로스보더 결제 · 실물 채권 10~12% APY</p>
            <p className="text-gray-400 text-xs font-mono mb-10">2026년 4월 6일 · 22분</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'TVL', value: '$800M+', sub: '2025년 기준' },
                { label: '처리 볼륨', value: '$4B+', sub: '누적 거래량' },
                { label: '출시', value: '2022', sub: 'Ethereum·Solana' },
                { label: '투자사', value: 'Hashkey', sub: 'Distributed Global' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Huma Finance란? — 실물 경제에서 수익을 끌어오다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              기존 DeFi의 수익은 어디서 올까? 대부분은 <strong>토큰 인플레이션이나 투기적 레버리지</strong>에서 나온다. Aave나 Compound의 수익은 과잉 담보 대출 이자이고, Curve나 Uniswap의 수익은 트레이딩 수수료다. 이 모든 수익은 결국 DeFi 생태계 내부의 자금이 돌고 도는 구조다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Huma Finance는 전혀 다른 접근을 취한다. <strong>실제 기업 간 거래에서 발생하는 수익을 DeFi 투자자에게 연결</strong>한다. 기업이 납품하고 아직 받지 못한 인보이스, 해외 송금 업체의 결제 유동성 수요 — 이런 실물 경제의 자금 흐름이 Huma의 수익원이다. 연 10~12% APY가 가능한 이유가 바로 여기에 있다.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">Huma Finance 한 줄 정의</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                공급망 금융(Supply Chain Finance)과 크로스보더 결제 유동성을 온체인으로 연결하는 <strong>DeFi 최초의 PayFi 프로토콜</strong>. 토큰 인플레이션이 아닌 실제 기업 거래에서 수익이 발생한다.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">DeFi 수익 원천 비교</p>
              <div className="space-y-3">
                {[
                  { name: 'Aave / Compound', source: '과잉 담보 대출 이자', color: 'text-orange-500', origin: 'DeFi 내부 순환' },
                  { name: 'Curve / Uniswap', source: '트레이딩 수수료', color: 'text-purple-500', origin: 'DeFi 내부 순환' },
                  { name: 'Yearn / Convex', source: '토큰 인플레이션 + 스테이킹', color: 'text-yellow-600', origin: 'DeFi 내부 순환' },
                  { name: 'Huma Finance', source: '기업 인보이스 · 무역금융 · 해외 송금', color: 'text-teal-600 dark:text-teal-400 font-bold', origin: '실물 경제 외부 유입' },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between text-xs rounded-lg px-4 py-3 ${i === 3 ? 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800' : 'bg-white dark:bg-gray-900'}`}>
                    <span className={`font-semibold w-36 flex-shrink-0 ${row.color}`}>{row.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 flex-1 text-center">{row.source}</span>
                    <span className={`text-right w-28 flex-shrink-0 ${i === 3 ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-gray-400'}`}>{row.origin}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · 두 가지 제품 — Huma Protocol vs Arf</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Huma Finance는 두 개의 핵심 제품으로 구성된다. 각각 다른 시장을 공략하지만, 둘 다 <strong>실물 경제의 단기 유동성 수요</strong>를 DeFi로 연결한다는 공통 철학을 가진다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
              {[
                {
                  title: 'Huma Protocol',
                  subtitle: '공급망 금융 (Supply Chain Finance)',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  titleColor: 'text-teal-700 dark:text-teal-300',
                  points: [
                    '기업이 발행한 인보이스(미수금)를 담보로 즉시 유동성 제공',
                    '30~90일 결제 대기 없이 당일 자금 수령 가능',
                    '주요 고객: 중소 제조업체, 도매업체, 서비스 공급업체',
                    '오프체인 법적 계약 + 온체인 자금 집행의 하이브리드 구조',
                  ],
                },
                {
                  title: 'Arf',
                  subtitle: '크로스보더 결제 유동성 (Cross-border Payment Liquidity)',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
                  titleColor: 'text-emerald-700 dark:text-emerald-300',
                  points: [
                    '머니 서비스 비즈니스(MSB)에 USDC 유동성 선제공',
                    '해외 결제 시 SWIFT 딜레이 없이 즉시 정산 가능',
                    '주요 고객: 핀테크, 환전소, 해외 송금 업체',
                    '24~48시간 내 정산 완료 후 수수료와 함께 상환',
                  ],
                },
              ].map((prod, i) => (
                <div key={i} className={`border rounded-xl p-5 ${prod.color}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className={`text-lg font-bold ${prod.titleColor}`}>{prod.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{prod.subtitle}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${prod.badge}`}>
                      {i === 0 ? 'B2B 금융' : '결제 인프라'}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {prod.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-teal-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · 공급망 금융 작동 원리 — 5단계 플로우</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              기업은 납품 후 보통 30~90일을 기다려야 대금을 받는다. 이 기간 동안 현금 흐름이 막히는 것이 중소기업의 가장 큰 어려움이다. Huma Protocol은 이 공백을 메운다.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  step: '01',
                  title: '납품 및 인보이스 발행',
                  desc: '기업 A(공급업체)가 기업 B(구매업체)에 $100,000 규모의 제품을 납품한다. 기업 B는 "30일 후 지급" 조건의 인보이스를 발행한다.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  stepColor: 'text-teal-600 dark:text-teal-400',
                  dot: 'bg-teal-500',
                },
                {
                  step: '02',
                  title: 'Huma에 인보이스 업로드',
                  desc: '기업 A가 Huma Protocol에 인보이스를 제출한다. Huma의 리스크 엔진이 기업 B의 신용도와 거래 이력을 오프체인에서 검증한다.',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  stepColor: 'text-emerald-600 dark:text-emerald-400',
                  dot: 'bg-emerald-500',
                },
                {
                  step: '03',
                  title: 'Huma가 즉시 $95,000 지급',
                  desc: '검증 통과 시 Huma가 기업 A에 $95,000 즉시 지급한다. 5% 할인분($5,000)이 투자자 수익의 원천이다. 기업 A는 30일 기다릴 필요 없이 당일 자금 확보.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  stepColor: 'text-teal-600 dark:text-teal-400',
                  dot: 'bg-teal-500',
                },
                {
                  step: '04',
                  title: '기업 B가 $100,000 상환',
                  desc: '30~90일 후 기업 B가 원래 약속대로 Huma에 $100,000을 상환한다. 기업 B 입장에서는 거래 관계에 변화 없이 기존과 동일하게 결제하면 된다.',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  stepColor: 'text-emerald-600 dark:text-emerald-400',
                  dot: 'bg-emerald-500',
                },
                {
                  step: '05',
                  title: '투자자 5% 수익 실현',
                  desc: '$95,000으로 30일 만에 $100,000 회수. 연환산 약 60% → 하지만 실제 투자자 수익은 플랫폼 운영비 및 리스크 프리미엄을 제외한 연 10~12% APY 수준.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  stepColor: 'text-teal-600 dark:text-teal-400',
                  dot: 'bg-teal-500',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl px-5 py-4 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <span className={`text-xs font-black uppercase tracking-widest ${item.stepColor}`}>STEP {item.step}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-teal-700 dark:text-teal-400 mb-2">핵심 포인트: 왜 기업들이 할인을 감수하나?</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                중소기업에게 현금 흐름은 생존의 문제다. 30일 후 $100,000보다 오늘의 $95,000이 훨씬 더 가치 있다. 그 $95,000으로 원자재를 더 구매하고 더 많은 납품을 하면 5% 할인 비용을 넘어서는 수익을 얻을 수 있다.
              </p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Arf 크로스보더 결제 작동 원리 — 3단계 플로우</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              해외 송금 업체(MSB)는 결제를 처리할 때 목적지 국가에 미리 자금을 예치해둬야 하는 경우가 많다. 이 선결제 유동성이 자금 묶임의 원인이다. Arf는 이 문제를 USDC로 해결한다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: '01',
                  title: '필리핀 MSB, 한국→필리핀 송금 처리 필요',
                  desc: '한국에서 필리핀으로 $50,000 규모의 송금 요청이 들어온다. 필리핀 MSB는 필리핀 측에 페소화 자금을 즉시 지급해야 하지만, 한국 측 자금은 아직 미수금 상태다.',
                  icon: '🌏',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                },
                {
                  step: '02',
                  title: 'Arf가 USDC 유동성 선제공 (24~48시간)',
                  desc: 'Arf가 MSB에 $50,000 USDC를 즉시 제공한다. MSB는 이 USDC를 현지 페소로 환전해 수취인에게 지급한다. SWIFT를 통한 3~5일 대기 없이 수시간 내 처리 완료.',
                  icon: '⚡',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                },
                {
                  step: '03',
                  title: '정산 후 수수료와 함께 상환',
                  desc: '한국 측 송금인의 원화가 정산되면 MSB가 Arf에 원금 $50,000 + 수수료를 상환한다. 투자자는 이 수수료에서 수익을 얻는다.',
                  icon: '✅',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl px-5 py-4 flex gap-4 items-start ${item.color}`}>
                  <div className="flex-shrink-0 text-2xl">{item.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">STEP {item.step}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2">Arf의 임팩트: 전 세계 이주 노동자를 위한 인프라</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                전 세계에는 1억 6,900만 명의 이주 노동자가 있다. 이들이 고국에 보내는 송금액은 연간 $900B(약 1,200조 원) 규모다. Arf는 이 거대한 자금 흐름을 더 빠르고 저렴하게 처리하는 인프라를 제공한다.
              </p>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · 왜 10~12% APY가 가능한가?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Aave나 Morpho의 5~6% APY 대비 Huma의 10~12% APY는 어디서 오는 걸까? 단순히 위험이 더 높아서가 아니다. 수익 구조 자체가 다르다.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tl-xl">프로토콜</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">대출 유형</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">수익 원천</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">APY</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tr-xl">리스크 유형</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    { name: 'Aave', type: '과잉 담보 대출', source: '대출 이자 (DeFi 내부)', apy: '4~6%', risk: '스마트컨트랙트', highlight: false },
                    { name: 'Morpho', type: '과잉 담보 P2P', source: '대출 이자 (DeFi 내부)', apy: '5~7%', risk: '오라클·큐레이터', highlight: false },
                    { name: 'Huma', type: '미담보 실물 채권', source: '기업 거래 수익 (실물 외부)', apy: '10~12%', risk: '채무불이행·법적 리스크', highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? 'bg-teal-50 dark:bg-teal-900/20' : 'bg-white dark:bg-gray-950'}>
                      <td className={`px-4 py-3 font-bold ${row.highlight ? 'text-teal-700 dark:text-teal-300' : 'text-gray-700 dark:text-gray-300'}`}>{row.name}</td>
                      <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{row.type}</td>
                      <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{row.source}</td>
                      <td className={`px-4 py-3 text-center font-bold ${row.highlight ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-400'}`}>{row.apy}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  title: '실물 경제 마진',
                  desc: '기업 간 무역 금융의 실제 수익률은 연 15~25%다. Huma는 이 중 10~12%를 투자자에게 전달하고 나머지로 운영한다.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  numColor: 'text-teal-600 dark:text-teal-400',
                  num: '1',
                },
                {
                  title: '담보 비의존',
                  desc: '과잉 담보가 필요 없어 자본 효율이 높다. Aave에서 $100을 빌리려면 $130 이상을 잠가야 한다. Huma에선 실제 인보이스가 담보다.',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  numColor: 'text-emerald-600 dark:text-emerald-400',
                  num: '2',
                },
                {
                  title: '단기 회전',
                  desc: '30~90일 인보이스가 계속 회전하면서 복리 효과가 발생한다. 같은 자금이 1년에 4~12번 재투자된다.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  numColor: 'text-teal-600 dark:text-teal-400',
                  num: '3',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-2xl font-black ${card.numColor}`}>{card.num}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · 투자자 관점 — Senior / Junior 트랜치 구조</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Huma는 전통 금융의 구조화 채권(CDO/CLO) 방식을 DeFi에 적용한다. 같은 자산 풀에서 서로 다른 리스크·수익 프로파일의 두 가지 포지션을 제공한다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
              {[
                {
                  title: 'Senior Tranche',
                  subtitle: '안정형 · 낮은 리스크',
                  apy: '~8%',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  apyColor: 'text-blue-600 dark:text-blue-400',
                  points: [
                    '손실 발생 시 Junior 트랜치가 먼저 흡수',
                    'Senior는 Junior 손실 소진 후에만 영향받음',
                    '상환 우선순위 최상위',
                    '변동성 낮고 예측 가능한 수익',
                    '리스크 회피형 투자자에게 적합',
                  ],
                },
                {
                  title: 'Junior Tranche',
                  subtitle: '수익형 · 높은 리스크',
                  apy: '~15%',
                  badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                  titleColor: 'text-orange-700 dark:text-orange-300',
                  apyColor: 'text-orange-600 dark:text-orange-400',
                  points: [
                    '손실이 발생하면 Junior가 먼저 흡수',
                    '채무불이행 시 원금 손실 가능',
                    '높은 수익으로 리스크 보상',
                    'Senior 포지션에 안전망 역할',
                    '고수익 추구형 투자자에게 적합',
                  ],
                },
              ].map((tranche, i) => (
                <div key={i} className={`border rounded-xl p-5 ${tranche.color}`}>
                  <div className="flex items-start justify-between mb-1">
                    <p className={`text-lg font-bold ${tranche.titleColor}`}>{tranche.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tranche.badge}`}>{tranche.subtitle}</span>
                  </div>
                  <p className={`text-3xl font-black mb-4 ${tranche.apyColor}`}>{tranche.apy} APY</p>
                  <ul className="space-y-2">
                    {tranche.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className={`flex-shrink-0 mt-0.5 ${i === 0 ? 'text-blue-500' : 'text-orange-500'}`}>▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">손실 흡수 순서 시뮬레이션</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">$1,000,000 풀에서 채무불이행이 $80,000 발생했다면?</p>
              <div className="space-y-3">
                {[
                  { label: 'Junior Tranche ($200,000)', lost: '→ $80,000 손실 흡수 (원금의 40% 손실)', status: '손실', color: 'bg-orange-200 dark:bg-orange-900/40', textColor: 'text-orange-700 dark:text-orange-300' },
                  { label: 'Senior Tranche ($800,000)', lost: '→ 손실 없음 (Junior가 모두 흡수)', status: '안전', color: 'bg-blue-200 dark:bg-blue-900/40', textColor: 'text-blue-700 dark:text-blue-300' },
                ].map((row, i) => (
                  <div key={i} className={`rounded-lg px-4 py-3 ${row.color}`}>
                    <div className="flex items-center justify-between">
                      <p className={`text-xs font-bold ${row.textColor}`}>{row.label}</p>
                      <span className={`text-xs font-semibold ${row.textColor}`}>{row.status}</span>
                    </div>
                    <p className={`text-xs mt-1 ${row.textColor} opacity-80`}>{row.lost}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">* 예시 수치. 실제 손실 시나리오는 시장 상황에 따라 다름.</p>
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · walits × Huma — "칠리 투자 50%" 포지션</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              walits는 사용자의 투자 성향에 따라 Huma Finance를 적극적으로 활용한다. 특히 "더 높은 수익을 위해 어느 정도의 리스크를 감수할 수 있다"는 유형의 투자자에게 Huma는 최적의 선택이다.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">"칠리 투자 50%" 포지션 예시</p>
              <div className="space-y-3">
                {[
                  { label: 'Morpho Senior Vault', pct: '50%', apy: '~6% APY', bar: 'w-1/2 bg-indigo-400 dark:bg-indigo-600', desc: '안정적인 기반 포지션' },
                  { label: 'Huma Senior Tranche', pct: '30%', apy: '~8% APY', bar: 'w-[30%] bg-teal-400 dark:bg-teal-600', desc: '실물 수익, 낮은 변동성' },
                  { label: 'Huma Junior Tranche', pct: '20%', apy: '~15% APY', bar: 'w-1/5 bg-orange-400 dark:bg-orange-600', desc: '고수익 추구, 리스크 인지 필수' },
                ].map((pos, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{pos.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-teal-600 dark:text-teal-400 font-bold">{pos.apy}</span>
                        <span className="text-gray-500 w-8 text-right">{pos.pct}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                      <div className={`h-2 rounded-full ${pos.bar}`} />
                    </div>
                    <p className="text-xs text-gray-400">{pos.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-teal-200 dark:border-teal-800">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">블렌디드 APY</span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold text-base">~9.6% APY</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 my-6">
              {[
                { title: 'APY 실시간 모니터링', desc: 'walits가 Huma의 트랜치별 APY를 지속 추적. 수익률이 임계값 아래로 떨어지면 알림 발송.', icon: '📊' },
                { title: '트랜치 자동 재배분', desc: '리스크 프로파일 변화에 따라 Senior/Junior 비율을 자동 조정. 사용자는 설정만 하면 됨.', icon: '⚙️' },
                { title: '채무불이행 조기 감지', desc: '오프체인 데이터와 온체인 상환 패턴을 분석해 문제가 될 포지션을 조기에 감지.', icon: '🛡️' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · 리스크 — 눈 뜨고 투자하기</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: '채무불이행 리스크 (Default Risk)',
                  level: '핵심 리스크',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: '인보이스 채무자(기업 B)가 파산하거나 상환을 거부할 경우 원금 손실이 발생한다. Junior 트랜치가 우선 손실을 흡수하지만, 대규모 채무불이행 시 Senior도 영향을 받을 수 있다. Huma의 리스크 엔진이 이를 필터링하지만 100% 예방은 불가능하다.',
                },
                {
                  title: '오프체인 법적 리스크',
                  level: '구조적 리스크',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: '인보이스나 계약서는 오프체인에 존재한다. 스마트컨트랙트로 강제 집행이 안 되는 영역이 있다. 채무자가 상환을 거부할 경우 법적 소송이 필요하고, 국제 법적 분쟁은 비용이 크고 결과가 불확실하다.',
                },
                {
                  title: '유동성 락업',
                  level: '주의 필요',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: '인보이스 만기(30~90일) 전에는 즉시 출금이 어렵다. DeFi의 즉시 유동성에 익숙한 투자자에게는 낯선 구조다. 투자 기간을 미리 고려해야 한다.',
                },
                {
                  title: '규제 리스크',
                  level: '장기 리스크',
                  lc: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  desc: '실물 금융과 DeFi의 교차점이라 규제 당국의 관심이 높다. 특히 증권성 여부, KYC/AML 의무화 등이 쟁점이 될 수 있다. 현재 Huma는 적격 투자자 중심으로 운영하며 규제 준수에 적극적이다.',
                },
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Conclusion KO */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">DeFi와 실물 경제의 다리</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Huma Finance는 DeFi의 영역을 블록체인 내부에서 실물 경제로 확장한다. 기업 간 인보이스, 해외 송금, 무역금융 — 이런 전통 금융의 영역에서 발생하는 실제 수익을 온체인 투자자가 얻을 수 있게 한다.
                </p>
                <p>
                  10~12% APY는 단순한 숫자가 아니다. <strong className="text-white">실제 기업이 실제 상품을 거래하고 실제 대금을 지급하는</strong> 경제 활동에서 나오는 수익이다. 토큰 인플레이션으로 부풀려진 APY와 근본적으로 다르다.
                </p>
                <p>
                  물론 리스크도 실물적이다. 채무불이행, 법적 분쟁, 유동성 제약 — 이는 DeFi의 스마트컨트랙트 리스크와는 다른 종류의 위험이다. <strong className="text-white">이 리스크를 이해하고 감수할 수 있는 투자자에게</strong>, Huma는 포트폴리오에 진정한 다각화를 제공한다.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY 수치는 시장 상황에 따라 변동됩니다. 예시 수치는 특정 시점을 반영합니다. 투자 전 반드시 공식 문서와 감사 보고서를 확인하세요.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 10 — Huma Finance: DeFi's First Real-Yield PayFi Protocol</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">PayFi · Supply Chain Finance · Arf · Cross-border Payments · Real-World 10–12% APY</p>
            <p className="text-gray-400 text-xs font-mono mb-10">April 6, 2026 · 22 min read</p>

            {/* Stats EN */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'TVL', value: '$800M+', sub: 'As of 2025' },
                { label: 'Volume Processed', value: '$4B+', sub: 'Cumulative' },
                { label: 'Launched', value: '2022', sub: 'Ethereum · Solana' },
                { label: 'Investors', value: 'Hashkey', sub: 'Distributed Global' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · What Is Huma Finance? — Drawing Yield from the Real Economy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Where does DeFi yield come from? Most of it originates from <strong>token inflation or speculative leverage</strong>. Aave and Compound earn from overcollateralized loan interest. Curve and Uniswap earn from trading fees. All of this is money cycling within the DeFi ecosystem itself.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Huma Finance takes a fundamentally different approach. It <strong>connects the yields generated by real-world business transactions directly to DeFi investors</strong>. Unpaid invoices from delivered goods, liquidity demands from cross-border payment providers — these real economic cash flows are Huma's yield source. That's why 10–12% APY is achievable.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">Huma Finance — One-Line Definition</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <strong>DeFi's first PayFi protocol</strong> that connects supply chain finance and cross-border payment liquidity on-chain. Yield comes from actual business transactions, not token inflation.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">DeFi Yield Source Comparison</p>
              <div className="space-y-3">
                {[
                  { name: 'Aave / Compound', source: 'Overcollateralized loan interest', origin: 'Internal DeFi circulation' },
                  { name: 'Curve / Uniswap', source: 'Trading fees', origin: 'Internal DeFi circulation' },
                  { name: 'Yearn / Convex', source: 'Token inflation + staking', origin: 'Internal DeFi circulation' },
                  { name: 'Huma Finance', source: 'Business invoices · trade finance · remittances', origin: 'External real-world inflow', highlight: true },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between text-xs rounded-lg px-4 py-3 ${i === 3 ? 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800' : 'bg-white dark:bg-gray-900'}`}>
                    <span className={`font-semibold w-36 flex-shrink-0 ${i === 3 ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-gray-700 dark:text-gray-300'}`}>{row.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 flex-1 text-center">{row.source}</span>
                    <span className={`text-right w-36 flex-shrink-0 ${i === 3 ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-gray-400'}`}>{row.origin}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Two Products — Huma Protocol vs Arf</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Huma Finance consists of two core products. Each targets a different market, but both share the same philosophy: <strong>connecting the real economy's short-term liquidity demand to DeFi</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
              {[
                {
                  title: 'Huma Protocol',
                  subtitle: 'Supply Chain Finance',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  titleColor: 'text-teal-700 dark:text-teal-300',
                  badgeText: 'B2B Finance',
                  accentColor: 'text-teal-500',
                  points: [
                    'Provides immediate liquidity against unpaid corporate invoices (receivables)',
                    'Access to funds same-day, without waiting 30–90 days for payment',
                    'Target clients: SMEs, wholesalers, service providers',
                    'Hybrid structure: off-chain legal contracts + on-chain fund execution',
                  ],
                },
                {
                  title: 'Arf',
                  subtitle: 'Cross-border Payment Liquidity',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
                  titleColor: 'text-emerald-700 dark:text-emerald-300',
                  badgeText: 'Payment Infrastructure',
                  accentColor: 'text-emerald-500',
                  points: [
                    'Pre-funds USDC liquidity for Money Service Businesses (MSBs)',
                    'Enables near-instant cross-border settlement without SWIFT delays',
                    'Target clients: fintechs, currency exchanges, remittance providers',
                    'Repaid with fees after settlement completes within 24–48 hours',
                  ],
                },
              ].map((prod, i) => (
                <div key={i} className={`border rounded-xl p-5 ${prod.color}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className={`text-lg font-bold ${prod.titleColor}`}>{prod.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{prod.subtitle}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${prod.badge}`}>{prod.badgeText}</span>
                  </div>
                  <ul className="space-y-2">
                    {prod.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className={`flex-shrink-0 mt-0.5 ${prod.accentColor}`}>▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · How Supply Chain Finance Works — 5-Step Flow</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Businesses typically wait 30–90 days after delivery to get paid. This cash flow gap is one of the biggest challenges for SMEs. Huma Protocol fills that gap.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  step: '01',
                  title: 'Delivery and Invoice Issuance',
                  desc: 'Company A (supplier) delivers $100,000 worth of goods to Company B (buyer). Company B issues an invoice with "net 30 days" payment terms.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  stepColor: 'text-teal-600 dark:text-teal-400',
                  dot: 'bg-teal-500',
                },
                {
                  step: '02',
                  title: 'Invoice Uploaded to Huma',
                  desc: "Company A submits the invoice to Huma Protocol. Huma's risk engine verifies Company B's creditworthiness and transaction history off-chain.",
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  stepColor: 'text-emerald-600 dark:text-emerald-400',
                  dot: 'bg-emerald-500',
                },
                {
                  step: '03',
                  title: 'Huma Immediately Pays $95,000',
                  desc: 'Upon verification, Huma pays Company A $95,000 immediately. The 5% discount ($5,000) is the source of investor yield. Company A secures funds the same day — no 30-day wait.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  stepColor: 'text-teal-600 dark:text-teal-400',
                  dot: 'bg-teal-500',
                },
                {
                  step: '04',
                  title: 'Company B Repays $100,000',
                  desc: 'After 30–90 days, Company B repays $100,000 to Huma as originally agreed. From Company B\'s perspective, nothing changes — they just pay as normal.',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  stepColor: 'text-emerald-600 dark:text-emerald-400',
                  dot: 'bg-emerald-500',
                },
                {
                  step: '05',
                  title: 'Investor Realizes 5% Return',
                  desc: '$95,000 grows to $100,000 in 30 days. Annualized that\'s ~60% — but after platform costs and risk premiums, investors receive approximately 10–12% APY.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  stepColor: 'text-teal-600 dark:text-teal-400',
                  dot: 'bg-teal-500',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl px-5 py-4 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <span className={`text-xs font-black uppercase tracking-widest ${item.stepColor}`}>STEP {item.step}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-teal-700 dark:text-teal-400 mb-2">Key Point: Why Do Businesses Accept the Discount?</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                For an SME, cash flow is a survival issue. $95,000 today is far more valuable than $100,000 in 30 days. With that $95,000 they can buy more raw materials, fulfill more orders, and generate returns that far exceed the 5% discount cost.
              </p>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · How Arf Cross-border Payments Work — 3-Step Flow</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              When processing cross-border payments, remittance providers (MSBs) often need to pre-fund capital in the destination country. This pre-funding ties up capital. Arf solves this with USDC.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: '01',
                  title: 'Philippine MSB Needs to Process Korea→Philippines Remittance',
                  desc: 'A $50,000 remittance request comes in from Korea to the Philippines. The Philippine MSB needs to pay out Philippine pesos immediately, but the Korean sender\'s funds haven\'t cleared yet.',
                  icon: '🌏',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                },
                {
                  step: '02',
                  title: 'Arf Pre-Provides USDC Liquidity (24–48 hours)',
                  desc: 'Arf immediately provides $50,000 USDC to the MSB. The MSB converts the USDC to local pesos and pays the recipient. Completed in hours — no 3–5 day SWIFT wait.',
                  icon: '⚡',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                },
                {
                  step: '03',
                  title: 'Repaid with Fees After Settlement',
                  desc: "Once the Korean sender's payment clears, the MSB repays Arf $50,000 principal + fees. Investors earn yield from those fees.",
                  icon: '✅',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl px-5 py-4 flex gap-4 items-start ${item.color}`}>
                  <div className="flex-shrink-0 text-2xl">{item.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">STEP {item.step}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2">Arf's Impact: Infrastructure for the World's Migrant Workers</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                There are 169 million migrant workers worldwide. The remittances they send home total approximately $900 billion annually. Arf provides infrastructure to make these massive capital flows faster and cheaper.
              </p>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Why Is 10–12% APY Possible?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Compared to Aave or Morpho at 5–6% APY, where does Huma's 10–12% come from? It's not simply about taking more risk. The yield structure itself is fundamentally different.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tl-xl">Protocol</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Loan Type</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Yield Source</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">APY</th>
                    <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tr-xl">Risk Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    { name: 'Aave', type: 'Overcollateralized', source: 'Loan interest (DeFi internal)', apy: '4–6%', risk: 'Smart contract', highlight: false },
                    { name: 'Morpho', type: 'Overcollateralized P2P', source: 'Loan interest (DeFi internal)', apy: '5–7%', risk: 'Oracle / curator', highlight: false },
                    { name: 'Huma', type: 'Uncollateralized real-world', source: 'Business transaction yield (external)', apy: '10–12%', risk: 'Default / legal', highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? 'bg-teal-50 dark:bg-teal-900/20' : 'bg-white dark:bg-gray-950'}>
                      <td className={`px-4 py-3 font-bold ${row.highlight ? 'text-teal-700 dark:text-teal-300' : 'text-gray-700 dark:text-gray-300'}`}>{row.name}</td>
                      <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{row.type}</td>
                      <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">{row.source}</td>
                      <td className={`px-4 py-3 text-center font-bold ${row.highlight ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-400'}`}>{row.apy}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  title: 'Real-World Margins',
                  desc: 'Trade finance in the real economy typically yields 15–25% annually. Huma passes 10–12% to investors and keeps the rest for operations.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  numColor: 'text-teal-600 dark:text-teal-400',
                  num: '1',
                },
                {
                  title: 'No Collateral Overhead',
                  desc: 'No overcollateralization needed means higher capital efficiency. To borrow $100 on Aave, you must lock up $130+. On Huma, the actual invoice is the collateral.',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  numColor: 'text-emerald-600 dark:text-emerald-400',
                  num: '2',
                },
                {
                  title: 'Short-Cycle Compounding',
                  desc: '30–90 day invoices continuously roll over, creating compounding. The same capital is reinvested 4–12 times per year.',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  numColor: 'text-teal-600 dark:text-teal-400',
                  num: '3',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-2xl font-black ${card.numColor}`}>{card.num}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Investor Perspective — Senior / Junior Tranche Structure</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Huma applies the structured finance model (CDO/CLO) from traditional finance to DeFi. From the same asset pool, two positions with different risk/return profiles are available.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
              {[
                {
                  title: 'Senior Tranche',
                  subtitle: 'Stable · Lower Risk',
                  apy: '~8%',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  apyColor: 'text-blue-600 dark:text-blue-400',
                  accentColor: 'text-blue-500',
                  points: [
                    'Junior tranche absorbs losses first',
                    'Senior is only affected after Junior is fully depleted',
                    'Highest repayment priority',
                    'Low volatility, predictable returns',
                    'Suitable for risk-averse investors',
                  ],
                },
                {
                  title: 'Junior Tranche',
                  subtitle: 'High-Yield · Higher Risk',
                  apy: '~15%',
                  badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                  titleColor: 'text-orange-700 dark:text-orange-300',
                  apyColor: 'text-orange-600 dark:text-orange-400',
                  accentColor: 'text-orange-500',
                  points: [
                    'Absorbs losses first in a default event',
                    'Principal loss possible if borrowers default',
                    'Higher yield compensates for additional risk',
                    'Serves as a safety buffer for Senior positions',
                    'Suitable for yield-seeking investors',
                  ],
                },
              ].map((tranche, i) => (
                <div key={i} className={`border rounded-xl p-5 ${tranche.color}`}>
                  <div className="flex items-start justify-between mb-1">
                    <p className={`text-lg font-bold ${tranche.titleColor}`}>{tranche.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tranche.badge}`}>{tranche.subtitle}</span>
                  </div>
                  <p className={`text-3xl font-black mb-4 ${tranche.apyColor}`}>{tranche.apy} APY</p>
                  <ul className="space-y-2">
                    {tranche.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className={`flex-shrink-0 mt-0.5 ${tranche.accentColor}`}>▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Loss Absorption Simulation</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">If $80,000 in defaults occur in a $1,000,000 pool:</p>
              <div className="space-y-3">
                {[
                  { label: 'Junior Tranche ($200,000)', lost: '→ Absorbs $80,000 loss (40% loss on principal)', status: 'Loss', color: 'bg-orange-200 dark:bg-orange-900/40', textColor: 'text-orange-700 dark:text-orange-300' },
                  { label: 'Senior Tranche ($800,000)', lost: '→ No loss (Junior fully absorbed it)', status: 'Safe', color: 'bg-blue-200 dark:bg-blue-900/40', textColor: 'text-blue-700 dark:text-blue-300' },
                ].map((row, i) => (
                  <div key={i} className={`rounded-lg px-4 py-3 ${row.color}`}>
                    <div className="flex items-center justify-between">
                      <p className={`text-xs font-bold ${row.textColor}`}>{row.label}</p>
                      <span className={`text-xs font-semibold ${row.textColor}`}>{row.status}</span>
                    </div>
                    <p className={`text-xs mt-1 ${row.textColor} opacity-80`}>{row.lost}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">* Example figures. Actual loss scenarios vary with market conditions.</p>
            </div>

            {/* S7 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · walits × Huma — The "Spicy 50%" Position</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              walits actively utilizes Huma Finance based on user investment profiles. For investors who say "I can tolerate some risk in exchange for higher returns," Huma is the optimal choice.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">"Spicy 50%" Position Example</p>
              <div className="space-y-3">
                {[
                  { label: 'Morpho Senior Vault', pct: '50%', apy: '~6% APY', bar: 'w-1/2 bg-indigo-400 dark:bg-indigo-600', desc: 'Stable base position' },
                  { label: 'Huma Senior Tranche', pct: '30%', apy: '~8% APY', bar: 'w-[30%] bg-teal-400 dark:bg-teal-600', desc: 'Real-world yield, low volatility' },
                  { label: 'Huma Junior Tranche', pct: '20%', apy: '~15% APY', bar: 'w-1/5 bg-orange-400 dark:bg-orange-600', desc: 'High-yield, must understand risk' },
                ].map((pos, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{pos.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-teal-600 dark:text-teal-400 font-bold">{pos.apy}</span>
                        <span className="text-gray-500 w-8 text-right">{pos.pct}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                      <div className={`h-2 rounded-full ${pos.bar}`} />
                    </div>
                    <p className="text-xs text-gray-400">{pos.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-teal-200 dark:border-teal-800">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Blended APY</span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold text-base">~9.6% APY</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 my-6">
              {[
                { title: 'Real-time APY Monitoring', desc: 'walits continuously tracks Huma tranche APY. Alerts sent when yield drops below your threshold.', icon: '📊' },
                { title: 'Automated Tranche Rebalancing', desc: 'Senior/Junior ratio auto-adjusted based on changing risk profiles. Just set your preferences and let walits handle the rest.', icon: '⚙️' },
                { title: 'Early Default Detection', desc: 'Off-chain data combined with on-chain repayment patterns to identify problematic positions before they deteriorate.', icon: '🛡️' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* S8 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Risks — Invest With Eyes Open</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Default Risk',
                  level: 'Core Risk',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'If an invoice debtor (Company B) goes bankrupt or refuses to pay, principal loss can occur. Junior tranche absorbs losses first, but large-scale defaults can affect Senior positions too. Huma\'s risk engine filters for this, but 100% prevention is impossible.',
                },
                {
                  title: 'Off-chain Legal Risk',
                  level: 'Structural Risk',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'Invoices and contracts exist off-chain. Smart contracts cannot enforce certain aspects of these agreements. If a debtor refuses repayment, legal proceedings are required — international disputes are costly and uncertain in outcome.',
                },
                {
                  title: 'Liquidity Lockup',
                  level: 'Caution',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'Immediate withdrawal is difficult before invoice maturity (30–90 days). Investors accustomed to DeFi\'s instant liquidity may find this structure unfamiliar. Investment horizons must be considered in advance.',
                },
                {
                  title: 'Regulatory Risk',
                  level: 'Long-term Risk',
                  lc: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  desc: 'As the intersection of real finance and DeFi, Huma draws significant regulatory attention. Securities classification, mandatory KYC/AML requirements are potential flashpoints. Huma currently operates primarily for accredited investors and is proactive about compliance.',
                },
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">The Bridge Between DeFi and the Real Economy</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Huma Finance expands DeFi's reach from inside the blockchain to the real economy. Corporate invoices, cross-border remittances, trade finance — yields generated in these traditional finance domains are now accessible to on-chain investors.
                </p>
                <p>
                  10–12% APY isn't just a number. It comes from <strong className="text-white">real companies trading real goods and making real payments</strong>. It's fundamentally different from APY inflated by token emission.
                </p>
                <p>
                  Of course, the risks are equally real. Default risk, legal disputes, liquidity constraints — these are a different category of risk from DeFi's smart contract vulnerabilities. <strong className="text-white">For investors who understand and can accept these risks</strong>, Huma offers genuine diversification to a DeFi portfolio.
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
