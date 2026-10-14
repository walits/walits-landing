'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClaudeCodeSnakeGamePage() {
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
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >KO</button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >EN</button>
            </div>
          </div>
          <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'Claude Code 실전 예제' : 'Claude Code Practical Example'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? '실전 예제로 배우는 멀티 세션 하네스 — PayLink 만들기'
              : 'Learn the Multi-Session Harness by Building PayLink — A Practical Example'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'USDC 결제 링크 서비스 PayLink를 Claude Code 세 세션으로 병렬 개발하면서, worktree·알림·맥락 이월·검증 게이트·세션 간 메시징 하네스를 직접 설치하고 개선해 봅니다.'
              : 'Build PayLink — a USDC payment link service — across three parallel Claude Code sessions, installing and improving worktree, notification, context carry-over, verification gate, and session messaging harnesses step by step.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 10월 13일' : 'October 13, 2026'}</span>
            <span>·</span>
            <span>@하마</span>
            <span>·</span>
            <span>{isKo ? '60분 읽기' : '60 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/payment.jpg" alt="PayLink Multi-Session Claude Code Harness" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Section: 무엇을 만드나 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '무엇을 만드나' : "What We're Building"}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? 'PayLink는 가맹점이 USDC 결제 링크를 만들고, 고객이 입금하면 감지해 서명된 웹훅을 보내는 서비스입니다. 스택: TypeScript, Fastify, SQLite(better-sqlite3), Vitest. 블록체인은 FakeChainClient로 대체합니다.'
              : 'PayLink is a service where merchants create USDC payment links, and when a customer deposits, it detects the deposit and sends a signed webhook. Stack: TypeScript, Fastify, SQLite (better-sqlite3), Vitest. The blockchain is replaced by FakeChainClient.'}
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '세션' : 'Session'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '담당' : 'Responsibility'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '소유 디렉토리' : 'Owned Directory'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['link-api', '결제 링크 생성·조회 HTTP API', 'src/links/'],
                  ['chain-watcher', '입금 감지, 상태 변경, 이벤트 기록 워커', 'src/watcher/'],
                  ['webhook-dispatcher', '서명된 웹훅 발송과 재시도', 'src/webhooks/'],
                  ['control (메인)', '조율, 계약 반영, 리뷰, 머지', '—'],
                ] : [
                  ['link-api', 'Payment link creation & query HTTP API', 'src/links/'],
                  ['chain-watcher', 'Deposit detection, state change, event logging worker', 'src/watcher/'],
                  ['webhook-dispatcher', 'Signed webhook delivery and retry', 'src/webhooks/'],
                  ['control (main)', 'Orchestration, contract updates, review, merge', '—'],
                ]).map(([session, desc, dir], i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-mono text-xs text-emerald-700 font-bold">{session}</td>
                    <td className="p-3 text-slate-600">{desc}</td>
                    <td className="p-3 font-mono text-xs text-slate-500">{dir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Step 0 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 0. 맥북 실습 환경 준비' : 'Step 0. MacBook Setup'}
          </h2>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '0-1. 도구 설치' : '0-1. Install Tools'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`xcode-select --install
brew install node pnpm jq git
curl -fsSL https://claude.ai/install.sh | bash
# 새 터미널에서:
claude --version
claude doctor`}</pre>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
            <strong>{isKo ? '참고:' : 'Note:'}</strong>{' '}
            {isKo
              ? 'brew install --cask claude-code는 안정 채널로 약 1주 늦고 자동 업데이트가 안 됩니다. 네이티브 설치(curl)를 권장합니다. Pro/Max/Team/Enterprise 또는 Console 계정이 필요합니다.'
              : 'brew install --cask claude-code is on the stable channel (~1 week behind) and does not auto-update. Native install via curl is recommended. Requires Pro/Max/Team/Enterprise or Console account.'}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '0-2. 버전 확인' : '0-2. Version Check'}
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '확인 항목' : 'Item'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '기준' : 'Minimum'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '미달 시 영향' : 'Impact if Below'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['Claude Code', '2.1.224+ (메시징), 2.1.232+ (@세션 자동완성)', '세션 간 메시징 불가'],
                  ['pnpm', '10 이상', 'pnpm approve-builds 필수'],
                  ['jq', '아무 버전', '모든 훅이 조용히 실패'],
                ] : [
                  ['Claude Code', '2.1.224+ (messaging), 2.1.232+ (@session autocomplete)', 'Cross-session messaging unavailable'],
                  ['pnpm', '10+', 'pnpm approve-builds required'],
                  ['jq', 'any version', 'All hooks silently fail'],
                ]).map(([item, min, impact], i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-mono text-xs font-bold text-slate-800">{item}</td>
                    <td className="p-3 text-slate-600 text-xs">{min}</td>
                    <td className="p-3 text-red-600 text-xs">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`node -v    # v20 이상
pnpm -v    # 10.x 또는 11.x
jq --version
claude --version`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '0-3. git 설정' : '0-3. git Configuration'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '0-4. 터미널과 알림 권한' : '0-4. Terminal & Notification Permissions'}
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '터미널' : 'Terminal'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '알림 시퀀스' : 'Notification Sequence'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '추가 설정' : 'Extra Setup'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['Ghostty', 'OSC 777 (기본값)', '시스템 설정 → 알림 → Ghostty 허용'],
                  ['iTerm2', 'OSC 9', '시스템 설정 → 알림 → iTerm2 허용'],
                  ['Warp', 'OSC 777', '시스템 설정 → 알림 → Warp 허용'],
                  ['Terminal.app', '지원 안 함', 'Step 2-3의 osascript 대안 사용'],
                ] : [
                  ['Ghostty', 'OSC 777 (default)', 'System Settings → Notifications → Allow Ghostty'],
                  ['iTerm2', 'OSC 9', 'System Settings → Notifications → Allow iTerm2'],
                  ['Warp', 'OSC 777', 'System Settings → Notifications → Allow Warp'],
                  ['Terminal.app', 'Not supported', 'Use osascript alternative in Step 2-3'],
                ]).map(([term, seq, extra], i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-bold text-slate-800 text-sm">{term}</td>
                    <td className="p-3 font-mono text-xs text-slate-600">{seq}</td>
                    <td className="p-3 text-slate-600 text-xs">{extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mb-2">{isKo ? '미리 권한 받기:' : 'Grant permissions in advance:'}</p>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`sleep 3; printf '\\033]777;notify;PayLink;알림 테스트\\007'   # Ghostty, Warp
sleep 3; printf '\\033]9;PayLink 알림 테스트\\007'            # iTerm2`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '0-5. 사용량과 권한 모드' : '0-5. Usage and Permission Mode'}
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
            <strong>{isKo ? '주의:' : 'Warning:'}</strong>{' '}
            {isKo
              ? '세션 4개 동시 = 사용량 4배. 처음에는 link-api, chain-watcher 2개로 시작하는 것을 권장합니다. 권한 모드: --permission-mode acceptEdits 권장 (편집 자동, Bash 명령만 승인). 세션 안에서 Shift+Tab으로 변경 가능합니다.'
              : '4 simultaneous sessions = 4× usage. For beginners, start with just link-api and chain-watcher. Permission mode: --permission-mode acceptEdits recommended (edits auto-approved, Bash commands require approval). Change with Shift+Tab inside a session.'}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '0-6. 실습 폴더' : '0-6. Working Directory'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`mkdir -p ~/dev && cd ~/dev`}</pre>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
            <strong>Checkpoint:</strong>{' '}
            {isKo
              ? '0-2의 네 명령이 모두 기준 버전을 출력하고, 터미널 알림 방식을 결정했으면 → Step 1로 이동.'
              : "All four commands in 0-2 output the required versions, and you've decided on a terminal notification method → proceed to Step 1."}
          </div>
        </section>

        {/* Section: Step 1 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 1. 뼈대와 공통 계약' : 'Step 1. Scaffold and Shared Contracts'}
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
            <strong>{isKo ? '이번 Step의 결론:' : 'Key takeaway:'}</strong>{' '}
            {isKo
              ? '세 세션을 띄우기 전에 공유 타입, DB 스키마, 체인 인터페이스를 메인 브랜치에 먼저 고정하세요. 계약 없이 병렬 시작하면 머지 충돌이 폭발합니다.'
              : 'Before launching three sessions, lock shared types, DB schema, and chain interface on the main branch first. Starting in parallel without contracts causes merge conflict explosions.'}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '1-1. 저장소 생성' : '1-1. Create Repository'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`cd ~/dev
mkdir paylink && cd paylink
git init && pnpm init
mkdir -p src/{shared,db,links,watcher,webhooks} src/db/migrations test docs/progress data
printf 'node_modules/\\ndata/\\n.env\\n.claude/worktrees/\\n' > .gitignore`}</pre>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-sm text-amber-800">
            <strong>{isKo ? 'pnpm 버전별 빌드 스크립트 주의사항:' : 'pnpm version build script warning:'}</strong>{' '}
            {isKo
              ? 'pnpm 10은 기본으로 설치 스크립트를 차단(경고만), pnpm 11은 ERR_PNPM_IGNORED_BUILDS로 설치 중단. pnpm approve-builds를 사용하세요.'
              : 'pnpm 10 blocks install scripts by default (warning only), pnpm 11 aborts with ERR_PNPM_IGNORED_BUILDS. Use pnpm approve-builds.'}
          </div>

          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`pnpm add fastify better-sqlite3 zod dotenv nanoid
pnpm add -D typescript tsx vitest @types/node @types/better-sqlite3
pnpm approve-builds    # better-sqlite3, esbuild 선택 후 엔터
pnpm install
node -e "new (require('better-sqlite3'))(':memory:'); console.log('ok')"`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">package.json scripts</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`{
  "name": "paylink",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "worker": "tsx src/watcher/run.ts",
    "dispatcher": "tsx src/webhooks/run.ts",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "db:reset": "tsx src/db/reset.ts"
  }
}`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">tsconfig.json</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`{
  "compilerOptions": {
    "target": "es2022", "module": "esnext",
    "moduleResolution": "bundler", "strict": true,
    "esModuleInterop": true, "skipLibCheck": true,
    "noEmit": true, "types": ["node"]
  },
  "include": ["src", "test", "vitest.config.ts"]
}`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-2">vitest.config.ts</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3 text-xs text-amber-800">
            {isKo
              ? "include: ['test/**/*.test.ts'] 없으면 worktree 안의 다른 세션 테스트까지 실행됩니다."
              : "Without include: ['test/**/*.test.ts'], tests from other sessions inside the worktree also run."}
          </div>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: { include: ['test/**/*.test.ts'], passWithNoTests: true },
});`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '1-2. 공유 타입' : '1-2. Shared Types'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`// src/shared/types.ts
export type PaymentStatus = 'pending' | 'paid' | 'expired' | 'underpaid';
export interface PaymentLink {
  id: string;           // 'pl_' + nanoid
  merchantId: string;
  amount: bigint;       // USDC 최소 단위 (6 decimals). 1 USDC = 1_000_000n
  depositAddress: string;
  status: PaymentStatus;
  expiresAt: string;
  createdAt: string;
}
export type PaymentEventType = 'payment.paid' | 'payment.expired' | 'payment.underpaid';
export interface PaymentEvent {
  id: string;           // 'evt_' + nanoid
  type: PaymentEventType;
  linkId: string;
  txHash?: string;
  occurredAt: string;
}`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '1-3. DB 스키마 (outbox 패턴)' : '1-3. DB Schema (outbox pattern)'}
          </h3>
          <p className="text-slate-600 text-sm mb-3">
            {isKo
              ? 'payment_events 테이블의 dispatched 컬럼이 outbox 패턴의 핵심입니다. webhook-dispatcher는 dispatched=0인 이벤트만 처리하고, 성공 시 1로 업데이트합니다.'
              : 'The dispatched column in payment_events is the heart of the outbox pattern. The webhook-dispatcher only processes events where dispatched=0 and updates to 1 on success.'}
          </p>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`-- src/db/schema.sql
CREATE TABLE payment_links (
  id               TEXT PRIMARY KEY,
  merchant_id      TEXT NOT NULL,
  amount           TEXT NOT NULL,
  deposit_address  TEXT NOT NULL UNIQUE,
  status           TEXT NOT NULL DEFAULT 'pending',
  expires_at       TEXT NOT NULL,
  created_at       TEXT NOT NULL
);
CREATE TABLE payment_events (
  id           TEXT PRIMARY KEY,
  type         TEXT NOT NULL,
  link_id      TEXT NOT NULL REFERENCES payment_links(id),
  tx_hash      TEXT,
  occurred_at  TEXT NOT NULL,
  dispatched   INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE merchants (
  id              TEXT PRIMARY KEY,
  webhook_url     TEXT NOT NULL,
  webhook_secret  TEXT NOT NULL
);`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '1-4. 체인 인터페이스' : '1-4. Chain Interface'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`// src/shared/chain.ts
export interface UsdcTransfer {
  to: string;
  amount: bigint;
  txHash: string;
  blockNumber: number;
}
export interface ChainClient {
  latestBlock(): Promise<number>;
  transfersTo(addresses: string[], fromBlock: number, toBlock: number): Promise<UsdcTransfer[]>;
}
export class FakeChainClient implements ChainClient {
  private block = 100;
  private transfers: UsdcTransfer[] = [];
  push(t: Omit<UsdcTransfer, 'blockNumber'>) {
    this.transfers.push({ ...t, blockNumber: ++this.block });
  }
  async latestBlock() { return this.block; }
  async transfersTo(addrs: string[], from: number, to: number) {
    return this.transfers.filter(
      t => addrs.includes(t.to) && t.blockNumber >= from && t.blockNumber <= to
    );
  }
}`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '1-5. .env와 CLAUDE.md' : '1-5. .env and CLAUDE.md'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`# .env
WEBHOOK_TIMEOUT_MS=5000
# PORT, DATABASE_PATH는 worktree별로 달라야 하므로 여기에 넣지 않음 (Step 6 참조)`}</pre>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# CLAUDE.md
# PayLink

## 프로젝트 구조
- src/shared/   — 타입, 체인 인터페이스 (변경 시 control에 알림)
- src/db/       — 스키마, 마이그레이션, DB 초기화
- src/links/    — link-api 세션 소유
- src/watcher/  — chain-watcher 세션 소유
- src/webhooks/ — webhook-dispatcher 세션 소유

## 공통 계약 변경 프로토콜
1. 변경 의도를 control 세션에 @control로 메시지 전송
2. control 승인 후에만 src/shared/ 수정
3. 변경 후 pnpm typecheck 통과 확인
4. 다른 세션에 @link-api/@chain-watcher/@webhook-dispatcher 알림

## 완료 기준
- pnpm typecheck: 오류 없음
- pnpm test: 실패 없음
- docs/progress/<세션명>.md 업데이트 (최근 30분 이내)`}</pre>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
            <strong>Checkpoint:</strong>{' '}
            {isKo
              ? 'pnpm typecheck, pnpm test (No test files), pnpm db:reset 모두 통과 → Step 2로 이동.'
              : 'pnpm typecheck, pnpm test (No test files), pnpm db:reset all pass → proceed to Step 2.'}
          </div>
        </section>

        {/* Section: Step 2 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 2. 하네스 설치' : 'Step 2. Install the Harness'}
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
            <strong>{isKo ? '이번 Step의 결론:' : 'Key takeaway:'}</strong>{' '}
            {isKo
              ? '기능 코드 전에 .claude/ 아래 하네스를 깔고 각 훅을 Claude 없이 단독 테스트하세요. 훅이 조용히 실패하면 게이트가 열린 채 병렬 개발이 시작됩니다.'
              : 'Before any feature code, install the harness under .claude/ and test each hook standalone without Claude. If hooks silently fail, the gate stays open during parallel development.'}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
            <strong>{isKo ? '중요:' : 'Important:'}</strong>{' '}
            {isKo
              ? 'settings.json을 맨 마지막에 만드세요. 미완성 훅이 설치 도중 발동하면 혼란이 생깁니다.'
              : 'Create settings.json last. If incomplete hooks fire during installation, it causes confusion.'}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">2-1. settings.json</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`// .claude/settings.json
{
  "permissions": {
    "allow": [
      "Bash(pnpm:*)",
      "Bash(git:*)",
      "Bash(node:*)",
      "Bash(tsx:*)",
      "Bash(mkdir:*)",
      "Bash(touch:*)",
      "Bash(cp:*)",
      "Bash(mv:*)",
      "Bash(rm:*)"
    ],
    "deny": [
      "Bash(git push --force*)",
      "Bash(rm -rf /*)"
    ]
  },
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [{ "type": "command", "command": "cat | .claude/hooks/session-start.sh" }]
      }
    ],
    "UserPromptSubmit": [
      {
        "matcher": "",
        "hooks": [{ "type": "command", "command": "cat | .claude/hooks/title-working.sh" }]
      }
    ],
    "Notification": [
      {
        "matcher": "",
        "hooks": [{ "type": "command", "command": "cat | .claude/hooks/notify.sh" }]
      }
    ],
    "Stop": [
      {
        "matcher": "",
        "hooks": [{ "type": "command", "command": "cat | .claude/hooks/verify-done.sh" }]
      }
    ]
  }
}`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">2-2. session-start.sh</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`#!/usr/bin/env bash
# .claude/hooks/session-start.sh
set -euo pipefail
INPUT=\$(cat)
CWD=\$(echo "\$INPUT" | jq -r '.cwd // "."')
SOURCE=\$(echo "\$INPUT" | jq -r '.source // "unknown"')
SESSION_NAME=\$(basename "\$CWD")
PROGRESS_FILE="\$CWD/docs/progress/\${SESSION_NAME}.md"

CTX=""
if [[ -f "\$PROGRESS_FILE" ]]; then
  CTX=\$(cat "\$PROGRESS_FILE")
fi

jq -n \\
  --arg title "[\$SESSION_NAME] working" \\
  --arg ctx "\$CTX" \\
  --arg src "\$SOURCE" \\
  '{
    hookSpecificOutput: {
      sessionTitle: \$title,
      additionalContext: ("=== progress (\(\$src)) ===\\n" + \$ctx)
    }
  }'`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">2-3. notify.sh와 title-working.sh</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`#!/usr/bin/env bash
# .claude/hooks/notify.sh
set -euo pipefail
INPUT=\$(cat)
MSG=\$(echo "\$INPUT" | jq -r '.message // "Claude is waiting"')
SESSION=\$(echo "\$INPUT" | jq -r '.cwd // "." | split("/") | last')

# Ghostty / Warp (OSC 777)
printf '\\033]777;notify;PayLink [%s];%s\\007' "\$SESSION" "\$MSG"

# iTerm2 대안 (주석 해제):
# printf '\\033]9;PayLink [%s]: %s\\007' "\$SESSION" "\$MSG"

# Terminal.app 대안 (주석 해제):
# osascript -e "display notification \\"\$MSG\\" with title \\"PayLink [\$SESSION]\\"" 2>/dev/null || true

jq -n '{}'`}</pre>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`#!/usr/bin/env bash
# .claude/hooks/title-working.sh
set -euo pipefail
INPUT=\$(cat)
SESSION=\$(echo "\$INPUT" | jq -r '.cwd // "." | split("/") | last')
printf '\\033]0;[%s] working...\\007' "\$SESSION"
jq -n '{}'`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">2-4. verify-done.sh</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`#!/usr/bin/env bash
# .claude/hooks/verify-done.sh
set -euo pipefail
INPUT=\$(cat)
CWD=\$(echo "\$INPUT" | jq -r '.cwd // "."')
SESSION_ID=\$(echo "\$INPUT" | jq -r '.session_id // "unknown"')
SESSION_NAME=\$(basename "\$CWD")

# 재시도 카운터
RETRY_FILE="\${TMPDIR:-/tmp}/paylink_verify_\${SESSION_ID}"
RETRY=\$(cat "\$RETRY_FILE" 2>/dev/null || echo 0)
echo \$(( RETRY + 1 )) > "\$RETRY_FILE"

fail() {
  jq -n --arg reason "\$1" '{
    decision: "block",
    reason: \$reason
  }'
  exit 0
}

# 1. merge-base diff — 변경된 파일 존재 확인
cd "\$CWD"
BASE=\$(git merge-base HEAD main 2>/dev/null || echo "")
if [[ -n "\$BASE" ]]; then
  DIFF_COUNT=\$(git diff --name-only "\$BASE" HEAD | wc -l | tr -d ' ')
  if [[ "\$DIFF_COUNT" -eq 0 ]]; then
    fail "변경된 파일이 없습니다. 작업이 저장되지 않았을 수 있습니다."
  fi
fi

# 2. typecheck
if ! pnpm typecheck --silent 2>/dev/null; then
  fail "타입 오류가 있습니다. pnpm typecheck를 실행해 확인하세요."
fi

# 3. vitest (관련 테스트만)
if ! pnpm test --silent 2>/dev/null; then
  fail "테스트 실패가 있습니다. pnpm test를 실행해 확인하세요."
fi

# 4. progress 파일 최신성 확인 (30분 이내)
PROGRESS_FILE="\$CWD/docs/progress/\${SESSION_NAME}.md"
if [[ -f "\$PROGRESS_FILE" ]]; then
  MTIME=\$(date -r "\$PROGRESS_FILE" +%s 2>/dev/null || echo 0)
  NOW=\$(date +%s)
  AGE=\$(( NOW - MTIME ))
  if [[ \$AGE -gt 1800 ]]; then
    fail "docs/progress/\${SESSION_NAME}.md가 30분 이상 업데이트되지 않았습니다."
  fi
fi

jq -n '{ decision: "approve" }'`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '2-5. 서브에이전트 정의' : '2-5. Sub-Agent Definitions'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`---
# .claude/agents/investigator.md
name: investigator
description: 코드베이스에서 버그·중복·계약 위반을 조사하는 에이전트
---
당신은 코드 조사 전문가입니다.
주어진 증상(에러 메시지, 재현 경로)을 분석하고:
1. 관련 파일을 읽어 근본 원인을 파악합니다
2. 동일 패턴의 다른 발생 지점을 모두 나열합니다
3. 수정 방법을 간결하게 제안합니다 (코드 작성 X, 진단만)
조사 완료 후 결론을 JSON으로 반환합니다:
{ "rootCause": "...", "affectedFiles": [...], "suggestion": "..." }`}</pre>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`---
# .claude/agents/reviewer.md
name: reviewer
description: PR 머지 전 코드 품질·보안·계약 준수를 검토하는 에이전트
---
당신은 시니어 코드 리뷰어입니다.
다음 체크리스트를 기준으로 검토합니다:
- [ ] 공유 타입(src/shared/)과 계약 일치 여부
- [ ] SQL 인젝션, HMAC 서명 누락 등 보안 이슈
- [ ] 멱등성 — 동일 이벤트 중복 처리 방지
- [ ] 금액 단위 일관성 (bigint, 6 decimals)
- [ ] 에러 핸들링 누락
각 항목을 PASS/FAIL/WARN으로 표시하고, FAIL이 하나라도 있으면 머지 차단을 권고합니다.`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '2-6. .worktreeinclude와 progress 템플릿' : '2-6. .worktreeinclude and progress template'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`# .worktreeinclude
# worktree 생성 시 복사할 파일 목록 (.env만 복사, PORT/DB는 Step 6에서 훅이 주입)
.env`}</pre>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# docs/progress/_template.md
## 목표
<!-- 이 세션이 완료해야 할 기능 한 줄 요약 -->

## 소유 파일
<!-- 이 세션만 수정하는 파일 목록 -->

## 완료 기준
- [ ] pnpm typecheck 통과
- [ ] pnpm test 통과
- [ ] 핵심 기능 작동 확인

## 결정 사항
<!-- 설계 중 내린 결정과 이유 -->

## 마지막 세션 메모
<!-- 다음 세션 시작 시 읽을 메모 -->

## 막힌 점
<!-- 해결 중인 문제 또는 도움 필요 사항 -->`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '2-7. 훅 단독 테스트' : '2-7. Standalone Hook Tests'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`chmod +x .claude/hooks/*.sh

# 1. session-start
echo '{"cwd":"'\$PWD'","source":"startup"}' | .claude/hooks/session-start.sh | jq .

# 2. notify
echo '{"cwd":"'\$PWD'","message":"test"}' | .claude/hooks/notify.sh | jq .

# 3. verify-done (정상 — progress 파일 없어도 통과 확인)
echo '{"cwd":"'\$PWD'","session_id":"t1"}' | .claude/hooks/verify-done.sh; echo "exit=\$?"

# 4. verify-done (타입 오류 감지 확인)
echo 'const x: number = "a";' > src/broken.ts
echo '{"cwd":"'\$PWD'","session_id":"t1"}' | .claude/hooks/verify-done.sh; echo "exit=\$?"
rm src/broken.ts`}</pre>
        </section>

        {/* Section: Step 3 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 3. 작업 분할' : 'Step 3. Work Division'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '세 세션을 시작하기 전에 각 세션의 목표와 완료 기준을 progress 파일로 명시합니다. 모호한 "구현하세요"보다 체크리스트가 Stop 훅의 판단 기준이 됩니다.'
              : "Before starting three sessions, specify each session's goal and completion criteria in progress files. A checklist serves better as a Stop hook criterion than a vague \"implement this.\""}
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-3">docs/progress/link-api.md</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`## 목표
POST /links로 결제 링크 생성, GET /links/:id로 조회하는 Fastify HTTP API

## 소유 파일
- src/links/router.ts
- src/links/service.ts
- test/links.test.ts

## 완료 기준
- [ ] POST /links — merchantId, amount, expiresAt 검증 후 pl_xxx ID 반환
- [ ] GET /links/:id — 상태 포함 전체 링크 정보 반환
- [ ] 존재하지 않는 ID → 404
- [ ] amount가 0 이하 → 400
- [ ] pnpm typecheck 통과
- [ ] pnpm test 통과 (링크 API 테스트 최소 5개)

## 결정 사항
- depositAddress는 nanoid로 가짜 주소 생성 (실제 블록체인 연동 범위 밖)

## 마지막 세션 메모
(첫 세션이므로 비어 있음)

## 막힌 점
(없음)`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">docs/progress/chain-watcher.md</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`## 목표
FakeChainClient에서 입금을 감지하고 payment_links 상태를 변경하며 payment_events를 기록하는 워커

## 소유 파일
- src/watcher/watcher.ts
- src/watcher/run.ts
- test/watcher.test.ts

## 완료 기준
- [ ] pending 링크의 depositAddress 감시
- [ ] 정확한 금액 입금 → paid 상태로 변경 + payment.paid 이벤트 기록
- [ ] 적은 금액 입금 → underpaid 이벤트 기록
- [ ] 만료된 링크 → expired 이벤트 기록
- [ ] 동일 txHash 중복 처리 방지 (멱등성)
- [ ] pnpm typecheck 통과
- [ ] pnpm test 통과

## 결정 사항
- 블록 범위: 마지막 처리 블록 ~ 최신 블록 (data/watcher-state.json에 저장)

## 마지막 세션 메모
(첫 세션이므로 비어 있음)

## 막힌 점
(없음)`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">docs/progress/webhook-dispatcher.md</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`## 목표
payment_events(outbox)를 읽어 merchants.webhook_url로 HMAC-SHA256 서명된 웹훅을 발송하고 재시도하는 워커

## 소유 파일
- src/webhooks/dispatcher.ts
- src/webhooks/run.ts
- test/webhooks.test.ts

## 완료 기준
- [ ] dispatched=0 이벤트 조회 → POST webhook_url
- [ ] X-PayLink-Signature 헤더 — HMAC-SHA256(secret, body)
- [ ] 5초 타임아웃 (WEBHOOK_TIMEOUT_MS)
- [ ] 실패 시 최대 3회 재시도 (지수 백오프)
- [ ] 성공 시 dispatched=1 업데이트
- [ ] 동일 이벤트 재발송 방지 (멱등성)
- [ ] pnpm typecheck 통과
- [ ] pnpm test 통과

## 결정 사항
- 서명 형식: sha256=<hex>

## 마지막 세션 메모
(첫 세션이므로 비어 있음)

## 막힌 점
(없음)`}</pre>
        </section>

        {/* Section: Step 4 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 4. 세 세션 띄우기' : 'Step 4. Launch Three Sessions'}
          </h2>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '4-1. 분기 기준 주의사항' : '4-1. Branching Warning'}
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
            {isKo
              ? 'worktree는 현재 HEAD를 기준으로 만들어집니다. Step 1 커밋을 먼저 push하거나, worktree 설정에서 baseRef: "head"를 사용하세요. main에 없는 커밋 위에서 worktree를 만들면 공유 타입을 볼 수 없습니다.'
              : "Worktrees are created from the current HEAD. Either push the Step 1 commit first, or use baseRef: \"head\" in worktree settings. Creating a worktree on top of a commit not on main means shared types won't be visible."}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '4-2. 터미널 배치' : '4-2. Terminal Layout'}
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '터미널' : 'Terminal'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '명령' : 'Command'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '세션 이름' : 'Session Name'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '역할' : 'Role'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['1', 'claude -w link-api --permission-mode acceptEdits', 'link-api', '결제 링크 API'],
                  ['2', 'claude -w chain-watcher --permission-mode acceptEdits', 'chain-watcher', '입금 감지'],
                  ['3', 'claude -w webhook-dispatcher --permission-mode acceptEdits', 'webhook-dispatcher', '웹훅 발송'],
                  ['4', 'claude --name control', 'control', '조율·리뷰·머지'],
                ] : [
                  ['1', 'claude -w link-api --permission-mode acceptEdits', 'link-api', 'Payment link API'],
                  ['2', 'claude -w chain-watcher --permission-mode acceptEdits', 'chain-watcher', 'Deposit detection'],
                  ['3', 'claude -w webhook-dispatcher --permission-mode acceptEdits', 'webhook-dispatcher', 'Webhook delivery'],
                  ['4', 'claude --name control', 'control', 'Orchestration · review · merge'],
                ]).map(([term, cmd, name, role], i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 text-slate-600">{term}</td>
                    <td className="p-3 font-mono text-xs text-emerald-700">{cmd}</td>
                    <td className="p-3 font-bold text-slate-800 text-xs">{name}</td>
                    <td className="p-3 text-slate-600 text-sm">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '4-3. 각 세션 첫 화면 확인' : '4-3. Verify Initial Screen of Each Session'}
          </h3>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 text-sm text-slate-700 space-y-2">
            <p>{isKo ? '각 세션이 시작되면 확인할 항목:' : 'Check these when each session starts:'}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isKo ? '탭 제목이 [세션이름] working으로 표시됨' : 'Tab title shows [session-name] working'}</li>
              <li>{isKo ? 'SessionStart 훅이 progress 파일을 additionalContext로 주입함' : 'SessionStart hook injects the progress file as additionalContext'}</li>
              <li>{isKo ? '의존성 미설치 시 "pnpm install 필요" 안내' : 'If dependencies are missing, shows "pnpm install required"'}</li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '4-4. 첫 지시문' : '4-4. Initial Instructions'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# link-api 세션
docs/progress/link-api.md의 완료 기준을 모두 충족하는 코드를 작성해 주세요.
src/links/ 디렉토리만 수정하고, 공유 타입 변경이 필요하면 먼저 @control에 알려 주세요.

# chain-watcher 세션
docs/progress/chain-watcher.md의 완료 기준을 모두 충족하는 코드를 작성해 주세요.
src/watcher/ 디렉토리만 수정하고, DB 스키마 변경이 필요하면 먼저 @control에 알려 주세요.

# webhook-dispatcher 세션
docs/progress/webhook-dispatcher.md의 완료 기준을 모두 충족하는 코드를 작성해 주세요.
src/webhooks/ 디렉토리만 수정하고, 새 의존성이 필요하면 먼저 @control에 알려 주세요.`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '4-5. control 세션에서 에이전트 관리' : '4-5. Agent Management in control Session'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`/list-agents          # 실행 중인 세션 목록 확인
/rename control       # 현재 세션 이름을 control로 설정
@link-api             # link-api 세션에 메시지 전송
@chain-watcher        # chain-watcher 세션에 메시지 전송
@webhook-dispatcher   # webhook-dispatcher 세션에 메시지 전송`}</pre>
        </section>

        {/* Section: Step 5 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 5. 병렬 개발 실황' : 'Step 5. Parallel Development in Action'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {isKo
              ? '세 세션이 돌아가는 동안 하네스의 각 장치가 실제로 어떻게 작동하는지 7개 장면으로 살펴봅니다.'
              : 'While three sessions run simultaneously, watch how each harness component operates in 7 real scenes.'}
          </p>

          {/* Scene 1 */}
          <div className="bg-slate-50 border-l-4 border-emerald-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-emerald-700 text-sm mb-2">
              {isKo ? '장면 1 — 승인 대기 알림' : 'Scene 1 — Approval Waiting Notification'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? 'link-api 세션이 better-sqlite3 빌드 스크립트 승인을 기다리며 입력 대기 상태가 됩니다. Notification 훅이 OS 알림을 보내 맥을 보고 있지 않아도 즉시 알 수 있습니다.'
                : 'The link-api session waits for better-sqlite3 build script approval. The Notification hook sends an OS notification so you know immediately even without watching the screen.'}
            </p>
            <div className="text-xs text-slate-500">
              {isKo ? '하네스 장치: Notification 훅 → OSC 777 → 시스템 알림' : 'Harness: Notification hook → OSC 777 → system notification'}
            </div>
          </div>

          {/* Scene 2 */}
          <div className="bg-slate-50 border-l-4 border-blue-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-blue-700 text-sm mb-2">
              {isKo ? '장면 2 — 공통 계약 변경 + 세션 간 메시지' : 'Scene 2 — Shared Contract Change + Cross-Session Messaging'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? 'chain-watcher 세션이 PaymentLink에 lastBlockScanned 필드가 필요하다는 것을 발견합니다. @control로 변경 요청을 보내면, control이 다른 두 세션에 영향을 알리고 승인 후 공유 타입을 수정합니다.'
                : 'The chain-watcher session discovers it needs a lastBlockScanned field on PaymentLink. It sends a change request via @control, which notifies the other two sessions about the impact and modifies the shared types after approval.'}
            </p>
            <pre className="bg-slate-800 text-green-400 rounded p-3 text-xs mb-2">{`# chain-watcher → control
@control PaymentLink에 lastBlockScanned?: number 추가가 필요합니다.
watcher가 마지막으로 처리한 블록을 링크별로 추적해야 합니다.

# control → link-api, webhook-dispatcher
@link-api @webhook-dispatcher 공지: PaymentLink 타입에 lastBlockScanned?: number 추가 예정.
link-api는 생성 시 0으로 초기화, webhook-dispatcher는 영향 없음. 확인 부탁드립니다.`}</pre>
            <div className="text-xs text-slate-500">
              {isKo ? '하네스 장치: 세션 간 @멘션 메시징 + CLAUDE.md 공통 계약 변경 프로토콜' : 'Harness: cross-session @mention messaging + CLAUDE.md contract change protocol'}
            </div>
          </div>

          {/* Scene 3 */}
          <div className="bg-slate-50 border-l-4 border-red-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-red-700 text-sm mb-2">
              {isKo ? '장면 3 — Stop 게이트가 "완료"를 막음' : 'Scene 3 — Stop Gate Blocks "Done"'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? 'webhook-dispatcher 세션이 "완료했습니다"를 말하려 하지만 Stop 훅이 가로막습니다. vitest가 멱등성 테스트에서 실패하고, progress 파일이 45분째 업데이트되지 않았기 때문입니다.'
                : 'The webhook-dispatcher session tries to say "done" but the Stop hook blocks it. Vitest fails on an idempotency test, and the progress file has not been updated in 45 minutes.'}
            </p>
            <pre className="bg-slate-800 text-red-400 rounded p-3 text-xs mb-2">{`# Stop 훅 출력
{
  "decision": "block",
  "reason": "테스트 실패가 있습니다. pnpm test를 실행해 확인하세요."
}
# → 세션이 자동으로 계속 작업`}</pre>
            <div className="text-xs text-slate-500">
              {isKo ? '하네스 장치: Stop 훅 verify-done.sh — vitest 실패 + progress 미업데이트 감지' : 'Harness: Stop hook verify-done.sh — detects vitest failure + stale progress'}
            </div>
          </div>

          {/* Scene 4 */}
          <div className="bg-slate-50 border-l-4 border-purple-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-purple-700 text-sm mb-2">
              {isKo ? '장면 4 — investigator 서브에이전트로 중복 원인 조사' : 'Scene 4 — investigator Sub-Agent for Duplicate Root Cause'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? 'chain-watcher와 webhook-dispatcher 모두 동일한 이벤트를 두 번 처리하는 것을 발견합니다. control 세션이 investigator 서브에이전트에게 원인 조사를 위임합니다.'
                : 'Both chain-watcher and webhook-dispatcher are found to process the same event twice. The control session delegates root cause investigation to the investigator sub-agent.'}
            </p>
            <pre className="bg-slate-800 text-green-400 rounded p-3 text-xs mb-2">{`# control 세션에서
/agent investigator
payment_events 테이블에서 같은 이벤트가 두 번 처리되는 원인을 조사해 주세요.
재현 경로: FakeChainClient.push() 후 watcher 2회 실행 → dispatched가 2개 생성`}</pre>
            <div className="text-xs text-slate-500">
              {isKo ? '하네스 장치: investigator 서브에이전트 (.claude/agents/investigator.md)' : 'Harness: investigator sub-agent (.claude/agents/investigator.md)'}
            </div>
          </div>

          {/* Scene 5 */}
          <div className="bg-slate-50 border-l-4 border-amber-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-amber-700 text-sm mb-2">
              {isKo ? '장면 5 — compact 후에도 기준 유지' : 'Scene 5 — Context Maintained After compact'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? 'link-api 세션이 컨텍스트 한계에 도달해 /compact가 실행됩니다. 세션이 재시작되어도 SessionStart 훅이 progress 파일을 additionalContext로 다시 주입하므로, 세션은 중단 지점부터 정확히 재개합니다.'
                : 'The link-api session hits context limit and /compact runs. Even after the session restarts, the SessionStart hook re-injects the progress file as additionalContext, so the session resumes exactly from the breakpoint.'}
            </p>
            <div className="text-xs text-slate-500">
              {isKo ? '하네스 장치: SessionStart 훅 → progress 파일 주입 (맥락 이월)' : 'Harness: SessionStart hook → progress file injection (context carry-over)'}
            </div>
          </div>

          {/* Scene 6 */}
          <div className="bg-slate-50 border-l-4 border-slate-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-slate-700 text-sm mb-2">
              {isKo ? '장면 6 — 점심 후 재개' : 'Scene 6 — Resume After Lunch'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? '1시간 후 돌아와 보니 세 세션이 모두 입력 대기 중입니다. 각 세션의 progress 파일이 "막힌 점" 섹션을 업데이트해 두었기 때문에, 한 줄 "계속해 주세요"만으로 맥락을 되찾습니다.'
                : 'Returning after an hour, all three sessions are waiting for input. Each session\'s progress file has been updated with the "blocked on" section, so a single "please continue" recovers full context.'}
            </p>
            <div className="text-xs text-slate-500">
              {isKo ? '하네스 장치: progress 파일 (마지막 세션 메모 + 막힌 점) → SessionStart 주입' : 'Harness: progress file (last session note + blocked) → SessionStart injection'}
            </div>
          </div>

          {/* Scene 7 */}
          <div className="bg-slate-50 border-l-4 border-rose-500 rounded-xl p-5 mb-6">
            <div className="font-bold text-rose-700 text-sm mb-2">
              {isKo ? '장면 7 — 공유 자원 충돌' : 'Scene 7 — Shared Resource Conflict'}
            </div>
            <p className="text-slate-600 text-sm mb-3">
              {isKo
                ? 'link-api 세션이 포트 3000에서 서버를 띄우고, chain-watcher도 같은 포트를 시도해 EADDRINUSE가 납니다. 또한 두 세션이 같은 data/dev.db 파일을 쓰려다 "no such table" 오류가 연달아 납니다. 이것이 Step 6의 하네스 개선으로 이어집니다.'
                : 'The link-api session starts a server on port 3000, and chain-watcher tries the same port causing EADDRINUSE. Also, two sessions trying to write the same data/dev.db file causes "no such table" errors in sequence. This leads to the harness improvement in Step 6.'}
            </p>
            <div className="text-xs text-slate-500">
              {isKo ? '원인: .worktreeinclude가 PORT/DB도 복사 → Step 6에서 수정' : 'Cause: .worktreeinclude also copies PORT/DB → fixed in Step 6'}
            </div>
          </div>

          {/* Summary table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '장면' : 'Scene'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '하네스 장치' : 'Harness Component'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '실제 사람 행동' : 'Human Action'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['1. 승인 대기', 'Notification 훅', '알림 받고 탭 전환 후 승인'],
                  ['2. 계약 변경', '세션 간 @멘션', '타입 추가 확인 후 허용'],
                  ['3. Stop 게이트', 'Stop 훅 verify-done.sh', '아무것도 안 해도 됨 (자동)'],
                  ['4. 중복 원인', 'investigator 서브에이전트', '조사 결과 확인 후 수정 지시'],
                  ['5. compact 재개', 'SessionStart 훅', '아무것도 안 해도 됨 (자동)'],
                  ['6. 점심 재개', 'progress 파일', '"계속해 주세요" 한 줄'],
                  ['7. 자원 충돌', '(하네스 미비 → Step 6)', 'Step 6 하네스 수정'],
                ] : [
                  ['1. Approval wait', 'Notification hook', 'Switch tab, approve after notification'],
                  ['2. Contract change', 'Cross-session @mention', 'Confirm type addition, allow'],
                  ['3. Stop gate', 'Stop hook verify-done.sh', 'Nothing (automatic)'],
                  ['4. Duplicate cause', 'investigator sub-agent', 'Review findings, instruct fix'],
                  ['5. compact resume', 'SessionStart hook', 'Nothing (automatic)'],
                  ['6. Lunch resume', 'progress file', 'Single "please continue"'],
                  ['7. Resource conflict', '(harness gap → Step 6)', 'Fix harness in Step 6'],
                ]).map((row, i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-bold text-slate-800 text-xs">{row[0]}</td>
                    <td className="p-3 text-slate-600 text-xs">{row[1]}</td>
                    <td className="p-3 text-slate-600 text-xs">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '장면이 저절로 일어나지 않을 때 유도 방법' : "How to Trigger Scenes That Don't Happen Naturally"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '장면' : 'Scene'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '유도 명령' : 'Trigger Command'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['1. 알림', 'pnpm approve-builds 실행 후 세션 재시작'],
                  ['3. Stop 게이트', 'touch -t 202601010000 docs/progress/link-api.md 으로 강제 설정'],
                  ['5. compact', '긴 파일 여러 개를 한 번에 읽도록 지시'],
                  ['7. 자원 충돌', '두 세션에서 동시에 pnpm dev 실행'],
                ] : [
                  ['1. Notification', 'Run pnpm approve-builds then restart session'],
                  ['3. Stop gate', 'Force progress file time: touch -t 202601010000 docs/progress/link-api.md'],
                  ['5. compact', 'Instruct session to read many large files at once'],
                  ['7. Resource conflict', 'Run pnpm dev simultaneously in two sessions'],
                ]).map((row, i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-bold text-slate-800 text-xs">{row[0]}</td>
                    <td className="p-3 font-mono text-xs text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Step 6 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 6. 하네스 개선' : 'Step 6. Improve the Harness'}
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
            <strong>{isKo ? '이번 Step의 결론:' : 'Key takeaway:'}</strong>{' '}
            {isKo
              ? '장면 7의 실패는 코드 버그가 아니라 하네스 버그입니다. .worktreeinclude가 세션마다 달라야 할 값(PORT, DB 경로)까지 복사합니다. SessionStart 훅이 worktree별로 계산해 주입하도록 수정합니다.'
              : "Scene 7's failure is not a code bug — it's a harness bug. .worktreeinclude copies values (PORT, DB path) that should differ per session. Fix SessionStart hook to compute and inject these per-worktree."}
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '6-1. investigator로 진단' : '6-1. Diagnose with investigator'}
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            {isKo
              ? 'investigator 결론: 모든 worktree가 동일한 .env를 복사해 PORT=3000, DATABASE_PATH=data/dev.db를 공유합니다. 수정: .env에서 이 두 값을 제거하고 SessionStart 훅이 worktree 이름의 체크섬으로 계산해 주입합니다.'
              : 'investigator conclusion: All worktrees copy the same .env, sharing PORT=3000 and DATABASE_PATH=data/dev.db. Fix: Remove these two values from .env, and have the SessionStart hook compute them from the worktree name checksum.'}
          </p>

          <h3 className="text-lg font-bold text-slate-800 mb-3">6-2. lib/env.sh</h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# .claude/hooks/lib/env.sh
paylink_env() {
  local dir="\$1" name sum
  name=\$(basename "\$dir")
  sum=\$(printf '%s' "\$name" | cksum | cut -d' ' -f1)
  PAYLINK_PORT=\$(( 3100 + sum % 800 ))
  PAYLINK_DB="\$dir/data/dev.db"
}`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '6-3. session-start.sh에 환경변수 주입 추가' : '6-3. Add env var injection to session-start.sh'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`#!/usr/bin/env bash
# .claude/hooks/session-start.sh (개선 버전)
set -euo pipefail
INPUT=\$(cat)
CWD=\$(echo "\$INPUT" | jq -r '.cwd // "."')
SOURCE=\$(echo "\$INPUT" | jq -r '.source // "unknown"')
SESSION_NAME=\$(basename "\$CWD")
PROGRESS_FILE="\$CWD/docs/progress/\${SESSION_NAME}.md"

# worktree별 환경 계산
source "\$(dirname "\$0")/lib/env.sh"
paylink_env "\$CWD"

# CLAUDE_ENV_FILE에 환경변수 export
ENV_FILE="\${TMPDIR:-/tmp}/paylink_env_\${SESSION_NAME}"
printf 'PORT=%d\\nDATABASE_PATH=%s\\n' "\$PAYLINK_PORT" "\$PAYLINK_DB" > "\$ENV_FILE"
export CLAUDE_ENV_FILE="\$ENV_FILE"

CTX=""
if [[ -f "\$PROGRESS_FILE" ]]; then
  CTX=\$(cat "\$PROGRESS_FILE")
fi

ENV_CTX="PORT=\${PAYLINK_PORT}, DATABASE_PATH=\${PAYLINK_DB}"

jq -n \\
  --arg title "[\$SESSION_NAME] working" \\
  --arg ctx "\$CTX" \\
  --arg src "\$SOURCE" \\
  --arg env "\$ENV_CTX" \\
  '{
    hookSpecificOutput: {
      sessionTitle: \$title,
      additionalContext: ("=== env ===\\n" + \$env + "\\n\\n=== progress (" + \$src + ") ===\\n" + \$ctx)
    }
  }'`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '6-4. verify-done.sh에도 env.sh 적용' : '6-4. Apply env.sh to verify-done.sh'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# verify-done.sh 상단에 추가
source "\$(dirname "\$0")/lib/env.sh"
paylink_env "\$CWD"
export PORT="\$PAYLINK_PORT"
export DATABASE_PATH="\$PAYLINK_DB"`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '6-5. .env에서 PORT, DATABASE_PATH 제거' : '6-5. Remove PORT, DATABASE_PATH from .env'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`# .env (개선 후)
WEBHOOK_TIMEOUT_MS=5000
# PORT와 DATABASE_PATH는 SessionStart 훅이 worktree별로 계산해 주입합니다`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '6-6. 실행 중인 세션에 반영 절차' : '6-6. Apply Changes to Running Sessions'}
          </h3>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 text-sm text-slate-700">
            <ol className="list-decimal pl-5 space-y-2">
              <li>{isKo ? '각 세션에서 /exit 입력해 종료' : 'Type /exit in each session to quit'}</li>
              <li>{isKo ? 'lib/env.sh, session-start.sh, verify-done.sh, .env 수정' : 'Modify lib/env.sh, session-start.sh, verify-done.sh, .env'}</li>
              <li>{isKo ? '훅 단독 테스트 재실행 (Step 2-7 반복)' : 'Re-run standalone hook tests (repeat Step 2-7)'}</li>
              <li>{isKo ? '세 세션 재시작 — 탭 제목에 PORT가 표시되면 성공' : 'Restart three sessions — success when PORT appears in tab title'}</li>
            </ol>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '6-7. 운영 원칙' : '6-7. Operating Principles'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '실패' : 'Failure'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '원인' : 'Cause'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '장치' : 'Device'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '종류' : 'Type'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['EADDRINUSE', '동일 PORT 공유', 'env.sh 체크섬 포트', '예방'],
                  ['no such table', '동일 DB 파일 공유', 'env.sh 세션별 DB 경로', '예방'],
                  ['타입 오류 커밋', '검증 없이 완료', 'verify-done.sh typecheck', '차단'],
                  ['테스트 실패 커밋', '검증 없이 완료', 'verify-done.sh vitest', '차단'],
                  ['재시작 후 맥락 유실', '세션 상태 휘발', 'progress + SessionStart', '복구'],
                  ['알림 누락', '화면 미확인', 'Notification + OSC 777', '감지'],
                ] : [
                  ['EADDRINUSE', 'Shared PORT', 'env.sh checksum port', 'Prevention'],
                  ['no such table', 'Shared DB file', 'env.sh per-session DB path', 'Prevention'],
                  ['Type error commit', 'No verification', 'verify-done.sh typecheck', 'Block'],
                  ['Test failure commit', 'No verification', 'verify-done.sh vitest', 'Block'],
                  ['Context loss on restart', 'Volatile session state', 'progress + SessionStart', 'Recovery'],
                  ['Missed notification', 'Screen unattended', 'Notification + OSC 777', 'Detection'],
                ]).map((row, i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-mono text-xs text-red-600">{row[0]}</td>
                    <td className="p-3 text-slate-600 text-xs">{row[1]}</td>
                    <td className="p-3 font-mono text-xs text-emerald-700">{row[2]}</td>
                    <td className="p-3 text-xs">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        row[3] === '예방' || row[3] === 'Prevention' ? 'bg-blue-100 text-blue-700' :
                        row[3] === '차단' || row[3] === 'Block' ? 'bg-red-100 text-red-700' :
                        row[3] === '복구' || row[3] === 'Recovery' ? 'bg-green-100 text-green-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Step 7 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? 'Step 7. 통합' : 'Step 7. Integration'}
          </h2>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '7-1. agent teams로 리뷰' : '7-1. Review with agent teams'}
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-sm text-amber-800">
            <strong>{isKo ? '실험적 기능:' : 'Experimental feature:'}</strong>{' '}
            {isKo
              ? 'CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS는 실험적 기능입니다. 언제든 변경될 수 있으며, 프로덕션 환경에서는 주의하여 사용하세요.'
              : 'CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS is experimental. It may change at any time — use with caution in production.'}
          </div>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-4">{`# ~/.claude/settings.json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}`}</pre>
          <p className="text-slate-600 text-sm mb-3">
            {isKo ? '세 명의 리뷰어를 동시에 실행:' : 'Run three reviewers simultaneously:'}
          </p>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# control 세션에서
/agent reviewer
다음 세 가지 관점으로 PayLink 코드를 검토해 주세요:
1. money reviewer — 금액 단위(bigint, 6 decimals) 일관성
2. idempotency reviewer — 중복 처리 방지 완전성
3. contract reviewer — src/shared/ 계약 준수 여부`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '7-2. 머지 순서' : '7-2. Merge Order'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# 1. link-api 먼저 (DB 스키마 의존)
git merge link-api

# 2. chain-watcher (payment_links 테이블 필요)
git merge chain-watcher

# 3. webhook-dispatcher (payment_events 테이블 필요)
git merge webhook-dispatcher`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '7-3. schema.sql 충돌 해결' : '7-3. Resolve schema.sql Conflicts'}
          </h3>
          <p className="text-slate-600 text-sm mb-3">
            {isKo
              ? 'schema.sql에 충돌이 생기면 마이그레이션 파일 규칙을 도입합니다. 세 세션이 동시에 스키마를 건드리지 않도록 CLAUDE.md에 규칙을 추가하세요.'
              : "If schema.sql conflicts occur, introduce migration file rules. Add a rule to CLAUDE.md so three sessions don't touch the schema simultaneously."}
          </p>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# src/db/migrations/001_add_last_block_scanned.sql
ALTER TABLE payment_links ADD COLUMN last_block_scanned INTEGER NOT NULL DEFAULT 0;

# CLAUDE.md에 추가
## DB 스키마 변경 규칙
- schema.sql 직접 수정 금지
- src/db/migrations/<번호>_<설명>.sql 파일로만 변경
- 번호는 control 세션이 할당 (충돌 방지)`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '7-4. E2E 테스트 시나리오' : '7-4. E2E Test Scenario'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`// test/e2e.test.ts
import { describe, it, expect } from 'vitest';
import { FakeChainClient } from '../src/shared/chain.js';

describe('PayLink E2E', () => {
  let linkId: string;
  let depositAddress: string;
  const chain = new FakeChainClient();

  it('결제 링크 생성', async () => {
    const res = await fetch('http://localhost:3000/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merchantId: 'merch_test',
        amount: '1000000',   // 1 USDC
        expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      }),
    });
    const body = await res.json() as { id: string; depositAddress: string };
    linkId = body.id;
    depositAddress = body.depositAddress;
    expect(linkId).toMatch(/^pl_/);
  });

  it('입금 감지 → paid 상태 전환', async () => {
    chain.push({ to: depositAddress, amount: 1_000_000n, txHash: '0xabc' });
    // watcher 1회 틱 실행
    await fetch('http://localhost:3001/tick');
    const res = await fetch(\`http://localhost:3000/links/\${linkId}\`);
    const body = await res.json() as { status: string };
    expect(body.status).toBe('paid');
  });

  it('웹훅 발송', async () => {
    // dispatcher 1회 틱 실행
    await fetch('http://localhost:3002/tick');
    // 실제 환경에서는 webhook receiver mock 확인
  });

  it('멱등성 — 동일 txHash 재처리 안 함', async () => {
    chain.push({ to: depositAddress, amount: 1_000_000n, txHash: '0xabc' }); // 같은 txHash
    await fetch('http://localhost:3001/tick');
    // payment_events는 1개만 존재해야 함
    const res = await fetch(\`http://localhost:3000/links/\${linkId}/events\`);
    const events = await res.json() as unknown[];
    expect(events).toHaveLength(1);
  });
});`}</pre>

          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? '7-5. 정리' : '7-5. Cleanup'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-6">{`# progress 파일을 done/으로 이동
mkdir -p docs/progress/done
mv docs/progress/link-api.md docs/progress/done/
mv docs/progress/chain-watcher.md docs/progress/done/
mv docs/progress/webhook-dispatcher.md docs/progress/done/

# worktree 제거
git worktree remove .claude/worktrees/link-api
git worktree remove .claude/worktrees/chain-watcher
git worktree remove .claude/worktrees/webhook-dispatcher
git worktree prune`}</pre>
        </section>

        {/* Section: 회고 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '회고' : 'Retrospective'}
          </h2>
          <ol className="space-y-5 text-slate-600 leading-relaxed">
            <li className="flex gap-3">
              <span className="font-black text-emerald-600 text-lg leading-tight">1.</span>
              <div>
                <strong className="text-slate-800">{isKo ? '계약 먼저, 코드 나중.' : 'Contract first, code later.'}</strong>{' '}
                {isKo
                  ? '공유 타입과 DB 스키마를 먼저 고정하지 않으면 병렬 세션의 장점이 충돌 비용으로 상쇄됩니다. Step 1이 가장 중요한 투자입니다.'
                  : 'Without locking shared types and DB schema first, the benefit of parallel sessions is offset by merge conflict costs. Step 1 is the most important investment.'}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-black text-emerald-600 text-lg leading-tight">2.</span>
              <div>
                <strong className="text-slate-800">{isKo ? '훅은 Claude 없이 테스트하라.' : 'Test hooks without Claude.'}</strong>{' '}
                {isKo
                  ? 'Step 2-7의 단독 테스트를 건너뛰면 훅 실패를 세션이 시작된 후 한참 뒤에야 발견합니다. 4개 echo | sh 명령이 5분을 투자해 수 시간의 디버깅을 막아줍니다.'
                  : 'Skipping the standalone tests in Step 2-7 means discovering hook failures long after sessions start. Four echo | sh commands invest 5 minutes to prevent hours of debugging.'}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-black text-emerald-600 text-lg leading-tight">3.</span>
              <div>
                <strong className="text-slate-800">{isKo ? '하네스도 코드다 — 개선하라.' : 'The harness is code — improve it.'}</strong>{' '}
                {isKo
                  ? 'Step 6의 EADDRINUSE는 하네스 버그였습니다. 실패를 기능 코드 문제로만 보지 않고 하네스 관점에서도 진단하는 습관이 생산성을 높입니다.'
                  : "Step 6's EADDRINUSE was a harness bug. The habit of diagnosing failures from the harness perspective — not just feature code — improves productivity."}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-black text-emerald-600 text-lg leading-tight">4.</span>
              <div>
                <strong className="text-slate-800">{isKo ? 'progress 파일은 세션의 장기 기억.' : "Progress files are the session's long-term memory."}</strong>{' '}
                {isKo
                  ? 'compact가 일어나거나 MacBook 뚜껑을 닫아도 progress 파일이 맥락을 보존합니다. "마지막 세션 메모"와 "막힌 점" 두 섹션만 잘 써도 재개 시간이 대폭 줄어듭니다.'
                  : 'Even if compact runs or you close the MacBook lid, progress files preserve context. Just keeping "last session note" and "blocked on" well-written dramatically reduces resume time.'}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-black text-emerald-600 text-lg leading-tight">5.</span>
              <div>
                <strong className="text-slate-800">{isKo ? '2개로 시작하고 3개로 확장하라.' : 'Start with 2, expand to 3.'}</strong>{' '}
                {isKo
                  ? '처음부터 4개 세션을 동시에 여는 것은 하네스 미숙 상태에서 리소스만 낭비합니다. link-api + chain-watcher 2개로 하네스를 검증한 뒤 webhook-dispatcher를 추가하는 단계적 접근이 훨씬 안정적입니다.'
                  : 'Opening 4 sessions at once from the start wastes resources while the harness is unproven. Validating the harness with link-api + chain-watcher first, then adding webhook-dispatcher, is far more stable.'}
              </div>
            </li>
          </ol>
        </section>

        {/* Section: 부록 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '부록' : 'Appendices'}
          </h2>

          {/* A. 최종 파일 목록 */}
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? 'A. 최종 파일 목록' : 'A. Final File Tree'}
          </h3>
          <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto mb-8">{`paylink/
├── .claude/
│   ├── settings.json
│   ├── agents/
│   │   ├── investigator.md
│   │   └── reviewer.md
│   └── hooks/
│       ├── lib/
│       │   └── env.sh
│       ├── session-start.sh
│       ├── notify.sh
│       ├── title-working.sh
│       └── verify-done.sh
├── .env
├── .gitignore
├── .worktreeinclude
├── CLAUDE.md
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── src/
│   ├── shared/
│   │   ├── types.ts
│   │   └── chain.ts
│   ├── db/
│   │   ├── schema.sql
│   │   ├── reset.ts
│   │   └── migrations/
│   │       └── 001_add_last_block_scanned.sql
│   ├── links/
│   │   ├── router.ts
│   │   └── service.ts
│   ├── watcher/
│   │   ├── watcher.ts
│   │   └── run.ts
│   ├── webhooks/
│   │   ├── dispatcher.ts
│   │   └── run.ts
│   └── server.ts
├── test/
│   ├── links.test.ts
│   ├── watcher.test.ts
│   ├── webhooks.test.ts
│   └── e2e.test.ts
└── docs/
    └── progress/
        ├── _template.md
        └── done/
            ├── link-api.md
            ├── chain-watcher.md
            └── webhook-dispatcher.md`}</pre>

          {/* B. 장치별 다시 보기 */}
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? 'B. 장치별 다시 보기' : 'B. Harness Component Reference'}
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '장치' : 'Component'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '파일' : 'File'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '해결하는 문제' : 'Problem Solved'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">Step</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['git worktree', 'CLI', '세션 오염 — A가 B에 영향', '4'],
                  ['session-start.sh', 'SessionStart 훅', '맥락 유실 — 재시작 후 처음부터', '2, 6'],
                  ['notify.sh', 'Notification 훅', '알림 누락 — 입력 대기 모름', '2'],
                  ['title-working.sh', 'UserPromptSubmit 훅', '현재 작업 탭 식별', '2'],
                  ['verify-done.sh', 'Stop 훅', '미검증 커밋 — 타입 오류·테스트 실패', '2'],
                  ['progress 파일', 'docs/progress/*.md', '맥락 이월 + 재개 기준', '3, 5, 6'],
                  ['env.sh', 'lib/env.sh', '자원 충돌 — 동일 PORT/DB', '6'],
                  ['investigator.md', '.claude/agents/', '중복·버그 조사 위임', '5, 6'],
                  ['reviewer.md', '.claude/agents/', '머지 전 품질 검증', '7'],
                ] : [
                  ['git worktree', 'CLI', 'Session contamination — A bleeds into B', '4'],
                  ['session-start.sh', 'SessionStart hook', 'Context loss — start from scratch', '2, 6'],
                  ['notify.sh', 'Notification hook', 'Missed notifications — unaware of wait', '2'],
                  ['title-working.sh', 'UserPromptSubmit hook', 'Identify active session tab', '2'],
                  ['verify-done.sh', 'Stop hook', 'Unverified commits — type errors, test failures', '2'],
                  ['progress files', 'docs/progress/*.md', 'Context carry-over + resume criteria', '3, 5, 6'],
                  ['env.sh', 'lib/env.sh', 'Resource conflict — shared PORT/DB', '6'],
                  ['investigator.md', '.claude/agents/', 'Delegate duplicate/bug investigation', '5, 6'],
                  ['reviewer.md', '.claude/agents/', 'Pre-merge quality verification', '7'],
                ]).map((row, i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-bold text-emerald-700 text-xs">{row[0]}</td>
                    <td className="p-3 font-mono text-xs text-slate-500">{row[1]}</td>
                    <td className="p-3 text-slate-600 text-xs">{row[2]}</td>
                    <td className="p-3 text-slate-500 text-xs">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* C. 트러블슈팅 */}
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? 'C. 맥북 실습 중 자주 막히는 지점' : 'C. Common MacBook Setup Blockers'}
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '증상' : 'Symptom'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '원인' : 'Cause'}</th>
                  <th className="text-left p-3 font-bold text-slate-700 border border-slate-200">{isKo ? '수정' : 'Fix'}</th>
                </tr>
              </thead>
              <tbody>
                {(isKo ? [
                  ['claude: command not found', 'PATH 미반영', '새 터미널 열기 또는 source ~/.zshrc'],
                  ['ERR_PNPM_IGNORED_BUILDS', 'pnpm 11 빌드 차단', 'pnpm approve-builds 실행'],
                  ['better-sqlite3 빌드 실패', 'Xcode CLI 도구 없음', 'xcode-select --install'],
                  ['알림이 안 옴', '시스템 권한 미허용', '시스템 설정 → 알림 → 터미널 허용'],
                  ['hooks 실행 안 됨', 'chmod +x 미실행', 'chmod +x .claude/hooks/*.sh'],
                  ['jq: command not found', 'jq 미설치', 'brew install jq'],
                  ['worktree 생성 실패', '커밋 없는 저장소', 'git commit --allow-empty -m "init"'],
                  ['세션 간 메시지 안 됨', 'Claude Code 버전 낮음', 'claude update 또는 설치 스크립트 재실행'],
                  ['EADDRINUSE', 'Step 6 하네스 미적용', 'env.sh 추가 후 세션 재시작'],
                  ['verify-done.sh exit=1', 'progress 파일 30분 경과', 'docs/progress/*.md 업데이트'],
                ] : [
                  ['claude: command not found', 'PATH not refreshed', 'Open new terminal or source ~/.zshrc'],
                  ['ERR_PNPM_IGNORED_BUILDS', 'pnpm 11 blocks build scripts', 'Run pnpm approve-builds'],
                  ['better-sqlite3 build failure', 'No Xcode CLI tools', 'xcode-select --install'],
                  ['No notifications', 'System permission denied', 'System Settings → Notifications → allow terminal'],
                  ['Hooks not running', 'chmod +x not run', 'chmod +x .claude/hooks/*.sh'],
                  ['jq: command not found', 'jq not installed', 'brew install jq'],
                  ['Worktree creation fails', 'Repository has no commits', 'git commit --allow-empty -m "init"'],
                  ['Cross-session messages fail', 'Claude Code version too old', 'claude update or re-run install script'],
                  ['EADDRINUSE', 'Step 6 harness not applied', 'Add env.sh and restart sessions'],
                  ['verify-done.sh exit=1', 'Progress file >30min old', 'Update docs/progress/*.md'],
                ]).map((row, i) => (
                  <tr key={i} className="border border-slate-200">
                    <td className="p-3 font-mono text-xs text-red-600">{row[0]}</td>
                    <td className="p-3 text-slate-600 text-xs">{row[1]}</td>
                    <td className="p-3 font-mono text-xs text-emerald-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* D. 참고 자료 */}
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {isKo ? 'D. 참고 자료' : 'D. References'}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://docs.anthropic.com/en/docs/claude-code/hooks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Claude Code Hooks {isKo ? '공식 문서' : 'Official Docs'} — Anthropic
              </a>
              <span className="text-slate-500"> — {isKo ? 'SessionStart / Notification / Stop 훅 레퍼런스' : 'SessionStart / Notification / Stop hook reference'}</span>
            </li>
            <li>
              <a href="https://git-scm.com/docs/git-worktree" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                git worktree {isKo ? '공식 문서' : 'Official Docs'}
              </a>
              <span className="text-slate-500"> — {isKo ? '병렬 브랜치 체크아웃 메커니즘' : 'Parallel branch checkout mechanism'}</span>
            </li>
            <li>
              <a href="https://vitest.dev/config/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                Vitest Configuration — include {isKo ? '옵션' : 'option'}
              </a>
              <span className="text-slate-500"> — {isKo ? 'worktree 테스트 격리' : 'worktree test isolation'}</span>
            </li>
            <li>
              <a href="/blog/claude-code-multi-session-harness" className="text-blue-600 hover:underline font-medium">
                {isKo ? '멀티 세션 오케스트레이션 하네스 — 개념편 (이 블로그)' : 'Multi-Session Orchestration Harness — Concepts (this blog)'}
              </a>
              <span className="text-slate-500"> — {isKo ? 'PayLink 실전 예제의 이론적 배경' : 'Theoretical background for the PayLink practical example'}</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
