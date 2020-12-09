<template>
<div>
<HomeHeader />
<div class="main-search text-center">
    <img src="../../logotext.png" class="logo-img mr-5 col-md-3 m-3" alt="">
    <div class="row">
        <div class="container text-center">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="search input-group mb-4">
                        <span class="input-group-text search-icon" id="basic-addon1"><i class="fa fa-search"></i></span>
                        <input id="search-input" type="text" class="form-control" placeholder="Search">
                    </div>
                    <div class="text-center m-2">
                        <button class="btn btn-light mr-2 btn "> <span class="btn-text p-1">Search</span> </button>
                        <button class="btn btn-light mr-2 btn "> <span class="btn-text p-1">Daily Luck</span> </button>
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
    width: 150px;
    background-color:  rgb(227, 232, 236);
}
@media only screen and (max-width: 600px) {
  img {
    max-width: 200px;
    margin-right: 60px;
    margin-bottom:10px;
  }
  .main-search{
      margin-top: 20%;
  }
  #search-input{
      height:30px;
  }
  .btn{
      width: 60px;
      height: 30px;
      padding: 0;
      font-size: 12px;
  }
  
}

</style>