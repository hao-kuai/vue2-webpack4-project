import "./index.css"
import imageUrl from './image/icon.jpg';
//生成一个内容为Hello webpack !的div标签
function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello webpack !";
    element.classList.add("hello");
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