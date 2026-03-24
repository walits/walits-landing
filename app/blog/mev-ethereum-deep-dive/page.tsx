'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MevEthereumDeepDivePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'DEEP DIVE · 이더리움',
      title: 'MEV 완전 해부 그리고 2026년 3월12일 $50M 해킹 사례',
      date: '2026년 3월 23일',
      readTime: '25분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'DEEP DIVE · ETHEREUM',
      title: 'MEV Dissected: The Complete Guide + $50M Aave Hack Case Study (March 2026)',
      date: 'March 23, 2026',
      readTime: '25 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Walits Logo" width={32} height={32} className="rounded" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Walits</span>
            </Link>
            <div className="flex items-center gap-2">
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded ${language === 'ko' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>한</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>EN</button>
            </div>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-sm font-medium mb-4">
            {copy.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <span>{copy.date}</span>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </div>

        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/mev.webp"
            alt={language === 'ko' ? 'MEV 이더리움 플래시론 플래시봇 청산 차익거래' : 'MEV Ethereum Flash Loan Flashbots Liquidation Arbitrage'}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>


              {/* TOC */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">목차</p>
                <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {[
                    'MEV란 무엇인가 — 정의와 동작 원리',
                    '플래시론 — 담보 없는 무한 자본',
                    '차익거래 — 가격 불균형의 포착',
                    '청산 — DeFi 건전성의 이면',
                    'Sandwich Attack & Front-running',
                    'Flashbots — Dark Forest 탈출구',
                    'MEV 생태계 플레이어 구조',
                    '네 가지의 연결 — 전체 엔진',
                    '개인이 참여하는 방법',
                    'MEV는 나쁜 것인가',
                    '실전 사례: $50M Aave 스왑 사건 (2026.03)',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-gray-400 w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── S1 MEV 정의 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · MEV란 무엇인가</h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>MEV(Maximal Extractable Value)</strong>는 블록 생성자(validator)가 블록에 포함할 트랜잭션을 선택하고 순서를 재배열·삽입·삭제함으로써 얻는 <em>추가 가치</em>다. 원래 Miner Extractable Value였으나 PoS 전환 후 현재 이름으로 재정의됐다.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>핵심:</strong> 블록체인은 트랜잭션을 <em>먼저 온 순서</em>대로 처리하지 않는다. 블록 생성자가 순서를 결정한다. 이 권한이 MEV의 근원이다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {[
                  { label: '누적 MEV 추출량', value: '$1.5B+', sub: 'Flashbots 집계 (2020~)' },
                  { label: '일일 평균 MEV', value: '$1M~', sub: '변동성 급등 시 수배' },
                  { label: 'MEV-Boost 도입률', value: '~90%', sub: '전체 Ethereum validator' },
                ].map((s, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                    <p className="text-xs font-mono text-gray-400 mb-1">{s.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Mempool flow */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Mempool — MEV의 무대</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">트랜잭션이 블록에 포함되기까지 공개 대기열(mempool)을 거친다. 이 대기열은 누구나 볼 수 있고, 봇들은 실시간으로 스캔하며 수익 기회를 찾는다.</p>
              <div className="overflow-x-auto my-6">
                <div className="flex items-stretch gap-0 min-w-max">
                  {[
                    { num: 'STEP 1', name: 'Tx 전송', desc: '서명 후 broadcast' },
                    null,
                    { num: 'STEP 2', name: 'Mempool 대기', desc: '공개 대기 상태', highlight: true },
                    null,
                    { num: 'STEP 3', name: 'Searcher 탐지', desc: '봇이 기회 포착' },
                    null,
                    { num: 'STEP 4', name: 'Bundle 제출', desc: '순서 조작 포함' },
                    null,
                    { num: 'STEP 5', name: '블록 포함', desc: 'MEV 실현' },
                  ].map((step, i) =>
                    step === null ? (
                      <div key={i} className="flex items-center px-2 text-gray-400 text-sm">→</div>
                    ) : (
                      <div key={i} className={`flex-1 min-w-[100px] text-center p-3 rounded-lg border text-sm ${
                        (step as {highlight?: boolean}).highlight
                          ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                      }`}>
                        <p className="font-mono text-xs text-gray-400 mb-1">{step.num}</p>
                        <p className={`font-semibold text-sm ${(step as {highlight?: boolean}).highlight ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>{step.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{step.desc}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Mempool 종류 */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Mempool의 종류 — 공개만 있는 게 아니다</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                "mempool"이라고 하면 모두가 같은 대기열을 보는 것 같지만, 실제로는 Tx가 어떤 경로로 전달되느냐에 따라 누가 볼 수 있는지가 달라진다.
              </p>

              <div className="space-y-3 my-6">
                {/* 공개 mempool */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">완전 공개</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">공개 mempool (Public mempool)</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">아무 설정 없이 MetaMask로 Tx를 보내면 여기 들어간다. 전 세계 누구나 실시간으로 볼 수 있고, Searcher 봇들이 24시간 스캔한다. Sandwich Attack의 피해자가 되는 이유가 이것이다.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">접근: eth_subscribe("newPendingTransactions")</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">유료 고속: bloXroute, Blocknative</span>
                    </div>
                  </div>
                </div>

                {/* Private RPC */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">완전 비공개</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Private mempool (Private RPC)</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Flashbots Protect RPC, MEV Blocker 같은 서비스를 통해 Tx를 보내면 공개 mempool을 완전히 우회한다. Tx가 특정 relay·builder에게만 전달되어 다른 Searcher에게 전혀 노출되지 않는다. Sandwich Attack 방어에 가장 효과적이다.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">Flashbots Protect: rpc.flashbots.net</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">MEV Blocker: rpc.mevblocker.io</span>
                    </div>
                  </div>
                </div>

                {/* MEV-Share */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">부분 공개</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">MEV-Share orderflow</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">완전 공개도, 완전 비공개도 아닌 중간 형태. Tx 자체는 공개 mempool에 들어가지 않지만, Flashbots Matchmaker가 등록된 Searcher에게 <strong>"힌트"만</strong> 공유한다. 예: "USDC↔ETH 스왑이 있다" 정도만 알려주고 금액·주소는 비공개. Searcher가 MEV를 추출하면 수익 일부를 원래 사용자에게 돌려줘야 한다.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">제공: Flashbots Matchmaker API</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">사용자 수익 환원 구조</span>
                    </div>
                  </div>
                </div>

                {/* Builder private orderflow */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">계약 기반</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Builder private orderflow</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300">대형 builder(Flashbots, BloXroute 등)가 특정 dApp·지갑 서비스와 직접 계약을 맺어 Tx를 공개 mempool 없이 바로 받는 경우. 해당 builder만 볼 수 있으며 다른 builder나 Searcher에게는 보이지 않는다. Tx 볼륨이 큰 서비스일수록 이 채널로 수익을 높이는 구조다.</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">유형</th>
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">누가 보나</th>
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">Sandwich 위험</th>
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">예시</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: '공개 mempool', who: '누구나', risk: '높음', riskColor: 'text-red-600 dark:text-red-400', ex: '일반 MetaMask Tx' },
                      { type: 'Private RPC', who: '특정 relay만', risk: '없음', riskColor: 'text-green-600 dark:text-green-400', ex: 'Flashbots Protect, MEV Blocker' },
                      { type: 'MEV-Share', who: '등록된 Searcher (힌트만)', risk: '낮음', riskColor: 'text-amber-600 dark:text-amber-400', ex: 'Flashbots MEV-Share' },
                      { type: 'Builder private', who: '특정 builder만', risk: '없음', riskColor: 'text-green-600 dark:text-green-400', ex: 'dApp·지갑과 직접 계약' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-gray-900 dark:text-white">{row.type}</td>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{row.who}</td>
                        <td className={`border border-gray-200 dark:border-gray-700 p-3 font-semibold ${row.riskColor}`}>{row.risk}</td>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs font-mono">{row.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 공개/비공개 mempool 오해 해소 박스 */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6 my-6 space-y-5">
                <p className="font-bold text-amber-800 dark:text-amber-300 text-base">❓ 비공개 mempool의 Tx는 블록이 되기 어려운 거 아닌가?</p>

                {/* PoW 복습 */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">PoW 시절 (이더리움 2022년 9월 이전)</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    PoW에서는 <strong>채굴자(Miner)가 블록 생성 권한을 독점</strong>했다. 채굴자는 공개 mempool에서 Tx를 골라 순서를 직접 정하고 블록을 만들었다. 당연히 공개 mempool에 없는 Tx는 해당 채굴자가 처리해 주기 전까지 블록에 들어갈 수 없었다. 이 구조에서는 "공개 mempool = 블록 대기열"이라는 공식이 거의 성립했다.
                  </p>
                </div>

                {/* PoS + PBS 전환 */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">PoS 전환 후 — 역할이 분리됐다 (PBS)</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-3">
                    2022년 9월 이더리움이 PoS(The Merge)로 전환하면서, PoW처럼 한 사람이 채굴하고 블록을 만드는 구조가 사라졌다. 대신 역할이 두 개로 쪼개졌다. 이것이 <strong>PBS(Proposer-Builder Separation)</strong>다.
                  </p>
                  <div className="bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 rounded-lg overflow-hidden text-sm">
                    <div className="grid grid-cols-2 divide-x divide-amber-200 dark:divide-amber-800">
                      <div className="p-4">
                        <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">Builder (블록 제조자)</p>
                        <p className="text-amber-900 dark:text-amber-200 text-xs leading-relaxed">mempool에서 Tx를 수집하고, Searcher 번들도 받아서 <strong>가장 수익이 높은 순서로</strong> 블록 후보를 조립한다. 전문 소프트웨어 회사다.</p>
                      </div>
                      <div className="p-4">
                        <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">Proposer (검증자 / Validator)</p>
                        <p className="text-amber-900 dark:text-amber-200 text-xs leading-relaxed">Builder들이 제출한 블록 후보 중 <strong>입찰가가 가장 높은 것을 선택</strong>해 서명한다. Tx 순서에는 개입하지 않는다. ETH를 32개 이상 스테이킹한 노드다.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 핵심 답변 */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">그래서 — 공개/비공개는 '가시성' 문제, 블록 포함은 'Builder' 문제</p>
                  <div className="space-y-2 text-sm text-amber-900 dark:text-amber-200">
                    <p>• <strong>공개 mempool Tx</strong> — 전 세계 노드에 브로드캐스팅. Builder가 수거해 블록 후보에 넣는다. Searcher도 같은 Tx를 보고 앞뒤로 끼어든다.</p>
                    <p>• <strong>Private Tx (Private RPC / Builder direct)</strong> — 공개 브로드캐스팅 없이 Builder에게 직접 전달된다. Builder의 블록 후보에 곧바로 올라간다. 차이는 Searcher가 못 본다는 것뿐이다.</p>
                  </div>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mt-3">
                    두 경로 모두 최종적으로 <strong>Builder가 블록에 포함시키고, Proposer(검증자)가 그 블록을 선택해 확정</strong>한다. "공개 mempool에 없으면 블록이 못 된다"는 PoW 시절의 상식이지, PoS에서는 통하지 않는다.
                  </p>
                </div>

                {/* 역설: 오히려 private이 유리 */}
                <div className="bg-amber-100 dark:bg-amber-900/40 rounded-lg p-4">
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">오히려 Private Tx가 더 유리할 수 있다</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    Builder 입장에서 private orderflow Tx는 <strong>자신만 볼 수 있는 독점 수익 기회</strong>다. 경쟁 Builder가 같은 Tx로 더 높은 블록을 만들 수 없으므로, 해당 Builder는 이 Tx를 포함한 블록에 더 높은 입찰가를 써낼 유인이 생긴다. 결과적으로 Flashbots, BloXroute 같은 주요 Builder들이 대형 dApp·지갑 서비스와 private orderflow 계약을 맺기 위해 경쟁한다. 비공개라서 불리한 게 아니라, <strong>블록 포함 우선순위가 오히려 높아진다</strong>.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S2 플래시론 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · 플래시론 — 담보 없는 무한 자본</h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>플래시론(Flash Loan)</strong>은 담보 없이 빌리고, <em>같은 트랜잭션 안에서</em> 전액 상환하는 대출이다. Aave가 대중화시킨 개념으로, 상환 실패 시 트랜잭션 전체가 revert된다. 대출자 입장에서 리스크가 없는 이유는 블록체인의 <strong>원자성(atomicity)</strong> 덕분이다.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  하나의 트랜잭션은 전부 성공하거나 전부 실패한다. 상환 못 하면 빌린 것도 없었던 일이 된다. 이것이 담보 없이 수백만 달러를 빌릴 수 있는 이유다.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">플래시론 + 차익거래: 자본 없는 10만 달러 수익</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3 my-4">
                {[
                  { n: '1', text: 'Aave에서 10,000 ETH 플래시론 실행 (담보 없음)' },
                  { n: '2', text: 'DEX A에서 10,000 ETH → 20,100,000 USDC 매도 (1 ETH = 2,010 USDC, 비싼 곳)' },
                  { n: '3', text: 'DEX B에서 20,000,000 USDC → 10,000 ETH 매수 (1 ETH = 2,000 USDC, 싼 곳)' },
                  { n: '4', text: 'Aave에 10,000 ETH + 수수료(0.09%) 상환' },
                  { n: '★', text: '순이익: 약 90,000 USDC — 자본 투입 0, 하나의 트랜잭션', profit: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${step.profit ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    <span className="font-mono w-4 flex-shrink-0 text-gray-400">{step.n}</span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">플래시론 어택</h3>
              <p className="text-gray-700 dark:text-gray-300">
                같은 원리로 프로토콜 공격도 가능하다. 2020~2021년에 수십 건의 플래시론 어택이 발생했다. 전형적인 패턴은 ①플래시론으로 대량 자본 확보 → ②가격 오라클 조작(대량 매수로 가격 급등) → ③왜곡된 상태에서 취약 프로토콜 exploit → ④이익 실현 후 상환.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                {[
                  { name: 'bZx 해킹', amount: '$1M', note: '2020' },
                  { name: 'Harvest Finance', amount: '$34M', note: '2020' },
                  { name: 'Cream Finance', amount: '$130M', note: '2021' },
                ].map((h, i) => (
                  <div key={i} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                    <p className="font-bold text-red-800 dark:text-red-300 text-lg">{h.amount}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{h.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{h.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">플래시론 자체가 악의적인 게 아니라, <strong>가격 오라클이 취약한 프로토콜</strong>이 문제였다. 단일 DEX 가격을 오라클로 쓰면 플래시론으로 조작이 가능하다.</p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S3 차익거래 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · 차익거래 — 가격 불균형의 포착</h2>
              <p className="text-gray-700 dark:text-gray-300">
                DEX들은 각자 독립적인 유동성 풀을 가진다. 누군가 대형 스왑을 실행하면 해당 풀 가격만 움직이고 다른 DEX는 아직 반영되지 않는다. 이 가격 괴리가 생기는 순간이 차익거래(Arbitrage) 봇의 레이스 시작이다.
              </p>

              <div className="space-y-6 my-8">
                {/* Cross-DEX */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">DEX 간 차익거래 (Cross-DEX Arbitrage)</p>
                  </div>
                  <div className="p-5">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                        <p className="text-xs text-gray-500 mb-1">Uniswap v3</p>
                        <p className="text-xl font-bold text-green-800 dark:text-green-300">1 ETH = 2,000 USDC</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">← 여기서 매수</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                        <p className="text-xs text-gray-500 mb-1">SushiSwap</p>
                        <p className="text-xl font-bold text-blue-800 dark:text-blue-300">1 ETH = 2,015 USDC</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">여기서 매도 →</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">차익: 15 USDC/ETH − gas비. 단순하지만 실제로는 매수·매도 자체가 가격을 움직이므로 최적 거래 규모 계산이 필수다.</p>
                  </div>
                </div>

                {/* Triangular */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">삼각 차익거래 (Triangular Arbitrage)</p>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {['USDC', '→ ETH', '→ WBTC', '→ USDC'].map((s, i) => (
                        <span key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          i === 0 || i === 3 ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}>{s}</span>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">각 스왑 환율의 곱 &gt; 1 이면 수익</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">세 자산 간 순환 경로에서 가격 불균형을 찾는다. Uniswap → Curve → Balancer처럼 서로 다른 DEX를 거칠 수 있다. 경로가 길수록 gas 비용도 오르므로 수백 개 경로를 실시간 계산해 수익성을 확인한다.</p>
                  </div>
                </div>

                {/* Oracle */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">오라클 차익거래 (CEX-DEX Arbitrage)</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Binance에서 ETH 가격이 급등했을 때, 온체인 DEX 가격은 아직 반영되지 않은 짧은 순간이 존재한다. 이 봇들은 CEX API와 온체인 mempool을 동시에 모니터링하며 가격 괴리가 생기는 즉시 반응한다. 가장 빠른 반응 속도가 경쟁력이다.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                차익거래는 <strong>가격 효율화</strong> 기능을 수행한다. 아비트라저가 없으면 DEX마다 가격이 제각각이 되어 사용자가 어느 DEX를 써야 유리한지 일일이 비교해야 한다. 다만 봇들이 경쟁하는 과정의 gas 소모가 결국 일반 사용자 gas fee 인상으로 전가된다.
              </p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S4 청산 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · 청산 — DeFi 건전성의 이면</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Aave, Compound, MakerDAO 같은 DeFi 대출 프로토콜은 <strong>과담보(over-collateralized)</strong> 구조다. 100 USDC를 빌리려면 150 ETH어치 담보를 맡겨야 한다 (1 USDC = 1 ETH라고 가정). ETH 가격이 떨어져 담보가치가 임계치(예: 120%) 아래로 내려가면 해당 포지션이 <em>청산 가능</em> 상태가 된다. 이 순간 누구든 청산하고 <strong>청산 보너스(5~15%)</strong>를 받을 수 있다.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">청산 MEV 플로우</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3 my-4">
                {[
                  { n: '1', text: 'ETH 가격 급락 → A의 포지션 담보비율 110%로 하락 (임계치 120% 이하)' },
                  { n: '2', text: '청산 봇들이 동시에 탐지 → gas war 또는 Flashbots bundle 경쟁' },
                  { n: '3', text: '봇 B가 1,000 USDC를 A 대신 상환' },
                  { n: '4', text: '봇 B는 1,000 USDC 어치 ETH + 50 USDC(5% 보너스) 획득' },
                  { n: '★', text: '봇 B 순이익 = 50 USDC − gas비', profit: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${step.profit ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    <span className="font-mono w-4 flex-shrink-0 text-gray-400">{step.n}</span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">플래시론 + 청산: 자본 없는 청산 MEV</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3 my-4">
                {[
                  { n: '1', text: 'Aave에서 1,000 USDC 플래시론 (담보 없음)' },
                  { n: '2', text: 'A의 포지션 청산 → 1,000 USDC 상환, ETH + 보너스 수취' },
                  { n: '3', text: '받은 ETH를 DEX에서 즉시 USDC로 스왑' },
                  { n: '4', text: 'Aave에 1,000 USDC + 수수료 상환' },
                  { n: '★', text: '잔여 USDC = 순이익 — 자본 투입 0, 하나의 트랜잭션', profit: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${step.profit ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    <span className="font-mono w-4 flex-shrink-0 text-gray-400">{step.n}</span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 my-6">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">청산은 나쁜 MEV인가?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Sandwich와 달리 청산은 <strong>프로토콜 건전성을 유지하는 기능</strong>이다. 청산이 없으면 부실 포지션이 쌓여 대출 프로토콜이 파산한다. 다만 청산 보너스가 지나치게 크면 사용자에게 불필요한 손실이 되고, 너무 작으면 봇이 참여하지 않아 프로토콜이 위험해진다. Aave v3는 동적 청산 보너스를 도입해 이 균형 문제를 완화했다.</p>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S5 Sandwich & Front-running ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Sandwich Attack & Front-running</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">Sandwich Attack — 사용자 직접 착취</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                피해자의 대형 swap 앞뒤로 봇의 트랜잭션을 끼워 넣어 slippage를 유발하고 차익을 취한다. 가장 흔하고 직접적인 MEV 피해 유형이다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4 my-4">
                {[
                  { badge: 'FRONT', cls: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', text: '봇이 피해자 Tx 앞에 Buy ETH 삽입 → ETH 가격 상승 유도' },
                  { badge: 'VICTIM', cls: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', text: '피해자 Tx 실행: 이미 높아진 가격에 ETH 구매, slippage tolerance를 최대로 소모' },
                  { badge: 'BACK', cls: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', text: '봇이 피해자 Tx 뒤에 Sell ETH 삽입 → 높아진 가격에 매도' },
                  { badge: 'PROFIT', cls: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', text: '봇 순이익 = 매도가 − 매수가 − gas비. 피해자는 의도치 않은 슬리피지 손실 발생' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 mt-0.5 ${s.cls}`}>{s.badge}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">Front-running</h3>
              <p className="text-gray-700 dark:text-gray-300">
                누군가의 수익성 높은 트랜잭션을 mempool에서 발견하고, 동일한 트랜잭션을 더 높은 gas fee로 먼저 제출해 이익을 가로채는 방법이다. 일반화된 front-running 봇은 특정 전략 없이 수익성 있는 트랜잭션을 자동으로 복사해 실행한다.
              </p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S6 Flashbots ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Flashbots — Dark Forest 탈출구</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">탄생 배경: Dark Forest</h3>
              <p className="text-gray-700 dark:text-gray-300">
                2020~2021년 MEV가 커지면서 searcher들이 자신의 트랜잭션을 먼저 넣기 위해 <strong>Priority Gas Auction(PGA)</strong>을 벌였다. 이더리움 네트워크 전체가 느려지고 gas fee가 폭등했다. 이 혼돈 상태를 <em>"Dark Forest"</em>라고 불렀다. Flashbots는 이 문제를 해결하기 위해 2020년 말 등장한 연구 조직이자 인프라다.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">핵심 메커니즘: Private Mempool + Bundle Auction</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">기존에는 searcher가 높은 gas를 써서 공개 mempool에서 경쟁했다. Flashbots는 별도의 private 채널을 만들었다.</p>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden my-6">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">MEV-Boost 아키텍처 — 트랜잭션 흐름</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {[
                      { label: 'Searcher', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                      { arrow: '→ bundle 제출' },
                      { label: 'Builder', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
                      { arrow: '→ 최고가 낙찰' },
                      { label: 'Relay', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
                      { arrow: '→ 헤더 검증' },
                      { label: 'Validator', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
                    ].map((item, i) =>
                      'arrow' in item ? (
                        <span key={i} className="text-xs text-gray-400 font-mono">{item.arrow}</span>
                      ) : (
                        <span key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium ${item.color}`}>{item.label}</span>
                      )
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Searcher는 "이 bundle을 포함시켜주면 X ETH 줄게"라고 직접 제안한다. 공개 mempool에서의 gas 전쟁이 사라진다.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { icon: '↓', title: 'Gas spike 감소', desc: 'PGA가 없어지면서 실패 트랜잭션이 줄고 네트워크 혼잡이 완화됐다.' },
                  { icon: '0', title: '실패 비용 없음', desc: 'Bundle이 포함 안 되면 gas 소모 없음. Searcher 입장에서 리스크가 없다.' },
                  { icon: '+', title: 'Validator 수익 증가', desc: 'MEV-Boost 도입으로 validator 연 수익률이 기존 대비 약 60~100% 증가했다는 추정이 있다.' },
                  { icon: '📊', title: '투명성', desc: 'Flashbots는 추출된 MEV 데이터를 공개한다 (mev-explore.flashbots.net).' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">MEV-Share: 사용자도 수익을 받는다</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Flashbots의 최근 프로젝트인 <strong>MEV-Share</strong>는 사용자가 자신의 트랜잭션에서 발생한 MEV의 일부를 돌려받는 구조다. Searcher는 MEV-Share를 통해 들어온 트랜잭션으로 수익을 낼 수 있지만, 일부를 원래 사용자에게 kickback으로 돌려줘야 한다. "착한 MEV"를 지향하는 방향성이다.
              </p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S7 플레이어 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · MEV 생태계 플레이어 구조</h2>
              <div className="grid md:grid-cols-2 gap-4 my-8">
                {[
                  { icon: '🔍', bg: 'bg-blue-100 dark:bg-blue-900/40', title: 'Searcher', role: 'MEV 탐색 · 번들 생성', desc: '공개 mempool을 실시간 모니터링하며 차익거래·청산·Sandwich 기회를 포착하는 봇 운영자. 피해자의 Tx는 공개 mempool에서 탐지하고, 자신의 공격 bundle은 Flashbots 경로로 private하게 제출한다. 탐지에는 Ethereum 노드 직접 구독 또는 bloXroute·Blocknative 같은 유료 mempool 스트림 서비스를 활용.' },
                  { icon: '🏗', bg: 'bg-green-100 dark:bg-green-900/40', title: 'Block Builder', role: '블록 조립 · 경매 참여', desc: '여러 searcher로부터 bundle을 받아 가장 높은 수익의 블록을 구성해 relay에 경매로 제출. Flashbots, BloXroute, Rsync 등이 대표적.' },
                  { icon: '⚡', bg: 'bg-amber-100 dark:bg-amber-900/40', title: 'Relay', role: '신뢰 중개 · 검증', desc: 'Builder와 Validator 사이 신뢰 문제를 해결. 블록 유효성 검증 후 Validator에게 헤더만 노출(pay-for-reveal 구조). Flashbots Relay, Ultrasound, Agnostic 등.' },
                  { icon: '✅', bg: 'bg-purple-100 dark:bg-purple-900/40', title: 'Validator', role: '블록 제안 · 수익 수취', desc: 'MEV-Boost 사용 시 relay 경매 최고 입찰을 낙찰받아 서명 후 broadcast. Staking 수익 외에 MEV 수익이 추가된다.' },
                ].map((p, i) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${p.bg}`}>{p.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">{p.title}</h3>
                        <p className="text-xs text-gray-400 font-mono">{p.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S8 네 가지 연결 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · 네 가지의 연결 — 전체 엔진</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                플래시론, Flashbots, 청산, 차익거래는 독립적인 개념처럼 보이지만 실제 MEV 봇은 이 네 가지를 <strong>하나의 트랜잭션 안에서 조합</strong>한다.
              </p>

              <div className="space-y-4 my-6">
                {[
                  { step: '기회 탐지', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', desc: '봇이 mempool과 온체인 상태를 모니터링하다가 청산 가능 포지션이나 DEX 간 가격 괴리를 발견한다.' },
                  { step: '자본 조달', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', desc: '플래시론으로 필요한 자본을 무담보로 즉시 조달한다. 자본이 없어도 수천만 달러 규모 실행이 가능해진다.' },
                  { step: '실행', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300', desc: '청산이든 차익거래든 동일 트랜잭션 내에서 실행하고 플래시론을 상환한다. 실패 시 전체 revert — 원금 손실 없음.' },
                  { step: 'Private 제출', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', desc: 'Flashbots Bundle로 private하게 제출해 다른 봇에게 노출되지 않고, 포함 실패 시에도 gas 손실이 없다.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 mt-0.5 ${item.color}`}>{item.step}</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 my-6">
                <p className="font-mono text-xs text-gray-400 mb-4 uppercase tracking-wider">One Transaction Flow</p>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-green-400">// 1. 플래시론으로 자본 확보</p>
                  <p className="text-white">flashLoan(token: USDC, amount: 10_000_000)</p>
                  <p className="text-green-400 mt-2">// 2. 차익거래 or 청산 실행</p>
                  <p className="text-white">arbitrage(dexA, dexB) <span className="text-gray-500">// or liquidate(position)</span></p>
                  <p className="text-green-400 mt-2">// 3. 플래시론 상환</p>
                  <p className="text-white">repay(token: USDC, amount: 10_000_000 + fee)</p>
                  <p className="text-green-400 mt-2">// 4. 실패하면 전체 revert → 원금 손실 없음</p>
                  <p className="text-gray-500">// → Flashbots bundle로 private 제출</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  이 네 가지 중 하나라도 빠지면 구조가 약해진다. 플래시론 없이는 자본이 필요하고, Flashbots 없이는 경쟁 봇에게 노출되며, 청산·차익거래 없이는 수익 기회 자체가 없다. 이 조합이 "자본 없는 개인이 수천만 달러 규모의 MEV를 추출하는" 시나리오를 가능하게 한다.
                </p>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S9 참여 방법 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · 개인이 참여하는 방법</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {[
                  { level: 'ENTRY', cls: 'text-green-700 dark:text-green-400', title: 'MEV 피해 방지', desc: 'Flashbots Protect RPC(rpc.flashbots.net)로 변경하면 mempool 노출을 차단해 Sandwich Attack을 피할 수 있다.' },
                  { level: 'ENTRY', cls: 'text-green-700 dark:text-green-400', title: 'Liquid Staking', desc: 'Lido, Rocket Pool을 통해 간접적으로 MEV 수익의 일부를 수취. stETH 홀더는 validator MEV 수익이 반영된 APY를 받는다.' },
                  { level: 'INTERMEDIATE', cls: 'text-amber-700 dark:text-amber-400', title: 'Searcher Bot 개발', desc: 'ethers.js / web3.py로 mempool을 구독하고 arbitrage 기회를 탐색. Flashbots SDK로 bundle 제출 파이프라인 구축.' },
                  { level: 'INTERMEDIATE', cls: 'text-amber-700 dark:text-amber-400', title: 'MEV-Share 참여', desc: "Matchmaker API를 통해 착한 MEV 생태계 참여. 사용자와 MEV 수익을 공유하는 구조." },
                  { level: 'ADVANCED', cls: 'text-red-700 dark:text-red-400', title: 'Solo Validator', desc: '32 ETH 이상 보유 시 solo validator로 직접 참여. MEV-Boost 설정으로 relay 경매 수익 자동 수취.' },
                  { level: 'ADVANCED', cls: 'text-red-700 dark:text-red-400', title: 'Block Builder 운영', desc: '고성능 서버, 전용 네트워크, 복수 relay 연결이 필수. 자본 요구치와 진입장벽이 매우 높다.' },
                ].map((c, i) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <p className={`font-mono text-xs font-semibold tracking-wide mb-2 ${c.cls}`}>{c.level}</p>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{c.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S10 MEV는 나쁜가 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · MEV는 나쁜 것인가</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">긍정적 측면</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 차익거래 → DEX 간 가격 효율화</li>
                    <li>• 청산 → DeFi 프로토콜 건전성 유지</li>
                    <li>• MEV 수익 → validator 보안 참여 인센티브 강화</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">부정적 측면</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Sandwich attack → 일반 사용자 직접 피해</li>
                    <li>• Gas war(PGA) → 네트워크 혼잡·fee 인상</li>
                    <li>• Builder·Relay 중앙화 → 검열 위험, 탈중앙화 훼손</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Ethereum 커뮤니티는 <strong>SUAVE</strong>, <strong>Inclusion Lists</strong>, <strong>Encrypted Mempool</strong> 등 프로토콜 레벨 솔루션을 연구 중이다. MEV를 없애는 것이 아니라, 공정하게 분배하고 투명하게 관리하는 방향으로 진화하고 있다.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  MEV는 블록체인이 공개적이고 탈중앙화된 시스템이기 때문에 피할 수 없는 속성이다. 이를 이해하는 것이 DeFi를 올바르게 사용하는 첫걸음이다.
                </p>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* ── S11 $50M Aave 사건 ── */}
              <h2 className="text-3xl font-bold mt-12 mb-2 text-gray-900 dark:text-white">11 · 실전 사례: $50M Aave 스왑 사건</h2>
              <p className="text-sm font-mono text-gray-400 mb-6">2026년 3월 12일 · Ethereum Mainnet</p>
              <p className="text-gray-700 dark:text-gray-300">
                이론에서 다룬 모든 개념 — AMM 가격 충격, 샌드위치 어택, 플래시론, Flashbots — 이 하나의 트랜잭션에서 동시에 작동하는 것을 보여준 사건이다. 누군가가 Aave에 예치해 둔 <strong>$50,432,688 상당의 <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">aEthUSDT</code>(USDT 예금 영수증 토큰)를 Collateral Swap 기능으로 AAVE 토큰과 교환</strong>했고, 결과는 <strong>327 AAVE(약 $36,000)</strong>였다. 사실상 $49.96M을 날렸다.
              </p>

              {/* 요약 수치 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
                {[
                  { label: '투입 금액', value: '$50.4M', sub: 'USDT' },
                  { label: '받은 금액', value: '$36K', sub: '327 AAVE' },
                  { label: 'MEV 추출 총액', value: '$43M+', sub: '단일 Tx 역대 최대급' },
                  { label: 'SushiSwap 풀 유동성', value: '$73K', sub: '주문의 1/1,000' },
                ].map((s, i) => (
                  <div key={i} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                    <p className="text-xs font-mono text-gray-400 mb-1">{s.label}</p>
                    <p className="text-2xl font-bold text-red-800 dark:text-red-300">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* BOX: Aave는 렌딩인데 왜 스왑? */}
              <div className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
                <p className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                  <span className="text-lg">🏦</span> Aave는 렌딩 프로토콜인데, 왜 스왑에 사용됐나?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  맞다. Aave는 본질적으로 <strong>대출·차입(렌딩) 프로토콜</strong>이다. 핵심은 이거다: <strong>Aave에 USDT를 예치하면, USDT는 Aave 스마트컨트랙트 안에 잠기고 사용자 지갑에는 USDT가 사라진다.</strong> 대신 <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">aEthUSDT</code>라는 "예금 영수증 토큰"이 발행된다. 이 토큰은 시간이 지날수록 이자가 붙어 잔액이 자동으로 늘어나는 이자 수익형 토큰이다.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3 text-sm font-mono text-gray-600 dark:text-gray-300 my-3">
                  USDT 예치 → 지갑의 USDT 사라짐 → <code className="text-amber-700 dark:text-amber-300">aEthUSDT</code> 발행됨 (영수증)
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  이 사건의 피해자는 처음부터 외부 스왑을 하려던 게 아니었다. 이미 Aave에 USDT를 예치한 상태라 지갑에는 <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">aEthUSDT</code>만 있었고, 이 담보를 AAVE 토큰으로 바꾸기 위해 Aave의 <strong>Collateral Swap</strong> 기능을 사용한 것이다.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Collateral Swap 내부 동작 (버튼 하나의 실체)</p>
                  <div className="space-y-2">
                    {[
                      { n: '1', text: 'aEthUSDT → USDT 언랩 (Aave 예치금 출금)', color: 'text-gray-600 dark:text-gray-400' },
                      { n: '2', text: 'USDT → WETH → AAVE 스왑 (CoW Protocol → Uniswap V3 → SushiSwap 경유)', color: 'text-red-600 dark:text-red-400' },
                      { n: '3', text: 'AAVE를 다시 Aave에 예치 → aEthAAVE로 변환', color: 'text-gray-600 dark:text-gray-400' },
                    ].map((s, i) => (
                      <div key={i} className={`flex items-start gap-3 text-sm ${s.color}`}>
                        <span className="font-mono text-gray-400 w-4 flex-shrink-0">{s.n}</span>
                        <span>{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  이 세 단계가 하나의 트랜잭션으로 추상화된 것이 Collateral Swap 버튼이다. Aave가 DEX로 변신한 게 아니라, 복잡한 과정을 버튼 하나로 추상화했기 때문에 사용자 입장에서 "Aave에서 스왑"처럼 보인 것이다. <strong>그 추상화가 사용자로 하여금 내부 경로의 유동성 리스크를 체감하기 어렵게 만든 것</strong>이 이 사건 비판의 또 다른 핵심이다.
                </p>
              </div>

              {/* 트랜잭션 플로우 */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">트랜잭션 플로우</h3>
              <div className="overflow-x-auto my-4">
                <div className="flex items-stretch min-w-max">
                  {[
                    { label: 'aEthUSDT', sub: 'Aave 예금 토큰', color: 'border-gray-300 dark:border-gray-600' },
                    null,
                    { label: 'USDT 언랩', sub: 'Aave에서 출금', color: 'border-gray-300 dark:border-gray-600' },
                    null,
                    { label: 'WETH', sub: 'Uniswap V3 스왑', color: 'border-blue-400' },
                    null,
                    { label: 'AAVE 327개', sub: 'SushiSwap ($73K 풀)', color: 'border-red-400 bg-red-50 dark:bg-red-900/20', bad: true },
                  ].map((step, i) =>
                    step === null ? (
                      <div key={i} className="flex items-center px-2 text-gray-400 text-sm">→</div>
                    ) : (
                      <div key={i} className={`min-w-[110px] text-center p-3 rounded-lg border text-sm ${step.color} bg-white dark:bg-gray-800`}>
                        <p className={`font-semibold text-sm ${step.bad ? 'text-red-700 dark:text-red-300' : 'text-gray-900 dark:text-white'}`}>{step.label}</p>
                        <p className="text-xs text-gray-400 mt-1">{step.sub}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* BOX: AMM 가격 충격 */}
              <div className="border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 my-6">
                <p className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <span className="text-lg">📐</span> 개념 설명: AMM 가격 충격(Price Impact)이란?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Uniswap 같은 AMM(자동 시장 조성자)은 <code className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded text-xs">x × y = k</code> 공식으로 가격을 결정한다. 풀에 토큰 A가 100개, 토큰 B가 100개 있다면 k=10,000이다. 누군가 B를 100개 더 투입하면 A는 50개로 줄어야 k를 유지한다. 즉 B의 가격이 <strong>2배</strong>로 뛴다.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  이 사건에서 SushiSwap AAVE/WETH 풀의 총 유동성은 약 <strong>$73,000</strong>이었다. 여기에 <strong>17,958 WETH(약 $37M)</strong>이 쏟아졌다. 풀 규모 대비 1,000배 이상의 주문이다. 공식상 AAVE 가격이 수직으로 치솟을 수밖에 없었고, 결국 <strong>AAVE 1개당 약 $154,000</strong>에 매수가 체결됐다. 당시 시장가는 약 $114였다.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-xs font-mono text-gray-600 dark:text-gray-400">
                  시장가 $114 × 327개 = $37,278 어치<br />
                  실제 지불 $50,432,688 → 1개당 실질 단가 ≈ $154,229
                </div>
              </div>

              {/* 왜 막히지 않았나 */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">왜 막히지 않았나</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Aave 인터페이스는 거래 전 <strong>"extraordinary slippage"</strong> 경고를 표시했고, 사용자가 체크박스로 직접 확인하도록 요구했다. 사용자는 모바일 기기에서 이를 확인하고 진행했다.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Aave 엔지니어 Martin Grabina는 더 날카로운 지적을 남겼다. <em>"핵심 문제는 슬리피지가 아니었다. 99% price impact가 이미 포함된 quote를 사용자가 그냥 수락한 것이다."</em> 즉 실행 전 이미 quote 자체가 재앙적인 결과를 보여주고 있었다. 사용자가 그걸 보고 확인 버튼을 눌렀다.
              </p>

              {/* BOX: 슬리피지 vs 가격 충격 */}
              <div className="border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 my-6">
                <p className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <span className="text-lg">🔍</span> 개념 설명: 슬리피지(Slippage) vs 가격 충격(Price Impact)
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">슬리피지 (Slippage)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">주문 <em>제출 후</em> 다른 트랜잭션이 먼저 체결되어 가격이 변하는 것. 예상가 2,000 USDC에 주문했는데 체결 시 2,010 USDC가 된 경우. MEV 봇의 front-running이 주원인.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">가격 충격 (Price Impact)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">주문 <em>자체의 크기</em> 때문에 가격이 바뀌는 것. 이 사건이 바로 이 경우. quote 단계에서 이미 99% 손실이 예정되어 있었다. 슬리피지가 아니라 <strong>내 주문 크기</strong>가 문제였다.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">CoW Swap은 "프로토콜 익스플로잇이나 악의적 행동의 징후는 없다. 트랜잭션은 서명된 주문의 파라미터대로 실행됐다"고 발표했다. 기술적으로는 모든 것이 정상적으로 동작했다.</p>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                Forbes는 이를 전통 금융과 비교했다. "일반 브로커리지였으면 컴플라이언스 스크린에서 걸렸을 것이고, Coinbase나 Binance였어도 가격 이탈 체크에서 막혔을 것이다. DeFi는 아무도 막을 수 없다는 것이 장점이자 이 사건의 원인이다."
              </p>

              {/* 돈은 어디로 갔나 */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">$50M은 어디로 갔나</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">$50M이 사라진 게 아니다. 다음과 같이 정밀하게 분배됐다.</p>
              <div className="space-y-3 my-6">
                {[
                  { who: 'Titan Builder', amount: '~$34M', pct: '68%', color: 'bg-red-500', desc: '샌드위치 어택 + Flashbots bundle', badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
                  { who: '또 다른 MEV 봇', amount: '~$10M', pct: '20%', color: 'bg-orange-400', desc: '별도 MEV 추출', badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' },
                  { who: 'Aave 프로토콜', amount: '~$600K', pct: '1.2%', color: 'bg-blue-400', desc: '프로토콜 수수료 (후에 환불 제안)', badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                  { who: '사용자가 실제 수취', amount: '~$36K', pct: '0.07%', color: 'bg-gray-400', desc: '327 AAVE', badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-32 flex-shrink-0">
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div className={`h-full rounded-full ${row.color}`} style={{ width: row.pct }} />
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded flex-shrink-0 ${row.badge}`}>{row.amount}</span>
                    <span className="font-semibold text-sm text-gray-900 dark:text-white flex-shrink-0">{row.who}</span>
                    <span className="text-xs text-gray-400">{row.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Arkham과 BlockSec의 집계가 $32M~$34M으로 약간 차이가 있으나, 총 $43M+ 이상이 단일 트랜잭션에서 추출된 것은 역대 단일 Tx 기준 최대급 MEV 수확 중 하나다.</p>

              {/* Titan Builder 정체 */}
              <div className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8 space-y-4">
                <p className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
                  <span className="text-lg">🏗️</span> Titan Builder — 이 주체는 누구인가?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Titan Builder는 이더리움 PBS 생태계에서 <strong>블록을 가장 많이 생산하는 상위 Builder 중 하나</strong>다. 2023년부터 운영을 시작해 현재 전체 이더리움 블록의 <strong>25~40%</strong>를 지속적으로 점유한다. Flashbots Builder, BloXroute, Beaver Builder 등과 함께 소수의 Builder가 이더리움 블록 생산을 과점하는 구조다.
                </p>

                {/* Builder 시장 점유율 개념 */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">이더리움 블록 Builder 시장 (2025~2026년 기준)</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Titan Builder', pct: '30~40%', bar: 'w-10/12', color: 'bg-red-400' },
                      { name: 'Flashbots Builder', pct: '20~30%', bar: 'w-8/12', color: 'bg-orange-400' },
                      { name: 'BloXroute', pct: '10~15%', bar: 'w-4/12', color: 'bg-blue-400' },
                      { name: '기타 Builder', pct: '나머지', bar: 'w-3/12', color: 'bg-gray-400' },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-36 flex-shrink-0 text-gray-700 dark:text-gray-300 text-xs">{b.name}</span>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                          <div className={`${b.bar} ${b.color} h-2 rounded-full`} />
                        </div>
                        <span className="w-16 text-xs text-gray-500 text-right">{b.pct}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">* mevboost.pics 데이터 기반 대략적 수치, 시기에 따라 변동 있음</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">핵심 — Titan Builder는 Builder이자 Searcher다</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      대부분의 Builder는 "우리는 중립적으로 Searcher 번들을 받아 블록을 만들 뿐"이라고 주장한다. 하지만 Titan Builder는 <strong>자체 MEV 추출 봇도 운영</strong>한다. 즉, 외부 Searcher의 번들을 받는 동시에 자신이 직접 MEV 기회를 탐지하고 실행한다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                      이것이 이 사건에서 치명적이었다. Titan Builder는 <strong>자신이 만드는 블록 안에서 자신의 샌드위치 번들을 원하는 순서대로 배치</strong>할 수 있다. 일반 Searcher는 Builder에게 번들을 제출하고 포함 여부를 기다려야 하지만, Titan은 자신이 Builder이므로 <strong>순서 보장이 완벽하다</strong>. 프론트런 Tx → 피해자 Tx → 백런 Tx 순서를 스스로 확정한다.
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">수직 통합의 위험</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Builder + Searcher 겸업 구조는 이해충돌 문제를 낳는다. 외부 Searcher가 번들을 제출하면 Builder인 Titan이 그 기회를 먼저 보고, 자신의 봇이 더 나은 번들을 만들어 덮어씌울 수 있다는 의혹이 꾸준히 제기된다. 이 사건 이후 이더리움 커뮤니티에서 Builder의 겸업 금지 또는 투명성 강화 논의가 재점화됐다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Titan Builder $34M 수익 상세 */}
              <div className="border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10 rounded-xl p-6 my-6 space-y-4">
                <p className="font-bold text-red-800 dark:text-red-300 text-base">💰 Titan Builder는 어떻게 $34M을 벌었나?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  샌드위치 어택의 수익은 <strong>"내가 싸게 산 AAVE를 피해자가 비싼 가격에 사고 나면, 그 비싼 가격에 내가 판다"</strong>는 구조다. 피해자의 주문이 클수록, 그리고 풀 유동성이 작을수록 수익이 커진다. 이 사건은 그 두 조건이 극단적으로 맞아떨어진 케이스다.
                </p>
                <div className="bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">수익 계산 구조</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-orange-500 font-bold flex-shrink-0">FRONT</span>
                      <div className="text-gray-700 dark:text-gray-300">
                        Morpho에서 $29M WETH 플래시론 → Bancor에서 AAVE 매수 → SushiSwap AAVE/WETH 풀 가격 조작 (AAVE 가격 $114 → 수십 배로 인위 급등)
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">VICTIM</span>
                      <div className="text-gray-700 dark:text-gray-300">
                        피해자의 17,958 WETH($37M)가 이미 왜곡된 풀에 투입 → AMM 공식상 AAVE 1개당 실질 단가 ~$154,229에 327개 체결 → 피해자는 $37M 상당의 WETH를 $36K 어치 AAVE와 교환
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 font-bold flex-shrink-0">BACK</span>
                      <div className="text-gray-700 dark:text-gray-300">
                        피해자의 WETH가 풀에 대량 유입된 상태 → SushiSwap에서 AAVE 매도 → 풀에 WETH가 넘쳐나므로 Titan이 가진 AAVE를 비싸게 팔 수 있음 → Morpho 플래시론 상환 후 약 <strong>$34M 순이익</strong>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50 dark:bg-red-900/20 rounded p-3 text-xs font-mono text-gray-600 dark:text-gray-300">
                    핵심: 피해자의 $37M WETH가 풀에 들어오면서 AAVE 유동성이 흡수됨<br />
                    → Titan이 미리 산 AAVE의 가치가 폭발적으로 상승<br />
                    → Titan은 그 AAVE를 비싸게 팔고 플래시론 상환 → 차액이 순이익
                  </div>
                </div>
                {/* Price impact only vs bot */}
                <div className="bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">봇이 없었다면? — Price Impact만 있을 때 돈은 어디 가나</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">❌ 봇 없이 피해자만 스왑</p>
                      <div className="space-y-1 text-xs font-mono">
                        <p>피해자: WETH 17,958개 투입</p>
                        <p>풀: AAVE 거의 전량 소진</p>
                        <p>풀 안에 WETH 17,975개 축적</p>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">→ 손해는 풀 <strong>LP(유동성 공급자)</strong>에게 돌아감. 피해자가 WETH를 헐값에 팔고 AAVE를 비싸게 산 셈이니, 그 차액은 LP가 챙긴다. <strong>봇은 돈을 못 번다.</strong></p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                      <p className="font-semibold mb-2 text-red-800 dark:text-red-300">✅ 봇이 개입하면</p>
                      <div className="space-y-1 text-xs font-mono">
                        <p><span className="text-orange-500">FRONT:</span> 봇이 $114에 AAVE 매수</p>
                        <p><span className="text-red-500">VICTIM:</span> 피해자가 가격을 펌프</p>
                        <p><span className="text-green-600">BACK:</span>  봇이 수천달러에 매도</p>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">→ LP에게 가야 할 가치를 봇이 가로챈다. 피해자의 대형 주문이 <strong>봇의 수익을 만들어주는 펌프 역할</strong>을 한 것이다.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                    한 문장 요약: 피해자의 대형 주문이 가격을 올려주는 펌프 역할을 했고, 봇은 그 펌프 <em>전에</em> 사서 펌프 <em>후에</em> 팔았다. 피해자는 자기 돈으로 봇의 수익을 만들어준 셈이다.
                  </p>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  일반 샌드위치는 수천~수만 달러 수준의 MEV를 노린다. 이 사건이 $34M이라는 전례 없는 금액이 된 이유는 <strong>풀 유동성($73K) 대비 피해자 주문($37M)의 비율이 약 500:1</strong>이었기 때문이다. AMM 공식은 이 경우 AAVE 가격을 1,350배 이상 올려야만 균형이 맞도록 설계돼 있다.
                </p>
              </div>

              {/* 두 번째 MEV 봇 $10M */}
              <div className="border border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/10 rounded-xl p-6 my-6 space-y-4">
                <p className="font-bold text-orange-800 dark:text-orange-300 text-base">💰 두 번째 MEV 봇은 어떻게 $10M을 벌었나?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Titan Builder의 샌드위치 트랜잭션이 실행되는 동안, SushiSwap에서 AAVE 가격이 $114 → $154,000 수준으로 치솟는 순간이 발생했다. 이 <strong>가격 왜곡은 같은 블록 안에서 짧게 존재</strong>했고, 두 번째 봇은 이것을 독립적으로 포착해 수익을 냈다.
                </p>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">추정 수익 경로 (두 가지 병렬 가능)</p>
                    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                      <div>
                        <p className="font-semibold text-orange-700 dark:text-orange-400 mb-1">경로 A — 크로스-DEX 차익거래</p>
                        <p className="leading-relaxed">SushiSwap에서 AAVE 가격이 $154K로 치솟는 동안, 다른 DEX(Uniswap, Curve 등)에서는 AAVE가 여전히 $114 수준이었다. 두 번째 봇은 이 가격 괴리를 포착해 <strong>싼 DEX에서 AAVE 매수 → 비싼 SushiSwap에 매도</strong>하는 차익거래를 실행했다. Titan의 샌드위치가 만들어 낸 가격 왜곡을 또 다른 봇이 무임승차한 것이다.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-700 dark:text-orange-400 mb-1">경로 B — 렌딩 프로토콜 청산</p>
                        <p className="leading-relaxed">일부 렌딩 프로토콜은 SushiSwap 풀을 AAVE 가격 오라클로 참조한다. AAVE 가격이 일시적으로 $154K로 보이면, AAVE를 담보로 빌린 포지션이 <strong>갑자기 과담보 상태</strong>가 되어 청산 가능 상태가 된다. 봇이 이 청산 기회를 잡아 청산 보너스(보통 5~10%)를 수취했을 가능성이 있다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4">
                    <p className="text-sm text-orange-900 dark:text-orange-200 leading-relaxed">
                      <strong>핵심 교훈:</strong> 하나의 대형 MEV 이벤트는 연쇄적으로 다른 MEV 기회를 만든다. Titan의 샌드위치가 가격 왜곡을 만들고, 그 왜곡이 차익거래와 청산 기회를 파생시켜 두 번째 봇이 $10M을 추가로 가져갔다. MEV는 단발성이 아니라 <strong>연쇄 폭발</strong>이다.
                    </p>
                  </div>
                </div>
              </div>

              {/* BOX: MEV 봇 실전 실행 */}
              <div className="border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 my-6">
                <p className="font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">
                  <span className="text-lg">⚙️</span> MEV 봇 실전 실행 — 플래시론 + 샌드위치 (하나의 트랜잭션)
                </p>
                <div className="space-y-3">
                  {[
                    { n: '1', label: '플래시론', text: 'Morpho 플랫폼에서 $29M WETH 플래시론 실행 (무담보)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                    { n: '2', label: 'FRONT', text: 'Bancor에서 AAVE를 대량 매수 → SushiSwap 풀 AAVE 가격 급등', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' },
                    { n: '3', label: 'VICTIM', text: '피해자 트랜잭션이 급등한 가격에 17,958 WETH → 327 AAVE 체결', color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
                    { n: '4', label: 'BACK', text: 'SushiSwap에서 AAVE 매도 → 높아진 가격에 대량 청산', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
                    { n: '5', label: '상환', text: 'Morpho에 $29M WETH + 수수료 상환', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
                    { n: '★', label: '순이익', text: 'Titan Builder $34M + 다른 봇 $10M — 모두 하나의 트랜잭션', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', bold: true },
                  ].map((step, i) => (
                    <div key={i} className={`flex items-start gap-3 text-sm ${step.bold ? 'font-semibold' : ''}`}>
                      <span className="font-mono text-gray-400 w-4 flex-shrink-0">{step.n}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${step.color}`}>{step.label}</span>
                      <span className="text-gray-700 dark:text-gray-300">{step.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-3 border-t border-purple-200 dark:border-purple-800">이 실행 구조는 앞서 설명한 플래시론(S2) + 샌드위치(S5) + Flashbots private bundle(S6)의 교과서적 결합이다.</p>
              </div>

              {/* 왜 돌려주지 않아도 되나 */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Titan Builder는 돈을 돌려줘야 하는 거 아닌가?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">결론부터: <strong>법적 의무도 없고, 실제로 돌려주지도 않았다.</strong> 이유는 세 가지다.</p>

              <div className="space-y-4 my-6">
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">① 프로토콜이 허용한 행위다</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">이더리움 PBS 규칙상 Builder는 블록 내 트랜잭션 순서를 자유롭게 정할 수 있다. Titan Builder가 한 행위는 이 규칙 안에 있다. 피해자의 자금을 탈취한 게 아니라, 피해자가 slippage 설정 없이 제출한 트랜잭션이 AMM 공식대로 체결된 것이다. 현재 어떤 국가도 MEV 샌드위치를 명시적으로 불법으로 규정하지 않는다.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">② 청구 대상이 없다</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Aave 프로토콜은 스마트컨트랙트이고 운영사가 아니다. Titan Builder는 회사 소재지·법인 정보가 공개되지 않으며 법적 관할권이 불명확하다. 이더리움 재단은 프로토콜 개발자이지 운영자가 아니다. 탈중앙화 구조 자체가 책임 귀속 주체를 흐린다.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">③ 자발적 반환 동기가 없다</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Titan Builder는 합법적으로 활동하는 블록 빌더 회사다. 자금 세탁 문제도 없고, 법적 압박도 없으며, 반환 시 얻을 이점도 없다. 이더리움 커뮤니티의 비판은 받았지만 사업에 영향이 없었다.</p>
                </div>
              </div>

              {/* 비교 사례 */}
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-4">DeFi 자금 반환 사례 비교</p>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      name: 'Poly Network 해킹 (2021)',
                      amount: '$611M',
                      returned: '전액 반환',
                      returnColor: 'text-green-600 dark:text-green-400',
                      reason: '해커가 "기술적 증명"이라 주장. 실질적으로는 자금 규모가 너무 커서 세탁 불가능했고, 개발팀이 온체인 메시지로 협상. 법적 추적 가능성이 높았음.',
                      mev: false,
                    },
                    {
                      name: 'Euler Finance 해킹 (2023)',
                      amount: '$197M',
                      returned: '전액 반환',
                      returnColor: 'text-green-600 dark:text-green-400',
                      reason: '해커가 FBI 추적을 인식하고 협상 후 반환. 피해자 중 일부가 생계 자금을 잃었다는 온체인 메시지에 반응했다는 설도 있음.',
                      mev: false,
                    },
                    {
                      name: 'Curve Finance 해킹 (2023)',
                      amount: '$73M',
                      returned: '일부 반환 (~$52M)',
                      returnColor: 'text-amber-600 dark:text-amber-400',
                      reason: '일부 화이트햇 봇이 선점 추출 후 반환. 나머지는 미반환. MEV 봇이 해커보다 먼저 자금을 추출해 보호한 케이스.',
                      mev: true,
                    },
                    {
                      name: 'Aave $50M Sandwich (2026)',
                      amount: '$43M+',
                      returned: '미반환',
                      returnColor: 'text-red-600 dark:text-red-400',
                      reason: '프로토콜 규칙 내 합법적 MEV 추출. 법적 의무 없음. Aave 거버넌스에서 $600K 프로토콜 수수료 환불만 논의됨.',
                      mev: true,
                    },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">{c.name}</span>
                          {c.mev && <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">MEV 관련</span>}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.reason}</p>
                      </div>
                      <div className="text-right flex-shrink-0 w-28">
                        <p className="font-mono text-xs text-gray-500">{c.amount}</p>
                        <p className={`text-xs font-semibold ${c.returnColor}`}>{c.returned}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">자발적 반환이 이뤄진 케이스는 공통적으로 ①자금 규모가 너무 커서 세탁이 불가능하거나 ②FBI·인터폴 추적이 가시화됐거나 ③협상 인센티브가 있었다. 이 사건은 세 조건 모두 해당하지 않는다.</p>
              </div>

              {/* 돈세탁설 */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">돈세탁설 — 의혹과 반론</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">사건 직후 커뮤니티에서 "실수가 아니라 의도적인 돈세탁"이라는 주장이 퍼졌다.</p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-xl p-5">
                  <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-3">의혹 측 정황</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• 지갑은 2월 20일에 신규 생성, 이전 온체인 활동 없음</li>
                    <li>• Binance에서 2/16~20일 자금 받은 13개 연결 지갑 추적됨</li>
                    <li>• 내부 이동 후 두 개의 새 주소로 합쳐진 뒤 스왑 실행</li>
                    <li>• 온체인 트레이서 LookOnChain: 지갑 중 하나가 Binance 입금 주소를 트레이더 Garrett Jin과 공유한다고 주장</li>
                    <li>• 이론적으로 지갑 A와 MEV 봇 B가 동일인이면 손실처럼 보이는 거래로 자금 출처 세탁 가능</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-xl p-5">
                  <p className="font-bold text-green-800 dark:text-green-300 mb-3">전문가 반론</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Barter CEO Nikita Ovchinnik: "이 정도 포렌식 주목을 즉각 끌어들이는 방식보다 훨씬 깨끗하고 효율적인 방법이 얼마든지 있다"</li>
                    <li>• Aave·CoW Swap·Lido가 수수료를 가져가 돈세탁 수단으로 극히 비효율적</li>
                    <li>• 표준 DeFi 인프라를 통해 완전히 공개됨 — 추적을 어렵게 하는 것이 목표라면 최악의 방법</li>
                    <li>• 분석가 0xngmi: "복잡한 세탁 구조 vs 체크박스 클릭 실수 — 어느 쪽이 더 단순한 설명인가"</li>
                  </ul>
                </div>
              </div>

              {/* Aave 대응 */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Aave의 대응</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl flex-shrink-0">🛡</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Aave Shield 발표</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">가격 충격이 <strong>25%를 초과하는 스왑 트랜잭션을 자동으로 차단</strong>하는 새로운 보호 메커니즘. 이 사건이 직접적인 계기가 됐다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl flex-shrink-0">💸</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">$600K 수수료 환불 제안</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aave 창립자 Stani Kulechov가 피해자에게 연락해 프로토콜이 해당 거래에서 수취한 $600,000 환불을 제안했다. 피해액의 1.2%에 불과하지만 상징적인 조치다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <div>
                    <p className="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">전날에도 대형 사고</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">이 사건은 Aave에서 wstETH 토큰의 오라클 가격 불일치로 인해 <strong>약 $27M 규모의 잘못된 청산</strong>이 34개 계정에서 발생한 다음 날 벌어졌다. 이틀 연속 대형 사고였다.</p>
                  </div>
                </div>
              </div>

              {/* 교훈 */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">이 사건이 주는 세 가지 교훈</h3>
              <div className="space-y-4 my-6">
                {[
                  {
                    num: '①',
                    title: '유동성의 절대적 중요성',
                    desc: '$73,000짜리 풀에 $50M을 넣으면 어떤 프로토콜도, 어떤 aggregator도 적절한 가격을 제공할 수 없다. CZ의 말처럼 "liquidity is the best user protection"이 이 사건의 핵심이다.',
                    color: 'border-l-blue-500',
                  },
                  {
                    num: '②',
                    title: 'MEV 생태계의 실체',
                    desc: 'Titan Builder가 $34M을 추출했다는 것은, 앞서 설명한 모든 구조 — 플래시론으로 자본 조달, 샌드위치로 가격 조작, private bundle로 제출 — 가 하나의 트랜잭션에서 실시간으로 완성됐음을 보여준다.',
                    color: 'border-l-purple-500',
                  },
                  {
                    num: '③',
                    title: '"동의 ≠ 보호"의 문제',
                    desc: '경고창을 보여줬다고 해서 사용자가 그 의미를 실제로 이해했다는 보장이 없다. Forbes는 "대부분의 DeFi 인터페이스는 예상 결과가 거의 전액 손실인 거래를 아직도 하드 차단하지 않는다"고 비판했다. Aave Shield는 이 구조적 공백을 메우기 위한 첫 조치다.',
                    color: 'border-l-red-500',
                  },
                ].map((item, i) => (
                  <div key={i} className={`pl-4 border-l-4 ${item.color}`}>
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-1"><span className="mr-1">{item.num}</span>{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
                참고: Flashbots Docs · MEV-Explore · EigenPhi · Ethresearch · Paradigm Research · Aave Docs<br />
                데이터 기준: 2024년 기준 공개 수치, 시장 상황에 따라 변동 가능
              </p>
            </>
          ) : (
            <>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Hundreds of thousands of dollars are quietly extracted with every block — and you don't need capital to do it. Flash loans solve the capital problem. Flashbots eliminate exposure risk. Liquidations and arbitrage create the opportunity. When these four combine, the core engine of Ethereum MEV comes to life.
              </p>

              {/* TOC EN */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Table of Contents</p>
                <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {[
                    'What is MEV — Definition and Mechanics',
                    'Flash Loans — Infinite Capital Without Collateral',
                    'Arbitrage — Capturing Price Imbalances',
                    'Liquidations — The Flip Side of DeFi Health',
                    'Sandwich Attack & Front-running',
                    'Flashbots — Escaping the Dark Forest',
                    'MEV Ecosystem Players',
                    'The Four-Way Connection — The Full Engine',
                    'How Individuals Can Participate',
                    'Is MEV Bad?',
                    'Real-World Case: The $50M Aave Swap Incident (Mar 2026)',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-gray-400 w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* S1 EN */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · What is MEV?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>MEV (Maximal Extractable Value)</strong> is the <em>additional value</em> that block producers (validators) can extract by selecting, reordering, inserting, or removing transactions from the blocks they produce. Originally called Miner Extractable Value, it was redefined after Ethereum's move to Proof of Stake.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>Key premise:</strong> Blockchains do not process transactions in arrival order. The block producer decides the order. That authority is the root of all MEV.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {[
                  { label: 'Cumulative MEV', value: '$1.5B+', sub: 'Flashbots data (2020–)' },
                  { label: 'Daily Average MEV', value: '$1M+', sub: 'Spikes during high volatility' },
                  { label: 'MEV-Boost Adoption', value: '~90%', sub: 'Of all Ethereum validators' },
                ].map((s, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                    <p className="text-xs font-mono text-gray-400 mb-1">{s.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">The Mempool — Where MEV Happens</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Transactions sit in a public queue called the mempool before being included in a block. Anyone can see it. Bots scan it in real time, hunting for opportunities.</p>
              <div className="overflow-x-auto my-6">
                <div className="flex items-stretch min-w-max">
                  {[
                    { num: 'STEP 1', name: 'Tx Sent', desc: 'Signed & broadcast' },
                    null,
                    { num: 'STEP 2', name: 'Mempool Queue', desc: 'Publicly visible', highlight: true },
                    null,
                    { num: 'STEP 3', name: 'Searcher Detects', desc: 'Bot spots opportunity' },
                    null,
                    { num: 'STEP 4', name: 'Bundle Submitted', desc: 'With ordering' },
                    null,
                    { num: 'STEP 5', name: 'Block Included', desc: 'MEV realized' },
                  ].map((step, i) =>
                    step === null ? (
                      <div key={i} className="flex items-center px-2 text-gray-400 text-sm">→</div>
                    ) : (
                      <div key={i} className={`flex-1 min-w-[100px] text-center p-3 rounded-lg border text-sm ${
                        (step as {highlight?: boolean}).highlight
                          ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                      }`}>
                        <p className="font-mono text-xs text-gray-400 mb-1">{step.num}</p>
                        <p className={`font-semibold text-sm ${(step as {highlight?: boolean}).highlight ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>{step.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{step.desc}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Mempool types EN */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Types of Mempools — The Public One Isn't the Only One</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                "The mempool" implies one shared queue — but who can actually see a transaction depends entirely on which path it takes.
              </p>

              <div className="space-y-3 my-6">
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">fully public</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Public Mempool</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Send a transaction from MetaMask with no special settings and it lands here. Anyone in the world can see it in real time. Searcher bots scan it 24/7. This is why sandwich attacks are possible.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">access: eth_subscribe("newPendingTransactions")</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">paid fast-lane: bloXroute, Blocknative</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">fully private</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Private Mempool (Private RPC)</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Use a service like Flashbots Protect RPC or MEV Blocker and your transaction bypasses the public mempool entirely. It's delivered only to specific relays/builders — invisible to all other searchers. The most effective sandwich attack defense available today.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">Flashbots Protect: rpc.flashbots.net</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">MEV Blocker: rpc.mevblocker.io</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">partial visibility</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">MEV-Share Orderflow</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">A middle ground — neither fully public nor fully private. The transaction doesn't enter the public mempool, but Flashbots' Matchmaker shares a <strong>"hint"</strong> with registered searchers: e.g., "a USDC↔ETH swap is happening" — amount and address stay hidden. If a searcher extracts MEV from it, they must return a portion of the profit to the original user.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">provided by: Flashbots Matchmaker API</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">user profit-sharing structure</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">contract-based</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Builder Private Orderflow</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Large builders (Flashbots, BloXroute, etc.) strike direct deals with dApps and wallet services to receive transactions without going through the public mempool. Only that builder can see them — invisible to all other builders and searchers. High-volume services use this channel to increase their builder's revenue.</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">Type</th>
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">Who Can See It</th>
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">Sandwich Risk</th>
                      <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-900 dark:text-white">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Public mempool', who: 'Everyone', risk: 'High', riskColor: 'text-red-600 dark:text-red-400', ex: 'Default MetaMask Tx' },
                      { type: 'Private RPC', who: 'Specific relay only', risk: 'None', riskColor: 'text-green-600 dark:text-green-400', ex: 'Flashbots Protect, MEV Blocker' },
                      { type: 'MEV-Share', who: 'Registered searchers (hints only)', risk: 'Low', riskColor: 'text-amber-600 dark:text-amber-400', ex: 'Flashbots MEV-Share' },
                      { type: 'Builder private', who: 'One specific builder', risk: 'None', riskColor: 'text-green-600 dark:text-green-400', ex: 'Direct dApp / wallet deals' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-gray-900 dark:text-white">{row.type}</td>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400">{row.who}</td>
                        <td className={`border border-gray-200 dark:border-gray-700 p-3 font-semibold ${row.riskColor}`}>{row.risk}</td>
                        <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs font-mono">{row.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Private mempool misconception callout EN */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6 my-6 space-y-5">
                <p className="font-bold text-amber-800 dark:text-amber-300 text-base">❓ Are private mempool transactions at a disadvantage for block inclusion?</p>

                {/* PoW recap */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">PoW Era (Ethereum before September 2022)</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    Under PoW, <strong>miners held a monopoly on block production</strong>. A miner pulled transactions from the public mempool, ordered them however they liked, and mined the block. Anything not in the public mempool simply didn't exist for that miner until someone handed it to them. In this model, "public mempool = block queue" was essentially true.
                  </p>
                </div>

                {/* PoS + PBS */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">After The Merge (PoS) — Roles Split Into Two (PBS)</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-3">
                    When Ethereum switched to PoS in September 2022, the PoW model of "one party mines and builds the block" disappeared. The job split into two specialized roles — this is <strong>PBS (Proposer-Builder Separation)</strong>.
                  </p>
                  <div className="bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 rounded-lg overflow-hidden text-sm">
                    <div className="grid grid-cols-2 divide-x divide-amber-200 dark:divide-amber-800">
                      <div className="p-4">
                        <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">Builder (Block Producer)</p>
                        <p className="text-amber-900 dark:text-amber-200 text-xs leading-relaxed">Collects transactions from the mempool and Searcher bundles, then assembles a block candidate in <strong>the most profitable ordering</strong>. These are specialized software companies.</p>
                      </div>
                      <div className="p-4">
                        <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">Proposer (Validator)</p>
                        <p className="text-amber-900 dark:text-amber-200 text-xs leading-relaxed">Receives block candidates from Builders and <strong>picks the highest-bid one</strong>, then signs and finalizes it. Never touches transaction ordering. Must stake ≥ 32 ETH.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core answer */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">The Answer — "Public/Private" is a Visibility Problem, Not a Block-Inclusion Problem</p>
                  <div className="space-y-2 text-sm text-amber-900 dark:text-amber-200">
                    <p>• <strong>Public mempool Tx</strong> — Broadcast globally. Any Builder (and any Searcher) can see it. Builders collect it into their block candidates.</p>
                    <p>• <strong>Private Tx (Private RPC / Builder direct)</strong> — Delivered directly to a Builder without public broadcast. It goes straight into that Builder's block candidate. The only difference: Searchers can't see it.</p>
                  </div>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mt-3">
                    Both paths end the same way: <strong>a Builder includes the Tx in a block → a Proposer (validator) picks that block → it's finalized</strong>. "Not in the public mempool = can't become a block" was a PoW-era intuition. Under PoS PBS, it no longer holds.
                  </p>
                </div>

                {/* Paradox: private is actually better */}
                <div className="bg-amber-100 dark:bg-amber-900/40 rounded-lg p-4">
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">In fact, private transactions can have an advantage</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    From a Builder's perspective, private orderflow is an <strong>exclusive profit opportunity that no competing Builder can access</strong>. Since rival Builders can't build a higher-value block using the same transaction, the Builder with access has a strong incentive to bid more aggressively — making the block more likely to be chosen by the Proposer. This is why Flashbots, BloXroute, and other major Builders compete fiercely to ink private-orderflow deals with large dApps and wallet services. Private doesn't mean disadvantaged — <strong>it often means higher inclusion priority</strong>.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S2 EN Flash Loans */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · Flash Loans — Infinite Capital Without Collateral</h2>
              <p className="text-gray-700 dark:text-gray-300">
                A <strong>flash loan</strong> is a loan you borrow and repay <em>within the same transaction</em> — with no collateral required. Popularized by Aave, the entire transaction reverts if the loan isn't repaid before it ends. The lender carries zero risk, thanks to blockchain <strong>atomicity</strong>: a transaction either fully succeeds or fully fails.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  Can't repay? The transaction reverts — it's as if the loan never happened. This is how anyone can borrow millions of dollars with zero collateral.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">Flash Loan + Arbitrage: $100K Profit With Zero Capital</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3 my-4">
                {[
                  { n: '1', text: 'Flash loan 10,000 ETH from Aave (no collateral)' },
                  { n: '2', text: 'Sell 10,000 ETH on DEX A → 20,100,000 USDC (1 ETH = 2,010 USDC, expensive side)' },
                  { n: '3', text: 'Buy 10,000 ETH on DEX B → pay 20,000,000 USDC (1 ETH = 2,000 USDC, cheap side)' },
                  { n: '4', text: 'Repay Aave: 10,000 ETH + 0.09% fee' },
                  { n: '★', text: 'Net profit: ~90,000 USDC — zero capital, one transaction', profit: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${step.profit ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    <span className="font-mono w-4 flex-shrink-0 text-gray-400">{step.n}</span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">Flash Loan Attacks</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">The same mechanism enables attacks. Dozens of flash loan attacks occurred in 2020–2021. The typical pattern: ①borrow a massive amount → ②manipulate an oracle price (buy large amounts to spike a price) → ③exploit a vulnerable protocol at the distorted price → ④realize profit and repay.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
                {[
                  { name: 'bZx Hack', amount: '$1M', note: '2020' },
                  { name: 'Harvest Finance', amount: '$34M', note: '2020' },
                  { name: 'Cream Finance', amount: '$130M', note: '2021' },
                ].map((h, i) => (
                  <div key={i} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                    <p className="font-bold text-red-800 dark:text-red-300 text-lg">{h.amount}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{h.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{h.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Flash loans themselves aren't malicious — <strong>protocols with weak price oracles</strong> are the vulnerability. Using a single DEX as a price oracle makes manipulation trivial via flash loan.</p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S3 EN Arbitrage */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · Arbitrage — Capturing Price Imbalances</h2>
              <p className="text-gray-700 dark:text-gray-300">
                DEXs each have independent liquidity pools. A large swap moves only that pool's price — other DEXs haven't reflected it yet. The moment that price gap appears, the arbitrage race begins.
              </p>
              <div className="space-y-6 my-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">Cross-DEX Arbitrage</p>
                  </div>
                  <div className="p-5">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                        <p className="text-xs text-gray-500 mb-1">Uniswap v3</p>
                        <p className="text-xl font-bold text-green-800 dark:text-green-300">1 ETH = 2,000 USDC</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">← Buy here</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                        <p className="text-xs text-gray-500 mb-1">SushiSwap</p>
                        <p className="text-xl font-bold text-blue-800 dark:text-blue-300">1 ETH = 2,015 USDC</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Sell here →</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Profit: 15 USDC/ETH − gas. Simple in theory, but the trade itself moves prices — calculating the optimal trade size is essential.</p>
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">Triangular Arbitrage</p>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {['USDC', '→ ETH', '→ WBTC', '→ USDC'].map((s, i) => (
                        <span key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium ${i === 0 || i === 3 ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>{s}</span>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">Product of rates &gt; 1 = profit</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find price imbalances across a three-asset cycle using different DEXs (e.g. Uniswap → Curve → Balancer). Longer paths mean higher gas costs, so bots calculate hundreds of paths in real time to find profitable ones.</p>
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">CEX-DEX (Oracle) Arbitrage</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400">When ETH spikes on Binance, on-chain DEX prices lag for a brief window. These bots monitor CEX APIs and on-chain mempool simultaneously, reacting the instant a gap appears. Reaction speed is the competitive edge.</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Arbitrage performs a <strong>price efficiency</strong> function — without arbitrageurs, DEX prices would diverge wildly. However, the gas burned in bot competition ultimately raises gas fees for regular users.</p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S4 EN Liquidation */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · Liquidations — The Flip Side of DeFi Health</h2>
              <p className="text-gray-700 dark:text-gray-300">
                DeFi lending protocols like Aave, Compound, and MakerDAO are <strong>over-collateralized</strong>. To borrow 100 USDC you must deposit $150 worth of ETH (assuming 1 USDC = 1 ETH for simplicity). If ETH drops and the collateral ratio falls below a threshold (e.g. 120%), the position becomes <em>liquidatable</em>. Anyone can liquidate it and claim a <strong>liquidation bonus (5–15%)</strong>.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">Liquidation MEV Flow</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3 my-4">
                {[
                  { n: '1', text: "ETH price drops → User A's collateral ratio falls to 110% (below 120% threshold)" },
                  { n: '2', text: 'Multiple liquidation bots detect simultaneously → gas war or Flashbots bundle race' },
                  { n: '3', text: "Bot B repays 1,000 USDC on User A's behalf" },
                  { n: '4', text: "Bot B receives 1,000 USDC worth of ETH + 50 USDC (5% bonus)" },
                  { n: '★', text: "Bot B's net profit = 50 USDC − gas", profit: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${step.profit ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    <span className="font-mono w-4 flex-shrink-0 text-gray-400">{step.n}</span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">Flash Loan + Liquidation: Zero-Capital MEV</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-3 my-4">
                {[
                  { n: '1', text: 'Flash loan 1,000 USDC from Aave (no collateral)' },
                  { n: '2', text: "Liquidate User A's position → repay 1,000 USDC, receive ETH + bonus" },
                  { n: '3', text: 'Immediately swap received ETH → USDC on a DEX' },
                  { n: '4', text: 'Repay Aave: 1,000 USDC + fee' },
                  { n: '★', text: 'Remaining USDC = net profit — zero capital, one transaction', profit: true },
                ].map((step, i) => (
                  <div key={i} className={`flex items-start gap-3 text-sm ${step.profit ? 'text-blue-700 dark:text-blue-300 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                    <span className="font-mono w-4 flex-shrink-0 text-gray-400">{step.n}</span>
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 my-6">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-2">Is liquidation bad MEV?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Unlike sandwich attacks, liquidations <strong>maintain the health of DeFi protocols</strong>. Without liquidators, bad debt would accumulate and lending protocols would become insolvent. The challenge is bonus calibration: too high and borrowers suffer unnecessary losses; too low and bots won't participate. Aave v3 introduced dynamic liquidation bonuses to address this.</p>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S5 EN Sandwich */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Sandwich Attack & Front-running</h2>
              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">Sandwich Attack — Direct User Exploitation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">A bot wraps a victim's large swap with its own transactions on both sides, inducing slippage and pocketing the difference. The most common and direct form of MEV harm.</p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4 my-4">
                {[
                  { badge: 'FRONT', cls: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', text: "Bot inserts 'Buy ETH' before victim's Tx → drives ETH price up" },
                  { badge: 'VICTIM', cls: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', text: "Victim's Tx executes at the inflated price — slippage tolerance fully consumed" },
                  { badge: 'BACK', cls: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', text: "Bot inserts 'Sell ETH' after victim's Tx → exits at the elevated price" },
                  { badge: 'PROFIT', cls: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', text: "Bot profit = sell price − buy price − gas. Victim suffers unintended slippage loss." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 mt-0.5 ${s.cls}`}>{s.badge}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">Front-running</h3>
              <p className="text-gray-700 dark:text-gray-300">Spotting someone's profitable transaction in the mempool, copying it, and submitting it with a higher gas fee to execute first. Generalized front-running bots automate this across any profitable target without needing to understand the underlying strategy.</p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S6 EN Flashbots */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Flashbots — Escaping the Dark Forest</h2>
              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">The Dark Forest Problem</h3>
              <p className="text-gray-700 dark:text-gray-300">As MEV grew in 2020–2021, searchers competed via <strong>Priority Gas Auctions (PGA)</strong> — bidding up gas to get transactions included first. Ethereum slowed down and gas fees spiked. This chaotic state was called the <em>"Dark Forest."</em> Flashbots emerged in late 2020 to fix it.</p>
              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">The Solution: Private Mempool + Bundle Auction</h3>
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden my-6">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">MEV-Boost Architecture</p>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {[
                      { label: 'Searcher', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                      { arrow: '→ bundle submit' },
                      { label: 'Builder', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
                      { arrow: '→ highest bid wins' },
                      { label: 'Relay', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
                      { arrow: '→ header validation' },
                      { label: 'Validator', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
                    ].map((item, i) =>
                      'arrow' in item ? (
                        <span key={i} className="text-xs text-gray-400 font-mono">{item.arrow}</span>
                      ) : (
                        <span key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium ${item.color}`}>{item.label}</span>
                      )
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Searchers say: "Include this bundle, I'll pay you X ETH." Miners/validators pick the most profitable bundle. Public mempool gas wars disappear.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { title: 'Gas Spike Reduction', desc: 'No PGA means fewer failed transactions and less network congestion.' },
                  { title: 'Zero Failure Cost', desc: "If a bundle isn't included, no gas is consumed. Searchers can try freely." },
                  { title: '+60–100% Validator APY', desc: 'MEV-Boost is estimated to have increased validator annual yields by 60–100% over base staking rewards.' },
                  { title: 'Transparency', desc: 'Flashbots publishes extracted MEV data publicly at mev-explore.flashbots.net.' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">MEV-Share: Users Get a Cut Too</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Flashbots' <strong>MEV-Share</strong> lets users receive a portion of the MEV generated from their own transactions. Searchers can use MEV-Share transactions to extract MEV, but must return some of the profit to the original user as a kickback. This is Flashbots' vision of "ethical MEV."
              </p>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S7 EN Players */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · MEV Ecosystem Players</h2>
              <div className="grid md:grid-cols-2 gap-4 my-8">
                {[
                  { icon: '🔍', bg: 'bg-blue-100 dark:bg-blue-900/40', title: 'Searcher', role: 'MEV hunting · bundle creation', desc: 'Bot operators who monitor the public mempool in real time. Victim transactions are detected in the public mempool; the searcher\'s own attack bundle is submitted privately via Flashbots — never touching the public mempool. Mempool access comes from direct Ethereum node subscriptions or paid stream services like bloXroute or Blocknative.' },
                  { icon: '🏗', bg: 'bg-green-100 dark:bg-green-900/40', title: 'Block Builder', role: 'Block assembly · auction participation', desc: 'Assembles the most profitable block from bundles received by multiple searchers, then submits it to a relay via auction. Major builders: Flashbots, BloXroute, Rsync.' },
                  { icon: '⚡', bg: 'bg-amber-100 dark:bg-amber-900/40', title: 'Relay', role: 'Trust intermediary · validation', desc: 'Solves the trust gap between builders and validators. Validates proposed blocks and exposes only the header to validators first (pay-for-reveal). Active relays: Flashbots Relay, Ultrasound, Agnostic.' },
                  { icon: '✅', bg: 'bg-purple-100 dark:bg-purple-900/40', title: 'Validator', role: 'Block proposal · revenue collection', desc: "With MEV-Boost, validators don't build blocks — they win the highest relay auction bid, sign the block, and broadcast it. MEV revenue stacks on top of base staking rewards." },
                ].map((p, i) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${p.bg}`}>{p.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">{p.title}</h3>
                        <p className="text-xs text-gray-400 font-mono">{p.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S8 EN Four-way connection */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · The Four-Way Connection — The Full Engine</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Flash loans, Flashbots, liquidations, and arbitrage look like separate concepts — but real MEV bots combine all four <strong>within a single transaction</strong>.
              </p>
              <div className="space-y-4 my-6">
                {[
                  { step: 'Detect', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', desc: 'The bot monitors the mempool and on-chain state, identifying liquidatable positions or DEX price gaps.' },
                  { step: 'Fund', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', desc: 'Flash loan provides the required capital instantly with no collateral. Millions of dollars become accessible to anyone.' },
                  { step: 'Execute', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300', desc: 'Liquidation or arbitrage executes within the same transaction, followed by flash loan repayment. If it fails, everything reverts — no principal loss.' },
                  { step: 'Submit Privately', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', desc: 'Flashbots bundle is submitted privately — invisible to competing bots, and no gas wasted on failure.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 mt-0.5 ${item.color}`}>{item.step}</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 my-6">
                <p className="font-mono text-xs text-gray-400 mb-4 uppercase tracking-wider">One Transaction Flow</p>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-green-400">// 1. Acquire capital via flash loan</p>
                  <p className="text-white">flashLoan(token: USDC, amount: 10_000_000)</p>
                  <p className="text-green-400 mt-2">// 2. Execute arbitrage or liquidation</p>
                  <p className="text-white">arbitrage(dexA, dexB) <span className="text-gray-500">// or liquidate(position)</span></p>
                  <p className="text-green-400 mt-2">// 3. Repay flash loan</p>
                  <p className="text-white">repay(token: USDC, amount: 10_000_000 + fee)</p>
                  <p className="text-green-400 mt-2">// 4. Failure = full revert, no loss</p>
                  <p className="text-gray-500">// → Submitted privately via Flashbots bundle</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  Remove any one of these four pieces and the structure weakens. Without flash loans you need capital. Without Flashbots you're exposed to competing bots. Without liquidations or arbitrage there's no opportunity at all. Together, they make it possible for a capital-less individual to extract tens of millions in MEV.
                </p>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S9 EN Participation */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · How Individuals Can Participate</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {[
                  { level: 'ENTRY', cls: 'text-green-700 dark:text-green-400', title: 'Protect Against MEV', desc: 'Change your RPC to rpc.flashbots.net to prevent mempool exposure and avoid sandwich attacks.' },
                  { level: 'ENTRY', cls: 'text-green-700 dark:text-green-400', title: 'Liquid Staking', desc: 'Earn an indirect share of MEV via Lido or Rocket Pool. stETH APY already reflects validator MEV earnings.' },
                  { level: 'INTERMEDIATE', cls: 'text-amber-700 dark:text-amber-400', title: 'Build a Searcher Bot', desc: 'Subscribe to the mempool with ethers.js or web3.py and build a bundle submission pipeline via the Flashbots SDK.' },
                  { level: 'INTERMEDIATE', cls: 'text-amber-700 dark:text-amber-400', title: 'MEV-Share', desc: "Participate in Flashbots' ethical MEV ecosystem via the Matchmaker API — share profits with users." },
                  { level: 'ADVANCED', cls: 'text-red-700 dark:text-red-400', title: 'Solo Validator', desc: '32+ ETH required. Configure MEV-Boost to automatically collect relay auction revenue on top of staking rewards.' },
                  { level: 'ADVANCED', cls: 'text-red-700 dark:text-red-400', title: 'Block Builder', desc: 'High-performance servers, dedicated networking, multiple relay connections. Very high capital and infrastructure bar.' },
                ].map((c, i) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <p className={`font-mono text-xs font-semibold tracking-wide mb-2 ${c.cls}`}>{c.level}</p>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{c.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S10 EN Good or bad */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · Is MEV Bad?</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">The Case For MEV</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Arbitrage → DEX price efficiency</li>
                    <li>• Liquidations → DeFi protocol solvency</li>
                    <li>• MEV revenue → stronger validator incentives</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-5">
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-3">The Case Against MEV</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Sandwich attacks → direct user harm</li>
                    <li>• Gas wars (PGA) → congestion and fee spikes</li>
                    <li>• Builder/relay centralization → censorship risk</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                The Ethereum community is researching protocol-level solutions: <strong>SUAVE</strong>, <strong>Inclusion Lists</strong>, and <strong>Encrypted Mempools</strong>. The direction isn't eliminating MEV — it's distributing it fairly and managing it transparently.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  MEV is an unavoidable property of any public, decentralized system. Understanding it is the first step to using DeFi wisely.
                </p>
              </div>

              <hr className="border-gray-200 dark:border-gray-700 my-10" />

              {/* S11 EN */}
              <h2 className="text-3xl font-bold mt-12 mb-2 text-gray-900 dark:text-white">11 · Real-World Case: The $50M Aave Swap Incident</h2>
              <p className="text-sm font-mono text-gray-400 mb-6">March 12, 2026 · Ethereum Mainnet</p>
              <p className="text-gray-700 dark:text-gray-300">
                Every concept covered in this article — AMM price impact, sandwich attacks, flash loans, Flashbots — converged in a single transaction. Someone used Aave's Collateral Swap feature to exchange <strong>$50,432,688 worth of <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">aEthUSDT</code> — Aave's yield-bearing USDT deposit token — for AAVE tokens</strong>, and received just <strong>327 AAVE worth roughly $36,000</strong>. They had effectively destroyed $49.96 million.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
                {[
                  { label: 'Amount In', value: '$50.4M', sub: 'USDT' },
                  { label: 'Amount Out', value: '$36K', sub: '327 AAVE' },
                  { label: 'Total MEV Extracted', value: '$43M+', sub: 'Among largest ever in a single Tx' },
                  { label: 'SushiSwap Pool Liquidity', value: '$73K', sub: '1/1,000th of the order size' },
                ].map((s, i) => (
                  <div key={i} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                    <p className="text-xs font-mono text-gray-400 mb-1">{s.label}</p>
                    <p className="text-2xl font-bold text-red-800 dark:text-red-300">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* BOX: Aave is a lending protocol — why was it used for a swap? EN */}
              <div className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
                <p className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                  <span className="text-lg">🏦</span> Aave is a lending protocol — so why was it used for a swap?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Correct. Aave is fundamentally a <strong>lending and borrowing protocol</strong>. Here's the key: <strong>when you deposit USDT into Aave, your USDT is locked inside the smart contract — it leaves your wallet.</strong> In return, Aave mints <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">aEthUSDT</code>, a yield-bearing "deposit receipt" token whose balance automatically grows as interest accrues.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3 text-sm font-mono text-gray-600 dark:text-gray-300 my-3">
                  Deposit USDT → USDT leaves wallet → <code className="text-amber-700 dark:text-amber-300">aEthUSDT</code> minted (receipt token)
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  The victim wasn't initiating a traditional swap. Their wallet held <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">aEthUSDT</code> — not USDT — because they had already deposited into Aave earlier. To switch that collateral to AAVE tokens, they used Aave's <strong>Collateral Swap</strong> feature in a single click.
                </p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What "Collateral Swap" actually does under the hood</p>
                  <div className="space-y-2">
                    {[
                      { n: '1', text: 'Unwrap aEthUSDT → USDT (redeem from Aave deposit)', color: 'text-gray-600 dark:text-gray-400' },
                      { n: '2', text: 'Swap USDT → WETH → AAVE (routed through CoW Protocol → Uniswap V3 → SushiSwap)', color: 'text-red-600 dark:text-red-400' },
                      { n: '3', text: 'Re-deposit AAVE into Aave → receive aEthAAVE', color: 'text-gray-600 dark:text-gray-400' },
                    ].map((s, i) => (
                      <div key={i} className={`flex items-start gap-3 text-sm ${s.color}`}>
                        <span className="font-mono text-gray-400 w-4 flex-shrink-0">{s.n}</span>
                        <span>{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  These three steps were bundled into a single "Collateral Swap" button. Aave didn't become a DEX — it abstracted a complex multi-protocol flow into a one-click action. <strong>That abstraction made it nearly impossible for the user to perceive the liquidity risk buried inside the routing path.</strong> This is the second major criticism of the incident beyond the warning dialog.
                </p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Transaction Flow</h3>
              <div className="overflow-x-auto my-4">
                <div className="flex items-stretch min-w-max">
                  {[
                    { label: 'aEthUSDT', sub: 'Aave deposit token', color: 'border-gray-300 dark:border-gray-600' },
                    null,
                    { label: 'USDT Unwrap', sub: 'Redeemed from Aave', color: 'border-gray-300 dark:border-gray-600' },
                    null,
                    { label: 'WETH', sub: 'via Uniswap V3', color: 'border-blue-400' },
                    null,
                    { label: '327 AAVE', sub: 'SushiSwap ($73K pool)', color: 'border-red-400', bad: true },
                  ].map((step, i) =>
                    step === null ? (
                      <div key={i} className="flex items-center px-2 text-gray-400 text-sm">→</div>
                    ) : (
                      <div key={i} className={`min-w-[110px] text-center p-3 rounded-lg border text-sm ${step.color} bg-white dark:bg-gray-800`}>
                        <p className={`font-semibold text-sm ${step.bad ? 'text-red-700 dark:text-red-300' : 'text-gray-900 dark:text-white'}`}>{step.label}</p>
                        <p className="text-xs text-gray-400 mt-1">{step.sub}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* BOX: AMM Price Impact EN */}
              <div className="border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 my-6">
                <p className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <span className="text-lg">📐</span> Concept: What is AMM Price Impact?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  AMMs like Uniswap use the formula <code className="bg-amber-100 dark:bg-amber-900/40 px-1.5 py-0.5 rounded text-xs">x × y = k</code> to set prices. If a pool has 100 Token A and 100 Token B (k = 10,000), adding 100 more of Token B forces Token A down to 50 to maintain k — doubling Token B's price.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  The SushiSwap AAVE/WETH pool in this incident held roughly <strong>$73,000 in liquidity</strong>. Into it arrived <strong>17,958 WETH (~$37M)</strong> — over 1,000× the pool's size. By the math, AAVE's price shot to the moon: the effective buy price was about <strong>$154,000 per AAVE</strong>, versus the market price of ~$114.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-xs font-mono text-gray-600 dark:text-gray-400">
                  Market price $114 × 327 AAVE = ~$37,278 worth<br />
                  Actual paid: $50,432,688 → effective unit price ≈ $154,229 / AAVE
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why Wasn't It Stopped?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The Aave interface displayed an <strong>"extraordinary slippage"</strong> warning and required the user to confirm a checkbox before proceeding. The user was on a mobile device and checked the box.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Aave engineer Martin Grabina made a sharper point: <em>"The core issue wasn't slippage. The user accepted a quote that already showed 99% price impact."</em> The catastrophic result was visible in the quote before execution — the user saw it and clicked confirm.
              </p>

              {/* BOX: Slippage vs Price Impact EN */}
              <div className="border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 my-6">
                <p className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <span className="text-lg">🔍</span> Concept: Slippage vs. Price Impact
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Slippage</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Price moves <em>after</em> you submit your order because other transactions execute first. You quoted 2,000 USDC but settled at 2,010 USDC. MEV front-running is the main cause.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Price Impact</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Price moves because of the <em>size of your own order</em>. This is what happened here. The 99% loss was already baked into the quote. The problem wasn't market movement — it was the <strong>order size itself</strong>.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">CoW Swap stated clearly: "There is no indication of a protocol exploit or malicious activity. The transaction executed according to the parameters of the signed order." Technically, everything worked exactly as designed.</p>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                Forbes drew the comparison to traditional finance: "A normal brokerage would have flagged this at a compliance screen. Coinbase or Binance would have blocked it with a price deviation check. DeFi's inability to stop anyone is its feature and the cause of this incident."
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Where Did the $50M Go?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">The $50M didn't disappear. It was precisely redistributed:</p>
              <div className="space-y-3 my-6">
                {[
                  { who: 'Titan Builder', amount: '~$34M', pct: '68%', color: 'bg-red-500', desc: 'Sandwich attack via Flashbots bundle', badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
                  { who: 'Second MEV Bot', amount: '~$10M', pct: '20%', color: 'bg-orange-400', desc: 'Separate MEV extraction', badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' },
                  { who: 'Aave Protocol', amount: '~$600K', pct: '1.2%', color: 'bg-blue-400', desc: 'Protocol fees (refund later offered)', badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                  { who: 'User Received', amount: '~$36K', pct: '0.07%', color: 'bg-gray-400', desc: '327 AAVE tokens', badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-32 flex-shrink-0">
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div className={`h-full rounded-full ${row.color}`} style={{ width: row.pct }} />
                      </div>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded flex-shrink-0 ${row.badge}`}>{row.amount}</span>
                    <span className="font-semibold text-sm text-gray-900 dark:text-white flex-shrink-0">{row.who}</span>
                    <span className="text-xs text-gray-400">{row.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Arkham and BlockSec figures differ slightly ($32M–$34M for Titan Builder), but the combined $43M+ extracted in a single transaction ranks among the largest MEV harvests ever recorded.</p>

              {/* Titan Builder identity EN */}
              <div className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8 space-y-4">
                <p className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
                  <span className="text-lg">🏗️</span> Titan Builder — Who (or What) Is It?
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Titan Builder is one of the <strong>top block builders in Ethereum's PBS ecosystem</strong>, consistently winning <strong>25–40% of all Ethereum blocks</strong> since launching in 2023. It competes alongside Flashbots Builder, BloXroute, Beaver Builder, and a handful of others that together produce the vast majority of Ethereum blocks.
                </p>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Ethereum Block Builder Market Share (2025–2026, approximate)</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Titan Builder', pct: '30–40%', bar: 'w-10/12', color: 'bg-red-400' },
                      { name: 'Flashbots Builder', pct: '20–30%', bar: 'w-8/12', color: 'bg-orange-400' },
                      { name: 'BloXroute', pct: '10–15%', bar: 'w-4/12', color: 'bg-blue-400' },
                      { name: 'Others', pct: 'Remainder', bar: 'w-3/12', color: 'bg-gray-400' },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-36 flex-shrink-0 text-gray-700 dark:text-gray-300 text-xs">{b.name}</span>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                          <div className={`${b.bar} ${b.color} h-2 rounded-full`} />
                        </div>
                        <span className="w-16 text-xs text-gray-500 text-right">{b.pct}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">* Approximate figures based on mevboost.pics data; varies over time.</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">The Key — Titan Builder Is Both a Builder AND a Searcher</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Most builders claim neutrality: "We just accept Searcher bundles and build blocks." Titan Builder is different — it <strong>also operates its own MEV extraction bots</strong>. It simultaneously accepts external Searcher bundles while directly hunting MEV opportunities itself.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                      This was decisive in this incident. Because Titan Builder <strong>assembles the block itself</strong>, it can place its own sandwich bundle in exactly the right position: front-run Tx → victim Tx → back-run Tx. An ordinary Searcher submits a bundle and hopes the Builder includes it; Titan Builder <strong>guarantees its own ordering</strong> by being the Builder.
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">The Conflict of Interest Problem</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      A Builder that also runs searcher bots creates a fundamental conflict of interest. When external Searchers submit bundles, Titan can see those opportunities first and potentially front-run them with its own bot. This incident reignited Ethereum community debate around mandatory Builder neutrality and transparency requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* How Titan made $34M EN */}
              <div className="border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10 rounded-xl p-6 my-6 space-y-4">
                <p className="font-bold text-red-800 dark:text-red-300 text-base">💰 How Did Titan Builder Make $34M?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  A sandwich attack's profit is simple in principle: <strong>buy cheap before the victim, let the victim inflate the price, sell high after</strong>. The bigger the victim's order and the thinner the pool liquidity, the more profit. This incident hit both extremes simultaneously.
                </p>
                <div className="bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Profit Mechanics</p>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex gap-3">
                      <span className="text-orange-500 font-bold flex-shrink-0">FRONT</span>
                      <div>Flash loan $29M WETH from Morpho → buy AAVE on Bancor → manipulate the SushiSwap AAVE/WETH pool price (AAVE artificially spiked from $114 to many multiples above market)</div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-red-500 font-bold flex-shrink-0">VICTIM</span>
                      <div>Victim's 17,958 WETH ($37M) hits the already-distorted pool → AMM formula resolves to ~$154,229/AAVE → victim receives only 327 AAVE for $37M of WETH</div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-green-600 font-bold flex-shrink-0">BACK</span>
                      <div>Victim's WETH floods the pool → Titan sells its AAVE back into the WETH-heavy pool at an elevated rate → repays Morpho flash loan → <strong>~$34M net profit</strong></div>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50 dark:bg-red-900/20 rounded p-3 text-xs font-mono text-gray-600 dark:text-gray-300">
                    Key: victim's $37M WETH absorbed all AAVE from the pool<br />
                    → AAVE Titan pre-bought surged in value<br />
                    → Titan sold at peak, repaid flash loan → kept the spread
                  </div>
                </div>
                {/* Price impact only vs bot EN */}
                <div className="bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">What if there was no bot? — Where does the money go from price impact alone?</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">❌ No bot — victim swaps alone</p>
                      <div className="space-y-1 text-xs font-mono">
                        <p>Victim: dumps 17,958 WETH into pool</p>
                        <p>Pool: nearly all AAVE drained</p>
                        <p>Pool now holds ~17,975 WETH</p>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">→ The loss flows to the pool's <strong>LPs (liquidity providers)</strong>. The victim effectively sold WETH cheaply and bought AAVE expensively — LPs pocket that spread. <strong>No bot profits.</strong></p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                      <p className="font-semibold mb-2 text-red-800 dark:text-red-300">✅ Bot steps in</p>
                      <div className="space-y-1 text-xs font-mono">
                        <p><span className="text-orange-500">FRONT:</span> bot buys AAVE at $114</p>
                        <p><span className="text-red-500">VICTIM:</span> victim pumps the price</p>
                        <p><span className="text-green-600">BACK:</span>  bot sells at $1,000s</p>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">→ The bot intercepts the value that would have gone to LPs. The victim's giant order <strong>acts as the pump that creates the bot's profit</strong>.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                    One sentence: the victim's large order pumped the price, the bot bought <em>before</em> the pump and sold <em>after</em>. The victim's own money financed the bot's profit.
                  </p>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Typical sandwich attacks net thousands to low millions. The reason this reached $34M is that the <strong>victim's order ($37M) was ~500× the pool's total liquidity ($73K)</strong>. The AMM formula requires AAVE's price to rise over 1,350× to restore equilibrium — which is exactly what happened.
                </p>
              </div>

              {/* Second bot $10M EN */}
              <div className="border border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/10 rounded-xl p-6 my-6 space-y-4">
                <p className="font-bold text-orange-800 dark:text-orange-300 text-base">💰 How Did the Second MEV Bot Make $10M?</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  While Titan Builder's sandwich executed, AAVE's price on SushiSwap briefly spiked to ~$154,000 — roughly 1,350× the market price. This <strong>price distortion existed momentarily within the same block</strong>, and a second independent bot captured it separately.
                </p>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Two Likely Profit Routes (possibly concurrent)</p>
                    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                      <div>
                        <p className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Route A — Cross-DEX Arbitrage</p>
                        <p className="leading-relaxed">While SushiSwap showed AAVE at $154K, every other DEX (Uniswap, Curve, etc.) still priced it at ~$114. The second bot spotted this gap and executed: <strong>buy AAVE cheaply on another DEX → sell it at the inflated SushiSwap price</strong>. It effectively free-rode on the price distortion Titan's sandwich had created.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Route B — Lending Protocol Liquidations</p>
                        <p className="leading-relaxed">Some lending protocols reference SushiSwap pools as price oracles for AAVE. When the oracle briefly reported AAVE at $154K, loans backed by AAVE could suddenly appear <strong>over-collateralized or mis-priced</strong>, opening liquidation opportunities. A bot collecting a 5–10% liquidation bonus on AAVE positions at this temporary valuation could extract millions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4">
                    <p className="text-sm text-orange-900 dark:text-orange-200 leading-relaxed">
                      <strong>Key takeaway:</strong> One large MEV event cascades into secondary opportunities. Titan's sandwich created a price distortion; that distortion spawned arbitrage and liquidation opportunities that a second bot monetized for another $10M. MEV isn't a single explosion — it's a <strong>chain reaction</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* BOX: MEV Bot Execution EN */}
              <div className="border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 my-6">
                <p className="font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">
                  <span className="text-lg">⚙️</span> MEV Bot in Action — Flash Loan + Sandwich (One Transaction)
                </p>
                <div className="space-y-3">
                  {[
                    { n: '1', label: 'FLASH LOAN', text: 'Borrow $29M WETH from Morpho platform (no collateral)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                    { n: '2', label: 'FRONT', text: 'Buy AAVE in bulk on Bancor → spike the AAVE/WETH price on SushiSwap', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' },
                    { n: '3', label: 'VICTIM', text: "Victim's transaction executes: 17,958 WETH → 327 AAVE at the inflated price", color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' },
                    { n: '4', label: 'BACK', text: 'Sell AAVE on SushiSwap → exit at the elevated price', color: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
                    { n: '5', label: 'REPAY', text: 'Return $29M WETH + fee to Morpho', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
                    { n: '★', label: 'NET PROFIT', text: 'Titan Builder ~$34M + second bot ~$10M — all in one atomic transaction', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', bold: true },
                  ].map((step, i) => (
                    <div key={i} className={`flex items-start gap-3 text-sm ${step.bold ? 'font-semibold' : ''}`}>
                      <span className="font-mono text-gray-400 w-4 flex-shrink-0">{step.n}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${step.color}`}>{step.label}</span>
                      <span className="text-gray-700 dark:text-gray-300">{step.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-3 border-t border-purple-200 dark:border-purple-800">This execution is a textbook combination of flash loans (S2) + sandwich attack (S5) + Flashbots private bundle (S6) — all concepts covered earlier in this post.</p>
              </div>

              {/* Shouldn't Titan Builder return the money EN */}
              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Shouldn't Titan Builder Return the Money?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Short answer: <strong>no legal obligation exists, and no funds were returned.</strong> Three reasons.</p>

              <div className="space-y-4 my-6">
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">① The protocol permitted it</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Under Ethereum PBS rules, Builders are free to order transactions within a block however they like. What Titan Builder did falls within those rules. No funds were stolen — the victim submitted a transaction with no slippage protection and the AMM formula executed as designed. No jurisdiction currently classifies MEV sandwich attacks as illegal.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">② There is no legal defendant</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Aave is a smart contract, not a company. Titan Builder does not publish its legal entity or jurisdiction. The Ethereum Foundation develops the protocol but does not operate it. Decentralization by design diffuses liability to the point where no single party can be held responsible.</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">③ No incentive to return voluntarily</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Titan Builder is a functioning commercial block builder. There is no money-laundering risk, no law-enforcement pressure, and no business reason to return funds. Community criticism followed, but had no material effect on operations.</p>
                </div>
              </div>

              {/* Comparison cases EN */}
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 my-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-4">DeFi Fund Return Precedents</p>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      name: 'Poly Network Hack (2021)',
                      amount: '$611M',
                      returned: 'Fully returned',
                      returnColor: 'text-green-600 dark:text-green-400',
                      reason: "Hacker claimed it was a 'technical demonstration.' In practice, funds were too large to launder, and on-chain negotiations with the dev team were public. High law-enforcement traceability.",
                      mev: false,
                    },
                    {
                      name: 'Euler Finance Hack (2023)',
                      amount: '$197M',
                      returned: 'Fully returned',
                      returnColor: 'text-green-600 dark:text-green-400',
                      reason: 'Hacker returned funds after recognizing FBI tracking. Some attribute the decision to on-chain messages from victims who lost life savings.',
                      mev: false,
                    },
                    {
                      name: 'Curve Finance Hack (2023)',
                      amount: '$73M',
                      returned: 'Partial (~$52M)',
                      returnColor: 'text-amber-600 dark:text-amber-400',
                      reason: 'Some white-hat bots front-ran the hacker and extracted funds first, then returned them. Remainder unrecovered. A rare case where MEV bots acted as a protective mechanism.',
                      mev: true,
                    },
                    {
                      name: 'Aave $50M Sandwich (2026)',
                      amount: '$43M+',
                      returned: 'Not returned',
                      returnColor: 'text-red-600 dark:text-red-400',
                      reason: 'Legal MEV extraction within protocol rules. No legal obligation. Aave governance only discussed refunding ~$600K in protocol fees.',
                      mev: true,
                    },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">{c.name}</span>
                          {c.mev && <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">MEV-related</span>}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.reason}</p>
                      </div>
                      <div className="text-right flex-shrink-0 w-28">
                        <p className="font-mono text-xs text-gray-500">{c.amount}</p>
                        <p className={`text-xs font-semibold ${c.returnColor}`}>{c.returned}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">Voluntary returns share three common factors: ① funds were too large to launder, ② law-enforcement tracking was visible, or ③ there was a negotiated incentive. This incident meets none of those conditions.</p>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Money Laundering Theory</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Within hours, the community was asking: was this a mistake, or an intentional money laundering scheme?</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-xl p-5">
                  <p className="font-bold text-yellow-800 dark:text-yellow-300 mb-3">Circumstantial Evidence</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Wallet was brand new, created Feb 20 — no prior on-chain activity</li>
                    <li>• Analysts traced 13 connected wallets that received funds from Binance Feb 16–20</li>
                    <li>• Funds moved internally and consolidated into two new addresses before the swap</li>
                    <li>• On-chain tracer LookOnChain claimed one wallet shared a Binance deposit address with a trader named Garrett Jin</li>
                    <li>• Theoretically: if wallet A and MEV bot B are the same person, losing $50M publicly could launder the origin of $44M</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-xl p-5">
                  <p className="font-bold text-green-800 dark:text-green-300 mb-3">Expert Rebuttals</p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Barter CEO Nikita Ovchinnik: "There are far cleaner, more efficient, and less visible ways to move funds than a trade that immediately draws this much forensic attention"</li>
                    <li>• Aave, CoW Swap, and Lido all took fees — making this an extremely inefficient laundering vehicle</li>
                    <li>• The transaction is fully public via standard DeFi infrastructure — the worst possible choice if the goal is to obscure a trail</li>
                    <li>• Analyst 0xngmi: "A galaxy-brained laundering scheme vs. clicking confirm on a checkbox — which is the simpler explanation?"</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Aave's Response</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl flex-shrink-0">🛡</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Aave Shield Announced</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A new protection mechanism that <strong>automatically blocks swaps with price impact exceeding 25%</strong>. This incident was the direct catalyst.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-2xl flex-shrink-0">💸</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">$600K Fee Refund Offered</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Aave founder Stani Kulechov reached out to the victim and offered to refund the ~$600,000 in protocol fees collected on the trade. 1.2% of the loss — symbolic, but notable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <div>
                    <p className="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">Another Major Incident the Day Before</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">The day before this swap, a wstETH oracle price mismatch on Aave triggered <strong>~$27M in erroneous liquidations</strong> across 34 accounts. Two major incidents in two consecutive days.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Three Lessons From This Incident</h3>
              <div className="space-y-4 my-6">
                {[
                  {
                    num: '①',
                    title: 'Liquidity Is the Best User Protection',
                    desc: "No protocol and no aggregator can produce a fair price when you route $50M through a $73K pool. As CZ put it: \"liquidity is the best user protection\" — and this incident is the proof.",
                    color: 'border-l-blue-500',
                  },
                  {
                    num: '②',
                    title: 'The MEV Ecosystem Is Fully Operational',
                    desc: "Titan Builder extracting $34M proves that every mechanism covered in this post — flash loan capital, sandwich price manipulation, Flashbots private bundle submission — executes in real time, automatically, on any sufficiently large opportunity.",
                    color: 'border-l-purple-500',
                  },
                  {
                    num: '③',
                    title: '"Consent ≠ Protection"',
                    desc: 'Showing a warning doesn\'t mean the user understood it. Forbes was direct: "Most DeFi interfaces still do not hard-block trades where the expected outcome is a near-total loss." Aave Shield is the industry\'s first meaningful step toward closing that gap.',
                    color: 'border-l-red-500',
                  },
                ].map((item, i) => (
                  <div key={i} className={`pl-4 border-l-4 ${item.color}`}>
                    <p className="font-bold text-gray-900 dark:text-white text-sm mb-1"><span className="mr-1">{item.num}</span>{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray:400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
                References: Flashbots Docs · MEV-Explore · EigenPhi · Ethresearch · Paradigm Research · Aave Docs<br />
                Data as of 2024 public figures; subject to change with market conditions
              </p>
            </>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            {copy.backToBlog}
          </Link>
        </div>
      </article>
    </div>
  );
}
