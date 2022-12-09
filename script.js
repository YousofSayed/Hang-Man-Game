// start video intro 
let intro = document.querySelector('.intro'),
    startBtn = document.getElementById('start');



function playRealxAud() {
    audRelax.play();
    audRelax.loop=true;
}

startBtn.addEventListener('click',()=>{
    intro.style.left = '-200%';
    playRealxAud()
})



//Start Handling Canvas
let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
let audio = document.getElementById('aud');

window.onload = () => {
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#b9fbf4';
    ctx.fillStyle = '#b9fbf4';
    lineCap = 'round';
}

//Start set dimntions for canvas
function setDimentionsCanvas(w,h) {
    canvas.width = document.body.offsetWidth * w / 100;
    canvas.height = document.body.offsetHeight * h / 100;
}
setDimentionsCanvas(90,50)
if(document.body.offsetWidth <= 600){
setDimentionsCanvas(90,40)
}
window.addEventListener('resize', () => { setDimentionsCanvas() })
//End set dimntions for canvas
let snapShot;
//Start Drawing the Gibbet
function drawGibbet() {
    ctx.beginPath();
    ctx.moveTo(canvas.width * 10 / 100, canvas.height);
    ctx.lineTo(canvas.width * 10 / 100, canvas.height * 20 / 100);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#b9fbf4';
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(canvas.width * 10 / 100, canvas.height * 50 / 100);
    ctx.lineTo(canvas.width * 10 / 100 + 80, canvas.height * 20 / 100);
    ctx.strokeStyle = '#b9fbf4';
    ctx.lineWidth = 3;
    ctx.stroke();
}
drawGibbet()
window.addEventListener('resize', () => { drawGibbet() })
//End Drawing the Gibbet
//Wrong-1 Function

let iOfWrong = 0;

function resetSizez() {
    x1 = canvas.width * 10 / 100;
    y2 = canvas.height * 20 / 100;
    i3 = 0;
    y4 = 0;
    y5 = 0;
    x5 = 0;
}



let x1 = canvas.width * 50 / 100;
function drawWrong1() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(canvas.width * 10 / 100, canvas.height * 20 / 100);
    // x1 += 35
    ctx.lineTo(x1, canvas.height * 20 / 100)
    // if (x1 <= canvas.width * 50 / 100) { window.requestAnimationFrame(drawWrong1); }
    ctx.stroke();
    ctx.closePath();

}

//Wrong-2 function
let y2 = canvas.height * 30 / 100
function drawWrong2() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x1 - 2, canvas.height * 20 / 100);
    // y2 += 25;
    ctx.lineTo(x1 - 2, y2)
    // if (y2 <= canvas.height * 30 / 100){ window.requestAnimationFrame(drawWrong2);}
    ctx.stroke();
    ctx.closePath();
}

let i3 = 19;
function drawWrong3() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath()
    // i3 += 10
    ctx.arc(x1 - 2, y2 + i3, i3, 0, 2 * Math.PI);
    // y4 = y2 + (i3 * 2);
    // if (i3 <= 18){ window.requestAnimationFrame(drawWrong3);}
    ctx.fill()
    ctx.closePath();
}

let y4=canvas.height * 70 / 100;
function drawWrong4() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x1 - 2, y2 + i3 * 2);
    // y4 += 15
    // y5 = y2 + (i3 * 2) + (y4 - (y2 + (i3 * 2))) / 2 - 14;
    ctx.lineTo(x1, y4);
    // if (y4 <= canvas.height * 70 / 100) {window.requestAnimationFrame(drawWrong4);}
    ctx.stroke();
}

let y5=y2 + (i3 * 2) + (y4 - (y2 + (i3 * 2))) / 2 - 14;
let x5 = 30;
function drawWrong5() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x1 - 2, y5)
    // x5 += 5;
    ctx.lineTo(x1 - x5, y5 + 35);
    // if (x5 <= 30) { window.requestAnimationFrame(drawWrong5);}
    // if (x5 > 30) { x5 = 0; }
    ctx.stroke();
}


function drawWrong6() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x1 - 2, y5)
    // x5 += 5;
    ctx.lineTo(x1 + x5, y5 + 35);
    // if (x5 <= 30) {window.requestAnimationFrame(drawWrong6);}
    // if (x5 > 30) { x5 = 0; }
    ctx.stroke();
}

function drawWrong7() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x1, y4)
    // x5 += 5;
    ctx.lineTo(x1 + x5, y4 + 35);
    // if (x5 <= 30) {window.requestAnimationFrame(drawWrong7);}
    // if (x5 > 30) { x5 = 0; }
    ctx.stroke();
}

function drawWrong8() {
    // ctx.putImageData(snapShot, 0, 0);
    ctx.beginPath();
    ctx.moveTo(x1, y4)
    // x5 += 5;
    ctx.lineTo(x1 - x5, y4 + 35);
    // if (x5 <= 30){ window.requestAnimationFrame(drawWrong8);}
    // if (x5 > 30) { x5 = 0; }
    ctx.stroke();
}


 


//End handling Canvas

// Start Set Use Data 
let qustionplace = document.querySelector('.qustion-place'),
    wordPlace = document.querySelector('.word-place .container'),
    level = document.getElementById('level'),
    next = document.getElementById('next');
//Start Gettint Data From Json
let data;
let i = 0 ;
if(+window.localStorage.getItem('lev') > 0){
    i = +window.localStorage.getItem('lev');
}

if(i>49) i=0;
if(+window.localStorage.getItem('lev') > 0){  
        intro.remove()
}

function setData(dataArray) {
    qustionplace.textContent = dataArray[i].qus;
    level.textContent = `Lev ${dataArray[i].Lv}`;
    let answerChracter = dataArray[i].ans.split('').filter((e)=>{if(e !==' ') {return e}}).map((e)=>{return e.toUpperCase()})
    console.log(answerChracter);
    for (let i = 0; i < answerChracter.length; i++) {
        let word = document.createElement('span');
        word.className = 'word';
        word.textContent = answerChracter[i].toUpperCase();
        wordPlace.appendChild(word);
        wordPlace.setAttribute('win', new Set(answerChracter).size);
    }
}
function setAndIncrement(dataArray) {
    setData(dataArray)
    next.addEventListener('click', () => {
        i++;
        wordPlace.innerHTML = '';
        setData(dataArray)
    })
}
function getData(link) {
    fetch(link).then((res) => { return res.json() }).then((dataRes) => {
        data = dataRes.qustions;
        return data
    }).then((dataArray) => {
        console.log(dataArray);
        setData(dataArray)
    })
}
getData('data.json');
//End Gettint Data From Json


//Start Writting Chracters
let keyboardPlace = document.querySelector('.keyboard-place');
const aToz = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function makekeypoard() {
    for (let i = 0; i < aToz.length; i++) {
        let chracter = document.createElement('div');
        chracter.className = 'chracter';
        chracter.textContent = aToz[i];
        keyboardPlace.appendChild(chracter);
    }
}
makekeypoard()
//End Writting Chracters


//Start Playing
let allChracters = document.querySelectorAll('.chracter'),
    audHorror = document.getElementById('horror'),
    audClick = document.getElementById('click'),
    audSwordDraw = document.getElementById('swordDraw'),
    audRelax = document.getElementById('relax'),
    audNearFromYou = document.getElementById('near')
    hangImage = document.getElementById('imgHang'),
    canvasPlace = document.querySelector('.canvas-place'),
    characters = document.querySelectorAll('.chracter');
// console.log(allWords);
let isWin = true,
    toWin = 0;
isNew = true;
let filterBySetObj = new Set();

function resetAndStopAudio(audio1, audio2) {
    audio1.pause();
    audio2.currentTime = 0;
    audio2.play();
}


function wrongsOfCanvas(i) {
    let arrWrongs=[drawWrong1,drawWrong2,drawWrong3,drawWrong4,drawWrong5,drawWrong6,drawWrong7,drawWrong8];
    if(i == iOfWrong){arrWrongs[i-1]()}
    if(i==7) {
        audRelax.pause();
        audNearFromYou.play();
    }
    if (i >= 8) {
        makeSomeHorror();
    }
}
// ctx.willReadFrequently=true;

function makeSomeHorror() {
    audRelax.pause();
    audNearFromYou.pause();
    audHorror.play();
    audHorror.loop = true;
    canvasPlace.innerHTML = '<img id="imgHang" src="./Images/3456345_orig.gif" >';
    document.body.style.backgroundColor = 'red';
    //next line you think that is will make error but not because the var will run after load all varibals
    reBtn.style.opacity='1';
    window.localStorage.setItem('lev',i)
}

function ifWrong(charcter) {
    charcter.innerHTML = `<i class="fa-solid fa-x"></i>`;
    charcter.style.backgroundColor=`red`;
    iOfWrong++
    resetAndStopAudio(audClick , audSwordDraw )
    wrongsOfCanvas(iOfWrong) //All Previous Code this function is a Shourcut for them Do you belive it ?? "الحمد لله"
}

function resetKeyboardAndWordPlace(charcter) {
    for (let i = 0; i < aToz.length; i++) {
        wordPlace.innerHTML = '';
        charcter[i].textContent = aToz[i];
    }
    charcter.forEach((e)=>{e.style.backgroundColor='#fff'});
}

function resetCanvas() {
    iOfWrong = 0;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawGibbet();
}



function ifWin(charcter) {
    resetKeyboardAndWordPlace(charcter)
    filterBySetObj.clear();
    i++
    window.localStorage.setItem('lev',i);
    setData(data);
    resetCanvas();
}
// ctx.drawImage(hangImage,0,0,canvas.width,canvas.height)
function startPlay() {
    allChracters.forEach((ec) => {
        ec.addEventListener('click', (event) => {
        //    snapShot= ctx.getImageData(0,0,canvas.width,canvas.height);

            let allWords = document.querySelectorAll('.word');
            audClick.play();
            audRelax.play();
            audRelax.loop=true;
            allWords.forEach((ew) => {
                if (wordPlace.textContent.includes(event.target.textContent) &&
                ec.textContent == ew.textContent
                ) {
                    ew.style.color = '#333';
                    filterBySetObj.add(ec)
                    console.log(filterBySetObj);
                    if (filterBySetObj.size == +wordPlace.getAttribute('win')) {
                        ifWin(allChracters);
                        audNearFromYou.pause();
                        audRelax.play();
                        isWin=false;
                    }else{isWin = true}
                }
                if(!isWin) {
                    isWin=true;     
                    return false
                }
                if (!wordPlace.textContent.toUpperCase().includes(event.target.textContent)) {
                    ifWrong(ec)
                    
                };

            });
        })
    })
}
startPlay()



window.addEventListener('keyup',(event)=>{
    allChracters.forEach((ec)=>{
        if(event.key.toUpperCase() === ec.textContent){

            ec.click();
        }
    })
})


//Start Repeat Button
let reBtn = document.getElementById('repeat');


reBtn.addEventListener('click',()=>{
    i = +window.localStorage.getItem('lev');
   window.location.reload();
})
// window.addEventListener('load',()=>{ 
   
// })
