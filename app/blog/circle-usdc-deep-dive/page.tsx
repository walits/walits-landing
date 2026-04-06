'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CircleUsdcDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
          <Image src="/blog/circle.jpg" alt="Circle USDC Infrastructure" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-700/80 text-white px-3 py-1 rounded-full">
              {language === 'ko' ? 'DeFi 시리즈 13' : 'DeFi Series 13'}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 13 — Circle & USDC: DeFi·PayFi·기업 결제를 잇는 달러 인프라</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">USDC 발행 구조 · CCTP · Native vs Bridged · Programmable Wallets · USDT 비교</p>
            <p className="text-gray-400 text-xs font-mono mb-10">2026년 4월 6일 · 20분</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'USDC 유통량', value: '$45B+', sub: '2025년 기준' },
                { label: '지원 체인', value: '15+', sub: '멀티체인 네이티브' },
                { label: 'CCTP 지원 체인', value: '8+', sub: '소각+민팅 방식' },
                { label: 'Circle 설립', value: '2013', sub: 'Jeremy Allaire' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Circle과 USDC란?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              USDC는 2018년 Coinbase와 Circle이 공동 설립한 Centre Consortium에서 만든 달러 연동 스테이블코인이다. 1 USDC = $1이라는 단순한 공식 뒤에는 정교한 준비금 관리와 규제 대응 구조가 있다. 현재는 Circle이 단독으로 운영하며, 전 세계 15개 이상의 블록체인에서 네이티브 USDC가 발행된다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Tether(USDT)와 가장 크게 다른 점은 세 가지다. 첫째, <strong>완전 투명 감사</strong> — Circle은 매월 독립 회계법인의 준비금 감사 보고서를 공개한다. 둘째, <strong>미국 규제 준수</strong> — FinCEN 등록, 주별 머니 트랜스미터 라이선스 보유. 셋째, <strong>기업 친화성</strong> — Visa, Mastercard, Stripe, Shopify와 공식 파트너십을 통해 전통 금융과 연결된다.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">walits가 USDC를 핵심 자산으로 선택한 이유</p>
              <div className="space-y-2">
                {[
                  '투명한 준비금 구조 — 고객 자금의 안전성 설명이 용이',
                  '미국 규제 준수 — B2B 기업 거래에 법적 리스크 최소화',
                  'CCTP로 체인 간 이동 시 네이티브 USDC 유지 가능',
                  'Aave·Morpho·Ondo 등 최상위 DeFi 프로토콜과 깊은 통합',
                  'Visa/Mastercard 파트너십으로 전통 결제 채널 연결 가능',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{item}
                  </div>
                ))}
              </div>
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · USDC 발행·소각 구조 — 온체인에서 무슨 일이?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDC는 어떻게 만들어지고 사라지는가? 표면상 단순하지만, 그 뒤에는 Circle의 준비금 관리와 스마트컨트랙트 민팅이 맞물려 있다. 과정을 단계별로 살펴보자.
            </p>

            <div className="space-y-0 my-6">
              {[
                {
                  step: '1',
                  title: '달러 입금 → USDC 민팅',
                  desc: '사용자가 Circle 계좌에 $100을 입금한다. Circle은 준비금 계좌에 $100을 보관하고, 스마트컨트랙트의 mint() 함수를 호출해 100 USDC를 발행한다. 발행된 USDC는 ERC-20 토큰으로 사용자 지갑에 전송된다.',
                  color: 'bg-blue-600',
                  tag: 'mint()',
                  tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                },
                {
                  step: '2',
                  title: 'USDC 소각 → 달러 출금',
                  desc: '사용자가 100 USDC를 Circle에 반환하면, 스마트컨트랙트의 burn() 함수가 호출돼 토큰이 소각된다. Circle은 준비금 계좌에서 $100을 사용자 은행 계좌로 이체한다.',
                  color: 'bg-indigo-600',
                  tag: 'burn()',
                  tagColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
                },
                {
                  step: '3',
                  title: '준비금 운용 — Circle의 수익원',
                  desc: '보관된 달러는 미국 단기 국채와 현금성 자산으로 운용된다. 이 운용 수익이 Circle의 주요 수익원이다. aToken처럼 이자가 USDC 보유자에게 자동 지급되지 않는다 — USDC 자체는 무이자 토큰이다. 수익을 원하면 Aave, Morpho, Ondo 같은 DeFi 프로토콜을 활용해야 한다.',
                  color: 'bg-slate-600',
                  tag: '준비금',
                  tagColor: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
                },
                {
                  step: '4',
                  title: '월별 감사 보고서 공개',
                  desc: 'Circle은 매월 독립 회계법인(Deloitte 등)의 준비금 감사 보고서를 공개한다. 유통 USDC 총량과 준비금 총액이 일치하는지 공개적으로 검증된다. Tether의 불투명한 감사와 달리 완전 공개 방식이다.',
                  color: 'bg-emerald-600',
                  tag: '투명 감사',
                  tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                },
              ].map((s, i, arr) => (
                <div key={i} className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center">
                    <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                    {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                  </div>
                  <div className="pb-5 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{s.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.tagColor}`}>{s.tag}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">중요: USDC 자체는 이자가 없다</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Aave의 aUSDC처럼 시간이 지나면 잔고가 늘어나는 구조가 아니다. 1 USDC는 항상 1 USDC다. <strong>준비금 운용 수익은 Circle이 가져간다.</strong> 수익을 원하는 사용자는 별도로 DeFi에 예치해야 한다 — 이것이 walits가 Aave·Morpho·Ondo를 통합하는 이유다.
              </p>
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · CCTP — Cross-Chain Transfer Protocol</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              멀티체인 세계에서 USDC를 이동시키는 방법은 두 가지다. 기존 브릿지를 쓰거나, CCTP를 쓰거나. 이 두 방식의 차이는 단순한 기술 세부사항이 아니라, 받는 토큰이 진짜 USDC인지 아닌지의 문제다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-3">기존 브릿지 방식 (문제)</p>
                <div className="space-y-2">
                  {[
                    '체인 A의 USDC를 브릿지 컨트랙트에 잠금(Lock)',
                    '체인 B에서 래핑 토큰 발행 (Wrapped USDC)',
                    '받은 토큰은 bridged USDC — 네이티브 USDC가 아님',
                    '브릿지 해킹 시 래핑 토큰 가치 붕괴 위험',
                    'DeFi 프로토콜에서 네이티브 USDC보다 낮은 유동성',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-3">CCTP 방식 (해결책)</p>
                <div className="space-y-2">
                  {[
                    '체인 A에서 USDC 소각 (burn)',
                    'Circle 공식 메시지 서비스가 소각 증명 전달',
                    '체인 B에서 네이티브 USDC 민팅 (mint)',
                    '래핑 없음 — 진짜 USDC가 도착',
                    '브릿지 해킹 리스크 없음 — Circle이 직접 보증',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">CCTP 작동 흐름 — 단계별</p>
              <div className="space-y-3">
                {[
                  { num: '①', title: 'Ethereum에서 USDC burn()', desc: '사용자가 Ethereum의 CCTP 컨트랙트에 100 USDC를 보낸다. 컨트랙트가 burn()을 호출해 토큰을 소각한다. 소각 이벤트와 목적지 체인 정보가 블록체인에 기록된다.' },
                  { num: '②', title: 'Circle 메시지 서비스 증명', desc: 'Circle의 공식 Attestation 서비스가 소각 이벤트를 감지한다. 소각이 유효함을 증명하는 서명된 메시지(Attestation)를 생성한다.' },
                  { num: '③', title: 'Base에서 네이티브 USDC mint()', desc: '사용자(또는 릴레이어)가 Base의 CCTP 컨트랙트에 Attestation을 제출한다. 컨트랙트가 검증 후 mint()를 호출해 100 USDC를 사용자 지갑에 발행한다. 이것은 네이티브 USDC다.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 bg-white dark:bg-gray-900 rounded-lg p-4">
                    <div className="text-2xl font-black text-gray-300 dark:text-gray-600 w-8 shrink-0 mt-0.5">{item.num}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">CCTP 현재 지원 체인</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Ethereum', 'Base', 'Arbitrum', 'Optimism', 'Solana', 'Avalanche', 'Polygon', 'Noble (Cosmos)'].map((chain) => (
                  <span key={chain} className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full font-medium">{chain}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">walits 활용: 한국→미국 B2B 정산 시 체인 간 이동에 CCTP 사용 → 네이티브 USDC 유지 + 브릿지 리스크 제거</p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Native USDC vs Bridged USDC — 무엇이 다른가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              겉보기엔 둘 다 USDC처럼 보이지만, 실제로는 근본적으로 다른 토큰이다. walits 같은 B2B 결제 인프라에서 이 차이는 유동성, 보안, 비용 전반에 걸쳐 영향을 미친다.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tl-lg">항목</th>
                    <th className="text-center p-3 font-semibold text-blue-600 dark:text-blue-400">Native USDC</th>
                    <th className="text-center p-3 font-semibold text-gray-500 rounded-tr-lg">Bridged USDC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['발행 주체', 'Circle 직접 발행', '브릿지 프로토콜 발행'],
                    ['담보', 'Circle 준비금 1:1', '원본 체인 USDC 잠금'],
                    ['브릿지 해킹 리스크', '없음', '있음 (브릿지 취약점)'],
                    ['DeFi 유동성', '높음 (주요 풀에서 선호)', '낮음 (별도 풀 필요)'],
                    ['Aave/Morpho 지원', '완전 지원', '제한적 또는 별도 마켓'],
                    ['Circle 보증', '있음', '없음'],
                    ['이동 방법', 'CCTP (소각+민팅)', '브릿지 컨트랙트 (잠금+발행)'],
                    ['walits 사용', '사용', '미사용'],
                  ].map(([item, native, bridged], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="p-3 font-medium text-gray-700 dark:text-gray-300">{item}</td>
                      <td className="p-3 text-center text-blue-600 dark:text-blue-400 font-medium">{native}</td>
                      <td className="p-3 text-center text-gray-500">{bridged}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2">walits가 네이티브 USDC만 사용하는 이유</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                B2B 결제에서 유동성 분산은 곧 비용이다. Bridged USDC는 별도의 유동성 풀이 필요하고, Aave·Morpho 같은 주요 DeFi 프로토콜에서 불리한 조건으로 취급받는다. 또한 브릿지 해킹 시 보유 자산이 직접 피해를 입는다. walits는 CCTP를 활용해 체인을 이동할 때도 항상 네이티브 USDC를 유지한다.
              </p>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Programmable Wallets — Circle의 기업용 지갑 API</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Circle은 스테이블코인 발행만 하는 회사가 아니다. 기업이 블록체인 지갑을 쉽게 생성하고 관리할 수 있는 API 서비스도 제공한다. 이것이 Programmable Wallets다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              전통적으로 블록체인 지갑 관리는 복잡하다. 사용자가 개인키를 직접 관리하거나, 기업이 별도의 키 관리 인프라를 구축해야 했다. Circle의 API는 이 복잡성을 추상화해준다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'EOA vs Smart Contract Wallet 선택',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: '지갑 유형',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  points: [
                    'EOA(Externally Owned Account): 개인키 방식, 가장 간단하지만 키 분실 시 복구 불가',
                    'Smart Contract Wallet: 소셜 로그인, 다중 서명, 키 복구 가능',
                    '기업 요건에 따라 두 방식 중 선택 또는 혼합 사용',
                    'Circle API가 내부 키 관리 — 기업은 지갑 생성/삭제만 API 호출',
                  ],
                },
                {
                  title: '가스비 대납 (Gas Sponsorship)',
                  badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
                  badgeText: 'UX 개선',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  dot: 'bg-indigo-500',
                  points: [
                    '기업이 사용자 대신 가스비를 대납 — 사용자는 ETH 없이도 트랜잭션 가능',
                    'Account Abstraction (ERC-4337) 기반 구현',
                    'B2B 결제 서비스에서 고객이 블록체인 복잡성을 느끼지 않게 설계 가능',
                    'Circle이 가스비 최적화 처리 — 내부 배치 트랜잭션 지원',
                  ],
                },
                {
                  title: '소셜 로그인 & 키 복구',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  badgeText: '접근성',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    'Google, Apple, Facebook 소셜 로그인으로 지갑 생성',
                    '개인키를 사용자가 직접 관리할 필요 없음',
                    '2FA, 이메일 OTP, 생체인증으로 키 복구 지원',
                    '핀테크 앱 수준의 UX로 블록체인 지갑 제공 가능',
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${phase.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${phase.dot}`} />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{phase.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${phase.badge}`}>{phase.badgeText}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">walits × Programmable Wallets</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                walits는 현재 Turnkey MPC 기반 지갑을 사용한다. Circle Programmable Wallets는 병행 사용 또는 대안으로 검토 중이다. 특히 소셜 로그인 기반 기업 고객 온보딩과 가스비 대납 기능이 B2B 결제 UX 개선에 활용 가능하다.
              </p>
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · USDC Yield 프로그램 — 이자 받는 방법들</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDC 자체는 이자가 없지만, USDC를 예치해 수익을 낼 수 있는 공식·비공식 프로그램이 여럿 있다. 기관 전용부터 소매 사용자용까지 스펙트럼이 다양하다.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  name: 'Circle Yield',
                  apy: '~5%',
                  apyColor: 'text-blue-600 dark:text-blue-400',
                  type: '기관 전용',
                  typeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                  desc: 'Circle이 직접 운영하는 기관 대상 USDC 예치 프로그램. KYC/AML 필수, 최소 예치금 조건 있음. Ondo USDY와 유사한 구조로 준비금 운용 수익을 배분.',
                  risk: '낮음',
                },
                {
                  name: 'Coinbase USDC Rewards',
                  apy: '4.1%',
                  apyColor: 'text-indigo-600 dark:text-indigo-400',
                  type: '소매 친화',
                  typeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
                  desc: 'Coinbase 거래소에 USDC를 보유하면 자동으로 4.1% 연이율이 지급된다. 별도 예치 불필요. 미국 외 일부 지역 제한. 거래소 리스크 존재.',
                  risk: '중간',
                },
                {
                  name: 'Aave / Morpho',
                  apy: '4.5~6%+',
                  apyColor: 'text-violet-600 dark:text-violet-400',
                  type: 'DeFi 온체인',
                  typeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
                  desc: 'Aave에 USDC 예치 시 aUSDC 발행 + 자동 이자. Morpho는 P2P 매칭으로 더 높은 APY 가능. 즉시 출금 지원. 스마트컨트랙트 리스크 존재하지만 다중 감사 완료.',
                  risk: '중간',
                },
                {
                  name: 'Ondo USDY / OUSG',
                  apy: '~5.2%',
                  apyColor: 'text-emerald-600 dark:text-emerald-400',
                  type: '토큰화 국채',
                  typeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                  desc: 'USDC를 예치하면 미국 단기 국채 수익률 연동 토큰(USDY/OUSG) 발행. Circle 준비금과 유사한 구조지만 수익이 토큰 보유자에게 배분됨. KYC 필요.',
                  risk: '낮음',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.typeColor}`}>{item.type}</span>
                    </div>
                    <span className={`text-xl font-black ${item.apyColor}`}>{item.apy}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-xs text-gray-400">스마트컨트랙트 리스크: <span className="font-medium text-gray-600 dark:text-gray-300">{item.risk}</span></p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">walits의 수익 전략</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                walits는 Coinbase 4.1%나 Circle Yield에 의존하지 않는다. 대신 <strong>Aave·Morpho·Ondo를 직접 통합</strong>해 더 높은 수익률을 고객에게 제공하고, 동시에 즉시 출금 유동성을 유지한다. 체인 이동 시에는 CCTP를 활용해 네이티브 USDC를 유지한다.
              </p>
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · USDC 생태계 지도</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDC는 단일 프로토콜이 아니라 광대한 생태계의 기반 통화다. 결제, DeFi, PayFi, 기업 서비스, 국가 송금까지 거의 모든 영역에서 USDC가 흐른다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  category: '결제 인프라',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  headerColor: 'text-blue-700 dark:text-blue-400',
                  items: [
                    'Visa — USDC 정산 파일럿 (Solana 기반)',
                    'Mastercard — 멀티토큰 네트워크 USDC 지원',
                    'Stripe — USDC 결제 수락 기능 통합',
                    'Shopify — 크립토 결제 USDC 지원',
                  ],
                },
                {
                  category: 'DeFi 프로토콜',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  headerColor: 'text-indigo-700 dark:text-indigo-400',
                  items: [
                    'Aave — USDC 대출·예치 최대 유동성 풀',
                    'Morpho — P2P 매칭 최적화 수익',
                    'Curve — USDC/USDT/DAI 스테이블 스왑',
                    'Uniswap — USDC 거래쌍 최대 거래량',
                  ],
                },
                {
                  category: 'PayFi / 결제금융',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  headerColor: 'text-violet-700 dark:text-violet-400',
                  items: [
                    'Huma Finance — USDC 기반 무역금융',
                    'walits — 한국 B2B 기업 USDC 결제·수익',
                    'Yellow Card — 아프리카 USDC 송금',
                    'Bitso — 멕시코 페소 ↔ USDC 환전',
                  ],
                },
                {
                  category: '국가·지역 송금',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  headerColor: 'text-emerald-700 dark:text-emerald-400',
                  items: [
                    '브라질 — Pix 연동 USDC 온/오프램프',
                    '멕시코 — 미국 이민자 송금 USDC 활용',
                    '필리핀 — OFW 해외 송금 수수료 절감',
                    '나이지리아 — 나이라 약세 헤지 수단',
                  ],
                },
              ].map((section, i) => (
                <div key={i} className={`border rounded-xl p-5 ${section.color}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${section.headerColor}`}>{section.category}</p>
                  <ul className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Tether(USDT) vs USDC — 완전 비교</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDT는 시가총액 1위 스테이블코인이고, USDC는 2위다. 유통량 차이에도 불구하고 기업·기관 영역에서는 USDC가 선호된다. 왜 그런지 항목별로 비교해보자.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tl-lg">항목</th>
                    <th className="text-center p-3 font-semibold text-blue-600 dark:text-blue-400">USDC (Circle)</th>
                    <th className="text-center p-3 font-semibold text-gray-500 rounded-tr-lg">USDT (Tether)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['준비금 투명성', '월별 독립 감사 공개', '제한적 공개, 논란 있음'],
                    ['감사 기관', 'Deloitte 등 독립 회계법인', '과거 감사 부재 논란'],
                    ['미국 규제 준수', 'FinCEN, 주별 라이선스', '오프쇼어, 규제 외'],
                    ['준비금 구성', '미국 국채 + 현금', '국채 + 기업어음 등 혼합'],
                    ['유통량', '$45B+', '$110B+'],
                    ['지원 체인', '15+, CCTP', '20+, 브릿지 의존'],
                    ['기업 파트너십', 'Visa, Mastercard, Stripe', '제한적'],
                    ['DeFi 활용도', '높음 (주요 풀 우선 통합)', '높음 (거래량 기준 1위)'],
                    ['규제 리스크', '낮음', '높음 (SEC 조사 이력)'],
                    ['walits 선택', '사용', '미사용'],
                  ].map(([item, usdc, usdt], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="p-3 font-medium text-gray-700 dark:text-gray-300">{item}</td>
                      <td className="p-3 text-center text-blue-600 dark:text-blue-400">{usdc}</td>
                      <td className="p-3 text-center text-gray-500">{usdt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">총평: 어느 쪽을 선택해야 하나?</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                순수 DeFi 트레이딩과 유동성 측면에서는 USDT도 충분히 활용 가능하다. 하지만 <strong>기업 B2B 결제, 규제 대응, 투명한 준비금이 필요한 서비스</strong>라면 USDC가 명확히 우위다. walits는 고객사의 법무·컴플라이언스 리스크를 최소화하기 위해 USDC를 선택했다.
              </p>
            </div>

            {/* S9 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · walits × Circle 인프라</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              walits는 Circle의 인프라를 어떻게 활용하는가? 현재 구현 중인 부분과 향후 통합 계획을 구체적으로 살펴보자.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  num: '01',
                  title: 'CCTP — 체인 간 이동 수수료 최소화',
                  color: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800',
                  numColor: 'text-blue-500',
                  points: [
                    '한국 기업이 Ethereum에서 USDC를 보내면, walits가 CCTP로 Base 또는 Arbitrum으로 이동',
                    '브릿지 수수료 없음 — CCTP 가스비만 소요 (수 달러 이내)',
                    '받는 쪽은 네이티브 USDC — Aave/Morpho에서 즉시 운용 가능',
                    '미국 파트너사 정산 시 Solana CCTP로 초저비용 전송',
                  ],
                },
                {
                  num: '02',
                  title: '네이티브 USDC 유지 — 유동성 분산 방지',
                  color: 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800',
                  numColor: 'text-indigo-500',
                  points: [
                    'walits 보관 USDC는 100% 네이티브 USDC',
                    'Morpho 볼트, Aave USDC 풀 — 최대 유동성 접근',
                    'Ondo USDY 예치 시에도 네이티브 USDC 담보',
                    '고객 출금 요청 시 bridged 토큰 변환 불필요 → 즉시 처리',
                  ],
                },
                {
                  num: '03',
                  title: 'Programmable Wallets — 향후 통합 가능성',
                  color: 'bg-violet-50 dark:bg-violet-900/10 border-violet-200 dark:border-violet-800',
                  numColor: 'text-violet-500',
                  points: [
                    '현재: Turnkey MPC 기반 지갑 사용 중',
                    '검토 중: Circle API로 기업 고객 지갑 자동 생성',
                    '가스비 대납으로 기업 고객이 ETH 없이도 USDC 이동 가능',
                    '소셜 로그인 기반 온보딩으로 Web2 기업도 쉽게 접근 가능',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-3xl font-black leading-none ${item.numColor}`}>{item.num}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S10 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · 결론 — USDC는 달러 인프라다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              USDC를 단순히 "블록체인 위의 달러"로 이해하면 절반만 본 것이다. Circle이 10년 이상 구축해온 것은 <strong>달러를 프로그래밍 가능하게 만드는 인프라 레이어</strong>다. 발행·소각 구조, CCTP, Programmable Wallets, 기업 파트너십 — 이 모든 것이 하나의 스택을 이룬다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              DeFi에서는 Aave·Morpho·Curve의 핵심 자산이고, PayFi에서는 Huma Finance·walits의 결제 통화이며, 전통 금융에서는 Visa·Mastercard의 정산 수단이다. 브라질·멕시코·필리핀·나이지리아의 평범한 사람들이 달러 가치를 보존하는 수단이기도 하다.
            </p>

            <div className="bg-slate-900 rounded-2xl p-8 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">walits의 관점</p>
              <p className="text-2xl font-bold text-white leading-snug mb-4">
                "USDC는 단순한 스테이블코인이 아니다 — DeFi, PayFi, 기업 결제를 연결하는 달러 인프라다"
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                walits는 이 인프라 위에서 한국 기업의 달러 결제·수익·정산을 통합한다. CCTP로 체인 간 마찰을 없애고, 네이티브 USDC로 유동성을 극대화하며, Aave·Morpho·Ondo로 잠자는 자금을 일하게 만든다. Circle이 인프라를 깔아주면, walits가 그 위에서 한국 기업에게 가장 쉬운 달러 서비스를 제공한다.
              </p>
              <p className="text-gray-500 text-xs">
                * 수익률은 시장 상황에 따라 변동됩니다. 투자 전 공식 문서와 감사 보고서를 반드시 확인하세요.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 13 — Circle & USDC: The Dollar Infrastructure Connecting DeFi, PayFi & Enterprise Payments</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">USDC Mint/Burn · CCTP · Native vs Bridged · Programmable Wallets · vs USDT</p>
            <p className="text-gray-400 text-xs font-mono mb-10">April 6, 2026 · 20 min read</p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'USDC Supply', value: '$45B+', sub: 'as of 2025' },
                { label: 'Supported Chains', value: '15+', sub: 'multichain native' },
                { label: 'CCTP Chains', value: '8+', sub: 'burn+mint model' },
                { label: 'Circle Founded', value: '2013', sub: 'Jeremy Allaire' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · What Are Circle and USDC?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              USDC is a dollar-pegged stablecoin created in 2018 by the Centre Consortium, co-founded by Coinbase and Circle. Behind the simple formula of 1 USDC = $1 lies a sophisticated reserve management and regulatory compliance structure. Circle now operates it independently, with native USDC issued on 15+ blockchains worldwide.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Three things set it apart from Tether (USDT). First, <strong>full transparency</strong> — Circle publishes monthly reserve attestation reports from independent accounting firms. Second, <strong>US regulatory compliance</strong> — FinCEN registration, state-by-state money transmitter licenses. Third, <strong>enterprise-friendly partnerships</strong> — official integrations with Visa, Mastercard, Stripe, and Shopify bridging traditional finance.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Why walits chose USDC as its core asset</p>
              <div className="space-y-2">
                {[
                  'Transparent reserve structure — easier to explain fund safety to enterprise clients',
                  'US regulatory compliance — minimizes legal risk in B2B transactions',
                  'CCTP preserves native USDC status across chain transfers',
                  'Deep integration with top DeFi protocols: Aave, Morpho, Ondo',
                  'Visa/Mastercard partnerships enable traditional payment channel connections',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{item}
                  </div>
                ))}
              </div>
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · How USDC Is Minted and Burned — What Happens On-Chain?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              How is USDC created and destroyed? The process seems simple on the surface, but behind it, Circle's reserve management and smart contract minting work in concert. Let's walk through it step by step.
            </p>

            <div className="space-y-0 my-6">
              {[
                {
                  step: '1',
                  title: 'Dollar Deposit → USDC Minted',
                  desc: 'A user deposits $100 into a Circle account. Circle holds $100 in its reserve account and calls the mint() function on the smart contract, issuing 100 USDC. The minted USDC, as an ERC-20 token, is sent to the user\'s wallet.',
                  color: 'bg-blue-600',
                  tag: 'mint()',
                  tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                },
                {
                  step: '2',
                  title: 'USDC Burned → Dollar Withdrawn',
                  desc: 'When a user returns 100 USDC to Circle, the smart contract\'s burn() function is called, destroying the tokens. Circle then transfers $100 from its reserve account to the user\'s bank account.',
                  color: 'bg-indigo-600',
                  tag: 'burn()',
                  tagColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
                },
                {
                  step: '3',
                  title: 'Reserve Management — Circle\'s Revenue Source',
                  desc: 'The held dollars are deployed into US short-term Treasuries and cash-equivalent assets. This yield is Circle\'s primary revenue source. Unlike aTokens, interest is not automatically distributed to USDC holders — USDC itself is a zero-yield token. To earn yield, users must use DeFi protocols like Aave, Morpho, or Ondo.',
                  color: 'bg-slate-600',
                  tag: 'Reserve',
                  tagColor: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300',
                },
                {
                  step: '4',
                  title: 'Monthly Attestation Reports Published',
                  desc: 'Circle publishes monthly reserve attestation reports from independent accounting firms (Deloitte and others). The total supply of circulating USDC and total reserves are publicly verified to match. This is a fully public process, unlike Tether\'s historically opaque audits.',
                  color: 'bg-emerald-600',
                  tag: 'Transparency',
                  tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                },
              ].map((s, i, arr) => (
                <div key={i} className="flex gap-4 items-stretch">
                  <div className="flex flex-col items-center">
                    <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                    {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                  </div>
                  <div className="pb-5 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{s.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.tagColor}`}>{s.tag}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">Important: USDC itself earns no interest</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Unlike Aave's aUSDC, where your balance grows over time, 1 USDC is always 1 USDC. <strong>Reserve yield goes to Circle.</strong> Users who want returns must separately deposit into DeFi — this is exactly why walits integrates Aave, Morpho, and Ondo.
              </p>
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · CCTP — Cross-Chain Transfer Protocol</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In a multichain world, there are two ways to move USDC: use a traditional bridge, or use CCTP. The difference isn't just a technical detail — it's about whether the tokens you receive are actually USDC or not.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-3">Traditional Bridge (The Problem)</p>
                <div className="space-y-2">
                  {[
                    'Lock USDC in bridge contract on Chain A',
                    'Issue wrapped token on Chain B (Wrapped USDC)',
                    'What you receive is bridged USDC — not native USDC',
                    'Bridge hack risk: wrapped tokens can become worthless',
                    'Lower liquidity than native USDC in DeFi protocols',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-3">CCTP (The Solution)</p>
                <div className="space-y-2">
                  {[
                    'Burn USDC on Chain A',
                    'Circle\'s official message service relays the burn proof',
                    'Mint native USDC on Chain B',
                    'No wrapping — real USDC arrives',
                    'No bridge hack risk — Circle directly guarantees',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">CCTP Flow — Step by Step</p>
              <div className="space-y-3">
                {[
                  { num: '①', title: 'USDC burn() on Ethereum', desc: 'The user sends 100 USDC to the CCTP contract on Ethereum. The contract calls burn() to destroy the tokens. The burn event and destination chain info are recorded on-chain.' },
                  { num: '②', title: 'Circle Attestation Service Proves It', desc: 'Circle\'s official Attestation service detects the burn event. It generates a signed message (Attestation) proving the burn is valid.' },
                  { num: '③', title: 'Native USDC mint() on Base', desc: 'The user (or a relayer) submits the Attestation to the CCTP contract on Base. After verification, the contract calls mint() and issues 100 USDC to the user\'s wallet. This is native USDC.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 bg-white dark:bg-gray-900 rounded-lg p-4">
                    <div className="text-2xl font-black text-gray-300 dark:text-gray-600 w-8 shrink-0 mt-0.5">{item.num}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">Current CCTP Supported Chains</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Ethereum', 'Base', 'Arbitrum', 'Optimism', 'Solana', 'Avalanche', 'Polygon', 'Noble (Cosmos)'].map((chain) => (
                  <span key={chain} className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full font-medium">{chain}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">walits use case: CCTP for cross-chain B2B settlements between Korea and US partners — maintains native USDC while eliminating bridge risk.</p>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Native USDC vs Bridged USDC — What's the Difference?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              They may look identical on the surface, but they are fundamentally different tokens. For B2B payment infrastructure like walits, this difference has real consequences for liquidity, security, and cost.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tl-lg">Attribute</th>
                    <th className="text-center p-3 font-semibold text-blue-600 dark:text-blue-400">Native USDC</th>
                    <th className="text-center p-3 font-semibold text-gray-500 rounded-tr-lg">Bridged USDC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Issuer', 'Circle directly', 'Bridge protocol'],
                    ['Collateral', 'Circle reserves 1:1', 'Original chain USDC locked'],
                    ['Bridge Hack Risk', 'None', 'Yes (bridge vulnerability)'],
                    ['DeFi Liquidity', 'High (preferred in major pools)', 'Low (separate pools needed)'],
                    ['Aave/Morpho Support', 'Full support', 'Limited or separate markets'],
                    ['Circle Guarantee', 'Yes', 'No'],
                    ['Transfer Method', 'CCTP (burn+mint)', 'Bridge contract (lock+issue)'],
                    ['walits Usage', 'Used', 'Not used'],
                  ].map(([item, native, bridged], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="p-3 font-medium text-gray-700 dark:text-gray-300">{item}</td>
                      <td className="p-3 text-center text-blue-600 dark:text-blue-400 font-medium">{native}</td>
                      <td className="p-3 text-center text-gray-500">{bridged}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2">Why walits only uses native USDC</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                In B2B payments, liquidity fragmentation is a direct cost. Bridged USDC requires separate liquidity pools and receives less favorable treatment in major DeFi protocols like Aave and Morpho. A bridge hack would directly impair held assets. walits uses CCTP to maintain native USDC status across all chain transfers.
              </p>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Programmable Wallets — Circle's Enterprise Wallet API</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Circle isn't just a stablecoin issuer. It also provides an API service that lets enterprises easily create and manage blockchain wallets. That's Programmable Wallets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Traditionally, managing blockchain wallets is complex. Users had to manage private keys themselves, or enterprises had to build separate key management infrastructure. Circle's API abstracts away that complexity.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'EOA vs Smart Contract Wallet Choice',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: 'Wallet Type',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  points: [
                    'EOA (Externally Owned Account): private key approach, simplest but no recovery if key is lost',
                    'Smart Contract Wallet: supports social login, multi-sig, and key recovery',
                    'Choose either or mix both based on enterprise requirements',
                    'Circle API handles internal key management — enterprises just call create/delete wallet APIs',
                  ],
                },
                {
                  title: 'Gas Sponsorship',
                  badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
                  badgeText: 'UX Improvement',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  dot: 'bg-indigo-500',
                  points: [
                    'Enterprise pays gas fees on behalf of users — users can transact without holding ETH',
                    'Implemented via Account Abstraction (ERC-4337)',
                    'B2B payment services can shield customers from blockchain complexity entirely',
                    'Circle handles gas optimization — supports internal batch transactions',
                  ],
                },
                {
                  title: 'Social Login & Key Recovery',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  badgeText: 'Accessibility',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    'Create wallets via Google, Apple, or Facebook social login',
                    'Users don\'t need to manage private keys directly',
                    'Key recovery via 2FA, email OTP, or biometrics',
                    'Deliver blockchain wallets with the UX of a fintech app',
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${phase.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${phase.dot}`} />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{phase.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${phase.badge}`}>{phase.badgeText}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">walits × Programmable Wallets</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                walits currently uses Turnkey MPC-based wallets. Circle Programmable Wallets are being evaluated as a parallel option or alternative. Social login-based enterprise client onboarding and gas sponsorship are particularly relevant for improving B2B payment UX.
              </p>
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · USDC Yield Programs — Ways to Earn on USDC</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDC itself yields nothing, but there are official and unofficial programs where you can earn returns by depositing USDC. The spectrum ranges from institutional-only to retail-friendly.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  name: 'Circle Yield',
                  apy: '~5%',
                  apyColor: 'text-blue-600 dark:text-blue-400',
                  type: 'Institutional',
                  typeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                  desc: 'A USDC deposit program operated directly by Circle for institutions. KYC/AML required, minimum deposit thresholds apply. Similar structure to Ondo USDY — distributes reserve management yield to depositors.',
                  risk: 'Low',
                },
                {
                  name: 'Coinbase USDC Rewards',
                  apy: '4.1%',
                  apyColor: 'text-indigo-600 dark:text-indigo-400',
                  type: 'Retail-Friendly',
                  typeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
                  desc: 'Holding USDC on the Coinbase exchange automatically earns 4.1% APR. No separate deposit required. Restricted in some regions outside the US. Exchange custody risk applies.',
                  risk: 'Medium',
                },
                {
                  name: 'Aave / Morpho',
                  apy: '4.5~6%+',
                  apyColor: 'text-violet-600 dark:text-violet-400',
                  type: 'DeFi On-Chain',
                  typeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
                  desc: 'Depositing USDC into Aave mints aUSDC with automatic interest. Morpho achieves higher APY through P2P matching. Instant withdrawals supported. Smart contract risk exists, but multiple audits completed.',
                  risk: 'Medium',
                },
                {
                  name: 'Ondo USDY / OUSG',
                  apy: '~5.2%',
                  apyColor: 'text-emerald-600 dark:text-emerald-400',
                  type: 'Tokenized Treasury',
                  typeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                  desc: 'Depositing USDC mints US short-term Treasury yield-linked tokens (USDY/OUSG). Similar structure to Circle reserves but yield is distributed to token holders. KYC required.',
                  risk: 'Low',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.typeColor}`}>{item.type}</span>
                    </div>
                    <span className={`text-xl font-black ${item.apyColor}`}>{item.apy}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                  <p className="text-xs text-gray-400">Smart contract risk: <span className="font-medium text-gray-600 dark:text-gray-300">{item.risk}</span></p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">walits' yield strategy</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                walits doesn't rely on Coinbase's 4.1% or Circle Yield. Instead, it <strong>directly integrates Aave, Morpho, and Ondo</strong> to deliver higher yields to clients while maintaining instant withdrawal liquidity. CCTP is used for chain transfers to preserve native USDC throughout.
              </p>
            </div>

            {/* S7 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · The USDC Ecosystem Map</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDC isn't a single protocol — it's the base currency of a vast ecosystem. From payments and DeFi to PayFi, enterprise services, and cross-border remittances, USDC flows through virtually every domain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  category: 'Payment Infrastructure',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  headerColor: 'text-blue-700 dark:text-blue-400',
                  items: [
                    'Visa — USDC settlement pilot (Solana-based)',
                    'Mastercard — Multi-Token Network USDC support',
                    'Stripe — USDC payment acceptance integrated',
                    'Shopify — Crypto checkout USDC support',
                  ],
                },
                {
                  category: 'DeFi Protocols',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  headerColor: 'text-indigo-700 dark:text-indigo-400',
                  items: [
                    'Aave — Largest USDC lending/supply liquidity pool',
                    'Morpho — P2P matching optimized yield',
                    'Curve — USDC/USDT/DAI stable swap',
                    'Uniswap — Highest USDC pair trading volume',
                  ],
                },
                {
                  category: 'PayFi / Payment Finance',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  headerColor: 'text-violet-700 dark:text-violet-400',
                  items: [
                    'Huma Finance — USDC-based trade finance',
                    'walits — Korean B2B enterprise USDC payments & yield',
                    'Yellow Card — Africa USDC remittances',
                    'Bitso — Mexican peso ↔ USDC conversion',
                  ],
                },
                {
                  category: 'Remittances by Region',
                  color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
                  headerColor: 'text-emerald-700 dark:text-emerald-400',
                  items: [
                    'Brazil — Pix-connected USDC on/offramp',
                    'Mexico — US immigrant remittances via USDC',
                    'Philippines — OFW remittance fee reduction',
                    'Nigeria — Hedge against naira depreciation',
                  ],
                },
              ].map((section, i) => (
                <div key={i} className={`border rounded-xl p-5 ${section.color}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${section.headerColor}`}>{section.category}</p>
                  <ul className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-gray-400 flex-shrink-0 mt-0.5">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S8 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Tether (USDT) vs USDC — Full Comparison</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDT is the #1 stablecoin by market cap; USDC is #2. Despite the supply gap, USDC is preferred in enterprise and institutional contexts. Here's a detailed breakdown of why.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 rounded-tl-lg">Attribute</th>
                    <th className="text-center p-3 font-semibold text-blue-600 dark:text-blue-400">USDC (Circle)</th>
                    <th className="text-center p-3 font-semibold text-gray-500 rounded-tr-lg">USDT (Tether)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Reserve Transparency', 'Monthly independent attestation', 'Limited disclosure, historically disputed'],
                    ['Audit Firm', 'Deloitte & other independent firms', 'Audit absence controversy in past'],
                    ['US Regulatory Compliance', 'FinCEN, state licenses', 'Offshore, outside US regulation'],
                    ['Reserve Composition', 'US Treasuries + cash', 'Treasuries + commercial paper mix'],
                    ['Supply', '$45B+', '$110B+'],
                    ['Supported Chains', '15+, CCTP native', '20+, bridge-dependent'],
                    ['Enterprise Partnerships', 'Visa, Mastercard, Stripe', 'Limited'],
                    ['DeFi Utilization', 'High (priority in major pools)', 'High (#1 by trading volume)'],
                    ['Regulatory Risk', 'Low', 'High (SEC investigation history)'],
                    ['walits Choice', 'Used', 'Not used'],
                  ].map(([item, usdc, usdt], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="p-3 font-medium text-gray-700 dark:text-gray-300">{item}</td>
                      <td className="p-3 text-center text-blue-600 dark:text-blue-400">{usdc}</td>
                      <td className="p-3 text-center text-gray-500">{usdt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Verdict: Which should you choose?</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                For pure DeFi trading and liquidity purposes, USDT is perfectly usable. But for <strong>enterprise B2B payments, regulatory compliance, and services requiring transparent reserves</strong>, USDC is the clear winner. walits chose USDC to minimize legal and compliance risk for enterprise clients.
              </p>
            </div>

            {/* S9 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · walits × Circle Infrastructure</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              How does walits actually use Circle's infrastructure? Here's a concrete look at what's currently implemented and what's planned.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  num: '01',
                  title: 'CCTP — Minimizing Cross-Chain Transfer Costs',
                  color: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800',
                  numColor: 'text-blue-500',
                  points: [
                    'When a Korean company sends USDC on Ethereum, walits moves it via CCTP to Base or Arbitrum',
                    'No bridge fee — only CCTP gas cost applies (under a few dollars)',
                    'Recipient gets native USDC — immediately deployable in Aave/Morpho',
                    'US partner settlements via Solana CCTP for ultra-low-cost transfers',
                  ],
                },
                {
                  num: '02',
                  title: 'Native USDC — Preventing Liquidity Fragmentation',
                  color: 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800',
                  numColor: 'text-indigo-500',
                  points: [
                    'All USDC held by walits is 100% native USDC',
                    'Morpho vaults, Aave USDC pools — maximum liquidity access',
                    'Ondo USDY deposits also backed by native USDC collateral',
                    'Client withdrawals processed immediately — no bridged token conversion needed',
                  ],
                },
                {
                  num: '03',
                  title: 'Programmable Wallets — Future Integration Potential',
                  color: 'bg-violet-50 dark:bg-violet-900/10 border-violet-200 dark:border-violet-800',
                  numColor: 'text-violet-500',
                  points: [
                    'Current: Turnkey MPC-based wallets in use',
                    'Evaluating: Circle API for automated enterprise client wallet creation',
                    'Gas sponsorship allows enterprise clients to move USDC without holding ETH',
                    'Social login-based onboarding makes access easy for Web2 enterprises',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-3xl font-black leading-none ${item.numColor}`}>{item.num}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S10 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · Conclusion — USDC Is Dollar Infrastructure</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Thinking of USDC as simply "dollars on a blockchain" is only seeing half the picture. What Circle has built over more than a decade is an <strong>infrastructure layer that makes dollars programmable</strong>. The mint/burn structure, CCTP, Programmable Wallets, enterprise partnerships — all of these form a single cohesive stack.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              In DeFi, USDC is the core asset in Aave, Morpho, and Curve. In PayFi, it's the payment currency for Huma Finance and walits. In traditional finance, it's a settlement medium for Visa and Mastercard. For ordinary people in Brazil, Mexico, the Philippines, and Nigeria, it's a tool to preserve dollar value.
            </p>

            <div className="bg-slate-900 rounded-2xl p-8 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">walits' perspective</p>
              <p className="text-2xl font-bold text-white leading-snug mb-4">
                "USDC is not just a stablecoin — it is the dollar infrastructure connecting DeFi, PayFi, and enterprise payments."
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                walits builds on this infrastructure to unify dollar payments, yield, and settlement for Korean enterprises. CCTP removes cross-chain friction. Native USDC maximizes liquidity. Aave, Morpho, and Ondo put idle capital to work. Circle lays the infrastructure; walits delivers the simplest dollar service for Korean businesses on top of it.
              </p>
              <p className="text-gray-500 text-xs">
                * APY figures vary with market conditions. Always review official documentation and audit reports before investing.
              </p>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
