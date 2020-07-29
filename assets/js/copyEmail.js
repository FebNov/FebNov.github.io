const imgbutton = document.querySelector(".myEmailImg");
imgbutton.addEventListener("click", function (event) {
  const myEmail = document.querySelector(".myEmail").innerText;
  const input = document.querySelector(".fakeInput");
  input.value = myEmail;
  input.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令
  alert("copyed");
});
