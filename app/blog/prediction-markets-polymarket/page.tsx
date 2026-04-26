'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PredictionMarketsPolymarketPage() {
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
          <div className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '기술 심층 분석' : 'Tech Deep Dive'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? '예측 시장과 Polymarket — 기술자가 알아야 할 온체인 구현 세부'
              : 'Prediction Markets & Polymarket — On-Chain Implementation Details for Engineers'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '"트럼프가 대선에서 이길 확률은?" — 이 질문에 돈을 거는 시장이 어떻게 블록체인 위에서 동작하는가. Conditional Tokens, CLOB, UMA Oracle까지 컨트랙트 수준으로 해부한다.'
              : '"What\'s the probability Trump wins the election?" — How markets for betting on this question work on-chain. From Conditional Tokens to CLOB and UMA Oracle, dissected at the contract level.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 4월 26일' : 'April 26, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '25분 읽기' : '25 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/prediction.jpg" alt="Prediction Markets Polymarket" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 0: 예측 시장이란 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 예측 시장이란 무엇인가' : '1. What Is a Prediction Market?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '예측 시장(Prediction Market)은 미래 사건의 결과에 돈을 베팅하는 금융 시장이다. 핵심 아이디어는 "집단 지성(Wisdom of Crowds)": 시장 참여자들이 자신의 정보와 믿음을 가격에 반영하면, 그 가격이 실제 확률의 최선 추정치가 된다는 것이다.'
              : 'A prediction market is a financial market where participants bet money on the outcome of future events. The core idea is "wisdom of crowds": when market participants reflect their information and beliefs in prices, those prices become the best estimate of actual probabilities.'}
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-slate-900 mb-4">{isKo ? '작동 원리 예시' : 'How it works — example'}</div>
            <div className="space-y-3 text-sm">
              {[
                { label: isKo ? '질문' : 'Question', val: isKo ? '"2026년 미국 중간선거에서 공화당이 하원 과반을 유지할 것인가?"' : '"Will Republicans maintain House majority in 2026 midterms?"' },
                { label: isKo ? 'YES 토큰 현재가' : 'YES token price', val: '$0.62 = 62% 확률로 시장 추정' },
                { label: isKo ? 'NO 토큰 현재가' : 'NO token price', val: '$0.38 = 38% 확률' },
                { label: isKo ? '결과 발표 후 (YES)' : 'After resolution (YES wins)', val: isKo ? 'YES 토큰 → $1.00, NO 토큰 → $0.00' : 'YES token → $1.00, NO token → $0.00' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-2">
                  <div className="font-semibold text-slate-500">{row.label}</div>
                  <div className="col-span-2 text-slate-800">{row.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: isKo ? '전통 예측 시장' : 'Traditional', examples: 'Iowa Electronic Markets (1988), Hollywood Stock Exchange', note: isKo ? '학술 목적, 규제 샌드박스' : 'Academic, regulatory sandbox', color: 'bg-slate-50 border-slate-200' },
              { title: isKo ? '중앙화 예측 시장' : 'Centralized', examples: 'Kalshi (CFTC 규제)', note: isKo ? 'US 규제 준수, 법정화폐 거래' : 'CFTC regulated, fiat trading', color: 'bg-blue-50 border-blue-200' },
              { title: isKo ? '탈중앙화 예측 시장' : 'Decentralized', examples: 'Polymarket, Augur, Manifold', note: isKo ? '온체인, USDC 담보, 무허가' : 'On-chain, USDC collateral, permissionless', color: 'bg-emerald-50 border-emerald-200' },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                <div className="text-xs text-slate-500 mb-2">{item.examples}</div>
                <div className="text-xs font-medium text-slate-700">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Polymarket 개요 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. Polymarket — 가장 큰 온체인 예측 시장' : '2. Polymarket — The Largest On-Chain Prediction Market'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3 text-sm">
              {[
                [isKo ? '설립' : 'Founded', '2020, Shayne Coplan'],
                [isKo ? '블록체인' : 'Blockchain', 'Polygon (PoS)'],
                [isKo ? '담보 토큰' : 'Collateral', 'USDC (Native Polygon)'],
                [isKo ? '누적 거래량' : 'Cumulative volume', '$10B+ (2024년 기준)'],
                [isKo ? '2024년 최대 마켓' : '2024 top market', isKo ? '미국 대선 $3.3B 거래' : 'US Election $3.3B volume'],
                [isKo ? '오라클' : 'Oracle', 'UMA Optimistic Oracle v2'],
                [isKo ? '주문 방식' : 'Order type', 'CLOB (Off-chain matching)'],
              ].map(([k, v], i) => (
                <div key={i} className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{k}</span>
                  <span className="font-semibold text-slate-900 text-right">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 rounded-xl p-5">
              <div className="text-xs text-slate-400 mb-3 font-mono">{isKo ? '// 핵심 컨트랙트 주소 (Polygon)' : '// Core contract addresses (Polygon)'}</div>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="text-slate-400">ConditionalTokens (CTF)</div>
                  <div className="text-green-400 break-all">0x4D97DCd97eC945f40cF65F87097ACe5EA0476045</div>
                </div>
                <div>
                  <div className="text-slate-400">CTFExchange</div>
                  <div className="text-blue-400 break-all">0x4bFb41d5B3570DeFd03C39a9A4D8dE6Bd8B8982E</div>
                </div>
                <div>
                  <div className="text-slate-400">UMA OptimisticOracleV2</div>
                  <div className="text-violet-400 break-all">0xeE3Afe347D5C74317041E2618C49534dAf887c24</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Conditional Tokens Framework */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. Conditional Tokens Framework (CTF) — 핵심 원리' : '3. Conditional Tokens Framework (CTF) — Core Mechanism'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'Polymarket의 모든 마켓은 Gnosis가 설계한 Conditional Tokens Framework 위에서 동작한다. CTF는 ERC-1155 기반이며, 담보 토큰(USDC)을 조건부 결과 토큰으로 분할하고 결과 확정 후 승리 토큰을 담보로 교환하는 구조다.'
              : 'Every Polymarket market runs on top of the Conditional Tokens Framework (CTF) designed by Gnosis. CTF is ERC-1155 based — it splits collateral (USDC) into conditional outcome tokens and redeems winning tokens for collateral after resolution.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-8 mb-6 font-mono text-sm">
            <div className="text-slate-400 text-xs mb-4">{isKo ? '// CTF 핵심 데이터 구조' : '// CTF core data structures'}</div>
            <div className="space-y-4">
              <div>
                <div className="text-slate-500 text-xs mb-1">// Condition</div>
                <div className="text-yellow-400">conditionId = keccak256(oracle, questionId, outcomeSlotCount)</div>
                <div className="text-slate-400 text-xs mt-1">{isKo ? '// 마켓 고유 식별자. oracle = UMA 주소, questionId = 질문 해시' : '// Market unique ID. oracle = UMA address, questionId = question hash'}</div>
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-1">// Position (ERC-1155 tokenId)</div>
                <div className="text-blue-400">positionId = keccak256(collateralToken, collectionId)</div>
                <div className="text-slate-400 text-xs mt-1">{isKo ? '// YES 토큰과 NO 토큰 각각이 고유한 ERC-1155 tokenId를 가짐' : '// YES and NO tokens each have a unique ERC-1155 tokenId'}</div>
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-1">// Payout vector (결과 발표 시)</div>
                <div className="text-green-400">{'payoutNumerators[YES=1, NO=0]  // YES 승리'}</div>
                <div className="text-green-400">{'payoutNumerators[YES=0, NO=1]  // NO 승리'}</div>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-slate-900 mb-4">{isKo ? '3단계 생명주기' : '3-Stage Lifecycle'}</h3>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: isKo ? 'splitPosition() — USDC → YES + NO 토큰' : 'splitPosition() — USDC → YES + NO tokens',
                color: 'border-blue-300 bg-blue-50',
                code: `// 1 USDC → 1 YES token + 1 NO token
CTF.splitPosition(
  collateralToken: USDC,
  parentCollectionId: bytes32(0),
  conditionId: conditionId,
  partition: [0b01, 0b10],  // YES=index0, NO=index1
  amount: 1_000_000          // 1 USDC (6 decimals)
)
// 결과: YES positionId로 1e6 토큰, NO positionId로 1e6 토큰 발행`,
                desc: isKo ? '1 USDC를 분할하면 항상 YES 1개 + NO 1개. 두 토큰의 합은 항상 1 USDC.' : 'Splitting 1 USDC always gives 1 YES + 1 NO. The sum of both tokens always equals 1 USDC.',
              },
              {
                step: '2',
                title: isKo ? '마켓에서 거래 — 가격이 확률을 반영' : 'Trading — price reflects probability',
                color: 'border-emerald-300 bg-emerald-50',
                code: `// CTFExchange CLOB에서 주문 제출 (EIP-712 서명)
Order {
  maker: 0xUser,
  tokenId: YES_positionId,
  makerAmount: 620_000,   // 0.62 USDC (지불)
  takerAmount: 1_000_000, // 1 YES token (수취)
  side: BUY,
  expiration: timestamp,
  nonce: nonce,
  signature: eip712sig
}
// YES @ $0.62 = "시장이 62% 확률로 판단"`,
                desc: isKo ? 'YES 토큰 가격이 0.62 USDC면 시장 참여자들이 집합적으로 62% 확률로 평가한다는 의미.' : 'YES token priced at $0.62 means market participants collectively assign 62% probability.',
              },
              {
                step: '3',
                title: isKo ? 'redeemPositions() — 승리 토큰 → USDC' : 'redeemPositions() — winning tokens → USDC',
                color: 'border-violet-300 bg-violet-50',
                code: `// 오라클이 YES 승리로 결과 보고 후
CTF.redeemPositions(
  collateralToken: USDC,
  parentCollectionId: bytes32(0),
  conditionId: conditionId,
  indexSets: [0b01]  // YES position
)
// 1 YES token → 1 USDC (payout = 1)
// 1 NO token  → 0 USDC (payout = 0)`,
                desc: isKo ? '결과 발표 후 승리 토큰 1개 = USDC 1개. 패배 토큰은 가치 없음. 자동 정산, 중개자 없음.' : 'After resolution, 1 winning token = 1 USDC. Losing tokens worthless. Automatic settlement, no intermediary.',
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-2xl p-6 ${item.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-sm shrink-0">{item.step}</div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                </div>
                <pre className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto mb-3 whitespace-pre">{item.code}</pre>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: CLOB */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. CLOB — 오프체인 오더북, 온체인 정산' : '4. CLOB — Off-Chain Order Book, On-Chain Settlement'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'Polymarket는 AMM이 아니라 CLOB(Central Limit Order Book)을 사용한다. 주문 매칭은 Polymarket 서버에서 오프체인으로 처리하지만, 실제 토큰 이동은 CTFExchange 컨트랙트를 통해 온체인에서 발생한다. 이 구조로 AMM의 슬리피지 없이 CEX 수준의 UX를 구현한다.'
              : 'Polymarket uses a CLOB (Central Limit Order Book), not an AMM. Order matching happens off-chain on Polymarket servers, but actual token transfers occur on-chain via the CTFExchange contract. This delivers CEX-level UX without AMM slippage.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-8 mb-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '// CLOB 주문 흐름' : '// CLOB order flow'}</div>
            <div className="space-y-3">
              {[
                { step: '1', color: 'text-blue-400', text: isKo ? 'User → EIP-712 서명된 주문 생성 (가스 없음, 오프체인)' : 'User → creates EIP-712 signed order (no gas, off-chain)' },
                { step: '2', color: 'text-yellow-400', text: isKo ? 'Polymarket 서버 → 오더북에서 반대 주문 매칭' : 'Polymarket server → matches opposing orders in order book' },
                { step: '3', color: 'text-green-400', text: isKo ? 'Operator → 매칭된 주문 쌍을 CTFExchange.matchOrders() 호출' : 'Operator → calls CTFExchange.matchOrders() with matched order pair' },
                { step: '4', color: 'text-violet-400', text: isKo ? 'CTFExchange → CTF.safeTransferFrom() 실행 → 토큰 교환 온체인 확정' : 'CTFExchange → executes CTF.safeTransferFrom() → token swap settled on-chain' },
                { step: '5', color: 'text-emerald-400', text: isKo ? 'Maker/Taker → 각자 지갑에 토큰 수령 확인' : 'Maker/Taker → confirm token receipt in respective wallets' },
              ].map((line, i) => (
                <div key={i} className="flex gap-3 text-sm font-mono">
                  <span className="text-slate-500 shrink-0">{line.step}.</span>
                  <span className={line.color}>{line.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 mb-6 font-mono text-xs">
            <div className="text-slate-400 mb-4">{isKo ? '// CTFExchange.matchOrders() 핵심 시그니처' : '// CTFExchange.matchOrders() core signature'}</div>
            <pre className="text-green-400 overflow-x-auto whitespace-pre">{`function matchOrders(
    Order calldata takerOrder,
    Order[] calldata makerOrders,
    uint256 takerFillAmount,
    uint256[] calldata makerFillAmounts
) external onlyOperator {
    // 1. 서명 검증 (EIP-712)
    _validateOrder(takerOrder);
    for (Order o in makerOrders) _validateOrder(o);

    // 2. 가격 조건 검증 (taker price >= maker price)
    _validateMatch(takerOrder, makerOrders[i]);

    // 3. CTF를 통한 실제 토큰 이전
    CTF.safeTransferFrom(maker, taker, tokenId, fillAmount, "");
    CTF.safeTransferFrom(taker, maker, oppositeTokenId, fillAmount, "");

    emit OrderFilled(orderHash, maker, taker, ...);
}`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: isKo ? '가스 효율' : 'Gas efficiency', desc: isKo ? '주문 생성·취소는 가스 없음. 매칭 정산 시에만 온체인 트랜잭션 발생.' : 'Order creation/cancellation costs no gas. On-chain tx only at settlement.', icon: '⛽' },
              { title: isKo ? '슬리피지 없음' : 'No slippage', desc: isKo ? 'AMM과 달리 지정가 주문. 원하는 가격이 아니면 체결 안 됨.' : 'Limit orders unlike AMM. Only fills at requested price.', icon: '📊' },
              { title: isKo ? '검열 가능성' : 'Censorship risk', desc: isKo ? '오프체인 매칭 서버가 주문을 거부할 수 있다. 완전 탈중앙화 아님.' : 'Off-chain matching server can reject orders. Not fully decentralized.', icon: '⚠️' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: UMA Oracle */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. UMA Optimistic Oracle — 결과 판정 메커니즘' : '5. UMA Optimistic Oracle — Resolution Mechanism'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? '마켓 결과를 누가, 어떻게 판정하는가? Polymarket는 UMA의 Optimistic Oracle v2를 사용한다. "낙관적(Optimistic)" 이란, 제안된 답이 이의 없이 유효하면 그대로 확정하고, 이의 제기 시에만 분쟁 해결 메커니즘을 작동시킨다는 의미다.'
              : 'Who determines market outcomes and how? Polymarket uses UMA\'s Optimistic Oracle v2. "Optimistic" means: if a proposed answer goes unchallenged, it\'s confirmed as-is. The dispute resolution mechanism only activates when challenged.'}
          </p>

          <div className="space-y-3 mb-6">
            {[
              { step: '1', label: isKo ? 'Proposer 제출' : 'Proposer submits', desc: isKo ? '누구나 결과를 제안할 수 있다. 제안 시 UMA 토큰(bond)을 스테이킹. 틀리면 몰수.' : 'Anyone can propose an answer. Proposer stakes UMA tokens (bond). Lost if wrong.', color: 'text-blue-400', bg: 'bg-blue-50 border-blue-200' },
              { step: '2', label: isKo ? '2시간 챌린지 기간' : '2-hour challenge period', desc: isKo ? '제안된 결과에 이의 없으면 자동 확정. 이의 제기자도 bond를 스테이킹해야 함.' : 'Proposed outcome auto-confirms if no challenge. Challengers must also stake bond.', color: 'text-yellow-400', bg: 'bg-yellow-50 border-yellow-200' },
              { step: '3a', label: isKo ? '이의 없음 → 자동 확정' : 'No dispute → auto-confirm', desc: isKo ? 'Proposer의 bond 반환 + 수수료 수취. CTF.reportPayouts() 호출 → 결과 기록.' : 'Proposer gets bond back + fee. CTF.reportPayouts() called → result recorded.', color: 'text-green-400', bg: 'bg-green-50 border-green-200' },
              { step: '3b', label: isKo ? '이의 있음 → DVM 투표' : 'Disputed → DVM vote', desc: isKo ? 'UMA의 Data Verification Mechanism 작동. UMA 토큰 홀더가 2일간 투표. 다수결 확정 → 패자 bond 승자에게 전달.' : 'UMA\'s Data Verification Mechanism activates. UMA token holders vote for 2 days. Majority wins → loser bond transferred to winner.', color: 'text-red-400', bg: 'bg-red-50 border-red-200' },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.bg}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`font-black font-mono ${item.color}`}>{item.step}</span>
                  <span className="font-bold text-slate-900">{item.label}</span>
                </div>
                <p className="text-sm text-slate-600 ml-8">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 font-mono text-xs">
            <div className="text-slate-400 mb-4">{isKo ? '// UMA OO → CTF 결과 보고 플로우' : '// UMA OO → CTF result reporting flow'}</div>
            <pre className="text-green-400 overflow-x-auto whitespace-pre">{`// 1. Proposer가 결과 제안
OptimisticOracleV2.proposePrice(
  requester: CTF_address,
  identifier: bytes32("YES_OR_NO_QUERY"),
  timestamp: market_expiry,
  ancillaryData: "q: 트럼프 당선? res data: p1:0, p2:1",
  proposedPrice: 1e18  // YES = 1
)

// 2. 챌린지 기간 후 결과 확정
OptimisticOracleV2.settle(requester, identifier, timestamp, ancData)

// 3. CTF에 결과 기록 (reportPayouts 호출)
ConditionalTokens.reportPayouts(
  questionId: questionId,
  payouts: [1, 0]  // YES wins, NO loses
)
// 이후 YES 토큰 보유자 → redeemPositions() 가능`}</pre>
          </div>
        </section>

        {/* Section 6: 전체 아키텍처 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 전체 시스템 아키텍처' : '6. Full System Architecture'}
          </h2>

          <div className="space-y-3">
            {[
              { layer: isKo ? '사용자 레이어' : 'User layer', items: ['React Frontend (polymarket.com)', isKo ? 'Metamask / Privy 소셜 로그인' : 'Metamask / Privy social login', isKo ? 'Polymarket Python/JS SDK' : 'Polymarket Python/JS SDK'], color: 'bg-blue-600' },
              { layer: isKo ? '오프체인 인프라' : 'Off-chain infra', items: [isKo ? 'CLOB 매칭 서버 (중앙화)' : 'CLOB matching server (centralized)', isKo ? 'EIP-712 주문 서명 저장소' : 'EIP-712 order signature store', isKo ? 'REST / WebSocket API' : 'REST / WebSocket API'], color: 'bg-slate-600' },
              { layer: isKo ? '온체인 — Polygon' : 'On-chain — Polygon', items: ['CTFExchange (주문 정산)', 'ConditionalTokens ERC-1155 (포지션 토큰)', 'USDC ERC-20 (담보)'], color: 'bg-emerald-600' },
              { layer: isKo ? '오라클 레이어' : 'Oracle layer', items: ['UMA OptimisticOracleV2', isKo ? 'DVM (분쟁 시 UMA 홀더 투표)' : 'DVM (UMA holder vote on disputes)', isKo ? '2시간 챌린지 기간' : '2-hour challenge window'], color: 'bg-violet-600' },
              { layer: isKo ? '체인 인프라' : 'Chain infra', items: ['Polygon PoS (저렴한 가스)', isKo ? 'Alchemy / Infura RPC' : 'Alchemy / Infura RPC', 'Circle USDC (Polygon Native)'], color: 'bg-orange-600' },
            ].map((row, i) => (
              <div key={i} className="flex items-stretch gap-3">
                <div className={`${row.color} text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center justify-center shrink-0 w-32 text-center`}>{row.layer}</div>
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 flex flex-wrap gap-x-6 gap-y-1 items-center">
                  {row.items.map((item, j) => (
                    <span key={j} className="text-sm text-slate-700 font-mono">• {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: 대표 서비스 비교 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 대표 예측 시장 서비스 기술 비교' : '7. Technical Comparison of Leading Prediction Markets'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {[isKo ? '항목' : 'Item', 'Polymarket', 'Augur v2', 'Kalshi', 'Manifold'].map((h, i) => (
                    <th key={i} className={`text-left px-4 py-3 ${i === 0 ? 'rounded-tl-lg' : ''} ${i === 4 ? 'rounded-tr-lg' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [isKo ? '체인' : 'Chain', 'Polygon', 'Ethereum', isKo ? '없음 (중앙화)' : 'None (centralized)', isKo ? '없음' : 'None'],
                  [isKo ? '담보' : 'Collateral', 'USDC', 'DAI / ETH', 'USD', isKo ? '플레이머니' : 'Play money'],
                  [isKo ? '주문 방식' : 'Order type', 'CLOB (Off-chain)', 'AMM (Augur Turbo)', 'CLOB', 'AMM'],
                  [isKo ? '오라클' : 'Oracle', 'UMA OO v2', isKo ? 'REP 홀더 투표' : 'REP holder vote', isKo ? '내부 + 데이터 파트너' : 'Internal + data partners', isKo ? '관리자' : 'Admin'],
                  [isKo ? '분쟁 해결' : 'Dispute resolution', isKo ? 'UMA DVM' : 'UMA DVM', isKo ? 'Augur REP 포크' : 'Augur REP fork', isKo ? '내부' : 'Internal', 'N/A'],
                  [isKo ? '탈중앙화' : 'Decentralization', isKo ? '부분 (오더북 중앙화)' : 'Partial (order book)', isKo ? '높음' : 'High', isKo ? '낮음' : 'Low', isKo ? '낮음' : 'Low'],
                  [isKo ? '규제' : 'Regulation', isKo ? '비규제 (미국인 제한)' : 'Unregulated (US restricted)', isKo ? '비규제' : 'Unregulated', 'CFTC 규제', isKo ? '비규제' : 'Unregulated'],
                  [isKo ? '거래량' : 'Volume', '$10B+ (2024)', '~$50M', '~$1B', isKo ? '소액' : 'Small'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 border-b border-slate-100 font-semibold text-slate-600">{row[0]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 font-medium text-emerald-700">{row[1]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-slate-700">{row[2]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-slate-700">{row[3]}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-slate-700">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: 직접 연동 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. Polymarket API / SDK로 직접 연동하기' : '8. Integrating with Polymarket API / SDK'}
          </h2>
          <p className="text-slate-600 mb-6">
            {isKo
              ? 'Polymarket는 공개 REST API와 Python/JS SDK를 제공한다. 마켓 조회, 주문 제출, 포지션 관리를 코드로 할 수 있다.'
              : 'Polymarket provides public REST APIs and Python/JS SDKs for market queries, order submission, and position management.'}
          </p>

          <div className="space-y-4">
            <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs">
              <div className="text-slate-400 mb-3">{isKo ? '// 마켓 조회 — REST API' : '// Market query — REST API'}</div>
              <pre className="text-green-400 overflow-x-auto whitespace-pre">{`// 활성 마켓 목록
GET https://clob.polymarket.com/markets
  ?active=true&closed=false

// 특정 마켓 오더북
GET https://clob.polymarket.com/book
  ?token_id=<YES_positionId>

// 응답 예시
{
  "market": "0xabc...",
  "question": "트럼프 당선?",
  "conditionId": "0x123...",
  "tokens": [
    { "token_id": "...", "outcome": "Yes", "price": 0.62 },
    { "token_id": "...", "outcome": "No",  "price": 0.38 }
  ],
  "volume": "3300000000"
}`}</pre>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs">
              <div className="text-slate-400 mb-3">{isKo ? '// 주문 제출 — Python SDK' : '// Order submission — Python SDK'}</div>
              <pre className="text-blue-400 overflow-x-auto whitespace-pre">{`from py_clob_client.client import ClobClient
from py_clob_client.clob_types import OrderArgs, OrderType

client = ClobClient(
    host="https://clob.polymarket.com",
    key=PRIVATE_KEY,
    chain_id=137  # Polygon
)

# GTC 지정가 매수: YES 토큰 @0.62
order = client.create_order(
    OrderArgs(
        token_id=YES_TOKEN_ID,
        price=0.62,
        size=100,           # 100 shares
        side="BUY",
        order_type=OrderType.GTC
    )
)
resp = client.post_order(order)
print(resp["orderID"])  # 오더북에 등록됨`}</pre>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs">
              <div className="text-slate-400 mb-3">{isKo ? '// 온체인 직접 상호작용 — ethers.js' : '// Direct on-chain interaction — ethers.js'}</div>
              <pre className="text-violet-400 overflow-x-auto whitespace-pre">{`const CTF_ADDRESS = "0x4D97DCd97eC945f40cF65F87097ACe5EA0476045";
const ctf = new ethers.Contract(CTF_ADDRESS, CTF_ABI, signer);

// 1. USDC approve
await usdc.approve(CTF_ADDRESS, parseUnits("10", 6));

// 2. USDC → YES + NO 분할
await ctf.splitPosition(
  USDC_ADDRESS,
  ethers.ZeroHash,       // parentCollectionId
  conditionId,
  [1, 2],                // partition (indexSets)
  parseUnits("10", 6)    // 10 USDC
);

// 3. 결과 확정 후 YES 토큰 → USDC 환매
await ctf.redeemPositions(
  USDC_ADDRESS,
  ethers.ZeroHash,
  conditionId,
  [1]  // YES indexSet
);`}</pre>
            </div>
          </div>
        </section>

        {/* Section 9: 한계와 과제 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '9. 기술적 한계와 현재 과제' : '9. Technical Limitations and Current Challenges'}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: isKo ? '오라클 조작 가능성' : 'Oracle manipulation',
                desc: isKo ? 'UMA DVM도 대규모 자본으로 REP/UMA 토큰 다수를 확보하면 결과를 조작할 수 있다. 현실적으로 비용이 크지만 이론적 위험은 존재.' : 'UMA DVM can theoretically be manipulated if an actor acquires enough UMA tokens. Expensive in practice but the theoretical risk exists.',
                icon: '🎲',
                color: 'border-red-200',
              },
              {
                title: isKo ? '오더북 검열' : 'Order book censorship',
                desc: isKo ? 'Polymarket 서버가 특정 주문을 거부하거나 사용자를 차단할 수 있다. 미국 사용자가 VPN 없이 접근 제한된 이유가 이것.' : 'Polymarket server can reject orders or block users. This is why US users are restricted without VPN — centralized enforcement.',
                icon: '🚫',
                color: 'border-orange-200',
              },
              {
                title: isKo ? '"주관적" 질문 해석' : 'Subjective question interpretation',
                desc: isKo ? '"트럼프가 이길 것인가"처럼 명확한 질문은 쉽지만, 모호한 조건의 질문은 오라클 분쟁이 많다. 언어적 모호성이 기술적 취약점이 된다.' : 'Clear questions like "Will X win?" are easy. Ambiguous conditions generate frequent oracle disputes. Linguistic ambiguity becomes a technical vulnerability.',
                icon: '📝',
                color: 'border-yellow-200',
              },
              {
                title: isKo ? '유동성 집중' : 'Liquidity concentration',
                desc: isKo ? '대형 마켓(대선, 월드컵)에는 유동성이 몰리지만, 틈새 마켓은 스프레드가 넓고 유동성이 얕다. LP 인센티브 구조 개선이 과제.' : 'Liquidity concentrates in large markets (elections, World Cup). Niche markets have wide spreads and shallow depth. Improving LP incentive structure is an ongoing challenge.',
                icon: '💧',
                color: 'border-blue-200',
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-bold text-slate-900">{item.title}</span>
                </div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: 요약 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '10. 기술자를 위한 요약' : '10. Summary for Engineers'}
          </h2>

          <div className="bg-slate-900 rounded-2xl p-8 font-mono text-sm">
            <div className="text-slate-400 text-xs mb-4">{isKo ? '// Polymarket 기술 스택 한눈에' : '// Polymarket tech stack at a glance'}</div>
            {[
              { label: 'Token standard   ', val: 'ERC-1155 (CTF) — YES/NO 포지션', color: 'text-blue-400' },
              { label: 'Collateral       ', val: 'USDC (Polygon Native)', color: 'text-green-400' },
              { label: 'Order matching   ', val: 'Off-chain CLOB + EIP-712 서명', color: 'text-yellow-400' },
              { label: 'Settlement       ', val: 'On-chain CTFExchange.matchOrders()', color: 'text-emerald-400' },
              { label: 'Oracle           ', val: 'UMA OptimisticOracleV2 (2h window)', color: 'text-violet-400' },
              { label: 'Dispute          ', val: 'UMA DVM — 토큰 홀더 투표 (2일)', color: 'text-pink-400' },
              { label: 'Chain            ', val: 'Polygon PoS (저가스 + 빠른 확정)', color: 'text-orange-400' },
              { label: 'API              ', val: 'clob.polymarket.com REST + WS', color: 'text-cyan-400' },
            ].map((line, i) => (
              <div key={i} className="flex gap-2 leading-7">
                <span className="text-slate-500">{line.label}</span>
                <span className={line.color}>{line.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-black mb-3">
            {isKo ? '예측 시장의 집단 지성 + walits 자동 수익' : 'Prediction market wisdom + walits auto yield'}
          </h3>
          <p className="text-emerald-100 mb-6">
            {isKo
              ? 'Polymarket에서 포지션을 대기하는 USDC도 walits Idle Time Detector가 자동으로 수익화한다.'
              : 'Even USDC waiting to enter Polymarket positions earns automatic yield via walits Idle Time Detector.'}
          </p>
          <Link href="/" className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
            {isKo ? 'walits 시작하기 →' : 'Get Started with walits →'}
          </Link>
        </div>

      </div>
    </div>
  );
}
