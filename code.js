import ancientsData from '../eldritch-codejam/data/ancients.js';
import cardsDataGreen from '../eldritch-codejam/data/mythicCards/green/green.js';
import cardsDataBlue from '../eldritch-codejam/data/mythicCards/blue/blue.js';
import cardsDataBrown from '../eldritch-codejam/data/mythicCards/brown/brown.js';


const menu = document.querySelectorAll('.menu');
const card = document.querySelectorAll('.card');
const blockWraperCard = document.querySelector('.blockWraperCard');
const blockWrapermenu = document.querySelector('.blockWrapermenu');
const buttonStart = document.querySelector('.buttonStart');
const buttonStop = document.querySelector('.buttonStop');
const wrapperContentGame = document.querySelector('.wrapperContentGame');
const shirt = document.querySelector('.shirt');
const gameCard = document.querySelector('.gameCard');

const firstStepGreen = document.querySelector('.firstStepGreen');
const twoStepGreen = document.querySelector('.twoStepGreen');
const threeStepGreen = document.querySelector('.threeStepGreen');

const firstStepBrow = document.querySelector('.firstStepBrow');
const twoStepBrow = document.querySelector('.twoStepBrow');
const threeStepBrow = document.querySelector('.threeStepBrow');

const firstStepBlue = document.querySelector('.firstStepBlue');
const twoStepBlue = document.querySelector('.twoStepBlue');
const threeStepBlue = document.querySelector('.threeStepBlue');

let cardsDataGreenFilter = [];
let cardsDataBlueFilter = [];
let cardsDataBrownFilter = [];



let randomMasGreen = [];
let randomMasBlue = [];
let randomMasBrow = [];
 

let fullLenghtMassivGreenCard = 0;
let fullLenghtMassivBlueCard = 0;
let fullLenghtMassivBrowCard = 0;

let dataFirstStepGreen = 0;
let dataTwoStepGreen = 0;
let dataThreeStepGreen = 0;

let dataFirstStepBrow = 0;
let dataTwoStepBrow = 0
let dataThreeStepBrow = 0;

let dataFirstStepBlue = 0;
let dataTwoStepBlue = 0
let dataThreeStepBlue = 0;

function blockCard() {
    blockWraperCard.style.top = '0'; 
}
function unblockCard() {
    blockWraperCard.style.top = '-200%'; 
}
function blockMenu() {
    blockWrapermenu.style.top = '0'; 
}
function unblockMenu() {
    blockWrapermenu.style.top = '-200%'; 
}



function removeActivCard() { //удаление класса activCard со всех карт
    card.forEach(element => {
        element.classList.remove('activCard');
    });
}
function removeActivMenu() {//удаление класса activMenu со всех меню
    menu.forEach(element => {
        element.classList.remove('activMenu');
    });
}

function rezetCardsDataMassiv() { // сброс отфильтрованных масивов
    cardsDataGreenFilter = [];
    cardsDataBlueFilter = [];
    cardsDataBrownFilter = [];
} 
function rezetFullLenghtMassiv() { // сброс длины отфильтрованных масивов
     fullLenghtMassivGreenCard = 0;
     fullLenghtMassivBlueCard = 0;
     fullLenghtMassivBrowCard = 0;
} 

function filtrNormal() { // фильтр для уровня Средний
    cardsDataGreen.forEach(element => {
        cardsDataGreenFilter.push(element);
    });
    cardsDataBlue.forEach(element => {
        cardsDataBlueFilter.push(element);
    });
    cardsDataBrown.forEach(element => {
        cardsDataBrownFilter.push(element);
    });

}

function choicelevel(level = 'Средний') {
    switch (level) {
        case 'Средний':
            console.log('Средний');
            rezetCardsDataMassiv();
            filtrNormal();
            console.log(cardsDataGreenFilter);
            console.log(cardsDataBlueFilter);
            console.log(cardsDataBrownFilter);
            break;
        case 'Очень низкий':
            console.log('Очень низкий');
            rezetCardsDataMassiv();
           
            console.log(cardsDataGreenFilter);
            
            console.log(cardsDataBlueFilter);

            console.log(cardsDataBrownFilter);
            break;
    
        default:
            break;
    }
}

function calculationFullLenghtMassivCardAndWriteDataCard(data = 'card iogSothoth activCard') { // вычисление общей длины массивов под карты и заполнение данных по картам
    function WriteDataCard(params = 2) {
        firstStepGreen.innerHTML = `${dataFirstStepGreen = ancientsData[params].firstStage.greenCards}`;
        firstStepBrow.innerHTML = `${dataFirstStepBrow = ancientsData[params].firstStage.brownCards}`;
        firstStepBlue.innerHTML = `${dataFirstStepBlue = ancientsData[params].firstStage.blueCards}`;

        twoStepGreen.innerHTML = `${dataTwoStepGreen = ancientsData[params].secondStage.greenCards}`;
        twoStepBrow.innerHTML = `${dataTwoStepBrow = ancientsData[params].secondStage.brownCards}`;
        twoStepBlue.innerHTML = `${dataTwoStepBlue = ancientsData[params].secondStage.blueCards}`;

        threeStepGreen.innerHTML = `${dataThreeStepGreen = ancientsData[params].thirdStage.greenCards}`;
        threeStepBrow.innerHTML = `${dataThreeStepBrow = ancientsData[params].thirdStage.brownCards}`;
        threeStepBlue.innerHTML = `${dataThreeStepBlue = ancientsData[params].thirdStage.blueCards}`;

    }
    
    switch (data) {
        case 'card azathoth activCard':
            fullLenghtMassivGreenCard = (ancientsData[0].firstStage.greenCards) + ancientsData[0].secondStage.greenCards + ancientsData[0].thirdStage.greenCards;
            fullLenghtMassivBlueCard = ancientsData[0].firstStage.blueCards + ancientsData[0].secondStage.blueCards + ancientsData[0].thirdStage.blueCards;
            fullLenghtMassivBrowCard = ancientsData[0].firstStage.brownCards + ancientsData[0].secondStage.brownCards + ancientsData[0].thirdStage.brownCards;
            console.log(fullLenghtMassivGreenCard,fullLenghtMassivBlueCard,fullLenghtMassivBrowCard);
            WriteDataCard(0);
            

        break;
        case 'card cthulhu activCard':
            fullLenghtMassivGreenCard = (ancientsData[1].firstStage.greenCards) + ancientsData[1].secondStage.greenCards + ancientsData[1].thirdStage.greenCards;
            fullLenghtMassivBlueCard = ancientsData[1].firstStage.blueCards + ancientsData[1].secondStage.blueCards + ancientsData[1].thirdStage.blueCards;
            fullLenghtMassivBrowCard = ancientsData[1].firstStage.brownCards + ancientsData[1].secondStage.brownCards + ancientsData[1].thirdStage.brownCards;
            console.log(fullLenghtMassivGreenCard,fullLenghtMassivBlueCard,fullLenghtMassivBrowCard);
            WriteDataCard(1);
        break;
        case 'card iogSothoth activCard':
            fullLenghtMassivGreenCard = (ancientsData[2].firstStage.greenCards) + ancientsData[2].secondStage.greenCards + ancientsData[2].thirdStage.greenCards;
            fullLenghtMassivBlueCard = ancientsData[2].firstStage.blueCards + ancientsData[2].secondStage.blueCards + ancientsData[2].thirdStage.blueCards;
            fullLenghtMassivBrowCard = ancientsData[2].firstStage.brownCards + ancientsData[2].secondStage.brownCards + ancientsData[2].thirdStage.brownCards;
            console.log(fullLenghtMassivGreenCard,fullLenghtMassivBlueCard,fullLenghtMassivBrowCard);
            WriteDataCard(2);
        break;
        case 'card shubNiggurath activCard':
            fullLenghtMassivGreenCard = (ancientsData[3].firstStage.greenCards) + ancientsData[3].secondStage.greenCards + ancientsData[3].thirdStage.greenCards;
            fullLenghtMassivBlueCard = ancientsData[3].firstStage.blueCards + ancientsData[3].secondStage.blueCards + ancientsData[3].thirdStage.blueCards;
            fullLenghtMassivBrowCard = ancientsData[3].firstStage.brownCards + ancientsData[3].secondStage.brownCards + ancientsData[3].thirdStage.brownCards;
            console.log(fullLenghtMassivGreenCard,fullLenghtMassivBlueCard,fullLenghtMassivBrowCard);
            WriteDataCard(3);
        break;
    
        default:
            break;
    }
}

card.forEach(element => {   // Выбор карты для колоды
    element.addEventListener('click', () => {
            removeActivCard();
            element.classList.add('activCard');
            calculationFullLenghtMassivCardAndWriteDataCard(element.classList.value);
           
           
         });
        
});

menu.forEach(element => { // выбор уровня сложности
    element.addEventListener('click', () => {
        removeActivMenu();
        element.classList.add('activMenu');
        choicelevel(element.innerHTML);
        buttonStart.classList.remove('hiden');
        
        blockCard();
    });
    
});

buttonStart.addEventListener('click', () => { // запуск игры
 wrapperContentGame.classList.remove('hiden');
 blockMenu();
 blockCard();
 buttonStart.classList.add('hiden');
 console.log(fullLenghtMassivGreenCard,fullLenghtMassivBlueCard,fullLenghtMassivBrowCard);
 console.log(dataFirstStepGreen,dataFirstStepBlue,dataFirstStepBrow );

});

buttonStop.addEventListener('click', () => {
    unblockCard();
    unblockMenu();
    wrapperContentGame.classList.add('hiden');
    // buttonStart.classList.remove('hiden');
});

shirt.addEventListener('click', () => {
   
});


gameCard.style.background = `url(${cardsDataBrown[20]['cardFace']}) no-repeat center`;
gameCard.style.backgroundSize = 'contain';

