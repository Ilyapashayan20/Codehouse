<template>
        <div>
            <div class="pm-header">
                <h1 class="dark:text-white">Բլոգ</h1>
            </div>
            <div class="profile-post-content_top">
                <div class=" pct-item relative">
                    <img class=" absolute z-[1] right-[10px] top-[10px]" src="@/Images/icons/arrow-bottom.svg" alt="">
                    <select  v-model="selectFilter.type" class=" dark:text-white dark:border-white dark:bg-slate-800 bg-transparent relative z-[2] appearance-none cursor-pointer block w-full pl-3 pr-[44px] py-[9px] text-base rounded  border border-solid transition-all border-gray-300 focus:text-gray-700 focus:bg-transparent link focus:border-blue-600 focus:outline-none">
                        <option value="Բոլորը" class="link dark:text-white">Բոլորը</option>
                        <option value="publicated" class="link dark:text-white">Հրապարակված</option>
                        <option value="checked" class="link dark:text-white">Ստուգվող</option> 
                   </select>
                </div>
                <div class="pct-item">
                    <router-link to="/editor" class="link dark:hover:bg-slate-600 flex items-center profile-create-post  text-base rounded text-white "><img class=" mr-2" src="@/Images/icons/pen.svg" > <p class="">Ստեղծել Գրառում</p> </router-link>
                </div>
            </div>

            <!-- no result block -->
            <div v-if="userPostsFilter.length > 0">
                <div class="mt-[20px] w-full  user_posts">
                    <div class=" cursor-pointer relative mt-[10px] mr-4 shadow-xl rounded user_post hover:translate-y-[-4px] transition-all " v-for="userpost in userPostsFilter" :key="userpost.id">
                        <router-link :to="{name: 'PostDetail', params: {slug: userpost.slug}}">
                        <img class="rounded" :src="userpost.coverURL" alt="">
                        <span v-if="userpost.waiting" class=" right-3 top-3 absolute bg-green-600 opacity-75 rounded-[10px] py-1 text-[11px] px-3 text-white text-center">Հրապարակված</span>
                        <span v-else class=" right-3 top-3 absolute bg-yellow-500 opacity-75 rounded-[10px] py-1 text-[11px] px-3 text-white text-center">Ստուգվող</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-else class="mt-[40px] pt-[50px] ">
                <h1 class="link text-center text-[19px] text-[#778693]">Այս դաշտը դատարկ է:)</h1>
                </div>
         
            <!-- filtred posts block -->
            <div class="mt-[40px]"></div>
        </div>
</template>
<script>
export default {
    props:{
            user:{
                type:Object,
                required:true
            }
        },
        data(){
            return{
                selectFilter:{
                    type: 'Բոլորը'
                }
            }
        },
        computed: {
        userPosts() {
        return this.$store.state.post.useritems;
     },
     userPostsFilter(){
        return this.userPosts.filter((post) =>{
            if(this.selectFilter.type == 'Բոլորը'){
                return post
            } else if(this.selectFilter.type == 'publicated'){
                return post.waiting === true
            } else{
                return post.waiting !== true
            }
        })
    }
},
    created(){
        const uID = this.user.email
        this.$store.dispatch("post/getUserPosts",uID)
    },
}

</script>
<style lang="scss">
    .profile-post-content_top{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        align-items: center;
        @media (max-width: 568px){
            flex-direction: column;
            height: 104px;
            width: 100%;
        }
        .pct-item{
            @media (max-width: 568px){
                width: 100%;
            }
        }
        .profile-create-post {
        background-color: $green;
        transition: 0.2s ease-in;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        &:hover{
            background-color: black;
        }
        @media (max-width: 568px){
            justify-content: center;
        }
        }
    }
    .user_posts{
        display: flex;
        margin-right: 16px;
        flex-wrap: wrap;
        @media (max-width: 419px){
            flex-direction: column;
        }
        .user_post{
            max-width: 250px;
            max-height: 150px;
            @media (max-width:600px){
                max-width: 47%;
        }
        @media (max-width: 419px){
            max-width: 100%;
            margin-right: 0px;
        }
        }
    }

</style>