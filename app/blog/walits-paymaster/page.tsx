'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WalitsPaymasterPage() {
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
          <div className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '가스리스 · EIP-3009' : 'Gasless · EIP-3009'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'Walits 가스리스 USDC — ETH 없이 전송하는 두 가지 방법: EIP-3009 릴레이어(현재)와 ERC-4337 Paymaster(로드맵)'
              : 'Walits Gasless USDC — Two Ways to Transfer Without ETH: EIP-3009 Relayer (Live) and ERC-4337 Paymaster (Roadmap)'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? '"USDC는 있는데 ETH가 없어서 전송이 안 된다." Walits는 이 문제를 EIP-3009 서명 기반 릴레이어로 이미 해결했다. 사용자가 서명만 하면 Walits 릴레이어가 가스를 대신 낸다. ERC-4337 Paymaster는 더 강력한 다음 단계다.'
              : '"I have USDC but can\'t transfer because I have no ETH." Walits already solves this with an EIP-3009 signature-based relayer. Users just sign — Walits relayer pays the gas. ERC-4337 Paymaster is the more powerful next step.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 7월 25일' : 'July 25, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '15분 읽기' : '15 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/ico-wallet.jpg" alt="Walits Gasless USDC EIP-3009 Relayer" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* TL;DR */}
        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="text-slate-400 text-xs font-mono mb-4">TL;DR</div>
          <div className="space-y-3 text-sm">
            {(isKo ? [
              { status: '✅ 구현됨', item: 'EIP-3009 릴레이어', detail: '사용자가 서명 → Walits 릴레이어가 가스 대납 → ETH 0으로 USDC 전송. Base 네이티브 USDC에 바로 적용 가능.' },
              { status: '🗺 로드맵', item: 'ERC-4337 Paymaster', detail: '계정 추상화 기반. 배치 트랜잭션·세션키·Token PM(USDC로 가스 지불) 등 더 강력한 기능 포함. 현재 설계 단계.' },
              { status: '🔗 시너지', item: 'x402 에이전트 가스리스', detail: 'AI 에이전트가 x402로 API 결제 시 ETH 없이 EIP-3009 릴레이어로 USDC 결제 가능. 현재 구조로 바로 연결 가능.' },
            ] : [
              { status: '✅ Live', item: 'EIP-3009 Relayer', detail: 'User signs → Walits relayer pays gas → USDC transfer with 0 ETH. Directly applicable to Base native USDC.' },
              { status: '🗺 Roadmap', item: 'ERC-4337 Paymaster', detail: 'Account abstraction based. Includes more powerful features: batch transactions, session keys, Token PM (pay gas in USDC). Currently in design phase.' },
              { status: '🔗 Synergy', item: 'x402 Agent Gasless', detail: 'When AI agents pay for APIs via x402, they can make USDC payments without ETH using the EIP-3009 relayer. Connectable with current structure immediately.' },
            ]).map((row, i) => (
              <div key={i} className="flex gap-3 border-t border-slate-800 pt-3 first:border-0 first:pt-0">
                <span className="text-xs font-bold w-20 shrink-0 text-amber-400">{row.status}</span>
                <div>
                  <span className="text-white font-bold text-xs">{row.item}</span>
                  <span className="text-slate-400 text-xs"> — {row.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: 문제 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 가스비 문제 — 스테이블코인 지갑의 가장 큰 UX 장벽' : '1. The Gas Problem — Biggest UX Barrier for Stablecoin Wallets'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '스테이블코인이 실생활 결제에 쓰이려면 단순해야 한다. 그런데 현실은 이렇다 — USDC 100개를 보내려면 ETH가 필요하다. "돈은 있는데 수수료가 없어서 못 쓴다"는 황당한 상황. 처음 접하는 사람에게 이건 사기처럼 느껴진다.'
              : 'Stablecoins need to be simple to work as everyday payments. But reality: sending 100 USDC requires ETH. "I have money but can\'t spend it because I have no fees." Newcomers experience this as something resembling a scam.'}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {(isKo ? [
              { icon: '❌', problem: 'ETH 없으면 USDC 못 보냄', who: '신규 사용자 이탈 원인 1위' },
              { icon: '❌', problem: '소액 결제에서 가스 > 결제금액', who: '$1 결제에 $0.5 ETH 가스비' },
              { icon: '❌', problem: 'AI 에이전트의 ETH 잔고 관리', who: '자율 운영 불가능하게 만드는 복잡성' },
            ] : [
              { icon: '❌', problem: 'No ETH = can\'t send USDC', who: 'Top reason new users abandon' },
              { icon: '❌', problem: 'Gas > payment amount for micro-tx', who: '$0.5 ETH gas on a $1 payment' },
              { icon: '❌', problem: 'AI agent ETH balance management', who: 'Complexity that breaks autonomous operation' },
            ]).map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-slate-700 text-sm mb-1">{item.problem}</div>
                <div className="text-xs text-slate-400">{item.who}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: EIP-3009 구현 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. Walits의 현재 해법 — EIP-3009 릴레이어 ✅ 구현됨' : '2. Walits\' Current Solution — EIP-3009 Relayer ✅ Live'}
          </h2>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-6">
            <div className="font-black text-green-800 text-lg mb-2">{isKo ? 'EIP-3009: USDC의 숨겨진 킬러 기능' : 'EIP-3009: USDC\'s Hidden Killer Feature'}</div>
            <p className="text-slate-700 text-sm leading-relaxed">
              {isKo
                ? 'EIP-3009는 USDC(ERC-20 토큰)가 지원하는 서명 기반 승인 표준이다. 핵심은 "사용자가 서명만 하면 제3자가 대신 트랜잭션을 제출할 수 있다"는 것이다. Circle의 USDC는 기본적으로 `transferWithAuthorization` 함수를 지원하며, 이를 통해 사용자는 ETH 없이 USDC를 전송할 수 있다.'
                : 'EIP-3009 is a signature-based approval standard that USDC (ERC-20 token) supports. The key: "a third party can submit the transaction on behalf of the user with just their signature." Circle\'s USDC natively supports `transferWithAuthorization`, allowing users to transfer USDC without ETH.'}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="font-bold text-slate-800 text-lg">{isKo ? 'EIP-3009 릴레이어 흐름 — 3단계' : 'EIP-3009 Relayer Flow — 3 Steps'}</div>
            {[
              {
                step: '1',
                color: 'bg-blue-600',
                title: isKo ? '사용자: 서명만 한다 (ETH 불필요)' : 'User: Just signs (no ETH needed)',
                desc: isKo
                  ? 'USDC transferWithAuthorization 메시지에 서명한다. "X 주소에게 100 USDC를 보낸다"는 내용과 유효 기간, nonce가 포함된 EIP-712 구조체에 서명. 이 서명 행위는 블록체인 트랜잭션이 아니므로 가스가 전혀 들지 않는다.'
                  : 'Signs the USDC transferWithAuthorization message. Signs an EIP-712 struct containing "send 100 USDC to address X," expiry, and nonce. This signing action is not a blockchain transaction — zero gas cost.',
                code: '// 사용자 서명 (가스 없음)\nconst sig = await wallet.signTypedData({\n  domain: USDC_DOMAIN,\n  types: { TransferWithAuthorization: [...] },\n  value: {\n    from, to, value: 100_000000n,\n    validBefore: expiry, nonce\n  }\n})',
              },
              {
                step: '2',
                color: 'bg-orange-600',
                title: isKo ? 'Walits 릴레이어: 서명된 트랜잭션을 블록체인에 제출' : 'Walits Relayer: Submits signed transaction to blockchain',
                desc: isKo
                  ? 'Walits 릴레이어 지갑이 사용자의 서명을 받아 `transferWithAuthorization(from, to, value, validBefore, nonce, v, r, s)`를 온체인에서 실행한다. 이 트랜잭션의 가스비는 릴레이어의 ETH 잔고에서 지불된다. 사용자는 아무것도 부담하지 않는다.'
                  : 'Walits relayer wallet takes the user\'s signature and executes `transferWithAuthorization(from, to, value, validBefore, nonce, v, r, s)` on-chain. Gas for this transaction is paid from the relayer\'s ETH balance. User pays nothing.',
                code: '// 릴레이어가 가스 지불 (relayer\'s ETH)\nawait usdcContract.transferWithAuthorization(\n  from, to, value,\n  validBefore, nonce,\n  v, r, s  // 사용자 서명\n)',
              },
              {
                step: '3',
                color: 'bg-green-600',
                title: isKo ? '결과: 사용자 ETH 0, USDC 전송 완료' : 'Result: User ETH 0, USDC transfer complete',
                desc: isKo
                  ? 'USDC가 목적지로 전송됐다. 사용자 지갑에서 ETH는 한 푼도 빠지지 않았다. 가스비는 Walits 릴레이어가 부담했다. 사용자 입장에서는 서명 하나로 모든 것이 끝났다.'
                  : 'USDC transferred to destination. Not a single ETH left the user\'s wallet. Gas paid by Walits relayer. From the user\'s perspective: one signature, done.',
                code: '// 결과\nuser.USDC: 100 → 0 (전송됨)\nuser.ETH: 0 → 0 (변화 없음)\nrelayer.ETH: 차감 (가스비)\nrecipient.USDC: +100 ✓',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className={`${item.color} text-white px-5 py-3 flex items-center gap-3`}>
                  <span className="font-black text-lg w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm">{item.step}</span>
                  <span className="font-bold text-sm">{item.title}</span>
                </div>
                <div className="p-5 grid md:grid-cols-2 gap-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  <pre className="bg-slate-900 text-green-400 text-xs p-3 rounded-lg font-mono leading-relaxed overflow-x-auto">{item.code}</pre>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="font-bold text-amber-800 mb-2">{isKo ? 'EIP-3009의 핵심 장점과 제약' : 'EIP-3009 key advantages and constraints'}</div>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-semibold text-green-700 mb-2">{isKo ? '장점' : 'Advantages'}</div>
                {(isKo ? [
                  '프로토콜 변경 없이 바로 동작 — USDC 자체 기능',
                  'Base 네이티브 USDC에 바로 적용 가능',
                  '릴레이어 구현만으로 즉시 가스리스 실현',
                  'ERC-4337보다 단순한 인프라',
                ] : [
                  'Works immediately without protocol changes — USDC native feature',
                  'Directly applicable to Base native USDC',
                  'Gasless realized with relayer implementation alone',
                  'Simpler infrastructure than ERC-4337',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-1 mb-1 text-slate-600"><span className="text-green-500">✓</span>{item}</div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-red-700 mb-2">{isKo ? '제약' : 'Constraints'}</div>
                {(isKo ? [
                  'USDC 전송에만 적용됨 (다른 DeFi 컨트랙트 호출 불가)',
                  '배치 트랜잭션 불가 (1 서명 = 1 전송)',
                  '릴레이어 ETH 잔고 관리 필요',
                  'Token Paymaster 불가 (USDC로 가스 정산 안 됨)',
                ] : [
                  'Only applies to USDC transfers (no other DeFi contract calls)',
                  'No batch transactions (1 signature = 1 transfer)',
                  'Relayer ETH balance management required',
                  'No Token Paymaster (can\'t settle gas in USDC)',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-1 mb-1 text-slate-500"><span className="text-red-400">·</span>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: EIP-3009 vs ERC-4337 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '3. EIP-3009 릴레이어 vs ERC-4337 Paymaster — 무엇이 다른가' : '3. EIP-3009 Relayer vs ERC-4337 Paymaster — What\'s the Difference?'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '사용자 경험은 비슷하지만("ETH 없이 USDC 전송"), 내부 구조와 기능 범위는 크게 다르다. EIP-3009는 실용적인 지금 당장의 해법이고, ERC-4337은 더 넓은 범위를 커버하는 미래 표준이다.'
              : 'The user experience is similar ("transfer USDC without ETH"), but internal structure and feature scope differ significantly. EIP-3009 is the pragmatic solution for right now; ERC-4337 is the future standard with broader coverage.'}
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-500 font-semibold w-40">{isKo ? '항목' : 'Item'}</th>
                  <th className="text-left py-3 px-4 text-orange-700 font-bold">EIP-3009 릴레이어<br/><span className="text-green-600 font-normal text-xs">✅ Walits 구현됨</span></th>
                  <th className="text-left py-3 px-4 text-blue-700 font-bold">ERC-4337 Paymaster<br/><span className="text-slate-400 font-normal text-xs">🗺 Walits 로드맵</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {(isKo ? [
                  ['작동 원리', '사용자 서명 → 릴레이어가 대신 제출', 'UserOperation → Bundler → EntryPoint → Paymaster'],
                  ['가스 부담', 'Walits 릴레이어 ETH 부담', 'Sponsored PM: Walits 부담 / Token PM: USDC 차감'],
                  ['USDC로 가스 지불', '불가 (릴레이어가 ETH 선납)', '✓ Token Paymaster로 가능'],
                  ['배치 트랜잭션', '✗ (1서명 = 1전송)', '✓ 여러 작업을 1 UO에 묶기 가능'],
                  ['DeFi 컨트랙트 지원', '✗ USDC 전송만', '✓ 모든 컨트랙트 호출'],
                  ['세션 키', '✗', '✓ (제한된 자율 서명 위임)'],
                  ['구현 복잡도', '낮음 (릴레이어 서버 구축)', '높음 (스마트 컨트랙트 + 번들러)'],
                  ['현재 상태', '✅ 운영 중', '🗺 설계 단계'],
                ] : [
                  ['Mechanism', 'User signs → relayer submits on behalf', 'UserOperation → Bundler → EntryPoint → Paymaster'],
                  ['Gas burden', 'Walits relayer pays ETH', 'Sponsored PM: Walits pays / Token PM: USDC deducted'],
                  ['Pay gas in USDC', 'Not possible (relayer pre-pays ETH)', '✓ Possible via Token Paymaster'],
                  ['Batch transactions', '✗ (1 sig = 1 transfer)', '✓ Bundle multiple ops into 1 UO'],
                  ['DeFi contract support', '✗ USDC transfer only', '✓ Any contract call'],
                  ['Session keys', '✗', '✓ (delegated limited autonomous signing)'],
                  ['Implementation complexity', 'Low (relayer server)', 'High (smart contracts + bundler)'],
                  ['Current status', '✅ In production', '🗺 Design phase'],
                ]).map((row, i) => (
                  <tr key={i}>
                    <td className="py-2 px-4 text-slate-700 font-medium">{row[0]}</td>
                    <td className="py-2 px-4 text-orange-700">{row[1]}</td>
                    <td className="py-2 px-4 text-blue-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="font-bold text-slate-800 mb-2">{isKo ? '왜 EIP-3009로 먼저 시작했나' : 'Why start with EIP-3009 first?'}</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {isKo
                ? 'ERC-4337 Paymaster는 강력하지만 스마트 컨트랙트 배포, 번들러 운영, EntryPoint 통합이 필요한 복잡한 인프라다. Walits는 "지금 당장 가스리스를 제공하자"는 실용적 판단으로 USDC가 기본 지원하는 EIP-3009를 먼저 구현했다. 결과적으로 USDC 전송이라는 핵심 기능에서는 ERC-4337과 동일한 UX를 사용자에게 제공한다. ERC-4337은 DeFi 통합, 배치 처리, AI 에이전트 세션키 등 더 넓은 기능이 필요할 때 추가한다.'
                : 'ERC-4337 Paymaster is powerful but complex infrastructure requiring smart contract deployment, bundler operation, and EntryPoint integration. Walits made the pragmatic call to implement EIP-3009 first — a feature USDC natively supports — to deliver gasless right now. The result: identical UX to ERC-4337 for the core USDC transfer function. ERC-4337 gets added when broader capabilities (DeFi integration, batch processing, AI agent session keys) are needed.'}
            </p>
          </div>

          {/* 결정 프레임워크 */}
          <div className="mt-6">
            <div className="font-bold text-slate-800 mb-4 text-lg">
              {isKo ? 'EIP-3009로 충분한가, ERC-4337/EIP-7702가 필요한가? — 결정 프레임워크' : 'EIP-3009 Enough, or Do You Need ERC-4337/EIP-7702? — Decision Framework'}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {isKo
                ? 'USDC 결제·송금이 핵심 기능인 PayFi 서비스라면, ERC-4337의 복잡한 스택을 굳이 다 쌓을 필요가 없는 경우가 많다. EIP-3009만으로 가스리스 UX를 훨씬 단순하게 구현할 수 있다. 다만 "USDC 외의 임의의 스마트 컨트랙트 액션까지 가스리스로 지원해야 한다"는 요구가 생기면 그때 ERC-4337/EIP-7702 쪽을 봐야 한다.'
                : "If USDC payment and transfer is your service's core function, you often don't need to build out ERC-4337's full complex stack. EIP-3009 alone can deliver gasless UX far more simply. The inflection point: when you need gasless support for arbitrary smart contract actions beyond USDC — that's when ERC-4337/EIP-7702 becomes necessary."}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-5">
                <div className="font-black text-green-800 mb-1 text-base">✅ EIP-3009만으로 충분한 경우</div>
                <div className="text-green-700 text-xs mb-4">{isKo ? '= ERC-4337 스택 불필요' : '= No need for ERC-4337 stack'}</div>
                <div className="space-y-2">
                  {(isKo ? [
                    { label: 'PayFi 입출금', desc: 'USDC 입금·출금·전송이 주요 액션인 서비스. 서명 한 번으로 모든 게 해결된다.' },
                    { label: 'B2B 정산', desc: '기업 간 USDC 정산, 급여 지급, 구독 결제. 결제 단위가 명확하고 USDC 이동이 전부다.' },
                    { label: 'x402 API 결제', desc: 'AI 에이전트가 $0.001~$1 USDC 단위로 API를 호출·결제. 가스 대납만 있으면 충분.' },
                    { label: '스테이블코인 송금', desc: '이주 노동자 국제 송금, 소비자 간 USDC 이체. EIP-3009가 최적 경로.' },
                  ] : [
                    { label: 'PayFi deposits/withdrawals', desc: 'Services where deposit, withdrawal, and transfer are the main actions. One signature resolves everything.' },
                    { label: 'B2B settlements', desc: 'Corporate USDC settlements, payroll, subscription payments. Payment units are clear and USDC movement is everything.' },
                    { label: 'x402 API payments', desc: 'AI agents calling/paying for APIs at $0.001–$1 USDC. Gas sponsorship alone is sufficient.' },
                    { label: 'Stablecoin remittance', desc: 'Migrant worker international transfers, consumer USDC transfers. EIP-3009 is the optimal path.' },
                  ]).map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-3">
                      <div className="text-xs font-bold text-green-800 mb-0.5">{item.label}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-5">
                <div className="font-black text-blue-800 mb-1 text-base">🔵 ERC-4337 / EIP-7702가 필요한 경우</div>
                <div className="text-blue-700 text-xs mb-4">{isKo ? '= USDC 외 임의 컨트랙트 액션 필요' : '= Need arbitrary contract actions beyond USDC'}</div>
                <div className="space-y-2">
                  {(isKo ? [
                    { label: 'DeFi 가스리스 통합', desc: 'Aave 예치, Uniswap 스왑, Morpho 대출 등 ERC-20 외 컨트랙트 호출을 가스리스로. EIP-3009가 커버할 수 없는 영역.' },
                    { label: '배치 트랜잭션', desc: 'approve + swap + stake를 하나의 가스리스 UO로 묶기. 복잡한 DeFi 플로우 자동화.' },
                    { label: '세션 키 위임', desc: '게임, DApp이 사용자 대신 제한된 범위에서 자율적으로 트랜잭션 실행. 반복 서명 제거.' },
                    { label: 'USDC로 가스 직접 정산', desc: '사용자가 ETH 대신 USDC로 가스비를 내는 Token Paymaster 모델. 릴레이어가 아닌 사용자 USDC 차감 방식.' },
                  ] : [
                    { label: 'DeFi gasless integration', desc: 'Gasless contract calls to Aave deposits, Uniswap swaps, Morpho loans — beyond ERC-20. EIP-3009 cannot cover this.' },
                    { label: 'Batch transactions', desc: 'Bundle approve + swap + stake into one gasless UserOperation. Automate complex DeFi flows.' },
                    { label: 'Session key delegation', desc: 'Games, DApps execute transactions autonomously within limited scope on behalf of users. Eliminate repeated signing.' },
                    { label: 'Pay gas directly in USDC', desc: 'Token Paymaster model where users pay gas in USDC instead of ETH — USDC deducted from user, not relayer pre-pay.' },
                  ]).map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-3">
                      <div className="text-xs font-bold text-blue-800 mb-0.5">{item.label}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="font-bold text-amber-800 mb-2">
                {isKo ? '💡 판단 기준 한 줄' : '💡 One-line decision rule'}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {isKo
                  ? '"내 서비스의 핵심 액션이 USDC 이동인가?" → Yes면 EIP-3009로 시작. "USDC 이동 외에 임의의 컨트랙트 호출도 가스리스가 필요한가?" → Yes면 ERC-4337/EIP-7702 추가를 검토하라.'
                  : '"Is USDC movement the core action of my service?" → Yes: start with EIP-3009. "Do I also need gasless arbitrary contract calls beyond USDC movement?" → Yes: consider adding ERC-4337/EIP-7702.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: x402 연결 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. x402 에이전트 결제 × EIP-3009 — 지금 당장 연결 가능한 시너지' : '4. x402 Agent Payments × EIP-3009 — Synergy Connectable Right Now'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'x402 생태계에서 AI 에이전트가 API를 USDC로 결제할 때도 동일한 가스비 문제가 있다. 에이전트 지갑에 ETH가 없으면 USDC를 보낼 수 없다. 이 문제를 Walits EIP-3009 릴레이어가 바로 해결할 수 있다.'
              : 'The same gas fee problem exists in the x402 ecosystem when AI agents pay for APIs in USDC. No ETH in agent wallet = can\'t send USDC. Walits EIP-3009 relayer can solve this immediately.'}
          </p>

          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-violet-800 mb-4 text-lg">{isKo ? 'AI 에이전트 x402 가스리스 결제 흐름' : 'AI Agent x402 Gasless Payment Flow'}</div>
            <div className="space-y-2 text-sm font-mono">
              {(isKo ? [
                { step: '1', text: 'AI 에이전트 → GET /api/data', color: 'text-slate-300' },
                { step: '2', text: 'API 서버 → 402 { amount: $0.001 USDC, chain: base }', color: 'text-amber-400' },
                { step: '3', text: '에이전트 → EIP-3009 서명 생성 (ETH 불필요)', color: 'text-green-400' },
                { step: '4', text: 'Walits 릴레이어 → 서명된 USDC transferWithAuthorization 제출', color: 'text-blue-400' },
                { step: '5', text: '릴레이어가 ETH 가스 지불 → USDC 결제 완료', color: 'text-orange-400' },
                { step: '6', text: '에이전트 → 재요청 + tx hash → 데이터 수신', color: 'text-green-400' },
                { step: '→', text: '에이전트 ETH 잔고: 0. 가스 관리: Walits가 대납.', color: 'text-green-400 font-bold' },
              ] : [
                { step: '1', text: 'AI agent → GET /api/data', color: 'text-slate-300' },
                { step: '2', text: 'API server → 402 { amount: $0.001 USDC, chain: base }', color: 'text-amber-400' },
                { step: '3', text: 'Agent → generate EIP-3009 signature (no ETH needed)', color: 'text-green-400' },
                { step: '4', text: 'Walits relayer → submits signed USDC transferWithAuthorization', color: 'text-blue-400' },
                { step: '5', text: 'Relayer pays ETH gas → USDC payment complete', color: 'text-orange-400' },
                { step: '6', text: 'Agent → re-request + tx hash → receives data', color: 'text-green-400' },
                { step: '→', text: 'Agent ETH balance: 0. Gas management: Walits sponsors.', color: 'text-green-400 font-bold' },
              ]).map((row, i) => (
                <div key={i} className={`flex gap-3 ${row.color}`}>
                  <span className="text-slate-500 w-5 shrink-0 text-xs">{row.step}</span>
                  <span className="text-xs">{row.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-2">{isKo ? '지금 당장 가능한 것' : 'What\'s possible right now'}</div>
              <div className="space-y-1 text-xs text-slate-600">
                {(isKo ? [
                  'Walits 지갑을 가진 에이전트 → ETH 0으로 x402 USDC 결제',
                  'Base 네이티브 USDC — EIP-3009 바로 지원',
                  '릴레이어 API 호출로 에이전트 SDK에 통합 가능',
                  '정책 설정: 에이전트별 일일 스폰서 한도',
                ] : [
                  'Agent with Walits wallet → x402 USDC payment with 0 ETH',
                  'Base native USDC — EIP-3009 directly supported',
                  'Integrable into agent SDK via relayer API call',
                  'Policy: per-agent daily sponsor limit',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-1"><span className="text-green-500">✓</span>{item}</div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="font-bold text-blue-800 mb-2">{isKo ? 'ERC-4337 Paymaster로 추가되는 것' : 'Added with ERC-4337 Paymaster'}</div>
              <div className="space-y-1 text-xs text-slate-600">
                {(isKo ? [
                  'USDC로 가스 정산 (Token Paymaster)',
                  '에이전트 세션 키 — 제한된 자율 서명 위임',
                  '배치 x402 결제 (여러 API를 1 UO로)',
                  'DeFi 컨트랙트 통합 (Aave, Morpho 등)',
                ] : [
                  'Gas settlement in USDC (Token Paymaster)',
                  'Agent session keys — limited autonomous signing delegation',
                  'Batch x402 payments (multiple APIs in 1 UO)',
                  'DeFi contract integration (Aave, Morpho, etc.)',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-1"><span className="text-blue-500">→</span>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: PayFi 루프 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. PayFi × 릴레이어 — 에이전트가 수익으로 운영비를 조달하는 루프' : '5. PayFi × Relayer — Loop Where Agent Self-Funds Operations from Yield'}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'Walits PayFi는 USDC를 아이들 상태로 두지 않고 Aave·Morpho에서 수익을 발생시킨다. 이 수익이 x402 API 결제 재원으로 자동 사용되는 루프를 설계할 수 있다. 릴레이어가 에이전트의 가스를 대납하는 구조와 결합하면 에이전트는 진정한 자율 경제 주체가 된다.'
              : 'Walits PayFi doesn\'t let USDC sit idle — it generates yield in Aave and Morpho. A loop can be designed where this yield automatically funds x402 API payments. Combined with the relayer sponsoring agent gas, the agent becomes a truly autonomous economic entity.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '// 에이전트 자율 운영 루프' : '// Agent autonomous operation loop'}</div>
            <div className="space-y-2 text-sm">
              {(isKo ? [
                { icon: '🏦', text: '에이전트 USDC 1,000 → Walits PayFi 예치', sub: 'Aave/Morpho, 연 ~5% 수익' },
                { icon: '💹', text: '일 수익 ~$0.14 USDC 자동 발생', sub: '(1,000 × 5% / 365)' },
                { icon: '🤖', text: '에이전트가 x402로 하루 100건 API 호출', sub: '건당 $0.001 USDC = 일 $0.10' },
                { icon: '⚡', text: 'Walits 릴레이어가 API 결제 가스비 대납', sub: 'EIP-3009, 에이전트 ETH 불필요' },
                { icon: '🔄', text: 'PayFi 수익($0.14) > API 결제($0.10)', sub: '원금 손실 없이 운영비 자동 조달' },
              ] : [
                { icon: '🏦', text: 'Agent deposits 1,000 USDC → Walits PayFi', sub: 'Aave/Morpho, ~5% annual yield' },
                { icon: '💹', text: 'Daily yield ~$0.14 USDC auto-generated', sub: '(1,000 × 5% / 365)' },
                { icon: '🤖', text: 'Agent makes 100 x402 API calls per day', sub: '$0.001 USDC/call = $0.10/day' },
                { icon: '⚡', text: 'Walits relayer sponsors API payment gas', sub: 'EIP-3009, no ETH needed from agent' },
                { icon: '🔄', text: 'PayFi yield ($0.14) > API payments ($0.10)', sub: 'Operations self-funded without principal loss' },
              ]).map((item, i) => (
                <div key={i} className="flex gap-3 border-t border-slate-800 pt-3 first:border-0 first:pt-0">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-slate-200 text-xs font-semibold">{item.text}</div>
                    <div className="text-slate-500 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-green-400 font-bold">
              {isKo
                ? '결과: 에이전트가 USDC 예치금 수익으로 x402 API 비용 자동 충당 — 사람 개입 0, ETH 0'
                : 'Result: agent auto-covers x402 API costs from USDC deposit yield — 0 human involvement, 0 ETH'}
            </div>
          </div>
        </section>

        {/* Section 6: 로드맵 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 가스리스 로드맵 — EIP-3009에서 ERC-4337으로' : '6. Gasless Roadmap — From EIP-3009 to ERC-4337'}
          </h2>

          <div className="space-y-4">
            {[
              {
                phase: isKo ? '현재 ✅' : 'Now ✅',
                color: 'border-green-400 bg-green-50',
                badge: 'bg-green-600',
                title: isKo ? 'EIP-3009 릴레이어 — USDC 가스리스 전송' : 'EIP-3009 Relayer — Gasless USDC Transfer',
                items: isKo ? [
                  'Base 네이티브 USDC 가스리스 전송 지원',
                  'Walits 릴레이어가 ETH 가스 대납',
                  'x402 에이전트 결제에 바로 적용 가능',
                ] : [
                  'Base native USDC gasless transfer support',
                  'Walits relayer sponsors ETH gas',
                  'Directly applicable to x402 agent payments',
                ],
              },
              {
                phase: isKo ? '다음 단계 🗺' : 'Next 🗺',
                color: 'border-blue-300 bg-blue-50',
                badge: 'bg-blue-600',
                title: isKo ? 'ERC-4337 Sponsored Paymaster — 모든 컨트랙트 무료 가스' : 'ERC-4337 Sponsored Paymaster — Free Gas for All Contracts',
                items: isKo ? [
                  'DeFi 컨트랙트(Aave, Morpho) 호출까지 가스 대납',
                  '스폰서 정책 (일일 한도, 컨트랙트 화이트리스트)',
                  '에이전트 세션 키 지원',
                ] : [
                  'Gas sponsorship extended to DeFi contracts (Aave, Morpho)',
                  'Sponsor policies (daily limits, contract whitelists)',
                  'Agent session key support',
                ],
              },
              {
                phase: isKo ? '장기 🔭' : 'Long-term 🔭',
                color: 'border-violet-300 bg-violet-50',
                badge: 'bg-violet-600',
                title: isKo ? 'ERC-4337 Token Paymaster — USDC로 가스 직접 지불' : 'ERC-4337 Token Paymaster — Pay Gas Directly in USDC',
                items: isKo ? [
                  'ETH 대신 USDC로 가스비 직접 정산',
                  '배치 트랜잭션 (여러 작업을 1 UserOperation으로)',
                  'Walits Paymaster가 ETH 예치 → stETH 수익으로 운영비 상쇄',
                ] : [
                  'Pay gas directly in USDC instead of ETH',
                  'Batch transactions (multiple ops in 1 UserOperation)',
                  'Walits Paymaster deposits ETH → stETH yield offsets operating costs',
                ],
              },
            ].map((phase, i) => (
              <div key={i} className={`border-2 ${phase.color} rounded-2xl p-5`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`${phase.badge} text-white text-xs font-bold px-2 py-0.5 rounded`}>{phase.phase}</span>
                  <div className="font-bold text-slate-800 text-sm">{phase.title}</div>
                </div>
                <div className="space-y-1">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex gap-2 text-xs text-slate-600">
                      <span className="text-slate-400">·</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: walits 관점 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. walits 관점 — 실용주의가 만든 경쟁 우위' : '7. walits Perspective — Competitive Advantage Built by Pragmatism'}
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: '⚡',
                title: isKo ? '"지금 당장 가스리스"의 가치' : 'The value of "gasless right now"',
                desc: isKo
                  ? 'ERC-4337을 기다리는 동안 Walits는 EIP-3009로 이미 사용자에게 가스리스 경험을 제공하고 있다. 기능은 좁지만(USDC 전송만) 가장 많이 쓰이는 기능에서 완벽하게 동작한다. 완벽한 기술보다 지금 당장 동작하는 기술이 사용자에게 더 중요하다는 판단.'
                  : 'While waiting for ERC-4337, Walits is already delivering gasless experiences to users with EIP-3009. The feature is narrow (USDC transfer only) but works perfectly for the most-used function. The judgment: technology that works right now matters more to users than perfect technology.',
              },
              {
                icon: '🔗',
                title: isKo ? 'x402와 바로 연결되는 인프라' : 'Infrastructure that connects immediately to x402',
                desc: isKo
                  ? 'Walits EIP-3009 릴레이어는 x402 AI 에이전트 결제에 추가 개발 없이 연결 가능하다. 에이전트가 Walits 지갑을 사용하면 ETH 없이 x402 결제를 자동으로 처리할 수 있다. Base + USDC + 가스리스 — x402가 요구하는 스택이 이미 갖춰져 있다.'
                  : 'Walits EIP-3009 relayer connects to x402 AI agent payments without additional development. When agents use Walits wallets, they can automatically process x402 payments without ETH. Base + USDC + gasless — the stack x402 requires is already in place.',
              },
              {
                icon: '📈',
                title: isKo ? '단계적 업그레이드 전략' : 'Phased upgrade strategy',
                desc: isKo
                  ? 'EIP-3009 → ERC-4337 Sponsored → ERC-4337 Token PM 순으로 단계적으로 확장한다. 각 단계에서 새로운 사용 사례가 추가되지만, 기존 사용자의 경험은 단절 없이 이어진다. ERC-4337이 추가되면 EIP-3009 지원도 계속 유지한다 — 하위 호환성 보장.'
                  : 'Expand step by step: EIP-3009 → ERC-4337 Sponsored → ERC-4337 Token PM. Each phase adds new use cases while existing user experiences continue without interruption. When ERC-4337 is added, EIP-3009 support continues — backward compatibility guaranteed.',
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

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-2">
              {isKo ? '한 줄 정리' : 'Bottom line'}
            </div>
            <p className="text-orange-100 text-sm leading-relaxed">
              {isKo
                ? 'Walits는 EIP-3009 릴레이어로 이미 가스리스를 구현했다. ERC-4337 Paymaster가 아니어도 USDC 전송에서는 동일한 사용자 경험이 가능하다. 그리고 이 릴레이어 구조는 x402 AI 에이전트 결제에 바로 연결 가능한 인프라이기도 하다. 지금 당장 가능한 것부터, 필요한 순서대로.'
                : 'Walits has already implemented gasless via EIP-3009 relayer. The same user experience for USDC transfers is possible without ERC-4337 Paymaster. And this relayer structure is also infrastructure that connects immediately to x402 AI agent payments. Start with what\'s possible now, in the order it\'s needed.'}
            </p>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-100 pt-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="font-black text-slate-900 text-lg mb-2">
              {isKo ? 'walits — ETH 없이 USDC만으로 모든 것이 된다' : 'walits — Everything works on USDC alone, no ETH needed'}
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {isKo
                ? 'EIP-3009 가스리스 릴레이어, Base 네이티브, MPC 보안. 서명 하나로 USDC를 보내고, 받고, 수익을 내는 지갑.'
                : 'EIP-3009 gasless relayer, Base-native, MPC-secured. Sign once to send, receive, and earn yield on USDC.'}
            </p>
            <Link href="https://stable.walits.com" className="inline-block bg-orange-500 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              {isKo ? '지갑 시작하기 →' : 'Start wallet →'}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
