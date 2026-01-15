'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const metadata = {
  ko: {
    title: '2026년 미국 정부와 연준 & 스테이블코인과 RWA 토크나이제이션 전망 | Walits',
    description: '미국 부채 위기 속에서 펼쳐지는 스테이블코인 혁명과 자산 토큰화의 미래. GENIUS Act 시행과 연준-정부 갈등이 만들어갈 새로운 금융 질서를 분석합니다.',
  },
  en: {
    title: '2026 US Government vs Fed & Stablecoin and RWA Tokenization Outlook | Walits',
    description: 'The stablecoin revolution and future of asset tokenization amid the US debt crisis. Analyzing the new financial order shaped by GENIUS Act implementation and Fed-government conflict.',
  },
};

export default function StablecoinRegulation2026() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <Link href="/blog/" className="hover:underline">
                {language === 'ko' ? '블로그' : 'Blog'}
              </Link>
              {' / '}
              {language === 'ko' ? '금융 분석' : 'Financial Analysis'}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'ko'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                English
              </button>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {language === 'ko'
              ? '2026년 미국 정부와 연준 & 스테이블코인과 RWA 토크나이제이션 전망'
              : '2026 US Government vs Fed & Stablecoin and RWA Tokenization Outlook'
            }
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>{language === 'ko' ? '2026년 1월 15일' : 'January 15, 2026'}</time>
            <span>•</span>
            <span>{language === 'ko' ? '25분 읽기' : '25 min read'}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/tokenize.jpg"
            alt="Stablecoin and RWA Tokenization 2026"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                2026년이 시작되면서 미국 금융 시스템은 역사적 전환점을 맞이하고 있다. 38.5조 달러를 넘어선
                연방 부채, 약화되는 연준의 독립성, 그리고 트럼프 2기 행정부의 스테이블코인 제도화 전략이
                교차하는 지점에서 우리는 새로운 금융 질서의 탄생을 목격하고 있다. 이 글은 연준과 정부 간의
                갈등, 스테이블코인이 부채 관리 도구로 부상하는 과정, 그리고 모든 자산이 토큰화되는 미래에
                대한 종합적 분석을 담고 있다.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">프롤로그: 연준 시대의 종말과 정부 주도 경제의 시작</h2>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                As 2026 begins, the US financial system stands at a historic turning point. At the intersection of
                federal debt exceeding $38.5 trillion, weakening Fed independence, and the Trump administration's
                second-term stablecoin institutionalization strategy, we are witnessing the birth of a new financial
                order. This article provides a comprehensive analysis of the Fed-government conflict, the process by
                which stablecoins emerge as debt management tools, and the future where all assets become tokenized.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Prologue: The End of the Fed Era and the Beginning of Government-Led Economics</h2>
            </>
          )}

              <p>
                {language === 'ko' ? (
                  <>
                    지난 40여 년간 금융 시장을 지배해온 것은 연방준비제도(연준)였다. 폴 볼커 이후 앨런 그린스펀,
                    벤 버냉키, 재닛 옐런을 거쳐 제롬 파월에 이르기까지 연준 의장의 한마디가 시장을 움직였다.
                    금리를 조절하고 양적완화를 실시하며 경기 순환을 관리하는 것이 연준의 역할이었고, 투자자들은
                    연준의 정책 사이클을 읽는 것이 곧 투자 전략의 핵심이라 믿어왔다.
                  </>
                ) : (
                  <>
                    For over 40 years, the Federal Reserve has dominated financial markets. From Paul Volcker through
                    Alan Greenspan, Ben Bernanke, and Janet Yellen to Jerome Powell, a single word from the Fed Chair
                    could move markets. The Fed's role was to adjust interest rates, implement quantitative easing, and
                    manage business cycles, and investors believed that reading the Fed's policy cycle was the core of
                    investment strategy.
                  </>
                )}
              </p>

              <div className="not-prose my-8 p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-r-lg">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-3">
                  {language === 'ko' ? '2026년 미국 경제 위기 지표' : '2026 US Economic Crisis Indicators'}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                      {language === 'ko' ? '$38.5조' : '$38.5T'}
                    </div>
                    <div className="text-sm text-red-800 dark:text-red-300 mt-1">
                      {language === 'ko' ? '연방 부채' : 'Federal Debt'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">120%</div>
                    <div className="text-sm text-red-800 dark:text-red-300 mt-1">
                      {language === 'ko' ? 'GDP 대비 부채 비율' : 'Debt-to-GDP Ratio'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                      {language === 'ko' ? '$1조 2,160억' : '$1.216T'}
                    </div>
                    <div className="text-sm text-red-800 dark:text-red-300 mt-1">
                      {language === 'ko' ? '연간 총이자 비용' : 'Annual Total Interest Cost'}
                    </div>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    하지만 2026년을 맞이한 지금, 이러한 패러다임은 근본적으로 흔들리고 있다. 미국 연방 부채가
                    38.5조 달러를 돌파하면서 GDP 대비 부채 비율이 120%를 넘어섰고, 연간 총이자 비용만 1조 2,160억 달러로
                    국방비를 초월하는 상황이 되었다. 이는 단순한 숫자의 문제가 아니다. 2차 세계대전 이후 처음으로
                    미국 정부가 부채 문제로 인해 경제 정책의 주도권을 연준으로부터 되찾아와야 하는 상황에 놓인
                    것이다.
                  </>
                ) : (
                  <>
                    However, as we enter 2026, this paradigm is fundamentally shaking. With federal debt surpassing
                    $38.5 trillion, the debt-to-GDP ratio has exceeded 120%, and annual total interest costs alone
                    have reached $1.216 trillion, surpassing defense spending. This is not merely a numbers problem.
                    For the first time since World War II, the US government finds itself in a situation where it must
                    reclaim economic policy leadership from the Fed due to debt issues.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    트럼프 2기 행정부는 이러한 구조적 위기를 정면으로 인식하고 있다. 연준이 금리 인상을 통해
                    인플레이션을 잡으려 할 때마다 정부의 이자 부담은 기하급수적으로 늘어나고, 재정적자는 더욱
                    심화된다. 이제 정부는 더 이상 연준의 독립성이라는 명목 아래 손 놓고 있을 수만은 없는 지경에
                    이르렀다. 연준 시대는 저물고, 정부가 직접 경제 정책을 주도하는 새로운 시대가 열리고 있는
                    것이다.
                  </>
                ) : (
                  <>
                    The Trump administration's second term confronts this structural crisis head-on. Each time the Fed
                    attempts to curb inflation through rate hikes, the government's interest burden grows exponentially
                    and the fiscal deficit deepens. The government can no longer stand idle under the pretext of Fed
                    independence. The Fed era is waning, and a new era where the government directly leads economic
                    policy is opening.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? '1장. 부채의 딜레마: 트래핀과 재융자의 악순환' : 'Chapter 1. The Debt Dilemma: Triffin and the Vicious Cycle of Refinancing'}
              </h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '38.5조 달러의 무게' : 'The Weight of $38.5 Trillion'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    2025년 12월, 미국 연방 부채가 38.5조 달러를 돌파했다는 뉴스가 전 세계를 강타했다. 한화로
                    환산하면 약 5경 원에 달하는 이 천문학적 숫자는 이제 단순한 통계가 아니라 미국 경제의
                    구조적 취약성을 상징하는 지표가 되었다. GDP 대비 부채 비율 120%는 2차 세계대전 당시와
                    비슷한 수준이다. 그러나 당시와 결정적으로 다른 점이 있다. 1940년대에는 전쟁이 끝나고
                    경제가 회복되면서 부채 비율이 자연스럽게 감소했지만, 지금은 구조적 재정적자가 고착화되어
                    있어 부채는 계속해서 늘어날 수밖에 없는 상황이라는 것이다.
                  </>
                ) : (
                  <>
                    In December 2025, news that US federal debt had surpassed $38.5 trillion struck the world.
                    This astronomical figure is no longer mere statistics but has become a symbol of structural
                    vulnerabilities in the US economy. The 120% debt-to-GDP ratio is similar to levels during
                    World War II. However, there is a critical difference from that era. In the 1940s, the debt
                    ratio naturally decreased as the war ended and the economy recovered, but now structural
                    fiscal deficits are entrenched, meaning debt can only continue to grow.
                  </>
                )}
              </p>

              <div className="not-prose my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {language === 'ko' ? '예산 항목' : 'Budget Item'}
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {language === 'ko' ? '2024년 지출' : '2024 Spending'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {language === 'ko' ? '부채 총이자 비용' : 'Total Debt Interest Cost'}
                      </td>
                      <td className="px-6 py-4 text-sm text-right font-bold text-red-600 dark:text-red-400">
                        {language === 'ko' ? '$1조 2,160억' : '$1.216T'}
                      </td>
                    </tr>
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white pl-10">
                        {language === 'ko' ? '순이자 비용' : 'Net Interest Cost'}
                      </td>
                      <td className="px-6 py-4 text-sm text-right font-bold text-red-600 dark:text-red-400">
                        {language === 'ko' ? '$9,700억' : '$970B'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        {language === 'ko' ? '국방비' : 'Defense Spending'}
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-gray-900 dark:text-gray-300">
                        {language === 'ko' ? '$8,860억' : '$886B'}
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 italic">
                        {language === 'ko' ? '금리 1% 인상 시 추가 이자' : 'Additional interest on 1% rate hike'}
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-orange-600 dark:text-orange-400 font-semibold">
                        {language === 'ko' ? '+$3,850억' : '+$385B'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    더욱 심각한 문제는 이자 비용이다. 2024년 미국 정부가 지출한 총이자 비용은 1조 2,160억 달러로,
                    순이자 비용만 9,700억 달러에 달해 국방비 8,860억 달러를 훨씬 초과했다. 이는 메디케어, 교육,
                    인프라 투자 등 다른 모든 예산 항목에 압박을 가하고 있다. 만약 연준이 금리를 1% 포인트 더 올린다면
                    부채 38.5조 달러에 대한 이자 비용은 연간 3,850억 달러가 추가로 증가하게 된다. 이는 정치적으로나
                    재정적으로나 감당하기 어려운 수준이다.
                  </>
                ) : (
                  <>
                    The more serious problem is interest costs. Total interest costs paid by the US government in 2024
                    reached $1.216 trillion, with net interest costs alone at $970 billion, far exceeding defense spending
                    of $886 billion. This puts pressure on all other budget items including Medicare, education, and
                    infrastructure investment. If the Fed raises rates by another 1 percentage point, annual interest costs
                    on the $38.5 trillion debt would increase by an additional $385 billion. This is a politically and
                    fiscally unsustainable level.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '트래핀 딜레마의 재현' : 'The Resurrection of the Triffin Dilemma'}
              </h3>

              <div className="not-prose my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-200 mb-2 font-semibold">
                  {language === 'ko' ? '트래핀 딜레마란?' : 'What is the Triffin Dilemma?'}
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  {language === 'ko' ? (
                    <>
                      달러가 기축통화로 기능하려면 미국이 무역적자를 지속해야 하지만, 무역적자가 누적되면
                      결국 달러에 대한 신뢰가 무너진다는 모순. 1970년대 브레턴우즈 체제 붕괴의 원인.
                    </>
                  ) : (
                    <>
                      The paradox that for the dollar to function as a reserve currency, the US must maintain trade
                      deficits, but accumulated trade deficits ultimately undermine confidence in the dollar. The cause
                      of the Bretton Woods system collapse in the 1970s.
                    </>
                  )}
                </p>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    1960년 벨기에 경제학자 로버트 트래핀이 제기한 딜레마가 2020년대에 다시 현실화되고 있다.
                    트래핀 딜레마란, 달러가 기축통화로 기능하려면 미국이 무역적자를 지속해야 하지만, 무역적자가
                    누적되면 결국 달러에 대한 신뢰가 무너진다는 모순을 가리킨다. 1970년대 브레턴우즈 체제의
                    붕괴가 이를 증명했고, 지금 우리는 그 2막을 목격하고 있다.
                  </>
                ) : (
                  <>
                    The dilemma raised by Belgian economist Robert Triffin in 1960 is becoming reality again in the
                    2020s. The Triffin Dilemma refers to the contradiction that for the dollar to function as a reserve
                    currency, the US must maintain trade deficits, but accumulated deficits ultimately undermine
                    confidence in the dollar. The collapse of the Bretton Woods system in the 1970s proved this, and
                    now we are witnessing Act 2.
                  </>
                )}
              </p>

              <div className="not-prose my-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
                <h4 className="text-base font-bold text-yellow-900 dark:text-yellow-200 mb-3">
                  {language === 'ko' ? '2026년 재융자 위기' : '2026 Refinancing Crisis'}
                </h4>
                <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
                  <p>
                    • {language === 'ko' ? '1년 내 만기 도래 국채: ' : 'Treasuries maturing within 1 year: '}
                    <strong className="text-yellow-900 dark:text-yellow-200">
                      {language === 'ko' ? '11조 달러' : '$11 trillion'}
                    </strong>
                  </p>
                  <p>
                    • {language === 'ko' ? '중국 미국 국채 보유: 2013년 대비 ' : "China's US Treasury holdings: "}
                    <strong className="text-yellow-900 dark:text-yellow-200">
                      {language === 'ko' ? '50% 이하로 감소' : 'Down 50%+ from 2013 peak'}
                    </strong>
                  </p>
                  <p>
                    • {language === 'ko' ? '일본/유럽 투자자: 변동성 증가로 ' : 'Japan/Europe investors: '}
                    <strong className="text-yellow-900 dark:text-yellow-200">
                      {language === 'ko' ? '매수 의지 약화' : 'Weakened appetite amid volatility'}
                    </strong>
                  </p>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    중국은 이미 미국 국채 보유액을 2013년 정점 대비 절반 이하로 줄였다. 일본과 유럽 투자자들도
                    달러 자산의 변동성 증가로 인해 매수 의지가 약화되고 있다. 문제는 미국 정부가 매년 새로
                    발행하는 국채뿐만 아니라, 기존에 발행된 국채의 재융자(Refinancing) 물량까지 소화해야 한다는
                    점이다. 2026년 기준으로 향후 1년 내 만기가 도래하는 국채 규모만 11조 달러에 달한다.
                    이 물량을 누가 어떻게 매수할 것인가가 2026년 미국 경제의 최대 관건이다.
                  </>
                ) : (
                  <>
                    China has already reduced its US Treasury holdings to less than half of the 2013 peak. Japanese and
                    European investors are also showing weakened appetite due to increased volatility in dollar assets.
                    The problem is that the US government must absorb not only newly issued Treasuries each year, but
                    also the refinancing volume of previously issued debt. As of 2026, Treasuries maturing within the
                    next year alone amount to $11 trillion. Who will buy this volume and how is the biggest challenge
                    for the US economy in 2026.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '연준의 딜레마: 긴축이냐 완화냐' : "The Fed's Dilemma: Tighten or Ease?"}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    제롬 파월 연준 의장은 진퇴양난에 빠져 있다. 인플레이션을 잡기 위해서는 금리를 높게 유지하거나
                    추가로 인상해야 하지만, 그렇게 되면 정부의 이자 부담이 폭증하고 재정 위기가 현실화된다.
                    반대로 금리를 인하하면 인플레이션이 재점화되고 달러 가치가 하락하여 외국인 투자자들의
                    이탈을 가속화할 수 있다.
                  </>
                ) : (
                  <>
                    Fed Chair Jerome Powell is caught in a dilemma. To curb inflation, rates must be kept high or raised
                    further, but that would cause the government's interest burden to explode and make the fiscal crisis
                    real. Conversely, cutting rates could reignite inflation and cause dollar depreciation, accelerating
                    foreign investor exodus.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    2025년 말 역레포(Reverse Repo) 시장의 급격한 축소는 이러한 긴장을 상징적으로 보여준다.
                    역레포 잔액은 2023년 2조 달러를 넘었으나 2025년 말에는 5,000억 달러 이하로 감소했다.
                    이는 시중 유동성이 고갈되고 있다는 신호다. 동시에 SOFR(Secured Overnight Financing Rate)
                    스프레드가 상승하면서 단기 금융 시장의 압박이 커지고 있다. 연준은 양적긴축(QT)을 중단할지
                    여부를 놓고 고민 중이지만, 어떤 선택을 하든 부작용은 불가피하다.
                  </>
                ) : (
                  <>
                    The sharp contraction of the Reverse Repo market in late 2025 symbolically demonstrates this tension.
                    Reverse repo balances exceeded $2 trillion in 2023 but fell below $500 billion by late 2025. This
                    signals depleting market liquidity. Simultaneously, rising SOFR (Secured Overnight Financing Rate)
                    spreads are increasing pressure on short-term funding markets. The Fed is deliberating whether to
                    halt quantitative tightening (QT), but side effects are inevitable regardless of the choice.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? '2장. 연준 독립성의 종말: 정부 압박의 현실화' : 'Chapter 2. The End of Fed Independence: Government Pressure Becomes Real'}
              </h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '트럼프의 연준 비판 재개' : "Trump's Renewed Fed Criticism"}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    도널드 트럼프 대통령은 1기 재임 시절에도 연준을 공개적으로 비판한 바 있다. "파월은 금리를
                    너무 빨리 올린다", "연준이 경제를 망치고 있다"는 식의 발언이 끊이지 않았다. 2기에 접어든
                    지금, 트럼프는 더욱 노골적으로 연준에 금리 인하를 요구하고 있다. 2025년 12월 트럼프는
                    공개 석상에서 "연준은 정부의 이자 부담을 고려해야 한다"고 발언했고, 이는 연준의 독립성에
                    대한 정면 도전으로 받아들여졌다.
                  </>
                ) : (
                  <>
                    President Donald Trump publicly criticized the Fed during his first term. Statements like "Powell is
                    raising rates too quickly" and "The Fed is ruining the economy" were constant. Now in his second term,
                    Trump is even more openly demanding rate cuts from the Fed. In December 2025, Trump stated publicly
                    that "the Fed should consider the government's interest burden," which was taken as a frontal challenge
                    to Fed independence.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    물론 형식적으로 연준의 독립성은 여전히 유지되고 있다. 파월 의장의 임기는 2026년 5월까지이고,
                    법적으로 대통령이 연준 의장을 임의로 해임할 수는 없다. 하지만 실질적으로는 어떨까?
                    이자 비용이 국방비를 초월한 상황에서 연준이 정부의 압박을 무시하고 독자적인 정책을
                    펼칠 수 있을까?
                  </>
                ) : (
                  <>
                    Of course, formally Fed independence is still maintained. Powell's term lasts until May 2026, and
                    legally the president cannot arbitrarily dismiss the Fed Chair. But what about in practice? With
                    interest costs exceeding defense spending, can the Fed ignore government pressure and pursue
                    independent policy?
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '연준 독립성의 역사적 고찰' : 'Historical Perspective on Fed Independence'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    연준의 독립성은 1951년 재무부-연준 합의(Treasury-Fed Accord)를 통해 확립되었다.
                    2차 세계대전 중 연준은 정부의 전쟁 자금 조달을 돕기 위해 국채 금리를 낮게 고정했지만,
                    전쟁이 끝난 후 인플레이션이 폭등하자 독립성 회복이 절실해졌다. 이후 70년 이상 연준은
                    정치적 압력으로부터 독립된 통화정책을 펼쳐왔다.
                  </>
                ) : (
                  <>
                    Fed independence was established through the 1951 Treasury-Fed Accord. During World War II, the Fed
                    kept Treasury yields artificially low to help finance the war effort, but after the war ended and
                    inflation soared, independence restoration became urgent. For over 70 years since, the Fed has
                    conducted monetary policy independent of political pressure.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    하지만 2008년 금융위기 이후 상황이 달라졌다. 연준은 제로금리와 양적완화를 통해 정부의
                    부채 발행을 사실상 지원해왔다. 코로나19 팬데믹 기간에는 무제한 국채 매입을 선언하며
                    정부의 재정 정책을 뒷받침했다. 이제 연준과 정부의 경계는 흐릿해졌고, 연준이 정부 부채의
                    안정화를 무시할 수 없는 구조가 되어버렸다.
                  </>
                ) : (
                  <>
                    However, the situation changed after the 2008 financial crisis. The Fed has effectively supported
                    government debt issuance through zero rates and quantitative easing. During the COVID-19 pandemic,
                    it announced unlimited Treasury purchases, backstopping government fiscal policy. Now the boundary
                    between the Fed and government has blurred, and the Fed cannot ignore government debt stabilization.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '전 연준 수장들의 경고' : 'Warnings from Former Fed Chairs'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    전직 연준 의장들도 현재 상황에 대해 우려를 표명하고 있다. 벤 버냉키는 "금리 정책만으로는
                    재정, 물가, 고용 위기를 모두 해결할 수 없다"고 경고했다. 재닛 옐런(현 재무장관)은
                    "정부와 연준의 협력이 필요하지만, 그것이 연준의 독립성을 해치는 방식이어서는 안 된다"고
                    애매한 입장을 취했다. 하지만 현실은 그러한 이상적 균형을 허락하지 않는다. 정부의 압박은
                    점점 더 강해지고 있고, 연준은 선택의 여지가 줄어들고 있다.
                  </>
                ) : (
                  <>
                    Former Fed Chairs have also expressed concerns about the current situation. Ben Bernanke warned that
                    "interest rate policy alone cannot solve fiscal, inflation, and employment crises simultaneously."
                    Janet Yellen (current Treasury Secretary) took an ambiguous stance, stating "cooperation between
                    government and Fed is needed, but it should not undermine Fed independence." But reality does not
                    permit such ideal balance. Government pressure is intensifying, and the Fed's choices are narrowing.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? '3장. GENIUS Act: 스테이블코인이 부채 관리 도구가 되다' : 'Chapter 3. GENIUS Act: Stablecoins Become Debt Management Tools'}
              </h2>

              <div className="not-prose my-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-3">GENIUS Act</h3>
                <p className="text-sm text-purple-800 dark:text-purple-300 mb-2">
                  <strong>Guiding and Establishing National Innovation for US Stablecoins Act</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'ko' ? '서명' : 'Signed'}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {language === 'ko' ? '2025년 7월' : 'July 2025'}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'ko' ? '시행' : 'Effective'}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {language === 'ko' ? '2026년 1분기' : 'Q1 2026'}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '스테이블코인 제도화의 시작' : 'The Beginning of Stablecoin Institutionalization'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    2025년 7월, 트럼프 대통령은 역사적인 법안에 서명했다. GENIUS Act(Guiding and Establishing
                    National Innovation for US Stablecoins Act), 즉 미국 최초의 연방 차원 스테이블코인 규제
                    법안이다. 이 법은 18개월의 준비 기간을 거쳐 2026년부터 본격 시행되며, 스테이블코인 발행사에
                    대한 규제 체계를 확립한다.
                  </>
                ) : (
                  <>
                    In July 2025, President Trump signed a historic bill. The GENIUS Act (Guiding and Establishing
                    National Innovation for US Stablecoins Act), America's first federal-level stablecoin regulatory
                    framework. After an 18-month preparation period, the law takes full effect in 2026, establishing
                    a regulatory framework for stablecoin issuers.
                  </>
                )}
              </p>

              <div className="not-prose my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-purple-600 dark:bg-purple-700 px-6 py-3">
                  <h4 className="text-white font-bold">
                    {language === 'ko' ? 'GENIUS Act 핵심 내용' : 'GENIUS Act Key Provisions'}
                  </h4>
                </div>
                <div className="bg-white dark:bg-gray-900">
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {language === 'ko' ? '자금세탁방지(AML) 및 제재 준수' : 'Anti-Money Laundering (AML) & Sanctions Compliance'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {language === 'ko' ? '발행사의 법적 의무 강화' : 'Strengthened legal obligations for issuers'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-purple-50 dark:bg-purple-900/20">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {language === 'ko' ? '100% 담보 의무' : '100% Collateral Requirement'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {language === 'ko' ? 'USD 현금 또는 단기 국채(T-bills)로 전액 보유' : 'Full backing with USD cash or short-term Treasuries (T-bills)'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {language === 'ko' ? '월별 감사 및 공시' : 'Monthly Audits & Disclosures'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {language === 'ko' ? '투명성 확보를 위한 정기 보고' : 'Regular reporting for transparency'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    GENIUS Act의 핵심 내용은 다음과 같다. 첫째, 스테이블코인 발행사는 자금세탁방지(AML) 및
                    제재 준수 의무를 진다. 둘째, 발행된 스테이블코인의 100% 가치를 미국 달러 현금 또는
                    단기 국채(T-bills)로 담보해야 한다. 셋째, 월별 감사 및 공시 의무를 부과한다. 이는
                    표면적으로는 소비자 보호와 금융 안정성을 위한 조치지만, 이면에는 훨씬 더 전략적인 의도가
                    숨어 있다.
                  </>
                ) : (
                  <>
                    The key provisions of the GENIUS Act are as follows. First, stablecoin issuers must comply with
                    Anti-Money Laundering (AML) and sanctions obligations. Second, issued stablecoins must be fully
                    backed 100% by USD cash or short-term Treasuries (T-bills). Third, monthly audit and disclosure
                    requirements are imposed. While ostensibly for consumer protection and financial stability, there
                    is a far more strategic intent beneath the surface.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '단기 국채 수요 창출이라는 숨은 의도' : 'The Hidden Intent: Creating T-Bill Demand'}
              </h3>

              <div className="not-prose my-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                <h4 className="text-lg font-bold text-green-900 dark:text-green-200 mb-4">
                  {language === 'ko' ? '스테이블코인 시장 전망' : 'Stablecoin Market Outlook'}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">
                      {language === 'ko' ? '$1,500억' : '$150B'}
                    </div>
                    <div className="text-sm text-green-800 dark:text-green-300 mt-2">
                      {language === 'ko' ? '2026년 현재' : 'Current 2026'}
                    </div>
                  </div>
                  <div className="text-4xl text-green-600 dark:text-green-500">→</div>
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-green-700 dark:text-green-400">$1T+</div>
                    <div className="text-sm text-green-800 dark:text-green-300 mt-2">
                      {language === 'ko' ? '2028~2029년 예상' : 'Projected 2028-2029'}
                    </div>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    스테이블코인 시장은 2026년 현재 약 1,500억 달러 규모이며, GENIUS Act 시행 후 2~3년 내
                    1조 달러를 돌파할 것으로 예상된다. 만약 스테이블코인 발행사들이 담보로 단기 국채를
                    보유해야 한다면 어떻게 될까? 자연스럽게 단기 국채에 대한 수요가 폭증하게 된다. 이는
                    정부에게 두 가지 혜택을 준다.
                  </>
                ) : (
                  <>
                    The stablecoin market is currently around $150 billion in 2026, and is expected to surpass $1 trillion
                    within 2-3 years after GENIUS Act implementation. If stablecoin issuers must hold short-term Treasuries
                    as collateral, what happens? Demand for T-bills naturally explodes. This provides two benefits to
                    the government.
                  </>
                )}
              </p>

              <div className="not-prose my-8 grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
                    {language === 'ko' ? '재융자 부담 완화' : 'Refinancing Relief'}
                  </h5>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    {language === 'ko' ? (
                      <>11조 달러 재융자 물량을 소화할 새로운 수요처 확보. 중국·일본 이탈 공백 메우기.</>
                    ) : (
                      <>Securing new demand for $11T refinancing volume. Filling the gap left by China/Japan exits.</>
                    )}
                  </p>
                </div>
                <div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h5 className="font-bold text-purple-900 dark:text-purple-200 mb-2">
                    {language === 'ko' ? '금리 안정화' : 'Interest Rate Stabilization'}
                  </h5>
                  <p className="text-sm text-purple-800 dark:text-purple-300">
                    {language === 'ko' ? (
                      <>수요 증가 → 국채 가격 상승 → 금리 하락 → 정부 이자 비용 감소</>
                    ) : (
                      <>Increased demand → Treasury prices up → Rates down → Government interest costs reduced</>
                    )}
                  </p>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    첫째, 재융자 부담이 완화된다. 11조 달러에 달하는 단기 국채 재융자 물량을 소화할 새로운
                    수요처가 생기는 것이다. 중국과 일본 등 전통적 매수자들이 이탈하는 상황에서 스테이블코인
                    발행사들이 그 공백을 메울 수 있다. 둘째, 금리 안정화 효과가 있다. 수요가 증가하면
                    국채 가격이 오르고 금리는 내려간다. 정부의 이자 비용 부담이 줄어드는 것이다.
                  </>
                ) : (
                  <>
                    First, refinancing burdens are eased. New demand emerges to absorb the $11 trillion in short-term
                    Treasury refinancing volume. As traditional buyers like China and Japan exit, stablecoin issuers
                    can fill the gap. Second, there's an interest rate stabilization effect. Increased demand raises
                    Treasury prices and lowers rates. The government's interest cost burden decreases.
                  </>
                )}
              </p>

              <div className="not-prose my-6 p-5 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-500 rounded-r-lg">
                <p className="text-sm font-semibold text-orange-900 dark:text-orange-200 mb-2">
                  {language === 'ko' ? '핵심 인사이트' : 'Key Insight'}
                </p>
                <p className="text-sm text-orange-800 dark:text-orange-300">
                  {language === 'ko' ? (
                    <>
                      스테이블코인은 단순한 암호화폐가 아니라 <strong>정부의 유동성 조달 메커니즘</strong>의 일부가 되었다.
                      연준의 양적완화 없이도 부채 관리가 가능한 새로운 도구의 탄생.
                    </>
                  ) : (
                    <>
                      Stablecoins are not mere cryptocurrencies but have become part of the <strong>government's liquidity
                      procurement mechanism</strong>. The birth of a new tool for debt management without Fed QE.
                    </>
                  )}
                </p>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    이는 정부가 연준의 양적완화에 의존하지 않고도 부채 문제를 관리할 수 있는 새로운 도구를
                    얻게 되었음을 의미한다. 스테이블코인은 단순한 암호화폐가 아니라 정부의 유동성 조달
                    메커니즘의 일부가 된 것이다.
                  </>
                ) : (
                  <>
                    This means the government has acquired a new tool to manage debt issues without relying on Fed QE.
                    Stablecoins have become part of the government's liquidity procurement mechanism, not just
                    cryptocurrencies.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '달러 패권 강화 전략' : 'Dollar Hegemony Reinforcement Strategy'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    GENIUS Act의 또 다른 목적은 달러의 글로벌 패권을 디지털 시대에도 유지하는 것이다.
                    중국은 디지털 위안화(e-CNY)를 통해 달러 중심 결제 시스템에 도전하고 있고, 유럽도
                    디지털 유로 발행을 준비 중이다. 이러한 상황에서 미국은 스테이블코인을 통해 민간
                    영역에서 달러의 디지털화를 추진하고 있다.
                  </>
                ) : (
                  <>
                    Another purpose of the GENIUS Act is to maintain dollar global hegemony in the digital age.
                    China is challenging the dollar-centric payment system through the digital yuan (e-CNY), and
                    Europe is also preparing to issue the digital euro. In this context, the US is promoting dollar
                    digitalization in the private sector through stablecoins.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    USDC(Circle), USDT(Tether), PYUSD(PayPal) 등 주요 스테이블코인은 이미 글로벌 암호화폐
                    거래소와 탈중앙화 금융(DeFi) 생태계에서 결제 수단으로 자리 잡았다. GENIUS Act는
                    이러한 스테이블코인에 규제 명확성을 부여함으로써 더 많은 기업과 개인이 안심하고
                    사용할 수 있도록 만든다. 결과적으로 달러 표시 디지털 자산의 유통량이 증가하고,
                    이는 달러 패권의 확장으로 이어진다.
                  </>
                ) : (
                  <>
                    Major stablecoins like USDC (Circle), USDT (Tether), and PYUSD (PayPal) have already established
                    themselves as payment methods in global cryptocurrency exchanges and decentralized finance (DeFi)
                    ecosystems. The GENIUS Act provides regulatory clarity to these stablecoins, allowing more businesses
                    and individuals to use them confidently. As a result, circulation of dollar-denominated digital assets
                    increases, leading to expansion of dollar hegemony.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '2026년 시행 타임라인과 시장 반응' : '2026 Implementation Timeline and Market Response'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    GENIUS Act는 2026년 1분기부터 본격 시행된다. 발행사들은 규제 준수를 위해 준비에
                    한창이다. Coinbase는 이자 지급 제한 조항에 대해 반발하고 있지만, 전반적으로는
                    규제 명확성 확보를 환영하는 분위기다. 시장 전문가들은 GENIUS Act 시행 후 스테이블코인
                    총 발행량(TVL, Total Value Locked)이 2026년 내 1조 달러를 돌파할 것으로 전망한다.
                  </>
                ) : (
                  <>
                    The GENIUS Act takes full effect starting Q1 2026. Issuers are busy preparing for regulatory compliance.
                    While Coinbase is pushing back against interest payment restriction clauses, the overall atmosphere
                    welcomes regulatory clarity. Market experts forecast that total stablecoin issuance (TVL, Total Value
                    Locked) will surpass $1 trillion within 2026 after GENIUS Act implementation.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    BlackRock, Fidelity 등 전통 금융 기관들도 스테이블코인 시장 진입을 준비하고 있다.
                    이들은 자산관리(AUM) 규모가 수조 달러에 달하는 만큼, 스테이블코인 발행에 참여하면
                    단기 국채 수요에 막대한 영향을 미칠 것이다. 정부 입장에서는 재융자 문제 해결의
                    핵심 파트너가 탄생하는 셈이다.
                  </>
                ) : (
                  <>
                    Traditional financial institutions like BlackRock and Fidelity are also preparing to enter the
                    stablecoin market. Given their assets under management (AUM) reach trillions of dollars, their
                    participation in stablecoin issuance will have enormous impact on T-bill demand. From the government's
                    perspective, key partners for solving the refinancing problem are being born.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? 'Securities Clarity Act: RWA 토크나이제이션의 법적 기반' : 'Securities Clarity Act: The Legal Foundation for RWA Tokenization'}
              </h3>

              <div className="not-prose my-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200 mb-3">Securities Clarity Act</h3>
                <p className="text-sm text-teal-800 dark:text-teal-300 mb-2">
                  <strong>
                    {language === 'ko' ? '증권형 토큰의 법적 지위 명확화 법안' : 'Act to Clarify Legal Status of Security Tokens'}
                  </strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'ko' ? '목적' : 'Purpose'}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {language === 'ko' ? '디지털 자산의 증권 여부 명확화' : 'Clarify security status of digital assets'}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'ko' ? '효과' : 'Effect'}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {language === 'ko' ? 'RWA 토큰 발행 규제 불확실성 해소' : 'Resolve regulatory uncertainty for RWA token issuance'}
                    </p>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    GENIUS Act가 스테이블코인의 법적 틀을 마련했다면, Securities Clarity Act(증권 명확화 법안)는
                    RWA 토큰을 포함한 모든 디지털 자산의 증권 여부를 명확히 정의하는 법안이다. 2026년, 이 법안은
                    토크나이제이션 시장의 폭발적 성장을 가능하게 하는 핵심 촉매제가 될 것이다.
                  </>
                ) : (
                  <>
                    While the GENIUS Act established the legal framework for stablecoins, the Securities Clarity Act
                    clearly defines the security status of all digital assets including RWA tokens. In 2026, this bill
                    will be the key catalyst enabling explosive growth in the tokenization market.
                  </>
                )}
              </p>

              <div className="not-prose my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-teal-600 dark:bg-teal-700 px-6 py-3">
                  <h4 className="text-white font-bold">
                    {language === 'ko' ? 'Securities Clarity Act 핵심 내용' : 'Securities Clarity Act Key Provisions'}
                  </h4>
                </div>
                <div className="bg-white dark:bg-gray-900">
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {language === 'ko' ? 'Howey Test 현대화' : 'Modernizing the Howey Test'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {language === 'ko' ? '1946년 대법원 판례를 디지털 자산에 맞게 재해석' : 'Reinterpreting 1946 Supreme Court precedent for digital assets'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-teal-50 dark:bg-teal-900/20">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {language === 'ko' ? 'Safe Harbor 조항' : 'Safe Harbor Provisions'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {language === 'ko' ? '충분히 분산된 네트워크의 토큰은 증권이 아님을 명시' : 'Specifies that sufficiently decentralized network tokens are not securities'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {language === 'ko' ? 'RWA 토큰 가이드라인' : 'RWA Token Guidelines'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {language === 'ko' ? '부동산·채권·주식 토큰의 증권 등록 절차 간소화' : 'Streamlined security registration for real estate, bond, and equity tokens'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    이 법안의 가장 중요한 의미는 규제 불확실성의 제거다. 그동안 SEC는 대부분의 암호화폐를
                    미등록 증권으로 간주하며 강력한 집행 조치를 취해왔다. Ripple, Coinbase 등 주요 기업들이
                    SEC와 장기간 법정 공방을 벌여야 했던 이유도 여기에 있다. Securities Clarity Act는
                    명확한 기준을 제시함으로써 이러한 불확실성을 해소한다.
                  </>
                ) : (
                  <>
                    The most important significance of this bill is removing regulatory uncertainty. The SEC has long
                    treated most cryptocurrencies as unregistered securities and taken strong enforcement actions.
                    This is why major companies like Ripple and Coinbase had to engage in prolonged legal battles with
                    the SEC. The Securities Clarity Act resolves this uncertainty by providing clear standards.
                  </>
                )}
              </p>

              <div className="not-prose my-6 p-5 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
                <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                  {language === 'ko' ? '왜 2026년이 중요한가?' : 'Why is 2026 Important?'}
                </p>
                <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-3">
                  {language === 'ko' ? (
                    <>
                      GENIUS Act + Securities Clarity Act의 조합은 스테이블코인부터 RWA 토큰까지
                      전체 디지털 자산 생태계의 법적 기반을 완성한다.
                    </>
                  ) : (
                    <>
                      The combination of GENIUS Act + Securities Clarity Act completes the legal foundation for the
                      entire digital asset ecosystem from stablecoins to RWA tokens.
                    </>
                  )}
                </p>
                <ul className="text-sm text-yellow-800 dark:text-yellow-300 space-y-2 list-none">
                  <li>
                    {language === 'ko' ? '스테이블코인: GENIUS Act로 규제 명확성 확보' : 'Stablecoins: Regulatory clarity via GENIUS Act'}
                  </li>
                  <li>
                    {language === 'ko' ? 'RWA 토큰: Securities Clarity Act로 발행 절차 간소화' : 'RWA Tokens: Streamlined issuance via Securities Clarity Act'}
                  </li>
                  <li>
                    {language === 'ko' ? '결과: BlackRock, Fidelity 등 대형 기관의 대규모 시장 진입' : 'Result: Major institutions like BlackRock and Fidelity entering at scale'}
                  </li>
                </ul>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    BlackRock의 Larry Fink CEO는 "모든 금융 자산은 토큰화될 것"이라고 공언했다.
                    하지만 이러한 비전이 실현되려면 명확한 규제 프레임워크가 필수적이다.
                    Securities Clarity Act는 바로 그 마지막 퍼즐 조각이다. 2026년, 이 법안이 시행되면
                    부동산부터 채권, 주식, 원자재까지 모든 자산의 토큰화가 본격화될 것이다.
                  </>
                ) : (
                  <>
                    BlackRock CEO Larry Fink has declared that "all financial assets will be tokenized." However, for
                    this vision to be realized, a clear regulatory framework is essential. The Securities Clarity Act
                    is that final puzzle piece. When this bill takes effect in 2026, tokenization of all assets from
                    real estate to bonds, equities, and commodities will begin in earnest.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? '4장. 스테이블코인 확산과 자산 토크나이제이션의 미래' : 'Chapter 4. Stablecoin Proliferation and the Future of Asset Tokenization'}
              </h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '스테이블코인에서 RWA 토크나이제이션으로' : 'From Stablecoins to RWA Tokenization'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    스테이블코인의 제도화는 더 큰 변화의 시작일 뿐이다. 일단 스테이블코인이 규제 체계
                    안에서 안정적으로 운영되면, 다음 단계는 현실 세계 자산(RWA, Real World Assets)의
                    토크나이제이션이다. 부동산, 채권, 주식, 상품 등 모든 자산을 블록체인 위에서 토큰으로
                    발행하고 거래하는 시대가 열리는 것이다.
                  </>
                ) : (
                  <>
                    Stablecoin institutionalization is just the beginning of a larger transformation. Once stablecoins
                    operate stably within the regulatory framework, the next step is tokenization of Real World Assets
                    (RWA). An era opens where all assets—real estate, bonds, equities, commodities—are issued and traded
                    as tokens on the blockchain.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    이미 그 조짐은 곳곳에서 나타나고 있다. BlackRock은 2024년 BUIDL(BlackRock USD
                    Institutional Digital Liquidity Fund)이라는 토큰화된 머니마켓펀드를 출시했다.
                    이는 투자자들이 블록체인 위에서 미국 국채에 투자하고 이자를 받을 수 있도록 한 상품이다.
                    JP모건은 Onyx 플랫폼을 통해 담보부채권(Repo) 거래를 토큰화하고 있다. 골드만삭스는
                    디지털 자산 플랫폼 개발에 수억 달러를 투자하고 있다.
                  </>
                ) : (
                  <>
                    Signs are already emerging everywhere. BlackRock launched BUIDL (BlackRock USD Institutional Digital
                    Liquidity Fund), a tokenized money market fund, in 2024. This product allows investors to invest in
                    US Treasuries and receive interest on the blockchain. JPMorgan is tokenizing collateralized repo
                    transactions through its Onyx platform. Goldman Sachs is investing hundreds of millions in digital
                    asset platform development.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '토크나이제이션의 메커니즘과 경제적 효과' : 'Tokenization Mechanisms and Economic Effects'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    자산 토크나이제이션이란 무엇인가? 간단히 말해, 전통적으로 종이 증서나 중앙화된
                    데이터베이스로 관리되던 자산의 소유권을 블록체인상의 토큰으로 표현하는 것이다.
                    예를 들어, 10억 원짜리 부동산을 1,000만 개의 토큰으로 쪼개어 발행하면, 개인 투자자도
                    1만 원어치만 사서 부동산에 투자할 수 있다. 이는 유동성, 접근성, 투명성 면에서
                    혁명적 변화를 가져온다.
                  </>
                ) : (
                  <>
                    What is asset tokenization? Simply put, it's representing ownership of assets traditionally managed
                    through paper certificates or centralized databases as tokens on the blockchain. For example, if
                    a $1 billion property is divided into 10 million tokens, individual investors can invest in real
                    estate by purchasing just $100 worth. This brings revolutionary changes in liquidity, accessibility,
                    and transparency.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    미국 정부 입장에서 자산 토크나이제이션은 경제 활성화의 새로운 엔진이다. 토큰화된
                    자산은 24시간 거래 가능하고, 글로벌 투자자에게 개방되며, 중개 비용이 대폭 절감된다.
                    이는 자본의 효율적 배분을 촉진하고 GDP 성장에 기여한다. 정부가 부채 비율을 낮추는
                    방법은 두 가지다. 부채 총량을 줄이거나, GDP를 늘리거나. 전자는 정치적으로 불가능하므로,
                    후자에 집중할 수밖에 없다. 자산 토크나이제이션은 GDP 성장의 새로운 동력이 되는 것이다.
                  </>
                ) : (
                  <>
                    From the US government's perspective, asset tokenization is a new engine for economic activation.
                    Tokenized assets can be traded 24/7, are open to global investors, and drastically reduce
                    intermediation costs. This promotes efficient capital allocation and contributes to GDP growth.
                    There are two ways for the government to reduce the debt ratio: reduce total debt or increase GDP.
                    Since the former is politically impossible, focus must be on the latter. Asset tokenization becomes
                    the new driver of GDP growth.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '2026년 토크나이제이션 시나리오' : '2026 Tokenization Scenario'}
              </h3>

              <div className="not-prose my-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h4 className="text-lg font-bold text-indigo-900 dark:text-indigo-200 mb-4">
                    {language === 'ko' ? '2026년 분기별 로드맵' : '2026 Quarterly Roadmap'}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 dark:bg-indigo-700 rounded-lg flex items-center justify-center text-white font-bold">Q1</div>
                      <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">
                          {language === 'ko' ? 'GENIUS Act 시행' : 'GENIUS Act Implementation'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'ko' ? '스테이블코인 TVL 급증, 규제 명확성 확보' : 'Stablecoin TVL surges, regulatory clarity secured'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-purple-600 dark:bg-purple-700 rounded-lg flex items-center justify-center text-white font-bold">Q2</div>
                      <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">
                          {language === 'ko' ? '대형 자산운용사 진입' : 'Major Asset Managers Enter'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'ko' ? 'BlackRock, State Street, Vanguard 등 RWA 토큰 출시' : 'BlackRock, State Street, Vanguard launch RWA tokens'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-pink-600 dark:bg-pink-700 rounded-lg flex items-center justify-center text-white font-bold">Q3</div>
                      <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">
                          {language === 'ko' ? '규제 완화 & 세제 혜택' : 'Deregulation & Tax Benefits'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'ko' ? '"디지털 자산 수도" 비전, 양도세 감면, 발행 간소화' : '"Digital Asset Capital" vision, capital gains relief, streamlined issuance'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-red-600 dark:bg-red-700 rounded-lg flex items-center justify-center text-white font-bold">Q4</div>
                      <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">
                          {language === 'ko' ? '시장 폭발적 성장' : 'Explosive Market Growth'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === 'ko' ? '토큰화 자산 시장 수조 달러 규모 달성 전망' : 'Tokenized asset market projected to reach trillions'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    2026년을 기점으로 토크나이제이션 시장이 폭발적으로 성장할 것으로 예상된다.
                    1분기에는 GENIUS Act 시행으로 스테이블코인 TVL이 급증한다. 2분기부터 BlackRock,
                    State Street, Vanguard 등 자산운용사들이 본격적으로 RWA 토큰 상품을 출시한다.
                    국채와 부동산이 먼저 토큰화되고, 이어서 기업채, 주식, 원자재로 확대된다.
                  </>
                ) : (
                  <>
                    Starting in 2026, the tokenization market is expected to grow explosively. In Q1, stablecoin TVL
                    surges with GENIUS Act implementation. From Q2, asset managers like BlackRock, State Street, and
                    Vanguard begin launching RWA token products in earnest. Treasuries and real estate are tokenized
                    first, followed by expansion to corporate bonds, equities, and commodities.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    3분기에는 트럼프 행정부가 "미국을 디지털 자산 수도로"라는 비전 아래 규제 완화와
                    세제 혜택을 발표할 가능성이 크다. 토큰화된 자산 거래에 대한 양도소득세 감면,
                    블록체인 기반 증권 발행 간소화, 디지털 자산 거래소에 대한 라이선스 발급 등이
                    추진될 것이다. 연말까지 토큰화된 자산 시장 규모가 수조 달러 규모로 성장할 것이라는
                    전망도 나온다.
                  </>
                ) : (
                  <>
                    In Q3, the Trump administration is likely to announce deregulation and tax benefits under the vision
                    of "making America the digital asset capital." Capital gains tax relief for tokenized asset trading,
                    streamlined blockchain-based security issuance, and licensing for digital asset exchanges will be
                    pursued. Projections suggest the tokenized asset market will grow to trillions of dollars by year-end.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '자산별 토크나이제이션 효과' : 'Tokenization Effects by Asset Class'}
              </h3>

              <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
                  <h5 className="font-bold text-cyan-900 dark:text-cyan-200 mb-2">
                    {language === 'ko' ? '국채 & T-bills' : 'Treasuries & T-bills'}
                  </h5>
                  <ul className="text-sm text-cyan-800 dark:text-cyan-300 space-y-2">
                    <li>{language === 'ko' ? '스테이블코인 담보 수요 창출' : 'Creates stablecoin collateral demand'}</li>
                    <li>{language === 'ko' ? '재융자 용이' : 'Easier refinancing'}</li>
                    <li>{language === 'ko' ? '이자 비용 절감' : 'Reduced interest costs'}</li>
                    <li>{language === 'ko' ? '부채 관리 유연성 확보' : 'Flexible debt management'}</li>
                  </ul>
                </div>
                <div className="p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
                  <h5 className="font-bold text-emerald-900 dark:text-emerald-200 mb-2">
                    {language === 'ko' ? '부동산' : 'Real Estate'}
                  </h5>
                  <ul className="text-sm text-emerald-800 dark:text-emerald-300 space-y-2">
                    <li>{language === 'ko' ? '소액 투자자 진입 장벽 하락' : 'Lower barriers for retail investors'}</li>
                    <li>{language === 'ko' ? '자본 유입 촉진' : 'Promotes capital inflow'}</li>
                    <li>{language === 'ko' ? '거래량 증가' : 'Increased trading volume'}</li>
                    <li>{language === 'ko' ? '경제 활성화' : 'Economic activation'}</li>
                  </ul>
                </div>
                <div className="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                  <h5 className="font-bold text-amber-900 dark:text-amber-200 mb-2">
                    {language === 'ko' ? '주식' : 'Equities'}
                  </h5>
                  <ul className="text-sm text-amber-800 dark:text-amber-300 space-y-2">
                    <li>{language === 'ko' ? '글로벌 24시간 거래' : 'Global 24/7 trading'}</li>
                    <li>{language === 'ko' ? '즉시 결제' : 'Instant settlement'}</li>
                    <li>{language === 'ko' ? '거래 효율성 극대화' : 'Maximized trading efficiency'}</li>
                    <li>{language === 'ko' ? '거래세 수입 증가' : 'Increased transaction tax revenue'}</li>
                  </ul>
                </div>
                <div className="p-5 bg-rose-50 dark:bg-rose-900/20 rounded-lg border-2 border-rose-300 dark:border-rose-700">
                  <h5 className="font-bold text-rose-900 dark:text-rose-200 mb-2">
                    {language === 'ko' ? '상품' : 'Commodities'}
                  </h5>
                  <ul className="text-sm text-rose-800 dark:text-rose-300 space-y-2">
                    <li>{language === 'ko' ? '글로벌 접근성 향상' : 'Enhanced global accessibility'}</li>
                    <li>{language === 'ko' ? '스테이블코인 결제' : 'Stablecoin settlement'}</li>
                    <li>{language === 'ko' ? 'GDP 기여도 증가' : 'Increased GDP contribution'}</li>
                    <li>{language === 'ko' ? '달러 디지털 패권 강화' : 'Reinforced dollar digital hegemony'}</li>
                  </ul>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    국채와 T-bills의 토크나이제이션은 스테이블코인 담보로서 수요를 창출하며, 재융자를
                    용이하게 만든다. 정부는 이를 통해 이자 비용을 절감하고 부채 관리의 유연성을 확보한다.
                    부동산의 토크나이제이션은 소액 투자자의 진입 장벽을 낮춰 자본 유입을 촉진한다.
                    오프라인 자산이 온라인으로 이동하면서 거래량이 증가하고, 이는 경제 활성화로 이어진다.
                  </>
                ) : (
                  <>
                    Tokenization of Treasuries and T-bills creates demand as stablecoin collateral and facilitates
                    refinancing. Through this, the government reduces interest costs and secures flexibility in debt
                    management. Real estate tokenization lowers barriers for retail investors and promotes capital inflow.
                    As offline assets move online, trading volume increases, leading to economic activation.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    주식과 상품의 토크나이제이션은 글로벌 24시간 거래를 가능하게 하며, 스테이블코인을
                    통한 즉시 결제로 거래 효율성을 극대화한다. 거래세 수입과 GDP 기여도가 증가한다.
                    이 모든 과정에서 스테이블코인은 결제 수단으로 기능하며, 달러의 디지털 패권을
                    공고히 한다.
                  </>
                ) : (
                  <>
                    Equity and commodity tokenization enables global 24/7 trading and maximizes trading efficiency through
                    instant settlement via stablecoins. Transaction tax revenue and GDP contribution increase. Throughout
                    this process, stablecoins function as payment instruments, solidifying dollar digital hegemony.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? '5장. 정부 주도 경제의 완성: GDP 성장과 부채비율 안정화' : 'Chapter 5. Completion of Government-Led Economics: GDP Growth and Debt Ratio Stabilization'}
              </h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '부채 총량이 아닌 비율 관리' : 'Managing Ratios, Not Total Debt'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    미국 정부는 38.5조 달러의 부채를 갚을 생각이 없다. 아니, 갚을 수도 없다. 대신
                    GDP를 빠르게 성장시켜 부채/GDP 비율을 낮추는 전략을 택하고 있다. 현재 120% 수준인
                    부채 비율을 100% 이하로 낮추려면, 부채를 줄이거나 GDP를 늘려야 한다. 정치적으로
                    부채 삭감은 불가능하므로, 유일한 답은 GDP 성장이다.
                  </>
                ) : (
                  <>
                    The US government has no intention of repaying $38.5 trillion in debt. Or rather, it cannot. Instead,
                    it's adopting a strategy of rapidly growing GDP to lower the debt/GDP ratio. To reduce the current
                    120% debt ratio below 100%, debt must be reduced or GDP increased. Since debt reduction is politically
                    impossible, the only answer is GDP growth.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    트럼프 행정부는 AI, 인프라, 제조업 리쇼어링에 2조 달러 이상을 투자하겠다고 밝혔다.
                    이는 재정적자를 더 늘리는 정책이지만, 단기적으로는 GDP 성장률을 끌어올릴 것이다.
                    여기에 스테이블코인과 자산 토크나이제이션이 더해지면, 디지털 경제 부문의 성장이
                    전체 GDP를 밀어올리는 효과가 발생한다.
                  </>
                ) : (
                  <>
                    The Trump administration has announced investment of over $2 trillion in AI, infrastructure, and
                    manufacturing reshoring. While this policy increases the fiscal deficit, it will boost GDP growth
                    in the short term. Adding stablecoins and asset tokenization creates an effect where digital economy
                    sector growth pushes up overall GDP.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? '스테이블코인-토크나이제이션-GDP 성장의 선순환' : 'The Virtuous Cycle: Stablecoins-Tokenization-GDP Growth'}
              </h3>

              <div className="not-prose my-8 p-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
                <h4 className="text-lg font-bold text-green-900 dark:text-green-200 mb-4 text-center">
                  {language === 'ko' ? '선순환 구조' : 'Virtuous Cycle Structure'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 dark:bg-green-700 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {language === 'ko' ? 'GENIUS Act → 스테이블코인 제도화 → 단기 국채 수요 창출' : 'GENIUS Act → Stablecoin institutionalization → T-bill demand creation'}
                    </p>
                  </div>
                  <div className="text-center text-2xl text-green-600 dark:text-green-500">↓</div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {language === 'ko' ? '재융자 부담 완화 → 이자 비용 감소' : 'Refinancing relief → Interest costs reduced'}
                    </p>
                  </div>
                  <div className="text-center text-2xl text-blue-600 dark:text-blue-500">↓</div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 dark:bg-purple-700 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {language === 'ko' ? 'RWA 토크나이제이션 폭발적 성장' : 'Explosive RWA tokenization growth'}
                    </p>
                  </div>
                  <div className="text-center text-2xl text-purple-600 dark:text-purple-500">↓</div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-600 dark:bg-pink-700 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <p className="text-sm text-gray-900 dark:text-white font-medium">
                      {language === 'ko' ? '온체인 거래 활성화 → 경제 효율성 증가 → 새로운 비즈니스 모델' : 'On-chain trading activation → Economic efficiency gains → New business models'}
                    </p>
                  </div>
                  <div className="text-center text-2xl text-pink-600 dark:text-pink-500">↓</div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-800 dark:to-blue-800 rounded font-bold">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 dark:bg-orange-700 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {language === 'ko' ? 'GDP 성장 → 부채/GDP 비율 안정화' : 'GDP growth → Debt/GDP ratio stabilization'}
                    </p>
                  </div>
                </div>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    이제 전체 그림이 그려진다. 첫째, GENIUS Act로 스테이블코인이 제도화되면서 단기 국채
                    수요가 창출된다. 둘째, 재융자 부담이 완화되고 이자 비용이 감소한다. 셋째,
                    스테이블코인을 기반으로 RWA 토크나이제이션이 폭발적으로 성장한다. 넷째, 온체인
                    자산 거래가 활성화되면서 경제 전반의 효율성이 증가하고 새로운 비즈니스 모델이
                    탄생한다. 다섯째, GDP가 성장하면서 부채/GDP 비율이 안정화된다.
                  </>
                ) : (
                  <>
                    Now the full picture emerges. First, the GENIUS Act institutionalizes stablecoins, creating T-bill
                    demand. Second, refinancing burdens ease and interest costs decrease. Third, RWA tokenization grows
                    explosively based on stablecoins. Fourth, on-chain asset trading activates, increasing overall
                    economic efficiency and birthing new business models. Fifth, GDP grows and the debt/GDP ratio
                    stabilizes.
                  </>
                )}
              </p>

              <div className="not-prose my-6 p-5 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 rounded-r-lg">
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
                  {language === 'ko' ? '결론' : 'Conclusion'}
                </p>
                <p className="text-sm text-indigo-800 dark:text-indigo-300">
                  {language === 'ko' ? (
                    <>
                      이 선순환이 작동하면, 정부는 연준의 금리 정책에 의존하지 않고도 경제를 관리할 수 있게 된다.
                      <strong className="block mt-2">연준 시대의 종말 → 정부 주도 경제 시대의 본격화</strong>
                    </>
                  ) : (
                    <>
                      If this virtuous cycle operates, the government can manage the economy without relying on Fed rate policy.
                      <strong className="block mt-2">End of the Fed Era → Full-fledged Government-Led Economic Era</strong>
                    </>
                  )}
                </p>
              </div>

              <p>
                {language === 'ko' ? (
                  <>
                    이 선순환이 작동하면, 정부는 연준의 금리 정책에 의존하지 않고도 경제를 관리할 수
                    있게 된다. 연준 시대는 완전히 막을 내리고, 정부 주도 경제 시대가 본격화되는 것이다.
                  </>
                ) : (
                  <>
                    If this virtuous cycle operates, the government can manage the economy without relying on Fed
                    interest rate policy. The Fed era completely closes, and the government-led economic era begins
                    in earnest.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? 'AI 생산성과 인플레이션 리스크' : 'AI Productivity and Inflation Risk'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    물론 낙관적 시나리오만 있는 것은 아니다. 정부의 대규모 재정 지출이 GDP 성장으로
                    이어지려면 생산성 향상이 뒷받침되어야 한다. 트럼프 행정부는 AI를 그 핵심 동력으로
                    보고 있다. OpenAI, Google, Microsoft 등이 주도하는 생산성 AI가 광범위하게 도입되면,
                    같은 노동력으로 더 많은 산출을 낼 수 있다는 논리다.
                  </>
                ) : (
                  <>
                    Of course, there isn't only an optimistic scenario. For massive government fiscal spending to lead
                    to GDP growth, productivity improvements must be supported. The Trump administration views AI as
                    the core driver. The logic is that widespread adoption of productivity AI led by OpenAI, Google,
                    and Microsoft will enable greater output with the same labor force.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    하지만 AI 생산성이 실제로 발현되기까지는 시간이 걸린다. 2026~2027년은 AI 투자
                    버블이 지속되는 시기일 가능성이 크다. 투자만 폭증하고 실제 생산성 개선은 더디게
                    나타난다면 어떻게 될까? 인플레이션이 재점화되고, 연준은 다시 금리 인상 압박을
                    받게 된다. 그렇게 되면 정부-연준 갈등이 재격화되고, 부채 위기가 현실화될 수 있다.
                  </>
                ) : (
                  <>
                    However, it takes time for AI productivity to actually materialize. 2026-2027 will likely be a
                    period where the AI investment bubble persists. What if investment explodes but actual productivity
                    improvements appear slowly? Inflation could reignite, and the Fed would face renewed pressure to
                    raise rates. This could re-intensify government-Fed conflict and make the debt crisis real.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                {language === 'ko' ? '6장. Walits의 기회: 규제 준수 Custody의 시대' : 'Chapter 6. Walits Opportunity: The Era of Compliant Custody'}
              </h2>

              <div className="not-prose my-8 p-6 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-3">
                  {language === 'ko' ? 'Walits: 토큰화 시대의 핵심 인프라' : 'Walits: Core Infrastructure for the Tokenization Era'}
                </h3>
                <p className="text-blue-100 mb-4">
                  {language === 'ko' ? '전통 금융의 증권 보관소처럼, 디지털 자산 시대의 필수 인프라' : 'Like securities depositories in traditional finance, essential infrastructure for the digital asset era'}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur p-3 rounded">
                    <p className="font-semibold">{language === 'ko' ? '한국' : 'Korea'}</p>
                    <p className="text-sm text-blue-100">
                      {language === 'ko' ? '자본시장법 준수' : 'Capital Markets Act Compliant'}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-3 rounded">
                    <p className="font-semibold">{language === 'ko' ? '미국' : 'USA'}</p>
                    <p className="text-sm text-blue-100">
                      {language === 'ko' ? 'GENIUS Act 준수' : 'GENIUS Act Compliant'}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? 'STO와 RWA Custody의 필요성' : 'The Need for STO and RWA Custody'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    스테이블코인과 토크나이제이션 시대가 열리면, 가장 중요한 인프라는 무엇일까?
                    바로 안전하고 규제를 준수하는 디지털 자산 보관(Custody) 시스템이다. 전통 금융에서
                    증권을 안전하게 보관하는 것이 핵심 인프라였듯이, 디지털 자산 시대에는 개인키 관리와
                    토큰 보관이 핵심 인프라가 된다.
                  </>
                ) : (
                  <>
                    As the stablecoin and tokenization era opens, what is the most important infrastructure? It is
                    safe and compliant digital asset custody systems. Just as securely storing securities was core
                    infrastructure in traditional finance, private key management and token custody become core
                    infrastructure in the digital asset era.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    Walits는 바로 이 지점에서 결정적인 역할을 할 수 있다. 한국의 자본시장법과 미국의
                    GENIUS Act를 모두 준수하는 Custody 솔루션을 제공함으로써, STO(Security Token
                    Offering) 발행사와 RWA 토크나이제이션 프로젝트에 필수적인 파트너가 될 수 있다.
                  </>
                ) : (
                  <>
                    Walits can play a decisive role at this juncture. By providing custody solutions compliant with
                    both Korea's Capital Markets Act and the US GENIUS Act, it can become an essential partner for
                    STO (Security Token Offering) issuers and RWA tokenization projects.
                  </>
                )}
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                {language === 'ko' ? 'GENIUS Act 준수 HSM/MPC 시스템' : 'GENIUS Act-Compliant HSM/MPC Systems'}
              </h3>

              <p>
                {language === 'ko' ? (
                  <>
                    GENIUS Act는 스테이블코인 발행사에게 담보 자산의 안전한 보관을 의무화한다.
                    이는 단순히 콜드월렛에 보관하는 수준을 넘어, 기관급 보안 시스템을 요구한다.
                    Walits가 제공하는 HSM(Hardware Security Module) 기반 키 관리 시스템과 MPC(Multi-Party
                    Computation) 기술은 이러한 요구사항을 충족시킨다.
                  </>
                ) : (
                  <>
                    The GENIUS Act mandates secure storage of collateral assets by stablecoin issuers. This requires
                    institutional-grade security systems beyond simply storing in cold wallets. Walits' HSM (Hardware
                    Security Module)-based key management system and MPC (Multi-Party Computation) technology meet
                    these requirements.
                  </>
                )}
              </p>

              <p>
                {language === 'ko' ? (
                  <>
                    HSM은 개인키를 물리적으로 격리된 하드웨어 장치에 저장하여, 소프트웨어 해킹으로부터
                    보호한다. MPC는 개인키를 여러 조각으로 나누어 분산 저장하고, 서명 시에만 암호학적으로
                    결합하여 사용한다. 이 두 기술을 결합하면, 단일 실패점(Single Point of Failure)을
                    제거하고 최고 수준의 보안을 달성할 수 있다.
                  </>
                ) : (
                  <>
                    HSM stores private keys in physically isolated hardware devices, protecting against software hacking.
                    MPC divides private keys into multiple pieces for distributed storage, cryptographically combining
                    them only during signing. Combining these two technologies eliminates single points of failure and
                    achieves the highest level of security.
                  </>
                )}
              </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">토크나이즈 자산 지원과 수익 모델</h3>

      <div className="not-prose my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Walits 핵심 기능</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded border-l-4 border-blue-500">
            
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">다양한 블록체인 네트워크 지원</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Ethereum, Polygon, Avalanche, Solana 등 주요 RWA 토큰 체인 전체 지원
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded border-l-4 border-purple-500">
            
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">스마트 컨트랙트 통합</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                락업, 베스팅, 배당 지급 등 자동 실행 기능
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded border-l-4 border-green-500">
            
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">규제 보고 기능</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                한국 금융당국 & 미국 SEC 감사 보고서 자동 생성
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Walits는 단순히 스테이블코인만 지원하는 것이 아니라, 토큰화된 국채, 부동산,
        주식 등 다양한 RWA 토큰을 안전하게 보관하고 관리할 수 있는 시스템을 구축해야 한다.
        이를 위해서는 다음과 같은 기능이 필요하다.
      </p>

      <p>
        첫째, 다양한 블록체인 네트워크 지원. Ethereum뿐만 아니라 Polygon, Avalanche,
        Solana 등 RWA 토큰이 발행되는 주요 체인을 모두 지원해야 한다. 둘째, 스마트 컨트랙트
        통합. 토큰의 락업, 베스팅, 배당 지급 등이 자동으로 실행되도록 스마트 컨트랙트와
        연동해야 한다. 셋째, 규제 보고 기능. 한국 금융당국과 미국 SEC에 제출할 감사 보고서를
        자동으로 생성할 수 있어야 한다.
      </p>

      <div className="not-prose my-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h4 className="text-lg font-bold text-green-900 dark:text-green-200 mb-4">수익 모델</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            
            <p className="font-semibold text-green-900 dark:text-green-200 text-sm">Custody 수수료</p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">자산 보관료</p>
          </div>
          <div className="text-center">
            
            <p className="font-semibold text-green-900 dark:text-green-200 text-sm">거래 수수료</p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">온체인 거래 수수료</p>
          </div>
          <div className="text-center">
            
            <p className="font-semibold text-green-900 dark:text-green-200 text-sm">부가 서비스</p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">결제/스왑/스테이킹</p>
          </div>
        </div>
        <p className="text-sm text-green-800 dark:text-green-300 mt-4 text-center font-medium">
          기관 고객: 월 구독 모델 → 안정적인 반복 수익(Recurring Revenue)
        </p>
      </div>

      <p>
        수익 모델은 명확하다. Custody 수수료, 거래 수수료, 그리고 부가 서비스(자동 결제,
        스왑, 스테이킹 등) 수수료를 통해 안정적인 수익을 창출할 수 있다. 특히 기관 고객
        대상으로는 월 구독 모델을 적용하여 반복 수익(Recurring Revenue)을 확보할 수 있다.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">한국-미국 Cross-Border Compliance</h3>

      <p>
        Walits의 경쟁력은 한국과 미국 양쪽의 규제를 모두 이해하고 준수할 수 있다는 점이다.
        한국에서 STO를 발행하고 미국 투자자에게 판매하려는 프로젝트, 또는 미국에서 토큰화된
        자산을 한국 투자자에게 제공하려는 프로젝트 모두에게 Walits는 필수적인 파트너가 될 수
        있다. Cross-Border 거래에서 가장 큰 장애물은 규제 준수인데, Walits가 이를 원스톱으로
        해결해준다면 엄청난 가치를 제공하는 셈이다.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">7장. 리스크와 시나리오 분석</h2>

      <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-400 dark:border-green-600">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-green-900 dark:text-green-200">HIGH 확률 (70%)</h4>
            <p className="text-sm text-green-700 dark:text-green-400">선순환 달성</p>
          </div>
          <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
            <li>GENIUS Act 성공적 시행</li>
            <li>스테이블코인 TVL $1조 돌파</li>
            <li>재융자 압박 완화</li>
            <li>BlackRock 등 RWA 토큰 출시</li>
            <li>GDP 3~4% 성장</li>
            <li>부채/GDP 비율 안정화</li>
            <li><strong>Walits Custody 수요 급증</strong></li>
          </ul>
        </div>
        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-400 dark:border-red-600">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-red-900 dark:text-red-200">LOW 확률 (30%)</h4>
            <p className="text-sm text-red-700 dark:text-red-400">뱅크런 & 긴축 재개</p>
          </div>
          <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
            <li>스테이블코인 담보 검증 실패</li>
            <li>뱅크런 발생 → 신뢰 붕괴</li>
            <li>재융자 실패 → 금리 폭등</li>
            <li>연준 금리 인상 재개</li>
            <li>AI 생산성 미실현</li>
            <li>부채 위기 현실화</li>
            <li>2008년식 금융위기 재현</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">HIGH 확률 시나리오 (70%): 선순환 달성</h3>

      <p>
        GENIUS Act가 성공적으로 시행되고, 스테이블코인 TVL이 1조 달러를 돌파하며,
        단기 국채 수요가 안정적으로 창출된다. 재융자 압박이 완화되고 이자 비용이 관리
        가능한 수준으로 유지된다. BlackRock, Fidelity 등 대형 자산운용사들이 RWA 토큰
        상품을 속속 출시하고, 토크나이제이션 시장이 폭발적으로 성장한다. GDP 성장률이
        3~4%대로 회복되고, 부채/GDP 비율이 안정화된다. Walits 같은 규제 준수 Custody
        솔루션에 대한 수요가 급증하며, 디지털 자산 인프라 기업들의 가치가 급등한다.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">LOW 확률 시나리오 (30%): 뱅크런과 긴축 재개</h3>

      <p>
        스테이블코인 발행사 중 일부가 담보 자산 검증에 실패하거나 부실 운영이 드러나
        뱅크런이 발생한다. 투자자 신뢰가 무너지고 스테이블코인 시장이 위축된다.
        단기 국채 수요 창출이 기대에 미치지 못하고, 재융자 실패로 금리가 폭등한다.
        연준은 인플레이션 재점화 우려로 금리 인상을 재개하고, 정부의 이자 부담이
        기하급수적으로 증가한다. AI 생산성이 기대만큼 발현되지 않아 GDP 성장이 더디고,
        부채 위기가 현실화된다. 시스템 리스크가 금융 시장 전반으로 확산되며,
        2008년식 금융위기 재현 가능성이 대두된다.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Walits의 리스크 관리 전략</h3>

      <p>
        어떤 시나리오가 현실화되든, Walits는 리스크 관리를 철저히 해야 한다.
        첫째, 과도한 레버리지 사용을 지양하고, 보수적인 재무 구조를 유지한다.
        둘째, 다양한 블록체인 네트워크와 자산 클래스를 지원하여 특정 시장 의존도를
        낮춘다. 셋째, 규제 변화에 신속하게 대응할 수 있도록 법무 및 컴플라이언스
        팀을 강화한다. 넷째, 보안 사고에 대비한 보험 가입과 비상 대응 매뉴얼을
        구비한다.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">에필로그: 토큰화된 세계의 도래</h2>

      <p>
        2026년은 금융 역사에서 중요한 전환점으로 기록될 것이다. 연준 중심의 통화정책
        시대가 막을 내리고, 정부 주도 재정정책과 디지털 자산이 결합된 새로운 시대가
        열리고 있다. 스테이블코인은 단순한 암호화폐가 아니라 정부의 부채 관리 도구이자
        달러 패권 연장의 수단이 되었다. 모든 자산이 토큰화되는 미래는 더 이상 SF가
        아니라 현실이 되어가고 있다.
      </p>

      <p>
        이 거대한 변화의 물결 속에서 기회를 잡을 것인가, 아니면 방관할 것인가.
        Walits는 규제 준수 Custody라는 핵심 인프라를 제공함으로써 토큰화 시대의
        필수 파트너로 자리매김할 수 있다. 트럼프 행정부의 정책 방향, GENIUS Act의
        시행 경과, 그리고 RWA 토크나이제이션 시장의 성장을 면밀히 모니터링하며,
        발 빠르게 대응해야 할 시점이다.
      </p>

      <p>
        역사는 준비된 자의 것이다. 2026년, 토큰화된 세계가 본격적으로 펼쳐진다.
        이 새로운 금융 질서에서 Walits가 어떤 역할을 할 것인지, 그 여정이 지금
        시작되었다.
      </p>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">참고자료</h3>
        <ul className="text-sm">
          <li>미국 재무부 부채 통계 (2025년 8월 기준)</li>
          <li>GENIUS Act 법안 전문 (2025년 7월 공표)</li>
          <li>BlackRock BUIDL 펀드 백서</li>
          <li>연준 SOFR 및 역레포 시장 데이터</li>
          <li>트럼프 행정부 디지털 자산 정책 로드맵</li>
        </ul>
      </div>

          <div className="not-prose mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">Walits와 함께하는 토큰화 시대</h3>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              STO 발행, RWA 토크나이제이션, 그리고 규제 준수 Custody에 대한 상담이 필요하시면
              언제든 연락주세요.
            </p>
            <ul className="list-none space-y-2 text-blue-900 dark:text-blue-200">
              <li>이메일: contact@walits.io</li>
              <li>웹사이트: www.walits.io</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
