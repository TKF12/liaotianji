/**
 * @param {object} options 对象
 * 
 */



/* function ajax(options) {
    // 请求方式
    var method = options.method || "GET";
    // 请求地址
    var url = options.url || "";
    // 请求数据
    var data = options.data || "";
    
    // 是否异步加载
    var isAsync = options.isAsync != udnefined ? options.isAsync : true;
    // 成功回调函数
    var success = options.success || function () {}
    // 失败回调函数
    var error = options.error || function () {}

    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        // ie6以下浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }else {
        return alert("浏览器不支持ajax");
    }
    // 当readystate状态改变时就触发
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText));
        }
    }
    xhr.onerror = function (e) {
        error("error");
    }
    // 把请求方式转化成大写格式
    method = method.toUpperCase();
    // get请求
    if(method == "GET") {
        if(url.indexOf("?") > -1) {
            if(url.indexOf("?") === url.length - 1) {
                url += data;
            }else {
                url += "&" + data;
            }
        } else {
            url += "?" + data;
        }
        xhr.open(method,url,isAsync);
        xhr.send();
    // post请求
    }else {
        xhr.open(method,url,isAsync);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
} */


function ajax(options) {
    // 请求方式
    var method = options.method || "GET";
    // 请求地址
    var url = options.url || "";
    // 数据
    var data = options.data || "";
    // 传递的是对象
    /* var data = options.data;
    var newStr = "";
    if(typeof(data) == "object") {
        for(var prop in data) {
            newStr += prop + "=" + data[prop] + "&";
        }
    } */
    // 是否异步加载
    var isAsync = options.isAsync !== undefined ? options.isAsync : true;
    // 成功回调函数
    var success = options.success || function () {};
    //失败回调函数
    var error = options.error || function () {};
    var xhr;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        // ie6以下浏览器
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }else {
        return alert("浏览器不支持ajax");
    }
    
    // 状态变化时
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText));
        }
    }
    // 错误信息
    xhr.onerror = function (e) {
        error("error");
    }

    // 把请求方式统一转换成大写格式
    method = method.toUpperCase();
    if(method == "GET") {
        // url中是否有?
        if(url.indexOf("?") > -1) {
            // url最后一位是? 不是则带有数据
            if(url.indexOf("?") == url.length-1) {
                url += data;
            }else {
                url + "&" + data;
            }
        }else {
            url += "?" + data;
        }
        xhr.open(method,url,isAsync);
        xhr.send();
    }else {
        xhr.open(method,url,isAsync);
        // 请求字段
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}