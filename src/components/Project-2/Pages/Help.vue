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
                            <h1 class="text-white bold fadeInUp" data-wow-delay="0.2s">give your feedback become a part</h1>
                            <p class="fadeInUp text-white" data-wow-delay="0.3s" style="font-size:12px">Feel free to give your suggestions at any time, leave your feedback and become a part of the most powerful social ecosystem that will help Bet Gamblers earn over Betting.</p>
                            
                        </div>
                    </div>
                       <div class="col-12 col-lg-6 col-md-12">
                        <div class=" fadeInUp"  data-wow-delay="0.5s">
                            <div class="d-flex col-md-10">
                              <img src="../../../assets/img/help.png" width="100%" alt="">
                         </div>
                           
                        </div>
                    </div>
                </div>
             </div>
        
    </section>

  
  
     <div class="faq-timeline-area section-padding-100-85" id="faq">
        <div class="container">
        	<div class="section-heading text-center">
	            
	            <div class="sect-icon justify-content-center fadeInUp" data-wow-delay="0.2s">
	                <img src="../../../assets/img/svg/section-icon-5.svg" alt="">
	            </div>
                <p class="fadeInUp" data-wow-delay="0.3s">ASK QUESTIONS</p>
	            <h2 class="fadeInUp" data-wow-delay="0.3s">Frequently asked questions</h2>
	        </div>
            <div class="row">
                <div class="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                    <img src="../../../assets/img/1 - profile.png" alt="" class="center-block img-responsive">
                </div>
                <div class="col-12 col-lg-6 col-md-12">
                    <div class="dream-faq-area mt-s ">
                        <dl style="margin-bottom:0">
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.2s">01. How to become a member of tippito?</dt>
                            <dd class="fadeInUp pl-5" data-wow-delay="0.3s">
                                <p>First of all try to "Register by E-mail",if you do not have an tippito account.
                                After registration you should receive a code on your e-mail,for verification.
                               If you already has an facebook account,try to login directly.</p>
                               <div class="alert alert-success " role="alert">
                                In the case of registration if you still does not receive a code by your e-mail,please check if your entered e-mail address is valid.
                                </div>
                                <p>Another type of register in tippito is "Register by phone",
                                there all that you should do is to fill the fields,
                                and you will receive a code by your phone number.</p>
                               <div class="alert alert-success " role="alert">
                                Please do not forget to select your right mobile telephone prefix number(country code).
                                </div>

                            </dd>
                            <!-- Single FAQ Area -->
                            <dt class="wave fadeInUp" data-wow-delay="0.2s">02. Edit Profile Steps.</dt>
                            <dd class="fadeInUp pl-5" data-wow-delay="0.3s">
                                <p>On edit profile,you are able to choose the photo you want,you can change first and last name,
                                you are able to write something by yourself, and also able to change your password.</p>
                               <div class="alert alert-success " role="alert">
                                In any case if your password does not successfully changed,please contact with us by our mail info@tippito.com
                                </div>

                            </dd>

                            <dt class="wave fadeInUp" data-wow-delay="0.2s">03. Post a Predictions Steps.</dt>
                            <dd class="fadeInUp pl-5" data-wow-delay="0.3s">
                                <p>You are able to post a prediction by click the rounded button on the bottom of the page.
                                by choosing a game you can select a tip,after selection you are able to choose how you want to post the tip.</p>
                               <div class="alert alert-success" role="alert">
                                 If you want to share your tips with all tippito users you should select public.
                                if you want to share your tips just with your followers,you should select private.
                                in the case if you have any problem with your posting please send us a feedback.
                                </div>

                            </dd>


                             <dt class="wave fadeInUp" data-wow-delay="0.2s">04. Feedback</dt>
                            <dd class="fadeInUp pl-5" data-wow-delay="0.3s">
                        
                                <p>On the right side of our application we have a feedback option.
                                In general if you have any problem with application,or if you have any suggestions, please feel free to submit a feedback form.</p>
                            

                            </dd>
                        </dl>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
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

   .m-top{
      display: none;
  }
}
</style>


