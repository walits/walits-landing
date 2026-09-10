'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EIP8141Page() {
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
          <div className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '이더리움 개발자 가이드' : 'Ethereum Developer Guide'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'EIP-8141 Frame Transaction 완전 정복 — EIP-86에서 시작된 9년짜리 Account Abstraction의 종착점'
              : 'EIP-8141 Frame Transaction Deep Dive — The 9-Year Account Abstraction Journey Reaches Its Destination'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'EIP-86 → ERC-4337 → EIP-3074 → EIP-7702 → EIP-8141. 이더리움이 9년에 걸쳐 Account Abstraction에 도달하는 계보를 완전 해부한다. 프레임 모드, APPROVE 오퍼코드, 원자적 배치, 2차원 가스, mempool 모델까지 — 개발자가 실제로 써야 할 모든 것.'
              : 'EIP-86 → ERC-4337 → EIP-3074 → EIP-7702 → EIP-8141. A complete breakdown of Ethereum\'s 9-year journey to Account Abstraction. Frame modes, the APPROVE opcode, atomic batching, 2D gas, and the mempool model — everything a developer actually needs.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 9월 11일' : 'September 11, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '40분 읽기' : '40 min read'}</span>
            <span>·</span>
            <span className="text-yellow-400">{isKo ? '⚠️ EIP-8141은 아직 드래프트입니다' : '⚠️ EIP-8141 is still a Draft'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/eip8141.jpg" alt="EIP-8141 Frame Transaction" fill className="object-cover" />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-slate max-w-none">

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-10">
            <p className="text-yellow-800 text-sm leading-relaxed m-0">
              {isKo
                ? '⚠️ EIP-8141은 2026년 9월 기준 활발히 논의·수정 중인 드래프트입니다. opcode 번호, 스택 순서, 가스 모델이 PR 병합에 따라 계속 바뀌고 있습니다. 이 글은 현재까지 병합된 사양(current-spec)을 기준으로 작성했습니다.'
                : '⚠️ As of September 2026, EIP-8141 is an actively evolving draft. Opcode numbers, stack ordering, and the gas model continue to change with PR merges. This article is based on the current merged spec.'}
            </p>
          </div>

          {/* ── Section 1: The Lineage ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '1. 9년짜리 여정: EIP-86에서 EIP-8141까지' : '1. A 9-Year Journey: EIP-86 to EIP-8141'}
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '이더리움의 Account Abstraction(AA)은 하나의 아이디어가 여러 번의 실패와 절충을 거쳐 완성되는 여정이었다. 각 시도가 왜 탄생했고, 왜 불완전했는지 먼저 이해해야 EIP-8141이 무엇을 해결하는지 보인다.'
                : "Ethereum's Account Abstraction (AA) has been a journey of one idea going through multiple failures and compromises. Understanding why each attempt was born and why it fell short is the only way to see what EIP-8141 actually solves."}
            </p>

            {/* EIP-86 */}
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded">EIP-86 · 2016</span>
                <span className="text-slate-500 text-sm">{isKo ? '최초의 AA 아이디어 — 실현되지 않음' : 'First AA idea — never implemented'}</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                {isKo
                  ? 'Vitalik이 2016년 제안한 EIP-86은 "모든 계정은 컨트랙트다"라는 비전을 처음으로 공식화했다. null 서명(chain_id, 0, 0)이 담긴 트랜잭션은 NULL_SENDER 주소로 가고, 사용자는 커스텀 검증 로직을 가진 컨트랙트에 ETH를 보유한다. 트랜잭션 발신자(origin)와 서명 방식을 프로토콜에서 분리하자는 핵심 아이디어였다.'
                  : "Vitalik's EIP-86 from 2016 was the first official articulation of the vision: 'all accounts are contracts.' Transactions with a null signature (chain_id, 0, 0) would go to a NULL_SENDER address, and users would hold ETH in contracts with custom verification logic. The core idea: decouple transaction origin and signature scheme from the protocol."}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isKo
                  ? '🚧 왜 실패했나: 너무 급진적이었다. 합의 레이어 변경이 필요했고, 안전한 mempool 전파를 위한 검증 프레임워크가 없었다. CREATE2가 이 EIP에서 처음 등장했지만 별도로(EIP-1014) 먼저 배포됐다.'
                  : '🚧 Why it failed: Too radical. Required consensus layer changes and had no validation framework to safely propagate through the mempool. CREATE2 first appeared here but shipped separately (EIP-1014).'}
              </p>
            </div>

            {/* ERC-4337 */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">ERC-4337 · 2021 · Final</span>
                <span className="text-slate-500 text-sm">{isKo ? '프로토콜 변경 없이 AA — 별도 레이어로 해결' : 'AA without protocol change — off-chain layer'}</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                {isKo
                  ? 'ERC-4337의 전략은 "프로토콜을 건드리지 말자"였다. UserOperation이라는 pseudo-트랜잭션을 alt mempool에 모아서, Bundler가 묶어 EntryPoint 컨트랙트로 submit한다. Paymaster가 가스를 스폰서하고, Aggregator가 서명을 묶는다. 핵심 컴포넌트:'
                  : "ERC-4337's strategy was 'don't touch the protocol.' UserOperations (pseudo-transactions) accumulate in an alt mempool; Bundlers aggregate them and submit via the EntryPoint contract. Paymasters sponsor gas, Aggregators batch signatures. Key components:"}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { name: 'UserOperation', desc: isKo ? 'sender, nonce, callData, gas limits, paymasterAndData, signature' : 'The pseudo-tx struct sent to alt mempool' },
                  { name: 'Bundler', desc: isKo ? 'UserOp 모아서 handleOps()로 온체인 submit' : 'Aggregates UserOps, submits on-chain' },
                  { name: 'EntryPoint', desc: isKo ? '검증 + 실행 + 수수료 정산 싱글톤 컨트랙트' : 'Singleton for validate + execute + fee settlement' },
                  { name: 'Paymaster', desc: isKo ? '가스 스폰서 / 토큰 결제 컨트랙트' : 'Gas sponsor / token payment contract' },
                ].map(c => (
                  <div key={c.name} className="bg-white rounded-lg p-3">
                    <div className="font-mono text-blue-700 text-xs font-bold mb-1">{c.name}</div>
                    <div className="text-slate-600 text-xs">{c.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isKo
                  ? '🚧 한계: Bundler 중앙화 위험(검열 가능), 별도 alt mempool 인프라, EntryPoint가 msg.sender로 끼어들어 기존 컨트랙트 호환성 문제, 여전히 ECDSA 의존(bundler 트랜잭션은 EOA가 서명).'
                  : '🚧 Limits: Bundler centralization risk (censorship possible), separate alt-mempool infrastructure, EntryPoint as msg.sender breaks existing contract compatibility, still ECDSA-dependent (bundler transactions signed by EOA).'}
              </p>
            </div>

            {/* EIP-3074 */}
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">EIP-3074 · Withdrawn</span>
                <span className="text-slate-500 text-sm">{isKo ? 'AUTH/AUTHCALL — EIP-7702에 의해 대체' : 'AUTH/AUTHCALL — superseded by EIP-7702'}</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                {isKo
                  ? 'EIP-3074는 두 개의 오퍼코드로 EOA에게 권한 위임 기능을 부여하려 했다. AUTH(0xf6): EOA의 ECDSA 서명을 검증하고 authorized 컨텍스트 변수를 설정. AUTHCALL(0xf7): msg.sender를 authorized 주소로 설정하며 CALL. 즉 "invoker 컨트랙트가 EOA 대신 호출할 수 있게" 된다.'
                  : 'EIP-3074 tried to give EOAs delegation capabilities with two opcodes. AUTH(0xf6): validates ECDSA sig, sets the authorized context variable. AUTHCALL(0xf7): CALL with msg.sender = authorized address. In short: invoker contracts can act on behalf of EOAs.'}
              </p>
              <div className="bg-orange-100 rounded-lg p-3 mb-3">
                <code className="text-orange-800 text-xs font-mono">
                  {'AUTH  [authority, offset, length]  → success\nAUTHCALL [gas, addr, value, ...]   → (success, output)'}
                </code>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isKo
                  ? '🚧 왜 대체됐나: 임의 invoker 컨트랙트에 트랜잭션 범위 위임 → 악의적 invoker 위험. 위임이 트랜잭션 단위로만 유효해서 지속적 스마트 계정으로의 마이그레이션에 부적합. EIP-7702의 영구 위임 방식이 더 안전하고 설계 목표에 맞는다고 판단해 철회.'
                  : "🚧 Why superseded: Transaction-scoped delegation to arbitrary invoker contracts — malicious invoker risk. Delegation only valid per-transaction, unsuitable for permanent smart account migration. EIP-7702's persistent delegation was deemed safer and more aligned with design goals."}
              </p>
            </div>

            {/* EIP-7702 */}
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">EIP-7702 · Pectra · Final</span>
                <span className="text-slate-500 text-sm">{isKo ? 'EOA에 코드 부여 — 2025년 메인넷 활성화' : 'Set EOA account code — live on mainnet 2025'}</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                {isKo
                  ? 'EIP-7702는 트랜잭션에 authorization_list를 추가해서 EOA의 코드를 23바이트 위임 포인터로 설정한다. 모든 CALL이 이 포인터를 따라가므로 EOA가 실질적으로 스마트 계정처럼 동작한다. Pectra 하드포크(2025년 5월)로 메인넷 활성화.'
                  : 'EIP-7702 adds an authorization_list to transactions that sets an EOA\'s code to a 23-byte delegation pointer. All CALLs follow the pointer, making EOAs behave like smart accounts. Activated in the Pectra hard fork (May 2025).'}
              </p>
              <div className="bg-slate-800 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-xs font-mono overflow-x-auto">{`// authorization tuple
[chain_id, address, nonce, y_parity, r, s]

// resulting code in EOA storage
0xef0100 || address  // 23-byte delegation indicator

// signing message (magic prefix 0x05)
keccak256(0x05 || rlp([chain_id, address, nonce]))

// to revoke: sign authorization to address(0)`}</pre>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isKo
                  ? '🚧 여전한 한계: authorization_list 서명은 무조건 ECDSA(secp256k1). 스마트 계정이 직접 트랜잭션을 originate하는 프로토콜 레벨 AA는 없음 — Bundler가 여전히 필요. EIP-8141은 이 부분을 해결하기 위해 EIP-7702를 의존성으로 포함하며 그 위에 쌓인다.'
                  : '🚧 Remaining limits: authorization_list signatures are always ECDSA (secp256k1). No protocol-level AA where smart accounts originate transactions directly — Bundlers still needed. EIP-8141 lists EIP-7702 as a required dependency and builds on top.'}
              </p>
            </div>

            {/* Summary table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">{isKo ? '제안' : 'Proposal'}</th>
                    <th className="text-left px-4 py-3 font-semibold">{isKo ? '방식' : 'Approach'}</th>
                    <th className="text-left px-4 py-3 font-semibold">{isKo ? '핵심 한계' : 'Key Limit'}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'EIP-86 (2016)', approach: isKo ? '최초 AA 아이디어' : 'First AA idea', limit: isKo ? '합의 레이어 변경 필요, mempool 미설계' : 'Consensus layer change, no mempool design' },
                    { name: 'ERC-4337 (2021)', approach: isKo ? 'UserOp + Bundler + EntryPoint' : 'UserOp + Bundler + EntryPoint', limit: isKo ? '번들러 의존, alt mempool, ECDSA 종속' : 'Bundler dependency, alt mempool, ECDSA-only' },
                    { name: 'EIP-3074 (철회)', approach: isKo ? 'AUTH/AUTHCALL 오퍼코드' : 'AUTH/AUTHCALL opcodes', limit: isKo ? '임의 invoker 위험, 트랜잭션 범위 위임' : 'Malicious invoker risk, tx-scoped only' },
                    { name: 'EIP-7702 (Pectra)', approach: isKo ? 'EOA에 위임 코드 설정' : 'Set delegation code on EOA', limit: isKo ? '여전히 ECDSA, 프로토콜 AA 미지원' : 'Still ECDSA, no protocol-level AA' },
                    { name: 'EIP-8141 (Draft)', approach: isKo ? '프레임 기반 네이티브 프로토콜 AA' : 'Frame-based native protocol AA', limit: isKo ? '아직 드래프트, 경쟁 제안 다수 존재' : 'Still draft, competing proposals exist' },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 font-mono text-xs text-blue-700 font-semibold">{row.name}</td>
                      <td className="px-4 py-3 text-slate-700">{row.approach}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{row.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 2: EIP-8141 Overview ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '2. EIP-8141이란? — 한 줄 요약' : '2. What Is EIP-8141? — One-Liner'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'EIP-8141(Frame Transaction)은 이더리움에 새로운 트랜잭션 타입(0x06)을 추가해서, 계정 추상화를 프로토콜 레벨에서 네이티브로 지원하는 제안이다. 저자는 Vitalik Buterin을 포함해 lightclient, Felix Lange, Yoav Weiss, Alex Forshtat 등 10명. 상태는 Draft(Standards Track, Core).'
                : 'EIP-8141 (Frame Transaction) adds a new transaction type (0x06) to Ethereum to natively support Account Abstraction at the protocol level. Authors include Vitalik Buterin, lightclient, Felix Lange, Yoav Weiss, Alex Forshtat, and 5 others. Status: Draft (Standards Track, Core).'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '🔌', title: isKo ? '번들러 제거' : 'Bundler Eliminated', desc: isKo ? '검증이 프로토콜 내부에서 일어나므로 공개 mempool에 직접 들어감. Bundler, EntryPoint 불필요.' : 'Validation happens inside the protocol — transactions enter the public mempool directly. No Bundler or EntryPoint.' },
                { icon: '🔑', title: isKo ? '포스트 퀀텀 준비' : 'Post-Quantum Ready', desc: isKo ? 'SECP256K1, P256(패스키), 임의(ARBITRARY) 서명 체계를 프로토콜이 직접 지원. ECDSA 종속성 제거.' : 'Protocol-native support for SECP256K1, P256 (passkeys), and ARBITRARY schemes. ECDSA dependency broken.' },
                { icon: '📦', title: isKo ? '원자적 배치 기본값' : 'Atomic Batching by Default', desc: isKo ? 'approve + swap을 한 트랜잭션으로 원자적으로 묶는 게 프로토콜 기본 기능. 별도 multicall 컨트랙트 불필요.' : 'Atomically bundling approve + swap in one transaction is a protocol-native primitive. No separate multicall contract.' },
              ].map(card => (
                <div key={card.title} className="bg-purple-50 rounded-xl p-5">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="font-bold text-slate-900 mb-2 text-sm">{card.title}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Frame Concept ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '3. 핵심 개념: 프레임(Frame)이란?' : '3. Core Concept: What Is a Frame?'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'Frame Transaction(타입 0x06) 하나는 최대 64개의 프레임 배열로 구성된다. 각 프레임에 역할(모드)을 부여해서 검증, 가스 지불, 실행을 명확히 분리한다. 프로토콜이 이 역할 분리를 직접 이해하기 때문에 EntryPoint 같은 중계 컨트랙트가 필요 없다.'
                : 'A Frame Transaction (type 0x06) consists of up to 64 frames. Each frame is assigned a role (mode) that cleanly separates verification, gas payment, and execution. The protocol natively understands this separation — no relay contract like EntryPoint needed.'}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// Frame Transaction RLP structure
[chain_id, nonce, sender, frames, signatures, fees, blob_versioned_hashes]

frames = [[mode, flags, target, limits, value, data], ...]
limits = [execution_gas, state_gas]   // 2D gas budgets

// Signature entries
signatures = [[scheme, signer, msg, signature], ...]

// Fee fields
fees = [max_priority_fee_per_gas, max_fee_per_gas, max_fee_per_blob_gas]`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '3.1 세 가지 프레임 모드' : '3.1 Three Frame Modes'}</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">{isKo ? '모드' : 'Mode'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '이름' : 'Name'}</th>
                    <th className="text-left px-4 py-3">caller</th>
                    <th className="text-left px-4 py-3">{isKo ? '역할' : 'Role'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-slate-100">
                    <td className="px-4 py-3 font-mono font-bold text-slate-700">0</td>
                    <td className="px-4 py-3 font-semibold">DEFAULT</td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">ENTRY_POINT (0xaa)</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{isKo ? '계정 배포, 후처리(post-op). 가스 정산 환급 등' : 'Account deployment, post-op hooks. Gas refund settlement.'}</td>
                  </tr>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <td className="px-4 py-3 font-mono font-bold text-slate-700">1</td>
                    <td className="px-4 py-3 font-semibold">VERIFY</td>
                    <td className="px-4 py-3 font-mono text-xs text-blue-600">ENTRY_POINT (0xaa)</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{isKo ? '읽기 전용 검증(STATICCALL). 서명 확인, 가스 지불자 승인. 반드시 APPROVE 호출해야 함' : 'Read-only validation (STATICCALL). Signature check, gas payer approval. Must call APPROVE.'}</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-mono font-bold text-slate-700">2</td>
                    <td className="px-4 py-3 font-semibold">SENDER</td>
                    <td className="px-4 py-3 font-mono text-xs text-green-600">tx.sender</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{isKo ? '실제 사용자 작업 실행(전송, 스왑 등). sender_approved가 먼저 true여야 함. msg.sender = tx.sender 보장.' : 'Executes user actions (transfer, swap, etc.). Requires sender_approved = true. Guarantees msg.sender = tx.sender.'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
              <p className="text-green-900 text-sm leading-relaxed m-0">
                <strong>💡 {isKo ? 'SENDER 모드의 핵심 장점:' : 'Key advantage of SENDER mode:'}</strong>{' '}
                {isKo
                  ? 'msg.sender = tx.sender가 보장되므로, 기존 컨트랙트의 token approve, NFT 소유권, access control 로직을 수정할 필요가 없다. ERC-4337은 EntryPoint가 중간에 끼어서 msg.sender 처리가 복잡했는데, EIP-8141에서는 이 문제가 사라진다.'
                  : 'msg.sender = tx.sender is guaranteed, so existing contract token approvals, NFT ownership, and access control logic need zero modifications. ERC-4337 had complexity around msg.sender because EntryPoint was in the middle — EIP-8141 eliminates this problem.'}
              </p>
            </div>
          </section>

          {/* ── Section 4: New Opcodes ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '4. 새로 추가되는 7개의 오퍼코드' : '4. The 7 New Opcodes'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '계정 코드가 "나는 어떤 프레임 안에 있고, 무엇을 검증해야 하는지" 알려면 새로운 EVM 인트로스펙션 오퍼코드가 필요하다. EIP-8141은 7개를 추가한다.'
                : 'For account code to know "what frame am I in and what do I need to verify," new EVM introspection opcodes are needed. EIP-8141 adds 7.'}
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">Opcode</th>
                    <th className="text-left px-4 py-3">{isKo ? '가스' : 'Gas'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '역할' : 'Role'}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { op: 'APPROVE (0xaa)', gas: '—', role: isKo ? '핵심 오퍼코드. VERIFY 프레임을 종료하며 승인 플래그 설정. scope: 0x1(결제), 0x2(실행), 0x3(둘 다)' : 'Core opcode. Terminates VERIFY frame and sets approval flags. scope: 0x1(payment), 0x2(execution), 0x3(both)' },
                    { op: 'TXPARAM (0xb0)', gas: '2', role: isKo ? 'tx 파라미터(sender, nonce, max cost 등) 조회. ORIGIN을 대체하는 AA 친화 버전' : 'Query tx parameters (sender, nonce, max cost, etc.). AA-friendly replacement for ORIGIN.' },
                    { op: 'FRAMEDATALOAD (0xb1)', gas: '3', role: isKo ? '현재 프레임 data 필드에서 32바이트 읽기' : 'Read 32 bytes from current frame\'s data field' },
                    { op: 'FRAMEDATACOPY (0xb2)', gas: '3+copy', role: isKo ? '프레임 데이터를 메모리로 대량 복사' : 'Bulk copy frame data to memory' },
                    { op: 'FRAMEPARAM (0xb3)', gas: '2', role: isKo ? '현재 프레임 메타데이터(모드, 플래그, target 주소 등) 조회' : 'Query current frame metadata (mode, flags, target address, etc.)' },
                    { op: 'SIGPARAM (0xb4)', gas: '2', role: isKo ? '서명 리스트 메타데이터 및 ARBITRARY 서명 길이 조회' : 'Query signature list metadata and ARBITRARY signature length' },
                    { op: 'SIGDATACOPY (0xb5)', gas: '3+copy', role: isKo ? 'ARBITRARY 서명 바이트를 커스텀 검증 로직으로 복사' : 'Copy ARBITRARY signature bytes to memory for custom verification' },
                  ].map((row, i) => (
                    <tr key={row.op} className={i % 2 === 0 ? 'bg-white border-b border-slate-100' : 'bg-slate-50 border-b border-slate-100'}>
                      <td className="px-4 py-3 font-mono text-purple-700 text-xs font-bold whitespace-nowrap">{row.op}</td>
                      <td className="px-4 py-3 font-mono text-slate-500 text-xs">{row.gas}</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '4.1 APPROVE — 이 제안의 심장부' : '4.1 APPROVE — The Heart of the Proposal'}</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              {isKo
                ? 'APPROVE는 VERIFY 프레임 안에서 계정 코드가 "이 트랜잭션을 검증했고, 진행해도 좋다"고 프로토콜에 알리는 유일한 방법이다. 스택 입력: [offset, length, scope].'
                : 'APPROVE is the only way for account code inside a VERIFY frame to tell the protocol "I\'ve validated this transaction, proceed." Stack input: [offset, length, scope].'}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-4">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// scope values
APPROVE_PAYMENT             = 0x1   // gas payment only
APPROVE_EXECUTION           = 0x2   // execution only
APPROVE_EXECUTION_AND_PAYMENT = 0x3 // both

// Rules:
// 1. Only callable if ADDRESS == resolved_target (self-call only)
// 2. Once an approval bit is set, it cannot be set again
// 3. APPROVE_PAYMENT effects:
//    - nonce++
//    - deduct max_cost from payer balance
//    - payer = this frame's target
// 4. APPROVE_EXECUTION effects:
//    - sender_approved = true
//    - (only valid if frame.target == tx.sender)`}</pre>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {isKo
                ? '"누가 서명을 검증했는가"와 "누가 가스비를 냈는가"가 scope로 명확히 분리된다. 두 개의 별도 VERIFY 프레임으로 처리하면, 사용자는 서명만 하고 스폰서가 가스를 낸다는 패턴이 자연스럽게 만들어진다.'
                : '"Who verified the signature" and "who pays gas" are cleanly separated by scope. With two separate VERIFY frames, a natural pattern emerges: user only signs, sponsor pays gas.'}
            </p>
          </section>

          {/* ── Section 5: Signature Schemes ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '5. 다중 서명 체계 — 포스트 퀀텀의 발판' : '5. Multi-Scheme Signatures — The Post-Quantum Foundation'}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">{isKo ? '체계' : 'Scheme'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '값' : 'Value'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '인코딩' : 'Encoding'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '실행 가스' : 'Execution Gas'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b"><td className="px-4 py-3 font-mono text-purple-700 font-bold">ARBITRARY</td><td className="px-4 py-3 font-mono">0x0</td><td className="px-4 py-3 text-slate-600 text-xs">{isKo ? '임의 바이트 — EVM이 검증' : 'Arbitrary bytes — validated by EVM'}</td><td className="px-4 py-3 font-mono">100</td></tr>
                  <tr className="bg-slate-50 border-b"><td className="px-4 py-3 font-mono text-purple-700 font-bold">SECP256K1</td><td className="px-4 py-3 font-mono">0x1</td><td className="px-4 py-3 text-slate-600 text-xs font-mono">v(1) || r(32) || s(32)</td><td className="px-4 py-3 font-mono">2,800</td></tr>
                  <tr className="bg-white"><td className="px-4 py-3 font-mono text-purple-700 font-bold">P256 (NIST)</td><td className="px-4 py-3 font-mono">0x2</td><td className="px-4 py-3 text-slate-600 text-xs font-mono">r || s || qx || qy (32 each)</td><td className="px-4 py-3 font-mono">6,700</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <p className="text-purple-900 text-sm leading-relaxed m-0">
                <strong>💡 ARBITRARY scheme의 의미:</strong>{' '}
                {isKo
                  ? 'SIGDATACOPY + SIGPARAM을 활용해 BLS, Schnorr, 격자 기반 양자내성암호 서명까지 EVM 바이트코드에서 직접 검증할 수 있다. 별도 프리컴파일 추가 없이도 어떤 서명 체계든 구현 가능. P256 signer 주소는 keccak256(qx || qy)[12:]로 도출.'
                  : 'Using SIGDATACOPY + SIGPARAM, BLS, Schnorr, lattice-based post-quantum signatures can be verified directly in EVM bytecode. Any signature scheme can be implemented without adding new precompiles. P256 signer address derived as keccak256(qx || qy)[12:].'}
              </p>
            </div>
          </section>

          {/* ── Section 6: Execution Flow ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '6. 실행 흐름 — 4단계' : '6. Execution Flow — 4 Stages'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { step: '1', name: isKo ? '입장(Admission)' : 'Admission', desc: isKo ? '노드가 "검증 프리픽스"가 4가지 허용 패턴 중 하나인지 확인. 안 맞으면 공개 mempool 거부 → private 채널로 가야 함.' : 'Node checks if "validation prefix" matches one of 4 allowed patterns. Mismatch → rejected from public mempool, must use private channel.' },
                { step: '2', name: isKo ? '검증(Validation)' : 'Validation', desc: isKo ? '초반 VERIFY 프레임들 실행. 서명 검사, 정책 확인, Paymaster 로직. payer와 sender_approved 결정.' : 'Executes initial VERIFY frames. Signature check, policy validation, paymaster logic. Determines payer and sender_approved.' },
                { step: '3', name: isKo ? '실행(Execution)' : 'Execution', desc: isKo ? '승인 완료 후 나머지 프레임 실행. SENDER 프레임에서 실제 토큰 전송, 스왑 등 처리. 원자적 배치 단위로 전부 성공 or 전부 되돌림.' : 'After approvals, executes remaining frames. SENDER frames handle token transfers, swaps, etc. Atomic batches are all-or-nothing.' },
                { step: '4', name: isKo ? '정산(Settlement)' : 'Settlement', desc: isKo ? '사용된 가스 계산 → payer에게 환급. 프레임별 영수증 기록. 상태 0x1(성공), 0x2(스킵/배치 실패)로 기록.' : 'Computes gas used → refund to payer. Records per-frame receipts. Status 0x1 (success) or 0x2 (skipped/batch failed).' },
              ].map(stage => (
                <div key={stage.step} className="bg-slate-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">{stage.step}</span>
                    <span className="font-bold text-slate-900">{stage.name}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed m-0">{stage.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-slate-400 text-xs mb-2 font-mono">{isKo ? '// 실행 의사코드 (개념적 요약)' : '// Execution pseudocode (conceptual summary)'}</div>
              <pre className="text-green-400 text-xs font-mono overflow-x-auto">{`assert tx.nonce == state[tx.sender].nonce

sender_approved = False
payer = None

for frame in tx.frames:
    resolved_target = tx.sender if frame.target is None else frame.target

    if frame.mode == DEFAULT:
        call(caller=ENTRY_POINT, target=resolved_target, ...)

    elif frame.mode == VERIFY:
        # STATICCALL — APPROVE opcode is the only way to set approval
        staticcall(caller=ENTRY_POINT, target=resolved_target, ...)

    elif frame.mode == SENDER:
        assert sender_approved    # must have APPROVE_EXECUTION first
        call(caller=tx.sender, target=resolved_target, value=frame.value, ...)

assert payer is not None          # someone must have called APPROVE_PAYMENT
settle_gas_and_refund(payer)`}</pre>
            </div>
          </section>

          {/* ── Section 7: Default Code ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '7. 코드 없는 EOA는? — 기본 코드(Default Code)' : '7. What About Codeless EOAs? — Default Code'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '기존 메타마스크 같은 일반 지갑(코드 없는 EOA)도 별도 배포나 EIP-7702 위임 없이 Frame Transaction을 즉시 사용할 수 있다. 프로토콜이 "기본 코드(default code)"를 내장해서 자동 처리하기 때문이다.'
                : 'Existing wallets like MetaMask (codeless EOAs) can use Frame Transactions immediately without any contract deployment or EIP-7702 delegation. The protocol has built-in "default code" that handles it automatically.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <h4 className="font-bold text-blue-900 mb-3 text-sm">VERIFY mode — {isKo ? '코드 없는 target' : 'codeless target'}</h4>
                <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
                  <li>{isKo ? 'flags에서 allowed_scope 읽기. 0이면 revert' : 'Read allowed_scope from flags. 0 → revert'}</li>
                  <li>{isKo ? '실행 승인 포함 → 서명 인덱스 0, 결제 전용 → 인덱스 1 사용' : 'Execution approval → sig index 0; payment only → index 1'}</li>
                  <li>{isKo ? '해당 서명이 SECP256K1이고 signer == target인지 확인' : 'Check that sig is SECP256K1 and signer == target'}</li>
                  <li>{isKo ? '유효하면 APPROVE(allowed_scope) 자동 처리' : 'If valid, APPROVE(allowed_scope) is processed automatically'}</li>
                </ol>
              </div>
              <div className="bg-green-50 rounded-xl p-5">
                <h4 className="font-bold text-green-900 mb-3 text-sm">SENDER/DEFAULT mode — {isKo ? '코드 없는 target' : 'codeless target'}</h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  {isKo
                    ? 'ETH 값 전송을 완료하고 빈 데이터로 반환. 새로 생성된 EOA로 ETH를 보내는 케이스도 자연스럽게 처리된다.'
                    : 'Completes ETH value transfer and returns empty data. Even sending ETH to a newly created EOA is handled naturally.'}
                </p>
                <div className="mt-3 p-3 bg-green-100 rounded-lg">
                  <p className="text-green-900 text-xs m-0">
                    <strong>{isKo ? '실용 포인트:' : 'Practical point:'}</strong>{' '}
                    {isKo
                      ? '서명자(sender)는 인덱스 0 서명으로 본인 인증, 가스 스폰서는 인덱스 1 서명으로 결제 승인. 컨트랙트 배포 없이 EOA-대-EOA 가스 대납 가능.'
                      : 'Signer uses index 0 sig for identity; sponsor uses index 1 sig for payment approval. Gas sponsorship between EOAs without any contract deployment.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 8: Practical Examples ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '8. 실전 예제 5가지' : '8. Five Practical Examples'}
            </h2>

            {/* Example 1 */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">
                {isKo ? '예제 1 — 가장 단순한 EOA 트랜잭션 (본인 가스 지불)' : 'Example 1 — Simplest EOA Transaction (Self Gas Payment)'}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs">
                  <thead className="bg-slate-800 text-white"><tr><th className="px-3 py-2 text-left">Frame</th><th className="px-3 py-2 text-left">Mode</th><th className="px-3 py-2 text-left">Target</th><th className="px-3 py-2 text-left">{isKo ? '내용' : 'Content'}</th></tr></thead>
                  <tbody>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">0</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2 font-mono">sender</td><td className="px-3 py-2 text-slate-600">{isKo ? '서명 검증 → APPROVE(0x3) — 실행+결제 동시 승인' : 'Sig verify → APPROVE(0x3) — approve execution+payment'}</td></tr>
                    <tr className="bg-slate-50"><td className="px-3 py-2 font-mono">1</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 font-mono">target</td><td className="px-3 py-2 text-slate-600">{isKo ? '실제 calldata 실행' : 'Execute actual calldata'}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Example 2 */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">
                {isKo ? '예제 2 — 가스 무료 결제 (Canonical Paymaster 스폰서십)' : 'Example 2 — Gasless Transaction (Canonical Paymaster Sponsorship)'}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs">
                  <thead className="bg-slate-800 text-white"><tr><th className="px-3 py-2 text-left">Frame</th><th className="px-3 py-2 text-left">Mode</th><th className="px-3 py-2 text-left">Target</th><th className="px-3 py-2 text-left">{isKo ? '내용' : 'Content'}</th></tr></thead>
                  <tbody>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">0</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2 font-mono">sender</td><td className="px-3 py-2 text-slate-600">{isKo ? '서명 검증 → APPROVE(0x2) 실행 승인만' : 'Sig verify → APPROVE(0x2) execution only'}</td></tr>
                    <tr className="bg-slate-50 border-b"><td className="px-3 py-2 font-mono">1</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2 font-mono">paymaster</td><td className="px-3 py-2 text-slate-600">{isKo ? '스폰서 데이터 검증 → APPROVE(0x1) 결제 승인' : 'Sponsor data verify → APPROVE(0x1) payment only'}</td></tr>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">2</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 font-mono">target</td><td className="px-3 py-2 text-slate-600">{isKo ? '사용자 호출 실행' : 'Execute user call'}</td></tr>
                    <tr className="bg-slate-50"><td className="px-3 py-2 font-mono">3</td><td className="px-3 py-2 font-semibold text-slate-700">DEFAULT</td><td className="px-3 py-2 font-mono">paymaster</td><td className="px-3 py-2 text-slate-600">{isKo ? 'post-op: 가스 환급 정산' : 'post-op: gas refund settlement'}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-xs mt-2">{isKo ? '사용자는 ETH를 한 푼도 보유하지 않아도 됨.' : 'User holds zero ETH.'}</p>
            </div>

            {/* Example 3 */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">
                {isKo ? '예제 3 — Approve + Swap 원자적 묶기' : 'Example 3 — Atomic Approve + Swap'}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs">
                  <thead className="bg-slate-800 text-white"><tr><th className="px-3 py-2 text-left">Frame</th><th className="px-3 py-2 text-left">Mode</th><th className="px-3 py-2 text-left">{isKo ? '원자배치' : 'Atomic'}</th><th className="px-3 py-2 text-left">Target</th><th className="px-3 py-2 text-left">{isKo ? '내용' : 'Content'}</th></tr></thead>
                  <tbody>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">0</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2">-</td><td className="px-3 py-2 font-mono">sender</td><td className="px-3 py-2 text-slate-600">{isKo ? '서명 → APPROVE(0x3)' : 'Sig → APPROVE(0x3)'}</td></tr>
                    <tr className="bg-slate-50 border-b"><td className="px-3 py-2 font-mono">1</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 text-blue-600 font-bold">{isKo ? '배치 시작' : 'batch start'}</td><td className="px-3 py-2 font-mono">ERC-20</td><td className="px-3 py-2 text-slate-600">approve(DEX, amount)</td></tr>
                    <tr className="bg-white"><td className="px-3 py-2 font-mono">2</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 text-blue-600 font-bold">{isKo ? '배치 종료' : 'batch end'}</td><td className="px-3 py-2 font-mono">DEX</td><td className="px-3 py-2 text-slate-600">swap(...)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 mt-2">
                <p className="text-blue-800 text-xs m-0">{isKo ? '스왑 실패 시 approve도 함께 롤백. "두 번 서명" UX 문제 해결.' : 'If swap reverts, approve rolls back too. Eliminates the "sign twice" UX problem.'}</p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-3">
                {isKo ? '예제 4 — 스마트 계정 배포 + 첫 트랜잭션 동시' : 'Example 4 — Deploy Smart Account + First Transaction in One'}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs">
                  <thead className="bg-slate-800 text-white"><tr><th className="px-3 py-2 text-left">Frame</th><th className="px-3 py-2 text-left">Mode</th><th className="px-3 py-2 text-left">Target</th><th className="px-3 py-2 text-left">{isKo ? '내용' : 'Content'}</th></tr></thead>
                  <tbody>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">0</td><td className="px-3 py-2 font-semibold text-slate-700">DEFAULT</td><td className="px-3 py-2 font-mono">deployer</td><td className="px-3 py-2 text-slate-600">{isKo ? 'initcode + salt로 계정 배포 (CREATE2)' : 'Deploy account with initcode + salt (CREATE2)'}</td></tr>
                    <tr className="bg-slate-50 border-b"><td className="px-3 py-2 font-mono">1</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2 font-mono">sender</td><td className="px-3 py-2 text-slate-600">{isKo ? '서명 검증 → APPROVE(0x3)' : 'Sig verify → APPROVE(0x3)'}</td></tr>
                    <tr className="bg-white"><td className="px-3 py-2 font-mono">2</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 font-mono">target</td><td className="px-3 py-2 text-slate-600">{isKo ? '사용자 호출' : 'User call'}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-xs mt-2">{isKo ? '카운터팩추얼 주소로 미리 알려진 스마트 계정을 처음 사용할 때 배포와 실행을 한 번에 처리.' : 'Deploys and executes a counterfactual smart account in one transaction on first use.'}</p>
            </div>

            {/* Example 5 */}
            <div className="mb-6">
              <h3 className="font-bold text-slate-900 mb-3">
                {isKo ? '예제 5 — 가스를 USDC로 납부' : 'Example 5 — Pay Gas in USDC'}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-3">
                <table className="w-full text-xs">
                  <thead className="bg-slate-800 text-white"><tr><th className="px-3 py-2 text-left">Frame</th><th className="px-3 py-2 text-left">Mode</th><th className="px-3 py-2 text-left">Target</th><th className="px-3 py-2 text-left">{isKo ? '내용' : 'Content'}</th></tr></thead>
                  <tbody>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">0</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2 font-mono">sender</td><td className="px-3 py-2 text-slate-600">{isKo ? '서명 검증 (인덱스 0)' : 'Sig verify (index 0)'}</td></tr>
                    <tr className="bg-slate-50 border-b"><td className="px-3 py-2 font-mono">1</td><td className="px-3 py-2 font-semibold text-yellow-700">VERIFY</td><td className="px-3 py-2 font-mono">sponsor</td><td className="px-3 py-2 text-slate-600">{isKo ? '스폰서 서명 메타데이터 + 다음 ERC-20 프레임 확인 → APPROVE(0x1)' : 'Sponsor sig metadata + next ERC-20 frame check → APPROVE(0x1)'}</td></tr>
                    <tr className="bg-white border-b"><td className="px-3 py-2 font-mono">2</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 font-mono">USDC</td><td className="px-3 py-2 text-slate-600">transfer(sponsor, fee)</td></tr>
                    <tr className="bg-slate-50 border-b"><td className="px-3 py-2 font-mono">3</td><td className="px-3 py-2 font-semibold text-green-700">SENDER</td><td className="px-3 py-2 font-mono">target</td><td className="px-3 py-2 text-slate-600">{isKo ? '사용자 호출' : 'User call'}</td></tr>
                    <tr className="bg-white"><td className="px-3 py-2 font-mono">4</td><td className="px-3 py-2 font-semibold text-slate-700">DEFAULT</td><td className="px-3 py-2 font-mono">sponsor</td><td className="px-3 py-2 text-slate-600">{isKo ? '(선택) 후처리 정산' : '(optional) post-op settlement'}</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-orange-800 text-sm m-0">
                  <strong>⚠️ {isKo ? '신뢰 모델 주의:' : 'Trust model caveat:'}</strong>{' '}
                  {isKo
                    ? '공개 mempool에서는 스폰서가 사용자의 USDC 잔액을 온체인에서 직접 확인하지 않는다. 사용자가 트랜잭션 포함 전 잔액을 비우는 프론트러닝 위험이 있다. 잔액 실검증이 필요하면 "확장 티어(expansive tier)"나 private mempool을 써야 한다.'
                    : 'In the public mempool, the sponsor does NOT verify the user\'s USDC balance on-chain. There\'s a frontrunning risk where the user can drain their balance before inclusion. For trustless balance verification, use the "expansive tier" or a private mempool.'}
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 9: Atomic Batch ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '9. 원자적 배치(Atomic Batch) — 규칙 상세' : '9. Atomic Batching — Rules in Detail'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {isKo
                ? 'flags의 2번 비트를 세팅하면 그 프레임은 배치에 속한다. 연속된 플래그 세팅 프레임들 + 뒤에 나오는 플래그 없는 프레임 하나가 하나의 배치 단위가 된다.'
                : 'Setting bit 2 of flags marks a frame as part of a batch. Consecutive flagged frames plus the following un-flagged frame form one atomic batch unit.'}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`Frame 0: batch_flag=1  ─┐
Frame 1: batch_flag=0  ─┘  Batch 1

Frame 2: batch_flag=1  ─┐
Frame 3: batch_flag=1   │  Batch 2
Frame 4: batch_flag=0  ─┘`}</pre>
            </div>
            <div className="space-y-3">
              {[
                { icon: '✅', text: isKo ? 'DEFAULT, SENDER 프레임만 배치 가능. VERIFY는 배치 안에 들어갈 수 없음.' : 'Only DEFAULT and SENDER frames can be batched. VERIFY cannot be inside a batch.' },
                { icon: '✅', text: isKo ? '배치 내 모든 프레임의 승인 범위 비트는 반드시 0. 배치 안에서 APPROVE 불가.' : 'All frames inside a batch must have zero approval scope bits. APPROVE cannot be called inside a batch.' },
                { icon: '✅', text: isKo ? '배치 중 하나라도 revert → 배치 전체 상태 롤백, 나머지 프레임 스킵, 영수증 상태 0x2 기록.' : 'If any frame in the batch reverts → entire batch state rolls back, remaining frames skipped, receipt status 0x2.' },
                { icon: '✅', text: isKo ? '배치 실패 시 미사용 가스 환급은 배치 시작 전 상태를 기준으로 계산.' : 'Unused gas refund on batch failure is calculated from the state before the batch started.' },
              ].map((rule, i) => (
                <div key={i} className="flex gap-3 bg-slate-50 rounded-lg p-3">
                  <span className="text-lg">{rule.icon}</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{rule.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 10: 2D Gas ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '10. 2차원 가스 회계' : '10. Two-Dimensional Gas Accounting'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '각 프레임은 execution 가스와 state 가스를 별도로 지정한다. 두 예산은 서로 빌려 쓸 수 없다. 한쪽이 부족하면 다른 쪽 여유가 있어도 그 프레임은 실패한다.'
                : 'Each frame specifies execution gas and state gas separately. The two budgets cannot borrow from each other. If one runs out, the frame fails even if the other has remaining budget.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <h4 className="font-bold text-blue-900 mb-2 text-sm">Execution Gas</h4>
                <p className="text-blue-800 text-sm m-0">{isKo ? '연산, 데이터 처리, 접근(access) 비용. 복잡한 DeFi 로직에 많이 소비됨.' : 'Computation, data processing, access costs. Consumed heavily by complex DeFi logic.'}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5">
                <h4 className="font-bold text-orange-900 mb-2 text-sm">State Gas (EIP-8037)</h4>
                <p className="text-orange-800 text-sm m-0">{isKo ? '영속적 상태 증가 비용(스토리지 슬롯 신규 생성, 계정 생성 등). 상태 팽창을 별도로 제어.' : 'Persistent state growth costs (new storage slots, account creation). Controls state bloat separately.'}</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 mb-4">
              <div className="text-slate-400 text-xs mb-2 font-mono">{isKo ? '// 트랜잭션 기본 가스 계산 (개략)' : '// Transaction base gas calculation (approximate)'}</div>
              <pre className="text-green-400 text-xs font-mono overflow-x-auto">{`frame_tx_intrinsic_gas = (
    12_000                           # base cost
  + 475 * len(tx.frames)             # per-frame cost
  + frame_data_cost                  # calldata
  + signature_data_cost              # sig bytes
  + signature_verification_cost      # SECP256K1: 2800, P256: 6700, ARBITRARY: 100
  + value_transfer_cost
)

# Warm/cold state initial values:
# - tx.sender, coinbase, active precompiles → warm
# - frame targets → NOT auto-warmed (important for gas estimates!)
# - payer → warmed only when APPROVE touches it`}</pre>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm m-0">
                <strong>{isKo ? '지갑 개발자 주의:' : 'Wallet developer note:'}</strong>{' '}
                {isKo
                  ? '가스 추정기를 만들 때 프레임 타겟이 자동 워밍업되지 않는다는 점을 반드시 반영해야 한다. 언더/오버 프로비저닝 모두 문제가 된다.'
                  : 'Gas estimators must account for frame targets NOT being auto-warmed. Both under and over provisioning are problematic.'}
              </p>
            </div>
          </section>

          {/* ── Section 11: Mempool Model ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '11. Mempool 모델 — 실행 모델과 전파 모델은 다르다' : '11. Mempool Model — Execution vs. Propagation'}
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
              <p className="text-red-800 text-sm leading-relaxed m-0">
                <strong>{isKo ? '핵심 혼동 포인트:' : 'Key confusion point:'}</strong>{' '}
                {isKo
                  ? 'EIP-8141은 사실상 두 개의 스펙이 하나로 합쳐진 것이다. 온체인에서 유효한 것(실행 모델)과 공개 P2P 네트워크로 전파 가능한 것(멤풀 모델)은 다르다.'
                  : "EIP-8141 is effectively two specs merged into one. What's valid on-chain (execution model) and what can propagate through the public P2P network (mempool model) are different things."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-5">
                <h4 className="font-bold text-green-900 mb-2 text-sm">{isKo ? '실행 모델 (온체인)' : 'Execution Model (On-Chain)'}</h4>
                <p className="text-green-800 text-sm">{isKo ? '"검증과 결제는 완전히 프로그래머블" — 어떤 계정 코드든 원하는 서명 방식을 검증하고 원하는 지불자를 승인할 수 있다.' : '"Verification and payment are fully programmable" — any account code can validate any signature scheme and approve any payer.'}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5">
                <h4 className="font-bold text-orange-900 mb-2 text-sm">{isKo ? '멤풀 모델 (P2P 전파)' : 'Mempool Model (P2P Propagation)'}</h4>
                <p className="text-orange-800 text-sm">{isKo ? '공개 mempool로 전파되려면 4가지 허용 패턴 중 하나여야 함. 안 맞으면 → private 채널(빌더 직송).' : 'Must match one of 4 allowed patterns to enter the public mempool. Otherwise → private channel (builder direct submit).'}</p>
              </div>
            </div>
            <h3 className="font-bold text-slate-900 mb-3">{isKo ? '공개 mempool의 4가지 검증 프리픽스' : '4 Validation Prefixes for Public Mempool'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`[self_verify]                       # basic self-relay
[deploy] → [self_verify]            # self-relay with account deployment

[only_verify] → [pay]               # canonical paymaster basic
[deploy] → [only_verify] → [pay]    # canonical paymaster + deployment`}</pre>
            </div>
            <h3 className="font-bold text-slate-900 mb-3">{isKo ? '검증 프리픽스 구간 제약' : 'Validation Prefix Constraints'}</h3>
            <div className="space-y-2">
              {[
                isKo ? '실행 가스 합 + 서명검증 비용 ≤ MAX_VERIFY_GAS (100,000)' : 'Sum of execution gas + sig verification cost ≤ MAX_VERIFY_GAS (100,000)',
                isKo ? 'state 가스 합 ≤ MAX_VERIFY_STATE_GAS (500,000)' : 'Sum of state gas ≤ MAX_VERIFY_STATE_GAS (500,000)',
                isKo ? '검증 프리픽스 내 프레임은 원자배치 플래그 불가' : 'No frames in validation prefix may have atomic batch flag',
                isKo ? '검증 프리픽스 종료 후 VERIFY 프레임 추가 불가' : 'No VERIFY frames allowed after validation prefix ends',
                isKo ? 'TIMESTAMP, BLOCKHASH, COINBASE, PREVRANDAO 등 환경 의존 오퍼코드 금지' : 'Environment-dependent opcodes banned: TIMESTAMP, BLOCKHASH, COINBASE, PREVRANDAO, etc.',
                isKo ? 'tx.sender 스토리지 외 읽기 금지, 쓰기는 첫 deploy 프레임에서만 허용' : 'Storage reads restricted to tx.sender only; writes only permitted in the first deploy frame',
              ].map((rule, i) => (
                <div key={i} className="flex gap-3 bg-slate-50 rounded-lg p-3">
                  <span className="text-slate-400 text-sm font-mono shrink-0">{i + 1}.</span>
                  <span className="text-slate-700 text-sm">{rule}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 12: Comparison Table ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '12. ERC-4337 vs EIP-7702 vs EIP-8141 비교' : '12. ERC-4337 vs EIP-7702 vs EIP-8141 Comparison'}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">{isKo ? '항목' : 'Aspect'}</th>
                    <th className="text-left px-4 py-3">ERC-4337</th>
                    <th className="text-left px-4 py-3">EIP-7702</th>
                    <th className="text-left px-4 py-3">EIP-8141</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[
                    { aspect: isKo ? '프로토콜 변경' : 'Protocol change', a: '❌ 없음', b: '✅ 있음 (Pectra)', c: '✅ 있음 (예정)' },
                    { aspect: isKo ? 'Mempool' : 'Mempool', a: isKo ? 'alt mempool (별도)' : 'alt mempool (separate)', b: isKo ? '공개 mempool' : 'public mempool', c: isKo ? '공개 mempool' : 'public mempool' },
                    { aspect: isKo ? '검열 저항성' : 'Censorship resistance', a: isKo ? 'Bundler 의존' : 'Bundler-dependent', b: '—', c: isKo ? '프로토콜 네이티브' : 'Protocol-native' },
                    { aspect: isKo ? '가스 오버헤드' : 'Gas overhead', a: isKo ? '높음 (EntryPoint 경유)' : 'High (via EntryPoint)', b: isKo ? '낮음' : 'Low', c: isKo ? '프레임당 475 가스' : '475 gas per frame' },
                    { aspect: isKo ? '서명 체계' : 'Sig schemes', a: 'ECDSA only', b: 'ECDSA only', c: 'SECP256K1 + P256 + ARBITRARY' },
                    { aspect: 'msg.sender', a: isKo ? 'EntryPoint (복잡)' : 'EntryPoint (complex)', b: 'tx.sender', c: 'tx.sender (SENDER frame)' },
                    { aspect: isKo ? '원자적 배치' : 'Atomic batch', a: isKo ? '컨트랙트 로직으로만' : 'Via contract logic only', b: isKo ? '컨트랙트 로직으로만' : 'Via contract logic only', c: isKo ? '프로토콜 기본값' : 'Protocol-native' },
                    { aspect: isKo ? '가스 스폰서십' : 'Gas sponsorship', a: 'Paymaster contract', b: isKo ? '7702 위임 필요' : 'Requires 7702 delegation', c: isKo ? 'VERIFY 프레임에서 APPROVE_PAYMENT' : 'APPROVE_PAYMENT in VERIFY frame' },
                    { aspect: isKo ? '포스트 퀀텀' : 'Post-quantum', a: '❌', b: '❌', c: '✅ (ARBITRARY scheme)' },
                    { aspect: isKo ? '현재 상태' : 'Current status', a: 'Final (ERC)', b: 'Final (Pectra)', c: 'Draft' },
                  ].map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white border-b border-slate-100' : 'bg-slate-50 border-b border-slate-100'}>
                      <td className="px-4 py-3 font-semibold text-slate-700">{row.aspect}</td>
                      <td className="px-4 py-3 text-slate-600">{row.a}</td>
                      <td className="px-4 py-3 text-slate-600">{row.b}</td>
                      <td className="px-4 py-3 text-purple-700 font-medium">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 13: Related EIPs ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '13. 관련 제안들과의 관계' : '13. Relationship with Related Proposals'}
            </h2>
            <div className="space-y-3">
              {[
                { eip: 'ERC-4337', rel: isKo ? '대체 대상. EIP-8141이 네이티브 프로토콜 후속작 (번들러 제거)' : 'Being replaced. EIP-8141 is the native protocol successor (eliminates Bundler)' },
                { eip: 'EIP-7702', rel: isKo ? '상호보완적 의존성. 7702로 위임된 계정도 프레임 트랜잭션 사용 가능. 단, 기본 코드 서명 검증 gap이 있어 조정 중' : 'Complementary dependency. EIP-7702 delegated accounts can use Frame Transactions. A gap in default code sig verification is being reconciled.' },
                { eip: 'ERC-7562', rel: isKo ? '4337용 검증 규칙 표준. 8141 mempool 규칙이 이에서 영감 받았지만 스테이킹/평판 시스템 없이 더 단순화' : 'Validation rules standard for 4337. EIP-8141 mempool rules drew inspiration but are simpler — no staking/reputation system.' },
                { eip: 'EIP-8175', rel: isKo ? '경쟁 대안. 플랫한 기능 + 프로그래머블 fee_auth, opcode 4개 추가 방식' : 'Competing alternative. Flat capabilities + programmable fee_auth, adds 4 opcodes.' },
                { eip: 'EIP-8130', rel: isKo ? 'Coinbase/Base 진영 대안. 선언적 인증자 방식, 검증 중 지갑 코드 실행 없음' : 'Coinbase/Base alternative. Declarative authenticator approach — no wallet code execution during validation.' },
                { eip: 'EIP-8250 / 8266 / 8272 / 8288', rel: isKo ? '"형제 제안" — 각각 키드 논스, 만료 논스, 최근 루트, PQ 서명/STARK 집계. 8141과 조합 설계' : '"Sibling proposals" — keyed nonces, expiry nonces, recent root, PQ sigs/STARK aggregation. Designed to compose with 8141.' },
                { eip: 'ERC-8286', rel: isKo ? '8141 위에서 처음 병합된 응용 계층 표준. ERC-7579 모듈러 계정이 VERIFY 프레임에서 APPROVE를 적용하는 방법 정의' : 'First application-layer standard built on 8141. Defines how ERC-7579 modular accounts apply APPROVE inside VERIFY frames.' },
              ].map(item => (
                <div key={item.eip} className="flex gap-4 bg-slate-50 rounded-xl p-4">
                  <span className="font-mono text-purple-700 text-xs font-bold whitespace-nowrap pt-0.5">{item.eip}</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{item.rel}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 14: Developer Checklist ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '14. 개발자 실무 체크리스트' : '14. Developer Checklist'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">👛</span> {isKo ? '지갑을 만든다면' : 'Building a wallet'}
                </h3>
                <div className="space-y-3">
                  {[
                    isKo ? 'Bundler, EntryPoint, UserOperation 인프라를 8141 경로에서는 걷어낼 계획 세우기' : 'Plan to remove Bundler/EntryPoint/UserOperation infrastructure for the 8141 path',
                    isKo ? '기존 EOA 주소는 마이그레이션 없이 그대로 사용. 기본 코드가 secp256k1 + ETH 전송 자동 처리' : 'Existing EOA addresses work as-is without migration. Default code handles secp256k1 + ETH transfers.',
                    isKo ? '모든 프레임마다 execution과 state 두 가지 가스 예산을 각각 추정. 서로 빌려 쓸 수 없음' : 'Estimate execution AND state gas budgets separately for every frame. They cannot borrow from each other.',
                    isKo ? '프레임 타겟은 자동 워밍업 안 됨 — 가스 추정기에 반드시 반영' : 'Frame targets are NOT auto-warmed — must be reflected in gas estimators.',
                    isKo ? '세션 키, 멀티시그, 소셜 리커버리는 여전히 계정 코드 또는 별도 ERC 필요 (프로토콜 기본값 밖)' : 'Session keys, multisig, social recovery still require account code or separate ERCs (outside protocol defaults).',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-green-500 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">🏗️</span> {isKo ? 'dApp을 만든다면' : 'Building a dApp'}
                </h3>
                <div className="space-y-3">
                  {[
                    isKo ? 'SENDER 프레임에서 msg.sender = tx.sender 보장 → 토큰 approve, NFT, access control 수정 불필요' : 'SENDER frame guarantees msg.sender = tx.sender → token approvals, NFTs, access control need zero changes.',
                    isKo ? 'approve + swap 원자적 배치가 공개 mempool의 1급 패턴 → 특정 지갑 벤더 RPC 협의 불필요' : 'approve + swap atomic batching is a public mempool first-class pattern — no vendor-specific RPC negotiation.',
                    isKo ? '"가스를 ERC-20으로" 패턴은 공개형(프론트러닝 리스크) vs 비공개형(잔액 실검증)의 두 가지 신뢰 모델 존재' : '"Gas in ERC-20" has two trust models: public (frontrunning risk) vs. private (balance verified). Design accordingly.',
                    isKo ? '온체인 유효 ≠ 공개 mempool 전파 가능. 복잡한 검증 로직은 빌더 직송 필요할 수 있음' : 'On-chain valid ≠ publicly propagatable. Complex validation logic may require direct builder submission.',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-green-500 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 15: Bottom Line ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '15. 지금 시점에서 꼭 기억할 것' : '15. What to Keep in Mind Right Now'}
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: '⚠️',
                  title: isKo ? '아직 드래프트다' : 'Still a draft',
                  body: isKo ? '지난 몇 달간 20회 이상의 피드백 라운드를 거치며 opcode 번호, 스택 순서, 가스 모델(1차원 → 2차원)까지 여러 번 바뀌었다. 메인넷 반영 시점과 최종 형태는 계속 지켜봐야 한다.' : 'Over 20 feedback rounds in recent months have changed opcode numbers, stack ordering, and the gas model (1D → 2D). Timeline and final form remain to be seen.',
                },
                {
                  icon: '🔍',
                  title: isKo ? '"프로토콜이 뭘 해주는가"와 "ERC가 필요한 부분"을 구분하라' : 'Distinguish "what the protocol handles" vs "what still needs an ERC"',
                  body: isKo ? '배치·서명·ETH 스폰서십은 기본값으로 커버된다. 권한 관리·세션키·패스키 인증·소셜 리커버리·신뢰 없는 ERC-20 가스결제는 여전히 별도 표준화 영역이다.' : 'Batching, signatures, ETH sponsorship are covered by defaults. Permission management, session keys, passkey auth, social recovery, trustless ERC-20 gas payment still need separate standards.',
                },
                {
                  icon: '📡',
                  title: isKo ? '실행 모델 ≠ 멤풀 모델' : 'Execution model ≠ mempool model',
                  body: isKo ? '온체인에서 유효한 것과 공개 P2P 네트워크로 브로드캐스트 가능한 것은 다른 이야기다. 복잡한 검증 로직 = 빌더 직송 필요 가능.' : 'What\'s valid on-chain and what can be broadcast over the public P2P network are different things. Complex validation logic may require direct builder delivery.',
                },
                {
                  icon: '🏁',
                  title: isKo ? '경쟁 제안이 존재한다' : 'Competing proposals exist',
                  body: isKo ? 'EIP-8175, EIP-8130, EIP-8202, EIP-8223, EIP-8224 등 대안들도 활발히 논의 중이다. EIP-8141이 "최종 확정된 표준"이 아니라 여러 설계안 중 가장 활발히 논의되는 하나라는 것을 기억하라.' : 'EIP-8175, EIP-8130, EIP-8202, EIP-8223, EIP-8224 and others are actively discussed. EIP-8141 is the most actively discussed design, not the finalized standard.',
                },
              ].map(item => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <p className="text-slate-700 text-sm leading-relaxed m-0">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 16: TypeScript Frame Tx 구성 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '16. TypeScript로 Frame Transaction 직접 만들기' : '16. Building a Frame Transaction in TypeScript'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '실제로 Frame Transaction을 구성하고 서명해서 노드에 전송하기까지의 전체 흐름을 코드로 살펴보자. EIP-8141이 확정되면 viem/ethers 같은 라이브러리가 이를 추상화하겠지만, 내부 구조를 이해하는 게 핵심이다.'
                : "Let's walk through the full flow of constructing, signing, and submitting a Frame Transaction in code. Once EIP-8141 is finalized, libraries like viem/ethers will abstract this — but understanding the internals is key."}
            </p>
            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '16.1 Frame Transaction RLP 인코딩' : '16.1 Frame Transaction RLP Encoding'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <div className="text-slate-400 text-xs mb-3 font-mono">{isKo ? '// frame-tx.ts — Frame Transaction 구조 정의 및 인코딩' : '// frame-tx.ts — Frame Transaction structure & encoding'}</div>
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`import { RLP } from '@ethereumjs/rlp';
import { keccak256, hexToBytes, bytesToHex } from 'viem';

// Transaction type byte
const TX_TYPE_FRAME = 0x06;

// Frame modes
const FRAME_MODE_DEFAULT = 0;
const FRAME_MODE_VERIFY  = 1;
const FRAME_MODE_SENDER  = 2;

// APPROVE scope constants
const APPROVE_PAYMENT             = 0x1;
const APPROVE_EXECUTION           = 0x2;
const APPROVE_EXECUTION_AND_PAYMENT = 0x3;

// Signature schemes
const SIG_ARBITRARY  = 0x0;
const SIG_SECP256K1  = 0x1;
const SIG_P256       = 0x2;

interface Frame {
  mode: number;
  flags: bigint;        // 256-bit flags field
  target: string | null; // address or null (= tx.sender)
  executionGas: bigint;
  stateGas: bigint;
  value: bigint;
  data: Uint8Array;
}

interface FrameSignature {
  scheme: number;
  signer: string;   // address (20 bytes)
  message: Uint8Array;
  signature: Uint8Array;
}

interface FrameTx {
  chainId: bigint;
  nonce: bigint;
  sender: string;
  frames: Frame[];
  signatures: FrameSignature[];
  maxPriorityFeePerGas: bigint;
  maxFeePerGas: bigint;
  maxFeePerBlobGas: bigint;
  blobVersionedHashes: Uint8Array[];
}

function encodeFrame(f: Frame): Uint8Array[] {
  return [
    RLP.encode(f.mode),
    RLP.encode(f.flags),
    f.target ? hexToBytes(f.target as \`0x\${string}\`) : new Uint8Array(0),
    RLP.encode([f.executionGas, f.stateGas]),
    RLP.encode(f.value),
    f.data,
  ];
}

function encodeSignature(s: FrameSignature): Uint8Array[] {
  return [
    RLP.encode(s.scheme),
    hexToBytes(s.signer as \`0x\${string}\`),
    s.message,
    s.signature,
  ];
}

export function encodeFrameTx(tx: FrameTx): Uint8Array {
  const encoded = RLP.encode([
    tx.chainId,
    tx.nonce,
    hexToBytes(tx.sender as \`0x\${string}\`),
    tx.frames.map(encodeFrame),
    tx.signatures.map(encodeSignature),
    [tx.maxPriorityFeePerGas, tx.maxFeePerGas, tx.maxFeePerBlobGas],
    tx.blobVersionedHashes,
  ]);
  // Prepend transaction type byte 0x06
  const result = new Uint8Array(1 + encoded.length);
  result[0] = TX_TYPE_FRAME;
  result.set(encoded, 1);
  return result;
}

// Signing hash: keccak256(0x06 || rlp(payload))
export function frameTxSigningHash(tx: FrameTx): \`0x\${string}\` {
  return keccak256(encodeFrameTx(tx));
}`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '16.2 가장 단순한 케이스: 기존 EOA가 ETH 전송' : '16.2 Simplest Case: Legacy EOA Sending ETH'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`import { privateKeyToAccount } from 'viem/accounts';
import { createWalletClient, http, parseEther } from 'viem';
import { mainnet } from 'viem/chains';

const account = privateKeyToAccount('0x...');

// Simple ETH transfer as Frame Transaction
// Frame 0: VERIFY (self-pay, self-authorize execution)
// Frame 1: SENDER (actual transfer)
const tx: FrameTx = {
  chainId: 1n,
  nonce: 0n,
  sender: account.address,
  frames: [
    {
      mode: FRAME_MODE_VERIFY,
      flags: BigInt(APPROVE_EXECUTION_AND_PAYMENT), // scope 0x3
      target: null,  // target = tx.sender (self)
      executionGas: 50_000n,
      stateGas: 0n,
      value: 0n,
      data: new Uint8Array(0),
    },
    {
      mode: FRAME_MODE_SENDER,
      flags: 0n,
      target: '0xRecipientAddress',
      executionGas: 21_000n,
      stateGas: 0n,
      value: parseEther('0.1'),
      data: new Uint8Array(0),
    },
  ],
  signatures: [
    {
      scheme: SIG_SECP256K1,
      signer: account.address,
      message: new Uint8Array(0), // auto-computed by protocol for self-verify
      signature: new Uint8Array(0), // filled after signing
    },
  ],
  maxPriorityFeePerGas: 1_000_000_000n,
  maxFeePerGas: 30_000_000_000n,
  maxFeePerBlobGas: 0n,
  blobVersionedHashes: [],
};

// Sign the transaction
const hash = frameTxSigningHash(tx);
const sig = await account.sign({ hash });

// Insert signature (v=1/0, r, s — 65 bytes)
tx.signatures[0].signature = hexToBytes(sig);

const rawTx = encodeFrameTx(tx);
// Submit: eth_sendRawTransaction
const txHash = await client.request({
  method: 'eth_sendRawTransaction',
  params: [bytesToHex(rawTx)],
});`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '16.3 Paymaster 패턴 구성 (스폰서 가스 분리)' : '16.3 Paymaster Pattern (Separate Gas Sponsor)'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// Paymaster pattern:
// Frame 0: VERIFY (userAccount → APPROVE_EXECUTION only)
// Frame 1: VERIFY (paymasterContract → APPROVE_PAYMENT only)
// Frame 2: SENDER (actual user action)

const userTx: FrameTx = {
  chainId: 1n,
  nonce: 0n,
  sender: userAddress,
  frames: [
    {
      mode: FRAME_MODE_VERIFY,
      flags: BigInt(APPROVE_EXECUTION), // scope 0x2 (execution only)
      target: null,  // userAddress
      executionGas: 50_000n,
      stateGas: 0n,
      value: 0n,
      data: new Uint8Array(0),
    },
    {
      mode: FRAME_MODE_VERIFY,
      flags: BigInt(APPROVE_PAYMENT), // scope 0x1 (payment only)
      target: PAYMASTER_ADDRESS,
      executionGas: 80_000n,
      stateGas: 0n,
      value: 0n,
      // paymasterData: ABI-encoded validation params
      data: encodePaymasterData({ userAddress, expiry: BigInt(Date.now() / 1000 + 3600) }),
    },
    {
      mode: FRAME_MODE_SENDER,
      flags: 0n,
      target: UNISWAP_ROUTER,
      executionGas: 200_000n,
      stateGas: 50_000n,
      value: 0n,
      data: encodeSwapData(...),
    },
  ],
  signatures: [
    // sig[0]: user's SECP256K1 signature (for VERIFY frame 0)
    { scheme: SIG_SECP256K1, signer: userAddress, message: new Uint8Array(0), signature: userSig },
    // sig[1]: paymaster's SECP256K1 signature (for VERIFY frame 1)
    { scheme: SIG_SECP256K1, signer: paymasterSigner, message: new Uint8Array(0), signature: paymasterSig },
  ],
  maxPriorityFeePerGas: 1_000_000_000n,
  maxFeePerGas: 30_000_000_000n,
  maxFeePerBlobGas: 0n,
  blobVersionedHashes: [],
};

// NOTE: In this pattern, payer = PAYMASTER_ADDRESS (set when APPROVE_PAYMENT is called)
// Gas deducted from paymaster contract's ETH balance, not user's`}</pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-blue-900 text-sm leading-relaxed m-0">
                <strong>{isKo ? '💡 서명 순서 주의:' : '💡 Note on signature ordering:'}</strong>{' '}
                {isKo
                  ? '기본 코드(default code)는 실행 승인이 포함된 VERIFY 프레임이면 signatures[0]을, 결제 전용이면 signatures[1]을 사용한다. 스마트 계정은 SIGPARAM 오퍼코드로 직접 인덱스를 지정한다.'
                  : 'Default code uses signatures[0] for VERIFY frames with execution approval, and signatures[1] for payment-only frames. Smart accounts use the SIGPARAM opcode to specify the index directly.'}
              </p>
            </div>
          </section>

          {/* ── Section 17: Solidity 스마트 계정 구현 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '17. Solidity로 스마트 계정 작성하기' : '17. Writing a Smart Account in Solidity'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'EIP-8141 스마트 계정의 핵심은 VERIFY 프레임에서 올바르게 APPROVE를 호출하는 것이다. 이 섹션에서는 최소 기능 스마트 계정부터 ERC-7579 모듈식 계정까지 단계별로 구현해본다.'
                : "The heart of an EIP-8141 smart account is correctly calling APPROVE inside a VERIFY frame. This section walks through implementation from a minimal smart account to an ERC-7579 modular account."}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '17.1 최소 기능 스마트 계정 (secp256k1 서명 검증)' : '17.1 Minimal Smart Account (secp256k1 signature verification)'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

// EIP-8141 opcodes as assembly constants
// APPROVE    = 0xaa
// TXPARAM    = 0xb0
// FRAMEPARAM = 0xb3
// SIGPARAM   = 0xb4

contract MinimalSmartAccount {
    // ── Storage ──────────────────────────────────────────────────────
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    // ── VERIFY frame entry point ──────────────────────────────────────
    // Called by ENTRY_POINT (0xaa) as STATICCALL
    // Must call APPROVE to signal validation success
    fallback() external {
        // Read which frame mode we're in via FRAMEPARAM
        uint8 frameMode;
        assembly {
            // FRAMEPARAM(0) returns frame mode
            mstore(0x00, 0)
            let ok := staticcall(gas(), 0xb3, 0x00, 0x20, 0x00, 0x20)
            frameMode := mload(0x00)
        }

        if (frameMode == 1) {
            // VERIFY frame: validate and APPROVE
            _verify();
        }
        // SENDER frame: execution is handled by SENDER mode caller
        // DEFAULT frame: post-op hooks can go here
    }

    function _verify() internal view {
        // 1. Read the signing hash from TXPARAM
        //    TXPARAM(4) = signing_hash (what the protocol computes over the tx)
        bytes32 signingHash;
        assembly {
            mstore(0x00, 4)
            staticcall(gas(), 0xb0, 0x00, 0x20, 0x00, 0x20)
            signingHash := mload(0x00)
        }

        // 2. Read SECP256K1 signature from signatures list
        //    SIGPARAM(0) = number of signatures
        //    For SECP256K1: signature is (v, r, s) = 65 bytes
        uint8 v;
        bytes32 r;
        bytes32 s;
        assembly {
            // SIGPARAM(sigIndex=0, field=0) → scheme
            // For brevity, read SECP256K1 sig at index 0
            // Real impl: read SIGPARAM to get scheme, then SIGDATACOPY
            let ptr := mload(0x40)
            // v = 27 or 28
            mstore(ptr, 0)          // sig index = 0
            mstore(add(ptr, 0x20), 1) // field = 1 (sig data start)
            // SIGDATACOPY(destOffset, sigIndex, srcOffset, length)
            // Stack: [sigIndex, destOffset, srcOffset, length]
            // For secp256k1: v=1byte at offset 0, r=32 at offset 1, s=32 at offset 33
        }
        // NOTE: in practice use SIGDATACOPY via assembly to copy bytes
        // Simplified here: assume sig loaded via library

        // 3. ecrecover and check owner
        address recovered = ecrecover(signingHash, v, r, s);
        require(recovered == owner, "Invalid signature");

        // 4. APPROVE — tell the protocol this frame is validated
        //    APPROVE(offset=0, length=0, scope=0x3)
        //    scope 0x3 = APPROVE_EXECUTION_AND_PAYMENT
        uint8 scope = 0x3; // or read from frame flags
        assembly {
            // Stack: [offset, length, scope]
            // APPROVE opcode = 0xaa
            mstore(0x00, 0)    // offset
            mstore(0x20, 0)    // length
            mstore(0x40, scope) // scope
            // Call APPROVE via assembly
            // Note: APPROVE is a new opcode, not a precompile call
            // In real EIP-8141 EVM it's a native opcode
            pop(call(gas(), 0xaa, 0, 0, 0x60, 0, 0))
        }
    }
}`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '17.2 분리된 결제/실행 APPROVE 패턴' : '17.2 Separated Payment/Execution APPROVE Pattern'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// Two separate VERIFY frames pattern:
// Frame 0: userAccount verifies sig → APPROVE(scope=0x2) execution only
// Frame 1: paymasterContract verifies policy → APPROVE(scope=0x1) payment only

contract UserSmartAccount {
    address public owner;

    fallback() external {
        uint8 frameMode = _getFrameMode();
        if (frameMode != 1) return; // Only handle VERIFY frames

        // Read allowed scope from frame flags
        // flags & 0x3 = scope bits
        uint256 flags = _getFrameFlags();
        uint8 allowedScope = uint8(flags & 0x3);
        require(allowedScope != 0, "No scope allowed");

        // Verify signature
        bytes32 sigHash = _getTxSigningHash();
        require(_verifyOwnerSig(sigHash), "Bad sig");

        // APPROVE only execution (not payment — paymaster handles that)
        _approve(APPROVE_EXECUTION); // scope = 0x2
    }

    function _approve(uint8 scope) internal {
        assembly {
            // APPROVE opcode 0xaa
            // Arguments pushed to stack: offset=0, length=0, scope
            let ok := call(gas(), 0xaa, 0, 0, 0, 0, 0)
            // The actual EIP-8141 APPROVE opcode takes scope from frame flags
            // or from the call arguments depending on final spec
        }
    }

    // Helper: read frame mode via FRAMEPARAM opcode
    function _getFrameMode() internal view returns (uint8 mode) {
        assembly {
            mstore(0x00, 0) // param index 0 = mode
            staticcall(gas(), 0xb3, 0x00, 0x20, 0x00, 0x20)
            mode := and(mload(0x00), 0xff)
        }
    }

    function _getFrameFlags() internal view returns (uint256 flags) {
        assembly {
            mstore(0x00, 1) // param index 1 = flags
            staticcall(gas(), 0xb3, 0x00, 0x20, 0x00, 0x20)
            flags := mload(0x00)
        }
    }

    function _getTxSigningHash() internal view returns (bytes32 h) {
        assembly {
            mstore(0x00, 4) // TXPARAM index 4 = signing_hash
            staticcall(gas(), 0xb0, 0x00, 0x20, 0x00, 0x20)
            h := mload(0x00)
        }
    }

    function _verifyOwnerSig(bytes32 hash) internal view returns (bool) {
        // In practice: SIGDATACOPY to load sig bytes, then ecrecover
        // Simplified: assume library call
        return true; // placeholder
    }

    uint8 constant APPROVE_EXECUTION = 0x2;
}`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '17.3 TXPARAM 파라미터 인덱스 레퍼런스' : '17.3 TXPARAM Parameter Index Reference'}</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">{isKo ? '인덱스' : 'Index'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '반환값' : 'Returns'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '용도' : 'Use case'}</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[
                    { idx: '0', ret: 'tx.sender', use: isKo ? '사용자 주소 확인' : 'Verify user address' },
                    { idx: '1', ret: 'tx.nonce', use: isKo ? '논스 검증 (재사용 방지)' : 'Nonce validation (replay protection)' },
                    { idx: '2', ret: 'tx.max_cost', use: isKo ? 'Paymaster가 지불 가능한지 확인' : 'Paymaster checks if it can cover cost' },
                    { idx: '3', ret: 'tx.chain_id', use: isKo ? '체인 분리 보장' : 'Chain isolation guarantee' },
                    { idx: '4', ret: 'signing_hash', use: isKo ? '서명 검증용 해시' : 'Hash used for signature verification' },
                    { idx: '5', ret: 'frame_count', use: isKo ? '총 프레임 수' : 'Total number of frames' },
                    { idx: '6', ret: 'current_frame_idx', use: isKo ? '현재 실행 중인 프레임 인덱스' : 'Index of currently executing frame' },
                  ].map((row, i) => (
                    <tr key={row.idx} className={i % 2 === 0 ? 'bg-white border-b border-slate-100' : 'bg-slate-50 border-b border-slate-100'}>
                      <td className="px-4 py-3 font-mono text-blue-700 font-bold">{row.idx}</td>
                      <td className="px-4 py-3 font-mono text-green-700">{row.ret}</td>
                      <td className="px-4 py-3 text-slate-600">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 18: Canonical Paymaster Solidity ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '18. Canonical Paymaster 완전 구현' : '18. Canonical Paymaster — Full Implementation'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'EIP-8141의 mempool 허용 패턴 중 [only_verify → pay]가 공식 Paymaster 패턴이다. Paymaster 컨트랙트는 VERIFY 프레임에서 APPROVE_PAYMENT를 호출한다. 아래는 최소 기능 Paymaster 전체 구현이다.'
                : 'Among EIP-8141\'s allowed mempool patterns, [only_verify → pay] is the canonical Paymaster pattern. The Paymaster contract calls APPROVE_PAYMENT inside a VERIFY frame. Below is a full minimal Paymaster implementation.'}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

/// @title MinimalPaymaster
/// @notice EIP-8141 Canonical Paymaster implementation
/// @dev Receives VERIFY frames with scope=APPROVE_PAYMENT (0x1)
///      Validates user policy and calls APPROVE to cover tx costs
contract MinimalPaymaster {
    // ── Constants ──────────────────────────────────────────────────────
    uint8 constant FRAME_MODE_VERIFY = 1;
    uint8 constant APPROVE_PAYMENT   = 0x1;

    // EIP-8141 special address for ENTRY_POINT
    address constant ENTRY_POINT = address(0xaa);

    // ── Storage ────────────────────────────────────────────────────────
    address public admin;
    // user address → whether they are whitelisted for free gas
    mapping(address => bool) public whitelist;
    // user address → USDC allowance for gas payment
    mapping(address => uint256) public usdcGasBalance;
    // accumulated protocol fee in USDC
    uint256 public feePool;

    event GasSponsored(address indexed user, uint256 maxCost);
    event GasPaidInUsdc(address indexed user, uint256 usdcAmount);

    constructor() {
        admin = msg.sender;
    }

    // ── Deposit / Admin ────────────────────────────────────────────────
    receive() external payable {}  // Accept ETH to fund gas

    function depositUsdcFor(address user, uint256 amount) external {
        // Pull USDC from caller (requires ERC-20 approve first)
        IERC20(USDC_ADDRESS).transferFrom(msg.sender, address(this), amount);
        usdcGasBalance[user] += amount;
    }

    function setWhitelist(address user, bool allowed) external {
        require(msg.sender == admin, "Not admin");
        whitelist[user] = allowed;
    }

    // ── Main VERIFY frame handler ──────────────────────────────────────
    fallback() external {
        // Only handle VERIFY frames
        require(_frameMode() == FRAME_MODE_VERIFY, "Not VERIFY frame");

        // Read tx params via TXPARAM
        address txSender = _txParam(0);
        uint256 maxCost  = _txParam(2); // max ETH cost of entire tx

        // ── Policy check: whitelist OR USDC prepayment ──────────────
        if (whitelist[txSender]) {
            // Free sponsorship for whitelisted users
            emit GasSponsored(txSender, maxCost);
            _approve(APPROVE_PAYMENT);
        } else {
            // Check USDC gas balance covers cost (using price oracle)
            uint256 usdcRequired = _ethToUsdc(maxCost);
            require(usdcGasBalance[txSender] >= usdcRequired, "Insufficient USDC gas balance");

            // Deduct USDC upfront (debit during VERIFY, refund in post-op if needed)
            usdcGasBalance[txSender] -= usdcRequired;
            feePool += usdcRequired;

            emit GasPaidInUsdc(txSender, usdcRequired);
            _approve(APPROVE_PAYMENT);
        }
        // If we reach here without APPROVE, tx is rejected
    }

    // ── EIP-8141 Opcode wrappers ────────────────────────────────────────
    function _approve(uint8 scope) internal {
        assembly {
            // APPROVE opcode 0xaa: sets payer = address(this), nonce++, deducts max_cost
            pop(call(gas(), 0xaa, 0, 0, 0, 0, 0))
        }
    }

    function _frameMode() internal view returns (uint8 mode) {
        assembly {
            mstore(0, 0)
            staticcall(gas(), 0xb3, 0, 0x20, 0, 0x20)
            mode := and(mload(0), 0xff)
        }
    }

    function _txParam(uint256 idx) internal view returns (address val) {
        assembly {
            mstore(0, idx)
            staticcall(gas(), 0xb0, 0, 0x20, 0, 0x20)
            val := mload(0)
        }
    }

    function _ethToUsdc(uint256 ethAmount) internal view returns (uint256) {
        // Simplified: use a price oracle (Chainlink ETH/USD)
        // Real impl: IPriceFeed(ORACLE).latestRoundData()
        uint256 ethPriceInUsdc = 3000 * 1e6; // $3000 per ETH, 6 decimals
        return (ethAmount * ethPriceInUsdc) / 1e18;
    }

    address constant USDC_ADDRESS = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48; // mainnet USDC
}

interface IERC20 {
    function transferFrom(address, address, uint256) external returns (bool);
    function transfer(address, uint256) external returns (bool);
}`}</pre>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-yellow-900 text-sm leading-relaxed m-0">
                <strong>{isKo ? '⚠️ Paymaster 보안 주의사항:' : '⚠️ Paymaster Security Notes:'}</strong>{' '}
                {isKo
                  ? 'VERIFY 프레임은 STATICCALL이라 상태 변경이 금지된다. usdcGasBalance 차감은 실제 구현에서 EVM 상태 변경이 필요해 구조적으로 다르게 설계해야 할 수 있다. 스펙 확정 후 재검토 필요.'
                  : 'VERIFY frames run as STATICCALL, so state mutations are forbidden. The usdcGasBalance deduction requires state change — the actual implementation may need a different structure. Revisit after spec finalization.'}
              </p>
            </div>
          </section>

          {/* ── Section 19: P256 / WebAuthn / ARBITRARY 서명 검증 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '19. P256 / WebAuthn / ARBITRARY 서명 검증 구현' : '19. Implementing P256 / WebAuthn / ARBITRARY Signature Verification'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'ARBITRARY scheme(0x0)의 핵심은 SIGDATACOPY + SIGPARAM으로 서명 바이트를 EVM 메모리로 불러온 뒤 원하는 방식으로 검증하는 것이다. P256 scheme(0x2)은 프로토콜이 내장 검증을 수행하지만 signer 주소 도출 방식을 반드시 이해해야 한다.'
                : 'The essence of ARBITRARY scheme (0x0) is loading signature bytes into EVM memory via SIGDATACOPY + SIGPARAM, then verifying in any way you want. P256 scheme (0x2) gets built-in protocol verification, but you must understand signer address derivation.'}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '19.1 P256 / 패스키 서명 스마트 계정' : '19.1 P256 / Passkey Signature Smart Account'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// P256 signer address derivation:
// When signature scheme = P256 (0x2), signature encoding is:
//   r(32) || s(32) || qx(32) || qy(32)  = 128 bytes
//
// Protocol derives signer address as:
//   keccak256(qx || qy)[12:]  ← last 20 bytes of keccak hash
//
// This is analogous to ECDSA but uses P256 public key components.

contract P256SmartAccount {
    // The P256 "signer address" stored at construction
    // = keccak256(pubKeyX || pubKeyY)[12:]
    address public p256Signer;

    uint8 constant FRAME_MODE_VERIFY = 1;

    constructor(bytes32 pubKeyX, bytes32 pubKeyY) {
        // Compute P256 signer address from public key
        p256Signer = address(uint160(uint256(keccak256(abi.encodePacked(pubKeyX, pubKeyY)))));
    }

    fallback() external {
        if (_frameMode() != FRAME_MODE_VERIFY) return;

        // For P256 scheme, the protocol itself verifies the signature.
        // The VERIFY frame's job is just to confirm the signer matches owner.
        // Use SIGPARAM to read the signer address that the protocol resolved.

        address resolvedSigner;
        assembly {
            // SIGPARAM(sigIndex=0, field=2) = signer address resolved by protocol
            mstore(0x00, 0)  // sig index 0
            mstore(0x20, 2)  // field 2 = resolved signer
            staticcall(gas(), 0xb4, 0x00, 0x40, 0x00, 0x20)
            resolvedSigner := mload(0x00)
        }

        require(resolvedSigner == p256Signer, "P256: wrong signer");

        // Additional checks: nonce, expiry, scope
        _approve(0x3); // APPROVE_EXECUTION_AND_PAYMENT
    }

    function _approve(uint8 scope) internal {
        assembly { pop(call(gas(), 0xaa, 0, 0, 0, 0, 0)) }
    }

    function _frameMode() internal view returns (uint8 m) {
        assembly {
            mstore(0, 0)
            staticcall(gas(), 0xb3, 0, 0x20, 0, 0x20)
            m := and(mload(0), 0xff)
        }
    }
}

// ── ARBITRARY scheme: BLS / Custom Signature ──────────────────────────
// Use SIGDATACOPY to pull arbitrary sig bytes and verify with EVM bytecode

contract ArbitrarySignatureAccount {
    // For example: a simple 2-of-2 multi-sig with BLS aggregation
    bytes32 public blsPublicKeyHash; // hash of the aggregate BLS public key

    fallback() external {
        if (_frameMode() != 1) return;

        // 1. Get ARBITRARY sig length via SIGPARAM
        uint256 sigLen;
        assembly {
            mstore(0x00, 0)  // sig index 0
            mstore(0x20, 3)  // field 3 = signature byte length (for ARBITRARY)
            staticcall(gas(), 0xb4, 0x00, 0x40, 0x00, 0x20)
            sigLen := mload(0x00)
        }

        // 2. Copy signature bytes to memory via SIGDATACOPY
        bytes memory sigBytes = new bytes(sigLen);
        assembly {
            // SIGDATACOPY(sigIndex=0, destOffset=sigBytes+32, srcOffset=0, length=sigLen)
            mstore(0x00, 0)              // sig index
            mstore(0x20, add(sigBytes, 32)) // dest
            mstore(0x40, 0)              // src offset
            mstore(0x60, sigLen)         // length
            staticcall(gas(), 0xb5, 0x00, 0x80, 0x00, 0x00)
        }

        // 3. Verify BLS signature in EVM bytecode
        //    (In practice: call a BLS precompile or EIP-2537 G1/G2 operations)
        bytes32 sigHash = _getTxSigningHash();
        require(_verifyBLS(sigHash, sigBytes), "BLS: invalid signature");

        _approve(0x3);
    }

    function _verifyBLS(bytes32 msgHash, bytes memory sig) internal view returns (bool) {
        // EIP-2537 BLS precompile calls would go here
        // Placeholder implementation
        return sig.length > 0;
    }

    function _getTxSigningHash() internal view returns (bytes32 h) {
        assembly {
            mstore(0, 4)
            staticcall(gas(), 0xb0, 0, 0x20, 0, 0x20)
            h := mload(0)
        }
    }

    function _frameMode() internal view returns (uint8 m) {
        assembly {
            mstore(0, 0)
            staticcall(gas(), 0xb3, 0, 0x20, 0, 0x20)
            m := and(mload(0), 0xff)
        }
    }

    function _approve(uint8 scope) internal {
        assembly { pop(call(gas(), 0xaa, 0, 0, 0, 0, 0)) }
    }
}`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '19.2 TypeScript: WebAuthn P256 서명 준비' : '19.2 TypeScript: Preparing a WebAuthn P256 Signature'}</h3>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// WebAuthn passkey authentication → EIP-8141 P256 signature
import { startAuthentication } from '@simplewebauthn/browser';
import { keccak256, hexToBytes, bytesToHex, concatBytes } from 'viem';

interface P256Signature {
  r: Uint8Array;  // 32 bytes
  s: Uint8Array;  // 32 bytes
  qx: Uint8Array; // 32 bytes (public key X)
  qy: Uint8Array; // 32 bytes (public key Y)
}

async function signFrameTxWithPasskey(
  txHash: \`0x\${string}\`,
  credentialId: string,
): Promise<P256Signature> {
  // Convert tx hash to WebAuthn challenge
  const challenge = Buffer.from(hexToBytes(txHash)).toString('base64url');

  // Request WebAuthn authentication
  const assertion = await startAuthentication({
    optionsJSON: {
      challenge,
      rpId: window.location.hostname,
      allowCredentials: [{ id: credentialId, type: 'public-key' }],
      userVerification: 'required',
    },
  });

  // Parse the CBOR-encoded signature from WebAuthn response
  // assertion.response.signature contains DER-encoded P256 sig
  const derSig = Buffer.from(assertion.response.signature, 'base64url');

  // Parse DER signature → (r, s)
  const { r, s } = parseDerP256Signature(derSig);

  // qx, qy come from the stored credential public key (registered at account creation)
  const { qx, qy } = await getStoredPublicKey(credentialId);

  return { r, s, qx, qy };
}

// Encode as EIP-8141 P256 signature bytes: r||s||qx||qy = 128 bytes
function encodeP256Signature(sig: P256Signature): Uint8Array {
  return concatBytes([sig.r, sig.s, sig.qx, sig.qy]); // 128 bytes total
}

// Derive the P256 "signer address" (matches what protocol computes)
function deriveP256SignerAddress(qx: Uint8Array, qy: Uint8Array): \`0x\${string}\` {
  const combined = concatBytes([qx, qy]); // 64 bytes
  const hash = keccak256(combined);
  // Take last 20 bytes
  return \`0x\${hash.slice(-40)}\` as \`0x\${string}\`;
}`}</pre>
            </div>
          </section>

          {/* ── Section 20: 2D 가스 추정 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '20. 2D 가스 추정 — TypeScript 구현' : '20. 2D Gas Estimation — TypeScript Implementation'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'EIP-8141은 EIP-8037(2D 가스)에 의존한다. 각 프레임은 execution_gas와 state_gas 두 개의 독립적인 가스 예산을 가진다. 이 둘은 서로 교환 불가능하다. 올바른 가스 추정을 위해 각 프레임의 두 가스 버킷을 따로 계산해야 한다.'
                : 'EIP-8141 depends on EIP-8037 (2D gas). Each frame has two independent gas budgets: execution_gas and state_gas. These are non-interchangeable. Correct gas estimation requires computing each gas bucket separately for each frame.'}
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">{isKo ? '가스 타입' : 'Gas Type'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '측정 대상' : 'Measures'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '가격 결정 요인' : 'Price driver'}</th>
                    <th className="text-left px-4 py-3">{isKo ? '메모리풀 상한' : 'Mempool cap'}</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="bg-white border-b">
                    <td className="px-4 py-3 font-mono font-bold text-blue-700">execution_gas</td>
                    <td className="px-4 py-3 text-slate-600">{isKo ? 'CPU / 계산 비용 (ADD, MUL, CALL 등)' : 'CPU / compute cost (ADD, MUL, CALL, etc.)'}</td>
                    <td className="px-4 py-3 text-slate-600">{isKo ? '블록 수요 / 혼잡도' : 'Block demand / congestion'}</td>
                    <td className="px-4 py-3 font-mono">100,000</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-mono font-bold text-purple-700">state_gas</td>
                    <td className="px-4 py-3 text-slate-600">{isKo ? '스토리지 I/O (SLOAD, SSTORE 등)' : 'Storage I/O (SLOAD, SSTORE, etc.)'}</td>
                    <td className="px-4 py-3 text-slate-600">{isKo ? '상태 팽창 압력' : 'State growth pressure'}</td>
                    <td className="px-4 py-3 font-mono">500,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <div className="text-slate-400 text-xs mb-3 font-mono">{isKo ? '// gas-estimation.ts — 2D 가스 추정 유틸리티' : '// gas-estimation.ts — 2D gas estimation utilities'}</div>
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

interface FrameGasEstimate {
  frameIndex: number;
  executionGas: bigint;
  stateGas: bigint;
}

interface TxGasEstimate {
  frames: FrameGasEstimate[];
  totalExecutionGas: bigint;
  totalStateGas: bigint;
  // max_cost in ETH = (totalExecutionGas * max_fee_per_gas)
  //                 + (totalStateGas * max_state_fee_per_gas) [EIP-8037]
  maxCostWei: bigint;
}

// Estimate 2D gas for a Frame Transaction
// EIP-8141 nodes will expose eth_estimateFrameTxGas (hypothetical)
async function estimateFrameTxGas(
  tx: FrameTx,
  rpcUrl: string,
): Promise<TxGasEstimate> {
  const client = createPublicClient({ transport: http(rpcUrl) });

  // In practice: call eth_estimateFrameTxGas (EIP-8141 new RPC method)
  // For now, simulate by estimating each frame separately

  const estimates: FrameGasEstimate[] = [];
  let totalExec = 0n;
  let totalState = 0n;

  for (let i = 0; i < tx.frames.length; i++) {
    const frame = tx.frames[i];

    // Classify opcodes into execution vs state costs
    // State gas: SLOAD=2100, SSTORE=20000 (warm), etc.
    // Execution gas: everything else

    // Simplified heuristic (replace with actual simulation):
    const exec = await estimateExecutionGas(client, frame);
    const state = await estimateStateGas(client, frame);

    estimates.push({ frameIndex: i, executionGas: exec, stateGas: state });
    totalExec += exec;
    totalState += state;
  }

  // Mempool constraints check
  // Validation prefix frames (VERIFY frames) must fit within limits
  const verifyFrames = tx.frames.filter(f => f.mode === 1);
  const verifyExecTotal = verifyFrames.reduce((sum, _, i) => sum + estimates.filter(e => tx.frames[e.frameIndex].mode === 1)[i]?.executionGas ?? 0n, 0n);
  if (verifyExecTotal > 100_000n) {
    console.warn(\`WARNING: VERIFY frames exec gas \${verifyExecTotal} exceeds mempool limit 100,000 — tx will not propagate via public mempool\`);
  }

  // Compute max_cost
  // max_cost = exec_gas * max_fee_per_gas + state_gas * max_state_fee_per_gas
  const maxFeePerGas = tx.maxFeePerGas;
  const maxStateFeePerGas = 1_000_000n; // example: 0.001 gwei per state gas unit
  const maxCostWei = totalExec * maxFeePerGas + totalState * maxStateFeePerGas;

  return { frames: estimates, totalExecutionGas: totalExec, totalStateGas: totalState, maxCostWei };
}

async function estimateExecutionGas(client: any, frame: Frame): Promise<bigint> {
  // Simulate with eth_call for the frame target
  // State gas ops are excluded from execution gas in 2D model
  return 21_000n; // baseline + estimated compute
}

async function estimateStateGas(client: any, frame: Frame): Promise<bigint> {
  // Count storage operations in frame.data (ABI decode calldata, trace SLOADs/SSTOREs)
  // SLOAD = 2100 state gas, SSTORE (set) = 20000 state gas, etc.
  return 5_000n; // example
}

// Usage
const estimate = await estimateFrameTxGas(myFrameTx, 'https://eth-mainnet.rpc.url');
console.log('Total exec gas:', estimate.totalExecutionGas);
console.log('Total state gas:', estimate.totalStateGas);
console.log('Max cost:', estimate.maxCostWei, 'wei');

// Set limits in frames with safety margin
for (let i = 0; i < myFrameTx.frames.length; i++) {
  myFrameTx.frames[i].executionGas = estimate.frames[i].executionGas * 120n / 100n; // 20% buffer
  myFrameTx.frames[i].stateGas = estimate.frames[i].stateGas * 120n / 100n;
}`}</pre>
            </div>
          </section>

          {/* ── Section 21: ERC-4337 → EIP-8141 마이그레이션 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '21. ERC-4337에서 EIP-8141로 마이그레이션' : '21. Migrating from ERC-4337 to EIP-8141'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'ERC-4337 스마트 계정을 운용하고 있다면 EIP-8141이 활성화될 때 어떤 부분을 바꿔야 하는지 미리 파악해두는 게 중요하다. 개념 매핑부터 코드 비교까지 살펴본다.'
                : 'If you operate an ERC-4337 smart account, it\'s important to understand in advance what needs to change when EIP-8141 activates. Let\'s look at concept mapping and code comparison.'}
            </p>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '21.1 개념 대응표' : '21.1 Concept Mapping Table'}</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">ERC-4337</th>
                    <th className="text-left px-4 py-3">EIP-8141</th>
                    <th className="text-left px-4 py-3">{isKo ? '변경 사항' : 'Changes'}</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {[
                    { a: 'UserOperation', b: 'FrameTx (type 0x06)', c: isKo ? 'RLP 인코딩 구조 완전히 다름. alt mempool 불필요' : 'Completely different RLP structure. No alt mempool.' },
                    { a: 'Bundler', b: '제거됨', c: isKo ? '공개 mempool에 직접 전송 가능' : 'Submit directly to public mempool' },
                    { a: 'EntryPoint.handleOps()', b: '프로토콜 내장 처리', c: isKo ? '별도 컨트랙트 호출 불필요' : 'No separate contract call needed' },
                    { a: 'validateUserOp()', b: 'fallback() VERIFY 분기', c: isKo ? 'IAccount 인터페이스 대신 FRAMEPARAM 체크' : 'Use FRAMEPARAM check instead of IAccount interface' },
                    { a: 'IPaymaster.validatePaymasterUserOp()', b: 'fallback() VERIFY (APPROVE_PAYMENT)', c: isKo ? 'paymaster 컨트랙트 구조는 유사하나 EntryPoint 없음' : 'Similar paymaster contract structure, but no EntryPoint' },
                    { a: 'postOp()', b: 'DEFAULT mode 프레임', c: isKo ? 'postOp 로직은 DEFAULT 프레임으로 이동' : 'postOp logic moves to DEFAULT frame' },
                    { a: 'callData()', b: 'SENDER frame data', c: isKo ? 'SENDER 프레임 data 필드에 callData 포함' : 'callData goes in SENDER frame data field' },
                    { a: 'nonce', b: 'tx.nonce (TXPARAM)', c: isKo ? '논스 관리 프로토콜로 이관. 키드 논스는 EIP-8250' : 'Nonce management moves to protocol. Keyed nonces in EIP-8250' },
                  ].map((row, i) => (
                    <tr key={row.a} className={i % 2 === 0 ? 'bg-white border-b border-slate-100' : 'bg-slate-50 border-b border-slate-100'}>
                      <td className="px-4 py-3 font-mono text-blue-700 font-semibold">{row.a}</td>
                      <td className="px-4 py-3 font-mono text-purple-700 font-semibold">{row.b}</td>
                      <td className="px-4 py-3 text-slate-600">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '21.2 Before / After 코드 비교' : '21.2 Before / After Code Comparison'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="bg-red-900 text-red-200 text-xs font-mono px-4 py-2 rounded-t-xl">ERC-4337 스마트 계정</div>
                <div className="bg-slate-800 rounded-b-xl p-4">
                  <pre className="text-red-300 text-xs font-mono overflow-x-auto">{`// ERC-4337: IAccount interface
contract MyAccount is IAccount {
  function validateUserOp(
    UserOperation calldata userOp,
    bytes32 userOpHash,
    uint256 missingAccountFunds
  ) external returns (uint256 validationData) {

    // Check caller is EntryPoint
    require(msg.sender == address(entryPoint));

    // Verify signature
    bytes32 hash = userOpHash.toEthSignedMessageHash();
    if (owner != hash.recover(userOp.signature))
      return SIG_VALIDATION_FAILED;

    // Pay missing funds to EntryPoint
    if (missingAccountFunds != 0)
      payable(msg.sender).call{value: missingAccountFunds}("");

    return 0; // success
  }

  function execute(address dest, uint256 value, bytes calldata func)
    external onlyEntryPoint {
    dest.call{value: value}(func);
  }
}`}</pre>
                </div>
              </div>
              <div>
                <div className="bg-green-900 text-green-200 text-xs font-mono px-4 py-2 rounded-t-xl">EIP-8141 스마트 계정</div>
                <div className="bg-slate-800 rounded-b-xl p-4">
                  <pre className="text-green-400 text-xs font-mono overflow-x-auto">{`// EIP-8141: VERIFY frame pattern
contract MyAccount {
  address public owner;

  fallback() external {
    // No EntryPoint check needed —
    // protocol guarantees caller = ENTRY_POINT (0xaa)
    // for VERIFY frames

    uint8 mode = _frameMode();
    if (mode != 1) return; // not VERIFY

    // Get signing hash via TXPARAM
    bytes32 hash = _txParam(4);

    // Verify owner signature directly
    // (no IAccount interface, no missingFunds)
    require(
      owner == ECDSA.recover(hash, _getSecp256k1Sig()),
      "Bad sig"
    );

    // APPROVE — signal protocol to proceed
    // No ETH transfer needed!
    _approve(0x3);
  }
  // No execute() needed: SENDER frames call target directly
  // msg.sender = tx.sender guaranteed by protocol
}`}</pre>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-900 text-sm leading-relaxed m-0">
                <strong>{isKo ? '✅ 코드 감소 포인트:' : '✅ Code reduction points:'}</strong>{' '}
                {isKo
                  ? '① EntryPoint 주소 하드코딩 제거 ② missingAccountFunds ETH 전송 로직 제거 ③ execute() 함수 제거 (SENDER 프레임이 직접 target 호출) ④ IAccount 인터페이스 구현 불필요. 전체 계약 코드가 40~60% 줄어드는 효과.'
                  : '① Remove EntryPoint address hardcoding ② Remove missingAccountFunds ETH transfer logic ③ Remove execute() function (SENDER frame calls target directly) ④ No IAccount interface needed. Overall contract code shrinks 40~60%.'}
              </p>
            </div>
          </section>

          {/* ── Section 22: Expiry Verifier 프리컴파일 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '22. Expiry Verifier — address(0x8141) 프리컴파일 활용' : '22. Expiry Verifier — Using the address(0x8141) Precompile'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'EIP-8141은 address(0x8141)에 만료 검증 프리컴파일을 추가한다. VERIFY 프레임 안에서 이 주소를 호출하면 Unix 타임스탬프를 검증하고 block.timestamp를 초과했을 때 revert한다. 세션 키, 임시 위임, 시간 제한 서명에 필수적인 원시 기능이다.'
                : 'EIP-8141 adds an expiry verification precompile at address(0x8141). Call this inside a VERIFY frame to validate a Unix timestamp — it reverts if block.timestamp exceeds the expiry. This is an essential primitive for session keys, temporary delegation, and time-limited signatures.'}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// EXPIRY_VERIFIER precompile at address(0x8141)
// Input: 8 bytes = uint64 Unix timestamp
// Output: nothing (reverts if expired)
// Gas: 6 gas

// ── Solidity usage ────────────────────────────────────────────────────
contract ExpiringSmartAccount {
    address constant EXPIRY_VERIFIER = address(0x8141);

    fallback() external {
        if (_frameMode() != 1) return;

        // 1. Read expiry from frame calldata (first 8 bytes)
        uint64 expiry;
        assembly {
            // FRAMEDATALOAD reads 32 bytes from frame data at offset 0
            mstore(0, 0)
            staticcall(gas(), 0xb1, 0, 0x20, 0, 0x20)
            // expiry is in the first 8 bytes (big-endian)
            expiry := shr(192, mload(0))  // shift right 192 bits to get uint64
        }

        // 2. Call EXPIRY_VERIFIER precompile
        //    Input: 8-byte expiry timestamp
        bytes memory input = abi.encodePacked(expiry);
        (bool ok,) = EXPIRY_VERIFIER.staticcall(input);
        require(ok, "Transaction expired");

        // 3. Verify signature
        bytes32 hash = _txParam(4);
        require(_verifyOwnerSig(hash), "Bad sig");

        // 4. Approve
        _approve(0x3);
    }

    // ── TypeScript: building expiring transaction ─────────────────────
    // On the client side, encode expiry in frame calldata:
    // const expiry = BigInt(Math.floor(Date.now() / 1000) + 3600); // 1 hour
    // const frameData = new Uint8Array(8);
    // new DataView(frameData.buffer).setBigUint64(0, expiry, false); // big-endian

    function _txParam(uint256 idx) internal view returns (bytes32 h) {
        assembly {
            mstore(0, idx)
            staticcall(gas(), 0xb0, 0, 0x20, 0, 0x20)
            h := mload(0)
        }
    }

    function _frameMode() internal view returns (uint8 m) {
        assembly {
            mstore(0, 0)
            staticcall(gas(), 0xb3, 0, 0x20, 0, 0x20)
            m := and(mload(0), 0xff)
        }
    }

    function _approve(uint8 scope) internal {
        assembly { pop(call(gas(), 0xaa, 0, 0, 0, 0, 0)) }
    }

    function _verifyOwnerSig(bytes32) internal view returns (bool) {
        return true; // placeholder
    }
}`}</pre>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <p className="text-purple-900 text-sm leading-relaxed m-0">
                <strong>{isKo ? '💡 실전 패턴 — 시간 제한 세션 서명:' : '💡 Production pattern — time-limited session signature:'}</strong>{' '}
                {isKo
                  ? '사용자가 "1시간 동안 이 DApp이 나 대신 스왑할 수 있다"는 서명을 오프체인에 생성한다. 서명 데이터에 expiry를 포함시키고, VERIFY 프레임 calldata에 전달. EXPIRY_VERIFIER가 만료를 온체인에서 강제한다. 사용자 재서명 없이 세션이 자동 만료된다.'
                  : "A user creates an off-chain signature that says 'this DApp can swap on my behalf for 1 hour.' The signature data includes the expiry and is passed as VERIFY frame calldata. EXPIRY_VERIFIER enforces expiry on-chain. Sessions auto-expire without requiring user re-signature."}
              </p>
            </div>
          </section>

          {/* ── Section 23: 세션 키 패턴 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '23. 세션 키 패턴 구현' : '23. Session Key Pattern Implementation'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? '세션 키는 "특정 DApp이 제한된 범위 안에서 사용자 대신 행동할 수 있는 임시 키"다. EIP-8141에서는 VERIFY 프레임이 세션 키 정책을 완전히 EVM 레벨에서 집행할 수 있어 별도 위임 컨트랙트가 필요 없다.'
                : "Session keys are 'temporary keys that allow a specific DApp to act on behalf of the user within a limited scope.' In EIP-8141, VERIFY frames can enforce session key policies entirely at the EVM level — no separate delegation contract needed."}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

/// @notice Session key policy smart account
/// Allows a game/DApp to execute limited actions on behalf of the user
contract SessionKeyAccount {
    address public owner;
    address constant EXPIRY_VERIFIER = address(0x8141);

    struct SessionKey {
        address key;           // temporary key address
        uint64 expiry;         // Unix timestamp
        address allowedTarget; // only this contract can be called in SENDER frames
        uint256 maxValuePerTx; // max ETH per transaction
        bool active;
    }

    // owner-authorized session keys
    mapping(address => SessionKey) public sessions;

    // ── Owner functions ───────────────────────────────────────────────
    function authorizeSessionKey(
        address sessionKey,
        uint64 expiry,
        address allowedTarget,
        uint256 maxValue
    ) external {
        require(msg.sender == address(this), "Must call via SENDER frame");
        sessions[sessionKey] = SessionKey({
            key: sessionKey,
            expiry: expiry,
            allowedTarget: allowedTarget,
            maxValuePerTx: maxValue,
            active: true
        });
    }

    function revokeSessionKey(address sessionKey) external {
        require(msg.sender == address(this), "Must call via SENDER frame");
        sessions[sessionKey].active = false;
    }

    // ── VERIFY frame handler ─────────────────────────────────────────
    fallback() external {
        if (_frameMode() != 1) return;

        bytes32 sigHash = bytes32(_txParam(4));

        // Try owner signature first (full permission)
        if (_tryOwnerVerify(sigHash)) {
            _approve(0x3);
            return;
        }

        // Try session key verification (limited permission)
        _sessionKeyVerify(sigHash);
    }

    function _tryOwnerVerify(bytes32 hash) internal view returns (bool) {
        // SECP256K1 sig at index 0
        address recovered = _ecrecoverFromSig(hash, 0);
        return recovered == owner;
    }

    function _sessionKeyVerify(bytes32 hash) internal {
        // Session key sig at index 0 (or index 1 if owner sig index is 0)
        address sessionKeyAddr = _ecrecoverFromSig(hash, 0);
        SessionKey storage session = sessions[sessionKeyAddr];

        require(session.active, "Session key not active");

        // Check expiry via EXPIRY_VERIFIER precompile
        bytes memory expiryInput = abi.encodePacked(session.expiry);
        (bool ok,) = EXPIRY_VERIFIER.staticcall(expiryInput);
        require(ok, "Session key expired");

        // Check frame target matches allowed target
        // Read frame target via FRAMEPARAM
        address frameTarget;
        assembly {
            mstore(0, 2) // FRAMEPARAM index 2 = target address
            staticcall(gas(), 0xb3, 0, 0x20, 0, 0x20)
            frameTarget := mload(0)
        }
        // For VERIFY frames target = self; check next SENDER frame target
        // (In practice: read next frame via FRAMEPARAM)

        // Check max value
        uint256 txValue;
        assembly {
            mstore(0, 2) // TXPARAM index 2 = max_cost (simplified; use frame value)
            staticcall(gas(), 0xb0, 0, 0x20, 0, 0x20)
            txValue := mload(0)
        }
        require(txValue <= session.maxValuePerTx, "Exceeds session value limit");

        // Session key can only approve execution (not payment — owner pays gas)
        _approve(0x2); // APPROVE_EXECUTION only
    }

    function _ecrecoverFromSig(bytes32 hash, uint256 sigIdx) internal view returns (address) {
        // Use SIGDATACOPY to get v, r, s from signature at sigIdx
        // Simplified: return address(0) as placeholder
        return address(0);
    }

    function _txParam(uint256 idx) internal view returns (uint256 v) {
        assembly {
            mstore(0, idx)
            staticcall(gas(), 0xb0, 0, 0x20, 0, 0x20)
            v := mload(0)
        }
    }

    function _frameMode() internal view returns (uint8 m) {
        assembly {
            mstore(0, 0)
            staticcall(gas(), 0xb3, 0, 0x20, 0, 0x20)
            m := and(mload(0), 0xff)
        }
    }

    function _approve(uint8 scope) internal {
        assembly { pop(call(gas(), 0xaa, 0, 0, 0, 0, 0)) }
    }
}`}</pre>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <h4 className="font-bold text-slate-900 mb-3 text-sm">{isKo ? '세션 키 수명 주기' : 'Session Key Lifecycle'}</h4>
              <div className="space-y-2">
                {(isKo ? [
                  '① 사용자가 owner 키로 authorizeSessionKey() Frame Tx 전송 → 세션 키 등록',
                  '② DApp이 세션 키로 서명한 Frame Tx 전송 → VERIFY 프레임에서 정책 검사 후 APPROVE_EXECUTION',
                  '③ 가스는 별도 Paymaster가 APPROVE_PAYMENT (scope 0x1)',
                  '④ expiry 지나면 EXPIRY_VERIFIER가 자동으로 revert → 사용자 재서명 없이 만료',
                  '⑤ 사용자가 즉시 취소하려면 revokeSessionKey() Frame Tx 전송',
                ] : [
                  '① User sends authorizeSessionKey() Frame Tx signed with owner key → session key registered',
                  '② DApp sends Frame Tx signed with session key → VERIFY frame checks policy, then APPROVE_EXECUTION',
                  '③ Gas paid by a separate Paymaster with APPROVE_PAYMENT (scope 0x1)',
                  '④ After expiry, EXPIRY_VERIFIER auto-reverts → expires without user re-signature',
                  '⑤ For immediate revocation, user sends revokeSessionKey() Frame Tx',
                ]).map((step, i) => (
                  <div key={i} className="flex gap-3 bg-white rounded-lg p-3">
                    <span className="text-purple-600 font-mono text-xs shrink-0 pt-0.5">{i + 1}.</span>
                    <span className="text-slate-700 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 24: Foundry 테스팅 전략 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '24. Foundry로 EIP-8141 계약 테스트하기' : '24. Testing EIP-8141 Contracts with Foundry'}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {isKo
                ? 'EIP-8141이 메인넷에 반영되기 전에는 EVM fork 모드 + 새 오퍼코드 모킹으로 테스트해야 한다. EIP-8141 지원 EVM(ethrex 등)이 출시되면 이 섹션을 업데이트한다.'
                : 'Before EIP-8141 reaches mainnet, testing requires EVM fork mode + mocking new opcodes. This section will be updated when EIP-8141-capable EVMs (like ethrex) become widely available.'}
            </p>
            <div className="bg-slate-800 rounded-xl p-6 mb-6">
              <pre className="text-green-400 text-sm font-mono overflow-x-auto">{`// test/SmartAccount.t.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "forge-std/Test.sol";
import "../src/MinimalSmartAccount.sol";

contract SmartAccountTest is Test {
    MinimalSmartAccount account;
    address owner;
    uint256 ownerPk;

    function setUp() public {
        (owner, ownerPk) = makeAddrAndKey("owner");
        account = new MinimalSmartAccount(owner);
        vm.deal(address(account), 10 ether);
    }

    // ── Mock EIP-8141 opcodes via vm.etch + cheatcodes ──────────────
    // Until a real EIP-8141 EVM exists, we mock:
    // 1. FRAMEPARAM (0xb3) precompile behavior
    // 2. TXPARAM (0xb0) precompile behavior
    // 3. APPROVE (0xaa) call behavior

    function _mockVerifyFrame(bytes32 sigHash) internal {
        // Deploy a mock "FRAMEPARAM" contract at 0xb3
        // Returns mode=1 (VERIFY) for param index 0
        bytes memory frameParamCode = abi.encodePacked(
            hex"6000351460085760005260206000f35b60015260206000f3"
            // simplified: if(input==0) return 1 (VERIFY mode)
        );
        vm.etch(address(0xb3), frameParamCode);

        // Deploy mock "TXPARAM" at 0xb0
        // Returns sigHash for param index 4
        bytes memory txParamCode = abi.encodePacked(
            hex"600435146010576020526020600020f35b",
            sigHash,
            hex"60005260206000f3"
        );
        vm.etch(address(0xb0), txParamCode);

        // Deploy mock "APPROVE" at 0xaa — just succeeds
        vm.etch(address(0xaa), hex"600160005260206000f3");
    }

    function test_verifyWithOwnerSig() public {
        // Build signing hash (what protocol would compute)
        bytes32 txHash = keccak256(abi.encodePacked(
            "FrameTx:", block.chainid, address(account), uint256(0)
        ));

        // Mock EIP-8141 opcodes
        _mockVerifyFrame(txHash);

        // Sign with owner key
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ownerPk, txHash);

        // Simulate ENTRY_POINT calling account.fallback() in VERIFY mode
        // In real EIP-8141 EVM, this is protocol-driven
        vm.prank(address(0xaa)); // ENTRY_POINT = 0xaa
        (bool success,) = address(account).call(
            abi.encodePacked(v, r, s) // pass sig in calldata (simplified)
        );
        assertTrue(success, "VERIFY frame should succeed with owner sig");
    }

    function test_verifyWithWrongSig() public {
        (, uint256 wrongPk) = makeAddrAndKey("wrong");
        bytes32 txHash = keccak256("test");
        _mockVerifyFrame(txHash);

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(wrongPk, txHash);

        vm.prank(address(0xaa));
        (bool success,) = address(account).call(abi.encodePacked(v, r, s));
        assertFalse(success, "Should reject wrong signature");
    }

    // ── Integration: Full Frame Transaction flow ──────────────────────
    function test_fullFrameTxFlow() public {
        // 1. Simulate VERIFY frame approval
        bytes32 sigHash = keccak256("full_flow_test");
        _mockVerifyFrame(sigHash);
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ownerPk, sigHash);

        vm.prank(address(0xaa));
        (bool verifyOk,) = address(account).call(abi.encodePacked(v, r, s));
        assertTrue(verifyOk);

        // 2. Simulate SENDER frame execution
        address recipient = makeAddr("recipient");
        uint256 startBalance = recipient.balance;

        vm.prank(address(account)); // msg.sender = tx.sender in SENDER frame
        (bool sendOk,) = recipient.call{value: 0.1 ether}("");
        assertTrue(sendOk);
        assertEq(recipient.balance, startBalance + 0.1 ether);
    }

    // ── Gas measurement ───────────────────────────────────────────────
    function test_verifyGasCost() public {
        bytes32 sigHash = keccak256("gas_test");
        _mockVerifyFrame(sigHash);
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ownerPk, sigHash);

        uint256 gasBefore = gasleft();
        vm.prank(address(0xaa));
        address(account).call(abi.encodePacked(v, r, s));
        uint256 gasUsed = gasBefore - gasleft();

        // VERIFY frame should stay well under 100,000 gas (mempool limit)
        assertLt(gasUsed, 100_000, "VERIFY frame exceeds mempool gas limit");
        console.log("VERIFY frame gas used:", gasUsed);
    }
}`}</pre>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-4">{isKo ? '24.1 ethrex 라이브 테스트넷 활용' : '24.1 Using the ethrex Live Testnet'}</h3>
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="space-y-2">
                {(isKo ? [
                  '라이브 데모: https://demo.eip-8141.ethrex.xyz/ — 브라우저에서 Frame Tx 전송 가능',
                  'ethrex는 EIP-8141을 실험적으로 구현한 Rust 기반 EVM 클라이언트',
                  'Foundry의 --fork-url 옵션으로 ethrex 테스트넷을 포크해 로컬에서 테스트 가능',
                  '오퍼코드 모킹 없이 실제 APPROVE/FRAMEPARAM/TXPARAM 오퍼코드 사용 가능',
                  'CLI: forge test --fork-url https://ethrex-testnet.example.com --match-test testEIP8141',
                ] : [
                  'Live demo: https://demo.eip-8141.ethrex.xyz/ — send Frame Tx from your browser',
                  'ethrex is a Rust-based EVM client with experimental EIP-8141 implementation',
                  'Fork the ethrex testnet locally via Foundry\'s --fork-url option',
                  'Use real APPROVE/FRAMEPARAM/TXPARAM opcodes without mocking',
                  'CLI: forge test --fork-url https://ethrex-testnet.example.com --match-test testEIP8141',
                ]).map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-green-500 font-bold shrink-0 text-sm">→</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 25: 흔한 에러 & 디버깅 ── */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '25. 흔한 에러 & 디버깅 가이드' : '25. Common Errors & Debugging Guide'}
            </h2>
            <div className="space-y-6">
              {[
                {
                  error: 'APPROVE called outside VERIFY frame',
                  cause: isKo ? 'APPROVE 오퍼코드를 SENDER 또는 DEFAULT 프레임에서 호출함' : 'APPROVE opcode called in SENDER or DEFAULT frame',
                  fix: isKo ? 'FRAMEPARAM(0)으로 현재 모드 확인 후 VERIFY(1)일 때만 APPROVE 호출. 모드를 확인하는 guard를 fallback() 최상단에 추가.' : 'Check mode with FRAMEPARAM(0) and only call APPROVE when mode == 1. Add a mode guard at the top of fallback().',
                  severity: 'error',
                },
                {
                  error: 'APPROVE called on non-self target (ADDRESS != resolved_target)',
                  cause: isKo ? 'APPROVE는 자기 자신의 VERIFY 프레임에서만 호출 가능. 다른 주소의 VERIFY 프레임에서 APPROVE 호출 시도' : 'APPROVE can only be called in your own VERIFY frame. Attempted to call APPROVE in another address\'s VERIFY frame.',
                  fix: isKo ? '프레임의 target 주소와 호출 중인 컨트랙트 주소(address(this))가 동일한지 확인. 체인 구성 검토.' : 'Verify that the frame\'s target address equals the calling contract address (address(this)). Review frame chain.',
                  severity: 'error',
                },
                {
                  error: 'APPROVE_PAYMENT already set — cannot re-approve',
                  cause: isKo ? '동일한 tx에서 APPROVE_PAYMENT(scope 0x1 또는 0x3)가 두 번 이상 설정됨' : 'APPROVE_PAYMENT (scope 0x1 or 0x3) set more than once in the same tx',
                  fix: isKo ? '하나의 트랜잭션에는 정확히 하나의 payer만 설정되어야 함. VERIFY 프레임 설계를 검토해 APPROVE_PAYMENT 호출이 단 하나뿐인지 확인.' : 'Exactly one payer must be set per transaction. Review VERIFY frame design to ensure APPROVE_PAYMENT is called exactly once.',
                  severity: 'error',
                },
                {
                  error: 'SENDER frame executed but sender_approved = false',
                  cause: isKo ? 'SENDER 프레임 실행 전에 APPROVE_EXECUTION(scope 0x2 또는 0x3)이 호출되지 않음' : 'APPROVE_EXECUTION (scope 0x2 or 0x3) not called before SENDER frame executes',
                  fix: isKo ? '프레임 순서 검토: SENDER 프레임보다 앞선 VERIFY 프레임이 반드시 APPROVE_EXECUTION을 설정해야 함. 프레임 배열 순서 확인.' : 'Review frame ordering: a VERIFY frame before SENDER must set APPROVE_EXECUTION. Check frame array order.',
                  severity: 'error',
                },
                {
                  error: 'Transaction rejected from public mempool (validation prefix mismatch)',
                  cause: isKo ? '프레임 배열이 4가지 허용 검증 프리픽스 패턴 중 하나가 아님' : 'Frame array does not match one of the 4 allowed validation prefix patterns',
                  fix: isKo ? '허용 패턴 재확인: [self_verify], [deploy→self_verify], [only_verify→pay], [deploy→only_verify→pay]. 복잡한 검증 로직은 private 채널(빌더 직송) 사용.' : 'Re-check allowed patterns: [self_verify], [deploy→self_verify], [only_verify→pay], [deploy→only_verify→pay]. Complex validation requires private channel (direct to builder).',
                  severity: 'warning',
                },
                {
                  error: 'VERIFY frame gas exceeded MAX_VERIFY_GAS (100,000)',
                  cause: isKo ? 'VERIFY 프레임들의 execution gas 합계가 100,000을 초과함 — 주로 무거운 서명 검증 로직' : 'Sum of VERIFY frame execution gas exceeds 100,000 — usually heavy signature verification logic',
                  fix: isKo ? '① BLS/Schnorr 대신 P256(내장) 또는 SECP256K1 사용 ② EIP-2537 프리컴파일 활용 ③ 검증 로직 최적화 ④ 불가피하면 private 채널 사용' : '① Use built-in P256 or SECP256K1 instead of BLS/Schnorr ② Leverage EIP-2537 precompiles ③ Optimize verification logic ④ If unavoidable, use private channel',
                  severity: 'warning',
                },
                {
                  error: 'STATICCALL inside VERIFY: state mutation attempted',
                  cause: isKo ? 'VERIFY 프레임은 STATICCALL이므로 SSTORE, LOG 등 상태 변경 금지' : 'VERIFY frames run as STATICCALL — SSTORE, LOG, and other state mutations are forbidden',
                  fix: isKo ? '검증 전용 로직만 VERIFY 프레임에. 상태 변경이 필요한 post-op 로직은 DEFAULT 프레임으로 분리.' : 'Put only read-only validation logic in VERIFY frames. Move state-changing post-op logic to DEFAULT frames.',
                  severity: 'error',
                },
              ].map(item => (
                <div key={item.error} className={`rounded-xl border p-5 ${item.severity === 'error' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`}>
                  <div className={`font-mono text-xs font-bold mb-2 ${item.severity === 'error' ? 'text-red-700' : 'text-yellow-700'}`}>
                    {item.severity === 'error' ? '❌' : '⚠️'} {item.error}
                  </div>
                  <div className="mb-2">
                    <span className={`text-xs font-semibold ${item.severity === 'error' ? 'text-red-800' : 'text-yellow-800'}`}>{isKo ? '원인: ' : 'Cause: '}</span>
                    <span className={`text-xs ${item.severity === 'error' ? 'text-red-700' : 'text-yellow-700'}`}>{item.cause}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-800">{isKo ? '해결: ' : 'Fix: '}</span>
                    <span className="text-xs text-green-700">{item.fix}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* References */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              {isKo ? '참고 자료' : 'References'}
            </h2>
            <div className="space-y-2">
              {[
                { label: 'EIP-8141 공식 스펙', url: 'https://eips.ethereum.org/EIPS/eip-8141' },
                { label: '해설·추적 사이트 (Pedro Gomes)', url: 'https://eip8141.io/' },
                { label: 'Ethereum Magicians 토론', url: 'https://ethereum-magicians.org/t/eip-8141-frame-transaction/27617' },
                { label: '라이브 데모', url: 'https://demo.eip-8141.ethrex.xyz/' },
                { label: 'ELI5 딥다이브 (dicethedev)', url: 'https://hackmd.io/@dicethedev/HyhbyJA3bg' },
                { label: 'Biconomy 블로그 (ERC-8211과의 관계)', url: 'https://blog.biconomy.io/rails-and-cargo-why-eip-8141-is-the-transport-that-finally-ships-erc-8211-to-every-ethereum-user/' },
                { label: 'EIP-7702 공식 스펙', url: 'https://eips.ethereum.org/EIPS/eip-7702' },
                { label: 'ERC-4337 공식 스펙', url: 'https://eips.ethereum.org/EIPS/eip-4337' },
              ].map(ref => (
                <div key={ref.label} className="flex items-center gap-2 text-sm">
                  <span className="text-slate-400">→</span>
                  <span className="text-slate-600">{ref.label}:</span>
                  <span className="font-mono text-blue-600 text-xs break-all">{ref.url}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Walits CTA */}
          <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-2xl p-8 text-white">
            <div className="text-purple-300 text-sm font-semibold mb-2">Walits × EIP-8141</div>
            <h3 className="text-2xl font-bold mb-3">
              {isKo ? 'EIP-7702로 이미 준비된 Walits' : 'Walits — Already Prepared with EIP-7702'}
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              {isKo
                ? 'Walits는 현재 EIP-3009 릴레이어로 ETH 없이 USDC 전송을 지원하며, EIP-7702 기반 스마트 계정 전환을 준비하고 있다. EIP-8141이 메인넷에 반영되면, Walits의 Base USDC 인프라는 Frame Transaction의 SENDER 프레임과 ARBITRARY 서명 체계를 그대로 활용할 수 있는 구조다.'
                : 'Walits currently supports gasless USDC transfers via an EIP-3009 relayer and is preparing for EIP-7702 smart account migration. When EIP-8141 reaches mainnet, Walits\'s Base USDC infrastructure is structurally ready to leverage Frame Transaction\'s SENDER frames and ARBITRARY signature schemes directly.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/walits-paymaster" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {isKo ? 'EIP-3009 릴레이어 글 읽기' : 'Read EIP-3009 Relayer Post'}
              </Link>
              <Link href="/blog" className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {isKo ? '블로그 전체 보기' : 'All Blog Posts'}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
