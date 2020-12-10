<template>
<div class="main">
<nav class="navbar navbar-expand-lg navbar-light ">
<a class="navbar-brand" href="#">
    <img src="../../logotext.png" width="90" height="30" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent1">       
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
    margin-top: 15px;
    
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
    margin-top: 15px;
}
#search-input{
    border-radius: 3rem;
    width: 550px;
    height:30px;
    margin-right: 450px;
    margin-top: 20px;
    
   
}
@media only screen and (max-width: 1000px) {
  #search-input {
    
    max-width: 400px;
  }
  .search .form-control-x, .search .form-control-search {
     display: none;
  }


}

</style>