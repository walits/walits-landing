'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CryptoBotTradingPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          ← 블로그 목록
        </Link>
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {(['ko', 'en'] as const).map((l) => (
            <button key={l} onClick={() => setLanguage(l)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === l ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>
              {l === 'ko' ? '한국어' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
          <Image src="/blog/hustle.jpg" alt="Crypto Bot Trading" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-green-600/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 6</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 6 — 크립토 봇 트레이딩 실전 가이드</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">펀딩비 차익 · 청산봇 · CEX-DEX 차익 · 실제 코드로 만드는 쌀먹 봇</p>

            {/* 경고 */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-2">시작 전 반드시 읽기</p>
              <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
                이 글의 코드는 교육 목적입니다. 실제 운용 시 버그 하나로 전 자산을 잃을 수 있습니다. 반드시 <strong>소액으로 테스트넷 → 메인넷 소액 → 점진적 확장</strong> 순서로 진행하세요. 레버리지 포지션은 청산 위험이 있습니다.
              </p>
            </div>

            {/* ── S1 들어가기 전에 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · 기관 vs 개인 — 무엇이 가능한가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              크립토 봇 시장은 냉혹하다. 이더리움 메인넷 DEX 차익은 Jump Crypto, Tower Research 같은 기관이 검증자와 직접 연결해 블록 단위로 선점한다. 여기서 개인이 경쟁하면 가스비만 날린다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              하지만 기관이 <strong>신경 쓰기엔 너무 작고, 너무 새롭고, 너무 복잡한</strong> 틈새는 여전히 있다. 이 세 가지 전략이 그 틈새다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  level: '난이도 하',
                  levelColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  title: '펀딩비 차익봇',
                  capital: '최소 $1,000',
                  return: '연 15~50%',
                  stack: 'Python + ccxt',
                  time: '1~2주',
                  border: 'border-green-200 dark:border-green-800',
                },
                {
                  level: '난이도 중',
                  levelColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  title: '신규 체인 청산봇',
                  capital: '플래시론 → $0',
                  return: '건당 $50~$5,000',
                  stack: 'TypeScript + ethers.js',
                  time: '2~4주',
                  border: 'border-yellow-200 dark:border-yellow-800',
                },
                {
                  level: '난이도 상',
                  levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  title: 'CEX-DEX 차익봇',
                  capital: '최소 $10,000',
                  return: '월 1~5% (잘 될 때)',
                  stack: 'Python + Web3',
                  time: '4~8주',
                  border: 'border-red-200 dark:border-red-800',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.border}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.levelColor}`}>{card.level}</span>
                  <p className="text-sm font-bold mt-2 mb-3 text-gray-900 dark:text-white">{card.title}</p>
                  <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                    <p>필요 자본: <span className="text-gray-800 dark:text-gray-200 font-medium">{card.capital}</span></p>
                    <p>기대 수익: <span className="text-gray-800 dark:text-gray-200 font-medium">{card.return}</span></p>
                    <p>기술 스택: <span className="font-mono text-gray-800 dark:text-gray-200">{card.stack}</span></p>
                    <p>개발 기간: <span className="text-gray-800 dark:text-gray-200 font-medium">{card.time}</span></p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── 하지 말아야 할 것들 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · 먼저 — 하면 안 되는 것들 (플래시론·MEV·청산봇)</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              인터넷에서 "DeFi 무자본 수익"을 검색하면 플래시론·MEV 샌드위치·온체인 청산봇이 항상 나온다. 솔직히 말한다. <strong>2025년 기준 이것들은 개인이 진입하기 거의 불가능하다.</strong>
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '플래시론 아비트러지',
                  badge: '사실상 불가',
                  badgeColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  why: '같은 블록 내에서 빌리고·차익 거래하고·갚는 구조. 이론적으로 무자본이지만, 현실은 다르다.',
                  reality: [
                    '이더리움 메인넷 DEX 차익은 Jump·Wintermute 같은 전문 MEV 팀이 Flashbots 번들로 블록 단위 선점',
                    '봇이 기회를 발견해도 내 트랜잭션보다 빠른 번들이 이미 같은 블록에 들어가 있음',
                    '가스 경쟁(Priority Fee)으로 수익보다 가스비가 더 나오는 구조',
                    'Solidity 플래시론 컨트랙트 직접 작성 필수 — 버그 하나로 원금 손실',
                  ],
                },
                {
                  title: 'MEV 샌드위치 어택 / 프론트러닝',
                  badge: '수익 급감 + 윤리 문제',
                  badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  why: '타인의 트랜잭션 앞뒤로 끼어들어 차익을 뽑는 전략. 기술적 장벽뿐 아니라 심각한 문제가 있다.',
                  reality: [
                    'Flashbots Protect, MEV Blocker, 1inch Fusion 등 MEV 방어 도구 보급으로 대상 트랜잭션이 급감',
                    'Uniswap v4 훅, CoW Protocol 등 MEV 방어 프로토콜이 표준화되는 추세',
                    '탐지 시 블랙리스트, 커뮤니티 척결 대상 — 장기적으로 지속 불가',
                    '전문 MEV 팀도 수익 감소로 전략 전환 중인 상황',
                  ],
                },
                {
                  title: '이더리움 메인넷 청산봇',
                  badge: '레드오션 완료',
                  badgeColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  why: 'Aave·Compound 이더리움 메인넷 청산은 이미 전문 봇들이 독점한 지 오래다.',
                  reality: [
                    '같은 청산 기회에 수십~수백 개 봇이 동시에 트랜잭션 전송 → 가스 경매 발생',
                    '청산 보너스($72)를 가스비($50~$200)가 초과하는 경우가 대부분',
                    '검증자와 직접 연결된 봇은 멤풀조차 건너뛰고 블록에 넣음 — 일반 봇은 경쟁 불가',
                    '간혹 수익이 난다 해도 운이 좋은 것. 안정적인 수입원으로 기대하면 안 됨',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="border border-red-200 dark:border-red-800 rounded-xl overflow-hidden">
                  <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{item.why}</p>
                    <ul className="space-y-1.5">
                      {item.reality.map((r, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-white mb-3">그럼 뭘 하라는 건가?</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                개인이 이길 수 있는 곳은 <strong className="text-yellow-400">기관이 아직 안 들어온 틈새</strong>뿐이다. 신규 체인의 작은 청산봇(Arbitrum·Base의 신생 프로토콜), 펀딩비 차익(CEX API 기반, 온체인 아님), 알트코인 고펀딩 시기의 델타 중립 — 이게 현실적으로 개인이 해볼 수 있는 전부다.
              </p>
            </div>

            {/* ── S3 펀딩비 차익봇 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · 펀딩비 차익봇 — 가장 현실적인 선택</h2>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">펀딩비(Funding Rate)란?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              무기한 선물(Perpetual Futures)은 만기가 없다. 그러면 선물 가격이 현물 가격에서 영원히 이탈할 수 있다. 이를 방지하기 위해 거래소는 <strong>8시간마다 펀딩비</strong>를 주고받는다. 시장이 강세일 때 롱 포지션 보유자가 숏 포지션 보유자에게 수수료를 낸다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-sm">
              <p className="text-green-400 mb-2">{'// 펀딩비 예시 (Binance BTC-USDT-PERP)'}</p>
              <p className="text-white">펀딩비율: <span className="text-yellow-400">+0.01%</span> / 8h</p>
              <p className="text-gray-400 mt-1">{'→ 연환산: 0.01% × 3 × 365 = 10.95%/년'}</p>
              <p className="text-gray-400">{'→ 롱 보유자가 숏 보유자에게 8시간마다 지급'}</p>
              <p className="text-white mt-3">펀딩비율: <span className="text-red-400">-0.03%</span> / 8h</p>
              <p className="text-gray-400 mt-1">{'→ 연환산: -0.03% × 3 × 365 = -32.85%/년'}</p>
              <p className="text-gray-400">{'→ 숏 보유자가 롱 보유자에게 지급'}</p>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">델타 중립 전략</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              핵심은 <strong>가격 변동 위험 없이 펀딩비만 수취</strong>하는 것이다. BTC 가격이 오르든 내리든 상관없이 펀딩비를 번다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">펀딩비 +0.01% 상황 — 포지션 구성</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-2">현물 롱 $5,000</p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">BTC 현물 매수<br/>가격 상승 시 이익<br/>가격 하락 시 손실</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-orange-800 dark:text-orange-300 mb-2">선물 숏 $5,000</p>
                  <p className="text-xs text-orange-700 dark:text-orange-400">BTC 선물 매도 (1x)<br/>가격 하락 시 이익<br/>가격 상승 시 손실</p>
                </div>
              </div>
              <div className="mt-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                <p className="text-xs font-bold text-green-800 dark:text-green-300">결과: 델타 = 0 (가격 변동 무관)</p>
                <p className="text-xs text-green-700 dark:text-green-400 mt-1">현물 손익 + 선물 손익 = 항상 0<br/>남는 건 8시간마다 들어오는 펀딩비 수익</p>
                <p className="text-xs font-mono text-green-800 dark:text-green-300 mt-2">$10,000 × 0.01% × 3회/일 × 365일 = <strong>$1,095/년 (10.95%)</strong></p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">실제 코드 — Python + ccxt</h3>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-xs overflow-x-auto">
              <p className="text-yellow-400 mb-3">{'# funding_rate_bot.py'}</p>
              <p className="text-gray-400">{'# pip install ccxt python-dotenv'}</p>
              <p className="text-white mt-3">{'import ccxt, time, os'}</p>
              <p className="text-white">{'from dotenv import load_dotenv'}</p>
              <p className="text-white mt-3">{'load_dotenv()'}</p>
              <p className="text-white mt-3">{'exchange = ccxt.binance({'}</p>
              <p className="text-white pl-4">{"'apiKey': os.getenv('BINANCE_API_KEY'),"}</p>
              <p className="text-white pl-4">{"'secret': os.getenv('BINANCE_SECRET'),"}</p>
              <p className="text-white pl-4">{"'options': {'defaultType': 'future'},"}</p>
              <p className="text-white">{'})'}</p>

              <p className="text-yellow-400 mt-4">{'# 설정값'}</p>
              <p className="text-white">{'SYMBOL = "BTC/USDT:USDT"  # 선물 심볼'}</p>
              <p className="text-white">{'SPOT_SYMBOL = "BTC/USDT"'}</p>
              <p className="text-white">{'TRADE_SIZE_USDT = 1000    # 운용 금액'}</p>
              <p className="text-white">{'ENTRY_THRESHOLD = 0.0001  # 0.01% 이상일 때 진입'}</p>
              <p className="text-white">{'EXIT_THRESHOLD = 0.00005  # 0.005% 이하면 청산'}</p>

              <p className="text-yellow-400 mt-4">{'def get_funding_rate():'}</p>
              <p className="text-white pl-4">{'info = exchange.fetch_funding_rate(SYMBOL)'}</p>
              <p className="text-white pl-4">{'return float(info["fundingRate"])'}</p>

              <p className="text-yellow-400 mt-4">{'def get_btc_price():'}</p>
              <p className="text-white pl-4">{'ticker = exchange.fetch_ticker(SYMBOL)'}</p>
              <p className="text-white pl-4">{"return float(ticker['last'])"}</p>

              <p className="text-yellow-400 mt-4">{'def open_delta_neutral():'}</p>
              <p className="text-white pl-4">{'price = get_btc_price()'}</p>
              <p className="text-white pl-4">{'amount = TRADE_SIZE_USDT / price'}</p>
              <p className="text-white pl-4">{'amount = round(amount, 3)'}</p>
              <p className="text-white mt-2 pl-4">{'# 1. 현물 롱'}</p>
              <p className="text-white pl-4">{'spot_ex = ccxt.binance({'}</p>
              <p className="text-white pl-8">{"'apiKey': os.getenv('BINANCE_API_KEY'),"}</p>
              <p className="text-white pl-8">{"'secret': os.getenv('BINANCE_SECRET'),"}</p>
              <p className="text-white pl-4">{'})'}</p>
              <p className="text-white pl-4">{"spot_order = spot_ex.create_market_buy_order("}</p>
              <p className="text-white pl-8">{"SPOT_SYMBOL, amount"}</p>
              <p className="text-white pl-4">{')'}</p>
              <p className="text-white mt-2 pl-4">{'# 2. 선물 숏 (1x 레버리지)'}</p>
              <p className="text-white pl-4">{"perp_order = exchange.create_market_sell_order("}</p>
              <p className="text-white pl-8">{"SYMBOL, amount, {'reduceOnly': False}"}</p>
              <p className="text-white pl-4">{')'}</p>
              <p className="text-white pl-4">{"print(f'포지션 오픈: {amount} BTC, 현물롱+선물숏')"}</p>
              <p className="text-white pl-4">{'return amount'}</p>

              <p className="text-yellow-400 mt-4">{'def close_delta_neutral(amount):'}</p>
              <p className="text-white pl-4">{'spot_ex = ccxt.binance({'}</p>
              <p className="text-white pl-8">{"'apiKey': os.getenv('BINANCE_API_KEY'),"}</p>
              <p className="text-white pl-8">{"'secret': os.getenv('BINANCE_SECRET'),"}</p>
              <p className="text-white pl-4">{'})'}</p>
              <p className="text-white pl-4">{'spot_ex.create_market_sell_order(SPOT_SYMBOL, amount)'}</p>
              <p className="text-white pl-4">{"exchange.create_market_buy_order("}</p>
              <p className="text-white pl-8">{"SYMBOL, amount, {'reduceOnly': True}"}</p>
              <p className="text-white pl-4">{')'}</p>
              <p className="text-white pl-4">{"print('포지션 청산 완료')"}</p>

              <p className="text-yellow-400 mt-4">{'# 메인 루프'}</p>
              <p className="text-white">{'position_amount = 0'}</p>
              <p className="text-white">{'while True:'}</p>
              <p className="text-white pl-4">{'rate = get_funding_rate()'}</p>
              <p className="text-white pl-4">{"print(f'펀딩비: {rate:.6f} ({rate*100:.4f}%)')"}</p>
              <p className="text-white mt-2 pl-4">{'if position_amount == 0 and rate > ENTRY_THRESHOLD:'}</p>
              <p className="text-white pl-8">{"print('진입 조건 충족 → 포지션 오픈')"}</p>
              <p className="text-white pl-8">{'position_amount = open_delta_neutral()'}</p>
              <p className="text-white mt-2 pl-4">{'elif position_amount > 0 and rate < EXIT_THRESHOLD:'}</p>
              <p className="text-white pl-8">{"print('청산 조건 충족 → 포지션 종료')"}</p>
              <p className="text-white pl-8">{'close_delta_neutral(position_amount)'}</p>
              <p className="text-white pl-8">{'position_amount = 0'}</p>
              <p className="text-white mt-2 pl-4">{'time.sleep(300)  # 5분마다 체크'}</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-3">펀딩비 봇 핵심 리스크</p>
              <div className="space-y-2">
                {[
                  { risk: '현물-선물 간 가격 미끄러짐', desc: '진입/청산 시 두 주문이 동시에 체결되지 않으면 순간적으로 델타가 생긴다. 시장가 주문 빠르게 → 지정가 주문 체결 대기 순서 권장' },
                  { risk: '거래소 리스크', desc: 'FTX 사태처럼 거래소가 파산하면 자산 전부 손실. 운용 금액을 한 거래소에 몰지 말 것' },
                  { risk: '펀딩비 역전', desc: '포지션 보유 중 펀딩비가 음수로 전환되면 오히려 수수료를 낸다. EXIT_THRESHOLD를 엄격히 설정' },
                  { risk: '선물 청산 위험', desc: '1x 레버리지라도 증거금 부족 시 청산됨. 증거금을 충분히 유지할 것 (포지션 크기의 최소 30%+)' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-amber-600 dark:text-amber-400 font-bold text-xs flex-shrink-0 mt-0.5">⚠</span>
                    <div>
                      <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">{item.risk}</p>
                      <p className="text-xs text-amber-700 dark:text-amber-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">펀딩비 봇 수익 시뮬레이션 ($10,000 운용)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-gray-500">시나리오</th>
                      <th className="text-right py-2 text-gray-500">평균 펀딩비/8h</th>
                      <th className="text-right py-2 text-gray-500">연환산</th>
                      <th className="text-right py-2 text-gray-500">월 수익</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      ['약세장 (보수적)', '0.005%', '5.48%', '~$46'],
                      ['보통 시장', '0.01%', '10.95%', '~$91'],
                      ['강세장 (낙관적)', '0.03%', '32.85%', '~$274'],
                      ['알트코인 강세장', '0.1%+', '109%+', '~$910+'],
                    ].map(([scenario, rate, annual, monthly], i) => (
                      <tr key={i}>
                        <td className="py-2 text-gray-700 dark:text-gray-300">{scenario}</td>
                        <td className="py-2 text-right font-mono text-gray-600 dark:text-gray-400">{rate}</td>
                        <td className="py-2 text-right font-mono text-green-600 dark:text-green-400">{annual}</td>
                        <td className="py-2 text-right font-mono text-green-600 dark:text-green-400">{monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">* 수수료(0.04%/거래) 미포함. 진입·청산 2회 = $8 수수료 발생</p>
            </div>

            {/* ── S4 청산봇 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · 신규 체인 청산봇 — 가능하지만 조건이 있다</h2>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">청산 메커니즘 이해</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave·Compound 같은 DeFi 대출 프로토콜에서 담보 가치가 하락해 Health Factor가 1.0 미만이 되면 누구나 해당 포지션을 청산할 수 있다. 청산자는 빚을 대신 갚아주고 담보를 시장가보다 <strong>5~10% 싸게</strong> 가져간다. 이 할인이 청산봇의 수익이다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">청산 수익 계산 예시</p>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs">
                <p className="text-gray-400">{'# 청산 대상 포지션'}</p>
                <p className="text-white">담보: ETH 1개 (현재가 $2,000)</p>
                <p className="text-white">부채: USDT $1,800 (HF = 1,000 미만 → 청산 가능)</p>
                <p className="text-white mt-2">{'# 청산봇 실행'}</p>
                <p className="text-white">USDT $900 상환 (부채의 50%)  <span className="text-gray-400">← 최대 50%까지만 청산 가능</span></p>
                <p className="text-white">받는 ETH = $900 / $2,000 × 1.08  <span className="text-green-400">← 8% 청산 보너스</span></p>
                <p className="text-white">        = 0.486 ETH = <span className="text-green-400">$972 상당</span></p>
                <p className="text-green-400 mt-2">순수익 = $972 - $900 = $72 (7.2초 안에)</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">플래시론 — 자본 없이 청산하기</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              $900 USDT가 없어도 괜찮다. Aave 플래시론으로 <strong>같은 블록 안에서 빌리고 갚는다</strong>. 수수료는 0.09%($0.81). 청산 보너스 $72 - 플래시론 수수료 $0.81 = <strong>$71.19 순수익</strong>.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-xs">
              <p className="text-yellow-400 mb-3">{'// liquidation_bot.ts (TypeScript + ethers.js)'}</p>
              <p className="text-gray-400">{'// npm install ethers dotenv'}</p>
              <p className="text-white mt-3">{"import { ethers } from 'ethers';"}</p>
              <p className="text-white">{"import * as dotenv from 'dotenv';"}</p>
              <p className="text-white">{'dotenv.config();'}</p>

              <p className="text-white mt-3">{'const provider = new ethers.JsonRpcProvider('}</p>
              <p className="text-white pl-4">{'process.env.RPC_URL'}</p>
              <p className="text-white">{');'}</p>

              <p className="text-white mt-3">{'const AAVE_POOL_ADDRESS = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";'}</p>
              <p className="text-gray-400">{'// Arbitrum Aave v3 Pool'}</p>

              <p className="text-white mt-3">{'const POOL_ABI = ['}</p>
              <p className="text-white pl-4">{"'function getUserAccountData(address user) view returns"}</p>
              <p className="text-white pl-4">{"(uint256 totalCollateralBase, uint256 totalDebtBase,"}</p>
              <p className="text-white pl-4">{"uint256 availableBorrowsBase, uint256 currentLiquidationThreshold,"}</p>
              <p className="text-white pl-4">{"uint256 ltv, uint256 healthFactor)',"}</p>
              <p className="text-white pl-4">{"'function liquidationCall(address collateralAsset,"}</p>
              <p className="text-white pl-4">{"address debtAsset, address user, uint256 debtToCover,"}</p>
              <p className="text-white pl-4">{"bool receiveAToken) external',"}</p>
              <p className="text-white">{'];'}</p>

              <p className="text-white mt-3">{'const pool = new ethers.Contract('}</p>
              <p className="text-white pl-4">{'AAVE_POOL_ADDRESS, POOL_ABI, provider'}</p>
              <p className="text-white">{');'}</p>

              <p className="text-yellow-400 mt-4">{'// Health Factor 체크'}</p>
              <p className="text-white">{'async function checkHealthFactor(userAddress: string) {'}</p>
              <p className="text-white pl-4">{'const data = await pool.getUserAccountData(userAddress);'}</p>
              <p className="text-white pl-4">{'const hf = Number(data.healthFactor) / 1e18;'}</p>
              <p className="text-white pl-4">{'return hf;'}</p>
              <p className="text-white">{'}'}</p>

              <p className="text-yellow-400 mt-4">{'// Borrow 이벤트 감지 → HF 낮은 포지션 모니터링'}</p>
              <p className="text-white">{'async function monitorLiquidations() {'}</p>
              <p className="text-white pl-4">{'const borrowFilter = pool.filters.Borrow();'}</p>
              <p className="text-white pl-4">{'pool.on(borrowFilter, async (reserve, user, onBehalfOf,'}</p>
              <p className="text-white pl-4">{'  amount, interestRateMode, borrowRate, event) => {'}</p>
              <p className="text-white pl-8">{'const hf = await checkHealthFactor(onBehalfOf);'}</p>
              <p className="text-white pl-8">{"console.log(`User: ${onBehalfOf}, HF: ${hf.toFixed(4)}`);"}</p>
              <p className="text-white pl-8">{'if (hf < 1.05) { // 1.05 미만이면 위험 포지션'}</p>
              <p className="text-white pl-12">{'await attemptLiquidation(onBehalfOf);'}</p>
              <p className="text-white pl-8">{'}'}</p>
              <p className="text-white pl-4">{'});'}</p>
              <p className="text-white">{'}'}</p>

              <p className="text-yellow-400 mt-4">{'// 청산 실행 (플래시론 컨트랙트 호출)'}</p>
              <p className="text-white">{'async function attemptLiquidation(user: string) {'}</p>
              <p className="text-white pl-4">{'const signer = new ethers.Wallet('}</p>
              <p className="text-white pl-8">{'process.env.PRIVATE_KEY!, provider'}</p>
              <p className="text-white pl-4">{');'}</p>
              <p className="text-white pl-4">{'// 본인이 배포한 플래시론 청산 컨트랙트 호출'}</p>
              <p className="text-white pl-4">{'const liquidatorContract = new ethers.Contract('}</p>
              <p className="text-white pl-8">{'LIQUIDATOR_CONTRACT_ADDRESS,'}</p>
              <p className="text-white pl-8">{'LIQUIDATOR_ABI,'}</p>
              <p className="text-white pl-8">{'signer'}</p>
              <p className="text-white pl-4">{');'}</p>
              <p className="text-white pl-4">{'const tx = await liquidatorContract.liquidate('}</p>
              <p className="text-white pl-8">{'user,'}</p>
              <p className="text-white pl-8">{'COLLATERAL_TOKEN, // ETH'}</p>
              <p className="text-white pl-8">{'DEBT_TOKEN,       // USDT'}</p>
              <p className="text-white pl-8">{"{ gasLimit: 500000, maxFeePerGas: ethers.parseUnits('2', 'gwei') }"}</p>
              <p className="text-white pl-4">{'});'}</p>
              <p className="text-white pl-4">{'await tx.wait();'}</p>
              <p className="text-white pl-4">{"console.log('청산 완료:', tx.hash);"}</p>
              <p className="text-white">{'}'}</p>

              <p className="text-white mt-3">{'monitorLiquidations();'}</p>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">골든타임 찾는 방법 — 신규 프로토콜을 노려라</h3>

            <div className="space-y-3 my-6">
              {[
                {
                  step: '1',
                  title: 'DeFiLlama에서 신규 Lending 프로토콜 탐색',
                  desc: 'defillama.com → Protocols → Lending → Sort by "Recently Added". TVL $5M~$50M이고 런칭 1~3개월 이내인 프로토콜이 타겟.',
                  color: 'bg-green-500',
                },
                {
                  step: '2',
                  title: '청산 봇 경쟁자 수 확인',
                  desc: '해당 프로토콜의 청산 이력을 Etherscan에서 확인. 청산 트랜잭션이 많지 않거나 같은 주소가 독점하지 않으면 진입 여지 있음.',
                  color: 'bg-yellow-500',
                },
                {
                  step: '3',
                  title: '청산 보너스율 확인',
                  desc: '프로토콜마다 다름. Aave는 5~10%, 일부 신규 프로토콜은 15%까지 제공. 보너스가 클수록 수익성 높음.',
                  color: 'bg-blue-500',
                },
                {
                  step: '4',
                  title: 'RPC 노드 품질이 승부 가른다',
                  desc: 'Alchemy/Infura 무료 티어는 느림. Quicknode 유료($49/월) 또는 직접 노드 운영이 경쟁력. 같은 블록 안에서 먼저 트랜잭션을 보내야 한다.',
                  color: 'bg-purple-500',
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <span className={`w-8 h-8 rounded-full ${s.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── S5 CEX-DEX 차익봇 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · CEX-DEX 차익봇 — 인프라가 있어야만</h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Binance에서 ETH 가격이 $3,000인데 Uniswap에서 $3,015에 팔리고 있다면? 차이 $15를 가져올 수 있다. 이 가격 차이는 <strong>정보 전달 지연</strong> 때문에 발생한다. 큰 뉴스가 터지거나 고래가 시장가 주문을 넣는 순간 CEX는 즉시 반응하지만 DEX는 다음 블록까지 기다려야 한다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">CEX-DEX 가격 차이 발생 순간</p>
              <div className="space-y-3">
                {[
                  { time: 'T+0ms', event: 'Binance ETH 가격 $3,000 → $3,015 (+0.5%)', color: 'text-blue-600 dark:text-blue-400' },
                  { time: 'T+50ms', event: '봇이 DEX (Uniswap)에서 ETH가 아직 $3,000에 팔리는 것 감지', color: 'text-yellow-600 dark:text-yellow-400' },
                  { time: 'T+100ms', event: '봇이 Uniswap에서 ETH 매수 트랜잭션 전송', color: 'text-green-600 dark:text-green-400' },
                  { time: 'T+12,000ms', event: '이더리움 블록 확인 (12초). Uniswap에서 $3,000에 매수 완료', color: 'text-green-600 dark:text-green-400' },
                  { time: 'T+12,100ms', event: 'Binance에서 $3,015에 매도 → $15 차익 (수수료 제외)', color: 'text-green-600 dark:text-green-400' },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="font-mono text-xs text-gray-400 flex-shrink-0 w-20">{row.time}</span>
                    <p className={`text-xs ${row.color}`}>{row.event}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">실제 코드 — Python + Web3</h3>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-xs overflow-x-auto">
              <p className="text-yellow-400 mb-3">{'# cex_dex_arb.py'}</p>
              <p className="text-gray-400">{'# pip install ccxt web3 python-dotenv'}</p>
              <p className="text-white mt-3">{'import ccxt, time, os'}</p>
              <p className="text-white">{'from web3 import Web3'}</p>
              <p className="text-white">{'from dotenv import load_dotenv'}</p>
              <p className="text-white">{'load_dotenv()'}</p>

              <p className="text-white mt-3">{'# CEX 설정'}</p>
              <p className="text-white">{'binance = ccxt.binance({'}</p>
              <p className="text-white pl-4">{"'apiKey': os.getenv('BINANCE_API_KEY'),"}</p>
              <p className="text-white pl-4">{"'secret': os.getenv('BINANCE_SECRET'),"}</p>
              <p className="text-white">{'})'}</p>

              <p className="text-white mt-3">{'# DEX 설정 (Arbitrum 사용 — 가스비 저렴)'}</p>
              <p className="text-white">{"w3 = Web3(Web3.HTTPProvider(os.getenv('ARB_RPC_URL')))"}</p>
              <p className="text-white">{'UNISWAP_QUOTER = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"'}</p>

              <p className="text-yellow-400 mt-4">{'def get_cex_price(symbol="ETH/USDT"):'}</p>
              <p className="text-white pl-4">{'ticker = binance.fetch_ticker(symbol)'}</p>
              <p className="text-white pl-4">{"return float(ticker['last'])"}</p>

              <p className="text-yellow-400 mt-4">{'def get_dex_price(amount_in_eth=0.1):'}</p>
              <p className="text-white pl-4">{'# Uniswap v3 Quoter로 견적 조회'}</p>
              <p className="text-white pl-4">{'quoter = w3.eth.contract('}</p>
              <p className="text-white pl-8">{'address=UNISWAP_QUOTER,'}</p>
              <p className="text-white pl-8">{'abi=QUOTER_ABI'}</p>
              <p className="text-white pl-4">{')'}</p>
              <p className="text-white pl-4">{'WETH = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"'}</p>
              <p className="text-white pl-4">{'USDC = "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"'}</p>
              <p className="text-white pl-4">{'amount_in = int(amount_in_eth * 1e18)'}</p>
              <p className="text-white pl-4">{'amount_out = quoter.functions.quoteExactInputSingle('}</p>
              <p className="text-white pl-8">{'WETH, USDC, 500, amount_in, 0'}</p>
              <p className="text-white pl-4">{'  ).call()'}</p>
              <p className="text-white pl-4">{'return amount_out / 1e6 / amount_in_eth  # USDC per ETH'}</p>

              <p className="text-yellow-400 mt-4">{'def calculate_profit(cex_price, dex_price, size_eth=0.1):'}</p>
              <p className="text-white pl-4">{'# DEX에서 사고 CEX에서 파는 경우'}</p>
              <p className="text-white pl-4">{'gas_cost_usd = 0.5  # Arbitrum 가스비 추정'}</p>
              <p className="text-white pl-4">{'cex_fee = cex_price * size_eth * 0.001  # 0.1%'}</p>
              <p className="text-white pl-4">{'dex_slippage = dex_price * size_eth * 0.001  # 0.1% 슬리피지'}</p>
              <p className="text-white pl-4">{'spread = (cex_price - dex_price) * size_eth'}</p>
              <p className="text-white pl-4">{'net_profit = spread - gas_cost_usd - cex_fee - dex_slippage'}</p>
              <p className="text-white pl-4">{'return net_profit'}</p>

              <p className="text-yellow-400 mt-4">{'# 메인 루프'}</p>
              <p className="text-white">{'MIN_PROFIT_USD = 5.0  # 최소 수익 $5'}</p>
              <p className="text-white">{'while True:'}</p>
              <p className="text-white pl-4">{'try:'}</p>
              <p className="text-white pl-8">{'cex = get_cex_price()'}</p>
              <p className="text-white pl-8">{'dex = get_dex_price(0.1)'}</p>
              <p className="text-white pl-8">{'profit = calculate_profit(cex, dex)'}</p>
              <p className="text-white pl-8">{"spread_pct = (cex - dex) / cex * 100"}</p>
              <p className="text-white pl-8">{"print(f'CEX: ${cex:.2f} DEX: ${dex:.2f} 스프레드: {spread_pct:.3f}% 예상수익: ${profit:.2f}')"}</p>
              <p className="text-white pl-8">{'if profit > MIN_PROFIT_USD:'}</p>
              <p className="text-white pl-12">{"print('차익 기회 발견! 실행...')"}</p>
              <p className="text-white pl-12">{'# execute_arb(cex, dex, profit)'}</p>
              <p className="text-white pl-4">{'except Exception as e:'}</p>
              <p className="text-white pl-8">{"print(f'에러: {e}')"}</p>
              <p className="text-white pl-4">{'time.sleep(1)  # 1초마다 체크'}</p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-3">CEX-DEX 차익의 현실적 장벽</p>
              <div className="space-y-2">
                {[
                  { issue: '속도', detail: '경쟁 봇들은 검증자와 직접 연결하거나 전용 RPC를 씀. 내가 1초 단위로 체크하는 동안 경쟁자는 100ms 단위로 움직인다.' },
                  { issue: '인벤토리 리스크', detail: 'DEX에서 ETH 사는 동안 가격이 더 떨어지면 손실. 실행 시점과 청산 시점 사이의 가격 위험 관리가 핵심.' },
                  { issue: '자본 효율', detail: 'DEX에서 살 USDC, CEX에서 받을 ETH 보관할 공간 모두 필요. 동시에 양쪽에 자본이 묶임.' },
                  { issue: '기회 희소성', detail: '큰 스프레드가 열리는 순간은 극히 드물고 빠르게 닫힘. 하루 수십~수백 번 기회가 생기지만 대부분 0.01~0.05% 이하.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold text-xs flex-shrink-0 mt-0.5 w-14">{item.issue}</span>
                    <p className="text-xs text-red-800 dark:text-red-200">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── S6 공통 인프라 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · 공통 인프라 — 봇 운영 필수 요소</h2>

            <div className="space-y-4 my-6">
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">환경 변수 관리 (.env)</span>
                </div>
                <div className="bg-gray-900 dark:bg-black p-4 font-mono text-xs text-gray-300 space-y-0.5">
                  <p className="text-yellow-400">{'# .env 파일 (절대 git에 올리지 말 것!)'}</p>
                  <p>BINANCE_API_KEY=your_api_key_here</p>
                  <p>BINANCE_SECRET=your_secret_here</p>
                  <p>PRIVATE_KEY=your_wallet_private_key</p>
                  <p>RPC_URL=https://arb-mainnet.g.alchemy.com/v2/your_key</p>
                  <p className="mt-2 text-yellow-400">{'# .gitignore에 반드시 추가'}</p>
                  <p>{'echo ".env" >> .gitignore'}</p>
                </div>
              </div>

              <div className="border border-green-200 dark:border-green-800 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">텔레그램 알림 봇</span>
                </div>
                <div className="bg-gray-900 dark:bg-black p-4 font-mono text-xs text-gray-300 space-y-0.5">
                  <p>import requests</p>
                  <p className="mt-2">{'TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")'}</p>
                  <p>{'CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")'}</p>
                  <p className="mt-2">def send_alert(message):</p>
                  <p className="pl-4">{'url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"'}</p>
                  <p className="pl-4">{'requests.post(url, json={'}</p>
                  <p className="pl-8">{"'chat_id': CHAT_ID, 'text': message"}</p>
                  <p className="pl-4">{'})'}</p>
                  <p className="mt-2 text-yellow-400">{'# 수익 발생 시'}</p>
                  <p>{'send_alert(f"청산 완료 수익: ${profit:.2f}")'}</p>
                  <p className="mt-1 text-yellow-400">{'# 에러 시'}</p>
                  <p>{'send_alert(f"봇 에러: {str(error)}")'}</p>
                </div>
              </div>

              <div className="border border-yellow-200 dark:border-yellow-800 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">포지션 크기 리스크 관리</span>
                </div>
                <div className="bg-gray-900 dark:bg-black p-4 font-mono text-xs text-gray-300 space-y-0.5">
                  <p className="text-yellow-400">{'# 리스크 관리 원칙'}</p>
                  <p>MAX_POSITION_PCT = 0.2  <span className="text-gray-500">{'# 전체 자산의 20% 이상 단일 포지션 금지'}</span></p>
                  <p>MAX_DAILY_LOSS = 0.05   <span className="text-gray-500">{'# 하루 5% 이상 손실 시 자동 중단'}</span></p>
                  <p className="mt-2">def check_risk_limits(portfolio_value, position_value, daily_loss):</p>
                  <p className="pl-4">if position_value / portfolio_value {'>'} MAX_POSITION_PCT:</p>
                  <p className="pl-8">raise Exception("포지션 한도 초과")</p>
                  <p className="pl-4">if abs(daily_loss) / portfolio_value {'>'} MAX_DAILY_LOSS:</p>
                  <p className="pl-8">raise Exception("일일 손실 한도 초과 → 봇 중단")</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">권장 개발 환경</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { category: 'RPC 노드', options: 'Alchemy ($0~49/월), QuickNode ($9~49/월)' },
                  { category: '서버', options: 'AWS EC2 t3.small ($15/월) — 한국 리전 피할 것' },
                  { category: '지갑', options: '봇 전용 새 지갑. 핫월렛에 소액만 유지' },
                  { category: '모니터링', options: 'Telegram Bot API (무료), Grafana' },
                  { category: '백테스트', options: 'ccxt + pandas로 과거 데이터 분석' },
                  { category: '테스트넷', options: 'Arbitrum Sepolia (청산봇), Binance Testnet' },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.category}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.options}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── S7 현실적 기대치 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · 현실적인 기대치 — 냉정하게</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500 rounded-tl-lg">전략</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">필요 자본</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">현실적 월수익</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500 rounded-tr-lg">주요 리스크</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['펀딩비 차익', '$5,000+', '$50~$500', '거래소 파산, 펀딩비 역전'],
                    ['청산봇 (신규 체인)', '$0 (플래시론)', '$0~$2,000/월', '경쟁자 선점, 가스비, 컨트랙트 버그'],
                    ['CEX-DEX 차익', '$10,000+', '$100~$1,000', '속도 경쟁, 인벤토리 위험, 변동성'],
                  ].map(([strategy, capital, profit, risk], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800 dark:text-gray-200">{strategy}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{capital}</td>
                      <td className="px-4 py-3 text-xs font-mono text-green-700 dark:text-green-400">{profit}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">처음 시작하는 사람에게 권장하는 순서</p>
              <div className="space-y-3">
                {[
                  { step: 'STEP 1', desc: '펀딩비 모니터링 봇부터 — 실제 거래 없이 로그만 찍는 버전 먼저 2주 운영', badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
                  { step: 'STEP 2', desc: '소액($500) 실거래 테스트 — 수수료·슬리피지·예외처리 버그 직접 경험', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' },
                  { step: 'STEP 3', desc: '테스트넷 청산봇 — Arbitrum Sepolia에서 실제 청산 로직 검증', badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
                  { step: 'STEP 4', desc: '신규 프로토콜 청산봇 실전 투입 — TVL 작은 곳부터, 플래시론으로 무자본 테스트', badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3 items-start">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${s.badge}`}>{s.step}</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">쌀먹 봇의 진실</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  크립토 봇으로 돈을 버는 것은 가능하다. 하지만 <strong className="text-white">"자동으로 돈이 들어오는 기계"</strong>를 기대하면 안 된다. 봇은 지속적인 유지보수가 필요하고, 시장이 바뀌면 전략도 바꿔야 한다.
                </p>
                <p>
                  펀딩비 봇은 <strong className="text-white">가장 안정적이고 진입 장벽이 낮다</strong>. 청산봇은 <strong className="text-white">플래시론 덕분에 자본 없이 시작</strong>할 수 있지만 개발 난이도가 있다. CEX-DEX 차익은 속도 경쟁에서 이길 인프라가 없으면 먼저 시도하지 않는 게 낫다.
                </p>
                <p>
                  가장 중요한 원칙: <strong className="text-white">잃어도 되는 돈으로, 작게 시작해서, 코드를 완전히 이해한 상태에서만</strong> 실전 투입하라.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 6 — Crypto Bot Trading: A Practical Guide</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">Funding Rate Arb · Liquidation Bot · CEX-DEX Arbitrage · Real Code</p>

            {/* Warning */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-2">Read Before Starting</p>
              <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
                Code in this article is for educational purposes. A single bug in production can lose your entire balance. Always follow this order: <strong>testnet → mainnet small amount → gradual scale-up</strong>. Leveraged positions carry liquidation risk.
              </p>
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · Institutions vs Individuals — What's Possible</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The crypto bot market is brutal. Ethereum mainnet DEX arbitrage is dominated by firms like Jump Crypto and Tower Research, connected directly to validators at the block level. Individuals trying to compete there just burn gas fees.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              But niches that are <strong>too small, too new, or too complex for institutions to bother with</strong> still exist. These three strategies live in that space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { level: 'Low', lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', title: 'Funding Rate Arb', capital: 'Min $1,000', ret: '15–50% annually', stack: 'Python + ccxt', time: '1–2 weeks', border: 'border-green-200 dark:border-green-800' },
                { level: 'Medium', lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', title: 'New-Chain Liquidation Bot', capital: 'Flash loan → $0', ret: '$50–$5,000/liquidation', stack: 'TypeScript + ethers.js', time: '2–4 weeks', border: 'border-yellow-200 dark:border-yellow-800' },
                { level: 'Hard', lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', title: 'CEX-DEX Arb Bot', capital: 'Min $10,000', ret: '1–5%/month (good conditions)', stack: 'Python + Web3', time: '4–8 weeks', border: 'border-red-200 dark:border-red-800' },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.border}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.lc}`}>{card.level}</span>
                  <p className="text-sm font-bold mt-2 mb-3 text-gray-900 dark:text-white">{card.title}</p>
                  <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                    <p>Capital: <span className="text-gray-800 dark:text-gray-200 font-medium">{card.capital}</span></p>
                    <p>Expected return: <span className="text-gray-800 dark:text-gray-200 font-medium">{card.ret}</span></p>
                    <p>Stack: <span className="font-mono text-gray-800 dark:text-gray-200">{card.stack}</span></p>
                    <p>Dev time: <span className="text-gray-800 dark:text-gray-200 font-medium">{card.time}</span></p>
                  </div>
                </div>
              ))}
            </div>

            {/* Avoid section EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · What to Avoid — Flash Loans, MEV, Mainnet Liquidations</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Search "DeFi passive income" and you'll see flash loans, MEV sandwiches, and on-chain liquidation bots everywhere. Honest answer: <strong>in 2025, these are essentially inaccessible for individuals.</strong>
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Flash Loan Arbitrage',
                  badge: 'Effectively impossible',
                  bc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  items: [
                    'Professional MEV teams (Jump, Wintermute) use Flashbots bundles to pre-empt every opportunity at the block level',
                    'By the time your bot spots an opening, a competing bundle is already in that block',
                    'Gas auctions (priority fees) mean gas costs often exceed profit',
                    'Requires writing your own Solidity flash loan contract — one bug = capital loss',
                  ],
                },
                {
                  title: 'MEV Sandwich Attacks / Front-running',
                  badge: 'Revenue declining + ethical issues',
                  bc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  items: [
                    'Flashbots Protect, MEV Blocker, 1inch Fusion have drastically reduced exposed transactions',
                    'Uniswap v4 hooks, CoW Protocol, and other MEV-resistant designs becoming standard',
                    'Community blacklists and protocol-level detection make this unsustainable long-term',
                    'Even professional MEV teams are pivoting away as margins collapse',
                  ],
                },
                {
                  title: 'Ethereum Mainnet Liquidation Bots',
                  badge: 'Already saturated',
                  bc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  items: [
                    'Dozens to hundreds of bots race for the same liquidation — triggering gas auctions',
                    'Liquidation bonus ($72) is often eaten up by gas ($50–$200+)',
                    'Validator-connected bots bypass the mempool entirely — ordinary bots can\'t compete',
                    'Any profits are luck, not a reliable income strategy',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="border border-red-200 dark:border-red-800 rounded-xl overflow-hidden">
                  <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.bc}`}>{item.badge}</span>
                  </div>
                  <div className="px-5 py-4">
                    <ul className="space-y-1.5">
                      {item.items.map((r, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-white mb-3">So what can individuals actually do?</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                The only winnable ground for individuals is <strong className="text-yellow-400">niches institutions haven't moved into yet</strong>: liquidation bots on early-stage protocols on new chains (Arbitrum, Base), funding rate arbitrage (CEX API-based, not on-chain), and delta-neutral positions during high-funding altcoin seasons.
              </p>
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · Funding Rate Arbitrage Bot — Most Realistic Starting Point</h2>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">What is a Funding Rate?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Perpetual futures have no expiry. Without a mechanism to anchor them, the futures price would drift from the spot price forever. To prevent this, exchanges pay <strong>funding fees every 8 hours</strong>. When the market is bullish, long position holders pay short holders a fee.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6 font-mono text-sm">
              <p className="text-green-400 mb-2">{'// Funding rate example (Binance BTC-USDT-PERP)'}</p>
              <p className="text-white">Funding rate: <span className="text-yellow-400">+0.01%</span> / 8h</p>
              <p className="text-gray-400 mt-1">{'→ Annualized: 0.01% × 3 × 365 = 10.95%/year'}</p>
              <p className="text-gray-400">{'→ Longs pay shorts every 8 hours'}</p>
              <p className="text-white mt-3">Funding rate: <span className="text-red-400">-0.03%</span> / 8h</p>
              <p className="text-gray-400 mt-1">{'→ Annualized: -0.03% × 3 × 365 = -32.85%/year'}</p>
              <p className="text-gray-400">{'→ Shorts pay longs'}</p>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Delta-Neutral Strategy</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The goal is to <strong>collect funding fees with zero price risk</strong>. Whether BTC goes up or down, you collect the funding rate.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Funding rate +0.01% — Position setup</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-2">Spot Long $5,000</p>
                  <p className="text-xs text-blue-700 dark:text-blue-400">Buy BTC spot<br/>Profit if price rises<br/>Loss if price falls</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-orange-800 dark:text-orange-300 mb-2">Perp Short $5,000</p>
                  <p className="text-xs text-orange-700 dark:text-orange-400">Sell BTC perp (1x)<br/>Profit if price falls<br/>Loss if price rises</p>
                </div>
              </div>
              <div className="mt-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                <p className="text-xs font-bold text-green-800 dark:text-green-300">Result: Delta = 0 (price-direction agnostic)</p>
                <p className="text-xs text-green-700 dark:text-green-400 mt-1">Spot P&L + Perp P&L = always zero<br/>All that remains is funding fee income every 8 hours</p>
                <p className="text-xs font-mono text-green-800 dark:text-green-300 mt-2">$10,000 × 0.01% × 3/day × 365 days = <strong>$1,095/year (10.95%)</strong></p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              The Python code structure is the same as shown in the Korean section above. Key parameters to configure:
            </p>
            <div className="bg-gray-900 dark:bg-black rounded-xl p-4 my-4 font-mono text-xs">
              <p className="text-white">{'ENTRY_THRESHOLD = 0.0001  # Enter when rate > 0.01%/8h'}</p>
              <p className="text-white">{'EXIT_THRESHOLD  = 0.00005 # Exit when rate drops below 0.005%'}</p>
              <p className="text-white">{'TRADE_SIZE_USDT = 1000    # Size per leg'}</p>
              <p className="text-gray-400 mt-2">{'# Monitor every 5 min, execute when threshold crossed'}</p>
              <p className="text-gray-400">{'# Always open spot + perp within same 1-minute window'}</p>
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · New-Chain Liquidation Bot — Medium Difficulty</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When a borrower's Health Factor drops below 1.0 on a DeFi lending protocol, anyone can liquidate them. The liquidator repays the debt and receives the collateral at a <strong>5–10% discount</strong>. That discount is your profit.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Liquidation profit example</p>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs">
                <p className="text-white">Collateral: 1 ETH ($2,000) · Debt: $1,800 USDT (HF below 1.0)</p>
                <p className="text-white mt-2">Repay: $900 USDT (50% of debt — maximum allowed)</p>
                <p className="text-white">Receive: $900 / $2,000 × 1.08 = <span className="text-green-400">0.486 ETH = $972</span></p>
                <p className="text-green-400 mt-2">Net profit = $972 - $900 = $72 (in one transaction)</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Flash loan tip:</strong> You don't need $900 USDT upfront. Borrow it from Aave flash loan within the same block, execute the liquidation, repay the flash loan + 0.09% fee ($0.81). Net: $72 - $0.81 = <strong>$71.19 with zero capital</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The TypeScript monitoring code (ethers.js) watches for Borrow events, checks Health Factors in real time, and triggers liquidation when HF drops below 1.05. See the Korean section above for the full implementation.
            </p>

            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Finding Your Window — Target New Protocols</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 my-4">
              <div className="space-y-2">
                {[
                  'DeFiLlama → Protocols → Lending → Sort "Recently Added" — target TVL $5M–$50M, under 3 months old',
                  'Check Etherscan for existing liquidation bots — few bots = opportunity',
                  'Higher liquidation bonuses (up to 15%) on newer protocols = higher profit per liquidation',
                  'Upgrade your RPC node — free tier is too slow. QuickNode/Alchemy paid plans or self-hosted node',
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 flex-shrink-0">{i + 1}.</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · CEX-DEX Arbitrage Bot — High Difficulty</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When ETH is $3,000 on Binance but $3,015 on Uniswap, the $15 gap can be captured. This spread exists because of <strong>information propagation delays</strong> — CEX prices update in milliseconds, but DEX prices only update on the next block (12 seconds on Ethereum, ~250ms on Arbitrum).
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-red-800 dark:text-red-300 mb-3">Honest assessment of CEX-DEX arb</p>
              <div className="space-y-2">
                {[
                  { label: 'Speed', detail: 'Competing bots use validator connections and dedicated RPCs. While you check every second, they act every 100ms.' },
                  { label: 'Inventory risk', detail: 'While buying on DEX, prices may move further against you. P&L between execution and settlement is never guaranteed.' },
                  { label: 'Capital tie-up', detail: 'You need USDC on the DEX side and ETH on the CEX side simultaneously, reducing capital efficiency.' },
                  { label: 'Opportunity scarcity', detail: 'Large spreads are rare and close fast. Most opportunities are under 0.05% — barely covering fees.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-red-600 dark:text-red-400 font-bold text-xs flex-shrink-0 mt-0.5 w-20">{item.label}</span>
                    <p className="text-xs text-red-800 dark:text-red-200">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Common Infrastructure</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Recommended Setup</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { category: 'RPC Node', options: 'Alchemy ($0–49/mo), QuickNode ($9–49/mo)' },
                  { category: 'Server', options: 'AWS EC2 t3.small ($15/mo) — low-latency region' },
                  { category: 'Wallet', options: 'Dedicated bot wallet — keep minimal funds in hot wallet' },
                  { category: 'Monitoring', options: 'Telegram Bot API (free), Grafana' },
                  { category: 'Backtesting', options: 'ccxt + pandas with historical data' },
                  { category: 'Testnet', options: 'Arbitrum Sepolia (liquidation), Binance Testnet' },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.category}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.options}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Realistic Expectations</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500 rounded-tl-lg">Strategy</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">Capital Needed</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500">Realistic Monthly</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase text-gray-500 rounded-tr-lg">Key Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['Funding Rate Arb', '$5,000+', '$50–$500', 'Exchange collapse, rate reversal'],
                    ['Liquidation Bot', '$0 (flash loan)', '$0–$2,000', 'Competition, gas costs, contract bugs'],
                    ['CEX-DEX Arb', '$10,000+', '$100–$1,000', 'Speed race, inventory risk, volatility'],
                  ].map(([s, c, r, risk], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800 dark:text-gray-200">{s}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{c}</td>
                      <td className="px-4 py-3 text-xs font-mono text-green-700 dark:text-green-400">{r}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">The Truth About Crypto Bots</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>Making money with crypto bots is possible. But don't expect a <strong className="text-white">"passive money machine."</strong> Bots require constant maintenance, and strategies must evolve as markets change.</p>
                <p>The funding rate bot is <strong className="text-white">the most stable and lowest barrier to entry</strong>. Liquidation bots let you <strong className="text-white">start with zero capital via flash loans</strong> but require real development skill. CEX-DEX arb is not worth attempting without infrastructure that can compete on speed.</p>
                <p>Most important rule: <strong className="text-white">start with money you can afford to lose, start small, and only go live when you fully understand every line of code.</strong></p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
