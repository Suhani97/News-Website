## Animation-1

### CSS
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

*{
    margin: 0px;
    padding: 0px;
}

body{
    font-family: 'Exo', sans-serif;
}


.context {
    width: 100%;
    position: absolute;
    top:50vh;
    
}

.context h1{
    text-align: center;
    color: #fff;
    font-size: 50px;
}


.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

### HTML
   <div class="context">
        <h1>Pure Css Animated Background</h1>
    </div>


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    
    
## Animation-2

### CSS

html, body { 
  height: 100%; 
  margin: 0; 
  overflow: hidden;
  overflow: clip; 
  contain: content;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000; 
}

### HTML
<css-doodle>
  <style>
    @grid: 50x1 / 50vmin;
    :container {
      perspective: 23vmin;
    }
    background: @m(
      @r(200, 240), 
      radial-gradient(
        @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d) 15%,
        transparent 50%
      ) @r(100%) @r(100%) / @r(1%, 3%) @lr no-repeat
    );

    @size: 80%;
    @place-cell: center;

    border-radius: 50%;
    transform-style: preserve-3d;
    animation: scale-up 20s linear infinite;
    animation-delay: calc(@i * -.4s);

    @keyframes scale-up {
      0% {
        opacity: 0;
        transform: translate3d(0, 0, 0) rotate(0);
      }
      10% { 
        opacity: 1; 
      }
      95% {
        transform:
          translate3d(0, 0, @r(50vmin, 55vmin))
          rotate(@r(-360deg, 360deg));
      }
      100% {
        opacity: 0;
        transform: translate3d(0, 0, 1vmin);
      }
    }
  </style>
</css-doodle>
