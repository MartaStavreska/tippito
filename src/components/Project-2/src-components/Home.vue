<template>
<div class="light-version">
<Header />
<Welcome />
<Card />
<About />
<!-- <Service /> -->
<!-- <Features /> -->
<Timeline />
<!-- <Pricing /> -->
<!-- <TeamArea /> -->
<BlogArea />
<Footer />
</div>

</template>
<script>
import Header from '../Layout/Header.vue'
import Footer from '../Layout/Footer.vue'
import Welcome from '../src-components/Welcome-Area.vue'
import About from '../src-components/About.vue'
import Service from '../src-components/Service-Area.vue'
import Features from '../src-components/Features-Area.vue'
import Timeline from '../src-components/Timeline-Area.vue'
import Pricing from '../src-components/Pricing-Area.vue'
import TeamArea from '../src-components/Team-Area.vue'
import BlogArea from '../src-components/Blog-Area.vue'
import Card from '../src-components/Card.vue'


export default {
    components:{
        Header,
        Footer,
        Welcome,
        About,
        Service,
        Features,
        Timeline,
        Pricing,
        TeamArea,
        BlogArea,
        Card
    }
}
</script>
<style scoped>
 @import '../../../assets/css/style.css';
 @import '../../../assets/css/responsive.css';
</style>