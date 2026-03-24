'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AaveDeepDivePage() {
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
            <button
              key={l}
              onClick={() => setLanguage(l)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === l
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {l === 'ko' ? '한국어' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500">
          <Image src="/blog/aave.jpg" alt="Aave DeFi Protocol" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-purple-500/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 1</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            {/* ── 제목 ── */}
            <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
              DeFi 시리즈 1 — AAVE
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">DeFi 렌딩 프로토콜 완전 해부</p>

            {/* 요약 수치 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'TVL (2026)', value: '$18B+', sub: '전체 DeFi 2위권' },
                { label: '지원 네트워크', value: '13+', sub: 'Ethereum, Arbitrum 등' },
                { label: '지원 자산', value: '30+', sub: '주요 토큰·스테이블코인' },
                { label: '플래시론 누적', value: '$100B+', sub: '출시 이후 누적' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── S1 Aave란 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · Aave란 무엇인가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave는 이더리움에서 시작한 <strong>탈중앙화 렌딩(대출·예치) 프로토콜</strong>이다. 2017년 ETHLend라는 이름으로 출시됐고, 2020년 Aave로 리브랜딩하면서 현재의 풀 기반 구조로 전환했다. 핀란드어로 "유령(ghost)"을 뜻하는 이름처럼, 중앙 운영자 없이 스마트컨트랙트만으로 작동한다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              전통 금융에서 대출은 은행이 심사하고 신용을 평가한다. Aave는 이 과정을 스마트컨트랙트로 대체한다. <strong>담보를 맡기면 자동으로 대출이 실행되고, 담보 가치가 떨어지면 자동으로 청산된다.</strong> 사람이 개입하는 지점이 없다.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                { title: '2017', desc: 'ETHLend 출시 — P2P 방식 렌딩', icon: '🌱' },
                { title: '2020', desc: 'Aave v1 출시 — 풀 기반 모델, 플래시론 도입', icon: '🚀' },
                { title: '2023~', desc: 'Aave v3 + GHO 스테이블코인 + 13개 네트워크 확장', icon: '🌐' },
              ].map((h, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl mb-2">{h.icon}</p>
                  <p className="font-bold text-gray-900 dark:text-white">{h.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{h.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S2 핵심 개념: 과담보 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · 핵심 전제: 과담보(Over-collateralization)</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave는 신원 확인이나 신용 심사를 하지 않는다. 대신 <strong>빌리는 금액보다 더 많은 가치의 담보를 먼저 맡겨야</strong> 한다. 이것이 과담보 구조다.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">예시</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">ETH $1,000 어치를 담보로 맡기면, 최대 약 $800 상당의 USDT를 빌릴 수 있다 (LTV 80%). 빌린 돈을 갚지 않으면 담보인 ETH가 청산된다.</p>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">개념</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">설명</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">예시 (ETH 담보)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { term: 'LTV (대출비율)', desc: '담보 대비 최대 대출 가능 비율', ex: '80% → $1,000 담보면 $800 대출 가능' },
                    { term: 'Liquidation Threshold', desc: '이 비율 넘으면 청산 시작', ex: '85% → 담보/$대출 = 85% 돌파 시' },
                    { term: 'Health Factor', desc: '청산까지 얼마나 여유가 있나 (1.0 미만 = 청산)', ex: '1.5 → 안전 / 0.9 → 청산 중' },
                    { term: 'Liquidation Bonus', desc: '청산자에게 주는 인센티브', ex: '5% → 청산자가 $105 담보를 $100에 가져감' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-purple-700 dark:text-purple-300">{r.term}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{r.desc}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S3 예치 구조 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · 예치(Supply) — 온체인에서 실제로 일어나는 일</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              "Aave에 USDT를 예치한다"는 표현은 단순해 보이지만, 온체인에서는 3단계 트랜잭션이 정밀하게 실행된다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  n: '1',
                  title: 'approve() 호출',
                  desc: '먼저 USDT 컨트랙트에게 "Aave Pool 컨트랙트가 내 USDT를 가져가도 된다"고 허용한다. 이게 없으면 다음 단계가 불가능하다.',
                  code: 'USDT.approve(AavePool, amount)',
                  color: 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20',
                },
                {
                  n: '2',
                  title: 'supply() → safeTransferFrom() 실행',
                  desc: 'Aave Pool 컨트랙트가 USDT 컨트랙트에서 transferFrom()으로 실제 USDT를 풀 주소로 이동시킨다. 이때 USDT 컨트랙트 잔고 테이블이 갱신된다.',
                  code: 'USDT.balanceOf(내 지갑) ↓\nUSDT.balanceOf(aUSDT 컨트랙트) ↑',
                  color: 'border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20',
                },
                {
                  n: '3',
                  title: 'aEthUSDT mint',
                  desc: '동시에 Aave가 내 지갑 주소로 aEthUSDT 토큰을 발행한다. 이 토큰이 "나는 풀 안의 USDT 중 이만큼의 지분을 가졌다"는 영수증이다.',
                  code: 'aEthUSDT.mint(내 지갑, amount)',
                  color: 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 w-5 flex-shrink-0">{s.n}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{s.desc}</p>
                      <code className="block bg-white dark:bg-gray-900 rounded-lg px-4 py-2 text-xs font-mono text-gray-600 dark:text-gray-300 whitespace-pre">{s.code}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 구조 다이어그램 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Etherscan에서 보이는 두 개의 Transfer 이벤트</p>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 px-2 py-0.5 rounded font-bold flex-shrink-0">USDT Transfer</span>
                  <span className="text-gray-500">내 지갑</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-purple-600 dark:text-purple-400">aUSDT 컨트랙트 주소</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 rounded font-bold flex-shrink-0">aUSDT Transfer</span>
                  <span className="text-purple-600 dark:text-purple-400">aUSDT 컨트랙트</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-500">내 지갑</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">진짜 USDT는 aUSDT 컨트랙트 주소 안에 있다. 단순한 "주소 매핑 변경"이 아니라 <strong>실제 ERC-20 토큰이 이동</strong>한 것이다.</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S4 aToken 구조 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · aToken 내부 구조 — 이자는 어떻게 자동으로 붙나</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              aToken도 ERC-20이라 내부에 <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">balanceOf(address)</code> 매핑을 가진다. 하지만 일반 ERC-20과 다른 점이 있다. <strong>별도의 트랜잭션 없이 시간이 지남에 따라 balance가 자동으로 증가</strong>한다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">지분 계산 공식</p>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-center text-gray-700 dark:text-gray-300">
                  사용자 지분 비율 = aUSDT.balanceOf(내 지갑) ÷ aUSDT.totalSupply()
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-center text-gray-700 dark:text-gray-300">
                  출금 가능 USDT = 지분 비율 × USDT.balanceOf(aUSDT 컨트랙트)
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">차입자가 이자를 갚을수록 풀 안의 USDT가 늘어나고, 같은 aUSDT 잔고로 더 많은 USDT를 출금할 수 있게 된다. 이것이 "이자가 자동으로 붙는" 메커니즘의 실체다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">USDT 컨트랙트가 보는 것</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
                  <p>balanceOf(내 지갑) = 0</p>
                  <p className="text-purple-600 dark:text-purple-400">balanceOf(aUSDT 컨트랙트) = 1,000,000</p>
                </div>
                <p className="text-xs text-gray-400 mt-3">풀 전체 잔액만 기록. 누가 몇 % 소유인지 모른다.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">aUSDT 컨트랙트가 보는 것</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
                  <p className="text-green-600 dark:text-green-400">balanceOf(지갑A) = 500,200</p>
                  <p>balanceOf(지갑B) = 499,800</p>
                  <p>totalSupply() = 1,000,000</p>
                </div>
                <p className="text-xs text-gray-400 mt-3">개인별 지분을 관리. 이자 발생 = balance 증가.</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── WHY 섹션 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · 왜 ETH를 팔지 않고 굳이 빌리는가?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              처음 Aave를 접하면 이런 의문이 든다. <strong>"ETH를 담보로 맡기고 USDT를 빌리는 게 왜 유리하지? 그냥 ETH → USDT 스왑하면 되지 않나?"</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              결론부터 말하면, 스왑은 ETH를 <em>처분</em>하는 것이고 대출은 ETH를 <em>유지하면서</em> 현금을 조달하는 것이다. 이 차이가 DeFi 대출의 핵심이다.
            </p>

            {/* 비교 카드 */}
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-3">❌ ETH → USDT 스왑</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• ETH가 사라진다</li>
                  <li>• 이후 ETH 가격이 올라도 수익 없음</li>
                  <li>• 대부분의 국가에서 <strong>양도소득세 과세</strong> 이벤트 발생</li>
                  <li>• 되돌리려면 다시 USDT → ETH 스왑 (슬리피지 + 수수료)</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-3">✅ ETH 담보 → USDT 대출</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• ETH가 그대로 담보에 남아있다</li>
                  <li>• ETH 가격 상승 시 담보 가치도 같이 오름</li>
                  <li>• 대출은 과세 이벤트 아님 (세금 이연)</li>
                  <li>• USDT 상환하면 ETH 그대로 돌려받음</li>
                </ul>
              </div>
            </div>

            {/* 구체적 시나리오 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">실제 사용 시나리오 4가지</p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">💰</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">시나리오 1 — ETH 홀더의 현금 조달</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ETH를 팔기 싫은데 당장 생활비나 사업 자금이 필요한 경우. ETH 담보 → USDT 대출 → 현금화. 나중에 USDT 갚으면 ETH 돌려받는다. <strong>ETH를 "팔지 않고" 유동성을 확보</strong>하는 것이 핵심.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📈</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">시나리오 2 — 레버리지 롱</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ETH 가격 상승을 강하게 베팅하고 싶을 때. ETH 담보 → USDT 대출 → USDT로 ETH 추가 구매 → 다시 담보 → 반복. ETH 보유량이 늘어나는 만큼 레버리지가 걸린다. 단, ETH 가격이 빠지면 청산 위험이 증폭된다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🏛️</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">시나리오 3 — 세금 이연 (Tax Deferral)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ETH를 스왑하면 매도로 간주돼 양도소득세가 발생한다. 반면 대출은 보유 자산을 담보로 빌리는 것이라 <strong>과세 이벤트가 아니다</strong>. ETH가 많이 오른 상황에서 현금이 필요할 때, 세금 없이 유동성을 확보하는 전략으로 활용된다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📉</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">시나리오 4 — 다른 코인 숏 포지션</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">ETH 담보 → 알트코인 대출 → 대출한 알트코인을 즉시 스왑해서 팔기. 알트코인 가격이 내려가면 나중에 싸게 사서 상환하고 차익을 챙긴다. 전통 금융의 공매도(Short Selling)를 DeFi에서 구현하는 방식이다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 핵심 트레이드오프 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-5 rounded-r-lg my-6">
              <p className="text-sm font-bold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ 그렇다면 왜 모든 사람이 이렇게 하지 않는가?</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-200 leading-relaxed">
                <strong>청산 위험</strong> 때문이다. ETH 가격이 하락하면 담보 가치가 떨어지고, Health Factor가 1.0 아래로 내려가면 담보가 강제 청산된다. 스왑은 ETH를 잃지만 추가 손실이 없는 반면, 대출은 가격이 빠질 때 담보 ETH까지 잃을 수 있다. <strong>레버리지는 양방향으로 작동한다.</strong>
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S6 대출 구조 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · 대출(Borrow) 구조 — 온체인에서 실제로 무슨 일이 일어나나</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              예치한 자산이 담보가 되면 다른 자산을 빌릴 수 있다. 단순히 "돈을 빌린다"고 표현하지만, 온체인에서는 정밀한 토큰 발행·소각 구조로 동작한다. 이자가 어떻게 쌓이고, 빚이 어떻게 추적되는지 처음부터 끝까지 따라가 보자.
            </p>

            {/* STEP 1 — 빌리기 전 상태 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">📋 전체 흐름 한눈에 보기 — ETH $2,000 담보, USDT $1,200 대출 시나리오</p>
              <div className="space-y-3">
                {[
                  {
                    step: '① 담보 예치',
                    desc: 'ETH $2,000 → Aave Pool에 supply() 호출',
                    state: '내 지갑: aETH 2,000 수령 / ETH 사라짐',
                    color: 'border-blue-300 dark:border-blue-700',
                    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  },
                  {
                    step: '② 대출 실행',
                    desc: 'borrow(USDT, 1200) 호출 → USDT $1,200 지갑으로 들어옴',
                    state: '내 지갑: USDT 1,200 추가 / variableDebtUSDT 1,200 mint됨',
                    color: 'border-orange-300 dark:border-orange-700',
                    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  },
                  {
                    step: '③ 이자 누적',
                    desc: '매 블록(~12초)마다 variableDebtUSDT balance 자동 증가',
                    state: '예: 연 5% → 1년 후 빚이 USDT 1,260으로 늘어남',
                    color: 'border-red-300 dark:border-red-700',
                    badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  },
                  {
                    step: '④ 상환',
                    desc: 'repay(USDT, 1260) 호출 → USDT 풀에 반납',
                    state: 'variableDebtUSDT burn → 담보 ETH 자유롭게 출금 가능',
                    color: 'border-green-300 dark:border-green-700',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  },
                ].map((s, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${s.color} bg-white dark:bg-gray-900`}>
                    <div className="flex flex-wrap items-start gap-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded flex-shrink-0 ${s.badge}`}>{s.step}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{s.desc}</p>
                        <p className="text-xs text-gray-500 mt-1 font-mono">{s.state}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* debtToken 설명 */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">variableDebtToken — 빚을 추적하는 특수 토큰</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              대출을 실행하면 USDT가 지갑으로 들어오는 동시에, <strong>variableDebtUSDT</strong>라는 토큰이 자동으로 발행된다. 이것이 핵심이다. 이 토큰은 "내가 Aave에 얼마를 빚지고 있는지"를 온체인에 기록한다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">일반 토큰 vs debtToken</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <p>일반 ERC-20: transfer 가능, 팔 수 있음</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">✗</span>
                    <p>debtToken: transfer 불가, 팔 수 없음. 오직 상환(repay)으로만 소각됨</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0">↗</span>
                    <p>매 블록 balance가 자동으로 증가 (이자 누적)</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Etherscan에서 보면</p>
                <div className="space-y-2 font-mono text-xs text-gray-600 dark:text-gray-400">
                  <div className="bg-white dark:bg-gray-900 rounded p-2">
                    <span className="text-green-500">USDT Transfer</span><br />
                    Pool → 내 지갑: +1,200
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded p-2">
                    <span className="text-red-500">variableDebtUSDT Mint</span><br />
                    0x000 → 내 지갑: +1,200
                  </div>
                  <p className="text-gray-400 pt-1">두 이벤트가 동시에 발생</p>
                </div>
              </div>
            </div>

            {/* 이자율 모델 */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">금리는 어떻게 결정되나 — 이용률 기반 자동 조정</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave 금리는 은행처럼 위원회가 결정하지 않는다. <strong>이용률(Utilization Rate)</strong> 하나로 자동 계산된다.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-4">
              <p className="text-xs font-mono text-gray-500 mb-4">이용률 = 현재 대출된 총량 ÷ 총 예치량</p>
              <div className="space-y-3">
                {[
                  { util: '0%', rate: '~1%', bar: 'w-0', label: '아무도 빌리지 않음 → 최저 금리', color: 'bg-green-400' },
                  { util: '50%', rate: '~4%', bar: 'w-1/2', label: '절반이 대출 중 → 완만한 상승', color: 'bg-green-400' },
                  { util: '80%', rate: '~6%', bar: 'w-4/5', label: '최적 이용률(Kink) → 여기서 기울기가 꺾임', color: 'bg-yellow-400' },
                  { util: '95%', rate: '~50%', bar: 'w-full', label: '위험 구간 → 금리 폭등, 차입 억제 + 상환 유도', color: 'bg-red-500' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-8 text-xs font-mono text-gray-500 flex-shrink-0">{r.util}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                      <div className={`${r.bar} ${r.color} h-2 rounded-full`} />
                    </div>
                    <span className="w-12 text-xs font-bold text-gray-700 dark:text-gray-300 flex-shrink-0">{r.rate}</span>
                    <span className="text-xs text-gray-500 hidden md:block">{r.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">이용률 80%(Kink Point)까지는 금리가 완만하게 오르다가, 그 이후 급격히 치솟는다. 예치자에게는 높은 이자를 주고 차입자에게는 빠른 상환을 유도하는 설계다.</p>
            </div>

            {/* 변동금리 vs 고정금리 */}
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm">Variable Rate (변동금리)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">이용률에 따라 매 블록 실시간 변동. 대부분의 사용자가 선택하는 방식. 금리가 낮을 때 유리하지만, 급등 가능성 있음.</p>
                <p className="text-xs font-mono bg-gray-100 dark:bg-gray-900 rounded p-2 text-gray-500">USDT 대출 시 현재 APY: ~5%</p>
              </div>
              <div className="border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm">Stable Rate (고정금리)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">단기적으로 고정된 금리. 시장 급등 시 보호받지만 평소 변동금리보다 높다. 극단적 상황에서 리베이스 가능. 일부 자산만 지원.</p>
                <p className="text-xs font-mono bg-gray-100 dark:bg-gray-900 rounded p-2 text-gray-500">같은 USDT 대출 시 Stable APY: ~7%</p>
              </div>
            </div>

            {/* 구체적 이자 계산 예시 */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">실제 이자 계산 — 하루, 한 달, 1년 후</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              USDT $1,200을 연 5% Variable Rate로 빌렸다고 가정하자. 얼마씩 이자가 쌓일까?
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">기간</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">누적 이자</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">총 상환액</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: '1일', interest: '$0.16', total: '$1,200.16', note: 'variableDebtUSDT balance가 이만큼 늘어남' },
                    { period: '1주', interest: '$1.15', total: '$1,201.15', note: '체감하기 힘든 수준' },
                    { period: '1개월', interest: '$4.93', total: '$1,204.93', note: '월 커피값 수준' },
                    { period: '6개월', interest: '$29.59', total: '$1,229.59', note: '담보 ETH 가격도 함께 변동' },
                    { period: '1년', interest: '$60.00', total: '$1,260.00', note: '연 5% 단리 기준 (복리면 더 높음)' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium">{r.period}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-red-600 dark:text-red-400 font-mono">{r.interest}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono font-bold">{r.total}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 text-xs">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-r-lg my-4">
              <p className="text-sm text-blue-800 dark:text-blue-300"><strong>중요:</strong> 이자율은 이용률에 따라 실시간 변동한다. 위 수치는 연 5% 고정 가정이며, 실제로는 매 블록 재계산된다. Aave 대시보드에서 현재 APY를 항상 확인해야 한다.</p>
            </div>

            {/* 상환 흐름 */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">상환(Repay) 흐름 — 빚을 갚으면 온체인에서 무슨 일이 생기나</h3>
            <div className="space-y-3 my-4">
              {[
                { n: '1', title: 'repay(USDT, amount) 호출', desc: '갚을 USDT를 approve 후 repay 함수 호출. 전액 또는 일부 상환 모두 가능.', color: 'bg-blue-50 dark:bg-blue-900/20' },
                { n: '2', title: 'USDT가 Pool로 이동', desc: 'USDT 컨트랙트에서 transferFrom으로 내 지갑 USDT → Aave Pool 주소로 이동. 이 USDT는 예치자들의 이자 + 원금이 된다.', color: 'bg-orange-50 dark:bg-orange-900/20' },
                { n: '3', title: 'variableDebtUSDT burn', desc: '갚은 금액만큼 debtToken이 소각된다. 전액 상환이면 balance = 0이 되고, 빚이 완전히 사라진다.', color: 'bg-red-50 dark:bg-red-900/20' },
                { n: '4', title: '담보 출금 가능', desc: 'debtToken이 0이 되면 담보로 잠겨있던 aETH를 withdraw()로 돌려받을 수 있다. 다시 ETH로 교환되어 지갑에 들어온다.', color: 'bg-green-50 dark:bg-green-900/20' },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-4 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-400 w-4 flex-shrink-0 mt-0.5">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{s.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Health Factor 실시간 변화 */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">내 포지션이 안전한지 — Health Factor 실시간 추적</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              대출 중에는 담보 가치 변동과 이자 누적으로 Health Factor가 계속 바뀐다. 이것을 모니터링하지 않으면 청산을 맞을 수 있다.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">ETH $2,000 담보 / USDT $1,200 대출 상황에서 ETH 가격이 내려갈 때</p>
              <div className="space-y-3">
                {[
                  { price: 'ETH $2,000 (대출 시점)', hf: '1.33', status: '✅ 안전', color: 'text-green-600 dark:text-green-400', bar: 'bg-green-400', width: 'w-4/5' },
                  { price: 'ETH $1,700', hf: '1.13', status: '⚠️ 주의', color: 'text-yellow-600 dark:text-yellow-400', bar: 'bg-yellow-400', width: 'w-3/5' },
                  { price: 'ETH $1,500', hf: '1.00', status: '🔴 청산 경계', color: 'text-orange-600 dark:text-orange-400', bar: 'bg-orange-400', width: 'w-2/5' },
                  { price: 'ETH $1,400', hf: '0.93', status: '💀 청산 실행됨', color: 'text-red-600 dark:text-red-400', bar: 'bg-red-500', width: 'w-1/4' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-36 text-xs text-gray-600 dark:text-gray-400 flex-shrink-0">{r.price}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className={`${r.width} ${r.bar} h-3 rounded-full transition-all`} />
                    </div>
                    <span className={`w-10 text-xs font-bold flex-shrink-0 ${r.color}`}>{r.hf}</span>
                    <span className={`text-xs flex-shrink-0 ${r.color}`}>{r.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">* ETH Liquidation Threshold 85% 기준. HF = (담보 가치 × 0.85) ÷ 총 빚. ETH $1,500이면 ($1,500 × 0.85) ÷ $1,200 = 1.0625 → 위험 구간 진입.</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-xl p-5 my-6">
              <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 text-sm">💡 청산을 피하는 실용적인 방법</p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>보수적 LTV 유지:</strong> 최대 $1,600 빌릴 수 있어도 $800만 빌린다. 여유가 많을수록 안전 마진이 생긴다.</p></div>
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>담보 추가 공급:</strong> ETH 가격이 빠질 것 같으면 담보를 더 넣어 HF를 올린다.</p></div>
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>일부 상환:</strong> 빚 일부를 갚아 HF를 빠르게 회복시킨다.</p></div>
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>알림 설정:</strong> DeFi Saver, Instadapp 같은 도구로 HF 알림을 설정해두면 청산 전 대응 가능하다.</p></div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S6 청산 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · 청산(Liquidation)</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              담보 가치가 떨어지거나 이자가 쌓여 <strong>Health Factor가 1.0 미만</strong>이 되면 청산이 가능해진다. 누구나 청산을 실행할 수 있고, 실행자는 청산 보너스를 받는다.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6 my-6">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-3">청산 시나리오</p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>① 사용자: ETH $1,000 담보, USDT $800 대출 (Health Factor 1.25)</p>
                <p>② ETH 가격 하락 → 담보 가치 $940 → Health Factor 1.0 이하</p>
                <p>③ 청산자가 등장: USDT $400 대신 갚아줌</p>
                <p>④ 청산자는 ETH $420 상당을 가져감 (5% 보너스 포함)</p>
                <p className="text-red-700 dark:text-red-300 font-medium">⑤ 사용자: USDT 빚 절반 감소, 담보 ETH 일부 손실</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Health Factor 공식</p>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                HF = (담보 가치 × Liquidation Threshold) ÷ 총 대출 원리금
              </code>
              <p className="text-xs text-gray-500 mt-2">HF {'>'} 1.0 → 안전 · HF = 1.0 → 청산 경계 · HF {'<'} 1.0 → 청산 가능</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S7 플래시론 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · 플래시론(Flash Loan)</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave가 DeFi 역사에서 가장 혁신적인 기능으로 꼽히는 것이 플래시론이다. <strong>담보 없이 수백만 달러를 빌리고, 같은 트랜잭션 안에서 전액 상환</strong>하는 구조다. 상환에 실패하면 트랜잭션 전체가 revert된다.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                블록체인의 <strong>원자성(Atomicity)</strong> 덕분에 가능하다. 하나의 트랜잭션은 전부 성공하거나 전부 실패한다. 상환을 못 하면 빌린 것 자체가 없었던 일이 된다.
              </p>
            </div>

            <div className="my-6">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">플래시론 API 호출 구조</p>
              <div className="bg-gray-900 rounded-xl p-5 text-xs font-mono space-y-1 overflow-x-auto">
                <p className="text-gray-500">// 1. Aave Pool에 플래시론 요청</p>
                <p><span className="text-blue-400">pool</span>.<span className="text-yellow-300">flashLoan</span>{'('}</p>
                <p className="pl-4"><span className="text-green-400">receiverAddress</span>,  <span className="text-gray-500">// 자금 받을 컨트랙트</span></p>
                <p className="pl-4"><span className="text-green-400">assets</span>,            <span className="text-gray-500">// 빌릴 토큰 주소 배열</span></p>
                <p className="pl-4"><span className="text-green-400">amounts</span>,           <span className="text-gray-500">// 빌릴 수량 배열</span></p>
                <p className="pl-4"><span className="text-green-400">modes</span>,             <span className="text-gray-500">// 0 = 플래시론 (상환 필수)</span></p>
                <p className="pl-4"><span className="text-green-400">params</span>,            <span className="text-gray-500">// 커스텀 콜백 데이터</span></p>
                <p className="pl-4"><span className="text-green-400">referralCode</span></p>
                <p>{')'}</p>
                <p className="mt-3 text-gray-500">// 2. Aave가 executeOperation() 콜백 호출</p>
                <p><span className="text-blue-400">function</span> <span className="text-yellow-300">executeOperation</span>{'('}</p>
                <p className="pl-4"><span className="text-green-400">assets, amounts, premiums, initiator, params</span></p>
                <p>{')'} <span className="text-blue-400">external</span> {'{'}</p>
                <p className="pl-4 text-gray-500">// 여기서 차익거래·청산 등 원하는 로직 실행</p>
                <p className="pl-4 text-gray-500">// 실행 후 원금 + 수수료(0.05%) 승인</p>
                <p className="pl-4"><span className="text-purple-400">IERC20</span>(asset).<span className="text-yellow-300">approve</span>(pool, amount + premium);</p>
                <p className="pl-4"><span className="text-blue-400">return</span> <span className="text-orange-400">true</span>;</p>
                <p>{'}'}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 my-6">
              {[
                { title: '차익거래', desc: 'DEX 간 가격 차이를 자본 없이 포착', icon: '📈' },
                { title: '청산 실행', desc: '청산 기회 포착 시 자본 없이 실행', icon: '⚡' },
                { title: '담보 교체', desc: '기존 대출 상환 후 다른 자산으로 재대출', icon: '🔄' },
              ].map((u, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl mb-2">{u.icon}</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{u.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{u.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S8 Aave v3 주요 기능 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · Aave v3 주요 기능 전체 정리</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">2022년 출시된 v3는 단순 예치·대출을 넘어 다양한 기능을 추가했다.</p>

            <div className="space-y-5 my-6">
              {[
                {
                  tag: 'eMode',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'Efficiency Mode (고효율 모드)',
                  desc: '상관관계가 높은 자산끼리(예: USDC↔USDT, ETH↔stETH) 대출할 때 LTV를 최대 97%까지 올려준다. 즉, $100 담보로 $97까지 대출 가능. 스테이블코인 레버리지나 LST(유동 스테이킹 토큰) 활용 시 자본 효율이 대폭 향상된다.',
                },
                {
                  tag: 'Isolation Mode',
                  tagColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  title: 'Isolation Mode (격리 모드)',
                  desc: '새로 상장된 위험 자산은 Isolation Mode로 분류된다. 해당 자산을 담보로 쓸 때는 대출 가능 자산이 스테이블코인으로만 제한되고, 최대 대출 한도(debt ceiling)가 설정된다. 프로토콜 전체가 특정 자산의 급락에 노출되는 것을 방지한다.',
                },
                {
                  tag: 'Siloed Borrowing',
                  tagColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  title: 'Siloed Borrowing (사일로 차입)',
                  desc: '특정 자산을 빌릴 때 해당 포지션에서는 다른 자산을 추가로 빌릴 수 없도록 격리한다. 오라클 조작 등에 취약한 자산의 리스크를 해당 포지션에만 국한시키는 방어 메커니즘이다.',
                },
                {
                  tag: 'Portal',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: 'Portal (크로스체인 유동성)',
                  desc: 'aToken을 한 네트워크에서 다른 네트워크로 이동시키는 기능. 예: Ethereum의 aUSDC를 Polygon의 aUSDC로 브릿지. 크로스체인 프로토콜(Connext, Hop 등)과 연동해 유동성을 멀티체인으로 확장한다.',
                },
                {
                  tag: 'Supply Cap / Borrow Cap',
                  tagColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
                  title: '공급·차입 한도 설정',
                  desc: '거버넌스가 자산별로 최대 공급량(Supply Cap)과 최대 차입량(Borrow Cap)을 설정할 수 있다. 특정 자산이 과도하게 집중되거나 유동성 위기가 발생하는 것을 사전에 방지하는 리스크 관리 도구다.',
                },
                {
                  tag: 'Risk Oracle',
                  tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  title: '가격 오라클 (Chainlink 연동)',
                  desc: 'Aave는 Chainlink 프라이스 피드를 주 오라클로 사용한다. 모든 담보 가치 계산, Health Factor 산출, 청산 트리거가 이 가격 데이터에 의존한다. 오라클 조작이 최대 공격 벡터 중 하나인 이유다.',
                },
              ].map((f, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${f.tagColor}`}>{f.tag}</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{f.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S9 GHO ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · GHO — Aave 자체 스테이블코인</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2023년 Aave는 자체 달러 페그 스테이블코인 <strong>GHO</strong>를 출시했다. MakerDAO의 DAI와 유사한 구조지만, Aave 프로토콜과 깊게 통합된 점이 다르다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">GHO 발행 구조</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Aave에 담보 예치 → GHO mint (대출 형태)</p>
                  <p>• GHO 금리는 AAVE 거버넌스가 결정</p>
                  <p>• stkAAVE 보유자는 GHO 할인 금리 적용</p>
                  <p>• GHO 상환 시 burn → 담보 반환</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">GHO vs 다른 스테이블코인</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• USDT/USDC: 중앙화, 법정화폐 담보</p>
                  <p>• DAI: 탈중앙화, 과담보 구조 (유사)</p>
                  <p>• GHO: 탈중앙화, Aave 생태계에 수익 귀속</p>
                  <p>• GHO 이자 수익 → Aave DAO 금고로</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S10 AAVE 토큰 & Safety Module ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · AAVE 토큰 & Safety Module</h2>

            <div className="space-y-5 my-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">AAVE 토큰 역할</p>
                <div className="grid md:grid-cols-3 gap-3 mt-3">
                  {[
                    { role: '거버넌스', desc: 'AAVE 보유자가 프로토콜 파라미터 투표 (LTV, 청산 보너스, 신규 자산 상장 등)' },
                    { role: '스테이킹', desc: 'Safety Module에 AAVE를 스테이킹 → stkAAVE 수령, 스테이킹 보상 수취' },
                    { role: 'GHO 할인', desc: 'stkAAVE 보유량에 비례해 GHO 대출 금리 할인' },
                  ].map((r, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">{r.role}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5">
                <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Safety Module — 프로토콜 보험</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Aave에 예상치 못한 결손(shortfall event)이 발생하면 — 예: 오라클 오작동으로 청산이 제때 안 돼서 풀이 부실화 — Safety Module에 스테이킹된 AAVE가 최대 <strong>30%까지 slashing</strong>돼 손실을 보전한다.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 text-sm font-mono text-gray-600 dark:text-gray-400">
                  AAVE 스테이킹 → stkAAVE 수령<br />
                  결손 발생 시 stkAAVE 최대 30% burn → AAVE 신규 발행해 손실 보전<br />
                  평상시: 스테이킹 보상 수취 (리스크 프리미엄)
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S11 지원 네트워크 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">11 · 지원 네트워크 & 배포 현황</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {[
                { name: 'Ethereum', tvl: '$9B+', main: true },
                { name: 'Arbitrum', tvl: '$3B+', main: true },
                { name: 'Polygon', tvl: '$300M+', main: false },
                { name: 'Optimism', tvl: '$250M+', main: false },
                { name: 'Avalanche', tvl: '$200M+', main: false },
                { name: 'Base', tvl: '$400M+', main: false },
                { name: 'Gnosis', tvl: '$50M+', main: false },
                { name: 'BNB Chain', tvl: '$100M+', main: false },
                { name: 'Scroll, zkSync 등', tvl: '확장 중', main: false },
              ].map((n, i) => (
                <div key={i} className={`rounded-xl p-4 text-center border ${n.main ? 'border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'}`}>
                  <p className={`font-semibold text-sm ${n.main ? 'text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'}`}>{n.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.tvl}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S12 청산봇 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">12 · 청산봇 — Aave를 실시간으로 감시하는 자동화 엔진</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave는 사람이 청산을 실행하지 않는다. <strong>봇이 한다.</strong> 전 세계 수백 개의 청산봇이 24시간 Aave 컨트랙트 상태를 모니터링하며, Health Factor가 1.0 미만으로 떨어지는 포지션을 발견하는 즉시 청산 트랜잭션을 제출한다. 이것이 Aave의 리스크 관리가 실제로 작동하는 방식이다.
            </p>

            {/* 청산봇 작동 흐름 */}
            <div className="space-y-4 my-6">
              {[
                {
                  n: '①',
                  title: '온체인 상태 실시간 감시',
                  desc: '봇은 이더리움 노드(또는 Alchemy, Infura 같은 RPC 제공자)에 연결해 Aave Pool 컨트랙트를 폴링한다. getUserAccountData(address)를 호출하면 Health Factor, 담보 가치, 대출 잔액을 한 번에 조회할 수 있다.',
                  code: `// 감시 대상 포지션 조회
const data = await aavePool.getUserAccountData(userAddress);
// data.healthFactor < 1e18 이면 청산 가능
if (data.healthFactor.lt(ethers.utils.parseUnits('1', 18))) {
  triggerLiquidation(userAddress);
}`,
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                },
                {
                  n: '②',
                  title: '수익성 계산',
                  desc: '청산이 가능하다고 모두 실행하지는 않는다. 봇은 청산 보너스(5~15%)에서 가스비를 뺀 순이익을 먼저 계산한다. 가스비가 보너스보다 크면 실행하지 않는다. 경쟁 봇이 많을수록 가스비 경쟁이 치열해진다.',
                  code: `// 수익성 검증
const bonus = collateralToSeize - debtToRepay;
const gasCost = estimatedGas * gasPrice;
if (bonus > gasCost * PROFIT_MARGIN) {
  executeLiquidation();
}`,
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20',
                },
                {
                  n: '③',
                  title: '플래시론으로 자본 문제 해결',
                  desc: '청산을 실행하려면 피해자의 빚 일부를 직접 갚아줘야 한다. 대형 포지션은 수백만 달러가 필요하다. 봇은 Aave 플래시론으로 필요한 자금을 무담보로 조달하고, 청산 후 받은 담보를 팔아 즉시 상환한다. 자본이 없어도 어떤 규모의 청산도 가능하다.',
                  code: `// 플래시론으로 청산 실행 (하나의 트랜잭션)
pool.flashLoan(
  liquidatorContract,
  [debtAsset],          // 빌릴 토큰 (예: USDT)
  [debtAmount],         // 빚 금액
  [0],                  // 0 = 플래시론 모드
  calldata,             // 청산 대상 주소 등
  0
);
// executeOperation() 내부:
// 1. 피해자 포지션 청산 → 담보(ETH) 획득
// 2. ETH를 DEX에서 USDT로 스왑
// 3. Aave에 USDT + 수수료 상환
// 4. 잔여 이익 → 봇 지갑`,
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
                },
                {
                  n: '④',
                  title: 'Flashbots로 경쟁 봇을 제치기',
                  desc: '청산 기회는 여러 봇이 동시에 본다. 공개 mempool에 트랜잭션을 올리면 다른 봇이 gas price를 더 높여 앞지를 수 있다(Priority Gas Auction). 고급 봇은 Flashbots private bundle을 사용해 경쟁 없이 블록에 포함시킨다.',
                  code: `// Flashbots bundle 제출 (경쟁 회피)
const bundle = [
  { tx: approvalTx },        // USDT approve
  { tx: liquidationTx },     // 청산 실행
];
await flashbotsProvider.sendBundle(bundle, targetBlock);`,
                  color: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-mono font-bold text-gray-500 flex-shrink-0 text-lg">{s.n}</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{s.title}</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{s.desc}</p>
                  <pre className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre leading-relaxed">{s.code}</pre>
                </div>
              ))}
            </div>

            {/* 실제 청산 시나리오 */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">실제 청산 시나리오 — 수치로 보기</p>
              <div className="space-y-3 text-sm">
                {[
                  { label: '초기 상태', text: '사용자: ETH $10,000 담보, USDT $7,500 대출 / HF = 1.13', color: 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' },
                  { label: 'ETH -20%', text: 'ETH 가치 $8,000으로 하락 / HF = 0.91 → 청산 가능', color: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300' },
                  { label: '봇 감지', text: 'getUserAccountData() 조회 → HF < 1.0 확인 (수 초 이내)', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300' },
                  { label: '플래시론', text: 'Aave에서 USDT $3,750 플래시론 (최대 50% 청산 한도)', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300' },
                  { label: '청산 실행', text: 'USDT $3,750 상환 → ETH $3,937.5 획득 (5% 보너스)', color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300' },
                  { label: '상환 & 이익', text: 'ETH → USDT 스왑 후 플래시론 상환 / 봇 순이익: ~$187.5 - 가스비', color: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300' },
                ].map((r, i) => (
                  <div key={i} className={`flex items-start gap-3 rounded-lg p-3 ${r.color}`}>
                    <span className="text-xs font-bold flex-shrink-0 w-20">{r.label}</span>
                    <span className="text-xs">{r.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 청산봇이 중요한 이유 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5 my-6">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">청산봇이 없으면 Aave는 작동하지 않는다</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                청산봇은 단순한 수익 추구자가 아니다. Aave의 <strong>리스크 관리 인프라 그 자체</strong>다. 청산봇이 없으면 부실 포지션이 누적되고 프로토콜이 지급 불능 상태가 된다. 봇에게 청산 보너스를 주는 이유가 바로 이 역할에 대한 인센티브다. 탈중앙화 프로토콜은 이처럼 경제적 인센티브로 참여자를 유도해 시스템을 유지한다.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S13 리스크 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">13 · 리스크 구조</h2>

            <div className="space-y-3 my-6">
              {[
                { risk: '스마트컨트랙트 취약점', desc: '코드 버그로 인한 해킹. Aave는 여러 차례 감사를 받았으나 완전히 제거할 수는 없다.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: '오라클 조작', desc: 'Chainlink 가격이 조작되면 청산 트리거가 오작동하거나 대출이 부실화될 수 있다. 과거 플래시론 어택의 주요 공격 벡터.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: '유동성 위기', desc: '대다수가 동시에 출금 시도 시 풀이 고갈될 수 있다. 이용률이 100%에 가까워지면 출금이 불가능해진다.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '거버넌스 리스크', desc: 'AAVE 토큰 집중 보유자가 악의적 거버넌스 제안을 통과시킬 수 있다. 탈중앙화의 역설.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '담보 가치 급락', desc: '담보 자산이 청산 속도보다 빠르게 하락 시 프로토콜 결손 발생. Safety Module이 최후 방어선.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '규제 리스크', desc: '각국 규제기관의 DeFi 규제 강화 시 프론트엔드 접근 차단 가능. 컨트랙트 자체는 검열 불가.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <span className={`text-xs font-bold w-10 flex-shrink-0 ${r.color}`}>{r.level}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.risk}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── 마무리 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 my-8">
              <p className="font-bold text-gray-900 dark:text-white text-lg mb-4">Aave를 한 문장으로</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Aave는 <strong>스마트컨트랙트가 은행 역할을 하는 프로토콜</strong>이다. 신원 확인 없이 담보만 있으면 대출이 실행되고, 이자는 자동으로 쌓이며, 위험해지면 자동으로 청산된다. 사람이 개입하는 지점이 없다. 그 자동화의 편리함이 동시에 리스크의 원천이기도 하다.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* ── EN ── */}
            <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
              DeFi Series 1 — AAVE
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">Complete breakdown of DeFi's largest lending protocol</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'TVL (2026)', value: '$18B+', sub: 'Top 2 in all DeFi' },
                { label: 'Networks', value: '13+', sub: 'Ethereum, Arbitrum, etc.' },
                { label: 'Supported Assets', value: '30+', sub: 'Major tokens & stables' },
                { label: 'Flash Loans (cumulative)', value: '$100B+', sub: 'Since launch' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · What Is Aave?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave is a <strong>decentralized lending and borrowing protocol</strong> that originated on Ethereum. Launched in 2017 as ETHLend, it rebranded to Aave in 2020 and shifted to its current pool-based architecture. The name means "ghost" in Finnish — apt for a protocol that operates entirely through smart contracts, with no central operator.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In traditional finance, a loan requires identity verification and credit scoring. Aave replaces that process with smart contracts. <strong>Post collateral and a loan executes automatically. If your collateral loses value, liquidation happens automatically.</strong> No human intermediary at any step.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                { title: '2017', desc: 'ETHLend launched — peer-to-peer lending model', icon: '🌱' },
                { title: '2020', desc: 'Aave v1 — pool-based model, flash loans introduced', icon: '🚀' },
                { title: '2023+', desc: 'Aave v3 + GHO stablecoin + 13+ network deployments', icon: '🌐' },
              ].map((h, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl mb-2">{h.icon}</p>
                  <p className="font-bold text-gray-900 dark:text-white">{h.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{h.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · Core Premise: Over-Collateralization</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave doesn't verify identity or run credit checks. Instead, <strong>you must deposit collateral worth more than what you borrow.</strong> This is over-collateralization.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">Example</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">Deposit $1,000 worth of ETH as collateral, borrow up to $800 USDT (80% LTV). Fail to repay and your ETH gets liquidated.</p>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Concept</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Description</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Example (ETH collateral)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { term: 'LTV (Loan-to-Value)', desc: 'Max borrowable ratio against collateral', ex: '80% → $1,000 collateral allows $800 borrow' },
                    { term: 'Liquidation Threshold', desc: 'Ratio at which liquidation triggers', ex: '85% → triggered when debt/collateral hits 85%' },
                    { term: 'Health Factor', desc: 'Safety margin until liquidation (< 1.0 = liquidatable)', ex: '1.5 = safe · 0.9 = being liquidated' },
                    { term: 'Liquidation Bonus', desc: 'Incentive paid to the liquidator', ex: '5% → liquidator buys $105 collateral for $100' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-purple-700 dark:text-purple-300">{r.term}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{r.desc}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · Supply (Deposit) — What Actually Happens On-Chain</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              "Depositing USDT into Aave" sounds simple. On-chain, three precise steps execute.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  n: '1',
                  title: 'approve() call',
                  desc: 'First, tell the USDT contract: "Aave Pool is allowed to take my USDT." Without this, the next step is impossible.',
                  code: 'USDT.approve(AavePool, amount)',
                  color: 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20',
                },
                {
                  n: '2',
                  title: 'supply() → safeTransferFrom() executes',
                  desc: 'Aave Pool calls transferFrom() on the USDT contract, moving your actual USDT tokens to the pool address. The USDT contract balance table updates.',
                  code: 'USDT.balanceOf(your wallet) ↓\nUSDT.balanceOf(aUSDT contract) ↑',
                  color: 'border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20',
                },
                {
                  n: '3',
                  title: 'aEthUSDT mint',
                  desc: 'Simultaneously, Aave mints aEthUSDT tokens to your wallet. This token represents your share claim on the pooled USDT.',
                  code: 'aEthUSDT.mint(your wallet, amount)',
                  color: 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 w-5 flex-shrink-0">{s.n}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{s.desc}</p>
                      <code className="block bg-white dark:bg-gray-900 rounded-lg px-4 py-2 text-xs font-mono text-gray-600 dark:text-gray-300 whitespace-pre">{s.code}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Two Transfer Events You'd See on Etherscan</p>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 px-2 py-0.5 rounded font-bold flex-shrink-0">USDT Transfer</span>
                  <span className="text-gray-500">your wallet</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-purple-600 dark:text-purple-400">aUSDT contract address</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 rounded font-bold flex-shrink-0">aUSDT Transfer</span>
                  <span className="text-purple-600 dark:text-purple-400">aUSDT contract</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-500">your wallet</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">The real USDT lives inside the aUSDT contract address. This is not a simple mapping change — <strong>actual ERC-20 tokens moved</strong>.</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · aToken Internals — How Interest Accrues Automatically</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              aTokens are ERC-20 tokens with an internal <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">balanceOf(address)</code> mapping. But unlike ordinary ERC-20s, <strong>your balance grows automatically over time without any transaction.</strong>
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Share Calculation Formula</p>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-center text-gray-700 dark:text-gray-300">
                  User share = aUSDT.balanceOf(your wallet) ÷ aUSDT.totalSupply()
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 font-mono text-center text-gray-700 dark:text-gray-300">
                  Withdrawable USDT = share × USDT.balanceOf(aUSDT contract)
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">As borrowers repay interest, USDT accumulates in the pool. The same aUSDT balance entitles you to progressively more USDT. That's how "automatic interest" actually works.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">What the USDT contract sees</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
                  <p>balanceOf(your wallet) = 0</p>
                  <p className="text-purple-600 dark:text-purple-400">balanceOf(aUSDT contract) = 1,000,000</p>
                </div>
                <p className="text-xs text-gray-400 mt-3">Only the pool total. No information on who owns what share.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">What the aUSDT contract sees</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
                  <p className="text-green-600 dark:text-green-400">balanceOf(walletA) = 500,200</p>
                  <p>balanceOf(walletB) = 499,800</p>
                  <p>totalSupply() = 1,000,000</p>
                </div>
                <p className="text-xs text-gray-400 mt-3">Manages individual shares. Interest accrual = balance increase.</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── WHY section (EN) ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Why Borrow Instead of Just Swapping?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A common first question: <strong>"Why deposit ETH and borrow USDT when you could just swap ETH → USDT directly?"</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The key difference: swapping <em>disposes</em> of your ETH, borrowing lets you <em>keep</em> your ETH while still accessing liquidity.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-3">❌ Swap ETH → USDT</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• ETH is gone</li>
                  <li>• You miss any future ETH price gains</li>
                  <li>• Triggers a <strong>taxable capital gains event</strong> in most jurisdictions</li>
                  <li>• Re-entering requires another swap (slippage + fees)</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-3">✅ Collateralize ETH → Borrow USDT</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• ETH stays locked as collateral</li>
                  <li>• You benefit if ETH price rises</li>
                  <li>• Borrowing is not a taxable event (tax deferral)</li>
                  <li>• Repay USDT → get ETH back intact</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">4 Real-World Use Cases</p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">💰</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Case 1 — Liquidity Without Selling</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">You need cash but don't want to sell your ETH. Deposit ETH → borrow USDT → spend. Repay later and get ETH back. <strong>Access liquidity without closing your position.</strong></p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📈</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Case 2 — Leveraged Long</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bullish on ETH? Deposit ETH → borrow USDT → buy more ETH → deposit again → repeat. This creates a leveraged long position. Risk: if ETH drops, your Health Factor falls and liquidation looms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🏛️</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Case 3 — Tax Deferral</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Swapping ETH = disposal = taxable gain. Borrowing against ETH is <strong>not a taxable event</strong>. If your ETH has significant unrealized gains, borrowing lets you access value without triggering tax — deferring it until you eventually sell.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📉</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Case 4 — Shorting Altcoins</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deposit ETH → borrow an altcoin → immediately sell it. If the altcoin falls, buy it back cheaper, repay the loan, pocket the difference. This is DeFi's version of traditional short-selling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-5 rounded-r-lg my-6">
              <p className="text-sm font-bold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ So why doesn't everyone do this?</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-200 leading-relaxed">
                <strong>Liquidation risk.</strong> If ETH drops, your collateral value falls and if your Health Factor hits 1.0, your collateral gets forcibly liquidated. A simple swap means you lose ETH but nothing more. A leveraged borrow position can wipe out your collateral in a sharp downturn. <strong>Leverage cuts both ways.</strong>
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Borrow Structure — What Actually Happens On-Chain</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              "Borrowing" sounds simple, but on-chain it's a precise token mint/burn mechanism. Let's walk through the full lifecycle — from the moment you call borrow() to repayment — with real numbers.
            </p>

            {/* Full flow overview */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">📋 Full Flow — ETH $2,000 Collateral, Borrow USDT $1,200</p>
              <div className="space-y-3">
                {[
                  {
                    step: '① Supply Collateral',
                    desc: 'supply() with ETH $2,000 → Pool holds the ETH',
                    state: 'Wallet: receives aETH 2,000 / ETH disappears',
                    color: 'border-blue-300 dark:border-blue-700',
                    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  },
                  {
                    step: '② Execute Borrow',
                    desc: 'borrow(USDT, 1200) → $1,200 USDT lands in your wallet',
                    state: 'Wallet: +USDT 1,200 / variableDebtUSDT 1,200 minted',
                    color: 'border-orange-300 dark:border-orange-700',
                    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  },
                  {
                    step: '③ Interest Accrues',
                    desc: 'variableDebtUSDT balance auto-increments every block (~12s)',
                    state: 'e.g. 5% APY → after 1 year, debt grows to USDT 1,260',
                    color: 'border-red-300 dark:border-red-700',
                    badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  },
                  {
                    step: '④ Repay',
                    desc: 'repay(USDT, 1260) → USDT returned to Pool',
                    state: 'variableDebtUSDT burned → collateral ETH withdrawable again',
                    color: 'border-green-300 dark:border-green-700',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  },
                ].map((s, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${s.color} bg-white dark:bg-gray-900`}>
                    <div className="flex flex-wrap items-start gap-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded flex-shrink-0 ${s.badge}`}>{s.step}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{s.desc}</p>
                        <p className="text-xs text-gray-500 mt-1 font-mono">{s.state}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* debtToken */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">variableDebtToken — The On-Chain Debt Receipt</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When you borrow, USDT arrives in your wallet <em>and simultaneously</em> a <strong>variableDebtUSDT</strong> token is minted. This token is your debt tracker — it records exactly how much you owe Aave.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Regular ERC-20 vs debtToken</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">✓</span><p>Normal ERC-20: transferable, tradeable</p></div>
                  <div className="flex items-start gap-2"><span className="text-red-500 flex-shrink-0">✗</span><p>debtToken: non-transferable, non-tradeable. Only destroyed via repay()</p></div>
                  <div className="flex items-start gap-2"><span className="text-blue-500 flex-shrink-0">↗</span><p>Balance auto-increases every block (interest accrual)</p></div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">What Etherscan Shows</p>
                <div className="space-y-2 font-mono text-xs text-gray-600 dark:text-gray-400">
                  <div className="bg-white dark:bg-gray-900 rounded p-2">
                    <span className="text-green-500">USDT Transfer</span><br />
                    Pool → your wallet: +1,200
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded p-2">
                    <span className="text-red-500">variableDebtUSDT Mint</span><br />
                    0x000 → your wallet: +1,200
                  </div>
                  <p className="text-gray-400 pt-1">Both events happen in the same tx</p>
                </div>
              </div>
            </div>

            {/* Interest rate model */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">How Interest Rates Are Set — Utilization-Based Automatic Adjustment</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave rates aren't set by a committee. They're calculated automatically from a single metric: <strong>Utilization Rate</strong>.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-4">
              <p className="text-xs font-mono text-gray-500 mb-4">Utilization Rate = Total Borrowed ÷ Total Supplied</p>
              <div className="space-y-3">
                {[
                  { util: '0%', rate: '~1%', bar: 'w-0', label: 'Nobody borrowing → minimum rate', color: 'bg-green-400' },
                  { util: '50%', rate: '~4%', bar: 'w-1/2', label: 'Half borrowed → gradual rise', color: 'bg-green-400' },
                  { util: '80%', rate: '~6%', bar: 'w-4/5', label: 'Optimal (Kink) → slope steepens here', color: 'bg-yellow-400' },
                  { util: '95%', rate: '~50%', bar: 'w-full', label: 'Danger zone → rate spikes, forces repayment', color: 'bg-red-500' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-8 text-xs font-mono text-gray-500 flex-shrink-0">{r.util}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                      <div className={`${r.bar} ${r.color} h-2 rounded-full`} />
                    </div>
                    <span className="w-12 text-xs font-bold text-gray-700 dark:text-gray-300 flex-shrink-0">{r.rate}</span>
                    <span className="text-xs text-gray-500 hidden md:block">{r.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">Up to 80% utilization (the kink), rates rise slowly. Beyond that, rates spike sharply — incentivizing depositors with high yield while pushing borrowers to repay.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm">Variable Rate</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Changes every block based on utilization. Most users choose this. Lower on average, but can spike.</p>
                <p className="text-xs font-mono bg-gray-100 dark:bg-gray-900 rounded p-2 text-gray-500">USDT borrow APY: ~5% (example)</p>
              </div>
              <div className="border border-purple-200 dark:border-purple-800 rounded-xl p-5">
                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm">Stable Rate</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Fixed short-term. Protected from spikes but costs a premium. Can be rebalanced under extreme conditions. Not available on all assets.</p>
                <p className="text-xs font-mono bg-gray-100 dark:bg-gray-900 rounded p-2 text-gray-500">Same USDT Stable APY: ~7% (example)</p>
              </div>
            </div>

            {/* Interest calculation example */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Real Interest Calculation — Day, Month, Year</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You borrowed USDT $1,200 at 5% APY Variable Rate. How does it accumulate?
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Period</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Interest</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Total Owed</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: '1 day', interest: '$0.16', total: '$1,200.16', note: 'variableDebtUSDT balance increases by this much' },
                    { period: '1 week', interest: '$1.15', total: '$1,201.15', note: 'Barely noticeable' },
                    { period: '1 month', interest: '$4.93', total: '$1,204.93', note: 'A coffee per week' },
                    { period: '6 months', interest: '$29.59', total: '$1,229.59', note: 'ETH price volatility is a bigger risk' },
                    { period: '1 year', interest: '$60.00', total: '$1,260.00', note: '5% simple interest (compound = slightly higher)' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium">{r.period}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-red-600 dark:text-red-400 font-mono">{r.interest}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono font-bold">{r.total}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 text-xs">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-r-lg my-4">
              <p className="text-sm text-blue-800 dark:text-blue-300"><strong>Note:</strong> Rates change every block with utilization. The table assumes a fixed 5% APY. Always check the current APY on the Aave dashboard before borrowing.</p>
            </div>

            {/* Repay flow */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Repayment Flow — What Happens On-Chain When You Pay Back</h3>
            <div className="space-y-3 my-4">
              {[
                { n: '1', title: 'Call repay(USDT, amount)', desc: 'Approve USDT then call repay(). Full or partial repayment both work.', color: 'bg-blue-50 dark:bg-blue-900/20' },
                { n: '2', title: 'USDT moves to Pool', desc: 'transferFrom pulls USDT from your wallet → Aave Pool. This becomes interest + principal for depositors.', color: 'bg-orange-50 dark:bg-orange-900/20' },
                { n: '3', title: 'variableDebtUSDT burned', desc: 'Debt tokens are burned equal to repaid amount. Full repayment → balance = 0 → debt is completely erased.', color: 'bg-red-50 dark:bg-red-900/20' },
                { n: '4', title: 'Collateral unlocked', desc: 'With zero debt, aETH becomes withdrawable. Call withdraw() to get your ETH back.', color: 'bg-green-50 dark:bg-green-900/20' },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-4 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-400 w-4 flex-shrink-0 mt-0.5">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{s.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Health Factor tracker */}
            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Monitoring Your Position — Health Factor in Real Time</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              While you have an open borrow, your Health Factor changes constantly with collateral price and interest accumulation. Ignoring it means risking liquidation.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">ETH $2,000 collateral / USDT $1,200 borrowed — as ETH price drops</p>
              <div className="space-y-3">
                {[
                  { price: 'ETH $2,000 (open)', hf: '1.33', status: '✅ Safe', color: 'text-green-600 dark:text-green-400', bar: 'bg-green-400', width: 'w-4/5' },
                  { price: 'ETH $1,700', hf: '1.13', status: '⚠️ Caution', color: 'text-yellow-600 dark:text-yellow-400', bar: 'bg-yellow-400', width: 'w-3/5' },
                  { price: 'ETH $1,500', hf: '1.00', status: '🔴 Boundary', color: 'text-orange-600 dark:text-orange-400', bar: 'bg-orange-400', width: 'w-2/5' },
                  { price: 'ETH $1,400', hf: '0.93', status: '💀 Liquidated', color: 'text-red-600 dark:text-red-400', bar: 'bg-red-500', width: 'w-1/4' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-36 text-xs text-gray-600 dark:text-gray-400 flex-shrink-0">{r.price}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className={`${r.width} ${r.bar} h-3 rounded-full`} />
                    </div>
                    <span className={`w-10 text-xs font-bold flex-shrink-0 ${r.color}`}>{r.hf}</span>
                    <span className={`text-xs flex-shrink-0 ${r.color}`}>{r.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">* ETH Liquidation Threshold 85%. HF = ($1,500 × 0.85) ÷ $1,200 = 1.0625 → entering danger zone.</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-xl p-5 my-6">
              <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 text-sm">💡 Practical Ways to Avoid Liquidation</p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>Keep conservative LTV:</strong> If you can borrow $1,600, only borrow $800. More buffer = more safety margin.</p></div>
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>Add more collateral:</strong> If ETH drops, supply more ETH to push HF back up.</p></div>
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>Partial repayment:</strong> Repaying some of the debt quickly restores your HF.</p></div>
                <div className="flex items-start gap-2"><span className="text-yellow-600 flex-shrink-0">→</span><p><strong>Set alerts:</strong> Tools like DeFi Saver or Instadapp can notify you when HF drops below a threshold — giving you time to act before liquidation hits.</p></div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Liquidation</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When a position's <strong>Health Factor drops below 1.0</strong> — from collateral price drops or interest accumulation — anyone can liquidate it and earn a bonus.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6 my-6">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-3">Liquidation Scenario</p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>① User: ETH $1,000 collateral, USDT $800 borrowed (Health Factor 1.25)</p>
                <p>② ETH price drops → collateral value $940 → Health Factor falls below 1.0</p>
                <p>③ Liquidator arrives: repays $400 USDT on user's behalf</p>
                <p>④ Liquidator receives $420 worth of ETH (5% liquidation bonus included)</p>
                <p className="text-red-700 dark:text-red-300 font-medium">⑤ User: USDT debt halved, some ETH collateral lost</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Health Factor Formula</p>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                HF = (Collateral Value × Liquidation Threshold) ÷ Total Debt
              </code>
              <p className="text-xs text-gray-500 mt-2">HF {'>'} 1.0 = safe · HF = 1.0 = liquidation boundary · HF {'<'} 1.0 = liquidatable</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · Flash Loans</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The most revolutionary feature Aave introduced to DeFi. <strong>Borrow any amount with zero collateral and repay within the same transaction.</strong> If repayment fails, the entire transaction reverts — as if the loan never happened.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                Made possible by blockchain <strong>atomicity</strong>: a transaction either fully succeeds or fully reverts. An unpaid flash loan ceases to exist.
              </p>
            </div>

            <div className="my-6">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Flash Loan API Structure</p>
              <div className="bg-gray-900 rounded-xl p-5 text-xs font-mono space-y-1 overflow-x-auto">
                <p className="text-gray-500">// 1. Request flash loan from Aave Pool</p>
                <p><span className="text-blue-400">pool</span>.<span className="text-yellow-300">flashLoan</span>{'('}</p>
                <p className="pl-4"><span className="text-green-400">receiverAddress</span>,  <span className="text-gray-500">// contract to receive funds</span></p>
                <p className="pl-4"><span className="text-green-400">assets</span>,            <span className="text-gray-500">// array of token addresses</span></p>
                <p className="pl-4"><span className="text-green-400">amounts</span>,           <span className="text-gray-500">// array of amounts</span></p>
                <p className="pl-4"><span className="text-green-400">modes</span>,             <span className="text-gray-500">// 0 = flash loan (must repay)</span></p>
                <p className="pl-4"><span className="text-green-400">params</span>,            <span className="text-gray-500">// custom callback data</span></p>
                <p className="pl-4"><span className="text-green-400">referralCode</span></p>
                <p>{')'}</p>
                <p className="mt-3 text-gray-500">// 2. Aave calls executeOperation() on your contract</p>
                <p><span className="text-blue-400">function</span> <span className="text-yellow-300">executeOperation</span>{'('}</p>
                <p className="pl-4"><span className="text-green-400">assets, amounts, premiums, initiator, params</span></p>
                <p>{')'} <span className="text-blue-400">external</span> {'{'}</p>
                <p className="pl-4 text-gray-500">// Execute your logic: arb, liquidation, collateral swap...</p>
                <p className="pl-4 text-gray-500">// Then approve principal + fee (0.05%) for repayment</p>
                <p className="pl-4"><span className="text-purple-400">IERC20</span>(asset).<span className="text-yellow-300">approve</span>(pool, amount + premium);</p>
                <p className="pl-4"><span className="text-blue-400">return</span> <span className="text-orange-400">true</span>;</p>
                <p>{'}'}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 my-6">
              {[
                { title: 'Arbitrage', desc: 'Capture DEX price gaps with zero starting capital', icon: '📈' },
                { title: 'Liquidation', desc: 'Execute liquidations without pre-funding', icon: '⚡' },
                { title: 'Collateral Swap', desc: 'Repay loan, switch collateral, re-borrow in one tx', icon: '🔄' },
              ].map((u, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl mb-2">{u.icon}</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{u.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{u.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · Aave v3 Feature Set</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Released in 2022, v3 expanded far beyond basic supply and borrow.</p>

            <div className="space-y-5 my-6">
              {[
                {
                  tag: 'eMode',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'Efficiency Mode',
                  desc: 'For correlated asset pairs (e.g. USDC↔USDT, ETH↔stETH), eMode raises LTV to up to 97%. Deposit $100, borrow $97. Dramatically improves capital efficiency for stablecoin strategies and liquid staking token (LST) leverage.',
                },
                {
                  tag: 'Isolation Mode',
                  tagColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  title: 'Isolation Mode',
                  desc: 'Newly listed or higher-risk assets enter Isolation Mode. Using them as collateral restricts borrowable assets to stablecoins only and enforces a debt ceiling. Prevents any single asset\'s collapse from cascading through the entire protocol.',
                },
                {
                  tag: 'Siloed Borrowing',
                  tagColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  title: 'Siloed Borrowing',
                  desc: 'Borrowing a siloed asset prevents you from borrowing any other asset in the same position. Contains oracle-manipulation risk to that position only — a surgical defense mechanism.',
                },
                {
                  tag: 'Portal',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: 'Portal (Cross-Chain Liquidity)',
                  desc: 'Moves aTokens across networks. Example: bridge Ethereum aUSDC to Polygon aUSDC. Integrates with cross-chain protocols like Connext and Hop to extend Aave\'s liquidity across the multichain ecosystem.',
                },
                {
                  tag: 'Supply / Borrow Cap',
                  tagColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
                  title: 'Supply & Borrow Caps',
                  desc: 'Governance can set per-asset maximums for how much can be supplied or borrowed. Prevents dangerous concentration in a single asset and limits protocol exposure during market stress.',
                },
                {
                  tag: 'Risk Oracle',
                  tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
                  title: 'Price Oracle (Chainlink)',
                  desc: 'Aave uses Chainlink price feeds as its primary oracle. All collateral valuations, Health Factor calculations, and liquidation triggers depend on this data. Oracle manipulation remains one of the primary attack vectors in DeFi.',
                },
              ].map((f, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${f.tagColor}`}>{f.tag}</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{f.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · GHO — Aave's Native Stablecoin</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In 2023, Aave launched <strong>GHO</strong>, a USD-pegged decentralized stablecoin deeply integrated with the Aave protocol. Similar in structure to MakerDAO's DAI but with tighter protocol coupling.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">GHO Issuance</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Deposit collateral on Aave → mint GHO (as a borrow)</p>
                  <p>• GHO interest rate set by AAVE governance</p>
                  <p>• stkAAVE holders receive discounted GHO borrow rate</p>
                  <p>• Repay GHO → burned, collateral returned</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">GHO vs Other Stablecoins</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• USDT/USDC: centralized, fiat-backed</p>
                  <p>• DAI: decentralized, over-collateralized (similar)</p>
                  <p>• GHO: decentralized, revenue accrues to Aave DAO</p>
                  <p>• GHO interest → Aave DAO treasury</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · AAVE Token & Safety Module</h2>

            <div className="space-y-5 my-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">AAVE Token Roles</p>
                <div className="grid md:grid-cols-3 gap-3 mt-3">
                  {[
                    { role: 'Governance', desc: 'AAVE holders vote on protocol parameters: LTV, liquidation bonuses, new asset listings, etc.' },
                    { role: 'Staking', desc: 'Stake AAVE in Safety Module → receive stkAAVE + staking rewards' },
                    { role: 'GHO Discount', desc: 'stkAAVE balance proportionally reduces GHO borrow rate' },
                  ].map((r, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">{r.role}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5">
                <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Safety Module — Protocol Insurance</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  If Aave suffers an unexpected shortfall event — e.g., oracle malfunction causes delayed liquidations and the pool goes insolvent — up to <strong>30% of staked AAVE can be slashed</strong> to cover losses.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-3 text-sm font-mono text-gray-600 dark:text-gray-400">
                  Stake AAVE → receive stkAAVE<br />
                  Shortfall: stkAAVE up to 30% burned → new AAVE minted to cover loss<br />
                  Normal times: staking rewards (risk premium)
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">11 · Network Deployments</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {[
                { name: 'Ethereum', tvl: '$9B+', main: true },
                { name: 'Arbitrum', tvl: '$3B+', main: true },
                { name: 'Polygon', tvl: '$300M+', main: false },
                { name: 'Optimism', tvl: '$250M+', main: false },
                { name: 'Avalanche', tvl: '$200M+', main: false },
                { name: 'Base', tvl: '$400M+', main: false },
                { name: 'Gnosis', tvl: '$50M+', main: false },
                { name: 'BNB Chain', tvl: '$100M+', main: false },
                { name: 'Scroll, zkSync, etc.', tvl: 'Expanding', main: false },
              ].map((n, i) => (
                <div key={i} className={`rounded-xl p-4 text-center border ${n.main ? 'border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'}`}>
                  <p className={`font-semibold text-sm ${n.main ? 'text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'}`}>{n.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.tvl}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">12 · Liquidation Bots — The Automated Engine Monitoring Aave 24/7</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave doesn't rely on humans to trigger liquidations. <strong>Bots do it.</strong> Hundreds of liquidation bots worldwide monitor Aave's contract state around the clock. The moment a position's Health Factor drops below 1.0, they submit a liquidation transaction. This is how Aave's risk management actually works in practice.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  n: '①',
                  title: 'Real-Time On-Chain Monitoring',
                  desc: 'Bots connect to an Ethereum node (or RPC providers like Alchemy/Infura) and poll the Aave Pool contract. A single getUserAccountData(address) call returns Health Factor, collateral value, and debt balance.',
                  code: `// Monitor a position
const data = await aavePool.getUserAccountData(userAddress);
// healthFactor < 1e18 means liquidatable
if (data.healthFactor.lt(ethers.utils.parseUnits('1', 18))) {
  triggerLiquidation(userAddress);
}`,
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                },
                {
                  n: '②',
                  title: 'Profitability Check',
                  desc: 'Not every liquidatable position is worth executing. The bot calculates net profit: liquidation bonus (5–15%) minus gas cost. If gas exceeds the bonus, it skips. The more bots compete, the fiercer the gas auction.',
                  code: `// Profitability check
const bonus = collateralToSeize - debtToRepay;
const gasCost = estimatedGas * gasPrice;
if (bonus > gasCost * PROFIT_MARGIN) {
  executeLiquidation();
}`,
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20',
                },
                {
                  n: '③',
                  title: 'Flash Loan Solves the Capital Problem',
                  desc: 'To liquidate, the bot must repay part of the victim\'s debt — potentially millions of dollars. It borrows that amount via Aave flash loan (zero collateral), sells the seized collateral to repay the loan in the same transaction. Any position size becomes liquidatable with zero starting capital.',
                  code: `// Flash loan liquidation (single transaction)
pool.flashLoan(
  liquidatorContract,
  [debtAsset],          // token to borrow (e.g. USDT)
  [debtAmount],         // debt amount
  [0],                  // 0 = flash loan mode
  calldata,             // target user address, etc.
  0
);
// Inside executeOperation():
// 1. Liquidate position → seize collateral (ETH)
// 2. Swap ETH → USDT on DEX
// 3. Repay Aave USDT + fee
// 4. Keep remaining profit`,
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
                },
                {
                  n: '④',
                  title: 'Flashbots to Beat Competing Bots',
                  desc: 'Multiple bots see the same opportunity simultaneously. Submitting to the public mempool invites Priority Gas Auction — other bots outbid on gas. Advanced bots use Flashbots private bundles to land directly in a block without gas competition.',
                  code: `// Flashbots bundle submission (avoids competition)
const bundle = [
  { tx: approvalTx },        // USDT approve
  { tx: liquidationTx },     // execute liquidation
];
await flashbotsProvider.sendBundle(bundle, targetBlock);`,
                  color: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-mono font-bold text-gray-500 flex-shrink-0 text-lg">{s.n}</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{s.title}</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{s.desc}</p>
                  <pre className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre leading-relaxed">{s.code}</pre>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Real Liquidation Scenario — By the Numbers</p>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Initial State', text: 'User: ETH $10,000 collateral, USDT $7,500 borrowed / HF = 1.13', color: 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' },
                  { label: 'ETH -20%', text: 'ETH value drops to $8,000 / HF = 0.91 → liquidatable', color: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300' },
                  { label: 'Bot Detects', text: 'getUserAccountData() returns HF < 1.0 (within seconds)', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300' },
                  { label: 'Flash Loan', text: 'Borrow USDT $3,750 from Aave (max 50% liquidation cap)', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300' },
                  { label: 'Liquidate', text: 'Repay USDT $3,750 → seize ETH $3,937.5 (5% bonus)', color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300' },
                  { label: 'Repay & Profit', text: 'Swap ETH → USDT, repay flash loan / Bot net: ~$187.5 minus gas', color: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300' },
                ].map((r, i) => (
                  <div key={i} className={`flex items-start gap-3 rounded-lg p-3 ${r.color}`}>
                    <span className="text-xs font-bold flex-shrink-0 w-24">{r.label}</span>
                    <span className="text-xs">{r.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5 my-6">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Without Liquidation Bots, Aave Cannot Function</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Liquidation bots aren't just profit-seekers — they <strong>are the risk management infrastructure</strong>. Without them, bad debt accumulates and the protocol becomes insolvent. The liquidation bonus exists precisely as an incentive for this role. Decentralized protocols maintain system integrity through economic incentives, not centralized operations.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">13 · Risk Structure</h2>
            <div className="space-y-3 my-6">
              {[
                { risk: 'Smart Contract Vulnerability', desc: 'Code bugs enabling exploits. Aave undergoes multiple audits but cannot eliminate this entirely.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: 'Oracle Manipulation', desc: 'Manipulated Chainlink prices can misfire liquidations or allow under-collateralized borrowing. The primary attack vector in flash loan attacks.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: 'Liquidity Crisis', desc: 'Mass simultaneous withdrawals can drain a pool. When utilization approaches 100%, withdrawals become impossible.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Governance Risk', desc: 'Concentrated AAVE holders could pass malicious governance proposals. The paradox of decentralization.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Collateral Price Collapse', desc: 'If collateral falls faster than liquidators can act, the protocol can go insolvent. Safety Module is the last line of defense.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Regulatory Risk', desc: 'Regulators could block frontend access. The underlying contracts themselves cannot be censored.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <span className={`text-xs font-bold w-10 flex-shrink-0 ${r.color}`}>{r.level}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.risk}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 my-8">
              <p className="font-bold text-gray-900 dark:text-white text-lg mb-4">Aave in One Sentence</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Aave is a protocol where <strong>smart contracts act as the bank</strong>. No identity check required — just post collateral and a loan executes. Interest compounds automatically. Risk thresholds liquidate automatically. No human intervenes at any step. That same automation is both the value proposition and the source of risk.
              </p>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
