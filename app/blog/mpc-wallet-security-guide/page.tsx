'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MPCWalletSecurityGuidePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: '보안',
      title: 'MPC 지갑 보안 완벽 가이드',
      date: '2026년 1월 11일',
      readTime: '9분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Security',
      title: 'Complete MPC Wallet Security Guide',
      date: 'January 11, 2026',
      readTime: '9 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Walits Logo"
                width={32}
                height={32}
                className="rounded"
              />
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
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-medium mb-4">
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

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/mpc-security.jpg"
            alt={language === 'ko' ? 'MPC 지갑 보안 가이드' : 'MPC Wallet Security Guide'}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                100억 원의 암호화폐를 어떻게 안전하게 보관하시겠습니까? 단일 개인키로는 너무 위험합니다.
                MPC 지갑이 유일한 답입니다.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">문제: 단일 실패점</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">전통적인 지갑의 위험</h3>
              <p>
                일반 암호화폐 지갑은 하나의 개인키로 모든 자산을 관리합니다:
              </p>
              <ul>
                <li><strong>분실 위험</strong>: 개인키를 잃어버리면 영구 손실</li>
                <li><strong>탈취 위험</strong>: 해킹으로 개인키 노출 시 전액 탈취</li>
                <li><strong>내부자 위험</strong>: 담당자 1명이 전액 횡령 가능</li>
                <li><strong>단일 실패점</strong>: 하나의 약점이 전체 시스템 붕괴</li>
              </ul>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">실제 사례: 거래소 해킹</h4>
                <p className="mb-0">
                  2022년 X거래소: 핫월렛 개인키 탈취로 300억 원 손실. 단일 개인키 의존이 원인.
                  2-of-3 시스템이었다면 해커가 1개 키를 탈취해도 자산은 안전했을 것입니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">해결책: MPC 지갑</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">MPC란?</h3>
              <p>
                <strong>Multi-Party Computation (다자간 연산)</strong>: 개인키를 여러 조각으로 나누고,
                일정 개수 이상의 조각이 모여야만 트랜잭션 서명이 가능한 기술입니다.
                개인키 원본은 절대 생성되지 않으므로 단일 실패점이 존재하지 않습니다.
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border-l-4 border-purple-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Walits는 2가지 MPC 방식 지원</h4>
                <p className="mb-0">
                  <strong>방식 1 (현재 지원)</strong>: 서버키 + 고객키 + 백업키로 구성, 서버 인증으로 승인 관리<br/>
                  <strong>방식 2 (추후 지원)</strong>: 여러 명이 분산 키를 보유하는 전통적인 2-of-3 방식
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">방식 1: 서버키 + 고객키 (현재 지원)</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">키 구성</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <pre className="text-sm overflow-x-auto">
{`개인키 원본: [절대 생성되지 않음!]
     ↓ MPC 알고리즘으로 분할 (2-of-3)
     ↓
Key Share 1: 서버키 (Walits 서버에 안전하게 보관)
Key Share 2: 고객키 (고객 디바이스에 보관)
Key Share 3: 백업키 (고객 백업용, 오프라인 보관)

트랜잭션 서명:
✓ 서버키 + 고객키 → 서명 가능 (정상 송금)
✓ 서버키 + 백업키 → 서명 가능 (디바이스 분실 시 복구)
✓ 고객키 + 백업키 → 서명 가능 (서버 장애 시)
✗ 서버키만 → 서명 불가 (키 탈취 방지)
✗ 고객키만 → 서명 불가 (키 탈취 방지)

핵심: 2개 이상의 키가 있어야만 송금 가능!`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">승인(Approve) 프로세스</h3>
              <p>
                방식 1에서는 MPC로 키 탈취를 방지하고, 추가로 서버 인증을 통해 승인 프로세스를 관리합니다.
                송금 시 얼마나 많은 사람들이 참여해야 하는지는 서버 측 정책으로 설정됩니다:
              </p>
              <ul>
                <li><strong>단일 승인</strong>: 소액 송금의 경우 1명의 승인으로 즉시 처리</li>
                <li><strong>다중 승인</strong>: 고액 송금의 경우 2명 이상의 승인 필요</li>
                <li><strong>서버 인증</strong>: 모든 승인은 서버에서 검증되어 정책 준수 보장</li>
                <li><strong>유연한 설정</strong>: 기업별로 금액대별 승인 규칙 커스터마이징 가능</li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8 border-l-4 border-green-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">방식 1의 이중 보안 체계</h4>
                <p className="mb-0">
                  <strong>1단계 (MPC)</strong>: 2개 이상의 키가 있어야 서명 가능 → 키 탈취 방지<br/>
                  <strong>2단계 (Approve)</strong>: 서버 인증으로 다중 승인 관리 → 내부 통제 강화
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">방식 1의 장점</h3>
              <ul>
                <li><strong>탈취 방지</strong>: 해커가 서버키만 탈취해도 자산은 안전 (고객키 또는 백업키 필요)</li>
                <li><strong>디바이스 분실 방지</strong>: 고객 디바이스를 잃어도 서버키 + 백업키로 복구 가능</li>
                <li><strong>편의성</strong>: 고객은 앱에서 간편하게 승인만 하면 됨</li>
                <li><strong>보안성</strong>: 2개 이상의 키가 동시에 침해되어야 자산 탈취 가능</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">방식 2: 다중 키 보유자 (추후 지원)</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">키 구성</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <pre className="text-sm overflow-x-auto">
{`개인키 원본: [절대 생성되지 않음!]
     ↓ MPC 알고리즘으로 분할 (2-of-3)
     ↓
Key Share 1: CEO 보관
Key Share 2: CFO 보관
Key Share 3: 오프라인 백업 (콜드 스토리지)

트랜잭션 서명:
✓ CEO키 + CFO키 → 서명 가능
✓ CEO키 + 백업키 → 서명 가능 (CFO 부재 시)
✓ CFO키 + 백업키 → 서명 가능 (CEO 부재 시)
✗ CEO키만 → 서명 불가 (내부자 횡령 방지)
✗ CFO키만 → 서명 불가 (내부자 횡령 방지)

핵심: 2명 이상이 동의해야만 송금 가능!`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">방식 2의 장점</h3>
              <ul>
                <li><strong>분실 방지</strong>: 1개 키를 잃어도 나머지 2개로 복구 가능</li>
                <li><strong>탈취 방지</strong>: 해커가 1개 키를 탈취해도 자산은 안전</li>
                <li><strong>내부 통제</strong>: 1명이 단독으로 자산 이동 불가</li>
                <li><strong>유연성</strong>: CEO 부재 시 CFO + 백업 키로 운영 가능</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">다중 알고리즘 지원: ECDSA & EdDSA</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">ECDSA (Elliptic Curve Digital Signature Algorithm)</h3>
              <p>
                <strong>지원 체인:</strong> Ethereum, Bitcoin, BNB Chain, Polygon, Arbitrum, Optimism
              </p>
              <ul>
                <li>가장 널리 사용되는 서명 알고리즘</li>
                <li>secp256k1 곡선 기반</li>
                <li>EVM 호환 체인 전부 지원</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">EdDSA (Edwards-curve Digital Signature Algorithm)</h3>
              <p>
                <strong>지원 체인:</strong> Solana, Polkadot, Cardano, Near
              </p>
              <ul>
                <li>Ed25519 곡선 기반</li>
                <li>더 빠르고 효율적인 서명</li>
                <li>차세대 블록체인에서 주로 사용</li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8 border-l-4 border-green-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Walits의 장점</h4>
                <p className="mb-0">
                  ECDSA와 EdDSA 모두 지원하므로, 이더리움부터 솔라나까지 모든 주요 체인의 자산을
                  단일 MPC 시스템에서 안전하게 보관할 수 있습니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">다중 승인 워크플로우</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">금액별 승인 규칙</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">금액</th>
                      <th className="text-left p-2">승인 규칙</th>
                      <th className="text-left p-2">처리 시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">&lt; 1,000만 원</td>
                      <td className="p-2">재무팀장 단독</td>
                      <td className="p-2">즉시</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">1,000만 ~ 1억 원</td>
                      <td className="p-2">CFO 승인 필요</td>
                      <td className="p-2">1시간 이내</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">1억 ~ 10억 원</td>
                      <td className="p-2">CEO + CFO 승인</td>
                      <td className="p-2">4시간 이내</td>
                    </tr>
                    <tr>
                      <td className="p-2">&gt; 10억 원</td>
                      <td className="p-2">이사회 승인</td>
                      <td className="p-2">24시간 이내</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">감사 추적 시스템</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">모든 액션 기록</h3>
              <ul className="space-y-2">
                <li><strong>누가 (Who)</strong>: 요청자와 승인자의 신원이 명확하게 기록되어 책임 소재가 분명합니다.</li>
                <li><strong>언제 (When)</strong>: 요청 시각, 승인 시각, 실행 시각이 모두 타임스탬프와 함께 저장됩니다.</li>
                <li><strong>무엇을 (What)</strong>: 정확한 금액, 수신 주소, 자산 종류 등 모든 거래 세부 사항이 기록됩니다.</li>
                <li><strong>왜 (Why)</strong>: 출금 사유와 관련 첨부 문서가 함께 보관되어 나중에 확인할 수 있습니다.</li>
                <li><strong>어떻게 (How)</strong>: 어떤 키 조합으로 서명했는지 기록되어 감사 추적이 가능합니다.</li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">감사 로그 예시</h4>
                <pre className="text-sm overflow-x-auto">
{`[2026-01-11 14:30:22] 출금 요청
 요청자: 재무팀장 김철수 (kim@company.com)
 금액: 5억 원 (500,000,000 KRW → USDT)
 수신: 0x1234...5678
 사유: 협력사 대금 지급
 첨부: invoice_2026_001.pdf

[2026-01-11 14:35:10] 1차 승인
 승인자: CFO 이영희 (lee@company.com)
 IP: 123.45.67.89
 Device: iPhone 15 Pro
 승인 방식: 생체인증 (Face ID)

[2026-01-11 14:42:33] 2차 승인
 승인자: CEO 박민수 (park@company.com)
 IP: 98.76.54.32
 Device: MacBook Pro
 승인 방식: 하드웨어 키 (YubiKey)

[2026-01-11 14:43:01] MPC 서명 완료
 사용된 Key Share: #1 (CEO) + #2 (CFO)
 서명 알고리즘: ECDSA (secp256k1)
 서명 해시: 0xabcd...ef01

[2026-01-11 14:43:15] 온체인 전송
 Tx Hash: 0x9876...5432
 Chain: Ethereum Mainnet
 Gas Used: 21,000
 Status: Confirmed (12 blocks)

[2026-01-11 14:47:00] 완료 알림
 통지 대상: 요청자, 승인자 전원
 방식: Email + SMS`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">복구 시나리오 완벽 가이드</h2>

              <p className="text-lg mb-6">
                Walits MPC 지갑은 2-of-3 구조로, 3개 키 중 1개를 분실해도 복구가 가능합니다.
                각 시나리오별 복구 방법을 상세히 알아보겠습니다.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">복구 시나리오 결정 트리</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <pre className="text-sm overflow-x-auto">
{`어떤 키를 분실했나요?

┌─ 고객키 분실 (디바이스 분실/고장) ──────────────┐
│  남은 키: 서버키 + 백업키                    │
│  복구 방법:                                  │
│  1. 백업키 복원 (USB/클라우드에서)           │
│  2. 새 지갑 생성                             │
│  3. 백업키로 서명하여 새 지갑으로 송금       │
│  결과: ✅ 완전 복구 가능                     │
└─────────────────────────────────────────────┘

┌─ 서버키 분실 (서버 장애/폐업) ──────────────┐
│  남은 키: 고객키 + 백업키                    │
│  복구 방법:                                  │
│  1. TSS Reconstruction 실행                 │
│  2. 완전한 개인키 복원                       │
│  3. MetaMask에 임포트                       │
│  4. 새 지갑으로 즉시 이체                    │
│  5. 개인키 파일 영구 삭제                    │
│  결과: ✅ 완전 복구 가능 (개인키 노출 주의) │
└─────────────────────────────────────────────┘

┌─ 백업키 분실 (백업 미실행/분실) ────────────┐
│  남은 키: 서버키 + 고객키                    │
│  긴급 조치:                                  │
│  1. 즉시 새 지갑 생성                        │
│  2. 고객키로 전액 송금                       │
│  3. 새 지갑 백업키 즉시 3곳 이상 백업       │
│  주의: ⚠️ 추가 분실 시 복구 불가            │
└─────────────────────────────────────────────┘`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 1: 고객키 분실 (디바이스 분실)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border-l-4 border-blue-500">
                <p className="mb-4"><strong>상황:</strong> 스마트폰을 분실하여 고객키에 접근할 수 없음</p>
                <p className="mb-4"><strong>남은 키:</strong> 서버키 + 백업키</p>

                <p className="font-bold mb-2">복구 단계:</p>
                <ol className="space-y-3">
                  <li>
                    <strong>1단계: 백업키 복원</strong><br/>
                    USB 메모리나 클라우드에 저장한 백업키 파일을 찾습니다.<br/>
                    <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">MY-WALLET-backup-20260118.enc</code>
                  </li>
                  <li>
                    <strong>2단계: 새 지갑 생성</strong><br/>
                    Walits 앱에서 새 지갑을 생성합니다. (서버키 + 새 고객키 + 새 백업키)
                  </li>
                  <li>
                    <strong>3단계: 백업키로 서명</strong><br/>
                    시스템이 자동으로 고객키 없음을 감지하고 백업키를 사용합니다.<br/>
                    서버키 + 백업키로 기존 지갑에서 새 지갑으로 전액 송금합니다.
                  </li>
                  <li>
                    <strong>4단계: 새 백업키 즉시 백업</strong><br/>
                    새 지갑의 백업키를 USB, 클라우드, 종이 등 3곳 이상에 백업합니다.
                  </li>
                </ol>

                <p className="mt-4 font-semibold text-green-700 dark:text-green-400">
                  ✅ 결과: 완전 복구 성공, 자산 손실 없음, 소요 시간 약 10분
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 2: 서버키 분실 (서버 장애/폐업)</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p className="mb-4"><strong>상황:</strong> Walits 서버 장애 또는 서비스 중단으로 서버키 접근 불가</p>
                <p className="mb-4"><strong>남은 키:</strong> 고객키 + 백업키</p>

                <p className="font-bold mb-2">복구 단계 (TSS Reconstruction):</p>
                <ol className="space-y-3">
                  <li>
                    <strong>1단계: TSS Reconstruction 실행</strong><br/>
                    Walits 앱에서 "긴급 복구" 메뉴 선택<br/>
                    고객키 + 백업키를 조합하여 완전한 개인키를 재구성합니다.
                  </li>
                  <li>
                    <strong>2단계: 개인키 복원 확인</strong><br/>
                    <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      개인키: 1234567890abcdef...
                    </code><br/>
                    <span className="text-red-600 dark:text-red-400">⚠️ 주의: 개인키가 노출되었습니다!</span>
                  </li>
                  <li>
                    <strong>3단계: MetaMask에 임포트</strong><br/>
                    MetaMask 확장 프로그램 열기 → 계정 가져오기 → 개인키 입력<br/>
                    기존 MPC 지갑 주소와 동일한지 확인
                  </li>
                  <li>
                    <strong>4단계: 즉시 전액 이체</strong><br/>
                    새로운 안전한 지갑으로 모든 자산을 즉시 송금<br/>
                    Gas fee를 충분히 확보하세요.
                  </li>
                  <li>
                    <strong>5단계: 개인키 파일 영구 삭제</strong><br/>
                    복원된 개인키 파일을 안전하게 삭제합니다.<br/>
                    <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">shred -u emergency_key.json</code>
                  </li>
                </ol>

                <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300">⚠️ 보안 주의사항</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• TSS Reconstruction은 개인키를 완전히 노출시킵니다</li>
                    <li>• MPC의 보안 이점이 상실되므로 즉시 이체해야 합니다</li>
                    <li>• 가능하면 오프라인 환경에서 실행하세요</li>
                    <li>• 복원 후 개인키 파일을 반드시 영구 삭제하세요</li>
                  </ul>
                </div>

                <p className="mt-4 font-semibold text-green-700 dark:text-green-400">
                  ✅ 결과: 완전 복구 가능하나 개인키 노출로 즉시 이체 필요
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 3: 백업키 분실 (백업 미실행)</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <p className="mb-4"><strong>상황:</strong> 백업을 하지 않았거나 백업 파일을 분실</p>
                <p className="mb-4"><strong>남은 키:</strong> 서버키 + 고객키</p>

                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded mb-4">
                  <p className="font-semibold text-red-800 dark:text-red-300">🚨 위험: 추가 분실 시 복구 불가능!</p>
                  <p className="text-sm mt-2">
                    현재는 서버키 + 고객키로 정상 작동하지만, 둘 중 하나라도 추가로 분실하면
                    2개 키가 없어져서 영구적으로 복구할 수 없습니다.
                  </p>
                </div>

                <p className="font-bold mb-2">긴급 조치:</p>
                <ol className="space-y-3">
                  <li>
                    <strong>1단계: 즉시 새 지갑 생성</strong><br/>
                    Walits 앱에서 새 MPC 지갑을 생성합니다.<br/>
                    서버키 + 새 고객키 + 새 백업키가 자동 생성됩니다.
                  </li>
                  <li>
                    <strong>2단계: 기존 지갑에서 전액 송금</strong><br/>
                    서버키 + 고객키(현재 보유 중)로 서명하여 전액을 새 지갑으로 이체합니다.
                  </li>
                  <li>
                    <strong>3단계: 새 지갑 백업키 즉시 백업 (필수!)</strong><br/>
                    반드시 3곳 이상에 백업하세요:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• USB 메모리 (물리적 보관)</li>
                      <li>• 클라우드 스토리지 (암호화 필수)</li>
                      <li>• 종이 인쇄 (금고 보관)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>4단계: 기존 지갑 폐기</strong><br/>
                    기존 지갑(백업키 없는 상태)은 더 이상 사용하지 않습니다.
                  </li>
                </ol>

                <p className="mt-4 font-semibold text-orange-700 dark:text-orange-400">
                  ⚠️ 결과: 복구 가능하나 즉시 조치 필요, 재발 방지를 위해 백업 필수
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 4: 키 탈취 (해킹)</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border-l-4 border-purple-500">
                <p className="mb-4"><strong>상황:</strong> 해커가 고객키 1개를 탈취</p>
                <p className="mb-4"><strong>남은 안전한 키:</strong> 서버키 + 백업키</p>

                <p className="font-bold mb-2">대응 방법:</p>
                <ol className="space-y-3">
                  <li>
                    <strong>1단계: 즉시 확인</strong><br/>
                    해커는 1개 키만으로는 아무것도 할 수 없습니다. (2개 필요)<br/>
                    자산은 현재 안전합니다.
                  </li>
                  <li>
                    <strong>2단계: 탈취된 키 무력화</strong><br/>
                    서버에 해당 고객키 사용 중지 요청<br/>
                    이후 해당 키로는 서명 불가능
                  </li>
                  <li>
                    <strong>3단계: 새 지갑으로 자산 이전</strong><br/>
                    서버키 + 백업키로 새 지갑을 생성하고 전액 이체<br/>
                    또는 고객키를 재발급받아 계속 사용
                  </li>
                </ol>

                <p className="mt-4 font-semibold text-green-700 dark:text-green-400">
                  ✅ 결과: 자산 손실 없음, MPC의 탁월한 보안성 입증
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">백업키 관리 완벽 가이드</h2>

              <p className="text-lg mb-6">
                백업키는 고객키 분실 시 유일한 복구 수단입니다.
                반드시 지갑 생성 즉시 백업하고, 안전한 장소에 보관하세요.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">백업키 내보내기 (Export)</h3>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Walits 앱에서 백업하기</h4>
                <ol className="space-y-2">
                  <li>1. Walits 앱 열기</li>
                  <li>2. 지갑 목록에서 백업할 지갑 선택</li>
                  <li>3. "백업 내보내기" 버튼 클릭</li>
                  <li>4. 암호화 옵션 선택 (강력 권장):</li>
                  <li className="ml-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" checked disabled className="form-checkbox" />
                      <span>암호화 (AES-256-GCM)</span>
                    </label>
                  </li>
                  <li>5. 강력한 비밀번호 설정 (최소 12자, 대소문자+숫자+특수문자)</li>
                  <li>6. 저장 위치 선택</li>
                  <li>7. 완료: <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">MY-WALLET-backup-20260118_143022.enc</code></li>
                </ol>

                <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300">💡 백업 파일명 형식</p>
                  <p className="text-sm mt-1">
                    <code>{`{지갑이름}-backup-{날짜}_{시간}.enc`}</code><br/>
                    예: <code>ethereum-wallet-backup-20260118_143022.enc</code>
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">백업키 저장 위치 (3-2-1 규칙)</h3>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border-l-4 border-green-500">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">3-2-1 백업 규칙</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>3개 복사본:</strong> 백업 파일을 최소 3곳에 보관
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• 원본: 클라이언트 디바이스 (앱 내장)</li>
                      <li>• 백업 1: USB 메모리</li>
                      <li>• 백업 2: 클라우드 또는 종이</li>
                    </ul>
                  </li>
                  <li>
                    <strong>2개 이상의 저장 매체:</strong> 서로 다른 형태로 보관
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• SSD (클라이언트 디바이스)</li>
                      <li>• USB 플래시 드라이브</li>
                      <li>• 종이 (QR 코드 인쇄)</li>
                      <li>• 클라우드 (Dropbox, Google Drive 등)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>1개 오프사이트 백업:</strong> 집/사무실과 다른 장소에 보관
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• 은행 금고</li>
                      <li>• 가족 집</li>
                      <li>• 다른 도시 사무실</li>
                    </ul>
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-2">예시 백업 전략:</p>
                  <pre className="text-sm">
{`복사본 1: MacBook (앱 기본 저장소)
복사본 2: USB 메모리 (책상 서랍)
복사본 3: Dropbox (암호화 필수)
오프사이트: 부모님 집 금고 (USB 복사본)`}
                  </pre>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">백업키 복원하기 (Import)</h3>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">언제 복원이 필요한가요?</h4>
                <ul className="space-y-2">
                  <li>• 디바이스를 분실하거나 고장나서 고객키에 접근할 수 없을 때</li>
                  <li>• 새 디바이스로 교체하여 지갑을 이전할 때</li>
                  <li>• 정기적인 복구 테스트를 할 때 (3개월마다 권장)</li>
                </ul>

                <h4 className="font-bold mt-6 mb-4 text-gray-900 dark:text-white">복원 단계:</h4>
                <ol className="space-y-2">
                  <li>1. Walits 앱 설치 (새 디바이스)</li>
                  <li>2. "백업 가져오기" 메뉴 선택</li>
                  <li>3. 백업 파일 선택 (USB 또는 클라우드에서)</li>
                  <li>4. 암호화된 백업인 경우 비밀번호 입력</li>
                  <li>5. 지갑 이름 확인 (선택사항: 변경 가능)</li>
                  <li>6. "가져오기" 클릭</li>
                  <li>7. 완료: 백업키가 성공적으로 복원되었습니다!</li>
                </ol>

                <div className="mt-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300">⚠️ 복원 후 주의사항</p>
                  <p className="text-sm mt-1">
                    복원된 백업키로 즉시 송금하지 마세요!<br/>
                    먼저 서버와 연결되는지 확인하고, 테스트 송금(소액)을 해보세요.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">백업 검증 (정기 테스트)</h3>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6">
                <p className="mb-4">
                  백업 파일이 정상적으로 작동하는지 정기적으로 테스트하세요.
                  막상 필요할 때 백업이 손상되었다면 복구할 수 없습니다!
                </p>

                <h4 className="font-bold mb-2">테스트 절차 (3개월마다):</h4>
                <ol className="space-y-2">
                  <li>1. 백업 파일 가져오기 시도</li>
                  <li>2. 비밀번호로 복호화 성공 확인</li>
                  <li>3. 지갑 정보 확인 (주소, 공개키)</li>
                  <li>4. 테스트 완료 후 삭제 (원본은 유지)</li>
                </ol>

                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded">
                  <p className="font-semibold text-green-800 dark:text-green-300">✅ 체크리스트</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>□ 지갑 생성 후 즉시 백업 완료</li>
                    <li>□ 최소 3곳에 백업 저장</li>
                    <li>□ 암호화 비밀번호를 안전한 곳에 기록</li>
                    <li>□ 오프라인 저장소 1개 이상 보유</li>
                    <li>□ 3개월마다 복원 테스트 실행</li>
                    <li>□ 백업키 사용 후 즉시 재백업</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">암호화 비밀번호 관리</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">강력한 비밀번호 생성 규칙</h4>
                <ul className="space-y-2">
                  <li>• <strong>최소 길이:</strong> 12자 이상 (20자 이상 권장)</li>
                  <li>• <strong>복잡도:</strong> 대문자, 소문자, 숫자, 특수문자 모두 포함</li>
                  <li>• <strong>예측 불가:</strong> 생일, 이름, 전화번호 등 개인정보 사용 금지</li>
                  <li>• <strong>고유성:</strong> 다른 서비스와 절대 같은 비밀번호 사용 금지</li>
                </ul>

                <div className="mt-4">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">비밀번호 예시:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">❌</span>
                      <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">password123</code>
                      <span className="text-gray-600">너무 약함</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-600">⚠️</span>
                      <code className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">MyBirthday1990!</code>
                      <span className="text-gray-600">예측 가능</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">✅</span>
                      <code className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">K9$mPz2@vLqR8#xW</code>
                      <span className="text-gray-600">강력함</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <p className="font-semibold text-blue-800 dark:text-blue-300">💡 비밀번호 관리 도구 사용</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• 1Password, Bitwarden 등 비밀번호 관리자 사용</li>
                    <li>• 마스터 비밀번호는 종이에 적어 금고 보관</li>
                    <li>• 비밀번호를 잊어버리면 복구 불가능!</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">보안 베스트 프랙티스</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">키 보관 4대 원칙</h3>
              <ul className="space-y-3">
                <li>
                  <strong>1. 물리적 분리:</strong> 백업키는 반드시 디바이스와 다른 장소에 보관
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• 고객키: 스마트폰/PC (일상 사용)</li>
                    <li>• 백업키: USB, 클라우드, 종이 (별도 보관)</li>
                    <li>• 같은 장소에 2개 키를 보관하면 화재/도난 시 모두 손실</li>
                  </ul>
                </li>
                <li>
                  <strong>2. 암호화 필수:</strong> 클라우드 저장 시 반드시 암호화
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• AES-256-GCM 암호화 사용</li>
                    <li>• 평문 백업 파일을 클라우드에 올리지 마세요</li>
                    <li>• USB에 저장할 때도 암호화 권장</li>
                  </ul>
                </li>
                <li>
                  <strong>3. 다중 백업:</strong> 최소 3곳 이상에 백업
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• 하나가 손상되어도 다른 백업으로 복구</li>
                    <li>• 서로 다른 저장 매체 사용 (USB, 클라우드, 종이)</li>
                    <li>• 오프사이트 백업 1개 이상 필수</li>
                  </ul>
                </li>
                <li>
                  <strong>4. 정기 검증:</strong> 3개월마다 백업 테스트
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• 백업 파일이 손상되지 않았는지 확인</li>
                    <li>• 비밀번호를 잊지 않았는지 확인</li>
                    <li>• 복원 절차를 숙지</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">보안 위협별 대응 전략</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">위협</th>
                      <th className="text-left p-2">MPC 방어</th>
                      <th className="text-left p-2">추가 조치</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">디바이스 분실</td>
                      <td className="p-2">백업키로 복구</td>
                      <td className="p-2">원격 삭제, 즉시 재백업</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">서버 해킹</td>
                      <td className="p-2">고객키 없이 무용지물</td>
                      <td className="p-2">의심 시 새 지갑 이전</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">피싱 공격</td>
                      <td className="p-2">1개 키 탈취로는 송금 불가</td>
                      <td className="p-2">탈취된 키 폐기 및 교체</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">내부자 위협</td>
                      <td className="p-2">단독 송금 불가 (승인 필요)</td>
                      <td className="p-2">다중 승인 정책 설정</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">화재/재난</td>
                      <td className="p-2">오프사이트 백업으로 복구</td>
                      <td className="p-2">지리적으로 분산된 백업</td>
                    </tr>
                    <tr>
                      <td className="p-2">서비스 중단</td>
                      <td className="p-2">TSS Reconstruction</td>
                      <td className="p-2">개인키 복원 후 이체</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">하지 말아야 할 행동</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <ul className="space-y-2">
                  <li>❌ <strong>백업 미실행:</strong> "나중에 하지 뭐" → 절대 안 됩니다!</li>
                  <li>❌ <strong>평문 클라우드 저장:</strong> 암호화 없이 Dropbox/Google Drive 업로드</li>
                  <li>❌ <strong>같은 장소 보관:</strong> 디바이스와 USB를 같은 방에 보관</li>
                  <li>❌ <strong>비밀번호 공유:</strong> 가족이라도 백업 비밀번호 공유 금지</li>
                  <li>❌ <strong>스크린샷 저장:</strong> 백업키를 스크린샷으로 저장</li>
                  <li>❌ <strong>이메일 전송:</strong> 백업 파일을 이메일로 자신에게 전송</li>
                  <li>❌ <strong>검증 생략:</strong> 백업 후 복원 테스트를 하지 않음</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">자주 묻는 질문 (FAQ)</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q1. 백업키를 여러 번 저장해도 되나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 네, 권장됩니다! 최소 3곳 이상에 백업하세요.
                    하나가 손상되어도 다른 백업으로 복구할 수 있습니다.
                    USB, 클라우드, 종이 등 서로 다른 형태로 보관하는 것이 가장 안전합니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q2. 백업키 없이 고객키만 분실하면 어떻게 되나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 복구 불가능합니다. 서버키 + 고객키가 있어도 2개 키가 필요한데,
                    백업키가 없으면 1개만 남아서 서명할 수 없습니다.
                    <span className="text-red-600 font-semibold">반드시 지갑 생성 즉시 백업하세요!</span>
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q3. 백업키로 서명할 때 별도 설정이 필요한가요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 아니요, 완전 자동입니다! 시스템이 고객키가 없음을 자동으로 감지하고
                    백업키를 사용합니다. 사용자는 일반적인 송금 요청만 하면 됩니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q4. TSS Reconstruction은 언제 사용하나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> Walits 서버가 영구적으로 중단되었을 때만 사용하세요.
                    이 방법은 완전한 개인키를 복원하므로 MPC 보안이 상실됩니다.
                    복원 후 즉시 외부 지갑으로 이체하고 개인키 파일을 삭제해야 합니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q5. 암호화된 백업의 비밀번호를 잊어버렸어요!</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 비밀번호 복구는 불가능합니다.
                    예방책으로 비밀번호를 종이에 적어 금고에 보관하거나,
                    1Password/Bitwarden 같은 비밀번호 관리자를 사용하세요.
                    또는 암호화된 백업과 암호화하지 않은 백업을 각각 다른 장소에 보관하는 방법도 있습니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q6. 백업키를 클라우드에 저장해도 되나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 반드시 암호화한 후 저장하세요.
                    Dropbox, Google Drive 등에 암호화된 백업(.enc 파일)을 저장하는 것은 안전합니다.
                    <span className="text-red-600 font-semibold">절대 평문(.json) 파일을 클라우드에 올리지 마세요!</span>
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q7. 복구 테스트는 어떻게 하나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 3개월마다 백업 파일을 가져와서 복원이 되는지 테스트하세요.
                    복원 성공 후 테스트용 지갑은 삭제하고, 원본 백업은 그대로 보관합니다.
                    이렇게 하면 막상 필요할 때 백업이 손상되어 있는 불상사를 예방할 수 있습니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q8. 해커가 서버키를 탈취하면 어떻게 되나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 걱정하지 마세요! 서버키만으로는 아무것도 할 수 없습니다.
                    송금하려면 고객키 또는 백업키가 추가로 필요한데, 이는 사용자만 보유하고 있습니다.
                    이것이 바로 MPC의 핵심 보안 이점입니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q9. EdDSA 지갑(Solana)도 같은 방식으로 복구되나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 네, ECDSA(Ethereum)와 EdDSA(Solana) 모두 동일한 방법으로 백업하고 복구합니다.
                    백업키 파일 형식도 동일하며, 복구 절차도 같습니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q10. 여러 플랫폼(모바일/PC/웹) 간 백업이 호환되나요?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> 네, 완전히 호환됩니다. 모바일 앱에서 내보낸 백업을 PC 앱에서 가져올 수 있고,
                    그 반대도 가능합니다. 모든 플랫폼이 동일한 백업 형식을 사용합니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 도입 사례</h2>

              <div className="space-y-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">사례 1: NFT 마켓플레이스 K사</h3>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">도입 전 문제점:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 핫월렛 단일 개인키로 관리 (30억 원 규모)</li>
                      <li>• 개발자 1명이 전체 자산 접근 가능</li>
                      <li>• 디바이스 분실 시 복구 불가능</li>
                      <li>• 내부 감사 추적 시스템 없음</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">Walits MPC 도입 후:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 서버키 + 고객키 + 백업키로 분산 관리</li>
                      <li>• 5억 원 이상 송금 시 2명 이상 승인 필요 (서버 정책)</li>
                      <li>• 디바이스 분실 시 백업키로 즉시 복구</li>
                      <li>• 모든 거래 자동 로깅 및 알림</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-300">📊 결과</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• 내부 통제 강화: 단독 송금 불가</li>
                      <li>• 해킹 시도 5건 차단: 1개 키만으로는 무용지물</li>
                      <li>• 복구 테스트 성공: 디바이스 교체 시 10분 내 복구</li>
                      <li>• 규제 준수: 금융위원회 가상자산 가이드라인 충족</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">사례 2: DAO 재단 D사</h3>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">도입 배경:</p>
                    <p className="text-sm">
                      커뮤니티 펀드 100억 원 관리를 위해 투명하고 안전한 보관 솔루션 필요
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">Walits Custody 구성:</p>
                    <ul className="space-y-2 ml-4">
                      <li>
                        <strong>방식 1 (일반 운영):</strong>
                        <ul className="ml-4 mt-1 space-y-1 text-sm">
                          <li>• 서버키: Walits 서버 (고가용성)</li>
                          <li>• 고객키: 재단 CFO (모바일)</li>
                          <li>• 백업키: 은행 금고 (USB 암호화)</li>
                        </ul>
                      </li>
                      <li className="mt-2">
                        <strong>방식 2 (추후 계획):</strong>
                        <ul className="ml-4 mt-1 space-y-1 text-sm">
                          <li>• CEO키, CFO키, 이사회키로 분산</li>
                          <li>• 10억 원 이상은 2명 이상 물리적 키 보유자 동의 필요</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-300">📊 운영 6개월 후</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• 총 거래 건수: 2,450건</li>
                      <li>• 보안 사고: 0건</li>
                      <li>• 승인 프로세스 준수율: 100%</li>
                      <li>• CFO 디바이스 교체 1회 → 백업키로 10분 내 복구 완료</li>
                      <li>• 커뮤니티 투명성 평가: 9.2/10 (블록체인 감사 가능)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">사례 3: 게임사 G사 (복구 성공 사례)</h3>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">상황:</p>
                    <p className="text-sm">
                      재무팀장이 스마트폰을 분실하여 고객키 접근 불가 (보유 자산 50억 원)
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">복구 과정:</p>
                    <ol className="space-y-2 ml-4 text-sm">
                      <li>1. 분실 확인 후 즉시 Walits 고객센터 연락</li>
                      <li>2. 클라우드에 저장한 백업키 파일 다운로드 (암호화됨)</li>
                      <li>3. 새 스마트폰에 Walits 앱 설치</li>
                      <li>4. "백업 가져오기"로 백업키 복원 (비밀번호 입력)</li>
                      <li>5. 새 지갑 생성 (새 고객키 + 새 백업키 자동 생성)</li>
                      <li>6. 백업키(Party 2)로 서명하여 기존 지갑 → 새 지갑 전액 송금</li>
                      <li>7. 새 백업키를 다시 3곳에 백업</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded">
                    <p className="font-semibold text-green-800 dark:text-green-300">✅ 결과</p>
                    <p className="text-sm mt-1">
                      총 소요 시간: <strong>12분</strong><br/>
                      자산 손실: <strong>0원</strong><br/>
                      업무 중단: <strong>없음</strong> (백업키로 즉시 서명 가능)<br/>
                      교훈: "백업이 생명이다!"
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Walits 지갑 상품</h2>

              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                비즈니스 규모와 보안 요구사항에 맞는 지갑을 선택하세요.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Non-Custody Wallet */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                    개인 • 소규모 비즈니스
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Non-Custody Wallet</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    ₩99,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">약 $75 • 첫 달 50% 할인</p>

                  <div className="mb-6">
                    <p className="font-semibold mb-3 text-gray-900 dark:text-white">보안 방식 선택:</p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mt-0.5">1</div>
                        <div>
                          <p className="font-semibold text-sm">MPC 방식</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">서버키 + 고객키로 이중 보안</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mt-0.5">2</div>
                        <div>
                          <p className="font-semibold text-sm">TEE 방식</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">하드웨어 격리 환경에서 키 보관</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>개인키를 고객이 직접 보유</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>MPC 또는 TEE 보안 방식 선택</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>ECDSA & EdDSA 알고리즘 지원</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>간편한 백업 및 복원</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>모바일/데스크톱 앱 지원</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>이메일 고객 지원</span>
                    </li>
                  </ul>
                  <Link
                    href="/non-custody-wallet"
                    className="inline-block w-full text-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    시작하기
                  </Link>
                </div>

                {/* Custody Wallet */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border-2 border-purple-300 dark:border-purple-700 relative">
                  <div className="absolute -top-3 right-8 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                    기업 추천
                  </div>
                  <div className="inline-block px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full mb-4">
                    기업 • 금융기관
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet (MPC)</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">
                    ₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">약 $420 • 첫 달 무료</p>

                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>MPC 2-of-3 보안</strong>으로 단일 실패점 제거</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>다중 승인 워크플로우</strong> (금액별 차등 승인)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>정책 기반 거버넌스 시스템</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>완벽한 감사 추적 (Audit Trail)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>ECDSA & EdDSA 알고리즘 지원</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>전담 매니저</strong> 및 우선 지원</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>24/7 기술 지원</strong> 및 긴급 대응</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>규제 준수 리포트 제공</span>
                    </li>
                  </ul>
                  <Link
                    href="/custody-wallet"
                    className="inline-block w-full text-center px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    무료로 시작하기
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">어떤 지갑을 선택해야 할까요?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2 text-blue-600">Non-Custody Wallet 추천 대상:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• 개인 투자자</li>
                      <li>• 소규모 비즈니스 (자산 10억 원 미만)</li>
                      <li>• 완전한 자산 통제권 원하는 경우</li>
                      <li>• 간편한 백업/복원 선호</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-purple-600">Custody Wallet 추천 대상:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• 기업 및 금융기관</li>
                      <li>• 대규모 자산 보관 (10억 원 이상)</li>
                      <li>• 내부 통제 및 승인 프로세스 필요</li>
                      <li>• 규제 준수 및 감사 추적 필수</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">귀사 자산을 MPC로 안전하게</h3>
                <p className="mb-6">
                  100억 원 이상 보관 시 맞춤 견적 제공. 무료 상담으로 최적의 보안 전략을 수립하세요.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  무료 보안 상담
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                How would you safely store 10 billion KRW in cryptocurrency? A single private key is too risky.
                MPC 2-of-3 wallet is the only answer.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Problem: Single Point of Failure</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Risks of Traditional Wallets</h3>
              <p>
                Regular cryptocurrency wallets manage all assets with a single private key:
              </p>
              <ul>
                <li><strong>Loss Risk</strong>: Permanent loss if private key is lost</li>
                <li><strong>Theft Risk</strong>: Complete asset theft if key is compromised by hacking</li>
                <li><strong>Insider Risk</strong>: Single person can embezzle all assets</li>
                <li><strong>Single Point of Failure</strong>: One weakness collapses entire system</li>
              </ul>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Real Case: Exchange Hack</h4>
                <p className="mb-0">
                  2022 Exchange X: Lost 3 billion KRW due to hot wallet private key theft. Caused by single private key dependency.
                  With a 2-of-3 system, assets would have been safe even if hackers stole 1 key.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Solution: MPC 2-of-3</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">What is MPC?</h3>
              <p>
                <strong>Multi-Party Computation</strong>: Technology that splits a private key into 3 pieces,
                where any 2 pieces can sign transactions.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">How It Works</h4>
                <pre className="text-sm overflow-x-auto">
{`Original Private Key: [NEVER CREATED!]
     ↓ Split by MPC Algorithm
     ↓
Key Share 1 (CEO holds)
Key Share 2 (CFO holds)
Key Share 3 (Offline backup)

Transaction Signing:
✓ Key Share 1 + Key Share 2 → Can sign
✓ Key Share 1 + Key Share 3 → Can sign
✓ Key Share 2 + Key Share 3 → Can sign
✗ Key Share 1 only → Cannot sign
✗ Key Share 2 only → Cannot sign

Key Point: Original private key is NEVER created!`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why 2-of-3?</h3>
              <ul>
                <li><strong>Loss Prevention</strong>: Recoverable with remaining 2 keys if 1 is lost</li>
                <li><strong>Theft Prevention</strong>: Assets safe even if hacker steals 1 key</li>
                <li><strong>Internal Control</strong>: Single person cannot move assets alone</li>
                <li><strong>Flexibility</strong>: Can operate with CFO + backup key when CEO is absent</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Multi-Algorithm Support: ECDSA & EdDSA</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">ECDSA (Elliptic Curve Digital Signature Algorithm)</h3>
              <p>
                <strong>Supported Chains:</strong> Ethereum, Bitcoin, BNB Chain, Polygon, Arbitrum, Optimism
              </p>
              <ul>
                <li>Most widely used signature algorithm</li>
                <li>Based on secp256k1 curve</li>
                <li>Supports all EVM-compatible chains</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">EdDSA (Edwards-curve Digital Signature Algorithm)</h3>
              <p>
                <strong>Supported Chains:</strong> Solana, Polkadot, Cardano, Near
              </p>
              <ul>
                <li>Based on Ed25519 curve</li>
                <li>Faster and more efficient signatures</li>
                <li>Mainly used in next-generation blockchains</li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8 border-l-4 border-green-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Walits Advantage</h4>
                <p className="mb-0">
                  Supporting both ECDSA and EdDSA, you can securely store assets from Ethereum to Solana
                  in a single MPC system.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Multi-Approval Workflow</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Amount-Based Approval Rules</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Amount</th>
                      <th className="text-left p-2">Approval Rule</th>
                      <th className="text-left p-2">Processing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">&lt; 10M KRW</td>
                      <td className="p-2">Finance Manager Only</td>
                      <td className="p-2">Immediate</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">10M ~ 100M KRW</td>
                      <td className="p-2">CFO Approval Required</td>
                      <td className="p-2">Within 1 hour</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">100M ~ 1B KRW</td>
                      <td className="p-2">CEO + CFO Approval</td>
                      <td className="p-2">Within 4 hours</td>
                    </tr>
                    <tr>
                      <td className="p-2">&gt; 1B KRW</td>
                      <td className="p-2">Board Approval</td>
                      <td className="p-2">Within 24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Audit Trail System</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Recording Every Action</h3>
              <ul className="space-y-2">
                <li><strong>Who</strong>: Identities of requester and approvers clearly recorded for clear accountability.</li>
                <li><strong>When</strong>: Request time, approval time, execution time all saved with timestamps.</li>
                <li><strong>What</strong>: All transaction details including exact amount, recipient address, asset type recorded.</li>
                <li><strong>Why</strong>: Withdrawal reason and related documents stored for later verification.</li>
                <li><strong>How</strong>: Key combination used for signing recorded for audit trail.</li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Audit Log Example</h4>
                <pre className="text-sm overflow-x-auto">
{`[2026-01-11 14:30:22] Withdrawal Request
 Requester: Finance Manager Kim Chulsu (kim@company.com)
 Amount: 500M KRW (500,000,000 KRW → USDT)
 Recipient: 0x1234...5678
 Reason: Partner payment
 Attachment: invoice_2026_001.pdf

[2026-01-11 14:35:10] 1st Approval
 Approver: CFO Lee Younghee (lee@company.com)
 IP: 123.45.67.89
 Device: iPhone 15 Pro
 Auth Method: Biometric (Face ID)

[2026-01-11 14:42:33] 2nd Approval
 Approver: CEO Park Minsu (park@company.com)
 IP: 98.76.54.32
 Device: MacBook Pro
 Auth Method: Hardware Key (YubiKey)

[2026-01-11 14:43:01] MPC Signing Complete
 Key Shares Used: #1 (CEO) + #2 (CFO)
 Signature Algorithm: ECDSA (secp256k1)
 Signature Hash: 0xabcd...ef01

[2026-01-11 14:43:15] On-chain Transfer
 Tx Hash: 0x9876...5432
 Chain: Ethereum Mainnet
 Gas Used: 21,000
 Status: Confirmed (12 blocks)

[2026-01-11 14:47:00] Completion Notification
 Notified: Requester, all approvers
 Method: Email + SMS`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Disaster Recovery Scenarios</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Scenario 1: Loss of 1 Key Share</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <p><strong>Problem:</strong> CEO lost smartphone, cannot access Key Share #1</p>
                <p><strong>Solution:</strong></p>
                <ol>
                  <li>Resume operations immediately with CFO + backup key (Key Share #2 + #3)</li>
                  <li>Generate new Key Share #1 and reissue to CEO</li>
                  <li>Option: Revoke old keys and generate completely new 3-key set</li>
                </ol>
                <p><strong>Result:</strong> No downtime, no asset loss</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Scenario 2: Theft of 1 Key Share</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p><strong>Problem:</strong> Hacker stole Key Share #2</p>
                <p><strong>Solution:</strong></p>
                <ol>
                  <li>Immediately revoke Key Share #2 (blacklist registration)</li>
                  <li>Hacker cannot do anything with 1 key alone (needs 2)</li>
                  <li>Continue operations with CEO + backup key</li>
                  <li>Generate new 3-key set and transfer assets</li>
                </ol>
                <p><strong>Result:</strong> No asset loss, hacker's key is useless</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Scenario 3: Complete Server Failure</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border-l-4 border-green-500">
                <p><strong>Problem:</strong> Office fire destroyed all servers</p>
                <p><strong>Solution:</strong></p>
                <ol>
                  <li>Key Share #3 is offline backup (stored in bank vault)</li>
                  <li>CEO/CFO mobile Key Shares have cloud encrypted backup</li>
                  <li>Restore Key Shares after building new servers</li>
                  <li>Resume normal operations</li>
                </ol>
                <p><strong>Result:</strong> Full recovery possible</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Security Best Practices</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Key Share Storage Principles</h3>
              <ul className="space-y-2">
                <li><strong>Physical Separation</strong>: Store 3 keys in different physical locations for safety even if one is compromised.</li>
                <li><strong>Role Separation</strong>: Have different responsible parties manage each key to strengthen internal controls.</li>
                <li><strong>Various Forms</strong>: Store in different forms like mobile devices, hardware keys, and offline backups.</li>
                <li><strong>Regular Testing</strong>: Conduct monthly recovery tests to prepare for emergencies.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Recommended Configuration</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <ul className="space-y-4">
                  <li>
                    <strong>Key Share #1:</strong> CEO Smartphone (Biometric Auth)<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Cloud encrypted backup, 2FA required</span>
                  </li>
                  <li>
                    <strong>Key Share #2:</strong> CFO Hardware Key (YubiKey)<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Physical device, can be revoked immediately if lost</span>
                  </li>
                  <li>
                    <strong>Key Share #3:</strong> Offline Backup (Bank Vault)<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Ledger hardware wallet or paper backup</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Real Implementation Case</h2>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Case: Cryptocurrency Exchange K</h3>
                <p><strong>Before MPC:</strong></p>
                <ul>
                  <li>Cold wallet: Single private key stored on USB</li>
                  <li>1 staff member had access to all assets</li>
                  <li>Constant risk of internal embezzlement</li>
                </ul>
                <p><strong>After MPC 2-of-3:</strong></p>
                <ul>
                  <li>CEO + CTO + backup key configuration</li>
                  <li>CEO+CTO approval required for withdrawals over 1B KRW</li>
                  <li>All approval records stored on blockchain</li>
                </ul>
                <p className="text-lg font-semibold mt-4">
                  Final Result: Internal controls significantly strengthened, successfully blocked 3 hacking attempts.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Pricing</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet (MPC 2-of-3)</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                <p className="text-lg mb-4">First month free • Dedicated manager support</p>
                <ul className="mb-6 space-y-2">
                  <li>MPC 2-of-3 security completely eliminates single points of failure.</li>
                  <li>Supports both ECDSA and EdDSA algorithms for compatibility with all major blockchains.</li>
                  <li>Multi-approval workflow applies differentiated approval rules by amount.</li>
                  <li>Policy-based governance system systematically manages internal controls.</li>
                  <li>All transactions and approval processes are perfectly audit-trailed for transparency.</li>
                  <li>24/7 technical support team available anytime for assistance.</li>
                </ul>
                <Link
                  href="/custody-wallet"
                  className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Start Free
                </Link>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Secure Your Assets with MPC</h3>
                <p className="mb-6">
                  Custom quotes for storage over 10B KRW. Establish optimal security strategy with free consultation.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Free Security Consultation
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === 'ko' ? '관련 글' : 'Related Articles'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? '기업용 암호화폐 지갑 선택 가이드' : 'Enterprise Crypto Wallet Selection Guide'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? 'Non-Custody vs Custody' : 'Non-Custody vs Custody'}
              </p>
            </Link>
            <Link href="/blog/non-custody-vs-custody-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? '지갑 비교 가이드' : 'Wallet Comparison Guide'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '어떤 지갑이 필요할까?' : 'Which wallet do you need?'}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
