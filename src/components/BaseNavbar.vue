<template>
    <div class='header transition-all bg-[#fffffff2] dark:bg-slate-800'>
        <nav class="flex max-w-[90%] m-auto justify-between items-center py-4">
           <router-link to="/" @click="scrollTop()" ><img v-if="!isDark" class=" w-[156px] sm:w-[168px] " src="../Images/logo/liteLogo.svg"><img v-else class=" w-[150px] sm:w-[158px] lg:w-full" src="../Images/logo/darkLogo.svg"></router-link>
            <div class="flex ">
                <div class="menu mr-[18px] xl:mr-[35px] flex justify-end  items-center">
                 <router-link  class="menu-link ml-[-5px] link dark:text-white  xl:ml-4" @click="scrollTop()" active-class="active-link" to="/about">Մեր Մասին</router-link>
                <router-link  class="menu-link ml-[-5px] link dark:text-white  xl:ml-4" @click="scrollTop()" active-class="active-link" to="/companies">Միջոցառումներ</router-link>
                <router-link  class="menu-link ml-[-5px] link dark:text-white  xl:ml-4" @click="scrollTop()" active-class="active-link" to="/course">Դասընթացներ</router-link>
                <router-link  class="menu-link ml-[-5px] link  dark:text-white xl:ml-4" @click="scrollTop()" active-class="active-link" to="/works">Աշխատանքներ</router-link>
            </div>
            <div  class="flex  justify-between">
                <router-link @click="scrollTop()" to="/editor" class="link  items-center create-post hidden tablet:flex   text-[14px] dark:hover:bg-slate-600  rounded text-white "><img class=" mr-0 tablet:mr-2" src="../Images/icons/pen.svg"> <p class="">Ստեղծել Գրառում</p> </router-link>
                <button @click="toggleDark()"  class="darkmod-btn block bg-[#8D99AE]  rounded items-center" > <img v-if="isDark" class="max-h-[23px]" src="../Images/icons/sun.svg"><img v-else class="max-h-[23px]" src="../Images/icons/moon.svg" alt=""></button>
                <router-link @click="scrollTop()" to="/profile" v-if="isAuthenticated"  class="user-icon  bg-black dark:bg-slate-50 flex rounded items-center"> <img class=" rounded" v-if="!user.avatar" src="https://bit.ly/3CvvXtJ"> <img v-else  class="rounded max-h-[23px]" :src="user.avatar"></router-link>
                <button  v-else @click="toggleModal" class=" auth-link bg-black dark:bg-slate-600  flex rounded items-center"><img  src="../Images/icons/profile.svg"></button>
                <HamburgerItem  class="mobile-menu "/>
            </div>
        </div> 
        </nav>
        <PopupItem @close="toggleModal" :modalActive="modalActive" />
    </div>
    
</template>
<script>
import { ref } from "vue";
import { useDark, useToggle} from '@vueuse/core'
import PopupItem from '@/tools/popup-item.vue';
import useAuth from "@/composables/useAuth";
import HamburgerItem from "./hamburger-item.vue";
export default {
    components: { PopupItem,  HamburgerItem },
    setup() {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    const topics = [{link: '/', title: '' },]
    const scrollTop = () =>{
          window.scrollTo(0,0);
    };
    
    
    return { modalActive, toggleModal ,topics,scrollTop,...useAuth(),isDark,toggleDark};
  },
  watch:{
    isDark(){
        if(this.isDark){
        document.body.classList.add('darkBody')
        }else{
        document.body.classList.remove('darkBody')
        }
    }
  }

}
</script>
<style lang="scss">

    .create-post{
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
    .user-icon{
        transition: 0.2s ease-in;
        margin-left: 12px;
        padding: 10px;
        max-width: 43px;
        img{
            width: 100%;
        }
     &:hover{
            background-color:$green;
        }
        @media (max-width: 1192px){
            font-size: 12px;
            padding-left: 11px;
            padding-right: 11px;
            img{
                width: 21px;
            }
        }
        @media (max-width: 500px) {
            margin-left: 8px;
        }
    }
    .auth-link{
        transition: 0.2s ease-in;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: 12px;
     &:hover{
            background-color:$green;
        }
        @media (max-width: 1192px){
            font-size: 12px;
            padding-left: 11px;
            padding-right: 11px;
            img{
                width: 21px;
            }
        }
        @media (max-width: 500px) {
            margin-left: 8px;
        }
    }
    .darkmod-btn{
        transition: 0.2s ease-in;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: 12px;
        min-width: 43px;
     &:hover{
        background-color:#b8bfca;
        }
        @media (max-width: 1192px){
            font-size: 12px;
            padding-left: 11px;
            padding-right: 11px;
            img{
                width: 21px;
            }
        }
        @media (max-width: 500px) {
            margin-left: 8px;
        }
    }
    .mobile-menu{
        display: none;
        @media (max-width: 920px){
            display: block;
        }
    }
    .menu-link{
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
           background: $green;
           transition: width .3s;
        }
        &:hover::after{
            width: 100%;
        }
        @media (max-width: 1192px){
            font-size: 13px;
        }
    }
    .active-link{
        &::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: $green;
    }
    }

  .header{
    width: 100%;
    background: transparent;
    position: fixed;
    top: 0; 
    left: 0; 
    backdrop-filter: blur(20px);
    background-color:  rgba(255, 255, 255, 0.949);
    z-index: 400;
    .menu{
        @media (max-width: 920px){
            display: none;
        }
    }
  }

</style>