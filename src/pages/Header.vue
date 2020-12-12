<template>
<<<<<<< HEAD
    <div class="row p10">
        <div class="col-1">
            <a class="navbar-brand" href="/">
                <img src="../../logotext.png" alt="Tippito Logo" style="width:100%;">
            </a>
        </div>
        <div class="col-5 p5">
            <div class="input-group mb-3">
                <input id="search-input" type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon2">
                <span class="input-group-text search-icon" id="basic-addon1">
                    <i class="fa fa-times ml10 mr10"></i> | <i class="fa fa-search ml10 mr10"></i>
                </span>
            </div>
        </div>
        <div class="col-6 text-right p5">
            <span class="nav-text"><a href="">Tippito</a> </span>
            <span class="nav-text"><a href="">Tippito Vip</a> </span>
            <span class="nav-text"><a href="">Login</a> </span>
        </div>
    </div>

    <div class="row">
        <div class="col-5 offset-1">
            <span class="spans active"> <a href=""> All</a></span>
            <span class="spans"> <a href=""> Tips</a></span>
            <span class="spans"> <a href=""> Games</a></span>
            <span class="spans"> <a href=""> Squad</a></span>
        </div>
    </div>
<hr>
=======
<div class="main">
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">
    <img src="../../logotext.png" width="70" height="30" alt="logo" >
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent1">         
      <div class="input-group col-md-5">
            <input class="radius search form-control border-right-0 border font-size-10" type="text" style="padding:12px"  value="Bayern Munchen">
            <span class="input-group-append">
                <div class="radius  div-icons  input-group-text bg-transparent">
                    <img src="../../download.png" height="11"  alt="">
                    <span class="ml-1 mt-1 mr-1 icons">|</span>
                    <img src="../../search.png" height="15"  alt="">   
                      <i data-feather="circle"></i>  
                </div>
            </span>
        </div>
    <ul class="navbar-nav ml-auto">
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
    <small >
        <span> <a class="text-decoration-none text-dark font-weight-bolder font-size-10 " href=""> All</a></span>
        <span class="ml-3"> <a class="text-decoration-none text-secondary font-size-10 " href=""> Tips</a></span>
        <span class="ml-3"> <a class="text-decoration-none text-secondary font-size-10" href=""> Games</a></span>
        <span class="ml-3"> <a class="text-decoration-none text-secondary font-size-10 " href=""> Squad</a></span>
   </small>  
</div>
<hr class="m-0">
</div>
>>>>>>> 1bb415265e456707fb5397b6754d38f73a34819c
</template>


<style scoped>
.radius{
    border-radius: 2rem;
}
.search, .div-icons{
    height: 27px;
}
<<<<<<< HEAD
#search-input{
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    padding-left:10px;
    border-right:0;
}
.search-icon {
    border-radius:0;
    background: transparent;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    color:rgb(120, 123, 129);
    border-color:#ced4da;
    border-left:0;
=======
.icons{
    color: rgb(192, 186, 186);  
}
.navbar{
    margin-top: -10px;
>>>>>>> 1bb415265e456707fb5397b6754d38f73a34819c
}

</style>