'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StablecoinYieldPage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
          <Image src="/blog/yield.jpg" alt="Stablecoin Yield Strategy" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-emerald-600/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 7</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 7 — 스테이블코인 수익 극대화 전략</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">내 USDC로 연 10~25% 버는 법 · Aave · Curve · Convex · 실전 시나리오</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: '한국 은행 예금 금리', value: '~3%', sub: '2025년 기준' },
                { label: 'Aave USDC APY', value: '4~8%', sub: '시장 상황에 따라 변동' },
                { label: 'Curve+Convex APY', value: '8~20%', sub: 'CRV·CVX 보상 포함' },
                { label: '조합 전략 목표', value: '10~25%', sub: '리스크 감수 시' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · USDC를 그냥 두면 손해다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              지갑에 USDC $10,000을 1년 동안 가만히 두면 어떻게 될까? 명목상 $10,000이지만 미국 물가 상승률이 연 3~4%라면 실질 구매력은 <strong>$9,600~$9,700로 줄어든다</strong>. 은행 이자 3%를 받아도 겨우 본전이다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              반면 같은 USDC를 DeFi에 넣으면 연 5~20%를 받을 수 있다. 물론 리스크가 있다. 하지만 리스크를 이해하고 단계적으로 접근하면 <strong>은행보다 훨씬 나은 선택지</strong>가 된다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">$10,000 USDC — 1년 후 비교</p>
              <div className="space-y-3">
                {[
                  { label: '지갑에 방치', bar: 'w-5/12', color: 'bg-gray-300', value: '$10,000', note: '실질 가치 하락' },
                  { label: '한국 은행 예금', bar: 'w-6/12', color: 'bg-blue-300', value: '$10,300', note: '연 3%' },
                  { label: 'Aave USDC 예치', bar: 'w-7/12', color: 'bg-emerald-400', value: '$10,500~$10,800', note: '연 5~8%' },
                  { label: 'Curve 3pool LP', bar: 'w-8/12', color: 'bg-yellow-400', value: '$10,800~$11,200', note: '연 8~12%' },
                  { label: 'Curve+Convex 복리', bar: 'w-10/12', color: 'bg-orange-400', value: '$11,000~$12,500', note: '연 10~25%' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-36 text-xs text-gray-600 dark:text-gray-400 flex-shrink-0">{row.label}</div>
                    <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${row.bar} ${row.color} rounded-full`} />
                    </div>
                    <div className="w-36 text-xs font-mono text-gray-700 dark:text-gray-300 text-right">
                      <span className="font-semibold">{row.value}</span>
                      <span className="text-gray-400 ml-1 text-xs">{row.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">* 시장 상황에 따라 수익률 변동. 보장된 수치 아님.</p>
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · 전략 개요 — 3단계 수익 구조</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              스테이블코인 수익 전략은 난이도와 리스크에 따라 3단계로 나뉜다. 초보자는 1단계부터 시작해 익숙해지면 2단계, 3단계로 확장하는 방식이 가장 안전하다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: '1단계',
                  title: 'Aave 예치 — 가장 안전한 시작',
                  apy: '연 4~8%',
                  risk: '낮음',
                  riskColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  border: 'border-green-200 dark:border-green-800',
                  bg: 'bg-green-50 dark:bg-green-900/20',
                  desc: 'USDC/USDT/DAI를 Aave에 예치하면 대출자가 내는 이자를 받는다. 클릭 몇 번으로 완료. DeFi 입문으로 최적.',
                  pros: ['UI가 직관적', '언제든 출금 가능', '스마트 컨트랙트 리스크 최소', '$100부터 가능'],
                },
                {
                  step: '2단계',
                  title: 'Curve 3pool LP — 수익 업그레이드',
                  apy: '연 8~15%',
                  risk: '중간',
                  riskColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  border: 'border-yellow-200 dark:border-yellow-800',
                  bg: 'bg-yellow-50 dark:bg-yellow-900/20',
                  desc: 'DAI/USDC/USDT를 Curve 3pool에 공급. 스왑 수수료 + CRV 보상 수취. 비영구 손실이 거의 없어 스테이블코인에 이상적.',
                  pros: ['스왑 수수료 자동 분배', 'CRV 토큰 추가 보상', '비영구 손실 최소', 'Gas비 절약 위해 $1,000+ 권장'],
                },
                {
                  step: '3단계',
                  title: 'Convex 자동 복리 — 수익 극대화',
                  apy: '연 10~25%',
                  risk: '중간',
                  riskColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  border: 'border-orange-200 dark:border-orange-800',
                  bg: 'bg-orange-50 dark:bg-orange-900/20',
                  desc: 'Curve LP 토큰을 Convex에 맡기면 CRV+CVX 보상을 자동으로 최대화하고 복리 재투자. Curve를 직접 운영하는 것보다 대부분 수익이 높다.',
                  pros: ['veCRV 없이도 최대 부스트 효과', 'CRV+CVX 이중 보상', '자동 복리 (수동 수확 불필요)', 'Gas비 절약 위해 $5,000+ 권장'],
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.border}`}>
                  <div className={`px-5 py-3 flex items-center justify-between ${card.bg}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{card.step}: {card.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{card.apy}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.riskColor}`}>리스크 {card.risk}</span>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{card.desc}</p>
                    <div className="grid grid-cols-2 gap-1">
                      {card.pros.map((p, j) => (
                        <div key={j} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="text-emerald-500 flex-shrink-0">✓</span>{p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · 1단계 — Aave 예치 실전</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave는 DeFi 최대 렌딩 프로토콜로 TVL $20B+ 규모다. USDC를 예치하면 대출자가 내는 이자가 실시간으로 aUSDC 잔액에 반영된다. 예치 즉시 이자가 붙기 시작하고 언제든 출금 가능하다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Aave 예치 단계별 가이드</p>
              <div className="space-y-4">
                {[
                  { step: '1', title: '지갑 준비', desc: 'MetaMask 또는 지갑 앱 준비. Arbitrum 네트워크 추가 권장 (가스비가 이더리움의 1/10)', color: 'bg-blue-500' },
                  { step: '2', title: 'USDC 준비', desc: '거래소(업비트/빗썸)에서 USDC 구매 후 지갑으로 출금. Arbitrum 체인으로 출금하면 가스비 절약', color: 'bg-blue-500' },
                  { step: '3', title: 'app.aave.com 접속', desc: 'Supply 탭에서 USDC 선택 → 금액 입력 → Approve → Supply. 2번의 트랜잭션 필요 (첫 번째는 승인)', color: 'bg-blue-500' },
                  { step: '4', title: 'aUSDC 수령 확인', desc: '예치 완료 후 지갑에 aUSDC 토큰이 들어옴. 실시간으로 잔액이 조금씩 증가하는 게 보임', color: 'bg-emerald-500' },
                  { step: '5', title: '수익 모니터링', desc: 'Aave 대시보드에서 현재 APY 확인. 금리는 이용률(Utilization Rate)에 따라 매 블록 변동', color: 'bg-emerald-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-xs">
              <p className="text-yellow-400 mb-3">{'// Aave USDC APY 결정 구조'}</p>
              <p className="text-white">이용률(Utilization) = 총 대출액 / 총 예치액</p>
              <p className="text-white mt-2">이용률 50%  →  APY ~5%   <span className="text-gray-400">← 안정 구간</span></p>
              <p className="text-white">이용률 80%  →  APY ~8%   <span className="text-gray-400">← Kink point</span></p>
              <p className="text-white">이용률 95%  →  APY ~40%+ <span className="text-gray-400">← 출금 어려울 수 있음</span></p>
              <p className="text-gray-400 mt-2">{'// 이용률이 높을수록 금리도 높지만 즉시 출금 불가 리스크 증가'}</p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · 2단계 — Curve 3pool LP 실전</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Curve 3pool에 유동성을 공급하면 두 가지 수익이 생긴다. ① 스왑 수수료(0.04%), ② CRV 토큰 보상. 게이지에 스테이킹까지 하면 두 번째 수익이 활성화된다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Curve 3pool LP 단계별 가이드</p>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'curve.fi 접속 → Pools → 3pool', desc: 'Ethereum 메인넷 또는 Arbitrum에서 접속. Arbitrum의 경우 가스비 저렴하지만 유동성은 메인넷이 훨씬 깊음', color: 'bg-yellow-500' },
                  { step: '2', title: 'Deposit 탭 → 금액 입력', desc: 'DAI/USDC/USDT 중 하나 또는 조합으로 공급 가능. 불균형 공급도 허용 (소량 수수료 발생)', color: 'bg-yellow-500' },
                  { step: '3', title: '3CRV LP 토큰 수령', desc: '공급 비율만큼 3CRV 토큰을 받음. 이 토큰이 풀 내 지분을 나타냄', color: 'bg-yellow-500' },
                  { step: '4', title: 'Gauge에 스테이킹 (중요!)', desc: '3CRV를 그냥 갖고 있으면 수수료만 받음. Gauge에 스테이킹해야 CRV 보상 추가 수령 가능 → APY 2~3배 차이', color: 'bg-orange-500' },
                  { step: '5', title: 'CRV 보상 수확 (Claim)', desc: '주기적으로 쌓인 CRV 토큰을 Claim. 그냥 팔거나, veCRV 전환하거나, Convex로 이동 가능', color: 'bg-orange-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">Gauge 스테이킹 — 왜 중요한가</p>
              <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                3CRV를 그냥 지갑에 두면 스왑 수수료 APY ~1~2%만 받는다. Gauge에 스테이킹하면 CRV 보상이 추가돼 APY가 <strong>8~15%로 올라간다</strong>. 같은 자산인데 스테이킹 여부만으로 수익이 4~8배 차이난다. 반드시 Gauge까지 진행할 것.
              </p>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · 3단계 — Convex로 수익 극대화</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Curve Gauge에 직접 스테이킹하면 CRV 보상을 받지만, veCRV가 없으면 기본 APY만 받는다. Convex는 이 문제를 해결한다. <strong>Convex가 veCRV를 대량 보유</strong>하고 있어 사용자 대신 최대 부스트를 적용해준다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <p className="text-sm font-bold text-yellow-800 dark:text-yellow-300 mb-3">Curve 직접 스테이킹</p>
                <div className="space-y-2 text-xs text-yellow-900 dark:text-yellow-200">
                  <p>✓ 스왑 수수료: ~1~2%</p>
                  <p>✓ CRV 기본 보상: ~3~5%</p>
                  <p>✗ veCRV 없으면 부스트 없음</p>
                  <p>✗ CRV 직접 수확·재투자 필요</p>
                  <p className="font-bold mt-2">합계: 약 4~7% APY</p>
                </div>
              </div>
              <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                <p className="text-sm font-bold text-orange-800 dark:text-orange-300 mb-3">Convex 스테이킹</p>
                <div className="space-y-2 text-xs text-orange-900 dark:text-orange-200">
                  <p>✓ 스왑 수수료: ~1~2%</p>
                  <p>✓ CRV 보상 (부스트 적용): ~5~10%</p>
                  <p>✓ CVX 추가 보상: ~2~5%</p>
                  <p>✓ 자동 복리 재투자</p>
                  <p className="font-bold mt-2">합계: 약 10~20% APY</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Convex 사용 단계별 가이드</p>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'curve.fi에서 3pool에 유동성 공급', desc: '2단계와 동일. 3CRV LP 토큰 수령', color: 'bg-orange-500' },
                  { step: '2', title: 'convexfinance.com 접속', desc: 'Stake 탭 → 3pool 선택 → 3CRV 스테이킹. 별도 Gauge 스테이킹 불필요 (Convex가 자동 처리)', color: 'bg-orange-500' },
                  { step: '3', title: 'cvxCRV + CVX 보상 자동 축적', desc: '매 블록마다 CRV+CVX 보상이 쌓임. 별도 수확(Claim) 없이 자동 복리 옵션 선택 가능', color: 'bg-orange-500' },
                  { step: '4', title: '보상 처리 선택', desc: '① 그냥 팔아서 USDC로 → 원금 재투자 / ② CVX 스테이킹 → 추가 수익 / ③ cvxCRV 유지 → 장기 보유', color: 'bg-emerald-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S6 실전 시나리오 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · 실전 시나리오 — $10,000 USDC 12개월</h2>

            <div className="space-y-5 my-6">
              {[
                {
                  title: '시나리오 A: 보수적 — Aave만',
                  amount: '$10,000',
                  border: 'border-green-200 dark:border-green-800',
                  bg: 'bg-green-50 dark:bg-green-900/20',
                  steps: [
                    { action: 'USDC $10,000 → Aave Arbitrum 예치', result: '연 APY 5~7% 적용' },
                    { action: '12개월 후 출금', result: '$10,500~$10,700' },
                    { action: '수익', result: '$500~$700 (세전)' },
                  ],
                  note: '가스비 최소, 리스크 최소, 언제든 출금 가능. 초보자 권장.',
                },
                {
                  title: '시나리오 B: 중간 — Curve 3pool + Gauge',
                  amount: '$10,000',
                  border: 'border-yellow-200 dark:border-yellow-800',
                  bg: 'bg-yellow-50 dark:bg-yellow-900/20',
                  steps: [
                    { action: 'USDC $10,000 → Curve 3pool 공급', result: '3CRV LP 토큰 수령' },
                    { action: '3CRV → Gauge 스테이킹', result: '스왑 수수료 + CRV 보상 시작' },
                    { action: '분기마다 CRV 수확 → USDC 전환 → 재투자', result: '복리 효과' },
                    { action: '12개월 후', result: '$10,800~$11,500 (APY 8~15%)' },
                  ],
                  note: '가스비 총 $20~50 발생. $5,000+ 이상에서 효율적.',
                },
                {
                  title: '시나리오 C: 공격적 — Curve + Convex 조합',
                  amount: '$10,000',
                  border: 'border-orange-200 dark:border-orange-800',
                  bg: 'bg-orange-50 dark:bg-orange-900/20',
                  steps: [
                    { action: 'USDC $10,000 → Curve 3pool 공급', result: '3CRV 수령' },
                    { action: '3CRV → Convex 스테이킹', result: 'CRV + CVX 이중 보상 시작' },
                    { action: '월마다 CVX 보상 → 팔아서 USDC → 재예치', result: '자동 복리' },
                    { action: '12개월 후', result: '$11,000~$12,500 (APY 10~25%)' },
                  ],
                  note: 'CRV·CVX 가격 변동에 따라 실제 수익 달라짐. 토큰 가격 리스크 있음.',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${s.border}`}>
                  <div className={`px-5 py-3 flex items-center justify-between ${s.bg}`}>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{s.title}</span>
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{s.amount}</span>
                  </div>
                  <div className="px-5 py-4">
                    <div className="space-y-2 mb-3">
                      {s.steps.map((step, j) => (
                        <div key={j} className="flex gap-3 text-xs">
                          <span className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">{step.action}</span>
                            <span className="text-emerald-600 dark:text-emerald-400 ml-2">→ {step.result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg p-2">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* S7 리스크 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · 리스크 — 반드시 이해하고 시작해야</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '스마트 컨트랙트 해킹',
                  level: '항상 존재',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'Aave·Curve 모두 수십억 달러 규모의 TVL을 몇 년간 유지한 검증된 프로토콜이지만, 100% 안전은 없다. 2023년 Curve Vyper 버그로 $7,000만 해킹 발생. 분산 투자로 리스크를 나눌 것.',
                },
                {
                  title: '스테이블코인 디페깅',
                  level: '낮지만 치명적',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: '3pool의 DAI/USDC/USDT 중 하나가 $1 페그를 잃으면 LP 포지션에서 해당 토큰 비중이 급증한다. 2023년 USDC가 SVB 사태로 잠깐 $0.87까지 하락. USDC·USDT 모두 중앙화 발행사 리스크 존재.',
                },
                {
                  title: 'CRV·CVX 토큰 가격 하락',
                  level: '중간',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'APY 숫자는 CRV·CVX 보상 포함이다. CRV 가격이 반토막 나면 실제 APY도 절반으로 떨어진다. 보상을 즉시 USDC로 전환하는 전략으로 토큰 가격 리스크를 줄일 수 있다.',
                },
                {
                  title: '가스비',
                  level: '낮음 (Arbitrum 사용 시)',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: '이더리움 메인넷에서 진입·청산 가스비 합산 $50~200. Arbitrum/Optimism 사용 시 $1~5로 절감. $1,000 이하 소액이면 가스비가 수익을 잡아먹을 수 있으므로 $3,000+ 이상 권장.',
                },
              ].map((risk, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{risk.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${risk.lc}`}>{risk.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>

            {/* S8 최종 비교표 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · 전략 최종 비교표</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500 rounded-tl-lg">전략</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">예상 APY</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">최소 권장액</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">난이도</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500 rounded-tr-lg">주요 리스크</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['Aave 예치', '4~8%', '$100+', '⭐', '컨트랙트, 디페깅'],
                    ['Curve 3pool (수수료만)', '1~2%', '$500+', '⭐⭐', '컨트랙트, 디페깅'],
                    ['Curve 3pool + Gauge', '8~15%', '$1,000+', '⭐⭐', '컨트랙트, CRV 가격'],
                    ['Curve + Convex', '10~25%', '$3,000+', '⭐⭐⭐', '컨트랙트, CRV/CVX 가격'],
                    ['Aave + Curve + Convex', '12~20%', '$5,000+', '⭐⭐⭐', '복합 컨트랙트 리스크'],
                  ].map(([strategy, apy, min, diff, risk], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800 dark:text-gray-200">{strategy}</td>
                      <td className="px-4 py-3 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">{apy}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{min}</td>
                      <td className="px-4 py-3 text-xs">{diff}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">USDC를 굴리는 최적 경로</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  처음이라면 <strong className="text-white">Aave Arbitrum에 USDC 예치</strong>부터 시작하라. 클릭 몇 번으로 연 5~8%를 받으면서 DeFi를 익힐 수 있다. 익숙해지면 Curve 3pool + Gauge로 업그레이드하고, 자산이 커지면 Convex 자동 복리를 추가한다.
                </p>
                <p>
                  핵심 원칙: <strong className="text-white">분산, 소액 시작, 리스크 이해 후 확장</strong>. CRV·CVX 보상은 즉시 USDC로 전환해 원금에 재투자하는 게 토큰 가격 변동 리스크를 줄이는 가장 간단한 방법이다.
                </p>
                <p className="text-gray-400 text-xs">
                  * 모든 수익률은 과거 데이터 기반 추정치이며 보장되지 않습니다. DeFi 프로토콜 사용에는 스마트 컨트랙트 리스크, 자산 손실 위험이 있습니다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 7 — Stablecoin Yield Maximization</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">Earning 10–25% on Your USDC · Aave · Curve · Convex · Real Scenarios</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Korean bank deposit rate', value: '~3%', sub: 'As of 2025' },
                { label: 'Aave USDC APY', value: '4~8%', sub: 'Varies with market' },
                { label: 'Curve+Convex APY', value: '8~20%', sub: 'Including CRV·CVX rewards' },
                { label: 'Combined strategy target', value: '10~25%', sub: 'With risk acceptance' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Leaving USDC Idle Is Losing Money</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you hold $10,000 USDC in a wallet for a year without doing anything, you still have $10,000 nominally — but with 3–4% annual US inflation, your real purchasing power drops to <strong>$9,600–$9,700</strong>. A 3% bank deposit barely breaks even. DeFi offers 5–20% on the same stablecoin.
            </p>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Strategy Overview — 3-Tier Yield Structure</h2>

            <div className="space-y-4 my-6">
              {[
                { step: 'Tier 1', title: 'Aave Deposit — Safest Start', apy: '4–8% APY', risk: 'Low', rc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', border: 'border-green-200 dark:border-green-800', bg: 'bg-green-50 dark:bg-green-900/20', desc: 'Deposit USDC/USDT/DAI into Aave and earn interest paid by borrowers. Done in a few clicks. Ideal DeFi entry point.', pros: ['Intuitive UI', 'Withdraw anytime', 'Minimal smart contract risk', 'Works from $100'] },
                { step: 'Tier 2', title: 'Curve 3pool LP — Yield Upgrade', apy: '8–15% APY', risk: 'Medium', rc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', border: 'border-yellow-200 dark:border-yellow-800', bg: 'bg-yellow-50 dark:bg-yellow-900/20', desc: 'Provide DAI/USDC/USDT to Curve 3pool. Earn swap fees + CRV rewards. Near-zero impermanent loss makes it ideal for stablecoins.', pros: ['Auto-distributed swap fees', 'CRV token rewards', 'Minimal impermanent loss', '$1,000+ recommended for gas efficiency'] },
                { step: 'Tier 3', title: 'Convex Auto-Compounding — Max Yield', apy: '10–25% APY', risk: 'Medium', rc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', border: 'border-orange-200 dark:border-orange-800', bg: 'bg-orange-50 dark:bg-orange-900/20', desc: 'Deposit Curve LP tokens into Convex to maximize CRV+CVX rewards with automatic compounding. Usually higher APY than Curve directly.', pros: ['Max boost without veCRV', 'Dual CRV+CVX rewards', 'Auto-compounding', '$5,000+ recommended'] },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${card.border}`}>
                  <div className={`px-5 py-3 flex items-center justify-between ${card.bg}`}>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{card.step}: {card.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{card.apy}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.rc}`}>Risk: {card.risk}</span>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{card.desc}</p>
                    <div className="grid grid-cols-2 gap-1">
                      {card.pros.map((p, j) => (
                        <div key={j} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="text-emerald-500 flex-shrink-0">✓</span>{p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Tier 1 — Aave Deposit in Practice</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Step-by-step: Aave deposit</p>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Prepare wallet + USDC', desc: 'MetaMask or any web3 wallet. Use Arbitrum network to save on gas (1/10th of Ethereum mainnet)', color: 'bg-blue-500' },
                  { step: '2', title: 'Go to app.aave.com', desc: 'Supply tab → select USDC → enter amount → Approve → Supply. Two transactions required on first use', color: 'bg-blue-500' },
                  { step: '3', title: 'Receive aUSDC', desc: 'After deposit, aUSDC appears in wallet. Balance visibly increases in real time as interest accrues', color: 'bg-emerald-500' },
                  { step: '4', title: 'Monitor APY', desc: 'Check current rate on Aave dashboard. Rate changes with utilization — higher borrowing demand = higher APY', color: 'bg-emerald-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Tier 2 — Curve 3pool LP in Practice</h2>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">Critical: Stake in Gauge after depositing</p>
              <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                Holding 3CRV in your wallet earns only swap fees (~1–2% APY). Staking in the Gauge activates CRV rewards, pushing APY to <strong>8–15%</strong>. Same asset, 4–8x different yield just from one extra step. Always stake in the Gauge.
              </p>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Tier 3 — Convex: Maximum Yield</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Staking on Curve directly without veCRV gets you base APY only. Convex holds massive veCRV reserves and applies maximum boost on your behalf, plus adds CVX token rewards on top. The result is typically 2–3x the APY of direct Curve staking.
            </p>
            <div className="bg-gray-900 dark:bg-black rounded-xl p-4 my-4 font-mono text-xs">
              <p className="text-white">Curve direct staking    →  ~4–7% APY</p>
              <p className="text-white mt-1">Convex (same pool)      →  ~10–20% APY  <span className="text-green-400">← CRV boost + CVX rewards</span></p>
              <p className="text-gray-400 mt-2">{'// convexfinance.com → Stake → select 3pool → stake 3CRV'}</p>
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Real Scenarios — $10,000 USDC over 12 Months</h2>
            <div className="space-y-4 my-6">
              {[
                { title: 'Scenario A: Conservative — Aave only', result: '$10,500–$10,700', apy: '5–7% APY', note: 'Minimum gas, minimum risk, withdraw anytime. Recommended for beginners.' },
                { title: 'Scenario B: Balanced — Curve 3pool + Gauge', result: '$10,800–$11,500', apy: '8–15% APY', note: '$20–50 total gas fees. Efficient above $5,000.' },
                { title: 'Scenario C: Aggressive — Curve + Convex', result: '$11,000–$12,500', apy: '10–25% APY', note: 'Actual yield depends on CRV/CVX price. Token price risk applies.' },
              ].map((s, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{s.title}</p>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{s.apy}</span>
                  </div>
                  <p className="text-sm font-mono text-emerald-700 dark:text-emerald-400 mb-2">After 12 months: {s.result}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.note}</p>
                </div>
              ))}
            </div>

            {/* S7 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Risks — Understand Before Committing</h2>
            <div className="space-y-3 my-6">
              {[
                { title: 'Smart Contract Hack', level: 'Always present', lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', desc: 'Aave and Curve are battle-tested with billions in TVL, but no protocol is 100% safe. Curve\'s Vyper bug caused a $70M hack in 2023. Diversify across protocols.' },
                { title: 'Stablecoin Depeg', level: 'Low but severe', lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', desc: 'If any 3pool asset loses its $1 peg, LP holders accumulate that depegged token. USDC briefly hit $0.87 in the 2023 SVB collapse. Both USDC and USDT carry centralized issuer risk.' },
                { title: 'CRV/CVX Price Drop', level: 'Medium', lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', desc: 'APY figures include CRV/CVX token rewards. If CRV price halves, effective APY halves too. Selling rewards immediately for USDC reduces this risk.' },
                { title: 'Gas Fees', level: 'Low on L2', lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', desc: 'Ethereum mainnet entry/exit gas can total $50–200. Arbitrum/Optimism reduces this to $1–5. Below $1,000, gas fees can eat your profits — $3,000+ is recommended.' },
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

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">The Optimal Path for Your USDC</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>Start with <strong className="text-white">Aave on Arbitrum</strong>. A few clicks, 5–8% APY, and you learn the DeFi ropes with minimal risk. Graduate to Curve 3pool + Gauge as you grow comfortable, then add Convex for auto-compounding at scale.</p>
                <p>Core principle: <strong className="text-white">diversify, start small, expand only after understanding the risks</strong>. Sell CRV/CVX rewards immediately for USDC and reinvest — the simplest hedge against token price volatility.</p>
                <p className="text-gray-400 text-xs">* All APY figures are estimates based on historical data and are not guaranteed. DeFi protocols carry smart contract risk and potential for total loss.</p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
