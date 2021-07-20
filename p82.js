var mouseEvent="empty";
var Last_position_of_x, Last_position_of_y;


canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        console.log("Last_position_of_x, Last_position_of_y are");
        console.log("X="+Last_position_of_x+"Y="+Last_position_of_y);
        ctx.moveTo(Last_position_of_x, Last_position_of_y);

        console.log("current_position_of_mouse_x, current_position_of_mouse_y are");
        console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        ctx.radius(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2* Math.PI);

    }

    Last_position_of_x=current_position_of_mouse_x;
    Last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
