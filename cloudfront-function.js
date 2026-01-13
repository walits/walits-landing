function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // trailing slash로 끝나면 index.html 추가
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
    }
    // 확장자 없으면 /index.html 추가 (trailingSlash: true 대응)
    else if (!uri.includes('.')) {
        request.uri = uri + '/index.html';
    }

    return request;
}
