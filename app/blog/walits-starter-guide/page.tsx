'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WalitsStarterGuidePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/blog" className="text-blue-300 hover:text-white text-sm transition-colors">
            {language === 'ko' ? '← 블로그' : '← Blog'}
          </Link>
          <div className="flex gap-2">
            <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-white text-slate-900' : 'text-white/60 hover:text-white'}`}>한국어</button>
            <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-slate-900' : 'text-white/60 hover:text-white'}`}>English</button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 pb-12 pt-4">
          <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {language === 'ko' ? 'walits 스타터 가이드' : 'Walits Starter Guide'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {language === 'ko'
              ? 'Walits 서비스 스타터 가이드 — 개인용 USDC 전문 지갑'
              : 'Walits Starter Guide — Your Personal USDC Wallet'}
          </h1>
          <p className="text-blue-200 text-lg mb-6">
            {language === 'ko'
              ? '지갑을 어떻게 만들고, USDC를 어떻게 채우고, 로그인 후 무엇이 보여야 하는가'
              : 'How the wallet is built, how to fund it with USDC, and what the UX looks like after login'}
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>{language === 'ko' ? '2026년 4월 7일' : 'April 7, 2026'}</span>
            <span>·</span>
            <span>{language === 'ko' ? '28분 읽기' : '28 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
          <Image src="/blog/walits_usdc.jpg" alt="Walits Starter Guide" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* ───── KO ───── */}
        {language === 'ko' && (
          <div className="prose prose-lg max-w-none">

            {/* 도입 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-10">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">이 글에서 다루는 것</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700 dark:text-gray-300">
                {[
                  { icon: '📱', title: '로그인 후 UI/UX', desc: '홈 화면 구성, PayFi 프리셋, 거래 내역, 에이전트 — 처음 켰을 때 무엇이 보여야 하는가' },
                  { icon: '🔑', title: '지갑 생성 기술', desc: 'HD Wallet · 자체 MPC · Coinbase CDP · Turnkey · Circle Programmable — 무엇을 선택할까' },
                  { icon: '💵', title: 'USDC 충전 방법', desc: '거래소 출금 · MetaMask 전송 · 온램프 · CCTP 크로스체인 — 어떤 UX로 지원할까' },
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-gray-900 rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · 왜 개인용 USDC 전문 지갑인가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              일반적인 크립토 지갑은 수십 개 토큰을 지원하는 "종합 자산 관리 도구"다. 그런데 대부분의 실사용 케이스는 결국 하나로 귀결된다. <strong>달러 가치를 유지하면서 송금하고 이자를 받는 것.</strong> walits는 여기에 집중한다. USDC 하나만 제대로 다루는 전문 지갑이다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                { title: '일반 크립토 지갑의 문제', items: ['수십 개 토큰 → 무엇을 써야 할지 혼란', '가격 변동성 → 달러 가치 보존 불가', '수익 기능 없음 → 잔고가 그냥 잠든다', 'UX 복잡도 높음 → 진입 장벽'], color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10', label: 'bg-red-100 text-red-700' },
                { title: 'walits 개인 지갑의 포지션', items: ['USDC 단일 자산 → 달러 기준 잔고 직관적', '잔고가 24시간 수익 창출 (PayFi)', '에이전트가 자동으로 최적 프로토콜 배치', '온램프·오프램프 원클릭 지원'], color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10', label: 'bg-blue-100 text-blue-700' },
              ].map((col) => (
                <div key={col.title} className={`border rounded-xl p-5 ${col.color}`}>
                  <p className={`text-xs font-bold px-2 py-0.5 rounded inline-block mb-3 ${col.label}`}>{col.title}</p>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {col.items.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-0.5">•</span>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · 로그인 후 UI/UX — 무엇이 보여야 하는가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              처음 로그인한 유저가 5초 안에 이해해야 할 것은 딱 하나다. "내 USDC가 지금 얼마고, 무엇을 하고 있는가." 이 기준으로 홈 화면 구조를 설계한다.
            </p>

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">홈 화면 — 4개 레이어 구조</p>

            {/* 홈화면 와이어프레임 스타일 */}
            <div className="bg-slate-900 rounded-2xl p-6 my-6 text-white">
              <div className="max-w-sm mx-auto space-y-3 text-xs">
                {/* 상단 잔고 */}
                <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-xl p-5 text-center">
                  <p className="text-blue-200 text-[10px] uppercase tracking-wider mb-1">내 USDC 잔고</p>
                  <p className="text-3xl font-black">$1,248.32</p>
                  <p className="text-blue-300 text-xs mt-1">+$3.41 오늘 (연 9.8% 환산)</p>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="text-center">
                      <p className="text-blue-200 text-[10px]">운용 중</p>
                      <p className="font-bold text-green-300">$1,100</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-200 text-[10px]">대기 중</p>
                      <p className="font-bold text-slate-300">$148</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-200 text-[10px]">이번 달 수익</p>
                      <p className="font-bold text-yellow-300">$9.14</p>
                    </div>
                  </div>
                </div>

                {/* 빠른 액션 */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { icon: '📥', label: '받기' },
                    { icon: '📤', label: '보내기' },
                    { icon: '💱', label: '충전' },
                    { icon: '⚙️', label: '설정' },
                  ].map((a) => (
                    <div key={a.label} className="bg-slate-800 rounded-xl p-3 text-center">
                      <div className="text-xl mb-1">{a.icon}</div>
                      <p className="text-[10px] text-slate-400">{a.label}</p>
                    </div>
                  ))}
                </div>

                {/* 투자 프리셋 상태 */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[11px] font-bold text-slate-300">현재 운용 전략</p>
                    <span className="bg-green-600 text-white text-[9px] px-2 py-0.5 rounded-full">활성</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍎</span>
                    <div>
                      <p className="font-bold text-sm">Apple 전략</p>
                      <p className="text-[10px] text-slate-400">Ondo USDY + Morpho USDC · 연 6~8%</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-green-400 font-bold text-sm">7.2%</p>
                      <p className="text-[10px] text-slate-500">현재 APY</p>
                    </div>
                  </div>
                </div>

                {/* 최근 활동 */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-[11px] font-bold text-slate-300 mb-3">최근 활동</p>
                  <div className="space-y-2">
                    {[
                      { icon: '🤖', desc: 'Agent: Morpho → Ondo 재배치 (APY +0.3%)', time: '2시간 전', color: 'text-indigo-400' },
                      { icon: '💰', desc: '이자 수령 +$1.24', time: '어제', color: 'text-green-400' },
                      { icon: '📤', desc: '김민준에게 $50 송금', time: '3일 전', color: 'text-slate-400' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span className={`text-[10px] flex-1 ${item.color}`}>{item.desc}</span>
                        <span className="text-[9px] text-slate-600">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 mt-8">화면별 설계 원칙</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  screen: '홈 화면',
                  color: 'border-blue-200 dark:border-blue-800',
                  badge: 'bg-blue-100 text-blue-700',
                  points: [
                    '잔고를 달러($) 기준으로 표시 — USDC 수량이 아닌 달러 가치 우선',
                    '운용 중/대기 중 분리 표시 — 얼마가 일하고 있는지 투명하게',
                    '오늘 수익 실시간 표시 — "내 돈이 지금 벌고 있다" 체감',
                    '빠른 액션 4개 (받기·보내기·충전·설정) — 핵심 동선 최단화',
                  ],
                },
                {
                  screen: 'PayFi 투자 탭',
                  color: 'border-indigo-200 dark:border-indigo-800',
                  badge: 'bg-indigo-100 text-indigo-700',
                  points: [
                    '프리셋 3개 (오렌지·애플·칠리) 카드 UI — 수익률·위험도·사용 프로토콜 표시',
                    '현재 활성 전략 강조 + APY 실시간 갱신',
                    '에이전트 자동/수동 모드 토글',
                    '수익 히스토리 차트 (일/주/월)',
                  ],
                },
                {
                  screen: '보내기/받기',
                  color: 'border-green-200 dark:border-green-800',
                  badge: 'bg-green-100 text-green-700',
                  points: [
                    '받기: QR 코드 + 주소 복사 + 체인 선택 (Ethereum·Base·Polygon·Solana)',
                    '보내기: 주소 or 이름 검색, 달러 입력 → USDC 자동 환산',
                    '수수료 미리보기 — 체인별 가스 비교',
                    '즐겨찾기 수취인 저장',
                  ],
                },
                {
                  screen: '충전 탭',
                  color: 'border-amber-200 dark:border-amber-800',
                  badge: 'bg-amber-100 text-amber-700',
                  points: [
                    '방법 선택 카드 UI — 거래소·카드·다른지갑·CCTP',
                    '각 방법별 예상 소요 시간·수수료 명시',
                    '온램프 파트너 (MoonPay·Transak·Stripe) 원클릭 연동',
                    '거래소별 출금 가이드 (업비트·빗썸·바이낸스)',
                  ],
                },
              ].map((item) => (
                <div key={item.screen} className={`border rounded-xl p-4 ${item.color}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded inline-block mb-3 ${item.badge}`}>{item.screen}</span>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {item.points.map((p) => <li key={p} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 shrink-0">✓</span>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · 지갑 생성 기술 — 어떤 방식이 맞는가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              유저가 가입하는 순간 "USDC를 담을 수 있는 온체인 주소"가 만들어져야 한다. 이 주소를 어떻게 생성하고, 누가 키를 보관하고, 어떻게 서명하는지가 서비스의 보안성·UX·규제 리스크를 결정한다. 5가지 방식을 비교한다.
            </p>

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">지갑 생성 방식 5가지 비교</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    {['방식', '키 보관 주체', 'UX 난이도', '보안', '규제 리스크', '추천 케이스'].map((h) => (
                      <th key={h} className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left text-slate-700 dark:text-slate-300">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['HD Wallet (MetaMask류)', '유저 100%', '높음 (시드 관리)', '최고', '낮음', '크립토 고수'],
                    ['자체 MPC 인프라', '유저+서버 분산', '낮음', '높음', '중간', '독립성 중시 팀'],
                    ['Turnkey MPC', '유저+Turnkey TEE', '매우 낮음', '높음', '낮음', 'B2C 스타트업 권장'],
                    ['Coinbase CDP / Smart Wallet', '유저+Coinbase', '매우 낮음', '높음', '낮음', 'Base 체인 우선 서비스'],
                    ['Circle Programmable Wallets', 'Circle 관리 가능', '최저', '중간', '높음 (수탁 리스크)', '엔터프라이즈 B2B'],
                  ].map(([method, custody, ux, sec, reg, rec], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-slate-50 dark:bg-slate-800/30'}>
                      <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 font-medium text-slate-800 dark:text-slate-200">{method}</td>
                      <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-600 dark:text-slate-400">{custody}</td>
                      <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">{ux}</td>
                      <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">{sec}</td>
                      <td className="border border-slate-200 dark:border-slate-700 px-3 py-2">{reg}</td>
                      <td className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-blue-600 dark:text-blue-400">{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 각 방식 상세 */}
            <div className="space-y-6 mb-8">

              {/* HD Wallet */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-800 px-5 py-3 flex items-center gap-3">
                  <span className="text-xl">🔐</span>
                  <div>
                    <p className="font-bold text-sm">① HD Wallet (Hierarchical Deterministic)</p>
                    <p className="text-xs text-gray-500">BIP-39 니모닉 시드 → 무한 키 파생</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    12~24개 영어 단어(니모닉)로부터 모든 키를 수학적으로 파생한다. MetaMask, Ledger가 이 방식이다. 유저가 키를 완전히 소유하지만, 시드 유출 시 모든 자산을 잃는다. 일반 소비자 앱에 적합하지 않다.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 mb-4">
                    <p className="text-slate-500 mb-2">// BIP-44 경로 구조</p>
                    <p>m / purpose&apos; / coin_type&apos; / account&apos; / change / index</p>
                    <p className="text-blue-400">m / 44&apos; / 60&apos; / 0&apos; / 0 / 0  <span className="text-slate-500">← ETH 첫 번째 주소</span></p>
                    <p className="text-blue-400">m / 44&apos; / 60&apos; / 0&apos; / 0 / 1  <span className="text-slate-500">← ETH 두 번째 주소</span></p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-3">
                      <p className="font-bold text-green-700 dark:text-green-400 mb-1">장점</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• 완전한 자기 수탁 (Self-custody)</li>
                        <li>• 서버 의존 없음</li>
                        <li>• 오프라인 백업 가능</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-3">
                      <p className="font-bold text-red-700 dark:text-red-400 mb-1">단점</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• 시드 분실 = 영구 자산 손실</li>
                        <li>• 일반 유저 진입 장벽 높음</li>
                        <li>• 소셜 로그인 불가</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Turnkey MPC */}
              <div className="border-2 border-blue-300 dark:border-blue-700 rounded-xl overflow-hidden">
                <div className="bg-blue-600 text-white px-5 py-3 flex items-center gap-3">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="font-bold text-sm">② Turnkey MPC — walits 채택 방식</p>
                    <p className="text-xs text-blue-200">키를 쪼개서 유저 기기 + Turnkey TEE에 분산 보관</p>
                  </div>
                  <span className="ml-auto bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">walits 선택</span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Turnkey는 MPC(Multi-Party Computation) 기반 키 관리 인프라다. 개인키를 생성하지 않는다. 대신 키를 수학적으로 분할(Secret Sharing)해 유저 기기(50%)와 Turnkey TEE(50%)에 나눠 보관한다. 서명 시 두 조각이 협력해 완전한 서명을 만들지만, 어느 쪽도 단독으로 키를 복원할 수 없다.
                  </p>
                  <div className="bg-slate-900 rounded-xl p-5 mb-4">
                    <p className="text-slate-400 text-xs font-bold mb-4">Turnkey MPC 서명 흐름</p>
                    <div className="space-y-2 text-xs">
                      {[
                        { step: '1', actor: '유저 앱', desc: 'Turnkey API에 서명 요청 (tx_hash, wallet_id)', color: 'text-blue-400' },
                        { step: '2', actor: 'Turnkey TEE', desc: '정책 엔진 검증 (허용된 컨트랙트·금액 확인)', color: 'text-yellow-400' },
                        { step: '3', actor: '유저 기기', desc: '기기 키 조각으로 MPC 서명 참여 (생체인증 트리거)', color: 'text-green-400' },
                        { step: '4', actor: 'Turnkey TEE', desc: 'TEE 키 조각으로 MPC 서명 완성 → 완전한 서명 반환', color: 'text-indigo-400' },
                        { step: '5', actor: '유저 앱', desc: '서명된 트랜잭션 브로드캐스트', color: 'text-slate-300' },
                      ].map(({ step, actor, desc, color }) => (
                        <div key={step} className="flex gap-3 items-start">
                          <span className="bg-slate-700 text-white rounded w-5 h-5 flex items-center justify-center shrink-0 text-[10px] font-bold">{step}</span>
                          <span className="text-slate-500 w-20 shrink-0">{actor}</span>
                          <span className={color}>{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-3">
                      <p className="font-bold text-green-700 dark:text-green-400 mb-1">장점</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• 소셜 로그인(Google·Apple)으로 지갑 생성</li>
                        <li>• 시드 없음 → 유저 키 분실 리스크 없음</li>
                        <li>• Policy Engine으로 AI 에이전트 권한 제어</li>
                        <li>• SOC2 Type II 인증, TEE 보안</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-3">
                      <p className="font-bold text-orange-700 dark:text-orange-400 mb-1">고려사항</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• Turnkey 서비스 의존성 존재</li>
                        <li>• API 비용 (서명 건당 과금)</li>
                        <li>• 완전 탈중앙은 아님</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coinbase CDP */}
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl overflow-hidden">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 flex items-center gap-3">
                  <span className="text-xl">🔵</span>
                  <div>
                    <p className="font-bold text-sm text-blue-800 dark:text-blue-200">③ Coinbase CDP / Smart Wallet</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">ERC-4337 기반 스마트 컨트랙트 지갑, Base 체인 네이티브</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Coinbase Developer Platform(CDP)은 ERC-4337 Account Abstraction 기반 스마트 지갑을 제공한다. EOA(Externally Owned Account)가 아닌 스마트 컨트랙트 계정이라 배치 트랜잭션, 가스리스(스폰서), 소셜 로그인이 기본 지원된다. Base 체인에서 특히 강력하며 Coinbase 온램프와 깊이 통합된다.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-3">
                      <p className="font-bold text-green-700 dark:text-green-400 mb-1">장점</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• 가스비 스폰서 (유저가 ETH 불필요)</li>
                        <li>• Coinbase 온램프 원클릭 연동</li>
                        <li>• Base 에코시스템 최적화</li>
                        <li>• SDK 성숙도 높음</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-3">
                      <p className="font-bold text-red-700 dark:text-red-400 mb-1">단점</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• Base 체인 외 지원 제한적</li>
                        <li>• Coinbase 생태계 락인</li>
                        <li>• 규제 변화에 취약</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 자체 MPC */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 flex items-center gap-3">
                  <span className="text-xl">🏗️</span>
                  <div>
                    <p className="font-bold text-sm">④ 자체 MPC 인프라 (직접 구축)</p>
                    <p className="text-xs text-gray-500">GG18/GG20 or CGGMP21 프로토콜 직접 운영</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Fireblocks·Qredo 같은 기업용 MPC 인프라를 직접 구현하거나, 오픈소스 MPC 라이브러리(tss-lib, multi-party-ecdsa)를 사용해 직접 운영한다. 완전한 제어권을 가지지만 암호학적 전문성과 보안 감사 비용이 크다.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3 text-xs text-amber-800 dark:text-amber-200">
                    스타트업 초기에는 권장하지 않는다. 보안 감사, 고가용성 인프라, 암호학 전문가 채용 비용이 수억 원 이상 든다. 규모가 커진 후 점진적 이전이 현실적이다.
                  </div>
                </div>
              </div>

              {/* Circle Programmable */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 flex items-center gap-3">
                  <span className="text-xl">⭕</span>
                  <div>
                    <p className="font-bold text-sm">⑤ Circle Programmable Wallets</p>
                    <p className="text-xs text-gray-500">Circle이 키 관리 전담 — API로 지갑 생성</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Circle이 제공하는 Programmable Wallets API를 통해 백엔드에서 한 줄로 지갑을 생성할 수 있다. USDC 중심 서비스에는 자연스러운 선택이지만, Circle이 키를 관리하는 "Custodial" 구조라 규제 환경에 따라 자금 동결·압류 리스크가 존재한다.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300">
                    <p className="text-slate-500 mb-2">// Circle API로 지갑 생성 (1줄)</p>
                    <p><span className="text-blue-400">POST</span> /v1/w3s/wallets</p>
                    <p className="text-slate-400">{'{ "blockchain": "ETH", "accountType": "SCA" }'}</p>
                    <p className="text-green-400 mt-2">→ walletId, address 즉시 반환</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 결론 박스 */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 my-8 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">walits의 선택 — Turnkey MPC + ERC-4337 Smart Wallet</p>
              <p className="text-sm leading-relaxed mb-4">
                개인 소비자 서비스의 핵심은 <strong>시드 없이 소셜 로그인으로 지갑을 만들고, AI 에이전트에게 제한된 권한을 위임할 수 있는 것</strong>이다. Turnkey는 이 두 가지를 동시에 충족한다. Policy Engine으로 에이전트가 허용된 프로토콜에만 접근하게 제어하고, 생체인증으로 서명한다.
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { label: '로그인', val: 'Google / Apple / Email' },
                  { label: '키 구조', val: 'MPC 2-of-2 (기기 + TEE)' },
                  { label: '에이전트 권한', val: 'Policy Engine 화이트리스트' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-blue-300 text-[10px] mb-1">{item.label}</p>
                    <p className="font-bold text-sm">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · USDC 충전 방법 — 5가지 경로와 UX 설계</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              지갑이 생겼다. 이제 USDC를 채워야 한다. 유저마다 출발점이 다르다. 업비트에 원화가 있는 사람, MetaMask에 ETH가 있는 사람, 신용카드로 바로 사고 싶은 사람. 이 모든 경우를 커버하는 충전 화면이 필요하다.
            </p>

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">충전 방법 선택 화면 — 와이어프레임</p>
            <div className="bg-slate-900 rounded-2xl p-6 my-6">
              <div className="max-w-sm mx-auto">
                <p className="text-white text-sm font-bold mb-4 text-center">USDC 충전 방법 선택</p>
                <div className="space-y-2">
                  {[
                    { icon: '🏦', title: '국내 거래소에서 출금', sub: '업비트·빗썸 → USDC 직접 전송', badge: '무료', badgeColor: 'bg-green-600' },
                    { icon: '🦊', title: '다른 지갑에서 전송', sub: 'MetaMask·Phantom·다른 지갑 주소로', badge: '빠름', badgeColor: 'bg-blue-600' },
                    { icon: '💳', title: '카드/은행 온램프', sub: 'MoonPay·Transak·Stripe — 원화 직접 구매', badge: '수수료 1~2%', badgeColor: 'bg-amber-600' },
                    { icon: '🌉', title: '다른 체인에서 브릿지', sub: 'CCTP로 Ethereum·Polygon→Base 이동', badge: '고급', badgeColor: 'bg-violet-600' },
                    { icon: '📲', title: '친구에게 받기', sub: 'walits 사용자끼리 무료 전송', badge: '무료', badgeColor: 'bg-green-600' },
                  ].map((item) => (
                    <div key={item.title} className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{item.title}</p>
                        <p className="text-slate-400 text-xs">{item.sub}</p>
                      </div>
                      <span className={`${item.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap`}>{item.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 각 방법 상세 */}
            <div className="space-y-6 mb-8">

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/20 px-5 py-3">
                  <p className="font-bold text-sm text-green-800 dark:text-green-200">방법 1 — 국내 거래소에서 USDC 출금</p>
                  <p className="text-xs text-green-600 dark:text-green-400">업비트·빗썸·코인원 → USDC 직출금 (수수료 최소)</p>
                </div>
                <div className="p-5 text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <p>원화 → 거래소에서 USDC 매수 → 출금. 가장 저렴하고 직접적인 방법이다. 단, 거래소마다 USDC 지원 체인이 다르므로 유저에게 명확히 안내해야 한다.</p>
                  <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300">
                    <p className="text-slate-500 mb-3">// walits 수신 화면 UX 흐름</p>
                    {[
                      { step: '1', text: '"받기" 버튼 → 체인 선택 (Base / Ethereum / Polygon)' },
                      { step: '2', text: '선택 체인의 walits 주소 + QR 코드 표시' },
                      { step: '3', text: '거래소별 출금 가이드 링크 제공 (업비트 Base USDC 출금 방법)' },
                      { step: '4', text: '입금 감지 → 푸시 알림 → 잔고 업데이트' },
                    ].map(({ step, text }) => (
                      <div key={step} className="flex gap-3 mb-1.5">
                        <span className="bg-green-700 text-white rounded w-4 h-4 flex items-center justify-center shrink-0 text-[9px]">{step}</span>
                        <span className="text-slate-300">{text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-3 text-xs text-amber-800 dark:text-amber-200">
                    주의: 업비트는 현재 Base 체인 USDC 출금을 지원하지 않는다. Ethereum 또는 Polygon USDC를 walits에서 받은 후 내부적으로 CCTP로 Base로 이동시키는 방식이 현실적이다.
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3">
                  <p className="font-bold text-sm text-blue-800 dark:text-blue-200">방법 2 — MetaMask·다른 지갑에서 전송</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">주소 복사 or QR 스캔으로 직전송</p>
                </div>
                <div className="p-5 text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <p>이미 MetaMask나 다른 지갑에 USDC가 있는 유저용이다. walits 주소를 복사해 전송하면 된다. 체인이 일치해야 한다는 점이 유일한 주의사항이다.</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3">
                      <p className="font-bold text-blue-700 dark:text-blue-400 mb-2">walits UX</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• 체인 선택 드롭다운</li>
                        <li>• 주소 원클릭 복사</li>
                        <li>• QR 코드 풀스크린</li>
                        <li>• "MetaMask로 전송하기" 딥링크 버튼</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="font-bold text-gray-700 dark:text-gray-300 mb-2">유저 안내 포인트</p>
                      <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• "같은 체인으로 보내야 합니다"</li>
                        <li>• USDC만 지원 (ETH 보내면 안 됨)</li>
                        <li>• 예상 도착 시간 표시</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-amber-50 dark:bg-amber-900/20 px-5 py-3">
                  <p className="font-bold text-sm text-amber-800 dark:text-amber-200">방법 3 — 카드·은행 온램프 (MoonPay / Transak / Stripe)</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400">원화 카드 결제 → USDC 즉시 충전 (수수료 1~2%)</p>
                </div>
                <div className="p-5 text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <p>
                    크립토를 전혀 모르는 유저가 신용카드나 계좌이체로 바로 USDC를 살 수 있다. MoonPay·Transak·Stripe Onramp가 주요 파트너다. walits는 이들 SDK를 인앱 웹뷰로 임베드해 앱을 이탈하지 않고 충전할 수 있게 만든다.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-amber-100 dark:bg-amber-900/30">
                          {['파트너', '지원 결제', '한국 지원', '수수료', '특징'].map((h) => (
                            <th key={h} className="border border-amber-200 dark:border-amber-800 px-3 py-2 text-left text-amber-800 dark:text-amber-200">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['MoonPay', '카드·은행이체', '부분 지원', '1~4%', '가장 넓은 국가 커버리지'],
                          ['Transak', '카드·UPI·은행', '제한적', '1~2%', '낮은 수수료, B2B 친화'],
                          ['Stripe Onramp', '카드', '미지원', '1.5%', 'UX 최고, Stripe 기존 고객'],
                        ].map(([partner, payment, korea, fee, feature], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-amber-50/50 dark:bg-amber-900/10'}>
                            <td className="border border-amber-200 dark:border-amber-800 px-3 py-2 font-medium">{partner}</td>
                            <td className="border border-amber-200 dark:border-amber-800 px-3 py-2 text-gray-600 dark:text-gray-400">{payment}</td>
                            <td className="border border-amber-200 dark:border-amber-800 px-3 py-2">{korea}</td>
                            <td className="border border-amber-200 dark:border-amber-800 px-3 py-2 text-amber-700 dark:text-amber-300">{fee}</td>
                            <td className="border border-amber-200 dark:border-amber-800 px-3 py-2 text-gray-600 dark:text-gray-400">{feature}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-violet-50 dark:bg-violet-900/20 px-5 py-3">
                  <p className="font-bold text-sm text-violet-800 dark:text-violet-200">방법 4 — CCTP 크로스체인 브릿지</p>
                  <p className="text-xs text-violet-600 dark:text-violet-400">Circle CCTP로 체인 간 USDC 네이티브 이동 (Bridged USDC 아님)</p>
                </div>
                <div className="p-5 text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  <p>
                    Ethereum·Polygon·Arbitrum에 있는 USDC를 walits가 메인으로 쓰는 Base 체인으로 옮기고 싶을 때 사용한다. Circle의 CCTP(Cross-Chain Transfer Protocol)는 브릿지 계약이 아니라 Burn-and-Mint 방식으로 체인 간 이동하므로, Wrapped 토큰이 아닌 네이티브 USDC를 받는다.
                  </p>
                  <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300">
                    <p className="text-slate-500 mb-2">// CCTP Burn-and-Mint 흐름</p>
                    <div className="space-y-1.5">
                      {[
                        ['소스 체인', 'USDC.burn(amount) → MessageTransmitter 이벤트 발생'],
                        ['Circle 어테스터', '소각 증명 서명 (attestation) 발급'],
                        ['walits 백엔드', 'attestation 폴링 → 대상 체인에 제출'],
                        ['대상 체인', 'MessageTransmitter.receiveMessage() → 네이티브 USDC 민트'],
                      ].map(([actor, action], i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-violet-400 w-24 shrink-0">{actor}</span>
                          <span className="text-slate-300">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">소요 시간: 약 1~3분. 수수료: 소스 체인 가스비만. walits는 이 과정을 자동화해 유저에게는 "Ethereum USDC → Base USDC 이동" 버튼 하나로 보여준다.</p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/20 px-5 py-3">
                  <p className="font-bold text-sm text-green-800 dark:text-green-200">방법 5 — walits 사용자끼리 P2P 송금 (무료)</p>
                  <p className="text-xs text-green-600 dark:text-green-400">전화번호·닉네임으로 즉시 전송, 가스비 없음</p>
                </div>
                <div className="p-5 text-sm text-gray-700 dark:text-gray-300">
                  <p>walits 유저끼리는 이름이나 전화번호로 USDC를 주고받을 수 있다. 같은 백엔드 인프라를 공유하면 가스비 없이 즉시 처리된다. 카카오페이처럼 쓰되 달러로. 초기 USDC 유입 경로로 매우 중요하다. "친구가 walits로 보내줬어" → 가입 유도.</p>
                </div>
              </div>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · 충전 후 — USDC가 바로 일하기 시작한다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              충전이 완료되면 walits의 차별화가 시작된다. 잔고가 대기 상태로 있으면 Idle Time 감지기가 작동해 유저에게 투자 프리셋을 제안한다. 유저가 한 번 전략을 선택하면 이후는 에이전트가 자동으로 최적 프로토콜에 배치한다.
            </p>

            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 my-6 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-5">충전 후 자동 흐름</p>
              <div className="space-y-3 text-sm">
                {[
                  { step: '01', title: 'USDC 수신 감지', desc: '입금 트랜잭션 확인 → 잔고 업데이트 → 푸시 알림', color: 'bg-blue-800/50 border-blue-700' },
                  { step: '02', title: 'Idle Time 감지기 활성화', desc: '5분 이상 미운용 잔고 감지 → 투자 프리셋 제안 토스트 표시', color: 'bg-indigo-800/50 border-indigo-700' },
                  { step: '03', title: '유저 전략 선택 (1회)', desc: '오렌지(4-5%) / 애플(6-8%) / 칠리(10-12%) — 한 번만 선택', color: 'bg-violet-800/50 border-violet-700' },
                  { step: '04', title: 'AI 에이전트 배치 실행', desc: 'Policy Engine 검증 → Turnkey 서명 → Aave·Morpho·Ondo에 자동 예치', color: 'bg-purple-800/50 border-purple-700' },
                  { step: '05', title: '이자 실시간 누적', desc: '매 블록 수익 발생 → 홈 화면에서 실시간 확인', color: 'bg-green-800/50 border-green-700' },
                ].map((item) => (
                  <div key={item.step} className={`border rounded-lg px-4 py-3 ${item.color} flex items-start gap-3`}>
                    <span className="bg-white/20 rounded text-xs font-bold px-1.5 py-0.5 shrink-0">{item.step}</span>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 마무리 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mt-10">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">핵심 요약</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700 dark:text-gray-300">
                {[
                  { title: '지갑 기술', content: 'Turnkey MPC — 소셜 로그인으로 키 없이 지갑 생성, Policy Engine으로 에이전트 권한 제어' },
                  { title: 'UX 원칙', content: '달러 기준 잔고, 운용/대기 분리, 에이전트 활동 피드 — 5초 안에 내 돈 상태 파악' },
                  { title: '충전 경로', content: '거래소 출금 / MetaMask / 카드 온램프 / CCTP 브릿지 / P2P — 유저 출발점에 맞게 5가지 제공' },
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-gray-900 rounded-xl p-4">
                    <p className="font-bold text-blue-700 dark:text-blue-400 mb-1">{item.title}</p>
                    <p className="leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ───── EN ───── */}
        {language === 'en' && (
          <div className="prose prose-lg max-w-none">

            {/* Intro */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-10">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">What this guide covers</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700 dark:text-gray-300">
                {[
                  { icon: '📱', title: 'Post-login UI/UX', desc: 'Home screen layout, PayFi presets, transaction feed, agent — what users see the moment they log in' },
                  { icon: '🔑', title: 'Wallet tech stack', desc: 'HD Wallet · self-hosted MPC · Coinbase CDP · Turnkey · Circle Programmable — which to choose and why' },
                  { icon: '💵', title: 'Funding with USDC', desc: 'Exchange withdrawal · MetaMask · on-ramp · CCTP cross-chain — UX design for each path' },
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-gray-900 rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Why a dedicated personal USDC wallet</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Generic crypto wallets support dozens of tokens and call themselves "asset management tools." But most real-world use cases reduce to one thing: <strong>hold dollar value, send money, earn yield.</strong> Walits stays focused on that. One asset (USDC), done right.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                { title: 'Generic crypto wallets', items: ['Dozens of tokens → decision paralysis', 'Price volatility → dollar value not preserved', 'No yield features → balance just sits idle', 'High UX complexity → high entry barrier'], color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10', label: 'bg-red-100 text-red-700' },
                { title: 'Walits personal wallet', items: ['Single USDC asset → intuitive dollar balance', 'Balance earns 24/7 (PayFi)', 'Agent auto-allocates to best protocol', 'On-ramp / off-ramp one-click'], color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10', label: 'bg-blue-100 text-blue-700' },
              ].map((col) => (
                <div key={col.title} className={`border rounded-xl p-5 ${col.color}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded inline-block mb-3 ${col.label}`}>{col.title}</span>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {col.items.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-0.5">•</span>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Post-login UI/UX — what should the user see</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A user who just logged in should understand one thing within 5 seconds: "How much USDC do I have, and what is it doing right now?" Every screen is designed around that question.
            </p>

            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Screen design principles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  screen: 'Home screen',
                  color: 'border-blue-200 dark:border-blue-800',
                  badge: 'bg-blue-100 text-blue-700',
                  points: [
                    'Show balance in dollars ($) — dollar value first, not USDC quantity',
                    'Split "working" vs "idle" — transparent visibility into what is earning',
                    'Today\'s yield in real time — "my money is working right now" feeling',
                    '4 quick actions (Receive · Send · Fund · Settings) — shortest critical path',
                  ],
                },
                {
                  screen: 'PayFi invest tab',
                  color: 'border-indigo-200 dark:border-indigo-800',
                  badge: 'bg-indigo-100 text-indigo-700',
                  points: [
                    '3 preset cards (Orange·Apple·Chili) — APY, risk level, protocol shown',
                    'Active strategy highlighted + live APY refresh',
                    'Agent auto/manual mode toggle',
                    'Yield history chart (day/week/month)',
                  ],
                },
                {
                  screen: 'Send / Receive',
                  color: 'border-green-200 dark:border-green-800',
                  badge: 'bg-green-100 text-green-700',
                  points: [
                    'Receive: QR code + copy address + chain selector (Ethereum·Base·Polygon·Solana)',
                    'Send: address or name search, enter $ amount → USDC auto-converted',
                    'Fee preview — gas comparison across chains',
                    'Favorite recipients saved',
                  ],
                },
                {
                  screen: 'Fund tab',
                  color: 'border-amber-200 dark:border-amber-800',
                  badge: 'bg-amber-100 text-amber-700',
                  points: [
                    'Method selection card UI — exchange · card · other wallet · CCTP',
                    'Estimated time + fee shown per method',
                    'On-ramp partners (MoonPay·Transak·Stripe) one-click embed',
                    'Exchange-specific withdrawal guides (Coinbase·Binance)',
                  ],
                },
              ].map((item) => (
                <div key={item.screen} className={`border rounded-xl p-4 ${item.color}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded inline-block mb-3 ${item.badge}`}>{item.screen}</span>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {item.points.map((p) => <li key={p} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 shrink-0">✓</span>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Wallet tech — which approach is right</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The moment a user signs up, an on-chain address that can hold USDC must be created. How that address is generated, who holds the key, and how transactions are signed determines the service's security, UX, and regulatory exposure. Five approaches compared.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    {['Approach', 'Key custody', 'UX friction', 'Security', 'Reg risk', 'Best for'].map((h) => (
                      <th key={h} className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['HD Wallet (MetaMask-style)', 'User 100%', 'High (seed phrase)', 'Highest', 'Low', 'Crypto-native power users'],
                    ['Self-hosted MPC', 'User + server split', 'Low', 'High', 'Medium', 'Teams prioritizing independence'],
                    ['Turnkey MPC', 'User + Turnkey TEE', 'Very low', 'High', 'Low', 'B2C startups (recommended)'],
                    ['Coinbase CDP / Smart Wallet', 'User + Coinbase', 'Very low', 'High', 'Low', 'Base-first services'],
                    ['Circle Programmable Wallets', 'Circle-managed', 'Lowest', 'Medium', 'High (custody risk)', 'Enterprise B2B'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-slate-50 dark:bg-slate-800/30'}>
                      {row.map((cell, j) => (
                        <td key={j} className={`border border-slate-200 dark:border-slate-700 px-3 py-2 ${j === 0 ? 'font-medium' : ''} ${j === 5 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Turnkey highlight EN */}
            <div className="border-2 border-blue-300 dark:border-blue-700 rounded-xl overflow-hidden mb-6">
              <div className="bg-blue-600 text-white px-5 py-3 flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <p className="font-bold text-sm">Turnkey MPC — walits choice</p>
                  <p className="text-xs text-blue-200">Split key: user device (50%) + Turnkey TEE (50%)</p>
                </div>
                <span className="ml-auto bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">walits pick</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Turnkey never generates a private key. Instead it mathematically splits the key (Secret Sharing) between the user's device (50%) and a Turnkey TEE enclave (50%). Signing requires both halves to cooperate — but neither half alone can reconstruct the key.
                </p>
                <div className="bg-slate-900 rounded-xl p-5 mb-4">
                  <p className="text-slate-400 text-xs font-bold mb-4">Turnkey MPC signing flow</p>
                  <div className="space-y-2 text-xs font-mono">
                    {[
                      ['1', 'User app', 'Turnkey API sign request (tx_hash, wallet_id)', 'text-blue-400'],
                      ['2', 'Turnkey TEE', 'Policy engine check (allowed contracts · amount limits)', 'text-yellow-400'],
                      ['3', 'User device', 'Device key shard participates in MPC signing (biometric auth)', 'text-green-400'],
                      ['4', 'Turnkey TEE', 'TEE key shard completes MPC signature → full signature returned', 'text-indigo-400'],
                      ['5', 'User app', 'Broadcast signed transaction', 'text-slate-300'],
                    ].map(([step, actor, desc, color]) => (
                      <div key={step} className="flex gap-3 items-start">
                        <span className="bg-slate-700 text-white rounded w-5 h-5 flex items-center justify-center shrink-0 text-[10px] font-bold font-sans">{step}</span>
                        <span className="text-slate-500 w-24 shrink-0 font-sans">{actor}</span>
                        <span className={color}>{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-4 text-white text-xs">
                  <p className="font-bold mb-2">Why Turnkey for a consumer USDC wallet</p>
                  <ul className="space-y-1 text-blue-200">
                    <li>• Social login (Google / Apple / Email) → wallet created, no seed phrase shown</li>
                    <li>• Policy Engine → AI agent gets a whitelist: only allowed contracts, only USDC, amount caps</li>
                    <li>• SOC2 Type II certified, TEE hardware isolation</li>
                    <li>• No key recovery headaches — user can always re-auth via social login</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Funding with USDC — 5 paths and UX design</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Users arrive from different starting points. Some have USDC on Coinbase. Some have ETH in MetaMask. Some want to buy with a credit card. Some have USDC on Polygon but want it on Base. All of these need a clean UX path.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: '🏦',
                  title: 'Path 1 — Withdraw USDC from a crypto exchange',
                  sub: 'Coinbase · Binance · Kraken → direct USDC withdrawal',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  body: 'Buy USDC on any exchange, then withdraw to your walits address. Cheapest method — only exchange withdrawal fee. UX: "Receive" button → chain selector → QR code + address copy → exchange-specific withdrawal guide.',
                },
                {
                  icon: '🦊',
                  title: 'Path 2 — Transfer from MetaMask or another wallet',
                  sub: 'Copy walits address → send USDC (chain must match)',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  body: 'For users who already hold USDC in MetaMask, Phantom, or any other wallet. walits shows the address for each supported chain. Key UX guidance: "Send on the same chain" and "USDC only — don\'t send ETH to this address."',
                },
                {
                  icon: '💳',
                  title: 'Path 3 — Card / bank on-ramp (MoonPay / Transak / Stripe)',
                  sub: 'Pay with credit card → receive USDC instantly (1–2% fee)',
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10',
                  body: 'For users who have no crypto at all. MoonPay, Transak, or Stripe Onramp SDKs are embedded as an in-app webview — the user never leaves the app. Show fee and estimated arrival time clearly before confirming.',
                },
                {
                  icon: '🌉',
                  title: 'Path 4 — Cross-chain bridge via Circle CCTP',
                  sub: 'Move USDC from Ethereum · Polygon · Arbitrum → Base natively',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  body: 'Circle\'s Cross-Chain Transfer Protocol burns USDC on the source chain and mints native USDC on the destination — no wrapped token. Walits automates the attestation polling step so users just press "Move to Base" and wait ~2 minutes.',
                },
                {
                  icon: '📲',
                  title: 'Path 5 — P2P from another walits user (free)',
                  sub: 'Send by name or phone number — instant, zero fee',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  body: 'Walits-to-walits transfers share the same backend infrastructure, so they can be settled instantly with no gas. Works like Venmo, but in dollars. Also a powerful viral acquisition loop — "my friend sent me walits USDC, so I signed up."',
                },
              ].map((path) => (
                <div key={path.title} className={`border rounded-xl overflow-hidden ${path.color}`}>
                  <div className="px-5 py-3 flex items-center gap-3">
                    <span className="text-2xl">{path.icon}</span>
                    <div>
                      <p className="font-bold text-sm">{path.title}</p>
                      <p className="text-xs text-gray-500">{path.sub}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">{path.body}</div>
                </div>
              ))}
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · After funding — USDC starts working immediately</h2>
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 my-6 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-5">Automatic flow after deposit</p>
              <div className="space-y-3 text-sm">
                {[
                  { step: '01', title: 'Deposit detected', desc: 'Inbound transaction confirmed → balance updated → push notification', color: 'bg-blue-800/50 border-blue-700' },
                  { step: '02', title: 'Idle time detector activates', desc: 'Balance idle > 5 min → investment preset suggestion toast appears', color: 'bg-indigo-800/50 border-indigo-700' },
                  { step: '03', title: 'User picks strategy (once)', desc: 'Orange (4–5%) / Apple (6–8%) / Chili (10–12%) — set once, runs forever', color: 'bg-violet-800/50 border-violet-700' },
                  { step: '04', title: 'AI agent executes allocation', desc: 'Policy Engine validates → Turnkey signs → auto-deposited into Aave/Morpho/Ondo', color: 'bg-purple-800/50 border-purple-700' },
                  { step: '05', title: 'Yield accrues in real time', desc: 'Revenue every block → visible on home screen live counter', color: 'bg-green-800/50 border-green-700' },
                ].map((item) => (
                  <div key={item.step} className={`border rounded-lg px-4 py-3 ${item.color} flex items-start gap-3`}>
                    <span className="bg-white/20 rounded text-xs font-bold px-1.5 py-0.5 shrink-0">{item.step}</span>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary EN */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mt-10">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">Key takeaways</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700 dark:text-gray-300">
                {[
                  { title: 'Wallet tech', content: 'Turnkey MPC — social login creates the wallet with no seed phrase. Policy Engine controls what the AI agent can and cannot do.' },
                  { title: 'UX principle', content: 'Dollar balance, working/idle split, agent activity feed — understand your money\'s status within 5 seconds of opening the app.' },
                  { title: 'Funding paths', content: 'Exchange withdrawal / MetaMask / card on-ramp / CCTP bridge / P2P — meet users wherever their USDC already lives.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-gray-900 rounded-xl p-4">
                    <p className="font-bold text-blue-700 dark:text-blue-400 mb-1">{item.title}</p>
                    <p className="leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
