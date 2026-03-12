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

        <div className="mb-8 flex items-start gap-3 px-5 py-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300">
          <span className="mt-0.5 text-amber-500 dark:text-amber-400 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </span>
          <p className="leading-relaxed">
            {language === 'ko'
              ? '이 글은 공개된 자료와 취재를 바탕으로 작성된 분석·의견·예상 콘텐츠입니다. 세법 해석 및 시행 세부 사항은 추후 변경될 수 있으며, 개인의 세무 판단에는 반드시 공인 세무사 또는 전문가의 확인을 거치시기 바랍니다.'
              : 'This article is an analysis and opinion piece based on publicly available information. Tax law interpretations and implementation details are subject to change. Please consult a licensed tax professional before making any personal tax decisions.'}
          </p>
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

              <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
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

              {/* 스테이블코인 과세 */}
              <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">스테이블코인도 과세 대상인가? — 아직은 소액이라 괜찮지만...</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  USDT·USDC 같은 스테이블코인은 현재 <strong>가상자산이용자보호법상 '가상자산'으로 분류</strong>된다.
                  원칙적으로는 양도차익 과세 대상이다.
                  하지만 현실적으로 여기서부터 이야기가 복잡해진다.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  스테이블코인의 '차익'은 달러 페그가 아니라 <strong>원/달러 환율 변동분</strong>에서 나온다.
                  예를 들어 1,300원에 USDT 100개를 샀다가 환율이 1,350원이 됐을 때 팔면, 5,000원 차익이 발생한다.
                  이론상 이 5,000원도 과세 대상이다. 실제로는? 연 250만 원 기본공제 이하라 세금은 0원이다.
                  문제는 <strong>행정 부담</strong>이다.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-blue-200 dark:border-blue-700 mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">DeFi에서 스테이블코인 과세가 악몽인 이유</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    DEX에서 ETH → USDT → BTC 스왑을 한 번 하면 과세 이벤트가 <strong>두 번</strong> 발생한다.
                    ETH 매도 차익 + USDT 매도 차익(환율 변동분)을 각각 계산해야 한다.
                    하루에 수십 번 스왑을 돌리는 DeFi 유저라면, 연간 과세 이벤트가 수천 건에 달할 수 있다.
                    대부분 건당 차익이 수백 원~수천 원 수준이지만, 그 내역을 <em>전부 신고</em>해야 한다.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>스왑 1회 = 최대 2건의 가상자산 양도 이벤트</li>
                    <li>각 이벤트마다 취득가액·양도가액·환율 기준 계산 필요</li>
                    <li>총 차익이 250만 원 미만이어도 <strong>신고 의무</strong>는 별개 문제</li>
                    <li>세금 0원짜리 신고서를 수천 줄 작성해야 하는 상황 가능</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">현실적 전망: 지금 당장은 소액이라 괜찮지만</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>국내 스테이블코인 사용량이 아직 낮아 국세청도 이 부분 적극 집행은 후순위</li>
                    <li>CBDC는 명시적으로 가상자산 과세 대상에서 제외 예정</li>
                    <li>원화 스테이블코인(KRW 페그) 등장 시 과세 방식 재검토 불가피</li>
                    <li>EU MiCA처럼 스테이블코인 소액 거래에 <strong>de minimis(최소 면세) 기준</strong>을 도입할 가능성 있으나, 현행법에 규정 없음</li>
                    <li>DeFi 사용량이 폭발하면 국세청이 '현실적으로 잡을 수 없는' 상황에 직면 → 2029년 이후 별도 지침 가능성</li>
                  </ul>
                </div>
              </div>

              {/* 4. 기울어진 운동장 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">4. 코인 vs 주식: 형평성 핵심 쟁점</h2>

              {/* 금투세 폐지 배경 */}
              <div className="mb-6 p-5 bg-gray-900 dark:bg-gray-100 rounded-lg text-white dark:text-gray-900 text-sm leading-relaxed">
                <p className="mb-2"><strong>금투세(금융투자소득세)란?</strong> 주식·펀드 등 금융투자로 연 5,000만 원 이상 수익을 올린 투자자에게 20~25%를 과세하는 제도. 2020년 입법됐으나 두 차례 시행이 유예됐고, <strong>2024년 12월 10일 소득세법 개정으로 결국 폐지됐다.</strong></p>
                <p>폐지 배경: "상위 1%(약 15만 명)가 전체 상장주식의 53%를 보유 — 이들이 세금 때문에 주식을 팔면 주가가 떨어지고 일반 투자자가 피해를 본다"는 논리가 우세했다. 이와 함께 증권거래세도 코스닥 기준 2022년 0.23% → 2025년 0.15%로 단계 인하, 대주주 양도세 요건도 보유 10억 → 50억으로 완화됐다.</p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                금투세가 폐지된 지금, 코인 과세와의 형평성 논쟁은 두 가지 시나리오로 나눠 봐야 한다.
              </p>

              {/* 시나리오 A: 현재 */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">시나리오 A — 현재 (금투세 폐지 상태)</h3>
                <div className="mb-4 overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">항목</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">주식 (2025년 현행)</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">가상자산 (2027년 예정)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">일반 투자자 양도세</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600 font-bold">없음 (금투세 폐지)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600 font-bold">22% (250만 원 초과분)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">대주주 양도세</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">20~25% (50억 이상 보유)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">22% (전체 해당)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">거래세</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">증권거래세 0.15% (코스닥)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">없음</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">건보료 영향</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">없음</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">기타소득 합산 → 보험료 증가</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                  주식으로 1억을 벌면 양도세 0원. 코인으로 1억을 벌면 약 2,145만 원.
                  <strong className="text-red-700 dark:text-red-400"> 같은 투자 이익에 완전히 다른 잣대다.</strong>
                  '소득 있는 곳에 세금 있다'는 원칙은 코인에만 적용된다.
                </div>
              </div>

              {/* 시나리오 B: 금투세 재시행 가정 */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">시나리오 B — 금투세가 다시 시행된다면</h3>
                <div className="mb-4 overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">항목</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">주식 (금투세 시행 가정)</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">가상자산 (2027년 예정)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">기본공제</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">5,000만 원</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">250만 원 <span className="text-xs">(20배 차이)</span></td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">손실 이월 공제</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">5년 이월 가능</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">불가 (당해연도만)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">세율</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">20~25%</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">22%</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">자산 분류</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">금융투자소득</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">기타소득 (건보료 연동)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                  금투세가 재시행되더라도 코인 투자자는 여전히 불리하다. 기본공제 20배 격차, 손실 이월 불가, 건보료 연동이라는 3중 부담이 남는다.
                  <strong className="text-orange-700 dark:text-orange-400"> 금투세 재시행이 형평성 문제를 해결하는 게 아니라, 코인 과세 조건을 주식 수준으로 맞춰야 한다는 게 핵심 쟁점이다.</strong>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                <div className="p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">① 손실 이월 불가 — 금투세 폐지와 무관하게 불합리</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    작년에 코인으로 1억 원을 잃고, 올해 1천만 원을 벌었다고 치자.
                    국세청은 올해 번 1천만 원에 칼같이 22%를 청구한다.
                    금투세가 살아 있었다면 주식 투자자는 작년 손실 1억을 이월해 세금 0원이다.
                    금투세가 폐지된 지금은 주식 자체가 비과세이니 더 말할 것도 없다.
                    <strong className="text-red-700 dark:text-red-400"> 어느 시나리오에서도 코인 투자자만 불리하다.</strong>
                  </p>
                </div>

                <div className="p-5 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">② 1,000만 코인 투자자 — 청년층 반발 가능성</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    국내 코인 투자자 수는 약 1,000만 명. 주식 투자자와 큰 차이가 없다.
                    특히 20~30대 청년 투자자 비중이 높다. 오문성 교수는
                    <em>"청년 투자자 비중이 높은데 가상화폐에 대해서만 과세가 시행될 경우 반발이 더 커질 수 있다"</em>고 지적한다.
                    주식은 부유층의 반대 논리로 폐지됐고, 코인은 청년층이 몰려 있다는 점에서 정치적 압력 구도가 다르다.
                    <strong className="text-orange-700 dark:text-orange-400"> 과세 형평성은 결국 정치적 결정의 문제이기도 하다.</strong>
                  </p>
                </div>

                <div className="p-5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">③ '무형자산·기타소득' 분류 — 억지로 끼워 맞춘 칸</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    주식은 '금융투자자산'으로 분류되어 투자 손실에 대한 세제 혜택이 설계돼 있다.
                    반면 가상자산은 IFRS상 무형자산으로 분류되어 복권 당첨금·강의료와 같은 기타소득 카테고리에 묶인다.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    오문성 한양여대 세무회계학과 교수(한국조세정책학회장)는 이에 대해
                    <em>"가상화폐가 무형자산으로 분류된 것은 본질적으로 닮아서가 아니라 어디에도 넣기 애매해 임시로 넣은 성격에 가깝다"</em>며
                    <em>"시장 특성을 고려하면 금융자산으로 정의하는 것이 자연스럽다"</em>고 지적했다.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    기타소득 분류는 손실 이월공제 불가에 그치지 않는다.
                    <strong className="text-yellow-700 dark:text-yellow-400"> 기타소득은 건강보험료 산정에도 반영되어 추가 부담으로 이어진다.</strong>
                    주식 양도차익에는 없는 이중 부담이다.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">④ 과세 집행 가능성 자체에 대한 의문</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    형평성 논쟁과 별개로, 집행 가능성 자체도 흔들린다.
                    코인 거래는 소수점 단위·분할 매매가 일반적이고 빈번해서 납세자가 취득가와 손익을 스스로 계산·입증하기 쉽지 않다.
                    거래소가 연간 내역서를 제공하는 방식이 거론되지만, 그 경우 거래소에 과도한 시스템·인력 부담이 집중된다.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    P2P·DeFi 영역 확대로 거래소 중심 집행의 한계는 더 커지고 있다.
                    오 교수는 CARF(국제 암호자산 정보교환체계)에 대해서도
                    <em>"유용하긴 하겠지만 시장·거래소·가격이 워낙 파편화돼 있어 이상적으로 흘러가기 어렵다"</em>고 평가했다.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    국세청의 압류 가상자산 관리 부실 사례까지 더하면,
                    <strong className="text-gray-700 dark:text-gray-300"> 인프라 신뢰가 먼저 쌓여야 과세 명분도 선다.</strong>
                  </p>
                </div>
              </div>

              {/* 5. 시스템 구성요소 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">5. RFP로 읽는 시스템 구성: 실제로 무엇을 만드나</h2>

              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                아래 내용은 국세청이 공개한 제안요청서(RFP) 사업범위를 바탕으로 정리한 것입니다.
              </p>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP 1항</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">가상자산 정보 통합관리</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    핵심은 <strong>거래소 데이터 + 온체인 데이터 + 국세자료</strong> 세 축의 결합이다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>VASP(업비트·빗썸 등)의 <strong>거래명세서·거래집계표</strong> 연계 관리</li>
                    <li>블록체인 거래정보, 동향정보, 지갑주소 등 외부 자료 수집·구축</li>
                    <li className="text-gray-900 dark:text-gray-100 font-medium">
                      법인세·소득세·<strong className="text-red-600 dark:text-red-400">상속/증여세</strong> 신고, 세적, 조사 등 국세자료 연계
                      <span className="ml-2 text-xs text-red-500">(★ 상속·증여 탈루 집중 타깃)</span>
                    </li>
                    <li><strong>연도/반기/분기/월/일별</strong> 보유 가상자산 증감 현황 및 잔고 수량·금액 등 가상자산별 상세내역 파악</li>
                    <li>거래명세서, 거래집계표, <strong>해외금융계좌신고</strong>, 블록체인 자료 등을 인별 통합 조회</li>
                    <li>가상자산별 주요 정보(<strong>백서·상장내역·시세·특징</strong>) 및 가상자산사업자 관련 정보 등록·조회</li>
                    <li>특정 지갑주소와 <strong>TXID(트랜잭션 ID)를 중심</strong>으로 블록체인 거래흐름 시각화 및 지갑 상세내역 조회</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded text-xs text-red-700 dark:text-red-300">
                    상속·증여세 신고 자료와 코인 거래 내역을 교차 검증한다. 부모·자녀 명의 지갑으로 코인을 보낸 기록이 신고 누락 여부로 추적될 수 있다. 특히 "일별" 잔고 추적이 가능하다는 건 특정 날짜에 코인이 어디로 사라졌는지 국세청이 직접 확인할 수 있다는 뜻이다.
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP 2항</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">거래정보 통합분석 + AI 이상거래 탐지</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    단순 조회가 아닌 <strong>탈루혐의 자동 추출 및 조사대상자 선정</strong>이 목표다.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>자금세탁, <strong>상속·증여 후 신고 누락</strong> 등 불법 거래 흐름 분석·검증 프로세스 구축</li>
                    <li><strong>NTIS(국세통합시스템)</strong> 자료 + 가상자산 수집 정보 결합 → 조사대상자별 탈루혐의 분석 및 소명자료 검증</li>
                    <li className="text-gray-900 dark:text-gray-100 font-medium">
                      <strong>조사 대상자 자동 선정 로직:</strong> 거래기간·종류·수량·금액·횟수 + 납세자 연령·사업자 여부 교차 분석
                    </li>
                    <li className="text-gray-900 dark:text-gray-100 font-medium">
                      AI 머신러닝 이상거래 패턴 탐지 (토큰 단위 전체 거래내역 대상):
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 font-normal text-gray-600 dark:text-gray-400">
                        <li><strong>고액이전 거래</strong> — 대규모 코인 이동 즉시 감지</li>
                        <li><strong>소액반복 입금 후 환전거래</strong> — 스머핑(자금 쪼개기) 패턴 탐지</li>
                      </ul>
                    </li>
                    <li>
                      다차원 통계 제공:
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>거래유형별 <strong>인구통계학적 통계</strong>(연령별·성별·지역별)</li>
                        <li>가상자산 종류별 기간별 통계 (가격변동 추세, 기간별 거래유형별 거래량)</li>
                        <li>VASP별·거래상대방별·기간별 통계 (유입·유출, 거래량)</li>
                        <li>조사유형별 통계 및 시스템 사용 통계</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded text-xs text-orange-700 dark:text-orange-300">
                    "인구통계학적 통계"는 특히 주목할 부분이다. 40대 자산가 남성이 특정 시기에 대량 매도 후 신고를 누락했다면, 동일 패턴을 보이는 그룹 전체를 한 번에 추출해 조사 대상 목록을 만들 수 있다는 뜻이다. 개인 단위가 아닌 집단 패턴 기반 탈루 의심자 선별이 가능해진다.
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP 3항</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">조사관 업무 지원 UI</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>사용자별·권한별 맞춤형 초기화면 및 메뉴 제공</li>
                    <li>나의 할 일, 진행관리, 결재관리, 인계·인수 관리 등 업무 편의 기능</li>
                    <li>대량 분석자료를 일목요연하게 보여주는 사용자 친화적 화면</li>
                    <li>접속로그 관리 등 시스템 보안 관리 기능</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP 4항</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">안정적 개통 및 운영 체계</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>국가정보자원관리원(NIRS)과 긴밀 협업하여 인프라 구축</li>
                    <li>단위·통합·성능·인수 테스트 및 시범운영 실시</li>
                    <li><strong>대량 과세자료 처리</strong> 등 과부하 프로세스 대상 성능테스트로 안정적 처리성능 확보</li>
                    <li>시범운영 환경 구성, 교재 제작, 조사관 교육 실시</li>
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

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">⑥ 구현하기 가장 어려운 기술적 과제들</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    RFP 요구사항 자체는 명확하지만, 실제 구현 과정에서 SI 업체가 마주칠 기술적 난관들이 있다.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">일별 잔고 스냅샷 — 데이터 볼륨 문제</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        연도/월/일별 보유 현황을 모든 납세자에 대해 저장한다는 것은 엄청난 스토리지 압박이다.
                        납세자 수백만 명 × 수백 종 코인 × 365일 단위 스냅샷을 효율적으로 관리하는 파티셔닝·압축 전략 없이는
                        DB가 감당하기 어렵다. 컬럼형 DB(Parquet 등)나 시계열 DB 도입 여부가 설계의 핵심이 된다.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">TXID 중심 그래프 시각화 — 실시간 성능</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        특정 TXID·지갑 주소에서 출발해 연결된 모든 거래를 그래프로 탐색하는 기능은
                        그래프 DB(Neo4j 등) 없이는 관계형 DB 조인만으로 수백 뎁스(depth) 탐색 시 성능이 급격히 저하된다.
                        조사관이 "클릭 한 번"으로 즉시 결과를 보려면 사전 인덱싱(pre-computation)과 캐싱 레이어가 필수다.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">AI 이상거래 탐지 — 레이블 데이터 부족</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        머신러닝 모델 학습에 필요한 '확실한 탈세 거래' 레이블 데이터가 충분하지 않다.
                        기존 국세청 조사 실적을 레이블로 쓸 수 있지만 그 수가 한정적이고,
                        가상자산 거래 패턴은 주식·은행 거래와 달라 기존 AML 모델을 그대로 이식하기도 어렵다.
                        결국 초기에는 규칙 기반(rule-based) 탐지에 의존하다가 점진적으로 ML 비중을 높이는 하이브리드 구조가 현실적이다.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">가상자산별 백서·시세 정보 등록·관리</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        국내외 거래소에 상장된 코인 종류만 수천 개다. 폐지된 코인, 리브랜딩된 토큰, 하드포크 파생 코인을
                        어떻게 동일성을 유지하며 관리할지는 데이터 거버넌스 문제다.
                        특히 상장폐지 시점의 시세를 어떤 기준으로 확정할지는 납세자 불복 소지가 있어
                        법령 해석과 기술 구현이 맞닿는 민감한 영역이다.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">인구통계 기반 대상자 선정의 역차별 리스크</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        연령·성별·지역 기반 통계로 조사 대상을 선정하면, 특정 집단이 과도하게 타깃될 수 있다.
                        이는 행정 소송 및 개인정보보호 이슈와 직결되며,
                        개인정보보호위원회와의 협의 없이 이 기능을 조사에 직접 활용하기는 법적으로 불안정하다.
                        시스템에는 구현되더라도 실제 조사 근거로 쓰이려면 별도 법적 근거 마련이 선행되어야 한다.
                      </p>
                    </div>
                  </div>
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

              {/* 실제 과세 방식 */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">8. 그래서 세금을 어떻게 매긴다는 건가</h2>

              <div className="mb-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">구조는 생각보다 단순하다. 사람을 셋으로 나눠 생각하면 된다.</p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold">A</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">국내 거래소 안에서만 거래한 사람</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        과세 기준은 <strong className="text-gray-700 dark:text-gray-300">'매도(양도) 시점'</strong>이다. 가격이 올랐더라도 팔지 않으면 과세 없다.
                        빗썸에서 1억에 BTC 1개를 사서 그냥 들고 있다면 — 세금 0원, 신고 의무 없음.
                        그 BTC를 1.5억에 팔았을 때 비로소 차익 5천만 원에 22%가 붙는다.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        이 경우 업비트·빗썸이 연간 '매수·매도' 내역에서 취득가액·양도가액을 자동 계산해 국세청에 제출한다.
                        납세자는 5월에 거래소가 만들어준 내역서를 확인하고 신고하면 끝.
                        <strong className="text-gray-700 dark:text-gray-300"> 사실상 자동 처리.</strong>
                      </p>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                        ※ 단, 스테이킹·에어드랍으로 코인 수량이 늘어난 경우는 다르다. 그 자체가 기타소득으로 수령 시점에 과세된다 (팔기 전이라도).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">B</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">해외 거래소(바이낸스 등)도 쓴 사람</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        2026년부터 국가 간 과세 정보가 자동 교환된다.
                        바이낸스 KYC에 한국 주민번호가 등록돼 있다면 거래 내역이 국세청에 들어온다.
                        <strong className="text-gray-700 dark:text-gray-300"> 스스로 신고하지 않으면 가산세 대상.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-bold">C</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">개인 지갑(메타마스크 등)으로 옮긴 사람</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        거래소 출금 기록은 남는다. 거기서부터 코인이 어디로 갔는지 소명하지 못하면
                        국세청은 전액 양도로 간주할 수 있다.
                        DeFi·스테이킹·에어드랍까지 더하면 스스로 정리해서 신고해야 한다.
                        <strong className="text-gray-700 dark:text-gray-300"> 이 시스템을 만드는 진짜 이유가 여기에 있다.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 p-5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">한 줄 요약:</strong> 거래소 안에서만 논 사람은 거래소가 다 해준다. 개인 지갑을 쓴 순간부터 본인이 직접 소명해야 한다. 국세청의 통합분석 시스템은 후자를 잡기 위해 존재한다.
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

              <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
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

              {/* Stablecoin taxation */}
              <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Are Stablecoins Taxable Too? — Low Usage Now, But a Ticking Time Bomb</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  USDT and USDC are officially classified as <strong>virtual assets under Korea's Virtual Asset User Protection Act</strong>,
                  which means they are technically subject to capital gains tax.
                  But here's where it gets complicated.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Stablecoin "gains" don't come from price appreciation — they come from <strong>KRW/USD exchange rate movements</strong>.
                  Buy 100 USDT at ₩1,300/USD, sell when it hits ₩1,350/USD: you technically have a ₩5,000 gain.
                  In theory, that's taxable. In practice, it falls under the ₩2.5 million annual deduction, so tax owed is ₩0.
                  The real problem is <strong>administrative burden</strong>.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-blue-200 dark:border-blue-700 mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Why Stablecoin Taxation Is a Nightmare for DeFi Users</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    A single ETH → USDT → BTC swap on a DEX creates <strong>two separate taxable disposal events</strong>:
                    the ETH sale gain and the USDT sale gain (FX movement).
                    A heavy DeFi user swapping dozens of times per day could generate thousands of taxable events per year —
                    most with gains of just a few hundred won per transaction, but all technically reportable.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>1 swap = up to 2 virtual asset disposal events</li>
                    <li>Each requires calculating acquisition price, transfer price, and FX rate at time of transaction</li>
                    <li>Total gains below ₩2.5M may owe zero tax — but <strong>filing obligation may still apply</strong></li>
                    <li>Potentially thousands of ₩0-tax line items to report annually</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Realistic Outlook: Low Priority for Now, But Watch This Space</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Domestic stablecoin usage is still low — active enforcement is low priority for the NTS</li>
                    <li>CBDC is explicitly excluded from virtual asset taxation (it's government-issued fiat)</li>
                    <li>A KRW-pegged stablecoin would force a complete rethink of the tax framework</li>
                    <li>The EU MiCA approach of <strong>de minimis thresholds</strong> for small stablecoin transactions may influence future Korean policy, but no such rule exists today</li>
                    <li>If DeFi adoption explodes, the NTS faces a "too complex to enforce" scenario → separate guidelines likely post-2029</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">4. Crypto vs. Stocks: The Fairness Fault Lines</h2>

              <div className="mb-6 p-5 bg-gray-900 dark:bg-gray-100 rounded-lg text-white dark:text-gray-900 text-sm leading-relaxed">
                <p className="mb-2"><strong>What is the Financial Investment Tax (금투세)?</strong> A proposed tax of 20–25% on investment gains above ₩50M per year from stocks, funds, and similar assets. Introduced in 2020, deferred twice — and <strong>officially abolished on December 10, 2024</strong> via an amendment to the Income Tax Act.</p>
                <p>Why it was killed: The top 1% of stock investors (roughly 150,000 people) hold 53% of all listed domestic shares. The argument was that taxing them would cause selling pressure, crashing prices and hurting ordinary investors. Securities transaction tax was simultaneously cut (Kosdaq: 0.23% in 2022 → 0.15% in 2025), and the major shareholder threshold for capital gains was relaxed from ₩1B to ₩5B holdings.</p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                With the financial investment tax gone, the fairness debate splits into two distinct scenarios.
              </p>

              <div className="mb-4">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Scenario A — Right Now (Financial Investment Tax Abolished)</h3>
                <div className="mb-4 overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Item</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Stocks (current, 2025)</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Crypto (planned, 2027)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Capital gains (general)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600 font-bold">None (tax abolished)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600 font-bold">22% above ₩2.5M</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Capital gains (major shareholder)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">20–25% (holdings ≥ ₩5B)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">22% (all investors)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Transaction tax</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">0.15% (Kosdaq)</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700">None</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Health insurance impact</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">None</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">Misc. income → premium increase</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                  Earn ₩100M in stocks today: zero capital gains tax. Earn ₩100M in crypto in 2027: approximately ₩21.45M in tax.
                  <strong className="text-red-700 dark:text-red-400"> The &quot;tax where income exists&quot; principle only applies to crypto investors.</strong>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Scenario B — If the Financial Investment Tax Were Reinstated</h3>
                <div className="mb-4 overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Item</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Stocks (if reinstated)</th>
                        <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Crypto (planned, 2027)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Basic deduction</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">₩50 million</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">₩2.5 million (20x gap)</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Loss carryforward</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">5 years</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">Not allowed</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Asset classification</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">Financial investment income</td>
                        <td className="p-3 border border-gray-200 dark:border-gray-700 text-red-600">Misc. income (health insurance linked)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                  Even if the financial investment tax comes back, crypto investors are still worse off: 20x smaller deduction, no loss carryforward, health insurance premium exposure.
                  <strong className="text-orange-700 dark:text-orange-400"> The fix isn&apos;t reinstating stock taxes — it&apos;s bringing crypto tax conditions up to stock-equivalent standards.</strong>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                <div className="p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">① No Loss Carryforward — Unfair in Every Scenario</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Lose ₩100M on crypto last year, make ₩10M this year — you still owe 22% on ₩10M.
                    If the financial investment tax were active, stock investors could carry forward the ₩100M loss and owe zero.
                    With the financial investment tax abolished, stocks are simply untaxed.
                    <strong className="text-red-700 dark:text-red-400"> In every scenario, only crypto investors get hit.</strong>
                  </p>
                </div>

                <div className="p-5 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">② ~10 Million Crypto Investors — Political Pressure Building</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Korea has approximately 10 million crypto investors — comparable to the stock investor base.
                    The crypto investor demographic skews younger than stocks.
                    Prof. Oh Moon-seong notes: &quot;The youth investor share is high, and applying crypto tax alone will generate stronger backlash.&quot;
                    Stocks were exempted largely due to the political influence of wealthy shareholders. Crypto&apos;s resistance will come from sheer voter numbers.
                    <strong className="text-orange-700 dark:text-orange-400"> Tax fairness is ultimately a political question too.</strong>
                  </p>
                </div>

                <div className="p-5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">③ The &quot;Intangible Asset&quot; Classification Is a Forced Fit</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Crypto is classified as an intangible asset under IFRS — not because it truly resembles one, but because it didn&apos;t fit anywhere else. Prof. Oh points out: &quot;It was placed in intangible assets as a stopgap, not because of inherent similarity. Treating crypto as a financial asset would be more natural given how the market actually works.&quot;
                    The intangible/miscellaneous income classification also means crypto gains affect <strong>national health insurance premiums</strong> — adding a hidden tax burden stock investors don&apos;t face.
                    <strong className="text-yellow-700 dark:text-yellow-400"> The distortion starts at the classification level.</strong>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">④ Enforcement Credibility Problem</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Separate from fairness, enforcement credibility is its own problem. Documented cases of the NTS mismanaging seized virtual assets, combined with the realistic limits of tracking offshore and DeFi activity, raise a basic question: why demand strict reporting from taxpayers when the government&apos;s own infrastructure isn&apos;t ready?
                    Prof. Oh adds: &quot;Other countries have crypto tax rules, but whether they&apos;re actually enforced — given how hard enforcement is — is debatable. Rushing implementation while both fairness and enforceability remain unresolved is problematic.&quot;
                    <strong className="text-gray-700 dark:text-gray-300"> Infrastructure credibility must come before tax legitimacy.</strong>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">5. What the RFP Actually Says They&apos;re Building</h2>

              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                The following is based on the scope of work published in the NTS&apos;s official Request for Proposal.
              </p>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP §1</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Integrated Virtual Asset Data Management</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    The core is a three-way fusion: <strong>exchange data + on-chain data + existing tax records</strong>.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>Link and manage VASP <strong>transaction statements and transaction summaries</strong></li>
                    <li>Collect blockchain transaction data, trend data, and wallet addresses from external sources</li>
                    <li className="text-gray-900 dark:text-gray-100 font-medium">
                      Connect corporate tax, income tax, <strong className="text-red-600 dark:text-red-400">inheritance/gift tax</strong> filings, tax registry, and audit records
                      <span className="ml-2 text-xs text-red-500">(★ Inheritance/gift evasion is a primary target)</span>
                    </li>
                    <li>Track virtual asset holdings with <strong>yearly / semi-annual / quarterly / monthly / daily</strong> granularity — balance, volume, and amount per coin</li>
                    <li>Unified per-taxpayer lookup: transaction statements, summaries, <strong>overseas financial account filings</strong>, and blockchain data</li>
                    <li>Register and query per-coin reference data: <strong>whitepaper, listing history, price, characteristics</strong>, and associated VASP info</li>
                    <li>Blockchain transaction flow visualization centered on a <strong>specific wallet address or TXID</strong> with detailed address lookup</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded text-xs text-red-700 dark:text-red-300">
                    Day-level balance tracking means the NTS can pinpoint exactly when and where coins disappeared. Cross-referencing with inheritance/gift tax filings means sending coins to family wallets without a gift tax return is now directly traceable.
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP §2</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Transaction Analytics + AI Anomaly Detection</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    The goal is not just lookup — it&apos;s <strong>automated extraction of tax evasion suspects</strong>.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>Design and build workflows to analyze money laundering and <strong>post-inheritance/gift under-reporting</strong></li>
                    <li>Combine <strong>NTIS (National Tax Information System)</strong> records with virtual asset data for per-taxpayer evasion analysis and evidence verification</li>
                    <li className="text-gray-900 dark:text-gray-100 font-medium">
                      AI/ML anomaly pattern detection targets:
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 font-normal text-gray-600 dark:text-gray-400">
                        <li><strong>Large transfer transactions</strong> — immediate detection of major coin movements</li>
                        <li><strong>Small repeated deposits followed by fiat conversion</strong> — smurfing pattern detection</li>
                      </ul>
                    </li>
                    <li className="text-gray-900 dark:text-gray-100 font-medium">
                      <strong>Automated investigation target selection:</strong> cross-analysis of transaction period, type, volume, amount, frequency vs. taxpayer age, business registration status
                    </li>
                    <li>
                      Multi-dimensional statistics:
                      <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Transaction-type <strong>demographic statistics</strong> (by age, gender, region)</li>
                        <li>By coin type and period (price trend, transaction volume by type)</li>
                        <li>By VASP and counterparty (inflow/outflow, volume by period)</li>
                        <li>By audit type and system usage statistics</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded text-xs text-orange-700 dark:text-orange-300">
                    The demographic statistics feature is significant. If a 40s-male-high-asset pattern shows mass selling with no tax filing, the system can extract everyone matching that pattern as a group for investigation — moving beyond individual audits to pattern-based batch targeting.
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP §3</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Investigator-Facing UI</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Role-based personalized dashboards and menus</li>
                    <li>Task management, progress tracking, approval workflows, and handover management</li>
                    <li>User-friendly interface for displaying large-scale analytical data at a glance</li>
                    <li>Access log management and system security controls</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded">RFP §4</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Deployment & Stability</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Close collaboration with NIRS (National Information Resources Service) for infrastructure</li>
                    <li>Unit, integration, performance, and acceptance testing + pilot operation</li>
                    <li>Performance testing for <strong>high-volume tax data processing</strong> workloads</li>
                    <li>Pilot environment setup, training materials, and investigator onboarding</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">6. Technical Limits: Where Are the Gaps?</h2>

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

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">⑥ The Hardest Technical Challenges to Actually Build</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    The RFP requirements are clear enough on paper — here&apos;s where the SI vendor will hit real engineering walls.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Daily Balance Snapshots — Data Volume Problem</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Storing year/month/day-level holdings for every taxpayer creates massive storage pressure.
                        Millions of taxpayers × hundreds of coins × 365-day granularity requires columnar storage (Parquet) or time-series DB architecture.
                        Without careful partitioning and compression strategy, the database simply won&apos;t scale.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">TXID-Centered Graph Visualization — Real-Time Performance</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Traversing all connected transactions from a single TXID or wallet address requires graph DB (Neo4j, etc.).
                        Relational DB joins collapse at multi-depth traversals.
                        For &quot;one click, instant result&quot; UX, pre-computed indexes and caching layers are mandatory — not optional.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">AI Anomaly Detection — Labeled Data Shortage</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        ML models need labeled &quot;confirmed tax evasion&quot; training data. Existing NTS audit records are limited,
                        and crypto transaction patterns don&apos;t map cleanly to traditional AML models built for banking.
                        Realistically, the initial version will be mostly rule-based, with ML being phased in gradually — a hybrid approach.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Per-Coin Reference Data (Whitepaper, Price History) Management</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        There are thousands of listed tokens. Managing delisted coins, rebranded tokens, and hard fork derivatives
                        while maintaining identity continuity is a data governance nightmare.
                        Especially, establishing the &quot;official&quot; price at delisting time is legally sensitive — it directly affects tax assessments and opens doors to taxpayer appeals.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-sm">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Demographic-Based Target Selection — Legal Risk</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Using age/gender/region statistics to select audit targets risks over-targeting specific groups —
                        raising administrative litigation and personal data protection concerns.
                        Without separate legal authority and coordination with the Personal Information Protection Commission,
                        this feature may be built into the system but legally unusable for actual audit selection.
                      </p>
                    </div>
                  </div>
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

              {/* How tax is actually levied */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">8. So How Does the Tax Actually Get Calculated?</h2>

              <div className="mb-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">The structure is simpler than it sounds. Think of three types of people.</p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold">A</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">People who only traded on domestic exchanges</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Tax is triggered at the point of <strong className="text-gray-700 dark:text-gray-300">disposal (sale)</strong> — not when the price goes up. Bought 1 BTC for ₩100M and just holding it? Zero tax, no obligation. Sold it for ₩150M? Now the ₩50M gain is taxed at 22%.
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        For buy/sell transactions within the exchange, Upbit and Bithumb automatically calculate acquisition price, transfer price, and gains — then submit to the NTS. Taxpayers confirm the exchange-generated statement and file in May.
                        <strong className="text-gray-700 dark:text-gray-300"> Essentially automatic.</strong>
                      </p>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                        ※ Exception: staking rewards and airdrops that increase your coin balance are treated as miscellaneous income — taxable at receipt, even before you sell.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">B</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">People who also used foreign exchanges (Binance, etc.)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Starting 2026, international tax information is automatically exchanged between countries.
                        If a Korean resident&apos;s ID is on a Binance KYC, that trading history flows to the NTS.
                        <strong className="text-gray-700 dark:text-gray-300"> Failing to self-report means penalties.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-bold">C</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">People who moved coins to personal wallets (MetaMask, etc.)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The exchange withdrawal is on record. If you can&apos;t explain where the coins went from there,
                        the NTS can treat the entire amount as a taxable disposal.
                        Add DeFi, staking, and airdrops on top, and you&apos;re fully responsible for tracking and self-reporting.
                        <strong className="text-gray-700 dark:text-gray-300"> This is the exact reason this system is being built.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 p-5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">One-line summary:</strong> Stay on domestic exchanges and the exchange does it for you. The moment you touch a personal wallet, you&apos;re on your own. The NTS integrated analysis system exists to catch the people in group C.
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
