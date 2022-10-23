<template>
       <BaseNavbar />
       <div  v-if="post && post.slug" > 
    <div  class="mainn-section  m-auto">
    <div  data-aos="zoom-in" class="post-detail-block mt-[120px] ">
        <div data-aos="fade-right"  class="post-block dark:bg-slate-800 max-w-[800px]  ">
            <div><img class="mb-[13px]" :src="post.coverURL"></div>
            <div class="post-bottom-section">
            <div class="mt-[1px] pb-2 inline-block  ">
                <h1 class='title mb-1 sm:mb-3 text-[17px] dark:text-white sm:text-[30px]'>{{post.title}}</h1>
                <span class="tag-link dark:bg-white">{{post.type}}</span>
                <div  v-html="post.description"  class="text  mb-[13px] sm:mb-[20px]  dark:text-slate-300 pt-[3px] sm:pt-[10px] text-[14px] sm:text-[17px]"></div>

                <a v-if="post.sitelink" class=" rounded pt-1 pb-2 px-3 hover:bg-green-300 transition-all link dark:hover:bg-white dark:hover:text-black  text-white bg-[#4ab749]" target="_blanck" :href="post.sitelink">Բացել կայքը</a>
            </div>
            </div>
        </div>
        <div class="flex flex-col">
        <div class="post-detail-meta-block dark:bg-slate-800 ">
            <div class="mb-3"><h1 class="text pdm-title dark:text-white ">Հեղինակ</h1></div>
            <div class="flex pb-creator bg-[#f1f1f1] dark:bg-[#171d23] w-full items-center"><img class="rounded w-14 " v-if="!postUser.avatar" src="https://bit.ly/3CvvXtJ"> <img v-else  class="rounded max-w-[56px] max-h-[54px]" :src="postUser.avatar">
                <div class="ml-3">
                    <div class="flex  items-center"><h1 class="text-[20px] dark:text-white">{{ postUser.username }}</h1> <img class="ml-2 mt-1  " v-if="postUser.verified" src="../Images/icons/verifed.svg"></div>
                    <div><p class="text-[#798795] dark:text-slate-300">{{postUser.email}}</p></div>
                </div>
            </div>
            <div class="pd-date-created  mt-[1.25rem] w-full  "><img src="../Images/icons/calendar.svg"> <p class='text-[#798795] dark:text-slate-300 ml-1 '>{{post.createdAt}}</p></div>
        </div>
        <a href="https://marmof.com/" target="_blank" class="post-detail-meta-block dark:bg-slate-800 mt-4">
            <img src="https://marmof.com/logotype-original.svg" alt="">
        </a>
        </div>
    </div>
</div>
<MainFooter class="bg-black dark:bg-slate-800  mt-[82px]" />
</div>

<div v-else role="status">
    <div class="splash-screen overflow-hidden w-full h-screen bg-white">
        <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div class="border-t-[#4ab749] border-solid animate-spin  rounded-full  border-[7px] h-[6rem] w-[6rem]"></div>
      </div>
      </div>
</div>
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import MainFooter from '@/components/mainFooter.vue';

export default {
    components: { BaseNavbar,MainFooter },
    data(){
        return {
            description: '<h1>Test<h1/>'
        }
    },
    created(){
        const {slug} = this.$route.params
        this.$store.dispatch("post/getPostBySlug",slug)
    },
    computed: {
    post() {
      return this.$store.state.post.item;
     },
     postUser(){
        return this.post.user;
     }
    }
}
</script>
<style lang="scss">

    .post-detail-block {
        display: flex;
        justify-content: space-between;
        @media (max-width: 950px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .post-detail-meta-block{
            background: white;
            height: fit-content;
            margin-left: 20px;
            margin-bottom: 3px;
            padding: 20px 30px;
            display: flex;
            flex-direction: column;
            @media (max-width: 950px){
                margin-left: 0px;
                width: 100%;
            }
            @media (max-width: 400px){
                padding: 15px 15px;
            }
            .pb-creator{
                cursor: pointer;
                padding: 10px 20px;
                min-width: 276px;
                border-radius: 4px;
                @media (max-width: 400px){
                padding: 8px 13px;
                min-width: 0px;
            }
            }
        }
    }
    .mainn-section{
    max-width: 78%;
    @media (max-width: 1460px){
      max-width: 85%;
   }
   @media (max-width: 1124px){
      max-width: 90%;
   }
  }
  .pdm-title {
    font-size: 26px;
    text-align: center;
    @media (max-width: 950px){
        text-align: start;
        font-size: 20px;
    }
  }
  .pd-date-created{
    display:flex;
    justify-content: center;
    @media (max-width: 950px){
       justify-content: start;
    }
  }
</style>