//요소 선택
const id = document.getElementById('id');
const pw = document.getElementById('pw');
const login = document.getElementById('btn_login')
const id_Box = document.getElementById('id_line')
const fail_Box = document.querySelector('.logint-fail-wrap-position');
const fail = document.querySelector('.login-fail-wrap')
const eye = document.getElementById('pw_eye')

var link = 'home.html'

let errStack = 0;
let count = 0;

//요소 만들기
function createDiv(newClassName, positionClassName) {
    const newDiv = document.createElement("div");
    newDiv.className = newClassName;
    const position = document.querySelector(positionClassName)
    position.appendChild(newDiv)
}
function createImg(newClassName, positionClassName, src) {
    const newImg = document.createElement("img");
    newImg.className = newClassName;
    newImg.src = src;
    const position = document.querySelector(positionClassName)
    position.appendChild(newImg)
}
function createP(newClassName, positionClassName, ment) {
    const newP = document.createElement("p");
    newP.className = newClassName;
    newP.innerHTML = ment;
    const position = document.querySelector(positionClassName)
    position.appendChild(newP)
}
checkValue();

//에러박스 생성
function createFailBox() {
    createDiv('login-fail-wrap', '.logint-fail-wrap-position')
    createImg('info-red', '.login-fail-wrap', './img/info-white.svg')
    createP('', '.login-fail-wrap', '아이디(이메일) 또는 비밀번호가<br>일치하지 않습니다.')
}

// 로그인
login.addEventListener('click', function () {
    const fail_Box = document.querySelector('.login-fail-wrap')
    if(id.value == 'tmddntlr@gmail.com'){
        if(pw.value =='0000'){
            location.href =link;
        }
        else if(pw.value != '0000' && errStack == 0 ){
            //fail_Box.remove();
            createFailBox();
            errStack++;   
        }
        else if(pw.value != '0000'){
            errStack++;
        }
    }
    else if(errStack == 0)
    {
        //fail_Box.remove();
        createFailBox();
        errStack++;
    }
})

/* id.addEventListener('focus',function(){
    document.getElementById('id_line') += 'focus';
}) */

/* id.addEventListener('focus',()=>{
    console.log(id);
    console.log(id.value)
}) */

function checkValue() {
    const btn = document.getElementById('btn_login')
    id.value != '' ? id.className = 'input-text activate' : id.className = 'input-text';
    pw.value != '' ? pw.className = 'input-text activate' : pw.className = 'input-text';
    if(id.value != '' && pw.value !=''){
        btn.style.backgroundColor='#FF6532'
        btn.disabled = false;
    }
    else{
        btn.style.backgroundColor='#F0F0F0'
        btn.disabled = true;
    }
}

eye.addEventListener('click',function(){
    if(count == 0){
        pw.setAttribute('type','text')
        count = 1;
    }
    else if(count != 0){
        pw.setAttribute('type','password')
        count = 0;
    }
})