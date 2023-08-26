//Declaring necessary elements.
const LEFT_POSITION = document.querySelector('.left');
const MIDDLE_POSITION = document.querySelector('.middle');
const RIGHT_POSITION = document.querySelector('.right');
const LEFT_END_POSITION = document.querySelector('.leftend');
const RIGHT_END_POSITION = document.querySelector('.rightend');

const CUP_ONE_IMAGE = document.querySelector('.cupOneImage');
const CUP_TWO_IMAGE = document.querySelector('.cupTwoImage');
const CUP_THREE_IMAGE = document.querySelector('.cupThreeImage');
const CUP_FOUR_IMAGE = document.querySelector('.cupFourImage');
const CUP_FIVE_IMAGE = document.querySelector('.cupFiveImage');
const THEBALL = document.querySelector('.ball');
const ARROW = document.createElement('div');
const SINALIZING = document.createElement('p');
const CONTAINER = document.querySelector('#container');
const GAME_MODE_ONE = document.querySelector('#gameModeOne');
const GAME_MODE_TWO = document.querySelector('#gameModeTwo');
const BUTTONS_CONTAINER = document.querySelector('#buttons');

//getting the body rect for positioning and setting default positioning for cups orientation.
let bodyRect = document.body.getBoundingClientRect();

let cupPosition_one = 1;
let cupPosition_two = 2;
let cupPosition_three = 3;
let cupPosition_four = 4;
let cupPosition_five = 5;

let cup_one_current_position = cupPosition_one;
let cup_two_current_position = cupPosition_two;
let cup_three_current_position = cupPosition_three;
let cup_four_current_position = cupPosition_four;
let cup_five_current_position = cupPosition_five;

let roundSpeed = 2000;
let countValue = 0;
let countValueARROW = 0;
let currentRound = 0;

let countValueH = 0;
let roundSpeedH = 2000;
let countValueARROWH = 0;

GAME_MODE_ONE.addEventListener('click', theGame);
GAME_MODE_TWO.addEventListener('click', TheCupChallenge);

function TheCupChallenge() {
  BUTTONS_CONTAINER.style.display = "none";
  CONTAINER.style.display = "grid";
    const ballPosition = puttingBallInsideCupH(THEBALL);
    const nextLevelShuffling = setInterval(
      function HardcoreModeH() {
        let cup_one_style;
        let cup_two_style;
        let cup_three_style;
        let cup_four_style;
        let cup_five_style;
        
        if (
          cup_one_current_position === cupPosition_one &&
          cup_two_current_position === cupPosition_two &&
          cup_three_current_position === cupPosition_three &&
          cup_four_current_position === cupPosition_four &&
          cup_five_current_position === cupPosition_five
          ) {
            cup_one_style = gettingPositionsH(LEFT_POSITION);
            cup_two_style = gettingPositionsH(MIDDLE_POSITION);
            cup_three_style = gettingPositionsH(RIGHT_POSITION);
            cup_four_style = gettingPositionsH(LEFT_END_POSITION);
          cup_five_style = gettingPositionsH(RIGHT_END_POSITION);

          CUP_ONE_IMAGE.style.left =
          cup_one_style.elementLeft - bodyRect.left + "px";
          CUP_ONE_IMAGE.style.top =
          cup_one_style.elementTop - bodyRect.top + "px";
          
          CUP_TWO_IMAGE.style.left =
          cup_two_style.elementLeft - bodyRect.left + "px";
          CUP_TWO_IMAGE.style.top =
          cup_two_style.elementTop - bodyRect.top + "px";
          
          CUP_THREE_IMAGE.style.left =
            cup_three_style.elementLeft - bodyRect.left + "px";
            CUP_THREE_IMAGE.style.top =
            cup_three_style.elementTop - bodyRect.top + "px";
            
            CUP_FOUR_IMAGE.style.left =
            cup_four_style.elementLeft - bodyRect.left + "px";
            CUP_FOUR_IMAGE.style.top =
            cup_four_style.elementTop - bodyRect.top + "px";
            
            CUP_FIVE_IMAGE.style.left =
            cup_five_style.elementLeft - bodyRect.left + "px";
            CUP_FIVE_IMAGE.style.top =
            cup_five_style.elementTop - bodyRect.top + "px";
            
            cup_one_current_position = cupPosition_five;
            cup_two_current_position = cupPosition_four;
            cup_three_current_position = cupPosition_two;
            cup_four_current_position = cupPosition_one;
            cup_five_current_position = cupPosition_three;
          } else if (
          cup_one_current_position === cupPosition_five &&
          cup_two_current_position === cupPosition_four &&
          cup_three_current_position === cupPosition_two &&
          cup_four_current_position === cupPosition_one &&
          cup_five_current_position === cupPosition_three
          ) {
            cup_one_style = gettingPositionsH(RIGHT_END_POSITION);
            cup_two_style = gettingPositionsH(LEFT_END_POSITION);
            cup_three_style = gettingPositionsH(MIDDLE_POSITION);
            cup_four_style = gettingPositionsH(LEFT_POSITION);
            cup_five_style = gettingPositionsH(RIGHT_POSITION);
            
            CUP_ONE_IMAGE.style.left =
            cup_one_style.elementLeft - bodyRect.left + "px";
            CUP_ONE_IMAGE.style.top =
            cup_one_style.elementTop - bodyRect.top + "px";
            
            CUP_TWO_IMAGE.style.left =
            cup_two_style.elementLeft - bodyRect.left + "px";
            CUP_TWO_IMAGE.style.top =
            cup_two_style.elementTop - bodyRect.top + "px";
            
            CUP_THREE_IMAGE.style.left =
            cup_three_style.elementLeft - bodyRect.left + "px";
            CUP_THREE_IMAGE.style.top =
            cup_three_style.elementTop - bodyRect.top + "px";
            
            CUP_FOUR_IMAGE.style.left =
            cup_four_style.elementLeft - bodyRect.left + "px";
            CUP_FOUR_IMAGE.style.top =
            cup_four_style.elementTop - bodyRect.top + "px";
            
            CUP_FIVE_IMAGE.style.left =
            cup_five_style.elementLeft - bodyRect.left + "px";
            CUP_FIVE_IMAGE.style.top =
            cup_five_style.elementTop - bodyRect.top + "px";
            
            cup_one_current_position = cupPosition_four;
            cup_two_current_position = cupPosition_five;
            cup_three_current_position = cupPosition_three;
            cup_four_current_position = cupPosition_one;
            cup_five_current_position = cupPosition_two;
          } else if (
          cup_one_current_position === cupPosition_four &&
          cup_two_current_position === cupPosition_five &&
          cup_three_current_position === cupPosition_three &&
          cup_four_current_position === cupPosition_one &&
          cup_five_current_position === cupPosition_two
          ) {
            cup_one_style = gettingPositionsH(LEFT_END_POSITION);
            cup_two_style = gettingPositionsH(RIGHT_END_POSITION);
            cup_three_style = gettingPositionsH(RIGHT_POSITION);
            cup_four_style = gettingPositionsH(LEFT_POSITION);
            cup_five_style = gettingPositionsH(MIDDLE_POSITION);
            
            CUP_ONE_IMAGE.style.left =
            cup_one_style.elementLeft - bodyRect.left + "px";
            CUP_ONE_IMAGE.style.top =
            cup_one_style.elementTop - bodyRect.top + "px";
            
            CUP_TWO_IMAGE.style.left =
            cup_two_style.elementLeft - bodyRect.left + "px";
            CUP_TWO_IMAGE.style.top =
            cup_two_style.elementTop - bodyRect.top + "px";
            
            CUP_THREE_IMAGE.style.left =
            cup_three_style.elementLeft - bodyRect.left + "px";
            CUP_THREE_IMAGE.style.top =
            cup_three_style.elementTop - bodyRect.top + "px";
            
            CUP_FOUR_IMAGE.style.left =
            cup_four_style.elementLeft - bodyRect.left + "px";
            CUP_FOUR_IMAGE.style.top =
            cup_four_style.elementTop - bodyRect.top + "px";
            
            CUP_FIVE_IMAGE.style.left =
            cup_five_style.elementLeft - bodyRect.left + "px";
            CUP_FIVE_IMAGE.style.top =
            cup_five_style.elementTop - bodyRect.top + "px";
            
            cup_one_current_position = cupPosition_one;
            cup_two_current_position = cupPosition_two;
            cup_three_current_position = cupPosition_three;
            cup_four_current_position = cupPosition_four;
            cup_five_current_position = cupPosition_five;
          }
          
          localizationH();
          
          function anotherStopFunctionH() {
            countValueH++;
            if (countValueH > 1) {
              clearInterval(nextLevelShuffling);
              setTimeout(() => {
                CUP_ONE_IMAGE.addEventListener("click", cupClickH);
                CUP_TWO_IMAGE.addEventListener("click", cupClickH);
                CUP_THREE_IMAGE.addEventListener("click", cupClickH);
                CUP_FOUR_IMAGE.addEventListener("click", cupClickH);
                CUP_FIVE_IMAGE.addEventListener("click", cupClickH);
              
              function cupClickH() {
                if (this === ballPosition) {
                  CUP_ONE_IMAGE.removeEventListener("click", cupClickH, false);
                  CUP_TWO_IMAGE.removeEventListener("click", cupClickH, false);
                  CUP_THREE_IMAGE.removeEventListener("click",cupClickH,false);
                  CUP_FOUR_IMAGE.removeEventListener("click", cupClickH, false);
                  CUP_FIVE_IMAGE.removeEventListener("click", cupClickH, false);
                  
                  alert("You got it!");
                    
                  countValueH = 0;
                    countValueARROWH = 0;
                    
                    do {
                      roundSpeedH -= 200;
                      
                      if (roundSpeedH < 100) {
                        roundSpeedH = 2000;
                      }
                    } while (roundSpeedH < 100);
                    
                    currentRound++;
                  console.log(roundSpeedH);
                  console.log(currentRound);
                  
                  TheCupChallenge();
                } else {
                  CUP_ONE_IMAGE.removeEventListener("click", cupClickH, false);
                  CUP_TWO_IMAGE.removeEventListener("click", cupClickH, false);
                  CUP_THREE_IMAGE.removeEventListener("click",cupClickH,false);
                    CUP_FOUR_IMAGE.removeEventListener("click", cupClickH, false);
                    CUP_FIVE_IMAGE.removeEventListener("click", cupClickH, false);
                    
                    alert("You Lose!");
                    
                    countValueH = 0;
                    countValueARROWH = 0;
                    
                    roundSpeedH = 2000;
                    currentRound = 0;
                    
                    TheCupChallenge();
                  }
              }
            }, 550);
          }
        }
        anotherStopFunctionH();
      },
      [roundSpeedH]
      );
      
      function gettingPositionsH(cupPosition) {
        let elementValues = cupPosition.getBoundingClientRect();

        //returning an object with the element values to insert it into the positioning switch.
        return {
          elementTop: elementValues.top,
          elementLeft: elementValues.left,
          elementWidth: elementValues.width,
          elementHeight: elementValues.height,
        };
      }
      
      function puttingBallInsideCupH(TheBall) {
        let arrayCupPosition = [
          CUP_ONE_IMAGE,
          CUP_TWO_IMAGE,
          CUP_THREE_IMAGE,
          CUP_FOUR_IMAGE,
          CUP_FIVE_IMAGE,
        ];
        let randomArrayNumber = Math.floor(
          Math.random() * arrayCupPosition.length
          );
          TheBall = arrayCupPosition[randomArrayNumber];
          
          return TheBall;
        }
        
        function localizationH() {
          countValueARROWH++;
          
          ARROW.className = "arrow";
          SINALIZING.className = "paragraph";
          SINALIZING.textContent = "The ball is here";
          
      ballPosition.appendChild(ARROW);
      ballPosition.appendChild(SINALIZING);
      if (countValueARROWH > 1) {
        ballPosition.removeChild(ARROW);
        SINALIZING.style.display = "none";
      }
    }
  }
  function theGame() {
    CUP_FIVE_IMAGE.remove();
    CUP_FOUR_IMAGE.remove();
    BUTTONS_CONTAINER.style.display = "none";
    CONTAINER.style.display = "grid";
    const ballPosition = puttingBallInsideCup(THEBALL);
    const shuffling = setInterval(
      function shuffle() {
        let cup_one_style;
        let cup_two_style;
        let cup_three_style;
        
        if (
          cup_one_current_position === cupPosition_one &&
          cup_two_current_position === cupPosition_two &&
          cup_three_current_position === cupPosition_three
          ) {
          cup_one_style = gettingPositions(LEFT_POSITION);
          cup_two_style = gettingPositions(MIDDLE_POSITION);
          cup_three_style = gettingPositions(RIGHT_POSITION);

          CUP_ONE_IMAGE.style.left =
            cup_one_style.elementLeft - bodyRect.left + "px";
          CUP_ONE_IMAGE.style.top =
            cup_one_style.elementTop - bodyRect.top + "px";

          CUP_TWO_IMAGE.style.left =
            cup_two_style.elementLeft - bodyRect.left + "px";
          CUP_TWO_IMAGE.style.top =
            cup_two_style.elementTop - bodyRect.top + "px";

          CUP_THREE_IMAGE.style.left =
            cup_three_style.elementLeft - bodyRect.left + "px";
          CUP_THREE_IMAGE.style.top =
            cup_three_style.elementTop - bodyRect.top + "px";

          cup_one_current_position = cupPosition_three;
          cup_two_current_position = cupPosition_one;
          cup_three_current_position = cupPosition_two;
        } else if (
          cup_one_current_position === cupPosition_three &&
          cup_two_current_position === cupPosition_one &&
          cup_three_current_position === cupPosition_two
        ) {
          cup_one_style = gettingPositions(MIDDLE_POSITION);
          cup_two_style = gettingPositions(RIGHT_POSITION);
          cup_three_style = gettingPositions(LEFT_POSITION);

          CUP_ONE_IMAGE.style.left =
            cup_one_style.elementLeft - bodyRect.left + "px";
          CUP_ONE_IMAGE.style.top =
            cup_one_style.elementTop - bodyRect.top + "px";

          CUP_TWO_IMAGE.style.left =
            cup_two_style.elementLeft - bodyRect.left + "px";
          CUP_TWO_IMAGE.style.top =
            cup_two_style.elementTop - bodyRect.top + "px";

          CUP_THREE_IMAGE.style.left =
            cup_three_style.elementLeft - bodyRect.left + "px";
          CUP_THREE_IMAGE.style.top =
            cup_three_style.elementTop - bodyRect.top + "px";

          cup_one_current_position = cupPosition_two;
          cup_two_current_position = cupPosition_three;
          cup_three_current_position = cupPosition_one;
        } else if (
          cup_one_current_position === cupPosition_two &&
          cup_two_current_position === cupPosition_three &&
          cup_three_current_position === cupPosition_one
        ) {
          cup_one_style = gettingPositions(RIGHT_POSITION);
          cup_two_style = gettingPositions(MIDDLE_POSITION);
          cup_three_style = gettingPositions(LEFT_POSITION);

          CUP_ONE_IMAGE.style.left =
            cup_one_style.elementLeft - bodyRect.left + "px";
          CUP_ONE_IMAGE.style.top =
            cup_one_style.elementTop - bodyRect.top + "px";

          CUP_TWO_IMAGE.style.left =
            cup_two_style.elementLeft - bodyRect.left + "px";
          CUP_TWO_IMAGE.style.top =
            cup_two_style.elementTop - bodyRect.top + "px";

          CUP_THREE_IMAGE.style.left =
            cup_three_style.elementLeft - bodyRect.left + "px";
          CUP_THREE_IMAGE.style.top =
            cup_three_style.elementTop - bodyRect.top + "px";

          cup_one_current_position = cupPosition_one;
          cup_two_current_position = cupPosition_two;
          cup_three_current_position = cupPosition_three;
        }

        localization();

        function stopShuffling() {
          countValue++;

          if (countValue > 1) {
            clearInterval(shuffling);
            setTimeout(() => {
              CUP_ONE_IMAGE.addEventListener("click", cupClick);
              CUP_TWO_IMAGE.addEventListener("click", cupClick);
              CUP_THREE_IMAGE.addEventListener("click", cupClick);

              function cupClick() {
                if (this === ballPosition) {
                  CUP_ONE_IMAGE.removeEventListener("click", cupClick, false);
                  CUP_TWO_IMAGE.removeEventListener("click", cupClick, false);
                  CUP_THREE_IMAGE.removeEventListener("click", cupClick, false);
                  alert("You got it!");

                  countValue = 0;
                  countValueARROW = 0;

                  do {
                    roundSpeed -= 200;

                    if (roundSpeed < 100) {
                      roundSpeed = 2000;
                    }
                  } while (roundSpeed < 100);

                  currentRound++;
                  console.log(roundSpeed);
                  console.log(currentRound);

                  theGame();
                } else {
                  CUP_ONE_IMAGE.removeEventListener("click", cupClick, false);
                  CUP_TWO_IMAGE.removeEventListener("click", cupClick, false);
                  CUP_THREE_IMAGE.removeEventListener("click", cupClick, false);

                  alert("You Lose!");

                  countValue = 0;
                  countValueARROW = 0;

                  roundSpeed = 2000;
                  currentRound = 0;

                  theGame();
                }
              }
            }, 550);
          }
        }
        stopShuffling();
      },
      [roundSpeed]
    );
    //Creating a function to get the informations about width, height, top and left of the element so we can set its position.
    function gettingPositions(cupPosition) {
      let elementValues = cupPosition.getBoundingClientRect();

      //returning an object with the element values to insert it into the positioning switch.
      return {
        elementTop: elementValues.top,
        elementLeft: elementValues.left,
        elementWidth: elementValues.width,
        elementHeight: elementValues.height,
      };
    }

    // Getting a random position for the ball. It will make the game a little bit harder.
    function puttingBallInsideCup(TheBall) {
      let arrayCupPosition = [CUP_ONE_IMAGE, CUP_TWO_IMAGE, CUP_THREE_IMAGE];
      let randomArrayNumber = Math.floor(
        Math.random() * arrayCupPosition.length
      );
      TheBall = arrayCupPosition[randomArrayNumber];

      return TheBall;
    }

    function localization() {
      countValueARROW++;

      ARROW.className = "arrow";
      SINALIZING.className = "paragraph";
      SINALIZING.textContent = "The ball is here";

      ballPosition.appendChild(ARROW);
      ballPosition.appendChild(SINALIZING);
      if (countValueARROW > 1) {
        ballPosition.removeChild(ARROW);
        SINALIZING.style.display = "none";
      }
    }
  }
