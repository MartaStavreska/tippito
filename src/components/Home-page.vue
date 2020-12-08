<template>
<div>
<HomeHeader />
<div class="main-search">
 <img src="../../logotext.png" id="logo-img" alt="">
  <div class="form-group search">
     <span class="fa fa-search form-control-feedback"></span>
     <input id="search-input" type="text" class="form-control" placeholder="Search">
     <div class="btn-div">
      <button class="btn"> <span class="btn-text">Search</span> </button>
      <button class="btn"> <span class="btn-text">Daily Luck</span> </button>
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
.main-search {
    width: 38%;
    margin: 10% auto;
    
}

.search .form-control {
    padding-left: 2rem;
    
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
#search-input{
    border-radius: 3rem;
    width: 700px;
    
   
}
#logo-img{
    width:23rem;
    margin-bottom: 1rem;
    margin-left: 150px;
}
.btn-div{
    margin-left: 120px;
}
.btn{
    margin-left: 20px;
    margin-top:2rem;
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
@media only screen and (max-width: 600px) {
    #search-input{
    width: 400px;
    }
  #logo-img {
    width:10rem;
    margin-left:120px;
  }
  .btn{
      margin:20px 0 5px 10px;
      width:7rem;

  }
  .btn-text{
    padding:5px;
}

}
</style>