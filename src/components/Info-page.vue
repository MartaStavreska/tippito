<template>
<div>
  <Header/>
 <div class="main d-flex">
   <div class="left-side col-md-5">
      <div>
          <h3 class="title">FC Bayern Minchen (Games)</h3>
          <p class="published"><small>Published on 28.10.2020 13:10</small></p>
          <p class="info">Champions League game against Atletico Madrid ended 4:0 for Bayern Minchen
          <br>
            game referee was BLA BLA BLA and scores was Mueller...
          </p>
          <p class="info">Champions League game against Atletico Madrid ended 4:0 for Bayern Minchen
          <br>
            game referee was BLA BLA BLA and scores was Mueller...
          </p>
          <p class="info">Champions League game against Atletico Madrid ended 4:0 for Bayern Minchen
          <br>
            game referee was BLA BLA BLA and scores was Mueller...
          </p>
          <p class="info">Champions League game against Atletico Madrid ended 4:0 for Bayern Minchen
          <br>
            game referee was BLA BLA BLA and scores was Mueller...
          </p>
          <p class="info">Champions League game against Atletico Madrid ended 4:0 for Bayern Minchen
          <br>
            game referee was BLA BLA BLA and scores was Mueller...
          </p>
             
      </div>

    </div>
    <div class="right-side col-md-5">
      <div class="card">
        <div class="card-body">
            <h5 class="card-title title">(FCB)-FC Bayer Munchen</h5>
            <p class="card-text">
                Found on 1889<br>
                Germany<br> 
                Addres & City <br>
                Club Stadium, Club Surface, Club Capacity <br>
                Club City
            </p>
        </div>
        </div>
        <div class="desc card-text">
           <p>Predict and WIN with Tippito</p> 
           <p class="join">Join now</p>
            <button class="btn btn-light mr-3 downoald-btn">Downoald IOS</button>
            <button class="btn btn-light downoald-btn">Downoald Android</button>
           <p class="mt-2">know more about Tippito Vip</p>
        </div>
       
    </div>
</div>
  <Footer/>
</div>
  
</template>
<script>
import Header from '../pages/Header.vue'
import Footer from '../pages/Footer.vue'
export default {
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>
.right-side{
    margin-left:10px;
}
.info{
    font-size: 10px;
    margin-top: -10px;
}
.downoald-btn{
    height:40px;
    border: 1px solid gray;
    background: white;
}
.desc{
    
    margin-top:20px;
}
.join{
    margin-top: -20px;
    font-size: 13px;
}
.card{
    border-radius: 5%;
    border: 1px solid rgb(194, 174, 174);
}
.card-text{
   color:gray;
   font-size: 15px;
   font-weight: bold;
}
.published{
    color: gray;
    
}
.title{
    color: rgb(53, 79, 194);
}
.main{
    margin-left:100px;
}

</style>