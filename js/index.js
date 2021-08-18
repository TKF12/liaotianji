var box = document.getElementById("box");
var content = document.getElementsByClassName("content")[0];
var Osend = document.getElementById("send");
// 回车事件
box.onkeydown = function (e) {
    var value = this.value;
    if(e.keyCode == 13) {
        if(value) {
            render("mine",value);
            getAajx(value);
            this.value = "";
        }
    }
}
Osend.onclick = function () {
    if(box.value) {
        render("mine",box.value);
        getAajx(box.value);
        box.value = "";
    }
}

function getAajx(text) {
    ajax({
        method: "get",
        url: "https://developer.duyiedu.com/edu/turing/chat",
        data: "text=" + text,
        success: function (data) {
            render("robot",data.text);
        }
    })
}

function render(who,text) {
    var oDiv = document.createElement("div");
    var img = new Image();
    var reDom = document.createElement("div");
    oDiv.className = who;
    img.className = "avator";
    reDom.className = "text";
    if(who == "mine") {
        img.src = "./image/3.png";
        reDom.innerHTML = text;
    }else {
        img.src = "./image/dog1.jpg";
        reDom.innerHTML = text;
    }
    oDiv.appendChild(img);
    oDiv.appendChild(reDom);
    content.appendChild(oDiv);
    content.scrollTo(0,content.scrollHeight - content.clientHeight)
}

