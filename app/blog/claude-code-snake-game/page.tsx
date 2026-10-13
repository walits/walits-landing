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
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ko' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}>KO</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
            </div>
          </div>
          <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'Claude Code 실전 예제' : 'Claude Code Practical Example'}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            {isKo
              ? '지렁이 게임으로 배우는 Claude Code 하네스 — 실전 예제'
              : 'Learn the Claude Code Harness by Building Snake — A Practical Example'}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            {isKo
              ? 'worktree 격리, progress 파일, investigator/reviewer 에이전트, Stop 게이트 — 지렁이 게임을 만들면서 하네스의 다섯 파트가 실제로 어떻게 동작하는지 보여준다. 완성 게임 코드 포함.'
              : 'worktree isolation, progress files, investigator/reviewer agents, Stop gate — watch all five harness parts work in action as we build a snake game. Includes complete game code.'}
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
            <span>{isKo ? '2026년 10월 13일' : 'October 13, 2026'}</span>
            <span>·</span>
            <span>@하마</span>
            <span>·</span>
            <span>{isKo ? '30분 읽기' : '30 min read'}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src="/blog/aigame.jpg" alt="Claude Code Snake Game Harness Example" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* 들어가며 */}
        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '이 글의 목표' : 'Goal of this post'}</div>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {isKo
              ? '이전 글 "멀티 세션 오케스트레이션 하네스"는 도구를 설명했다. 이 글은 그 도구를 실제로 쓰는 장면을 보여준다. 지렁이 게임(먹이를 먹으면 길어지는 클래식 게임)을 처음부터 만들면서, 하네스의 각 파트가 언제 왜 필요한지 체험한다.'
              : 'The previous post "Multi-Session Orchestration Harness" explained the tools. This post shows those tools being used in action. By building a snake game (the classic "eat food and grow" game) from scratch, we experience when and why each part of the harness is needed.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="text-green-400 font-bold mb-2">{isKo ? '만들 것' : 'What we build'}</div>
              <ul className="text-slate-400 space-y-1">
                <li>• {isKo ? 'HTML5 Canvas 지렁이 게임' : 'HTML5 Canvas snake game'}</li>
                <li>• {isKo ? '방향키 / WASD 조작' : 'Arrow key / WASD controls'}</li>
                <li>• {isKo ? '점수 · 레벨 · 최고기록' : 'Score · level · high score'}</li>
                <li>• {isKo ? '벽 · 자기 몸 충돌 감지' : 'Wall and self-collision detection'}</li>
              </ul>
            </div>
            <div>
              <div className="text-blue-400 font-bold mb-2">{isKo ? '사용할 하네스 파트' : 'Harness parts used'}</div>
              <ul className="text-slate-400 space-y-1">
                <li>• {isKo ? 'worktree — 엔진 / UI 병렬 개발' : 'worktree — parallel engine / UI dev'}</li>
                <li>• {isKo ? 'progress 파일 — 세션 간 맥락 이월' : 'progress files — context across sessions'}</li>
                <li>• {isKo ? 'investigator — 버그 원인 조사' : 'investigator — bug root cause analysis'}</li>
                <li>• {isKo ? 'reviewer — 코드 품질 검증' : 'reviewer — code quality check'}</li>
                <li>• {isKo ? 'Stop 게이트 — 타입 오류 차단' : 'Stop gate — block type errors'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 프로젝트 셋업 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '1. 프로젝트 셋업' : '1. Project Setup'}
          </h2>
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'Next.js 프로젝트에 하네스를 붙이는 것으로 시작한다. 지렁이 게임은 `/app/snake/page.tsx`에 구현한다.'
                : 'We start by attaching the harness to a Next.js project. The snake game will be implemented in `/app/snake/page.tsx`.'}
            </p>
            <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 프로젝트 초기화
npx create-next-app@latest snake-game --typescript --tailwind --app
cd snake-game

# 하네스 디렉터리 구조 생성
mkdir -p .claude/scripts .claude/agents docs/progress
chmod +x .claude/scripts/*.sh 2>/dev/null || true`}</pre>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '첫 번째로 할 일: progress 파일 작성' : 'First thing: write the progress file'}</div>
              <p className="text-slate-600 text-sm mb-3">
                {isKo
                  ? '코드 한 줄 쓰기 전에 progress 파일을 만든다. 세션이 끊겨도 "어디까지 했는지"를 Claude가 알 수 있다.'
                  : 'Before writing a single line of code, create the progress file. Even if the session breaks, Claude will know "where we left off."'}
              </p>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# docs/progress/snake-game.md

## 목표
Next.js + TypeScript + HTML5 Canvas로 지렁이 게임 구현

## 체크리스트
- [ ] 게임 엔진 (캔버스, 지렁이 이동, 충돌)
  - [ ] Snake 클래스 (머리, 몸통, 이동 방향)
  - [ ] 먹이 생성 로직
  - [ ] 충돌 감지 (벽, 자기 몸)
  - [ ] 게임 루프 (requestAnimationFrame)
- [ ] UI/UX
  - [ ] 점수판 (현재 점수 / 최고기록)
  - [ ] 레벨 시스템 (점수에 따라 속도 증가)
  - [ ] 게임 오버 화면
  - [ ] 시작 화면 / 재시작

## 기술 결정
- 렌더링: HTML5 Canvas (DOM 조작보다 성능 우수)
- 상태: useRef로 게임 루프 관리 (useState는 리렌더 비용)
- 그리드: 20×20 셀, 각 셀 25px

## 마지막 세션 메모
아직 시작 전. 1번 worktree에서 게임 엔진부터 구현 예정.`}</pre>
            </div>
          </div>
        </section>

        {/* worktree 1: 게임 엔진 */}
        <section>
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'worktree 1' : 'worktree 1'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '2. 게임 엔진 개발' : '2. Game Engine Development'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '격리된 worktree에서 핵심 게임 로직만 집중 개발' : 'Develop core game logic in isolation, with full focus'}
          </p>

          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="text-amber-800 font-bold text-sm mb-2">
                {isKo ? '왜 worktree인가?' : 'Why worktree?'}
              </div>
              <p className="text-amber-700 text-sm">
                {isKo
                  ? '게임 엔진과 UI를 같은 브랜치에서 동시에 건드리면 충돌이 생긴다. engine worktree에서 게임 로직을, ui worktree에서 화면을 독립적으로 개발하고 나중에 머지한다.'
                  : 'Touching game engine and UI in the same branch simultaneously causes conflicts. Develop game logic in the engine worktree and UI in the ui worktree independently, then merge later.'}
              </p>
            </div>

            <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 게임 엔진 worktree 시작
claude --worktree snake-engine

# Claude에게 첫 프롬프트:
# "docs/progress/snake-game.md를 읽고,
#  app/snake/ 디렉터리에 게임 엔진을 구현해줘.
#  Snake 클래스, 게임 루프, 충돌 감지부터 시작."
`}</pre>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">app/snake/engine.ts</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// app/snake/engine.ts
export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
export type Point = { x: number; y: number };

export const GRID_SIZE = 20;   // 20×20 격자
export const CELL_SIZE = 25;   // 각 셀 25px
export const CANVAS_SIZE = GRID_SIZE * CELL_SIZE; // 500px

export class SnakeEngine {
  snake: Point[];
  food: Point;
  direction: Direction;
  nextDirection: Direction;
  score: number;
  level: number;
  isGameOver: boolean;

  constructor() {
    // 초기 상태: 화면 중앙에 길이 3 지렁이
    this.snake = [
      { x: 10, y: 10 },
      { x: 9,  y: 10 },
      { x: 8,  y: 10 },
    ];
    this.food = this.spawnFood();
    this.direction = 'RIGHT';
    this.nextDirection = 'RIGHT';
    this.score = 0;
    this.level = 1;
    this.isGameOver = false;
  }

  // 먹이 위치 생성 (지렁이 몸통과 겹치지 않게)
  spawnFood(): Point {
    let food: Point;
    do {
      food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (this.snake?.some(s => s.x === food.x && s.y === food.y));
    return food;
  }

  // 방향 전환 (180도 반전 불가)
  setDirection(dir: Direction): void {
    const opposites: Record<Direction, Direction> = {
      UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT',
    };
    if (dir !== opposites[this.direction]) {
      this.nextDirection = dir;
    }
  }

  // 한 프레임 전진
  tick(): void {
    if (this.isGameOver) return;

    this.direction = this.nextDirection;
    const head = this.snake[0];

    const delta: Record<Direction, Point> = {
      UP:    { x: 0,  y: -1 },
      DOWN:  { x: 0,  y:  1 },
      LEFT:  { x: -1, y:  0 },
      RIGHT: { x: 1,  y:  0 },
    };

    const newHead: Point = {
      x: head.x + delta[this.direction].x,
      y: head.y + delta[this.direction].y,
    };

    // 벽 충돌
    if (
      newHead.x < 0 || newHead.x >= GRID_SIZE ||
      newHead.y < 0 || newHead.y >= GRID_SIZE
    ) {
      this.isGameOver = true;
      return;
    }

    // 자기 몸 충돌
    if (this.snake.some(s => s.x === newHead.x && s.y === newHead.y)) {
      this.isGameOver = true;
      return;
    }

    this.snake.unshift(newHead);

    // 먹이 획득
    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score += 10 * this.level;
      this.level = Math.floor(this.score / 100) + 1;
      this.food = this.spawnFood();
    } else {
      this.snake.pop(); // 꼬리 제거 (먹이 못 먹으면)
    }
  }

  // 게임 속도 (레벨에 따라 ms)
  get intervalMs(): number {
    return Math.max(80, 200 - (this.level - 1) * 15);
  }
}
`}</pre>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="text-green-800 font-bold text-sm mb-2">
                {isKo ? 'progress 파일 업데이트 (세션 중간)' : 'Progress file update (mid-session)'}
              </div>
              <p className="text-green-700 text-sm">
                {isKo
                  ? '엔진 구현이 끝나면 Claude에게 progress 파일을 업데이트하도록 지시한다. 세션이 compact되거나 재시작돼도 다음 Claude가 "엔진은 완성, UI 차례"임을 안다.'
                  : 'After the engine is done, instruct Claude to update the progress file. Even if the session compacts or restarts, the next Claude knows "engine is done, UI is next."'}
              </p>
              <pre className="bg-green-900 text-green-100 rounded-lg p-3 text-xs mt-2">{`## 체크리스트 (업데이트됨)
- [x] 게임 엔진 (app/snake/engine.ts)
  - [x] Snake 클래스 — 이동, 방향, 점수, 레벨
  - [x] 먹이 생성 (몸통 겹침 방지)
  - [x] 충돌 감지 (벽, 자기 몸)
  - [x] 게임 루프 intervalMs
- [ ] UI/UX — ui worktree에서 진행 예정`}</pre>
            </div>
          </div>
        </section>

        {/* worktree 2: UI */}
        <section>
          <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'worktree 2' : 'worktree 2'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '3. UI/UX 개발 (엔진과 병렬)' : '3. UI/UX Development (Parallel with Engine)'}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {isKo ? '엔진 세션이 실행되는 동안 별도 worktree에서 UI 작업' : 'Work on UI in a separate worktree while the engine session runs'}
          </p>

          <div className="space-y-6">
            <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 새 터미널 탭에서 UI worktree 시작
claude --worktree snake-ui

# Claude에게:
# "docs/progress/snake-game.md 읽고,
#  engine.ts의 SnakeEngine을 import해서
#  app/snake/page.tsx에 게임 화면을 만들어줘.
#  Canvas 렌더링, 키보드 입력, 점수판 포함."
`}</pre>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">app/snake/page.tsx — {isKo ? '완성 게임 코드' : 'Complete game code'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import {
  SnakeEngine,
  Direction,
  CELL_SIZE,
  CANVAS_SIZE,
  GRID_SIZE,
} from './engine';

type GameState = 'idle' | 'playing' | 'over';

export default function SnakePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<SnakeEngine | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return parseInt(localStorage.getItem('snake-high') ?? '0', 10);
  });

  // 캔버스 렌더링
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 배경
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // 격자선 (선택)
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, CANVAS_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(CANVAS_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // 먹이
    const { x: fx, y: fy } = engine.food;
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(
      fx * CELL_SIZE + CELL_SIZE / 2,
      fy * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // 지렁이
    engine.snake.forEach((seg, idx) => {
      const isHead = idx === 0;
      ctx.fillStyle = isHead ? '#4ade80' : '#22c55e';
      const pad = isHead ? 1 : 2;
      ctx.beginPath();
      ctx.roundRect(
        seg.x * CELL_SIZE + pad,
        seg.y * CELL_SIZE + pad,
        CELL_SIZE - pad * 2,
        CELL_SIZE - pad * 2,
        isHead ? 4 : 3
      );
      ctx.fill();
    });
  }, []);

  // 게임 루프 시작
  const startLoop = useCallback((engine: SnakeEngine) => {
    if (timerRef.current) clearInterval(timerRef.current);

    const loop = () => {
      engine.tick();
      draw();
      setScore(engine.score);
      setLevel(engine.level);

      if (engine.isGameOver) {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState('over');
        setHighScore(prev => {
          const next = Math.max(prev, engine.score);
          localStorage.setItem('snake-high', String(next));
          return next;
        });
        return;
      }

      // 레벨 변화 시 속도 갱신
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(loop, engine.intervalMs);
      }
    };

    timerRef.current = setInterval(loop, engine.intervalMs);
  }, [draw]);

  const startGame = useCallback(() => {
    engineRef.current = new SnakeEngine();
    setScore(0);
    setLevel(1);
    setGameState('playing');
    draw();
    startLoop(engineRef.current);
  }, [draw, startLoop]);

  // 키보드 입력
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const engine = engineRef.current;
      if (!engine) return;

      const map: Record<string, Direction> = {
        ArrowUp:    'UP',   w: 'UP',    W: 'UP',
        ArrowDown:  'DOWN', s: 'DOWN',  S: 'DOWN',
        ArrowLeft:  'LEFT', a: 'LEFT',  A: 'LEFT',
        ArrowRight: 'RIGHT',d: 'RIGHT', D: 'RIGHT',
      };

      const dir = map[e.key];
      if (dir) {
        e.preventDefault();
        engine.setDirection(dir);
      }

      if (e.key === ' ') {
        e.preventDefault();
        if (gameState === 'idle' || gameState === 'over') startGame();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameState, startGame]);

  // 정리
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-black text-white mb-2">🐍 Snake</h1>
      <p className="text-slate-400 text-sm mb-6">
        {isKo()} {/* language toggle placeholder - see below */}
        WASD / Arrow Keys · Space to Start
      </p>

      {/* 점수판 */}
      <div className="flex gap-8 mb-4">
        {[
          { label: 'SCORE', value: score },
          { label: 'LEVEL', value: level },
          { label: 'BEST',  value: highScore },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="text-slate-500 text-xs font-mono">{label}</div>
            <div className="text-white text-2xl font-black">{value}</div>
          </div>
        ))}
      </div>

      {/* 캔버스 */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="rounded-xl border border-slate-800 block"
        />

        {/* 오버레이 */}
        {gameState !== 'playing' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 rounded-xl">
            {gameState === 'over' && (
              <>
                <div className="text-red-400 text-2xl font-black mb-2">GAME OVER</div>
                <div className="text-slate-300 text-sm mb-6">Score: {score}</div>
              </>
            )}
            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-400 text-white font-black px-8 py-3 rounded-xl text-lg transition-colors"
            >
              {gameState === 'over' ? '↩ Restart' : '▶ Start'}
            </button>
            <p className="text-slate-500 text-xs mt-3">or press Space</p>
          </div>
        )}
      </div>

      {/* 모바일 방향키 */}
      <div className="mt-6 grid grid-cols-3 gap-2 md:hidden">
        {[
          { label: '↑', dir: 'UP' as Direction,    col: 'col-start-2' },
          { label: '←', dir: 'LEFT' as Direction,  col: 'col-start-1' },
          { label: '↓', dir: 'DOWN' as Direction,  col: 'col-start-2' },
          { label: '→', dir: 'RIGHT' as Direction, col: 'col-start-3 row-start-2' },
        ].map(({ label, dir, col }) => (
          <button
            key={dir}
            className={\`\${col} bg-slate-800 text-white w-12 h-12 rounded-lg text-lg font-bold active:bg-slate-600\`}
            onTouchStart={e => { e.preventDefault(); engineRef.current?.setDirection(dir); }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}`}</pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="text-blue-800 font-bold text-sm mb-2">
                💡 {isKo ? 'Notification 훅이 발동되는 순간' : 'When the Notification hook fires'}
              </div>
              <p className="text-blue-700 text-sm leading-relaxed">
                {isKo
                  ? 'UI 구현 중 Claude가 "모바일 터치 이벤트에서 preventDefault를 써도 될까요?" 같은 권한 확인을 요청할 때 Notification 훅이 울린다. 다른 탭에서 엔진 코드를 보고 있어도 즉시 알 수 있다.'
                  : 'While implementing UI, when Claude asks "Should I use preventDefault for mobile touch events?", the Notification hook fires. Even if you\'re reviewing engine code in another tab, you\'ll know immediately.'}
              </p>
            </div>
          </div>
        </section>

        {/* investigator 에이전트 */}
        <section>
          <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'investigator 에이전트' : 'Investigator Agent'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '4. 버그 발견 — investigator에게 원인 조사를 맡긴다' : '4. Bug Found — Delegate Root Cause Analysis to the Investigator'}
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="text-red-800 font-bold text-sm mb-2">🔴 {isKo ? '발생한 버그' : 'Bug encountered'}</div>
              <p className="text-red-700 text-sm">
                {isKo
                  ? '레벨이 올라가면서 속도가 증가하는데, 레벨 5 이상에서 간헐적으로 지렁이가 자기 몸을 통과하는 현상이 발생한다. 충돌 감지가 되어야 하는데 되지 않는다.'
                  : 'As level increases and speed ramps up, at level 5+ the snake occasionally passes through its own body. Collision detection should fire but doesn\'t.'}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? '이 버그를 직접 디버깅하는 대신 investigator 에이전트에게 원인 분석을 맡긴다. investigator는 코드를 수정하지 않고 읽기만 하므로 안전하다.'
                : 'Instead of debugging this directly, we delegate root cause analysis to the investigator agent. The investigator only reads code, never modifies it — so it\'s safe.'}
            </p>

            <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# 메인 세션에서 investigator 호출
# (Agent 툴 사용)

프롬프트:
"investigator 에이전트를 써서 다음 버그의 원인을 찾아줘:

버그: 레벨 5 이상에서 지렁이가 자기 몸을 통과하는 현상
관련 파일: app/snake/engine.ts

가능한 원인:
1. setInterval 주기가 짧아지면서 tick()이 두 번 호출?
2. nextDirection이 direction으로 적용되기 전에 충돌 감지?
3. 충돌 체크 시 newHead가 아직 snake 배열에 없는 상태?

분석 결과를 docs/progress/snake-game.md에 추가해줘."`}</pre>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'investigator 보고서 (요약)' : 'Investigator report (summary)'}</div>
              <div className="bg-slate-50 rounded-xl p-5">
                <div className="text-xs font-mono text-slate-500 mb-3">investigator → 메인 세션</div>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex gap-2">
                    <span className="text-red-600 font-bold shrink-0">원인:</span>
                    <span>
                      {isKo
                        ? '`startLoop`에서 레벨 변화 감지 후 `clearInterval → setInterval` 재시작 시, 이전 interval이 정확히 같은 틱에 한 번 더 실행될 수 있음. 결과적으로 `tick()`이 한 프레임에 두 번 호출되어 몸통이 이동하기 전에 충돌 체크가 이루어짐.'
                        : '`startLoop` detects level change, then `clearInterval → setInterval` restart can let the old interval fire once more at the exact same tick. Result: `tick()` is called twice in one frame — collision check runs before body segments have moved.'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-green-600 font-bold shrink-0">수정:</span>
                    <span>
                      {isKo
                        ? 'loop 함수 내부에서 매 tick마다 interval을 재설정하지 말고, 레벨 변화를 별도 플래그로 감지해 다음 틱부터 적용한다.'
                        : 'Don\'t reset the interval inside every tick. Instead, detect level changes with a separate flag and apply from the next tick.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? '수정 코드 (startLoop)' : 'Fixed code (startLoop)'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// 수정 전: 매 tick마다 interval 재설정
const loop = () => {
  engine.tick();
  draw();
  if (timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(loop, engine.intervalMs); // ← 버그 원인
  }
};

// 수정 후: 레벨 변화 감지 후 다음 틱에 적용
const startLoop = useCallback((engine: SnakeEngine) => {
  if (timerRef.current) clearInterval(timerRef.current);
  let prevLevel = engine.level;

  const loop = () => {
    engine.tick();
    draw();
    setScore(engine.score);
    setLevel(engine.level);

    if (engine.isGameOver) {
      if (timerRef.current) clearInterval(timerRef.current);
      setGameState('over');
      setHighScore(prev => {
        const next = Math.max(prev, engine.score);
        localStorage.setItem('snake-high', String(next));
        return next;
      });
      return;
    }

    // 레벨이 바뀐 경우에만 interval 재설정 (현재 tick 완료 후)
    if (engine.level !== prevLevel) {
      prevLevel = engine.level;
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(loop, engine.intervalMs);
    }
  };

  timerRef.current = setInterval(loop, engine.intervalMs);
}, [draw]);`}</pre>
            </div>
          </div>
        </section>

        {/* reviewer 에이전트 */}
        <section>
          <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'reviewer 에이전트' : 'Reviewer Agent'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '5. 코드 품질 검증 — reviewer가 전체를 검토한다' : '5. Code Quality Check — Reviewer Examines Everything'}
          </h2>

          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'engine worktree와 ui worktree의 코드를 main에 머지하기 전에 reviewer 에이전트로 전체 품질 검증을 요청한다.'
                : 'Before merging engine and ui worktrees into main, request a full quality review from the reviewer agent.'}
            </p>

            <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`# reviewer 에이전트 호출
"reviewer 에이전트로 app/snake/ 디렉터리 전체 리뷰해줘.
 특히 다음을 확인해:
 1. useRef와 setInterval 사용이 메모리 누수를 일으키지 않는지
 2. 모바일 터치 이벤트 preventDefault 처리
 3. TypeScript strict 모드 호환성
 4. roundRect 브라우저 호환성"`}</pre>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="text-xs font-mono text-slate-500 mb-3">reviewer → 메인 세션</div>
              <div className="space-y-3">
                {(isKo ? [
                  { severity: 'MEDIUM', item: 'roundRect 호환성', detail: 'Safari 15.4 미만에서 미지원. fillRect + borderRadius 폴리필 또는 조건부 처리 권장.' },
                  { severity: 'LOW', item: '메모리 누수 없음', detail: 'useEffect cleanup에서 clearInterval 정상 처리됨.' },
                  { severity: 'LOW', item: 'TypeScript', detail: 'engine.ts의 spawnFood에서 this.snake?.some()의 optional chaining은 constructor에서 항상 초기화되므로 불필요. 제거 가능.' },
                  { severity: 'INFO', item: '모바일 UX', detail: '방향 버튼은 구현됐으나 스와이프 제스처도 추가하면 더 자연스러운 UX.' },
                ] : [
                  { severity: 'MEDIUM', item: 'roundRect compatibility', detail: 'Not supported in Safari < 15.4. Recommend polyfill or conditional handling.' },
                  { severity: 'LOW', item: 'No memory leaks', detail: 'clearInterval in useEffect cleanup is handled correctly.' },
                  { severity: 'LOW', item: 'TypeScript', detail: 'Optional chaining on this.snake?.some() in spawnFood is unnecessary — always initialized in constructor. Can remove.' },
                  { severity: 'INFO', item: 'Mobile UX', detail: 'Direction buttons implemented, but swipe gestures would provide a more natural UX.' },
                ]).map((item, i) => (
                  <div key={i} className="flex gap-3 items-start border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                    <span className={`text-xs font-bold w-16 shrink-0 ${
                      item.severity === 'MEDIUM' ? 'text-orange-600' :
                      item.severity === 'LOW' ? 'text-blue-600' : 'text-slate-500'
                    }`}>{item.severity}</span>
                    <div>
                      <span className="text-slate-800 font-bold text-sm">{item.item}</span>
                      <span className="text-slate-600 text-sm"> — {item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-slate-700 mb-3">{isKo ? 'roundRect 폴리필 적용' : 'Applying roundRect polyfill'}</div>
              <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// app/snake/page.tsx — roundRect 폴리필
// (draw 함수 맨 위에 추가)

if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(
    x: number, y: number, w: number, h: number, r: number
  ) {
    this.beginPath();
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
    this.closePath();
  };
}`}</pre>
            </div>
          </div>
        </section>

        {/* Stop 게이트 */}
        <section>
          <div className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isKo ? 'Stop 게이트' : 'Stop Gate'}
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            {isKo ? '6. Stop 게이트가 막는 순간' : '6. The Moment the Stop Gate Blocks'}
          </h2>

          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'reviewer 피드백을 반영하고 세션을 종료하려는 순간 Stop 훅이 실행된다. TypeScript strict 체크에서 오류가 발견된다.'
                : 'After applying reviewer feedback and attempting to end the session, the Stop hook runs. TypeScript strict check finds an error.'}
            </p>

            <div className="bg-slate-900 rounded-xl p-5 text-xs font-mono">
              <div className="text-slate-400 mb-3">$ verify-done.sh</div>
              <div className="space-y-1">
                <div className="text-blue-400">🔍 타입 체크 실행 중...</div>
                <div className="text-red-400">app/snake/page.tsx(142,9): error TS2339:</div>
                <div className="text-red-300 pl-4">{'Property \'roundRect\' does not exist on type'}</div>
                <div className="text-red-300 pl-4">{'\'CanvasRenderingContext2D\'.'}</div>
                <div className="text-yellow-400 mt-2">❌ 타입 오류가 있습니다. 수정 후 종료해주세요.</div>
                <div className="text-orange-400">🔄 문제를 수정한 후 다시 종료를 시도하세요. (재시도 1/3)</div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {isKo
                ? 'Stop 게이트가 `exit 2`를 반환해 세션이 종료되지 않는다. Claude가 자동으로 수정한다.'
                : 'The Stop gate returns `exit 2`, preventing session end. Claude fixes it automatically.'}
            </p>

            <pre className="bg-slate-900 text-green-400 rounded-xl p-5 text-xs overflow-x-auto">{`// 수정: interface augmentation으로 타입 선언 추가
// app/snake/canvas-polyfill.d.ts

interface CanvasRenderingContext2D {
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | DOMPointInit | (number | DOMPointInit)[]
  ): void;
}`}</pre>

            <div className="bg-slate-900 rounded-xl p-5 text-xs font-mono">
              <div className="text-slate-400 mb-3">$ verify-done.sh (재시도)</div>
              <div className="space-y-1">
                <div className="text-blue-400">🔍 타입 체크 실행 중...</div>
                <div className="text-green-400">✅ 모든 검증 통과</div>
                <div className="text-slate-400">세션을 종료합니다.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 워크플로우 회고 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '7. 회고 — 하네스가 실제로 뭘 해줬나' : '7. Retrospective — What Did the Harness Actually Do?'}
          </h2>

          <div className="space-y-4">
            {(isKo ? [
              {
                icon: '🏗️',
                part: 'worktree 격리',
                without: '엔진 수정이 UI 파일을 깨뜨리거나, 두 작업이 서로 기다려야 함',
                with: '엔진 / UI / 버그수정 3개 브랜치가 동시에 독립 진행. 충돌 없음',
              },
              {
                icon: '📝',
                part: 'progress 파일',
                without: '세션이 compact되면 "어디까지 했는지" 다시 설명해야 함',
                with: '새 Claude가 체크리스트를 읽고 즉시 다음 항목에서 시작',
              },
              {
                icon: '🔔',
                part: 'Notification 훅',
                without: '터미널을 주시하고 있어야 Claude가 대기 중인지 알 수 있음',
                with: '다른 작업 중에도 OS 알림으로 즉시 파악',
              },
              {
                icon: '🔍',
                part: 'investigator 에이전트',
                without: '버그 원인 찾으면서 실수로 코드를 건드려 새 버그 생성 위험',
                with: '읽기 전용 에이전트가 안전하게 분석. 원인 파악 후 수정만 직접 진행',
              },
              {
                icon: '🔴',
                part: 'Stop 게이트',
                without: 'TypeScript 오류가 있는 상태로 커밋. CI에서 나중에 발견',
                with: '세션 종료 전 자동 차단. 수정 후에만 커밋 가능',
              },
            ] : [
              {
                icon: '🏗️',
                part: 'Worktree isolation',
                without: 'Engine changes break UI files, or the two tasks must wait for each other',
                with: 'Engine / UI / bugfix branches progress simultaneously. Zero conflicts.',
              },
              {
                icon: '📝',
                part: 'Progress files',
                without: 'After compact, must re-explain "where we left off" every time',
                with: 'New Claude reads the checklist and starts immediately from the next item',
              },
              {
                icon: '🔔',
                part: 'Notification hook',
                without: 'Must watch the terminal to know if Claude is waiting',
                with: 'OS notification fires instantly, even while doing other work',
              },
              {
                icon: '🔍',
                part: 'Investigator agent',
                without: 'Risk of accidentally touching code while hunting for root cause, creating new bugs',
                with: 'Read-only agent analyzes safely. Only make targeted edits after root cause is clear.',
              },
              {
                icon: '🔴',
                part: 'Stop gate',
                without: 'TypeScript errors committed as-is. Found later in CI.',
                with: 'Automatically blocked before session ends. Commit only after fix.',
              },
            ]).map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span className="font-bold text-sm text-slate-800">{item.part}</span>
                </div>
                <div className="px-5 py-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-red-500 font-bold mb-1">{isKo ? '하네스 없이' : 'Without harness'}</div>
                    <div className="text-sm text-slate-600">{item.without}</div>
                  </div>
                  <div>
                    <div className="text-xs text-green-600 font-bold mb-1">{isKo ? '하네스와 함께' : 'With harness'}</div>
                    <div className="text-sm text-slate-600">{item.with}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 완성 게임 */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {isKo ? '8. 완성 — 지금 바로 해보기' : '8. Done — Play It Now'}
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🐍</div>
            <h3 className="text-xl font-black text-slate-900 mb-3">
              {isKo ? '지렁이 게임 플레이하기' : 'Play Snake'}
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              {isKo
                ? '이 블로그에서 만든 게임을 직접 해볼 수 있다. WASD 또는 방향키로 조작, Space로 시작.'
                : 'Play the game built in this post. Use WASD or arrow keys to control, Space to start.'}
            </p>
            <Link
              href="/snake"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3 rounded-xl text-lg transition-colors"
            >
              {isKo ? '▶ 게임 시작' : '▶ Play Now'}
            </Link>
            <p className="text-slate-400 text-xs mt-4">
              {isKo
                ? 'GitHub에서 전체 소스 확인 가능. 이 글의 코드가 그대로 사용됨.'
                : 'Full source available on GitHub. Code from this post used as-is.'}
            </p>
          </div>
        </section>

        {/* 다음 단계 */}
        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="text-slate-400 text-xs font-mono mb-4">{isKo ? '다음 단계' : 'Next Steps'}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-green-400 font-bold mb-2">{isKo ? '이 예제를 확장하려면' : 'To extend this example'}</div>
              <ul className="text-slate-400 space-y-1">
                <li>• {isKo ? '멀티플레이어 — 크로스 세션 메시지로 세션간 게임 상태 공유' : 'Multiplayer — share game state between sessions via cross-session messages'}</li>
                <li>• {isKo ? '리더보드 — investigator가 Supabase 스키마 분석' : 'Leaderboard — investigator analyzes Supabase schema'}</li>
                <li>• {isKo ? 'AI 상대 — sub-agent가 AI 플레이어 로직 구현' : 'AI opponent — sub-agent implements AI player logic'}</li>
              </ul>
            </div>
            <div>
              <div className="text-blue-400 font-bold mb-2">{isKo ? '하네스를 더 배우려면' : 'To learn more about the harness'}</div>
              <ul className="text-slate-400 space-y-1">
                <li>
                  <Link href="/blog/claude-code-multi-session-harness" className="hover:text-white transition-colors underline">
                    {isKo ? '← 멀티 세션 오케스트레이션 하네스 튜토리얼' : '← Multi-Session Orchestration Harness Tutorial'}
                  </Link>
                </li>
                <li>• {isKo ? 'Claude Code 공식 훅 문서' : 'Claude Code official hooks docs'}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
