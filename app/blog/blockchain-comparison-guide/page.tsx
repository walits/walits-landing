'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlockchainComparisonPost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: '기술 가이드',
      title: '5대 블록체인 완벽 가이드',
      subtitle: 'Bitcoin부터 Solana까지, 쉽게 이해하는 블록체인 비교',
      date: '2026년 1월 18일',
      readTime: '35분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Technical Guide',
      title: 'Complete Guide to Top 5 Blockchains',
      subtitle: 'Bitcoin to Solana: Easy blockchain comparison',
      date: 'January 18, 2026',
      readTime: '35 min read',
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
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{copy.subtitle}</p>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <span>{copy.date}</span>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </div>

        <div className="mb-12">
          <img
            src="/blog/BLOCKCHAIN_COMPARISON_TUTORIAL.jpg"
            alt="Blockchain Comparison"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
                "블록체인이 뭐가 다르지?" 하고 궁금하셨나요?
                Bitcoin, Ethereum, XRP, Tron, Solana - 이름은 많이 들어봤지만
                각각 어떻게 다르고, 언제 어떤 걸 써야 하는지 헷갈리셨을 겁니다.
                이 가이드에서는 마치 친구에게 설명하듯 쉽게, 하지만 깊이 있게 5대 블록체인을 비교해드립니다.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold mb-3">이 글을 읽으면</h3>
                <ul className="space-y-2 text-sm">
                  <li>각 블록체인의 탄생 배경과 목적을 이해할 수 있습니다</li>
                  <li>수수료가 왜 다른지, 얼마나 드는지 알 수 있습니다</li>
                  <li>여러분의 프로젝트에 어떤 블록체인이 적합한지 판단할 수 있습니다</li>
                  <li>기술 용어를 쉽게 이해할 수 있는 비유와 예시를 얻을 수 있습니다</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">1. 블록체인의 탄생 이야기</h2>

              <p className="text-lg mb-8">
                각 블록체인은 특정한 문제를 해결하기 위해 태어났습니다.
                마치 자동차, 비행기, 배가 각각 다른 용도로 만들어진 것처럼요.
                각 블록체인의 탄생 배경을 알면, 왜 이렇게 다르게 설계되었는지 이해하기 쉬워집니다.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Bitcoin (2009) - 디지털 금의 탄생</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="mb-3"><strong className="text-blue-600">탄생 배경:</strong> 2008년 금융위기 직후, 중앙 은행에 대한 불신이 극에 달했을 때 사토시 나카모토라는 익명의 인물(또는 그룹)이 Bitcoin을 만들었습니다.</p>
                <p className="mb-3"><strong className="text-blue-600">해결하려는 문제:</strong> "정부나 은행 없이도 돈을 주고받을 수 있을까?"</p>
                <p><strong className="text-blue-600">핵심 철학:</strong> 완벽한 탈중앙화. 누구도 시스템을 통제할 수 없어야 한다.</p>
              </div>

              <p className="mb-4">
                Bitcoin은 블록체인의 할아버지입니다. 2009년 1월 3일, 제네시스 블록(첫 번째 블록)이 생성되면서
                역사상 처음으로 "디지털 돈"이 탄생했죠. 재미있는 사실은, 2010년에 프로그래머 한 명이
                피자 두 판을 사기 위해 10,000 BTC를 지불했다는 겁니다.
                당시엔 별 가치가 없었지만, 지금 가격으로 환산하면... 약 3,500억 원입니다!
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">Bitcoin의 주요 특징</h4>
                <ul className="space-y-2">
                  <li><strong>블록 생성 시간:</strong> 약 10분 - 커피 한 잔 마실 시간이면 새 블록이 생성됩니다</li>
                  <li><strong>총 발행량:</strong> 2,100만 개로 제한 - 금처럼 희소성이 있습니다</li>
                  <li><strong>반감기:</strong> 4년마다 채굴 보상이 절반으로 줄어듭니다 (2024년 현재 6.25 BTC → 3.125 BTC)</li>
                  <li><strong>에너지 소비:</strong> 연간 약 150 TWh - 네덜란드 한 나라가 쓰는 전기량과 비슷합니다</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Ethereum (2015) - 세계 컴퓨터의 등장</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 mb-6">
                <p className="mb-3"><strong className="text-purple-600">탄생 배경:</strong> 당시 19세였던 비탈릭 부테린이 "Bitcoin은 송금만 하는데, 더 많은 걸 할 수 있지 않을까?"라는 생각으로 시작했습니다.</p>
                <p className="mb-3"><strong className="text-purple-600">해결하려는 문제:</strong> "블록체인 위에서 프로그램을 실행할 수 있다면?"</p>
                <p><strong className="text-purple-600">핵심 철학:</strong> 블록체인은 단순한 장부가 아니라 '세계 컴퓨터'가 되어야 한다.</p>
              </div>

              <p className="mb-4">
                Ethereum은 2015년에 등장해서 블록체인의 가능성을 완전히 바꿔놓았습니다.
                Bitcoin이 "디지털 금"이라면, Ethereum은 "디지털 컴퓨터"입니다.
                여기서 실행되는 프로그램을 "스마트 컨트랙트"라고 부르는데요,
                간단히 말하면 "조건이 맞으면 자동으로 실행되는 계약서"입니다.
              </p>

              <p className="mb-6">
                예를 들어볼까요? "만약 축구 경기에서 한국이 이기면 친구에게 10만 원을 보내라"는
                계약을 스마트 컨트랙트로 만들 수 있습니다. 경기 결과가 확정되는 순간,
                누가 실행 버튼을 누르지 않아도 자동으로 돈이 전송됩니다.
                이런 특성 덕분에 DeFi(탈중앙화 금융), NFT, DAO 같은 혁신적인 서비스들이 탄생했죠.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">Ethereum의 게임 체인저 순간들</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>2016년 - The DAO 사건:</strong> 해커가 스마트 컨트랙트 버그를 이용해 5천만 달러를 탈취했습니다.
                    이 사건으로 Ethereum이 Ethereum과 Ethereum Classic으로 갈라졌죠.
                    마치 회사가 의견 차이로 분사하는 것과 비슷합니다.
                  </li>
                  <li>
                    <strong>2021년 - 가스비 대란:</strong> NFT 붐으로 네트워크가 혼잡해지자,
                    간단한 거래 하나에 수십 달러의 수수료가 붙기 시작했습니다.
                    이 문제를 해결하기 위해 EIP-1559가 도입되었습니다.
                  </li>
                  <li>
                    <strong>2022년 9월 - The Merge:</strong> Proof of Work(채굴)에서 Proof of Stake(검증)로 전환하면서
                    에너지 소비가 <strong>99.95% 감소</strong>했습니다! 이건 정말 혁명적인 변화였죠.
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">XRP (2012) - 은행들의 고속도로</h3>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-6">
                <p className="mb-3"><strong className="text-green-600">탄생 배경:</strong> Ripple Labs가 "국제 송금이 왜 이렇게 느리고 비싸지?"라는 문제를 해결하기 위해 만들었습니다.</p>
                <p className="mb-3"><strong className="text-green-600">해결하려는 문제:</strong> "한국에서 미국으로 돈을 보내는데 왜 3-5일이나 걸리고 수수료도 비싼 거지?"</p>
                <p><strong className="text-green-600">핵심 철학:</strong> 속도와 효율성. 실용성이 가장 중요하다.</p>
              </div>

              <p className="mb-4">
                해외 송금을 해보신 적 있나요? 은행을 통하면 수수료도 비싸고 시간도 오래 걸립니다.
                이건 SWIFT라는 오래된 시스템을 사용하기 때문인데요,
                XRP는 이 문제를 해결하기 위해 태어났습니다.
              </p>

              <p className="mb-6">
                XRP의 가장 큰 특징은 <strong>속도</strong>와 <strong>저렴한 수수료</strong>입니다.
                Bitcoin이 송금 확정까지 1시간 걸린다면, XRP는 3-5초면 끝납니다.
                수수료도 0.00001 XRP 정도로, 거의 공짜 수준이죠.
                이 때문에 여러 은행들이 국제 송금에 XRP를 활용하고 있습니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">XRP vs 일반 은행 송금 비교</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2"></th>
                        <th className="text-left py-2">일반 은행 (SWIFT)</th>
                        <th className="text-left py-2">XRP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2"><strong>송금 시간</strong></td>
                        <td className="py-2">3-5일</td>
                        <td className="py-2 text-green-600 font-semibold">3-5초</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2"><strong>수수료</strong></td>
                        <td className="py-2">$25-45</td>
                        <td className="py-2 text-green-600 font-semibold">$0.00001</td>
                      </tr>
                      <tr>
                        <td className="py-2"><strong>영업시간</strong></td>
                        <td className="py-2">평일 9-5시</td>
                        <td className="py-2 text-green-600 font-semibold">24/7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Tron (2017) - 크리에이터의 플랫폼</h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
                <p className="mb-3"><strong className="text-red-600">탄생 배경:</strong> 저스틴 선이 "YouTube나 Netflix 같은 거대 플랫폼이 크리에이터들의 수익을 너무 많이 가져간다"는 문제의식에서 시작했습니다.</p>
                <p className="mb-3"><strong className="text-red-600">해결하려는 문제:</strong> "콘텐츠 크리에이터가 중간 플랫폼 없이 직접 수익을 가져갈 수 없을까?"</p>
                <p><strong className="text-red-600">핵심 철학:</strong> 콘텐츠는 크리에이터의 것이다. 높은 TPS와 낮은 수수료로 실용성을 극대화하자.</p>
              </div>

              <p className="mb-4">
                Tron은 "Ethereum을 더 빠르고 저렴하게"라는 목표로 시작했습니다.
                실제로 Ethereum과 거의 같은 프로그래밍 언어(Solidity)를 사용하기 때문에,
                Ethereum 개발자들이 쉽게 Tron으로 옮겨올 수 있었죠.
              </p>

              <p className="mb-6">
                Tron의 재미있는 점은 <strong>TRX 스테이킹</strong>입니다.
                TRX를 일정 기간 동안 묶어두면(freeze), Energy와 Bandwidth를 얻을 수 있는데요,
                이걸 사용하면 거래 수수료가 무료가 됩니다!
                마치 교통카드 충전해두고 쓰는 것과 비슷하다고 보시면 됩니다.
                이 덕분에 Tron에서 USDT(스테이블코인) 거래량이 엄청나게 많습니다.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Solana (2020) - 속도의 혁명</h3>
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-6">
                <p className="mb-3"><strong className="text-orange-600">탄생 배경:</strong> Qualcomm 출신 엔지니어 아나톨리 야코벤코가 "블록체인이 이렇게 느려도 되나?"라는 의문에서 출발했습니다.</p>
                <p className="mb-3"><strong className="text-orange-600">해결하려는 문제:</strong> "Visa처럼 초당 수만 건의 거래를 처리할 수 있는 블록체인을 만들 수 없을까?"</p>
                <p><strong className="text-orange-600">핵심 철학:</strong> 속도와 확장성. 실제 글로벌 결제 시스템을 대체할 수 있어야 한다.</p>
              </div>

              <p className="mb-4">
                Solana는 2020년에 등장한 신예지만, 성능만큼은 독보적입니다.
                Bitcoin이 초당 7건, Ethereum이 초당 15건 정도 처리하는 동안,
                Solana는 이론상 초당 65,000건을 처리할 수 있습니다.
                실제로는 3,000-5,000건 정도인데, 그래도 압도적이죠!
              </p>

              <p className="mb-6">
                이런 속도가 가능한 이유는 <strong>Proof of History(PoH)</strong>라는
                독특한 기술 때문입니다. 간단히 설명하면, 각 거래에 "타임스탬프"를 찍어서
                순서를 정하기 때문에 검증자들끼리 "누가 먼저야?" 하고 싸울 필요가 없습니다.
                마치 은행 창구 번호표처럼요!
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
                <h4 className="font-bold mb-2 text-yellow-700 dark:text-yellow-400">주의: 그런데 완벽하진 않습니다</h4>
                <p className="text-sm">
                  2021년과 2022년에 Solana 네트워크가 몇 차례 멈춘 적이 있습니다.
                  너무 많은 거래가 몰리면서 과부하가 걸린 거죠.
                  빠르긴 하지만 아직 안정성 면에서는 개선이 필요합니다.
                  하지만 팀이 열심히 고치고 있고, 2023년 이후로는 많이 안정화되었습니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">2. 합의 메커니즘 - "누가 장부를 쓸 권한이 있지?"</h2>

              <p className="text-lg mb-8">
                블록체인의 핵심 질문은 이겁니다: "중앙 서버 없이 어떻게 모두가 같은 장부를 공유할까?"
                이를 해결하는 방법이 바로 <strong>합의 메커니즘</strong>입니다.
                쉽게 말하면, "누가 다음 블록을 쓸 권한이 있는지" 정하는 규칙이죠.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Bitcoin: Proof of Work (PoW) - 수학 문제 풀기 대회</h3>

              <p className="mb-4">
                Bitcoin은 <strong>채굴(Mining)</strong>이라는 방식을 사용합니다.
                "채굴자(Miner)"들이 엄청나게 어려운 수학 문제를 풀고,
                가장 먼저 푼 사람이 새 블록을 만들 권한과 보상(현재 6.25 BTC)을 받습니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">쉽게 이해하기: 복권 비유</h4>
                <p className="mb-3">
                  Bitcoin 채굴은 마치 복권을 사는 것과 비슷합니다.
                  더 많은 복권(컴퓨팅 파워)을 살수록 당첨(블록 생성) 확률이 높아집니다.
                  하지만 한 장만 사도 당첨될 수 있고, 천 장을 사도 안 될 수 있죠.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>재미있는 사실:</strong> 전 세계 Bitcoin 채굴자들이 <strong>초당 3억 테라 해시</strong>를 계산합니다.
                  이게 얼마나 큰 숫자냐면, 지구상의 모든 컴퓨터를 합친 것보다 많은 계산력입니다!
                </p>
              </div>

              <p className="mb-4"><strong>장점:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>극강의 보안:</strong> 네트워크를 공격하려면 전체 컴퓨팅 파워의 51% 이상을 가져야 하는데, 이건 현실적으로 불가능합니다. 비용이 너무 많이 들거든요.</li>
                <li><strong>완벽한 탈중앙화:</strong> 누구나 채굴에 참여할 수 있습니다(물론 전기세는 많이 나오지만...).</li>
              </ul>

              <p className="mb-4"><strong>단점:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>엄청난 에너지 소비:</strong> 연간 150 TWh - 네덜란드 한 나라가 1년간 쓰는 전기량과 비슷합니다.</li>
                <li><strong>느린 속도:</strong> 블록 하나 만드는 데 평균 10분이 걸립니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4">Ethereum: Proof of Stake (PoS) - 예금자가 은행원 되기</h3>

              <p className="mb-4">
                Ethereum은 2022년 9월부터 PoS 방식을 사용합니다.
                채굴하는 대신, 32 ETH를 "예치(Staking)"하면 검증자가 될 수 있습니다.
                검증자는 블록을 만들고 수수료를 받지만, 잘못하면 예치금이 일부 삭감(Slashing)될 수 있습니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">쉽게 이해하기: 보증금 시스템</h4>
                <p className="mb-3">
                  마치 렌터카를 빌릴 때 보증금을 내는 것과 비슷합니다.
                  보증금(32 ETH)을 내면 차(검증 권한)를 운전할 수 있고,
                  잘 운전하면 보상을 받지만, 사고를 내면(악의적으로 행동하면) 보증금이 깎입니다.
                </p>
              </div>

              <p className="mb-4"><strong>장점:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>에너지 효율:</strong> PoW 대비 에너지 소비가 99.95% 감소했습니다!</li>
                <li><strong>빠른 속도:</strong> 블록 생성 시간이 약 12초로 짧습니다.</li>
                <li><strong>진입 장벽 완화:</strong> 채굴기를 살 필요 없이 32 ETH만 있으면 검증자가 될 수 있습니다.</li>
              </ul>

              <p className="mb-4"><strong>단점:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>자본 집중:</strong> ETH를 많이 가진 사람이 더 많은 영향력을 가질 수 있습니다.</li>
                <li><strong>높은 진입 비용:</strong> 32 ETH는 현재 가격으로 약 1억 원이 넘습니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4">XRP: Consensus Protocol - 신뢰하는 친구들끼리</h3>

              <p className="mb-4">
                XRP는 독특한 방식을 사용합니다.
                각 검증자는 "신뢰할 수 있는 검증자 리스트(UNL)"를 가지고 있고,
                이 리스트에 있는 검증자들의 80% 이상이 동의하면 거래가 확정됩니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">쉽게 이해하기: 친구들과 결정하기</h4>
                <p className="mb-3">
                  10명의 친구가 있고, 그 중 8명 이상이 "이 거래는 진짜야"라고 하면 확정되는 겁니다.
                  모든 사람의 의견을 물을 필요 없이, 내가 신뢰하는 친구들의 의견만 들으면 되는 거죠.
                </p>
              </div>

              <p className="mb-4"><strong>장점:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>초고속:</strong> 3-5초 만에 거래가 확정됩니다.</li>
                <li><strong>에너지 효율:</strong> Bitcoin 대비 에너지 소비가 1/100,000 수준입니다.</li>
              </ul>

              <p className="mb-4"><strong>단점:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>중앙화 우려:</strong> Ripple Labs가 추천하는 검증자 리스트를 많은 사람들이 그대로 사용합니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4">Tron: DPoS - 대표자 뽑기</h3>

              <p className="mb-4">
                Tron은 <strong>27명의 슈퍼 대표(Super Representative)</strong>를 투표로 뽑습니다.
                TRX를 가진 사람은 누구나 투표할 수 있고, 가장 많은 표를 받은 27명이
                돌아가면서 블록을 만듭니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">쉽게 이해하기: 국회의원 선거</h4>
                <p className="mb-3">
                  국회의원을 뽑는 것과 비슷합니다.
                  주민(TRX 보유자)들이 투표해서 대표(SR)를 뽑고,
                  선출된 대표들이 법(블록)을 만듭니다.
                  다만, Tron은 27명만 뽑는다는 차이가 있죠.
                </p>
              </div>

              <p className="mb-4"><strong>장점:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>높은 TPS:</strong> 소수의 검증자가 처리하므로 초당 2,000건 이상 처리 가능합니다.</li>
                <li><strong>빠른 속도:</strong> 3초마다 새 블록이 생성됩니다.</li>
              </ul>

              <p className="mb-4"><strong>단점:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>중앙화:</strong> 27명에게 권한이 집중됩니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4">Solana: PoH + PoS - 시간을 증명하라</h3>

              <p className="mb-4">
                Solana의 <strong>Proof of History</strong>는 정말 독특합니다.
                각 거래에 "암호화된 타임스탬프"를 찍어서,
                검증자들이 "이 거래가 먼저야"를 따질 필요가 없게 만들었습니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">쉽게 이해하기: 번호표 시스템</h4>
                <p className="mb-3">
                  은행 창구를 생각해보세요. 번호표를 뽑으면 순서가 정해집니다.
                  "제가 먼저 왔어요!" 하고 싸울 필요가 없죠.
                  Solana도 비슷하게, 각 거래에 번호표(타임스탬프)를 찍어서
                  순서를 명확하게 정합니다.
                </p>
              </div>

              <p className="mb-4"><strong>장점:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>초고속:</strong> 블록 생성 시간이 400ms(0.4초)에 불과합니다!</li>
                <li><strong>높은 TPS:</strong> 실제로 초당 3,000-5,000건을 처리합니다.</li>
              </ul>

              <p className="mb-4"><strong>단점:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>높은 하드웨어 요구사항:</strong> 검증자가 되려면 고성능 서버가 필요합니다.</li>
                <li><strong>안정성 이슈:</strong> 과거에 네트워크 중단이 몇 차례 있었습니다.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">3. 계정 시스템 - "내 돈은 어떻게 관리되지?"</h2>

              <p className="text-lg mb-8">
                은행 계좌를 만들면 계좌번호와 잔액이 생기죠?
                블록체인도 비슷하지만, 각각 조금씩 다른 방식으로 계정을 관리합니다.
                이 차이를 이해하면 왜 어떤 블록체인은 수수료가 높고, 어떤 건 낮은지 알 수 있습니다.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Bitcoin: UTXO - 지폐 뭉치로 생각하기</h3>

              <p className="mb-4">
                Bitcoin은 우리가 생각하는 "잔액" 개념이 없습니다. 대신
                <strong> UTXO (Unspent Transaction Output)</strong>라는 걸 사용하는데요,
                쉽게 말하면 "아직 안 쓴 거스름돈"입니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">쉽게 이해하기: 현금 지갑</h4>
                <p className="mb-4">
                  지갑에 5만 원권 1장, 1만 원권 3장, 천 원권 5장이 있다고 상상해보세요.
                  이게 바로 UTXO입니다.
                  "잔액: 8만 5천 원"이라고 표시되지 않고,
                  각각의 지폐를 따로 관리하는 거죠.
                </p>
                <p className="mb-3">
                  <strong>예시:</strong> 커피값 3만 원을 내야 한다면?
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 5만 원권을 낸다</li>
                  <li>• 커피값 3만 원 + 거스름돈 2만 원(새로운 UTXO)을 받는다</li>
                  <li>• 거스름돈이 다시 당신의 지갑에 들어간다</li>
                </ul>
              </div>

              <p className="mb-4"><strong>장점:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>프라이버시:</strong> 매번 새 주소를 사용할 수 있어서 추적이 어렵습니다.</li>
                <li><strong>단순함:</strong> 각 UTXO는 한 번만 쓰이므로 복잡한 상태 관리가 필요 없습니다.</li>
              </ul>

              <p className="mb-4"><strong>단점:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>복잡한 계산:</strong> 어떤 UTXO를 조합해서 쓸지 자동으로 계산해야 합니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4">Ethereum: Account - 은행 계좌처럼</h3>

              <p className="mb-4">
                Ethereum은 우리가 익숙한 방식을 사용합니다.
                각 계정에 주소가 있고, 잔액이 표시되고, 거래 순서를 나타내는 번호(Nonce)가 있습니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">Ethereum 계정의 구성 요소</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-purple-600 mb-1">주소 (Address)</p>
                    <p className="text-sm mb-1">여러분의 지갑 주소입니다. 0x로 시작하는 42자리 문자열이죠.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">예: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600 mb-1">잔액 (Balance)</p>
                    <p className="text-sm mb-1">가지고 있는 ETH의 양입니다. Wei라는 아주 작은 단위로 저장됩니다.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">1 ETH = 1,000,000,000,000,000,000 Wei (18개의 0!)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600 mb-1">Nonce</p>
                    <p className="text-sm mb-1">이 주소에서 보낸 거래 횟수입니다. 거래 순서를 보장하는 데 사용됩니다.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">첫 거래는 0, 두 번째는 1, 이런 식이죠.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-600 mb-1">Storage (스마트 컨트랙트만)</p>
                    <p className="text-sm">스마트 컨트랙트라면 코드와 데이터를 저장하는 공간이 있습니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">XRP: Reserve - 최소 예치금 시스템</h3>

              <p className="mb-4">
                XRP는 Ethereum과 비슷하지만, 한 가지 특이한 점이 있습니다.
                계정을 만들려면 <strong>최소 10 XRP</strong>를 넣어야 합니다.
                이걸 "Reserve"라고 부르는데, 스팸 계정을 방지하기 위한 장치입니다.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
                <h4 className="font-bold mb-2 text-yellow-700 dark:text-yellow-400">주의사항</h4>
                <p className="text-sm mb-3">
                  Reserve로 묶인 10 XRP는 쓸 수 없습니다!
                  만약 계정에 12 XRP가 있다면, 실제로 쓸 수 있는 건 2 XRP뿐입니다.
                </p>
                <p className="text-sm">
                  <strong>추가 Reserve:</strong> Trust Line(다른 토큰을 받을 준비)을 만들 때마다 2 XRP씩 더 묶입니다.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Tron: Resource - 전기 충전소</h3>

              <p className="mb-4">
                Tron은 독특하게 <strong>Energy</strong>와 <strong>Bandwidth</strong>라는 자원을 사용합니다.
                마치 게임에서 마나와 스태미나를 관리하는 것 같죠?
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">Resource 시스템 이해하기</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-600 mb-1">Energy</p>
                    <p className="text-sm mb-2">스마트 컨트랙트를 실행할 때 소모됩니다. TRC20 토큰 전송할 때 주로 필요해요.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">USDT 한 번 보내려면 약 31,895 Energy 필요</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-1">Bandwidth</p>
                    <p className="text-sm mb-2">일반 TRX 전송할 때 소모됩니다. 거래 데이터 크기에 비례해요.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">한 번 전송에 약 268 바이트 = 268 Bandwidth</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="font-semibold text-green-700 dark:text-green-400 mb-2">무료로 쓰는 방법</p>
                    <p className="text-sm">
                      TRX를 Freeze(동결)하면 매일 Energy와 Bandwidth를 무료로 받을 수 있습니다!
                      예를 들어 300 TRX를 동결하면 하루에 약 30만 Energy를 받아서,
                      USDT를 10번 정도 무료로 보낼 수 있어요.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Solana: Rent - 공간 사용료</h3>

              <p className="mb-4">
                Solana에서 계정을 만들 때는 "Rent(임대료)"라는 개념이 있습니다.
                블록체인 저장 공간을 쓰는 대가인데,
                최소 금액을 예치하면 Rent가 면제되어 영구적으로 사용할 수 있습니다.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">Solana 계정 정보</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-orange-600 mb-1">계정 주소 (Pubkey)</p>
                    <p className="text-sm">여러분의 지갑 주소입니다. Base58로 인코딩된 문자열이에요.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600 mb-1">잔액 (Lamports)</p>
                    <p className="text-sm mb-1">가지고 있는 SOL의 양입니다. Lamport라는 작은 단위로 저장돼요.</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">1 SOL = 1,000,000,000 Lamports (10억!)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">이름의 유래: Leslie Lamport(분산 시스템의 대가)의 이름을 딴 거래요.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600 mb-1">소유자 (Owner)</p>
                    <p className="text-sm mb-2">이 계정을 관리하는 프로그램의 주소입니다.</p>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• 일반 지갑: System Program이 관리</li>
                      <li>• 토큰 계정: Token Program이 관리</li>
                      <li>• NFT 계정: NFT Program이 관리</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600 mb-1">데이터 (Data)</p>
                    <p className="text-sm">계정에 저장된 추가 정보입니다. 일반 지갑은 거의 비어있어요.</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                    <p className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Rent Exemption</p>
                    <p className="text-sm mb-2">
                      계정을 만들 때 약 <strong>0.00204 SOL</strong>을 예치하면,
                      Rent가 면제되어 영구적으로 사용할 수 있습니다.
                      현재 가격으로 약 200원 정도네요!
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      참고: 토큰을 받으려면 "Associated Token Account(ATA)"를 만들어야 하는데,
                      이것도 약 0.002 SOL 정도 듭니다.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">4. 수수료 - "얼마나 내야 하나요?"</h2>

              <p className="text-lg mb-8">
                아마 가장 궁금하실 부분일 겁니다. "도대체 수수료가 얼마야?"
                각 블록체인마다 수수료 계산 방식이 다르고, 상황에 따라 천차만별입니다.
                하나씩 쉽게 풀어드릴게요.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Bitcoin 수수료 - 크기로 계산하기</h3>

              <p className="mb-4">
                Bitcoin 수수료는 <strong>거래 데이터 크기</strong>에 비례합니다.
                마치 택배 요금이 박스 크기에 따라 달라지는 것처럼요!
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">실전 예시로 이해하기</h4>
                <p className="mb-3">
                  친구에게 0.5 BTC를 보내려고 합니다. 수수료는 얼마일까요?
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded mb-3">
                  <p className="text-sm font-mono mb-2">거래 크기: 약 146 vBytes</p>
                  <p className="text-sm font-mono mb-2">수수료율: 10 sat/vB (보통 우선순위)</p>
                  <p className="text-sm font-mono mb-2">수수료 = 146 × 10 = 1,460 satoshi</p>
                  <p className="text-sm font-mono text-green-600">= 약 0.000015 BTC ≈ 500원 정도</p>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>급하면?</strong> 수수료율을 50 sat/vB로 올리면 다음 블록(~10분)에 포함됩니다. 수수료는 2,500원 정도.</p>
                  <p><strong>안 급하면?</strong> 1 sat/vB로 낮추면 수수료는 150원이지만, 몇 시간 기다려야 할 수도 있습니다.</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-400">꿀팁: 수수료 아끼는 법</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>주말이나 새벽에 보내기:</strong> 거래량이 적을 때는 수수료가 낮습니다.</li>
                  <li>• <strong>SegWit 주소 사용:</strong> bc1로 시작하는 주소는 데이터 크기가 작아서 수수료가 저렴합니다.</li>
                  <li>• <strong>여러 UTXO 합치기:</strong> 수수료가 저렴할 때 미리 합쳐두면 좋습니다.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Ethereum 수수료 (Gas) - 복잡하지만 공정하게</h3>

              <p className="mb-4">
                Ethereum 수수료는 좀 복잡합니다. <strong>Gas</strong>라는 개념을 사용하는데,
                자동차 기름값을 생각하시면 쉬워요!
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">Gas 시스템 이해하기</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-900 p-4 rounded">
                    <p className="font-semibold mb-2">Gas Limit (주유 한도)</p>
                    <p className="text-sm">
                      이 거래를 처리하는 데 필요한 계산량입니다.
                      일반 전송은 21,000 gas, 토큰 전송은 65,000 gas 정도 필요해요.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded">
                    <p className="font-semibold mb-2">Base Fee (기본 유류세)</p>
                    <p className="text-sm">
                      네트워크 혼잡도에 따라 자동으로 조정되는 기본 가격입니다.
                      혼잡하면 올라가고, 한가하면 내려갑니다.
                      <strong className="text-purple-600"> 이 부분은 소각됩니다!</strong>
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded">
                    <p className="font-semibold mb-2">Priority Fee (팁)</p>
                    <p className="text-sm">
                      검증자에게 주는 팁입니다. 많이 줄수록 빨리 처리됩니다.
                      보통 1-2 Gwei 정도면 충분해요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">실전 계산 예시</h4>
                <p className="mb-3 text-sm">친구에게 ETH 1개를 보내려고 합니다.</p>
                <div className="font-mono text-sm space-y-1 mb-3">
                  <p>Gas Limit: 21,000</p>
                  <p>Base Fee: 30 Gwei (현재 네트워크 상황)</p>
                  <p>Priority Fee: 2 Gwei (보통 속도)</p>
                  <p className="pt-2 border-t">총 Gas 가격 = 30 + 2 = 32 Gwei</p>
                  <p className="text-purple-600 font-bold">수수료 = 21,000 × 32 = 672,000 Gwei = 0.000672 ETH</p>
                  <p className="text-green-600">≈ 2,000원 (ETH가 300만 원일 때)</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  * ERC20 토큰 전송은 65,000 gas가 필요해서 약 6,000원 정도 듭니다.
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">XRP 수수료 - 거의 공짜 수준</h3>

              <p className="mb-4">
                XRP의 수수료는 정말 저렴합니다. 기본적으로 <strong>10 drops</strong> (0.00001 XRP)만 내면 됩니다.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-6">
                <h4 className="font-bold mb-3 text-green-700 dark:text-green-400">얼마나 저렴한가요?</h4>
                <div className="text-sm space-y-2">
                  <p>• 일반 상황: 0.00001 XRP ≈ <strong>0.0005원</strong> (XRP가 500원일 때)</p>
                  <p>• 네트워크 혼잡 시: 0.001 XRP ≈ <strong>0.5원</strong></p>
                  <p className="pt-2 text-xs text-gray-600 dark:text-gray-400">
                    참고: 이 수수료는 소각되어 사라집니다. 장기적으로 XRP 총량이 줄어드는 효과가 있죠.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Tron 수수료 - 스테이킹하면 무료!</h3>

              <p className="mb-4">
                Tron의 가장 큰 장점은 <strong>스테이킹하면 거래 수수료가 무료</strong>라는 점입니다!
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-3">시나리오별 수수료</h4>

                <div className="mb-6">
                  <p className="font-semibold text-red-600 mb-2">일반 TRX 전송</p>
                  <div className="text-sm space-y-2">
                    <p><strong>스테이킹 없이:</strong> 268 Bandwidth 필요 = 약 30원</p>
                    <p className="text-green-600"><strong>스테이킹 있으면:</strong> 무료! (매일 5,000 Bandwidth 무료 제공)</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">TRC20 토큰 전송 (예: USDT)</p>
                  <div className="text-sm space-y-2">
                    <p><strong>스테이킹 없이:</strong> 31,895 Energy 필요 = 약 1,500원</p>
                    <p className="text-green-600"><strong>스테이킹 있으면:</strong> 거의 무료! (300 TRX 동결 시 하루 30만 Energy)</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <h4 className="font-bold mb-2 text-blue-700 dark:text-blue-400">Tron 수수료 절약 꿀팁</h4>
                <p className="text-sm mb-3">
                  자주 USDT를 주고받으신다면, 300-500 TRX 정도를 Freeze(동결)해두세요.
                  그러면 매일 충분한 Energy를 받아서 수수료 없이 거래할 수 있습니다.
                  동결 해제는 언제든 할 수 있어요!
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4">Solana 수수료 - 0.0005달러의 혁명</h3>

              <p className="mb-4">
                Solana는 정말 저렴합니다. 기본 수수료가 <strong>5,000 lamports</strong> (0.000005 SOL)뿐입니다!
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-6">
                <h4 className="font-bold mb-3 text-orange-700 dark:text-orange-400">실전 수수료 예시</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">SOL 전송</p>
                    <p>수수료: 0.000005 SOL ≈ <strong className="text-green-600">0.5원</strong> (SOL이 10만 원일 때)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">SPL 토큰 전송</p>
                    <p>처음 받는 토큰이라면 ATA(계정) 생성 비용 포함: 0.00204 SOL ≈ 200원</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">* 한 번만 내면 됩니다. 이후부턴 0.5원만!</p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded">
                    <p className="font-semibold mb-1">Priority Fee (우선 처리)</p>
                    <p className="text-xs">
                      네트워크가 혼잡할 때 우선 처리를 원하면 Priority Fee를 추가할 수 있습니다.
                      보통 1-5원 정도 추가하면 충분해요.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">5. 수수료 한눈에 비교하기</h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">거래 유형</th>
                      <th className="px-6 py-4 text-right">Bitcoin</th>
                      <th className="px-6 py-4 text-right">Ethereum</th>
                      <th className="px-6 py-4 text-right">XRP</th>
                      <th className="px-6 py-4 text-right">Tron</th>
                      <th className="px-6 py-4 text-right">Solana</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium">일반 전송</td>
                      <td className="px-6 py-4 text-right">500-5,000원</td>
                      <td className="px-6 py-4 text-right">2,000-10,000원</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">0.0005원</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">무료*</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">0.5원</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium">토큰 전송</td>
                      <td className="px-6 py-4 text-right text-gray-400">-</td>
                      <td className="px-6 py-4 text-right">6,000-30,000원</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">0.0005원</td>
                      <td className="px-6 py-4 text-right">무료-1,500원*</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">0.5원</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium">처리 시간</td>
                      <td className="px-6 py-4 text-right">10분-1시간</td>
                      <td className="px-6 py-4 text-right">12초-10분</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">3-5초</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">3초</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">0.4초</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-8">
                * Tron은 TRX 스테이킹 시 무료. 가격은 2024년 평균 기준이며 변동될 수 있습니다.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h4 className="font-bold mb-3 text-lg">수수료로 블록체인 선택하기</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>돈 아끼기:</strong> XRP, Solana, Tron (스테이킹)</li>
                  <li><strong>속도 중요:</strong> Solana, XRP, Tron</li>
                  <li><strong>안정성 우선:</strong> Bitcoin, Ethereum</li>
                  <li><strong>게임/NFT:</strong> Solana (빠르고 저렴)</li>
                  <li><strong>스테이블코인:</strong> Tron (USDT 거래량 1위)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">마무리하며</h2>

              <p className="text-lg mb-6">
                지금까지 Bitcoin, Ethereum, XRP, Tron, Solana 5대 블록체인을 비교해봤습니다.
                각각 태어난 이유도 다르고, 추구하는 가치도 달라요.
                "최고"의 블록체인은 없습니다. <strong>여러분의 목적에 가장 맞는</strong> 블록체인이 있을 뿐이죠.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-8">
                <h4 className="text-xl font-bold mb-4">간단 선택 가이드</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold mb-2">국제 송금</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">→ XRP 또는 Solana</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold mb-2">가치 저장</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">→ Bitcoin</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold mb-2">NFT 거래</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">→ Ethereum 또는 Solana</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold mb-2">게임/앱</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">→ Solana 또는 Tron</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold mb-2">USDT 거래</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">→ Tron (거래량 1위)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <p className="font-semibold mb-2">DeFi</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">→ Ethereum 또는 Solana</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-4">Walits와 함께라면 고민 끝!</h3>
                <p className="text-lg mb-6">
                  "어떤 블록체인을 써야 하지?" 고민하지 마세요.
                  Walits는 Bitcoin, Ethereum, XRP, Tron, Solana 등 <strong>주요 블록체인 30+</strong>를
                  <strong className="text-blue-600"> 하나의 API로 통합</strong>합니다.
                </p>
                <p className="mb-6">
                  사용자는 자신에게 맞는 블록체인을 자유롭게 선택하고,
                  여러분은 복잡한 기술 걱정 없이 서비스에만 집중하세요.
                  국제 송금은 XRP로, NFT는 Solana로, 스테이블코인은 Tron으로 -
                  상황에 맞게 최적의 주요 블록체인을 자동으로 활용할 수 있습니다.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  Walits 무료 상담 받기 →
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  이 가이드가 도움이 되셨나요? 블록체인 선택에 관해 더 궁금한 점이 있다면
                  언제든 <Link href="/inquiry" className="text-blue-600 hover:underline">문의하기</Link>로 연락 주세요.
                  친절하게 상담해드립니다!
                </p>
              </div>
            </>
          ) : (
            <>
              {/* English version placeholder */}
              <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
                English version coming soon...
              </p>
            </>
          )}
        </div>
      </article>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Walits. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
