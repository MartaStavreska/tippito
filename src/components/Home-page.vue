<template>
<div>
<HomeHeader />
<div class="main-search text-center">
    <img src="../../logotext.png" class="logo-img" alt="">
    <div class="row">
        <div class="container text-center">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="input-group mb-3">
                        <span class="input-group-text search-icon" id="basic-addon1"><i class="fa fa-search"></i></span>
                        <input id="search-input" type="text" class="form-control" placeholder="Search">
                    </div>
                    <div class="text-center">
                        <button class="btn"> <span class="btn-text">Search</span> </button>
                        <button class="btn"> <span class="btn-text">Daily Luck</span> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />

</div>
</template>
<script>
import Footer from '../pages/Footer.vue'
import HomeHeader from '../pages/Home-Header.vue'
export default {
    components:{
        HomeHeader,
        Footer
    }
}
</script>
<style scoped>
.row {width:100%;}
.main-search{
    padding-top:10%;
}
.logo-img {
    width:300px;
    margin-bottom:10px;
}
#search-input{
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    border-left:0;
}
.search-icon {
    border-radius:0;
    background: transparent;
    border-right:0;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    color:rgb(205, 213, 230);
    border-color:#ced4da;
}

.search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.btn{
    margin-left: 20px;
    background-color: rgb(205, 213, 230);
    color:gray;
    height: 2rem;
    width:10rem;
    height: 40px;
  
    
}
.btn-text{
 padding:30px;
}
.btn-text:hover{
  color: rgb(170, 160, 160);
}
.nav-text{
  margin:0.5rem;
}

</style>