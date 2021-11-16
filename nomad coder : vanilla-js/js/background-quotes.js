//// quotes

const quotes = [ // an array of objects 
    {
        quote: "세상의 모서리, 구부정하게 커버린 골칫거리 outsider",
        author: "아이유",
    },
    {
        quote: "걸음걸이, 옷차림, 이어폰 너머 playlist 음악까지 다 minor",
        author: "아이유",
    },
    {
        quote: "넌 모르지 떨군 고개 위 환한 빛 조명이 어딜 비추는지",
        author: " 아이유",
    },
    {
        quote: "느려도 좋으니 결국 알게 되길 The one and only, You are my celebrity",
        author: "아이유",
    },
    {
        quote: "잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나",
        author: "아이유",
    },
    {
        quote: "보이니 그 유일함이 얼마나 아름다운지 말야, You are my celebrity",
        author: "아이유",
    },
    {
        quote: "발자국마다 이어진 별자리 그 서투른 걸음이 새겨놓은 밑그림",
        author: "아이유",
    },
    {
        quote: "오롯이 너를 만나러 가는 길 그리로 가면 돼 점선을 따라",
        author: "아이유",
    },
    {
        quote: "잊지마 이 오랜 겨울 사이 언 틈으로 피울 꽃 하나",
        author: "아이유",
    },
    {
        quote: "보이니 하루 뒤 봄이 얼마나 아름다울지 말야, You are my celebrity",
        author: "아이유",
    },
]

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const bgImageContainer = document.querySelector(".bg-image");

quote.innerText = quotes[Math.floor((Math.random())*quotes.length)].quote;
author.innerText = quotes[Math.floor((Math.random())*quotes.length)].author;


//// backgrounds

const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

chosenImage = images[Math.floor((Math.random())*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

bgImageContainer.appendChild(bgImage);
