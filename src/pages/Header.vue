<template>
<div class="main">
<nav class="navbar navbar-expand-lg navbar-light ">
<a class="navbar-brand" href="#">
    <img src="../../logotext.png" width="90" height="30" alt="">
  </a>
     <div class="row mt-4">       
            <div class="form-group search">
            <span class="fa fa-search form-control-search"></span>           
            <span class="fa fa-times form-control-x">|</span>
            <input id="search-input" type="text" class="form-control" placeholder="Search">  
           </div>
            <ul class="navbar-nav">
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
<div class="offset-1">
    <strong>
    <span class="m-2"> <a class="text-decoration-none text-dark" href=""> All</a></span>
    <span class="m-2"> <a class="text-decoration-none text-dark" href=""> Tips</a></span>
    <span class="m-2"> <a class="text-decoration-none text-dark" href=""> Games</a></span>
    <span class="m-2"> <a class="text-decoration-none text-dark"  href=""> Squad</a></span>
   </strong>
</div>
<hr>
</div>
</template>
<style scoped>

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
    margin-top: -5px;
    
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
    margin-top: -5px;
}
#search-input{
    border-radius: 3rem;
    width: 550px;
    height:30px;
    margin-right: 450px;
    
   
}
@media only screen and (max-width: 600px) {
  #search-input {
    max-width: 160px;
    margin-right: 200px;
    margin-top:35px;
    margin-right: 200px;
  }
 .main{
    max-width: 550px;
 }
 .search .form-control-x , .search .form-control-search {
   display: none;
 }

}

</style>