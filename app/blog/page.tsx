'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      title: 'Walits 블로그',
      subtitle: '블록체인 지갑 솔루션에 대한 인사이트와 사용 사례',
      backToHome: '← 홈으로',
      readMore: '자세히 보기 →',
      posts: [
        {
          id: 'oneinch-deep-dive',
          category: 'DeFi 시리즈 3',
          categoryColor: 'bg-orange-100 text-orange-800',
          title: 'DeFi 시리즈 3 — 1inch: DEX 애그리게이터 완전 튜토리얼',
          excerpt: '100개 이상의 DEX를 실시간 스캔해 최적 경로를 찾는 1inch. Pathfinder 라우팅 알고리즘, 스플릿 라우팅, Fusion Mode 가스리스 스왑, Limit Order까지. 1inch의 모든 것을 튜토리얼 형식으로 완전 해부한다.',
          date: '2026년 3월 24일',
          readTime: '20분',
          image: '/blog/1inch.jpg',
        },
        {
          id: 'uniswap-deep-dive',
          category: 'DeFi 시리즈 2',
          categoryColor: 'bg-pink-100 text-pink-800',
          title: 'DeFi 시리즈 2 — Uniswap: AMM과 유동성 혁명 완전 해부',
          excerpt: 'x×y=k 공식 하나로 $2.4조 거래소를 만든 방법. v1 탄생부터 v2 완성, v3 집중 유동성 혁명, v4 훅 아키텍처까지. 비영구 손실·수수료 구조·MEV 방어까지 완전 해부한다.',
          date: '2026년 3월 24일',
          readTime: '22분',
          image: '/blog/uniswap.jpg',
        },
        {
          id: 'aave-deep-dive',
          category: 'DeFi 시리즈 1',
          categoryColor: 'bg-purple-100 text-purple-800',
          title: 'DeFi 시리즈 1 — AAVE: DeFi 최대 렌딩 프로토콜 완전 해부',
          excerpt: 'Aave에 USDT를 예치하면 온체인에서 정확히 무슨 일이 일어나나. aToken·과담보·플래시론·청산봇·GHO 스테이블코인까지. Aave v3의 모든 기능을 온체인 구조와 함께 완전 해부한다.',
          date: '2026년 3월 24일',
          readTime: '20분',
          image: '/blog/aave.jpg',
        },
        {
          id: 'mev-ethereum-deep-dive',
          category: 'DEEP DIVE · 이더리움',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'MEV 완전 해부 그리고 2026년 3월12일 $50M 해킹 사례',
          excerpt: '자본 없이 수천만 달러 MEV를 추출하는 구조. 플래시론이 자본 문제를 해결하고, 청산·차익거래가 기회를 만들고, Flashbots가 private하게 실행한다. 이더리움 MEV 핵심 엔진을 완전 해부한다.',
          date: '2026년 3월 23일',
          readTime: '25분',
          image: '/blog/mev.webp',
        },
        {
          id: 'stablecoin-payment-vs-traditional',
          category: '결제 & 핀테크',
          categoryColor: 'bg-cyan-100 text-cyan-800',
          title: '스테이블코인 결제가 기존 결제망보다 단계를 줄이는 방법',
          excerpt: '카드 결제는 승인과 정산이 분리되어 며칠이 걸립니다. 스테이블코인은 온체인 전송으로 결제+정산을 동시에 처리합니다. 8단계 vs 4단계, 실무 관점에서 비교 분석합니다.',
          date: '2026년 2월 11일',
          readTime: '14분',
          image: '/blog/payment.jpg',
        },
        {
          id: 'blackrock-buidl-tokenized-fund',
          category: 'RWA & 기관 투자',
          categoryColor: 'bg-emerald-100 text-emerald-800',
          title: 'BlackRock BUIDL: 전통 금융이 블록체인을 만났을 때',
          excerpt: '세계 최대 자산운용사 BlackRock의 $1.5B 토큰화 펀드 BUIDL. 매일 배당, T+0 환매, DeFi 연계까지. 전통 금융과 블록체인 융합의 완성형을 분석합니다.',
          date: '2026년 2월 11일',
          readTime: '12분',
          image: '/blog/blackrock.jpg',
        },
        {
          id: 'tron-usdt-hack-scenario',
          category: '보안 & 리스크',
          categoryColor: 'bg-red-100 text-red-800',
          title: '스테이블 코인 (트론 USDT) 해킹시 발생할 시나리오',
          excerpt: '600억 달러 이상의 TRC-20 USDT가 위험에 처한다면? 트론 네트워크 해킹 시나리오와 글로벌 금융 시스템 충격파, 그리고 탈중앙화의 기술적 한계를 분석합니다.',
          date: '2026년 2월 11일',
          readTime: '15분',
          image: '/blog/usdt.jpg',
        },
        {
          id: 'blockchain-comparison-guide',
          category: '기술 가이드',
          categoryColor: 'bg-gray-100 text-gray-800',
          title: '6대 블록체인 기술 비교 완벽 가이드',
          excerpt: 'Bitcoin, Ethereum, Base, XRP, Tron, Solana. Layer 2까지 포함한 6대 주요 블록체인의 합의 메커니즘, 트랜잭션 구조, 수수료 체계를 완벽 비교. 사용 사례별 추천 가이드 포함.',
          date: '2026년 1월 18일',
          readTime: '18분',
          image: '/blog/BLOCKCHAIN_COMPARISON_TUTORIAL.jpg',
        },
        {
          id: 'enterprise-crypto-wallet-guide',
          category: '기업용 지갑',
          categoryColor: 'bg-purple-100 text-purple-800',
          title: '2026년 기업용 암호화폐 지갑 선택 완벽 가이드',
          excerpt: 'Non-Custody vs Custody 비교, MPC 보안, API 통합, ICO 지원까지. 게임사, 거래소, 토큰 발행사를 위한 완벽 가이드.',
          date: '2026년 1월 11일',
          readTime: '8분',
          image: '/blog/enterprise-wallet.jpg',
        },
        {
          id: 'non-custody-vs-custody-wallet',
          category: '디지털 자산',
          categoryColor: 'bg-red-100 text-red-800',
          title: '범죄 압수 코인을 보관하기 위한 국가기관용 커스터디지갑',
          excerpt: '강남서 22BTC 유출, 국세청 69억 탈취. Walits 리서치팀이 분석한 한국 압수 코인 보안의 3가지 구조적 결함과 MPC·HSM·SSS 기반 실질적 처방.',
          date: '2026년 3월 10일',
          readTime: '12분',
          image: '/blog/wallet-comparison.jpg',
        },
        {
          id: 'stablecoin-rwa-tokenization-2026',
          category: '금융 분석',
          categoryColor: 'bg-orange-100 text-orange-800',
          title: '2026년 미국 정부와 연준 & 스테이블코인과 RWA 토크나이제이션 전망',
          excerpt: '37조 달러 부채 위기 속 연준-정부 갈등, GENIUS Act 시행, 그리고 모든 자산이 토큰화되는 미래. 새로운 금융 질서의 탄생을 분석합니다.',
          date: '2026년 1월 15일',
          readTime: '25분',
          image: '/blog/tokenize.jpg',
        },
        {
          id: 'mpc-wallet-security-guide',
          category: '보안',
          categoryColor: 'bg-red-100 text-red-800',
          title: 'MPC 지갑 보안 완벽 가이드 - 2-of-3 다중 서명',
          excerpt: 'MPC 2-of-3로 단일 실패점 제거. ECDSA와 EdDSA 알고리즘으로 이더리움부터 솔라나까지 안전 보관.',
          date: '2026년 1월 11일',
          readTime: '9분',
          image: '/blog/mpc-security.jpg',
        },
        {
          id: 'stablecoin-wallet-erc4337',
          category: 'ERC-4337 · 계정 추상화',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: '스테이블 코인을 위한 합리적 지갑 서비스',
          excerpt: 'ERC-4337 계정 추상화와 Paymaster로 ETH 없이 USDC만으로 모든 거래가 가능한 지갑. 주식 앱이 아닌 진짜 지갑의 기술적 혁신을 해설합니다.',
          date: '2026년 3월 9일',
          readTime: '8분',
          image: '/blog/messenger-transfer.jpg',
        },
        {
          id: 'ai-auto-payment-subscription',
          category: 'AI & 메신저',
          categoryColor: 'bg-pink-100 text-pink-800',
          title: 'AI 자동 결제로 구독료 관리하기',
          excerpt: 'Netflix, Spotify, AWS 등 구독료를 AI가 자동 결제. 환율 최적화, 지출 분석까지.',
          date: '2026년 1월 11일',
          readTime: '6분',
          image: '/blog/ai-payment.jpg',
        },
        {
          id: 'security-token-sto-guide',
          category: 'STO & RWA',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'STO(증권형 토큰)과 RWA 완벽 가이드',
          excerpt: '발행 프로세스부터 기술 구조까지. K-POP 저작권, 예측 시장 등 창의적 RWA 사례 포함.',
          date: '2026년 2월 13일',
          readTime: '18분',
          image: '/blog/sto-guide.jpg',
        },
        {
          id: 'ai-portfolio-management-rwa',
          category: 'STO & 증권',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'AI로 실물자산(RWA) 포트폴리오 관리하는 법',
          excerpt: 'AI 자동 리밸런싱, 리스크 관리, 수익 재투자. 감정 없는 최적 투자.',
          date: '2026년 1월 11일',
          readTime: '8분',
          image: '/blog/ai-portfolio.jpg',
        },
        {
          id: 'automated-reward-distribution',
          category: 'Non-Custody',
          categoryColor: 'bg-green-100 text-green-800',
          title: '자동 보상 지급 시스템, API 하나로 끝내기',
          excerpt: '게임 이벤트, 출석 체크, 커뮤니티 활동, 친구 초대 등 모든 보상 시나리오를 단 하나의 API로 해결. 가스비 0원, 즉시 반영, 완벽한 추적.',
          date: '2024년 12월 15일',
          readTime: '7분',
          image: '/blog/game-rewards.jpg',
        },
        {
          id: 'community-airdrop',
          category: '가상자산 규제 & 세금',
          categoryColor: 'bg-red-100 text-red-800',
          title: '코인 과세 유예는 끝났다: 국세청이 당신의 지갑을 터는 완벽한 시나리오',
          excerpt: '2027년 1월 가상자산 양도소득세 시행을 앞두고 국세청 통합분석 시스템의 작동 방식, 기술적 한계, 합법적 절세 전략을 완전 해부합니다.',
          date: '2026년 3월 12일',
          readTime: '10분',
          image: '/blog/airdrop.jpg',
        },
        {
          id: 'crypto-custody-service',
          category: 'Custody',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: '가상자산 수탁서비스, 안전한 자산 보관의 시작',
          excerpt: 'MPC 2-of-3 기술로 구현한 기관급 보안 시스템. 거래소와 금융기관이 고객 자산을 안전하게 보관하고 관리하는 방법을 상세히 알아봅니다.',
          date: '2024년 12월 12일',
          readTime: '8분',
          image: '/blog/custody-service.jpg',
        },
      ],
    },
    en: {
      title: 'Walits Blog',
      subtitle: 'Insights and use cases about blockchain wallet solutions',
      backToHome: '← Back to Home',
      readMore: 'Read More →',
      posts: [
        {
          id: 'uniswap-deep-dive',
          category: 'DeFi Series 2',
          categoryColor: 'bg-pink-100 text-pink-800',
          title: 'DeFi Series 2 — Uniswap: The AMM & Liquidity Revolution',
          excerpt: 'How a single formula — x×y=k — became a $2.4T exchange. From v1\'s birth to v2\'s foundation, v3\'s concentrated liquidity revolution, and v4\'s hook architecture. Impermanent loss, fee tiers, MEV defense — all dissected.',
          date: 'March 24, 2026',
          readTime: '22 min read',
          image: '/blog/uniswap.jpg',
        },
        {
          id: 'oneinch-deep-dive',
          category: 'DeFi Series 3',
          categoryColor: 'bg-orange-100 text-orange-800',
          title: 'DeFi Series 3 — 1inch: Complete DEX Aggregator Tutorial',
          excerpt: '1inch scans 100+ DEXes in real-time to find the optimal route. Pathfinder routing algorithm, split routing, Fusion Mode gasless swaps, Limit Orders — everything about 1inch dissected in tutorial format.',
          date: 'March 24, 2026',
          readTime: '20 min read',
          image: '/blog/1inch.jpg',
        },
        {
          id: 'aave-deep-dive',
          category: 'DeFi Series 1',
          categoryColor: 'bg-purple-100 text-purple-800',
          title: 'DeFi Series 1 — AAVE: Complete Breakdown of DeFi\'s Largest Lending Protocol',
          excerpt: 'What actually happens on-chain when you deposit USDT into Aave. aTokens, over-collateralization, flash loans, liquidation bots, GHO stablecoin — all of Aave v3\'s features dissected with on-chain mechanics.',
          date: 'March 24, 2026',
          readTime: '20 min read',
          image: '/blog/aave.jpg',
        },
        {
          id: 'mev-ethereum-deep-dive',
          category: 'DEEP DIVE · Ethereum',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'MEV Dissected: The Complete Guide + $50M Aave Hack Case Study (March 2026)',
          excerpt: 'How to extract millions in MEV with zero capital. Flash loans solve the funding problem, liquidations and arbitrage create the opportunity, and Flashbots executes it all privately. The full MEV engine, dissected.',
          date: 'March 23, 2026',
          readTime: '25 min read',
          image: '/blog/mev.webp',
        },
        {
          id: 'stablecoin-payment-vs-traditional',
          category: 'Payments & FinTech',
          categoryColor: 'bg-cyan-100 text-cyan-800',
          title: 'How Stablecoin Payments Reduce Steps vs Traditional Payment Systems',
          excerpt: 'Card payments separate authorization and settlement, taking days. Stablecoins process payment+settlement simultaneously via on-chain transfer. 8 steps vs 4 steps analyzed from a practical perspective.',
          date: 'February 11, 2026',
          readTime: '14 min read',
          image: '/blog/payment.jpg',
        },
        {
          id: 'blackrock-buidl-tokenized-fund',
          category: 'RWA & Institutional',
          categoryColor: 'bg-emerald-100 text-emerald-800',
          title: 'BlackRock BUIDL: When Traditional Finance Meets Blockchain',
          excerpt: 'World\'s largest asset manager BlackRock\'s $1.5B tokenized fund BUIDL. Daily dividends, T+0 redemption, DeFi integration. Analyzing the perfect fusion of TradFi and blockchain.',
          date: 'February 11, 2026',
          readTime: '12 min read',
          image: '/blog/blackrock.jpg',
        },
        {
          id: 'tron-usdt-hack-scenario',
          category: 'Security & Risk',
          categoryColor: 'bg-red-100 text-red-800',
          title: 'USDT Collapse Scenario: If Tron Network Gets Hacked',
          excerpt: 'What if $60B+ of TRC-20 USDT is at risk? Analyzing Tron network hack scenarios, global financial system shockwaves, and technical limits of decentralization.',
          date: 'February 11, 2026',
          readTime: '15 min read',
          image: '/blog/usdt.jpg',
        },
        {
          id: 'blockchain-comparison-guide',
          category: 'Technical Guide',
          categoryColor: 'bg-gray-100 text-gray-800',
          title: 'Complete Guide to Top 5 Blockchain Technologies',
          excerpt: 'Bitcoin, Ethereum, XRP, Tron, Solana. Complete comparison of consensus mechanisms, transaction structures, and fee systems. Includes use case recommendations.',
          date: 'January 18, 2026',
          readTime: '15 min read',
          image: '/blog/BLOCKCHAIN_COMPARISON_TUTORIAL.jpg',
        },
        {
          id: 'enterprise-crypto-wallet-guide',
          category: 'Enterprise',
          categoryColor: 'bg-purple-100 text-purple-800',
          title: '2026 Enterprise Crypto Wallet Selection Guide',
          excerpt: 'Non-Custody vs Custody comparison, MPC security, API integration, ICO support. Complete guide for game companies, exchanges, and token issuers.',
          date: 'January 11, 2026',
          readTime: '8 min read',
          image: '/blog/enterprise-wallet.jpg',
        },
        {
          id: 'non-custody-vs-custody-wallet',
          category: 'Digital Assets',
          categoryColor: 'bg-red-100 text-red-800',
          title: "Custody Wallets for Government Agencies to Secure Seized Criminal Assets",
          excerpt: "22 BTC embezzled at Gangnam Police, ₩6.9B stolen after NTS exposed its mnemonic. Walits Research Team's analysis of 3 structural root causes and 10 MPC·HSM·SSS-based prescriptions.",
          date: 'March 10, 2026',
          readTime: '12 min read',
          image: '/blog/wallet-comparison.jpg',
        },
        {
          id: 'stablecoin-rwa-tokenization-2026',
          category: 'Financial Analysis',
          categoryColor: 'bg-orange-100 text-orange-800',
          title: '2026 US Government & Fed: Stablecoin and RWA Tokenization Outlook',
          excerpt: 'Fed-government conflict amid $37T debt crisis, GENIUS Act implementation, and the future where all assets are tokenized. Analyzing the birth of a new financial order.',
          date: 'January 15, 2026',
          readTime: '25 min read',
          image: '/blog/tokenize.jpg',
        },
        {
          id: 'mpc-wallet-security-guide',
          category: 'Security',
          categoryColor: 'bg-red-100 text-red-800',
          title: 'MPC Wallet Security Guide - 2-of-3 Multisig',
          excerpt: 'Eliminate single point of failure with MPC 2-of-3. Secure storage from Ethereum to Solana with ECDSA & EdDSA algorithms.',
          date: 'January 11, 2026',
          readTime: '9 min read',
          image: '/blog/mpc-security.jpg',
        },
        {
          id: 'stablecoin-wallet-erc4337',
          category: 'ERC-4337 · Account Abstraction',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'A Rational Wallet Service for Stablecoins',
          excerpt: 'With ERC-4337 Account Abstraction and Paymaster, all transactions are possible with USDC only — no ETH needed. The technical innovation that turns a wallet into a real wallet, not a stock app.',
          date: 'March 9, 2026',
          readTime: '8 min read',
          image: '/blog/messenger-transfer.jpg',
        },
        {
          id: 'ai-auto-payment-subscription',
          category: 'AI & Messenger',
          categoryColor: 'bg-pink-100 text-pink-800',
          title: 'Manage Subscriptions with AI Auto Payment',
          excerpt: 'AI automatically pays Netflix, Spotify, AWS subscriptions. Exchange rate optimization and spending analysis.',
          date: 'January 11, 2026',
          readTime: '6 min read',
          image: '/blog/ai-payment.jpg',
        },
        {
          id: 'security-token-sto-guide',
          category: 'STO & Securities',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'Complete Guide to STO (Security Token)',
          excerpt: 'Tokenize real estate, bonds, stocks on blockchain. Everything about RWA (Real World Assets) investment.',
          date: 'January 11, 2026',
          readTime: '10 min read',
          image: '/blog/sto-guide.jpg',
        },
        {
          id: 'ai-portfolio-management-rwa',
          category: 'STO & Securities',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'How to Manage RWA Portfolio with AI',
          excerpt: 'AI auto-rebalancing, risk management, profit reinvestment. Optimal investment without emotion.',
          date: 'January 11, 2026',
          readTime: '8 min read',
          image: '/blog/ai-portfolio.jpg',
        },
        {
          id: 'automated-reward-distribution',
          category: 'Non-Custody',
          categoryColor: 'bg-green-100 text-green-800',
          title: 'Automated Reward Distribution Made Simple with One API',
          excerpt: 'Solve all reward scenarios - game events, attendance, community activities, referrals - with just one API. Zero gas fees, instant reflection, perfect tracking.',
          date: 'December 15, 2024',
          readTime: '7 min read',
          image: '/blog/game-rewards.jpg',
        },
        {
          id: 'community-airdrop',
          category: 'Crypto Regulation & Tax',
          categoryColor: 'bg-red-100 text-red-800',
          title: "The Crypto Tax Deferral Is Over: The NTS's Perfect Scenario for Emptying Your Wallet",
          excerpt: "A complete breakdown of Korea's NTS virtual asset integrated analysis system launching before the 2027 crypto capital gains tax — how it works, its limits, and legal defense strategies.",
          date: 'March 12, 2026',
          readTime: '10 min read',
          image: '/blog/airdrop.jpg',
        },
        {
          id: 'crypto-custody-service',
          category: 'Custody',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'Crypto Custody Service: The Start of Secure Asset Storage',
          excerpt: 'Institution-grade security system built with MPC 2-of-3 technology. Learn in detail how exchanges and financial institutions safely store and manage customer assets.',
          date: 'December 12, 2024',
          readTime: '8 min read',
          image: '/blog/custody-service.jpg',
        },
      ],
    },
  }[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
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
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded transition-all ${
                  language === 'ko'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                한
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-all ${
                  language === 'en'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{copy.title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">{copy.subtitle}</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {copy.posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Blog Post Image */}
              <div className="h-64 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${post.categoryColor} mb-3`}>
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <div className="mt-4 text-gray-900 dark:text-white font-semibold group-hover:underline">
                  {copy.readMore}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
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
