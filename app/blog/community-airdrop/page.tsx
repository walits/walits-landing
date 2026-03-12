'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CryptoTaxAnalysisPost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: '가상자산 규제 & 세금',
      title: '코인 과세 유예는 끝났다: 국세청이 당신의 지갑을 터는 완벽한 시나리오',
      date: '2026년 3월 12일',
      readTime: '10분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Crypto Regulation & Tax',
      title: "The Crypto Tax Deferral Is Over: The IRS's Perfect Scenario for Emptying Your Wallet",
      date: 'March 12, 2026',
      readTime: '10 min read',
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

        <div className="mb-10 rounded-lg overflow-hidden">
          <Image
            src="/blog/airdrop.jpg"
            alt="국세청 가상자산 통합분석 시스템"
            width={1200}
            height={630}
            className="w-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              {/* 도입부 */}
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  대중은 선거철마다 정치인들이 던져주는 "코인 과세 유예"라는 달콤한 마약에 취해,
                  세금은 영원히 남의 일일 거라 착각한다.
                  하지만 현실은 냉혹하다.
                  정부는 당신의 시선이 비트코인 10만 불을 향해 있을 때,
                  조용히 당신의 목에 칼을 들이밀 '단두대'를 완성해가고 있다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  2027년 1월, 가상자산 양도소득세가 본격 시행된다.
                  그리고 그 전에, 국세청은 이미 감시 인프라를 완성하고 있다.
                  이 글은 시스템이 어떻게 작동하는지, 어디에 기술적 한계가 있는지,
                  그리고 합법적으로 대응할 수 있는 구조가 무엇인지를 정리한다.
                </p>
              </div>

              {/* 1. 팩트체크 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">1. 팩트체크: 시스템은 이미 돌기 시작했다</h2>

              <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  국세청이 조달청에 올린 <strong>'가상자산 통합분석 시스템'</strong> 입찰 공고가 현실이 됐다.
                  사업 총액 약 30억 원(부가세 포함) 규모로, 3월 입찰 후 4월 착수, 12월 개통을 목표로 한다.
                  업비트·빗썸에서 뽑아낸 거래 내역은 기본이고,
                  해외 거래소 신고 자료, 심지어 당신의 개인 지갑(메타마스크 등) 주소까지 싹 다 긁어모아
                  블록체인 온체인 데이터와 퓨전시키는 시스템이다.
                </p>
              </div>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">사업 일정</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>2026년 3월: 입찰 공고 (일반경쟁)</li>
                    <li>2026년 4월: 착수</li>
                    <li>2026년 10~11월: 통합테스트 목표 구동</li>
                    <li>2026년 12월: 시스템 개통</li>
                    <li>2027년 1월: 가상자산 양도소득세 본격 시행</li>
                  </ul>
                </div>
              </div>

              {/* 2. 3가지 데이터 출처 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">2. 국세청이 쓰는 3가지 데이터 출처</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">① 국내 거래소 보고 자료 (가장 핵심)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    업비트·빗썸 등 VASP(가상자산사업자)가 분기/연간으로 국세청에 제출하는 자료다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>사용자 실명·주민번호</li>
                    <li>거래 내역(일시·금액·유형·보유 현황)</li>
                    <li>입출금 기록 (개인 지갑으로의 출금 포함)</li>
                    <li>양도차익 계산에 직접 사용: 취득가액·양도가액 확인</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">② 블록체인 온체인 + 통합분석 시스템</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    새로 구축 중인 '가상자산 통합분석시스템'의 핵심 엔진이다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>지갑 주소 추적 및 경로 분석 (스왑·브릿지 포함)</li>
                    <li>AI 머신러닝 이상 패턴 탐지</li>
                    <li>트랜잭션 80억 건 처리 목표</li>
                    <li>거래소 데이터와 연동해 탈세 검증</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">③ 해외 거래소 정보 공유</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    2026년부터 국가 간 과세 정보 자동 교환이 본격화된다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>국내 거래소 → 외국 과세당국: 해외 사용자 데이터 공유</li>
                    <li>외국 과세당국 → 국세청: 내국인 바이낸스 등 해외 거래 데이터 수취</li>
                    <li>CBDC 거래 포함 예정</li>
                  </ul>
                </div>
              </div>

              {/* 3. 과세 계산법 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">3. 과세 계산법: 숨 쉬는 것까지 뜯긴다</h2>

              <div className="mb-8 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">양도소득세 계산식</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 font-mono text-sm mb-4">
                  <p className="text-gray-800 dark:text-gray-200">양도가액</p>
                  <p className="text-gray-800 dark:text-gray-200">− (취득가액 + 부대비용)</p>
                  <p className="text-gray-800 dark:text-gray-200">= 과세표준</p>
                  <p className="text-gray-800 dark:text-gray-200">× 20% (+ 지방세 2% = 실효 22%)</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">연 250만 원 기본공제 적용</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  다음 해 5월 종합소득세 신고 시 제출. 거래소 내역서 필수.
                </p>
              </div>

              <div className="mb-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">에어드랍·스테이킹도 과세 대상</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  단순히 코인을 사고팔아 남긴 차익만 털어가는 게 아니다.
                  DeFi에서 받은 스테이킹 이자, 공짜로 받은 에어드랍 코인까지
                  <strong> '기타 소득'으로 간주해 22%의 세금</strong>을 뜯어낼 준비를 하고 있다.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>스테이킹 보상 → 기타소득 22%</li>
                  <li>에어드랍 수령 → 기타소득 22%</li>
                  <li>DEX 유동성 공급 수수료 → 과세 여부 검토 중</li>
                </ul>
              </div>

              {/* 4. 기울어진 운동장 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">4. 주식은 구제하고, 코인은 쥐어짠다</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">항목</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">주식</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">가상자산</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">손실 이월 공제</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">5년간 이월 가능</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">불가 (당해연도만)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">기본공제</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">5,000만 원</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">250만 원</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">세율</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">20~25% (대주주만)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">22% (전체)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">손익 통산</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">국내외 주식 합산</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">코인 간 합산만</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-12 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">손실 이월 불가의 현실</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  작년에 코인으로 1억 원을 잃고, 올해 1천만 원을 벌었다고 치자.
                  상식적으론 9천만 원 적자지만,
                  국세청 시스템은 올해 번 1천만 원에 대해서만 칼같이 22%의 세금 고지서를 날린다.
                  <strong> 합법적이지만 가장 완벽한 수탈 구조다.</strong>
                </p>
              </div>

              {/* 5. 시스템 구성요소 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">5. 시스템 구성요소: 무엇을 어떻게 만드나</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">데이터 통합 레이어</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>VASP 거래명세서 수집 및 정규화 파이프라인</li>
                    <li>블록체인 노드 API 실시간 연동 (이더리움·비트코인·트론 등)</li>
                    <li>해외 과세당국 정보 수취 채널 (CRS/FATCA 유사 체계)</li>
                    <li>지갑 주소 ↔ 실명 매핑 데이터베이스</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">AI 분석 엔진</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>머신러닝 기반 이상 패턴 탐지 (탈세 의심 거래)</li>
                    <li>주소 클러스터링: 동일인 소유 지갑 그루핑</li>
                    <li>믹싱·토네이도캐시 경유 자금 추적 시도</li>
                    <li>80억 건 이상 트랜잭션 처리 인프라 (HA 클러스터)</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">조사 지원 대시보드</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>납세자별 전체 거래 흐름 시각화</li>
                    <li>의심 주소 리스트 및 우선순위 조사 대상 추출</li>
                    <li>5년치 거래 내역 클릭 한 번에 엑셀 출력</li>
                    <li>PII 암호화 및 접근 권한 관리</li>
                  </ul>
                </div>
              </div>

              {/* 6. 어려운 점 - 기술적 한계 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">6. 시스템의 기술적 한계: 빠져나갈 구멍은 있는가</h2>

              <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                <strong>주의:</strong> 이 섹션은 시스템의 기술적 현실을 정보 목적으로 설명합니다. 탈세는 명백한 범죄이며, 합법적인 절세 전략을 권장합니다.
              </div>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">① 오프체인 거래 추적 한계</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    블록체인 온체인 데이터는 수집 가능하지만, 오프체인 레이어는 기술적으로 벽이 있다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>라이트닝 네트워크(비트코인 L2): 채널 내부 거래는 온체인에 미기록</li>
                    <li>상태 채널 기반 결제: 최종 정산만 온체인 반영</li>
                    <li>P2P 현물 거래: 완전히 추적 불가 (단, 금융실명제 우회 위험)</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">② HD 지갑 파생 주소 대응 한계</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    메타마스크 등 HD(Hierarchical Deterministic) 지갑은 하나의 시드에서 수천 개의 주소를 파생한다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>RFP에 "HD 월렛 파생 경로 일부 반영 가능"이라 명시 → 완전 추적은 불가</li>
                    <li>새 주소를 지속적으로 생성하면 클러스터링 정확도 저하</li>
                    <li>단, 거래소 출금 주소는 이미 매핑됨 → 시작점 추적은 가능</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">③ DEX·크로스체인 브릿지 분석 복잡성</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    유니스왑, 스시스왑 등 DEX 거래는 온체인에 기록되지만,
                    크로스체인 브릿지를 경유하면 체인 간 자금 추적이 어렵다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>멀티체인 데이터 수집 인프라 구축 비용과 시간이 큰 과제</li>
                    <li>레이어2(옵티미즘·아비트럼 등) 상태 데이터 실시간 수집 난이도 높음</li>
                    <li>솔라나·코스모스 등 비EVM 체인은 초기 시스템에서 커버리지 제한 가능</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">④ 취득가액 소명 문제</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    시스템이 가장 약한 고리가 바로 '취득가액 산정'이다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>2017~2020년 초기 구매 내역은 거래소 데이터가 없는 경우 多</li>
                    <li>취득가액 불명 시 국세청이 0원으로 간주할 수 있음 → 전액 과세 위험</li>
                    <li>이동평균법 또는 선입선출법 중 납세자가 선택 가능 (절세 전략 포인트)</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">⑤ 감리 리스크 및 일정 압박</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    8개월 개발 일정(4월~12월)은 80억 건 트랜잭션을 처리하는 시스템으로선 극도로 빡빡하다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>10월 구동 목표치 미달 시 감리-개발사 간 책임 분쟁 가능</li>
                    <li>AI 오탐지율(false positive) 이슈: 선의의 납세자가 조사 대상 선정 위험</li>
                    <li>초기 시스템은 완성도 한계 존재 → 2028~2029년 시스템 고도화 후 소급 조사 가능성</li>
                  </ul>
                </div>
              </div>

              {/* 7. 합법적 대응 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">7. 합법적인 대응 전략</h2>

              <div className="mb-12 space-y-6">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">① 취득가액 증빙 자료 지금 당장 확보</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    거래소 전체 내역서를 지금 다운로드하라. 폐업한 거래소(코빗 2020년 이전, 해외 거래소 등)는
                    데이터 복구가 불가능해질 수 있다. 취득 당시 스크린샷, 이메일 확인서, 은행 이체 내역을 함께 보존하라.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">② 취득가액 산정 방법 선택 전략</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    이동평균법과 선입선출법(FIFO) 중 자신의 거래 패턴에 유리한 방법을 선택할 수 있다.
                    하락장에서 매도가 많다면 FIFO가 유리할 수 있고, 상승 초기 물량이 많다면 이동평균법이 유리할 수 있다.
                    세무사 상담을 통해 사전에 결정하라.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">③ 연도별 손익 분산 전략</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    손실 이월이 안 되므로, 이익이 큰 해에는 손실 중인 코인을 의도적으로 매도해
                    당해 연도 손익을 상계하는 전략이 유효하다. (세금 절감 후 재매수 가능)
                    단, 연 250만 원 기본공제를 최대한 활용하는 타이밍 전략도 중요하다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">④ 온체인 활동 기록 체계화</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    DeFi·스테이킹·에어드랍 등 복잡한 온체인 활동을 직접 소명하지 못하면
                    국세청 추정 과세를 받을 수 있다. Koinly, CoinTracker 등 암호화폐 세금 계산 툴을 활용해
                    연간 거래 내역을 정리해두는 것이 필수적이다.
                  </p>
                </div>
              </div>

              {/* 결론 */}
              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">결론: 준비된 자만이 살아남는다</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  시스템은 완벽하지 않다. 기술적 한계도 분명히 존재한다.
                  그러나 "어차피 못 잡겠지"라는 안이한 생각으로 준비를 미루면,
                  2028~2029년 시스템 고도화 이후의 소급 조사가 당신을 기다릴 것이다.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  복잡한 온체인 흐름을 스스로 소명하지 못하면,
                  수익보다 더 큰 세금 폭탄과 가산세를 맞고 시장에서 영원히 퇴출당할 것이다.
                  지금 당장 거래 내역을 정리하고, 합법적인 절세 구조를 짜두는 것이
                  가장 현명한 선택이다.
                </p>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">가상자산 커스터디·컴플라이언스 솔루션이 필요하신가요?</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Walits는 기관·기업을 위한 MPC 기반 커스터디 지갑과 규제 대응 솔루션을 제공합니다.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  문의하기 →
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* English version */}
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  The public, intoxicated by politicians' promises of "crypto tax deferrals" every election season,
                  has been living under the illusion that taxes are always someone else's problem.
                  But reality is harsh.
                  While your eyes are fixed on Bitcoin hitting $100K,
                  the government has been quietly assembling its guillotine.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  January 2027: Korea's virtual asset capital gains tax goes fully live.
                  And before that, the National Tax Service (NTS) is already completing its surveillance infrastructure.
                  This article covers how the system works, where its technical limits lie,
                  and what legal options exist to protect yourself.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">1. Fact Check: The System Is Already Running</h2>

              <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The NTS has officially tendered a <strong>'Virtual Asset Integrated Analysis System'</strong> bid.
                  With a total budget of approximately ₩3 billion (VAT included), bidding starts in March 2026,
                  development kicks off in April, and the system goes live in December.
                  It will ingest transaction records from Upbit and Bithumb, data from foreign exchange reports,
                  and even personal wallet addresses (MetaMask, etc.) — all fused with blockchain on-chain data.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">2. Three Data Sources the NTS Will Use</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">① Domestic Exchange Reports (Most Critical)</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Real name, resident registration number</li>
                    <li>Transaction history (date, amount, type, holdings)</li>
                    <li>Deposit/withdrawal records including transfers to personal wallets</li>
                    <li>Used directly to calculate acquisition price and transfer price</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">② Blockchain On-Chain + Integrated Analysis System</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Wallet address tracking and flow analysis (swaps, bridges)</li>
                    <li>AI/ML anomaly pattern detection</li>
                    <li>Target: processing 8 billion+ transactions</li>
                    <li>Cross-referenced with exchange data for tax evasion verification</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">③ International Information Sharing</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Korean exchanges → foreign tax authorities: foreign user data</li>
                    <li>Foreign tax authorities → NTS: Korean users' Binance and offshore trading data</li>
                    <li>CBDC transactions to be included</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">3. Tax Formula: Even Breathing Gets Taxed</h2>

              <div className="mb-8 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Capital Gains Tax Calculation</h3>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 font-mono text-sm mb-4">
                  <p>Transfer price</p>
                  <p>− (Acquisition price + incidental costs)</p>
                  <p>= Taxable income</p>
                  <p>× 20% (+ 2% local tax = effective 22%)</p>
                  <p className="text-gray-500 mt-2">Annual basic deduction: ₩2.5 million</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Filed with comprehensive income tax return in May of the following year.
                </p>
              </div>

              <div className="mb-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Airdrops & Staking Are Also Taxable</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  It's not just buy-sell profits. DeFi staking rewards and free airdrops are
                  classified as <strong>"miscellaneous income" taxed at 22%</strong>.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>Staking rewards → miscellaneous income, 22%</li>
                  <li>Airdrop receipts → miscellaneous income, 22%</li>
                  <li>DEX liquidity provision fees → under review</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">4. Stocks Get Relief, Crypto Gets Squeezed</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Item</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Stocks</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Crypto</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Loss carryforward</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">5 years</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">Not allowed</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Basic deduction</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">₩50 million</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">₩2.5 million</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Tax rate</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">20-25% (major shareholders only)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">22% (everyone)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Loss netting</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">Domestic + foreign stocks</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">Crypto-to-crypto only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">5. Technical Limits: Where Are the Gaps?</h2>

              <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                <strong>Note:</strong> This section describes technical realities for informational purposes. Tax evasion is a crime. Legal tax optimization strategies are recommended.
              </div>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">① Off-Chain Transaction Tracking Limits</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Lightning Network (Bitcoin L2): in-channel transactions aren't recorded on-chain</li>
                    <li>State channel-based payments: only final settlement hits the chain</li>
                    <li>P2P cash-for-crypto trades: technically untraceable (but violates financial real-name rules)</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">② HD Wallet Derivation Path Limits</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>RFP states "partial HD wallet derivation path support" — full coverage not guaranteed</li>
                    <li>Constantly generating new addresses degrades clustering accuracy</li>
                    <li>However, exchange withdrawal addresses are already mapped — starting points are traceable</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">③ DEX & Cross-Chain Bridge Complexity</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Multi-chain data collection infrastructure is a major cost and time challenge</li>
                    <li>Layer 2 (Optimism, Arbitrum) real-time state data collection is technically hard</li>
                    <li>Non-EVM chains (Solana, Cosmos) likely have limited coverage in the initial system</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">④ Acquisition Cost Proof Problem</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Pre-2020 purchase records are often missing from exchange data</li>
                    <li>If acquisition cost is unverifiable, NTS may assume ₩0 → full amount taxed</li>
                    <li>Taxpayers can choose between moving average or FIFO methods — a key tax planning lever</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">⑤ Audit Risk & Timeline Pressure</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>8-month development window for an 8-billion-transaction system is extremely aggressive</li>
                    <li>AI false positive rate risk: innocent taxpayers may be flagged for audit</li>
                    <li>Initial system will have coverage gaps — retroactive investigations likely as system matures in 2028-2029</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">6. Legal Defense Strategies</h2>

              <div className="mb-12 space-y-6">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">① Secure Acquisition Cost Evidence Now</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Download full transaction histories from all exchanges immediately. Data from defunct exchanges
                    may become permanently unrecoverable. Preserve screenshots, email confirmations, and bank transfer records.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">② Choose Your Cost Basis Method Strategically</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You can choose between moving average and FIFO methods.
                    Consult a tax advisor to determine which minimizes your tax burden based on your transaction history.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">③ Annual Gain/Loss Balancing Strategy</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Since loss carryforward is prohibited, intentionally realizing losses in high-gain years
                    to offset current-year gains is a valid and legal strategy.
                    (You can repurchase the same assets afterward.)
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">④ Systematize On-Chain Activity Records</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complex DeFi, staking, and airdrop activities that you cannot explain will be subject to
                    estimated taxation by the NTS. Tools like Koinly or CoinTracker can automatically compile
                    annual tax reports from your on-chain history.
                  </p>
                </div>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion: Only the Prepared Will Survive</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The system has limits. Technical gaps clearly exist.
                  But assuming "they'll never catch me" and delaying preparation means
                  retroactive investigations in 2028-2029 — when the system matures — will find you.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  If you cannot explain complex on-chain flows yourself,
                  you risk tax bills larger than your profits, plus penalties that push you out of the market permanently.
                  Start organizing your transaction history now and build a legal tax structure before January 2027.
                </p>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Need a Crypto Custody or Compliance Solution?</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Walits provides MPC-based custody wallets and regulatory compliance solutions for institutions and enterprises.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Contact Us →
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
