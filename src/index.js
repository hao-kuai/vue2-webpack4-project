import "./index.css"
import imageUrl from './image/icon.jpg';
import textPrint from "./js/textPrint";

//生成一个内容为Hello webpack !的div标签
function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello webpack 1!";
    element.classList.add("hello");
    element.onclick = textPrint;
    return element;
}

//将生成的div标签添加到body中去
document.body.appendChild(component());

//添加图片资源
function imageComponent() {
    const element = document.createElement('img');
    element.src = imageUrl;
    element.classList.add("image");
    return element;
}

//将生成的图片标签添加到body中去
document.body.appendChild(imageComponent());

//添加 HMR 的 API 的回调函数，监测文件变更
if (module.hot) {
    module.hot.accept('./js/textPrint.js', function () {
        console.log('Accepting the updated textPrint module!');
    })
}