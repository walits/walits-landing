'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PayFiPage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-700">
          <Image src="/blog/payfi.jpg" alt="PayFi" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-teal-600/80 text-white px-3 py-1 rounded-full">Payment Finance</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">PayFi — 돈이 이동하는 모든 순간에 수익이 발생한다</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">Payment Finance · 화폐의 시간 가치 · Idle Time 제거 · 스테이블코인 결제 인프라</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: '온체인 스테이블코인 거래량', value: '$8.9조', sub: '2025 Q1 기준' },
                { label: '전통 해외 송금 소요 시간', value: '2~5일', sub: 'SWIFT 기준' },
                { label: '블록체인 스테이블코인 정산', value: '2~5초', sub: 'Solana / Base 기준' },
                { label: 'PayFi 개념 제시', value: '2024', sub: 'Lily Liu, Solana Foundation' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · 돈이 "잠들어 있는" 시간 — 전통 금융의 숨겨진 비용</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              당신이 해외 거래처에 $10,000을 송금했다. 돈은 계좌에서 빠져나갔다. 하지만 상대방 계좌엔 3일 후에야 도착한다. 그 3일 동안 돈은 어디에 있는가? SWIFT 네트워크의 중간 은행(Correspondent Bank) 어딘가에서 <strong>아무런 수익도 내지 못하며 정산을 기다리고 있다.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              경제학에는 <strong>화폐의 시간 가치(Time Value of Money)</strong>라는 개념이 있다. 지금의 $1은 1년 후의 $1보다 가치 있다. 왜? 지금 당장 운용할 수 있기 때문이다. 그런데 전통 금융 시스템은 결제 과정에서 이 시간 가치를 <strong>조직적으로 낭비</strong>한다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">전통 금융에서 돈이 "잠드는" 순간들</p>
              <div className="space-y-3">
                {[
                  { scenario: '해외 송금', idle: '2~5일', who: '중간 은행들이 浮利 수취', loss: '연 $2.4조 추정' },
                  { scenario: 'B2B 송장 결제', idle: '30~90일', who: '매출채권 대기', loss: '기업 현금흐름 악화' },
                  { scenario: '신용카드 정산', idle: '1~3일', who: '카드사·밴사 수수료', loss: '가맹점 매출 지연' },
                  { scenario: '미사용 포인트·마일리지', idle: '영구', who: '발행사 부채로 계상', loss: '소비자 가치 소멸' },
                  { scenario: '공급망 금융 (팩토링)', idle: '30~120일', who: '팩토링사 이자 수취', loss: '중소기업 자금조달 비용' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 text-xs items-center">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{row.scenario}</span>
                    <span className="font-mono text-red-600 dark:text-red-400 font-bold">{row.idle} 대기</span>
                    <span className="text-gray-500 dark:text-gray-400">{row.who}</span>
                    <span className="text-gray-400">{row.loss}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              PayFi는 이 <strong>"Idle Time"</strong>을 없애는 것이 핵심이다. 결제가 이루어지는 모든 순간, 대기 중인 자금을 즉시 수익 창출에 활용하거나 정산을 실시간으로 완료하는 것. 이것이 PayFi가 전통 금융과 기존 DeFi 모두를 넘어서는 지점이다.
            </p>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · PayFi란? — Lily Liu가 제시한 개념의 본질</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              PayFi 개념은 <strong>Solana Foundation 대표 Lily Liu</strong>가 2024년 처음 공식화했다. 그녀는 PayFi를 단순한 "빠른 결제"가 아니라 <strong>결제 흐름 안에서 화폐의 시간 가치를 실현하는 새로운 금융 패러다임</strong>으로 정의했다.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">Lily Liu의 PayFi 정의</p>
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic border-l-4 border-teal-400 pl-4">
                "PayFi is a new financial market for the time value of money. It realizes the future value of current money and creates entirely new financial use cases that were previously impossible in traditional finance."
              </blockquote>
              <p className="text-xs text-gray-400 mt-3">— Lily Liu, Solana Foundation 대표, 2024 Consensus</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              핵심 통찰은 간단하다. 결제 과정에서 돈이 "대기 상태"에 있는 순간, 그 돈은 아무 일도 하지 않는다. 하지만 블록체인과 스마트컨트랙트가 있다면, 그 순간에도 돈을 운용할 수 있다. <strong>결제와 수익 창출이 동시에 일어나는 것</strong>이다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  title: '화폐의 시간 가치 실현',
                  icon: '⏱️',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20',
                  desc: '결제 대기 중인 모든 자금은 즉시 DeFi 머니마켓에서 이자를 발생시킨다. 1초도 낭비하지 않는다.',
                },
                {
                  title: 'Idle Time 제로화',
                  icon: '⚡',
                  color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20',
                  desc: '블록체인 기반 즉시 정산으로 중간 대기 시간을 2~5일에서 2~5초로 단축. 중간 수수료도 사라진다.',
                },
                {
                  title: '전통 금융 불가 상품 창출',
                  icon: '🔮',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20',
                  desc: '"지금 받고 나중에 결제 (Earn Now, Pay Later)"처럼 기존 금융으론 불가능했던 상품이 등장한다.',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{card.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · DeFi vs PayFi — 무엇이 다른가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              PayFi와 기존 DeFi는 블록체인을 쓴다는 공통점이 있지만, 목적·사용자·돈의 상태가 근본적으로 다르다. 이 차이를 이해하면 PayFi가 왜 새로운 시장인지 명확해진다.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">구분</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-blue-400">기존 DeFi</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-teal-400">PayFi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['목적', '자산 운용·투자·수익 극대화', '결제·정산·자금 흐름 최적화'],
                    ['돈의 상태', '묶여있는 돈 (Locked/Staked)', '움직이는 돈 (In Transit)'],
                    ['주요 사용자', '크립토 투자자·트레이더', '기업·프리랜서·소비자'],
                    ['핵심 가치', 'Yield 극대화', '결제 마찰 제거 + 시간 가치 실현'],
                    ['메인 자산', 'ETH, BTC, LP 토큰', 'USDC, USDT 등 스테이블코인'],
                    ['정산 방식', '스마트컨트랙트 내 자산 고정', '즉시 정산 후 잔여 자금 운용'],
                    ['리스크', '스마트컨트랙트·변동성 리스크', '규제·신용·오프램프 리스크'],
                    ['대표 프로토콜', 'Aave, Uniswap, Curve', 'Huma Finance, Ondo, Circle'],
                    ['RWA 연계', '간접적 (합성 자산 등)', '직접적 (매출채권·무역금융)'],
                  ].map(([label, defi, payfi], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{label}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{defi}</td>
                      <td className="px-4 py-3 text-xs text-teal-700 dark:text-teal-300 font-medium">{payfi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-xs">
              <p className="text-yellow-400 mb-3">{'// 기존 DeFi vs PayFi — 돈의 흐름 비교'}</p>
              <p className="text-gray-400 mt-2">{'// 기존 DeFi'}</p>
              <p className="text-white">{'사용자 → [USDC 예치] → Aave → [이자 수령] → 사용자'}</p>
              <p className="text-gray-400">{'                       ↑'}</p>
              <p className="text-gray-400">{'              돈이 프로토콜 안에 고정된 상태'}</p>
              <p className="text-gray-400 mt-3">{'// PayFi'}</p>
              <p className="text-white">{'기업A → [USDC 송금] ──→ 기업B (2초 정산)'}</p>
              <p className="text-white">{'               ↓'}</p>
              <p className="text-white">{'        정산 전 대기 자금'}</p>
              <p className="text-white">{'               ↓'}</p>
              <p className="text-teal-400">{'        머니마켓 자동 예치 → 이자 발생 → 정산 시 회수'}</p>
              <p className="text-gray-400 mt-1">{'// 돈이 "이동 중"에도 수익이 발생한다'}</p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · PayFi 핵심 메커니즘 — 어떻게 작동하는가</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '즉시 정산 (Real-Time Settlement)',
                  number: '①',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20',
                  numColor: 'bg-teal-600',
                  desc: '스테이블코인 기반 P2P 정산으로 SWIFT의 2~5일 대기를 2~5초로 단축. 중간 은행(Correspondent Bank)이 없으므로 그들이 가져가던 浮利(Float)가 사라진다.',
                  detail: 'Visa가 Solana 위에서 USDC로 정산하는 파일럿 진행 중. 연 처리량 기준으로 전 세계 결제의 상당 부분이 이 방식으로 전환되면 조 단위 비용 절감 예상.',
                },
                {
                  title: '결제 중 수익 창출 (Yield-While-In-Transit)',
                  number: '②',
                  color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20',
                  numColor: 'bg-cyan-600',
                  desc: '결제 자금이 정산 전까지 자동으로 머니마켓(Aave, Compound, 국채 기반 온체인 펀드)에 예치되어 이자를 발생시킨다. 정산이 완료되는 순간 원금과 이자를 함께 수령.',
                  detail: 'Huma Finance가 이 모델의 선구자. 무역금융·공급망 금융에서 매출채권을 담보로 즉시 유동성을 공급하고, 대기 기간 동안 이자를 정산하는 구조.',
                },
                {
                  title: 'Earn Now, Pay Later (ENPL)',
                  number: '③',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20',
                  numColor: 'bg-emerald-600',
                  desc: 'BNPL(Buy Now, Pay Later)의 역방향. 현재 가진 자산(스테이블코인, RWA)을 DeFi에 예치해 미래 지출 대금을 수익으로 충당. 소비자가 실질적으로 무이자 할부를 누리는 구조.',
                  detail: '예: $1,000 여행 경비를 위해 $1,000 USDC를 머니마켓에 예치 → 6개월 후 이자($50)로 일부 비용 충당. 원금은 그대로. 이자가 "선불 지급" 역할.',
                },
                {
                  title: '온체인 공급망 금융 (Supply Chain Finance)',
                  number: '④',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                  numColor: 'bg-blue-600',
                  desc: '중소기업이 대기업에 납품 후 30~90일을 기다리던 매출채권 정산을 즉시 토큰화. 글로벌 DeFi 유동성 공급자가 즉시 선지급하고 만기 시 대기업이 상환.',
                  detail: 'Huma Finance의 PayFi Pool이 대표 사례. 아시아·아프리카 중소 수출기업들이 이미 이 방식으로 수백만 달러 규모의 운전자본을 조달 중.',
                },
                {
                  title: '포인트·마일리지 자산화',
                  number: '⑤',
                  color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
                  numColor: 'bg-yellow-600',
                  desc: '카드사·항공사 포인트를 스테이블코인으로 즉시 전환하고 DeFi에 예치. "잠들어 있던" 포인트가 실질적인 이자를 발생시키는 자산이 된다.',
                  detail: 'Tikkly 등이 이 모델 구현 중. 전 세계 미사용 포인트 가치는 약 $500B 이상으로 추산. 이 시장의 온체인화는 거대한 새 유동성 공급원이 될 수 있다.',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.color}`}>
                  <div className="px-5 py-3 flex items-center gap-3 bg-white/50 dark:bg-black/20">
                    <span className={`w-7 h-7 rounded-full ${card.numColor} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>{card.number}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{card.desc}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · 주요 PayFi 프로토콜 & 플레이어</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  name: 'Huma Finance',
                  tag: '공급망 금융 선두',
                  tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  border: 'border-teal-200 dark:border-teal-800',
                  chain: 'Solana · Stellar',
                  desc: 'PayFi의 핵심 인프라. 무역금융·공급망 매출채권을 온체인 유동성과 연결. 신흥 시장(동남아, 아프리카) 중소기업에 즉시 운전자본 공급. PayFi Pool을 통해 DeFi 투자자는 실물경제 기반 수익을 얻는다.',
                  metrics: ['누적 처리량 $4B+', '기본 APY 10~12%', '90일 이내 만기 구조'],
                },
                {
                  name: 'Ondo Finance',
                  tag: '국채 토큰화',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  border: 'border-blue-200 dark:border-blue-800',
                  chain: 'Ethereum · Solana',
                  desc: '미국 단기 국채(T-Bill)를 온체인 토큰(OUSG, USDY)으로 발행. PayFi 시나리오에서 "결제 대기 자금을 어디에 예치할 것인가"의 답으로 국채 기반 수익을 제공. 기관급 안전성과 DeFi 유동성의 결합.',
                  metrics: ['TVL $700M+', '국채 기반 연 4~5% APY', 'SEC 규제 준수'],
                },
                {
                  name: 'Circle (USDC)',
                  tag: '스테이블코인 인프라',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  border: 'border-blue-200 dark:border-blue-800',
                  chain: '15+ 체인',
                  desc: 'USDC는 PayFi의 핵심 결제 레일. Circle의 CCTP(Cross-Chain Transfer Protocol)로 체인 간 이동이 즉시 가능. Programmable Wallets API로 기업이 PayFi 기능을 자체 앱에 빠르게 통합할 수 있다.',
                  metrics: ['USDC 유통량 $45B+', '15개 이상 네트워크', 'CCTP 즉시 크로스체인'],
                },
                {
                  name: 'Stripe (스테이블코인 결제)',
                  tag: '전통 결제의 전환',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  border: 'border-purple-200 dark:border-purple-800',
                  chain: 'Ethereum · Solana · Base',
                  desc: '2024년 스테이블코인 결제를 정식 지원. 기존 Stripe 상점들이 USDC/USDT로 결제를 받을 수 있게 됐다. Bridge(크로스체인 스테이블코인 플랫폼) 인수로 PayFi 인프라 직접 구축에 나섰다.',
                  metrics: ['Bridge 인수 $1.1B (2024)', '140개국 지원', '즉시 정산 옵션 제공'],
                },
                {
                  name: 'Visa × Solana',
                  tag: '전통 금융 온체인 파일럿',
                  tagColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  border: 'border-yellow-200 dark:border-yellow-800',
                  chain: 'Solana',
                  desc: 'Visa가 Solana 위에서 USDC를 사용한 결제 정산 파일럿 진행. 가맹점이 카드 결제를 스테이블코인으로 즉시 수령하는 구조. PayFi가 기존 카드 네트워크와 통합되는 첫 번째 대형 사례.',
                  metrics: ['Solana 고속 처리 활용', 'USDC 즉시 정산', '상용화 파일럿 단계'],
                },
              ].map((p, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${p.border}`}>
                  <div className="px-5 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{p.name}</p>
                      <span className="text-xs font-mono text-gray-400">{p.chain}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.tagColor}`}>{p.tag}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.metrics.map((m, j) => (
                        <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md font-mono">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · 실전 시나리오 — 현실에서 PayFi는 어떻게 보이는가</h2>

            <div className="space-y-6 my-6">
              {[
                {
                  title: '시나리오 A: 한국 IT 기업 → 미국 클라이언트 B2B 결제',
                  color: 'bg-teal-600',
                  steps: [
                    { label: '기존', text: '송장 발행 → 45일 Net 결제 조건 → SWIFT 송금(3일+$30 수수료) → 은행 환전 스프레드 1~2% → 총 50일 대기, 비용 3~4%' },
                    { label: 'PayFi', text: '송장 발행 → 스마트컨트랙트 에스크로 → 클라이언트 USDC 예치 즉시 → 45일간 Ondo 국채 펀드에서 이자 발생 → 만기 시 이자 포함 정산. 수수료 0%, 대기 자금이 수익을 냄' },
                  ],
                  saving: '비용 절감: 3~4% → ~0% + 45일 대기 자금에서 연 4~5% 수익',
                },
                {
                  title: '시나리오 B: 베트남 의류 공장 → 유럽 바이어 공급망 금융',
                  color: 'bg-cyan-600',
                  steps: [
                    { label: '기존', text: '선적 완료 → 바이어 60~90일 Net 조건 → 팩토링사에 매출채권 매각(수수료 3~5%) → 즉시 현금 확보하지만 비용 과다' },
                    { label: 'PayFi', text: 'Huma Finance 등 PayFi Pool에 선하증권(B/L) 토큰화 → 글로벌 유동성 공급자가 즉시 95% 선지급 → 바이어가 90일 후 상환 → 공급자는 즉시 현금, 투자자는 10~12% APY 수취' },
                  ],
                  saving: '팩토링 수수료 3~5% → 1~2%로 절감, 공장은 즉시 현금 확보',
                },
                {
                  title: '시나리오 C: 디지털 노마드 프리랜서 글로벌 수금',
                  color: 'bg-emerald-600',
                  steps: [
                    { label: '기존', text: '미국 클라이언트 Paypal 송금 → 수수료 3~5% → 한국 계좌 도달 2~5일 → 환전 스프레드 1~2% → 실수령 90~95%' },
                    { label: 'PayFi', text: '클라이언트 USDC 즉시 전송 → 프리랜서 Agentic Wallet 수령(2초) → 자동으로 Aave 예치 → 다음 지출 시 필요 금액만 출금. 수령 즉시부터 이자 발생' },
                  ],
                  saving: '수수료 5~7% → ~0.1% + 대기 자금 연 4~8% 수익',
                },
                {
                  title: '시나리오 D: 카드 포인트 → PayFi 자산화',
                  color: 'bg-blue-600',
                  steps: [
                    { label: '기존', text: '카드 포인트 10만 점 적립 → 포인트 계정에 방치 → 유효기간 만료로 소멸 또는 커피 한 잔으로 소진' },
                    { label: 'PayFi', text: '포인트 즉시 USDC로 전환 → 머니마켓 자동 예치 → 연 4~8% 이자 발생 → 필요 시 스테이블코인으로 사용하거나 원화/달러로 출금' },
                  ],
                  saving: '잠들어 있던 포인트가 이자를 발생시키는 자산으로 변환',
                },
              ].map((scenario, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="px-5 py-3 bg-gray-900 text-white flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${scenario.color}`} />
                    <p className="text-sm font-bold">{scenario.title}</p>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {scenario.steps.map((step, j) => (
                      <div key={j} className="px-5 py-3 flex gap-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 h-fit mt-0.5 ${step.label === '기존' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300'}`}>{step.label}</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.text}</p>
                      </div>
                    ))}
                    <div className="px-5 py-2 bg-teal-50 dark:bg-teal-900/20">
                      <p className="text-xs font-semibold text-teal-700 dark:text-teal-300">{scenario.saving}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · PayFi × RWA — 실물 자산과의 융합</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              PayFi는 단독으로 존재하지 않는다. <strong>RWA(Real World Assets, 실물 자산 토큰화)</strong>와 융합할 때 가장 강력해진다. 기존 DeFi가 "크립토 자산 간의 운용"이었다면, PayFi + RWA는 <strong>"실물 경제 자금 흐름의 온체인화"</strong>다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">PayFi × RWA 결합 구조</p>
              <div className="space-y-3">
                {[
                  { asset: '미국 단기 국채 (T-Bill)', protocol: 'Ondo USDY · Franklin Templeton BENJI', use: '결제 대기 자금의 안전한 수익 운용처', apy: '연 4~5%' },
                  { asset: '무역 매출채권', protocol: 'Huma Finance PayFi Pool', use: '중소기업 즉시 운전자본 공급', apy: '연 10~12%' },
                  { asset: '부동산 수익권', protocol: 'RealT · Maple Finance', use: '임대 수익을 결제 자금의 수익원으로', apy: '연 7~9%' },
                  { asset: '기업 신용 대출', protocol: 'Clearpool · Goldfinch', use: '신흥 시장 기업 자금 조달 + 글로벌 투자자 수익', apy: '연 8~15%' },
                  { asset: '탄소 배출권', protocol: 'Toucan · KlimaDAO', use: '결제 수수료 일부를 탄소 상쇄로 자동 전환', apy: '가변' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 text-xs items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{row.asset}</span>
                    <span className="text-teal-600 dark:text-teal-400 font-mono text-xs">{row.protocol}</span>
                    <span className="text-gray-500 dark:text-gray-400">{row.use}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-right">{row.apy}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · 2025년 PayFi 시장 현황</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
              {[
                { metric: '$8.9조', label: '온체인 스테이블코인 거래량', sub: '2025 Q1, 전년 대비 2배', color: 'text-teal-600 dark:text-teal-400' },
                { metric: '$230B+', label: '온체인 스테이블코인 총 발행량', sub: 'USDT+USDC 기준', color: 'text-teal-600 dark:text-teal-400' },
                { metric: '$4B+', label: 'Huma Finance 누적 처리', sub: '공급망 금융 PayFi 선두', color: 'text-cyan-600 dark:text-cyan-400' },
                { metric: '$700M+', label: 'Ondo Finance TVL', sub: '국채 토큰화 최대 규모', color: 'text-blue-600 dark:text-blue-400' },
                { metric: '$1.1B', label: 'Stripe의 Bridge 인수금액', sub: '전통 결제 × 스테이블코인 통합', color: 'text-purple-600 dark:text-purple-400' },
                { metric: '150개국+', label: '스테이블코인 결제 수용 지역', sub: '2025년 말 기준 추정', color: 'text-emerald-600 dark:text-emerald-400' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className={`text-2xl font-bold ${s.color}`}>{s.metric}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2025년 1분기 기준 온체인 스테이블코인 거래량은 <strong>$8.9조를 돌파</strong>했다. 이는 Visa 전체 연간 처리량의 약 절반 수준이다. Solana의 초당 65,000건 처리 능력과 $0.00025의 초저수수료는 PayFi의 물리적 인프라 역할을 한다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              특히 주목할 것은 <strong>신흥 시장</strong>이다. 아프리카·동남아·라틴아메리카에서 USDT 기반 거래는 이미 일상화됐다. 은행 계좌가 없는 인구도 스마트폰과 스테이블코인 지갑 하나로 글로벌 금융 시스템에 접근할 수 있다. PayFi는 이들에게 단순한 결제 수단을 넘어 <strong>금융 포용(Financial Inclusion)의 도구</strong>가 되고 있다.
            </p>

            {/* S9 — PayFi × Agentic Wallets */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · PayFi × Agentic Wallets — 자율 결제 에이전트의 등장</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              PayFi가 "결제 인프라의 재설계"라면, Agentic Wallets는 그 인프라 위에서 움직이는 <strong>자율 결제 행위자</strong>다. 둘의 융합은 단순한 기술 조합이 아니다. 인간이 결제 결정을 내리는 마지막 병목마저 제거하는 것이다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Coinbase의 Agentic Wallets와 AgentKit은 AI 에이전트에게 독립된 온체인 지갑과 결제 능력을 부여한다. 이 에이전트가 PayFi 인프라(즉시 정산, 수익 창출, 공급망 금융)와 연결되면, <strong>24시간 스스로 판단하고 실행하는 금융 에이전트</strong>가 탄생한다.
            </p>

            <div className="bg-gradient-to-r from-teal-50 to-violet-50 dark:from-teal-900/20 dark:to-violet-900/20 border border-teal-200 dark:border-teal-700 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">PayFi × Agentic Wallets 융합 구조</p>
              <div className="space-y-0">
                {[
                  { layer: 'AI 에이전트 (LLM)', desc: '목표 수신: "USDC 수익 극대화 + 30분 내 해외 거래처 정산"', color: 'bg-violet-500' },
                  { layer: 'AgentKit', desc: 'PayFi 툴 선택 — APY 스캔, 즉시 송금, 머니마켓 예치, 매출채권 토큰화', color: 'bg-indigo-500' },
                  { layer: 'Agentic Wallet', desc: '에이전트 전용 USDC 지갑 — 자율 서명, 지출 정책 내 실행, Gasless 트랜잭션', color: 'bg-teal-500' },
                  { layer: 'PayFi 레일', desc: 'Huma Finance Pool (공급망), Ondo 국채 예치, Solana USDC 즉시 정산', color: 'bg-cyan-500' },
                  { layer: '결과', desc: '인간 개입 없이 — 정산 완료 + 대기 중 수익 발생 + 최적 프로토콜 자동 선택', color: 'bg-emerald-500' },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-2.5 h-2.5 rounded-full ${s.color} flex-shrink-0 mt-1`} />
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{s.layer}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '자율 수익 최적화 에이전트',
                  tag: '즉시 구현 가능',
                  tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
                  border: 'border-emerald-200 dark:border-emerald-800',
                  desc: '기업 지갑의 USDC 잔고를 AI 에이전트가 실시간 모니터링. 결제 일정과 잔고를 분석해 당장 필요 없는 자금을 Aave·Ondo·Huma 중 현재 APY가 가장 높은 곳에 자동 배치. 결제 기한 1시간 전 자동 회수해 즉시 정산.',
                  flow: ['잔고 감지 → APY 스캔 (Aave 5%, Ondo 4.8%, Huma 11%)', '결제 일정 분석 → "7일 여유 있음" 판단', 'Huma PayFi Pool 자동 예치 → 7일 후 자동 회수 + 이자', '거래처에 즉시 USDC 정산 (2초)'],
                },
                {
                  title: '글로벌 공급망 자동 정산 에이전트',
                  tag: 'B2B 핵심 사례',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  border: 'border-blue-200 dark:border-blue-800',
                  desc: '수입업체의 AI 에이전트가 선하증권(B/L) 수령과 동시에 Huma Finance PayFi Pool에 매출채권 토큰화 요청. 글로벌 유동성 공급자로부터 즉시 95% 선수금. 만기에 바이어 에이전트가 자동 상환. 양 기업 모두 에이전트가 처리 — 사람은 계약 조건만 설정.',
                  flow: ['선하증권 수령 → 에이전트가 온체인 토큰화 자동 실행', 'PayFi Pool → 즉시 95% 선지급 수령', '만기일 캘린더 등록 → D-1일 바이어 에이전트에 자동 알림', '바이어 에이전트 → 자동 상환 실행 → 이자 포함 정산 완료'],
                },
                {
                  title: 'Earn Now Pay Later 자동화',
                  tag: '소비자·프리랜서',
                  tagColor: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  border: 'border-violet-200 dark:border-violet-800',
                  desc: '프리랜서가 수금한 USDC를 Agentic Wallet이 자동으로 최적 머니마켓에 예치. 이후 지출이 발생할 때마다 에이전트가 수익이 가장 적게 발생하는 포지션에서 우선 인출. 원금을 최대한 유지하면서 생활비를 이자로 충당하는 구조를 사람이 신경 쓰지 않아도 자동 운용.',
                  flow: ['수금 즉시 → 에이전트가 APY 비교 후 자동 예치', '지출 발생 시 → 가장 수익 낮은 포지션에서 우선 인출', '월말 결산 → 수익 리포트 자동 생성', '목표 잔고 이하 시 → 유저에게 알림 후 추가 입금 요청'],
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.border}`}>
                  <div className="px-5 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}>{card.tag}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{card.desc}</p>
                    <div className="bg-gray-900 rounded-lg p-3 space-y-1">
                      {card.flow.map((f, j) => (
                        <div key={j} className="flex gap-2 text-xs font-mono">
                          <span className="text-teal-400 flex-shrink-0">{j + 1}.</span>
                          <span className="text-gray-300">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">PayFi 단독 vs PayFi + Agentic Wallets 비교</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="px-3 py-2 text-left font-bold text-gray-700 dark:text-gray-300">상황</th>
                      <th className="px-3 py-2 text-left font-bold text-teal-700 dark:text-teal-300">PayFi만</th>
                      <th className="px-3 py-2 text-left font-bold text-violet-700 dark:text-violet-300">PayFi + Agentic Wallets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      ['APY 최적화', '사람이 주기적으로 확인·이동', 'AI가 24/7 실시간 자동 이동'],
                      ['결제 타이밍', '사람이 결제 버튼 클릭', '에이전트가 조건 달성 시 자동 실행'],
                      ['공급망 정산', '담당자가 서류 확인 후 처리', '선하증권 수령 즉시 에이전트 자동 처리'],
                      ['리스크 모니터링', '포트폴리오 알림 설정', 'AI가 프로토콜 리스크 감지 시 자동 회수'],
                      ['운용 시간', '근무 시간 내', '24시간 365일'],
                      ['오류 가능성', '인적 실수 가능', '정책 범위 내 완전 자동화'],
                    ].map(([situation, payfiOnly, combined], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                        <td className="px-3 py-2 font-semibold text-gray-700 dark:text-gray-300">{situation}</td>
                        <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{payfiOnly}</td>
                        <td className="px-3 py-2 text-violet-700 dark:text-violet-300 font-medium">{combined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* S10 — What to Build */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · AgentKit + PayFi로 지금 만들 수 있는 것들</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              개념이 아니라 실제로 구현 가능한 제품들이다. AgentKit의 온체인 액션 능력과 PayFi 인프라(즉시 정산·수익 창출·공급망 금융)를 조합하면, 아래 다섯 가지는 지금 당장 MVP를 만들 수 있는 수준이다.
            </p>

            <div className="space-y-6 my-6">

              {/* Product 1 */}
              <div className="border border-teal-200 dark:border-teal-800 rounded-2xl overflow-hidden">
                <div className="bg-teal-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-200">Product 1</span>
                    <h3 className="text-lg font-bold text-white mt-1">자율 기업 재무 에이전트</h3>
                    <p className="text-teal-100 text-sm mt-0.5">Autonomous Treasury Agent</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2B · 즉시 구현 가능</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    CFO 없이 돌아가는 소기업 재무팀. 회사의 USDC 잔고를 AI 에이전트가 관리하며, 결제 일정을 분석해 남는 자금을 자동으로 최적 프로토콜에 배치한다. 인간은 정책(최소 잔고, 허용 프로토콜, 지출 한도)만 설정하면 된다.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-teal-400 font-bold mb-2">// 자금 흐름</p>
                    <p className="text-white">회사 USDC 입금</p>
                    <p className="text-gray-400">  → 에이전트: 결제 캘린더 조회 (미지급 청구서, 급여일, 세금)</p>
                    <p className="text-gray-400">  → 7일 이상 여유 자금 → Ondo 국채 4.8% APY 자동 예치</p>
                    <p className="text-gray-400">  → 3~7일 여유 자금 → Aave USDC 5.2% APY 예치</p>
                    <p className="text-gray-400">  → 72시간 이내 필요 자금 → Huma PayFi Pool 단기 운용</p>
                    <p className="text-white mt-2">결제 D-1일</p>
                    <p className="text-gray-400">  → 에이전트: 해당 포지션 자동 회수</p>
                    <p className="text-teal-300">  → 거래처 지갑으로 USDC 즉시 정산 (2초)</p>
                    <p className="text-gray-400">  → 이자 포함 잔액 다시 운용 사이클 진입</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: '타겟', value: '연 매출 $1M~$50M 중소기업' },
                      { label: '예상 추가 수익', value: '운용 자금의 연 3~8%' },
                      { label: '핵심 스택', value: 'AgentKit + Ondo + Aave + Huma' },
                    ].map((item, i) => (
                      <div key={i} className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3">
                        <p className="text-xs text-teal-600 dark:text-teal-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="border border-blue-200 dark:border-blue-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Product 2</span>
                    <h3 className="text-lg font-bold text-white mt-1">AI 매출채권 파이낸싱 봇</h3>
                    <p className="text-blue-100 text-sm mt-0.5">Invoice Financing Bot</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2B · 팩토링 대체</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    팩토링사에 3~5% 수수료를 내던 중소기업의 대안. 송장 발행과 동시에 에이전트가 매출채권을 온체인 토큰화해 PayFi Pool에 제출, 즉시 95%를 선수령한다. 만기 정산까지 전 과정 자동화.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-blue-400 font-bold mb-2">// 매출채권 → 즉시 현금 흐름</p>
                    <p className="text-white">납품 완료 → 송장 발행 (Net-60)</p>
                    <p className="text-gray-400">  → 에이전트: 송장 데이터 파싱 (금액, 바이어, 만기일)</p>
                    <p className="text-gray-400">  → 신용도 평가 (바이어 온체인 히스토리, 오프체인 데이터)</p>
                    <p className="text-gray-400">  → Huma Finance Pool에 매출채권 NFT 제출</p>
                    <p className="text-teal-300">  → 즉시 95% USDC 수령 (수수료 1~2%)</p>
                    <p className="text-white mt-2">만기일 (Day 60)</p>
                    <p className="text-gray-400">  → 바이어 에이전트에 자동 상환 요청</p>
                    <p className="text-gray-400">  → 상환 완료 → Pool 투자자에게 원금 + 이자 분배</p>
                    <p className="text-teal-300">  → 공급자: 총 1~2% 비용으로 60일 → 즉시 현금화</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: '타겟', value: '수출·제조 중소기업' },
                      { label: '비용 절감', value: '팩토링 3~5% → 1~2%' },
                      { label: '핵심 스택', value: 'AgentKit + Huma Finance' },
                    ].map((item, i) => (
                      <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="border border-emerald-200 dark:border-emerald-800 rounded-2xl overflow-hidden">
                <div className="bg-emerald-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">Product 3</span>
                    <h3 className="text-lg font-bold text-white mt-1">Idle Money Eliminator</h3>
                    <p className="text-emerald-100 text-sm mt-0.5">개인 "돈 낭비 없는" 지갑</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2C · 일반 소비자</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    복잡한 DeFi 지식이 없는 일반 사용자용. 스테이블코인 지갑에 돈을 넣으면 에이전트가 알아서 최적 운용하고, 쓸 때만 자동 인출한다. "이번 달 이자로 커피 32잔 공짜"처럼 친근한 UX로 DeFi를 완전히 숨긴다.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-emerald-400 font-bold mb-2">// 사용자 경험 흐름</p>
                    <p className="text-white">사용자: USDC 500 입금</p>
                    <p className="text-gray-400">  → 에이전트: APY 실시간 비교</p>
                    <p className="text-gray-400">     Aave: 5.1% | Compound: 4.8% | Morpho: 5.6%</p>
                    <p className="text-teal-300">  → Morpho 자동 예치 (사용자는 아무것도 안 함)</p>
                    <p className="text-white mt-2">사용자: 커피 $5 결제</p>
                    <p className="text-gray-400">  → 에이전트: 최소 수익 포지션에서 $5 즉시 인출</p>
                    <p className="text-teal-300">  → 결제 완료 (나머지 $495 계속 이자 발생)</p>
                    <p className="text-white mt-2">월말 알림</p>
                    <p className="text-teal-300">  → "이번 달 이자 $18.3 발생 ☕ 커피 36잔 값이에요"</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: '타겟', value: '스테이블코인 보유 일반인' },
                      { label: '경험', value: 'DeFi 지식 0% 필요' },
                      { label: '핵심 스택', value: 'AgentKit + Aave + Morpho + ERC-4337' },
                    ].map((item, i) => (
                      <div key={i} className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="border border-purple-200 dark:border-purple-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200">Product 4</span>
                    <h3 className="text-lg font-bold text-white mt-1">글로벌 급여 자동화 에이전트</h3>
                    <p className="text-purple-100 text-sm mt-0.5">Cross-Border Payroll Agent</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">HR·스타트업</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    해외 팀원에게 급여를 보내는 스타트업의 악몽 — 환전 스프레드, 은행 수수료, 3~5일 대기, 각국 다른 계좌 형식 — 을 에이전트 하나로 해결한다. 급여일 전까지 자금을 머니마켓에 운용하다 정확한 시점에 자동 집행.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-purple-400 font-bold mb-2">// 급여일 자동화 흐름</p>
                    <p className="text-white">급여 예산 USDC 입금 (급여일 7일 전)</p>
                    <p className="text-gray-400">  → 에이전트: 7일간 Aave 예치 → 이자 발생</p>
                    <p className="text-white mt-2">급여일 당일 09:00</p>
                    <p className="text-gray-400">  → 각 직원 Agentic Wallet 주소로 분배 계획 수립</p>
                    <p className="text-gray-400">  → 한국 직원: USDC → 원화 오프램프 자동 라우팅</p>
                    <p className="text-gray-400">  → 베트남 직원: USDC 직접 지급 (Binance P2P 오프램프)</p>
                    <p className="text-gray-400">  → 미국 직원: USDC 직접 지급 (Coinbase 계좌 연동)</p>
                    <p className="text-teal-300">  → 전원 동시 즉시 지급 완료 + 이자는 회사 수익</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: '타겟', value: '해외 원격팀 보유 스타트업' },
                      { label: '절감', value: '환전·수수료 연 3~7% 절감' },
                      { label: '핵심 스택', value: 'AgentKit + Circle CCTP + 각국 오프램프' },
                    ].map((item, i) => (
                      <div key={i} className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="border border-orange-200 dark:border-orange-800 rounded-2xl overflow-hidden">
                <div className="bg-orange-500 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-100">Product 5</span>
                    <h3 className="text-lg font-bold text-white mt-1">Earn Now Pay Later 구독 매니저</h3>
                    <p className="text-orange-100 text-sm mt-0.5">Subscription Yield Manager</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2C · 구독 경제</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    BNPL(나중에 결제)의 역방향. 구독 서비스 결제일을 역산해 미리 자금을 예치하고, 이자로 구독료를 충당한다. 원금은 건드리지 않고 이자만으로 넷플릭스·AWS·SaaS 도구를 쓰는 경험. 충분한 원금이 쌓이면 이론상 구독료 전액 무료.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-orange-400 font-bold mb-2">// 구독료를 이자로 내는 구조</p>
                    <p className="text-white">구독 목록 등록:</p>
                    <p className="text-gray-400">  넷플릭스 $18/월, AWS $120/월, Figma $45/월 = $183/월</p>
                    <p className="text-white mt-2">에이전트 계산:</p>
                    <p className="text-gray-400">  연간 구독료 $2,196 / APY 6% = 원금 $36,600 필요</p>
                    <p className="text-gray-400">  현재 예치금 $5,000 → 월 이자 $25 → 구독료 14% 충당</p>
                    <p className="text-white mt-2">매월 자동 실행:</p>
                    <p className="text-gray-400">  → 이자 $25 자동 인출 → 구독료 일부 자동 결제</p>
                    <p className="text-teal-300">  → "이번 달 넷플릭스 + AWS 이자로 해결 ✓"</p>
                    <p className="text-teal-300">  → 원금 $5,000 그대로 유지</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: '타겟', value: 'SaaS 구독 다수 보유자' },
                      { label: '목표', value: '원금 이자로 구독 전액 무료화' },
                      { label: '핵심 스택', value: 'AgentKit + Morpho + ERC-4337 Paymaster' },
                    ].map((item, i) => (
                      <div key={i} className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                        <p className="text-xs text-orange-600 dark:text-orange-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* 공통 스택 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">5가지 제품의 공통 기술 스택</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { layer: 'AI 실행', tools: ['Coinbase AgentKit', 'LangChain / Vercel AI', 'Claude / GPT-4o'] },
                  { layer: '지갑 인프라', tools: ['Coinbase Agentic Wallets', 'CDP SDK', 'ERC-4337 (Paymaster)'] },
                  { layer: 'PayFi 레일', tools: ['Huma Finance', 'Ondo Finance', 'Aave / Morpho'] },
                  { layer: '정산 네트워크', tools: ['Solana (속도)', 'Base (저비용)', 'Circle CCTP (크로스체인)'] },
                ].map((col, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-teal-600 dark:text-teal-400 mb-2">{col.layer}</p>
                    <ul className="space-y-1">
                      {col.tools.map((t, j) => (
                        <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                          <span className="text-teal-400 flex-shrink-0">·</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* S11 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">11 · 리스크 — PayFi가 해결해야 할 과제들</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: '규제 불확실성',
                  level: '가장 큰 위협',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: '각국 중앙은행과 금융당국이 스테이블코인 결제를 어떻게 규제할지 불명확. EU의 MiCA, 미국의 Stablecoin Act 등이 논의 중이나 글로벌 표준은 아직 없다. 규제 리스크가 PayFi 확산의 최대 장벽.',
                },
                {
                  title: '스테이블코인 디페깅 리스크',
                  level: '낮지만 치명적',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'UST 디페깅($40B 소멸, 2022)이 극단적 사례. USDC는 SVB 사태 당시 $0.87까지 하락(2023). 결제 인프라로 스테이블코인을 사용한다면 발행사 리스크가 곧 결제 시스템 리스크가 된다.',
                },
                {
                  title: '오프램프 인프라 부족',
                  level: '실용적 장벽',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'USDC를 받았다고 해도 이를 현지 통화(원화, 동, 페소 등)로 즉시 환전하는 오프램프가 취약한 국가가 많다. PayFi의 실질적 확산은 글로벌 오프램프 인프라 구축 속도에 달려있다.',
                },
                {
                  title: '스마트컨트랙트 리스크',
                  level: '기술적 위험',
                  lc: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  desc: '결제 자금이 스마트컨트랙트를 경유하는 만큼 코드 취약점 해킹 위험 존재. 특히 새로 출시된 PayFi 프로토콜은 기존 DeFi 대비 보안 검증이 부족할 수 있다.',
                },
                {
                  title: '신용 리스크 (RWA 연계 시)',
                  level: '구조적 위험',
                  lc: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
                  desc: '공급망 금융·무역금융 기반 PayFi는 실물 기업의 부도 리스크를 온체인에 들여오는 것. 채무불이행 시 DeFi 투자자도 손실을 입는다. 담보 구조와 보험 메커니즘 설계가 중요.',
                },
              ].map((r, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">돈이 이동하는 모든 순간이 기회다</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  전통 금융은 결제 과정에서 수조 달러의 자금을 매일 "잠들게" 한다. SWIFT 정산 대기, 송장 결제 지연, 미사용 포인트 — 이 모든 Idle Time이 PayFi의 기회다.
                </p>
                <p>
                  PayFi는 단순히 "빠른 결제"가 아니다. <strong className="text-white">화폐의 시간 가치를 결제 흐름 안에서 실현하는 새로운 금융 패러다임</strong>이다. 돈이 이동하는 순간에도 수익이 발생하고, 중간 수수료는 사라지고, 전통 금융이 불가능했던 금융 상품이 등장한다.
                </p>
                <p>
                  Visa의 Solana USDC 파일럿, Stripe의 $1.1B Bridge 인수, Huma Finance의 $4B+ 처리 — 이미 현실이 되고 있다. 다음 10년, 결제 인프라의 상당 부분은 블록체인 + 스테이블코인으로 재설계될 것이다.
                </p>
                <p className="text-gray-400 text-xs">
                  * 본 글에서 언급된 APY, TVL, 거래량 수치는 2025년 공개 데이터 기반 추정치입니다. 시장 상황에 따라 변동하며 투자 권유가 아닙니다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">PayFi — Yield on Every Dollar in Motion</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">Payment Finance · Time Value of Money · Eliminating Idle Time · Stablecoin Payment Infrastructure</p>

            {/* Stats EN */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Onchain stablecoin volume', value: '$8.9T', sub: 'Q1 2025' },
                { label: 'Traditional cross-border wait', value: '2–5 days', sub: 'SWIFT standard' },
                { label: 'Blockchain stablecoin settlement', value: '2–5 sec', sub: 'Solana / Base' },
                { label: 'PayFi concept coined', value: '2024', sub: 'Lily Liu, Solana Foundation' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Money "Asleep" — The Hidden Cost of Traditional Finance</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You wire $10,000 to an overseas supplier. The money leaves your account immediately. But it won't arrive for 3 days. Where is it during those 3 days? Sitting somewhere inside the SWIFT correspondent banking network, <strong>earning nothing, waiting to settle.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Economics has a concept called the <strong>Time Value of Money</strong>: $1 today is worth more than $1 a year from now, because you can put it to work immediately. Yet the traditional financial system <strong>systematically destroys this time value</strong> at every step of the payment process.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Where money "goes to sleep" in traditional finance</p>
              <div className="space-y-3">
                {[
                  { scenario: 'Cross-border wire', idle: '2–5 days', who: 'Correspondent banks collect float', loss: 'Est. $2.4T/yr globally' },
                  { scenario: 'B2B invoice payment', idle: '30–90 days', who: 'Accounts receivable waiting', loss: 'Corporate cash flow drain' },
                  { scenario: 'Card settlement', idle: '1–3 days', who: 'Card networks & processors', loss: 'Merchant revenue delayed' },
                  { scenario: 'Unused loyalty points', idle: 'Forever', who: 'Issuer liability, consumer loss', loss: '~$500B dormant globally' },
                  { scenario: 'Supply chain factoring', idle: '30–120 days', who: 'Factoring firms charge 3–5%', loss: 'SME financing cost' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 text-xs items-center">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{row.scenario}</span>
                    <span className="font-mono text-red-600 dark:text-red-400 font-bold">{row.idle} idle</span>
                    <span className="text-gray-500 dark:text-gray-400">{row.who}</span>
                    <span className="text-gray-400">{row.loss}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · What Is PayFi? — The Concept Lily Liu Defined</h2>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">Lily Liu's Definition of PayFi</p>
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic border-l-4 border-teal-400 pl-4">
                "PayFi is a new financial market for the time value of money. It realizes the future value of current money and creates entirely new financial use cases that were previously impossible in traditional finance."
              </blockquote>
              <p className="text-xs text-gray-400 mt-3">— Lily Liu, President, Solana Foundation, 2024 Consensus</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { title: 'Realize Time Value', icon: '⏱️', color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20', desc: 'Every dollar waiting to settle earns yield in a DeFi money market. Not a single second is wasted.' },
                { title: 'Zero Idle Time', icon: '⚡', color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20', desc: 'Blockchain-based instant settlement compresses 2–5 days of SWIFT latency into 2–5 seconds. Middlemen — and their fees — disappear.' },
                { title: 'Previously Impossible Products', icon: '🔮', color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20', desc: '"Earn Now, Pay Later" — yield on today\'s assets covers future expenses. A financial product that simply couldn\'t exist before.' },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{card.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · DeFi vs PayFi — The Fundamental Difference</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Dimension</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-blue-400">Traditional DeFi</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-teal-400">PayFi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['Purpose', 'Asset management, yield maximization', 'Payment, settlement, cash flow optimization'],
                    ['State of money', 'Locked / Staked', 'In Transit'],
                    ['Primary users', 'Crypto investors & traders', 'Businesses, freelancers, consumers'],
                    ['Core value', 'Maximize yield', 'Remove payment friction + realize time value'],
                    ['Primary asset', 'ETH, BTC, LP tokens', 'USDC, USDT and stablecoins'],
                    ['Settlement', 'Assets locked in protocol', 'Instant settlement, idle funds deployed'],
                    ['Risk profile', 'Smart contract + volatility risk', 'Regulatory + credit + off-ramp risk'],
                    ['Key protocols', 'Aave, Uniswap, Curve', 'Huma Finance, Ondo, Circle'],
                    ['RWA integration', 'Indirect (synthetic assets)', 'Direct (receivables, trade finance)'],
                  ].map(([label, defi, payfi], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{label}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{defi}</td>
                      <td className="px-4 py-3 text-xs text-teal-700 dark:text-teal-300 font-medium">{payfi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Core PayFi Mechanisms</h2>

            <div className="space-y-4 my-6">
              {[
                { title: 'Real-Time Settlement', number: '①', color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20', numColor: 'bg-teal-600', desc: 'Stablecoin P2P settlement compresses SWIFT\'s 2–5 day wait to 2–5 seconds. No correspondent banks means no float revenue for intermediaries.', detail: 'Visa is piloting USDC settlement on Solana. At scale, shifting even a fraction of global payments to this model would eliminate trillions in friction costs annually.' },
                { title: 'Yield While In Transit', number: '②', color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20', numColor: 'bg-cyan-600', desc: 'Payment funds auto-deposit into money markets (Aave, Compound, onchain T-bill funds) until the moment they settle. Principal + accrued yield arrive together.', detail: 'Huma Finance pioneered this model for trade finance and supply chain receivables, connecting emerging market SMEs to global DeFi liquidity providers.' },
                { title: 'Earn Now, Pay Later (ENPL)', number: '③', color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20', numColor: 'bg-emerald-600', desc: 'The reverse of BNPL. Deposit today\'s assets (stablecoins, RWA) into DeFi, use future yield to cover upcoming expenses. Effectively zero-interest installment buying.', detail: 'Example: Deposit $1,000 USDC for a vacation 6 months out → $50 in yield covers part of the trip cost. Principal stays intact. Yield acts as a "pre-paid" subsidy.' },
                { title: 'Onchain Supply Chain Finance', number: '④', color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20', numColor: 'bg-blue-600', desc: 'SMEs that used to wait 30–90 days for invoice payment can tokenize receivables instantly. Global DeFi liquidity providers fund them immediately; the buyer repays at maturity.', detail: 'Huma Finance\'s PayFi Pool is the leading example. Exporters across Asia and Africa are already accessing millions in working capital this way.' },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.color}`}>
                  <div className="px-5 py-3 flex items-center gap-3 bg-white/50 dark:bg-black/20">
                    <span className={`w-7 h-7 rounded-full ${card.numColor} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>{card.number}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{card.desc}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Key PayFi Protocols & Players</h2>

            <div className="space-y-4 my-6">
              {[
                { name: 'Huma Finance', tag: 'Supply chain finance leader', tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300', border: 'border-teal-200 dark:border-teal-800', chain: 'Solana · Stellar', desc: 'Core PayFi infrastructure. Connects trade finance and supply chain receivables to onchain liquidity. Provides instant working capital to SMEs in emerging markets (Southeast Asia, Africa). DeFi investors earn real-economy yields via PayFi Pools.', metrics: ['$4B+ cumulative volume', '10–12% base APY', 'Sub-90 day maturity structure'] },
                { name: 'Ondo Finance', tag: 'Treasury tokenization', tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', chain: 'Ethereum · Solana', desc: 'Issues US T-bill backed onchain tokens (OUSG, USDY). In PayFi scenarios, answers the question "where do idle payment funds go?" with institutional-grade T-bill yields accessible onchain.', metrics: ['$700M+ TVL', '4–5% APY (T-bill backed)', 'SEC-compliant structure'] },
                { name: 'Circle (USDC)', tag: 'Stablecoin infrastructure', tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', chain: '15+ chains', desc: 'USDC is the core payment rail for PayFi. Circle\'s CCTP (Cross-Chain Transfer Protocol) enables instant cross-chain movement. Programmable Wallets API lets businesses embed PayFi features quickly.', metrics: ['$45B+ USDC supply', '15+ networks', 'CCTP instant cross-chain'] },
                { name: 'Stripe (stablecoin payments)', tag: 'Traditional payments pivoting', tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', chain: 'Ethereum · Solana · Base', desc: 'Added official stablecoin payment support in 2024. Merchants on Stripe can now receive USDC/USDT. The $1.1B acquisition of Bridge signals a move to build PayFi infrastructure directly.', metrics: ['Bridge acquisition $1.1B (2024)', '140+ countries supported', 'Instant settlement option'] },
                { name: 'Visa × Solana', tag: 'Traditional finance onchain pilot', tagColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800', chain: 'Solana', desc: 'Visa piloting USDC-based payment settlement on Solana. Merchants receive card payment proceeds in stablecoins instantly — the first major case of PayFi integrating with existing card networks.', metrics: ['High-throughput Solana infrastructure', 'USDC instant settlement', 'Commercial pilot stage'] },
              ].map((p, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${p.border}`}>
                  <div className="px-5 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{p.name}</p>
                      <span className="text-xs font-mono text-gray-400">{p.chain}</span>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.tagColor}`}>{p.tag}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.metrics.map((m, j) => (
                        <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md font-mono">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Real-World Scenarios</h2>

            <div className="space-y-6 my-6">
              {[
                {
                  title: 'Scenario A: Korean IT firm → US client B2B payment',
                  color: 'bg-teal-600',
                  steps: [
                    { label: 'Before', text: 'Invoice issued → Net-45 payment terms → SWIFT wire (3 days + $30 fee) → FX spread 1–2% → Total: 50 days wait, 3–4% cost' },
                    { label: 'PayFi', text: 'Invoice issued → Smart contract escrow → Client deposits USDC immediately → Funds earn yield in Ondo T-bill fund during 45-day period → Settlement at maturity includes principal + accrued yield. Zero fees, idle funds earn returns.' },
                  ],
                  saving: 'Cost: 3–4% → ~0% + idle funds earn 4–5% annualized during waiting period',
                },
                {
                  title: 'Scenario B: Vietnam garment factory → European buyer supply chain',
                  color: 'bg-cyan-600',
                  steps: [
                    { label: 'Before', text: 'Shipment complete → Net-60/90 buyer terms → Sell receivable to factoring firm (3–5% fee) → Receive cash now but expensive' },
                    { label: 'PayFi', text: 'Tokenize Bill of Lading on Huma Finance PayFi Pool → Global liquidity providers fund 95% immediately → Buyer repays at 90-day maturity → Factory gets instant cash, investors earn 10–12% APY' },
                  ],
                  saving: 'Factoring cost 3–5% → 1–2%, factory gets immediate liquidity',
                },
                {
                  title: 'Scenario C: Digital nomad freelancer receiving global payments',
                  color: 'bg-emerald-600',
                  steps: [
                    { label: 'Before', text: 'US client PayPal transfer → 3–5% fee → 2–5 days to Korean bank → FX spread 1–2% → Net receipt: 90–95%' },
                    { label: 'PayFi', text: 'Client sends USDC directly → Freelancer Agentic Wallet receives in 2 seconds → Auto-deposits into Aave → Withdraws only what\'s needed for expenses. Yield starts accruing from moment of receipt.' },
                  ],
                  saving: 'Fee: 5–7% → ~0.1% + idle funds earn 4–8% annualized',
                },
              ].map((scenario, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="px-5 py-3 bg-gray-900 text-white flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${scenario.color}`} />
                    <p className="text-sm font-bold">{scenario.title}</p>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {scenario.steps.map((step, j) => (
                      <div key={j} className="px-5 py-3 flex gap-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 h-fit mt-0.5 ${step.label === 'Before' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300'}`}>{step.label}</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.text}</p>
                      </div>
                    ))}
                    <div className="px-5 py-2 bg-teal-50 dark:bg-teal-900/20">
                      <p className="text-xs font-semibold text-teal-700 dark:text-teal-300">{scenario.saving}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PayFi × Agentic Wallets EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · PayFi × Agentic Wallets — The Autonomous Payment Agent</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If PayFi is the redesign of payment infrastructure, Agentic Wallets are the <strong>autonomous actors</strong> that operate on top of it. Their fusion isn't just a tech combination — it eliminates the last human bottleneck in the payment decision loop.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Coinbase's Agentic Wallets and AgentKit give AI agents independent onchain wallets and full payment capability. When these agents connect to PayFi infrastructure — instant settlement, yield generation, supply chain finance — the result is a <strong>24/7 autonomous financial agent</strong> that decides and executes without human intervention.
            </p>

            <div className="bg-gradient-to-r from-teal-50 to-violet-50 dark:from-teal-900/20 dark:to-violet-900/20 border border-teal-200 dark:border-teal-700 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">PayFi × Agentic Wallets Stack</p>
              <div className="space-y-0">
                {[
                  { layer: 'AI Agent (LLM)', desc: 'Goal: "Maximize USDC yield + settle overseas payment within 30 minutes"', color: 'bg-violet-500' },
                  { layer: 'AgentKit', desc: 'Selects PayFi tools — APY scan, instant transfer, money market deposit, receivable tokenization', color: 'bg-indigo-500' },
                  { layer: 'Agentic Wallet', desc: 'Agent-owned USDC wallet — autonomous signing, policy-bound execution, gasless transactions', color: 'bg-teal-500' },
                  { layer: 'PayFi Rails', desc: 'Huma Finance Pool (supply chain), Ondo T-bill deposit, Solana USDC instant settlement', color: 'bg-cyan-500' },
                  { layer: 'Outcome', desc: 'Zero human intervention — settlement complete + yield earned during transit + best protocol auto-selected', color: 'bg-emerald-500' },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-2.5 h-2.5 rounded-full ${s.color} flex-shrink-0 mt-1`} />
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{s.layer}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Autonomous Yield Optimizer',
                  tag: 'Immediately buildable',
                  tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
                  border: 'border-emerald-200 dark:border-emerald-800',
                  desc: 'An AI agent monitors a company\'s USDC balance in real time. It analyzes payment schedules and idle funds, automatically placing them in the highest-APY protocol (Aave, Ondo, Huma). Funds are recalled automatically 1 hour before payment is due.',
                  flow: ['Balance detected → APY scan (Aave 5%, Ondo 4.8%, Huma 11%)', 'Analyze payment schedule → "7 days free" determined', 'Auto-deposit to Huma PayFi Pool → auto-recall in 7 days + yield', 'Instant USDC settlement to counterparty (2 sec)'],
                },
                {
                  title: 'Global Supply Chain Auto-Settlement',
                  tag: 'Core B2B use case',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  border: 'border-blue-200 dark:border-blue-800',
                  desc: 'An importer\'s AI agent automatically tokenizes the Bill of Lading the moment it\'s received, submitting it to Huma Finance\'s PayFi Pool. Global liquidity providers fund 95% immediately. At maturity, the buyer\'s agent auto-repays. Both companies handled by agents — humans only set the contract terms.',
                  flow: ['B/L received → agent auto-tokenizes onchain', 'PayFi Pool → 95% pre-payment received instantly', 'Maturity date calendared → D-1 auto-alert to buyer agent', 'Buyer agent → auto-repayment + interest settlement'],
                },
                {
                  title: 'Earn Now Pay Later — Automated',
                  tag: 'Consumer & freelancer',
                  tagColor: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  border: 'border-violet-200 dark:border-violet-800',
                  desc: 'A freelancer\'s received USDC is automatically deposited into the optimal money market by their Agentic Wallet. When expenses arise, the agent withdraws from the lowest-yield position first — maximizing remaining yield without any manual management.',
                  flow: ['Payment received → agent compares APY, auto-deposits', 'Expense triggered → withdrawal from lowest-yield position first', 'Month-end → auto-generate yield report', 'Balance below target → alert user, request top-up'],
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.border}`}>
                  <div className="px-5 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}>{card.tag}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{card.desc}</p>
                    <div className="bg-gray-900 rounded-lg p-3 space-y-1">
                      {card.flow.map((f, j) => (
                        <div key={j} className="flex gap-2 text-xs font-mono">
                          <span className="text-teal-400 flex-shrink-0">{j + 1}.</span>
                          <span className="text-gray-300">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">PayFi alone vs PayFi + Agentic Wallets</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="px-3 py-2 text-left font-bold text-gray-700 dark:text-gray-300">Situation</th>
                      <th className="px-3 py-2 text-left font-bold text-teal-700 dark:text-teal-300">PayFi only</th>
                      <th className="px-3 py-2 text-left font-bold text-violet-700 dark:text-violet-300">PayFi + Agentic Wallets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      ['APY optimization', 'Human checks & moves periodically', 'AI auto-moves 24/7 in real time'],
                      ['Payment timing', 'Human clicks the send button', 'Agent executes when conditions are met'],
                      ['Supply chain settlement', 'Staff reviews docs & processes', 'Agent auto-processes on B/L receipt'],
                      ['Risk monitoring', 'Alert on portfolio settings', 'AI detects protocol risk, auto-withdraws'],
                      ['Operating hours', 'Business hours only', '24/7/365'],
                      ['Error risk', 'Human error possible', 'Fully automated within policy bounds'],
                    ].map(([situation, payfiOnly, combined], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                        <td className="px-3 py-2 font-semibold text-gray-700 dark:text-gray-300">{situation}</td>
                        <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{payfiOnly}</td>
                        <td className="px-3 py-2 text-violet-700 dark:text-violet-300 font-medium">{combined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* What to Build EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · What You Can Build Right Now with AgentKit + PayFi</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              These aren't thought experiments. Combining AgentKit's onchain action capabilities with PayFi infrastructure (instant settlement, yield generation, supply chain finance), all five products below are at MVP-ready stage today.
            </p>

            <div className="space-y-6 my-6">

              <div className="border border-teal-200 dark:border-teal-800 rounded-2xl overflow-hidden">
                <div className="bg-teal-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-200">Product 1</span>
                    <h3 className="text-lg font-bold text-white mt-1">Autonomous Treasury Agent</h3>
                    <p className="text-teal-100 text-sm mt-0.5">A CFO-less treasury for small businesses</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2B · Build today</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    An AI agent manages the company's USDC treasury, analyzes payment schedules, and automatically allocates idle funds to the best-yield protocol. Humans set policy (minimum reserve, allowed protocols, spending caps) — the agent runs the rest.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-teal-400 font-bold mb-2">// Cash flow logic</p>
                    <p className="text-white">USDC received</p>
                    <p className="text-gray-400">  → agent: query payment calendar (invoices, payroll, taxes)</p>
                    <p className="text-gray-400">  → 7+ days idle → Ondo T-bill 4.8% APY auto-deposit</p>
                    <p className="text-gray-400">  → 3–7 days idle → Aave USDC 5.2% APY</p>
                    <p className="text-gray-400">  → needed in 72h → Huma PayFi Pool short-term</p>
                    <p className="text-white mt-2">Payment D-1</p>
                    <p className="text-gray-400">  → agent: auto-recall position</p>
                    <p className="text-teal-300">  → USDC instant settlement to counterparty (2 sec)</p>
                    <p className="text-gray-400">  → remaining balance re-enters yield cycle</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Target', value: '$1M–$50M ARR SMEs' },
                      { label: 'Upside', value: '3–8% annualized on idle funds' },
                      { label: 'Stack', value: 'AgentKit + Ondo + Aave + Huma' },
                    ].map((item, i) => (
                      <div key={i} className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3">
                        <p className="text-xs text-teal-600 dark:text-teal-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 dark:border-blue-800 rounded-2xl overflow-hidden">
                <div className="bg-blue-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Product 2</span>
                    <h3 className="text-lg font-bold text-white mt-1">Invoice Financing Bot</h3>
                    <p className="text-blue-100 text-sm mt-0.5">Replace factoring companies with DeFi liquidity</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2B · Factoring killer</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The alternative for SMEs paying 3–5% to factoring companies. The moment an invoice is issued, the agent tokenizes the receivable and submits it to a PayFi Pool, instantly receiving 95% of the face value. Full automation through to maturity settlement.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-blue-400 font-bold mb-2">// Receivable → instant cash</p>
                    <p className="text-white">Delivery complete → invoice issued (Net-60)</p>
                    <p className="text-gray-400">  → agent: parse invoice (amount, buyer, maturity)</p>
                    <p className="text-gray-400">  → credit assessment (onchain history, offchain data)</p>
                    <p className="text-gray-400">  → submit receivable NFT to Huma Finance Pool</p>
                    <p className="text-teal-300">  → receive 95% USDC instantly (1–2% fee)</p>
                    <p className="text-white mt-2">Day 60 (maturity)</p>
                    <p className="text-gray-400">  → buyer agent receives auto repayment request</p>
                    <p className="text-teal-300">  → repayment → principal + yield distributed to Pool investors</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Target', value: 'Export & manufacturing SMEs' },
                      { label: 'Savings', value: 'Factoring 3–5% → 1–2%' },
                      { label: 'Stack', value: 'AgentKit + Huma Finance' },
                    ].map((item, i) => (
                      <div key={i} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border border-emerald-200 dark:border-emerald-800 rounded-2xl overflow-hidden">
                <div className="bg-emerald-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">Product 3</span>
                    <h3 className="text-lg font-bold text-white mt-1">Idle Money Eliminator</h3>
                    <p className="text-emerald-100 text-sm mt-0.5">Zero-effort yield for everyday users</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2C · Mass market</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Designed for everyday users with zero DeFi knowledge. Deposit stablecoins, the agent handles everything — optimizing yield allocation and withdrawing from the lowest-earning position when you spend. DeFi is completely invisible.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-emerald-400 font-bold mb-2">// User experience flow</p>
                    <p className="text-white">User deposits 500 USDC</p>
                    <p className="text-gray-400">  → agent: real-time APY comparison</p>
                    <p className="text-gray-400">     Aave: 5.1% | Compound: 4.8% | Morpho: 5.6%</p>
                    <p className="text-teal-300">  → auto-deposit to Morpho (user does nothing)</p>
                    <p className="text-white mt-2">User pays $5 for coffee</p>
                    <p className="text-gray-400">  → agent: withdraw $5 from lowest-yield position</p>
                    <p className="text-teal-300">  → payment complete ($495 still earning yield)</p>
                    <p className="text-white mt-2">Month-end notification</p>
                    <p className="text-teal-300">  → "$18.30 earned this month ☕ That's 36 coffees"</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Target', value: 'Stablecoin holders, any level' },
                      { label: 'UX', value: '0% DeFi knowledge required' },
                      { label: 'Stack', value: 'AgentKit + Aave + Morpho + ERC-4337' },
                    ].map((item, i) => (
                      <div key={i} className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border border-purple-200 dark:border-purple-800 rounded-2xl overflow-hidden">
                <div className="bg-purple-600 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-200">Product 4</span>
                    <h3 className="text-lg font-bold text-white mt-1">Cross-Border Payroll Agent</h3>
                    <p className="text-purple-100 text-sm mt-0.5">Global team payroll, automated end-to-end</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">HR · Startups</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    The startup nightmare of paying overseas team members — FX spreads, wire fees, 3–5 day delays, different account formats per country — solved by a single agent. Funds earn yield until payday, then distribute simultaneously to every team member worldwide.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-purple-400 font-bold mb-2">// Payroll automation flow</p>
                    <p className="text-white">Payroll USDC funded (7 days before payday)</p>
                    <p className="text-gray-400">  → agent: deposit to Aave for 7 days → yield accrues</p>
                    <p className="text-white mt-2">Payday 09:00</p>
                    <p className="text-gray-400">  → Korean employee: USDC → KRW off-ramp auto-routed</p>
                    <p className="text-gray-400">  → Vietnam employee: USDC direct (Binance P2P off-ramp)</p>
                    <p className="text-gray-400">  → US employee: USDC direct (Coinbase account link)</p>
                    <p className="text-teal-300">  → all paid simultaneously, instantly</p>
                    <p className="text-teal-300">  → yield from 7-day hold → company keeps it</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Target', value: 'Startups with remote global teams' },
                      { label: 'Savings', value: 'FX + wire fees: 3–7% eliminated' },
                      { label: 'Stack', value: 'AgentKit + Circle CCTP + local off-ramps' },
                    ].map((item, i) => (
                      <div key={i} className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border border-orange-200 dark:border-orange-800 rounded-2xl overflow-hidden">
                <div className="bg-orange-500 px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-100">Product 5</span>
                    <h3 className="text-lg font-bold text-white mt-1">Subscription Yield Manager</h3>
                    <p className="text-orange-100 text-sm mt-0.5">Earn Now Pay Later for SaaS subscriptions</p>
                  </div>
                  <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full whitespace-nowrap">B2C · Subscription economy</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    BNPL in reverse. The agent reverse-engineers your subscription payment calendar, pre-deposits funds, and uses the yield to cover your bills. Principal stays intact — subscriptions are paid with interest. Enough principal, and you never pay for Netflix again.
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 font-mono text-xs space-y-1">
                    <p className="text-orange-400 font-bold mb-2">// Pay subscriptions with yield</p>
                    <p className="text-white">Subscriptions registered:</p>
                    <p className="text-gray-400">  Netflix $18/mo, AWS $120/mo, Figma $45/mo = $183/mo</p>
                    <p className="text-white mt-2">Agent calculates:</p>
                    <p className="text-gray-400">  Annual cost $2,196 / 6% APY = $36,600 principal needed</p>
                    <p className="text-gray-400">  Current deposit $5,000 → $25/mo yield → covers 14%</p>
                    <p className="text-white mt-2">Monthly auto-execution:</p>
                    <p className="text-gray-400">  → withdraw $25 yield → auto-pay subscription portion</p>
                    <p className="text-teal-300">  → "Netflix + AWS paid by yield this month ✓"</p>
                    <p className="text-teal-300">  → principal $5,000 untouched</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Target', value: 'Heavy SaaS subscription users' },
                      { label: 'Goal', value: 'All subscriptions covered by yield' },
                      { label: 'Stack', value: 'AgentKit + Morpho + ERC-4337 Paymaster' },
                    ].map((item, i) => (
                      <div key={i} className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                        <p className="text-xs text-orange-600 dark:text-orange-400 font-bold mb-0.5">{item.label}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Common Tech Stack Across All 5 Products</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { layer: 'AI Execution', tools: ['Coinbase AgentKit', 'LangChain / Vercel AI', 'Claude / GPT-4o'] },
                  { layer: 'Wallet Infra', tools: ['Coinbase Agentic Wallets', 'CDP SDK', 'ERC-4337 (Paymaster)'] },
                  { layer: 'PayFi Rails', tools: ['Huma Finance', 'Ondo Finance', 'Aave / Morpho'] },
                  { layer: 'Settlement', tools: ['Solana (speed)', 'Base (low cost)', 'Circle CCTP (cross-chain)'] },
                ].map((col, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-teal-600 dark:text-teal-400 mb-2">{col.layer}</p>
                    <ul className="space-y-1">
                      {col.tools.map((t, j) => (
                        <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                          <span className="text-teal-400 flex-shrink-0">·</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">Every Dollar in Motion Is an Opportunity</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>Traditional finance puts trillions of dollars "to sleep" every day: SWIFT settlement queues, invoice payment delays, dormant loyalty points — every moment of Idle Time is a PayFi opportunity.</p>
                <p>PayFi is not just "faster payments." It's a <strong className="text-white">new financial paradigm that realizes the time value of money within the payment flow itself</strong>. Money earns yield while in transit, middlemen disappear, and entirely new financial products emerge.</p>
                <p>Visa's Solana USDC pilot, Stripe's $1.1B Bridge acquisition, Huma Finance processing $4B+ — this is already happening. The next decade will see the payment infrastructure of the world substantially rebuilt on blockchains and stablecoins.</p>
                <p className="text-gray-400 text-xs">* APY, TVL, and volume figures cited are estimates based on publicly available 2025 data. Subject to change. Not investment advice.</p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
