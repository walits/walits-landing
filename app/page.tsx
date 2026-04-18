'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);

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
        title: <>세상에서 가장 쉽고<br />안전한 모두의 지갑</>,
        subtitle: '개인,기관,기업 모두를 위한 지갑. 글로벌 토큰화의 초석, 신뢰비용 제로의 세상을 위하여. 코인 자산을 안전하게 관리하며 MPC 기술 기반 개인 투자 지갑으로 RWA 자산에 투자하세요. 스테이블코인 전문 지갑을 통해 혁신적인 송금,지불의 매력을 느껴보세요',
      },
      nav: {
        solutions: '솔루션',
        blog: '블로그',
        ir: 'IR',
        pricing: '가격',
        contact: '문의',
        login: '로그인',
      },
      enterpriseWallet: {
        title: '기업용 지갑',
        subtitle: 'API 하나로 결제·운용·정산·보상을 자동화하는 기업 전용 블록체인 지갑',
        desc: 'walits 자체 MPC 인프라 위에서, 기업의 가상자산 자금을 자동으로 운용·정산·지급합니다. Idle Time Detector로 유휴 자금을 수익화하고, AI Agent로 B2B 결제와 급여를 자동화합니다.',
        features: [
          '멀티체인 자산 관리: USDC, USDT, ETH, SOL 등 주요 자산',
          'Virtual Balance: 가스비 없이 즉시 내부 포인트·보상 지급',
          'API 기반: API 키 하나로 즉시 연동, 무제한 트랜잭션',
          '실시간 입금 감지: 블록체인 입금 즉시 추적 (1 confirmation)',
          'Idle Time Detector: 유휴 자금 자동 예치 → Aave / Morpho / Ondo',
          'AI Agent: 자연어 명령으로 B2B 결제·급여·구독 자동 실행',
          '자체 MPC 인프라: CGGMP24 + FROST, 2-of-3 키 분산 보관',
          '기업 재무 대시보드: 자산 현황·수익·거래 내역 실시간 조회',
          '고급 리포팅: 상세 거래 분석 및 전담 계정 매니저',
        ],
        useCases: 'B2B 결제 자동화 | 글로벌 급여 | 게임 보상·에어드랍 | 구독 자동 결제 | ICO / 토큰 발행',
      },
      personalWallet: {
        title: '개인 스테이블 코인 지갑',
        subtitle: 'AI, 투자, Chat, RWA - 하나의 지갑으로 모든 것을',
        desc: '채팅하듯 송금하고, AI가 자동으로 투자하고, 실물 자산 토큰에 투자하세요. 일상 결제부터 전문 투자까지 하나의 앱에서 모두 해결합니다.',
        features: [
          '채팅 송금: 카카오톡처럼 메시지 보내듯 암호화폐 송금',
          'AI 자동 결제: 구독료, 청구서 자동 결제 및 최적 경로 선택',
          'AI 포트폴리오 관리: 자동 리밸런싱으로 최적 투자 비율 유지',
          'RWA 투자: 부동산, 주식 등 실물 자산 토큰화 자산 투자',
          '배당 수령: 토큰증권 배당금 자동 분배',
          '기관급 보안: MPC 기술로 안전한 자산 보관',
          '스마트 분석: AI 기반 투자 추천 및 리스크 관리',
          '실시간 알림: 송금, 입금, 투자 수익 즉시 알림',
          '다중 토큰: USDT, ETH, SOL 등 주요 암호화폐 모두 지원',
        ],
        useCases: '채팅으로 송금 | 구독료 자동 결제 | 소액 결제 | 그룹 정산 | 부동산 토큰 투자 | AI 포트폴리오 관리 | 배당 수익 관리 | 디지털 증권 보관',
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
          {
            title: '다중 알고리즘 지원',
            desc: 'ECDSA, EdDSA 서명 알고리즘 지원. 이더리움부터 솔라나까지 모든 주요 체인 호환',
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
            desc: '실시간 블록 폴링으로 입금 즉시 감지. 1 confirmation부터 빠르게 탐지하여 사용자 경험 향상',
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
            title: '이중지불 방지',
            desc: 'Redis 분산 락과 트랜잭션 락으로 이중지불 원천 차단. 멱등성 보장으로 동시성 이슈 완벽 방지',
          },
        ],
      },
      pricing: {
        title: '가격 안내',
        subtitle: '비즈니스 규모에 맞는 최적의 플랜을 선택하세요',
        monthly: '월',
        getStarted: '시작하기',
        plans: {
          personal: {
            name: '개인 스테이블 코인 지갑',
            price: '무료',
            features: [
              '채팅 송금',
              'AI 자동 결제',
              'AI 포트폴리오 관리',
              'RWA 투자',
              '배당금 자동 수령',
              '실시간 알림',
              '다중 토큰 지원',
            ],
          },
          enterprise: {
            name: '기업용 지갑',
            price: '₩200,000',
            features: [
              '멀티체인 기업 재무 관리',
              'Virtual Balance 즉시 지급',
              'API 기반 무제한 트랜잭션',
              '실시간 블록체인 입금 감지',
              'Idle Time Detector 자동 수익화',
              'AI Agent B2B 결제·급여 자동화',
              '자체 MPC 인프라 (2-of-3)',
              '기업 재무 대시보드',
              '전담 계정 매니저 + 우선 기술 지원',
            ],
          },
        },
      },
      footer: {
        services: '서비스',
        personal: '개인 스테이블 코인 지갑',
        enterprise: '기업 고객',
        contact: '문의',
        email: '이메일: walits.co@gmail.com',
        rights: '© 2026 Walits. All rights reserved.',
      },
    },
    en: {
      hero: {
        title: <>The Easiest and<br />Most Secure Enterprise Wallet</>,
        subtitle: 'Foundation of global tokenization, for a world of zero trust costs. Securely manage your crypto assets and invest in RWA tokens with our MPC-based personal investment wallet. Experience the innovative appeal of transfers and payments through our stablecoin-specialized wallet.',
      },
      nav: {
        solutions: 'Solutions',
        blog: 'Blog',
        ir: 'IR',
        pricing: 'Pricing',
        contact: 'Contact',
        login: 'Login',
      },
      enterpriseWallet: {
        title: 'Enterprise Wallet',
        subtitle: 'Automate payments, yield, settlements, and rewards with a single API',
        desc: 'Built on walits self-hosted MPC infrastructure. Automatically earn yield on idle assets, automate B2B payments and payroll with AI Agent, and manage corporate treasury in real time.',
        features: [
          'Multi-chain asset management: USDC, USDT, ETH, SOL and more',
          'Virtual Balance: Instant internal points/rewards with zero gas fees',
          'API-based: Single API key for instant integration, unlimited transactions',
          'Real-time Deposit Detection: Instant blockchain tracking (1 confirmation)',
          'Idle Time Detector: Auto-deposit idle assets → Aave / Morpho / Ondo',
          'AI Agent: Natural language commands for B2B payments, payroll, subscriptions',
          'Self-hosted MPC: CGGMP24 + FROST, 2-of-3 distributed key management',
          'Treasury Dashboard: Real-time asset status, yield, and transaction history',
          'Advanced Reporting: Detailed analytics + dedicated account manager',
        ],
        useCases: 'B2B Payment Automation | Global Payroll | Game Rewards & Airdrops | Auto Subscriptions | ICO / Token Issuance',
      },
      personalWallet: {
        title: 'Personal Stablecoin Wallet',
        subtitle: 'AI, Investment, Chat, RWA - Everything in One Wallet',
        desc: 'Send crypto like chatting, let AI invest automatically, and invest in real-world asset tokens. From daily payments to professional investing, all in one app.',
        features: [
          'Chat Transfer: Send crypto like messaging on KakaoTalk',
          'AI Auto Payment: Auto-pay subscriptions & bills with optimal routing',
          'AI Portfolio Management: Auto-rebalancing for optimal investment ratios',
          'RWA Investment: Invest in tokenized real-world assets like real estate & stocks',
          'Dividend Receipt: Automatic distribution of security token dividends',
          'Institution-Grade Security: Safe asset storage with MPC technology',
          'Smart Analysis: AI-powered investment recommendations & risk management',
          'Real-time Alerts: Instant notifications for transfers, deposits, investment returns',
          'Multi-Token: All major cryptocurrencies including USDT, ETH, SOL',
        ],
        useCases: 'Chat Transfers | Auto Subscriptions | Micropayments | Group Settlements | Real Estate Token Investment | AI Portfolio Management | Dividend Income Management | Digital Securities Storage',
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
          {
            title: 'Multi-Algorithm Support',
            desc: 'Supports ECDSA and EdDSA signature algorithms. Compatible with all major chains from Ethereum to Solana',
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
            desc: 'Real-time block polling for instant deposit detection. Fast detection from 1 confirmation for enhanced user experience',
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
            title: 'Double-Spend Prevention',
            desc: 'Prevents double-spending with Redis distributed locks and transaction locks. Idempotency guarantee completely eliminates concurrency issues',
          },
        ],
      },
      pricing: {
        title: 'Pricing Plans',
        subtitle: 'Choose the perfect plan for your business scale',
        monthly: 'mo',
        getStarted: 'Get Started',
        plans: {
          personal: {
            name: 'Personal Stablecoin Wallet',
            price: 'Free',
            features: [
              'Chat transfer',
              'AI auto payment',
              'AI portfolio management',
              'RWA investment',
              'Automatic dividend receipt',
              'Real-time notifications',
              'Multi-token support',
            ],
          },
          enterprise: {
            name: 'Enterprise Wallet',
            price: '$149',
            features: [
              'Multi-chain corporate treasury',
              'Virtual Balance instant distribution',
              'API-based unlimited transactions',
              'Real-time blockchain deposit detection',
              'Idle Time Detector auto yield',
              'AI Agent for payments & payroll',
              'Self-hosted MPC (2-of-3)',
              'Treasury dashboard',
              'Dedicated account manager + priority support',
            ],
          },
        },
      },
      footer: {
        services: 'Services',
        personal: 'Personal Stablecoin Wallet',
        enterprise: 'Enterprise',
        contact: 'Contact',
        email: 'Email: walits.co@gmail.com',
        rights: '© 2026 Walits. All rights reserved.',
      },
    },
  }[language];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Walits",
    description: language === 'ko'
      ? "기업용 가상자산 지갑, 토큰증권 거래, 코인지갑 플랫폼. Virtual Balance 기반 대량 지급부터 실제 블록체인 자산 관리까지. 개인 스테이블 코인 지갑으로 개인 투자 지원"
      : "Enterprise crypto wallet platform featuring Virtual Balance mass distribution and real blockchain asset management. Personal Stablecoin Wallet for personal investment",
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
        name: language === 'ko' ? "기업용 지갑" : "Enterprise Wallet",
        description: language === 'ko' ? "API 기반 멀티체인 기업 자산 관리. Virtual Balance, 실시간 입금 감지, Idle Time Detector, AI Agent 결제 자동화 포함" : "API-based multi-chain enterprise asset management. Includes Virtual Balance, real-time deposit detection, Idle Time Detector, and AI Agent payment automation",
        price: "200000",
        priceCurrency: "KRW",
        category: language === 'ko' ? "기업용 코인 지갑" : "Enterprise Crypto Wallet"
      },
      {
        "@type": "Offer",
        name: language === 'ko' ? "개인 스테이블 코인 지갑" : "Personal Stablecoin Wallet",
        description: language === 'ko' ? "AI · 투자 · Chat · RWA - 하나의 지갑으로 모든 것을" : "AI, Investment, Chat, RWA - Everything in One Wallet",
        price: "0",
        priceCurrency: "KRW",
        category: language === 'ko' ? "개인용 암호화폐 지갑" : "Personal Cryptocurrency Wallet"
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
          text: "가상자산 지갑은 비트코인, 이더리움 등 암호화폐를 보관하고 관리하는 디지털 지갑입니다. Walits는 기업용 지갑과 개인 스테이블 코인 지갑을 제공하여 안전한 자산 관리를 지원합니다."
        }
      },
      {
        "@type": "Question",
        name: "기업용 지갑에는 어떤 기능이 포함되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "walits 기업용 지갑은 Virtual Balance 즉시 지급, 실시간 블록체인 입금 감지, Idle Time Detector(유휴 자금 자동 수익화), AI Agent B2B 결제·급여 자동화, 자체 MPC 인프라(2-of-3), 기업 재무 대시보드, 전담 계정 매니저 등 모든 기능을 단일 플랜으로 제공합니다."
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
        name: "What features does the Enterprise Wallet include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The walits Enterprise Wallet includes Virtual Balance instant distribution, real-time blockchain deposit detection, Idle Time Detector (auto yield on idle assets), AI Agent for B2B payment and payroll automation, self-hosted MPC infrastructure (2-of-3), corporate treasury dashboard, and a dedicated account manager — all in a single unified plan."
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
      {/* Under Construction Ribbon */}
      <div className="fixed top-0 right-0 w-40 h-40 z-[9999] overflow-hidden pointer-events-none">
        <div
          className="absolute top-8 -right-10 w-48 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 font-bold text-xs py-2.5 text-center shadow-2xl transform rotate-45"
        >
          <div className="tracking-wide">
            {language === 'ko' ? '🚧 개발중 🚧' : '🚧 BETA 🚧'}
          </div>
        </div>
      </div>

      {/* Notice Modal */}
      {noticeOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-gray-900/80 backdrop-blur-md">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-lg w-full mx-4 p-10 relative border border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setNoticeOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all hover:rotate-90 duration-300"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg p-4 border-2 border-amber-400 dark:border-amber-500">
                  <Image
                    src="/logo.png"
                    alt="Walits Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                  {language === 'ko' ? '서비스 개발 중' : 'Under Development'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-base">
                  {language === 'ko'
                    ? '현재 Walits 서비스를 개발 중입니다. 빠른 시일 내에 혁신적인 서비스를 제공해 드리기 위해 최선의 노력을 다하겠습니다.'
                    : 'Walits is currently under development. We are committed to providing you with innovative services as soon as possible.'}
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    {language === 'ko' ? '문의사항' : 'Contact'}
                  </p>
                  <a
                    href="mailto:walits.co@gmail.com"
                    className="text-blue-600 dark:text-blue-400 font-semibold text-lg hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    walits.co@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => setNoticeOpen(false)}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                {language === 'ko' ? '확인' : 'OK'}
              </button>
            </div>
          </div>
        </div>
      )}

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
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Walits Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className={`text-3xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>Walits</span>
            </div>

            {/* Enterprise Wallet */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-normal ${scrolled ? 'text-gray-500' : 'text-white/50'}`}>
                {language === 'ko' ? '기업용' : 'Enterprise'}
              </span>
              <span className={`text-lg font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                {language === 'ko' ? '기업용 지갑' : 'Enterprise Wallet'}
              </span>
            </div>

            {/* Personal Wallet */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-normal ${scrolled ? 'text-gray-500' : 'text-white/50'}`}>
                {language === 'ko' ? '개인용' : 'Personal'}
              </span>
              <span className={`text-lg font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                {language === 'ko' ? '개인 스테이블 코인 지갑' : 'Personal Stablecoin Wallet'}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#solutions" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.solutions}
            </a>
            <Link href="/blog/" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.blog}
            </Link>
            <Link href="/ir" className={`text-lg font-semibold hover:underline transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {copy.nav.ir}
            </Link>
            <div className="relative group">
              <button className={`text-lg font-semibold hover:underline transition-colors flex items-center gap-1 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                API Docs
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-auto">
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
                        {language === 'ko' ? '개인 스테이블 코인 지갑' : 'Personal Stablecoin Wallet'}
                        <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                          {language === 'ko' ? '준비중' : 'Soon'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? 'AI · 투자 · Chat · RWA' : 'AI · Investment · Chat · RWA'}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <a href={`${NON_CUSTODY_URL}/login`} className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? '기업용 지갑' : 'Enterprise Wallet'}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {language === 'ko' ? 'Virtual Balance + 블록체인 자산 관리' : 'Virtual Balance + Blockchain asset management'}
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

      {/* Wallet Solutions Section */}
      <section id="solutions" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {language === 'ko' ? 'Walits 지갑 솔루션' : 'Walits Wallet Solutions'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'ko'
                ? '기업과 개인 모두를 위한 블록체인 지갑 — 용도에 맞게 선택하세요'
                : 'Blockchain wallets for both enterprises and individuals — choose what fits your needs'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Left — Enterprise Wallet */}
            <div className="rounded-3xl p-8 bg-slate-900 text-white shadow-xl flex flex-col relative">
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-600 shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-0.5">
                    {language === 'ko' ? '기업용' : 'Enterprise'}
                  </div>
                  <h3 className="text-2xl font-bold">{copy.enterpriseWallet.title}</h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {copy.enterpriseWallet.desc}
              </p>
              <div className="space-y-2 mb-6 flex-1">
                {copy.enterpriseWallet.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="text-blue-400 font-bold mt-0.5 shrink-0">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-400 mb-5 leading-relaxed">
                {copy.enterpriseWallet.useCases}
              </div>
              <button
                disabled
                className="block w-full text-center py-3 bg-slate-700 text-slate-400 font-semibold rounded-xl cursor-not-allowed"
              >
                {language === 'ko' ? '준비중' : 'Coming Soon'}
              </button>
            </div>

            {/* Right — Personal Wallet */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-2 border-blue-200 dark:border-gray-600 shadow-xl flex flex-col relative">
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-0.5">
                    {language === 'ko' ? '개인용' : 'Personal'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{copy.personalWallet.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {copy.personalWallet.desc}
              </p>
              <div className="space-y-2 mb-6 flex-1">
                {copy.personalWallet.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-purple-500 font-bold mt-0.5 shrink-0">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  language === 'ko' ? '채팅 송금' : 'Chat Transfer',
                  language === 'ko' ? 'AI 자동 결제' : 'AI Auto Payment',
                  language === 'ko' ? 'AI 포트폴리오' : 'AI Portfolio',
                  language === 'ko' ? 'RWA 투자' : 'RWA Investment',
                  'ENPL',
                  language === 'ko' ? 'Idle 수익화' : 'Idle Yield',
                ].map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white dark:bg-gray-700 border border-blue-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                disabled
                className="block w-full text-center py-3 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 font-semibold rounded-xl cursor-not-allowed"
              >
                {language === 'ko' ? '준비중' : 'Coming Soon'}
              </button>
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
              <img src="/mpc.png" alt="MPC Architecture" className="w-full max-w-md rounded-xl shadow-lg" />
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {copy.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {copy.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Personal Wallet Plan */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {copy.pricing.plans.personal.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {copy.pricing.plans.personal.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{copy.pricing.monthly}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {copy.pricing.plans.personal.features.map((feature, i) => (
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

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-8 border-2 border-slate-700 hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {language === 'ko' ? '런칭 준비중' : 'Coming Soon'}
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {copy.pricing.plans.enterprise.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-blue-300">
                    {copy.pricing.plans.enterprise.price}
                  </span>
                  <span className="text-gray-400">/{copy.pricing.monthly}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {copy.pricing.plans.enterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="text-blue-400 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/inquiry"
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors shadow-md"
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
