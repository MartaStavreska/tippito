<template>
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
}

</style>