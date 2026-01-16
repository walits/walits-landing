'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IRPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [activeSection, setActiveSection] = useState('executive');

  const sections = [
    { id: 'executive', label: language === 'ko' ? 'Executive Summary' : 'Executive Summary' },
    { id: 'market', label: language === 'ko' ? '시장 기회' : 'Market Opportunity' },
    { id: 'technology', label: language === 'ko' ? '기술 경쟁력' : 'Technology' },
    { id: 'services', label: language === 'ko' ? '핵심 서비스' : 'Core Services' },
    { id: 'financials', label: language === 'ko' ? '재무 예측' : 'Financials' },
    { id: 'competitive', label: language === 'ko' ? '경쟁 분석' : 'Competition' },
    { id: 'gtm', label: language === 'ko' ? 'Go-to-Market' : 'Go-to-Market' },
    { id: 'risks', label: language === 'ko' ? '리스크 분석' : 'Risk Analysis' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm dark:bg-gray-900/95">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Walits
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {language === 'ko' ? '홈' : 'Home'}
            </Link>
            <div className="flex items-center gap-2 border-l pl-6">
              <button
                onClick={() => setLanguage('ko')}
                className={`text-sm px-3 py-1 rounded-md transition-all ${
                  language === 'ko' ? 'bg-blue-600 text-white font-bold' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm px-3 py-1 rounded-md transition-all ${
                  language === 'en' ? 'bg-blue-600 text-white font-bold' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-600 dark:text-gray-400">
              {language === 'ko' ? '투자자 전용 자료' : 'Confidential'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Walits
            </h1>
            <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">
              {language === 'ko' ? 'Investor Relations' : 'Investor Relations'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'ko'
                ? 'MPC 기반 기업급 암호자산 인프라'
                : 'MPC-based Enterprise Crypto Infrastructure'}
            </p>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <div className="sticky top-14 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeSection === section.id
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Executive Summary */}
        {activeSection === 'executive' && (
          <section className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Executive Summary</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {language === 'ko'
                    ? 'Walits는 기업/기관급 암호자산 관리 인프라를 제공하는 Web3 핵심 기술 회사입니다. MPC(Multi-Party Computation) 기반 보안 강화형 지갑 솔루션으로 게임/앱 개발사, 기관/정부, 개인 투자자를 타겟합니다.'
                    : 'Walits provides enterprise-grade crypto asset management infrastructure as a core Web3 technology company. Our MPC-based enhanced security wallet solutions target game/app developers, institutions/governments, and individual investors.'}
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '핵심 서비스' : 'Core Services'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      Non-Custody, Custody, Auto Chat, AI ST
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$12.8M</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '2026 목표 매출' : '2026 Target Revenue'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">~165억원</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">$1.5B</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '2030 전망 매출' : '2030 Projected Revenue'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">200%+ CAGR</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">67%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === 'ko' ? '2030 EBITDA 마진' : '2030 EBITDA Margin'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">High profitability</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">B2B</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {language === 'ko' ? '기업용 (현재 수익)' : 'Enterprise (Current Revenue)'}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>Non-Custody: 게임/앱 토큰 관리</li>
                  <li>Custody: STO/RWA 기관 보관</li>
                  <li>월 1-4천만원 + 5천만-1억원</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">B2C</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {language === 'ko' ? '개인용 (2026 런칭)' : 'Consumer (Launch 2026)'}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>Auto Chat: 메시지 앱 결제</li>
                  <li>AI 토큰증권: RWA 투자</li>
                  <li>월 2.5억원 + 연 50억원 (목표)</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {language === 'ko' ? '규제 순풍' : 'Regulatory Tailwind'}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>Clarity Act (STO 간소화)</li>
                  <li>GENIUS Act (스테이블코인)</li>
                  <li>Strategic Bitcoin Reserve</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Market Opportunity */}
        {activeSection === 'market' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === 'ko' ? '시장 기회' : 'Market Opportunity'}
            </h2>

            {/* Global Market */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? 'Global Web3 Infrastructure 시장' : 'Global Web3 Infrastructure Market'}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? '시장 영역' : 'Market Segment'}
                      </th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">2024</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">2026</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">CAGR</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                        {language === 'ko' ? '암호자산 보관 (Custody)' : 'Crypto Custody'}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white font-semibold">$2.5B</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-bold">$8-12B</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-semibold">40%+</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                        {language === 'ko' ? 'DeFi 프로토콜' : 'DeFi Protocols'}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white font-semibold">$5B TVL</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-bold">$20-30B TVL</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-semibold">60%+</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                        {language === 'ko' ? 'RWA (실물자산 토큰화)' : 'RWA Tokenization'}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white font-semibold">$0.5B</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-bold">$10-50B</td>
                      <td className="text-right py-3 px-4 text-blue-700 dark:text-blue-300 font-semibold">200%+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                        {language === 'ko' ? '게임 Web3' : 'Gaming Web3'}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white font-semibold">$1B</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-bold">$5-10B</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 font-semibold">70%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Korea Market */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {language === 'ko' ? '한국 시장 기회' : 'Korea Market Opportunity'}
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li>카카오톡 (3천만) + 텔레그램 (8억) = 메시지 앱 최강국</li>
                  <li>GENIUS Act + Clarity Act 준수로 글로벌 규제 선도</li>
                  <li>부동산 토큰화 = 조 단위 시장 잠재력</li>
                  <li>MPC/HSM 기술력 = 글로벌 경쟁력</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">$100B+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">일일 암호자산 거래량</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {language === 'ko' ? '2026 규제 순풍' : '2026 Regulatory Tailwind'}
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="font-bold mb-1 text-gray-900 dark:text-white">Clarity Act</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">상원 심의 중</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">STO/RWA 발행 간소화</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="font-bold mb-1 text-gray-900 dark:text-white">GENIUS Act</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">2026 Q1 시행</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">스테이블코인 100% 담보</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="font-bold mb-1 text-gray-900 dark:text-white">Strategic Bitcoin Reserve</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">정부 비축 확대</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">HSM/MPC 보안 수요</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technology */}
        {activeSection === 'technology' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === 'ko' ? '기술 경쟁력' : 'Technology Advantage'}
            </h2>

            {/* MPC Stack */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                MPC 기술 스택 (CGGMP21)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Walits 구현</h4>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✅</span>
                      <span>분산 키 생성 (DKG) - 단일 실패점 제거</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✅</span>
                      <span>2-of-3 다중 서명 - 금융기관급 보안</span>
                    </li>
                    <li>HSM (Hardware Security Module) 통합</li>
                    <li>TEE (Trusted Execution Environment) 활용</li>
                    <li>CGGMP24 로드맵 준비 중</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">경쟁사 대비</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Fireblocks</div>
                      <div className="text-gray-600 dark:text-gray-400">기관 전용, 가격 비쌈 (월 $100K+)</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Ledger Enterprise</div>
                      <div className="text-gray-600 dark:text-gray-400">하드웨어 의존, 유연성 부족</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 border border-gray-300 dark:border-gray-600">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Walits</div>
                      <div className="text-gray-700 dark:text-gray-300">API 기반 개발자 친화 + 엔터프라이즈 보안</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">기술 아키텍처</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/50 rounded-lg p-4">
                  <div className="font-bold mb-2 text-gray-900 dark:text-white">Application Layer (API)</div>
                  <div className="text-blue-700 dark:text-blue-300 pl-4">Non-Custody | Custody | Chat | RWA</div>
                </div>
                <div className="flex justify-center">
                  <div className="text-blue-600 dark:text-blue-400">↓</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/50 rounded-lg p-4">
                  <div className="font-bold mb-2 text-gray-900 dark:text-white">MPC Orchestration Layer</div>
                  <div className="text-blue-700 dark:text-blue-300 pl-4 space-y-1">
                    <div>├─ Key Distribution</div>
                    <div>├─ Transaction Signing</div>
                    <div>└─ Policy Engine (승인 정책)</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-blue-600 dark:text-blue-400">↓</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/50 rounded-lg p-4">
                  <div className="font-bold mb-2 text-gray-900 dark:text-white">Security Layer</div>
                  <div className="text-blue-700 dark:text-blue-300 pl-4 space-y-1">
                    <div>├─ HSM (Hardware Security Module)</div>
                    <div>├─ TEE (Trusted Execution)</div>
                    <div>└─ Cryptographic Primitives</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-blue-600 dark:text-blue-400">↓</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/50 rounded-lg p-4">
                  <div className="font-bold mb-2 text-gray-900 dark:text-white">Blockchain Integration</div>
                  <div className="text-blue-700 dark:text-blue-300 pl-4">Ethereum | Tron | Solana | Base ...</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Core Services */}
        {activeSection === 'services' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === 'ko' ? '4가지 핵심 서비스' : '4 Core Services'}
            </h2>

            {/* Non-Custody */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    1. Non-Custody Wallet
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      현재 수익
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      월 $65K+
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">타겟 고객</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    게임사, Web3 앱, 토큰 프로젝트
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">핵심 가치</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• API 1줄 코드 → 자동 지갑 생성</li>
                    <li>• TEE 환경 → 10,000 TPS 처리</li>
                    <li>• 커스텀 토큰 자동 배포 (ICO/에어드랍)</li>
                    <li>• 스마트 컨트랙트 자동 업그레이드</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">수익 모델</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold mb-1">구독료</div>
                      <div className="text-gray-600 dark:text-gray-400">$500-5,000/월 (유저 수별)</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold mb-1">트랜잭션 수수료</div>
                      <div className="text-gray-600 dark:text-gray-400">0.1-0.5% (거래액 기반)</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-500">
                      <div className="font-semibold mb-1">2027 목표</div>
                      <div className="text-blue-700 dark:text-blue-400 font-bold">$1-2M/월 (130-260억원)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custody */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    2. Custody Wallet
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      고수익
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      월 $500K-5M
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">타겟 고객</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    기관, 정부, 기업 자산 보관
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">핵심 가치</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• MPC 2-of-3 (금융기관 표준)</li>
                    <li>• 정책 기반 승인 (다단계 서명)</li>
                    <li>• 자동 리포팅 (SEC/FCA/FSC)</li>
                    <li>• 침투 테스트 & 보안 감사 (연 2회)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">2026 예상 계약</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold mb-1">국내 STO 플랫폼 (3-5개)</div>
                      <div className="text-gray-600 dark:text-gray-400">월 500만-5천만원</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold mb-1">글로벌 토큰 증권사 (2-3개)</div>
                      <div className="text-gray-600 dark:text-gray-400">월 1천만-5천만원</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-500">
                      <div className="font-semibold mb-1">2027 목표</div>
                      <div className="text-blue-700 dark:text-blue-400 font-bold">월 5-10억원 (100-150억원/년)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Chat */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    3. Auto Chat Wallet
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      2026 런칭
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      대중화 포인트
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">타겟 시장</h4>
                  <div className="space-y-3 text-sm mb-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold mb-1">한국</div>
                      <div className="text-gray-600 dark:text-gray-400">카톡 3천만 × 1% = 30만명</div>
                      <div className="text-blue-700 dark:text-blue-400 font-bold mt-1">월 7.5억원</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="font-semibold mb-1">글로벌 (텔레그램)</div>
                      <div className="text-gray-600 dark:text-gray-400">8억 × 0.1% = 800만명</div>
                      <div className="text-blue-700 dark:text-blue-400 font-bold mt-1">월 40억원</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">차별화 기능</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• "카톡으로 @walits 송금" → 자동 처리</li>
                    <li>• "매월 커피값 자동 송금" → AI 스케줄링</li>
                    <li>• "가장 싼 경로로 송금" → 최적 라우팅</li>
                    <li>• 앱 없음, 메시지 앱만 사용</li>
                  </ul>
                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-500">
                    <div className="font-semibold mb-1">연간 목표</div>
                    <div className="text-blue-700 dark:text-blue-400 font-bold">월 47.5억원 (500억원+/년)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI ST Wallet */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    4. AI 토큰증권 지갑
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      2026 런칭
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      미래 성장
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">RWA 시장 전망</h4>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">2024</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$0.5B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">2026</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">$10-50B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">2030</span>
                      <span className="font-semibold text-blue-700 dark:text-blue-300">$1-5T</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-blue-600 dark:text-blue-400 font-bold">CAGR: 200%+</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Walits 차별성</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <li>• AI 자동 리밸런싱 (포트폴리오 최적화)</li>
                    <li>• 규제 완벽 준수 (KYC/AML/세금)</li>
                    <li>• 배당금 자동 분배</li>
                    <li>• 1만원부터 투자 가능</li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-500">
                    <div className="font-semibold mb-1">2027-2030 목표</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">AUM 10조원</div>
                    <div className="text-blue-700 dark:text-blue-400 font-bold">연 50-100억원</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Financials */}
        {activeSection === 'financials' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === 'ko' ? '재무 예측' : 'Financial Projections'}
            </h2>

            {/* 2026 Revenue Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">2026년 분기별 매출 전망</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">서비스</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">Q1</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">Q2</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">Q3</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">Q4</th>
                      <th className="text-right py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">2026 Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Non-Custody</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$50K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$70K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$100K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$150K</td>
                      <td className="text-right py-3 px-4 font-bold text-blue-600 dark:text-blue-400">$370K</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Custody</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$500K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$1.5M</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$3M</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$5M</td>
                      <td className="text-right py-3 px-4 font-bold text-blue-600 dark:text-blue-400">$10M</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Chat Wallet</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$100K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$300K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$500K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$800K</td>
                      <td className="text-right py-3 px-4 font-bold text-blue-600 dark:text-blue-400">$1.7M</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">AI 토큰증권</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$0</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$50K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$200K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$500K</td>
                      <td className="text-right py-3 px-4 font-bold text-blue-600 dark:text-blue-400">$750K</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-900/20 font-bold">
                      <td className="py-3 px-4 text-gray-900 dark:text-white">총합</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$650K</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$1.92M</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$3.8M</td>
                      <td className="text-right py-3 px-4 text-gray-900 dark:text-white">$6.45M</td>
                      <td className="text-right py-3 px-4 text-blue-600 dark:text-blue-400 text-lg">$12.82M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                2026 Total: <span className="font-bold text-gray-900 dark:text-white">$12.82M (~165억원)</span>
              </div>
            </div>

            {/* 5-Year Projection */}
            <div className="bg-blue-900 dark:bg-blue-950 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">5년 장기 전망 (2026-2030)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-white/20">
                      <th className="text-left py-3 px-4 font-semibold">항목</th>
                      <th className="text-right py-3 px-4 font-semibold">2026</th>
                      <th className="text-right py-3 px-4 font-semibold">2027</th>
                      <th className="text-right py-3 px-4 font-semibold">2028</th>
                      <th className="text-right py-3 px-4 font-semibold">2029</th>
                      <th className="text-right py-3 px-4 font-semibold">2030</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Revenue</td>
                      <td className="text-right py-3 px-4">$12.8M</td>
                      <td className="text-right py-3 px-4">$75M</td>
                      <td className="text-right py-3 px-4">$350M</td>
                      <td className="text-right py-3 px-4">$750M</td>
                      <td className="text-right py-3 px-4 font-bold">$1.5B</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Gross Margin</td>
                      <td className="text-right py-3 px-4">84%</td>
                      <td className="text-right py-3 px-4">89%</td>
                      <td className="text-right py-3 px-4">90%</td>
                      <td className="text-right py-3 px-4">90%</td>
                      <td className="text-right py-3 px-4 font-bold">90%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">EBITDA</td>
                      <td className="text-right py-3 px-4">$3.8M</td>
                      <td className="text-right py-3 px-4">$42M</td>
                      <td className="text-right py-3 px-4">$215M</td>
                      <td className="text-right py-3 px-4">$475M</td>
                      <td className="text-right py-3 px-4 font-bold">$1B</td>
                    </tr>
                    <tr className="bg-white/10">
                      <td className="py-3 px-4 font-bold">EBITDA Margin</td>
                      <td className="text-right py-3 px-4 font-bold">30%</td>
                      <td className="text-right py-3 px-4 font-bold">56%</td>
                      <td className="text-right py-3 px-4 font-bold">61%</td>
                      <td className="text-right py-3 px-4 font-bold">63%</td>
                      <td className="text-right py-3 px-4 font-bold text-blue-300 text-lg">67%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Funding Needs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">펀딩 계획</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$3-5M</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">2026년 필요 자본</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">인력 (개발/영업)</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$1.5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">인프라 & 보안</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$500K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">영업/마케팅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$800K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">규제/준수</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$300K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">운영/여유</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$900K</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Series A 목표</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">$5-10M</div>
                    <div className="text-sm text-white/80">투자 유치 금액</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">$50M</div>
                    <div className="text-sm text-white/80">기업 밸류에이션</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-2">25-35% IRR</div>
                    <div className="text-sm text-white/80">2030 Exit 기준 예상 수익률</div>
                  </div>
                  <div className="text-xs text-white/70 pt-4 border-t border-white/20">
                    2026 Q2 타겟
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Competition */}
        {activeSection === 'competitive' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === 'ko' ? '경쟁 분석' : 'Competitive Analysis'}
            </h2>

            {/* Comparison Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <th className="text-left py-4 px-6 font-bold">기능/특성</th>
                      <th className="text-center py-4 px-6 font-bold bg-green-600">Walits</th>
                      <th className="text-center py-4 px-6 font-bold">Fireblocks</th>
                      <th className="text-center py-4 px-6 font-bold">Thirdweb</th>
                      <th className="text-center py-4 px-6 font-bold">Ledger</th>
                      <th className="text-center py-4 px-6 font-bold">Sepior</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">CGGMP21</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">Full</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ Partial</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400">Yes</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">HSM Integration</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">Full</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400">Full</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400">Full</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">TEE (SGX/TDX)</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">Yes</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ Limited</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ No</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">API Simplicity</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">High</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ Complex</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400">High</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ Medium</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ Very Complex</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Speed (TPS)</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">10,000</td>
                      <td className="text-center py-4 px-6 text-gray-600 dark:text-gray-400">1,000</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">100</td>
                      <td className="text-center py-4 px-6 text-gray-600 dark:text-gray-400">100</td>
                      <td className="text-center py-4 px-6 text-gray-600 dark:text-gray-400">5,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Cost</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">Low</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ Very High</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400">Low</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ High</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ High</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">AI/Chat Payment</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">Exclusive</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ None</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ None</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ None</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ None</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">RWA/STO Support</td>
                      <td className="text-center py-4 px-6 text-blue-600 dark:text-blue-400 font-bold">Full</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ Partial</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ None</td>
                      <td className="text-center py-4 px-6 text-yellow-600 dark:text-yellow-400">⭕ Partial</td>
                      <td className="text-center py-4 px-6 text-red-600 dark:text-red-400">❌ None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Walits Differentiation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">기술 우위</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>CGGMP21 구현</li>
                  <li>HSM + TEE 통합</li>
                  <li>CGGMP24 준비중</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">가격 우위</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Fireblocks의 1/10</li>
                  <li>협상 가능한 가격</li>
                  <li>Chat 수수료 절반</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">속도 우위</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>API 배포 1주일</li>
                  <li>Chat 롤아웃 4주</li>
                  <li>커스텀 기능 2주</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">규제 우위</h3>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>한국 자본시장법</li>
                  <li>Clarity Act 준비</li>
                  <li>KYC/AML 자동화</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Go-to-Market */}
        {activeSection === 'gtm' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Go-to-Market Strategy
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Non-Custody GTM */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Non-Custody Wallet
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 1 (Q1-Q2 2026)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 한국 게임사 20-30개 접촉</li>
                      <li>• Web3 게임 스튜디오 50개+</li>
                      <li>• 토큰 프로젝트 100개+</li>
                      <li>• 초기 KPI: 계약 10개사 (월 $50K)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 2 (Q3-Q4 2026)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 미국/EU 게임사 확대</li>
                      <li>• Polygon/Arbitrum 개발사</li>
                      <li>• 신규 게임 플랫폼 파트너십</li>
                      <li>• 목표: 월 $150K (20개사)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Custody GTM */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Custody Wallet
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 1 (Q1-Q2 2026)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 국내 STO 플랫폼 3-5개</li>
                      <li>• 기업 재무팀 10개</li>
                      <li>• 정부 기관 1-2개 파일럿</li>
                      <li>• 초기 KPI: 기관 5개 (월 $500K)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 2 (Q3-Q4 2026)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 글로벌 STO 증권사</li>
                      <li>• 크립토 네이티브 은행</li>
                      <li>• 정부 비축금 (Strategic Reserve)</li>
                      <li>• 목표: 월 $5M</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Auto Chat GTM */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Auto Chat Wallet
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 1 (2026.2-3월)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 카톡 기업앱 정식 출시</li>
                      <li>• 초기 1만 사용자 모집</li>
                      <li>• 일일 거래액: 1억원/일</li>
                      <li>• 수수료: 500만원/일</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 2 (2026.4-6월)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 텔레그램 Bot 글로벌 출시</li>
                      <li>• 월 50만 활성 사용자</li>
                      <li>• 월 거래액: 250억원</li>
                      <li>• 수수료: 1.25억원/월</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 3 (2026.7-12월)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 바이럴 성장 (네트워크 효과)</li>
                      <li>• 월 활성: 300만 사용자</li>
                      <li>• 목표: 월 7.5억원</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI ST Wallet GTM */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  AI 토큰증권 지갑
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 1 (2026.4-6월)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• RWA 토큰 5-10개 포함</li>
                      <li>• 초기 사용자: 1만명</li>
                      <li>• 초기 AUM: 100억원</li>
                      <li>• 수익: 500만원/월</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 2 (2026.7-12월)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 글로벌 RWA 토큰 추가</li>
                      <li>• 사용자: 10만명</li>
                      <li>• AUM: 1,000억원</li>
                      <li>• 수익: 5억원/월</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Phase 3 (2027년)</div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• 기관 RWA 펀드 파트너십</li>
                      <li>• 한국 부동산 토큰화 수혜</li>
                      <li>• AUM: 10조원</li>
                      <li>• 연 수익: 50-100억원</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Risk Analysis */}
        {activeSection === 'risks' && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === 'ko' ? '리스크 분석 & 대응 전략' : 'Risk Analysis & Mitigation'}
            </h2>

            {/* Risk Matrix */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">주요 위험 요소</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">위험</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">영향도</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">대응 전략</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">규제 불확실성</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-semibold">
                          High
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                        Clarity Act 통과 추적, 선제적 준수, 규제 전문가 자문
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">보안 해킹</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-semibold">
                          Critical
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                        정기 침투 테스트, 버그 바운티 프로그램, 보험 가입
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">기술 노후화</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                          Medium
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                        CGGMP24 준비, R&D 투자 (매출의 10-15%)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">경쟁 심화</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                          Medium
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                        Chat+RWA 차별화, 가격 우위, 빠른 출시
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">채택 둔화</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                          Medium
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                        초기 고객 인센티브, 파트너십 확대, 사례 연구
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">인력 확보</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                          Medium
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                        높은 급여, 주식옵션 10-20%, 강한 기술 문화
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technical Risks */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">MPC 보안</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <div className="font-semibold mb-1">위협</div>
                    <div>양자 컴퓨팅</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">대응</div>
                    <div>Post-Quantum Crypto 연구, NIST 표준 추적</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Timeline</div>
                    <div>2028-2030년부터 준비</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">스마트 컨트랙트</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <div className="font-semibold mb-1">위협</div>
                    <div>스마트 컨트랙트 버그</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">대응</div>
                    <div>Formal Verification, 정기 감사</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">예산</div>
                    <div>연 $100K 외부 감사</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">인프라</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <div className="font-semibold mb-1">위협</div>
                    <div>클라우드 장애</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">대응</div>
                    <div>멀티 클라우드 + 온프레미스 HSM</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">SLA</div>
                    <div>RPO/RTO: &lt;1시간</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-4 bg-blue-900 dark:bg-blue-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {language === 'ko' ? 'Walits와 함께하는 토큰화 시대' : 'Tokenization Era with Walits'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'ko'
              ? 'STO 발행, RWA 토크나이제이션, 규제 준수 Custody 상담'
              : 'Consultation on STO issuance, RWA tokenization, compliant custody'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/inquiry"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              {language === 'ko' ? '투자 문의하기' : 'Investment Inquiry'}
            </Link>
            <a
              href="mailto:walits.co@gmail.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              walits.co@gmail.com
            </a>
          </div>
          <div className="text-white/80 text-sm">
            <div className="mb-2">Website: https://walits.com</div>
            <div>문서 작성일: 2026년 1월 17일 | 버전: 1.0</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2026 Walits Inc. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">Confidential - For Authorized Recipients Only</p>
        </div>
      </footer>
    </div>
  );
}
