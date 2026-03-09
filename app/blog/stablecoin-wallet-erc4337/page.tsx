'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StablecoinWalletPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'ERC-4337 · 계정 추상화',
      title: '스테이블 코인을 위한 합리적 지갑 서비스',
      date: '2026년 3월 9일',
      readTime: '8분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'ERC-4337 · Account Abstraction',
      title: 'A Rational Wallet Service for Stablecoins',
      date: 'March 9, 2026',
      readTime: '8 min read',
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

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                지금 여러분의 지갑 앱을 열어보세요. 차트, 스왑, 가격 알림… 마치 주식 앱 같지 않나요?
                월급을 USDC로 받고 카페에서 결제하고 싶은데, 왜 먼저 ETH를 사야 할까요?
                ERC-4337이 이 불편함을 기술적으로 해결합니다.
              </p>

              {/* 섹션 1: 현재 지갑의 문제 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">현재 지갑들이 "주식 앱"처럼 느껴지는 이유</h2>

              <p>
                2026년 현재, 암호화폐 지갑을 사용하는 대부분의 사람들은 사실상 트레이딩 도구로만 씁니다.
                스왑을 하고, 가격이 오르기를 기다리고, DeFi yield를 쫓습니다.
                실생활에서 "돈을 쓰는" 경험은 거의 없어요.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p className="font-semibold mb-3 text-red-900 dark:text-red-300">기존 지갑의 구조적 문제</p>
                <ul className="mb-0 space-y-2">
                  <li><strong>ETH 없으면 아무것도 못 함</strong> — USDC만 있어도 가스비는 ETH로 내야 합니다. "돈은 있는데 수수료가 없어서 못 씀"이라는 황당한 상황이 발생합니다.</li>
                  <li><strong>42자리 주소</strong> — 0x로 시작하는 긴 주소를 복사·붙여넣기 해야 합니다. 한 글자 틀리면 자산 영구 손실.</li>
                  <li><strong>트랜잭션 실패 후 가스비 손실</strong> — 전송이 실패해도 EIP-1559 기준 baseFee는 소각되고, priorityFee는 검증인에게 지급됩니다. 사용자에게 돌아오는 건 없습니다.</li>
                  <li><strong>배치 처리 불가</strong> — 3명에게 각각 보내려면 3번 서명, 3번 가스비 지불.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">왜 이렇게 설계됐을까요?</p>
                <p className="mb-0">
                  이더리움의 기본 계정(EOA, Externally Owned Account)은 블록체인 초창기에 설계된 구조입니다.
                  보안과 탈중앙화에는 강하지만, 사용자 편의성은 2013년 수준에 머물러 있습니다.
                  이 문제를 프로토콜 레벨에서 해결하려면 이더리움 자체를 업그레이드해야 하는데,
                  그건 시간이 너무 많이 걸립니다. 그래서 등장한 것이 <strong>ERC-4337</strong>입니다.
                </p>
              </div>

              {/* 섹션 2: ERC-4337이란 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">ERC-4337이란? 계정 추상화의 기술적 구조</h2>

              <p>
                ERC-4337은 2023년 이더리움 메인넷에 배포된 표준으로,
                <strong>이더리움 프로토콜을 수정하지 않고</strong> 스마트 컨트랙트만으로
                "지능적인 지갑"을 구현합니다. 핵심 아이디어는 간단합니다:
                <em>계정을 스마트 컨트랙트로 만들자.</em>
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">기존 EOA vs ERC-4337 스마트 계정</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-800">
                    <p className="font-bold text-red-700 dark:text-red-400 mb-2">기존 EOA (Externally Owned Account)</p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 mb-0">
                      <li>- 가스비는 반드시 ETH</li>
                      <li>- 트랜잭션 1개 = 서명 1개</li>
                      <li>- 비밀키 분실 = 자산 영구 손실</li>
                      <li>- 자동 결제 불가</li>
                      <li>- 트랜잭션 실패해도 가스비 소각</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-200 dark:border-green-800">
                    <p className="font-bold text-green-700 dark:text-green-400 mb-2">ERC-4337 스마트 계정</p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 mb-0">
                      <li>- 가스비를 USDC 등으로 대납 가능</li>
                      <li>- 여러 트랜잭션 묶어서 1번에 처리</li>
                      <li>- 소셜 복구, 다중 서명 지원</li>
                      <li>- 조건부 자동 실행 가능</li>
                      <li>- 프로그래밍 가능한 보안 정책</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4가지 핵심 구성요소</h3>

              <div className="space-y-4 my-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-400 font-bold text-sm">UO</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">1. UserOperation (사용자 작업)</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        기존의 트랜잭션을 대체하는 새로운 객체입니다. 사용자가 하고 싶은 행동(전송, 스왑 등)을
                        담은 구조체로, 아직 블록체인에 제출되지 않은 상태의 "의도"입니다.
                        일반 트랜잭션과 달리 <strong>가스비를 누가 낼지 지정</strong>할 수 있습니다.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-xs text-gray-700 dark:text-gray-300">
                        {`{
  sender: "0xUser...",         // 사용자 스마트 계정
  callData: "transfer(USDC)", // 실행할 함수
  paymasterAndData: "0xPM...", // 가스비 대납자 지정
  signature: "0xSig..."        // 사용자 서명
}`}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-purple-700 dark:text-purple-400 font-bold text-sm">B</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">2. Bundler (번들러)</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        여러 UserOperation을 수집해서 하나의 트랜잭션으로 묶어 블록체인에 제출하는 노드입니다.
                        기존 채굴자/검증자와 유사한 역할이지만, ERC-4337 전용 멤풀(Mempool)을 사용합니다.
                        번들러는 이 작업의 보상으로 가스비를 받습니다. <strong>사용자는 번들러가 존재하는지조차 몰라도 됩니다.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-orange-700 dark:text-orange-400 font-bold text-sm">EP</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">3. EntryPoint 컨트랙트 (진입점)</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        ERC-4337의 핵심 스마트 컨트랙트입니다. 번들러가 제출한 UserOperation 묶음을 검증하고 실행합니다.
                        CREATE2 방식으로 배포되어 이더리움, Polygon, Arbitrum 등 모든 EVM 체인에서 <strong>동일한 주소</strong>를 가집니다.
                        <strong>전체 생태계의 신뢰 앵커</strong> 역할을 합니다.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-xs text-gray-700 dark:text-gray-300">
                        EntryPoint v0.7.0: 0x0000000071727De22E5E9d8BAf0edAc6f37da032
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-green-700 dark:text-green-400 font-bold text-sm">PM</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">4. Paymaster (페이마스터)</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        ERC-4337의 킬러 기능입니다. 사용자 대신 가스비를 ETH로 지불하는 스마트 컨트랙트입니다.
                        대신 사용자에게 USDC 등 ERC-20 토큰을 받거나, 서비스 제공자가 무료로 대납할 수 있습니다.
                        <strong>사용자는 ETH 없이 USDC만으로 모든 거래가 가능합니다.</strong>
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-xs text-green-800 dark:text-green-300">
                        사용자 USDC 보유 → Paymaster가 ETH 가스비 대납 → 사용자에게 USDC로 정산
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 섹션 3: 트랜잭션 흐름 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">ERC-4337 트랜잭션 전체 흐름</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
{`[사용자] 100 USDC를 친구에게 보내고 싶음
    ↓
[지갑 앱] UserOperation 생성
    - callData: transfer(친구주소, 100 USDC)
    - paymasterAndData: Walits Paymaster 주소
    - signature: 사용자 서명
    ↓
[번들러] UserOperation을 멤풀에서 수집
    - 여러 사용자의 UO를 묶음 처리
    ↓
[EntryPoint 컨트랙트] 검증 + 실행
    1. Paymaster 잔고 확인 (ETH 가스비 충분한지)
    2. 사용자 서명 검증
    3. callData 실행 (USDC 전송)
    4. Paymaster에게 가스비 청구
    ↓
[Paymaster] 가스비 정산
    - ETH로 가스비 지불 완료
    - 사용자 계정에서 USDC 차감
    ↓
[완료] 사용자는 ETH 한 푼도 없이 USDC 전송 성공`}
                </pre>
              </div>

              {/* 섹션 4: 과도기적 해결책 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">과도기적 해결책, 하지만 지금 당장 필요한 기술</h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <p className="font-semibold mb-3 text-blue-900 dark:text-blue-300">솔직하게 말하면…</p>
                <p className="mb-2">
                  이상적인 세상에서는 ETH 하나로 모든 것이 해결되어야 합니다.
                  가스비도 ETH, 결제도 ETH, 월급도 ETH. 완벽한 네이티브 경제.
                </p>
                <p className="mb-0">
                  하지만 <strong>2026년 현실</strong>은 다릅니다. 일일 USDC 전송량은 약 <strong>80억 달러</strong>,
                  ETH 전송량은 약 <strong>8억 달러</strong>로 무려 10배 차이입니다 (Dune Analytics, 2026년 2월 기준).
                  USDC가 이미 "실제 돈"의 역할을 하고 있어요.
                  그렇다면 지금 이 순간, 스테이블코인 사용자들을 위한 UX가 필요합니다.
                  ERC-4337은 그 다리 역할을 합니다.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">~80%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">온체인 결제에서 스테이블코인 비중 (2026년)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99%↓</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Paymaster로 절감 가능한 사용자 마찰</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1클릭</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">월급 USDC → 카페 결제까지</p>
                </div>
              </div>

              {/* 비용 비교표 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 비용 비교: EOA vs ERC-4337</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                      <th className="text-left p-3 text-gray-900 dark:text-white">항목</th>
                      <th className="text-left p-3 text-red-700 dark:text-red-400">기존 EOA</th>
                      <th className="text-left p-3 text-green-700 dark:text-green-400">ERC-4337</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">첫 송금까지</td>
                      <td className="p-3">ETH 충전 → USDC 송금 (2 tx, 수일 소요)</td>
                      <td className="p-3 text-green-600 dark:text-green-400">USDC 직접 송금 (1 tx, 즉시)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">이더리움 가스비</td>
                      <td className="p-3">$5 ~ $20</td>
                      <td className="p-3 text-green-600 dark:text-green-400">$0.5 ~ $2 (배치 처리)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">온보딩</td>
                      <td className="p-3">거래소 KYC + 입금 + ETH 구매 (2~3일)</td>
                      <td className="p-3 text-green-600 dark:text-green-400">즉시 사용 가능</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">3명에게 동시 송금</td>
                      <td className="p-3">서명 3번, 가스비 3번</td>
                      <td className="p-3 text-green-600 dark:text-green-400">서명 1번, 가스비 1번</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">지갑 분실 복구</td>
                      <td className="p-3">니모닉 없으면 영구 손실</td>
                      <td className="p-3 text-green-600 dark:text-green-400">소셜 복구 / MPC 가디언</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 섹션 5: 실사용 시나리오 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사용 시나리오: 주식 앱이 아닌 진짜 지갑</h2>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">시나리오 1: 해외 프리랜서 A</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">월급 1,000 USDC를 받고 카페 결제, 렌트 납부까지</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded text-sm">
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      기존 방식:<br/>
                      1. 클라이언트에게 USDC 수령<br/>
                      2. 가스비용 ETH 별도 구매 (거래소 가입 → KYC → 입금 → 구매)<br/>
                      3. 그제서야 USDC 전송 가능<br/>
                      <span className="text-red-500">⛔ ETH 없으면 첫 걸음부터 막힘</span>
                    </p>
                    <hr className="my-3 border-gray-200 dark:border-gray-600"/>
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      ERC-4337 + Paymaster 방식:<br/>
                      1. USDC 수령<br/>
                      2. 바로 카페 결제 (Paymaster가 가스비 대납)<br/>
                      3. 렌트도 USDC로 납부<br/>
                      <span className="text-green-600">✅ ETH 전혀 필요 없음</span>
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">시나리오 2: DeFi yield 수령 후 바로 소비</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">DeFi에서 USDC yield 받고 1클릭으로 재투자 또는 소비</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded text-sm">
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      기존 방식:<br/>
                      Yield 수령 → ETH 부족 → 스왑 필요 → 가스비 계산 →<br/>
                      네트워크 선택 → 전송 → 실패 가능성...<br/>
                      <span className="text-red-500">⛔ 단순한 재투자도 복잡한 다단계</span>
                    </p>
                    <hr className="my-3 border-gray-200 dark:border-gray-600"/>
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      ERC-4337 배치 트랜잭션:<br/>
                      [Yield 수령 + 재투자 + 카드 충전] → 1번 서명, 1번 처리<br/>
                      <span className="text-green-600">✅ 여러 작업을 묶어서 한번에, 가스비는 1번</span>
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">시나리오 3: 그룹 정산</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">4명이서 저녁 식사 후 USDC로 정산</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded text-sm font-mono text-gray-700 dark:text-gray-300">
                    {`총액: 80 USDC (내가 결제)

[정산 요청]
→ 철수: 20 USDC
→ 영희: 20 USDC
→ 민수: 20 USDC

[ERC-4337 배치 처리]
3건의 송금 → 1번의 UserOperation
가스비: $0.002 (3건 합산)

✅ 60 USDC 수령 완료`}
                  </div>
                </div>
              </div>

              {/* 섹션 6: ERC-4337의 추가 기능 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">ERC-4337이 가능하게 하는 것들</h2>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">소셜 복구 (Social Recovery)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    12개 단어 니모닉 없이도 지정한 신뢰 친구들의 승인으로 지갑 복구 가능.
                    비밀키를 잃어도 자산을 영구 잃지 않아요.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">세션 키 (Session Keys)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    게임, DApp에서 매번 서명 팝업 없이 "이 게임에서 30분 동안 0.1 USDC 이하 결제 자동 승인" 가능.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">자동 결제 (Subscriptions)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    "매월 1일 구독료 10 USDC 자동 결제" 같은 조건부 실행 설정.
                    Web2 정기 결제처럼 편리하게.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">다중 서명 (Multisig)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    기업 지갑에서 "1,000 USDC 이상은 CFO + CEO 2명 승인 필요" 같은
                    커스텀 보안 정책을 스마트 컨트랙트 레벨에서 강제.
                  </p>
                </div>
              </div>

              {/* 섹션 7: Walits와 ERC-4337 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Walits가 ERC-4337을 선택한 이유</h2>

              <p>
                Walits는 ERC-4337 기반의 스마트 계정 지갑입니다. 우리의 목표는 단순합니다:
                <strong>"월급 USDC 받는 사람이 ETH를 몰라도 되는 지갑"</strong>
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg my-6 border-l-4 border-blue-500">
                <p className="font-semibold mb-3 text-blue-900 dark:text-blue-300">Walits의 독보적 차별점: MPC + ERC-4337 조합</p>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">개인키 없이도 스마트 계정 서명 (MPC)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MPC가 서명을 분산 처리하므로, 사용자 기기 어디에도 완전한 비밀키가 존재하지 않습니다. 해킹 자체가 원천 불가.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">스마트 계정 없이도 복구 가능 (MPC 가디언)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">폰 분실 시 MPC 가디언(서버키 + 백업키)으로 복구. ERC-4337의 소셜 복구와 이중으로 안전망 확보.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">자체 Bundler / Paymaster 운영</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">외부 의존 없이 Walits 자체 인프라로 번들러와 Paymaster를 직접 운영. 가스비 최적화와 가용성을 Walits가 직접 보장합니다.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  곧 출시 예정
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Walits — 스테이블코인 실사용 지갑</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">무료<span className="text-lg text-gray-600 dark:text-gray-400"> (베타 기간)</span></div>
                <ul className="mb-6 space-y-2">
                  <li>ETH 없이 USDC만으로 모든 거래 — Paymaster가 가스비 처리</li>
                  <li>MPC 2-of-3 키 관리 — 니모닉 없이 안전한 지갑</li>
                  <li>배치 트랜잭션 — 여러 송금을 한번에 처리</li>
                  <li>ERC-4337 표준 기반 — 이더리움, Polygon, Arbitrum 등 멀티체인 지원</li>
                  <li>세션 키 & 자동 결제 — Web2처럼 편리한 UX</li>
                </ul>
                <Link
                  href="/ai-chat-wallet"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  출시 알림 신청
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">자주 묻는 질문</h2>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q1. ERC-4337은 이더리움 업그레이드인가요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    아닙니다. 이더리움 프로토콜을 수정하지 않고 스마트 컨트랙트만으로 구현된 표준입니다.
                    하드포크 없이 2023년 메인넷에 배포되었으며, 지금 당장 사용 가능합니다.
                    미래에 이더리움 네이티브 AA(EIP-7560)가 나오면 더 효율적으로 대체될 수 있습니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q2. Paymaster가 자금이 부족하면 어떻게 되나요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    Paymaster는 EntryPoint 컨트랙트에 ETH를 미리 예치해둡니다. 잔고가 부족하면 해당 UserOperation은 거절됩니다.
                    Walits는 자체 Paymaster 잔고를 상시 모니터링하고 충전합니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q3. 기존 메타마스크 지갑과 호환되나요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    ERC-4337 스마트 계정은 일반 EOA 주소와 구분됩니다. 하지만 스마트 계정도 이더리움 주소를 가지므로
                    USDC, ETH 수령은 문제없이 됩니다. 스마트 계정에서 다른 지갑으로 전송도 가능합니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q4. 스마트 컨트랙트 지갑은 해킹 위험이 더 크지 않나요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    오히려 반대입니다. 코드로 보안 정책을 강제할 수 있어 더 강력합니다. 예를 들어 "하루 1,000 USDC 이상 출금 불가"
                    같은 규칙을 컨트랙트 레벨에서 강제하면, 비밀키가 해킹당해도 전액 탈취는 불가능합니다.
                    단, 컨트랙트 코드 자체의 버그는 감사(Audit)를 통해 방지해야 합니다.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-3">ETH 충전 없이 USDC로 월급 받고 바로 쓰는 세상</h3>
                <p className="text-lg mb-2 opacity-90">
                  주식 앱이 아닌 진짜 지갑, Walits에서 지금 체험해보세요.
                </p>
                <p className="text-sm mb-6 opacity-75">
                  베타 테스터 모집 중 — 출시 전 무료로 먼저 사용하세요
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/inquiry"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    베타 신청하기
                  </Link>
                  <Link
                    href="/ai-chat-wallet"
                    className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    서비스 자세히 보기
                  </Link>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">관련 글</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/blog/stablecoin-payment-vs-traditional" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">스테이블코인 결제 vs 기존 결제 시스템</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">수수료·속도·글로벌 비교</p>
                  </Link>
                  <Link href="/blog/mpc-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">MPC 지갑 완전 가이드</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">니모닉 없이 안전한 키 관리</p>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                Open your wallet app right now. Charts, swaps, price alerts… doesn't it feel more like a stock trading app?
                You receive your salary in USDC and want to pay at a cafe — why do you need to buy ETH first?
                ERC-4337 solves this problem technically.
              </p>

              {/* Section 1: Problem */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Why Current Wallets Feel Like "Stock Apps"</h2>

              <p>
                In 2026, most people using crypto wallets essentially use them as trading tools.
                They swap, wait for prices to go up, and chase DeFi yields.
                There's almost no experience of actually "spending money" in daily life.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p className="font-semibold mb-3 text-red-900 dark:text-red-300">Structural Problems with Existing Wallets</p>
                <ul className="mb-0 space-y-2">
                  <li><strong>Nothing works without ETH</strong> — Even with USDC, you need ETH for gas. "I have money but can't pay the fee" — an absurd situation.</li>
                  <li><strong>42-character addresses</strong> — You must copy-paste the long 0x address. One wrong character means permanent asset loss.</li>
                  <li><strong>Gas fees lost on failed transactions</strong> — Even if a transfer fails, the EIP-1559 baseFee is burned and the priorityFee goes to the validator. Nothing comes back to the user.</li>
                  <li><strong>No batch processing</strong> — Sending to 3 people requires 3 signatures and 3 gas fees.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">Why was it designed this way?</p>
                <p className="mb-0">
                  Ethereum's basic account type (EOA, Externally Owned Account) was designed in the early days of blockchain.
                  It's strong on security and decentralization, but user convenience is stuck at 2013 levels.
                  Fixing this at the protocol level requires upgrading Ethereum itself — which takes too long.
                  That's why <strong>ERC-4337</strong> was created.
                </p>
              </div>

              {/* Section 2: ERC-4337 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">What is ERC-4337? Technical Structure of Account Abstraction</h2>

              <p>
                ERC-4337 is a standard deployed on Ethereum mainnet in 2023 that implements
                "intelligent wallets" using only smart contracts, <strong>without modifying the Ethereum protocol</strong>.
                The core idea is simple: <em>Make accounts into smart contracts.</em>
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Traditional EOA vs ERC-4337 Smart Account</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-800">
                    <p className="font-bold text-red-700 dark:text-red-400 mb-2">Traditional EOA</p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 mb-0">
                      <li>- Gas must be paid in ETH</li>
                      <li>- 1 transaction = 1 signature</li>
                      <li>- Lost private key = permanent asset loss</li>
                      <li>- No automated payments</li>
                      <li>- Gas burned even on failed transactions</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-200 dark:border-green-800">
                    <p className="font-bold text-green-700 dark:text-green-400 mb-2">ERC-4337 Smart Account</p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 mb-0">
                      <li>- Gas can be paid in USDC, etc.</li>
                      <li>- Bundle multiple transactions into one</li>
                      <li>- Social recovery, multi-sig support</li>
                      <li>- Conditional automated execution</li>
                      <li>- Programmable security policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4 Core Components</h3>

              <div className="space-y-4 my-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 dark:text-blue-400 font-bold text-sm">UO</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">1. UserOperation</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        A new object that replaces the traditional transaction. It's a structured representation of
                        what the user wants to do (transfer, swap, etc.) — an "intent" not yet submitted to the blockchain.
                        Unlike regular transactions, you can <strong>specify who pays the gas fee</strong>.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-xs text-gray-700 dark:text-gray-300">
                        {`{
  sender: "0xUser...",          // User's smart account
  callData: "transfer(USDC)",  // Function to execute
  paymasterAndData: "0xPM...", // Gas sponsor address
  signature: "0xSig..."        // User's signature
}`}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-purple-700 dark:text-purple-400 font-bold text-sm">B</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">2. Bundler</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        A node that collects multiple UserOperations and submits them as a single transaction to the blockchain.
                        It plays a similar role to miners/validators but uses an ERC-4337-specific mempool.
                        Bundlers earn gas fees as a reward. <strong>Users don't need to know bundlers exist.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-orange-700 dark:text-orange-400 font-bold text-sm">EP</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">3. EntryPoint Contract</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        The core smart contract of ERC-4337. It validates and executes the bundle of UserOperations
                        submitted by the bundler. Deployed via CREATE2, it has the <strong>same address</strong> across
                        Ethereum, Polygon, Arbitrum, and all major EVM chains.
                        It serves as the <strong>trust anchor for the entire ecosystem</strong>.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-xs text-gray-700 dark:text-gray-300">
                        EntryPoint v0.7.0: 0x0000000071727De22E5E9d8BAf0edAc6f37da032
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                      <span className="text-green-700 dark:text-green-400 font-bold text-sm">PM</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">4. Paymaster</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        The killer feature of ERC-4337. A smart contract that pays ETH gas fees on behalf of users.
                        In return, it can collect ERC-20 tokens like USDC from users, or a service provider
                        can sponsor fees for free.
                        <strong>Users can complete all transactions with only USDC, no ETH needed.</strong>
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-xs text-green-800 dark:text-green-300">
                        User holds USDC → Paymaster pays ETH gas → Settles with user in USDC
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Transaction Flow */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Full ERC-4337 Transaction Flow</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
{`[User] Wants to send 100 USDC to a friend
    ↓
[Wallet App] Creates UserOperation
    - callData: transfer(friendAddress, 100 USDC)
    - paymasterAndData: Walits Paymaster address
    - signature: user's signature
    ↓
[Bundler] Collects UserOperations from mempool
    - Batches multiple users' UOs together
    ↓
[EntryPoint Contract] Validates + Executes
    1. Checks Paymaster balance (enough ETH for gas?)
    2. Validates user signature
    3. Executes callData (USDC transfer)
    4. Charges gas fee to Paymaster
    ↓
[Paymaster] Settles gas fees
    - Pays gas in ETH
    - Deducts USDC from user account
    ↓
[Done] User successfully sent USDC with zero ETH`}
                </pre>
              </div>

              {/* Section 4: Transitional Solution */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">A Transitional Solution — But Necessary Right Now</h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <p className="font-semibold mb-3 text-blue-900 dark:text-blue-300">To be honest…</p>
                <p className="mb-2">
                  In an ideal world, ETH would solve everything: gas in ETH, payments in ETH, salaries in ETH.
                  A perfect native economy.
                </p>
                <p className="mb-0">
                  But the <strong>reality of 2026</strong> is different. Daily USDC transfer volume is approximately <strong>$8 billion</strong>,
                  compared to ETH's <strong>$800 million</strong> — a 10x gap (Dune Analytics, Feb 2026).
                  USDC is already acting as "real money."
                  So right now, users who live in stablecoins need proper UX.
                  ERC-4337 is that bridge.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">~80%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stablecoin share of on-chain payments (2026)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99%↓</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">User friction reduction via Paymaster</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1-click</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">USDC salary → cafe payment</p>
                </div>
              </div>

              {/* Cost comparison table */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Real Cost Comparison: EOA vs ERC-4337</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                      <th className="text-left p-3 text-gray-900 dark:text-white">Item</th>
                      <th className="text-left p-3 text-red-700 dark:text-red-400">Traditional EOA</th>
                      <th className="text-left p-3 text-green-700 dark:text-green-400">ERC-4337</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">First transfer</td>
                      <td className="p-3">Buy ETH → Send USDC (2 tx, days)</td>
                      <td className="p-3 text-green-600 dark:text-green-400">Send USDC directly (1 tx, instant)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">Ethereum gas fee</td>
                      <td className="p-3">$5 – $20</td>
                      <td className="p-3 text-green-600 dark:text-green-400">$0.5 – $2 (with batching)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">Onboarding</td>
                      <td className="p-3">Exchange KYC + deposit + buy ETH (2–3 days)</td>
                      <td className="p-3 text-green-600 dark:text-green-400">Instant, use right away</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3 font-medium">Send to 3 people at once</td>
                      <td className="p-3">3 signatures, 3 gas fees</td>
                      <td className="p-3 text-green-600 dark:text-green-400">1 signature, 1 gas fee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Wallet recovery</td>
                      <td className="p-3">Permanent loss without mnemonic</td>
                      <td className="p-3 text-green-600 dark:text-green-400">Social recovery / MPC guardian</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 5: Real Use Cases */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Real Scenarios: A Wallet, Not a Stock App</h2>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Scenario 1: Overseas Freelancer A</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Receives 1,000 USDC salary, then pays for coffee and rent</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded text-sm">
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      Old way:<br/>
                      1. Receive USDC from client<br/>
                      2. Buy ETH separately (exchange signup → KYC → deposit → purchase)<br/>
                      3. Only then can transfer USDC<br/>
                      <span className="text-red-500">⛔ Blocked at step one without ETH</span>
                    </p>
                    <hr className="my-3 border-gray-200 dark:border-gray-600"/>
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      ERC-4337 + Paymaster:<br/>
                      1. Receive USDC<br/>
                      2. Pay at cafe directly (Paymaster covers gas)<br/>
                      3. Pay rent in USDC<br/>
                      <span className="text-green-600">✅ Zero ETH required</span>
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Scenario 2: DeFi Yield → Immediate Use</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Receive USDC yield from DeFi, reinvest or spend in 1 click</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded text-sm">
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      Old way:<br/>
                      Claim yield → Not enough ETH → Need to swap → Calculate gas →<br/>
                      Pick network → Transfer → Might fail...<br/>
                      <span className="text-red-500">⛔ Even simple reinvestment is multi-step</span>
                    </p>
                    <hr className="my-3 border-gray-200 dark:border-gray-600"/>
                    <p className="font-mono text-gray-700 dark:text-gray-300">
                      ERC-4337 batch transaction:<br/>
                      [Claim yield + Reinvest + Top up card] → 1 signature, 1 execution<br/>
                      <span className="text-green-600">✅ Multiple actions bundled, single gas fee</span>
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Scenario 3: Group Bill Split</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">4 people at dinner, settling in USDC</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded text-sm font-mono text-gray-700 dark:text-gray-300">
                    {`Total: 80 USDC (I paid)

[Split request]
→ Alice: 20 USDC
→ Bob: 20 USDC
→ Carol: 20 USDC

[ERC-4337 batch]
3 transfers → 1 UserOperation
Gas fee: $0.002 total

✅ 60 USDC received`}
                  </div>
                </div>
              </div>

              {/* Section 6: What ERC-4337 Enables */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">What ERC-4337 Makes Possible</h2>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Social Recovery</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Recover your wallet with approval from trusted friends — no 12-word mnemonic.
                    Even if you lose your private key, you don't lose your assets permanently.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Session Keys</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    "Auto-approve payments under 0.1 USDC in this game for 30 minutes" — no popup every click.
                    Gaming and DApp UX becomes seamless.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Subscription Payments</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set up "Auto-pay 10 USDC subscription fee on the 1st of every month."
                    Convenient like Web2 recurring billing.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Custom Multisig</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enterprise wallets can enforce "transfers over 1,000 USDC require CFO + CEO approval"
                    at the smart contract level.
                  </p>
                </div>
              </div>

              {/* Section 7: Walits */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Why Walits Chose ERC-4337</h2>

              <p>
                Walits is an ERC-4337-based smart account wallet. Our goal is simple:
                <strong>"A wallet where people who receive USDC salaries don't need to know what ETH is."</strong>
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg my-6 border-l-4 border-blue-500">
                <p className="font-semibold mb-3 text-blue-900 dark:text-blue-300">Walits Unique Edge: MPC + ERC-4337 Combination</p>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Smart account signing without a private key (MPC)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MPC distributes the signing process so no complete private key ever exists on any single device. Hacking is impossible at the root.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Recovery without the smart account (MPC Guardian)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Lost your phone? Recover via MPC guardian (server key + backup key). Combined with ERC-4337 social recovery for a double safety net.</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Own Bundler / Paymaster infrastructure</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">No third-party dependency — Walits operates its own bundler and Paymaster. Gas optimization and uptime are guaranteed by Walits directly.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Walits — Stablecoin Everyday Wallet</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">Free<span className="text-lg text-gray-600 dark:text-gray-400"> (Beta Period)</span></div>
                <ul className="mb-6 space-y-2">
                  <li>All transactions with USDC only — Paymaster handles gas</li>
                  <li>MPC 2-of-3 key management — Secure wallet without mnemonic</li>
                  <li>Batch transactions — Process multiple transfers at once</li>
                  <li>ERC-4337 standard — Multi-chain: Ethereum, Polygon, Arbitrum and more</li>
                  <li>Session keys & auto-payment — Web2-level UX convenience</li>
                </ul>
                <Link
                  href="/ai-chat-wallet"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Sign Up for Launch Alert
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">FAQ</h2>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q1. Is ERC-4337 an Ethereum upgrade?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    No. It's a standard implemented entirely in smart contracts without modifying the Ethereum protocol.
                    Deployed on mainnet in 2023 without a hard fork — available right now.
                    In the future, native AA (EIP-7560) may replace it more efficiently.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q2. What happens if the Paymaster runs out of funds?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    Paymasters pre-deposit ETH into the EntryPoint contract. If the balance is insufficient,
                    that UserOperation will be rejected. Walits continuously monitors and replenishes its Paymaster balance.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q3. Is it compatible with MetaMask?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    ERC-4337 smart accounts are distinct from regular EOA addresses. However, since smart accounts
                    also have Ethereum addresses, receiving USDC and ETH works seamlessly.
                    Sending from a smart account to other wallets is fully supported.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q4. Aren't smart contract wallets more vulnerable to hacks?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    Actually the opposite. Security policies enforced in code are more powerful.
                    For example, "no withdrawals over 1,000 USDC per day" enforced at the contract level
                    means even a compromised private key can't drain everything instantly.
                    Contract code bugs are mitigated through security audits.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-3">Receive your USDC salary and spend it immediately — no ETH needed</h3>
                <p className="text-lg mb-2 opacity-90">
                  A real wallet, not a stock app. Experience it on Walits.
                </p>
                <p className="text-sm mb-6 opacity-75">
                  Beta testers wanted — use it free before the official launch
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/inquiry"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Apply for Beta
                  </Link>
                  <Link
                    href="/ai-chat-wallet"
                    className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/blog/stablecoin-payment-vs-traditional" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Stablecoin Payments vs Traditional Systems</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fees, speed, global comparison</p>
                  </Link>
                  <Link href="/blog/mpc-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">MPC Wallet Complete Guide</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Secure key management without mnemonics</p>
                  </Link>
                </div>
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
