<template>
    <div class="row p10">
        <div class="col-1">
            <a class="navbar-brand" href="/">
                <img src="../../../../logotext.png"  alt="Tippito Logo" style="width:100%;">
            </a>
        </div>
        <div class="col-5 p5">
            <div class="input-group mb-3">
                <input id="search-input" type="text" class="form-control border-top border-bottom border-left" placeholder="Search" aria-describedby="basic-addon2">
                <span class="input-group-text search-icon border-top border-bottom border-right" id="basic-addon1">
                    <i class="fa fa-times ml10 mr10"></i><span class="crta">|</span><i class="fa fa-search ml10 mr10"></i>
                </span>
            </div>
        </div>
        <div class="col-6 text-right p5 font-size-12">
            <span class="nav-text p-2 "><a href="" class="text-decoration-none text-secondary">Tippito</a> </span>
            <span class="nav-text p-2"><a href="" class="text-decoration-none text-secondary">Tippito Vip</a> </span>
            <span class="nav-text p-2"><a href="" class="text-decoration-none text-secondary">Login</a> </span>
        </div>
    </div>

    <div class="row mb-0">
        <div class="col-5 offset-1 font-size-10">
            <span class="active p-1"> <a href="" class="text-decoration-none text-secondary"> All</a></span>
            <span class="p-2"> <a href="" class="text-decoration-none text-secondary"> Tips</a></span>
            <span class="p-2"> <a href="" class="text-decoration-none text-secondary"> Games</a></span>
            <span class="p-1"> <a href="" class="text-decoration-none text-secondary"> Squad</a></span>
        </div>
    </div>
<hr class="m-0">
</template>

<style scoped>

.radius{
    border-radius: 2rem;
}

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
    color:rgb(177, 180, 187);
    border-color:#ced4da;
    border-left:0;
}
::placeholder{
    color: rgb(163, 159, 159);
    font-size: 12px;
}

</style>