'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CryptoCustodyServicePost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'Custody 사용 사례',
      title: '가상자산 수탁서비스, 안전한 자산 보관의 시작',
      date: '2024년 12월 12일',
      readTime: '8분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Custody Use Case',
      title: 'Crypto Custody Service: The Start of Secure Asset Storage',
      date: 'December 12, 2024',
      readTime: '8 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
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

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  2022년 FTX 사태, 2023년 실리콘밸리은행 파산. 가상자산 업계에서 연이어 발생한 사건들은 우리에게 하나의 교훈을 남겼습니다.
                  "자산을 안전하게 보관하는 것이 가장 중요하다"는 것입니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  거래소, 증권사, 자산운용사가 고객 자산을 보관할 때 가장 신경 써야 할 부분이 바로 수탁 서비스(Custody Service)입니다.
                  단순히 지갑 주소를 만들어 자산을 보관하는 것을 넘어, 기관급 보안과 규제 준수, 그리고 효율적인 운영 프로세스가 모두 갖춰져야 합니다.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">왜 수탁서비스가 필요한가?</h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div>
                    <h4 className="font-bold mb-3 text-lg">1. 규제 준수</h4>
                    <p className="mb-2">한국의 특금법, 미국의 BSA, 유럽의 MiCA 등 각국 규제 당국은 가상자산 사업자에게 고객 자산의 안전한 보관을 의무화하고 있습니다.</p>
                    <p className="text-sm bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-3">
                      특금법 제7조의3: 가상자산사업자는 고객 자산을 자기자산과 분리하여 보관하고, 콜드월렛과 같은 안전한 방법으로 관리해야 합니다.
                      이를 위반할 경우 최대 5년 이하의 징역 또는 5천만원 이하의 벌금에 처해질 수 있습니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-lg">2. 고객 신뢰 구축</h4>
                    <p className="mb-2">"MPC 2-of-3 커스터디로 자산을 보호합니다"라는 구체적인 증거가 고객에게 강력한 신뢰를 줍니다.
                    Fireblocks, BitGo와 같은 글로벌 커스터디 솔루션을 사용하는 기업들이 이를 마케팅 포인트로 활용하는 이유입니다.</p>
                    <p className="text-sm mt-2">
                      실제로 2023년 업비트는 MPC 기술을 도입한 이후 고객 자산 보호 체계를 강화했다는 점을 강조하며,
                      이것이 국내 1위 거래소로서의 신뢰도를 높이는 중요한 요소가 되었습니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-lg">3. 내부 위협 방지</h4>
                    <p className="mb-2">단일 개인이나 부서가 자산에 접근할 수 없도록 하여, 내부자 사고를 원천 차단합니다.</p>
                    <p className="text-sm bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-3">
                      2021년 아프리카TV의 경우, 내부 직원이 회사 지갑의 프라이빗 키를 무단으로 사용해 69억원 상당의 가상자산을 인출한 사건이 있었습니다.
                      MPC 2-of-3 시스템이었다면 이러한 단독 범행은 원천적으로 불가능했을 것입니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-lg">4. 운영 효율성</h4>
                    <p className="mb-2">Omnibus 구조를 활용하면 고객별로 수백만 개의 지갑 주소를 관리할 필요 없이, 단일 마스터 주소에서 모든 자산을 통합 관리할 수 있습니다.</p>
                    <p className="text-sm mt-2">
                      일반적으로 거래소는 고객당 평균 3-5개의 코인을 보유하고, 고객 수가 10만명이라면 30-50만개의 지갑 주소를 관리해야 합니다.
                      Omnibus 방식은 이를 BTC 1개, ETH 1개, USDT 1개 등 코인당 1개의 마스터 주소로 통합합니다.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">기존 커스터디 방식의 한계</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 단일 프라이빗 키 방식 (Single Key)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    하나의 프라이빗 키로 지갑을 관리하는 가장 기본적인 방식입니다. 구현은 간단하지만 보안상 치명적인 약점이 있습니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold text-red-600 dark:text-red-400">위험 요소:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>프라이빗 키를 가진 사람이 단독으로 자산을 인출 가능</li>
                      <li>내부자 또는 해커가 키를 탈취하면 즉시 자산 손실</li>
                      <li>담당자가 퇴사하거나 사고를 당하면 복구 불가능</li>
                      <li>키를 보관하는 서버가 해킹당하면 모든 자산 유출</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 멀티시그 (Multi-Signature)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Bitcoin이나 Ethereum의 스마트 컨트랙트를 이용해 N개의 키 중 M개의 서명이 있어야 거래가 실행되도록 하는 방식입니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold text-yellow-600 dark:text-yellow-400">한계점:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>체인별로 지원 여부가 다름 (Solana, Ripple 등은 네이티브 멀티시그 미지원)</li>
                      <li>트랜잭션 크기가 커져 가스비가 증가 (3-of-5 멀티시그는 일반 트랜잭션 대비 3-5배)</li>
                      <li>각 서명자가 온라인 상태여야 하므로 운영 복잡도 증가</li>
                      <li>키 분실 시 복구가 어렵거나 불가능</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. HSM (Hardware Security Module)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    전용 하드웨어 장비에 프라이빗 키를 저장하고 서명을 수행하는 방식입니다. 은행권에서 주로 사용됩니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold text-yellow-600 dark:text-yellow-400">문제점:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>초기 도입 비용이 매우 높음 (장비당 $10,000-$50,000)</li>
                      <li>물리적 장비 관리가 필요 (데이터센터, 이중화, 백업)</li>
                      <li>클라우드 환경에서 사용하기 어려움</li>
                      <li>여전히 단일 장비가 해킹당하면 위험 (Side Channel Attack)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits Custody: MPC 2-of-3 아키텍처</h2>

              <div className="mb-8">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Walits는 MPC (Multi-Party Computation) 기술을 기반으로 한 2-of-3 Threshold Signature 방식을 사용합니다.
                  이는 프라이빗 키를 3개의 조각(Key Share)으로 나누어 각각 다른 곳에 보관하고, 거래 시 2개의 조각만 있으면 서명이 가능한 방식입니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  핵심은 "완전한 프라이빗 키가 단 한 순간도 메모리에 존재하지 않는다"는 점입니다.
                  각 Key Share는 독립적으로는 아무 의미가 없으며, 2개가 모여야 비로소 유효한 서명을 생성할 수 있습니다.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Share 분산 구조</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-gray-400">1</div>
                    <div>
                      <h4 className="font-bold mb-2">Customer Key Share</h4>
                      <p className="text-sm">고객사(거래소, 증권사)가 보유. AWS KMS, Google Cloud KMS 등에 암호화되어 저장.</p>
                      <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                        예: CoinEx Korea는 자사 AWS 계정의 KMS에 Customer Key Share를 보관하며,
                        Walits는 이 키에 접근할 수 없습니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-gray-400">2</div>
                    <div>
                      <h4 className="font-bold mb-2">Walits Key Share</h4>
                      <p className="text-sm">Walits가 AWS Nitro Enclave (TEE) 내부에 보관. 외부 접근 불가능.</p>
                      <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                        AWS Nitro Enclave는 CPU 레벨에서 격리된 실행 환경으로, SSH 접속, API 호출, 심지어 AWS 관리자도 내부 메모리에 접근할 수 없습니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-gray-400">3</div>
                    <div>
                      <h4 className="font-bold mb-2">Backup Key Share</h4>
                      <p className="text-sm">재난 복구용. Shamir's Secret Sharing으로 3-of-5로 다시 분할되어 고객사 임원 5명이 각각 보관.</p>
                      <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                        예: CEO, CFO, CTO, CISO, 이사회 의장이 각각 1개씩 보관.
                        만약 Customer Key Share와 Walits Key Share를 모두 잃더라도, 임원 5명 중 3명이 모이면 복구 가능합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Omnibus 시스템: 효율적인 자산 관리</h2>

              <div className="mb-8">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Walits Custody는 Omnibus (통합) 구조를 사용합니다.
                  모든 고객의 자산을 하나의 마스터 주소에 통합하여 보관하고, 각 고객의 잔액은 데이터베이스에서 가상으로 관리합니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  이는 증권사가 고객 주식을 한국예탁결제원에 통합 보관하고, 각 고객 계좌는 가상으로 관리하는 것과 동일한 방식입니다.
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">예금(Deposit) 프로세스</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    고객이 거래소에 BTC를 입금하는 상황을 예로 들어보겠습니다.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">1단계: 입금 주소 생성</p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`POST /api/wallets
{
  "userId": "user_12345",
  "asset": "BTC"
}

Response:
{
  "depositAddress": "bc1q...(HD Path m/44'/0'/0'/0/12345)"
}`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        각 고객에게 고유한 입금 주소가 발급됩니다. 이는 BIP32 HD Wallet을 통해 마스터 주소로부터 파생된 주소입니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">2단계: 입금 감지 (1 Confirmation)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Walits xScanner가 블록체인을 실시간으로 모니터링하여 입금을 감지합니다.
                      </p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// xScanner가 Webhook 전송
{
  "event": "DEPOSIT_DETECTED",
  "txHash": "0xabc...",
  "amount": "0.5",
  "confirmations": 1,
  "userId": "user_12345"
}`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        1 컨펌에서는 아직 고객 잔액에 반영하지 않고, 관리자 대시보드에만 표시됩니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">3단계: 입금 확정 (6-12 Confirmations)</p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// 충분한 컨펌 후 Webhook 전송
{
  "event": "DEPOSIT_CONFIRMED",
  "txHash": "0xabc...",
  "amount": "0.5",
  "confirmations": 6,
  "userId": "user_12345"
}

// 고객 잔액 업데이트
UPDATE user_balances
SET btc_balance = btc_balance + 0.5
WHERE user_id = 'user_12345'`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        이제 고객은 거래소에서 해당 BTC를 거래하거나 출금할 수 있습니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">4단계: Auto-Sweep (자동 통합)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        입금된 BTC는 개별 주소에 그대로 두지 않고, Omnibus 마스터 주소로 자동 이체됩니다.
                      </p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// 매일 새벽 2시, 또는 임계값($10,000) 초과 시
POST /api/internal/sweep
{
  "fromAddresses": ["bc1q...(user_12345 deposit address)"],
  "toAddress": "bc1q...(Omnibus Master)",
  "amount": "0.5"
}

// MPC 2-of-3 서명으로 트랜잭션 생성 및 브로드캐스트`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        이제 모든 고객의 BTC가 하나의 안전한 마스터 주소에 통합되어 관리됩니다.
                        개별 주소에는 잔액이 거의 남지 않으므로 해킹 위험이 최소화됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">출금(Withdrawal) 프로세스</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    고객이 거래소에서 외부 주소로 BTC를 출금하는 상황입니다.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">1단계: 출금 요청 및 잔액 홀드</p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`POST /api/withdrawals
{
  "userId": "user_12345",
  "asset": "BTC",
  "amount": "0.3",
  "toAddress": "bc1q...(external address)"
}

Response:
{
  "withdrawalId": "wd_abc123",
  "status": "PENDING",
  "holdBalance": "0.3"  // 즉시 잔액 차감 및 홀드
}`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        출금 요청과 동시에 고객 잔액에서 즉시 차감되어 중복 출금을 방지합니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">2단계: Policy 검증</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        사전에 설정된 출금 정책을 자동으로 검증합니다.
                      </p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// Policy 설정 예시
{
  "autoApprovalLimit": "1 BTC",  // 1 BTC 이하 자동 승인
  "whitelistOnly": false,        // 화이트리스트 주소만 허용 여부
  "requireApprovers": ["cfo@company.com", "cto@company.com"],  // 2-of-2 승인
  "dailyLimit": "10 BTC",        // 일일 출금 한도
  "timeLock": "1 hour"          // 출금 요청 후 1시간 대기 (타임락)
}

// 검증 결과
{
  "policyCheck": "PASSED",
  "autoApproved": false,  // 0.3 BTC < 1 BTC이지만 requireApprovers 때문에 수동 승인 필요
  "requiredApprovals": 2
}`}</pre>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">3단계: N-of-M 승인</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        CFO와 CTO가 Walits 대시보드에서 출금 요청을 검토하고 승인합니다.
                      </p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// CFO 승인
POST /api/withdrawals/wd_abc123/approve
{
  "approverId": "cfo@company.com",
  "otp": "123456"
}

// CTO 승인 (2-of-2 완료)
POST /api/withdrawals/wd_abc123/approve
{
  "approverId": "cto@company.com",
  "otp": "654321"
}

Response:
{
  "status": "APPROVED",
  "approvals": 2,
  "readyForSigning": true
}`}</pre>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">4단계: MPC 2-of-3 서명</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        승인이 완료되면 Customer Key Share와 Walits Key Share가 협업하여 트랜잭션에 서명합니다.
                      </p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// 1. Customer Key Share가 Partial Signature 생성
PartialSig1 = Sign(TxHash, CustomerKeyShare)

// 2. Walits Key Share가 Partial Signature 생성 (TEE 내부)
PartialSig2 = Sign(TxHash, WalitsKeyShare)

// 3. 두 Partial Signature를 결합하여 완전한 서명 생성
FinalSignature = Combine(PartialSig1, PartialSig2)

// 4. 서명된 트랜잭션을 블록체인에 브로드캐스트
broadcastTransaction(signedTx)`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        전 과정에서 완전한 프라이빗 키는 메모리에 존재하지 않습니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold mb-2">5단계: 상태 추적 및 완료</p>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`// 트랜잭션 상태 업데이트
{
  "status": "BROADCASTED",
  "txHash": "0xdef...",
  "confirmations": 0
}

// 충분한 컨펌 후
{
  "status": "COMPLETED",
  "txHash": "0xdef...",
  "confirmations": 6
}`}</pre>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                        고객은 대시보드에서 실시간으로 출금 진행 상황을 확인할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">실제 사례: CoinEx Korea</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  CoinEx Korea는 Walits Custody를 도입하여 월평균 5,000건의 입출금을 안전하게 처리하고 있습니다.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-bold mb-2">도입 전 문제점</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>단일 프라이빗 키를 서버에 저장하여 해킹 위험 존재</li>
                      <li>출금 승인이 수동으로 이루어져 처리 시간이 평균 30분</li>
                      <li>각 코인별로 수만 개의 입금 주소를 관리하느라 DB 부하</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-bold mb-2">도입 후 개선 효과</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>MPC 2-of-3로 단일 장애점 제거, 내부자 해킹 원천 차단</li>
                      <li>Policy 기반 자동 승인으로 1 BTC 이하 출금은 즉시 처리 (평균 5분)</li>
                      <li>Omnibus 구조로 BTC 마스터 주소 1개, ETH 마스터 주소 1개만 관리</li>
                      <li>AWS Nitro Enclave를 통해 금융감독원 보안 감사 통과</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-bold mb-2">운영 지표</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>월평균 입금: 3,500건 (누적 $2.5M)</li>
                      <li>월평균 출금: 1,500건 (누적 $1.8M)</li>
                      <li>출금 평균 처리 시간: 5분 (자동 승인), 20분 (수동 승인)</li>
                      <li>보안 사고: 0건 (24개월 운영)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits vs 경쟁사 비교</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">항목</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Walits</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Fireblocks</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">BitGo</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">보안 방식</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">MPC 2-of-3 + TEE</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">MPC + SGX</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">멀티시그 (온체인)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">가스비</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">일반 트랜잭션과 동일</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">일반 트랜잭션과 동일</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">멀티시그로 인해 3-5배 증가</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">지원 체인</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">BTC, ETH, 주요 EVM 체인</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">60+ 체인</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">BTC, ETH 중심</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">월 비용</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$500-2,000 (거래량 기반)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$5,000-20,000</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$3,000-15,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">한국어 지원</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">O (전담 CS팀)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">X</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">X</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">국내 규제 대응</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">특금법 완벽 준수</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">고객사가 직접 대응</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">고객사가 직접 대응</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">기관급 보안으로 고객 자산을 보호하세요</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Walits Custody는 국내 최초로 MPC 2-of-3 + Omnibus 구조를 결합한 커스터디 솔루션입니다.
                  거래소, 증권사, 자산운용사를 위한 맞춤형 보안 시스템을 지금 도입하세요.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  상담 신청하기 →
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  The 2022 FTX collapse and 2023 Silicon Valley Bank bankruptcy taught the crypto industry one crucial lesson:
                  "Secure asset storage is paramount."
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  For exchanges, securities firms, and asset managers, custody service is the most critical aspect of storing customer assets.
                  It requires not just wallet addresses, but institution-grade security, regulatory compliance, and efficient operational processes.
                </p>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Protect Customer Assets with Institution-Grade Security</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Walits Custody is Korea's first custody solution combining MPC 2-of-3 + Omnibus architecture.
                  Deploy a customized security system for exchanges, securities firms, and asset managers today.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Request Consultation →
                </Link>
              </div>
            </>
          )}
        </div>
      </article>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Walits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
