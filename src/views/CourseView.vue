<template>
    <BaseNavbar />
    <div class="max-w-[90%] m-auto mt-28 flex justify-between">
        <div class="w-full">
            <h1 class="title mb-6 mb:mb-3 text-center text-4xl mb:text-5xl h-10 mb:h-20 font-extrabold  text-[#4ab749]">Դասընթացներ</h1>
           <div class="hh  bg-[#e7e7e7] dark:bg-slate-800 py-12 rounded-xl">
            <div class=" w-[90%] lg:w-[60%] m-auto flex flex-col">
                <div class="a flex justify-start items-center">
                    <img class="" src="../Images/Illustration/girl.svg" alt="">
                    <h1 class="link max-w-[400px] text-xl text-white bg-[#4a5ea3] rounded-xl p-3 ">
                        Դասընթացներ բաժինը հիանալի վայր է մշակման և ծրագրավորման լեզուներին ծանոթանալու համար:
                    </h1>
                </div>
                <div class="b flex justify-end items-center">
                    <h1 class="link max-w-[400px] text-xl text-white bg-[#2b2f3e] rounded-xl p-3 ">
                        Կարող եք նաև գտնել ավելի առաջադեմ դասընթացներ, որոնք կօգնեն ձեզ ավելին իմանալ այս թեմաների մասին:
                    </h1>
                    <img src="../Images/Illustration/boy.svg" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="cours-block mt-[73px] max-w-[90%] m-auto  ">
        <!-- <VideoCourseItem /> -->
        <div class=" cours-navigation-block flex flex-col bg-white dark:bg-slate-800 rounded-xl">
            <div>
                <button @click="formats = !formats" class="text-[18px]  dark:text-white flex justify-between items-center rounded-t-xl text-start py-4 px-6 font-semibold w-full hover:bg-[#4ab749] transition-all hover:text-white">
                    Ձևաչափեր
                    <img :class="{'rotate-90' : formats }" class="transition-all " src="../Images/icons/37-arrow-right-2.svg">
                </button>
                <div v-if="formats" class="flex flex-col mt-2 ml-5 items-start pl-5 mr-[26px]">
                    <button class=" dark:text-white border-b mb-2 link hover:border-[#4ab749] transition-all hover:font-normal  pb-1 pr-1 w-full text-start" v-for="list in formatsList" :key="list">{{list.name}}  </button>
                    
                </div>
            </div>
            <div>
                <button @click="video = !video" :class="{'rounded-b-[0px]' : video}" class="text-[18px] rounded-b-xl 2lg:rounded-none  dark:text-white flex justify-between items-center text-start py-3 px-6 font-semibold w-full hover:bg-[#4ab749] transition-all hover:text-white">
                    Վիդեո Դասընթացներ
                    <img :class="{'rotate-90' : video }" class="transition-all" src="../Images/icons/37-arrow-right-2.svg">
                </button>
                <div v-if="video" class="flex flex-col ml-5 mt-2 items-start  pl-5 mr-[26px]">
                    <button class=" dark:text-white border-b mb-2 link hover:border-[#4ab749] transition-all hover:font-normal  pb-1 pr-1 w-full text-start" v-for="list in programingLanguages" :key="list">{{list.name}}</button>
                </div>
            </div>
        </div>
        <div class="cours-main">
            <router-view>
                <ErrorDenger /></router-view>
        </div>
    </div>
    <div class=" h-[50px]"></div>
    <MainFooter class="bg-black  dark:bg-slate-800" />

</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
// import VideoCourseItem from '@/components/Course/videoCourse-item.vue';
import MainFooter from '@/components/mainFooter.vue';
import ErrorDenger from '../components/404-error.vue';
export default {
    components: { BaseNavbar, MainFooter, ErrorDenger },
     data(){
        return{  
                formats: false,
                video:false
        }
     },

     setup(){
        const formatsList = [
            {name: 'Առաջադրանքներ', value:'tasks'},
            {name: 'Թեստեր և վիկտորինաներ', value:'quizzes'},
            {name: 'Վերապատրաստման պլաններ', value:'education'},
        ]
        const programingLanguages = [
            {name:'JavaScript', value: 'js' },
            {name:'Phyton', value: 'phyton' },
            {name:'Java', value: 'java' },
            {name:'PHP', value: 'php' },
            {name:'C++', value: 'c++' },
            {name:'C#', value: 'c#' },
            {name:'Swift', value: 'swift' },
            {name:'HTML', value: 'html' },
            {name:'CSS', value: 'css' },
            {name:'SQL', value: 'sql' },
            {name:'MongoDB', value: 'md' },
        ]

        return {formatsList,programingLanguages}
     }
}
</script>
<style lang="scss">
.cours-block{
    display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns:320px 1fr;
        gap: 20px;
        @media (max-width: 1130px){
        grid-template-columns: auto;
        grid-template-rows: auto 1fr;
        grid-auto-flow: dense;
        display: flex;
        flex-direction: column;
    }
}
.hh{
    box-shadow: 7px 3px 54px 9px #c2c2c2bf;
}
.a{
    @media (max-width:620px) {
        flex-direction: column;
        h1{
            margin-top: 12px;
        }
    }
}
.b{
    margin-top: -30px;
    @media (max-width:620px) {
        flex-direction: column-reverse;
        margin-top: 12px;
        h1{
            margin-top: 12px;
        }
    }
}
    
</style>

