<template>
    <nav class="navbar navbar-expand-lg navbar-light ">
<a class="navbar-brand" href="#">
    <img src="../../logotext.png" width="90" height="30" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">       
            <div class="form-group search">
            <span class="fa fa-search form-control-search"></span>           
            <span class="fa fa-times form-control-x">|</span>
            <input id="search-input" type="text" class="form-control" placeholder="Search">  
           </div>   
            <ul class="navbar-nav mr-sm-2">
            <li class="nav-item active">
                <a class="nav-link" href="#">Tippito</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tippito Vip</a>
            </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
            </li>
            </ul>
  </div>
</nav>

<div id="span-div">
    <span class="spans"> <a href=""> All</a></span>
    <span class="spans"> <a href=""> Tips</a></span>
    <span class="spans"> <a href=""> Games</a></span>
    <span class="spans"> <a href=""> Squad</a></span>
</div>
<hr>
</template>
<style scoped>
.spans a{
    margin-left:20px;
    font-size: 14px;
    text-decoration: none;
    color: gray;
}
.spans a:hover{
    color:black;
}
#span-div{
    margin-left: 100px;
}
.search{
   margin-right: 35%;
}
.search .form-control {
    padding-left: 2rem;  
}

.search .form-control-search {
    position: absolute;
    margin-left: 500px;
    z-index: 2;
    display: block;
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
     margin-top: 45px;
    
}
.search .form-control-x{
    position: absolute;
    margin-left: 485px; 
    z-index: 2;
    display: block;
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
    margin-top: 45px;
}
#search-input{
    border-radius: 3rem;
    width: 550px;
    height:30px;
    margin-top: 50px;
    margin-bottom: 30px;
   
}
</style>