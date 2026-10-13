'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClaudeCodeMultiSessionHarnessPage() {
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
          <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'Claude Code 실전 가이드' : 'Claude Code Practical Guide'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? '멀티 세션 오케스트레이션 하네스 — Claude Code 실전 튜토리얼'
              : 'Multi-Session Orchestration Harness — Claude Code Practical Tutorial'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'Claude Code를 팀처럼 운영하라. 세션 오염·알림 누락·맥락 유실·미검증 커밋·결과 고립 — 다섯 가지 고통을 git worktree, Notification/Stop 훅, progress 파일, sub-agent 팀으로 영구히 제거한다.'
              : 'Run Claude Code like a team. Session contamination, missed notifications, lost context, unverified commits, isolated results — eliminate these five pains permanently with git worktree, Notification/Stop hooks, progress files, and sub-agent teams.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 10월 12일' : 'October 12, 2026'}</span>
            <span>·</span>
            <span>@하마</span>
            <span>·</span>
            <span>{isKo ? '35분 읽기' : '35 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/harness.jpg" alt="Claude Code Multi-Session Orchestration Harness" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* 한눈에 보기 */}
        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '한눈에 보기' : 'Overview'}</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 pb-3 pr-4">{isKo ? '고통' : 'Pain'}</th>
                  <th className="text-left text-slate-400 pb-3 pr-4">{isKo ? '하네스 솔루션' : 'Harness Solution'}</th>
                  <th className="text-left text-slate-400 pb-3">{isKo ? '파트' : 'Part'}</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {(isKo ? [
                  ['세션 오염 — A 작업이 B 세션에 영향', 'git worktree 격리', '1부'],
                  ['알림 누락 — 입력 대기 중인지 모름', 'Notification 훅 + OS 알림', '2부'],
                  ['맥락 유실 — 세션 재시작 때마다 처음부터', 'progress 파일 + SessionStart 훅', '3부'],
                  ['미검증 커밋 — 타입 오류·테스트 실패 그냥 커밋', 'Stop 훅 검증 게이트', '4부'],
                  ['결과 고립 — 각 세션 결과가 섬처럼 분리', 'sub-agent 팀 + 크로스 세션 메시지', '5부'],
                ] : [
                  ['Session contamination — Task A bleeds into Session B', 'git worktree isolation', 'Part 1'],
                  ['Missed notifications — Don\'t know when Claude is waiting', 'Notification hook + OS alerts', 'Part 2'],
                  ['Lost context — Start from scratch every session restart', 'progress files + SessionStart hook', 'Part 3'],
                  ['Unverified commits — Type errors / test failures committed as-is', 'Stop hook verification gate', 'Part 4'],
                  ['Isolated results — Each session\'s output is an island', 'sub-agent team + cross-session messages', 'Part 5'],
                ]).map(([pain, solution, part], i) => (
                  <tr key={i} className="border-b border-slate-800">
                    <td className="text-red-400 py-3 pr-4 text-xs align-top">{pain}</td>
                    <td className="text-green-400 py-3 pr-4 text-xs align-top">{solution}</td>
                    <td className="text-blue-400 py-3 text-xs align-top font-mono">{part}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 0. 준비 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '0. 준비' : '0. Prerequisites'}
          </h2>
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? '하네스를 구성하기 전에 필요한 것들을 확인한다. Claude Code CLI가 설치되어 있고, 작업 디렉터리가 git 저장소여야 한다.'
                : 'Before setting up the harness, verify what you need. Claude Code CLI must be installed and your working directory must be a git repository.'}
            </p>

            <div className="bg-slate-50 rounded-xl p-5 space-y-3">
              <div className="text-xs font-mono text-slate-500 mb-2">{isKo ? '필수 조건' : 'Requirements'}</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {(isKo ? [
                  'Claude Code CLI (claude --version ≥ 1.x)',
                  'git 저장소 (git init 또는 기존 repo)',
                  'Node.js / Python — 프로젝트에 따라',
                  'macOS: terminal-notifier 또는 osascript (내장)',
                  'Linux: notify-send (libnotify-bin)',
                ] : [
                  'Claude Code CLI (claude --version ≥ 1.x)',
                  'git repository (git init or existing repo)',
                  'Node.js / Python — depending on project',
                  'macOS: terminal-notifier or osascript (built-in)',
                  'Linux: notify-send (libnotify-bin)',
                ]).map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-600">✓</span>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '디렉터리 구조' : 'Directory Structure'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto leading-relaxed">{`my-project/
├── .claude/
│   ├── settings.json          # 프로젝트 훅 등록
│   ├── agents/
│   │   ├── investigator.md    # 서브에이전트 정의
│   │   └── reviewer.md
│   └── scripts/
│       ├── notify.sh          # Notification 훅
│       ├── session-start.sh   # SessionStart 훅
│       ├── verify-done.sh     # Stop 훅 (검증 게이트)
│       └── title-working.sh   # 탭 타이틀 업데이트
├── docs/
│   └── progress/
│       ├── feature-a.md       # 기능별 진행 상태
│       └── feature-b.md
├── CLAUDE.md                  # 프로젝트 지시사항
└── src/`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '일회성 초기화' : 'One-time Setup'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 스크립트 디렉터리 생성
mkdir -p .claude/scripts .claude/agents docs/progress

# 스크립트에 실행 권한 부여
chmod +x .claude/scripts/*.sh`}</pre>
            </div>
          </div>
        </section>

        {/* 1부. 세션 격리 */}
        <section>
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '1부' : 'Part 1'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '세션 격리 — git worktree로 작업 공간을 분리한다' : 'Session Isolation — Separate Workspaces with git worktree'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '문제: 세션 A의 변경이 세션 B에 영향을 준다' : 'Problem: Changes in Session A affect Session B'}
          </p>

          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? '여러 기능을 병렬로 개발할 때 같은 브랜치에서 작업하면 파일 충돌이 생긴다. Claude Code의 `--worktree` 플래그는 git worktree를 자동으로 만들어 각 세션을 완전히 격리된 디렉터리에서 실행한다.'
                : 'When developing multiple features in parallel, working on the same branch causes file conflicts. Claude Code\'s `--worktree` flag automatically creates a git worktree, running each session in a completely isolated directory.'}
            </p>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'worktree 세션 시작' : 'Start a worktree session'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 새 worktree에서 Claude Code 시작
claude --worktree feature-auth

# 내부적으로 수행되는 것:
# 1. .claude/worktrees/feature-auth/ 디렉터리 생성
# 2. git branch worktree-feature-auth 생성
# 3. 해당 브랜치로 체크아웃된 독립 작업 공간 준비`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">.worktreeinclude</div>
              <p className="text-slate-600 text-sm mb-3">
                {isKo
                  ? '.gitignore에 포함된 파일(.env, node_modules 등)은 새 worktree에 자동으로 복사되지 않는다. `.worktreeinclude`로 복사할 파일을 명시한다.'
                  : 'Files in .gitignore (.env, node_modules, etc.) are not automatically copied to the new worktree. Use `.worktreeinclude` to specify files to copy.'}
              </p>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# .worktreeinclude
.env
.env.local
.env.development
secrets/`}</pre>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="text-amber-800 font-bold text-sm mb-2">⚠️ {isKo ? '중요: $CLAUDE_PROJECT_DIR vs cwd' : 'Important: $CLAUDE_PROJECT_DIR vs cwd'}</div>
              <p className="text-amber-700 text-sm leading-relaxed">
                {isKo
                  ? '훅 스크립트에서 `$CLAUDE_PROJECT_DIR`는 항상 원본 프로젝트 루트를 가리킨다. `cwd`(현재 작업 디렉터리)는 worktree 디렉터리다. 스크립트 파일은 `$CLAUDE_PROJECT_DIR`에서 읽고, 실제 작업은 `cwd`에서 수행된다.'
                  : 'In hook scripts, `$CLAUDE_PROJECT_DIR` always points to the original project root. `cwd` (current working directory) is the worktree directory. Read script files from `$CLAUDE_PROJECT_DIR`, perform actual work in `cwd`.'}
              </p>
              <pre className="bg-amber-900 text-amber-100 rounded-lg p-4 text-xs mt-3">{`#!/bin/bash
# 올바른 패턴
SCRIPT_DIR="$CLAUDE_PROJECT_DIR/.claude/scripts"
WORK_DIR="$(pwd)"  # worktree의 실제 경로

# 스크립트는 원본에서, 작업은 worktree에서
source "$SCRIPT_DIR/common.sh"
cd "$WORK_DIR" && npm run typecheck`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'settings.json baseRef 설정' : 'settings.json baseRef config'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// .claude/settings.json
{
  "worktree": {
    "baseRef": "main",        // worktree가 분기하는 기준 브랜치
    "autoCleanup": true,      // 세션 종료 시 병합된 worktree 자동 정리
    "copyFiles": [".env"]     // .worktreeinclude 대신 직접 지정 가능
  }
}`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '서브에이전트에서 worktree 격리' : 'Worktree isolation in sub-agents'}</div>
              <p className="text-slate-600 text-sm mb-3">
                {isKo
                  ? '에이전트 정의 파일의 frontmatter에 `isolation: worktree`를 추가하면 서브에이전트가 자동으로 별도 worktree에서 실행된다.'
                  : 'Add `isolation: worktree` to the agent definition frontmatter so sub-agents automatically run in a separate worktree.'}
              </p>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`---
# .claude/agents/investigator.md
name: investigator
description: 코드베이스 조사 전담 에이전트
isolation: worktree   # 별도 worktree에서 안전하게 실행
tools:
  - Read
  - Grep
  - Glob
---

당신은 코드베이스를 조사하는 에이전트입니다.
파일을 수정하지 말고 조사 결과만 보고합니다.`}</pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-green-800 font-bold text-sm mb-3">{isKo ? 'Worktree가 공유하는 것' : 'What Worktrees Share'}</div>
                <ul className="text-green-700 text-sm space-y-1">
                  {(isKo ? [
                    'git 저장소 오브젝트 (.git/objects)',
                    '.claude/scripts/ 스크립트',
                    '.claude/agents/ 에이전트 정의',
                    'CLAUDE.md 설정',
                  ] : [
                    'git repository objects (.git/objects)',
                    '.claude/scripts/ scripts',
                    '.claude/agents/ agent definitions',
                    'CLAUDE.md settings',
                  ]).map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="text-red-800 font-bold text-sm mb-3">{isKo ? 'Worktree가 격리하는 것' : 'What Worktrees Isolate'}</div>
                <ul className="text-red-700 text-sm space-y-1">
                  {(isKo ? [
                    '작업 디렉터리 파일',
                    '브랜치 (worktree-<name>)',
                    'node_modules (별도 설치 필요)',
                    '빌드 캐시',
                  ] : [
                    'Working directory files',
                    'Branch (worktree-<name>)',
                    'node_modules (needs separate install)',
                    'Build cache',
                  ]).map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'Worktree 정리 및 재개' : 'Worktree Cleanup and Resume'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 완료된 worktree 정리
git worktree remove .claude/worktrees/feature-auth
git branch -d worktree-feature-auth

# 기존 worktree 재개 (컨텍스트 포함)
claude --worktree feature-auth --resume

# 모든 활성 worktree 목록 확인
git worktree list`}</pre>
            </div>
          </div>
        </section>

        {/* 2부. 대기 알림 */}
        <section>
          <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '2부' : 'Part 2'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '대기 알림 — Notification 훅으로 입력 대기를 즉시 안다' : 'Wait Notifications — Know Instantly When Claude Is Waiting'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '문제: 다른 작업 중에 Claude가 입력을 기다리는지 모른다' : 'Problem: Don\'t know when Claude is waiting for input while doing other work'}
          </p>

          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'Notification 훅은 Claude Code가 특정 상태가 될 때 셸 스크립트를 실행한다. `permission_prompt`(권한 승인 필요), `agent_needs_input`(에이전트가 입력 요청), `idle_prompt`(유휴 상태)에 반응해 OS 알림을 보낼 수 있다.'
                : 'The Notification hook runs a shell script when Claude Code enters specific states: `permission_prompt` (needs permission approval), `agent_needs_input` (agent requesting input), `idle_prompt` (idle state). Use these to send OS notifications.'}
            </p>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">.claude/scripts/notify.sh</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`#!/bin/bash
# .claude/scripts/notify.sh
# Claude Code Notification 훅

HOOK_TYPE="$1"          # permission_prompt | agent_needs_input | idle_prompt
SESSION_NAME="$2"       # 세션 이름 (설정된 경우)
MESSAGE="$3"            # 알림 메시지

case "$HOOK_TYPE" in
  permission_prompt)
    TITLE="🔐 권한 승인 필요"
    BODY="\${SESSION_NAME:-Claude}: 권한 승인이 필요합니다"
    ;;
  agent_needs_input)
    TITLE="🤖 에이전트 입력 요청"
    BODY="\${SESSION_NAME:-Claude}: \${MESSAGE:-입력이 필요합니다}"
    ;;
  idle_prompt)
    TITLE="💤 Claude 대기 중"
    BODY="\${SESSION_NAME:-Claude}: 다음 작업을 기다립니다"
    ;;
  *)
    TITLE="💬 Claude Code"
    BODY="\${MESSAGE:-알림}"
    ;;
esac

# macOS 알림
if command -v osascript &> /dev/null; then
  osascript -e "display notification \\"$BODY\\" with title \\"$TITLE\\" sound name \\"Ping\\""
fi

# Linux 알림
if command -v notify-send &> /dev/null; then
  notify-send "$TITLE" "$BODY"
fi

exit 0`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'terminalSequence — OSC 이스케이프로 터미널 탭 제어' : 'terminalSequence — Control terminal tabs with OSC escapes'}</div>
              <p className="text-slate-600 text-sm mb-3">
                {isKo
                  ? '훅 스크립트가 `terminalSequence` JSON 필드를 stdout으로 출력하면 Claude Code가 OSC 이스케이프 시퀀스를 터미널에 직접 전달한다. 탭 타이틀 변경, 벨 알림 등을 터미널에서 직접 트리거할 수 있다.'
                  : 'When hook scripts output `terminalSequence` JSON to stdout, Claude Code passes OSC escape sequences directly to the terminal. You can trigger tab title changes, bell notifications, etc. directly in the terminal.'}
              </p>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`#!/bin/bash
# .claude/scripts/title-working.sh
# 탭 타이틀을 현재 작업으로 업데이트

FEATURE="$1"

# OSC 2: 탭/창 타이틀 설정
# OSC 9: iTerm2 배지 알림
# OSC 777: Gnome Terminal 알림

cat <<EOF
{
  "terminalSequence": "\\033]2;⚙ Claude: \${FEATURE}\\007\\033]9;작업 완료\\007"
}
EOF`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '훅 등록 — settings.json' : 'Hook Registration — settings.json'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// .claude/settings.json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "permission_prompt|agent_needs_input|idle_prompt",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/notify.sh"
          }
        ]
      }
    ],
    "SessionStart": [
      {
        "matcher": "startup|resume",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/session-start.sh"
          }
        ]
      }
    ]
  },
  "sessionName": "main-dev"
}`}</pre>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'Notification 훅 트리거 조건' : 'Notification Hook Trigger Conditions'}</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-slate-500 pb-2 pr-4">matcher</th>
                      <th className="text-left text-slate-500 pb-2 pr-4">{isKo ? '발생 시점' : 'When Triggered'}</th>
                      <th className="text-left text-slate-500 pb-2">{isKo ? '권장 행동' : 'Recommended Action'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(isKo ? [
                      ['permission_prompt', '파일 쓰기, 셸 실행 등 권한 승인 대기', 'OS 알림 + 탭 타이틀 🔐'],
                      ['agent_needs_input', '서브에이전트가 추가 정보 요청', 'OS 알림 + 벨 알림'],
                      ['idle_prompt', '작업 완료 후 다음 지시 대기', '탭 타이틀 ✅'],
                    ] : [
                      ['permission_prompt', 'Waiting for approval: file write, shell exec, etc.', 'OS notification + tab title 🔐'],
                      ['agent_needs_input', 'Sub-agent requesting additional information', 'OS notification + bell'],
                      ['idle_prompt', 'Waiting for next instruction after task completion', 'Tab title ✅'],
                    ]).map(([matcher, when, action], i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2 pr-4 font-mono text-purple-700">{matcher}</td>
                        <td className="py-2 pr-4 text-slate-600">{when}</td>
                        <td className="py-2 text-slate-600">{action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '세션 이름 설정으로 어느 세션인지 즉시 파악' : 'Set session names to instantly identify which session'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// .claude/settings.json — 각 worktree별로 다른 이름
{
  "sessionName": "auth-feature",
  "hooks": { ... }
}

// 개인 설정 (~/.claude/settings.json)
{
  "sessionName": "main"
}`}</pre>
            </div>
          </div>
        </section>

        {/* 3부. 맥락 이월 */}
        <section>
          <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '3부' : 'Part 3'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '맥락 이월 — progress 파일로 세션을 이어 붙인다' : 'Context Continuity — Stitch Sessions Together with Progress Files'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '문제: 세션이 재시작될 때마다 Claude는 처음부터 시작한다' : 'Problem: Every time a session restarts, Claude starts from scratch'}
          </p>

          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'Claude Code는 세션이 만료되거나 compact가 실행되면 이전 맥락을 잃는다. progress 파일에 체크리스트, 결정 사항, 마지막 세션 메모를 기록해두면 SessionStart 훅이 새 세션에 자동으로 주입한다.'
                : 'Claude Code loses previous context when a session expires or compact runs. Record checklists, decisions, and last-session notes in progress files, and the SessionStart hook automatically injects them into new sessions.'}
            </p>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'progress 파일 형식' : 'Progress File Format'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# docs/progress/feature-auth.md

## 목표
사용자 인증 플로우를 JWT 기반으로 전환

## 체크리스트
- [x] AuthService 인터페이스 정의
- [x] JWT 발급 로직 구현
- [ ] 리프레시 토큰 로테이션
- [ ] E2E 테스트 작성

## 결정 사항
- 토큰 만료: 액세스 15분, 리프레시 7일
- 저장소: Redis (인메모리 → 추후 persistent)
- 알고리즘: RS256 (환경 변수로 키 관리)

## 마지막 세션 메모 (2026-10-12)
리프레시 토큰 로테이션 구현 중.
src/auth/refresh.service.ts 파일 작업 중.
rotate() 메서드에서 기존 토큰 무효화 로직 필요.

## 막힌 지점
Redis TTL 설정에서 타입 오류 발생.
ioredis set() 메서드 시그니처 확인 필요.`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">.claude/scripts/session-start.sh</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`#!/bin/bash
# .claude/scripts/session-start.sh
# SessionStart 훅 — 세션 시작 시 맥락 주입

HOOK_TYPE="$1"   # startup | resume | clear | compact | fork
PROJECT="$CLAUDE_PROJECT_DIR"
PROGRESS_DIR="$PROJECT/docs/progress"

# compact/fork 시에만 추가 맥락 주입 (startup은 CLAUDE.md로 충분)
if [[ "$HOOK_TYPE" == "compact" || "$HOOK_TYPE" == "resume" ]]; then

  # 미완료 progress 파일 수집
  ACTIVE_PROGRESS=""
  for f in "$PROGRESS_DIR"/*.md; do
    [ -f "$f" ] || continue
    # 미완료 체크박스가 있는 파일만
    if grep -q "\- \[ \]" "$f" 2>/dev/null; then
      ACTIVE_PROGRESS="$ACTIVE_PROGRESS\n\n### $(basename $f)\n$(cat $f)"
    fi
  done

  if [ -n "$ACTIVE_PROGRESS" ]; then
    # additionalContext로 주입
    cat <<EOF
{
  "additionalContext": "## 진행 중인 작업\n$ACTIVE_PROGRESS",
  "sessionTitle": "재개: $(date '+%Y-%m-%d %H:%M')"
}
EOF
  fi
fi

exit 0`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">CLAUDE.md {isKo ? '— progress 파일 규칙 명시' : '— Specify progress file rules'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# CLAUDE.md

## Progress 파일 규칙

작업을 시작할 때:
1. docs/progress/ 디렉터리에서 관련 파일 찾기
2. 없으면 새로 생성: docs/progress/<feature-name>.md
3. 체크리스트의 완료 항목 업데이트 [x]

세션 종료 전:
1. 마지막 세션 메모 갱신 (날짜 포함)
2. 막힌 지점 기록
3. 다음 단계 명확히 기재

## 중요
- compact 발생 후에도 progress 파일을 먼저 읽을 것
- 결정 사항은 반드시 문서화 (Why를 포함)
- 체크리스트 항목을 임의로 삭제하지 말 것`}</pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="text-blue-800 font-bold text-sm mb-2">💡 {isKo ? 'Compact 전략' : 'Compact Strategy'}</div>
              <p className="text-blue-700 text-sm leading-relaxed">
                {isKo
                  ? '컨텍스트가 가득 찰 때 `/compact`를 사용하면 대화가 요약되고 공간이 확보된다. SessionStart 훅의 `compact` 트리거는 이때 발동한다. compact 직전에 progress 파일을 업데이트해두면 중요한 맥락을 잃지 않는다.'
                  : 'Use `/compact` when context fills up — the conversation is summarized and space is freed. The `compact` trigger in the SessionStart hook fires at this moment. Update progress files just before compacting to avoid losing critical context.'}
              </p>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'SessionStart 훅 트리거 타입' : 'SessionStart Hook Trigger Types'}</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-slate-500 pb-2 pr-4">type</th>
                      <th className="text-left text-slate-500 pb-2 pr-4">{isKo ? '발생 시점' : 'When'}</th>
                      <th className="text-left text-slate-500 pb-2">{isKo ? '권장 행동' : 'Recommended Action'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(isKo ? [
                      ['startup', '완전히 새로운 세션 시작', 'CLAUDE.md로 충분, 별도 주입 불필요'],
                      ['resume', '기존 세션 재개', 'progress 파일 주입'],
                      ['compact', '컨텍스트 압축 후 재시작', 'progress 파일 주입 (가장 중요)'],
                      ['clear', '/clear 명령 후', '진행 중인 작업만 최소 주입'],
                      ['fork', '세션 분기', 'fork 목적에 맞는 맥락만 주입'],
                    ] : [
                      ['startup', 'Brand new session start', 'CLAUDE.md is enough, no injection needed'],
                      ['resume', 'Resuming existing session', 'Inject progress files'],
                      ['compact', 'Restart after context compression', 'Inject progress files (most critical)'],
                      ['clear', 'After /clear command', 'Minimal injection of in-progress work only'],
                      ['fork', 'Session fork', 'Inject only context relevant to fork purpose'],
                    ]).map(([type, when, action], i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2 pr-4 font-mono text-orange-700">{type}</td>
                        <td className="py-2 pr-4 text-slate-600">{when}</td>
                        <td className="py-2 text-slate-600">{action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 4부. 검증 게이트 */}
        <section>
          <div className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '4부' : 'Part 4'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '검증 게이트 — Stop 훅으로 불량 커밋을 막는다' : 'Verification Gate — Block Bad Commits with the Stop Hook'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '문제: 타입 오류나 테스트 실패 상태로 커밋이 올라간다' : 'Problem: Commits land with type errors or failing tests'}
          </p>

          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'Stop 훅은 Claude Code 세션이 종료되기 직전에 실행된다. `exit 2`를 반환하면 Claude가 멈추지 못하고 계속 실행된다. 이를 이용해 타입 체크·테스트·progress 파일 업데이트를 강제할 수 있다.'
                : 'The Stop hook runs right before a Claude Code session ends. Returning `exit 2` prevents Claude from stopping and keeps it running. Use this to enforce type checks, tests, and progress file updates.'}
            </p>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">.claude/scripts/verify-done.sh</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`#!/bin/bash
# .claude/scripts/verify-done.sh
# Stop 훅 — 세션 종료 전 검증 게이트

PROJECT="$CLAUDE_PROJECT_DIR"
COUNTER_FILE="$PROJECT/.claude/.verify-retry-count"

# 재시도 횟수 확인 (무한 루프 방지)
RETRY_COUNT=$(cat "$COUNTER_FILE" 2>/dev/null || echo "0")
MAX_RETRIES=3

if [ "$RETRY_COUNT" -ge "$MAX_RETRIES" ]; then
  echo "⚠️  검증 게이트 최대 재시도 횟수 초과. 강제 종료 허용."
  echo "0" > "$COUNTER_FILE"
  exit 0  # 종료 허용
fi

FAILED=0
MESSAGES=""

# 1. 타입 체크
if [ -f "package.json" ] && grep -q "tsc\|typecheck" package.json; then
  echo "🔍 타입 체크 실행 중..."
  if ! npm run typecheck --silent 2>/dev/null; then
    FAILED=1
    MESSAGES="$MESSAGES\n❌ 타입 오류가 있습니다. 수정 후 종료해주세요."
  fi
fi

# 2. 관련 테스트
if [ -f "package.json" ] && grep -q '"test"' package.json; then
  # 최근 수정된 파일과 관련된 테스트만 실행
  CHANGED_FILES=$(git diff --name-only HEAD 2>/dev/null | head -10)
  if [ -n "$CHANGED_FILES" ]; then
    echo "🧪 관련 테스트 실행 중..."
    if ! npm test --silent -- --passWithNoTests 2>/dev/null; then
      FAILED=1
      MESSAGES="$MESSAGES\n❌ 테스트 실패가 있습니다."
    fi
  fi
fi

# 3. Progress 파일 체크
PROGRESS_DIR="$PROJECT/docs/progress"
if [ -d "$PROGRESS_DIR" ]; then
  UNCHECKED=$(grep -l "\- \[ \]" "$PROGRESS_DIR"/*.md 2>/dev/null)
  if [ -n "$UNCHECKED" ]; then
    # 미완료 항목이 있어도 경고만 (강제 종료는 아님)
    echo "⚠️  미완료 progress 항목이 있습니다: $UNCHECKED"
  fi
fi

if [ "$FAILED" -eq 1 ]; then
  # 재시도 카운터 증가
  echo $((RETRY_COUNT + 1)) > "$COUNTER_FILE"
  echo -e "$MESSAGES"
  echo ""
  echo "🔄 문제를 수정한 후 다시 종료를 시도하세요. (재시도 $((RETRY_COUNT + 1))/$MAX_RETRIES)"
  exit 2  # Claude 종료 차단
else
  echo "✅ 모든 검증 통과"
  echo "0" > "$COUNTER_FILE"
  exit 0  # 종료 허용
fi`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'Stop 훅 등록' : 'Stop Hook Registration'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// .claude/settings.json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/verify-done.sh"
          }
        ]
      }
    ]
  }
}`}</pre>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'Stop 훅 exit 코드 의미' : 'Stop Hook Exit Codes'}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(isKo ? [
                  { code: 'exit 0', color: 'text-green-700', bg: 'bg-green-50', label: '종료 허용', desc: '검증 통과, 세션 정상 종료' },
                  { code: 'exit 2', color: 'text-red-700', bg: 'bg-red-50', label: '종료 차단', desc: 'Claude가 계속 실행되며 문제 수정 요청' },
                  { code: 'exit 1', color: 'text-orange-700', bg: 'bg-orange-50', label: '오류', desc: '훅 자체 오류, 종료는 허용됨' },
                ] : [
                  { code: 'exit 0', color: 'text-green-700', bg: 'bg-green-50', label: 'Allow exit', desc: 'Verification passed, session ends normally' },
                  { code: 'exit 2', color: 'text-red-700', bg: 'bg-red-50', label: 'Block exit', desc: 'Claude keeps running, asks to fix issues' },
                  { code: 'exit 1', color: 'text-orange-700', bg: 'bg-orange-50', label: 'Error', desc: 'Hook itself errored, exit is allowed' },
                ]).map((item, i) => (
                  <div key={i} className={`${item.bg} rounded-lg p-3`}>
                    <div className={`font-mono font-bold text-sm ${item.color} mb-1`}>{item.code}</div>
                    <div className="text-slate-700 font-bold text-xs mb-1">{item.label}</div>
                    <div className="text-slate-600 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '서브에이전트 / 팀메이트 Stop 게이트 요약' : 'Sub-agent / Teammate Stop Gate Summary'}</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-slate-500 pb-2 pr-4">{isKo ? '컨텍스트' : 'Context'}</th>
                      <th className="text-left text-slate-500 pb-2 pr-4">{isKo ? '훅 적용 여부' : 'Hook Applied'}</th>
                      <th className="text-left text-slate-500 pb-2">{isKo ? '참고' : 'Notes'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(isKo ? [
                      ['일반 세션', '✅ 적용', 'Stop 훅 직접 실행'],
                      ['서브에이전트 (isolation: worktree)', '✅ 적용', 'worktree별 settings.json 우선'],
                      ['팀메이트 모드', '✅ 적용', '각 에이전트 세션에 독립 실행'],
                      ['UserPromptSubmit', '⛔ 비적용', 'Stop 아님, 별도 훅 타입'],
                    ] : [
                      ['Normal session', '✅ Applied', 'Stop hook runs directly'],
                      ['Sub-agent (isolation: worktree)', '✅ Applied', 'Per-worktree settings.json takes precedence'],
                      ['Teammate mode', '✅ Applied', 'Runs independently per agent session'],
                      ['UserPromptSubmit', '⛔ N/A', 'Not a Stop hook, separate hook type'],
                    ]).map(([ctx, applied, note], i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="py-2 pr-4 text-slate-700">{ctx}</td>
                        <td className="py-2 pr-4">{applied}</td>
                        <td className="py-2 text-slate-600">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5부. 결과 전달 */}
        <section>
          <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? '5부' : 'Part 5'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '결과 전달 — sub-agent 팀과 크로스 세션 메시지' : 'Result Delivery — Sub-agent Teams and Cross-Session Messages'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '문제: 각 세션의 결과가 섬처럼 고립된다' : 'Problem: Results from each session are isolated like islands'}
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">{isKo ? '5-1. 서브에이전트로 작업 위임' : '5-1. Delegating Work to Sub-agents'}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {isKo
                  ? '조사, 리뷰, 테스트 등 독립적인 작업은 서브에이전트에 위임한다. 에이전트 정의 파일을 `.claude/agents/`에 두면 Agent 툴로 호출할 수 있다.'
                  : 'Delegate independent tasks like research, review, and testing to sub-agents. Place agent definition files in `.claude/agents/` to call them with the Agent tool.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-700 mb-2">.claude/agents/investigator.md</div>
                  <pre className="bg-slate-900 text-green-400 rounded-xl p-4 text-xs overflow-x-auto h-full">{`---
name: investigator
description: 코드베이스 분석 및 조사 전담
isolation: worktree
tools:
  - Read
  - Grep
  - Glob
  - WebSearch
---

당신은 코드베이스 조사 전담 에이전트입니다.

규칙:
- 파일을 절대 수정하지 않습니다
- 발견한 사실을 명확히 정리해 보고합니다
- 불확실한 부분은 명시합니다
- 조사 완료 시 요약 목록을 제공합니다`}</pre>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-700 mb-2">.claude/agents/reviewer.md</div>
                  <pre className="bg-slate-900 text-green-400 rounded-xl p-4 text-xs overflow-x-auto h-full">{`---
name: reviewer
description: 코드 리뷰 및 품질 검증 전담
isolation: worktree
tools:
  - Read
  - Bash
  - Glob
---

당신은 코드 리뷰 전담 에이전트입니다.

검토 항목:
1. 타입 안전성
2. 보안 취약점 (OWASP Top 10)
3. 성능 이슈
4. 테스트 커버리지
5. 코드 중복

심각도를 [CRITICAL/HIGH/MEDIUM/LOW]로 분류합니다.`}</pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">{isKo ? '5-2. 크로스 세션 메시지' : '5-2. Cross-Session Messaging'}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {isKo
                  ? '병렬로 실행 중인 다른 Claude Code 세션에 직접 메시지를 보낼 수 있다. `/list-agents`로 활성 세션을 확인하고, `@세션명`으로 메시지를 전송한다.'
                  : 'You can send messages directly to other Claude Code sessions running in parallel. Use `/list-agents` to see active sessions, and `@session-name` to send messages.'}
              </p>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 활성 세션 목록 확인
/list-agents
# 출력 예시:
# main (active) — 메인 개발 세션
# auth-feature (active) — 인증 기능 개발 중
# reviewer (idle) — 코드 리뷰 대기 중

# 특정 세션에 메시지 전송
@auth-feature PR 준비됐어? 리뷰 요청 넣을게

# 여러 세션에 브로드캐스트
@all 배포 완료. 각자 테스트 결과 공유해줘`}</pre>

              <div className="mt-4">
                <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '크로스 세션 수신 정책 설정' : 'Cross-Session Inbound Policy'}</div>
                <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// .claude/settings.json
{
  "crossSessionInbound": "accept",  // accept | hold | refuse
  // accept: 즉시 수신하여 처리
  // hold: 현재 작업 완료 후 처리
  // refuse: 수신 거부
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">{isKo ? '5-3. Agent Teams (실험적)' : '5-3. Agent Teams (Experimental)'}</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                <div className="text-amber-800 font-bold text-sm mb-1">⚗️ {isKo ? '실험적 기능' : 'Experimental Feature'}</div>
                <p className="text-amber-700 text-xs">
                  {isKo
                    ? 'Agent Teams는 실험적 기능이다. `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 환경 변수로 활성화한다. API가 변경될 수 있다.'
                    : 'Agent Teams is experimental. Enable with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. The API may change.'}
                </p>
              </div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 환경 변수로 활성화
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1

# settings.json에서 팀 모드 설정
// .claude/settings.json
{
  "agentTeams": {
    "teammateMode": "auto",    // auto | manual
    "teammates": [
      "investigator",
      "reviewer"
    ]
  },
  "hooks": {
    "TeammateIdle": [
      {
        "hooks": [{
          "type": "command",
          "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/notify.sh teammate_idle"
        }]
      }
    ],
    "TaskCompleted": [
      {
        "hooks": [{
          "type": "command",
          "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/notify.sh task_completed"
        }]
      }
    ]
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* 6. 통합운영 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '6. 통합 운영 — 하루 시나리오' : '6. Integrated Operations — A Day Scenario'}
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm font-bold text-slate-700 mb-4">{isKo ? '하루 워크플로우' : 'Daily Workflow'}</div>
              <div className="space-y-3">
                {(isKo ? [
                  { time: '09:00', action: '메인 세션 시작', detail: 'claude 시작 → SessionStart 훅이 미완료 progress 파일 자동 주입' },
                  { time: '09:05', action: 'auth 기능 worktree 분기', detail: 'claude --worktree auth-feature → 격리된 브랜치에서 독립 개발' },
                  { time: '10:30', action: '권한 요청 알림 수신', detail: 'Notification 훅 → OS 알림 → 즉시 승인 처리' },
                  { time: '11:00', action: '조사 에이전트 호출', detail: 'Agent 툴 → investigator가 worktree에서 안전하게 코드 분석' },
                  { time: '14:00', action: '컨텍스트 압축', detail: '/compact → SessionStart compact 훅 → progress 파일 재주입 → 맥락 유지' },
                  { time: '16:00', action: '리뷰 에이전트로 품질 검증', detail: 'reviewer가 변경 사항 전체 검토 → CRITICAL 이슈 없음 확인' },
                  { time: '17:00', action: '세션 종료 시도', detail: 'Stop 훅 → 타입체크 실패 → exit 2 → 자동 수정 요청 → 재검증 통과' },
                  { time: '17:15', action: '메인 세션에 완료 보고', detail: '@main auth-feature 완료 → 메인 세션에서 머지 결정' },
                ] : [
                  { time: '09:00', action: 'Start main session', detail: 'claude starts → SessionStart hook auto-injects incomplete progress files' },
                  { time: '09:05', action: 'Fork auth feature worktree', detail: 'claude --worktree auth-feature → independent dev on isolated branch' },
                  { time: '10:30', action: 'Receive permission notification', detail: 'Notification hook → OS alert → immediate approval' },
                  { time: '11:00', action: 'Call investigator agent', detail: 'Agent tool → investigator safely analyzes code in worktree' },
                  { time: '14:00', action: 'Compress context', detail: '/compact → SessionStart compact hook → re-inject progress files → context preserved' },
                  { time: '16:00', action: 'Reviewer agent validates quality', detail: 'reviewer checks all changes → confirms no CRITICAL issues' },
                  { time: '17:00', action: 'Attempt session end', detail: 'Stop hook → typecheck fails → exit 2 → auto-fix request → re-verify passes' },
                  { time: '17:15', action: 'Report completion to main session', detail: '@main auth-feature done → main session decides on merge' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="font-mono text-xs text-blue-600 w-12 shrink-0 mt-0.5">{item.time}</span>
                    <div>
                      <span className="font-bold text-sm text-slate-800">{item.action}</span>
                      <span className="text-slate-500 text-sm"> — {item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '최종 settings.json (프로젝트)' : 'Final settings.json (Project)'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// .claude/settings.json
{
  "sessionName": "main",
  "crossSessionInbound": "hold",
  "worktree": {
    "baseRef": "main",
    "autoCleanup": true
  },
  "hooks": {
    "SessionStart": [
      {
        "matcher": "resume|compact",
        "hooks": [{
          "type": "command",
          "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/session-start.sh"
        }]
      }
    ],
    "Notification": [
      {
        "matcher": "permission_prompt|agent_needs_input|idle_prompt",
        "hooks": [{
          "type": "command",
          "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/notify.sh"
        }]
      }
    ],
    "Stop": [
      {
        "hooks": [{
          "type": "command",
          "command": "$CLAUDE_PROJECT_DIR/.claude/scripts/verify-done.sh"
        }]
      }
    ]
  }
}`}</pre>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '개인 전역 설정 (~/.claude/settings.json)' : 'Personal global settings (~/.claude/settings.json)'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// ~/.claude/settings.json — 모든 프로젝트에 공통 적용
{
  "sessionName": "personal",
  "crossSessionInbound": "accept",
  "hooks": {
    "Notification": [
      {
        "matcher": "permission_prompt",
        "hooks": [{
          "type": "command",
          "command": "osascript -e 'display notification \"Claude needs approval\" with title \"Claude Code\" sound name \"Ping\"'"
        }]
      }
    ]
  }
}`}</pre>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-sm font-bold text-slate-700 mb-4">{isKo ? '도입 순서 — 한 번에 다 하지 말고 단계적으로' : 'Adoption Order — Don\'t do it all at once, go step by step'}</div>
              <div className="space-y-3">
                {(isKo ? [
                  { step: '1단계', name: 'progress 파일', desc: '가장 효과 빠름. 세션 재시작 후 맥락 손실 즉시 해결' },
                  { step: '2단계', name: 'Notification 훅', desc: 'OS 알림으로 대기 누락 제거. 설정 5분' },
                  { step: '3단계', name: 'git worktree', desc: '병렬 작업 시작할 때 도입. 세션 오염 완전 차단' },
                  { step: '4단계', name: 'Stop 훅 게이트', desc: '품질이 중요할 때. 타입체크·테스트 강제화' },
                  { step: '5단계', name: 'sub-agent 팀', desc: '워크플로우가 익숙해진 후. 조사·리뷰 자동화' },
                ] : [
                  { step: 'Step 1', name: 'Progress files', desc: 'Fastest impact. Immediately fixes context loss on session restart' },
                  { step: 'Step 2', name: 'Notification hook', desc: 'OS alerts eliminate missed waits. 5-minute setup' },
                  { step: 'Step 3', name: 'git worktree', desc: 'Introduce when starting parallel work. Completely blocks session contamination' },
                  { step: 'Step 4', name: 'Stop hook gate', desc: 'When quality matters. Enforces type checks and tests' },
                  { step: 'Step 5', name: 'Sub-agent teams', desc: 'After workflow is comfortable. Automates research and review' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-xs font-mono text-slate-500 w-14 shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <span className="font-bold text-sm text-slate-800">{item.name}</span>
                      <span className="text-slate-500 text-sm"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. 문제 해결 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 문제 해결' : '7. Troubleshooting'}
          </h2>

          <div className="space-y-4">
            {(isKo ? [
              {
                symptom: 'Stop 훅이 무한 루프에 빠진다',
                cause: 'verify-done.sh가 항상 exit 2를 반환하거나 카운터 파일이 리셋되지 않음',
                fix: '.claude/.verify-retry-count 파일을 수동으로 삭제하거나 0으로 리셋. MAX_RETRIES 값 확인',
              },
              {
                symptom: 'Notification 훅이 실행되지 않는다',
                cause: '스크립트에 실행 권한 없거나 경로가 잘못됨',
                fix: 'chmod +x .claude/scripts/notify.sh 실행. settings.json에서 $CLAUDE_PROJECT_DIR 경로 확인',
              },
              {
                symptom: 'worktree에서 .env 파일이 없다',
                cause: '.worktreeinclude에 명시되지 않았거나 파일이 .gitignore에 포함됨',
                fix: '.worktreeinclude에 .env 추가. 또는 settings.json의 worktree.copyFiles 배열에 추가',
              },
              {
                symptom: 'SessionStart 훅이 compact 시 실행되지 않는다',
                cause: 'matcher가 "compact"를 포함하지 않거나 훅 스크립트 오류',
                fix: 'settings.json matcher: "resume|compact" 확인. 스크립트를 직접 실행해 오류 확인',
              },
              {
                symptom: '크로스 세션 메시지가 수신되지 않는다',
                cause: 'crossSessionInbound가 "refuse"로 설정되었거나 세션 이름이 다름',
                fix: 'settings.json에서 crossSessionInbound: "accept" 또는 "hold"로 변경. /list-agents로 정확한 세션 이름 확인',
              },
              {
                symptom: '$CLAUDE_PROJECT_DIR가 비어있다',
                cause: '훅이 worktree 외부에서 실행되거나 환경 변수가 주입되지 않음',
                fix: '훅 스크립트 첫 줄에 echo "$CLAUDE_PROJECT_DIR" > /tmp/debug.log 추가해 실제 값 확인',
              },
              {
                symptom: 'agent teams 기능이 동작하지 않는다',
                cause: '실험적 기능 환경 변수가 설정되지 않음',
                fix: 'export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 설정. ~/.zshrc나 ~/.bashrc에 추가해 영구 적용',
              },
            ] : [
              {
                symptom: 'Stop hook is stuck in infinite loop',
                cause: 'verify-done.sh always returns exit 2, or counter file is not resetting',
                fix: 'Manually delete or reset .claude/.verify-retry-count to 0. Verify MAX_RETRIES value',
              },
              {
                symptom: 'Notification hook is not firing',
                cause: 'Script lacks execute permission or path is wrong',
                fix: 'Run chmod +x .claude/scripts/notify.sh. Verify $CLAUDE_PROJECT_DIR path in settings.json',
              },
              {
                symptom: '.env file is missing in worktree',
                cause: 'Not listed in .worktreeinclude or file is in .gitignore',
                fix: 'Add .env to .worktreeinclude. Or add to worktree.copyFiles array in settings.json',
              },
              {
                symptom: 'SessionStart hook not firing on compact',
                cause: 'matcher does not include "compact" or hook script has errors',
                fix: 'Verify settings.json matcher: "resume|compact". Run script directly to check errors',
              },
              {
                symptom: 'Cross-session messages not received',
                cause: 'crossSessionInbound set to "refuse" or session name differs',
                fix: 'Change crossSessionInbound to "accept" or "hold". Use /list-agents to confirm exact session name',
              },
              {
                symptom: '$CLAUDE_PROJECT_DIR is empty',
                cause: 'Hook running outside worktree or env var not injected',
                fix: 'Add echo "$CLAUDE_PROJECT_DIR" > /tmp/debug.log at first line of hook script to inspect actual value',
              },
              {
                symptom: 'Agent teams feature not working',
                cause: 'Experimental feature env var not set',
                fix: 'Set export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1. Add to ~/.zshrc or ~/.bashrc for persistence',
              },
            ]).map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-red-50 px-5 py-3">
                  <span className="text-red-700 font-bold text-sm">🔴 {item.symptom}</span>
                </div>
                <div className="px-5 py-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-slate-500 font-bold mb-1">{isKo ? '원인' : 'Cause'}</div>
                    <div className="text-sm text-slate-700">{item.cause}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold mb-1">{isKo ? '해결' : 'Fix'}</div>
                    <div className="text-sm text-slate-700">{item.fix}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 참고 자료 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 참고 자료' : '8. References'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Claude Code Hooks 공식 문서', url: 'https://docs.anthropic.com/ko/docs/claude-code/hooks', desc: isKo ? 'SessionStart, Notification, Stop, UserPromptSubmit 훅 완전 가이드' : 'Complete guide to SessionStart, Notification, Stop, UserPromptSubmit hooks' },
              { label: 'Claude Code Sub-agents', url: 'https://docs.anthropic.com/ko/docs/claude-code/sub-agents', desc: isKo ? '에이전트 정의 파일 형식, isolation 옵션, 툴 제한' : 'Agent definition file format, isolation options, tool restrictions' },
              { label: 'Claude Code Settings Reference', url: 'https://docs.anthropic.com/ko/docs/claude-code/settings', desc: isKo ? 'settings.json 전체 옵션 레퍼런스' : 'Complete settings.json options reference' },
              { label: 'git worktree 공식 문서', url: 'https://git-scm.com/docs/git-worktree', desc: isKo ? 'git worktree add, list, remove 커맨드 레퍼런스' : 'git worktree add, list, remove command reference' },
            ].map((ref, i) => (
              <a
                key={i}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="font-bold text-sm text-slate-800 mb-1">{ref.label}</div>
                <div className="text-xs text-slate-500">{ref.desc}</div>
                <div className="text-xs text-blue-500 mt-2 font-mono truncate">{ref.url}</div>
              </a>
            ))}
          </div>
        </section>

        {/* 마무리 */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-2xl p-8">
          <h3 className="text-xl font-black text-slate-900 mb-4">
            {isKo ? '하네스는 Claude Code를 팀으로 만든다' : 'The Harness Turns Claude Code Into a Team'}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            {isKo
              ? '다섯 가지 훅과 구조물이 각각의 고통을 제거한다. worktree가 세션을 격리하고, Notification이 대기를 알리고, progress 파일이 맥락을 이월하고, Stop 게이트가 품질을 보장하고, sub-agent 팀이 결과를 통합한다.'
              : 'Five hooks and structures each eliminate a specific pain. Worktree isolates sessions, Notification alerts on waits, progress files carry context forward, the Stop gate ensures quality, and sub-agent teams integrate results.'}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {isKo
              ? '한 번에 모두 도입할 필요는 없다. progress 파일 하나만으로도 내일의 당신이 오늘의 당신과 동기화된다. 거기서 시작하라.'
              : 'You don\'t need to adopt everything at once. Even just a single progress file synchronizes tomorrow\'s you with today\'s you. Start there.'}
          </p>
        </div>

      </div>
    </div>
  );
}
