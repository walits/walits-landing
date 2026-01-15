'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NonCustodyVsCustodyWalletPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      breadcrumbCategory: '지갑 비교',
      title: 'Non-Custody vs Custody 지갑 완벽 비교',
      date: '2026년 1월 11일',
      readTime: '6분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      breadcrumb: 'Blog',
      breadcrumbCategory: 'Wallet Comparison',
      title: 'Non-Custody vs Custody Wallet: Complete Comparison',
      date: 'January 11, 2026',
      readTime: '6 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/blog/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {copy.backToBlog}
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
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {copy.breadcrumb} / {copy.breadcrumbCategory}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>{copy.date}</time>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/wallet-comparison.jpg"
            alt={copy.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                암호화폐 지갑을 선택할 때 가장 먼저 마주하는 선택: Non-Custody vs Custody.
                이 두 가지는 완전히 다른 목적과 구조를 가지고 있습니다. 한눈에 비교해드립니다.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">핵심 차이점</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">구분</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Non-Custody</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Custody</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">자산 보관</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">일반용</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">수탁용</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">개인키 관리</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">TEE, MPC</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">MPC</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">주요 용도</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">대량 지급/배포</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">안전한 자산 보관</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">규제 리스크</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">낮음 (집금 없음)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">높음 (자산 보관)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">처리 속도</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">매우 빠름</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">다중 승인 필요</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">가격</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">₩99,000/월</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">₩550,000/월</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Non-Custody 지갑 상세</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">작동 방식</h3>
              <p>
                Non-Custody 지갑은 <strong>Virtual Balance + Account 시스템</strong>으로 작동합니다.
                고객의 고객(최종 사용자)별로 계정을 생성하고, 계정 생성 시 온체인 주소를 선택적으로 등록할 수 있습니다.
                이를 통해 세 가지 서로 다른 작동 모드를 지원합니다.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg my-8 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">세 가지 작동 모드</h4>

                <div className="space-y-6">
                  {/* 모드 1 */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">모드 1</span>
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white">포인트 지급 (Virtual Balance)</h5>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      가장 많이 사용되는 모드입니다. DB에만 기록하고 온체인 트랜잭션은 발생하지 않습니다.
                      따라서 가스비가 전혀 들지 않으며, 수백만 건의 거래도 즉시 처리할 수 있습니다.
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Virtual Balance</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">DB에만 기록</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 가스비</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">$0 (무료)</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 처리 속도</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">즉시</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 확장성</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">무제한</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      <strong>사용 케이스:</strong> 게임 보상, 출석 체크, 이벤트 리워드
                    </p>
                  </div>

                  {/* 모드 2 */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">모드 2</span>
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white">개별 출금 (Virtual → 온체인)</h5>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      최종 사용자가 자신의 Virtual Balance를 실제 암호화폐로 출금할 때 사용합니다.
                      사용자의 Virtual Balance가 차감되고, Master Wallet에서 사용자가 지정한 지갑 주소로 실제 암호화폐가 전송됩니다.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Virtual Balance</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">차감됨</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 온체인 전송</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">사용자 지갑으로</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 가스비</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">~$1</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 트랜잭션</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">1건</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      <strong>사용 케이스:</strong> 사용자가 게임 포인트를 실제 토큰으로 출금
                    </p>
                  </div>

                  {/* 모드 3 */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">모드 3</span>
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white">대량 에어드랍 (Account 주소 → 온체인)</h5>
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded">Ethereum만 지원</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      계정 생성 시 등록한 온체인 주소로 직접 토큰을 대량 전송합니다. Virtual Balance는 건드리지 않습니다.
                      현재 Ethereum 네트워크에서만 BatchTransfer 기능을 제공합니다. 주소를 미리 등록한 계정에만 전송되며,
                      수백~수천 명에게 한 번의 트랜잭션으로 일괄 전송할 수 있습니다.
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Virtual Balance</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">변화 없음</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 온체인 전송</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">등록된 주소로 직접</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 가스비</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">~$10-100 (수량에 따라)</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ 트랜잭션</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">1건 (BatchTransfer)</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      <strong>사용 케이스:</strong> NFT 홀더 에어드랍, 투자자 배당, 커뮤니티 리워드
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>💡 핵심 포인트:</strong> 회사는 자산을 집금하지 않습니다. Master Wallet의 자산은 회사가 미리 준비한 것으로,
                    사용자에게 지급/출금/에어드랍할 때만 사용됩니다. 따라서 금융 규제 대상이 아닙니다.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">언제 사용?</h3>
              <ul className="space-y-2">
                <li>게임에서 플레이어들에게 보상을 대량으로 지급해야 할 때 가장 효과적입니다.</li>
                <li>NFT 리워드를 수천 명의 참가자에게 대량으로 지급할 때 적합합니다.</li>
                <li>ICO나 토큰 발행 프로젝트에서 투자자들에게 토큰을 배포하는 용도로 활용할 수 있습니다.</li>
                <li>메타버스 플랫폼에서 유저들에게 리워드를 실시간으로 지급하는 시스템에 최적화되어 있습니다.</li>
                <li>대규모 마케팅 프로모션에서 참여자들에게 보상을 즉시 지급하고 싶을 때 유용합니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">장점</h3>
              <ul>
                <li><strong>규제 리스크 최소화</strong>: 고객 자산을 집금하지 않아 금융 규제 대상 아님</li>
                <li><strong>빠른 처리</strong>: 다중 승인 불필요, API로 즉시 처리</li>
                <li><strong>무제한 확장</strong>: 사용자 수 무제한, 트랜잭션 무제한</li>
                <li><strong>저렴한 비용</strong>: 월 ₩99,000 (무제한 사용)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">단점</h3>
              <ul>
                <li><strong>대량 자산 보관 부적합</strong>: 수백억 원 보관에는 Custody가 더 안전</li>
                <li><strong>거버넌스 약함</strong>: 다중 승인 같은 내부 통제 시스템 없음</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Custody 지갑 상세</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">작동 방식</h3>
              <p className="mb-6">
                Custody 지갑은 두 가지 독립적인 보안 레이어로 작동합니다:
                <strong>암호학적 키 분산 (MPC)</strong>과 <strong>비즈니스 정책 (승인 워크플로우)</strong>입니다.
              </p>

              <div className="space-y-6">
                {/* 레이어 1: MPC 키 분산 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white">레이어 1: 암호학적 키 분산 (MPC 2-of-3)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    개인키를 3개의 조각으로 분산하여 보관합니다. 서명할 때 3개 중 2개만 있으면 가능하므로,
                    하나가 분실되어도 안전합니다. 단일 실패점이 없습니다.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
{`메인 콜드월렛: 0xAAAA...BBBB
 ├─ Key Share 1: Walits 서버 (AWS KMS)
 ├─ Key Share 2: 고객사 서버 (자체 관리)
 └─ Key Share 3: 백업 (오프라인 하드웨어 지갑)

✓ 3개 중 2개로 서명 가능
✓ 1개 분실해도 복구 가능
✓ 해커가 1개만 탈취해도 무용지물`}
                    </pre>
                  </div>
                </div>

                {/* 레이어 2: 승인 워크플로우 */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white">레이어 2: 비즈니스 정책 (승인 워크플로우)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    MPC와 별개로, 백엔드에서 인증과 MFA 기반의 승인 정책을 관리합니다.
                    CEO, CFO 등이 로그인하고 MFA 인증을 거쳐 승인해야만 트랜잭션이 실행됩니다.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
{`출금 요청: 1억 원 출금
 ↓
CEO 로그인 → MFA 인증 → 승인 ✓
 ↓
CFO 로그인 → MFA 인증 → 승인 ✓
 ↓
백엔드 정책 엔진: 2-of-2 승인 완료 확인
 ↓
MPC 서명 시작 (Key Share 1 + Key Share 2)
 ↓
트랜잭션 실행 → 블록체인 전송

✓ 인증 + MFA 기반
✓ 금액별 승인 규칙 설정 가능
✓ 완벽한 감사 추적`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-5 rounded-lg border border-purple-300 dark:border-purple-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 핵심:</strong> MPC는 암호학적 보안, 승인 워크플로우는 비즈니스 정책입니다.
                  둘은 독립적으로 작동하며, 함께 사용하면 최고 수준의 보안과 거버넌스를 제공합니다.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">언제 사용?</h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Custody 지갑은 크게 두 가지 시나리오에서 필수적입니다: <strong>타인의 자산을 위탁 관리하는 수탁 비즈니스</strong>와
                <strong>암호화폐로 재무를 운영하는 일반 기업</strong>입니다.
              </p>

              <div className="space-y-8">
                {/* 카테고리 A: 수탁 비즈니스 */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">A. 수탁 비즈니스 (타인 자산 관리)</h4>
                  <div className="space-y-4 pl-4 border-l-4 border-purple-300 dark:border-purple-700">
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">1. 암호화폐 거래소</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        수천 명의 고객 자산을 보관하는 거래소의 콜드월렛. 고객 입출금은 별도 핫월렛으로 처리하고,
                        대량 자산은 Custody에서 MPC 2-of-3로 안전하게 보관합니다.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>승인 예시:</strong> 1억 원 이상 출금 시 CEO + CTO 승인 필수
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">2. 디지털 자산 은행</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        기관 고객(기업, 펀드)의 암호화폐를 위탁 관리하는 서비스. 고객별로 논리적으로 분리된 계정을 생성하고,
                        출금 시 고객 승인 + 은행 내부 승인을 동시에 받아 이중 안전장치를 구축합니다.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>규제 대응:</strong> 감사 추적 완벽 보존, 금융당국 보고 자동화
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">3. 가족 자산 관리 서비스 (Family Office)</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        고액 자산가의 암호화폐 포트폴리오를 위탁 관리. 자산가 본인 + 재무 어드바이저 승인으로 투자 집행.
                        상속 계획에 따라 다중 서명 권한을 가족 구성원에게 배분할 수 있습니다.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>사용 케이스:</strong> 100억 원 이상 자산가의 BTC, ETH 장기 보관
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">4. NFT 마켓플레이스 에스크로</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        고가 NFT 거래 시 마켓플레이스가 중간에서 에스크로 역할. 구매자가 대금 입금 → 판매자가 NFT 전송 확인 →
                        마켓플레이스 운영팀이 검증 후 승인 → 자동 정산. 분쟁 발생 시 다중 승인으로 해결.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>신뢰 구축:</strong> 판매자/구매자 모두 안심할 수 있는 제3자 보관
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">5. 기업 연금 펀드 관리</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        직원 퇴직연금의 일부를 암호화폐로 운용하는 기업. 연금 위원회 + 투자 담당자 + 준법감시인 3자 승인으로
                        투자 집행. 모든 거래가 온체인에 기록되어 투명성 확보.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>규제 준수:</strong> 금융감독원 보고 자료 자동 생성
                      </p>
                    </div>
                  </div>
                </div>

                {/* 카테고리 B: 기업 재무 운영 */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">B. 기업 재무 운영 (자사 자산 관리)</h4>
                  <div className="space-y-4 pl-4 border-l-4 border-blue-300 dark:border-blue-700">
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">1. 직원 급여 지급</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        매월 1일, 200명의 직원에게 암호화폐로 월급 지급. HR팀이 급여 명세서 작성 → CFO 승인 → 일괄 송금.
                        지역별로 다른 스테이블코인 사용 (한국: USDT, 미국: USDC, 유럽: EURC).
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>효율성:</strong> 국제 송금 수수료 제로, 급여일 당일 즉시 입금
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">2. 세금 납부</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        부가세, 법인세를 암호화폐로 직접 납부 (정부가 암호화폐 납부를 허용하는 미래 시나리오).
                        회계사가 세액 계산 → CFO 검토 → CEO 최종 승인 → 국세청 지갑으로 전송.
                        모든 과정이 블록체인에 기록되어 세무 감사 시 투명하게 증명.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>감사 추적:</strong> 영수증 대신 온체인 트랜잭션 해시 제출
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">3. 공급업체 결제</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        월말 정산 시 50개 협력사에게 대금 지급. 구매팀이 검수 완료 → 재무팀이 금액 확인 →
                        CFO 승인 → BatchTransfer로 일괄 송금. 해외 공급업체도 은행 수수료 없이 즉시 송금.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>비용 절감:</strong> 국제 송금 수수료 연간 수천만 원 절감
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">4. 투자 포트폴리오 관리</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        회사 유동성의 20%를 DeFi 수익 상품에 투자. 투자위원회(CEO, CFO, CTO)가 주 1회 회의 →
                        투자 결정 → 3명 모두 승인 시에만 스마트 컨트랙트 실행.
                        연 5-10% 수익률로 회사 재무 건전성 강화.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>리스크 관리:</strong> 투자 한도 설정, 손실 시 자동 청산 규칙
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">5. 다국적 자금 이동</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        한국 본사에서 미국 지사로 운영비 10억 원 송금. 은행을 거치면 3-5일 + 수수료 100만 원.
                        Custody 지갑으로는 CEO + CFO 승인만으로 10분 안에 송금 완료. 수수료 1만 원 미만.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>속도:</strong> 은행 송금 대비 99% 빠름, 비용 99% 절감
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">6. DAO 재무 관리</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        탈중앙화 자율 조직(DAO)의 재무 관리. 커뮤니티가 투표로 예산안 통과 →
                        선출된 재무 위원 3명이 다중 서명으로 집행. 모든 지출이 온체인에 투명하게 공개되어
                        커뮤니티가 실시간 모니터링 가능.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>투명성:</strong> 예산 집행 내역 100% 온체인 공개
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">7. 스타트업 투자금 관리</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        VC로부터 받은 100억 원 투자금을 안전하게 보관하고 체계적으로 집행.
                        5천만 원 이상 지출 시 CEO + 이사회 의장 승인 필요. 번다운 레이트를 추적하여
                        런웨이(남은 운영 기간)를 실시간으로 계산.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>투자자 신뢰:</strong> 자금 사용 내역을 투자자에게 투명하게 공개
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">8. 토큰 발행사 재무 관리</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        자사가 발행한 토큰 중 회사 보유분(Treasury)을 안전하게 보관.
                        마케팅 에어드랍, 파트너십 지급, 팀 베스팅 등 용도별로 지갑을 분리하고
                        각각 다른 승인 규칙 적용. 토큰 가격에 영향을 주는 대량 매도는 이사회 승인 필수.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>토큰 이코노미 보호:</strong> 무분별한 토큰 유통 방지
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">💼 미래는 이미 시작되었습니다</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  많은 Web3 기업들은 이미 급여, 투자, 결제를 암호화폐로 처리하고 있습니다.
                  전통 기업들도 점차 암호화폐를 재무에 통합하는 추세입니다.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Custody 지갑은 단순한 보관 솔루션이 아니라, <strong>암호화폐 기반 재무 운영을 위한 필수 인프라</strong>입니다.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">장점</h3>
              <ul>
                <li><strong>최고 수준 보안</strong>: MPC 2-of-3로 단일 실패점 제거</li>
                <li><strong>강력한 거버넌스</strong>: 금액별 승인 규칙, 다중 승인 워크플로우</li>
                <li><strong>완벽한 감사 추적</strong>: 모든 거래 이력, 승인 기록 저장</li>
                <li><strong>컴플라이언스</strong>: 금융기관급 규제 대응</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">단점</h3>
              <ul>
                <li><strong>높은 비용</strong>: 월 ₩550,000</li>
                <li><strong>느린 처리</strong>: 다중 승인 필요로 즉시 실행 불가</li>
                <li><strong>규제 대상</strong>: 고객 자산 보관으로 금융 규제 적용</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">시나리오별 선택 가이드</h2>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q1. 게임 보상을 10만 명에게 지급하고 싶어요</h4>
                  <p className="mb-2"><strong>답변:</strong> Non-Custody 지갑</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    이유: 대량 지급이 핵심. API로 자동화 가능하고, 집금 없어 규제 리스크 낮음.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q2. 거래소 고객 자산 100억 원을 보관해야 해요</h4>
                  <p className="mb-2"><strong>답변:</strong> Custody 지갑</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    이유: 대량 자산 보관이 핵심. MPC 2-of-3로 최고 수준 보안 제공. 다중 승인으로 내부 통제 강화.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q3. ICO로 5만 명에게 토큰을 발행해야 해요</h4>
                  <p className="mb-2"><strong>답변:</strong> Non-Custody 지갑</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    이유: 투자자별 자동 지갑 생성 + 대량 토큰 배포. API로 5분 만에 5만 건 처리 가능.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q4. 회사 재무 자금 50억 원을 안전하게 관리하고 싶어요</h4>
                  <p className="mb-2"><strong>답변:</strong> Custody 지갑</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    이유: 재무 관리는 보안과 거버넌스가 핵심. CEO/CFO 다중 승인으로 횡령 방지.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q5. 둘 다 필요해요!</h4>
                  <p className="mb-2"><strong>답변:</strong> 두 가지 모두 사용</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Non-Custody로 일일 운영 (보상 지급, 대량 배포) + Custody로 재무 자금 보관. 많은 기업이 이렇게 사용합니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">비용 비교</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Non-Custody</h3>
                  <div className="text-4xl font-bold mb-4">₩99,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
                  <ul className="space-y-2 mb-6">
                    <li>지갑을 개수 제한 없이 무제한으로 생성할 수 있습니다.</li>
                    <li>트랜잭션 처리 횟수에 제한이 없어 자유롭게 사용하실 수 있습니다.</li>
                    <li>ICO나 토큰 발행 프로젝트를 완벽하게 지원합니다.</li>
                    <li>RESTful API를 통해 시스템 통합이 간편합니다.</li>
                    <li>Webhook 기능으로 실시간 이벤트 알림을 받을 수 있습니다.</li>
                  </ul>
                  <Link href="/non-custody-wallet" className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    자세히 보기
                  </Link>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Custody</h3>
                  <div className="text-4xl font-bold mb-4">₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
                  <ul className="space-y-2 mb-6">
                    <li>MPC 2-of-3 보안 방식으로 단일 실패점을 완전히 제거했습니다.</li>
                    <li>다중 승인 시스템으로 금액별 승인 규칙을 유연하게 설정할 수 있습니다.</li>
                    <li>정책 기반 거버넌스를 통해 내부 통제를 강화할 수 있습니다.</li>
                    <li>모든 거래가 완벽하게 감사 추적되어 투명성이 보장됩니다.</li>
                    <li>전담 매니저가 배정되어 기술 지원과 운영 컨설팅을 제공합니다.</li>
                  </ul>
                  <Link href="/custody-wallet" className="block text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    자세히 보기
                  </Link>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">결론</h2>
              <p>
                <strong>핵심 질문 하나로 결정하세요:</strong>
              </p>
              <ul className="space-y-2">
                <li><strong>대량 지급이나 배포가 주요 목적이라면:</strong> Non-Custody 지갑을 선택하시는 것이 가장 효율적입니다. 게임 보상, NFT 리워드 지급, ICO 토큰 배포 등에 최적화되어 있습니다.</li>
                <li><strong>대량 자산의 안전한 보관이 주요 목적이라면:</strong> Custody 지갑을 선택하시는 것이 권장됩니다. 거래소 운영, 기업 재무 관리, 기관 투자자의 자산 보관 등에 적합합니다.</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">어떤 지갑이 필요한지 고민되시나요?</h3>
                <p className="mb-6">
                  무료 상담으로 귀사에 딱 맞는 솔루션을 찾아드립니다.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  무료 상담 신청
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                When choosing a cryptocurrency wallet, you first face this choice: Non-Custody vs Custody.
                These two have completely different purposes and structures. Here's a quick comparison.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Key Differences</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Category</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Non-Custody</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Custody</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Asset Storage</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">General Use</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Custodial</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Private Key</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">TEE, MPC</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">MPC</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Main Use</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Mass Payments/Distribution</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Secure Asset Storage</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Regulatory Risk</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Low (No custody)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">High (Asset custody)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Processing Speed</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Very Fast</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Multi-approval Required</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Price</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">₩99,000/month</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">₩550,000/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Non-Custody Wallet Details</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How It Works</h3>
              <p>
                Non-Custody wallet operates with a <strong>Virtual Balance + Account System</strong>.
                You create accounts for each end-user and can optionally register on-chain addresses during account creation.
                This supports three different operating modes.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg my-8 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Three Operating Modes</h4>

                <div className="space-y-6">
                  {/* Mode 1 */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">Mode 1</span>
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white">Point Distribution (Virtual Balance)</h5>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      The most commonly used mode. Records only in DB with no on-chain transactions.
                      Therefore, no gas fees and millions of transactions can be processed instantly.
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Virtual Balance</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">DB only</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Gas Fee</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">$0 (Free)</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Processing Speed</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">Instant</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Scalability</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">Unlimited</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      <strong>Use Cases:</strong> Game rewards, attendance checks, event rewards
                    </p>
                  </div>

                  {/* Mode 2 */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">Mode 2</span>
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white">Individual Withdrawal (Virtual → On-chain)</h5>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Used when end-users withdraw their Virtual Balance as real cryptocurrency.
                      User's Virtual Balance is deducted and real crypto is sent from Master Wallet to user's specified address.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Virtual Balance</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">Deducted</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ On-chain Transfer</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">To user wallet</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Gas Fee</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">~$1</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Transaction</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">1 tx</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      <strong>Use Cases:</strong> User withdraws game points to real tokens
                    </p>
                  </div>

                  {/* Mode 3 */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">Mode 3</span>
                      <h5 className="font-bold text-lg text-gray-900 dark:text-white">Mass Airdrop (Account Address → On-chain)</h5>
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded">Ethereum Only</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Directly transfers tokens in bulk to on-chain addresses registered during account creation. Virtual Balance is untouched.
                      Currently supports BatchTransfer only on Ethereum network. Sends to pre-registered addresses only,
                      enabling bulk transfers to hundreds or thousands in a single transaction.
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Virtual Balance</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">No change</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ On-chain Transfer</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">Direct to registered addresses</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Gas Fee</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">~$10-100 (varies by quantity)</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">✓ Transaction</p>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">1 tx (BatchTransfer)</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      <strong>Use Cases:</strong> NFT holder airdrops, investor dividends, community rewards
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>💡 Key Point:</strong> The company doesn't custody customer assets. Master Wallet assets are pre-funded by the company
                    and only used for payments/withdrawals/airdrops to users. Therefore, not subject to financial regulations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">When to Use?</h3>
              <ul className="space-y-2">
                <li>Most effective when distributing mass rewards to game players.</li>
                <li>Ideal for distributing NFT rewards to thousands of participants.</li>
                <li>Can be used for token distribution in ICO or token issuance projects.</li>
                <li>Optimized for metaverse platforms distributing real-time rewards to users.</li>
                <li>Useful for instantly distributing rewards in large-scale marketing promotions.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Advantages</h3>
              <ul>
                <li><strong>Minimal Regulatory Risk</strong>: No customer asset custody means not subject to financial regulations</li>
                <li><strong>Fast Processing</strong>: No multi-approval needed, instant via API</li>
                <li><strong>Unlimited Scaling</strong>: Unlimited users, unlimited transactions</li>
                <li><strong>Low Cost</strong>: ₩99,000/month (unlimited usage)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Disadvantages</h3>
              <ul>
                <li><strong>Not for Large Asset Storage</strong>: Custody is safer for storing billions of won</li>
                <li><strong>Weak Governance</strong>: No internal controls like multi-approval</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Custody Wallet Details</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How It Works</h3>
              <p className="mb-6">
                Custody wallet operates with two independent security layers:
                <strong>Cryptographic Key Distribution (MPC)</strong> and <strong>Business Policy (Approval Workflow)</strong>.
              </p>

              <div className="space-y-6">
                {/* Layer 1: MPC */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Layer 1: Cryptographic Key Distribution (MPC 2-of-3)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Private key is distributed into 3 shares. Only 2 of 3 shares are needed for signing,
                    so it's safe even if one is lost. No single point of failure.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
{`Main Cold Wallet: 0xAAAA...BBBB
 ├─ Key Share 1: Walits Server (AWS KMS)
 ├─ Key Share 2: Client Server (Self-managed)
 └─ Key Share 3: Backup (Offline Hardware Wallet)

✓ Sign with 2 of 3 shares
✓ Recoverable if 1 share lost
✓ Useless if hacker gets only 1 share`}
                    </pre>
                  </div>
                </div>

                {/* Layer 2: Approval Workflow */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Layer 2: Business Policy (Approval Workflow)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    Separately from MPC, backend manages approval policies based on authentication and MFA.
                    Transaction executes only after CEO, CFO, etc. login and approve with MFA.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
{`Withdrawal Request: $1M withdrawal
 ↓
CEO Login → MFA Auth → Approve ✓
 ↓
CFO Login → MFA Auth → Approve ✓
 ↓
Backend Policy Engine: 2-of-2 approval confirmed
 ↓
MPC Signing Starts (Key Share 1 + Key Share 2)
 ↓
Transaction Execution → Blockchain Transfer

✓ Authentication + MFA based
✓ Amount-based approval rules configurable
✓ Perfect audit trail`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-5 rounded-lg border border-purple-300 dark:border-purple-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>💡 Key Point:</strong> MPC provides cryptographic security, approval workflow provides business policy.
                  They operate independently and together provide highest level of security and governance.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">When to Use?</h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Custody wallet is essential in two scenarios: <strong>custodial business managing others' assets</strong> and
                <strong>general companies operating treasury with crypto</strong>.
              </p>

              <div className="space-y-8">
                {/* Category A: Custodial Business */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">A. Custodial Business (Managing Others' Assets)</h4>
                  <div className="space-y-4 pl-4 border-l-4 border-purple-300 dark:border-purple-700">
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">1. Crypto Exchange</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Cold wallet storing thousands of customers' assets. Customer deposits/withdrawals handled by separate hot wallet,
                        bulk assets safely stored in Custody with MPC 2-of-3.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Approval Example:</strong> CEO + CTO approval required for withdrawals over $100K
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">2. Digital Asset Bank</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Service managing institutional clients' (companies, funds) crypto. Creates logically separated accounts per client,
                        requires both client approval + bank internal approval for withdrawals as double safety.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Regulatory Compliance:</strong> Perfect audit trail preservation, automated financial authority reporting
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">3. Family Office Asset Management</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Manages HNWI's crypto portfolio. Investment execution with asset owner + financial advisor approval.
                        Can distribute multi-signature authority to family members according to inheritance plan.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Use Case:</strong> Long-term BTC, ETH storage for $10M+ net worth individuals
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">4. NFT Marketplace Escrow</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Marketplace acts as escrow for high-value NFT trades. Buyer deposits → Seller transfers NFT →
                        Marketplace team verifies and approves → Auto settlement. Multi-approval resolves disputes.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Trust Building:</strong> Third-party custody both sellers/buyers can trust
                      </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">5. Corporate Pension Fund Management</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Companies investing portion of employee retirement pension in crypto. Investment execution requires approval from
                        pension committee + investment officer + compliance officer. All trades recorded on-chain for transparency.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Compliance:</strong> Auto-generation of financial supervisory reporting materials
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category B: Corporate Treasury */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">B. Corporate Treasury (Managing Own Assets)</h4>
                  <div className="space-y-4 pl-4 border-l-4 border-blue-300 dark:border-blue-700">
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">1. Employee Salary Payment</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Pay 200 employees in crypto on the 1st of each month. HR creates payroll → CFO approves → Batch transfer.
                        Use different stablecoins by region (Korea: USDT, US: USDC, Europe: EURC).
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Efficiency:</strong> Zero international transfer fees, instant same-day payment
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">2. Tax Payment</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Pay VAT, corporate tax directly in crypto (future scenario where government accepts crypto).
                        Accountant calculates tax → CFO reviews → CEO final approval → Transfer to tax authority wallet.
                        All recorded on blockchain for transparent tax audit proof.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Audit Trail:</strong> Submit on-chain transaction hash instead of receipt
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">3. Supplier Payment</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Monthly settlement to 50 vendors. Purchasing team completes inspection → Finance confirms amount →
                        CFO approval → BatchTransfer for bulk payment. International vendors paid instantly with no bank fees.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Cost Savings:</strong> Save millions annually in international transfer fees
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">4. Investment Portfolio Management</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Invest 20% of company liquidity in DeFi yield products. Investment committee (CEO, CFO, CTO) meets weekly →
                        Investment decision → Smart contract executes only with all 3 approvals.
                        5-10% annual yield strengthens company financial health.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Risk Management:</strong> Investment limits, auto-liquidation rules on losses
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">5. Multinational Fund Transfer</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Transfer $1M operating funds from Korea HQ to US subsidiary. Via bank: 3-5 days + $1K fee.
                        Via Custody wallet: CEO + CFO approval completes transfer in 10 minutes. Fee under $10.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Speed:</strong> 99% faster than bank transfer, 99% cost reduction
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">6. DAO Treasury Management</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Decentralized Autonomous Organization treasury management. Community votes to pass budget →
                        3 elected treasury committee members execute via multi-sig. All spending publicly visible on-chain
                        for real-time community monitoring.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Transparency:</strong> 100% on-chain public disclosure of budget execution
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">7. Startup Investment Fund Management</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Safely store and systematically execute $10M VC investment. CEO + board chairman approval required for spending over $50K.
                        Track burn rate to calculate runway (remaining operating time) in real-time.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Investor Trust:</strong> Transparently disclose fund usage to investors
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">8. Token Issuer Treasury Management</h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Safely store company's portion of issued tokens (Treasury).
                        Separate wallets by purpose (marketing airdrop, partnership payment, team vesting) with
                        different approval rules. Board approval required for large sales affecting token price.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        <strong>Token Economy Protection:</strong> Prevent uncontrolled token circulation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">💼 The Future Has Already Begun</h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Many Web3 companies already process salaries, investments, and payments in crypto.
                  Traditional companies are also gradually integrating crypto into treasury operations.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Custody wallet is not just a storage solution, but <strong>essential infrastructure for crypto-based treasury operations</strong>.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Advantages</h3>
              <ul>
                <li><strong>Highest Security</strong>: MPC 2-of-3 eliminates single point of failure</li>
                <li><strong>Strong Governance</strong>: Amount-based approval rules, multi-approval workflow</li>
                <li><strong>Perfect Audit Trail</strong>: All transaction history and approval records stored</li>
                <li><strong>Compliance</strong>: Financial institution-grade regulatory compliance</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Disadvantages</h3>
              <ul>
                <li><strong>High Cost</strong>: ₩550,000/month</li>
                <li><strong>Slow Processing</strong>: Cannot execute immediately due to multi-approval requirement</li>
                <li><strong>Regulatory Subject</strong>: Financial regulations apply due to customer asset custody</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Selection Guide by Scenario</h2>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q1. I want to distribute game rewards to 100K players</h4>
                  <p className="mb-2"><strong>Answer:</strong> Non-Custody Wallet</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reason: Mass distribution is key. API automation possible, low regulatory risk with no custody.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q2. I need to store $10M of exchange customer assets</h4>
                  <p className="mb-2"><strong>Answer:</strong> Custody Wallet</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reason: Large asset storage is key. Highest security with MPC 2-of-3. Strengthen internal controls with multi-approval.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q3. I need to issue tokens to 50K people via ICO</h4>
                  <p className="mb-2"><strong>Answer:</strong> Non-Custody Wallet</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reason: Auto wallet creation per investor + mass token distribution. Process 50K transactions in 5 minutes via API.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q4. I want to safely manage $5M company treasury funds</h4>
                  <p className="mb-2"><strong>Answer:</strong> Custody Wallet</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reason: Treasury management requires security and governance. CEO/CFO multi-approval prevents embezzlement.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q5. I need both!</h4>
                  <p className="mb-2"><strong>Answer:</strong> Use Both</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Non-Custody for daily operations (reward distribution, mass distribution) + Custody for treasury storage. Many companies use this approach.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Cost Comparison</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Non-Custody</h3>
                  <div className="text-4xl font-bold mb-4">₩99,000<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                  <ul className="space-y-2 mb-6">
                    <li>Unlimited wallet creation with no restrictions</li>
                    <li>Unlimited transaction processing</li>
                    <li>Full support for ICO and token issuance projects</li>
                    <li>Easy system integration via RESTful API</li>
                    <li>Real-time event notifications via Webhook</li>
                  </ul>
                  <Link href="/non-custody-wallet" className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </Link>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Custody</h3>
                  <div className="text-4xl font-bold mb-4">₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                  <ul className="space-y-2 mb-6">
                    <li>MPC 2-of-3 security completely eliminates single point of failure</li>
                    <li>Multi-approval system with flexible amount-based approval rules</li>
                    <li>Policy-based governance strengthens internal controls</li>
                    <li>Perfect audit trail guarantees transparency</li>
                    <li>Dedicated account manager provides technical support and operational consulting</li>
                  </ul>
                  <Link href="/custody-wallet" className="block text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Conclusion</h2>
              <p>
                <strong>Decide with one key question:</strong>
              </p>
              <ul className="space-y-2">
                <li><strong>If mass distribution is your main purpose:</strong> Non-Custody wallet is most efficient. Optimized for game rewards, NFT reward distribution, ICO token distribution.</li>
                <li><strong>If secure storage of large assets is your main purpose:</strong> Custody wallet is recommended. Suitable for exchange operations, corporate treasury management, institutional investor asset storage.</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Not sure which wallet you need?</h3>
                <p className="mb-6">
                  Free consultation to find the perfect solution for your company.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Free Consultation
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
                {language === 'ko' ? '8분 만에 완벽 정리' : 'Complete guide in 8 minutes'}
              </p>
            </Link>
            <Link href="/blog/ico-token-issuance-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? 'ICO 토큰 발행 지갑' : 'ICO Token Issuance Wallet'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '5만 명에게 5분 만에 배포' : 'Distribute to 50K in 5 minutes'}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
