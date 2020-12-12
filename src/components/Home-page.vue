<template>
<div>
<HomeHeader />
<div class="main text-center">   
    <div class="img-div">
     <img src="../../logotext.png" class="logo-img m-3" width="350" alt="">  
    </div>
  
    <div class="row">
        
        <div class="container text-center">
            <div class="row">           
                <div class="col-6 offset-3">
                    <div class="search input-group mb-4">
                        <span class="input-group-text search-icon border-top border-left border-bottom"><i class="fa fa-search"></i></span>
                        <input id="search-input" type="text" class="form-control  font-size-14 border-top border-right border-bottom"  placeholder="search" >
                    </div>
                    <div class="text-center m-2">
                        <button class="btn btn-light ml-3 btn "> <span class="btn-text p-1">Search</span> </button>
                        <button class="btn btn-light ml-4 btn "> <span class="btn-text p-1">Daily Luck</span> </button>
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
.row {
    width:100%;
}
.main{
    padding-top:10%; 
}

#search-input{
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    border-left:0;
    height: 37px;
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
    font-size: 12px;
    height: 40px;
    color: gray;
}
.img-div{
    margin-right:3.3rem ;
}
::placeholder {
 color:rgb(205, 213, 230);
 padding: 10px auto 10px auto;
 font-size: 12px;
}

@media only screen and (max-width: 1000px) {
  img {
    max-width: 180px;
    margin-right: 60px;
    margin-bottom:10px;
  }
  .main{
    margin-top: 13%;
  }
  #search-input{
    height:30px;
     
  }
  .btn{
      width: auto;
      height: 25px;
      padding: 5px;
      font-size: 10px;
  }
  
}

</style>