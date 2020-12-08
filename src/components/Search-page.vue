<template>
<div>
<Header />
<div class="main d-flex">
   <div class="left-side col-md-6">
      <div>
          <a href="" data-toggle="modal" data-target="#exampleModal">
              <h4 class="title" >Locomotiva-Moscow - FC Bayern Minchen (Tip)</h4>
            </a>
           
          <p>Latest public prediction given from Tippito user Full Name</p>
          <p class="score"> <strong> 2 / 2 & 3 +</strong></p>
          <p class="published"><small>Published on 28.10.2020 13:10</small></p>
      </div>
       <div>
         <a href="" data-toggle="modal" data-target="#exampleModal">
          <h4 class="title">FC Bayern Minchen (Squad)</h4>
          </a>
          <p>Latest Bayern Minchen Transfer Diego Costa,
              <br/>
             Transfered from FC Juventus  on 28.09.2019
          </p>
          <p class="published"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
       <div>
          <a href="" data-toggle="modal" data-target="#exampleModal">
          <h4 class="title">FC Bayern Minchen (Games)</h4></a>
          <p>Champions league game against Atletico Madrid ended 4:0 for Bayern Minchen,
              <br/>
             game reference was...
          </p>
          <p class="published"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
        <div>
          <a href="" data-toggle="modal" data-target="#exampleModal">
          <h4 class="title">Locomotiva-Moscow - FC Bayern Minchen (Tip)</h4></a>
          <p>Latest public prediction given from Tippito user Full Name</p>
          <p class="score"> <strong> 2 / 2 & 3 +</strong></p>
          <p class="published"><small>Published on 28.10.2020 13:10</small></p>
          
      </div>
       <div>
          <a href="" data-toggle="modal" data-target="#exampleModal">
          <h4 class="title">FC Bayern Minchen (Squad)</h4></a>
          <p>Latest Bayern Minchen Transfer Diego Costa,
              <br/>
             Transfered from FC Juventus  on 28.09.2019
          </p>
          <p class="published"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
       <div>
         <a href="" data-toggle="modal" data-target="#exampleModal">
          <h4 class="title">FC Bayern Minchen (Games)</h4></a>
          <p>Champions league game against Atletico Madrid ended 4:0 for Bayern Minchen,
              <br/>
             game reference was...
          </p>
          <p class="published"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
        
        


    </div>
    <div class="right-side col-md-5">
      <div class="card">
        <div class="card-body">
            <img src="../../bayern.png" alt="">
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
           <p class=" mt-2">know more about Tippito Vip</p>
        </div>
       
    </div>
</div>
 <Modal />
 <Footer />
</div>


</template>
<script>
import Header from '../pages/Header.vue'
import Footer from '../pages/Footer.vue'
import Modal from '../pages/Modal.vue'
export default {
    components:{
        Header,
        Modal,
        Footer
    }
}
</script>
<style scoped>
.downoald-btn{
    border:1px solid rgb(77, 74, 74);  
    background: white;
}
.desc{
    margin-left: 10px;
    margin-top:20px;
}
.join{
    margin-top: -20px;
    font-size: 13px;
}
.card{
    border-radius: 5%;
    border: 1px solid rgb(163, 158, 158);
}
.card-text{
   color:gray;
   font-size: 15px;
   font-weight: bold;
}
.published{
    color: gray;
    margin-top: -20px;
}
.title{
    color: rgb(53, 79, 194);
}
.main{
    margin-left:100px;
}
.score{
    font-size: 20px;
    margin-top: -20px;
}
.spans a{
    margin-left:20px;
    font-size: 14px;
    text-decoration: none;
    color: gray;
}
.spans a:hover{
    color:black;
}
#span-div{
    margin-left: 100px;
}

</style>