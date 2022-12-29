// 따로 script를 명시할 필요없다
// 공통으로 쓰이는 script들을 이쪽으로 정리해두자

const helloworld = () => {
    alert('Hello World');
}

const moveExample02 = () => {
    // window.location.href('./example02.html');
    location.replace('./example02.html');
}
//해시가 남아있으면 Back시 뒤페이지가 아니라 로그(replace)대로 가나봄...
const back = () => {
    history.back();
}
// a태그로 이동되었을 땐 이상없이 back이 잘 수행됨