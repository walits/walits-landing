'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CctpBridgeReliabilityPage() {
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
            {isKo ? '인프라 설계' : 'Infrastructure Design'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? 'CCTP 브릿지 안정성 — 서버 크래시에도 USDC를 잃지 않는 설계'
              : 'CCTP Bridge Reliability — Designing So USDC Is Never Lost on Server Crash'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'Circle CCTP로 USDC를 체인 간 이동하는 서비스를 만들 때, 서버가 갑자기 죽으면 어떻게 될까? broadcast 직전 단 한 줄의 코드 순서 변경으로 자금 손실 위험을 없애는 방법.'
              : 'What happens when your server dies mid-flight during a Circle CCTP USDC bridge? One reordering of a single line — saving txHash before broadcast — eliminates the fund-loss risk entirely.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 4월 30일' : 'April 30, 2026'}</span>
            <span>·</span>
            <span>{isKo ? '20분 읽기' : '20 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/cctp-bridge.jpg" alt="CCTP Bridge Reliability" fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section 1: CCTP 동작 원리 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. Circle CCTP 동작 원리' : '1. How Circle CCTP Works'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'CCTP(Cross-Chain Transfer Protocol)는 Circle이 운영하는 공식 USDC 크로스체인 전송 프로토콜이다. Ethereum ↔ Base, Ethereum ↔ Arbitrum 등 지원 체인 간에 USDC를 네이티브로 이동시킨다. 핵심 메커니즘은 "소각 후 발행(Burn & Mint)"이다 — 소스 체인에서 USDC를 영구 소각하고, Circle의 증명을 받아 목적지 체인에서 같은 양을 새로 발행한다.'
              : 'CCTP (Cross-Chain Transfer Protocol) is Circle\'s official native USDC cross-chain transfer protocol. It moves USDC natively between supported chains like Ethereum ↔ Base or Ethereum ↔ Arbitrum. The core mechanism is "Burn & Mint" — USDC is permanently burned on the source chain, and after receiving an attestation from Circle, the same amount is freshly minted on the destination chain.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6 overflow-x-auto">
            <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? '브릿지 흐름 — 4단계' : 'Bridge flow — 4 phases'}</div>
            <div className="space-y-3">
              {[
                { step: '1', status: 'APPROVING', label: isKo ? 'approve' : 'approve', desc: isKo ? 'TokenMessenger 컨트랙트에 USDC 사용 권한 부여' : 'Grant USDC allowance to TokenMessenger contract', color: 'text-blue-400' },
                { step: '2', status: 'BURNING', label: isKo ? 'depositForBurn' : 'depositForBurn', desc: isKo ? '소스 체인에서 USDC 영구 소각 ← 위험 구간' : 'Permanently burn USDC on source chain ← danger zone', color: 'text-red-400' },
                { step: '3', status: 'ATTESTING', label: isKo ? 'attestation 대기' : 'await attestation', desc: isKo ? 'Circle IRIS API가 burn 확인 후 서명 발급 (수 초~수 분)' : 'Circle IRIS API confirms burn and issues a signature (seconds to minutes)', color: 'text-yellow-400' },
                { step: '4', status: 'MINTING', label: isKo ? 'receiveMessage' : 'receiveMessage', desc: isKo ? '목적지 체인에 attestation 제출 → USDC 발행' : 'Submit attestation to destination chain → USDC minted', color: 'text-green-400' },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 font-mono text-sm">
                  <div className="text-slate-500 w-4 shrink-0">{row.step}</div>
                  <div className={`${row.color} w-24 shrink-0 font-bold`}>{row.status}</div>
                  <div className="text-slate-300">{row.label} — {row.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="font-bold text-amber-800 mb-2">{isKo ? '핵심 성질' : 'Key property'}</div>
            <p className="text-amber-700 text-sm leading-relaxed">
              {isKo
                ? 'burn이 성공하면 USDC는 소스 체인에서 영구 소각된다. mint는 나중에 언제든 할 수 있지만, 반드시 해야 한다. burn은 되었는데 mint를 못 하면 그 USDC는 영원히 사라진다.'
                : 'Once the burn succeeds, USDC is permanently destroyed on the source chain. The mint can happen later at any time — but it must happen. If the burn succeeded but the mint never does, that USDC is gone forever.'}
            </p>
          </div>
        </section>

        {/* Section 2: 위험 구간 분석 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '2. 자금 손실 시나리오 — 어느 구간이 위험한가?' : '2. Fund Loss Scenarios — Which Phase Is Dangerous?'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '4단계 중 대부분의 구간에서 서버 크래시가 발생해도 USDC는 안전하다. 문제는 단 하나의 구간에서 발생한다.'
              : 'In most phases, a server crash leaves USDC safe. The problem lives in exactly one phase.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { phase: 'PENDING / APPROVING', safe: true, reason: isKo ? 'burn 트랜잭션이 아직 전송되지 않음. USDC는 원래 지갑에 그대로.' : 'Burn tx not yet sent. USDC stays in the original wallet.', color: 'bg-green-50 border-green-200' },
              { phase: 'BURNING ★', safe: false, reason: isKo ? 'USDC가 소각됐는데 DB에 burnTxHash가 없으면 재시작 후 어디서 복구할지 모른다.' : 'USDC burned, but if burnTxHash is missing from DB, there\'s no way to resume after restart.', color: 'bg-red-50 border-red-300' },
              { phase: 'ATTESTING', safe: true, reason: isKo ? 'DB에 burnTxHash가 있으면 Circle API 폴링을 재개할 수 있다.' : 'With burnTxHash in DB, Circle API polling can resume anytime.', color: 'bg-green-50 border-green-200' },
              { phase: 'MINTING', safe: true, reason: isKo ? 'burnTxHash로 언제든 receiveMessage를 재시도할 수 있다.' : 'receiveMessage can be retried anytime with burnTxHash.', color: 'bg-green-50 border-green-200' },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.safe ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                    {item.safe ? (isKo ? '안전' : 'SAFE') : (isKo ? '위험' : 'DANGER')}
                  </span>
                  <span className="font-bold text-slate-800 text-sm">{item.phase}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-6">
            <div className="text-red-400 font-bold font-mono text-sm mb-4">{isKo ? '// 크래시 시나리오 — 기존 코드' : '// Crash scenario — old code'}</div>
            <pre className="text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">{`서버: 트랜잭션 서명
서버: broadcast → 체인에 전송
체인: burn 컨펌 (USDC 영구 소각)
서버: ← 여기서 크래시!!
서버: DB에 burnTxHash 저장  ← 실행 안 됨

재시작 후:
DB: burnTxHash = null
서버: "이 job이 어디까지 됐지? 알 수 없음."
결과: USDC는 소각됐지만 mint 불가 → 자금 손실`}</pre>
          </div>
        </section>

        {/* Section 3: 해결책 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '3. 해결책 — broadcast 전에 txHash를 먼저 저장하라' : '3. The Fix — Save txHash Before Broadcast'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">{isKo ? '단 세 줄의 순서 변경' : 'Three lines, reordered'}</p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
            <div className="font-bold text-blue-800 mb-2">{isKo ? '이더리움 트랜잭션의 핵심 성질' : 'Key property of Ethereum transactions'}</div>
            <p className="text-blue-700 leading-relaxed text-sm">
              {isKo
                ? '이더리움 트랜잭션은 서명이 완료되는 순간 txHash가 확정된다. 네트워크에 전송(broadcast)하기 전에도 계산할 수 있다.'
                : 'An Ethereum transaction\'s txHash is determined the moment signing completes. It can be computed before broadcast — before the transaction ever touches the network.'}
            </p>
            <div className="mt-3 font-mono text-blue-800 text-sm bg-blue-100 rounded-lg px-4 py-2">
              txHash = keccak256(RLP-encoded signed transaction)
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="text-red-700 font-bold text-sm mb-3">{isKo ? '변경 전 (위험)' : 'Before (dangerous)'}</div>
              <pre className="text-xs font-mono text-red-800 leading-relaxed overflow-x-auto">{`// broadcast 이후 저장
const burnTxHash =
  await this.evm.broadcastTx(
    signedTx, fromChain
  );

await updateJob({ burnTxHash });
// ↑ broadcast 후 저장
// 크래시 시 저장 안 됨`}</pre>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="text-green-700 font-bold text-sm mb-3">{isKo ? '변경 후 (안전)' : 'After (safe)'}</div>
              <pre className="text-xs font-mono text-green-800 leading-relaxed overflow-x-auto">{`// broadcast 전에 계산 & 저장
const burnTxHash =
  ethers.keccak256(signedTx);
  // ↑ 서명만 되면 확정됨

await this.prisma.bridgeJob.update({
  where: { id: jobId },
  data: { burnTxHash },
});
// ↑ broadcast 전에 먼저 저장

await this.evm.broadcastTx(
  signedTx, fromChain
);`}</pre>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            {isKo
              ? '이 패턴은 데이터베이스 설계에서 WAL(Write-Ahead Logging)과 동일한 사상이다. 실제 작업을 수행하기 전에 무엇을 할 것인지를 먼저 기록하고, 크래시 후 재시작 시 그 기록을 보고 복구한다.'
              : 'This pattern mirrors WAL (Write-Ahead Logging) from database design — record what you\'re about to do before you do it, so a crash-and-restart can recover by reading that record.'}
          </p>

          {/* 중요한 함정 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-2xl p-5 mb-6">
            <div className="font-black text-red-700 mb-3">
              {isKo ? '⚠ 중요한 함정 — burnTxHash가 있다고 burn이 성공한 게 아니다' : '⚠ Critical gotcha — burnTxHash in DB does not mean burn succeeded'}
            </div>
            <p className="text-red-700 text-sm leading-relaxed mb-4">
              {isKo
                ? 'txHash는 네트워크와 무관한 로컬 계산값이다. keccak256(서명된 tx 바이트)를 계산하는 순간 결정되므로, broadcast 전 크래시나 tx revert가 발생해도 DB에는 burnTxHash가 남아 있다.'
                : 'txHash is a local computation — completely independent of the network. It\'s determined the moment you compute keccak256(signed tx bytes), so a pre-broadcast crash or an on-chain revert still leaves burnTxHash in the DB.'}
            </p>
            <div className="bg-slate-900 rounded-xl p-4 mb-4">
              <div className="text-slate-400 text-xs font-mono mb-3">{isKo ? '같은 burnTxHash, 세 가지 실제 상태' : 'Same burnTxHash, three possible realities'}</div>
              <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">{isKo
? `sign 완료
    │
    ▼
burnTxHash = keccak256(signedTx)  ← DB 저장 (여기까지는 동일)
    │
    ├─ [케이스 A] broadcast 전 크래시
    │       체인에 tx 자체가 없음
    │       receipt 조회 → null
    │       USDC 안전 ✓
    │
    ├─ [케이스 B] broadcast 했지만 revert
    │       잔액 부족 / allowance 부족 / 컨트랙트 에러
    │       receipt.status = 0
    │       USDC 소각 안 됨, 안전 ✓
    │
    └─ [케이스 C] broadcast + 성공
            receipt.status = 1
            USDC 실제로 소각됨 → attestation 재개 필수`
: `sign complete
    │
    ▼
burnTxHash = keccak256(signedTx)  ← saved to DB (same up to here)
    │
    ├─ [Case A] crash before broadcast
    │       tx never sent to chain
    │       getTransactionReceipt → null
    │       USDC safe ✓
    │
    ├─ [Case B] broadcast but reverted
    │       insufficient balance / allowance / contract error
    │       receipt.status = 0
    │       USDC not burned, safe ✓
    │
    └─ [Case C] broadcast + success
            receipt.status = 1
            USDC actually burned → must resume attestation`}</pre>
            </div>
            <p className="text-red-700 text-sm leading-relaxed mb-3">
              {isKo
                ? '따라서 재시작 복구 시 burnTxHash만 믿어선 안 된다. 반드시 온체인 receipt로 실제 성공 여부를 검증해야 한다.'
                : 'Therefore, during recovery, burnTxHash alone cannot be trusted. On-chain receipt verification is mandatory to determine the actual outcome.'}
            </p>
            <div className="bg-slate-900 rounded-xl p-4">
              <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">{`const receipt = await provider.getTransactionReceipt(burnTxHash);

if (!receipt) {
  // 케이스 A: broadcast 안 됨 → USDC 안전 → FAILED
  return markFailed(jobId);
}

if (receipt.status === 0) {
  // 케이스 B: tx revert → USDC 안전 → FAILED
  return markFailed(jobId);
}

// 케이스 C: receipt.status === 1 → 진짜 소각됨
await resumeFromAttestation(jobId, burnTxHash);`}</pre>
            </div>
          </div>
        </section>

        {/* Section 4: 서버 재시작 자동 복구 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '4. 서버 재시작 시 자동 복구 패턴' : '4. Auto-Recovery on Server Restart'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'txHash를 미리 저장해두면 재시작 시 자동으로 복구할 수 있다. NestJS의 onModuleInit 훅에서 미완료 job을 찾아 재개한다.'
              : 'With txHash pre-saved, auto-recovery on restart becomes straightforward. In NestJS, onModuleInit queries for incomplete jobs and resumes them.'}
          </p>

          <div className="bg-slate-900 rounded-2xl p-6 mb-6 overflow-x-auto">
            <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '서버 재시작 시 복구 흐름' : 'Recovery flow on restart'}</div>
            <div className="space-y-2 font-mono text-sm">
              {[
                { indent: 0, text: isKo ? 'onModuleInit() 실행' : 'onModuleInit() fires', color: 'text-blue-400' },
                { indent: 1, text: isKo ? 'DB 조회: status IN [BURNING, ATTESTING, MINTING] AND burnTxHash IS NOT NULL' : 'Query DB: status IN [BURNING, ATTESTING, MINTING] AND burnTxHash IS NOT NULL', color: 'text-slate-300' },
                { indent: 1, text: isKo ? 'status = BURNING →' : 'status = BURNING →', color: 'text-yellow-400' },
                { indent: 2, text: isKo ? '온체인 receipt 조회' : 'fetch on-chain receipt', color: 'text-slate-400' },
                { indent: 2, text: isKo ? 'receipt 없음 → FAILED (broadcast 안 됨, USDC 안전)' : 'no receipt → FAILED (not broadcast, USDC safe)', color: 'text-green-400' },
                { indent: 2, text: isKo ? 'receipt revert → FAILED (USDC 안전)' : 'receipt revert → FAILED (USDC safe)', color: 'text-green-400' },
                { indent: 2, text: isKo ? 'receipt 성공 → resumeFromAttestation()' : 'receipt success → resumeFromAttestation()', color: 'text-blue-400' },
                { indent: 1, text: isKo ? 'status = ATTESTING/MINTING → 바로 resumeFromAttestation()' : 'status = ATTESTING/MINTING → resumeFromAttestation() directly', color: 'text-blue-400' },
                { indent: 1, text: isKo ? 'resumeFromAttestation(): Circle 폴링 → receiveMessage → DONE' : 'resumeFromAttestation(): poll Circle → receiveMessage → DONE', color: 'text-green-400' },
              ].map((line, i) => (
                <div key={i} className={`${line.color}`} style={{ paddingLeft: `${line.indent * 20}px` }}>
                  {line.indent > 0 ? '└ ' : ''}{line.text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <div className="font-bold text-slate-900 mb-4">{isKo ? '상태별 복구 전략' : 'Recovery strategy by status'}</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-4 text-slate-500 font-semibold">{isKo ? '상태' : 'Status'}</th>
                    <th className="text-left py-2 pr-4 text-slate-500 font-semibold">burnTxHash</th>
                    <th className="text-left py-2 text-slate-500 font-semibold">{isKo ? '처리 방법' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { status: 'BURNING', hash: isKo ? '있음' : 'present', action: isKo ? '온체인 tx 확인 → 성공이면 attestation 재개' : 'Check on-chain tx → if success, resume attestation' },
                    { status: 'BURNING', hash: isKo ? '없음' : 'absent', action: isKo ? 'burn 안 된 것 → 복구 불필요 (USDC 안전)' : 'Burn never happened → no recovery needed (USDC safe)' },
                    { status: 'ATTESTING', hash: isKo ? '있음' : 'present', action: isKo ? '바로 Circle 폴링 → mint 재개' : 'Poll Circle immediately → resume mint' },
                    { status: 'MINTING', hash: isKo ? '있음' : 'present', action: isKo ? 'receiveMessage 재시도 (멱등성 보장됨)' : 'Retry receiveMessage (idempotent by design)' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-4 font-mono text-xs text-orange-700 font-bold">{row.status}</td>
                      <td className="py-2 pr-4 text-slate-600">{row.hash}</td>
                      <td className="py-2 text-slate-700">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="font-bold text-blue-800 mb-2">{isKo ? 'Circle 릴레이어 자동 처리' : 'Circle relayer auto-processing'}</div>
            <p className="text-blue-700 text-sm leading-relaxed">
              {isKo
                ? 'Circle은 자체 릴레이어를 운영해서 mint를 자동으로 처리하기도 한다. 이미 처리된 경우 receiveMessage 호출 시 "Nonce already used" 에러가 발생한다. 이 에러는 실패가 아니라 성공이다 — job을 DONE으로 처리해야 한다.'
                : 'Circle operates its own relayer that sometimes processes mints automatically. If already handled, calling receiveMessage returns a "Nonce already used" error. This is not a failure — it\'s a success. Treat it as DONE.'}
            </p>
          </div>
        </section>

        {/* Section 5: 수동 복구 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '5. DB가 날아갔을 때 — 수동 복구 방법' : '5. When the DB Is Gone — Manual Recovery'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'DB가 완전히 유실된 최악의 상황에서도 burn 트랜잭션 해시만 알고 있다면 복구할 수 있다. CCTP의 mint는 언제든 재시도 가능하기 때문이다.'
              : 'Even if the database is completely gone, as long as you know the burn transaction hash, you can recover. CCTP mints can be retried at any time.'}
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                step: '1',
                title: isKo ? 'Circle IRIS API에서 attestation 조회' : 'Fetch attestation from Circle IRIS API',
                code: `GET https://iris-api.circle.com/v2/{sourceDomain}
  ?transactionHash={burnTxHash}

// Response
{
  "status": "complete",
  "message": "0x...",
  "attestation": "0x..."
}`,
                color: 'bg-slate-900',
                textColor: 'text-green-300',
              },
              {
                step: '2',
                title: isKo ? '목적지 체인 MessageTransmitter에 직접 호출' : 'Call MessageTransmitter directly on destination chain',
                code: `// ethers.js
const transmitter = new ethers.Contract(
  MESSAGE_TRANSMITTER_ADDRESS,
  ['function receiveMessage(bytes message, bytes attestation)'],
  signer
);

await transmitter.receiveMessage(
  irisResponse.message,
  irisResponse.attestation
);`,
                color: 'bg-slate-900',
                textColor: 'text-blue-300',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 flex items-center gap-3">
                  <span className="bg-slate-800 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{item.step}</span>
                  <span className="font-semibold text-slate-800">{item.title}</span>
                </div>
                <div className={`${item.color} p-5`}>
                  <pre className={`text-xs font-mono ${item.textColor} leading-relaxed overflow-x-auto`}>{item.code}</pre>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-slate-600 text-sm">
              {isKo
                ? '또는 Circle 공식 브릿지 UI(bridge.circle.com)에서 burn tx hash를 입력하면 GUI로 복구할 수 있다. 기술적으로 동일한 과정이다.'
                : 'Alternatively, paste the burn tx hash into the Circle Bridge UI (bridge.circle.com) to recover through the GUI — technically the same operation.'}
            </p>
          </div>
        </section>

        {/* Section 6: 전체 안전성 요약 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 전체 안전성 매트릭스' : '6. Full Safety Matrix'}
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">{isKo ? '시나리오' : 'Scenario'}</th>
                  <th className="text-left px-4 py-3 font-semibold">{isKo ? '자금 손실 가능성' : 'Fund loss risk'}</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">{isKo ? '비고' : 'Notes'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { scenario: isKo ? 'CCTP approve 중 크래시' : 'Crash during CCTP approve', risk: isKo ? '없음' : 'None', note: isKo ? 'USDC 이동 없음' : 'No USDC movement', safe: true },
                  { scenario: isKo ? 'CCTP burn 중 크래시 (개선 전)' : 'Crash during burn (before fix)', risk: isKo ? '높음' : 'High', note: isKo ? 'burnTxHash DB 저장 안 됨 → 복구 불가' : 'burnTxHash not saved → unrecoverable', safe: false },
                  { scenario: isKo ? 'CCTP burn 중 크래시 (개선 후)' : 'Crash during burn (after fix)', risk: isKo ? '매우 낮음' : 'Very low', note: isKo ? 'broadcast 전 DB 저장 → 재시작 시 자동 복구' : 'DB saved before broadcast → auto-recover on restart', safe: true },
                  { scenario: isKo ? 'CCTP attestation 중 크래시' : 'Crash during attestation', risk: isKo ? '없음' : 'None', note: isKo ? 'burnTxHash로 언제든 재시도' : 'Resume anytime with burnTxHash', safe: true },
                  { scenario: isKo ? 'CCTP mint 중 크래시' : 'Crash during mint', risk: isKo ? '없음' : 'None', note: isKo ? 'receiveMessage 멱등성 보장 (Nonce 중복 처리)' : 'receiveMessage is idempotent (Nonce dedup)', safe: true },
                  { scenario: isKo ? 'DB 완전 유실 + burn 성공' : 'DB total loss + burn succeeded', risk: isKo ? '낮음' : 'Low', note: isKo ? 'burn tx hash로 수동 복구 가능' : 'Manual recovery via burn tx hash possible', safe: true },
                  { scenario: isKo ? 'DB 완전 유실 + burn tx hash 분실' : 'DB total loss + burn tx hash lost', risk: isKo ? '높음' : 'High', note: isKo ? 'DB 정기 백업으로 방지해야 함' : 'Prevent with regular DB backups', safe: false },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 text-slate-800">{row.scenario}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.safe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {row.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: 남은 한계와 권장 사항 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 남은 한계와 권장 대응' : '7. Remaining Limitations & Recommendations'}
          </h2>

          <div className="space-y-4">
            {[
              {
                title: isKo ? 'approve 후 burn 전 크래시' : 'Crash after approve, before burn',
                level: isKo ? '경미' : 'Minor',
                levelColor: 'bg-yellow-100 text-yellow-700',
                body: isKo
                  ? 'USDC는 안전하다. approve만 된 상태로 재시작하면 다음 브릿지 시도 시 allowance가 남아있어 approve를 건너뛸 수 있다. 기능적 문제는 없다.'
                  : 'USDC is safe. On restart with only approve done, the remaining allowance lets the next bridge attempt skip the approve step. No functional issue.',
              },
              {
                title: isKo ? 'DB 완전 유실 + burn tx hash 분실' : 'DB total loss + burn tx hash lost',
                level: isKo ? '치명' : 'Critical',
                levelColor: 'bg-red-100 text-red-700',
                body: isKo
                  ? '이 경우만 수동 복구도 불가능하다. 방어책은 DB 정기 백업(최소 1시간 단위), 그리고 가능하면 burn tx hash를 별도 내구성 스토리지(S3 등)에도 기록하는 것이다.'
                  : 'This is the only case where manual recovery is also impossible. Defense: DB backups at minimum hourly, and optionally writing burn tx hashes to a separate durable store (e.g., S3).',
              },
              {
                title: isKo ? 'Circle IRIS API 장애' : 'Circle IRIS API outage',
                level: isKo ? '일시적' : 'Temporary',
                levelColor: 'bg-blue-100 text-blue-700',
                body: isKo
                  ? 'IRIS API가 응답하지 않으면 attestation을 받을 수 없다. USDC는 소각된 상태지만 복구 경로(burnTxHash)는 확보되어 있다. IRIS API가 복구되는 즉시 재시도하면 된다. 최대 폴링 시간을 넉넉히 설정(30분 이상)해야 한다.'
                  : 'If IRIS API is down, attestation can\'t be fetched. USDC is burned but the recovery path (burnTxHash) is intact. Retry as soon as IRIS recovers. Set a generous max polling window (30+ minutes).',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.levelColor}`}>{item.level}</span>
                  <span className="font-bold text-slate-800">{item.title}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 설계 원칙 정리 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 설계 원칙 — 블록체인 서비스의 내결함성' : '8. Design Principles — Fault Tolerance in Blockchain Services'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'CCTP 브릿지 안정성 설계에서 얻을 수 있는 일반적인 원칙들이다. 온체인 자금을 다루는 모든 서비스에 적용된다.'
              : 'General principles derived from this CCTP reliability design — applicable to any service handling on-chain funds.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: '📝',
                title: isKo ? 'Write-Ahead Logging' : 'Write-Ahead Logging',
                body: isKo
                  ? '무엇을 할 것인지를 DB에 먼저 기록하고, 그 다음 실제 작업을 수행한다. broadcast 전 txHash 저장이 이 패턴이다.'
                  : 'Write what you\'re about to do to the DB first, then perform the action. Pre-broadcast txHash saving is this pattern.',
              },
              {
                icon: '🔄',
                title: isKo ? '멱등성(Idempotency) 설계' : 'Idempotent Operations',
                body: isKo
                  ? '같은 작업을 두 번 실행해도 결과가 같아야 한다. receiveMessage의 Nonce 체계가 멱등성을 보장한다.'
                  : 'Running the same operation twice should produce the same result. The CCTP Nonce system guarantees idempotency for receiveMessage.',
              },
              {
                icon: '🧩',
                title: isKo ? '상태 머신 + DB 지속성' : 'State Machine + DB Persistence',
                body: isKo
                  ? '각 단계를 명시적 상태(PENDING/APPROVING/BURNING/...)로 나누고 DB에 저장한다. 재시작 시 상태를 보고 어디서 재개할지 결정한다.'
                  : 'Break each phase into an explicit state stored in DB. On restart, read the state to decide where to resume.',
              },
              {
                icon: '🔑',
                title: isKo ? '복구 키 보존' : 'Recovery Key Preservation',
                body: isKo
                  ? 'burnTxHash는 USDC를 복구하는 유일한 열쇠다. 최소한 이 값만큼은 여러 곳에 저장해야 한다. DB + 별도 로그/스토리지.'
                  : 'burnTxHash is the sole recovery key for burned USDC. At minimum, store it redundantly — DB plus separate log/storage.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-slate-900 mb-2">{item.title}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-100 pt-8">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
            <div className="font-black text-lg mb-2">
              {isKo ? 'walits — 안전하게 설계된 스테이블코인 지갑' : 'walits — A stablecoin wallet built for safety'}
            </div>
            <p className="text-orange-100 text-sm leading-relaxed mb-4">
              {isKo
                ? 'USDC 브릿지, 온체인 예치, AI 에이전트 자동 실행. 모든 트랜잭션은 실패해도 복구 경로가 설계되어 있습니다.'
                : 'USDC bridge, on-chain yield, AI agent automation. Every transaction is designed with a recovery path even on failure.'}
            </p>
            <Link href="/#solutions" className="inline-block bg-white text-orange-600 font-bold text-sm px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
              {isKo ? '서비스 알아보기 →' : 'Learn more →'}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
