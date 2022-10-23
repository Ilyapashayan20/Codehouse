<template>
    <div>
        <div class="flex justify-center items-center flex-wrap   md:justify-between max-w-[90%] m-auto py-7">
        <div class="footer-menu flex items-center mb-2 md:mb-0">
            <router-link @click="scrollTop()" to="/about" class=" hover:font-[400] hover:text-[#4ab749]  font-light  text-white transition-all" >Մեր Մասին </router-link>
            <router-link @click="scrollToCooperation()" to="/about" class=" hover:font-[400] hover:text-[#4ab749]  font-light  text-white transition-all" >Համագործակցություն </router-link>
        </div>
        <h1 class='copyright text-white'> Project by Global IT, develop by<a class=" text-[#798795] hover:text-white transition-all mx-2" href="https://github.com/Ilyapashayan20?tab=repositories" target="_blanck" >Il Pashayan</a> © 2022</h1>
        </div>
    </div>
</template>
<script>
export default  {
    setup() {
         const scrollTop = () =>{
          window.scrollTo(0,0);
        };   
        const scrollToCooperation = () =>{
            window.scrollTo({
                top: 600,
                behavior: 'smooth'
            })
        }
        
        return {scrollTop,scrollToCooperation}
    }
}
</script>
<style lang="scss">
    .footer-menu{
        a{
            font-size: 15px;
            padding-left: 13px;
            padding-right: 13px;
            @media (max-width:500px){
                font-size: 12px;
                padding-left: 9px;
                padding-right: 9px;
            }
        }
    }
    .copyright{
        @media (max-width:500px) {
            font-size: 12px;
        }
    }
</style>