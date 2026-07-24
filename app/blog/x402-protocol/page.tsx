'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function X402Page() {
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
            {isKo ? 'AI 에이전트 결제' : 'AI Agent Payments'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'x402 프로토콜 — HTTP 402의 30년 만의 부활, AI 에이전트가 USDC로 API를 즉시 결제한다'
              : 'x402 Protocol — HTTP 402 Revived After 30 Years: AI Agents Pay for APIs Instantly in USDC'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '1991년 HTTP 스펙에 정의됐지만 한 번도 쓰인 적 없던 상태코드 402 Payment Required. Coinbase와 Cloudflare가 2025년 5월 이것을 꺼내 AI 에이전트 시대의 결제 표준으로 만들었다. 계정 없이, 카드 없이, 사람 개입 없이 — API 1건당 USDC로 즉시 결제.'
              : 'HTTP status code 402 Payment Required was defined in the 1991 HTTP spec but never actually used. In May 2025, Coinbase and Cloudflare pulled it out and built it into the payment standard for the AI agent era. No account, no card, no human in the loop — instant USDC payment per API call.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 7월 25일' : 'July 25, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '20분 읽기' : '20 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/x402.png" alt="x402 Protocol AI Agent Payments" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 1: x402란 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. x402란 무엇인가 — HTTP 402의 30년 만의 부활' : '1. What Is x402 — HTTP 402 Revived After 30 Years'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '인터넷을 설계한 사람들은 처음부터 결제가 필요한 리소스를 상상했다. 1991년 HTTP 스펙 초안에는 이미 402 Payment Required 상태코드가 정의되어 있었다. "이 리소스에 접근하려면 결제가 필요하다"는 의미다. 그런데 이 코드는 30년 넘게 실제로 쓰인 적이 없었다. 결제 인프라가 HTTP 레벨에서 작동할 만큼 성숙하지 않았기 때문이다.'
              : 'The people who designed the internet imagined payment-gated resources from the start. The 1991 HTTP spec draft already defined the 402 Payment Required status code — meaning "payment is required to access this resource." But this code was never actually used for over 30 years, because payment infrastructure wasn\'t mature enough to work at the HTTP level.'}
          </p>

          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-violet-800 mb-4 text-lg">{isKo ? '2025년 5월, Coinbase + Cloudflare가 꺼내들었다' : 'May 2025: Coinbase + Cloudflare finally pulled it out'}</div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {isKo
                ? 'x402는 HTTP 402 코드를 실제로 구현한 오픈 표준이다. Coinbase와 Cloudflare가 공동으로 설계하고 공개했다. 이름의 "x"는 실험적(experimental) 확장을 의미하며, 402는 HTTP 상태코드를 그대로 가리킨다. 핵심 아이디어는 하나다 — AI 에이전트가 사람 개입 없이, 계정 없이, 카드 없이 API 호출 1건당 USDC로 즉시 결제한다.'
                : 'x402 is an open standard that actually implements the HTTP 402 code. Coinbase and Cloudflare jointly designed and published it. The "x" means experimental extension; "402" refers directly to the HTTP status code. The core idea is singular: AI agents pay for each API call instantly in USDC — no human involvement, no account, no card.'}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: isKo ? '발표' : 'Announced', value: isKo ? '2025년 5월' : 'May 2025', sub: isKo ? 'Coinbase + Cloudflare' : 'Coinbase + Cloudflare' },
                { label: isKo ? '주 결제 레일' : 'Primary rail', value: 'Base + USDC', sub: isKo ? '기본 체인·토큰' : 'default chain & token' },
                { label: isKo ? '표준 유형' : 'Standard type', value: isKo ? '오픈 표준' : 'Open Standard', sub: isKo ? 'MIT 라이선스' : 'MIT License' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-violet-100 rounded-xl p-4 text-center">
                  <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                  <div className="font-black text-slate-900 text-lg">{item.value}</div>
                  <div className="text-xs text-slate-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '왜 지금인가 — 타이밍의 이유' : 'Why now — the timing reason'}</div>
            <div className="space-y-3 text-sm">
              {(isKo ? [
                { point: 'AI 에이전트의 급증', desc: '2025~2026년 AI 에이전트가 폭발적으로 늘어났다. 이 에이전트들은 뉴스 API, 시세 API, GPU 클라우드, 데이터 API를 자동으로 호출한다. 문제는 기존 결제 시스템이 이 자동화를 지원하지 못한다는 것이다 — 카드 등록, OAuth 인증, 월 구독이 필요하다.' },
                { point: '스테이블코인의 성숙', desc: 'USDC + Base 조합이 초당 수만 건, $0.001 미만 수수료로 처리 가능한 결제 레일이 됐다. 마이크로페이먼트가 경제적으로 가능해진 것이다. $0.001짜리 API 호출에 카드 수수료 $0.30을 붙이는 것은 말이 안 된다.' },
                { point: 'HTTP 레이어 통합', desc: 'API 생태계 전체가 HTTP 기반이다. 결제 로직을 HTTP 레이어에 바로 심을 수 있다면, 모든 API가 결제 가능 API가 된다. 미들웨어 한 줄이면 충분하다.' },
              ] : [
                { point: 'Surge of AI agents', desc: 'AI agents exploded in 2025–2026. These agents automatically call news APIs, price feeds, GPU clouds, and data APIs. The problem: existing payment systems can\'t support this automation — card registration, OAuth, monthly subscriptions are required.' },
                { point: 'Stablecoin maturity', desc: 'The USDC + Base combination became a payment rail capable of handling tens of thousands of transactions per second at under $0.001 in fees. Micropayments became economically viable. Attaching a $0.30 card fee to a $0.001 API call makes no sense.' },
                { point: 'HTTP layer integration', desc: 'The entire API ecosystem is HTTP-based. If payment logic can be embedded directly into the HTTP layer, every API becomes a payable API. One middleware line is enough.' },
              ]).map((item, i) => (
                <div key={i} className="flex gap-3 border-t border-slate-800 pt-3 first:border-0 first:pt-0">
                  <span className="text-violet-400 font-bold shrink-0 text-xs w-4">{i + 1}</span>
                  <div>
                    <div className="text-slate-200 font-semibold text-xs mb-1">{item.point}</div>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: 기술 작동 방식 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. 기술 작동 방식 — 요청에서 결제까지 3단계' : '2. How It Works — 3 Steps from Request to Payment'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'x402의 흐름은 단순하다. HTTP 표준을 그대로 따르면서 결제 레이어를 추가한 것이다. 서버 입장에서는 미들웨어 한 줄, 클라이언트(에이전트) 입장에서는 SDK 한 줄이면 된다.'
              : 'The x402 flow is simple. It adds a payment layer while staying true to HTTP standards. For servers, one middleware line. For clients (agents), one SDK line.'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: '1',
                color: 'bg-blue-600',
                title: isKo ? 'AI 에이전트 → API 요청' : 'AI agent → API request',
                desc: isKo
                  ? 'AI 에이전트가 평범한 HTTP GET/POST 요청을 보낸다. 이 시점에는 결제 정보가 없다. 그냥 "이 데이터 줘"다.'
                  : 'The AI agent sends a normal HTTP GET/POST request. No payment info at this point. Just "give me this data."',
                code: 'GET /api/market-data/BTC HTTP/1.1\nHost: api.example.com',
              },
              {
                step: '2',
                color: 'bg-amber-500',
                title: isKo ? '서버 → 402 응답 + 결제 조건 반환' : 'Server → 402 response + payment terms',
                desc: isKo
                  ? '서버가 402 상태코드로 응답하면서 결제 조건을 헤더에 담아 내려준다. "이 API는 $0.001 USDC, Base 체인, 이 주소로 보내면 돼".'
                  : 'The server responds with a 402 status code, including payment terms in the headers. "This API costs $0.001 USDC, Base chain, send to this address."',
                code: 'HTTP/1.1 402 Payment Required\nX-Payment-Amount: 1000\nX-Payment-Asset: USDC\nX-Payment-Chain: base\nX-Payment-Address: 0x...',
              },
              {
                step: '3',
                color: 'bg-green-600',
                title: isKo ? '에이전트 → USDC 결제 → 재요청 → 데이터 반환' : 'Agent → USDC payment → re-request → data returned',
                desc: isKo
                  ? '에이전트가 Base 체인에서 USDC 결제 트랜잭션을 생성하고, 트랜잭션 해시를 헤더에 담아 같은 API를 재요청한다. 서버가 온체인에서 결제를 확인하면 데이터를 반환한다. 전체 과정 약 1~2초.'
                  : 'The agent creates a USDC payment transaction on Base, then re-requests the same API with the transaction hash in the header. The server verifies the payment on-chain and returns the data. Total time: ~1–2 seconds.',
                code: 'GET /api/market-data/BTC HTTP/1.1\nX-Payment-Tx: 0xabc123...\n\n→ HTTP/1.1 200 OK\n{"price": 98234, ...}',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className={`${item.color} text-white px-5 py-3 flex items-center gap-3`}>
                  <span className="font-black text-lg w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm">{item.step}</span>
                  <span className="font-bold">{item.title}</span>
                </div>
                <div className="p-5 grid md:grid-cols-2 gap-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  <pre className="bg-slate-900 text-green-400 text-xs p-3 rounded-lg font-mono leading-relaxed overflow-x-auto">{item.code}</pre>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-3">{isKo ? '기존 결제 방식과의 차이' : 'Difference from existing payment methods'}</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 text-slate-500 font-semibold">{isKo ? '항목' : 'Item'}</th>
                    <th className="text-left py-2 text-slate-500 font-semibold">{isKo ? '기존 방식' : 'Traditional'}</th>
                    <th className="text-left py-2 text-violet-700 font-semibold">x402</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {(isKo ? [
                    ['계정 등록', '필요 (이메일 + 카드)', '불필요'],
                    ['최소 결제 단위', '$0.50+ (카드 수수료 기준)', '$0.00001 (온체인 수수료만)'],
                    ['사람 개입', '카드 등록, 인증 필요', '완전 자동 (에이전트 자율)'],
                    ['결제 확인', '수일~수초 (카드사 승인)', '온체인 확인 ~1초'],
                    ['글로벌 접근', '국가별 카드사 제한', '인터넷 되면 전 세계 동일'],
                    ['API 통합', 'OAuth + Billing + Webhook', 'HTTP 미들웨어 한 줄'],
                  ] : [
                    ['Account registration', 'Required (email + card)', 'Not required'],
                    ['Minimum payment unit', '$0.50+ (based on card fees)', '$0.00001 (on-chain fee only)'],
                    ['Human involvement', 'Card registration, auth required', 'Fully automated (agent-autonomous)'],
                    ['Payment confirmation', 'Days to seconds (card approval)', 'On-chain confirmation ~1 sec'],
                    ['Global access', 'Limited by country/card issuer', 'Same worldwide if internet works'],
                    ['API integration', 'OAuth + Billing + Webhook', 'One HTTP middleware line'],
                  ]).map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 text-slate-700 font-medium">{row[0]}</td>
                      <td className="py-2 text-red-500">{row[1]}</td>
                      <td className="py-2 text-green-600 font-semibold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: 2026년 현황 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. 2026년 현황 — 숫자로 보는 성장' : '3. 2026 Status — Growth in Numbers'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '출시 1년여 만에 수치는 인상적이다. 대부분이 테스트 트래픽이지만, 실제 상용 통합이 늘어나고 있다는 신호도 뚜렷하다.'
              : 'Just over a year since launch, the numbers are impressive. Most is still test traffic, but there are clear signals of growing real commercial integrations.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { label: isKo ? 'Base 체인 처리 건수' : 'Base chain transactions', value: '1억 1,900만+', unit: isKo ? '건' : 'txns', color: 'bg-blue-50 border-blue-200 text-blue-800', note: isKo ? '메인 네트워크' : 'Main network' },
              { label: isKo ? 'Solana 처리 건수' : 'Solana transactions', value: '3,500만+', unit: isKo ? '건' : 'txns', color: 'bg-purple-50 border-purple-200 text-purple-800', note: isKo ? '2위 체인' : '2nd chain' },
              { label: isKo ? '연간 환산 볼륨' : 'Annualized volume', value: '~$6억', unit: '', color: 'bg-green-50 border-green-200 text-green-800', note: isKo ? '2026년 7월 기준' : 'As of July 2026' },
              { label: isKo ? '활성 AI 에이전트' : 'Active AI agents', value: '6만 9,000개', unit: '', color: 'bg-violet-50 border-violet-200 text-violet-800', note: isKo ? 'USDC 지갑 보유' : 'holding USDC wallets' },
            ].map((item, i) => (
              <div key={i} className={`border ${item.color} rounded-xl p-5`}>
                <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                <div className="text-3xl font-black text-slate-900 mb-1">{item.value}<span className="text-lg font-normal text-slate-500 ml-1">{item.unit}</span></div>
                <div className="text-xs text-slate-400">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <div className="font-bold text-amber-800 mb-2">{isKo ? '솔직한 해석 — 대부분은 아직 테스트다' : 'Honest read — most is still test traffic'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? '연간 $6억이라는 수치는 인상적이지만, 일평균으로 나누면 약 $164만, 건당 평균 단가로 보면 대부분 $0.001~$0.01 수준의 마이크로페이먼트다. 활성 에이전트 6.9만 개 중 실제 상업적 목적으로 운영되는 것은 소수다. 그러나 방향성은 명확하다 — 수가 늘고 있고, 실제 기업 통합이 늘고 있다.'
                : 'The $600M annualized figure sounds impressive, but divided by days it\'s ~$1.64M/day, and average ticket size is mostly $0.001–$0.01 micropayments. Of the 69K active agents, only a fraction operate for real commercial purposes. But the direction is clear — numbers are growing and real enterprise integrations are increasing.'}
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-bold text-slate-800 mb-4">{isKo ? '주요 실제 통합 사례' : 'Key real-world integrations'}</div>
            {[
              {
                company: 'Stripe',
                logo: '🔷',
                desc: isKo
                  ? 'Stripe가 공식 x402 결제 지원을 발표했다. docs.stripe.com/payments/machine/x402에서 가이드 제공. AI 에이전트를 위한 "머신 페이먼트" 카테고리를 별도 신설.'
                  : 'Stripe officially announced x402 payment support with a guide at docs.stripe.com/payments/machine/x402. Created a separate "machine payments" category for AI agents.',
              },
              {
                company: 'Coinbase Agent.market',
                logo: '🔵',
                desc: isKo
                  ? 'Coinbase가 x402 기반 AI 에이전트 앱스토어 Agent.market을 출시했다. 에이전트들이 서비스를 사고파는 마켓플레이스로, 결제는 모두 x402 + USDC로 이루어진다. 에이전트 경제의 "앱스토어 순간"을 목표로 한다.'
                  : 'Coinbase launched Agent.market, an x402-based AI agent app store. It\'s a marketplace where agents buy and sell services, with all payments in x402 + USDC. Aims to be the "App Store moment" for the agent economy.',
              },
              {
                company: 'CoinGecko',
                logo: '🦎',
                desc: isKo
                  ? '코인 시세 데이터 API를 x402로 유료화했다. 무료 API 한도 초과 시 에이전트가 자동으로 x402 결제 후 추가 쿼리를 실행하는 방식.'
                  : 'Monetized its crypto price data API via x402. When the free API limit is exceeded, agents automatically make x402 payments and execute additional queries.',
              },
              {
                company: 'Hyperbolic (GPU 클라우드)',
                logo: '⚡',
                desc: isKo
                  ? 'AI 추론 GPU 클라우드 서비스를 x402로 결제 가능하게 했다. AI 에이전트가 다른 AI 모델을 API로 호출하고 즉시 USDC로 결제하는 "에이전트 간 거래" 시나리오를 실현.'
                  : 'Made AI inference GPU cloud services payable via x402. Realized the "agent-to-agent transaction" scenario where an AI agent calls another AI model via API and pays instantly in USDC.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-4 flex gap-4">
                <span className="text-2xl shrink-0">{item.logo}</span>
                <div>
                  <div className="font-bold text-slate-800 text-sm mb-1">{item.company}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: AI 에이전트 경제 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. AI 에이전트 경제와 x402 — 왜 이게 결제의 미래인가' : '4. AI Agent Economy and x402 — Why This Is the Future of Payments'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'AI 에이전트가 폭발적으로 늘어나면서 기존 결제 시스템이 병목이 됐다. 에이전트는 24시간 자율로 수백, 수천 건의 API를 호출한다. 사람이 개입해서 결제를 승인하거나, 구독을 관리하거나, 계정을 등록할 수 없다.'
              : 'As AI agents proliferate explosively, traditional payment systems have become bottlenecks. Agents call hundreds or thousands of APIs autonomously around the clock. Humans can\'t intervene to approve payments, manage subscriptions, or register accounts.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? 'AI 에이전트의 전형적인 하루' : 'A typical day for an AI agent'}</div>
            <div className="space-y-2 text-sm font-mono">
              {(isKo ? [
                { time: '00:02', action: 'CoinGecko API → 시세 조회 ($0.001 USDC)', status: 'ok' },
                { time: '00:02', action: 'Hyperbolic GPU → GPT-4o 추론 호출 ($0.003 USDC)', status: 'ok' },
                { time: '00:03', action: 'Weather API → 경제 지표 상관관계 분석 ($0.0005 USDC)', status: 'ok' },
                { time: '00:05', action: '트레이드 실행 판단 → Aave 유동성 확인 ($0.001 USDC)', status: 'ok' },
                { time: '06:17', action: '뉴스 요약 API → 주요 이벤트 스캔 ($0.002 USDC)', status: 'ok' },
                { time: '...', action: isKo ? '하루 평균 2,000~10,000건 자율 API 호출' : 'Average 2,000–10,000 autonomous API calls per day', status: 'info' },
              ] : [
                { time: '00:02', action: 'CoinGecko API → price query ($0.001 USDC)', status: 'ok' },
                { time: '00:02', action: 'Hyperbolic GPU → GPT-4o inference call ($0.003 USDC)', status: 'ok' },
                { time: '00:03', action: 'Weather API → economic indicator correlation ($0.0005 USDC)', status: 'ok' },
                { time: '00:05', action: 'Trade decision → Aave liquidity check ($0.001 USDC)', status: 'ok' },
                { time: '06:17', action: 'News summary API → major event scan ($0.002 USDC)', status: 'ok' },
                { time: '...', action: 'Average 2,000–10,000 autonomous API calls per day', status: 'info' },
              ]).map((row, i) => (
                <div key={i} className={`flex gap-3 items-start text-xs ${row.status === 'info' ? 'text-amber-400' : 'text-slate-300'}`}>
                  <span className="text-slate-500 w-10 shrink-0">{row.time}</span>
                  <span>{row.action}</span>
                  {row.status === 'ok' && <span className="text-green-400 ml-auto shrink-0">✓</span>}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
              {isKo ? '기존 방식이라면: 각 API마다 계정 등록 + OAuth + 월 구독 관리 → 사람이 처리 불가능. x402라면: 에이전트가 USDC 잔고에서 자동 차감.' : 'With traditional methods: account registration + OAuth + monthly subscription per API → impossible for humans to manage. With x402: auto-deducted from agent\'s USDC balance.'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-bold text-blue-800 mb-3">{isKo ? '에이전트가 지갑을 갖는다는 것의 의미' : 'What it means for agents to have wallets'}</div>
              <div className="space-y-2 text-sm text-slate-600">
                {(isKo ? [
                  'AI 에이전트는 이제 법인도, 사람도 아닌 자율 경제 주체로 행동한다',
                  'USDC 지갑을 갖는 에이전트는 수익을 벌고, 비용을 지출하고, 저축한다',
                  '에이전트 간 거래가 가능해진다 (에이전트가 다른 에이전트의 서비스를 구매)',
                  '새로운 경제 레이어 — 사람이 개입하지 않는 기계 간 경제',
                ] : [
                  'AI agents now act as autonomous economic entities — neither corporations nor humans',
                  'Agents with USDC wallets earn revenue, pay expenses, and save',
                  'Agent-to-agent commerce becomes possible (agents buy from other agents)',
                  'A new economic layer — machine-to-machine economy without human involvement',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-blue-500 shrink-0">•</span>
                    <span className="text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-3">{isKo ? 'API 제공자 입장에서의 혁명' : 'A revolution from the API provider\'s perspective'}</div>
              <div className="space-y-2 text-sm">
                {(isKo ? [
                  { before: '월 구독 $99', after: '요청당 $0.001, 무제한 규모' },
                  { before: '결제 미수 → 서비스 중단', after: '선결제 → 미수 없음' },
                  { before: '카드사 수수료 2~3%', after: '온체인 수수료 0.01% 미만' },
                  { before: '국가 제한 (카드사 지역 제한)', after: '전 세계 동일 접근' },
                ] : [
                  { before: 'Monthly $99 subscription', after: '$0.001 per request, unlimited scale' },
                  { before: 'Non-payment → service cut', after: 'Prepay → no receivables' },
                  { before: '2–3% card processor fee', after: '<0.01% on-chain fee' },
                  { before: 'Geographic restrictions (card)', after: 'Same access worldwide' },
                ]).map((row, i) => (
                  <div key={i} className="flex gap-2 items-center text-xs">
                    <span className="text-red-400 line-through flex-1">{row.before}</span>
                    <span className="text-slate-400">→</span>
                    <span className="text-green-700 font-semibold flex-1">{row.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Base + USDC */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. Base + USDC — 왜 이 조합인가' : '5. Base + USDC — Why This Combination?'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'x402는 체인 중립적 설계다. Solana, Ethereum, Polygon에서도 동작한다. 그러나 사실상 표준이 된 것은 Base + USDC 조합이다. 이유가 있다.'
              : 'x402 is designed to be chain-neutral. It works on Solana, Ethereum, and Polygon. But the de facto standard has become Base + USDC. For good reason.'}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                label: isKo ? 'Base의 장점' : 'Base advantages',
                color: 'bg-blue-50 border-blue-200',
                headerColor: 'text-blue-800',
                items: isKo ? [
                  'EVM 호환 — 기존 스마트컨트랙트 재사용',
                  'Coinbase 운영 → 기관 신뢰',
                  '트랜잭션당 $0.0001 미만 수수료',
                  '초당 수천 건 처리 (OP Stack)',
                  'USDC 네이티브 지원',
                ] : [
                  'EVM-compatible — reuse existing smart contracts',
                  'Operated by Coinbase → institutional trust',
                  '<$0.0001 per transaction',
                  'Thousands TPS (OP Stack)',
                  'Native USDC support',
                ],
              },
              {
                label: isKo ? 'USDC의 장점' : 'USDC advantages',
                color: 'bg-green-50 border-green-200',
                headerColor: 'text-green-800',
                items: isKo ? [
                  '달러 1:1 페깅 — 가격 안정',
                  '월간 감사 발행 → 투명성',
                  '규제 명확성 (GENIUS Act 대응 중)',
                  'Coinbase·Stripe 생태계 기본 통화',
                  '글로벌 CEX·DeFi 유동성',
                ] : [
                  'Dollar 1:1 peg — price stability',
                  'Monthly attestations → transparency',
                  'Regulatory clarity (GENIUS Act track)',
                  'Default currency in Coinbase·Stripe ecosystem',
                  'Global CEX and DeFi liquidity',
                ],
              },
              {
                label: isKo ? 'x402와의 시너지' : 'Synergy with x402',
                color: 'bg-violet-50 border-violet-200',
                headerColor: 'text-violet-800',
                items: isKo ? [
                  'Coinbase가 x402 공동 설계자 — 네이티브 통합',
                  'Agent.market (에이전트 앱스토어)도 Base 기반',
                  'Base 체인 1억+ 건 처리가 사실상 검증',
                  '에이전트 지갑 표준으로 자리잡는 중',
                  'CDP (Coinbase Developer Platform) 일체화',
                ] : [
                  'Coinbase co-designed x402 — native integration',
                  'Agent.market (agent app store) also on Base',
                  '100M+ Base transactions as de facto proof',
                  'Becoming the standard for agent wallets',
                  'Integrated with CDP (Coinbase Developer Platform)',
                ],
              },
            ].map((col, i) => (
              <div key={i} className={`border ${col.color} rounded-xl p-5`}>
                <div className={`font-bold ${col.headerColor} mb-3 text-sm`}>{col.label}</div>
                <div className="space-y-1.5">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex gap-2 text-xs text-slate-600">
                      <span className="text-slate-400 shrink-0">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-2">{isKo ? 'Solana는 왜 2위인가?' : 'Why is Solana in second place?'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? 'Solana도 x402를 지원하고 3,500만+ 건을 처리했다. 속도 면에서는 Solana가 Base보다 빠르다. 그러나 x402의 에이전트 생태계가 Coinbase/Ethereum 개발자 커뮤니티를 중심으로 형성됐고, Agent.market, CDP 등 핵심 인프라가 Base 기반이다. Coinbase가 주도하는 표준인 만큼 Base가 de facto 표준으로 수렴하는 경향이 있다.'
                : 'Solana also supports x402 and has processed 35M+ transactions. In terms of speed, Solana is faster than Base. However, the x402 agent ecosystem formed around the Coinbase/Ethereum developer community, and key infrastructure like Agent.market and CDP is Base-based. As a Coinbase-led standard, there\'s a gravitational pull toward Base as the de facto standard.'}
            </p>
          </div>
        </section>

        {/* Section 6: Walits 인프라 호환성 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. Walits 인프라 호환성 — 이미 100% 준비되어 있다' : '6. Walits Infrastructure Compatibility — Already 100% Ready'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Walits의 현재 인프라를 들여다보면 놀라운 사실이 있다. x402가 요구하는 모든 기술 스택을 Walits는 이미 보유하고 있다. 우연이 아니다 — 같은 레일(Base + USDC) 위에서 만들어진 서비스들은 자연스럽게 호환된다.'
              : 'Looking at Walits\' current infrastructure reveals something striking: Walits already has every technology x402 requires. This isn\'t a coincidence — services built on the same rails (Base + USDC) are naturally compatible.'}
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                walits: isKo ? 'Base 체인 전용' : 'Base chain dedicated',
                x402: isKo ? 'x402의 메인 네트워크가 Base' : 'x402\'s primary network is Base',
                match: isKo ? '완전 일치' : 'Perfect match',
                icon: '⛓',
                desc: isKo
                  ? 'Walits는 Ethereum + Base에서 운영된다. x402의 가장 많은 트랜잭션이 Base에서 발생한다. 네트워크 레이어가 동일하다는 것은 별도 브릿지나 래핑 없이 x402 결제가 Walits 지갑에서 직접 실행될 수 있다는 의미다.'
                  : 'Walits operates on Ethereum + Base. x402 generates its most transactions on Base. Identical network layer means x402 payments can execute directly from Walits wallets without separate bridges or wrapping.',
              },
              {
                walits: isKo ? 'USDC 전용 자산' : 'USDC-exclusive asset',
                x402: isKo ? 'x402의 기본 결제 토큰이 USDC' : 'x402\'s default payment token is USDC',
                match: isKo ? '완전 일치' : 'Perfect match',
                icon: '💵',
                desc: isKo
                  ? 'Walits는 USDC를 핵심 자산으로 사용한다. x402의 결제 단위도 USDC다. 에이전트가 Walits 지갑에서 x402 결제를 실행하면, 이미 보유 중인 USDC가 그대로 결제에 사용된다. 토큰 스왑이나 환전 불필요.'
                  : 'Walits uses USDC as its core asset. x402 payment unit is also USDC. When an agent executes x402 payments from a Walits wallet, the already-held USDC is used directly. No token swap or conversion needed.',
              },
              {
                walits: isKo ? 'MPC 기반 지갑' : 'MPC-based wallet',
                x402: isKo ? 'AI 에이전트 지갑의 핵심 인프라' : 'Core infrastructure for AI agent wallets',
                match: isKo ? '구조적 일치' : 'Structural match',
                icon: '🔐',
                desc: isKo
                  ? 'MPC(Multi-Party Computation) 지갑은 프라이빗 키를 분산 관리해 단일 실패 지점을 없앤다. AI 에이전트 지갑에서 이것이 중요한 이유는 — 에이전트가 자율로 트랜잭션을 서명할 때 키 보안이 특히 취약해지기 때문이다. Walits의 MPC 구조는 에이전트 지갑의 보안 요건과 정확히 일치한다.'
                  : 'MPC (Multi-Party Computation) wallets distribute private key management to eliminate single points of failure. This matters for AI agent wallets because key security becomes especially vulnerable when agents sign transactions autonomously. Walits\' MPC structure exactly matches the security requirements of agent wallets.',
              },
              {
                walits: isKo ? 'PayFi 아키텍처' : 'PayFi architecture',
                x402: isKo ? '에이전트가 수익 자산을 운용하는 시나리오' : 'Scenario where agents manage yield-bearing assets',
                match: isKo ? '확장 가능' : 'Extendable',
                icon: '📈',
                desc: isKo
                  ? 'Walits PayFi는 USDC를 아이들 상태로 두지 않고 Aave·Morpho 등에서 수익을 발생시킨다. 에이전트가 Walits에 USDC를 예치하고, 수익이 x402 API 결제 재원으로 자동 충당되는 루프가 가능하다. "에이전트가 스스로 운영비를 조달한다"는 시나리오.'
                  : 'Walits PayFi doesn\'t let USDC sit idle — it generates yield via Aave, Morpho, etc. A loop is possible where agents deposit USDC in Walits and yield automatically funds x402 API payments. The "agent self-funding operations" scenario.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded">Walits: {item.walits}</span>
                      <span className="text-slate-400 text-xs">↔</span>
                      <span className="bg-violet-100 text-violet-800 text-xs font-bold px-2 py-0.5 rounded">x402: {item.x402}</span>
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded ml-auto">{item.match}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-300 rounded-2xl p-6">
            <div className="font-black text-green-800 text-lg mb-2">
              {isKo ? 'Walits가 유리한 이유 — 멀티체인 지갑과의 차이' : 'Why Walits has an edge — vs multi-chain wallets'}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              {isKo
                ? '많은 지갑 서비스들이 Ethereum·Polygon·Arbitrum·Optimism 등 멀티체인을 지원하면서 Base는 "여러 체인 중 하나"로 취급한다. Walits는 Base에 집중한다. x402의 de facto 표준이 Base인 상황에서, 이 집중이 오히려 강점이 된다. 분산된 유동성, 복잡한 브릿지, 체인간 수수료 계산 없이 — Walits 지갑에서 x402 결제는 그냥 된다.'
                : 'Many wallet services support Ethereum, Polygon, Arbitrum, Optimism and treat Base as "just one of many chains." Walits focuses on Base. In a world where Base is the de facto x402 standard, this focus becomes an advantage. No fragmented liquidity, no complex bridges, no cross-chain fee calculation — x402 payments from a Walits wallet just work.'}
            </p>
          </div>
        </section>

        {/* Section 7: 기회 시나리오 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. Walits × x402 — 3가지 기회 시나리오' : '7. Walits × x402 — 3 Opportunity Scenarios'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '인프라 호환성이 확인됐다면 다음 질문은 "그래서 무엇을 할 것인가"다. 현실적인 세 가지 방향을 짚어본다.'
              : 'Infrastructure compatibility confirmed — the next question is "so what do we do with it?" Here are three realistic directions.'}
          </p>

          <div className="space-y-6">
            {[
              {
                number: '01',
                color: 'bg-blue-600',
                title: isKo ? 'Walits 지갑을 AI 에이전트 지갑으로 포지셔닝' : 'Position Walits wallet as the AI agent wallet',
                timeline: isKo ? '6~12개월' : '6–12 months',
                difficulty: isKo ? '중간' : 'Medium',
                impact: isKo ? '높음' : 'High',
                desc: isKo
                  ? 'AI 에이전트가 x402 API를 호출하려면 USDC를 보유한 지갑이 필요하다. 현재 대부분의 에이전트는 Coinbase CDP나 Privy로 임시 지갑을 만들어 쓴다. Walits가 "AI 에이전트 전용 USDC 지갑"을 제공한다면 — MPC 보안, PayFi 수익, x402 결제 지원, Base 네이티브 — 차별화된 포지션을 잡을 수 있다.'
                  : 'AI agents need a USDC-holding wallet to call x402 APIs. Currently, most agents use Coinbase CDP or Privy for temporary wallets. If Walits offers an "AI agent-dedicated USDC wallet" — MPC security, PayFi yield, x402 payment support, Base-native — it can claim a differentiated position.',
                steps: isKo ? [
                  'x402 결제 SDK를 Walits SDK에 통합',
                  '"에이전트 지갑" 온보딩 플로우 설계 (사람이 아닌 에이전트가 주인)',
                  'PayFi 수익 → x402 결제 자동 충당 루프 구현',
                  'Agent.market 등 에이전트 마켓플레이스와 파트너십',
                ] : [
                  'Integrate x402 payment SDK into Walits SDK',
                  'Design "agent wallet" onboarding flow (agent as owner, not human)',
                  'Implement PayFi yield → x402 payment auto-funding loop',
                  'Partnership with agent marketplaces like Agent.market',
                ],
              },
              {
                number: '02',
                color: 'bg-green-600',
                title: isKo ? 'Walits 데이터 API를 x402로 유료화' : 'Monetize Walits data APIs via x402',
                timeline: isKo ? '1~3개월' : '1–3 months',
                difficulty: isKo ? '낮음' : 'Low',
                impact: isKo ? '중간' : 'Medium',
                desc: isKo
                  ? 'Walits가 집계하는 한국 주식·코인 시세, 뉴스, 지갑 분석 데이터를 x402 엔드포인트로 감싸면 AI 에이전트들이 요청당 $0.001~$0.01 USDC로 데이터를 구매할 수 있다. 기존에 무료로 제공하거나 내부용으로만 쓰던 데이터가 수익원이 된다. x402 미들웨어 통합이 기술적으로 가장 쉬운 시나리오다.'
                  : 'Wrap the Korean stock/crypto price data, news, and wallet analytics Walits aggregates in an x402 endpoint, letting AI agents purchase data at $0.001–$0.01 USDC per request. Data previously offered free or kept internal becomes a revenue stream. Technically the easiest scenario — just add x402 middleware.',
                steps: isKo ? [
                  'Express/Next.js에 x402 미들웨어 추가 (공식 패키지 존재)',
                  '유료화할 엔드포인트 선정 (시세 API, 온체인 분석 등)',
                  '가격 설정 ($0.0001~$0.01/요청)',
                  '무료 티어 + x402 유료 티어 이중 구조 설계',
                ] : [
                  'Add x402 middleware to Express/Next.js (official package exists)',
                  'Select endpoints to monetize (price API, on-chain analytics, etc.)',
                  'Set pricing ($0.0001–$0.01/request)',
                  'Design dual-tier: free tier + x402 paid tier',
                ],
              },
              {
                number: '03',
                color: 'bg-violet-600',
                title: isKo ? 'PayFi × 에이전트 자율운용 루프' : 'PayFi × agent autonomous management loop',
                timeline: isKo ? '12~24개월' : '12–24 months',
                difficulty: isKo ? '높음' : 'High',
                impact: isKo ? '매우 높음' : 'Very High',
                desc: isKo
                  ? '에이전트가 Walits PayFi에 USDC를 예치한다 → Aave/Morpho에서 연 4~8% 수익이 발생한다 → 그 수익이 자동으로 x402 API 결제에 사용된다 → 에이전트는 원금 손실 없이 스스로 운영비를 조달한다. "에이전트가 수익으로 스스로를 먹여 살린다"는 시나리오로, 실현되면 AI 에이전트 인프라의 핵심 차별점이 된다.'
                  : 'Agent deposits USDC in Walits PayFi → Aave/Morpho generates 4–8% annual yield → that yield automatically funds x402 API payments → agent self-funds operations without losing principal. The "agent feeds itself with yield" scenario — if realized, becomes a core differentiator for AI agent infrastructure.',
                steps: isKo ? [
                  'PayFi 수익 → x402 결제 자동 라우팅 로직 설계',
                  '에이전트별 운영 예산 자동 관리 (예: 일 $5 USDC 한도)',
                  '수익이 부족할 경우 예치금 일부 자동 청산',
                  '에이전트 운용 대시보드 (수익률, 결제 내역, 잔고)',
                ] : [
                  'Design PayFi yield → x402 payment auto-routing logic',
                  'Auto-manage per-agent operation budget (e.g., $5 USDC/day cap)',
                  'Auto-liquidate portion of deposit if yield is insufficient',
                  'Agent management dashboard (yield rate, payment history, balance)',
                ],
              },
            ].map((scenario, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className={`${scenario.color} text-white px-6 py-4 flex items-center gap-4`}>
                  <span className="font-black text-3xl opacity-30">{scenario.number}</span>
                  <div className="flex-1">
                    <div className="font-black text-lg">{scenario.title}</div>
                    <div className="flex gap-3 text-xs opacity-80 mt-1">
                      <span>{isKo ? '예상 기간' : 'Timeline'}: {scenario.timeline}</span>
                      <span>·</span>
                      <span>{isKo ? '난이도' : 'Difficulty'}: {scenario.difficulty}</span>
                      <span>·</span>
                      <span>{isKo ? '임팩트' : 'Impact'}: {scenario.impact}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{scenario.desc}</p>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-xs font-bold text-slate-500 mb-2">{isKo ? '구현 단계' : 'Implementation steps'}</div>
                    <div className="space-y-1">
                      {scenario.steps.map((step, j) => (
                        <div key={j} className="flex gap-2 text-xs text-slate-600">
                          <span className="text-slate-400 shrink-0">{j + 1}.</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 현실적 판단 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 현실적 판단 — 지금 당장 무엇을 해야 하나' : '8. Realistic Assessment — What to Do Right Now'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '기회가 보인다고 해서 당장 전사적 자원을 투입할 필요는 없다. x402는 아직 초기다. 그러나 아무것도 하지 않는 것도 아니다 — 지금 해야 할 일과 기다려야 할 일이 구분된다.'
              : 'Seeing opportunity doesn\'t mean committing all resources immediately. x402 is still early. But doing nothing is also wrong — there\'s a clear distinction between what to do now and what to wait on.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-3">{isKo ? '지금 해야 할 것' : 'Do now'}</div>
              <div className="space-y-2">
                {(isKo ? [
                  { item: 'x402 서버 미들웨어 테스트', sub: '공식 npm 패키지로 로컬에서 30분' },
                  { item: 'Base 체인 테스트넷에서 결제 흐름 확인', sub: 'AI 에이전트 → Walits 지갑 → x402 API' },
                  { item: '시나리오 2 MVP 기획', sub: '기존 데이터 API 1개를 x402로 감싸기' },
                  { item: 'Agent.market 개발자 커뮤니티 모니터링', sub: '어떤 에이전트 지갑 수요가 있는지' },
                ] : [
                  { item: 'Test x402 server middleware', sub: 'Official npm package, 30 min locally' },
                  { item: 'Verify payment flow on Base testnet', sub: 'AI agent → Walits wallet → x402 API' },
                  { item: 'Plan Scenario 2 MVP', sub: 'Wrap one existing data API with x402' },
                  { item: 'Monitor Agent.market developer community', sub: 'What agent wallet demand exists' },
                ]).map((row, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-green-500 text-sm shrink-0">✓</span>
                    <div>
                      <div className="text-slate-700 text-xs font-semibold">{row.item}</div>
                      <div className="text-slate-400 text-xs">{row.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="font-bold text-amber-800 mb-3">{isKo ? '기다려야 할 것' : 'Wait and see'}</div>
              <div className="space-y-2">
                {(isKo ? [
                  { item: '에이전트 지갑 풀 구현', sub: '상용 수요 확인 전까지 대형 투자 자제' },
                  { item: 'PayFi × x402 루프 (시나리오 3)', sub: '복잡한 아키텍처 — 시장 검증 후' },
                  { item: 'x402 마케팅 대대적 진행', sub: '볼륨 대부분이 테스트 트래픽인 동안은' },
                  { item: 'Solana x402 지원 추가', sub: 'Base 우선, Solana는 2차 검토' },
                ] : [
                  { item: 'Full agent wallet implementation', sub: 'Avoid large investment before commercial demand confirmed' },
                  { item: 'PayFi × x402 loop (Scenario 3)', sub: 'Complex architecture — post market validation' },
                  { item: 'Major x402 marketing push', sub: 'While volume is mostly test traffic' },
                  { item: 'Add Solana x402 support', sub: 'Base first, Solana secondary review' },
                ]).map((row, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-amber-500 text-sm shrink-0">⏳</span>
                    <div>
                      <div className="text-slate-700 text-xs font-semibold">{row.item}</div>
                      <div className="text-slate-400 text-xs">{row.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '시장 성숙 신호 — 이것이 보이면 본격 투자' : 'Market maturity signals — when to go all-in'}</div>
            <div className="space-y-2">
              {(isKo ? [
                { signal: '일평균 볼륨이 $100만 이상 지속 (현재 $164만 중 테스트 제외 시 훨씬 낮음)' },
                { signal: 'Fortune 500 기업이 x402 기반 API를 공식 서비스에 통합' },
                { signal: 'AI 에이전트 지갑 수요가 개발자 커뮤니티에서 명시적으로 요청됨' },
                { signal: 'Coinbase가 x402를 CDP 핵심 제품으로 격상 (현재는 실험적 위치)' },
              ] : [
                { signal: 'Daily average volume sustains $1M+ (current $1.64M but much less excl. test traffic)' },
                { signal: 'Fortune 500 company integrates x402 API into official production service' },
                { signal: 'AI agent wallet demand explicitly requested in developer communities' },
                { signal: 'Coinbase elevates x402 to core CDP product (currently experimental)' },
              ]).map((row, i) => (
                <div key={i} className="flex gap-3 text-sm text-slate-400 border-t border-slate-800 pt-2 first:border-0 first:pt-0">
                  <span className="text-amber-400 shrink-0">◉</span>
                  <span className="text-xs">{row.signal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: walits 관점 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '9. walits 관점 — 에이전트 경제의 인프라가 된다는 것' : '9. walits Perspective — Becoming Infrastructure for the Agent Economy'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'x402는 Walits에게 단순한 기능 추가가 아니다. 포지셔닝 자체가 바뀔 수 있는 전환점이다. "사람을 위한 USDC 지갑"에서 "에이전트와 사람 모두를 위한 USDC 결제 인프라"로.'
              : 'x402 isn\'t just a feature addition for Walits. It\'s a potential inflection point for positioning itself: from "USDC wallet for humans" to "USDC payment infrastructure for both agents and humans."'}
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: '🤝',
                title: isKo ? 'AI 에이전트와 사람이 같은 지갑을 쓴다' : 'AI agents and humans share the same wallet',
                desc: isKo
                  ? '사람이 Walits로 자산을 관리하고, 그 사람이 만든(또는 사용하는) AI 에이전트도 같은 Walits 지갑에서 x402 결제를 실행한다. 에이전트의 비용이 곧 사용자의 비용이고, 에이전트의 수익이 곧 사용자의 수익이다. 지갑이 사람과 에이전트의 공유 인프라가 된다.'
                  : 'A human manages assets through Walits, and the AI agent they create (or use) executes x402 payments from the same Walits wallet. Agent costs are user costs; agent revenue is user revenue. The wallet becomes shared infrastructure for humans and agents.',
              },
              {
                icon: '🌐',
                title: isKo ? 'Base의 성장이 Walits의 성장이 된다' : 'Base\'s growth becomes Walits\' growth',
                desc: isKo
                  ? 'x402 볼륨이 Base에서 폭발적으로 성장하면, Base 네이티브 지갑인 Walits도 함께 성장 기회를 얻는다. 멀티체인 지갑들이 "Base도 지원합니다"로 Base를 부차적으로 취급하는 동안, Walits는 "우리가 Base입니다"로 포지셔닝할 수 있다.'
                  : 'When x402 volume explodes on Base, Walits as a Base-native wallet gets growth opportunities alongside. While multi-chain wallets treat Base as secondary with "we also support Base," Walits can position as "we are Base."',
              },
              {
                icon: '💡',
                title: isKo ? '가스리스 + x402의 조합' : 'Gasless + x402 combination',
                desc: isKo
                  ? 'Walits의 가스리스 트랜잭션과 x402를 결합하면 에이전트가 ETH 없이 USDC만으로 모든 결제를 처리할 수 있다. 에이전트 지갑에서 가스 토큰 관리는 불필요한 복잡성이다. "USDC만 있으면 된다"는 메시지가 에이전트 개발자에게 강력한 어필이 된다.'
                  : 'Combining Walits\' gasless transactions with x402 lets agents handle all payments with USDC alone — no ETH needed. Managing gas tokens in an agent wallet is unnecessary complexity. "All you need is USDC" becomes a powerful message for agent developers.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex gap-4">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-slate-800 mb-2">{item.title}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-2">
              {isKo ? '한 줄 정리' : 'Bottom line'}
            </div>
            <p className="text-violet-100 text-sm leading-relaxed">
              {isKo
                ? 'x402는 HTTP 레이어에 결제를 심는다. Walits는 이미 그 결제의 재료(Base, USDC, MPC, PayFi)를 모두 갖고 있다. 지금 당장 대규모 투자가 아니라, x402 미들웨어 테스트와 데이터 API 유료화 MVP부터 시작하면 된다. 에이전트 경제가 본격화될 때 Walits는 이미 그 인프라 위에 서 있게 된다.'
                : 'x402 embeds payments into the HTTP layer. Walits already has all the ingredients: Base, USDC, MPC, PayFi. Start not with large-scale investment but with x402 middleware testing and a data API monetization MVP. When the agent economy goes mainstream, Walits will already be standing on that infrastructure.'}
            </p>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-100 pt-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="font-black text-slate-900 text-lg mb-2">
              {isKo ? 'walits — USDC가 일하는 지갑, 에이전트와 사람 모두를 위해' : 'walits — A wallet where USDC works, for both agents and humans'}
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {isKo
                ? 'Base 네이티브, USDC 전용, MPC 보안. AI 에이전트 지갑의 인프라 요건을 이미 갖춘 자기 보관 지갑.'
                : 'Base-native, USDC-exclusive, MPC-secured. A self-custody wallet that already meets the infrastructure requirements for AI agent wallets.'}
            </p>
            <Link href="/#solutions" className="inline-block bg-violet-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
              {isKo ? '서비스 알아보기 →' : 'Learn more →'}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
