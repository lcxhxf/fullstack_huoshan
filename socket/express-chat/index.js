
let socket = io();
socket.on('connect', () => {
  console.log('连接成功');
})
socket.on('message', data=> {
    let li = document.createElement('li');
    li.className='list-group-item';
    li.innerHTML =`
    <p style="color:#ccc;">
        <span class="user">${data.user}</span>
        ${data.createAt}
    `
    list.appendChild(li);
})

let list = document.getElementById('list')
    input = document.getElementById('input')
    sendBtn = document.getElementById('sendBtn');

function send() {
    let value = input.value.trim();
    if (value) {
        socket.emit('message', value);
        input.value = '';
    } else {
        alert('内容不能为空')
    }
}
sendBtn.onclick = send;
