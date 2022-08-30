import ancientsData from '../eldritch-codejam/data/ancients.js';
import cardsDataGreen from '../eldritch-codejam/data/mythicCards/green/green.js';
import cardsDataBlue from '../eldritch-codejam/data/mythicCards/blue/blue.js';
import cardsDataBrown from '../eldritch-codejam/data/mythicCards/brown/brown.js';


const menu = document.querySelectorAll('.menu');
const card = document.querySelectorAll('.card');
const wrapperMenu = document.querySelector('.wrapperMenu');
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

let rezultCardsDataGreenFilter = [];
let rezultCardsDataBlueFilter = [];
let rezultCardsDataBrowFilter = [];

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

let flag = 0;

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
    rezultCardsDataGreenFilter = [];
    rezultCardsDataBlueFilter = [];
    rezultCardsDataBrowFilter = [];
    flag = 0;
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

function filtrLovLevel() { // фильтр для уровня Низкий убираем все hard
    cardsDataGreen.forEach(element => {
        if(element.difficulty != 'hard') {
            cardsDataGreenFilter.push(element);
        }
       
    });
    cardsDataBlue.forEach(element => {
        if(element.difficulty != 'hard') {
            cardsDataBlueFilter.push(element);
        }
       
    });
    cardsDataBrown.forEach(element => {
        if(element.difficulty != 'hard') {
            cardsDataBrownFilter.push(element);
        }
       
    });

}
function filtrHighLevel() { // фильтр для уровня Высокий убираем easy
    cardsDataGreen.forEach(element => {
        if(element.difficulty != 'easy') {
            cardsDataGreenFilter.push(element);
        }
       
    });
    cardsDataBlue.forEach(element => {
        if(element.difficulty != 'easy') {
            cardsDataBlueFilter.push(element);
        }
       
    });
    cardsDataBrown.forEach(element => {
        if(element.difficulty != 'easy') {
            cardsDataBrownFilter.push(element);
        }
       
    });

}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
function getRandom() {
return Math.floor(Math.random() * (3)); //Максимум не включается, минимум включается
}  

function getShuffleAndRezultCardsDataFilter() {
    shuffle(cardsDataGreenFilter);
    shuffle(cardsDataBlueFilter);
    shuffle(cardsDataBrownFilter);
    rezultCardsDataGreenFilter = cardsDataGreenFilter.slice(0,fullLenghtMassivGreenCard);
    rezultCardsDataBlueFilter = cardsDataBlueFilter.slice(0,fullLenghtMassivBlueCard);
    rezultCardsDataBrowFilter = cardsDataBrownFilter.slice(0,fullLenghtMassivBrowCard);
    
}

function choicelevel(level = 'Средний') {
    switch (level) {
        case 'Средний':
            console.log('Средний');
            rezetCardsDataMassiv();
            filtrNormal();
            getShuffleAndRezultCardsDataFilter(); 
           
            console.log(rezultCardsDataGreenFilter);
            console.log(rezultCardsDataBlueFilter);
            console.log(rezultCardsDataBrowFilter);

            break;
        case 'Низкий':
            console.log('Низкий');
            rezetCardsDataMassiv();
            filtrLovLevel();
            getShuffleAndRezultCardsDataFilter();

            console.log(cardsDataGreenFilter);
            console.log(cardsDataBlueFilter);
            console.log(cardsDataBrownFilter);  filtrHighLevel();
            break;
        case 'Высокий':
            console.log('Высокий');
            rezetCardsDataMassiv();
            filtrHighLevel();
            getShuffleAndRezultCardsDataFilter();

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

function mapSelectionFirstStep() {
    if(dataFirstStepBrow == 0 && dataFirstStepBlue == 0 && dataFirstStepGreen == 0) {
      flag = 1;  
      return false;
        
    };
    let colorCard = getRandom();
    console.log('colorCard = ' + colorCard);

    function selection(colorCard) {
        switch (colorCard) {
            case 0:
                    console.log(0);
                    if (dataFirstStepGreen>0) {
                        gameCard.style.background = `url(${rezultCardsDataGreenFilter[rezultCardsDataGreenFilter.length-1]['cardFace']}) no-repeat center`;
                        gameCard.style.backgroundSize = 'contain';
                        dataFirstStepGreen = dataFirstStepGreen-1;
                        rezultCardsDataGreenFilter.pop();
                        firstStepGreen.innerHTML = dataFirstStepGreen;
                    } else if(dataFirstStepBrow != 0 || dataFirstStepBlue != 0 || dataFirstStepGreen != 0) {
                        if (dataFirstStepBrow > 0) {
                            colorCard = 1;
                            selection(colorCard);
                        } else
                        if (dataFirstStepBlue > 0) {
                            colorCard = 2;
                            selection(colorCard);
                        }
                        
                     };
               break;
            case 1:
                console.log(1);
                if (dataFirstStepBrow > 0) {
                    gameCard.style.background = `url(${rezultCardsDataBrowFilter[rezultCardsDataBrowFilter.length-1]['cardFace']}) no-repeat center`;
                    gameCard.style.backgroundSize = 'contain';
                    dataFirstStepBrow = dataFirstStepBrow-1;
                    rezultCardsDataBrowFilter.pop();
                    firstStepBrow.innerHTML = dataFirstStepBrow;
                } else if(dataFirstStepBrow != 0 || dataFirstStepBlue != 0 || dataFirstStepGreen != 0) {
                    if (dataFirstStepGreen > 0) {
                        colorCard = 0;
                        selection(colorCard);
                    } else
                    if (dataFirstStepBlue > 0) {
                        colorCard = 2;
                        selection(colorCard);
                    }
                };
                break;
            case 2:
                console.log(2);
                if (dataFirstStepBlue > 0) {
                    gameCard.style.background = `url(${rezultCardsDataBlueFilter[rezultCardsDataBlueFilter.length-1]['cardFace']}) no-repeat center`;
                    gameCard.style.backgroundSize = 'contain';
                    dataFirstStepBlue = dataFirstStepBlue-1;
                    rezultCardsDataBlueFilter.pop();
                    firstStepBlue.innerHTML = dataFirstStepBlue;
                } else if(dataFirstStepBrow != 0 || dataFirstStepBlue != 0 || dataFirstStepGreen != 0) {
                    if (dataFirstStepGreen > 0) {
                        colorCard = 0;
                        selection(colorCard);
                    } else
                    if (dataFirstStepBrow > 0) {
                        colorCard = 1;
                        selection(colorCard);
                    }
                        
                };
                
            break;
        
            default:
                break;
        } 
        
    }
   
    selection(colorCard);
    console.log(rezultCardsDataGreenFilter);
    console.log(rezultCardsDataBrowFilter); 
    console.log(rezultCardsDataBlueFilter);
}

function mapSelectionTwoStep() {
    if(dataTwoStepBrow == 0 && dataTwoStepBlue == 0 && dataTwoStepGreen == 0) {
      flag = 2;  
      return false;
        
    };
    let colorCard = getRandom();
    console.log('colorCard = ' + colorCard);

    function selection(colorCard) {
        switch (colorCard) {
            case 0:
                    console.log(0);
                    if (dataTwoStepGreen>0) {
                        gameCard.style.background = `url(${rezultCardsDataGreenFilter[rezultCardsDataGreenFilter.length-1]['cardFace']}) no-repeat center`;
                        gameCard.style.backgroundSize = 'contain';
                        dataTwoStepGreen = dataTwoStepGreen-1;
                        rezultCardsDataGreenFilter.pop();
                        twoStepGreen.innerHTML = dataTwoStepGreen;
                    } else if(dataTwoStepBrow != 0 || dataTwoStepBlue != 0 || dataTwoStepGreen != 0) {
                        if (dataTwoStepBrow > 0) {
                            colorCard = 1;
                            selection(colorCard);
                        } else
                        if (dataTwoStepBlue > 0) {
                            colorCard = 2;
                            selection(colorCard);
                        }
                        
                     };
               break;
            case 1:
                console.log(1);
                if (dataTwoStepBrow > 0) {
                    gameCard.style.background = `url(${rezultCardsDataBrowFilter[rezultCardsDataBrowFilter.length-1]['cardFace']}) no-repeat center`;
                    gameCard.style.backgroundSize = 'contain';
                    dataTwoStepBrow = dataTwoStepBrow-1;
                    rezultCardsDataBrowFilter.pop();
                    twoStepBrow.innerHTML = dataTwoStepBrow;
                } else if(dataTwoStepBrow != 0 || dataTwoStepBlue != 0 || dataTwoStepGreen != 0) {
                    if (dataTwoStepGreen > 0) {
                        colorCard = 0;
                        selection(colorCard);
                    } else
                    if (dataTwoStepBlue > 0) {
                        colorCard = 2;
                        selection(colorCard);
                    }
                };
                break;
            case 2:
                console.log(2);
                if (dataTwoStepBlue > 0) {
                    gameCard.style.background = `url(${rezultCardsDataBlueFilter[rezultCardsDataBlueFilter.length-1]['cardFace']}) no-repeat center`;
                    gameCard.style.backgroundSize = 'contain';
                    dataTwoStepBlue = dataTwoStepBlue-1;
                    rezultCardsDataBlueFilter.pop();
                    twoStepBlue.innerHTML = dataTwoStepBlue;
                } else if(dataTwoStepBrow != 0 || dataTwoStepBlue != 0 || dataTwoStepGreen != 0) {
                    if (dataTwoStepGreen > 0) {
                        colorCard = 0;
                        selection(colorCard);
                    } else
                    if (dataTwoStepBrow > 0) {
                        colorCard = 1;
                        selection(colorCard);
                    }
                        
                };
                
            break;
        
            default:
                break;
        } 
        
    }
   
    selection(colorCard);
    console.log(rezultCardsDataGreenFilter);
    console.log(rezultCardsDataBrowFilter); 
    console.log(rezultCardsDataBlueFilter);
}

function mapSelectionThreeStep() {
    if(dataThreeStepBrow == 0 && dataThreeStepBlue == 0 && dataThreeStepGreen == 0) {
      flag = 0;  
      return false;
        
    };
    let colorCard = getRandom();
    console.log('colorCard = ' + colorCard);

    function selection(colorCard) {
        switch (colorCard) {
            case 0:
                    console.log(0);
                    if (dataThreeStepGreen>0) {
                        gameCard.style.background = `url(${rezultCardsDataGreenFilter[rezultCardsDataGreenFilter.length-1]['cardFace']}) no-repeat center`;
                        gameCard.style.backgroundSize = 'contain';
                        dataThreeStepGreen = dataThreeStepGreen-1;
                        rezultCardsDataGreenFilter.pop();
                        threeStepGreen.innerHTML = dataThreeStepGreen;
                    } else if(dataThreeStepBrow != 0 || dataThreeStepBlue != 0 || dataThreeStepGreen != 0) {
                        if (dataThreeStepBrow > 0) {
                            colorCard = 1;
                            selection(colorCard);
                        } else
                        if (dataThreeStepBlue > 0) {
                            colorCard = 2;
                            selection(colorCard);
                        }
                        
                     };
               break;
            case 1:
                console.log(1);
                if (dataThreeStepBrow > 0) {
                    gameCard.style.background = `url(${rezultCardsDataBrowFilter[rezultCardsDataBrowFilter.length-1]['cardFace']}) no-repeat center`;
                    gameCard.style.backgroundSize = 'contain';
                    dataThreeStepBrow = dataThreeStepBrow-1;
                    rezultCardsDataBrowFilter.pop();
                    threeStepBrow.innerHTML = dataThreeStepBrow;
                } else if(dataThreeStepBrow != 0 || dataThreeStepBlue != 0 || dataThreeStepGreen != 0) {
                    if (dataThreeStepGreen > 0) {
                        colorCard = 0;
                        selection(colorCard);
                    } else
                    if (dataThreeStepBlue > 0) {
                        colorCard = 2;
                        selection(colorCard);
                    }
                };
                break;
            case 2:
                console.log(2);
                if (dataThreeStepBlue > 0) {
                    gameCard.style.background = `url(${rezultCardsDataBlueFilter[rezultCardsDataBlueFilter.length-1]['cardFace']}) no-repeat center`;
                    gameCard.style.backgroundSize = 'contain';
                    dataThreeStepBlue = dataThreeStepBlue-1;
                    rezultCardsDataBlueFilter.pop();
                    threeStepBlue.innerHTML = dataThreeStepBlue;
                } else if(dataThreeStepBrow != 0 || dataThreeStepBlue != 0 || dataThreeStepGreen != 0) {
                    if (dataThreeStepGreen > 0) {
                        colorCard = 0;
                        selection(colorCard);
                    } else
                    if (dataThreeStepBrow > 0) {
                        colorCard = 1;
                        selection(colorCard);
                    }
                        
                };
                
            break;
        
            default:
                break;
        } 
        
    }
   
    selection(colorCard);
    console.log(rezultCardsDataGreenFilter);
    console.log(rezultCardsDataBrowFilter); 
    console.log(rezultCardsDataBlueFilter);
}

card.forEach(element => {   // Выбор карты для колоды
    element.addEventListener('click', () => {
            removeActivCard();
            element.classList.add('activCard');
            calculationFullLenghtMassivCardAndWriteDataCard(element.classList.value);
            wrapperMenu.classList.remove('hiden');
           
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
 //console.log(dataFirstStepGreen,dataFirstStepBlue,dataFirstStepBrow );
 gameCard.style.background = `none`;
});

buttonStop.addEventListener('click', () => { // сброс
    unblockCard();
    unblockMenu();
    wrapperContentGame.classList.add('hiden');
    wrapperMenu.classList.add('hiden');
    // buttonStart.classList.remove('hiden');
});

shirt.addEventListener('click', () => {
   
});

shirt.addEventListener('click', () => { //листание карт
    console.log('игра');
    if (flag == 0) {
        mapSelectionFirstStep();
    } 
    if (flag == 1) {
         mapSelectionTwoStep();
    }
    if (flag == 2) {
        mapSelectionThreeStep();
    }
   
});


