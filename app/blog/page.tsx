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
          category: '지갑 비교',
          categoryColor: 'bg-indigo-100 text-indigo-800',
          title: 'Non-Custody vs Custody 지갑 완벽 비교',
          excerpt: '두 지갑의 차이점을 한눈에. 시나리오별 선택 가이드, 가격 비교, 실제 사용 사례 포함.',
          date: '2026년 1월 11일',
          readTime: '6분',
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
          id: 'messenger-crypto-transfer',
          category: 'AI & 메신저',
          categoryColor: 'bg-pink-100 text-pink-800',
          title: '메신저처럼 쉽게 암호화폐 송금하는 법',
          excerpt: '복잡한 지갑 주소 없이 Walits 메신저에서 대화하듯 송금. 그룹 정산, 소액 결제까지.',
          date: '2026년 1월 11일',
          readTime: '5분',
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
          category: 'STO & 증권',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'STO(증권형 토큰) 완벽 가이드',
          excerpt: '부동산, 채권, 주식을 블록체인으로 토큰화. RWA(실물 자산) 투자의 모든 것.',
          date: '2026년 1월 11일',
          readTime: '10분',
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
          category: 'Non-Custody',
          categoryColor: 'bg-green-100 text-green-800',
          title: '커뮤니티 에어드랍, 1,000명에게 한 번에',
          excerpt: '활성 사용자 1,000명에게 BASE 토큰을 에어드랍하는 실제 사례입니다. Virtual Balance 시스템으로 가스비 걱정 없이 즉시 지급하는 방법을 소개합니다.',
          date: '2024년 12월 14일',
          readTime: '4분',
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
          category: 'Comparison',
          categoryColor: 'bg-indigo-100 text-indigo-800',
          title: 'Non-Custody vs Custody Wallet Complete Comparison',
          excerpt: 'Key differences at a glance. Scenario-based selection guide, pricing comparison, and real use cases.',
          date: 'January 11, 2026',
          readTime: '6 min read',
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
          id: 'messenger-crypto-transfer',
          category: 'AI & Messenger',
          categoryColor: 'bg-pink-100 text-pink-800',
          title: 'How to Send Crypto as Easy as Messaging',
          excerpt: 'Send crypto through Walits messenger like chatting, without complex wallet addresses. Group settlement and micro-payments.',
          date: 'January 11, 2026',
          readTime: '5 min read',
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
          category: 'Non-Custody',
          categoryColor: 'bg-green-100 text-green-800',
          title: 'Community Airdrop to 1,000 Users at Once',
          excerpt: 'A real case of airdropping BASE tokens to 1,000 active users. Learn how to distribute instantly without gas fees using the Virtual Balance system.',
          date: 'December 14, 2024',
          readTime: '4 min read',
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
