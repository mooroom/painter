function createPainter(parent, width, height) {
    var title = elt("h2", null, "Simple Painter");
    var [canvas, ctx] = createCanvas(width, height);

    var toolbar = elt("div", null);
    for (var name in controls) {
        toolbar.appendChild(controls[name](ctx));
    }
    toolbar.style.fontSize = "small";
    toolbar.style.marginBottom = "3px";

    parent.appendChild(elt("div", null, title, toolbar, canvas))
}

function createCanvas(canvasWidth, canvasHeight) {
    var canvas = elt("canvas", {width: canvasWidth, height: canvasHeight});
    var ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid gray";
    canvas.style.cursor = "pointer";

    canvas.addEventListener("mousedown", function(e) {
        // firefox
        var event = document.createElement("HTMLEvents");
        event.initEvent("change", false, true);
        colorInput.dispatchEvent(event);

        paintTools[paintTool](e, ctx);
    }, false);
    return [canvas, ctx]
}

// element의 왼쪽 위 모서리에서 마우스의 상대 위치를 가져온다
function relativePosition(event, element) {
    var rect = element.getBoundingClientRect();
    return 
}