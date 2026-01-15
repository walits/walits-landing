'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EnterpriseCryptoWalletGuidePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      category: '기업용 지갑',
      title: '2026년 기업용 암호화폐 지갑 선택 완벽 가이드',
      date: '2026년 1월 11일',
      readTime: '8분 읽기',
    },
    en: {
      breadcrumb: 'Blog',
      category: 'Enterprise Wallet',
      title: 'Complete Guide to Choosing Enterprise Crypto Wallets in 2026',
      date: 'January 11, 2026',
      readTime: '8 min read',
    },
  }[language];

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <Link href="/blog/" className="hover:underline">{copy.breadcrumb}</Link> / {copy.category}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded ${language === 'ko' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>한</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>EN</button>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>{copy.date}</time>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/enterprise-wallet.jpg"
            alt={language === 'ko' ? '기업용 암호화폐 지갑 가이드' : 'Enterprise Crypto Wallet Guide'}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                암호화폐를 다루는 기업이라면 반드시 지갑 솔루션이 필요합니다. 하지만 게임사, 거래소, 토큰 발행사마다
                필요한 지갑이 다릅니다. 이 가이드에서 기업용 암호화폐 지갑 선택의 모든 것을 알려드립니다.
              </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">1. 기업용 지갑이 필요한 이유</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">개인 지갑 vs 기업용 지갑</h3>
          <p>
            메타마스크 같은 개인 지갑으로는 기업 운영이 불가능합니다:
          </p>
          <ul>
            <li><strong>대량 처리 불가</strong>: 수백 명에게 동시 지급 어려움</li>
            <li><strong>보안 취약</strong>: 단일 개인키로 모든 자산 관리 위험</li>
            <li><strong>감사 불가</strong>: 누가 언제 무엇을 했는지 추적 어려움</li>
            <li><strong>API 없음</strong>: 자동화 불가능, 수동 작업 필요</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">2. 기업용 지갑 종류</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Non-Custody 지갑: 대량 지급용</h3>
          <p>
            <strong>언제 사용?</strong> 게임 보상, NFT 에어드랍, ICO 토큰 발행 등 대량 지급이 필요할 때
          </p>
          <ul>
            <li>계정별로 독립된 지갑 자동 생성</li>
            <li>API로 수천 건 동시 처리</li>
            <li>집금 없이 운영 (규제 리스크 최소화)</li>
            <li>TEE 환경에서 안전한 대량 트랜잭션</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <p className="text-lg font-semibold mb-2">Non-Custody 지갑이 적합한 비즈니스</p>
            <p className="mb-4">다음과 같은 사업 모델을 운영하고 계신다면 Non-Custody 지갑이 가장 효과적인 솔루션이 될 것입니다. 대량의 토큰 배포와 실시간 보상 지급이 핵심 요구사항인 경우 특히 유용합니다.</p>
            <ul className="mb-0 space-y-2">
              <li>게임사의 경우 플레이어들에게 실시간으로 게임 내 보상을 지급해야 하는데, Non-Custody 지갑을 활용하면 수천 명의 유저에게 동시에 보상을 분배할 수 있습니다.</li>
              <li>NFT 프로젝트를 진행하시는 경우 대규모 에어드랍 캠페인을 진행할 때 각 참여자에게 자동으로 지갑을 생성하고 토큰을 배포하는 과정이 필요합니다.</li>
              <li>ICO나 토큰 발행 프로젝트에서는 투자자별로 독립된 지갑을 자동 생성하고 토큰을 배분하는 시스템이 반드시 필요합니다.</li>
              <li>메타버스 플랫폼 운영자라면 사용자 활동에 따른 리워드를 즉시 지급할 수 있는 유연한 시스템이 필요할 것입니다.</li>
              <li>커뮤니티 플랫폼에서 양질의 콘텐츠를 작성하거나 기여한 멤버들에게 토큰 보상을 지급하려는 경우 자동화된 배포 시스템이 효율적입니다.</li>
              <li>이커머스나 O2O 서비스를 운영하신다면 멤버십 포인트를 토큰 형태로 관리하여 투명성을 높이고 사용자 참여를 유도할 수 있습니다.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Custody 지갑: 자산 보관용</h3>
          <p>
            <strong>언제 사용?</strong> 고객 자산 집금, 운영 자금 관리, 기업 재무 등 안전한 보관이 필요할 때
          </p>
          <ul>
            <li>MPC 2-of-3로 단일 실패점 제거</li>
            <li>다중 승인 워크플로우 (CEO, CFO 승인)</li>
            <li>정책 기반 거버넌스 (금액별 승인 규칙)</li>
            <li>완벽한 감사 추적 (모든 거래 이력 기록)</li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border-l-4 border-purple-500">
            <p className="text-lg font-semibold mb-2">Custody 지갑이 필요한 기업</p>
            <p className="mb-4">고객 자산을 직접 보관하거나 대규모 운영 자금을 관리해야 하는 기업에게는 Custody 지갑의 강력한 보안 체계가 필수적입니다. 다음과 같은 비즈니스 모델에서 특히 중요한 역할을 합니다.</p>
            <ul className="mb-0 space-y-2">
              <li>암호화폐 거래소를 운영하시는 경우 수천억 원에 달하는 고객 자산을 안전하게 보관하고 관리해야 하는 책임이 있으며, 이를 위해 MPC 기반의 다중 승인 시스템이 반드시 필요합니다.</li>
              <li>커스터디 서비스 제공업체라면 제3자의 자산을 수탁 관리하는 만큼 더욱 엄격한 보안 기준과 내부 통제 프로세스가 요구됩니다.</li>
              <li>토큰 발행사의 경우 프로젝트 운영 자금이나 토큰 재무 관리를 위해 안전한 보관 솔루션이 필요하며, 특히 대규모 자금 이동 시 다중 승인 워크플로우가 중요합니다.</li>
              <li>기관 투자자들은 대량의 암호화폐 자산을 장기 보유하면서도 언제든 안전하게 인출할 수 있는 시스템을 원하며, 이때 MPC 2-of-3 구조가 이상적입니다.</li>
              <li>여러 블록체인에 걸쳐 자산을 보유한 기업이라면 모든 체인의 자산을 하나의 통합된 Custody 시스템에서 관리하면 재무 관리 효율성이 크게 향상됩니다.</li>
              <li>자산관리사나 회계법인에서 고객의 암호화폐 자산을 관리하는 경우 세무 처리와 회계 감사를 위한 완벽한 거래 기록과 추적 시스템이 필수적입니다.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">3. 실제 사용 사례</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">케이스 1: 게임사 A</h3>
          <p>
            <strong>문제:</strong> 매일 10만 명의 플레이어에게 보상 지급<br/>
            <strong>솔루션:</strong> Non-Custody API로 자동화<br/>
            <strong>결과:</strong> 수동 작업 제로화, 지급 시간 1시간 → 5분
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">케이스 2: 거래소 B</h3>
          <p>
            <strong>문제:</strong> 고객 자산 100억 원 안전 보관 필요<br/>
            <strong>솔루션:</strong> MPC 2-of-3 Custody 지갑<br/>
            <strong>결과:</strong> 단일 실패점 제거, 내부 통제 강화
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">케이스 3: ICO 프로젝트 C</h3>
          <p>
            <strong>문제:</strong> 5만 명 투자자에게 커스텀 토큰 배포<br/>
            <strong>솔루션:</strong> Non-Custody ICO 지원 (자동 지갑 생성)<br/>
            <strong>결과:</strong> 투자자별 지갑 자동 생성, 토큰 배포 자동화
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">4. Walits 솔루션</h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Non-Custody Wallet</h3>
            <ul className="mb-4 space-y-2">
              <li>월 이용료는 99,000원이며, 처음 한 달은 무료로 모든 기능을 체험하실 수 있습니다.</li>
              <li>트랜잭션 처리에는 횟수 제한이 전혀 없어서, 대량 처리가 필요한 상황에서도 추가 비용 걱정 없이 사용하실 수 있습니다.</li>
              <li>ICO나 커스텀 토큰 발행을 계획하고 계신다면 완벽하게 지원되는 시스템을 갖추고 있습니다.</li>
              <li>TEE(Trusted Execution Environment) 환경에서 모든 개인키가 안전하게 관리되어 외부 접근으로부터 완전히 차단됩니다.</li>
            </ul>
            <Link href="/non-custody-wallet" className="text-blue-600 hover:underline font-semibold">
              자세히 보기 →
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet</h3>
            <ul className="mb-4 space-y-2">
              <li>월 이용료는 550,000원이며, 처음 한 달은 무료로 전체 시스템을 테스트해보실 수 있습니다.</li>
              <li>MPC 2-of-3 보안 방식을 채택하여 단일 실패점을 완전히 제거하고, 3개의 키 조각 중 2개만 있으면 서명이 가능한 구조로 설계되었습니다.</li>
              <li>다중 승인 워크플로우를 통해 금액별로 서로 다른 승인 규칙을 설정할 수 있어, CEO와 CFO의 승인이 모두 필요한 경우에도 유연하게 대응 가능합니다.</li>
              <li>전담 계정 매니저가 배정되어 기술 지원부터 운영 컨설팅까지 모든 과정을 함께 진행해드립니다.</li>
            </ul>
            <Link href="/custody-wallet" className="text-purple-600 hover:underline font-semibold">
              자세히 보기 →
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">결론</h2>
          <p>
            기업용 암호화폐 지갑은 용도에 따라 선택해야 합니다:
          </p>
          <ul>
            <li><strong>고객 포인트 지급을 코인으로 하고 싶다면:</strong> Non-Custody 지갑</li>
            <li><strong>기업 자산을 안전하게 보관 관리 해야 한다면:</strong> Custody 지갑</li>
            <li><strong>둘 다 필요하다면:</strong> 두 가지 모두 사용</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">무료 상담 신청하기</h3>
            <p className="mb-6">
              귀사에 맞는 최적의 지갑 솔루션을 제안해드립니다.
            </p>
            <Link
              href="/inquiry"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              지금 상담 신청
            </Link>
          </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                If your company deals with cryptocurrency, you need a wallet solution. However, gaming companies, exchanges, and token issuers each require different types of wallets. This guide covers everything you need to know about choosing enterprise crypto wallets.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">1. Why Enterprise Wallets Are Necessary</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Personal Wallets vs Enterprise Wallets</h3>
              <p>
                Personal wallets like MetaMask cannot support enterprise operations:
              </p>
              <ul>
                <li><strong>No Bulk Processing</strong>: Difficult to pay hundreds of people simultaneously</li>
                <li><strong>Security Vulnerabilities</strong>: Risk of managing all assets with a single private key</li>
                <li><strong>No Audit Trail</strong>: Difficult to track who did what and when</li>
                <li><strong>No API</strong>: Automation impossible, manual work required</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">2. Types of Enterprise Wallets</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Non-Custody Wallet: For Mass Distribution</h3>
              <p>
                <strong>When to use?</strong> When you need mass distribution such as game rewards, NFT airdrops, or ICO token issuance
              </p>
              <ul>
                <li>Automatic wallet creation for each account</li>
                <li>Handle thousands of transactions simultaneously via API</li>
                <li>Operate without custody (minimize regulatory risk)</li>
                <li>Secure bulk transactions in TEE environment</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <p className="text-lg font-semibold mb-2">Businesses Suited for Non-Custody Wallets</p>
                <p className="mb-4">If you operate the following business models, a Non-Custody wallet will be the most effective solution. It's particularly useful when mass token distribution and real-time reward payments are core requirements.</p>
                <ul className="mb-0 space-y-2">
                  <li>Game companies need to distribute in-game rewards to players in real-time, and with Non-Custody wallets, you can distribute rewards to thousands of users simultaneously.</li>
                  <li>For NFT projects, when running large-scale airdrop campaigns, you need a system to automatically create wallets for each participant and distribute tokens.</li>
                  <li>For ICO or token issuance projects, a system to automatically generate independent wallets for each investor and distribute tokens is essential.</li>
                  <li>Metaverse platform operators need flexible systems to instantly distribute rewards based on user activities.</li>
                  <li>For community platforms, an automated distribution system is efficient when rewarding members who create quality content or contribute.</li>
                  <li>If you operate e-commerce or O2O services, you can manage membership points in token form to increase transparency and encourage user participation.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Custody Wallet: For Asset Storage</h3>
              <p>
                <strong>When to use?</strong> When secure storage is needed such as customer asset custody, operational fund management, or corporate treasury
              </p>
              <ul>
                <li>Eliminate single point of failure with MPC 2-of-3</li>
                <li>Multi-approval workflow (CEO, CFO approval)</li>
                <li>Policy-based governance (approval rules by amount)</li>
                <li>Complete audit trail (record of all transaction history)</li>
              </ul>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border-l-4 border-purple-500">
                <p className="text-lg font-semibold mb-2">Companies That Need Custody Wallets</p>
                <p className="mb-4">For companies that directly store customer assets or manage large-scale operational funds, the robust security framework of Custody wallets is essential. It plays a particularly important role in the following business models.</p>
                <ul className="mb-0 space-y-2">
                  <li>If you operate a cryptocurrency exchange, you have the responsibility to safely store and manage customer assets worth hundreds of billions of won, and for this, an MPC-based multi-approval system is essential.</li>
                  <li>For custody service providers, since you manage third-party assets under trust, even stricter security standards and internal control processes are required.</li>
                  <li>Token issuers need secure storage solutions for project operational funds or token treasury management, and multi-approval workflows are particularly important for large fund transfers.</li>
                  <li>Institutional investors want systems that can safely withdraw assets at any time while holding large amounts of cryptocurrency long-term, and the MPC 2-of-3 structure is ideal.</li>
                  <li>Companies with assets across multiple blockchains can significantly improve financial management efficiency by managing all chain assets in one integrated Custody system.</li>
                  <li>For asset management firms or accounting firms managing clients' cryptocurrency assets, a complete transaction record and tracking system is essential for tax processing and accounting audits.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">3. Real Use Cases</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Case 1: Game Company A</h3>
              <p>
                <strong>Problem:</strong> Distribute rewards to 100,000 players daily<br/>
                <strong>Solution:</strong> Automated with Non-Custody API<br/>
                <strong>Result:</strong> Zero manual work, payment time reduced from 1 hour to 5 minutes
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Case 2: Exchange B</h3>
              <p>
                <strong>Problem:</strong> Secure storage of 10 billion won in customer assets<br/>
                <strong>Solution:</strong> MPC 2-of-3 Custody wallet<br/>
                <strong>Result:</strong> Eliminated single point of failure, strengthened internal controls
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Case 3: ICO Project C</h3>
              <p>
                <strong>Problem:</strong> Distribute custom tokens to 50,000 investors<br/>
                <strong>Solution:</strong> Non-Custody ICO support (automatic wallet creation)<br/>
                <strong>Result:</strong> Automatic wallet creation per investor, automated token distribution
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">4. Walits Solutions</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Non-Custody Wallet</h3>
                <ul className="mb-4 space-y-2">
                  <li>Monthly fee is 99,000 won, with the first month free to experience all features.</li>
                  <li>No limit on transaction processing, so you can use it without worrying about additional costs even when bulk processing is needed.</li>
                  <li>Perfect support for ICO or custom token issuance if you're planning one.</li>
                  <li>All private keys are securely managed in a TEE (Trusted Execution Environment), completely isolated from external access.</li>
                </ul>
                <Link href="/non-custody-wallet" className="text-blue-600 hover:underline font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet</h3>
                <ul className="mb-4 space-y-2">
                  <li>Monthly fee is 550,000 won, with the first month free to test the entire system.</li>
                  <li>Adopts MPC 2-of-3 security method to completely eliminate single point of failure, designed so that signing is possible with just 2 out of 3 key shares.</li>
                  <li>Through multi-approval workflow, you can set different approval rules by amount, flexibly responding even when both CEO and CFO approval is required.</li>
                  <li>A dedicated account manager is assigned to support everything from technical support to operational consulting.</li>
                </ul>
                <Link href="/custody-wallet" className="text-purple-600 hover:underline font-semibold">
                  Learn More →
                </Link>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Conclusion</h2>
              <p>
                Choose enterprise crypto wallets based on your use case:
              </p>
              <ul>
                <li><strong>If you want to distribute customer points as coins:</strong> Non-Custody wallet</li>
                <li><strong>If you need to safely store and manage corporate assets:</strong> Custody wallet</li>
                <li><strong>If you need both:</strong> Use both</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Request a Free Consultation</h3>
                <p className="mb-6">
                  We'll suggest the optimal wallet solution for your company.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Consultation Now
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
            <Link href="/blog/non-custody-vs-custody-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? 'Non-Custody vs Custody 완벽 비교' : 'Complete Comparison: Non-Custody vs Custody'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '두 지갑의 차이점을 한눈에' : 'Differences between two wallets at a glance'}
              </p>
            </Link>
            <Link href="/blog/ico-token-issuance-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? 'ICO 프로젝트를 위한 지갑' : 'Wallets for ICO Projects'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '토큰 발행에 최적화된 솔루션' : 'Solutions optimized for token issuance'}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
