# canvasSignature

## 介绍
canvasSignature 数字签名。

## 源码

::: code-group

```javascript
/**
 * `canvas`签名工具
 * @param {object} option
 * @param { string } option.el 挂载的节点id
 * @param { number } option.lineSize （可选）画笔线条的厚度：像素
 * @param { string} option.lineColor （可选）画笔线条的颜色
 * @param { string } option.backgroundColor （可选）背景颜色
 * @param { number } option.ratio （可选）缩放比率
 */
function canvasSignature(option) {
    const el = document.getElementById(option.el);
    const lineSize = option.lineSize || 4;
    const lineColor = option.lineColor || '#000000';
    const backgroundColor = option.backgroundColor || '#ffffff';
    const ratio = option.ratio || window.devicePixelRatio;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let startX = 0, startY = 0;
    let hasDraw = false, isDrawing = false;
    let points = [];
    let allPoints = [];

    /** 更新`canvas`尺寸 */
    function updateSize() {
        canvas.width = el.clientWidth * ratio;
        canvas.height = el.clientHeight * ratio;
    }

    /** 设置画布样式 */
    function setStyle() {
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        context.lineCap = "round";
        context.lineJoin = "round";
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    /**
     * 绘画开始
     * @param {{ x: number, y: number }} size 坐标点
     */
    function drawStart(size) {
        const x = size.x * ratio, y = size.y * ratio;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x, y);
        context.strokeStyle = lineColor;
        context.lineWidth = lineSize * ratio;
        context.stroke();
        context.closePath();
        startY = y;
        startX = x;
    }

    /**
     * 绘画拖拽
     * @param {{ x: number, y: number }} size 坐标点
     */
    function drawMove(size) {
        const x = size.x * ratio, y = size.y * ratio;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(x, y);
        context.strokeStyle = lineColor;
        context.lineWidth = lineSize * ratio;
        context.stroke();
        context.closePath();
        startY = y;
        startX = x;
    }

    /**
     * 绘画结束
     * @param {{ x: number, y: number }} size 坐标点
     */
    function drawEnd(size) {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(size.x * ratio, size.y * ratio);
        context.stroke();
        context.closePath();
    }

    /**
     * 鼠标摁下
     * @param {MouseEvent} e
     */
    function onMouseDown(e) {
        e.preventDefault();
        isDrawing = true;
        hasDraw = true;
        drawStart({
            x: e.offsetX,
            y: e.offsetY
        })
        points.push({
            x: e.offsetX,
            y: e.offsetY
        });
    }

    /**
     * 鼠标移动
     * @param {MouseEvent} e
     */
    function onMouseMove(e) {
        e.preventDefault();
        if (!isDrawing) return;
        drawMove({
            x: e.offsetX,
            y: e.offsetY
        })
        points.push({
            x: e.offsetX,
            y: e.offsetY
        });
    }

    /**
     * 鼠标抬起
     * @param {MouseEvent} e
     */
    function onMouseUp(e) {
        allPoints.push(points);
        points = [];
        e.preventDefault();
        if (!isDrawing) return;
        drawEnd({
            x: e.offsetX,
            y: e.offsetY
        })
        isDrawing = false;
    }

    /**
     * 触摸开始
     * @param {TouchEvent} e
     */
    function onTouchStart(e) {
        e.preventDefault();
        if (e.touches.length === 1) {
            isDrawing = true;
            hasDraw = true;
            const size = e.touches[0];
            const box = canvas.getBoundingClientRect();
            drawStart({
                x: size.clientX - box.left,
                y: size.clientY - box.top
            })
        }
    }

    /**
     * 触摸移动
     * @param {TouchEvent} e
     */
    function onTouchMove(e) {
        e.preventDefault();
        if (!isDrawing) return;
        if (e.touches.length === 1) {
            const size = e.touches[0];
            const box = canvas.getBoundingClientRect();
            drawMove({
                x: size.clientX - box.left,
                y: size.clientY - box.top
            })
        }
    }

    /**
     * 触摸结束
     * @param {TouchEvent} e
     */
    function onTouchEnd(e) {
        e.preventDefault();
        if (!isDrawing) return;
        if (e.touches.length === 1) {
            const size = e.touches[0];
            const box = canvas.getBoundingClientRect();
            drawEnd({
                x: size.clientX - box.left,
                y: size.clientY - box.top
            })
        }
    }

    /** 整个文档抬起事件 */
    function documentUp() {
        isDrawing = false;
        // 如果节点被销毁了，那就取消`document`的绑定事件
        if (!document.body.contains(canvas)) {
            document.removeEventListener("mouseup", documentUp);
            document.removeEventListener("touchend", documentUp);
        }
    }

    // 输出节点
    el.appendChild(canvas);
    // 先更新一次
    updateSize();
    setStyle();
    // 添加事件
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);
    document.addEventListener("mouseup", documentUp);
    document.addEventListener("touchend", documentUp);

    return {
        canvas,
        /** 重置 */
        reset() {
            hasDraw = false;
            context.clearRect(0, 0, canvas.width, canvas.height);
            setStyle();
        },
        /**
         * 生成图片
         * @param imageType 图片类型
         * @returns
         */
        getBase64(imageType = "image/jpeg") {
            return hasDraw ? canvas.toDataURL(imageType) : "";
        },
        // 上一步
        pre() {
            hasDraw = false;
            context.clearRect(0, 0, canvas.width, canvas.height);
            setStyle();
            allPoints.pop();
            allPoints.forEach((ps)=>{
                ps.forEach((item,index)=>{
                    // 下一个坐标点
                    let next = ps[index + 1];
                    if (next) {
                        // 有下一个点才执行，否则到最后一个会报错
                        // 开始重新绘制
                        context.beginPath();
                        context.moveTo(item.x, item.y);
                        context.lineTo(next.x, next.y);
                        context.stroke();
                        context.closePath();
                    }
                });
            });
        }
    }
}
```
```typescript
/**
 * `canvas`签名工具
 * @param {object} option
 * @param { string } option.el 挂载的节点id
 * @param { number } option.lineSize （可选）画笔线条的厚度：像素
 * @param { string} option.lineColor （可选）画笔线条的颜色
 * @param { string } option.backgroundColor （可选）背景颜色
 * @param { number } option.ratio （可选）缩放比率
 */
function canvasSignature(option: {
    el: string;
    lineSize?: number;
    lineColor?: string;
    backgroundColor?: string;
    ratio?: number;
}) {
    const el = document.getElementById(option.el);
    const lineSize = option.lineSize || 4;
    const lineColor = option.lineColor || '#000000';
    const backgroundColor = option.backgroundColor || '#ffffff';
    const ratio = option.ratio || window.devicePixelRatio;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let startX = 0, startY = 0;
    let hasDraw = false, isDrawing = false;
    let points: { x: number; y: number }[] = [];
    let allPoints: { x: number; y: number }[][] = [];

    function updateSize() {
        canvas.width = el.clientWidth * ratio;
        canvas.height = el.clientHeight * ratio;
    }

    function setStyle() {
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        context.lineCap = "round";
        context.lineJoin = "round";
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawStart(size: { x: number; y: number }) {
        const x = size.x * ratio, y = size.y * ratio;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x, y);
        context.strokeStyle = lineColor;
        context.lineWidth = lineSize * ratio;
        context.stroke();
        context.closePath();
        startY = y;
        startX = x;
    }

    function drawMove(size: { x: number; y: number }) {
        const x = size.x * ratio, y = size.y * ratio;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(x, y);
        context.strokeStyle = lineColor;
        context.lineWidth = lineSize * ratio;
        context.stroke();
        context.closePath();
        startY = y;
        startX = x;
    }

    function drawEnd(size: { x: number; y: number }) {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(size.x * ratio, size.y * ratio);
        context.stroke();
        context.closePath();
    }

    function onMouseDown(e: MouseEvent) {
        e.preventDefault();
        isDrawing = true;
        hasDraw = true;
        drawStart({
            x: e.offsetX,
            y: e.offsetY
        });
        points.push({
            x: e.offsetX,
            y: e.offsetY
        });
    }

    function onMouseMove(e: MouseEvent) {
        e.preventDefault();
        if (!isDrawing) return;
        drawMove({
            x: e.offsetX,
            y: e.offsetY
        });
        points.push({
            x: e.offsetX,
            y: e.offsetY
        });
    }

    function onMouseUp(e: MouseEvent) {
        allPoints.push(points);
        points = [];
        e.preventDefault();
        if (!isDrawing) return;
        drawEnd({
            x: e.offsetX,
            y: e.offsetY
        });
        isDrawing = false;
    }

    function onTouchStart(e: TouchEvent) {
        e.preventDefault();
        if (e.touches.length === 1) {
            isDrawing = true;
            hasDraw = true;
            const size = e.touches[0];
            const box = canvas.getBoundingClientRect();
            drawStart({
                x: size.clientX - box.left,
                y: size.clientY - box.top
            });
        }
    }

    function onTouchMove(e: TouchEvent) {
        e.preventDefault();
        if (!isDrawing) return;
        if (e.touches.length === 1) {
            const size = e.touches[0];
            const box = canvas.getBoundingClientRect();
            drawMove({
                x: size.clientX - box.left,
                y: size.clientY - box.top
            });
        }
    }

    function onTouchEnd(e: TouchEvent) {
        e.preventDefault();
        if (!isDrawing) return;
        if (e.touches.length === 1) {
            const size = e.touches[0];
            const box = canvas.getBoundingClientRect();
            drawEnd({
                x: size.clientX - box.left,
                y: size.clientY - box.top
            });
        }
    }

    function documentUp() {
        if (!document.body.contains(canvas)) {
            document.removeEventListener("mouseup", documentUp);
            document.removeEventListener("touchend", documentUp);
        }
    }

    el.appendChild(canvas);
    updateSize();
    setStyle();
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);
    document.addEventListener("mouseup", documentUp);
    document.addEventListener("touchend", documentUp);

    return {
        canvas,
        reset() {
            hasDraw = false;
            context.clearRect(0, 0, canvas.width, canvas.height);
            setStyle();
        },
        getBase64(imageType = "image/jpeg") {
            return hasDraw ? canvas.toDataURL(imageType) : "";
        },
        // 上一步
        pre() {
            hasDraw = false;
            context.clearRect(0, 0, canvas.width, canvas.height);
            setStyle();
            allPoints.pop();
            allPoints.forEach((ps)=>{
                ps.forEach((item,index)=>{
                    // 下一个坐标点
                    let next = ps[index + 1];
                    if (next) {
                        // 有下一个点才执行，否则到最后一个会报错
                        // 开始重新绘制
                        context.beginPath();
                        context.moveTo(item.x, item.y);
                        context.lineTo(next.x, next.y);
                        context.stroke();
                        context.closePath();
                    }
                });
            });
        }
    };
}
```

:::

## 使用示例

### 示例1

```javascript
const { canvas, pre, reset, getBase64 } = canvasSignature({el: 'mountedId'})
```