const gameText = document.getElementByid('game-text2');
const userInput = document.getElementByid('user-input2');
const submitBtn = document.getElementByid('submit-btn2');
function print(text){
  gameText.innerText += text + "/n";
  gameText.scrollTop = gameText.scrollHeight;
}
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
let currrentStep = "askUsername";
let usename = "";
submitBtn.addEventListener("click", async() =>{
  const input = userInput.value.trim();
  userInput.value = "";
  if(currentStep === "askUsername"){
    username = input;
    if(user
