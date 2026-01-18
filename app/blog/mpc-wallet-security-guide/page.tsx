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

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">재해 복구 시나리오</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 1: Key Share 1개 분실</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <p><strong>문제:</strong> CEO의 스마트폰 분실로 Key Share #1 접근 불가</p>
                <p><strong>해결:</strong></p>
                <ol>
                  <li>CFO + 백업 키(Key Share #2 + #3)로 즉시 운영 재개</li>
                  <li>새 Key Share #1 생성 및 CEO에게 재발급</li>
                  <li>옵션: 기존 키 폐기하고 완전히 새 3개 키 생성</li>
                </ol>
                <p><strong>결과:</strong> 업무 중단 없음, 자산 손실 없음</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 2: Key Share 1개 탈취</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p><strong>문제:</strong> 해커가 Key Share #2를 탈취</p>
                <p><strong>해결:</strong></p>
                <ol>
                  <li>Key Share #2 즉시 폐기 (blacklist 등록)</li>
                  <li>해커는 1개 키만으로는 아무것도 못 함 (2개 필요)</li>
                  <li>CEO + 백업 키로 운영 계속</li>
                  <li>새 Key Share 3개 세트 생성 및 자산 이전</li>
                </ol>
                <p><strong>결과:</strong> 자산 손실 없음, 해커는 무용지물</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 3: 회사 서버 전체 다운</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border-l-4 border-green-500">
                <p><strong>문제:</strong> 사무실 화재로 모든 서버 소실</p>
                <p><strong>해결:</strong></p>
                <ol>
                  <li>Key Share #3은 오프라인 백업 (은행 금고 보관)</li>
                  <li>CEO/CFO의 모바일 Key Share는 클라우드 암호화 백업</li>
                  <li>새 서버 구축 후 Key Share 복구</li>
                  <li>정상 운영 재개</li>
                </ol>
                <p><strong>결과:</strong> 완전 복구 가능</p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">보안 베스트 프랙티스</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Key Share 보관 원칙</h3>
              <ul className="space-y-2">
                <li><strong>물리적 분리</strong>: 3개의 키를 서로 다른 물리적 장소에 보관하여 한 곳이 침해되어도 안전합니다.</li>
                <li><strong>역할 분리</strong>: 각 키를 서로 다른 책임자가 관리하도록 하여 내부 통제를 강화합니다.</li>
                <li><strong>다양한 형태</strong>: 모바일 기기, 하드웨어 키, 오프라인 백업 등 다양한 형태로 보관합니다.</li>
                <li><strong>정기 테스트</strong>: 월 1회 정기적으로 복구 테스트를 실시하여 비상 상황에 대비합니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">추천 구성</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <ul className="space-y-4">
                  <li>
                    <strong>Key Share #1:</strong> CEO 스마트폰 (생체인증)<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">클라우드 암호화 백업, 2FA 필수</span>
                  </li>
                  <li>
                    <strong>Key Share #2:</strong> CFO 하드웨어 키 (YubiKey)<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">물리적 장치, 분실 시 즉시 폐기 가능</span>
                  </li>
                  <li>
                    <strong>Key Share #3:</strong> 오프라인 백업 (은행 금고)<br/>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Ledger 하드웨어 지갑 or 종이 백업</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 도입 사례</h2>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Case: 암호화폐 거래소 K</h3>
                <p><strong>Before MPC:</strong></p>
                <ul>
                  <li>콜드월렛: 단일 개인키 USB 보관</li>
                  <li>담당자 1명이 전액 접근 가능</li>
                  <li>내부 횡령 위험 상존</li>
                </ul>
                <p><strong>After MPC 2-of-3:</strong></p>
                <ul>
                  <li>CEO + CTO + 백업 키 구성</li>
                  <li>10억 원 이상 출금 시 CEO+CTO 필수 승인</li>
                  <li>모든 승인 기록 블록체인에 기록</li>
                </ul>
                <p className="text-lg font-semibold mt-4">
                  최종 결과: 내부 통제가 크게 강화되었고, 실제로 해킹 시도 3건을 성공적으로 차단할 수 있었습니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet (MPC)</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
                <p className="text-lg mb-4">첫 달 무료 • 전담 매니저 지원</p>
                <ul className="mb-6 space-y-2">
                  <li>MPC 보안 방식으로 단일 실패점을 완전히 제거했습니다.</li>
                  <li>ECDSA와 EdDSA 알고리즘을 모두 지원하여 모든 주요 블록체인과 호환됩니다.</li>
                  <li>다중 승인 워크플로우를 통해 금액별로 차등화된 승인 규칙을 적용할 수 있습니다.</li>
                  <li>정책 기반 거버넌스 시스템으로 내부 통제를 체계적으로 관리합니다.</li>
                  <li>모든 거래와 승인 과정이 완벽하게 감사 추적되어 투명성이 보장됩니다.</li>
                  <li>24시간 연중무휴 기술 지원팀이 대기하고 있어 언제든지 도움을 받을 수 있습니다.</li>
                </ul>
                <Link
                  href="/custody-wallet"
                  className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  무료로 시작하기
                </Link>
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
