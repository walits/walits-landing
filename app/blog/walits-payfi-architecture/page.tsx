'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WalitsPayfiArchitecturePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/blog" className="text-blue-300 hover:text-white text-sm transition-colors">
            {language === 'ko' ? '← 블로그' : '← Blog'}
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('ko')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-white text-slate-900' : 'text-white/60 hover:text-white'}`}
            >
              한국어
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-slate-900' : 'text-white/60 hover:text-white'}`}
            >
              English
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-12 pt-4">
          <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {language === 'ko' ? 'walits 아키텍처' : 'Walits Architecture'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {language === 'ko'
              ? 'walits — PayFi + AI 에이전트 통합 아키텍처'
              : 'walits — PayFi + AI Agent Integrated Architecture'}
          </h1>
          <p className="text-blue-200 text-lg mb-6">
            {language === 'ko'
              ? '돈이 이동하거나 대기하는 모든 순간, 수익이 발생하는 지갑'
              : 'A wallet where every idle moment becomes a yield opportunity'}
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>{language === 'ko' ? '2026년 4월 5일' : 'April 5, 2026'}</span>
            <span>·</span>
            <span>{language === 'ko' ? '25분 읽기' : '25 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/walits_payfi.jpg" alt="walits PayFi + AI Agent Architecture" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {language === 'ko' ? (
          <>
            {/* KO — Intro */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
              <p className="text-blue-900 text-lg leading-relaxed">
                기존 지갑들이 <strong>"보내고 받는"</strong> 도구라면,<br />
                walits는 <strong>"잔고가 24시간 알아서 일하는"</strong> 지갑이다.<br />
                돈이 이동하거나 대기하는 모든 순간이 수익 기회다.
              </p>
            </div>

            {/* 섹션 1: 전체 구조 */}
            <h2 className="text-2xl font-black text-slate-900 mb-6">1. 전체 구조</h2>

            {/* Architecture Flow */}
            <div className="bg-slate-900 rounded-2xl p-6 mb-6">
              <div className="space-y-0">
                {[
                  { label: '유저 — Next.js 프론트엔드', sub: '"USDC 놀리지 마" / "거래처 정산해줘" / "RWA 사줘"', color: 'bg-blue-500' },
                  { label: 'AI Agent 레이어 — Claude + LangChain', sub: '의도 파악 → PayFi 전략 결정 → 툴 선택 → 실행 계획', color: 'bg-violet-500' },
                  { label: 'AgentKit + PayFi 툴 레이어', sub: '기본 온체인 툴 + PayFi 커스텀 툴 (yield, 정산, RWA, 공급망)', color: 'bg-indigo-500' },
                  { label: '정책 엔진 + Idle Time 감지기', sub: '지출 정책 체크 + 놀고 있는 자금 감지 → 자동 예치 트리거', color: 'bg-sky-500' },
                  { label: 'walits 자체 MPC', sub: '키 관리 + 서명 (외부 의존 없음, 2-of-3 분산 보관)', color: 'bg-teal-500' },
                  { label: 'PayFi 프로토콜 레이어', sub: 'Aave · Morpho · Ondo USDY · Huma Finance · Circle CCTP', color: 'bg-emerald-500' },
                  { label: '블록체인 — ETH / Base / SOL', sub: '', color: 'bg-green-500' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-full ${item.color} rounded-xl px-4 py-3`}>
                      <div className="text-white font-bold text-sm">{item.label}</div>
                      {item.sub && <div className="text-white/70 text-xs mt-1">{item.sub}</div>}
                    </div>
                    {i < 6 && <div className="text-slate-500 text-lg py-1">↓</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* 기존 지갑 비교 */}
            <h3 className="text-lg font-bold text-slate-800 mb-4">기존 지갑과의 차별화</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">기능</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">MetaMask</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Rainbow</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Rabby</th>
                    <th className="border border-slate-200 px-3 py-2 text-center font-bold text-blue-700">walits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['잔고 보관', '✅', '✅', '✅', '✅'],
                    ['예쁜 UI', '—', '✅', '—', '✅'],
                    ['보안 시뮬레이션', '—', '—', '✅', '✅'],
                    ['Idle Time 제거', '❌', '❌', '❌', '✅'],
                    ['RWA 통합', '❌', '❌', '❌', '✅'],
                    ['AI 자동 투자', '❌', '❌', '❌', '✅'],
                    ['PayFi 즉시 정산', '❌', '❌', '❌', '✅'],
                  ].map(([feature, m, r, rb, w], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-200 px-3 py-2 font-medium">{feature}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{m}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{r}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{rb}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center font-bold text-blue-700">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 섹션 2: AI Agent */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. AI Agent 레이어 — Claude + LangChain</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              walits의 두뇌는 Claude(Anthropic)다. 유저가 자연어로 명령을 내리면 Claude가 의도를 파악하고,
              AgentKit과 PayFi 커스텀 툴 중 적합한 것을 골라 실행 계획을 세운다. 유저는 DeFi 지식 없이도
              <strong> "USDC 놀리지 마"</strong> 한 마디로 최적 예치가 일어난다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { step: '1', title: '자연어 파싱', desc: '"USDC 잔고 보여줘" → get_balance 툴이 필요하다고 판단', color: 'bg-violet-50 border-violet-200' },
                { step: '2', title: '툴 선택 + 파라미터 구성', desc: '상황에 맞는 툴과 인자를 자동으로 조합', color: 'bg-blue-50 border-blue-200' },
                { step: '3', title: '결과 해석 + 응답 생성', desc: '"현재 USDC 잔고는 250 USDC입니다 ✅" 형태로 유저에게 전달', color: 'bg-indigo-50 border-indigo-200' },
              ].map((item) => (
                <div key={item.step} className={`border rounded-xl p-4 ${item.color}`}>
                  <div className="text-xs font-bold text-slate-500 mb-1">STEP {item.step}</div>
                  <div className="font-bold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* 섹션 3: 정책 엔진 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. 정책 엔진 — 자율 실행의 안전장치</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              AI가 자율적으로 트랜잭션을 실행하는 만큼, 반드시 안전장치가 필요하다. walits의 정책 엔진은
              모든 트랜잭션이 실행되기 전에 유저가 사전에 설정한 규칙을 검증한다.
              Coinbase Agentic Wallet의 정책 기능을 직접 구현해 Coinbase 의존 없이 운영된다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: '💰', title: '1회 한도', desc: '1회 최대 송금 금액 제한' },
                { icon: '📅', title: '일일 한도', desc: '하루 총 거래 상한선' },
                { icon: '🪙', title: '허용 토큰', desc: 'USDC만, 또는 ETH 포함 등' },
                { icon: '🔒', title: '허용 컨트랙트', desc: 'Aave, Ondo 등 화이트리스트' },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-bold text-green-800 mb-2">🛡️ 안전형 정책</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 1회 최대 $50</li>
                  <li>• 일일 한도 $200</li>
                  <li>• USDC만 허용</li>
                  <li>• Aave, Morpho만 허용</li>
                  <li>• 자동 예치 비활성화</li>
                  <li>• 최소 $100 항상 유지</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="font-bold text-red-800 mb-2">⚡ 적극형 정책</div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 1회 최대 $5,000</li>
                  <li>• 일일 한도 $20,000</li>
                  <li>• USDC, ETH, SOL 허용</li>
                  <li>• Aave, Ondo, Huma 허용</li>
                  <li>• 자동 예치 활성화</li>
                  <li>• 최소 $50 유지</li>
                </ul>
              </div>
            </div>

            {/* 섹션 4: MPC */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. MPC 키 관리 — walits 자체 인프라</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              walits는 외부 서비스에 의존하지 않고 <strong>자체 MPC 인프라</strong>를 직접 구축·운영한다 (Rust, CGGMP24 + FROST 프로토콜).
              키를 3개 조각으로 나눠 서버·브라우저·백업에 분산 보관하는 <strong>2-of-3 threshold</strong> 구조로,
              서버가 해킹당해도 단독 서명이 불가능하고, 기기를 분실해도 백업 조각으로 복구할 수 있다.
              소셜 로그인(Google/Apple)은 인증 레이어로만 동작하며, MPC 키 관리와 완전히 결합된다.
            </p>
            <div className="bg-slate-900 rounded-xl p-5 mb-6">
              <div className="flex items-center justify-center gap-3 flex-wrap text-center">
                <div className="bg-blue-600 rounded-lg px-4 py-3 text-white">
                  <div className="text-xs text-blue-200">Party 0 — walits 서버</div>
                  <div className="font-bold text-sm">서버 키 조각</div>
                  <div className="text-xs text-blue-300 mt-1">항상 온라인</div>
                </div>
                <div className="text-slate-400 text-xl font-bold">+</div>
                <div className="bg-green-600 rounded-lg px-4 py-3 text-white">
                  <div className="text-xs text-green-200">Party 1 — 브라우저 WASM</div>
                  <div className="font-bold text-sm">고객 키 조각</div>
                  <div className="text-xs text-green-300 mt-1">IndexedDB 저장</div>
                </div>
                <div className="text-slate-400 text-xl font-bold">→</div>
                <div className="bg-teal-600 rounded-lg px-4 py-3 text-white">
                  <div className="text-xs text-teal-200">2-of-3 규칙</div>
                  <div className="font-bold text-sm">서명 완성</div>
                  <div className="text-xs text-teal-300 mt-1">단독 서명 불가</div>
                </div>
              </div>
              <div className="mt-3 text-center text-xs text-slate-500">Party 2 (백업 조각) — 기기 분실 시 복구용, 평소 잠금</div>
            </div>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">항목</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">CDP Smart Wallet</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Viem (직접)</th>
                    <th className="border border-slate-200 px-3 py-2 text-center font-bold text-teal-700">walits 자체 MPC (채택)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['키 위치', 'Coinbase 서버', '서버 .env', '2-of-3 분산 (서버+브라우저+백업)'],
                    ['외부 의존', '❌ Coinbase', '✅ 없음', '✅ 없음'],
                    ['멀티 유저', '△', '❌', '✅'],
                    ['소셜 로그인', '✅', '❌', '✅ (OAuth + MPC 결합)'],
                    ['보안', '중간', '낮음', '높음'],
                  ].map(([item, a, b, c], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-200 px-3 py-2 font-medium">{item}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{a}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{b}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center font-bold text-teal-700">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 섹션 5: Idle Time 감지기 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Idle Time 감지기 — PayFi의 심장</h2>
            <div className="bg-blue-600 text-white rounded-2xl p-5 mb-6">
              <div className="text-lg font-bold mb-2">핵심 철학</div>
              <div className="text-blue-100">돈이 대기하는 모든 순간 = 수익 기회</div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              Idle Time 감지기는 유저의 잔고 변화를 실시간으로 감지한다. 입금이 발생하면 즉시 최소 유지금액을
              제외한 나머지를 분석해, <strong>다음 지출까지의 시간</strong>에 맞는 최적 프로토콜을 선택해
              AI 에이전트에게 예치 지시를 내린다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { time: '24시간 미만', protocol: 'Aave', reason: '즉시 출금 가능', apy: '5.1%', color: 'bg-green-50 border-green-300' },
                { time: '1~7일', protocol: 'Morpho', reason: '단기 최적', apy: '5.6%', color: 'bg-blue-50 border-blue-300' },
                { time: '7일 이상', protocol: 'Ondo USDY', reason: '국채 기반 안정', apy: '5.0%', color: 'bg-amber-50 border-amber-300' },
              ].map((item) => (
                <div key={item.protocol} className={`border-2 rounded-xl p-4 text-center ${item.color}`}>
                  <div className="text-xs font-bold text-slate-500 mb-2">{item.time}</div>
                  <div className="text-xl font-black text-slate-900 mb-1">{item.protocol}</div>
                  <div className="text-sm text-slate-600 mb-2">{item.reason}</div>
                  <div className="inline-block bg-white border border-slate-200 rounded-full px-3 py-1 text-sm font-bold text-green-700">
                    APY {item.apy}
                  </div>
                </div>
              ))}
            </div>

            {/* 섹션 6: PayFi 툴 세트 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. PayFi 커스텀 툴 세트</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              AgentKit의 기본 온체인 툴에 walits만의 PayFi 전용 툴을 추가해 AI가 금융 자동화를 실행할 수 있다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                {
                  name: 'APY 스캐너',
                  emoji: '📊',
                  desc: 'Aave, Morpho, Ondo USDY, Huma Finance 등 주요 프로토콜의 수익률을 실시간 비교. 잠금 기간을 고려해 최적 프로토콜을 추천한다.',
                  color: 'bg-violet-50 border-violet-200',
                },
                {
                  name: '즉시 정산 툴',
                  emoji: '⚡',
                  desc: 'Base / Solana에서 2초 안에 USDC 즉시 전송. SWIFT 2~5일 대기, $30+ 수수료 없음. 해외 B2B 결제를 온체인으로 대체한다.',
                  color: 'bg-blue-50 border-blue-200',
                },
                {
                  name: 'ENPL 계산기',
                  emoji: '📅',
                  desc: 'Earn Now Pay Later. 원금을 예치해 매달 발생하는 이자로 구독료를 자동 결제. 필요 원금과 커버리지 비율을 자동 계산한다.',
                  color: 'bg-emerald-50 border-emerald-200',
                },
                {
                  name: 'RWA 브라우저',
                  emoji: '🏛️',
                  desc: 'Ondo USDY(5.1%), BlackRock BUIDL(4.5%), Maple Finance(9.2%), Huma Finance(11.0%) 등 RWA 상품을 한눈에 비교하고 매수할 수 있다.',
                  color: 'bg-amber-50 border-amber-200',
                },
              ].map((tool) => (
                <div key={tool.name} className={`border rounded-xl p-5 ${tool.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{tool.emoji}</span>
                    <span className="font-bold text-slate-900">{tool.name}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>

            {/* 섹션 7: 5가지 에이전트 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">7. 5가지 PayFi 에이전트</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              walits는 5가지 특화 에이전트를 내장한다. 각 에이전트는 유저의 상황과 요청에 따라 자동으로 활성화된다.
            </p>

            {[
              {
                name: 'Treasury Agent',
                tag: 'B2B 자율 재무',
                emoji: '🏢',
                color: 'bg-blue-600',
                scenario: '유저: "다음주 거래처 $5,000 결제 있어. 그전까지 굴려줘"',
                steps: [
                  'APY 스캔(6일 락업) → Ondo USDY 5.0% 추천',
                  '$5,000 Ondo 예치',
                  'D-1시간 자동 회수 예약',
                  '거래처에 즉시 정산 (2초)',
                ],
                result: '6일 이자 $4.1 + SWIFT 수수료 $0',
              },
              {
                name: 'Idle Money Agent',
                tag: '개인 자동 예치',
                emoji: '💤',
                color: 'bg-violet-600',
                scenario: '[자동 실행 — 유저 명령 없음] 잔고 500 USDC 입금 감지',
                steps: [
                  'APY 스캔 → Morpho 5.6% 최고',
                  '$450 예치 (여유분 $50 유지)',
                  '알림: "이번 달 이자 $2.1 ☕ 커피 4잔 값"',
                ],
                result: '입금 즉시 이자 발생, 유저 개입 없음',
              },
              {
                name: 'Payroll Agent',
                tag: '글로벌 급여 자동화',
                emoji: '👥',
                color: 'bg-teal-600',
                scenario: '"팀원 3명 급여 $3,000. 급여일까지 굴리고 자동 지급해줘."',
                steps: [
                  '7일 전 Aave 예치 → 이자 $3.2 회사 수익',
                  '급여일 09:00 자동 3명 동시 전송',
                  '한국/베트남/미국 각자 오프램프 라우팅',
                ],
                result: '이자 $3.2 + 즉시 정산 (2초) + 수수료 $0',
              },
              {
                name: 'ENPL Agent',
                tag: '구독료 자동화',
                emoji: '📅',
                color: 'bg-orange-600',
                scenario: '유저: "매달 구독료 $183 이자로 내고 싶어"',
                steps: [
                  'APY 5.6% 기준 → 원금 $39,107 필요',
                  '현재 $5,000 → 월 이자 $23.3 → 12.7% 충당',
                  '매월 이자 자동 인출 → 구독료 결제',
                ],
                result: '원금 보존 + 이자로 구독료 납부',
              },
              {
                name: 'RWA + PayFi Agent',
                tag: '투자 자동 관리',
                emoji: '🏛️',
                color: 'bg-emerald-600',
                scenario: '유저: "안전하면서 수익 나게 굴려줘"',
                steps: [
                  'APY 스캔: Aave 5.1%, Morpho 5.6%',
                  'RWA 조회: Ondo USDY 5.0%, Huma 11%',
                  '배분: Ondo 50% + Morpho 30% + Huma 20%',
                  '유저 승인 후 자동 실행 + 주간 리포트',
                ],
                result: '복합 수익 + 주기적 리밸런싱',
              },
            ].map((agent) => (
              <div key={agent.name} className="border border-slate-200 rounded-2xl overflow-hidden mb-4">
                <div className={`${agent.color} text-white px-5 py-3 flex items-center gap-3`}>
                  <span className="text-2xl">{agent.emoji}</span>
                  <div>
                    <div className="font-black">{agent.name}</div>
                    <div className="text-white/70 text-xs">{agent.tag}</div>
                  </div>
                </div>
                <div className="p-5 bg-slate-50">
                  <div className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 mb-4 italic">
                    {agent.scenario}
                  </div>
                  <div className="space-y-2 mb-4">
                    {agent.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-slate-400 font-bold shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-sm text-green-800 font-medium">
                    결과: {agent.result}
                  </div>
                </div>
              </div>
            ))}

            {/* 섹션 8: 투자 프리셋 */}
            <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">8. 투자 전략 프리셋 — UX의 핵심</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-amber-900 font-medium">
                일반 유저는 DeFi나 PayFi를 알 필요가 없다. 버튼 하나를 클릭하면,
                내부적으로 최적의 프롬프트와 정책이 세팅되고 AI가 알아서 실행한다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  emoji: '🍊',
                  name: '오렌지 투자',
                  apy: '연 4~5%',
                  risk: '●○○',
                  riskLabel: '안전',
                  min: '$500',
                  target: '안전 추구형',
                  strategy: '미국 국채 기반 Ondo USDY 전액 예치. 잔고 10% 여유분 항상 유지.',
                  color: 'border-orange-300 bg-orange-50',
                  header: 'bg-orange-500',
                },
                {
                  emoji: '🍎',
                  name: '애플 투자',
                  apy: '연 6~8%',
                  risk: '●●○',
                  riskLabel: '균형',
                  min: '$200',
                  target: '균형형',
                  strategy: 'Ondo 40% + Morpho 40% + Aave 20%. 주간 APY 체크 + 자동 리밸런싱.',
                  color: 'border-red-300 bg-red-50',
                  header: 'bg-red-500',
                },
                {
                  emoji: '🌶️',
                  name: '칠리 투자',
                  apy: '연 10~12%',
                  risk: '●●●',
                  riskLabel: '공격',
                  min: '$1,000',
                  target: '공격형',
                  strategy: 'Huma Finance 50% + Morpho 30% + Maple 20%. APY 1%p 초과 시 자동 이동.',
                  color: 'border-red-400 bg-red-50',
                  header: 'bg-red-700',
                },
                {
                  emoji: '💤',
                  name: '슬리핑 머니',
                  apy: 'APY 자동 최적화',
                  risk: '●○○',
                  riskLabel: '자동',
                  min: '$50',
                  target: '자동화 선호형',
                  strategy: '입금 즉시 Aave/Morpho 중 APY 높은 곳 자동 예치. 출금 시 자동 회수. 최소 15% 유동성 유지.',
                  color: 'border-slate-300 bg-slate-50',
                  header: 'bg-slate-600',
                },
                {
                  emoji: '⚡',
                  name: '빠른 정산',
                  apy: '대기 이자 + 수수료 0%',
                  risk: '●○○',
                  riskLabel: '낮음',
                  min: '$100',
                  target: 'B2B 결제형',
                  strategy: '정산 전까지 최적 프로토콜 자동 예치 → 1시간 전 자동 회수 → 2초 즉시 정산.',
                  color: 'border-yellow-300 bg-yellow-50',
                  header: 'bg-yellow-600',
                },
                {
                  emoji: '📅',
                  name: '구독 매니저',
                  apy: '구독료 절감',
                  risk: '●○○',
                  riskLabel: '낮음',
                  min: '$1,000',
                  target: '구독료 최적화형',
                  strategy: '월 구독료 입력 → 필요 원금 계산 → Morpho/Aave 예치 → 매달 이자로 자동 결제. 원금 유지.',
                  color: 'border-blue-300 bg-blue-50',
                  header: 'bg-blue-600',
                },
              ].map((preset) => (
                <div key={preset.name} className={`border-2 rounded-xl overflow-hidden ${preset.color}`}>
                  <div className={`${preset.header} text-white px-4 py-3 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{preset.emoji}</span>
                      <span className="font-black">{preset.name}</span>
                    </div>
                    <span className="text-white/80 text-xs">{preset.riskLabel} {preset.risk}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-black text-green-700">{preset.apy}</span>
                      <span className="text-xs text-slate-500">최소 {preset.min}</span>
                    </div>
                    <div className="text-xs text-slate-500 mb-2">{preset.target}</div>
                    <p className="text-sm text-slate-700">{preset.strategy}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 온보딩 UI */}
            <div className="bg-slate-900 rounded-2xl p-6 mb-10 text-white">
              <div className="text-sm text-slate-400 mb-4 font-mono">// 온보딩 화면 흐름</div>
              <div className="bg-slate-800 rounded-xl p-4 mb-4">
                <div className="text-white font-bold mb-1">내 잔고: 1,250 USDC</div>
                <div className="text-yellow-400 text-sm">현재 운용 중: 없음 (Idle!)</div>
              </div>
              <div className="text-slate-300 text-sm mb-3">어떻게 운용할까요?</div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['🍊 오렌지\n연 4~5%\n●○○', '🍎 애플\n연 6~8%\n●●○', '🌶️ 칠리\n연 10~12%\n●●●'].map((p, i) => (
                  <div key={i} className="bg-slate-700 rounded-lg p-3 text-center text-sm whitespace-pre-line text-white/80 leading-relaxed">{p}</div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['💤 자동\nIdle 제거\n●○○', '⚡ 정산\n해외송금\n●○○', '📅 구독\n료 절감\n●○○'].map((p, i) => (
                  <div key={i} className="bg-slate-700 rounded-lg p-3 text-center text-sm whitespace-pre-line text-white/80 leading-relaxed">{p}</div>
                ))}
              </div>
              <div className="text-center text-slate-400 text-sm">✏️ 직접 입력</div>
            </div>

            {/* 섹션 9: 시나리오 */}
            <h2 className="text-2xl font-black text-slate-900 mb-6">9. 실제 사용 시나리오</h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: '시나리오 A — B2B 해외 정산 (한국 IT 기업 → 미국 클라이언트)',
                  color: 'border-blue-400',
                  bg: 'bg-blue-50',
                  header: 'bg-blue-600',
                  items: [
                    { label: '상황', val: '"미국 거래처에 Net-45로 $10,000 송금해야 해. 그동안 굴려줘"' },
                    { label: '실행', val: 'APY 스캔 → Ondo USDY 5.0% / $10,000 예치 / D-44일 1시간 전 자동 회수 / 거래처 즉시 정산' },
                    { label: '결과', val: '44일 이자 $60.3 | 정산 소요 2초 (SWIFT 3~5일) | 수수료 ~$0 (SWIFT $30+)' },
                  ],
                },
                {
                  title: '시나리오 C — 프리랜서 수금',
                  color: 'border-violet-400',
                  bg: 'bg-violet-50',
                  header: 'bg-violet-600',
                  items: [
                    { label: '상황', val: '"미국 클라이언트한테 $3,000 받았어. 쓸 때까지 굴려줘"' },
                    { label: '실행', val: '$3,000 수신 확인 → APY 스캔 → Morpho 5.6% → $2,700 예치 (여유분 $300)' },
                    { label: '결과', val: '월 이자 $12.6 ☕ "이번 달 커피 25잔 값" | 수령 즉시 이자 발생' },
                  ],
                },
                {
                  title: '자동화 — 유저가 아무것도 안 할 때',
                  color: 'border-emerald-400',
                  bg: 'bg-emerald-50',
                  header: 'bg-emerald-600',
                  items: [
                    { label: '새벽 3시', val: 'Idle Money Agent 자동 실행 → $500 USDC 유휴 상태 감지 → 다음 지출 예정 없음' },
                    { label: '실행', val: 'APY 스캔 → Morpho 5.6% 최적 → $450 자동 예치' },
                    { label: '다음날 알림', val: '"어젯밤 유휴 $450 USDC를 Morpho에 자동 예치했어요. 연 5.6% 이자 발생 중 💰"' },
                  ],
                },
              ].map((s) => (
                <div key={s.title} className={`border-2 ${s.color} rounded-2xl overflow-hidden`}>
                  <div className={`${s.header} text-white px-5 py-3 text-sm font-bold`}>{s.title}</div>
                  <div className={`${s.bg} p-5 space-y-3`}>
                    {s.items.map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <div className="text-xs font-bold text-slate-500 w-12 shrink-0 pt-0.5">{item.label}</div>
                        <div className="text-sm text-slate-700">{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 섹션 10: 로드맵 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">10. 개발 로드맵</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">Phase</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">내용</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">기간</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1. 기본 지갑', 'ETH/SOL/USDC 잔고, 송금, walits 자체 MPC', '완료 ✅'],
                    ['2. AI + 기본 PayFi', 'Claude 연동 + Idle Detector + Aave/Morpho 자동 예치', '2~4주'],
                    ['2-1. 투자 프리셋', '오렌지/애플/칠리/슬리핑 4종 + 온보딩 UI', '1~2주'],
                    ['3. RWA + 즉시 정산', 'Ondo USDY + Circle CCTP + B2B 정산', '4~8주'],
                    ['4. 고급 PayFi', 'ENPL + 급여 자동화 + Huma Finance + 구독 프리셋', '8~12주'],
                    ['5. 출시 후', '리스크 모니터링 + 포인트 자산화 + 프리셋 A/B 테스트', '확장'],
                  ].map(([phase, content, duration], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-200 px-3 py-2 font-bold text-slate-800">{phase}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{content}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center text-slate-600">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 기술 스택 + 비용 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-900 rounded-xl p-5 text-white">
                <div className="font-bold text-slate-300 mb-3 text-sm">기술 스택</div>
                <div className="space-y-2 text-sm">
                  {[
                    ['AI 레이어', 'AgentKit + LangChain + Claude API'],
                    ['키 관리', '자체 MPC (CGGMP24 + FROST, 2-of-3)'],
                    ['PayFi 레일', 'Aave / Morpho / Ondo USDY / Huma'],
                    ['정산 네트워크', 'Base (2초) / Solana / Circle CCTP'],
                    ['프론트엔드', 'Next.js + TypeScript'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-slate-400 shrink-0 w-24">{k}</span>
                      <span className="text-slate-200">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-bold text-green-800 mb-3 text-sm">초기 운영 비용</div>
                <div className="space-y-2 text-sm">
                  {[
                    ['AgentKit', '$0 (오픈소스)'],
                    ['LangChain', '$0 (오픈소스)'],
                    ['Claude API', '~$10~30/월'],
                    ['MPC 서버', '자체 운영 (서버 비용)'],
                    ['Aave/Morpho/Ondo', '컨트랙트 직접 연동'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-slate-700">{k}</span>
                      <span className="font-medium text-green-700">{v}</span>
                    </div>
                  ))}
                  <div className="border-t border-green-300 pt-2 flex justify-between font-bold">
                    <span className="text-green-900">총합</span>
                    <span className="text-green-700">거의 $0 ~ $30/월</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 결론 */}
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-black mb-4">walits의 포지셔닝</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                기존 지갑들이 <strong className="text-white">"보내고 받는"</strong> 도구라면,<br />
                walits는 <strong className="text-white">"잔고가 24시간 알아서 일하는"</strong> 지갑이다.
              </p>
              <p className="text-blue-100 leading-relaxed">
                돈이 이동하거나 대기하는 모든 순간이 수익 기회다.
                AI가 정책 엔진의 안전장치 아래 자율적으로 최적 프로토콜을 선택하고,
                유저는 오렌지·애플·칠리 중 버튼 하나만 누르면 된다.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* EN */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
              <p className="text-blue-900 text-lg leading-relaxed">
                Other wallets are <strong>"send and receive"</strong> tools.<br />
                walits is a wallet where <strong>"your balance works for you 24/7."</strong><br />
                Every moment your money is moving or waiting is a yield opportunity.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="text-2xl font-black text-slate-900 mb-6">1. Full Architecture</h2>
            <div className="bg-slate-900 rounded-2xl p-6 mb-6">
              <div className="space-y-0">
                {[
                  { label: 'User — Next.js Frontend', sub: '"Don\'t let my USDC sit idle" / "Pay my vendor" / "Buy RWA"', color: 'bg-blue-500' },
                  { label: 'AI Agent Layer — Claude + LangChain', sub: 'Intent parsing → PayFi strategy → tool selection → execution plan', color: 'bg-violet-500' },
                  { label: 'AgentKit + PayFi Tool Layer', sub: 'Base onchain tools + PayFi custom tools (yield, settlement, RWA, supply chain)', color: 'bg-indigo-500' },
                  { label: 'Policy Engine + Idle Time Detector', sub: 'Spending policy check + idle fund detection → auto-deposit trigger', color: 'bg-sky-500' },
                  { label: 'walits Self-hosted MPC', sub: 'Key management + signing (no external dependency, 2-of-3 distributed)', color: 'bg-teal-500' },
                  { label: 'PayFi Protocol Layer', sub: 'Aave · Morpho · Ondo USDY · Huma Finance · Circle CCTP', color: 'bg-emerald-500' },
                  { label: 'Blockchain — ETH / Base / SOL', sub: '', color: 'bg-green-500' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-full ${item.color} rounded-xl px-4 py-3`}>
                      <div className="text-white font-bold text-sm">{item.label}</div>
                      {item.sub && <div className="text-white/70 text-xs mt-1">{item.sub}</div>}
                    </div>
                    {i < 6 && <div className="text-slate-500 text-lg py-1">↓</div>}
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-4">walits vs Other Wallets</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">Feature</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">MetaMask</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Rainbow</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Rabby</th>
                    <th className="border border-slate-200 px-3 py-2 text-center font-bold text-blue-700">walits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Balance storage', '✅', '✅', '✅', '✅'],
                    ['Beautiful UI', '—', '✅', '—', '✅'],
                    ['Security simulation', '—', '—', '✅', '✅'],
                    ['Idle Time elimination', '❌', '❌', '❌', '✅'],
                    ['RWA integration', '❌', '❌', '❌', '✅'],
                    ['AI auto-invest', '❌', '❌', '❌', '✅'],
                    ['PayFi instant settlement', '❌', '❌', '❌', '✅'],
                  ].map(([feature, m, r, rb, w], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-200 px-3 py-2 font-medium">{feature}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{m}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{r}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{rb}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center font-bold text-blue-700">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. AI Agent Layer — Claude + LangChain</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The brain of walits is Claude (Anthropic). When a user gives a natural language command, Claude interprets
              the intent, selects the right tools from AgentKit and the PayFi custom toolkit, and builds an execution plan.
              Users don't need any DeFi knowledge — <strong>"don't let my USDC sit idle"</strong> triggers optimal deposits automatically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { step: '1', title: 'Natural Language Parsing', desc: '"Show my USDC balance" → determines get_balance tool is needed', color: 'bg-violet-50 border-violet-200' },
                { step: '2', title: 'Tool Selection + Parameters', desc: 'Automatically combines the right tools and arguments for the situation', color: 'bg-blue-50 border-blue-200' },
                { step: '3', title: 'Result + Response', desc: '"Your current USDC balance is 250 USDC ✅" delivered to the user', color: 'bg-indigo-50 border-indigo-200' },
              ].map((item) => (
                <div key={item.step} className={`border rounded-xl p-4 ${item.color}`}>
                  <div className="text-xs font-bold text-slate-500 mb-1">STEP {item.step}</div>
                  <div className="font-bold text-slate-900 mb-2">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Section 3 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. Policy Engine — Guardrails for Autonomous Execution</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Since AI executes transactions autonomously, safety guardrails are essential. walits' policy engine validates
              every transaction against user-defined rules before execution — built in-house, without relying on Coinbase Agentic Wallets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: '💰', title: 'Per-tx limit', desc: 'Max amount per single transaction' },
                { icon: '📅', title: 'Daily limit', desc: 'Total daily transaction cap' },
                { icon: '🪙', title: 'Allowed tokens', desc: 'USDC only, or include ETH' },
                { icon: '🔒', title: 'Allowed contracts', desc: 'Whitelist: Aave, Ondo, etc.' },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="font-bold text-green-800 mb-2">🛡️ Conservative Policy</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Max $50 per tx</li>
                  <li>• Daily limit $200</li>
                  <li>• USDC only</li>
                  <li>• Aave, Morpho only</li>
                  <li>• Auto-yield disabled</li>
                  <li>• Always keep $100 reserve</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="font-bold text-red-800 mb-2">⚡ Aggressive Policy</div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Max $5,000 per tx</li>
                  <li>• Daily limit $20,000</li>
                  <li>• USDC, ETH, SOL</li>
                  <li>• Aave, Ondo, Huma</li>
                  <li>• Auto-yield enabled</li>
                  <li>• Minimum $50 reserve</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. MPC Key Management — walits Self-hosted Infrastructure</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              walits runs its own <strong>MPC infrastructure</strong> in-house — no external key management service (Rust, CGGMP24 + FROST protocols).
              Keys are split into 3 shards distributed across server, browser, and backup in a <strong>2-of-3 threshold</strong> structure.
              Even if the server is compromised, it cannot sign alone. If a device is lost, the backup shard enables recovery.
              Social login (Google/Apple) acts as the authentication layer and combines cleanly with MPC key management.
            </p>
            <div className="bg-slate-900 rounded-xl p-5 mb-6">
              <div className="flex items-center justify-center gap-3 flex-wrap text-center">
                <div className="bg-blue-600 rounded-lg px-4 py-3 text-white">
                  <div className="text-xs text-blue-200">Party 0 — walits Server</div>
                  <div className="font-bold text-sm">Server key shard</div>
                  <div className="text-xs text-blue-300 mt-1">Always online</div>
                </div>
                <div className="text-slate-400 text-xl font-bold">+</div>
                <div className="bg-green-600 rounded-lg px-4 py-3 text-white">
                  <div className="text-xs text-green-200">Party 1 — Browser WASM</div>
                  <div className="font-bold text-sm">Customer key shard</div>
                  <div className="text-xs text-green-300 mt-1">IndexedDB storage</div>
                </div>
                <div className="text-slate-400 text-xl font-bold">→</div>
                <div className="bg-teal-600 rounded-lg px-4 py-3 text-white">
                  <div className="text-xs text-teal-200">2-of-3 rule</div>
                  <div className="font-bold text-sm">Signing complete</div>
                  <div className="text-xs text-teal-300 mt-1">No single-party sign</div>
                </div>
              </div>
              <div className="mt-3 text-center text-xs text-slate-500">Party 2 (backup shard) — recovery only when device is lost, dormant otherwise</div>
            </div>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">Criteria</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">CDP Smart Wallet</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Viem</th>
                    <th className="border border-slate-200 px-3 py-2 text-center font-bold text-teal-700">walits Self-hosted MPC (adopted)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Key location', 'Coinbase servers', 'Server .env', '2-of-3 distributed (server + browser + backup)'],
                    ['External dependency', '❌ Coinbase', '✅ None', '✅ None'],
                    ['Multi-user', '△', '❌', '✅'],
                    ['Social login', '✅', '❌', '✅ (OAuth + MPC combined)'],
                    ['Security', 'Medium', 'Low', 'High'],
                  ].map(([item, a, b, c], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-200 px-3 py-2 font-medium">{item}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{a}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{b}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center font-bold text-teal-700">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Idle Time Detector — The Heart of PayFi</h2>
            <div className="bg-blue-600 text-white rounded-2xl p-5 mb-6">
              <div className="text-lg font-bold mb-2">Core Philosophy</div>
              <div className="text-blue-100">Every moment money sits idle = a missed yield opportunity</div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Idle Time Detector monitors balance changes in real time. When a deposit arrives, it immediately
              analyzes the amount above the minimum reserve and selects the <strong>optimal protocol based on time until the next payment</strong>,
              then instructs the AI agent to deposit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { time: 'Less than 24h', protocol: 'Aave', reason: 'Instant withdrawal', apy: '5.1%', color: 'bg-green-50 border-green-300' },
                { time: '1–7 days', protocol: 'Morpho', reason: 'Short-term optimal', apy: '5.6%', color: 'bg-blue-50 border-blue-300' },
                { time: '7+ days', protocol: 'Ondo USDY', reason: 'Treasury-backed, stable', apy: '5.0%', color: 'bg-amber-50 border-amber-300' },
              ].map((item) => (
                <div key={item.protocol} className={`border-2 rounded-xl p-4 text-center ${item.color}`}>
                  <div className="text-xs font-bold text-slate-500 mb-2">{item.time}</div>
                  <div className="text-xl font-black text-slate-900 mb-1">{item.protocol}</div>
                  <div className="text-sm text-slate-600 mb-2">{item.reason}</div>
                  <div className="inline-block bg-white border border-slate-200 rounded-full px-3 py-1 text-sm font-bold text-green-700">
                    APY {item.apy}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 6 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. PayFi Custom Tool Set</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { name: 'APY Scanner', emoji: '📊', desc: 'Scans Aave, Morpho, Ondo USDY, Huma Finance in real time. Recommends the best protocol considering lockup duration.', color: 'bg-violet-50 border-violet-200' },
                { name: 'Instant Settlement', emoji: '⚡', desc: 'Send USDC in 2 seconds on Base / Solana. No 2–5 day SWIFT wait, no $30+ fees. Replaces international B2B payments onchain.', color: 'bg-blue-50 border-blue-200' },
                { name: 'ENPL Calculator', emoji: '📅', desc: 'Earn Now Pay Later: deposit principal, pay subscriptions with monthly yield automatically. Calculates required principal and coverage ratio.', color: 'bg-emerald-50 border-emerald-200' },
                { name: 'RWA Browser', emoji: '🏛️', desc: 'Compare Ondo USDY (5.1%), BlackRock BUIDL (4.5%), Maple Finance (9.2%), Huma Finance (11.0%) at a glance and buy in one click.', color: 'bg-amber-50 border-amber-200' },
              ].map((tool) => (
                <div key={tool.name} className={`border rounded-xl p-5 ${tool.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{tool.emoji}</span>
                    <span className="font-bold text-slate-900">{tool.name}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 7 */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">7. 5 PayFi Agents</h2>
            {[
              { name: 'Treasury Agent', tag: 'B2B Autonomous Finance', emoji: '🏢', color: 'bg-blue-600', scenario: 'User: "I have a $5,000 vendor payment next week. Earn yield until then"', steps: ['APY scan (6-day lockup) → Ondo USDY 5.0%', 'Deposit $5,000 to Ondo', 'Schedule auto-withdrawal 1 hour before payment', 'Instant settlement to vendor (2 sec)'], result: '6-day interest $4.1 + SWIFT fees $0' },
              { name: 'Idle Money Agent', tag: 'Personal Auto-Deposit', emoji: '💤', color: 'bg-violet-600', scenario: '[Auto-triggered — no user action] $500 USDC deposit detected', steps: ['APY scan → Morpho 5.6% best', 'Deposit $450 (keep $50 reserve)', 'Notification: "Monthly yield $2.1 ☕ 4 coffees"'], result: 'Yield starts on deposit, zero user effort' },
              { name: 'Payroll Agent', tag: 'Global Payroll Automation', emoji: '👥', color: 'bg-teal-600', scenario: '"Pay 3 team members $3,000. Earn yield until payday then auto-send."', steps: ['Deposit to Aave 7 days prior → $3.2 company yield', 'Auto-send to 3 members at 9:00 AM on payday', 'Korea/Vietnam/US each get off-ramp routing'], result: 'Yield $3.2 + 2-sec settlement + $0 fees' },
              { name: 'ENPL Agent', tag: 'Subscription Automation', emoji: '📅', color: 'bg-orange-600', scenario: 'User: "I want to pay my $183/month subscriptions with yield"', steps: ['APY 5.6% → need $39,107 principal', 'Current $5,000 → monthly yield $23.3 → covers 12.7%', 'Monthly auto-withdraw yield → pay subscriptions'], result: 'Principal preserved + subscriptions paid with yield' },
              { name: 'RWA + PayFi Agent', tag: 'Investment Auto-Management', emoji: '🏛️', color: 'bg-emerald-600', scenario: 'User: "Earn yield safely for me"', steps: ['APY scan: Aave 5.1%, Morpho 5.6%', 'RWA query: Ondo USDY 5.0%, Huma 11%', 'Allocation: Ondo 50% + Morpho 30% + Huma 20%', 'Auto-execute after user approval + weekly report'], result: 'Blended yield + periodic rebalancing' },
            ].map((agent) => (
              <div key={agent.name} className="border border-slate-200 rounded-2xl overflow-hidden mb-4">
                <div className={`${agent.color} text-white px-5 py-3 flex items-center gap-3`}>
                  <span className="text-2xl">{agent.emoji}</span>
                  <div>
                    <div className="font-black">{agent.name}</div>
                    <div className="text-white/70 text-xs">{agent.tag}</div>
                  </div>
                </div>
                <div className="p-5 bg-slate-50">
                  <div className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-700 mb-4 italic">{agent.scenario}</div>
                  <div className="space-y-2 mb-4">
                    {agent.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-slate-400 font-bold shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-sm text-green-800 font-medium">Result: {agent.result}</div>
                </div>
              </div>
            ))}

            {/* Section 8 */}
            <h2 className="text-2xl font-black text-slate-900 mt-10 mb-4">8. Investment Strategy Presets — The Key UX</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-amber-900 font-medium">
                Users don't need to know DeFi or PayFi. One button click automatically configures
                the optimal prompt and policy — the AI handles everything from there.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { emoji: '🍊', name: 'Orange', apy: '4–5% APY', risk: '●○○', riskLabel: 'Safe', min: '$500', strategy: '100% Ondo USDY (US Treasury-backed). Always keep 10% as liquid reserve.', color: 'border-orange-300 bg-orange-50', header: 'bg-orange-500' },
                { emoji: '🍎', name: 'Apple', apy: '6–8% APY', risk: '●●○', riskLabel: 'Balanced', min: '$200', strategy: 'Ondo 40% + Morpho 40% + Aave 20%. Weekly APY check + auto-rebalance.', color: 'border-red-300 bg-red-50', header: 'bg-red-500' },
                { emoji: '🌶️', name: 'Chili', apy: '10–12% APY', risk: '●●●', riskLabel: 'Aggressive', min: '$1,000', strategy: 'Huma Finance 50% + Morpho 30% + Maple 20%. Auto-move if better APY found.', color: 'border-red-400 bg-red-50', header: 'bg-red-700' },
                { emoji: '💤', name: 'Sleeping Money', apy: 'Auto-optimized', risk: '●○○', riskLabel: 'Auto', min: '$50', strategy: 'Auto-deposit to highest-APY instant-withdrawal protocol on every deposit. Keep 15% liquid.', color: 'border-slate-300 bg-slate-50', header: 'bg-slate-600' },
                { emoji: '⚡', name: 'Fast Settle', apy: 'Idle interest + $0 fees', risk: '●○○', riskLabel: 'Low', min: '$100', strategy: 'Auto-deposit until payment → auto-withdraw 1hr before → 2-second settlement.', color: 'border-yellow-300 bg-yellow-50', header: 'bg-yellow-600' },
                { emoji: '📅', name: 'Sub Manager', apy: 'Subscription savings', risk: '●○○', riskLabel: 'Low', min: '$1,000', strategy: 'Input monthly subscriptions → calculate required principal → deposit → pay with monthly yield. Principal untouched.', color: 'border-blue-300 bg-blue-50', header: 'bg-blue-600' },
              ].map((preset) => (
                <div key={preset.name} className={`border-2 rounded-xl overflow-hidden ${preset.color}`}>
                  <div className={`${preset.header} text-white px-4 py-3 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{preset.emoji}</span>
                      <span className="font-black">{preset.name}</span>
                    </div>
                    <span className="text-white/80 text-xs">{preset.riskLabel} {preset.risk}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-black text-green-700">{preset.apy}</span>
                      <span className="text-xs text-slate-500">Min {preset.min}</span>
                    </div>
                    <p className="text-sm text-slate-700">{preset.strategy}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 9 Scenarios */}
            <h2 className="text-2xl font-black text-slate-900 mb-6">9. Real Use Scenarios</h2>
            <div className="space-y-6 mb-10">
              {[
                { title: 'Scenario A — B2B International Payment (Korean IT firm → US client)', color: 'border-blue-400', bg: 'bg-blue-50', header: 'bg-blue-600', items: [{ label: 'Situation', val: '"I need to wire $10,000 to a US vendor Net-45. Earn yield until then"' }, { label: 'Execution', val: 'APY scan → Ondo USDY 5.0% / Deposit $10,000 / Auto-withdraw 1hr before Day 44 / Instant settlement' }, { label: 'Result', val: '44-day interest $60.3 | Settlement in 2 sec (vs SWIFT 3–5 days) | Fees ~$0 (vs SWIFT $30+)' }] },
                { title: 'Scenario C — Freelancer Payment', color: 'border-violet-400', bg: 'bg-violet-50', header: 'bg-violet-600', items: [{ label: 'Situation', val: '"I just received $3,000 from a US client. Earn yield until I spend it"' }, { label: 'Execution', val: 'Confirm $3,000 received → APY scan → Morpho 5.6% → Deposit $2,700 (keep $300)' }, { label: 'Result', val: 'Monthly yield $12.6 ☕ "25 coffees this month" | Yield starts immediately on receipt' }] },
                { title: 'Automation — When the user does nothing', color: 'border-emerald-400', bg: 'bg-emerald-50', header: 'bg-emerald-600', items: [{ label: '3 AM', val: 'Idle Money Agent triggers → detects $500 USDC idle → no scheduled payments' }, { label: 'Execution', val: 'APY scan → Morpho 5.6% best → auto-deposit $450' }, { label: 'Morning alert', val: '"Last night I auto-deposited $450 idle USDC to Morpho. Earning 5.6% APY 💰"' }] },
              ].map((s) => (
                <div key={s.title} className={`border-2 ${s.color} rounded-2xl overflow-hidden`}>
                  <div className={`${s.header} text-white px-5 py-3 text-sm font-bold`}>{s.title}</div>
                  <div className={`${s.bg} p-5 space-y-3`}>
                    {s.items.map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <div className="text-xs font-bold text-slate-500 w-16 shrink-0 pt-0.5">{item.label}</div>
                        <div className="text-sm text-slate-700">{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 10 Roadmap */}
            <h2 className="text-2xl font-black text-slate-900 mb-4">10. Development Roadmap</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left">Phase</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">Content</th>
                    <th className="border border-slate-200 px-3 py-2 text-center">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1. Base Wallet', 'ETH/SOL/USDC balance, transfer, walits self-hosted MPC', 'Done ✅'],
                    ['2. AI + Basic PayFi', 'Claude integration + Idle Detector + Aave/Morpho auto-deposit', '2–4 weeks'],
                    ['2-1. Presets', 'Orange/Apple/Chili/Sleeping 4 presets + onboarding UI', '1–2 weeks'],
                    ['3. RWA + Instant Settle', 'Ondo USDY + Circle CCTP + B2B settlement', '4–8 weeks'],
                    ['4. Advanced PayFi', 'ENPL + payroll automation + Huma Finance + Sub preset', '8–12 weeks'],
                    ['5. Post-launch', 'Risk monitoring + points tokenization + preset A/B testing', 'Ongoing'],
                  ].map(([phase, content, duration], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-200 px-3 py-2 font-bold text-slate-800">{phase}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{content}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center text-slate-600">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-900 rounded-xl p-5 text-white">
                <div className="font-bold text-slate-300 mb-3 text-sm">Tech Stack</div>
                <div className="space-y-2 text-sm">
                  {[
                    ['AI Layer', 'AgentKit + LangChain + Claude API'],
                    ['Key Mgmt', 'Self-hosted MPC (CGGMP24 + FROST, 2-of-3)'],
                    ['PayFi Rails', 'Aave / Morpho / Ondo USDY / Huma'],
                    ['Settlement', 'Base (2 sec) / Solana / Circle CCTP'],
                    ['Frontend', 'Next.js + TypeScript'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-slate-400 shrink-0 w-20">{k}</span>
                      <span className="text-slate-200">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="font-bold text-green-800 mb-3 text-sm">Initial Running Cost</div>
                <div className="space-y-2 text-sm">
                  {[
                    ['AgentKit', '$0 (open-source)'],
                    ['LangChain', '$0 (open-source)'],
                    ['Claude API', '~$10–30/mo'],
                    ['MPC Server', 'Self-operated (server cost)'],
                    ['Protocols', 'Direct contract integration'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-slate-700">{k}</span>
                      <span className="font-medium text-green-700">{v}</span>
                    </div>
                  ))}
                  <div className="border-t border-green-300 pt-2 flex justify-between font-bold">
                    <span className="text-green-900">Total</span>
                    <span className="text-green-700">~$0 – $30/mo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-black mb-4">walits Positioning</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Other wallets are <strong className="text-white">"send and receive"</strong> tools.<br />
                walits is a wallet where <strong className="text-white">"your balance works for you 24/7."</strong>
              </p>
              <p className="text-blue-100 leading-relaxed">
                Every moment money is moving or waiting is a yield opportunity.
                The AI autonomously selects the optimal protocol within the policy engine's guardrails —
                and the user just picks Orange, Apple, or Chili.
              </p>
            </div>
          </>
        )}

        {/* Back */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl transition-colors">
            {language === 'ko' ? '← 블로그 목록으로' : '← Back to Blog'}
          </Link>
        </div>
      </div>
    </div>
  );
}
