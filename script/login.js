//요소 선택
const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");
const id = document.getElementById('id');
const pw = document.getElementById('pw');
const login = document.getElementById('btn_login')
const id_Box = document.getElementById('id_line')
let errStack = 0;

var link = 'home.html'

/* //getTime 함수
function getTime(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    todayDiv.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv.textContent = `${hour}:${minute}:${second}`
}
getTime();
setInterval(getTime,1000);
 */
// 로그인
login.addEventListener('click',function(){
    if(id.value == 'tmddntlr@gmail.com'){
        if(pw.value == '0000'){
            location.href = link;
        }
        else{
            alert('비밀번호를 올바르게 입력하세요');
            errStack ++;
        }
    }
    else{
        alert('존재하지 않는 계정입니다');
    }
    if(errStack == 5){
        alert('비밀번호를 5회 이상 틀리셨습니다 비밀번호 찾기를 권장드립니다')
    }
})
// id.addEventListener('focus',function(){
//     document.getElementById('id_line') += 'focus';
// })

id.addEventListener('focus',()=>{
    console.log(id);
    console.log(id.value)
})

function checkValue(){
    const name = this.getElementById
}