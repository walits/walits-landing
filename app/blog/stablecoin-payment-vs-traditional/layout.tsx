export const metadata = {
  title: '스테이블코인 결제가 기존 결제망보다 단계를 줄이는 방법 | Walits Blog',
  description: '카드 결제는 승인과 정산이 분리되어 며칠이 걸립니다. 스테이블코인은 온체인 전송으로 결제+정산을 동시에 처리합니다. 8단계 vs 4단계, 실무 관점에서 비교 분석합니다.',
  openGraph: {
    title: '스테이블코인 결제가 기존 결제망보다 단계를 줄이는 방법',
    description: '카드 결제 8단계 vs 스테이블코인 4단계. 승인-정산 분리 해소, 참여자 감소, 메시지 왕복 최소화를 실무 관점에서 분석합니다.',
    images: ['/blog/payment.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
