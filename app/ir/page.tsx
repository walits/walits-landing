'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IRPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      title: 'Investor Relations',
      subtitle: '2026년 암호화폐 시장의 4대 성장축을 정확히 겨냥한 전략적 포트폴리오',
      hero: {
        tag: '완벽한 포지셔닝',
        headline: 'Walits 4가지 지갑 서비스',
        description: '기업용과 개인용, 현재 수익과 미래 성장을 동시에 잡는 전략',
      },
      portfolio: {
        title: 'Walits 포트폴리오 전략',
        enterprise: '기업용 (현재 시장)',
        personal: '개인용 (미래 시장)',
        services: [
          {
            name: 'Non-Custody Wallet',
            tag: '✅ 시장 검증됨',
            target: '게임/앱 유저 토큰 관리',
            status: '운영중',
            revenue: '월 1-4천만원',
          },
          {
            name: 'Custody Wallet',
            tag: '✅ Clarity Act 수혜',
            target: 'STO/RWA 기관 자산 보관',
            status: '운영중',
            revenue: '월 5천만-1억원',
          },
          {
            name: 'Auto Chat Wallet',
            tag: '🚀 대중화 포인트',
            target: '메시지 앱 결제 혁신',
            status: '2026 런칭',
            revenue: '월 2.5억원 (목표)',
          },
          {
            name: 'AI 토큰증권 Wallet',
            tag: '🚀 RWA 투자자 진입',
            target: '개인 RWA 소액 투자',
            status: '2026 런칭',
            revenue: '연 50억원 (장기)',
          },
        ],
      },
      market: {
        title: '각 서비스별 시장 기회',
      },
      roadmap: {
        title: '2026 Walits 로드맵',
        quarters: [
          {
            period: 'Q1 2026',
            items: [
              { icon: '✅', text: 'Non-Custody: 운영 수익화 (월 1-4천만원)' },
              { icon: '✅', text: 'Custody: Clarity Act 수요 포착 (월 5천만-1억)' },
              { icon: '🚀', text: 'Auto Chat: 베타 테스트 (카카오톡 기업앱 연동)' },
              { icon: '🚀', text: 'AI 토큰증권: 알파 테스트 (한국 부동산 RWA)' },
            ],
          },
          {
            period: 'Q2-Q3 2026',
            items: [
              { icon: '📈', text: 'Clarity Act 상원 통과 → STO 발행 급증' },
              { icon: '📱', text: 'Auto Chat Wallet 정식 런칭 → 월 1만 유저' },
              { icon: '🏢', text: 'AI 토큰증권 베타 → 기관 파일럿 테스트' },
              { icon: '🌏', text: 'Non-Custody 글로벌 확장 (동남아)' },
            ],
          },
          {
            period: 'Q4 2026 - 2027',
            items: [
              { icon: '💰', text: 'Non-Custody: 월 $100-200만 (글로벌)' },
              { icon: '🏦', text: 'Custody: 월 $500-1,000만 (기관 수주)' },
              { icon: '💬', text: 'Auto Chat: 월 $100-300만 (한국+동남아)' },
              { icon: '📊', text: 'AI 토큰증권: 월 $10-50만 (초기 AUM)' },
            ],
          },
        ],
        projection: '예상 연 수익: $15-30M (180-360억원)',
      },
      competitive: {
        title: '경쟁사 비교',
        companies: ['Walits', 'Thirdweb', 'Magic', 'Fireblocks'],
        criteria: [
          { name: '기술 스택', scores: ['MPC/HSM ✅', 'API ⭕', 'OAuth ⭕', 'Institutional ⭕'] },
          { name: '보안 수준', scores: ['CGGMP21 ✅', '중간 ⭕', '중간 ⭕', '최고 ✅'] },
          { name: '스타트업 친화', scores: ['API 쉬움 ✅', '같음 ✅', '같음 ✅', '어려움 ❌'] },
          { name: 'AI/Chat 결제', scores: ['독점 ✅', '없음 ❌', '없음 ❌', '없음 ❌'] },
          { name: 'RWA/STO', scores: ['토큰증권 ✅', '없음 ❌', '없음 ❌', '있음 ⭕'] },
          { name: '한국 규제 대응', scores: ['최적 ✅', '미흡 ⭕', '미흡 ⭕', '과도 ❌'] },
        ],
      },
      strategy: {
        title: '전략적 우선순위',
        focus: [
          {
            title: '1. Non-Custody: 게임사 확보',
            desc: '게임/앱 스튜디오 20-30개 확보 목표',
            detail: '각 프로젝트당 월 $500-2,000 수익, 영업 파이프라인 구축 중',
          },
          {
            title: '2. Custody: STO 플랫폼 파트너십',
            desc: 'Clarity Act 통과 대비 기관 고객 확보',
            detail: '한국 자본시장법 준수 가이드 제공, 월 5천만원급 계약 타겟',
          },
          {
            title: '3. Auto Chat: 메시지 앱 유통',
            desc: '카카오톡 기업앱 및 텔레그램 봇 우선',
            detail: '메시지 앱 = 최강 유통채널, 네트워크 효과 극대화',
          },
        ],
        caution: [
          {
            title: '토큰증권 지갑은 장기 베팅',
            desc: 'RWA 시장 성숙까지 2-3년 소요 예상 (2027-2028)',
          },
          {
            title: 'AI 자동 리밸런싱 기술력 검증 필요',
            desc: '초기 단순 관리로 시작, 점진적 고도화',
          },
          {
            title: '규제 리스크 상시 모니터링',
            desc: 'FSC, SEC, FCA 정책 변화 추적 및 대응',
          },
        ],
      },
      contact: {
        title: 'Walits와 함께하는 토큰화 시대',
        desc: 'STO 발행, RWA 토크나이제이션, 규제 준수 Custody 상담',
        cta: '투자 문의하기',
      },
    },
    en: {
      title: 'Investor Relations',
      subtitle: 'Strategic Portfolio Targeting 4 Major Growth Drivers in 2026 Crypto Market',
      hero: {
        tag: 'Perfect Positioning',
        headline: 'Walits 4 Wallet Services',
        description: 'Strategy capturing both current revenue (enterprise) and future growth (consumer)',
      },
      portfolio: {
        title: 'Walits Portfolio Strategy',
        enterprise: 'Enterprise (Current Market)',
        personal: 'Consumer (Future Market)',
        services: [
          {
            name: 'Non-Custody Wallet',
            tag: '✅ Market Validated',
            target: 'Game/App User Token Management',
            status: 'Live',
            revenue: '$10-40K/month',
          },
          {
            name: 'Custody Wallet',
            tag: '✅ Clarity Act Benefit',
            target: 'STO/RWA Institutional Custody',
            status: 'Live',
            revenue: '$50-100K/month',
          },
          {
            name: 'Auto Chat Wallet',
            tag: '🚀 Mass Adoption Point',
            target: 'Messaging App Payment Innovation',
            status: 'Launch 2026',
            revenue: '$250K/month (target)',
          },
          {
            name: 'AI Security Token Wallet',
            tag: '🚀 RWA Investor Entry',
            target: 'Individual RWA Micro Investment',
            status: 'Launch 2026',
            revenue: '$5M/year (long-term)',
          },
        ],
      },
      market: {
        title: 'Market Opportunity by Service',
      },
      roadmap: {
        title: '2026 Walits Roadmap',
        quarters: [
          {
            period: 'Q1 2026',
            items: [
              { icon: '✅', text: 'Non-Custody: Revenue generating ($10-40K/mo)' },
              { icon: '✅', text: 'Custody: Clarity Act demand capture ($50-100K/mo)' },
              { icon: '🚀', text: 'Auto Chat: Beta test (KakaoTalk enterprise API)' },
              { icon: '🚀', text: 'AI ST: Alpha test (Korea real estate RWA)' },
            ],
          },
          {
            period: 'Q2-Q3 2026',
            items: [
              { icon: '📈', text: 'Clarity Act passes Senate → STO issuance surge' },
              { icon: '📱', text: 'Auto Chat Wallet official launch → 10K users/mo' },
              { icon: '🏢', text: 'AI ST Beta → Institutional pilot testing' },
              { icon: '🌏', text: 'Non-Custody global expansion (Southeast Asia)' },
            ],
          },
          {
            period: 'Q4 2026 - 2027',
            items: [
              { icon: '💰', text: 'Non-Custody: $100-200K/mo (global)' },
              { icon: '🏦', text: 'Custody: $500K-1M/mo (institutional contracts)' },
              { icon: '💬', text: 'Auto Chat: $100-300K/mo (Korea+SEA)' },
              { icon: '📊', text: 'AI ST: $10-50K/mo (initial AUM)' },
            ],
          },
        ],
        projection: 'Projected Annual Revenue: $15-30M',
      },
      competitive: {
        title: 'Competitive Analysis',
        companies: ['Walits', 'Thirdweb', 'Magic', 'Fireblocks'],
        criteria: [
          { name: 'Tech Stack', scores: ['MPC/HSM ✅', 'API ⭕', 'OAuth ⭕', 'Institutional ⭕'] },
          { name: 'Security', scores: ['CGGMP21 ✅', 'Medium ⭕', 'Medium ⭕', 'Highest ✅'] },
          { name: 'Startup Friendly', scores: ['Easy API ✅', 'Same ✅', 'Same ✅', 'Difficult ❌'] },
          { name: 'AI/Chat Payment', scores: ['Exclusive ✅', 'None ❌', 'None ❌', 'None ❌'] },
          { name: 'RWA/STO', scores: ['ST Wallet ✅', 'None ❌', 'None ❌', 'Yes ⭕'] },
          { name: 'Korea Compliance', scores: ['Optimal ✅', 'Insufficient ⭕', 'Insufficient ⭕', 'Excessive ❌'] },
        ],
      },
      strategy: {
        title: 'Strategic Priorities',
        focus: [
          {
            title: '1. Non-Custody: Game Studio Acquisition',
            desc: 'Target: 20-30 game/app studios',
            detail: '$500-2,000/mo per project, building sales pipeline',
          },
          {
            title: '2. Custody: STO Platform Partnerships',
            desc: 'Secure institutional clients for Clarity Act',
            detail: 'Provide Korea Capital Markets Act compliance guide',
          },
          {
            title: '3. Auto Chat: Messaging App Distribution',
            desc: 'KakaoTalk enterprise app & Telegram bot first',
            detail: 'Messaging apps = strongest distribution channel',
          },
        ],
        caution: [
          {
            title: 'ST Wallet is long-term bet',
            desc: 'RWA market maturation expected 2-3 years (2027-2028)',
          },
          {
            title: 'AI auto-rebalancing tech validation needed',
            desc: 'Start with simple management, gradual sophistication',
          },
          {
            title: 'Constant regulatory risk monitoring',
            desc: 'Track FSC, SEC, FCA policy changes',
          },
        ],
      },
      contact: {
        title: 'Tokenization Era with Walits',
        desc: 'Consultation on STO issuance, RWA tokenization, compliant custody',
        cta: 'Investment Inquiry',
      },
    },
  }[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Walits
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {language === 'ko' ? '홈' : 'Home'}
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('ko')}
                className={`text-sm transition-all ${
                  language === 'ko' ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-500'
                }`}
              >
                한
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm transition-all ${
                  language === 'en' ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-500'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <span className="text-white font-semibold text-sm">{copy.hero.tag}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {copy.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              {copy.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {copy.portfolio.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Enterprise Services */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {copy.portfolio.enterprise}
              </h3>
              {copy.portfolio.services.slice(0, 2).map((service, i) => (
                <div key={i} className="mb-6 last:mb-0 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{service.name}</h4>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">{service.status}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{service.target}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{service.tag}</span>
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">{service.revenue}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Consumer Services */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-purple-500">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {copy.portfolio.personal}
              </h3>
              {copy.portfolio.services.slice(2, 4).map((service, i) => (
                <div key={i} className="mb-6 last:mb-0 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{service.name}</h4>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">{service.status}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{service.target}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{service.tag}</span>
                    <span className="text-sm font-bold text-green-600 dark:text-green-400">{service.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {copy.roadmap.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {copy.roadmap.quarters.map((quarter, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-blue-500 pb-2">
                  {quarter.period}
                </h3>
                <ul className="space-y-3">
                  {quarter.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold">{copy.roadmap.projection}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {copy.competitive.title}
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="px-6 py-4 text-left font-bold">{language === 'ko' ? '구분' : 'Criteria'}</th>
                    {copy.competitive.companies.map((company, i) => (
                      <th key={i} className="px-6 py-4 text-center font-bold">{company}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.competitive.criteria.map((criterion, i) => (
                    <tr key={i} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{criterion.name}</td>
                      {criterion.scores.map((score, j) => (
                        <td key={j} className="px-6 py-4 text-center text-sm text-gray-700 dark:text-gray-300">
                          {score}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {copy.strategy.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {copy.strategy.focus.map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.desc}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 border-2 border-yellow-400 dark:border-yellow-600">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <span>⚠️</span>
              {language === 'ko' ? '주의사항' : 'Risk Factors'}
            </h3>
            <div className="space-y-4">
              {copy.strategy.caution.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {copy.contact.title}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {copy.contact.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/inquiry"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              {copy.contact.cta}
            </Link>
            <a
              href="mailto:walits.co@gmail.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              walits.co@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2026 Walits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
