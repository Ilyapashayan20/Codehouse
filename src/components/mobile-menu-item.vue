<template>
     <transition name="modal-animation">
    <div>
        
    <div id="mobileMenu" class="fixed  fixed-menu-mobile dark:bg-slate-800 h-screen ">
        <transition name="modal-animation-inner">
    <div class="flex flex-col my-5   items-center">
        <div class="flex relative  flex-col items-center pt-5 ">
          <router-link  class="dark:text-white ml mb-[10px] font-semibold text-[17px]" @click="scrollTop()" active-class="active-link" to="/about">Մեր Մասին</router-link>   
        <router-link  class="dark:text-white ml mb-[10px] font-semibold text-[17px]" @click="scrollTop()" active-class="active-link" to="/companies">Միջոցառումներ</router-link>
        <router-link  class="dark:text-white ml mb-[10px] font-semibold text-[17px]" @click="scrollTop()" active-class="active-link" to="/course">Դասընթացներ</router-link>
        <router-link  class="dark:text-white ml mb-[10px] font-semibold text-[17px]" @click="scrollTop()" active-class="active-link" to="/works">Աշխատանքներ</router-link>
        <router-link @click="scrollTop()" to="/editor" class="create-post-mobile link flex items-center text-[14px] dark:hover:bg-slate-600  rounded text-white "><img class=" mr-0 tablet:mr-2" src="../Images/icons/pen.svg"> <p class="">Ստեղծել Գրառում</p> </router-link>
      </div>
    </div>
    </transition>
    </div>
    </div>
    </transition>
</template>
<script>
export default {
  setup(){
    const scrollTop = ()=>{
      window.scrollTo(0,0);
    }
    return {scrollTop,}
  },
}
</script>
<style lang="scss">
    .fixed-menu-mobile{
    background: transparent;
    transition: 0.3s ease-in;
    background-color:  rgb(255, 255, 255,0.95);
    z-index: 400;
    right: -40px;
    &.dark{
      background: red;
    }
    @media (max-width: 920px){
        min-width: 500px;
    }
    @media (max-width: 820px){
        min-width: 450px;
    }
    @media (max-width: 720px){
        min-width: 400px;
    }
    @media (max-width: 620px){
        min-width: 350px;
    }
    @media (max-width: 520px){
        min-width: 250px;
    }
    .ml{
        font-size: 16px;
        margin-top: 6px;
        padding: 0px 10px;
        font-weight: 600;
        font-family: $menu;
        &::after {
           content: '';
           display: block;
           width: 0;
           height: 2px;
           background: $blue;
           transition: width .3s;
        }
        &:hover::after{
            width: 100%;
        }
    }
    .active-link::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: $green;
    }    
    }
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
  .create-post-mobile{
        background-color: $green;
        transition: 0.2s ease-in;
        padding-left: 13px;
        padding-right: 13px;
        padding-top: 10px;
        padding-bottom: 10px;
        &:hover{
            background-color: black;
        }
        @media (max-width: 1192px){
            padding-left: 10px;
            padding-right: 10px;
            img{
                width: 21px;
            }
        }
    }
</style>