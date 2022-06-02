# 전생했더니 리덕스 마스터가 된 건에 대하여


* 스크롤 해줄 Component 구성
* intersection observer 생성
* 생성한 intersection observer 붙이기

```javascript
export async function getReviews({order = 'createAt', offset = 0, limit = 6}) {
  const query = `order=${order}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}
```

```javascript
```
