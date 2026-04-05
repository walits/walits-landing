'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OndoDeepDivePage() {
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
          <Image src="/blog/ondo.jpg" alt="Ondo Finance" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-700/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 8</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 8 — Ondo Finance: 미국 국채를 DeFi로 가져오다</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">RWA 토큰화 · OUSG · USDY · BlackRock BUIDL · 국채 수익을 온체인에서</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Ondo TVL', value: '$1B+', sub: '2025년 기준' },
                { label: 'USDY 수익률', value: '연 ~4.5%', sub: '미국 국채 기반' },
                { label: '지원 체인', value: '10+', sub: 'Ethereum·Solana 등' },
                { label: 'RWA 시장 규모', value: '$20B+', sub: '2025년 온체인 RWA' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · 왜 미국 국채인가 — 배경 이해하기</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2022년 미국 연방준비제도(Fed)가 기준금리를 0%에서 5%대로 올리자 이상한 일이 벌어졌다. DeFi에서 USDC를 예치하면 연 1~2%를 받는데, 미국 단기 국채(T-Bill)는 연 5%를 줬다. <strong>위험한 DeFi보다 안전한 국채가 더 수익률이 높아진 것이다.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              문제는 일반 DeFi 사용자가 미국 국채를 직접 살 방법이 없다는 것이었다. 브로커 계좌, 신원 인증, 미국 거주 요건 등 높은 진입 장벽이 있었다. <strong>Ondo Finance는 이 간극을 메웠다.</strong> 미국 국채를 온체인 토큰으로 만들어 누구나 USDC를 들고 접근할 수 있게 한 것이다.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Ondo Finance 한 줄 정의</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                미국 국채·머니마켓펀드 등 전통 금융 자산을 블록체인 토큰으로 발행해, DeFi 사용자가 USDC로 접근할 수 있게 하는 <strong>RWA(Real World Assets) 토큰화 프로토콜</strong>.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">전통 금융 vs Ondo Finance 비교</p>
              <div className="space-y-3">
                {[
                  { item: '미국 단기 국채 직접 구매', trad: '브로커 계좌 + 신원인증 + 최소 $1,000+', ondo: 'USDC $500 → USDY 즉시 민팅' },
                  { item: '수익 수령', trad: '6개월~1년 만기 후 일시 지급', ondo: '매일 자동 누적 (리베이스 또는 가격 상승)' },
                  { item: '거래 시간', trad: '은행 영업일 기준 T+1~T+2', ondo: '온체인 24시간 즉시' },
                  { item: '접근 가능 지역', trad: '주로 미국·선진국', ondo: '전 세계 (KYC 조건 완화)' },
                  { item: 'DeFi 활용', trad: '불가능', ondo: '담보·유동성 공급 가능' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 text-xs items-start py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{row.item}</span>
                    <span className="text-red-500 dark:text-red-400">{row.trad}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{row.ondo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Ondo의 핵심 제품 — OUSG vs USDY</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Ondo는 두 가지 핵심 토큰을 발행한다. 둘 다 미국 국채 기반이지만 대상 사용자와 접근 방식이 다르다. 어떤 걸 써야 할지는 내가 누구냐에 따라 달라진다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  token: 'OUSG',
                  full: 'Ondo Short-Term US Government Bond Fund',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
                  badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
                  badgeText: '기관·인증 투자자용',
                  underlying: 'BlackRock BUIDL 펀드 (단기 국채)',
                  apy: '연 ~4.7%',
                  min: '$100,000',
                  kyc: '인증 투자자만',
                  rebase: '가격 상승 방식 (non-rebase)',
                  defi: '담보 활용 가능',
                  desc: 'BlackRock이 운용하는 BUIDL 펀드를 기반으로 한다. 기관 투자자 수준의 신뢰성과 수익률. 최소 투자금이 높고 KYC가 엄격하지만 DeFi 담보로 활용 가능하다.',
                },
                {
                  token: 'USDY',
                  full: 'US Dollar Yield Token',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: '일반 투자자용',
                  underlying: '단기 미국 국채 + 은행 예금',
                  apy: '연 ~4.3%',
                  min: '$500',
                  kyc: '대부분 국가 가능 (미국 제외)',
                  rebase: '리베이스 방식 (잔액 자동 증가)',
                  defi: 'Solana DeFi 통합',
                  desc: '일반 사용자를 위한 수익형 달러 토큰. 매일 이자가 지갑 잔액에 자동으로 누적된다. Solana 생태계와 깊이 통합되어 있으며 접근 문턱이 낮다.',
                },
              ].map((p, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${p.color}`}>
                  <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{p.token}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badge}`}>{p.badgeText}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{p.full}</p>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                    {[
                      { label: '기반 자산', value: p.underlying },
                      { label: '수익률', value: p.apy },
                      { label: '최소 투자', value: p.min },
                      { label: 'KYC', value: p.kyc },
                      { label: '수익 방식', value: p.rebase },
                      { label: 'DeFi 활용', value: p.defi },
                    ].map((row, j) => (
                      <div key={j} className="flex justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-right max-w-[60%]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 mb-1">어떤 걸 써야 할까?</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                일반 개인 투자자 → <strong>USDY</strong> (낮은 문턱, 자동 리베이스, Solana DeFi 통합)<br />
                기관·고액 투자자 → <strong>OUSG</strong> (BlackRock 수준 신뢰성, 담보 활용, 더 높은 유동성)
              </p>
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · 내 돈이 실제로 어디 가는가 — 구조 완전 해부</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDC를 내고 USDY를 받는다. 그 USDC는 실제로 어디로 가는지, 어떻게 수익이 생기는지를 단계별로 추적해보자.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">USDY 민팅 → 수익 발생 전체 구조</p>
              <div className="space-y-0">
                {[
                  { step: '1', title: '사용자가 USDC 예치', desc: 'Ondo Finance 스마트컨트랙트에 USDC를 전송. KYC 완료 후 USDY 민팅 트랜잭션 실행.', color: 'bg-blue-600' },
                  { step: '2', title: 'Ondo가 USDC → 실물 자산 매입', desc: 'Ondo의 전통 금융 파트너(Ankura Trust)를 통해 USDC를 달러로 환전 → 미국 단기 국채(T-Bill, 90일 이내 만기) 및 은행 예금 매입.', color: 'bg-indigo-600' },
                  { step: '3', title: '국채 이자 발생', desc: '미국 정부가 국채 이자를 지급. 현재 미국 기준금리 기반으로 연 4~5% 수준. 이 이자가 USDY 수익률의 원천.', color: 'bg-violet-600' },
                  { step: '4', title: '수익 온체인 반영', desc: '매일 이자 수익이 계산되어 USDY 보유자의 잔액에 자동 반영(리베이스). 별도 클레임 불필요 — 지갑을 열면 어제보다 USDY가 조금 더 있다.', color: 'bg-teal-600' },
                  { step: '5', title: '언제든 USDC로 환급', desc: 'USDY를 다시 Ondo에 돌려주면 USDC + 누적 이자를 수령. 다만 온체인 즉시 출금은 유동성 상황에 따라 1~2일이 소요될 수 있다.', color: 'bg-emerald-600' },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-xs">
              <p className="text-blue-400 mb-3">{'// USDY 리베이스 — 매일 잔액이 자동으로 늘어나는 방식'}</p>
              <p className="text-white">{'Day 0:  지갑에 USDY 1,000.000000'}</p>
              <p className="text-white">{'Day 1:  지갑에 USDY 1,000.117808  (+$0.12)'}</p>
              <p className="text-white">{'Day 30: 지갑에 USDY 1,003.558219  (+$3.56)'}</p>
              <p className="text-white">{'Day 365: 지갑에 USDY 1,043.000000  (+$43.00)'}</p>
              <p className="text-gray-400 mt-2">{'// 클레임 버튼 없음. 그냥 갖고 있으면 잔액이 늘어남'}</p>
              <p className="text-gray-400">{'// 연 4.3% 기준, 실제 수익률은 미국 금리에 따라 변동'}</p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · BlackRock BUIDL과의 연결 — 기관 금융의 온체인 입성</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ondo의 OUSG는 2024년부터 <strong>BlackRock BUIDL 펀드</strong>를 기반 자산으로 사용한다. BlackRock은 세계 최대 자산운용사($9조+ AUM)이며, BUIDL은 BlackRock이 이더리움 위에서 운용하는 최초의 토큰화 머니마켓펀드다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { title: 'BlackRock BUIDL이란?', icon: '🏛️', desc: 'BlackRock이 Securitize와 협력해 이더리움에 출시한 토큰화 머니마켓펀드. 100% 미국 단기 국채·레포·달러 현금으로 구성. 최소 $5M, 인증 투자자 전용.', color: 'border-gray-200 dark:border-gray-700' },
                { title: 'OUSG와의 관계', icon: '🔗', desc: 'Ondo의 OUSG 자산 대부분이 BlackRock BUIDL에 예치된다. 즉 OUSG를 사면 BlackRock이 관리하는 국채 펀드에 간접 투자하는 것. 소액으로도 기관급 상품 접근 가능.', color: 'border-indigo-200 dark:border-indigo-800' },
                { title: '왜 중요한가?', icon: '⭐', desc: '세계 최대 자산운용사가 DeFi 인프라 위에서 펀드를 운용한다는 신호. 전통 금융 기관들의 온체인 이동을 상징하는 이정표적 사건이며 Ondo의 신뢰도를 크게 높였다.', color: 'border-blue-200 dark:border-blue-800' },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{card.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · 실전 사용법 — USDY 민팅부터 수익까지</h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">USDY 시작하기 — 단계별 가이드</p>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'KYC 완료', desc: 'app.ondo.finance 접속 → "Get Started" → 이메일 + 여권/신분증 제출. 심사는 보통 1~3 영업일. 한국 거주자 포함 대부분 국가 가능 (미국 거주자 제외).', color: 'bg-blue-500' },
                  { step: '2', title: '지갑 연결 & USDC 준비', desc: 'MetaMask 또는 지원 지갑 연결. USDC 최소 $500 이상 준비. Ethereum 또는 Solana 체인 선택 (수수료 비교 후 결정).', color: 'bg-blue-500' },
                  { step: '3', title: 'USDY 민팅', desc: '"Mint USDY" → 금액 입력 → Approve → Mint. 이더리움은 2번의 트랜잭션 필요. Solana는 1번으로 완료. 민팅 즉시 USDY가 지갑에 들어옴.', color: 'bg-blue-500' },
                  { step: '4', title: '수익 자동 누적 확인', desc: '다음날부터 지갑의 USDY 잔액이 매일 조금씩 증가하는 것을 확인할 수 있다. Ondo 대시보드에서 누적 수익 확인 가능.', color: 'bg-emerald-500' },
                  { step: '5', title: 'USDC로 환급 (Redeem)', desc: '"Redeem" → USDY 금액 입력 → 트랜잭션 제출 → 1~2 영업일 내 USDC 수령. 즉시 출금을 원하면 DEX(Uniswap, Orca)에서 USDY → USDC 스왑 가능 (소폭 슬리피지 발생).', color: 'bg-emerald-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">체인별 비교 — 어디서 사용할까?</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="px-3 py-2 text-left font-bold text-gray-700 dark:text-gray-300">항목</th>
                      <th className="px-3 py-2 text-left font-bold text-blue-700 dark:text-blue-300">Ethereum</th>
                      <th className="px-3 py-2 text-left font-bold text-purple-700 dark:text-purple-300">Solana</th>
                      <th className="px-3 py-2 text-left font-bold text-teal-700 dark:text-teal-300">기타 (Base 등)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      ['민팅 수수료', '$5~30', '$0.01 미만', '$0.1~1'],
                      ['처리 속도', '12초 (블록)', '0.4초', '2초'],
                      ['DeFi 통합', 'Aave·Curve 담보', 'Jupiter·Kamino', '점차 확대'],
                      ['추천 대상', '$10,000+ 장기 보유', '$500~장기 모두', '중간'],
                      ['유동성', '가장 깊음', '빠르게 성장 중', '초기'],
                    ].map(([label, eth, sol, other], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                        <td className="px-3 py-2 font-semibold text-gray-700 dark:text-gray-300">{label}</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{eth}</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{sol}</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">소액이면 Solana, 거액 장기 보유면 Ethereum이 일반적으로 유리하다.</p>
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Ondo vs 경쟁사 — RWA 토큰화 시장 지형도</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">프로토콜</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">기반 자산</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">수익률</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">최소 투자</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">특징</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['Ondo USDY', '미국 국채+은행예금', '~4.3%', '$500', '리베이스형, 일반 투자자 접근 가능'],
                    ['Ondo OUSG', 'BlackRock BUIDL', '~4.7%', '$100,000', '기관용, DeFi 담보 활용'],
                    ['Franklin BENJI', '미국 국채+MMF', '~4.8%', '$20', '가장 낮은 문턱, 모바일 앱'],
                    ['Superstate USTB', '미국 국채', '~4.9%', '$1,000', '온체인 국채 펀드, 인증 투자자'],
                    ['Maple Finance', '기업 신용대출', '8~12%', '$10,000', '더 높은 수익, 더 높은 리스크'],
                    ['Backed Finance', '유럽·미국 ETF', '자산별 상이', '$500', 'ETF 토큰화, 주식 노출 가능'],
                  ].map(([name, asset, apy, min, feature], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-bold text-blue-600 dark:text-blue-400">{name}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{asset}</td>
                      <td className="px-4 py-3 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">{apy}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{min}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · DeFi에서 USDY 활용하기 — 단순 보유를 넘어서</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              USDY는 그냥 갖고 있어도 이자가 붙지만, DeFi에 추가로 활용하면 수익을 더 키울 수 있다. 특히 Solana 생태계에서 USDY의 DeFi 통합이 빠르게 확대되고 있다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Kamino Finance — USDY 담보 대출',
                  tag: 'Solana',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  border: 'border-purple-200 dark:border-purple-800',
                  desc: 'Solana의 대표 렌딩 프로토콜 Kamino에서 USDY를 담보로 USDC를 빌릴 수 있다. USDY 이자(~4.3%)를 받으면서 동시에 빌린 USDC로 추가 수익을 낼 수 있는 레버리지 전략.',
                  flow: 'USDY 예치 → USDC 70% LTV로 차입 → 차입 USDC를 Aave 예치 → 이자 수령',
                  warn: '레버리지 전략은 청산 리스크 존재. 초보자에게 비권장.',
                },
                {
                  title: 'Orca / Jupiter — USDY 유동성 공급',
                  tag: 'Solana',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  border: 'border-purple-200 dark:border-purple-800',
                  desc: 'Solana DEX에서 USDY-USDC 풀에 유동성을 공급하면 스왑 수수료를 추가로 받는다. USDY 기본 이자 + LP 수수료 이중 수익 가능.',
                  flow: 'USDY + USDC → Orca USDY-USDC 풀 → 스왑 수수료 수령',
                  warn: '스테이블-스테이블 풀이라 비영구 손실 최소화.',
                },
                {
                  title: 'Aave — OUSG 담보 활용',
                  tag: 'Ethereum',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  border: 'border-blue-200 dark:border-blue-800',
                  desc: 'Aave에서 OUSG를 담보로 스테이블코인을 빌릴 수 있다 (기관 고객 한정). 국채 수익을 받으면서 유동성도 확보하는 기관 DeFi 전략.',
                  flow: 'OUSG 예치 → USDC 차입 → 단기 DeFi 운용 → 이자+차익',
                  warn: '최소 $100,000 이상, 인증 투자자만 가능.',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.border}`}>
                  <div className="px-5 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}>{card.tag}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{card.desc}</p>
                    <div className="bg-gray-900 rounded-lg px-4 py-2 mb-2 font-mono text-xs text-teal-300">{card.flow}</div>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">⚠ {card.warn}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · PayFi와 Ondo — 결제 대기 자금의 최적 예치처</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              앞서 PayFi 글에서 "결제 대기 중인 자금을 즉시 운용하라"고 했다. 그 운용처로 Ondo USDY가 최적인 이유가 있다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-4">
                <p className="text-sm font-bold text-teal-700 dark:text-teal-300 mb-2">PayFi 관점에서 USDY의 장점</p>
                <ul className="space-y-2">
                  {[
                    '정부 보증 기반 — 스마트컨트랙트보다 낮은 리스크',
                    '매일 자동 리베이스 — 별도 수확(harvest) 불필요',
                    '즉시 DEX 매도 가능 — 결제 필요시 즉시 USDC 전환',
                    '멀티체인 — 결제 체인에 맞게 선택',
                    'AgentKit 통합 가능 — 에이전트가 자동 예치/회수',
                  ].map((t, i) => (
                    <li key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <span className="text-teal-500 flex-shrink-0">✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 dark:bg-black rounded-xl p-4 font-mono text-xs">
                <p className="text-teal-400 mb-2">{'// PayFi 에이전트 + USDY 시나리오'}</p>
                <p className="text-white">{'기업 USDC $100,000 수령'}</p>
                <p className="text-gray-400">{'  → 에이전트: 결제 일정 확인'}</p>
                <p className="text-gray-400">{'  → 7일 여유 → USDY 민팅'}</p>
                <p className="text-teal-300">{'  → 7일간 $100,000 × 4.3% / 365 × 7'}</p>
                <p className="text-teal-300">{'  → = $82.47 이자 자동 누적'}</p>
                <p className="text-white mt-2">{'결제일 D-1'}</p>
                <p className="text-gray-400">{'  → 에이전트: USDY → USDC 자동 변환'}</p>
                <p className="text-teal-300">{'  → $100,082.47 수령 후 거래처 정산'}</p>
              </div>
            </div>

            {/* S9 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · 리스크 — 알고 투자하자</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: '규제 리스크 (가장 중요)',
                  level: '높음',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'OUSG는 SEC 등록 증권으로 취급될 수 있다. 미국 거주자는 USDY 사용 불가이며, 각국 규제가 변하면 접근이 막힐 수 있다. 규제 환경 모니터링이 필수.',
                },
                {
                  title: '스마트컨트랙트 리스크',
                  level: '낮음 (감사 완료)',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: 'Ondo 컨트랙트는 복수 보안 감사를 받았다. 그러나 완벽한 코드는 없다. 실제 자산이 스마트컨트랙트를 통해 흐르는 만큼 취약점 해킹 위험은 항상 존재한다.',
                },
                {
                  title: '출금 지연 리스크',
                  level: '주의',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'USDY Redeem(환급)은 최대 1~2 영업일이 소요된다. 국채가 실제 금융 기관에 있기 때문. 긴급하게 현금이 필요하다면 DEX에서 직접 스왑해야 하며, 이때 소폭 슬리피지가 발생할 수 있다.',
                },
                {
                  title: '금리 변동 리스크',
                  level: '구조적',
                  lc: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  desc: 'USDY 수익률은 미국 기준금리를 따라간다. Fed가 금리를 내리면 수익률도 낮아진다. 2025년 이후 금리 인하 사이클에 들어서면 현재 4~5% 수준이 2~3%로 하락할 수 있다.',
                },
                {
                  title: '발행사 리스크 (Ondo 회사)',
                  level: '낮음',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: 'Ondo Finance Inc.가 운영을 멈추면? 실제 자산(국채)은 Ankura Trust가 별도 보관하므로 이론상 투자금은 보호된다. 다만 서비스 이용이 어려워지는 리스크는 있다.',
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
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">국채를 DeFi 레고 블록으로 만들다</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Ondo Finance는 "안전하지만 접근하기 어려운" 미국 국채와 "접근하기 쉽지만 위험한" DeFi 사이의 다리다. USDY 하나로 연 4~5%의 국채 수익을 받으면서, DeFi의 유동성과 프로그래머빌리티를 활용할 수 있다.
                </p>
                <p>
                  특히 <strong className="text-white">PayFi + Agentic Wallets와의 조합</strong>이 강력하다. 결제 대기 자금을 에이전트가 자동으로 USDY에 예치하고, 결제 시 자동 회수하는 구조는 기업 재무 관리의 새로운 표준이 될 수 있다.
                </p>
                <p>
                  처음이라면 <strong className="text-white">Solana에서 $500으로 USDY 민팅</strong>부터 시작하자. 가스비 $0.01, KYC 1~3일, 이후엔 매일 잔액이 조금씩 늘어나는 것을 직접 경험할 수 있다.
                </p>
                <p className="text-gray-400 text-xs">
                  * 수익률은 미국 기준금리에 연동되며 변동됩니다. 투자 전 공식 문서를 확인하고, 규제 상황은 거주 국가에 따라 다를 수 있습니다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 8 — Ondo Finance: Bringing US Treasuries Onchain</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">RWA Tokenization · OUSG · USDY · BlackRock BUIDL · T-Bill Yield in Your Wallet</p>

            {/* Stats EN */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Ondo TVL', value: '$1B+', sub: 'As of 2025' },
                { label: 'USDY Yield', value: '~4.5% APY', sub: 'US Treasury-backed' },
                { label: 'Supported Chains', value: '10+', sub: 'Ethereum, Solana, etc.' },
                { label: 'Onchain RWA Market', value: '$20B+', sub: '2025 total' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Why US Treasuries? The Backstory</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When the Fed raised rates from 0% to 5%+ starting in 2022, something strange happened: DeFi was yielding 1–2% on USDC, but US T-Bills were paying 5%. <strong>Safe government bonds were outperforming risky DeFi protocols.</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The problem: most DeFi users couldn't easily buy US Treasuries — broker accounts, identity verification, and US residency requirements created high barriers. <strong>Ondo Finance bridged this gap.</strong> By tokenizing US Treasuries, anyone with USDC can now access government bond yields onchain.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">Ondo Finance — One-Line Definition</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                An <strong>RWA (Real World Assets) tokenization protocol</strong> that issues onchain tokens backed by US Treasuries and money market funds, making institutional-grade yields accessible to DeFi users via USDC.
              </p>
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Core Products — OUSG vs USDY</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Ondo issues two core tokens. Both are backed by US Treasuries, but they target different users with different access requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  token: 'OUSG',
                  full: 'Ondo Short-Term US Government Bond Fund',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
                  badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
                  badgeText: 'Institutional / Accredited',
                  underlying: 'BlackRock BUIDL (T-Bills)',
                  apy: '~4.7% APY',
                  min: '$100,000',
                  kyc: 'Accredited investors only',
                  rebase: 'Price appreciation (non-rebase)',
                  defi: 'DeFi collateral use cases',
                  desc: 'Backed by BlackRock\'s BUIDL fund. Institutional-grade trust and yield. High minimum and strict KYC, but usable as DeFi collateral on Aave.',
                },
                {
                  token: 'USDY',
                  full: 'US Dollar Yield Token',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: 'Retail / General Users',
                  underlying: 'Short-term T-Bills + bank deposits',
                  apy: '~4.3% APY',
                  min: '$500',
                  kyc: 'Most countries (non-US)',
                  rebase: 'Rebasing (balance auto-increases daily)',
                  defi: 'Deep Solana DeFi integration',
                  desc: 'A yield-bearing dollar token for everyday users. Interest accrues automatically to your wallet balance each day. Low barrier to entry with strong Solana ecosystem integration.',
                },
              ].map((p, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${p.color}`}>
                  <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{p.token}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badge}`}>{p.badgeText}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{p.full}</p>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                    {[
                      { label: 'Underlying', value: p.underlying },
                      { label: 'Yield', value: p.apy },
                      { label: 'Minimum', value: p.min },
                      { label: 'KYC', value: p.kyc },
                      { label: 'Yield mechanism', value: p.rebase },
                      { label: 'DeFi use', value: p.defi },
                    ].map((row, j) => (
                      <div key={j} className="flex justify-between text-xs">
                        <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-right max-w-[60%]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 mb-1">Which one should you use?</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Individual investors → <strong>USDY</strong> (low barrier, auto-rebase, deep Solana DeFi integration)<br />
                Institutions / large capital → <strong>OUSG</strong> (BlackRock-grade trust, collateral use, deeper liquidity)
              </p>
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Where Does Your Money Actually Go?</h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">USDY Mint → Yield Flow</p>
              <div className="space-y-0">
                {[
                  { step: '1', title: 'User deposits USDC', desc: 'Send USDC to the Ondo Finance smart contract. After KYC approval, execute the USDY mint transaction.', color: 'bg-blue-600' },
                  { step: '2', title: 'Ondo converts USDC → real assets', desc: 'Via Ondo\'s TradFi partner (Ankura Trust), USDC is converted to dollars → used to purchase short-term US T-Bills (sub-90-day maturity) and bank deposits.', color: 'bg-indigo-600' },
                  { step: '3', title: 'Treasury interest accrues', desc: 'The US government pays T-bill interest. Currently ~4–5% annualized based on the Fed funds rate. This is the source of USDY yield.', color: 'bg-violet-600' },
                  { step: '4', title: 'Yield reflected onchain', desc: 'Daily interest is calculated and automatically added to USDY holders\' balances (rebase). No "claim" button needed — open your wallet and you have a little more USDY than yesterday.', color: 'bg-teal-600' },
                  { step: '5', title: 'Redeem to USDC anytime', desc: 'Return USDY to Ondo and receive USDC + accrued yield. Direct redemption takes 1–2 business days. For instant exit, swap USDY → USDC on a DEX (slight slippage).', color: 'bg-emerald-600' },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · BlackRock BUIDL — Institutional Finance Goes Onchain</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Since 2024, Ondo's OUSG uses <strong>BlackRock's BUIDL fund</strong> as its underlying asset. BlackRock is the world's largest asset manager ($9T+ AUM), and BUIDL is their first tokenized money market fund, running on Ethereum. Holding OUSG means indirectly investing in a BlackRock-managed Treasury fund — accessible in smaller sizes than BUIDL's $5M minimum.
            </p>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Step-by-Step: Minting USDY</h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Complete KYC', desc: 'Go to app.ondo.finance → "Get Started" → submit email + passport/ID. Review takes 1–3 business days. Available to most countries except US residents.', color: 'bg-blue-500' },
                  { step: '2', title: 'Connect wallet & prepare USDC', desc: 'Connect MetaMask or a supported wallet. Have at least $500 USDC ready. Choose Ethereum or Solana (compare gas costs first).', color: 'bg-blue-500' },
                  { step: '3', title: 'Mint USDY', desc: '"Mint USDY" → enter amount → Approve → Mint. Ethereum requires 2 transactions; Solana requires 1. USDY appears in your wallet immediately after minting.', color: 'bg-blue-500' },
                  { step: '4', title: 'Watch balance grow daily', desc: 'Starting the next day, your USDY balance will tick up slightly every day. Check cumulative earnings on the Ondo dashboard.', color: 'bg-emerald-500' },
                  { step: '5', title: 'Redeem back to USDC', desc: '"Redeem" → enter USDY amount → submit → receive USDC within 1–2 business days. For instant exit, swap USDY → USDC on a DEX (minor slippage).', color: 'bg-emerald-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">Turning Treasuries into DeFi Lego Blocks</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>Ondo Finance is the bridge between "safe but inaccessible" US Treasuries and "accessible but risky" DeFi. USDY gives you 4–5% government bond yield while keeping the programmability and liquidity of DeFi.</p>
                <p>The combination with <strong className="text-white">PayFi + Agentic Wallets</strong> is especially powerful: an agent automatically deposits idle payment funds into USDY, and recalls them when a payment is due. This could become the new standard for corporate treasury management.</p>
                <p>Start with <strong className="text-white">$500 USDY on Solana</strong>. Gas costs $0.01, KYC takes 1–3 days, and you can watch your balance grow a little every day — the clearest demonstration of "money working while you sleep."</p>
                <p className="text-gray-400 text-xs">* Yield rates are tied to the US federal funds rate and will vary. Review official documentation before investing. Regulatory availability depends on your country of residence.</p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
