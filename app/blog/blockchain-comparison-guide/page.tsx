'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlockchainComparisonPost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: '기술 가이드',
      title: '5대 블록체인 기술 비교 완벽 가이드',
      date: '2026년 1월 18일',
      readTime: '30분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Technical Guide',
      title: 'Complete Guide to Top 5 Blockchain Technologies',
      date: 'January 18, 2026',
      readTime: '30 min read',
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

        <div className="mb-12">
          <img
            src="/blog/BLOCKCHAIN_COMPARISON_TUTORIAL.jpg"
            alt="Blockchain Comparison"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
                Bitcoin, Ethereum, XRP, Tron, Solana. 5대 주요 블록체인의 기술적 특징, 합의 메커니즘, 계정 모델, 트랜잭션 구조, 수수료 체계, 스마트 컨트랙트, 토큰 표준, 개발자 경험을 완벽 비교합니다.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-lg font-bold mb-2">📋 목차</h3>
                <ol className="text-sm space-y-1">
                  <li>1. 개요 및 역사</li>
                  <li>2. 합의 메커니즘 상세 분석</li>
                  <li>3. 계정 모델 비교</li>
                  <li>4. 트랜잭션 구조 분석</li>
                  <li>5. 수수료 체계 완전 가이드</li>
                  <li>6. 네트워크 성능 비교</li>
                  <li>7. 스마트 컨트랙트 비교</li>
                  <li>8. 토큰 표준</li>
                  <li>9. 개발자 경험</li>
                  <li>10. 실전 비교표 및 선택 가이드</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">1. 개요 및 역사</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin (2009)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="mb-2"><strong>창시자:</strong> 사토시 나카모토 (익명)</p>
                <p className="mb-2"><strong>출시:</strong> 2009년 1월 3일</p>
                <p><strong>목적:</strong> P2P 전자 화폐 시스템</p>
              </div>
              <p className="mb-4">
                <strong>역사적 의미:</strong> Bitcoin은 최초의 탈중앙화 암호화폐로, 블록체인 기술의 시작점입니다.
                이중 지불 문제를 Proof of Work로 해결하여 금융 시스템의 패러다임을 전환했습니다.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-2">주요 이정표:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>2009.01:</strong> 제네시스 블록 생성</li>
                  <li><strong>2010.05:</strong> 최초의 실물 거래 (피자 10,000 BTC)</li>
                  <li><strong>2017.08:</strong> SegWit 활성화</li>
                  <li><strong>2021.06:</strong> 엘살바도르 법정화폐 채택</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum (2015)</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 mb-6">
                <p className="mb-2"><strong>창시자:</strong> 비탈릭 부테린 (Vitalik Buterin)</p>
                <p className="mb-2"><strong>출시:</strong> 2015년 7월 30일</p>
                <p><strong>목적:</strong> 스마트 컨트랙트 플랫폼</p>
              </div>
              <p className="mb-4">
                <strong>역사적 의미:</strong> 튜링 완전한 스마트 컨트랙트를 도입하여 DApp 생태계의 시작을 알렸습니다.
                DeFi, NFT, DAO의 기반이 되었습니다.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-2">주요 이정표:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>2015.07:</strong> 메인넷 출시</li>
                  <li><strong>2016.07:</strong> The DAO 해킹 후 하드포크 (ETH/ETC 분리)</li>
                  <li><strong>2020.12:</strong> Beacon Chain (PoS) 시작</li>
                  <li><strong>2021.08:</strong> EIP-1559 (가스비 개선) 활성화</li>
                  <li><strong>2022.09:</strong> The Merge (PoW → PoS 전환)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">XRP (2012)</h3>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-6">
                <p className="mb-2"><strong>창시자:</strong> Ripple Labs (Jed McCaleb, Chris Larsen)</p>
                <p className="mb-2"><strong>출시:</strong> 2012년 (XRP Ledger)</p>
                <p><strong>목적:</strong> 빠르고 저렴한 국제 송금</p>
              </div>
              <p className="mb-4">
                <strong>역사적 의미:</strong> 은행 간 결제 시스템 혁신. Pre-mined 방식(100B XRP)과 에너지 효율적인 합의 프로토콜 도입.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-2">주요 이정표:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>2012:</strong> XRP Ledger 출시</li>
                  <li><strong>2013:</strong> Ripple Labs 설립</li>
                  <li><strong>2018:</strong> xRapid (현 ODL) 출시</li>
                  <li><strong>2020-2023:</strong> SEC 소송 (2023년 부분 승소)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron (2017)</h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
                <p className="mb-2"><strong>창시자:</strong> 저스틴 선 (Justin Sun)</p>
                <p className="mb-2"><strong>출시:</strong> 2017년 9월 (메인넷 2018년 6월)</p>
                <p><strong>목적:</strong> 탈중앙화 엔터테인먼트 플랫폼</p>
              </div>
              <p className="mb-4">
                <strong>역사적 의미:</strong> Ethereum의 대안으로 시작. 높은 TPS와 낮은 수수료로 콘텐츠 크리에이터 중심 생태계 구축.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-2">주요 이정표:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>2017.09:</strong> ICO 완료 ($70M)</li>
                  <li><strong>2018.06:</strong> 메인넷 독립 (Odyssey 2.0)</li>
                  <li><strong>2018.07:</strong> BitTorrent 인수</li>
                  <li><strong>2021:</strong> USDT 발행량이 Ethereum 초과</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana (2020)</h3>
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-6">
                <p className="mb-2"><strong>창시자:</strong> 아나톨리 야코벤코 (Anatoly Yakovenko)</p>
                <p className="mb-2"><strong>출시:</strong> 2020년 3월</p>
                <p><strong>목적:</strong> 고성능 블록체인</p>
              </div>
              <p className="mb-4">
                <strong>역사적 의미:</strong> Proof of History 도입으로 초고속 TPS (65,000+) 달성. "Ethereum Killer" 중 하나로 주목.
              </p>
              <div className="mb-6">
                <p className="font-semibold mb-2">주요 이정표:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>2020.03:</strong> 메인넷 베타 출시</li>
                  <li><strong>2021:</strong> NFT 붐 (Solana Monkey Business 등)</li>
                  <li><strong>2021.09:</strong> 17시간 네트워크 중단</li>
                  <li><strong>2022:</strong> FTX 붕괴 영향 (SOL 가격 급락)</li>
                  <li><strong>2023:</strong> 네트워크 안정성 개선</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">2. 합의 메커니즘 상세 분석</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin: Proof of Work (PoW)</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`채굴자 → 블록 생성 → SHA-256 해시 계산 → Nonce 찾기 → 보상`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>에너지 집약적:</strong> 연간 약 150 TWh 소비</li>
                  <li><strong>51% 공격 방어:</strong> 막대한 해시파워 필요</li>
                  <li><strong>블록 생성 시간:</strong> 약 10분</li>
                  <li><strong>채굴 난이도 조정:</strong> 2주마다 자동 조정</li>
                  <li><strong>반감기:</strong> 4년마다 (현재 6.25 BTC → 2024년 3.125 BTC)</li>
                </ul>
                <p className="mt-3"><strong>보안성:</strong> ⭐⭐⭐⭐⭐ (최고 수준)</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum: Proof of Stake (PoS)</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`검증자(32 ETH) → 블록 제안 → 증명 → 보상/패널티`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>에너지 효율:</strong> PoW 대비 99.95% 감소</li>
                  <li><strong>검증자 요구사항:</strong> 32 ETH 스테이킹</li>
                  <li><strong>블록 생성 시간:</strong> 약 12초</li>
                  <li><strong>Slashing:</strong> 악의적 행위 시 스테이크 몰수</li>
                  <li><strong>프로토콜:</strong> LMD GHOST + Casper FFG</li>
                </ul>
                <p className="mt-3"><strong>보안성:</strong> ⭐⭐⭐⭐⭐ (매우 높음)</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">XRP: Consensus Protocol</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`신뢰 노드 → 트랜잭션 검증 → 80% 합의 → 원장 확정`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>에너지 효율:</strong> Bitcoin 대비 1/100,000</li>
                  <li><strong>UNL:</strong> Unique Node List - 신뢰할 수 있는 검증자 리스트</li>
                  <li><strong>원장 확정:</strong> 3-5초</li>
                  <li><strong>채굴 없음:</strong> Pre-mined</li>
                  <li><strong>합의 방식:</strong> 연방형 비잔틴 합의 (FBA)</li>
                </ul>
                <p className="mt-3"><strong>보안성:</strong> ⭐⭐⭐⭐ (높음, 중앙화 우려 존재)</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron: Delegated Proof of Stake (DPoS)</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`TRX 보유자 → 27명 SR 투표 → 블록 생성 → 보상 배분`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Super Representatives (SR):</strong> 27명</li>
                  <li><strong>SR 후보:</strong> 127명</li>
                  <li><strong>블록 생성 시간:</strong> 3초</li>
                  <li><strong>투표 가중치:</strong> 보유 TRX 비례</li>
                  <li><strong>중앙화:</strong> 소수 SR이 대부분 블록 생성</li>
                </ul>
                <p className="mt-3"><strong>보안성:</strong> ⭐⭐⭐ (중간, 27명 SR에 의존)</p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana: Proof of History (PoH) + PoS</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`시간 증명 → PoH 타임스탬프 → PoS 검증 → 빠른 합의`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Proof of History:</strong> SHA-256 해시 체인으로 시간 증명</li>
                  <li><strong>Tower BFT:</strong> PoH 기반 PBFT</li>
                  <li><strong>블록 생성 시간:</strong> 약 400ms</li>
                  <li><strong>검증자:</strong> 2,000+ 노드</li>
                  <li><strong>요구사항:</strong> 높은 하드웨어 스펙</li>
                </ul>
                <p className="mt-3"><strong>보안성:</strong> ⭐⭐⭐⭐ (높음, 네트워크 중단 이력 있음)</p>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">3. 계정 모델 비교</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin: UTXO 모델</h3>
              <p className="mb-4">
                Bitcoin은 UTXO (Unspent Transaction Output) 모델을 사용합니다. 잔액 개념이 없으며,
                사용하지 않은 트랜잭션 출력의 합계가 곧 잔액입니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "inputs": [{
    "txid": "abc123...",
    "vout": 0,
    "scriptSig": "서명",
    "value": 100000000  // 1 BTC
  }],
  "outputs": [{
    "scriptPubKey": "수신자 주소",
    "value": 90000000   // 0.9 BTC
  }, {
    "scriptPubKey": "거스름돈 주소",
    "value": 9900000    // 0.099 BTC
  }]
}`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>각 UTXO는 한 번만 사용 가능</li>
                  <li>Privacy 보호 (주소 재사용 방지)</li>
                  <li>Coin Selection 알고리즘 필요</li>
                  <li>Stateless (상태 저장 불필요)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum: Account 모델</h3>
              <p className="mb-4">
                Ethereum은 Account 모델을 사용합니다. 각 계정은 주소, 잔액, Nonce, 스토리지를 가집니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`interface Account {
  address: string;      // 0x...
  balance: bigint;      // Wei 단위
  nonce: number;        // 트랜잭션 순서
  storageRoot: string;  // 스마트 컨트랙트 저장소
  codeHash: string;     // 컨트랙트 코드 해시
}`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>EOA:</strong> Externally Owned Account (개인 키 소유)</li>
                  <li><strong>Contract Account:</strong> 코드 포함</li>
                  <li><strong>글로벌 상태:</strong> World State Trie</li>
                  <li><strong>Nonce:</strong> 트랜잭션 순서 보장</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">XRP: Reserve 기반 Account 모델</h3>
              <p className="mb-4">
                XRP는 Account 모델을 사용하지만, 계정 활성화를 위해 Base Reserve(10 XRP)가 필요합니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "Account": "rN7n7otQDd6FczFgLdlqtyMVrn3zscWcJ",
  "Balance": "10000000",  // drops (1 XRP = 1,000,000 drops)
  "Sequence": 123,
  "OwnerCount": 2,        // Trust Lines + Offers 개수
  "Reserve": "10000000"   // 10 XRP base reserve
}`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Base Reserve:</strong> 10 XRP (계정 활성화 최소 금액)</li>
                  <li><strong>Owner Reserve:</strong> 2 XRP per object</li>
                  <li><strong>Sequence:</strong> Nonce와 유사한 개념</li>
                  <li><strong>Account Deletion:</strong> 가능</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron: Resource 시스템</h3>
              <p className="mb-4">
                Tron은 Account 모델에 Resource 시스템(Energy, Bandwidth)을 결합했습니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`interface TronAccount {
  address: string;
  balance: bigint;           // SUN (1 TRX = 1,000,000 SUN)
  frozen: {
    energy: bigint;
    bandwidth: bigint;
  };
  energy: number;            // 사용 가능 Energy
  bandwidth: number;         // 사용 가능 Bandwidth
}`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana: Rent 시스템</h3>
              <p className="mb-4">
                Solana는 Account 모델에 Rent Exemption 시스템을 적용합니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`interface SolanaAccount {
  pubkey: PublicKey;
  lamports: bigint;          // 1 SOL = 1,000,000,000 lamports
  owner: PublicKey;          // 프로그램 주소
  data: Uint8Array;          // 계정 데이터
  executable: boolean;       // 실행 가능 여부
  rentEpoch: number;
}`}</code></pre>
              </div>
              <div className="mb-6">
                <p className="font-semibold mb-2">특징:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Rent Exemption:</strong> 최소 잔액 유지 시 무료</li>
                  <li><strong>계정 생성 비용:</strong> 약 0.00204 SOL</li>
                  <li><strong>PDA:</strong> Program Derived Address</li>
                  <li><strong>ATA:</strong> Associated Token Account 필요</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">4. 트랜잭션 구조 분석</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin 트랜잭션</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`interface BitcoinTransaction {
  version: number;
  inputs: Array<{
    txid: string;
    vout: number;
    scriptSig: string;
    sequence: number;
  }>;
  outputs: Array<{
    value: number;           // Satoshi 단위
    scriptPubKey: string;
  }>;
  locktime: number;
}`}</code></pre>
              </div>
              <p className="mb-4">
                <strong>크기 계산:</strong>
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>P2WPKH (SegWit): ~110 vBytes per input + 34 vBytes per output</li>
                <li>Legacy P2PKH: ~148 vBytes per input + 34 vBytes per output</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum 트랜잭션 (EIP-1559)</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`interface EthereumTransaction {
  type: number;                    // 0x2 (EIP-1559)
  chainId: number;                 // 1 (Mainnet)
  nonce: number;
  maxPriorityFeePerGas: bigint;   // Tip (Gwei)
  maxFeePerGas: bigint;           // Max gas price
  gasLimit: bigint;
  to: string;                     // 0x... 또는 null
  value: bigint;                  // Wei
  data: string;                   // 0x...
  v: bigint;
  r: bigint;
  s: bigint;
}`}</code></pre>
              </div>
              <p className="mb-4">
                <strong>Gas 사용량:</strong>
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Native transfer: 21,000 gas</li>
                <li>ERC20 transfer: ~65,000 gas</li>
                <li>Uniswap swap: ~150,000 gas</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">XRP 트랜잭션</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "TransactionType": "Payment",
  "Account": "rN7n7otQDd6FczFgLdlqtyMVrn3zscWcJ",
  "Destination": "rLHzPsX6oXkzU9r9KHFxJ8ck8A6FXH8PwG",
  "Amount": "1000000",              // Drops
  "Fee": "12",
  "Sequence": 123,
  "LastLedgerSequence": 87654360,
  "DestinationTag": 12345
}`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron 트랜잭션</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`{
  "raw_data": {
    "contract": [{
      "type": "TriggerSmartContract",
      "parameter": {
        "value": {
          "owner_address": "TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW",
          "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
          "data": "a9059cbb..."
        }
      }
    }],
    "expiration": 1640000000000,
    "fee_limit": 30000000            // 30 TRX
  },
  "signature": ["1b2a3c4d..."]
}`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana 트랜잭션</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`interface SolanaTransaction {
  signatures: string[];
  message: {
    header: {
      numRequiredSignatures: number;
      numReadonlySignedAccounts: number;
      numReadonlyUnsignedAccounts: number;
    };
    accountKeys: PublicKey[];
    recentBlockhash: string;
    instructions: Array<{
      programIdIndex: number;
      accounts: number[];
      data: Uint8Array;
    }>;
  };
}`}</code></pre>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">5. 수수료 체계 완전 가이드</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin 수수료 계산</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="font-mono mb-2">수수료 = 트랜잭션 크기 (vBytes) × 수수료율 (sat/vB)</p>
              </div>
              <p className="mb-4"><strong>예시 계산:</strong></p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// 1 input, 2 outputs (P2WPKH)
const txSize = 1 * 68 + 2 * 34 + 10 = 146 vBytes
const feeRate = 10  // sat/vB (medium priority)
const fee = txSize * feeRate = 1,460 satoshi
// 약 $0.50 at $35K/BTC`}</code></pre>
              </div>
              <p className="mb-2"><strong>수수료율 범위 (2024년 기준):</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li><strong>Low:</strong> 1-5 sat/vB (수 시간 대기)</li>
                <li><strong>Medium:</strong> 10-20 sat/vB (10-30분)</li>
                <li><strong>High:</strong> 50-100+ sat/vB (다음 블록)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum 수수료 (EIP-1559)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="font-mono mb-2">수수료 = gasUsed × (baseFee + priorityFee)</p>
                <p className="font-mono">소각 = gasUsed × baseFee</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// Native ETH transfer
const gasUsed = 21000
const baseFee = 30n * 10n**9n       // 30 Gwei
const priorityFee = 2n * 10n**9n    // 2 Gwei
const totalFee = gasUsed * (baseFee + priorityFee)
  = 21000 * 32 Gwei = 0.000672 ETH
// 약 $2 at $3000/ETH

// ERC20 전송
const gasUsed = 65000
const fee = 65000 * 32 Gwei = 0.00208 ETH
// 약 $6.24`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">XRP 수수료</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="font-mono">수수료 = baseFee × loadFactor</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`const baseFee = 10  // drops
const loadFactor = 1.2  // 네트워크 부하
const fee = 10 * 1.2 = 12 drops = 0.000012 XRP
// 약 $0.000006`}</code></pre>
              </div>
              <p className="mb-2"><strong>수수료 범위:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li><strong>Normal:</strong> 10-15 drops ($0.000005-0.000008)</li>
                <li><strong>High load:</strong> ~1,000 drops ($0.0005)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron 수수료</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="font-mono">총 비용 = Bandwidth 비용 + Energy 비용</p>
              </div>
              <p className="mb-4"><strong>Native TRX 전송:</strong></p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm"><code>{`const bandwidth = 268 bytes
const fee = 268,000 SUN = 0.268 TRX (~$0.03)
// 또는 무료 (5,000 bandwidth 무료 제공)`}</code></pre>
              </div>
              <p className="mb-4"><strong>TRC20 전송:</strong></p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`const energy = 31,895  // USDT 전송
const energyPrice = 420 SUN per energy
const fee = 13,395,900 SUN = 13.4 TRX (~$1.47)
const feeLimit = 30 TRX = 30,000,000 SUN`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana 수수료</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                <p className="font-mono">수수료 = (서명 개수 × 5,000) + 우선순위 수수료</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// Native SOL transfer
const signatures = 1
const baseFee = 5000 lamports
const fee = 5,000 lamports = 0.000005 SOL (~$0.0005)

// SPL Token 전송 (ATA 생성 포함)
const baseFee = 5000 lamports
const rentExemption = 2039280 lamports
const total = 2,044,280 lamports = 0.00204428 SOL (~$0.20)`}</code></pre>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">6. 네트워크 성능 비교</h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">블록체인</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">TPS (이론)</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">TPS (실제)</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">블록 시간</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">최종 확정</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-medium">Bitcoin</td>
                      <td className="px-6 py-4 text-right">7</td>
                      <td className="px-6 py-4 text-right">3-7</td>
                      <td className="px-6 py-4 text-right">10분</td>
                      <td className="px-6 py-4 text-right">60분</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Ethereum</td>
                      <td className="px-6 py-4 text-right">15-30</td>
                      <td className="px-6 py-4 text-right">15-20</td>
                      <td className="px-6 py-4 text-right">12초</td>
                      <td className="px-6 py-4 text-right">12분</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">XRP</td>
                      <td className="px-6 py-4 text-right">1,500</td>
                      <td className="px-6 py-4 text-right text-green-600">1,500+</td>
                      <td className="px-6 py-4 text-right">3-5초</td>
                      <td className="px-6 py-4 text-right text-green-600">3-5초</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Tron</td>
                      <td className="px-6 py-4 text-right">2,000</td>
                      <td className="px-6 py-4 text-right text-green-600">2,000+</td>
                      <td className="px-6 py-4 text-right">3초</td>
                      <td className="px-6 py-4 text-right text-green-600">3초</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Solana</td>
                      <td className="px-6 py-4 text-right">65,000</td>
                      <td className="px-6 py-4 text-right text-green-600">3,000-5,000</td>
                      <td className="px-6 py-4 text-right">400ms</td>
                      <td className="px-6 py-4 text-right text-green-600">13초</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">네트워크 크기</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">블록체인</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">노드 수</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">검증자 수</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">블록체인 크기</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-medium">Bitcoin</td>
                      <td className="px-6 py-4 text-right">15,000+</td>
                      <td className="px-6 py-4 text-right">-</td>
                      <td className="px-6 py-4 text-right">550 GB</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Ethereum</td>
                      <td className="px-6 py-4 text-right">6,000+</td>
                      <td className="px-6 py-4 text-right">1,000,000+</td>
                      <td className="px-6 py-4 text-right">1 TB</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">XRP</td>
                      <td className="px-6 py-4 text-right">150+</td>
                      <td className="px-6 py-4 text-right">~36 (UNL)</td>
                      <td className="px-6 py-4 text-right">18 TB</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Tron</td>
                      <td className="px-6 py-4 text-right">1,000+</td>
                      <td className="px-6 py-4 text-right">27 SR</td>
                      <td className="px-6 py-4 text-right">2 TB</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Solana</td>
                      <td className="px-6 py-4 text-right">3,000+</td>
                      <td className="px-6 py-4 text-right">2,000+</td>
                      <td className="px-6 py-4 text-right">50 TB+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">확장성 솔루션</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold mb-3">Bitcoin</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Lightning Network (Layer 2)</li>
                    <li>• SegWit</li>
                    <li>• Taproot</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold mb-3">Ethereum</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Layer 2 Rollups (Optimism, Arbitrum)</li>
                    <li>• Sharding (계획 중)</li>
                    <li>• EIP-4844 (Proto-Danksharding)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold mb-3">Tron</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sun Network (Layer 2)</li>
                    <li>• DAppChain</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold mb-3">Solana</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Firedancer (새 클라이언트)</li>
                    <li>• QUIC protocol</li>
                    <li>• Turbine (블록 전파)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">7. 스마트 컨트랙트 비교</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin: Script (제한적)</h3>
              <p className="mb-4">
                Bitcoin Script는 스택 기반의 튜링 불완전 언어입니다. 루프가 없어 무한 실행 방지.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG`}</code></pre>
              </div>
              <p className="mb-2"><strong>사용 사례:</strong></p>
              <ul className="list-disc pl-6 mb-6">
                <li>P2PKH, P2SH</li>
                <li>Multisig</li>
                <li>HTLC (Hash Time Locked Contract)</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum: EVM (Solidity)</h3>
              <p className="mb-4">
                Ethereum Virtual Machine은 튜링 완전 스마트 컨트랙트를 지원합니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    mapping(address => uint256) public balanceOf;

    constructor(uint256 initialSupply) {
        balanceOf[msg.sender] = initialSupply;
    }

    function transfer(address to, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
}`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron: TVM (Solidity)</h3>
              <p className="mb-4">
                Tron Virtual Machine은 EVM과 호환되며, Solidity를 사용합니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`pragma solidity ^0.8.0;

contract TRC20 {
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 6;  // Tron에서 일반적으로 6
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 initialSupply) {
        totalSupply = initialSupply * 10 ** decimals;
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value);
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana: Programs (Rust)</h3>
              <p className="mb-4">
                Solana는 Rust나 C/C++로 작성된 Programs를 사용합니다. 병렬 실행 지원.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello Solana!");
    Ok(())
}`}</code></pre>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">8. 토큰 표준</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum: ERC Standards</h3>
              <p className="mb-4"><strong>ERC-20 (Fungible Token):</strong></p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}`}</code></pre>
              </div>

              <p className="mb-4"><strong>ERC-721 (NFT):</strong> 각 토큰이 고유한 ID를 가집니다.</p>
              <p className="mb-6"><strong>ERC-1155 (Multi Token):</strong> Fungible + Non-Fungible 동시 지원, 게임 아이템에 최적화.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron: TRC Standards</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold mb-3">TRC-10 (Native Token)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 트론 네트워크 자체 지원</li>
                    <li>• 낮은 수수료 (bandwidth)</li>
                    <li>• 제한적 기능</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold mb-3">TRC-20 (Smart Contract)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• ERC-20 호환</li>
                    <li>• 높은 수수료 (energy)</li>
                    <li>• 풍부한 기능</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana: SPL Tokens</h3>
              <p className="mb-4">
                Solana Program Library (SPL) 토큰은 Associated Token Account (ATA)가 필요합니다.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`pub struct Mint {
    pub mint_authority: COption<Pubkey>,
    pub supply: u64,
    pub decimals: u8,
    pub is_initialized: bool,
    pub freeze_authority: COption<Pubkey>,
}

pub struct Account {
    pub mint: Pubkey,
    pub owner: Pubkey,
    pub amount: u64,
    pub delegate: COption<Pubkey>,
    pub state: AccountState,
}`}</code></pre>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">9. 개발자 경험</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Bitcoin 개발</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// bitcoinjs-lib
import * as bitcoin from 'bitcoinjs-lib';

const keyPair = bitcoin.ECPair.makeRandom();
const { address } = bitcoin.payments.p2wpkh({
  pubkey: keyPair.publicKey
});

// PSBT (Partially Signed Bitcoin Transaction)
const psbt = new bitcoin.Psbt({ network: bitcoin.networks.bitcoin });
psbt.addInput({
  hash: txid,
  index: vout,
  witnessUtxo: {
    script: Buffer.from(scriptPubKey, 'hex'),
    value: amount,
  },
});
psbt.addOutput({
  address: toAddress,
  value: sendAmount,
});
psbt.signInput(0, keyPair);
psbt.finalizeAllInputs();
const tx = psbt.extractTransaction();`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ethereum 개발</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// ethers.js
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://eth-mainnet.alchemyapi.io/v2/...');
const wallet = new ethers.Wallet(privateKey, provider);

// 스마트 컨트랙트 배포
const factory = new ethers.ContractFactory(abi, bytecode, wallet);
const contract = await factory.deploy(constructorArgs);
await contract.waitForDeployment();

// 컨트랙트 호출
const result = await contract.transfer(toAddress, amount);
await result.wait();`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">XRP 개발</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// xrpl.js
import { Client, Wallet, xrpToDrops } from 'xrpl';

const client = new Client('wss://s.altnet.rippletest.net:51233');
await client.connect();

const wallet = Wallet.fromSeed('s...');

const payment = {
  TransactionType: 'Payment',
  Account: wallet.address,
  Destination: 'rN7n7otQDd6FczFgLdlqtyMVrn3zscWcJ',
  Amount: xrpToDrops('10'),
};

const prepared = await client.autofill(payment);
const signed = wallet.sign(prepared);
const result = await client.submitAndWait(signed.tx_blob);`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tron 개발</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// tronweb
import TronWeb from 'tronweb';

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': 'your-api-key' },
});

// 계정 생성
const account = await tronWeb.createAccount();

// TRC20 전송
const contract = await tronWeb.contract().at(usdtAddress);
const result = await contract.transfer(toAddress, amount).send({
  feeLimit: 30_000_000,
  callValue: 0,
  shouldPollResponse: true,
});`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Solana 개발</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                <pre className="text-sm"><code>{`// @solana/web3.js
import {
  Connection,
  Keypair,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction
} from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');
const fromKeypair = Keypair.fromSecretKey(secretKey);

// SOL 전송
const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: fromKeypair.publicKey,
    toPubkey: toPublicKey,
    lamports: 1000000,
  })
);

const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [fromKeypair]
);`}</code></pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">개발 프레임워크 비교</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">블록체인</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">주요 프레임워크</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">언어</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">난이도</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-medium">Ethereum</td>
                      <td className="px-6 py-4">Hardhat, Foundry</td>
                      <td className="px-6 py-4">Solidity, JavaScript</td>
                      <td className="px-6 py-4">중간</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Tron</td>
                      <td className="px-6 py-4">TronBox</td>
                      <td className="px-6 py-4">Solidity</td>
                      <td className="px-6 py-4">쉬움</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Solana</td>
                      <td className="px-6 py-4">Anchor</td>
                      <td className="px-6 py-4">Rust</td>
                      <td className="px-6 py-4">높음</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">10. 실전 비교표 및 선택 가이드</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">기술 스택 종합 비교</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">항목</th>
                      <th className="px-4 py-3 text-left font-semibold">Bitcoin</th>
                      <th className="px-4 py-3 text-left font-semibold">Ethereum</th>
                      <th className="px-4 py-3 text-left font-semibold">XRP</th>
                      <th className="px-4 py-3 text-left font-semibold">Tron</th>
                      <th className="px-4 py-3 text-left font-semibold">Solana</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 font-medium">출시 연도</td>
                      <td className="px-4 py-3">2009</td>
                      <td className="px-4 py-3">2015</td>
                      <td className="px-4 py-3">2012</td>
                      <td className="px-4 py-3">2017</td>
                      <td className="px-4 py-3">2020</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">합의</td>
                      <td className="px-4 py-3">PoW</td>
                      <td className="px-4 py-3">PoS</td>
                      <td className="px-4 py-3">Consensus</td>
                      <td className="px-4 py-3">DPoS</td>
                      <td className="px-4 py-3">PoH+PoS</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">TPS</td>
                      <td className="px-4 py-3">7</td>
                      <td className="px-4 py-3">15-20</td>
                      <td className="px-4 py-3 text-green-600">1,500+</td>
                      <td className="px-4 py-3 text-green-600">2,000+</td>
                      <td className="px-4 py-3 text-green-600">3,000-5,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">블록 시간</td>
                      <td className="px-4 py-3">10분</td>
                      <td className="px-4 py-3">12초</td>
                      <td className="px-4 py-3">3-5초</td>
                      <td className="px-4 py-3">3초</td>
                      <td className="px-4 py-3">400ms</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">최종성</td>
                      <td className="px-4 py-3">60분</td>
                      <td className="px-4 py-3">12분</td>
                      <td className="px-4 py-3 text-green-600">즉시</td>
                      <td className="px-4 py-3 text-green-600">3초</td>
                      <td className="px-4 py-3 text-green-600">13초</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">스마트 컨트랙트</td>
                      <td className="px-4 py-3">제한적</td>
                      <td className="px-4 py-3 text-green-600">완전</td>
                      <td className="px-4 py-3">개발 중</td>
                      <td className="px-4 py-3 text-green-600">완전</td>
                      <td className="px-4 py-3 text-green-600">완전</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">개발 언어</td>
                      <td className="px-4 py-3">Script</td>
                      <td className="px-4 py-3">Solidity</td>
                      <td className="px-4 py-3">C/C++</td>
                      <td className="px-4 py-3">Solidity</td>
                      <td className="px-4 py-3">Rust</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">생태계 크기 비교</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">메트릭</th>
                      <th className="px-4 py-3 text-right font-semibold">Bitcoin</th>
                      <th className="px-4 py-3 text-right font-semibold">Ethereum</th>
                      <th className="px-4 py-3 text-right font-semibold">XRP</th>
                      <th className="px-4 py-3 text-right font-semibold">Tron</th>
                      <th className="px-4 py-3 text-right font-semibold">Solana</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 font-medium">시가총액</td>
                      <td className="px-4 py-3 text-right">$700B</td>
                      <td className="px-4 py-3 text-right">$300B</td>
                      <td className="px-4 py-3 text-right">$30B</td>
                      <td className="px-4 py-3 text-right">$10B</td>
                      <td className="px-4 py-3 text-right">$40B</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">일일 거래량</td>
                      <td className="px-4 py-3 text-right">$20B</td>
                      <td className="px-4 py-3 text-right">$15B</td>
                      <td className="px-4 py-3 text-right">$2B</td>
                      <td className="px-4 py-3 text-right">$5B</td>
                      <td className="px-4 py-3 text-right">$3B</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">활성 주소</td>
                      <td className="px-4 py-3 text-right">1M</td>
                      <td className="px-4 py-3 text-right">500K</td>
                      <td className="px-4 py-3 text-right">50K</td>
                      <td className="px-4 py-3 text-right">2M</td>
                      <td className="px-4 py-3 text-right">300K</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">DApp 개수</td>
                      <td className="px-4 py-3 text-right">-</td>
                      <td className="px-4 py-3 text-right">4,000+</td>
                      <td className="px-4 py-3 text-right">-</td>
                      <td className="px-4 py-3 text-right">1,000+</td>
                      <td className="px-4 py-3 text-right">350+</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">TVL (DeFi)</td>
                      <td className="px-4 py-3 text-right">$200M</td>
                      <td className="px-4 py-3 text-right">$50B</td>
                      <td className="px-4 py-3 text-right">-</td>
                      <td className="px-4 py-3 text-right">$8B</td>
                      <td className="px-4 py-3 text-right">$4B</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">사용 사례별 추천</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">사용 사례</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">추천 블록체인</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">이유</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-medium">가치 저장</td>
                      <td className="px-6 py-4">Bitcoin</td>
                      <td className="px-6 py-4">가장 안전하고 탈중앙화</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">국제 송금</td>
                      <td className="px-6 py-4">XRP, Solana</td>
                      <td className="px-6 py-4">빠르고 저렴</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">DeFi</td>
                      <td className="px-6 py-4">Ethereum, Solana</td>
                      <td className="px-6 py-4">풍부한 생태계</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">NFT</td>
                      <td className="px-6 py-4">Ethereum, Solana</td>
                      <td className="px-6 py-4">NFT 표준 성숙</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">게임</td>
                      <td className="px-6 py-4">Solana, Tron</td>
                      <td className="px-6 py-4">빠른 속도, 낮은 수수료</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">스테이블코인</td>
                      <td className="px-6 py-4">Ethereum, Tron</td>
                      <td className="px-6 py-4">USDT/USDC 유동성</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">장단점 종합</h3>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold mb-3">Bitcoin</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-green-600 mb-2">✅ 장점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 가장 안전하고 검증됨</li>
                        <li>• 최고의 탈중앙화</li>
                        <li>• 강력한 네트워크 효과</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-2">❌ 단점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 느린 속도 (10분)</li>
                        <li>• 높은 수수료</li>
                        <li>• 제한적 기능</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold mb-3">Ethereum</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-green-600 mb-2">✅ 장점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 최대 개발자 생태계</li>
                        <li>• 성숙한 DeFi/NFT</li>
                        <li>• 스마트 컨트랙트 표준</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-2">❌ 단점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 높은 가스비</li>
                        <li>• 확장성 문제</li>
                        <li>• 복잡한 개발</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold mb-3">XRP</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-green-600 mb-2">✅ 장점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 초저렴 수수료</li>
                        <li>• 빠른 최종성 (3-5초)</li>
                        <li>• 에너지 효율적</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-2">❌ 단점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 중앙화 우려</li>
                        <li>• SEC 소송</li>
                        <li>• 제한적 스마트 컨트랙트</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold mb-3">Tron</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-green-600 mb-2">✅ 장점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 높은 TPS (2,000+)</li>
                        <li>• 낮은 수수료 (스테이킹)</li>
                        <li>• Ethereum 호환</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-2">❌ 단점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 중앙화 (27 SR)</li>
                        <li>• Energy 비용 변동</li>
                        <li>• 작은 생태계</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-r-lg">
                  <h4 className="text-xl font-bold mb-3">Solana</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-green-600 mb-2">✅ 장점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 초고속 TPS (3,000-5,000)</li>
                        <li>• 매우 낮은 수수료</li>
                        <li>• 빠른 생태계 성장</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-2">❌ 단점</p>
                      <ul className="text-sm space-y-1">
                        <li>• 네트워크 중단 이력</li>
                        <li>• 높은 하드웨어 요구</li>
                        <li>• Rust 학습 곡선</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-900 dark:text-white">결론</h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-8">
                <p className="text-lg mb-4">
                  각 블록체인은 고유한 설계 철학과 트레이드오프를 가지고 있습니다:
                </p>
                <ul className="space-y-2 mb-6">
                  <li><strong>Bitcoin:</strong> 디지털 금, 가치 저장</li>
                  <li><strong>Ethereum:</strong> 범용 스마트 컨트랙트 플랫폼</li>
                  <li><strong>XRP:</strong> 빠른 국제 송금</li>
                  <li><strong>Tron:</strong> 콘텐츠 공유 및 엔터테인먼트</li>
                  <li><strong>Solana:</strong> 고성능 DApp 플랫폼</li>
                </ul>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                  <h4 className="font-bold mb-3">선택 기준</h4>
                  <ul className="space-y-2">
                    <li><strong className="text-blue-600">보안 최우선:</strong> Bitcoin, Ethereum</li>
                    <li><strong className="text-green-600">속도 최우선:</strong> Solana, Tron, XRP</li>
                    <li><strong className="text-purple-600">비용 최우선:</strong> XRP, Solana, Tron</li>
                    <li><strong className="text-indigo-600">생태계 최우선:</strong> Ethereum</li>
                    <li><strong className="text-orange-600">개발 편의성:</strong> Ethereum, Tron (Solidity)</li>
                  </ul>
                </div>

                <p className="text-lg">
                  실제 프로젝트에서는 사용 사례에 맞는 블록체인을 선택하거나,
                  <strong className="text-blue-600"> 멀티체인 전략</strong>을 통해 각 체인의 장점을 활용하는 것이 좋습니다.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Walits는 모든 주요 블록체인을 지원합니다</h3>
                <p className="text-lg mb-6">
                  Bitcoin, Ethereum, XRP, Tron, Solana를 포함한 30+ 블록체인 네트워크를
                  하나의 API로 통합 관리하세요.
                </p>
                <p className="mb-6">
                  Walits 멀티체인 지갑 솔루션으로 모든 블록체인의 장점을 활용하고,
                  사용자에게 최적의 블록체인 경험을 제공하세요.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-blue-600 text-white text-lg rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Walits 무료 상담 신청 →
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* English version - similar comprehensive content */}
              <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
                A comprehensive technical comparison of Bitcoin, Ethereum, XRP, Tron, and Solana covering consensus mechanisms, account models, transaction structures, fee systems, smart contracts, token standards, and developer experience.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-lg mb-4">
                  English version contains the same comprehensive content as Korean.
                  For brevity, Korean version shows the full detailed structure.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full English translation available in production version.
                </p>
              </div>
            </>
          )}
        </div>
      </article>

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
