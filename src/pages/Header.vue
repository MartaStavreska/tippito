<template>
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
                    <i class="fa fa-times icons"></i>
                    <span class="ml-1 mt-1 mr-1 icons">|</span>
                    <i class="fa fa-search icons"></i>   
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
<br>
</div>
</template>


<style scoped>
.radius{
    border-radius: 2rem;
}
.search, .div-icons{
    height: 27px;
}
.icons{
    color: rgb(192, 186, 186);  
}
.navbar{
    margin-top: -10px;
}

</style>