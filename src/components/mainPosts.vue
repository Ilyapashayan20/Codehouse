<template>
    <div class="mainPost-block w-full py-8">
     
        <div  class="flex flex-col items-center ">
            <div v-if="allStatus">
            <div data-aos="fade-right"  v-for="filtredPost in queryPosts" :key="filtredPost.id"   class="post-block max-w-[800px] mt-4 dark:bg-slate-800 dark:border-0">
            <div v-if="filtredPost.waiting" >
            <div><img class="mb-[13px] min-h-[171px] object-cover" :src="filtredPost.coverURL"></div>
            <div class="post-bottom-section">
            <div class="mt-[1px] inline-block  ">
                <h1 class='title mb-1 sm:mb-3 text-[17px] dark:text-white sm:text-[30px]'>{{ filtredPost.title }}</h1>
                <span class="tag-link py-1 dark:bg-white" href="/">{{filtredPost.type}}</span>
                <div class="post-block-meta mt-2 flex flex-wrap">
                <div class="post-date mb-[5px]  mr-[9px]  flex">
                    <img src="../Images/icons/calendar.svg">
                    <p class='text-[#798795] dark:text-slate-50 ml-1 '>{{filtredPost.createdAt}}</p>
                </div>
                <div class="post-by mr-[9px] mb-[5px] flex">
                    <img class="ml-[-2px]" src="../Images/icons/11-profile.svg">
                    <p class='text-[#798795] dark:text-slate-50 ml-1'>{{filtredPost.creator}}</p>
                </div>
                <!-- <div class="post-comment mb-[5px] flex">
                    <img src="../Images/icons/chat.svg">
                    <p class='text-[#798795] ml-1'>{{ 0 }} Comment</p>
                </div> -->
            </div>
                <div  class="text  mb-[13px] sm:mb-[20px] pt-[3px] sm:pt-[10px] text-[14px] dark:text-slate-300 sm:text-[17px]"><span  v-html="filtredPost.description.substring(0,250)"></span><span>........</span></div>
                
                <router-link @click="scrollTop()" :to="{name: 'PostDetail', params: {slug: filtredPost.slug}}"  class="bg-[#4ab749] mb-[15px] items-center max-w-[160px] text-[11px] px-4 py-2 sm:max-w-[206px] font-semibold sm:text-[16px]  sm:px-6 sm:py-3 flex relative rounded-[5px] text-white hover:bg-green-300 transition-all">Կարդալ ավելին <img class="ml-2 w-21px sm:max-w-full" src="../Images/icons/35-arrow-right-2.svg"></router-link>
            </div>
            </div>
            </div>
        </div>
        <div v-if="queryPosts.length === 0 && !filteredStatus"  class="post-not_detected">
            <h1 class=" pnd-title  text-center flex flex-col items-center"><img src="../Images/icons/sad-smile.svg" alt="">Ներեցեք, ձեր որոնման արդյունքները չեն գտնվել</h1>
         </div> 
        </div>
            <!-- Posts -->
            <div v-if="posts.length>0">
        <!-- <div v-if="queryPosts.length === 0" class="post-not_detected">
            <h1 class=" pnd-title  text-center flex flex-col items-center"><img src="../Images/icons/sad-smile.svg" alt="">Ներեցեք, ձեր որոնման արդյունքները չեն գտնվել</h1>
         </div>  -->
        <div v-if="filteredStatus">
        <div data-aos="fade-right"  v-for="post in posts" :key="post.id"   class="post-block max-w-[800px] mt-4 dark:bg-slate-800 dark:border-0">
            <div v-if="post.waiting" >
            <div><img class="mb-[13px] min-h-[171px] object-cover" :src="post.coverURL"></div>
            <div class="post-bottom-section">
            <div class="mt-[1px] inline-block  ">
                <h1 class='title mb-1 sm:mb-3 text-[17px] dark:text-white sm:text-[30px]'>{{ post.title }}</h1>
                <span class="tag-link py-1 dark:bg-white" href="/">{{post.type}}</span>
                <div class="post-block-meta mt-2 flex flex-wrap">
                <div class="post-date mb-[5px]  mr-[9px]  flex">
                    <img src="../Images/icons/calendar.svg">
                    <p class='text-[#798795] dark:text-slate-50 ml-1 '>{{post.createdAt}}</p>
                </div>
                <div class="post-by mr-[9px] mb-[5px] flex">
                    <img class="ml-[-2px]" src="../Images/icons/11-profile.svg">
                    <p class='text-[#798795] dark:text-slate-50 ml-1'>{{post.creator}}</p>
                </div>
                <!-- <div class="post-comment mb-[5px] flex">
                    <img src="../Images/icons/chat.svg">
                    <p class='text-[#798795] ml-1'>{{ 0 }} Comment</p>
                </div> -->
            </div>
                <div  class="text  mb-[13px] sm:mb-[20px] pt-[3px] sm:pt-[10px] text-[14px] dark:text-slate-300 sm:text-[17px]"><span  v-html="post.description.substring(0,250)"></span><span>........</span></div>
                
                <router-link @click="scrollTop()" :to="{name: 'PostDetail', params: {slug: post.slug}}"  class="bg-[#4ab749] mb-[15px] items-center max-w-[160px] text-[11px] px-4 py-2 sm:max-w-[206px] font-semibold sm:text-[16px]  sm:px-6 sm:py-3 flex relative rounded-[5px] text-white hover:bg-green-300 transition-all">Կարդալ ավելին <img class="ml-2 w-21px sm:max-w-full" src="../Images/icons/35-arrow-right-2.svg"></router-link>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
        <!-- filter not detected -->
          
        <div class="tools-block">
            <!-- Search Block -->
            <div   class="tag-block dark:bg-slate-800  dark:border-0 ">
                <h1 class="title text-center mb:text-start dark:text-white text-[24px]">Filter</h1>
                <img class='w-[36px] hidden mb:block' src="../Images/icons/....svg">
                <div class="flex flex-wrap justify-center mt-3 mb:mt-0 mb:justify-start">
                    <a @click="allPosts()" class="cursor-pointer">All</a>
                    <a v-for="filter in filtersRef" :key="filter"  @click="filterType(filter.value)" class=" dark:bg-white" href="#">{{filter.name}}</a>
                </div>
            </div>
            <!-- Company Block -->
            <div class="company-block  dark:bg-slate-800 dark:border-0">
                <h1 class="title dark:text-white text-[24px]">Միջոցառումներ</h1>
                <img class='w-[36px]' src="../Images/icons/....svg">
                <div>
                    <a class="flex hover:opacity-75 transition-all mb-4 items-center" href="/">
                        <img class='min-w-[36px] max-h-[42px]' src="../Images/logo/globalit.jpg" alt="">
                        <div class='flex flex-col ml-[10px]'>
                            <h1 class="title dark:text-white">Global It</h1>
                            <p class="text text-[12px] dark:text-slate-300">Միջազգային ՏՏ ընկերություն</p>
                        </div>
                    </a>
                    <router-link  @click="scrollTop()" to="/companies" class="mt-[30px] flex items-center">
                        <h1 class="link text-[14px] font-[600] mr-2 mb-1 dark:text-white" >Բոլոր Միջոցառումները</h1>
                        <img src="../Images/icons/37-arrow-right-3.svg" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {reactive, computed , ref } from 'vue'
export default {
    props: {
    posts: {
      type: Array,
      required: true,
    },
},
data(){
   return {
    lim: 10,
    filteredStatus:true,
    allStatus:true,
    filtersRef:[
            { name:'Algorithms',value:'Algorithms'},
            { name:'Web Development',value:'Web Development'},
            { name:'Artificial Intelligence',value:'Algorithms Intelligence'},
            { name:'Game Dev',value:'Game Development'},
            { name:'Data Science',value:'Data Science'},
            { name:'Interface Desing',value:'Interface Desing'},
            { name:'Mobile Dev',value:'Mobile Development'},
            { name:'Neural Networks',value:'Neural networks'}
        ]
   }
},

    computed: {
        queryPosts() {
        return this.$store.state.post.queryPosts;
     },
    },
    methods:{
        loadMore(){
           this.lim += 10
          this.$store.dispatch("post/getPosts",this.lim)
        },
        filterType(val){
           this.filteredStatus = false
           this.allStatus = true
           this.$store.dispatch("post/getQuery",val)
           
        },
        allPosts(){
            this.filteredStatus = true
            this.allStatus = false
        }
    
    },
    setup(){
        const scrollTop = () =>{
          window.scrollTo(0,0);
    };
    return{scrollTop}
    }
    
}
</script>
<style lang="scss">
    .post-block{
        background-color: white;
        .post-bottom-section{
            padding: 0px 20px;
            padding-bottom: 10px;
        }
    }
    .tag-link{
    font-size: 12px !important;
    padding: 3.5px 14px;
    background: #e2e2e2;
    display: inline-block;
    margin: 4px 3px;
    user-select: none;
    color: #4c4c4c;
    text-transform: capitalize;
    border-radius: 21px;
    @media (max-width: 640px){
        padding: 1px 11px;
    }
    }
    .search-block{
    width: 350px;
    background-color: white;
    padding: 35px;
    margin-bottom: 30px;
    border: 1px solid #f1f1f1;
    @media (max-width: 1124px){
        width: auto;
        margin-top: 0px;
    }
    }
    .tag-block{
    padding: 35px;
    background-color: white;
    margin-bottom: 30px;
    width: 350px ;
    margin-top: 24px;
    border: 1px solid #f1f1f1;
    a{
    font-size: 13px;
    padding: 4px 14px;
    background: #e2e2e2;
    display: inline-block;
    font-weight: 400;
    margin: 4px 5px;
    color: #4c4c4c;
    line-height: 1.7em;
    text-transform: capitalize;
    border-radius: 21px;
    transition: 0.2s ease-in;
    &:hover{
        background-color: $green;
        color: white;
    }
    }
    @media (max-width: 1124px){
        width: 100%;
    }
    @media (max-width: 520px){
        padding: 20px 10px;
    }
    }
    .company-block{
    padding: 35px;
    margin-bottom: 30px;
    background-color: white;
    border: 1px solid #f1f1f1;
    @media (max-width: 1124px){
        display: none;
    }
    }
    .mainPost-block{
        display: flex;
        justify-content: space-between;
        @media (max-width: 1124px){
            flex-direction: column-reverse;
            align-items: center;
        }
    }
    .tools-block{
        padding-left: 20px;
        @media (max-width: 1124px){
            width: 100%;
            padding-left: 0px;
        }
    }
   

.post-not_detected{
    margin: auto;
    height: 600px;
.pnd-title{
    max-width: 380px;
    font-size: 29px;
    line-height: 34px;
    color: #646c7a;
    @media (max-width:1120px) {
        margin-top: 80px;
        max-width: 100%;
        font-size: 21px;
        padding: 12px 21px;
        line-height: 26px;
    }
}
}
</style>