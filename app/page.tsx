'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copy = {
    ko: {
      hero: {
        title: <>세상에서 가장 쉽고<br />안전한 기업용 지갑</>,
        subtitle: '글로벌 토큰화의 초석, 신뢰비용 제로의 세상을 위하여. Non-Custody API로 대량 지급을 자동화하고, MPC Custody로 자산을 안전하게 보관하세요. 토큰증권 지갑으로 증권형 토큰에 투자하세요.',
      },
      nav: {
        solutions: '솔루션',
        features: '특징',
        pricing: '가격',
        contact: '문의',
        login: '로그인',
      },
      nonCustodyVsCustody: {
        title: 'Non-Custody Wallet vs Custody Wallet',
        subtitle: '앱/게임을 위한 Non-Custody Wallet, 고객 자산 집금을 위한 Custody Wallet을 선택하세요.',
        basicTitle: 'Non-Custody Wallet',
        basicSubtitle: 'API로 간편하게 대량 지급',
        basicDesc: '집금 없이 계정별로 독립 입출금. 대규모 에어드랍/보상/토큰 지급에 최적화.',
        basicFeatures: [
          '즉시 시작: API 키만으로 바로 사용',
          '빠른 처리: TEE 환경에서 대량 트랜잭션 동시 처리',
          '간편 관리: 계정별 독립 지갑으로 복잡한 승인 불필요',
          '안전한 격리: 각 계정은 독립된 지갑으로 완전 격리',
        ],
        basicUseCases: '✓ 게임 보상 지급\n✓ NFT 에어드랍\n✓ 유틸리티 토큰 배포\n✓ 대량 리워드 발행',
        proTitle: 'Custody Wallet',
        proSubtitle: 'MPC로 안전하게 자산 보관',
        proDesc: '기업 자산을 MPC 2-of-3 다중 서명으로 안전하게 보관. 승인 정책 기반 거버넌스.',
        proFeatures: [
          '최고 보안: MPC 2-of-3로 단일 실패점 제거',
          '다중 승인: 정책 기반 승인 워크플로우',
          '완벽한 감사: 모든 거래 이력 추적 및 리포팅',
          '규제 대응: 금융기관급 보안 및 컴플라이언스',
        ],
        proUseCases: '✓ 고객 자산 집금\n✓ 운영 자금 관리\n✓ 기업 재무 관리\n✓ 토큰 발행사 운영',
      },
      aiVsSto: {
        title: 'AI Robo-Advisor vs STO Token Wallet',
        subtitle: '개인 투자자를 위한 두 가지 혁신적인 지갑 서비스',
        aiTitle: 'AI 로보어드바이저 지갑',
        aiSubtitle: 'AI가 관리하는 스마트 투자',
        aiDesc: 'AI가 시장을 분석하고 자동으로 포트폴리오를 최적화합니다.',
        aiFeatures: [
          '자동 리밸런싱: AI가 최적 비율 유지',
          '스마트 분석: 시장 데이터 기반 투자 추천',
          '실시간 대응: 시장 변화에 즉각 반응',
          '맞춤 전략: 투자 성향에 맞는 포트폴리오',
        ],
        aiUseCases: '✓ 자동 포트폴리오 관리\n✓ 리스크 기반 투자\n✓ 수익 극대화 전략\n✓ 시장 분석 리포트',
        stoTitle: 'STO 토큰 거래 지갑',
        stoSubtitle: '증권형 토큰 안전 거래',
        stoDesc: '규제 준수 증권형 토큰을 안전하게 거래하고 관리합니다.',
        stoFeatures: [
          '규제 준수: 금융 규제 완벽 대응',
          '실물 자산: 부동산, 주식 등 토큰화 자산',
          '배당 수령: 자동 배당금 분배',
          '안전 보관: 기관급 보안 시스템',
        ],
        stoUseCases: '✓ 부동산 토큰 투자\n✓ 주식형 토큰 거래\n✓ 배당 수익 관리\n✓ 디지털 증권 보관',
      },
      mpc: {
        title: 'MPC 2-of-3: 최고의 보안 아키텍처',
        subtitle: 'Multi-Party Computation으로 구현한 완벽한 키 분산',
        desc: 'Blockbit의 Custody 지갑은 MPC 2-of-3 방식을 채택하여 단일 실패점을 완전히 제거했습니다. 3개의 키 조각 중 2개만 있으면 서명이 가능하여, 높은 보안성과 편의성을 동시에 제공합니다.',
        features: [
          {
            title: '분산 키 관리',
            desc: '개인키를 3개로 분할하여 각기 다른 위치에 안전하게 보관',
          },
          {
            title: '2-of-3 서명',
            desc: '거래 시 3개 중 2개의 키만 있으면 서명 가능',
          },
          {
            title: '단일 실패점 제거',
            desc: '1개의 키가 손실되어도 나머지 2개로 정상 운영',
          },
        ],
      },
      pricing: {
        title: '가격 안내',
        subtitle: '비즈니스 규모에 맞는 최적의 플랜을 선택하세요',
        monthly: '월',
        getStarted: '시작하기',
        plans: {
          ai: {
            name: 'AI 로보어드바이저',
            price: '$5',
            features: [
              'AI 기반 포트폴리오 관리',
              '자동 리밸런싱',
              '투자 추천 알고리즘',
              '실시간 시장 분석',
              '24/7 모니터링',
            ],
          },
          sto: {
            name: 'STO 토큰 지갑',
            price: '$5',
            features: [
              '증권형 토큰 거래',
              '규제 준수 관리',
              '배당금 자동 수령',
              '실물 자산 토큰 보관',
              '거래 내역 관리',
            ],
          },
          nonCustody: {
            name: 'Non-Custody 지갑',
            price: '$50',
            features: [
              'TEE 환경 보안',
              'API 기반 대량 지급',
              '계정별 독립 지갑',
              '무제한 트랜잭션',
              '개발자 기술 지원',
            ],
          },
          custody: {
            name: 'Custody 지갑',
            price: '$500',
            features: [
              'MPC 2-of-3 보안',
              '다중 승인 워크플로우',
              '정책 기반 거버넌스',
              '완벽한 감사 추적',
              '전담 계정 매니저',
              '우선 기술 지원',
            ],
          },
        },
      },
      footer: {
        services: '서비스',
        personal: '개인 투자자',
        enterprise: '기업 고객',
        contact: '문의',
        email: '이메일: contact@blockbit.io',
        phone: '전화: 02-1234-5678',
        rights: '© 2024 Blockbit. All rights reserved.',
      },
    },
    en: {
      hero: {
        title: <>The Easiest and<br />Most Secure Enterprise Wallet</>,
        subtitle: 'Foundation of global tokenization, for a world of zero trust costs. Automate mass distributions with Non-Custody API, secure corporate assets with MPC Custody, and trade compliant security tokens with STO Wallet.',
      },
      nav: {
        solutions: 'Solutions',
        features: 'Features',
        pricing: 'Pricing',
        contact: 'Contact',
        login: 'Login',
      },
      nonCustodyVsCustody: {
        title: 'Non-Custody Wallet vs Custody Wallet',
        subtitle: 'Choose Non-Custody Wallet for apps/games, Custody Wallet for customer asset management.',
        basicTitle: 'Non-Custody Wallet',
        basicSubtitle: 'Easy Mass Distribution via API',
        basicDesc: 'Independent deposit/withdrawal per account without custody. Optimized for large-scale airdrops/rewards/token distribution.',
        basicFeatures: [
          'Instant Start: Use immediately with just API key',
          'Fast Processing: Simultaneous mass transactions in TEE environment',
          'Easy Management: No complex approvals with independent wallets per account',
          'Safe Isolation: Each account completely isolated with independent wallet',
        ],
        basicUseCases: '✓ Game Rewards\n✓ NFT Airdrops\n✓ Utility Token Distribution\n✓ Mass Reward Issuance',
        proTitle: 'Custody Wallet',
        proSubtitle: 'Secure Asset Storage with MPC',
        proDesc: 'Safely store corporate assets with MPC 2-of-3 multi-signature. Approval policy-based governance.',
        proFeatures: [
          'Maximum Security: Eliminate single point of failure with MPC 2-of-3',
          'Multi-Approval: Policy-based approval workflow',
          'Complete Audit: Track and report all transaction history',
          'Regulatory Compliance: Financial institution-grade security and compliance',
        ],
        proUseCases: '✓ Customer Asset Custody\n✓ Operating Fund Management\n✓ Corporate Treasury\n✓ Token Issuer Operations',
      },
      aiVsSto: {
        title: 'AI Robo-Advisor vs STO Token Wallet',
        subtitle: 'Two innovative wallet services for individual investors',
        aiTitle: 'AI Robo-Advisor Wallet',
        aiSubtitle: 'Smart Investment Managed by AI',
        aiDesc: 'AI analyzes markets and automatically optimizes your portfolio.',
        aiFeatures: [
          'Auto Rebalancing: AI maintains optimal ratios',
          'Smart Analysis: Market data-based investment recommendations',
          'Real-time Response: Instant reaction to market changes',
          'Custom Strategy: Portfolio tailored to your investment style',
        ],
        aiUseCases: '✓ Automated Portfolio Management\n✓ Risk-based Investment\n✓ Profit Maximization Strategy\n✓ Market Analysis Reports',
        stoTitle: 'STO Token Trading Wallet',
        stoSubtitle: 'Safe Security Token Trading',
        stoDesc: 'Safely trade and manage regulatory-compliant security tokens.',
        stoFeatures: [
          'Regulatory Compliance: Full financial regulation compliance',
          'Real Assets: Tokenized real estate, stocks, etc.',
          'Dividend Receipt: Automatic dividend distribution',
          'Safe Storage: Institution-grade security system',
        ],
        stoUseCases: '✓ Real Estate Token Investment\n✓ Equity Token Trading\n✓ Dividend Income Management\n✓ Digital Securities Storage',
      },
      mpc: {
        title: 'MPC 2-of-3: Ultimate Security Architecture',
        subtitle: 'Perfect key distribution with Multi-Party Computation',
        desc: "Blockbit's Custody wallet adopts MPC 2-of-3 method to completely eliminate single points of failure. Signing requires only 2 out of 3 key shares, providing both high security and convenience.",
        features: [
          {
            title: 'Distributed Key Management',
            desc: 'Private key split into 3 parts, stored safely in different locations',
          },
          {
            title: '2-of-3 Signing',
            desc: 'Signing possible with only 2 out of 3 keys during transactions',
          },
          {
            title: 'No Single Point of Failure',
            desc: 'Normal operation continues with remaining 2 keys even if 1 is lost',
          },
        ],
      },
      pricing: {
        title: 'Pricing Plans',
        subtitle: 'Choose the perfect plan for your business scale',
        monthly: 'mo',
        getStarted: 'Get Started',
        plans: {
          ai: {
            name: 'AI Robo-Advisor',
            price: '$5',
            features: [
              'AI-powered portfolio management',
              'Automatic rebalancing',
              'Investment recommendations',
              'Real-time market analysis',
              '24/7 monitoring',
            ],
          },
          sto: {
            name: 'STO Token Wallet',
            price: '$5',
            features: [
              'Security token trading',
              'Regulatory compliance',
              'Automatic dividend receipt',
              'Real asset token storage',
              'Transaction history',
            ],
          },
          nonCustody: {
            name: 'Non-Custody Wallet',
            price: '$50',
            features: [
              'TEE environment security',
              'API-based mass distribution',
              'Independent wallet per account',
              'Unlimited transactions',
              'Developer support',
            ],
          },
          custody: {
            name: 'Custody Wallet',
            price: '$500',
            features: [
              'MPC 2-of-3 security',
              'Multi-approval workflow',
              'Policy-based governance',
              'Complete audit trail',
              'Dedicated account manager',
              'Priority technical support',
            ],
          },
        },
      },
      footer: {
        services: 'Services',
        personal: 'Personal',
        enterprise: 'Enterprise',
        contact: 'Contact',
        email: 'Email: contact@blockbit.io',
        phone: 'Phone: 02-1234-5678',
        rights: '© 2024 Blockbit. All rights reserved.',
      },
    },
  }[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className={`text-3xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>Blockbit</span>

            {/* Enterprise Wallets */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-normal ${scrolled ? 'text-gray-500' : 'text-white/50'}`}>
                {language === 'ko' ? '기업용' : 'Enterprise'}
              </span>
              <span className={`text-lg font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Non-Custody, Custody Wallet
              </span>
            </div>

            {/* Personal Wallets */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-normal ${scrolled ? 'text-gray-500' : 'text-white/50'}`}>
                {language === 'ko' ? '개인용' : 'Personal'}
              </span>
              <span className={`text-lg font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                STO Wallet
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#solutions" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.solutions}
            </a>
            <a href="#features" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.features}
            </a>
            <a href="#pricing" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.pricing}
            </a>
            <a href="#contact" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.contact}
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('ko')}
                className={`text-lg transition-all ${
                  language === 'ko'
                    ? 'font-bold text-white'
                    : scrolled
                    ? 'font-normal text-gray-400'
                    : 'font-normal text-white/60'
                }`}
              >
                한
              </button>
              <span className={`text-lg ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-lg transition-all ${
                  language === 'en'
                    ? 'font-bold text-white'
                    : scrolled
                    ? 'font-normal text-gray-400'
                    : 'font-normal text-white/60'
                }`}
              >
                EN
              </button>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setLoginOpen(true)}
              onMouseLeave={() => setLoginOpen(false)}
            >
              <button className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-lg flex items-center gap-2">
                {copy.nav.login}
                <span className="text-xs">▼</span>
              </button>
              {loginOpen && (
                <div className="absolute top-full right-0 pt-2 z-50">
                  <div className="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                    <a href="http://localhost:3101/login" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? 'STO 토큰 지갑' : 'STO Token Wallet'}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? '증권형 토큰 거래 및 관리' : 'Security token trading & management'}
                      </div>
                    </a>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <a href="http://localhost:3103/login" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? 'Non-Custody 지갑' : 'Non-Custody Wallet'}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? 'API 기반 대량 지급' : 'API-based mass distribution'}
                      </div>
                    </a>
                    <a href="http://localhost:3104/login" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? 'Custody 지갑' : 'Custody Wallet'}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? 'MPC 2-of-3 안전 보관' : 'MPC 2-of-3 secure storage'}
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 py-32">
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium">
                {language === 'ko' ? '신뢰의 가치를 당신과 나눕니다' : 'Sharing the value of trust with you'}
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {copy.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {copy.hero.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#solutions"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {language === 'ko' ? '시작하기' : 'Get Started'}
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {language === 'ko' ? '자세히 보기' : 'Learn More'}
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise Wallets Section */}
      <section id="solutions" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {language === 'ko' ? '기업용 지갑' : 'Enterprise Wallets'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.nonCustodyVsCustody.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Non-Custody Card */}
            <div className="rounded-3xl p-10 bg-white dark:bg-gray-800 shadow-md border border-gray-900 dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-900 dark:bg-gray-600">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {copy.nonCustodyVsCustody.basicTitle}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {language === 'ko' ? '독립 계정 기반 · 집금 없음' : 'Independent accounts · No pooling'}
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {copy.nonCustodyVsCustody.basicDesc}
              </p>
              <ul className="space-y-3 text-base text-gray-800 dark:text-gray-300">
                {copy.nonCustodyVsCustody.basicFeatures.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                {language === 'ko' ? '게임/앱에 최적화 · API 기반' : 'Optimized for Apps/Games · API-based'}
              </div>
            </div>

            {/* Custody Card */}
            <div className="rounded-3xl p-10 bg-white dark:bg-gray-800 shadow-md border border-gray-900 dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-900 dark:bg-gray-600">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {copy.nonCustodyVsCustody.proTitle}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {language === 'ko' ? '집금(Omnibus) · 정책 기반 출금' : 'Omnibus pooling · Policy-based withdrawals'}
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {copy.nonCustodyVsCustody.proDesc}
              </p>
              <ul className="space-y-3 text-base text-gray-800 dark:text-gray-300">
                {copy.nonCustodyVsCustody.proFeatures.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                {language === 'ko' ? '기업 재무 관리 · 고객 자산 보관' : 'Corporate Treasury · Customer Asset Custody'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STO Wallet Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {language === 'ko' ? 'STO 토큰 지갑' : 'STO Token Wallet'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'ko' ? '규제 준수 증권형 토큰을 안전하게 거래하고 관리하세요' : 'Safely trade and manage regulatory-compliant security tokens'}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* STO Card */}
            <div className="rounded-3xl p-10 bg-white dark:bg-gray-800 shadow-xl border border-gray-900 dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-900 dark:bg-gray-600">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {copy.aiVsSto.stoTitle}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {language === 'ko' ? '토큰증권 · KYC/AML 준수' : 'Security Tokens · KYC/AML Compliant'}
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {copy.aiVsSto.stoDesc}
              </p>
              <ul className="space-y-3 text-base text-gray-800 dark:text-gray-300">
                {copy.aiVsSto.stoFeatures.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                {language === 'ko' ? '증권형 토큰 투자자 · 기관 투자자' : 'Security Token Investors · Institutional'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MPC Architecture Section */}
      <section id="features" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {copy.mpc.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.mpc.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Left: Description */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {copy.mpc.desc}
              </p>

              <div className="space-y-6">
                {copy.mpc.features.map((feature, i) => (
                  <div key={i} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <img src="/tech.png" alt="MPC Architecture" className="w-full max-w-md rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {copy.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* STO Token Plan */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {copy.pricing.plans.sto.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {copy.pricing.plans.sto.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{copy.pricing.monthly}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {copy.pricing.plans.sto.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-900 dark:text-white mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="http://localhost:3101/login"
                className="block w-full text-center py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 font-medium transition-colors"
              >
                {copy.pricing.getStarted}
              </a>
            </div>

            {/* Non-Custody Plan */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {copy.pricing.plans.nonCustody.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {copy.pricing.plans.nonCustody.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{copy.pricing.monthly}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {copy.pricing.plans.nonCustody.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-900 dark:text-white mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="http://localhost:3102/login"
                className="block w-full text-center py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 font-medium transition-colors"
              >
                {copy.pricing.getStarted}
              </a>
            </div>

            {/* Custody Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 rounded-xl p-8 border-2 border-gray-700 dark:border-gray-400 hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {language === 'ko' ? '프리미엄' : 'Premium'}
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-2">
                  {copy.pricing.plans.custody.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-yellow-500 dark:text-yellow-600">
                    {copy.pricing.plans.custody.price}
                  </span>
                  <span className="text-gray-400 dark:text-gray-600">/{copy.pricing.monthly}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {copy.pricing.plans.custody.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300 dark:text-gray-600">
                    <span className="text-yellow-500 dark:text-yellow-600 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="http://localhost:3102/login"
                className="block w-full text-center py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-semibold transition-colors shadow-md"
              >
                {copy.pricing.getStarted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-lg text-gray-900 dark:text-white">Blockbit</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                차세대 블록체인 지갑 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">{copy.footer.services}</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="http://localhost:3101/login" className="hover:underline">{copy.footer.personal}</a></li>
                <li><a href="http://localhost:3102/login" className="hover:underline">{copy.footer.enterprise}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">{copy.footer.contact}</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>{copy.footer.email}</li>
                <li>{copy.footer.phone}</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p>{copy.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
