'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SeizedCryptoManagementPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      breadcrumbCategory: '디지털 자산',
      title: '범죄 압수 코인을 보관하기 위한 국가기관용 커스터디지갑',
      date: '2026년 3월 10일',
      readTime: '8분 읽기',
      author: 'Walits 리서치팀',
    },
    en: {
      breadcrumb: 'Blog',
      breadcrumbCategory: 'Digital Assets',
      title: 'Custody Wallets for Government Agencies to Secure Seized Criminal Assets',
      date: 'March 10, 2026',
      readTime: '8 min read',
      author: 'Walits Research Team',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Walits Logo" width={32} height={32} className="rounded" />
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
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {copy.breadcrumb} / {copy.breadcrumbCategory}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>{copy.date}</time>
            <span>•</span>
            <span>{copy.readTime}</span>
            <span>•</span>
            <span>{copy.author}</span>
          </div>
        </div>

        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img src="/blog/wallet-comparison.jpg" alt={copy.title} className="w-full h-auto object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                Walits는 기업용 커스터디 솔루션을 개발하면서 반복적으로 마주치는 질문이 있습니다.
                "MPC와 Multi-Sig를 쓰면 내부자 유출을 막을 수 있나요?" 안타깝게도 이 질문은 민간 기업만의 고민이 아닙니다.
                최근 잇따른 공공기관의 압수 가상자산 유실 사건을 분석하면서, 저희가 매일 풀고 있는 문제가
                국가 레벨에서는 아직 출발선조차 밟지 못했다는 사실을 확인했습니다.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                사건들이 공통으로 가리키는 것
              </h2>
              <p>
                최근 수년간 한국에서 발생한 압수 가상자산 사고를 들여다보면 놀라울 정도로 일관된 패턴이 보입니다.
                가장 먼저 눈에 띄는 건 <strong>단일 접근 권한</strong> 문제입니다. 수사관 한 명이 지갑의 모든 권한을 쥐고,
                시스템은 그것을 통제하지 않습니다. 2023년 서울 강남 경찰서에서 압수한 비트코인이 내부에서 유출된 사건이
                대표적입니다. 당시 압수 자산(22 BTC, 현재 가치 기준 20억원 이상)은 검증 체계 없이 단 한 명의 수사관이
                접근할 수 있는 구조였습니다.
              </p>
              <p>
                두 번째 패턴은 <strong>키 관리 무지</strong>입니다. 지난 달 국세청이 고액 체납자 압류 성과를 홍보하는
                보도자료를 배포했습니다. 문제는 그 자료에 첨부된 사진이었습니다. 해당 지갑의 마스터키인 니모닉 24단어가
                그대로 노출됐고, 불과 24시간 이내에 69억원 상당의 자산이 외부 주소로 이동했습니다.
                니모닉 코드가 무엇인지, 왜 절대 공개해선 안 되는지를 담당자가 몰랐던 것입니다.
              </p>
              <p>
                세 번째는 <strong>복구 불가능한 분실</strong>입니다. 복구 구문(Seed Phrase)을 개인 PC나 메모 형태로
                보관하다 파기 또는 분실하는 사례가 보고됐습니다. 블록체인의 특성상, 키를 잃으면 그 안의 자산은
                영원히 꺼낼 수 없습니다.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-bold mb-3 text-red-800 dark:text-red-200">세 사건이 공유하는 하나의 구조적 원인</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-red-100 dark:bg-red-900/40">
                        <th className="border border-red-200 dark:border-red-700 p-3 text-left">사건 유형</th>
                        <th className="border border-red-200 dark:border-red-700 p-3 text-left">표면적 원인</th>
                        <th className="border border-red-200 dark:border-red-700 p-3 text-left">구조적 원인</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-red-200 dark:border-red-700 p-3">내부자 유출</td>
                        <td className="border border-red-200 dark:border-red-700 p-3">개인 비리</td>
                        <td className="border border-red-200 dark:border-red-700 p-3 font-semibold">단일 접근 권한 구조</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 dark:border-red-700 p-3">니모닉 노출</td>
                        <td className="border border-red-200 dark:border-red-700 p-3">담당자 무지</td>
                        <td className="border border-red-200 dark:border-red-700 p-3 font-semibold">키 관리 프로세스 부재</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 dark:border-red-700 p-3">복구 구문 분실</td>
                        <td className="border border-red-200 dark:border-red-700 p-3">개인 실수</td>
                        <td className="border border-red-200 dark:border-red-700 p-3 font-semibold">백업·분산 체계 전무</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-red-700 dark:text-red-300 font-medium">
                  세 사건 모두 '사람의 실수'처럼 보이지만, 본질은 하나입니다. 가상자산 보관에 필요한 기술적·절차적 시스템이 존재하지 않는다는 것입니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                지금 당장 할 수 있는 8가지 처방
              </h2>
              <p>
                거창한 인프라를 새로 짓자는 이야기가 아닙니다. 이미 검증된 기술과 절차만으로도
                현재의 문제 대부분을 해결할 수 있습니다.
              </p>

              {/* 처방 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 1</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">3-of-5 MPC — 단일 권한 구조 해체</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`서명 키 5개 조각 → 3개 이상 조합 시에만 출금 가능
보유 기관 예시:
  ├─ 경찰청장실
  ├─ 금융감독원
  ├─ 대검찰청
  ├─ 예비키 A (오프라인)
  └─ 예비키 B (오프라인)
→ 어느 한 기관이 단독으로는 절대 출금 불가`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Fireblocks·BitGo 같은 기관급 MPC 솔루션은 글로벌 대형 은행 수준의 검증을 이미 거쳤습니다.
                  연간 도입 비용 약 5억원, 1조원 자산 기준 수수료율 <strong>0.05%</strong>. 강남서 유출 같은 내부자 범행은 구조적으로 차단됩니다.
                </p>
              </div>

              {/* 처방 2 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 2</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">에어갭 HSM 클러스터 — 네트워크 단절로 원격 해킹 차단</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`FIPS 140-3 Level 4 등급 HSM 3대
물리적 격리 설치:
  세종 정부청사 / 대전 / 부산 분산
인터넷 라인 완전 차단 — USB·물리 접근만 허용
모든 키 사용 이력 → 변경 불가 블록체인에 자동 기록`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  외부 네트워크와 물리적으로 단절된 장비는 원격 해킹 자체가 불가능합니다.
                  금고에 현금을 보관하는 것처럼, 디지털 자산에도 동일한 물리적 보안 개념이 필요합니다.
                </p>
              </div>

              {/* 처방 3 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 3</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">샤미르 비밀 분산 — 니모닉을 5개 기관에 쪼개 보관</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`Shamir's Secret Sharing (SSS) 적용
12단어 니모닉 → 5개 기관에 3단어씩 분리 보관
  대법원 / 검찰청 / 경찰청 / 국세청 / 감사원
복구 조건: 3개 기관 이상 동시 협의
보관 형태: 전용 금고 내 USB + 종이 이중 보관`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  국세청 사고의 핵심 원인은 니모닉이 한 곳에 집중된 것입니다. SSS를 적용하면
                  단 하나의 기관이 유출되더라도 나머지 조각 없이는 지갑 접근이 불가능합니다.
                  수학적으로 증명된 보안 방식입니다.
                </p>
              </div>

              {/* 처방 4 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 4</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">온체인 모니터링 — 압수 주소 24시간 감시</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`압수 즉시 해당 지갑 주소에 라벨 부착
예) "POLICE_SEIZED_2026_001"
비정상 출금 감지 → 전국 거래소 즉시 블랙리스트 등록
수사관 접근 로그 실시간 기록 및 상급자 알림`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  탈취가 발생하더라도 탈취자가 자산을 현금화하는 것을 막는 <strong>2차 방어선</strong>입니다.
                  국내 주요 거래소들은 이미 블록체인 분석 도구를 사용하고 있어 빠른 연동이 가능합니다.
                </p>
              </div>

              {/* 처방 5 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 5</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">스테이킹 운용 — 보관하는 동안 국고 수익 창출</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`압수 ETH → 판결 확정 전까지 Lido stETH 스테이킹
연 3~4% 이자 수익 → 국고 귀속
스테이킹 포지션 실시간 추적 가능
(예) 1조원 규모 → 연간 300~400억 이자 수익`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  판결 대기 중 자산을 그냥 잠가두는 것은 기회비용 낭비입니다.
                  제도권 스테이킹 프로토콜을 활용하면 보관 자체가 수익 창출로 이어집니다.
                </p>
              </div>

              {/* 처방 6 - 스테이블코인 전환 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 6</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">스테이블코인 전환 — 압수 즉시 USDT·USDC로 환산 보관</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`압수 시점 시세로 USDT 또는 USDC로 즉시 스왑
→ 가격 변동 리스크 제거 (자산 가치 고정)
→ 수십 종 코인을 2개 스테이블코인으로 단일화
→ 보관·감사·회계 처리 대폭 단순화
법원 제출 자료: "압수 시점 $XXX,XXX USDT" 명확 기재`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  현재 문제 중 하나는 압수 코인의 종류가 너무 다양하다는 것입니다. 비트코인, 이더리움, 알트코인, 밈코인까지
                  각각 다른 네트워크·지갑·보안 체계가 필요합니다. 압수 즉시 시세를 기준으로 USDT·USDC로 전환하면
                  관리 복잡도가 극적으로 낮아집니다.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700 text-sm">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">검토 필요 사항</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    전환 시점의 시세 조작 가능성과 법적 적정성(원물 보전 의무 여부)은 별도 법제화로 해소해야 합니다.
                    압수 즉시 전환하는 것이 현행법상 허용되는지도 검토가 필요합니다.
                  </p>
                </div>
              </div>

              {/* 처방 7 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 7</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">법제화 — 압수 90일 후 자동 몰수·경매 제도화</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`현행: 법적 지위 불명확 → 수년간 방치
개선안:
  압수 후 90일 이내 몰수 여부 확정 의무화
  확정 즉시 국가 경매 → 재정 귀속
  보관 기간 단축 = 해킹·유실 노출 시간 대폭 감소`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  보관 기간이 짧을수록 위험 노출 시간도 줄어듭니다.
                  기술 도입보다 법 하나가 더 빠른 해결책이 될 수 있습니다.
                </p>
              </div>

              {/* 처방 8 */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6 border border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">처방 8</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI 이상 탐지 — 내부자 행동 패턴까지 감시</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`24시간 실시간 온체인 이상 탐지
압수 주소 비정상 출금 → 즉시 담당자·상급자 알림
수사관별 접근 빈도·시간대·금액 패턴 학습
→ 기준치 이탈 시 자동 접근 잠금 + 감사 개시`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  조금씩 자산을 분할해서 빼내는 패턴, 업무 시간 외 접근, 비정상적 출금 경로를
                  AI가 사람보다 먼저 탐지합니다.
                </p>
              </div>

              {/* 로드맵 */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                2단계 실행 로드맵
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl my-8 border border-blue-200 dark:border-blue-800">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">1단계 — 계약만으로 즉시 (연 20억)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 mb-2">
                      <pre>{`처방 1: MPC 커스터디 서비스 계약 (Fireblocks 등)
처방 4: 온체인 모니터링 + 거래소 블랙리스트 연동
처방 6: 압수 자산 자동 몰수 법제화 추진`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">별도 인프라 구축 없이 계약만으로 바로 적용 가능합니다. 단일 접근 권한 문제를 가장 빠르게 해소합니다.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded">2단계 — 6~12개월 내 (연 30억 추가)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 mb-2">
                      <pre>{`처방 2: 에어갭 HSM 클러스터 3개 도시 설치
처방 3: SSS 기반 니모닉 5개 기관 분산 보관
처방 5: 스테이킹 운용 시스템 구축
처방 7: AI 이상 탐지 도입`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">기관 간 협약과 물리적 설치가 필요하지만, 1년 이내 충분히 실현 가능합니다.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-700 text-center">
                  <p className="font-bold text-blue-700 dark:text-blue-300">
                    연 50억원 투자 → 1조원 규모 국가 압수 자산 보호. 수익률로 따지면 19,900%입니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                잡는 것과 지키는 것은 완전히 다른 기술이다
              </h2>
              <p>
                Walits가 기업 고객들에게 항상 강조하는 말이 있습니다. "가상자산 보안의 90%는 기술이 아니라 프로세스입니다."
                어떤 첨단 암호화 기술도, 한 명의 담당자가 모든 키에 접근할 수 있고 그 접근 기록이 남지 않는다면 무의미합니다.
              </p>
              <p>
                가상자산은 서류 한 장으로 소유권이 정리되는 자산이 아닙니다. 압수 완료가 관리의 시작이고,
                판결 확정까지의 모든 과정이 리스크입니다. 1단계부터 지금 당장 시작하는 것, 그게 전부입니다.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg my-8">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  본 글은 Walits 리서치팀이 공개된 사건 기록과 커스터디 기술 관점에서 작성한 분석 자료입니다.
                  특정 제품·기관의 도입을 보증하지 않습니다.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">기업·기관용 MPC 커스터디 솔루션</h3>
                <p className="mb-6">
                  다중 승인, 감사 추적, 분산 키 관리까지 — Walits Custody로 단일 실패점을 제거하세요.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  무료 상담 신청
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                At Walits, one question comes up repeatedly when building enterprise custody solutions: "Can MPC and Multi-Sig really prevent insider leaks?" Sadly, this isn't just a private-sector concern. Analyzing recent incidents involving seized digital assets at Korean government agencies, we found that the problems we solve daily haven't even reached the starting line at the national level.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                What the Incidents Have in Common
              </h2>
              <p>
                Looking at Korea's seized cryptocurrency incidents over recent years, there's a remarkably consistent pattern. Most obvious is the <strong>single point of access</strong> problem. One officer holds full control over a wallet, with no system to check them. The 2023 Gangnam Police Station incident is the clearest example — 22 BTC (now worth over ₩2B) was accessible to a single investigator with zero verification mechanism.
              </p>
              <p>
                The second pattern is <strong>key management ignorance</strong>. Korea's National Tax Service distributed a press release promoting a seizure from a delinquent taxpayer. The photo attached displayed all 24 words of the wallet's mnemonic code. Within 24 hours, ₩6.9B in assets moved to an external address. The officer simply didn't know what a mnemonic code was or why it must never be disclosed.
              </p>
              <p>
                Third is <strong>irrecoverable loss</strong>. Recovery phrases stored on personal PCs or paper notes have been accidentally destroyed or misplaced. On the blockchain, losing your key means losing your assets — forever.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-bold mb-3 text-red-800 dark:text-red-200">One Structural Root Cause Behind All Three Incidents</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-red-100 dark:bg-red-900/40">
                        <th className="border border-red-200 dark:border-red-700 p-3 text-left">Incident Type</th>
                        <th className="border border-red-200 dark:border-red-700 p-3 text-left">Surface Cause</th>
                        <th className="border border-red-200 dark:border-red-700 p-3 text-left">Structural Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-red-200 dark:border-red-700 p-3">Insider embezzlement</td>
                        <td className="border border-red-200 dark:border-red-700 p-3">Individual misconduct</td>
                        <td className="border border-red-200 dark:border-red-700 p-3 font-semibold">Single point of access architecture</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 dark:border-red-700 p-3">Mnemonic exposure</td>
                        <td className="border border-red-200 dark:border-red-700 p-3">Officer ignorance</td>
                        <td className="border border-red-200 dark:border-red-700 p-3 font-semibold">No key management process</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 dark:border-red-700 p-3">Seed phrase loss</td>
                        <td className="border border-red-200 dark:border-red-700 p-3">Human error</td>
                        <td className="border border-red-200 dark:border-red-700 p-3 font-semibold">Zero backup / distribution system</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-red-700 dark:text-red-300 font-medium">
                  All three incidents appear to be human errors, but the root cause is one: the technical and procedural infrastructure required for cryptocurrency custody simply does not exist.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                8 Fixes You Can Start Right Now
              </h2>
              <p>
                This isn't about building grand new infrastructure. The existing, proven technology and procedures are already sufficient to solve most of the current problems.
              </p>

              {/* Fix 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 1</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">3-of-5 MPC — Dismantle the Single-Authority Structure</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`5 signing key shares → withdrawals require any 3+
Example holders:
  ├─ Commissioner of National Police Agency
  ├─ Financial Supervisory Service
  ├─ Prosecutor General's Office
  ├─ Backup Key A (offline)
  └─ Backup Key B (offline)
→ No single institution can withdraw unilaterally`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Platforms like Fireblocks and BitGo are already validated to global bank standards. Annual cost ~₩500M — just <strong>0.05% of ₩1T</strong> in assets. Gangnam-style insider embezzlement becomes structurally impossible.
                </p>
              </div>

              {/* Fix 2 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 2</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Air-Gapped HSM Cluster — Physical Network Isolation</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`FIPS 140-3 Level 4 HSM — 3 units
Physically isolated:
  Sejong Gov. Complex / Daejeon / Busan
No internet connection — USB / physical access only
All key usage logged immutably on blockchain`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Equipment physically disconnected from external networks makes remote hacking inherently impossible. Digital assets need the same physical security logic as a vault holding cash.
                </p>
              </div>

              {/* Fix 3 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 3</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Shamir's Secret Sharing — Split the Mnemonic Across 5 Institutions</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`SSS applied: 12-word mnemonic → 3 words each to 5 institutions
  Supreme Court / Prosecutors' Office / National Police Agency
  National Tax Service / Board of Audit & Inspection
Recovery: 3+ institutions must cooperate simultaneously
Storage: Dedicated vault — USB + paper dual copy`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The NTS incident's root cause was a mnemonic in a single location. With SSS, a breach at any one institution is useless without the other fragments. Mathematically proven security.
                </p>
              </div>

              {/* Fix 4 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 4</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">On-Chain Monitoring — 24/7 Surveillance of Seized Addresses</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`Label each seized wallet address immediately
e.g. "POLICE_SEIZED_2026_001"
Abnormal withdrawal → instant nationwide exchange blacklist
Officer access logs recorded in real-time → supervisor alert`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A <strong>second line of defense</strong> — even if theft occurs, thieves can't liquidate the assets. Major Korean exchanges already use blockchain analytics, enabling rapid integration.
                </p>
              </div>

              {/* Fix 5 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 5</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Staking Revenue — Turn Idle Assets Into Treasury Income</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`Seized ETH → Lido stETH until verdict
~3–4% annual yield → national treasury
Staking positions fully traceable in real time
(Example) ₩1T in ETH → ₩30–40B/year in interest`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Leaving assets idle while awaiting a verdict is a pure opportunity cost. Institutional staking protocols generate yield without sacrificing traceability.
                </p>
              </div>

              {/* Fix 6 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 6</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Stablecoin Conversion — Swap Seized Assets to USDT/USDC at Time of Seizure</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`Convert to USDT or USDC at market rate at time of seizure
→ Eliminate price volatility risk (value fixed in USD terms)
→ Consolidate dozens of coin types into 2 stablecoins
→ Dramatically simplify custody, auditing, and accounting
Court filing: "Seized assets: $XXX,XXX USDT (as of [date])" — clear`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  One underappreciated problem is the sheer variety of seized coins — Bitcoin, Ethereum, altcoins, meme coins — each requiring different networks, wallets, and security setups. Converting everything to USDT or USDC at seizure dramatically reduces operational complexity.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700 text-sm">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Issues to Resolve</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Potential manipulation of conversion timing and legal questions around in-kind preservation requirements need to be addressed through legislation. Whether immediate conversion is permitted under current law also requires review.
                  </p>
                </div>
              </div>

              {/* Fix 7 */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 7</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Legislation — Auto-Forfeiture and Auction Within 90 Days</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`Current: legal status unclear → years of limbo
Proposed:
  Mandatory forfeiture decision within 90 days of seizure
  Immediate national auction upon confirmation → treasury
  Shorter custody window = far less risk exposure`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The shorter the custody window, the smaller the risk exposure. One piece of legislation may be a faster fix than any technology.
                </p>
              </div>

              {/* Fix 8 */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6 border border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">Fix 8</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Anomaly Detection — Monitoring Insider Behavior Patterns</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
                  <pre>{`24/7 real-time on-chain anomaly detection
Abnormal withdrawal → immediate alert to officer & supervisor
Per-officer access frequency, timing, amount pattern learning
→ Deviation from baseline: auto access lock + audit trigger`}</pre>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  AI trained to recognize patterns — small incremental withdrawals, off-hours access, unusual routes — flags insider misconduct before any human observer notices.
                </p>
              </div>

              {/* Roadmap */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                2-Phase Execution Roadmap
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl my-8 border border-blue-200 dark:border-blue-800">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">Phase 1 — Contract Only, Immediate (₩2B/year)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 mb-2">
                      <pre>{`Fix 1: Sign MPC custody service contract (Fireblocks etc.)
Fix 4: On-chain monitoring + exchange blacklist integration
Fix 6: Auto-forfeiture legislation`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">No new infrastructure needed. Apply immediately via contracts alone. Fastest path to resolving single-point-of-access risk.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded">Phase 2 — Within 6–12 Months (+₩3B/year)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200 mb-2">
                      <pre>{`Fix 2: Air-gapped HSM clusters across 3 cities
Fix 3: SSS mnemonic distribution across 5 institutions
Fix 5: Staking operations system
Fix 7: AI anomaly detection`}</pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Requires inter-agency agreements and physical installation, but fully achievable within one year.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-700 text-center">
                  <p className="font-bold text-blue-700 dark:text-blue-300">
                    ₩5B/year to protect ₩1T in national seized assets. That's a 19,900% return on security investment.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                Seizing and Securing Are Completely Different Skills
              </h2>
              <p>
                At Walits, we always tell enterprise clients: "90% of digital asset security is process, not technology." No cryptographic innovation matters if a single officer can access every key and leave no access log.
              </p>
              <p>
                Cryptocurrency is not an asset where a single document resolves ownership. A completed seizure is the beginning of management, and every moment until verdict confirmation carries risk. Starting Phase 1 today — that is the only thing that matters right now.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg my-8">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This article was written by the Walits Research Team based on publicly available incident records and custody technology expertise. It does not constitute an endorsement of any specific product or institution.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Enterprise & Institutional MPC Custody Solution</h3>
                <p className="mb-6">
                  Multi-approval, audit trails, distributed key management — eliminate single points of failure with Walits Custody.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
                {language === 'ko' ? '2026년 기업용 암호화폐 지갑 선택 완벽 가이드' : '2026 Enterprise Crypto Wallet Guide'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? 'Non-Custody vs Custody, MPC 보안까지' : 'Non-Custody vs Custody, MPC security and more'}
              </p>
            </Link>
            <Link href="/blog/mpc-wallet-security-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? 'MPC 지갑 보안 가이드' : 'MPC Wallet Security Guide'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '다중 서명으로 단일 실패점 제거' : 'Eliminating single point of failure with multi-signature'}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
