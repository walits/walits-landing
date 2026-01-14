'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DailyAttendancePost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'Non-Custody 사용 사례',
      title: '매일 자정, 자동으로 출석 보상 지급하기',
      date: '2024년 12월 13일',
      readTime: '6분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Non-Custody Use Case',
      title: 'Auto-Distribute Attendance Rewards Daily at Midnight',
      date: 'December 13, 2024',
      readTime: '6 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/blog/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {copy.backToBlog}
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

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  게임이나 앱에서 유저 리텐션을 높이는 가장 효과적인 방법 중 하나가 바로 출석 체크 시스템입니다.
                  매일 접속한 유저에게 작은 보상을 주는 것만으로도 습관적인 방문을 유도할 수 있죠.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  하지만 매일 자정마다 수천 명의 유저에게 자동으로 보상을 지급하는 건 생각보다 복잡합니다.
                  블록체인 트랜잭션을 수천 개 처리하려면 천문학적인 가스비가 발생하고, 실패 위험도 높습니다.
                  Walits Non-Custody와 Cron Job을 결합하면 이 모든 과정이 완전히 자동화되고, 가스비는 0원입니다.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">실제 시나리오: 모바일 RPG "Dragon Quest Mobile"</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "Dragon Quest Mobile"은 일일 활성 사용자(DAU) 5,000명의 모바일 RPG 게임입니다.
                  매일 자정(00:00)에 당일 출석 체크한 유저들에게 자동으로 연속 출석 일수에 따라 보상을 지급합니다.
                  평균적으로 매일 3,500명이 출석 체크를 합니다.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">출석 보상 체계</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>1일차: 10 Gold</li>
                    <li>3일 연속: 30 Gold + 5 Potion</li>
                    <li>7일 연속: 100 Gold + 10 Potion + Rare Item Box</li>
                    <li>14일 연속: 250 Gold + Epic Weapon</li>
                    <li>30일 연속: 1,000 Gold + Legendary Armor + Exclusive Title</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    * 연속 출석이 끊기면 1일차부터 다시 시작
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">온체인 방식의 한계</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 매일 발생하는 막대한 가스비</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    3,500명에게 매일 보상을 지급한다면, 월 가스비는 감당하기 어려운 수준입니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">월간 가스비 계산 (Polygon 기준):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>일일 출석자: 3,500명</li>
                      <li>ERC-20 전송 가스: 50,000 gas (Polygon 최적화)</li>
                      <li>Gas Price: 30 gwei</li>
                      <li>1일 가스비: 3,500 × 0.0015 MATIC = 5.25 MATIC = 약 $4</li>
                      <li>월 가스비 (30일): 157.5 MATIC = 약 $120</li>
                      <li>연간 가스비: 1,890 MATIC = 약 $1,440</li>
                    </ul>
                    <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                      * Ethereum 메인넷이라면 월 가스비가 $5,000 이상으로 급증합니다!
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 자동화 구현의 복잡도</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 자정에 자동으로 실행되는 시스템을 구축하려면 다양한 기술 스택이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Cron 서버 구축 및 관리</li>
                      <li>Web3 트랜잭션 스크립트 작성</li>
                      <li>논스 충돌 방지 로직</li>
                      <li>실패 트랜잭션 재시도 메커니즘</li>
                      <li>출석 일수 추적 데이터베이스</li>
                      <li>로그 및 모니터링 시스템</li>
                      <li>개발 + 유지보수 비용: 월 $2,000-3,000</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 운영 리스크</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 자동으로 실행되므로, 단 한 번의 실패도 수천 명의 유저 불만으로 이어집니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>네트워크 혼잡으로 인한 지연</li>
                      <li>RPC 노드 다운타임</li>
                      <li>스크립트 오류로 인한 중복 지급 또는 누락</li>
                      <li>연속 출석 일수 계산 오류</li>
                      <li>24/7 모니터링 필요</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits + Cron Job으로 완전 자동화</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. 출석 데이터 DB 설계</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    유저별 출석 기록을 추적하는 테이블을 만듭니다.
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`CREATE TABLE user_attendance (
  user_id BIGINT PRIMARY KEY,
  walits_account_id VARCHAR(255),
  current_streak INT DEFAULT 0,  -- 현재 연속 출석 일수
  last_check_in_date DATE,       -- 마지막 출석 날짜
  total_check_ins INT DEFAULT 0, -- 총 출석 일수
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_last_check_in ON user_attendance(last_check_in_date);`}</code>
                  </pre>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. 출석 체크 API 구현</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    유저가 게임에 로그인할 때 출석 체크 버튼을 누르면 호출되는 API입니다.
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`// POST /api/attendance/check-in
app.post('/attendance/check-in', async (req, res) => {
  const { userId } = req.body;
  const today = new Date().toISOString().split('T')[0];

  const attendance = await db.query(
    'SELECT * FROM user_attendance WHERE user_id = ?',
    [userId]
  );

  let currentStreak = 1;
  if (attendance && attendance.last_check_in_date) {
    const lastDate = new Date(attendance.last_check_in_date);
    const todayDate = new Date(today);
    const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return res.status(400).json({ error: '오늘 이미 출석했습니다.' });
    } else if (diffDays === 1) {
      currentStreak = attendance.current_streak + 1;  // 연속 출석
    } else {
      currentStreak = 1;  // 연속 끊김, 다시 1일차
    }
  }

  await db.query(\`
    INSERT INTO user_attendance (user_id, walits_account_id, current_streak, last_check_in_date, total_check_ins)
    VALUES (?, ?, ?, ?, 1)
    ON DUPLICATE KEY UPDATE
      current_streak = ?,
      last_check_in_date = ?,
      total_check_ins = total_check_ins + 1
  \`, [userId, req.user.walitsAccountId, currentStreak, today, currentStreak, today]);

  res.json({ success: true, currentStreak });
});`}</code>
                  </pre>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Cron Job 설정 (매일 자정 실행)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 자정 00:05에 실행되어 당일 출석한 모든 유저에게 보상을 지급합니다.
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`// Node.js + node-cron
const cron = require('node-cron');
const axios = require('axios');

// 매일 자정 00:05에 실행
cron.schedule('5 0 * * *', async () => {
  console.log('출석 보상 지급 시작:', new Date());

  try {
    const today = new Date().toISOString().split('T')[0];

    // 오늘 출석한 유저 조회
    const attendees = await db.query(\`
      SELECT user_id, walits_account_id, current_streak
      FROM user_attendance
      WHERE last_check_in_date = ?
    \`, [today]);

    console.log(\`오늘 출석 유저: \${attendees.length}명\`);

    // 출석 일수별 보상 계산
    const transfers = attendees.map(user => {
      let goldAmount = '10';  // 기본 보상

      if (user.current_streak >= 30) {
        goldAmount = '1000';
      } else if (user.current_streak >= 14) {
        goldAmount = '250';
      } else if (user.current_streak >= 7) {
        goldAmount = '100';
      } else if (user.current_streak >= 3) {
        goldAmount = '30';
      }

      return {
        toAccountId: user.walits_account_id,
        amount: goldAmount,
        asset: 'Gold',
        metadata: {
          type: 'daily_attendance',
          streak: user.current_streak,
          date: today
        }
      };
    });

    // Walits Batch Transfer API 호출
    const response = await axios.post('https://api.walits.io/api/internal-transfers/batch', {
      fromAccountId: 'acc_dragon_quest_master',
      transfers: transfers,
      idempotencyKey: \`daily_attendance_\${today}\`,
      description: \`Daily Attendance Rewards - \${today}\`
    }, {
      headers: {
        'Authorization': \`Bearer \${process.env.WALITS_API_KEY}\`,
        'Content-Type': 'application/json'
      }
    });

    console.log('보상 지급 완료:', response.data);

    // 슬랙 알림
    await sendSlackNotification({
      channel: '#game-operations',
      text: \`출석 보상 지급 완료\\n- 대상: \${attendees.length}명\\n- 총 지급액: \${response.data.totalAmount} Gold\\n- 처리 시간: \${response.data.processedAt}\`
    });

  } catch (error) {
    console.error('출석 보상 지급 실패:', error);

    // 슬랙 에러 알림
    await sendSlackNotification({
      channel: '#game-operations',
      text: \`출석 보상 지급 실패\\n\${error.message}\`
    });
  }
}, {
  timezone: "Asia/Seoul"
});

console.log('출석 보상 Cron Job 시작됨 (매일 00:05 KST)');`}</code>
                  </pre>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. 모니터링 및 알림</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 실행 결과를 슬랙으로 받아 문제가 있으면 즉시 대응합니다.
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`async function sendSlackNotification({ channel, text }) {
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    channel: channel,
    text: text,
    username: 'Dragon Quest Bot',
    icon_emoji: ':dragon:'
  });
}

// 슬랙 알림 예시
// 출석 보상 지급 완료
// - 대상: 3,542명
// - 총 지급액: 48,320 Gold
// - 처리 시간: 2024-12-13T00:05:03Z
// - 소요 시간: 3.2초`}</code>
                  </pre>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">고급 기능: 차등 보상 및 NFT 지급</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  30일 연속 출석자에게는 Gold 외에 NFT 아이템(Legendary Armor)도 함께 지급하고 싶다면?
                  Walits는 FT(Fungible Token)와 NFT(Non-Fungible Token)를 동시에 지급할 수 있습니다.
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`// 30일 연속 출석자 필터링
const streak30Users = attendees.filter(u => u.current_streak === 30);

// NFT 민팅 및 지급 (별도 API 호출)
for (const user of streak30Users) {
  // 1. NFT 민팅
  const nftResponse = await axios.post('https://api.walits.io/api/nfts/mint', {
    accountId: user.walits_account_id,
    collectionId: 'col_legendary_armors',
    metadata: {
      name: 'Legendary Armor',
      description: '30일 연속 출석 달성 기념 아이템',
      image: 'https://cdn.dragonquest.com/items/legendary_armor.png',
      attributes: [
        { trait_type: 'Defense', value: 500 },
        { trait_type: 'Rarity', value: 'Legendary' },
        { trait_type: 'Earned Date', value: today }
      ]
    }
  }, {
    headers: { 'Authorization': \`Bearer \${process.env.WALITS_API_KEY}\` }
  });

  console.log(\`NFT 지급 완료: User \${user.user_id}, Token \${nftResponse.data.tokenId}\`);

  // 2. 게임 내 아이템 인벤토리에도 추가
  await db.query(\`
    INSERT INTO user_items (user_id, item_id, nft_token_id, acquired_date)
    VALUES (?, 'legendary_armor', ?, ?)
  \`, [user.user_id, nftResponse.data.tokenId, today]);

  // 3. 특별 칭호 부여
  await db.query(\`
    INSERT INTO user_titles (user_id, title_id)
    VALUES (?, 'attendance_master')
  \`, [user.user_id]);
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">ROI 분석: 출석 시스템의 효과</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">지표</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">도입 전</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">도입 후 (3개월)</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">개선율</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">DAU (일일 활성 사용자)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">3,200명</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">5,000명</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+56%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">7일 리텐션</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">28%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">52%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+86%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">30일 리텐션</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">12%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">35%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+192%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">평균 세션 길이</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">18분</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">27분</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+50%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">월 가스비</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0 (Walits)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">절감액 $120</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 보상 밸런스 조정</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>초반 보상(1-7일)은 낮게, 후반 보상(14-30일)은 매력적으로 설정</li>
                    <li>7일, 14일, 30일 단계에 "큰 보상" 배치로 목표 부여</li>
                    <li>게임 내 경제에 미치는 영향 모니터링 및 조정</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 유저 피드백 수집</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>출석 UI에 "다음 보상 미리보기" 표시로 동기부여</li>
                    <li>연속 출석이 끊겼을 때 "복구권" 아이템 판매 (수익화)</li>
                    <li>월간 최다 출석자 리더보드로 경쟁 유도</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 장애 대비</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Idempotency Key 사용으로 중복 지급 방지</li>
                    <li>Cron Job 실패 시 자동 재시도 (최대 3회)</li>
                    <li>슬랙 알림으로 운영팀에 즉시 통보</li>
                    <li>수동 보상 지급 API 준비 (긴급 상황 대비)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Walits Non-Custody API는 첫 한 달 무료입니다. 크리스마스 이벤트를 성공적으로 마무리하고 싶다면 지금 시작하세요.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  무료로 시작하기 →
                </Link>
              </div>
            </>
          ) : (
            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Start Now</h2>
              <p className="mb-6 text-gray-300 dark:text-gray-600">
                Walits Non-Custody API is free for the first month.
              </p>
              <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Start Free →
              </Link>
            </div>
          )}
        </div>
      </article>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Walits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
