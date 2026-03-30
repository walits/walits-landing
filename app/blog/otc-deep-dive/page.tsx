'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OtcDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
          <Image src="/blog/otc.jpg" alt="Crypto OTC Desk" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-600/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 4</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 4 — 크립토 OTC 데스크 완전 가이드</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">기관들이 대규모 거래를 조용히 처리하는 방법 · Principal · Agency · RFQ · Settlement</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: '일 OTC 거래량', value: '$14.4B', sub: '기관 전용 거래소의 18배' },
                { label: '스테이블코인 비중', value: '74.6%', sub: '2025년 OTC 현물 기준' },
                { label: 'YoY 성장', value: '+106%', sub: '2024년 OTC 거래량' },
                { label: '최소 거래 규모', value: '$100K+', sub: '주요 데스크 기준' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── S1 왜 DEX/CEX로는 안 되나 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · 왜 DEX/CEX로는 안 되나?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              비트코인 $5,000만어치를 바이낸스에서 한 번에 매수하면 어떻게 될까? 주문이 order book을 타고 올라가면서 가격이 순식간에 <strong>2~5% 움직인다</strong>. $5,000만의 2%는 $100만 손실이 즉시 발생하는 것이다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              여기에 더해 mempool에 트랜잭션이 노출되는 순간 <strong>MEV 봇들이 샌드위치 어택</strong>을 걸어온다. 앞에서 먼저 사고, 뒤에서 팔아 차익을 가져간다. 이것이 기관들이 OTC를 쓰는 핵심 이유다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">$5,000만 BTC 매수 시 — CEX vs OTC 비교</p>
              <div className="space-y-4">
                {[
                  {
                    label: 'Binance 시장가 주문',
                    badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                    items: ['Order book을 타며 가격이 2~5% 상승', '전체 주문이 공개됨 (market depth 노출)', 'MEV 봇 샌드위치 어택 위험', '예상 손실: $100만~$250만'],
                    color: 'border-red-200 dark:border-red-800',
                  },
                  {
                    label: 'OTC 데스크 실행',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                    items: ['단일 고정 가격으로 체결 (가격충격 0)', '거래 내용 비공개 (프라이버시 보장)', 'MEV 노출 없음', '실제 비용: 스프레드 0.1~0.3%만'],
                    color: 'border-green-200 dark:border-green-800',
                  },
                ].map((r, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${r.color} bg-white dark:bg-gray-900`}>
                    <span className={`text-xs font-bold px-2 py-1 rounded mb-3 inline-block ${r.badge}`}>{r.label}</span>
                    <ul className="space-y-1">
                      {r.items.map((item, j) => (
                        <li key={j} className={`text-sm flex items-start gap-2 ${i === 0 ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}>
                          <span className="flex-shrink-0 mt-0.5">{i === 0 ? '✗' : '✓'}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── S2 OTC 데스크란 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · OTC 데스크란?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              OTC(Over-The-Counter) 거래 데스크는 <strong>공개 주문서와 무관하게 두 당사자 간의 직접 거래를 가능하게 하는 사설 거래 서비스</strong>다. 거래소처럼 매수자와 매도자를 연결하지만, 결정적인 차이는 프라이버시와 가격 체결 방식이다.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 rounded-xl p-6 my-6">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">📌 직관적 비유</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                피카소 작품을 <strong>공개 경매장(CEX)</strong>에 올리면 모든 참여자가 가격을 올리며 결국 시장가가 형성된다.<br />
                반면 <strong>프라이빗 딜러(OTC)</strong>에게 맡기면 당신과 매수자가 조용한 룸에서 협의 가격으로 거래한다.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2025년 현재, 주권 펀드·헤지펀드·민간 은행들의 크립토 도입이 확대되면서 <strong>스텔스 실행(stealth execution)</strong>이 경쟁 우위가 됐다. OTC 데스크들은 일일 현물 거래량으로 약 <strong>$14.4B</strong>를 처리하며, 이는 기관 전용 거래소 대비 약 18배 규모다.
            </p>

            {/* ── S3 거래 종류 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · OTC 거래의 4가지 모델</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  icon: '🏦',
                  title: 'Principal 모델 (자기 자본 거래)',
                  color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  rep: '대표: Cumberland (DRW)',
                  pros: ['빠른 체결 (즉시 유동성 제공)', '타이트한 스프레드', '카운터파티 신뢰도 높음'],
                  cons: ['데스크 이해관계가 클라이언트와 충돌 가능', '데스크가 포지션을 먼저 잡을 수 있음'],
                  desc: 'OTC 데스크가 자기 자금으로 직접 거래 상대방이 된다. 클라이언트가 BTC를 팔면 데스크가 직접 사고, 나중에 시장에서 해소한다.',
                },
                {
                  icon: '🔗',
                  title: 'Agency/Broker 모델',
                  color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                  titleColor: 'text-purple-700 dark:text-purple-300',
                  rep: '대표: FalconX (기관 거래량 $1.5조 돌파, 2025년)',
                  pros: ['중립적 입장 (이해충돌 없음)', '복수 유동성 제공자에서 최적가 소싱', '클라이언트에게 최선의 집행 의무'],
                  cons: ['체결에 약간의 시간 소요', '복잡한 대형 주문에서 슬리피지 가능'],
                  desc: '데스크가 브로커 역할로 매수/매도 양측을 매칭한다. 자기 자금 없이 여러 유동성 제공자에게서 최적가를 소싱하는 방식.',
                },
                {
                  icon: '📋',
                  title: 'RFQ (Request for Quote)',
                  color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
                  titleColor: 'text-orange-700 dark:text-orange-300',
                  rep: '온체인 버전: UniswapX, CoW Protocol, Hashflow, Paradigm',
                  pros: ['복수 마켓메이커 경쟁 → 최적가 보장', '투명한 가격 경쟁', '온체인/오프체인 모두 가능'],
                  cons: ['소규모 거래에는 비효율적', '응답 시간 대기 필요'],
                  desc: '복수의 마켓메이커에게 동시에 견적을 요청하고, 가장 좋은 가격으로 체결하는 방식. 경쟁 입찰을 통해 가격 발견.',
                },
                {
                  icon: '🤝',
                  title: 'Bilateral OTC (양자 직접 협상)',
                  color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                  titleColor: 'text-green-700 dark:text-green-300',
                  rep: '소버린 펀드, 국부 펀드 규모 거래',
                  pros: ['완전한 프라이버시', '맞춤형 조건 협상 가능', '복수 결제로 나눠서 집행 가능'],
                  cons: ['카운터파티 리스크 높음', '법적 계약 필요', '처리 시간 길음'],
                  desc: '초대형 거래에서 양측이 법적 계약 + 제3자 에스크로 기반으로 직접 협상. 소버린 펀드가 $1억 규모 BTC 포지션을 복수 결제로 나눠 집행하는 방식.',
                },
              ].map((m, i) => (
                <div key={i} className={`border rounded-xl p-5 ${m.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className={`font-bold text-base ${m.titleColor}`}>{m.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{m.rep}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{m.desc}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">장점</p>
                      <ul className="space-y-0.5">
                        {m.pros.map((p, j) => <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">단점</p>
                      <ul className="space-y-0.5">
                        {m.cons.map((c, j) => <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1"><span className="text-red-500 flex-shrink-0">−</span>{c}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── S4 거래 프로세스 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · OTC 거래 프로세스 — 처음부터 끝까지</h2>

            {/* 실제 자금 흐름 쉬운 설명 */}
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">💡 실제로 어떻게 돈과 코인이 오가나 — 쉬운 그림</p>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                OTC 거래는 간단히 말하면 <strong>"협의는 전화로, 돈은 은행으로, 코인은 온체인으로"</strong> 입니다. 달러를 주고 BTC를 사는 구조입니다.
              </p>

              {/* 흐름도 */}
              <div className="space-y-3">
                {/* 1 */}
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">오프체인 — 전화/메시지로 협의</p>
                    <p className="text-xs text-gray-500 leading-relaxed">기관: "BTC 100개 살게요" → 데스크: "$9,500,000에 드릴게요" → 기관: "OK"<br />이 과정은 블록체인과 무관. mempool에 아무것도 올라가지 않음.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-3">
                  <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-600 ml-2.5" />
                  <p className="text-xs text-slate-400">합의 완료 → 동시 결제 실행</p>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-400 dark:bg-blue-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">달러 이동 (오프체인)</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 flex-wrap">
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">기관 은행계좌</span>
                      <span>→</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">OTC 데스크 은행계좌</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">$9,500,000</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">일반 은행 와이어 전송. 블록체인 아님.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-3">
                  <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-600 ml-2.5" />
                </div>

                {/* 3 */}
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-400 dark:bg-orange-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">BTC 이동 (온체인)</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 flex-wrap">
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">데스크 지갑 (0xABC…)</span>
                      <span>→</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">기관 지갑 (0xDEF…)</span>
                      <span className="text-orange-600 dark:text-orange-400 font-bold">BTC 100개</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">이미 합의된 금액의 단순 전송. 온체인에는 "A → B로 BTC 이동"만 보임. 가격 정보 없음.</p>
                  </div>
                </div>
              </div>

              {/* MEV 설명 */}
              <div className="mt-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-2">🛡️ 왜 MEV 봇이 끼어들 수 없나?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  DEX 스왑은 트랜잭션 안에 <strong>"나 BTC 살 예정, 최대 이 가격까지 허용"</strong>이라는 의도가 담겨 mempool에 공개됩니다. MEV 봇은 이걸 보고 앞뒤로 끼어듭니다.<br /><br />
                  OTC는 협의 자체가 오프체인에서 끝납니다. 온체인에는 <strong>이미 거래가 완료된 후 단순 전송</strong>만 올라오기 때문에, "살 예정"이라는 정보가 한 번도 노출된 적이 없습니다. 공격할 정보 자체가 없는 것입니다.
                </p>
              </div>

              {/* DVP 설명 */}
              <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">🔒 DVP — "달러 먼저 보냈는데 BTC 안 주면?" 해결</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  달러와 BTC를 동시에 교환하지 않으면 한쪽이 먼저 보내고 상대가 잠적하는 리스크가 있습니다. 이를 막는 게 <strong>DVP(Delivery vs Payment)</strong>와 <strong>Tri-party 에스크로</strong>입니다.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 text-xs font-mono text-gray-600 dark:text-gray-400 space-y-1">
                  <p>① Bitgo(제3자 에스크로)가 중간에 위치</p>
                  <p>② 기관이 달러를 에스크로로 → 데스크가 BTC를 에스크로로</p>
                  <p>③ 양쪽 모두 확인되면 <span className="text-green-500">동시 릴리즈</span></p>
                  <p className="text-gray-400">→ 어느 한쪽만 손해보는 상황 원천 차단</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">OTC는 DEX와 직접적인 관계는 없습니다. DEX가 "자동화된 공개 시장"이라면, OTC는 "기관들의 프라이빗 딜"로 전통 금융의 장외거래에 더 가깝습니다.</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              처음 OTC 데스크를 이용하는 기관 투자자가 거치는 5단계다. 각 단계별로 무슨 일이 일어나는지 상세히 살펴보자.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  n: '01',
                  title: 'KYC/AML 온보딩',
                  duration: '소요 시간: 1~5 영업일',
                  color: 'bg-slate-50 dark:bg-slate-800/50',
                  items: [
                    '신분증 및 법인 설립 서류 제출',
                    '자금 출처 증명 (Proof of Funds)',
                    '경영진 신원 조회',
                    '온체인 포렌식 — 코인 출처 추적 (Chainalysis/Elliptic)',
                    '서비스 이용 약관 및 ISDA 계약 체결 (대형 데스크)',
                  ],
                  note: '한 번 온보딩하면 이후 거래는 즉시 가능. 규제 강화로 온체인 포렌식이 필수화되는 추세.',
                },
                {
                  n: '02',
                  title: '거래 문의 (Inquiry)',
                  duration: '소요 시간: 즉시',
                  color: 'bg-blue-50 dark:bg-blue-900/20',
                  items: [
                    '자산 종류 (BTC, ETH, USDT 등)',
                    '수량 및 방향 (매수/매도)',
                    '희망 체결 기간 (즉시 vs 분할 집행)',
                    '채널: 전화, 보안 메시지, 전용 API, 트레이딩 포털',
                  ],
                  note: '대형 거래일수록 시장 노출을 피하기 위해 정보를 최소화해 문의한다.',
                },
                {
                  n: '03',
                  title: '견적 수신 (Quote)',
                  duration: '유효 시간: 10초 ~ 수분',
                  color: 'bg-purple-50 dark:bg-purple-900/20',
                  items: [
                    '데스크가 실시간 시장 + 자체 유동성 풀 기반으로 가격 제시',
                    '스프레드 포함 단일 가격 (예: BTC 현재가 $95,200 기준 $95,100 매수 제시)',
                    '견적 유효 시간 내 결정 필요 — 시장 변동성 클수록 짧아짐',
                    'RFQ 모델은 복수 마켓메이커에서 동시에 견적 비교',
                  ],
                  note: '견적 거부해도 패널티 없음. 다른 데스크에 재문의 가능.',
                },
                {
                  n: '04',
                  title: '체결 (Execution)',
                  duration: '소요 시간: 수초 ~ 수분',
                  color: 'bg-orange-50 dark:bg-orange-900/20',
                  items: [
                    '가격/조건 최종 합의 — 구두 또는 전자 확인',
                    '서명된 주문으로 오프 익스체인지 실행',
                    '거래 확인서(Trade Confirmation) 발행',
                    '대형 주문은 TWAP(시간 가중 평균) 또는 분할 집행으로 진행',
                  ],
                  note: '체결 후 취소 불가. 법적 구속력 있는 계약으로 간주.',
                },
                {
                  n: '05',
                  title: '결제 (Settlement)',
                  duration: 'T+0 ~ T+2 (데스크마다 상이)',
                  color: 'bg-green-50 dark:bg-green-900/20',
                  items: [
                    'T+0: 즉시 결제 — 소규모 거래 또는 에스크로 사전 준비된 경우',
                    'T+1~T+2: 당일/익일 결제 — 대형 거래 표준',
                    'DVP(Delivery vs Payment): 자산과 대금 동시 교환으로 카운터파티 리스크 제거',
                    'Settle Later / Netting: 복수 거래를 하나의 순결제로 묶어 자금 효율화',
                    '온체인 전송 또는 커스터디 내부 이동(Internal Transfer)으로 완료',
                  ],
                  note: 'Crypto.com 등 일부 플랫폼은 Settle Later 옵션으로 트레저리 관리 효율화 지원.',
                },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-bold text-gray-300 dark:text-gray-600 flex-shrink-0 leading-none">{s.n}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <p className="font-bold text-gray-900 dark:text-white">{s.title}</p>
                        <span className="text-xs text-gray-500 font-mono">{s.duration}</span>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {s.items.map((item, j) => (
                          <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-gray-400 flex-shrink-0 mt-0.5">└</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-500 bg-white/60 dark:bg-gray-900/40 rounded-lg px-3 py-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── S5 누가 사용하나 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · 누가, 왜 사용하나?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              연기금, 매크로 헤지펀드, ETF 발행사가 자신의 움직임을 노출하지 않고 대량 거래가 필요할 때 OTC 데스크를 활용한다.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">유저 타입</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">OTC 사용 이유</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">주요 거래 자산</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: '기관 투자자 / 헤지펀드', reason: '대규모 포지션 구축·청산 시 가격충격 방지', asset: 'BTC, ETH' },
                    { type: '크립토 채굴사', reason: '채굴 BTC 대량 매각 (시장 덤핑 없이)', asset: 'BTC' },
                    { type: '기업 트레저리', reason: '대차대조표 BTC/USDC 할당', asset: 'BTC, USDC' },
                    { type: 'ETF 발행사', reason: '기초자산(BTC/ETH) 빠른 대량 소싱', asset: 'BTC, ETH' },
                    { type: '달러 부족 지역 PSP', reason: 'USDC ↔ 현지통화 즉시 교환', asset: 'USDC, USDT' },
                    { type: '소버린 펀드', reason: '국가급 대형 포지션 비공개 집행', asset: 'BTC, ETH, USDC' },
                    { type: '크립토 스타트업', reason: '토큰 매각 또는 런웨이 환전', asset: '각종 토큰' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-slate-700 dark:text-slate-300">{r.type}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{r.reason}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-500">{r.asset}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── S6 수수료 구조 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · 수수료 구조 — 실제로 얼마를 내나</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              OTC 수수료 구조는 투명하지 않은 경우가 많다. 크게 두 가지 방식이 있다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="font-bold text-blue-700 dark:text-blue-300 mb-2 text-sm">📊 스프레드 기반 (Spread)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">제시 가격에 수수료가 내재되어 있음. 명시적 커미션 없음. 대부분의 대형 데스크 방식.</p>
                <div className="font-mono text-xs bg-gray-100 dark:bg-gray-900 rounded p-3 space-y-1 text-gray-600 dark:text-gray-400">
                  <p>시장가: BTC $95,200</p>
                  <p>매수 제시: $95,100 (-$100)</p>
                  <p>스프레드: ~0.1% 내재</p>
                </div>
              </div>
              <div className="border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="font-bold text-purple-700 dark:text-purple-300 mb-2 text-sm">💳 명시적 커미션 (Commission)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">시장가로 체결 + 별도 수수료 청구. 투명성 높음. 에이전시 모델 주로 사용.</p>
                <div className="font-mono text-xs bg-gray-100 dark:bg-gray-900 rounded p-3 space-y-1 text-gray-600 dark:text-gray-400">
                  <p>시장가 체결</p>
                  <p>수수료: 거래액의 0.1~0.5%</p>
                  <p>월 볼륨 증가 시 인하</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">데스크</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">수수료 구조</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { desk: 'Binance OTC', fee: '스프레드 기반 (커미션 없음)', note: '인증 기관 계좌 기준' },
                    { desk: 'Kraken OTC', fee: '$50만 미만 0.2% → $1,000만+ 0.05%', note: '월 볼륨 계층 수수료' },
                    { desk: 'Bitget OTC', fee: '고정가 스프레드 포함', note: '견적 요청 시 공개' },
                    { desk: 'Cumberland', fee: '비공개 (스프레드 기반)', note: 'Principal 모델' },
                    { desk: 'FalconX', fee: '에이전시 커미션', note: '볼륨 기반 할인' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium">{r.desk}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{r.fee}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-xs text-gray-500">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── S7 주요 데스크 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · 주요 OTC 데스크 비교</h2>

            <div className="space-y-3 my-6">
              {[
                {
                  name: 'Cumberland (DRW)',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  model: 'Principal',
                  min: '비공개',
                  desc: '시카고 트레이딩 펌 DRW의 크립토 부문. 채굴사, 헤지펀드 신뢰도 1위. 비트코인 초창기부터 OTC 시장을 이끌어온 역사적 플레이어. 24/7 유동성 제공.',
                  features: ['자기 자본 즉시 유동성', '채굴사 주요 파트너', '파생상품 + 현물 통합'],
                },
                {
                  name: 'FalconX',
                  badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  model: 'Agency',
                  min: '$100K+',
                  desc: '2025년 기준 기관 거래량 $1.5조 돌파. 복수 유동성 제공자 네트워크에서 최적가 소싱하는 에이전시 브로커 모델. 기관 KYC 온보딩 1~2일.',
                  features: ['복수 LP 경쟁으로 최적가', 'API 자동화 지원', '기관 리포팅 및 세무 지원'],
                },
                {
                  name: 'Genesis Global Trading',
                  badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  model: 'Principal + Agency',
                  min: '$250K+',
                  desc: '구조화 거래 및 파생상품 특화. OTC 외 대차(lending)·차입(borrowing) 서비스 통합 제공. 기관 대형 딜 구조화에 특화.',
                  features: ['구조화 상품 설계', '대차/차입 연계', '파생상품 헤징'],
                },
                {
                  name: 'Binance OTC',
                  badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  model: 'Principal',
                  min: '플랫폼 인증 후',
                  desc: '80개 이상 자산 지원. 별도 커미션 없는 스프레드 기반 모델. 바이낸스 생태계와 연동되어 커스터디·스테이킹·파이낸싱 원스톱 제공.',
                  features: ['80+ 자산', '커미션 없음', '바이낸스 생태계 연동'],
                },
                {
                  name: 'Coinbase Prime',
                  badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  model: 'Agency',
                  min: '기관 전용',
                  desc: '미국 규제 환경에서 최고의 신뢰도. ETF 발행사(BlackRock iShares IBIT 커스터디 담당), 연기금, 규제 기관 대응 필요 기관들의 1순위 선택.',
                  features: ['SEC/FINRA 규제 준수', 'ETF 기초자산 소싱', '보험 커버리지'],
                },
                {
                  name: 'Wintermute',
                  badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  model: 'Principal (마켓메이킹 + OTC)',
                  min: '대형 기관',
                  desc: '글로벌 알고리즘 트레이딩 펌. 300개 이상 토큰 마켓메이킹 경험을 OTC에 활용. 이머징 토큰 대량 유동성 제공에서 타의 추종 불허.',
                  features: ['300+ 토큰 지원', '알고리즘 실행', '토큰 발행사 파트너'],
                },
                {
                  name: 'Paradigm',
                  badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  model: 'RFQ 네트워크',
                  min: '기관 전용',
                  desc: '현물 + 옵션 + 선물 통합 RFQ 네트워크. 복수 마켓메이커가 동시에 견적을 제출하고 최적가로 체결. 크립토 옵션 거래에서 압도적 유동성.',
                  features: ['옵션 RFQ 1위', '현물 + 파생 통합', '멀티 마켓메이커'],
                },
              ].map((d, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-900">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <p className="font-bold text-gray-900 dark:text-white">{d.name}</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${d.badge}`}>{d.model}</span>
                    <span className="text-xs text-gray-400">최소 {d.min}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{d.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.features.map((f, j) => (
                      <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── S8 2025 트렌드 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · 2025년 OTC 시장 트렌드</h2>

            <div className="space-y-6 my-6">
              {/* 스테이블코인 */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                <p className="font-bold text-green-800 dark:text-green-300 mb-2">💵 스테이블코인이 OTC의 주인공</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  스테이블코인이 2025년 OTC 현물 거래의 <strong>74.6%</strong>를 차지했다. 2024년 46%에서 급증한 수치다. 시간대와 관할권을 넘나드는 결제에 USDC, USDT, EURC 활용이 폭발적으로 확대되고 있다.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{width: '74.6%'}} />
                  </div>
                  <span className="text-sm font-bold text-green-700 dark:text-green-300 flex-shrink-0">74.6%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">2025년 OTC 현물 거래 중 스테이블코인 비중</p>
              </div>

              {/* 기관 볼륨 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">📈 기관 볼륨 폭발적 성장</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Finery Markets가 400만 건의 기관 플랫폼 현물 거래를 분석한 결과, <strong>2024년 OTC 거래량이 전년 대비 106% 성장</strong>했으며, 스테이블코인 활동은 <strong>147% 급증</strong>했다. 비트코인 현물 ETF 승인 이후 기관 자금 유입이 OTC 시장 성장을 이끌고 있다.
                </p>
              </div>

              {/* 규제 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="font-bold text-purple-800 dark:text-purple-300 mb-2">🏛️ 규제 명확화 — 미국 vs EU</p>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">🇺🇸 미국 (FinCEN)</p>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• OTC 데스크 = MSB(Money Services Business) 분류</li>
                      <li>• SEC(증권형 자산) 또는 CFTC(상품형 자산) 개입</li>
                      <li>• FinCEN에 등록 및 AML 프로그램 의무화</li>
                    </ul>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">🇪🇺 EU (MiCA)</p>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• MiCA 완전 시행 (2024년 12월)</li>
                      <li>• OTC 데스크 = CASP 라이선스 필수</li>
                      <li>• 여행 규칙(Travel Rule) 모든 거래 적용</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Prediction Market OTC */}
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-5">
                <p className="font-bold text-orange-800 dark:text-orange-300 mb-2">🎯 새로운 활용: Prediction Market OTC</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  BitGo와 Susquehanna는 기관 투자자를 위한 <strong>예측 시장 OTC 접근</strong>을 출시했다. 최소 $10만 규모로, 자산은 커스터디에 보관된 채 포지션이 담보화되는 방식이 전통 파생상품 거래와 동일하다. 크립토 OTC가 단순 현물 거래를 넘어 복합 금융 상품으로 확장되는 신호다.
                </p>
              </div>
            </div>

            {/* ── S9 리스크 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · 리스크와 보안 이슈</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  icon: '⚠️',
                  title: '카운터파티 리스크',
                  color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
                  content: (
                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <p>에스크로 없이 거래하면 상대방이 대금을 받고 자산을 전송하지 않을 수 있다. 이를 해결하기 위한 두 가지 메커니즘:</p>
                      <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-3 space-y-2 text-xs font-mono">
                        <p><strong>DVP (Delivery vs Payment)</strong>: 자산과 대금 동시 교환. 한쪽이 전송하지 않으면 다른 쪽도 전송 안 됨.</p>
                        <p><strong>Tri-party 에스크로</strong>: Bitgo, Anchorage 같은 중립적 커스터디언이 양쪽 자산 모두 보관 후 동시 해제.</p>
                      </div>
                    </div>
                  ),
                },
                {
                  icon: '🕵️',
                  title: '자금세탁 위험 — $14억 사건',
                  color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                  content: (
                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <p>2025년, 해커들이 믹서와 OTC 플랫폼을 이용해 <strong>$14억 규모 크립토 탈취 자금을 세탁</strong>한 사건이 발생했다. 이로 인해 많은 데스크들이 엄격한 대응 시스템을 구축했다.</p>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-start gap-2"><span className="text-yellow-600">→</span>Chainalysis/Elliptic 온체인 포렌식 자동 스크리닝</li>
                        <li className="flex items-start gap-2"><span className="text-yellow-600">→</span>믹서(Tornado Cash 등)로 오염된 코인 자동 거부</li>
                        <li className="flex items-start gap-2"><span className="text-yellow-600">→</span>거래당 KYC + 자금 출처 재확인</li>
                      </ul>
                    </div>
                  ),
                },
                {
                  icon: '🔍',
                  title: '온체인 투명성의 역설',
                  color: 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700',
                  content: (
                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <p>블록체인은 설계상 완전히 투명하다. OTC 거래가 온체인으로 정산되면 결국 추적 가능하다. 대형 기관은 Chainalysis 같은 온체인 분석 툴의 감시 대상이 될 수 있다.</p>
                      <p className="text-xs text-gray-500">대응책: 내부 커스터디 이전(Internal Transfer), 네팅(netting)으로 온체인 노출 최소화. 일부 프라이버시 기능 활용.</p>
                    </div>
                  ),
                },
                {
                  icon: '📉',
                  title: '유동성 리스크 (Liquidity Risk)',
                  color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
                  content: (
                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <p>시장 변동성이 극도로 높은 시점(플래시 크래시, 거래소 해킹 직후 등)에는 OTC 데스크도 견적 제공을 거부하거나 스프레드를 대폭 확대할 수 있다. 비상 시점에 유동성이 가장 필요할 때 OTC가 작동하지 않을 리스크.</p>
                    </div>
                  ),
                },
              ].map((r, i) => (
                <div key={i} className={`border rounded-xl p-5 ${r.color}`}>
                  <p className="font-bold text-gray-900 dark:text-white mb-3">{r.icon} {r.title}</p>
                  {r.content}
                </div>
              ))}
            </div>

            {/* ── S10 최종 비교 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · DEX vs CEX vs OTC — 최종 비교</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">항목</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold text-blue-600 dark:text-blue-400">DEX (AMM)</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold text-purple-600 dark:text-purple-400">CEX</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold text-green-600 dark:text-green-400">OTC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '가격 충격', dex: '크다', cex: '중간', otc: '없음 ✓', otcColor: 'text-green-600 dark:text-green-400' },
                    { item: 'MEV 위험', dex: '높음', cex: '낮음', otc: '없음 ✓', otcColor: 'text-green-600 dark:text-green-400' },
                    { item: '프라이버시', dex: '낮음', cex: '낮음', otc: '높음 ✓', otcColor: 'text-green-600 dark:text-green-400' },
                    { item: '최소 거래 규모', dex: '없음', cex: '없음', otc: '$100K+', otcColor: 'text-orange-600 dark:text-orange-400' },
                    { item: '결제 속도', dex: '즉시', cex: '즉시', otc: 'T+0~2', otcColor: 'text-yellow-600 dark:text-yellow-400' },
                    { item: '수수료', dex: '가스+슬리피지', cex: '0.1~0.5%', otc: '스프레드 내 포함', otcColor: '' },
                    { item: '규제 준수', dex: '낮음', cex: '중간', otc: '높음 ✓', otcColor: 'text-green-600 dark:text-green-400' },
                    { item: '카운터파티 리스크', dex: '없음 ✓', cex: '중간', otc: '있음 (관리 필요)', otcColor: 'text-yellow-600 dark:text-yellow-400' },
                    { item: '접근성', dex: '누구나', cex: '누구나', otc: '기관/고액 투자자', otcColor: 'text-orange-600 dark:text-orange-400' },
                    { item: '적합한 거래 규모', dex: '소액', cex: '소~중액', otc: '대형 ($100K+)', otcColor: 'text-green-600 dark:text-green-400' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-600 dark:text-gray-400 text-xs">{r.dex}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-600 dark:text-gray-400 text-xs">{r.cex}</td>
                      <td className={`border border-gray-200 dark:border-gray-700 p-3 text-center text-xs font-medium ${r.otcColor || 'text-gray-600 dark:text-gray-400'}`}>{r.otc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 결론 */}
            <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 my-10 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">결론</p>
              <p className="text-lg font-bold mb-4 leading-relaxed">OTC 데스크는 크립토 시장의 보이지 않는 인프라다.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                바이낸스 차트가 갑자기 크게 움직일 때, 그 움직임을 만든 건 소매 투자자가 아니라 OTC를 통해 조용히 포지션을 잡은 기관일 가능성이 높다.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                2010년대 초반 채굴자들 간의 비공식 거래로 시작한 OTC 시장은 이제 <strong className="text-white">완전히 규제되고 기관 중심의 성숙한 시장</strong>으로 발전했다. 2025년 현재, 비트코인 현물 ETF 승인과 주권 펀드의 크립토 도입으로 OTC 시장은 디지털 자산 인프라의 핵심 축으로 자리잡았다.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 4 — Complete Guide to Crypto OTC Desks</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">How institutions execute large trades quietly · Principal · Agency · RFQ · Settlement</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Daily OTC Volume', value: '$14.4B', sub: '18x institutional-only exchanges' },
                { label: 'Stablecoin Share', value: '74.6%', sub: 'of OTC spot trades in 2025' },
                { label: 'YoY Growth', value: '+106%', sub: '2024 OTC volume' },
                { label: 'Min Trade Size', value: '$100K+', sub: 'major desks' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · Why CEX and DEX Don't Work for Large Trades</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              What happens if you try to buy $50M of Bitcoin on Binance all at once? The order climbs the order book, and the price moves <strong>2–5% instantly</strong>. That's $1M–$2.5M in instant losses on a $50M trade.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              On top of that, the moment your transaction hits the public mempool, <strong>MEV bots launch sandwich attacks</strong> — front-running to push the price up, then back-running to sell. This is the core reason institutions use OTC desks.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">$50M BTC Buy — CEX vs OTC</p>
              <div className="space-y-4">
                {[
                  {
                    label: 'Binance Market Order',
                    badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                    items: ['Price moves 2–5% as order climbs the book', 'Full order visible in market depth', 'MEV sandwich attack risk', 'Expected loss: $1M–$2.5M'],
                    color: 'border-red-200 dark:border-red-800',
                    bad: true,
                  },
                  {
                    label: 'OTC Desk Execution',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                    items: ['Single fixed price regardless of size (zero price impact)', 'Trade details remain private', 'No MEV exposure', 'Actual cost: only 0.1–0.3% spread'],
                    color: 'border-green-200 dark:border-green-800',
                    bad: false,
                  },
                ].map((r, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${r.color} bg-white dark:bg-gray-900`}>
                    <span className={`text-xs font-bold px-2 py-1 rounded mb-3 inline-block ${r.badge}`}>{r.label}</span>
                    <ul className="space-y-1">
                      {r.items.map((item, j) => (
                        <li key={j} className={`text-sm flex items-start gap-2 ${r.bad ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}>
                          <span className="flex-shrink-0 mt-0.5">{r.bad ? '✗' : '✓'}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* S2 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · What Is an OTC Desk?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              An OTC (Over-The-Counter) trading desk is a <strong>private trading service that enables direct trades between two parties, completely separate from public order books</strong>. Like an exchange it connects buyers and sellers, but the critical difference is privacy and price execution.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 rounded-xl p-6 my-6">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">📌 Simple Analogy</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Listing a Picasso at a <strong>public auction (CEX)</strong> means every bidder drives the price up — you get market price, but everything is visible.<br />
                Selling through a <strong>private dealer (OTC)</strong> means you and the buyer negotiate quietly in a private room at an agreed price.
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In 2025, as sovereign funds, hedge funds, and private banks increase crypto exposure, <strong>stealth execution</strong> has become a competitive advantage. OTC desks process roughly <strong>$14.4B</strong> in daily spot volume — approximately 18x institutional-only exchanges.
            </p>

            {/* S3 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · The 4 OTC Trading Models</h2>
            <div className="space-y-4 my-6">
              {[
                {
                  icon: '🏦', title: 'Principal Model',
                  color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  rep: 'Example: Cumberland (DRW)',
                  desc: 'The OTC desk acts as the direct counterparty using its own capital. When a client sells BTC, the desk buys it directly and later unwinds in the market.',
                  pros: ['Instant liquidity (no matching delay)', 'Tight spreads', 'High counterparty trust'],
                  cons: ["Desk's interests may conflict with client's", 'Desk may front-run client flow'],
                },
                {
                  icon: '🔗', title: 'Agency / Broker Model',
                  color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                  titleColor: 'text-purple-700 dark:text-purple-300',
                  rep: 'Example: FalconX ($1.5T+ processed, 2025)',
                  desc: 'The desk acts as a neutral broker, matching buyers and sellers without deploying its own capital. Sources best price from multiple liquidity providers.',
                  pros: ['Neutral — no conflict of interest', 'Best execution from multiple LPs', 'Fiduciary duty to client'],
                  cons: ['Slight execution delay', 'Slippage possible on complex large orders'],
                },
                {
                  icon: '📋', title: 'RFQ (Request for Quote)',
                  color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
                  titleColor: 'text-orange-700 dark:text-orange-300',
                  rep: 'On-chain versions: UniswapX, CoW Protocol, Hashflow, Paradigm',
                  desc: 'Simultaneously requests quotes from multiple market makers, then executes at the best price. Competitive bidding ensures price discovery.',
                  pros: ['Best price via competitive quotes', 'Transparent competition', 'Works on-chain and off-chain'],
                  cons: ['Inefficient for small trades', 'Requires waiting for quote responses'],
                },
                {
                  icon: '🤝', title: 'Bilateral OTC (Direct Negotiation)',
                  color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                  titleColor: 'text-green-700 dark:text-green-300',
                  rep: 'Used by: sovereign wealth funds, nation-state-scale positions',
                  desc: 'Parties negotiate directly with a legal contract and third-party escrow. Sovereign funds use this to execute $100M+ BTC positions across multiple tranches.',
                  pros: ['Complete privacy', 'Fully customizable terms', 'Can split into multiple settlements'],
                  cons: ['High counterparty risk', 'Legal contract required', 'Longer processing time'],
                },
              ].map((m, i) => (
                <div key={i} className={`border rounded-xl p-5 ${m.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className={`font-bold text-base ${m.titleColor}`}>{m.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{m.rep}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{m.desc}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Pros</p>
                      <ul className="space-y-0.5">{m.pros.map((p, j) => <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Cons</p>
                      <ul className="space-y-0.5">{m.cons.map((c, j) => <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1"><span className="text-red-500 flex-shrink-0">−</span>{c}</li>)}</ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S4 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · OTC Trade Process — Step by Step</h2>

            {/* Simple flow explanation */}
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">💡 How Money and Crypto Actually Move — A Simple Picture</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                OTC is simply: <strong>"negotiate by phone, pay in dollars via bank wire, receive crypto on-chain."</strong> You pay USD and receive BTC.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Off-chain — Negotiate by phone / message</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Institution: "I want to buy 100 BTC" → Desk: "We'll sell at $9,500,000" → Institution: "Deal."<br />Nothing touches the blockchain yet. Nothing is in the mempool.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-3">
                  <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-600 ml-2.5" />
                  <p className="text-xs text-slate-400">Agreement reached → simultaneous settlement</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-400 dark:bg-blue-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">USD moves (off-chain)</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 flex-wrap">
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">Institution bank account</span>
                      <span>→</span>
                      <span className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">OTC Desk bank account</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">$9,500,000</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Normal bank wire transfer. Not blockchain.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-3">
                  <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-600 ml-2.5" />
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-400 dark:bg-orange-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-orange-200 dark:border-orange-700">
                    <p className="text-sm font-semibold text-orange-700 dark:text-orange-300 mb-1">BTC moves (on-chain)</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 flex-wrap">
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">Desk wallet (0xABC…)</span>
                      <span>→</span>
                      <span className="bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">Institution wallet (0xDEF…)</span>
                      <span className="text-orange-600 dark:text-orange-400 font-bold">100 BTC</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Simple transfer of a pre-agreed amount. On-chain only shows "A → B: 100 BTC". No price information visible.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-2">🛡️ Why MEV Bots Can't Interfere</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  A DEX swap puts your intention — <strong>"I'm about to buy BTC, and I'll accept up to this price"</strong> — into the mempool, publicly visible. MEV bots read that and sandwich you.<br /><br />
                  In OTC, the negotiation happens off-chain. By the time anything hits the blockchain, <strong>the trade is already done</strong> — it's just a plain transfer. The "I'm about to buy" signal never existed on-chain, so there's nothing for a bot to exploit.
                </p>
              </div>

              <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">🔒 DVP — "What if I send dollars but they don't send BTC?"</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Without a mechanism, whoever pays first takes all the risk. <strong>DVP (Delivery vs Payment)</strong> and tri-party escrow solve this.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 text-xs font-mono text-gray-600 dark:text-gray-400 space-y-1">
                  <p>① Neutral escrow (e.g. Bitgo) sits in the middle</p>
                  <p>② Institution sends USD to escrow → Desk sends BTC to escrow</p>
                  <p>③ Both confirmed → <span className="text-green-500">simultaneous release</span></p>
                  <p className="text-gray-400">→ Neither party can take the other's asset and run</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">Note: OTC has little to do with DEX. DEX is an automated public market; OTC is a private institutional deal — closer to traditional finance's "over-the-counter" trading.</p>
            </div>

            <div className="space-y-4 my-6">
              {[
                {
                  n: '01', title: 'KYC / AML Onboarding', duration: '1–5 business days',
                  color: 'bg-slate-50 dark:bg-slate-800/50',
                  items: ['ID and corporate formation documents', 'Proof of Funds', 'Director background check', 'On-chain forensics — coin source trace (Chainalysis/Elliptic)', 'ISDA master agreement for major desks'],
                  note: 'One-time. Once onboarded, subsequent trades execute immediately.',
                },
                {
                  n: '02', title: 'Inquiry', duration: 'Immediate',
                  color: 'bg-blue-50 dark:bg-blue-900/20',
                  items: ['Asset type (BTC, ETH, USDT, etc.)', 'Size and direction (buy/sell)', 'Desired execution window (immediate vs. tranched)', 'Channels: phone, secure messaging, API, trading portal'],
                  note: 'Larger trades intentionally share minimal info to avoid market exposure.',
                },
                {
                  n: '03', title: 'Quote', duration: 'Valid: 10 seconds – a few minutes',
                  color: 'bg-purple-50 dark:bg-purple-900/20',
                  items: ['Desk quotes based on live market + proprietary liquidity pool', 'Single all-in price (e.g. BTC at $95,100 vs market $95,200)', 'Quote window shrinks with volatility', 'RFQ model compares quotes from multiple MMs simultaneously'],
                  note: 'Declining a quote carries no penalty. You can re-inquire with another desk.',
                },
                {
                  n: '04', title: 'Execution', duration: 'Seconds to minutes',
                  color: 'bg-orange-50 dark:bg-orange-900/20',
                  items: ['Final agreement on price and terms — verbal or electronic', 'Off-exchange execution with signed order', 'Trade confirmation issued', 'Large orders may use TWAP or tranche execution'],
                  note: 'Non-cancellable once executed. Legally binding contract.',
                },
                {
                  n: '05', title: 'Settlement', duration: 'T+0 to T+2',
                  color: 'bg-green-50 dark:bg-green-900/20',
                  items: ['T+0: Immediate — pre-funded escrow or small trades', 'T+1~T+2: Next-day — standard for large trades', 'DVP (Delivery vs Payment): simultaneous asset ↔ payment exchange', 'Netting / Settle Later: bundle multiple trades into one net settlement', 'On-chain transfer or internal custody movement'],
                  note: 'Platforms like Crypto.com offer Settle Later for treasury management efficiency.',
                },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-bold text-gray-300 dark:text-gray-600 flex-shrink-0 leading-none">{s.n}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <p className="font-bold text-gray-900 dark:text-white">{s.title}</p>
                        <span className="text-xs text-gray-500 font-mono">{s.duration}</span>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {s.items.map((item, j) => (
                          <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                            <span className="text-gray-400 flex-shrink-0 mt-0.5">└</span>{item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-500 bg-white/60 dark:bg-gray-900/40 rounded-lg px-3 py-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* S5 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Who Uses OTC Desks and Why</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">User Type</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Reason for OTC</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Asset</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Institutions / Hedge Funds', reason: 'Build/liquidate large positions without price impact', asset: 'BTC, ETH' },
                    { type: 'Crypto Miners', reason: 'Sell mined BTC in bulk without dumping the market', asset: 'BTC' },
                    { type: 'Corporate Treasury', reason: 'Balance sheet BTC/USDC allocation', asset: 'BTC, USDC' },
                    { type: 'ETF Issuers', reason: 'Rapid large-scale sourcing of underlying assets', asset: 'BTC, ETH' },
                    { type: 'Dollar-scarce PSPs', reason: 'USDC ↔ local currency instant exchange', asset: 'USDC, USDT' },
                    { type: 'Sovereign Wealth Funds', reason: 'Nation-scale position execution in private', asset: 'BTC, ETH, USDC' },
                    { type: 'Crypto Startups', reason: 'Token sale proceeds or runway conversion', asset: 'Various tokens' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-slate-700 dark:text-slate-300">{r.type}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{r.reason}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-500">{r.asset}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* S6 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Fee Structure</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="font-bold text-blue-700 dark:text-blue-300 mb-2 text-sm">📊 Spread-Based</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Fee is embedded in the quoted price. No explicit commission. Used by most major desks.</p>
                <div className="font-mono text-xs bg-gray-100 dark:bg-gray-900 rounded p-3 space-y-1 text-gray-600 dark:text-gray-400">
                  <p>Market: BTC $95,200</p>
                  <p>Quote: $95,100 (-$100)</p>
                  <p>Spread: ~0.1% embedded</p>
                </div>
              </div>
              <div className="border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="font-bold text-purple-700 dark:text-purple-300 mb-2 text-sm">💳 Explicit Commission</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Trades at market price + separate fee. Transparent. Common in agency model.</p>
                <div className="font-mono text-xs bg-gray-100 dark:bg-gray-900 rounded p-3 space-y-1 text-gray-600 dark:text-gray-400">
                  <p>Fill at market price</p>
                  <p>Fee: 0.1–0.5% of notional</p>
                  <p>Discounts at higher monthly volume</p>
                </div>
              </div>
            </div>

            {/* S7 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · Major OTC Desks Compared</h2>
            <div className="space-y-3 my-6">
              {[
                { name: 'Cumberland (DRW)', badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', model: 'Principal', min: 'Undisclosed', desc: "DRW's crypto arm. Trusted #1 by miners and hedge funds. Pioneer in OTC crypto markets since early Bitcoin days. 24/7 liquidity.", features: ['Instant proprietary liquidity', 'Premier miner partner', 'Spot + derivatives integrated'] },
                { name: 'FalconX', badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', model: 'Agency', min: '$100K+', desc: 'Processed $1.5T+ in institutional volume by 2025. Agency broker sourcing best price from multiple LPs. 1–2 day institutional KYC.', features: ['Best price from competing LPs', 'API automation', 'Institutional reporting'] },
                { name: 'Genesis Global Trading', badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', model: 'Principal + Agency', min: '$250K+', desc: 'Specialized in structured trades and derivatives. Integrated OTC + lending + borrowing platform.', features: ['Structured product design', 'Lending/borrowing integration', 'Derivatives hedging'] },
                { name: 'Binance OTC', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', model: 'Principal', min: 'After platform verification', desc: '80+ assets. Zero-commission spread model. Integrated with full Binance ecosystem: custody, staking, financing.', features: ['80+ assets', 'No commission', 'Binance ecosystem'] },
                { name: 'Coinbase Prime', badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', model: 'Agency', min: 'Institutional only', desc: '#1 for regulatory compliance in the US. Chosen by ETF issuers (BlackRock iShares IBIT custody), pension funds, and regulated entities.', features: ['SEC/FINRA compliant', 'ETF asset sourcing', 'Insurance coverage'] },
                { name: 'Wintermute', badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', model: 'Principal (MM + OTC)', min: 'Large institutions', desc: 'Global algorithmic trading firm. Market-making experience across 300+ tokens powers their OTC desk.', features: ['300+ tokens', 'Algorithmic execution', 'Token issuer partner'] },
                { name: 'Paradigm', badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300', model: 'RFQ Network', min: 'Institutional only', desc: 'Unified spot + options + futures RFQ network. Dominant liquidity in crypto options.', features: ['#1 options RFQ', 'Spot + derivatives unified', 'Multi-market-maker'] },
              ].map((d, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-900">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <p className="font-bold text-gray-900 dark:text-white">{d.name}</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${d.badge}`}>{d.model}</span>
                    <span className="text-xs text-gray-400">Min: {d.min}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{d.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.features.map((f, j) => <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">{f}</span>)}
                  </div>
                </div>
              ))}
            </div>

            {/* S8 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · 2025 OTC Market Trends</h2>
            <div className="space-y-6 my-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                <p className="font-bold text-green-800 dark:text-green-300 mb-2">💵 Stablecoins Now Dominate OTC</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">Stablecoins accounted for <strong>74.6%</strong> of OTC spot trades in 2025, up sharply from 46% in 2024. USDC, USDT, and EURC are being used heavily for cross-time-zone and cross-jurisdiction settlement.</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{width: '74.6%'}} />
                  </div>
                  <span className="text-sm font-bold text-green-700 dark:text-green-300 flex-shrink-0">74.6%</span>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="font-bold text-blue-800 dark:text-blue-300 mb-2">📈 Explosive Institutional Volume Growth</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Finery Markets analyzed 4M institutional platform spot trades and found <strong>OTC volume grew 106% YoY in 2024</strong>, with stablecoin activity surging <strong>147%</strong>. Bitcoin spot ETF approval has been the primary driver of institutional inflows into OTC markets.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="font-bold text-purple-800 dark:text-purple-300 mb-2">🏛️ Regulatory Clarity — US vs EU</p>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">🇺🇸 United States</p>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• OTC desks classified as MSB by FinCEN</li>
                      <li>• SEC (securities) or CFTC (commodities) oversight</li>
                      <li>• FinCEN registration + AML program mandatory</li>
                    </ul>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">🇪🇺 European Union</p>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <li>• MiCA fully in force (December 2024)</li>
                      <li>• OTC desks require CASP license</li>
                      <li>• Travel Rule applies to all transactions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-5">
                <p className="font-bold text-orange-800 dark:text-orange-300 mb-2">🎯 New Use Case: Prediction Market OTC</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">BitGo and Susquehanna launched institutional OTC access to prediction markets. Minimum $100K, assets stay in custody as collateral — identical to traditional derivatives trading. A signal that crypto OTC is expanding beyond simple spot into complex financial products.</p>
              </div>
            </div>

            {/* S9 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · Risks and Security</h2>
            <div className="space-y-4 my-6">
              {[
                { icon: '⚠️', title: 'Counterparty Risk', color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800', content: <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2"><p>Without escrow, trust is everything. Two mechanisms to address this:</p><div className="bg-white/60 dark:bg-gray-900/40 rounded-lg p-3 space-y-2 text-xs font-mono"><p><strong>DVP (Delivery vs Payment)</strong>: Assets and payment exchange simultaneously — neither party can default unilaterally.</p><p><strong>Tri-party escrow</strong>: A neutral custodian (Bitgo, Anchorage) holds both sides' assets and releases them simultaneously.</p></div></div> },
                { icon: '🕵️', title: 'Money Laundering Risk — The $1.4B Incident', color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800', content: <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2"><p>In 2025, hackers used mixers and OTC platforms to launder <strong>$1.4B in stolen crypto</strong>. This triggered major desk upgrades:</p><ul className="space-y-1 text-xs"><li className="flex items-start gap-2"><span className="text-yellow-600">→</span>Automated Chainalysis/Elliptic on-chain forensics screening</li><li className="flex items-start gap-2"><span className="text-yellow-600">→</span>Auto-reject of coins tainted by mixers (Tornado Cash etc.)</li><li className="flex items-start gap-2"><span className="text-yellow-600">→</span>Per-trade KYC + source of funds re-verification</li></ul></div> },
                { icon: '🔍', title: 'The On-Chain Transparency Paradox', color: 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700', content: <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2"><p>Blockchain is transparent by design. OTC trades settled on-chain are ultimately traceable. Large institutions become targets for on-chain analytics firms like Chainalysis.</p><p className="text-xs text-gray-500">Mitigation: internal custody transfers, netting to minimize on-chain exposure.</p></div> },
                { icon: '📉', title: 'Liquidity Risk', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800', content: <div className="text-sm text-gray-700 dark:text-gray-300"><p>During extreme volatility events (flash crashes, exchange hacks), OTC desks may refuse to quote or massively widen spreads. Liquidity can disappear exactly when you need it most.</p></div> },
              ].map((r, i) => (
                <div key={i} className={`border rounded-xl p-5 ${r.color}`}>
                  <p className="font-bold text-gray-900 dark:text-white mb-3">{r.icon} {r.title}</p>
                  {r.content}
                </div>
              ))}
            </div>

            {/* S10 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · DEX vs CEX vs OTC — Final Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold text-blue-600 dark:text-blue-400">DEX (AMM)</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold text-purple-600 dark:text-purple-400">CEX</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-center font-semibold text-green-600 dark:text-green-400">OTC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'Price Impact', dex: 'High', cex: 'Medium', otc: 'None ✓', c: 'text-green-600 dark:text-green-400' },
                    { item: 'MEV Risk', dex: 'High', cex: 'Low', otc: 'None ✓', c: 'text-green-600 dark:text-green-400' },
                    { item: 'Privacy', dex: 'Low', cex: 'Low', otc: 'High ✓', c: 'text-green-600 dark:text-green-400' },
                    { item: 'Min Trade Size', dex: 'None', cex: 'None', otc: '$100K+', c: 'text-orange-600 dark:text-orange-400' },
                    { item: 'Settlement Speed', dex: 'Instant', cex: 'Instant', otc: 'T+0~2', c: 'text-yellow-600 dark:text-yellow-400' },
                    { item: 'Fees', dex: 'Gas + slippage', cex: '0.1–0.5%', otc: 'Spread embedded', c: '' },
                    { item: 'Regulatory Compliance', dex: 'Low', cex: 'Medium', otc: 'High ✓', c: 'text-green-600 dark:text-green-400' },
                    { item: 'Counterparty Risk', dex: 'None ✓', cex: 'Medium', otc: 'Present (managed)', c: 'text-yellow-600 dark:text-yellow-400' },
                    { item: 'Accessibility', dex: 'Anyone', cex: 'Anyone', otc: 'Institutional / HNW', c: 'text-orange-600 dark:text-orange-400' },
                    { item: 'Best Trade Size', dex: 'Small', cex: 'Small–Medium', otc: 'Large ($100K+)', c: 'text-green-600 dark:text-green-400' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-600 dark:text-gray-400 text-xs">{r.dex}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-center text-gray-600 dark:text-gray-400 text-xs">{r.cex}</td>
                      <td className={`border border-gray-200 dark:border-gray-700 p-3 text-center text-xs font-medium ${r.c || 'text-gray-600 dark:text-gray-400'}`}>{r.otc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Conclusion */}
            <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 my-10 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Conclusion</p>
              <p className="text-lg font-bold mb-4 leading-relaxed">OTC desks are the invisible infrastructure of crypto markets.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                When the Binance chart moves sharply without obvious news, it's more likely an institution quietly building a position via OTC than retail traders reacting.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                OTC crypto markets started as informal trades between miners in the early 2010s. They've matured into a <strong className="text-white">fully regulated, institution-centric infrastructure</strong> that now forms one of the core pillars of digital asset markets globally.
              </p>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
