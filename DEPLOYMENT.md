# Walits Landing 배포 가이드

## 배포 방식
- **인프라**: AWS S3 + CloudFront
- **자동 배포**: GitHub Actions (main 브랜치 push 시)
- **수동 배포**: 로컬 스크립트

## 자동 배포 (GitHub Actions)

main 브랜치에 push하면 자동으로 배포됩니다.

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

GitHub Actions가 자동으로:
1. Next.js 빌드
2. S3에 업로드
3. CloudFront 캐시 무효화

배포 상태는 GitHub Repository → Actions 탭에서 확인

## 수동 배포 (로컬)

### 방법 1: 스크립트 사용 (권장)

```bash
# 실행 권한 부여 (최초 1회)
chmod +x scripts/deploy.sh

# 배포 실행
./scripts/deploy.sh
```

### 방법 2: 단계별 실행

```bash
# 1. 빌드
npm run build

# 2. S3 업로드
aws s3 sync out/ s3://walits-landing-prod/ --profile walits --delete

# 3. CloudFront 캐시 무효화
DISTRIBUTION_ID=$(cd ../walits-infra/terraform/landing && terraform output -raw cloudfront_distribution_id)
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*" \
  --profile walits
```

## 사전 준비

### 1. AWS CLI 설정
```bash
aws configure --profile walits
```

### 2. GitHub Secrets 설정 (GitHub Actions용)
Repository → Settings → Secrets → Actions

필수 Secrets:
- `AWS_ACCESS_KEY_ID`: AWS Access Key
- `AWS_SECRET_ACCESS_KEY`: AWS Secret Key
- `S3_BUCKET_NAME`: walits-landing-prod
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront Distribution ID
- `CLOUDFRONT_DOMAIN_NAME`: CloudFront 도메인 (예: d111111abcdef8.cloudfront.net)

## 배포 확인

```bash
# CloudFront URL 확인
cd ../walits-infra/terraform/landing
terraform output website_url

# 브라우저에서 열기
open $(terraform output -raw website_url)
```

## 문제 해결

### 빌드 에러
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### S3 업로드 실패
```bash
# AWS 프로파일 확인
aws configure list --profile walits

# S3 버킷 존재 확인
aws s3 ls --profile walits | grep walits-landing
```

### CloudFront 캐시 문제
```bash
# 강제 캐시 무효화
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*" \
  --profile walits
```

## 비용
- 예상 월 비용: $1-5 (트래픽에 따라)
- CloudFront 무료 티어: 50GB/월, 2백만 요청

## 상세 가이드
전체 인프라 구축 가이드는 `walits-infra/docs/walits-landing-deployment-guide.md` 참조
