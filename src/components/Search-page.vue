<template>
<div>
<Header />
<div class="main d-flex">
   <div class="left-side col-md-5 offset-1">
      <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
              <h4 class="text-info" >Locomotiva-Moscow - FC Bayern Munchen (Tip)</h4>
            </a>
           
          <p class="m-0"><small>Latest public prediction given from Tippito user Full Name</small> </p>
          <p class="m-0"> <strong> 2 / 2 & 3 +</strong></p>
          <p class="text-muted"><small>Published on 28.10.2020 13:10</small></p>
      </div>
      <br>
       <div>
         <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h4 class="text-info">FC Bayern Munchen (Squad)</h4>
          </a>
          <p class="m-0">
              <small>
                  Latest Bayern Munchen Transfer Diego Costa,
                 <br/>
                 Transfered from FC Juventus  on 28.09.2019
              </small> 
          </p>
          <p class="m-0 text-muted"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
      <br> <br>
       <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h4 class="text-info">FC Bayern Munchen (Games)</h4></a>
          <p class="m-0">
              <small>
                Champions league game against Atletico Madrid ended 4:0 for Bayern Munchen,
                <br/>
                game reference was...      
              </small> 
            </p>
          <p class="text-muted m-0"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
      <br><br>
       <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
              <h4 class="text-info" >Locomotiva-Moscow - FC Bayern Munchen (Tip)</h4>
            </a>
           
          <p class="m-0"><small>Latest public prediction given from Tippito user Full Name</small> </p>
          <p class="m-0"> <strong> 2 / 2 & 3 +</strong></p>
          <p class="text-muted"><small>Published on 28.10.2020 13:10</small></p>
      </div>
      <br>
       <div>
         <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h4 class="text-info">FC Bayern Munchen (Squad)</h4>
          </a>
          <p class="m-0">
              <small>
                  Latest Bayern Munchen Transfer Diego Costa,
                 <br/>
                 Transfered from FC Juventus  on 28.09.2019
              </small> 
          </p>
          <p class="m-0 text-muted"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
      <br> <br>
       <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h4 class="text-info">FC Bayern Munchen (Games)</h4></a>
          <p class="m-0">
              <small>
                Champions league game against Atletico Madrid ended 4:0 for Bayern Munchen,
                <br/>
                game reference was...      
              </small> 
            </p>
          <p class="text-muted m-0"><small>Updated on 28.10.2020 13:10</small></p>
      </div>
      <br><br>
      
        


    </div>
    <div class="right-side col-md-6">
      <div class="card ">
        <div class="card-body">
            <img src="../../bayern.png" alt="">
            
            <h5 class="card-title text-info mt-3">(FCB)-FC Bayer Munchen</h5>
            <p class="text-secondary">
                <strong>
                Found on 1889<br>
                Germany<br> 
                Addres & City <br>
                Club Stadium, Club Surface, Club Capacity <br>
                Club City
                </strong>
            </p>
        </div>
        </div>
        <br>
        <div class="m-2 text-secondary">
           <p class="m-0"><strong>Predict and WIN with Tippito</strong> </p> 
           <p class="m-0">Join now</p>
            <button class="btn btn-light border border-secondary mr-3 ">Downoald IOS</button>
            <button class="btn btn-light border border-secondary">Downoald Android</button>
           <p class="mt-2">know more about Tippito Vip</p>
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
<style  scoped>
.card{
  border-radius:2rem;
}
.btn{
   border-radius:10px;
   background: white;
}
</style>