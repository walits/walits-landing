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
