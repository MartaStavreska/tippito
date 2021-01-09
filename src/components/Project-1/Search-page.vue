<template>
<div>
<Header />
<div class="main d-flex offset-1">
   <div class="left-side mt-4">
      <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
              <h6 class="blue-color">Locomotiva-Moscow - FC Bayern Munchen (Tip)</h6>
            </a>
            <p class="m-0 font-size-10">Latest public prediction given from Tippito user Full Name</p>
            <p class="m-0 font-size-12 font-weight-bold" > <strong>2 / 2 & 3 + </strong></p>
            <p class="text-muted font-size-8" >Published on 28.10.2020 13:10</p>
         
      </div>
      
       <div>
         <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h6 class="blue-color">FC Bayern Munchen (Squad)</h6>
          </a>
          <p class="m-0 font-size-10">
             Latest Bayern Munchen Transfer <span class="light-blue-color">Diego Costa</span>, <br/>
             Transfered from <span class="light-blue-color">FC Juventus</span> on 28.09.2019
             
          </p>
          <p class="text-muted font-size-8 mt-1">Updated on 28.10.2020 13:10</p>
      </div>
     
       <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h6 class="blue-color">FC Bayern Munchen (Games)</h6></a>
          <p class="m-0 font-size-10">
                Champions league game against <span class="light-blue-color">Atletico Madrid</span> ended 4:0 for Bayern Munchen,
                <br/>
                game reference was BLA BLA BLA and scores was <span class="light-blue-color">Mueller</span>...             
            </p>
          <p class="text-muted font-size-8 mt-1">Updated on 28.10.2020 13:10</p>
      </div>
     
       <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
              <h6 class="blue-color">Locomotiva-Moscow - FC Bayern Munchen (Tip)</h6>
            </a>
            <p class="m-0 font-size-10">Latest public prediction given from Tippito user Full Name</p>
            <p class="m-0 font-size-12 font-weight-bold" > <strong>2 / 2 & 3 + </strong></p>
            <p class="text-muted font-size-8">Published on 28.10.2020 13:10</p>
         
      </div>
      
       <div>
         <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h6 class="blue-color">FC Bayern Munchen (Squad)</h6>
          </a>
          <p class="m-0 font-size-10">
             Latest Bayern Munchen Transfer <span class="light-blue-color">Diego Costa</span>, <br/>
             Transfered from <span class="light-blue-color">FC Juventus</span> on 28.09.2019          
          </p>
          <p class="text-muted font-size-8 mt-1">Updated on 28.10.2020 13:10</p>
      </div>
      
       <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
          <h6 class="blue-color">FC Bayern Munchen (Games)</h6></a>
          <p class="m-0 font-size-10">
               Champions league game against <span class="light-blue-color">Atletico Madrid</span> ended 4:0 for Bayern Munchen,
                <br/>
                game reference was BLA BLA BLA and scores was <span class="light-blue-color">Mueller</span>...            
            </p>
          <p class="text-muted font-size-10 mt-1">Updated on 28.10.2020 13:10</p>
      </div>
      
        <div>
          <a href="#" data-toggle="modal" data-target="#exampleModal">
              <h6 class="blue-color">Locomotiva-Moscow - FC Bayern Munchen (Tip)</h6>
            </a>
            <p class="m-0 font-size-10">Latest public prediction given from Tippito user Full Name</p>
            <p class="m-0 font-size-12 font-weight-bold" > <strong>2 / 2 & 3 + </strong></p>
            <p class="text-muted font-size-8">Published on 28.10.2020 13:10</p>
         
      </div>
      <br>
      <br><br>
    </div>
    
   <div class="right-side offset-2 col-md-6 mt-2">
      <div class="card" >
        <div class="card-body">
        <img src="../../../bayern.png" class="mb-4"/>
            <h6 class="card-title blue-color">(FCB)-FC Bayer Munchen</h6>
            <p class="text-secondary m-0 font-weight-bold font-size-13" >  
                Founded on 1889<br>
                Germany<br> 
                Addres & City <br>
                Club Stadium, Club Surface, Club Capacity <br>
                Club City
            </p>
        </div>
        </div>
        
        <div class="mt-3 ml-4 text-secondary">
           <p class="m-0 font-weight-bold "><small><strong>Predict and WIN with Tippito</strong> </small> </p> 
           <p class="m-0 font-size-10">Join now</p>
            <button class="btn btn-light border border-secondary mr-3 p-2 btn1 font-size-13">Downoald iOS</button>
            <button class="btn btn-light border border-secondary p-2 font-size-13">Downoald Android</button>
           <p class="mt-2 font-size-10">know more about Tippito Vip </p>
        </div>
       
    </div>
</div>
 <Modal />
 <Footer />
</div>


</template>
<script>
import Header from '../Project-1/pages/Header.vue'
import Footer from '../Project-1/pages/Footer.vue'
import Modal from '../Project-1/pages/Modal.vue'
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
  border-radius:1rem; 
}
.btn{
   border-radius:0.8rem;
   background: white;
   height: 47px;  
}
.btn1{
  width: 150px;
}

</style>