const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 웹툰 데이터 예시
const webtoons = [
  {
    title: "나 혼자만 레벨업",
    author: "추공",
    platform: "카카오페이지",
    genre: "판타지",
    mainCharacter: "성진우",
    summary: "평범한 E급 헌터가 각성하여 최강의 헌터로 성장하는 이야기"
  },
  {
    title: "유미의 세포들",
    author: "이동건",
    platform: "네이버웹툰",
    genre: "로맨스, 코미디",
    mainCharacter: "유미",
    summary: "유미의 머릿속 세포들이 펼치는 유쾌한 일상과 사랑 이야기"
  }
  // 원하는 만큼 추가
];

// 정적 파일 제공
app.use(express.static('public'));

// 웹툰 정보 API
app.get('/webtoon', (req, res) => {
  const title = req.query.title;
  const webtoon = webtoons.find(w => w.title === title);
  if (webtoon) {
    res.json({ found: true, webtoon });
  } else {
    res.json({ found: false });
  }
});

app.listen(port, () => {
  console.log(`서버 실행: http://localhost:${port}`);
});