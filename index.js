

// var vConsole = new window.VConsole();
// var sound = new Howl({
//   src: ['/audio/sanyin/散1-1.MP3'], // 提供多个格式以适应不同浏览器
//   autoplay: true,
//   loop: true,
//   volume: 1,
// }); 


layui.use(function () {
  var element = layui.element;
  element.on("tab(layui-tab)", function (data) {
    console.log(this); // 当前 tab 标题所在的原始 DOM 元素
    console.log(data.index); // 得到当前 tab 项的所在下标
    console.log(data.elem); // 得到当前的 tab 容器
  });
});


let keyList= document.getElementsByClassName('layui-tab-content')[0]
keyList.addEventListener('click', function (e) {
  console.log(e.target.className);
  if (e.target.className === 'key') {
    console.log(e.target.getAttribute('data-url'))
    var sound = new Howl({
      src: ['./audio'+e.target.getAttribute('data-url')], // 提供多个格式以适应不同浏览器
      autoplay: false,
      loop: false,
      volume: 1,
      onload: function () {
        console.log('音频加载完成');
        sound.play();
      }
  }); 
  }
})

