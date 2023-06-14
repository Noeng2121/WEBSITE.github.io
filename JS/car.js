//js array
var cars=[
    {Code:"1001",Name:"LX570",Image:"../img/img1.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img2.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img3.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img4.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img5.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img6.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img7.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img8.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img9.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img10.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img11.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img12.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img13.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img14.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img15.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img16.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img17.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img18.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img1.jpg",Qty:"6",Price:"5600"},
    {Code:"1001",Name:"LX570",Image:"../img/img2.jpg",Qty:"6",Price:"5600"},
];
var rs="";
for(var key in cars){
    rs+=`<div class="box">
        <div class="img">
            <img src="`+cars[key]['Image']+`" alt="">
            <p>`+cars[key]['Name']+`</p>
        </div>
        <div class="txt">
            <span>-Code : `+cars[key]['Code']+`</span><br>
            <span>-Name : `+cars[key]['Name']+`</span><br>
            <span>-Price : `+cars[key]['Price']+`</span><br>
            <span>-Qty : `+cars[key]['Qty']+`</span><br>
        </div>
    </div>`;
}
document.querySelector('.main-box').innerHTML=rs;