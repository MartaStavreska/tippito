<template>
<div  class="light-version">
<Header />
  <div class="m-top">
   <br><br><br><br>
  </div>

    <div class="clearfix"></div>
     <section class="spread-map download" >
         
               <div class="container h-100">
                    <div class="row h-100 align-items-center">
                      <div class="col-12 col-lg-6 col-md-12">
                        <div class="welcome-content">
                            <div class="promo-section">
            
                            <h3 class="special-head text-white">BIGGEST TIPSTER SOCIAL NETWORK</h3>
                            </div>
                            <h1 class="text-white bold fadeInUp" data-wow-delay="0.2s">download now become a part</h1>
                            <p class="fadeInUp text-white" data-wow-delay="0.3s" style="font-size:12px">Use your smartphone and your ideas to win money.</p>
                            
                        </div>
                    </div>
                       <div class="col-12 col-lg-6 col-md-12">
                        <div class=" fadeInUp"  data-wow-delay="0.5s">
                            <div class="d-flex col-md-10">
                              <img src="../../../assets/img/team1.jpg"  style="border-radius:50%;border:3px solid white" width="100%" alt=""> 
                         </div>
                           
                        </div>
                    </div>
                </div>
             </div>
        
    </section>

   <!-- do ovde -->
   
  
   <section class="about-us-area section-padding-100-0 clearfix">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-12">
                        <div class="who-we-contant">
                            <div class="sect-icon text-left fadeInUp remove-img-div" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                <img src="../../../assets/img/svg/section-icon-2.svg" alt="">
                            </div>
                             <h6 class="special-head become-part offset-4">DOWNLOAD AND BECOME A PART</h6>
                             <br><br>
                            <p class="fadeInUp text-muted p-3 p-wrap" data-wow-delay="0.4s">Tippito is a unique and innovative idea, initially thought to help all football gamblers and later to become an income-based platform for its users.</p>
                              <br><br><br>   
                              <h6 class="special-head">How does it work?</h6>
                            <p class="fadeInUp p-3 p-wrap" data-wow-delay="0.5s">Every day, games from best European leagues are chosen and are offered in the app so users can share their prediction ideas with each other. Based on those predictions users are given/taken points and an average percentage is calculated per user. Every user starts as “Beginner” and with more points from sharing, predicting correctly, following etc; they may become “Professional” and ”Expert”. For every level there are limitations and monetary incomes. For this reason, users should do their best to achieve
                              a higher percentage of prediction in order to win the title “Expert”.</p>
                            <h6 class="special-head">What do You win?</h6>
                            <p class="fadeInUp text-muted p-3 p-wrap" data-wow-delay="0.5s">If you are a fan of gambling then you will find a community with the same taste and by sharing your ideas you will help each other win. If you are
                                 not a fan of gambling but you can predict game results, then you can share your ideas and win money from them. Tippito uses a special algorithm which analyses your prediction shares after you become and expert and based on how many times those shares are viewed, clicked, followed etc it pays you back.</p>
                             <p class="fadeInUp text-muted p-4 p-wrap" data-wow-delay="0.5s">
                             Use your smartphone and your ideas to win money. Download now and become a part.</p>
                           
                        </div>
                    </div>
                     </div>
                 <div class="row align-items-center">
                     <div class="who-we-contant">
                        <div class="col-md-12 offset-3 mt-5 mb-5 video-div">
                            <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
                            <iframe class="col-md-8" height="400" src="https://www.youtube.com/embed/hfDA2hXxYTc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                    
                        </div>
                        <div class="d-flex col-12  offset-2 text-center btn-div">
                                <button class="col-5 btn btn-dark bt-lg d-block m-2 p-2  donwload">
                                <i class="fa fa-apple fa-lg m-2"></i>
                                    Download Tippito
                                </button>
                                <button class="col-5 btn btn-dark bt-lg d-block  p-2 m-2  donwload">
                                <i class="fa fa-play fa-lg m-2"></i>
                                    Download Tippito
                                </button>

                        </div>
                    </div>
                  </div>
                   
                    <br><br><br>    
               
            </div>
        </section>
        <br><br><br>
        <br><br><br>
        <!-- ##### About Us Area End ##### -->

        <!-- ##### About Us Area Start ##### -->
       

<Footer />
</div>
    
</template>
<script>
import Header from '../Layout/Header.vue'
import Footer from '../Layout/Footer.vue'
import Welcome from '../src-components/Welcome-Area.vue'


export default {
    components:{
        Header,
        Footer,
        Welcome,
       
    }
}
</script>
<style scoped>
 @import '../../../assets/css/style.css';
 @import '../../../assets/css/responsive.css';

 @media only screen and (max-width: 600px) {
   .btn{
    width:120px;
    font-size: 5px;  
    padding: 2px !important;
    margin: 5px !important;
  }
  
  iframe{
      height: 200px;
      width: 300px;
      margin-left: -50px;
  }
  .become-part{
    
      margin-left: -8px !important;
      
  }
  .remove-img-div{
      display: none;
  }
  .m-top{
      display: none;
  }
 
}

</style>


