const formSubmit = () => {
    const title = document.getElementById('title').value;
    const writer = document.getElementById('writer').value;
    const emailId = document.getElementById('emailId').value;
    const contents = document.getElementById('contents').value;
}
if (!title || !writer || !emailId || !contents){
    alert('내용을 입력하세요')
    return;
}
const form = document.getElementById('input-form');
form.method = 'GET';
form.submit();
