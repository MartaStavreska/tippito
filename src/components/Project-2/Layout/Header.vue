<template>
    <!-- Preloader -->
    <!-- <div id="preloader">
        <div class="preload-content">
            <div id="dream-load"></div>
        </div>
    </div> -->

    <!-- ##### Header Area Start ##### -->
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top " id="banner">
         
        <div class="container">
            <!-- Brand -->
             <router-link class="navbar-brand" to="/tippito"><span><img src="../../../../public/logotext.png" width="110" alt="logo"></span></router-link>
  

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
     

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <router-link class="nav-link" to="/tippito/investors">For Investors</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tippito/about">About</router-link>
              
                    </li>
                    <li class="nav-item">
                         <router-link class="nav-link" to="/tippito/team">Team</router-link>
                    </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/tippito/help">Need Help</router-link>
                    </li>        
                    
                </ul>
            </div>
        </div>
    </nav>
    <!-- ##### Header Area End ##### -->
</template>
<script>

export default {
  
}
</script>
<style scoped>
 @import '../../../assets/css/style.css';
 @import '../../../assets/css/responsive.css';
 .navbar-toggler{
     width: 45px;

 }
 .navbar-toggler-icon{
     width: 20px;
 }
 .navbar-toggler:active{
     border:1px solid black;
 }


</style>