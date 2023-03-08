// 导出pdf
import { setTimeout } from 'core-js';
import html2Canvas from 'html2canvas';
import JsPDFs from 'jspdf';

export default {
  getPdfs: (el, pdfName, countNum) => {
    // 滚轮滑动造成的，主要是html2canvas是根据body进行截图，若内容高度高于body时，就会出现这样的问题
    // 解决方案：(在生成截图前，先把滚动条置顶)
    window.pageYoffset = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    let eleW = el.offsetWidth// 获得该容器的宽
    let eleH = el.scrollHeight// 获得该容器的高
    let eleOffsetTop = el.offsetTop// 获得该容器到文档顶部的距离
    let eleOffsetLeft = el.offsetLeft// 获得该容器到文档最左的距离
    var canvas = document.createElement("canvas")
    var abs = 0
    var winin = document.documentElement.clientWidth || document.body.clientWidth// 获得当前可视窗口的宽度（不包含滚动条）
    let winout = window.innerWidth// 获得当前窗口的宽度（包含滚动条）
    if (winout > winin) {
      abs = (winout - winin) / 2// 获得滚动条宽度的一半
    }
    canvas.width = eleW * 1.5// 将画布宽&&高放大两倍
    canvas.height = eleH * 1.5
    var context = canvas.getContext("2d")
    context.scale(1.5, 1.5) // 增强图片清晰度
    context.translate(0, -eleOffsetTop)
    return new Promise((resolve, reject) => {
      // 在点击保存图片时，此时要保存的资源较多，造成模块并没有完全加载完毕，就已经生成了截图。// 解决方案：(延迟)
      setTimeout(() => {
        // 这句挺重要
        html2Canvas(el, {
          scale: 1,
          dpi: 300,
          useCORS: true,
          imageTimeout: 0,
          allowTaint: false,
          backgroundColor: null,
          logging: true
        })
          .then((canvas) => {
            var contentWidth = canvas.width
            var contentHeight = canvas.height
            var pageHeight = (contentWidth / 592.28) * 841.89
            var leftHeight = contentHeight
            var position = 0
            var imgWidth = 595.28
            var imgHeight = (595.28 / contentWidth) * contentHeight
            var pageData = canvas.toDataURL("image/jpeg", 1.0)
            var PDF = new JsPDFs("", "pt", "a4")
            if (leftHeight < pageHeight) {
              PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight)
            } else {
              // 分页
              while (leftHeight > 0) {
                PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight)
                leftHeight -= pageHeight
                position -= 841.89
                // 避免添加空白页
                if (leftHeight > 0) {
                  PDF.addPage()
                }
              }
            }
            resolve({ PDF, name: pdfName, count: countNum });
          })
          .catch((e) => {
            reject(e);
          });
      }, 500);
    });
  }
}
