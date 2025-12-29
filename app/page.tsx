'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Service URLs from environment variables
  const NON_CUSTODY_URL = process.env.NEXT_PUBLIC_NON_CUSTODY_URL || 'http://localhost:3101';
  const CUSTODY_URL = process.env.NEXT_PUBLIC_CUSTODY_URL || 'http://localhost:3102';
  const AI_URL = process.env.NEXT_PUBLIC_AI_URL || 'http://localhost:3105';
  const ST_URL = process.env.NEXT_PUBLIC_ST_URL || 'http://localhost:3106';

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
        blog: '블로그',
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
        title: 'AI Robo-Advisor vs ST Token Wallet',
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
        stoTitle: '토큰증권 거래 지갑',
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
        desc: 'Walits의 Custody 지갑은 MPC 2-of-3 방식을 채택하여 단일 실패점을 완전히 제거했습니다. 3개의 키 조각 중 2개만 있으면 서명이 가능하여, 높은 보안성과 편의성을 동시에 제공합니다.',
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
      techStack: {
        title: 'Rust로 구축한 안전하고 강력한 인프라',
        subtitle: '시스템 프로그래밍 언어 Rust의 메모리 안정성과 성능을 활용',
        desc: 'Walits의 핵심 인프라는 Rust로 개발되어 메모리 안정성, 동시성 처리, 제로 코스트 추상화를 제공합니다. 블록체인 모니터링과 MPC 서명 서버는 Rust의 강력한 타입 시스템과 소유권 모델로 런타임 에러를 원천 차단합니다.',
        features: [
          {
            title: 'xScanner (Rust)',
            desc: '실시간 블록 폴링으로 입금 감지. 10초 주기로 블록체인을 모니터링하여 1 confirmation부터 즉시 탐지',
          },
          {
            title: 'MPC 서명 서버 (Rust)',
            desc: 'TEE 환경에서 안전한 MPC 서명 생성. 키 조각을 분산 저장하여 단일 실패점 제거',
          },
          {
            title: '분산 RPC 라우팅',
            desc: 'Alchemy/Infura 자동 페일오버. 노드 장애 시 즉시 전환하여 99.9% 가용성 보장',
          },
          {
            title: '실시간 Confirmation 추적',
            desc: '입출금 모두 실시간 confirmation 계산. latestBlock - txBlock + 1 방식으로 정확한 확정 상태 추적',
          },
          {
            title: 'Redis 분산 락',
            desc: '멱등성 보장으로 중복 처리 방지. 동시성 이슈 원천 차단',
          },
          {
            title: '자동 집금 (Auto-Sweep)',
            desc: '입금 확정 시 Master Address로 자동 집금. 가스비 최적화 및 자산 통합 관리',
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
            price: '무료',
            features: [
              'AI 기반 포트폴리오 관리',
              '자동 리밸런싱',
              '투자 추천 알고리즘',
              '실시간 시장 분석',
              '24/7 모니터링',
            ],
          },
          sto: {
            name: '토큰증권 지갑',
            price: '무료',
            features: [
              '증권형 토큰 계정 관리',
              '규제 준수 관리',
              '배당금 자동 수령',
              '실물 자산 토큰 보관',
              '통합 RWA 검색 및 구매 관리',
              '거래 내역 관리',
            ],
          },
          nonCustody: {
            name: 'Non-Custody 지갑',
            originalPrice: '₩200,000',
            price: '₩77,000',
            features: [
              'TEE 환경 보안',
              'API 기반 대량 지급',
              '계정별 독립 지갑',
              '무제한 트랜잭션',
              '서비스 독립 토큰 발행',
              '개발자 기술 지원',
            ],
          },
          custody: {
            name: 'Custody 지갑',
            originalPrice: '₩1,000,000',
            price: '₩550,000',
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
        email: '이메일: walits.co@gmail.com',
        phone: '전화: 010-3298-5823',
        rights: '© 2026 Walits. All rights reserved.',
      },
    },
    en: {
      hero: {
        title: <>The Easiest and<br />Most Secure Enterprise Wallet</>,
        subtitle: 'Foundation of global tokenization, for a world of zero trust costs. Automate mass distributions with Non-Custody API, secure corporate assets with MPC Custody, and trade compliant security tokens with ST Wallet.',
      },
      nav: {
        solutions: 'Solutions',
        blog: 'Blog',
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
        title: 'AI Robo-Advisor vs ST Token Wallet',
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
        stoTitle: 'ST Token Trading Wallet',
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
        desc: "Walits's Custody wallet adopts MPC 2-of-3 method to completely eliminate single points of failure. Signing requires only 2 out of 3 key shares, providing both high security and convenience.",
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
      techStack: {
        title: 'Built on Rust: Safe and Powerful Infrastructure',
        subtitle: 'Leveraging memory safety and performance of the systems programming language Rust',
        desc: "Walits's core infrastructure is built with Rust, providing memory safety, concurrency handling, and zero-cost abstractions. Blockchain monitoring and MPC signing servers eliminate runtime errors with Rust's strong type system and ownership model.",
        features: [
          {
            title: 'xScanner (Rust)',
            desc: 'Real-time block polling for deposit detection. Monitors blockchain every 10 seconds, detecting from 1 confirmation instantly',
          },
          {
            title: 'MPC Signing Server (Rust)',
            desc: 'Secure MPC signature generation in TEE environment. Eliminates single point of failure by distributing key shares',
          },
          {
            title: 'Distributed RPC Routing',
            desc: 'Automatic Alchemy/Infura failover. Instant switching on node failure ensures 99.9% availability',
          },
          {
            title: 'Real-time Confirmation Tracking',
            desc: 'Real-time confirmation calculation for both deposits and withdrawals. Accurate finality tracking with latestBlock - txBlock + 1',
          },
          {
            title: 'Redis Distributed Lock',
            desc: 'Idempotency guaranteed to prevent duplicate processing. Eliminates concurrency issues at the source',
          },
          {
            title: 'Auto-Sweep',
            desc: 'Automatic sweep to Master Address upon deposit confirmation. Optimizes gas fees and centralizes asset management',
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
            price: 'Free',
            features: [
              'AI-powered portfolio management',
              'Automatic rebalancing',
              'Investment recommendations',
              'Real-time market analysis',
              '24/7 monitoring',
            ],
          },
          sto: {
            name: 'ST Wallet',
            price: 'Free',
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
            originalPrice: '$150',
            price: '$58',
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
            originalPrice: '$750',
            price: '$410',
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
        email: 'Email: walits.co@gmail.com',
        phone: 'Phone: 010-3298-5823',
        rights: '© 2026 Walits. All rights reserved.',
      },
    },
  }[language];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Walits",
    description: language === 'ko'
      ? "기업용 가상자산 지갑, 토큰증권 거래, 코인지갑 플랫폼. Non-Custody API 대량 지급, MPC Custody 안전 보관, AI 로보어드바이저, 토큰증권(ST) 지갑"
      : "Enterprise crypto wallet platform featuring Non-Custody API for mass distribution, MPC Custody for secure storage, AI Robo-Advisor, and Security Token (ST) wallet",
    url: "https://walits.com",
    logo: "https://walits.com/logo.png",
    sameAs: [
      "https://github.com/walits",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-10-3298-5823",
      contactType: "customer service",
      email: "walits.co@gmail.com",
      availableLanguage: ["Korean", "English"]
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressLocality: "Seoul"
    },
    offers: [
      {
        "@type": "Offer",
        name: language === 'ko' ? "Non-Custody 지갑" : "Non-Custody Wallet",
        description: language === 'ko' ? "API 기반 대량 지급 솔루션" : "API-based mass distribution solution",
        price: "77000",
        priceCurrency: "KRW",
        category: language === 'ko' ? "기업용 코인 지갑" : "Enterprise Crypto Wallet"
      },
      {
        "@type": "Offer",
        name: language === 'ko' ? "Custody 지갑" : "Custody Wallet",
        description: language === 'ko' ? "MPC 2-of-3 안전 보관" : "MPC 2-of-3 secure storage",
        price: "550000",
        priceCurrency: "KRW",
        category: language === 'ko' ? "가상자산 보관" : "Crypto Asset Custody"
      },
      {
        "@type": "Offer",
        name: language === 'ko' ? "AI 로보어드바이저" : "AI Robo-Advisor",
        description: language === 'ko' ? "AI 기반 포트폴리오 관리" : "AI-powered portfolio management",
        price: "0",
        priceCurrency: "KRW",
        category: language === 'ko' ? "암호화폐 지갑" : "Cryptocurrency Wallet"
      },
      {
        "@type": "Offer",
        name: language === 'ko' ? "토큰증권 지갑" : "ST Wallet",
        description: language === 'ko' ? "증권형 토큰 거래 및 관리" : "Security token trading and management",
        price: "0",
        priceCurrency: "KRW",
        category: language === 'ko' ? "토큰증권" : "Security Token"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: language === 'ko' ? [
      {
        "@type": "Question",
        name: "가상자산 지갑이란 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "가상자산 지갑은 비트코인, 이더리움 등 암호화폐를 보관하고 관리하는 디지털 지갑입니다. Walits는 기업용 Non-Custody 지갑과 Custody 지갑을 제공하여 안전한 자산 관리를 지원합니다."
        }
      },
      {
        "@type": "Question",
        name: "Non-Custody 지갑과 Custody 지갑의 차이는 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-Custody 지갑은 계정별로 독립된 지갑을 제공하여 API로 대량 지급이 가능하며, 집금 없이 운영됩니다. Custody 지갑은 고객 자산을 MPC 2-of-3 방식으로 안전하게 집금하여 보관하며, 승인 정책 기반으로 출금을 관리합니다."
        }
      },
      {
        "@type": "Question",
        name: "MPC 2-of-3란 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MPC(Multi-Party Computation) 2-of-3는 프라이빗 키를 3개의 조각으로 나누어 분산 보관하고, 거래 시 2개의 조각만으로 서명이 가능한 최고 수준의 보안 방식입니다. 단일 실패점이 없어 해킹이나 내부자 사고를 원천 차단합니다."
        }
      },
      {
        "@type": "Question",
        name: "토큰증권(ST) 지갑은 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "토큰증권(Security Token) 지갑은 규제를 준수하는 증권형 토큰을 안전하게 거래하고 관리할 수 있는 전문 지갑입니다. 부동산, 주식 등 실물 자산을 토큰화한 증권을 보관하고, 배당금을 자동으로 수령할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        name: "기업용 코인 지갑은 왜 필요한가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "게임 리워드 지급, NFT 에어드랍, 직원 인센티브 배포 등 기업에서 대량의 토큰을 안전하게 관리하고 배포해야 할 때 필요합니다. Walits는 API로 간편하게 대량 지급이 가능하며, 기관급 보안으로 자산을 보호합니다."
        }
      },
      {
        "@type": "Question",
        name: "에어드랍은 어떻게 진행하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Walits Non-Custody API를 사용하면 단 몇 줄의 코드로 수백~수천 명에게 동시에 토큰을 에어드랍할 수 있습니다. Virtual Balance 시스템으로 가스비 없이 즉시 지급이 가능합니다."
        }
      }
    ] : [
      {
        "@type": "Question",
        name: "What is a crypto wallet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A crypto wallet is a digital wallet for storing and managing cryptocurrencies like Bitcoin and Ethereum. Walits provides enterprise-grade Non-Custody and Custody wallets for secure asset management."
        }
      },
      {
        "@type": "Question",
        name: "What's the difference between Non-Custody and Custody wallets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non-Custody wallets provide independent wallets per account for API-based mass distribution without pooling. Custody wallets securely pool customer assets using MPC 2-of-3 and manage withdrawals through approval policies."
        }
      },
      {
        "@type": "Question",
        name: "What is MPC 2-of-3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MPC (Multi-Party Computation) 2-of-3 is the highest level of security where the private key is split into 3 shares, and only 2 shares are needed for signing. It eliminates single points of failure and prevents hacking or insider threats."
        }
      },
      {
        "@type": "Question",
        name: "What is a Security Token (ST) wallet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Security Token wallet is a specialized wallet for safely trading and managing regulatory-compliant security tokens. It can store tokenized real-world assets like real estate and stocks, and automatically receive dividends."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className={`text-3xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>Walits</span>

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
                AI, ST Wallet
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#solutions" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.solutions}
            </a>
            <Link href="/blog" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.blog}
            </Link>
            <div className="relative group">
              <button className={`text-lg font-semibold hover:underline transition-colors flex items-center gap-1 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                API Docs
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                  <a href="/docs/custody/index.html" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Custody Wallet API</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {language === 'ko' ? 'MPC 기반 커스터디 지갑' : 'MPC-based custody wallet'}
                    </div>
                  </a>
                  <a href="/docs/non-custody/index.html" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="font-semibold text-gray-900 dark:text-white">Non-Custody Wallet API</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {language === 'ko' ? 'API 기반 대량 지급' : 'API-based mass distribution'}
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
                    <div className="block px-4 py-3 opacity-60 cursor-not-allowed">
                      <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        {language === 'ko' ? 'AI 로보어드바이저' : 'AI Robo-Advisor'}
                        <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                          {language === 'ko' ? '준비중' : 'Soon'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? 'AI 기반 포트폴리오 관리' : 'AI-powered portfolio management'}
                      </div>
                    </div>
                    <div className="block px-4 py-3 opacity-60 cursor-not-allowed">
                      <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        {language === 'ko' ? '토큰증권 지갑' : 'ST Token Wallet'}
                        <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                          {language === 'ko' ? '준비중' : 'Soon'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? '증권형 토큰 거래 및 관리' : 'Security token trading & management'}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <a href={`${NON_CUSTODY_URL}/login`} className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? 'Non-Custody 지갑' : 'Non-Custody Wallet'}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? 'API 기반 대량 지급' : 'API-based mass distribution'}
                      </div>
                    </a>
                    <a href={`${CUSTODY_URL}/login`} className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
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
            <Link
              href="/inquiry"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              {language === 'ko' ? '시작하기' : 'Get Started'}
            </Link>
            <a
              href="#solutions"
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

      {/* Personal Wallets Section */}
      <section id="personal" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {language === 'ko' ? '개인용 지갑' : 'Personal Wallets'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.aiVsSto.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Card */}
            <div className="rounded-3xl p-10 bg-white dark:bg-gray-800 shadow-xl border border-gray-900 dark:border-gray-600 relative">
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-900 dark:bg-gray-600">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {copy.aiVsSto.aiTitle}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {language === 'ko' ? 'AI 기반 투자 · MPC 2-of-2' : 'AI-powered investing · MPC 2-of-2'}
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                {copy.aiVsSto.aiDesc}
              </p>
              <ul className="space-y-3 text-base text-gray-800 dark:text-gray-300">
                {copy.aiVsSto.aiFeatures.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium px-4 py-2 rounded-full bg-white dark:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white">
                {language === 'ko' ? '개인 투자자 · 로보어드바이저' : 'Retail Investors · Robo-Advisor'}
              </div>
            </div>

            {/* STO Card */}
            <div className="rounded-3xl p-10 bg-white dark:bg-gray-800 shadow-xl border border-gray-900 dark:border-gray-600 relative">
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
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

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1z"/>
              </svg>
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Powered by Rust</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {copy.techStack.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.techStack.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              {copy.techStack.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {copy.techStack.features.map((feature, i) => (
              <div key={i} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-5">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Promotion Banner */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  {language === 'ko' ? '런칭 프로모션' : 'Launch Promotion'}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {language === 'ko' ? '첫 한달 무료!' : 'First Month Free!'}
                </h3>
                <p className="text-white/90 text-lg">
                  {language === 'ko'
                    ? '지금 시작하시면 모든 플랜 첫 한달 무료로 이용하실 수 있습니다'
                    : 'Sign up now and get your first month free on any plan'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {copy.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* AI Robo-Advisor Plan */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {copy.pricing.plans.ai.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {copy.pricing.plans.ai.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{copy.pricing.monthly}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {copy.pricing.plans.ai.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-900 dark:text-white mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed"
              >
                {language === 'ko' ? '준비중' : 'Coming Soon'}
              </button>
            </div>

            {/* STO Token Plan */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
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
              <button
                disabled
                className="block w-full text-center py-3 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed"
              >
                {language === 'ko' ? '준비중' : 'Coming Soon'}
              </button>
            </div>

            {/* Non-Custody Plan */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {language === 'ko' ? '2026년 2월 출시' : 'Launch Feb 2026'}
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {copy.pricing.plans.nonCustody.name}
                </h3>
                <div className="flex flex-col items-center">
                  <span className="text-lg text-gray-400 line-through">
                    {copy.pricing.plans.nonCustody.originalPrice}/{copy.pricing.monthly}
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-red-600">
                      {copy.pricing.plans.nonCustody.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">/{copy.pricing.monthly}</span>
                  </div>
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
              <Link
                href="/inquiry"
                className="block w-full text-center py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 font-medium transition-colors"
              >
                {copy.pricing.getStarted}
              </Link>
            </div>

            {/* Custody Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 rounded-xl p-8 border-2 border-gray-700 dark:border-gray-400 hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-2 whitespace-nowrap">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                  {language === 'ko' ? '2026년 4월 출시' : 'Launch Apr 2026'}
                </span>
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                  {language === 'ko' ? '프리미엄' : 'Premium'}
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-2">
                  {copy.pricing.plans.custody.name}
                </h3>
                <div className="flex flex-col items-center">
                  <span className="text-lg text-gray-500 line-through">
                    {copy.pricing.plans.custody.originalPrice}/{copy.pricing.monthly}
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-yellow-500 dark:text-yellow-600">
                      {copy.pricing.plans.custody.price}
                    </span>
                    <span className="text-gray-400 dark:text-gray-600">/{copy.pricing.monthly}</span>
                  </div>
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
              <Link
                href="/inquiry"
                className="block w-full text-center py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-semibold transition-colors shadow-md"
              >
                {copy.pricing.getStarted}
              </Link>
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
                <span className="font-bold text-lg text-gray-900 dark:text-white">Walits</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                차세대 블록체인 지갑 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">{copy.footer.services}</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#personal" className="hover:underline">{copy.footer.personal}</a></li>
                <li><a href="#solutions" className="hover:underline">{copy.footer.enterprise}</a></li>
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
