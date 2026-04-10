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
          id: 'solana-defi-deep-dive',
          category: 'DeFi 시리즈 14',
          categoryColor: 'bg-purple-100 text-purple-800',
          title: 'DeFi 시리즈 14 — Solana DeFi 입문: Jupiter + Kamino 완전 가이드',
          excerpt: '$0.001 수수료, 400ms 확정. Jupiter 최적 라우팅으로 슬리피지 최소화, Kamino Finance CLMM 자동 수익 전략, ETH vs SOL DeFi 비교, Visa × Solana USDC 파일럿까지.',
          date: '2026년 4월 6일',
          readTime: '25분',
          image: '/blog/solana.jpg',
        },
        {
          id: 'circle-usdc-deep-dive',
          category: 'DeFi 시리즈 13',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'DeFi 시리즈 13 — Circle / USDC: DeFi·PayFi·기업 결제를 잇는 달러 인프라',
          excerpt: 'USDC 발행·소각 구조, CCTP 크로스체인 전송 원리, Native vs Bridged USDC, Programmable Wallets, USDT vs USDC 비교까지. walits가 USDC를 핵심 자산으로 선택한 이유.',
          date: '2026년 4월 6일',
          readTime: '20분',
          image: '/blog/circle.jpg',
        },
        {
          id: 'lido-eigenlayer-deep-dive',
          category: 'DeFi 시리즈 12',
          categoryColor: 'bg-cyan-100 text-cyan-800',
          title: 'DeFi 시리즈 12 — Lido + EigenLayer: ETH 스테이킹부터 리스테이킹까지',
          excerpt: 'Lido stETH로 유동성 유지하며 스테이킹, EigenLayer 리스테이킹으로 추가 수익. stETH 내부 구조, AVS 개념, LRT 전략, 연 5~7% 수익 스택 완전 해부.',
          date: '2026년 4월 6일',
          readTime: '22분',
          image: '/blog/lido.jpg',
        },
        {
          id: 'pendle-deep-dive',
          category: 'DeFi 시리즈 11',
          categoryColor: 'bg-violet-100 text-violet-800',
          title: 'DeFi 시리즈 11 — Pendle: 수익률을 거래하는 DeFi 채권 시장',
          excerpt: 'PT로 현재 APY를 고정하고, YT로 수익률 상승에 베팅. Pendle의 PT/YT 분리 원리, Ondo USDY × Pendle RWA 연동, 고정 수익 확보 전략까지. DeFi에 채권 시장이 생겼다.',
          date: '2026년 4월 6일',
          readTime: '25분',
          image: '/blog/pendle.jpg',
        },
        {
          id: 'huma-finance-deep-dive',
          category: 'DeFi 시리즈 10',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'DeFi 시리즈 10 — Huma Finance: 실물 경제 수익을 DeFi로',
          excerpt: '공급망 금융과 크로스보더 결제(Arf)로 연 10~12% APY. Senior/Junior 트랜치 구조, 실물 인보이스 기반 수익 원리, walits 칠리 투자와의 연동까지. DeFi 최초 실물 수익 기반 PayFi 프로토콜.',
          date: '2026년 4월 6일',
          readTime: '22분',
          image: '/blog/huma.jpg',
        },
        {
          id: 'morpho-deep-dive',
          category: 'DeFi 시리즈 9',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'DeFi 시리즈 9 — Morpho: Aave 위에서 더 잘하는 렌딩 프로토콜',
          excerpt: 'P2P 매칭으로 예치자 5.6% · 대출자 6.2% 실현. Morpho Optimizer → Blue → MetaMorpho 3단계 진화, 허가 없는 마켓 생성, walits 애플·슬리핑머니 전략과의 연동까지.',
          date: '2026년 4월 6일',
          readTime: '20분',
          image: '/blog/morpho.jpg',
        },
        {
          id: 'walits-enpl',
          category: 'walits 기술 심층 분석',
          categoryColor: 'bg-orange-100 text-orange-800',
          title: 'ENPL — Earn Now Pay Later: 원금은 그대로, 이자로 결제한다',
          excerpt: 'BNPL의 역발상. 원금을 DeFi에 예치하고 매달 발생하는 이자로 구독료를 자동 결제한다. 부채 없이, 원금 소비 없이. 필요 원금 계산 수식부터 ENPL Agent 온체인 실행 구조까지.',
          date: '2026년 4월 10일',
          readTime: '18분',
          image: '/blog/walits_payfi.jpg',
        },
        {
          id: 'walits-idle-time-detector',
          category: 'walits 기술 심층 분석',
          categoryColor: 'bg-sky-100 text-sky-800',
          title: 'Idle Time Detector — 유휴 USDC가 자동으로 수익을 내는 방법',
          excerpt: '입금 감지 → 유휴 기간 예측 → 프로토콜 선택 → 온체인 예치. 24h 미만→Aave 5.1%, 1-7일→Morpho 5.6%, 7일+→Ondo USDY 5.0%. APY Scanner와 Policy Engine 연동 구조 완전 해부.',
          date: '2026년 4월 10일',
          readTime: '20분',
          image: '/blog/walits_payfi.jpg',
        },
        {
          id: 'walits-starter-guide',
          category: 'walits 스타터 가이드',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'Walits 서비스 스타터 가이드 — 개인용 USDC 전문 지갑',
          excerpt: '로그인 후 UI/UX 설계, 지갑 생성 기술(HD Wallet vs Turnkey MPC vs Coinbase CDP) 비교, USDC 충전 5가지 경로(거래소·MetaMask·카드 온램프·CCTP·P2P) 완전 가이드.',
          date: '2026년 4월 7일',
          readTime: '28분',
          image: '/blog/walits_usdc.jpg',
        },
        {
          id: 'walits-payfi-architecture',
          category: 'walits 아키텍처',
          categoryColor: 'bg-slate-100 text-slate-800',
          title: 'walits — PayFi + AI 에이전트 통합 아키텍처',
          excerpt: '잔고가 24시간 알아서 일하는 지갑. Idle Time 감지기, 오렌지·애플·칠리 투자 프리셋, AI Agent + Turnkey MPC, Aave·Morpho·Ondo·Huma PayFi 레일까지. walits 전체 아키텍처를 완전 해부한다.',
          date: '2026년 4월 5일',
          readTime: '25분',
          image: '/blog/walits_payfi.jpg',
        },
        {
          id: 'ondo-deep-dive',
          category: 'DeFi 시리즈 8',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'DeFi 시리즈 8 — Ondo Finance: 미국 국채를 DeFi로 가져오다',
          excerpt: 'OUSG와 USDY로 연 4~5% 미국 국채 수익을 온체인에서. BlackRock BUIDL 연동 구조, USDY 리베이스 메커니즘, PayFi와의 결합까지. RWA 토큰화 선두주자 Ondo Finance를 완전 해부한다.',
          date: '2026년 4월 3일',
          readTime: '22분',
          image: '/blog/ondo.jpg',
        },
        {
          id: 'payfi',
          category: 'Payment Finance',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'PayFi — 돈이 이동하는 모든 순간에 수익이 발생한다',
          excerpt: 'Payment + DeFi의 융합. Lily Liu가 제시한 화폐의 시간 가치 개념부터 Huma Finance·Ondo·Visa × Solana 파일럿까지. SWIFT 2~5일 대기를 2초로 단축하고, 결제 대기 자금에서 이자를 발생시키는 새로운 금융 패러다임을 완전 해부한다.',
          date: '2026년 4월 3일',
          readTime: '25분',
          image: '/blog/payfi.jpg',
        },
        {
          id: 'agentic-wallets',
          category: 'AI × Web3',
          categoryColor: 'bg-violet-100 text-violet-800',
          title: 'Agentic Wallets — AI 에이전트가 스스로 결제하는 시대',
          excerpt: 'Coinbase가 만든 AI 에이전트 전용 지갑 인프라. AgentKit과 Agentic Wallets의 차이, 온체인 AI 에이전트 아키텍처, 스테이블코인 지갑에 AgentKit을 붙이는 방법까지. 자율 결제·DeFi 자동화의 실전 가이드.',
          date: '2026년 4월 3일',
          readTime: '22분',
          image: '/blog/agent.jpg',
        },
        {
          id: 'stablecoin-yield-strategy',
          category: 'DeFi 시리즈 7',
          categoryColor: 'bg-emerald-100 text-emerald-800',
          title: 'DeFi 시리즈 7 — 스테이블코인 수익 극대화 전략',
          excerpt: '은행 3%인데 USDC로 연 10~25%? Aave 예치부터 Curve 3pool LP, Convex 자동 복리까지. $10,000 USDC 실전 시나리오와 리스크 분석 포함. 초보자도 따라할 수 있는 단계별 가이드.',
          date: '2026년 3월 31일',
          readTime: '20분',
          image: '/blog/yield.jpg',
        },
        {
          id: 'crypto-bot-trading',
          category: 'DeFi 시리즈 6',
          categoryColor: 'bg-green-100 text-green-800',
          title: 'DeFi 시리즈 6 — 크립토 봇 트레이딩 실전 가이드',
          excerpt: '실제로 돈을 벌 수 있는 봇 3가지. 플래시론·MEV·이더리움 청산봇이 왜 개인에게 불가능한지 비판적으로 분석하고, 현실적으로 가능한 펀딩비 차익봇(Python+ccxt), 신규 체인 청산봇(TypeScript+ethers.js), CEX-DEX 차익봇을 실제 코드와 함께 설명한다.',
          date: '2026년 3월 30일',
          readTime: '30분',
          image: '/blog/hustle.jpg',
        },
        {
          id: 'curve-deep-dive',
          category: 'DeFi 시리즈 5',
          categoryColor: 'bg-yellow-100 text-yellow-800',
          title: 'DeFi 시리즈 5 — Curve Finance 완전 가이드',
          excerpt: 'USDC→USDT 스왑에 Uniswap은 0.3%, Curve는 0.01% 슬리피지. StableSwap 알고리즘이 어떻게 스테이블코인 유동성을 혁신했는지. veCRV 거버넌스, 게이지 시스템, Convex와 Curve Wars까지. 스테이블코인 DEX의 심장을 완전 해부한다.',
          date: '2026년 3월 30일',
          readTime: '25분',
          image: '/blog/curve.jpg',
        },
        {
          id: 'otc-deep-dive',
          category: 'DeFi 시리즈 4',
          categoryColor: 'bg-slate-100 text-slate-800',
          title: 'DeFi 시리즈 4 — 크립토 OTC 데스크 완전 가이드',
          excerpt: '비트코인 $5,000만어치를 거래소에서 사면 시장이 2~5% 움직인다. 기관들이 OTC 데스크를 통해 가격충격 없이 대규모 거래를 조용히 처리하는 방법. Principal/Agency 모델, RFQ, 결제 구조, 2025 트렌드까지.',
          date: '2026년 3월 30일',
          readTime: '22분',
          image: '/blog/otc.jpg',
        },
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
          id: 'solana-defi-deep-dive',
          category: 'DeFi Series 14',
          categoryColor: 'bg-purple-100 text-purple-800',
          title: 'DeFi Series 14 — Solana DeFi Guide: Jupiter + Kamino',
          excerpt: '$0.001 fees, 400ms finality. Jupiter optimal routing for minimal slippage, Kamino Finance CLMM auto-yield, ETH vs SOL DeFi comparison, and the Visa × Solana USDC pilot.',
          date: 'April 6, 2026',
          readTime: '25 min read',
          image: '/blog/solana.jpg',
        },
        {
          id: 'circle-usdc-deep-dive',
          category: 'DeFi Series 13',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'DeFi Series 13 — Circle / USDC: The Dollar Infrastructure for DeFi, PayFi & Enterprise',
          excerpt: 'USDC mint/burn mechanics, CCTP cross-chain transfer, Native vs Bridged USDC, Programmable Wallets API, USDT vs USDC comparison — and why walits chose USDC as its core asset.',
          date: 'April 6, 2026',
          readTime: '20 min read',
          image: '/blog/circle.jpg',
        },
        {
          id: 'lido-eigenlayer-deep-dive',
          category: 'DeFi Series 12',
          categoryColor: 'bg-cyan-100 text-cyan-800',
          title: 'DeFi Series 12 — Lido + EigenLayer: From ETH Staking to Restaking',
          excerpt: 'Liquid staking with Lido stETH + extra yield via EigenLayer restaking. stETH internals, AVS concepts, LRT strategies (ether.fi · Renzo · Kelp), and the 5–7% yield stack explained.',
          date: 'April 6, 2026',
          readTime: '22 min read',
          image: '/blog/lido.jpg',
        },
        {
          id: 'pendle-deep-dive',
          category: 'DeFi Series 11',
          categoryColor: 'bg-violet-100 text-violet-800',
          title: 'DeFi Series 11 — Pendle: The DeFi Bond Market for Yield Trading',
          excerpt: 'Lock in your current APY with PT, or leverage yield movements with YT. Pendle\'s PT/YT split mechanics, Ondo USDY × Pendle RWA integration, and fixed-yield strategies explained.',
          date: 'April 6, 2026',
          readTime: '25 min read',
          image: '/blog/pendle.jpg',
        },
        {
          id: 'huma-finance-deep-dive',
          category: 'DeFi Series 10',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'DeFi Series 10 — Huma Finance: Real-World Yield Comes to DeFi',
          excerpt: '10–12% APY from supply chain finance and cross-border payments (Arf). Senior/Junior tranche structure, real invoice-backed yield mechanics, and the walits Chili strategy connection.',
          date: 'April 6, 2026',
          readTime: '22 min read',
          image: '/blog/huma.jpg',
        },
        {
          id: 'morpho-deep-dive',
          category: 'DeFi Series 9',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'DeFi Series 9 — Morpho: Better Lending Rates Built on Top of Aave',
          excerpt: 'P2P matching delivers 5.6% to depositors and 6.2% to borrowers. Morpho Optimizer → Blue → MetaMorpho evolution, permissionless market creation, and the walits Apple/Sleeping Money strategy connection.',
          date: 'April 6, 2026',
          readTime: '20 min read',
          image: '/blog/morpho.jpg',
        },
        {
          id: 'walits-enpl',
          category: 'walits Tech Deep Dive',
          categoryColor: 'bg-orange-100 text-orange-800',
          title: 'ENPL — Earn Now Pay Later: Keep the Principal, Pay with Yield',
          excerpt: 'The opposite of BNPL. Deposit principal into DeFi and auto-pay subscriptions with monthly yield. No debt, no principal consumption. From the required principal formula to the ENPL Agent on-chain execution structure.',
          date: 'April 10, 2026',
          readTime: '18 min read',
          image: '/blog/walits_payfi.jpg',
        },
        {
          id: 'walits-idle-time-detector',
          category: 'walits Tech Deep Dive',
          categoryColor: 'bg-sky-100 text-sky-800',
          title: 'Idle Time Detector — How Idle USDC Earns Yield Automatically',
          excerpt: 'Deposit detected → idle duration predicted → protocol selected → on-chain deposit. Under 24h→Aave 5.1%, 1-7d→Morpho 5.6%, 7d+→Ondo USDY 5.0%. Full breakdown of APY Scanner and Policy Engine integration.',
          date: 'April 10, 2026',
          readTime: '20 min read',
          image: '/blog/walits_payfi.jpg',
        },
        {
          id: 'walits-starter-guide',
          category: 'Walits Starter Guide',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'Walits Starter Guide — Your Personal USDC Wallet',
          excerpt: 'Post-login UX design, wallet tech comparison (HD Wallet vs Turnkey MPC vs Coinbase CDP), and 5 ways to fund with USDC (exchange · MetaMask · card on-ramp · CCTP bridge · P2P). Everything you need to get started.',
          date: 'April 7, 2026',
          readTime: '28 min read',
          image: '/blog/walits_usdc.jpg',
        },
        {
          id: 'walits-payfi-architecture',
          category: 'walits Architecture',
          categoryColor: 'bg-slate-100 text-slate-800',
          title: 'walits — PayFi + AI Agent Integrated Architecture',
          excerpt: 'A wallet where your balance works 24/7. Idle Time Detector, Orange/Apple/Chili investment presets, AI Agent + Turnkey MPC, Aave · Morpho · Ondo · Huma PayFi rails. A complete breakdown of the walits architecture.',
          date: 'April 5, 2026',
          readTime: '25 min read',
          image: '/blog/walits_payfi.jpg',
        },
        {
          id: 'ondo-deep-dive',
          category: 'DeFi Series 8',
          categoryColor: 'bg-blue-100 text-blue-800',
          title: 'DeFi Series 8 — Ondo Finance: Bringing US Treasuries to DeFi',
          excerpt: '4–5% US Treasury yield onchain via OUSG and USDY. BlackRock BUIDL integration, USDY rebase mechanics, and the PayFi connection. A complete breakdown of Ondo Finance — the RWA tokenization frontrunner.',
          date: 'April 3, 2026',
          readTime: '22 min read',
          image: '/blog/ondo.jpg',
        },
        {
          id: 'payfi',
          category: 'Payment Finance',
          categoryColor: 'bg-teal-100 text-teal-800',
          title: 'PayFi — Yield on Every Dollar in Motion',
          excerpt: 'Payment + DeFi fused. From Lily Liu\'s time-value-of-money thesis to Huma Finance, Ondo, and the Visa × Solana USDC pilot. A complete breakdown of the new financial paradigm that compresses SWIFT\'s 2–5 day settlement to 2 seconds — and earns yield on every dollar waiting to settle.',
          date: 'April 3, 2026',
          readTime: '25 min read',
          image: '/blog/payfi.jpg',
        },
        {
          id: 'agentic-wallets',
          category: 'AI × Web3',
          categoryColor: 'bg-violet-100 text-violet-800',
          title: 'Agentic Wallets — When AI Agents Pay for Themselves',
          excerpt: 'Coinbase\'s AI agent-specific wallet infrastructure explained. The difference between AgentKit and Agentic Wallets, onchain AI agent architecture, and how to integrate AgentKit into a stablecoin wallet. A practical guide to autonomous payments and DeFi automation.',
          date: 'April 3, 2026',
          readTime: '22 min read',
          image: '/blog/agent.jpg',
        },
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
          id: 'stablecoin-yield-strategy',
          category: 'DeFi Series 7',
          categoryColor: 'bg-emerald-100 text-emerald-800',
          title: 'DeFi Series 7 — Stablecoin Yield Maximization',
          excerpt: 'Bank rates at 3% but 10–25% on USDC? From Aave deposits to Curve 3pool LP and Convex auto-compounding. $10,000 real scenario with risk analysis. Step-by-step guide anyone can follow.',
          date: 'March 31, 2026',
          readTime: '20 min read',
          image: '/blog/yield.jpg',
        },
        {
          id: 'crypto-bot-trading',
          category: 'DeFi Series 6',
          categoryColor: 'bg-green-100 text-green-800',
          title: 'DeFi Series 6 — Crypto Bot Trading: A Practical Guide',
          excerpt: 'Why flash loans, MEV bots, and Ethereum liquidation bots are essentially impossible for individuals in 2025 — and the three strategies that actually work: funding rate arbitrage (Python+ccxt), new-chain liquidation bots (TypeScript+ethers.js), and CEX-DEX arbitrage. Full code included.',
          date: 'March 30, 2026',
          readTime: '30 min read',
          image: '/blog/hustle.jpg',
        },
        {
          id: 'curve-deep-dive',
          category: 'DeFi Series 5',
          categoryColor: 'bg-yellow-100 text-yellow-800',
          title: 'DeFi Series 5 — Curve Finance Complete Guide',
          excerpt: 'Uniswap charges ~0.3% slippage for USDC→USDT, Curve charges 0.01%. How the StableSwap algorithm revolutionized stablecoin liquidity. veCRV governance, gauge system, Convex Finance, and the Curve Wars — the heart of stablecoin DEX fully dissected.',
          date: 'March 30, 2026',
          readTime: '25 min read',
          image: '/blog/curve.jpg',
        },
        {
          id: 'otc-deep-dive',
          category: 'DeFi Series 4',
          categoryColor: 'bg-slate-100 text-slate-800',
          title: 'DeFi Series 4 — Complete Guide to Crypto OTC Desks',
          excerpt: 'Buying $50M of Bitcoin on an exchange moves the market 2–5%. How institutions execute large trades quietly through OTC desks. Principal/Agency models, RFQ, settlement structure, and 2025 trends.',
          date: 'March 30, 2026',
          readTime: '22 min read',
          image: '/blog/otc.jpg',
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
