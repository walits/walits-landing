# Walits Developer Documentation

이 폴더에는 Walits의 개발자 문서 사이트가 포함되어 있습니다.

## 📍 접속 방법

### 로컬 개발 환경

```bash
# walits-front 프로젝트 실행
cd walits-front
npm run dev

# 브라우저에서 접속
http://localhost:3000/docs
```

### 프로덕션

```
https://your-domain.com/docs
```

## 📚 문서 구조

```
docs/
├── index.html          # 메인 문서 페이지 (모든 섹션 포함)
└── README.md           # 이 파일
```

## 🎨 기능

### 왼쪽 메뉴 (Sidebar)
- **Getting Started**: Introduction, Quick Start, Authentication
- **Wallets**: Basic Wallet, Custody Wallet, Wallet Comparison
- **Features**: Accounts, Transactions, Multi-Approval, Webhooks
- **API Reference**: Wallets API, Accounts API, Transactions API, Approvals API, Webhooks API
- **Advanced**: Security, Best Practices, Code Examples

### 오른쪽 컨텐츠 (Main Content)
- 코드 예제 (TypeScript, Bash, JSON)
- Syntax Highlighting (Prism.js)
- API 엔드포인트 상세 설명
- 사용 사례 및 Best Practices

## 🔧 커스터마이징

### 새 섹션 추가

1. **사이드바 메뉴에 추가**
```html
<a href="#new-section" class="menu-item block px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
  New Section
</a>
```

2. **컨텐츠 섹션 추가**
```html
<section id="new-section" class="content-section">
  <h1 class="text-4xl font-bold mb-4">New Section</h1>
  <p class="text-gray-600 mb-6">Section content here...</p>
</section>
```

### 스타일 변경

문서는 Tailwind CSS를 사용합니다. 색상 및 스타일은 HTML 내 클래스를 수정하여 변경 가능합니다.

```html
<!-- Primary color 변경 예시 -->
<header class="bg-purple-600 text-white">  <!-- blue-600 → purple-600 -->
```

## 📖 작성된 섹션

### ✅ 완료
- [x] Introduction
- [x] Quick Start (5분 안에 시작하기)
- [x] Authentication (API Key, JWT, 2FA)
- [x] Basic Wallet (생성, 전송, 잔액 조회)
- [x] Custody Wallet (생성, 가상 계정, 입출금 흐름)
- [x] Webhooks (등록, 검증, 이벤트 처리)
- [x] Wallets API Reference

### 🚧 TODO (향후 추가 예정)
- [ ] Accounts API Reference
- [ ] Transactions API Reference
- [ ] Approvals API Reference (다중 승인)
- [ ] Security Best Practices
- [ ] Code Examples (전체 통합 예시)
- [ ] Error Handling
- [ ] Rate Limits
- [ ] SDKs (JavaScript, Python, Go 등)

## 🎯 주요 특징

1. **단일 페이지 애플리케이션**
   - JavaScript로 섹션 전환
   - 페이지 새로고침 없음
   - 빠른 네비게이션

2. **Syntax Highlighting**
   - Prism.js 사용
   - TypeScript, Bash, JSON 지원
   - 다크 테마 적용

3. **반응형 디자인**
   - Tailwind CSS 사용
   - 모바일, 태블릿, 데스크톱 지원

4. **검색 기능 (향후 추가)**
   - 문서 내 검색
   - 빠른 API 참조

## 📞 지원

문의사항이나 개선 제안이 있으시면:
- GitHub Issues: https://github.com/your-org/walits/issues
- Email: support@walits.com
