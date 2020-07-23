$(document).ready(function () {
    _get_progress();
});
function _get_progress() {
    $.post('main.php', { action: 'get' }, function(e) {
        console.log(e)
        if (e.error || !e.data) {
        } else {
            $("#promocion").text(e.promocion);
            $("#recompensa").text(e.recompensa);
            draw(parseInt(e.meta),parseInt(e.cantidad));
        }
    });
}
function draw_(x,y,size,ctx,exist) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    let color = "#FF0000";
    if (exist) {
        color="#bfff00";
    }
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    /*if (exist) {
        ctx.beginPath();
        ctx.arc((size/2)+x, (size/2)+y, size/2, 0, Math.PI*2, false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }*/
    
}

function draw(meta,cantidad) {
    if (cantidad>meta) {
        cantidad= meta;
    }
    $("#avance").text(cantidad+ "/"+ meta)
    var canvas = document.getElementById("myCanvas");
    let pos_x = 1,pos_y=1;
    var width = canvas.width;
    var ctx = canvas.getContext("2d");
    let size = 20;
    let max_x =parseInt(width/size);
    let y = 0, x= 0;
    console.log(max_x,width)
    for (let i = 0; i < meta; i++) {
        
        let coor_x = size * x + pos_x * x;
        let coor_y = size * y + pos_y * y;
        if (x>=max_x-2) {
            y++;
            x = 0;
        }else{
            x++;
        }
        if (i>=cantidad) {
            exist= false;
        }else{
            exist = true;
        }
        console.log(coor_x,coor_y)
        draw_(coor_x, coor_y,size ,ctx,exist);
    }

}