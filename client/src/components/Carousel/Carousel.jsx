import { useEffect } from 'react'
import './Carousel.css'
import {gsap} from "gsap";
import imagesLoaded from "imagesloaded";

gsap.config({
    nullTargetWarn: false,
  });

const Carousel = () => {

    useEffect(() => {
        console.clear();

//const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--right"),
	next: document.querySelector(".btn--left"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
            
            document.getElementsByClassName('main-carousel')[0].style.backgroundImage = `url(${nextBgImageEl.getElementsByTagName("img")[0].src})`;
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
            document.getElementsByClassName('main-carousel')[0].style.backgroundImage = `url(${previousBgImageEl.getElementsByTagName("img")[0].src})`;
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 0.5,
		pointerEvents: "none",
	})
		.to(
		currentInfoEl.querySelectorAll(".text"),
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "-120px",
			opacity: 0,
		},
		"-="
	)
		.call(() => {
		swapInfosClass(direction);
	})
		.call(() => initCardEvents())
		.fromTo(
		direction === "right"
		? nextInfoEl.querySelectorAll(".text")
		: previousInfoEl.querySelectorAll(".text"),
		{
			opacity: 0,
			translateY: "40px",
		},
		{
			duration: 0.4,
			stagger: 0.1,
			translateY: "0px",
			opacity: 1,
		}
	)
		.to([buttons.prev, buttons.next], {
		duration: 0.2,
		opacity: 1,
		pointerEvents: "all",
	});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		delay: 0.5,
		duration: 0.4,
		stagger: 0.1,
		opacity: 1,
		translateY: 0,
	})
		.to(
		[buttons.prev, buttons.next],
		{
			duration: 0.4,
			opacity: 1,
			pointerEvents: "all",
		},
		"-=0.4"
	);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages === loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: "none",
					})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages(); 

    })
    return (
        <div className="carousel-div">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
        <div className="app">
        <div className="cardList">
            <button className="cardList__btn btn btn--left">
            <div className="icon">
                <svg>
                <use xlinkHref="#arrow-left" />
                </svg>
            </div>
            </button>
            <div className="cards__wrapper">
            <div className="card current--card">
                <div className="card__image">
                <img src="https://lh3.googleusercontent.com/W6-gBHp_Kiu5sO75MvMUBE6GZY6JK5PWWXZPhdFFsL37A-99uJpCMxG8z3EDfGobANSdmQXDk5J0G88nSG2LCs8DX5XxVXiDjEKA5Q=w286" alt="hi" />
                </div>
            </div>
            <div className="card next--card">
                <div className="card__image">
                <img src="https://storage.opensea.io/files/cf79e790f5de3d82506a35379a8164ed.svg" alt="bye" />
                </div>
            </div>
            <div className="card previous--card">
                <div className="card__image">
                <img src="https://mkpcdn.com/500x/59860e5c61cd98ac36859545ed68620a_507876.jpg" alt="sky" />
                </div>
            </div>
            </div>
			
            <button className="cardList__btn btn btn--right">
            <div className="icon">
                <svg>
                <use xlinkHref="#arrow-right" />
                </svg>
            </div>
            </button>
        </div>
        <div className="infoList">
            <div className="info__wrapper">
            <div className="info current--info">
                <h1 className="text-name">Polygon Vault</h1>
                <h4 className="text-location">40577C</h4>
                <p className="home-text-description">Let your dreams come true</p>
            </div>
            <div className="info next--info">
                <h1 className="text-name">OnChain Seaside</h1>
                <h4 className="text-location">
FA7E6D</h4>
                <p className="home-text-description">Adventure is never far away</p>
            </div>
            <div className="info previous--info">
                <h1 className="text-name">Escapism</h1>
                <h4 className="text-location">greekdx</h4>
                <p className="home-text-description">Blur the boundary between fantasy and reality</p>
            </div>
            </div>
        </div>
        <div className="app__bg">
            <div className="app__bg__image current--image">
            <img src="https://lh3.googleusercontent.com/W6-gBHp_Kiu5sO75MvMUBE6GZY6JK5PWWXZPhdFFsL37A-99uJpCMxG8z3EDfGobANSdmQXDk5J0G88nSG2LCs8DX5XxVXiDjEKA5Q=w286" alt="" />
            </div>
            <div className="app__bg__image next--image">
            <img src="https://storage.opensea.io/files/cf79e790f5de3d82506a35379a8164ed.svg" alt="" />
            </div>
            <div className="app__bg__image previous--image">
            <img src="https://mkpcdn.com/500x/59860e5c61cd98ac36859545ed68620a_507876.jpg" alt="" />
            </div>
        </div>
        </div>
        <div className="loading__wrapper">
        <div className="loader--text">Loading...</div>
        <div className="loader">
            <span />
        </div>
        </div>
        <svg className="icons" style={{display: 'none'}}>
        <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <polyline points="328 112 184 256 328 400" style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px'}} />
        </symbol>
        <symbol id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <polyline points="184 112 328 256 184 400" style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px'}} />
        </symbol>
        </svg>
        </div>
    )
}

export default Carousel