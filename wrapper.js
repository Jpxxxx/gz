// 利用 CSS3 旋转 对根容器逆时针旋转 90 度
var detectOrient = function() {
    var width = document.documentElement.clientWidth,
        height =  document.documentElement.clientHeight,
        $wrapper =  document.getElementById("J_wrapper"),
        style = "";
    if( width >= height ){ // 横屏
        style += "width:" + width + "px;";  // 注意旋转后的宽高切换
        style += "height:" + height + "px;";
        style += "-webkit-transform: rotate(0); transform: rotate(0);";
        style += "-webkit-transform-origin: 0 0;";
        style += "transform-origin: 0 0;";
    }
    else{ // 竖屏
        style += "width:" + height + "px;"; 
        style += "height:" + width + "px;"; 
        style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
        // 注意旋转中点的处理
        style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
        style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
    }
    $wrapper.style.cssText = style;
  }
  window.onresize = detectOrient;
detectOrient();
  
// 动态为根元素设置字体大小
function init() {
    // 获取屏幕宽度
    var width = document.getElementById('J_wrapper').clientWidth; // 设置根元素字体大小。此时为宽的10等分
    document.documentElement.style.fontSize = width / 100 + "px";
  }
  
  init();
  // 监听手机旋转的事件的时机，重新设置
  window.addEventListener("orientationchange", init);
  // 监听手机窗口变化，重新设置
  window.addEventListener("resize", init);