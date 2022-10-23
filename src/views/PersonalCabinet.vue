<template>
     <BaseNavbar/>
    <div class="personal-cabinet max-w-[90%]  m-auto mb-12 h-full ">
        <div class='profile-header dark:bg-slate-800 dark:border-0'>
            <div class="profile-user">
                <div class="flex items-center">
                    <img v-if="!user.avatar" class=" avatar rounded-[18px] shadow-lg " src="https://bit.ly/3CvvXtJ">
                    <img v-else class=" avatar max-h-[96px] rounded-[18px] shadow-lg" :src="user.avatar">
                </div>
                <div class="username-block flex items-center">
                <h1 class="dark:text-white">{{user.username }}</h1>
                <img class="ml-[5px] verified  " v-if="user.verified" src="../Images/icons/verifed.svg">
                </div>
            </div>
            <div class="logout-block">
                <router-link to="/about" class="logout-button flex items-center font-[600] hover:bg-black dark:hover:bg-white dark:hover:text-black  rounded text-white ">Մեր Մասին</router-link>
            </div>
        </div>
        <div class='profile-wrapper pb-5'>
            <div  class="profile-main dark:border-0 dark:bg-slate-800">
                <transition name="modal-animation-inner">
                <router-view :user="user"  />
                </transition>
            </div>
            <div class='profile-navigation_list '>
                <ul class="w-full  ">
                    <router-link active-class="profile-navigation_link_active-first" class="flex items-center font-medium text-[16px]" to="/profile">
                    <li class=" top-li flex link items-center w-full py-[24px] px-[33px]"> <img class=" w-[28px] mr-2 rounded" v-if="!user.avatar" src="https://bit.ly/3CvvXtJ"><img  v-else class="mr-2 h-[28px] w-[28px] rounded text-white" :src="user.avatar">Պրոֆիլ</li>
                    </router-link>
                    <router-link active-class="profile-navigation_link_active" class="flex items-center font-medium text-[16px]" to="/posts">
                    <li class="flex link items-center w-full py-[24px] px-[33px]"> <img class=" mr-2 w-[28px] rounded text-white" src="../Images/icons/45-folder.svg"> Իմ գրառումները</li>
                    </router-link>
                    <router-link active-class="profile-navigation_link_active" class="flex items-center font-medium text-[16px]" to="/subscriptions">
                    <li class="flex link items-center w-full py-[24px] px-[33px]"> <img class=" mr-2 w-[28px] rounded text-white" src="../Images/icons/55-layout-1.svg"> Բաժանորդագրություններ</li>
                    </router-link>
                    <router-link active-class="profile-navigation_link_active" class="flex items-center font-medium text-[16px]" to="/bookmarks">
                    <li class="flex link items-center w-full py-[24px] px-[33px]"> <img class=" mr-2 w-[28px] rounded text-white" src="../Images/icons/3-keep-minus.svg"> Էջանիշեր</li>
                    </router-link>
                    <router-link active-class="profile-navigation_link_active" class="flex items-center font-medium text-[16px]" to="/bug-report">
                    <li class="flex link  items-center w-full py-[24px] px-[33px]"> <img class=" mr-2 w-[28px] rounded text-white" src="../Images/icons/at.svg"> Հաղորդել սխալի մասին</li>
                    </router-link>
                    <button @click="()=> $store.dispatch('user/logout')" class="logout-btn flex items-center">
                    <h1 class="flex items-center w-full py-[24px] text-[18px] font-semibold pl-[50px] text-[#4ab749]  ">Դուրս գալ </h1>
                    </button>
                </ul>
            </div>
        </div>
    </div>
    <MainFooter class="bg-black mt-28 dark:bg-slate-800" />

</template>
<script>
import useAuth from '@/composables/useAuth';
import BaseNavbar from '@/components/BaseNavbar.vue';
import MainFooter from '@/components/mainFooter.vue';

export default {
    components: { BaseNavbar, MainFooter },
    setup(){
        return  useAuth()
    },
    watch:{
      isAuthenticated(isAuth){
        if(isAuth){this.$router.push('/profile')}
        else{
            this.$router.push('/')
        }
      }
    },
}
</script>
<style lang="scss">
    .profile-header{
        border-radius: 12px;
        background-color: #ffffff;
        margin-bottom: 30px;
        border: 1px solid #eaeaea;
        padding: 24px 36px;
        margin-top: 130px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 550px){
            padding: 18px 26px;
        }
        @media (max-width: 960px){
            margin-bottom: 0;
            border: 1px solid #eaeaea;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        .profile-user{
            display: flex;
            align-items: center;
           
            @media (max-width: 500px){
                flex-direction: column;
                align-items: flex-start;
            }
            .avatar{
                width: 96px;
                @media (max-width: 740px){
                   width: 83px;
                }
                @media (max-width: 550px){
                    width: 72px;
                }
                @media (max-width: 370px){
                    width: 67px;
                }
            }
            .username-block{
                display: flex;
                
            h1{
                margin-left: 31px;
                margin-bottom: 7px;
                margin-right: 15px;
                font-weight: 600;
                font-size: 29px;
                letter-spacing: -0.015em;
                @media (max-width: 1040px){
                    font-size: 25px;
                }
                @media (max-width: 740px){
                    font-size: 16px;
                }
                @media (max-width: 550px){
                    margin-left: 20px;
                }
                @media (max-width: 500px){
                    margin-left: 0;
                    margin-right: 0;
                }
                @media (max-width: 370px){
                    font-size: 15px;
                }
            }
            // .verified{
            //     top: 40%;
            //     width: 21px;
            //     @media (max-width: 1040px){
            //         top:38%;
            //         width: 15px;
            //        }
            //        @media (max-width: 370px){
            //         top:39%;
            //         width: 12px;
            //        }
            // }
        //     @media (max-width: 1040px){
        //     width:210px;
        // }
        // @media (max-width: 740px){
        //     width:169px;
        // }
        //      @media (max-width: 550px){
        //     width:140px;
        // }
        // @media (max-width: 370px){
        //     width:115px;
        // }
        }
    
        }
        .logout-block{
            .logout-button{
                 background-color: $green;
                 transition: 0.2s ease-in;
                 padding-left: 15px;
                 padding-right: 15px;
                 padding-top: 10px;
                 padding-bottom: 10px;
             
                 @media (max-width: 550px){
                 padding-left: 12px;
                 padding-right: 12px;
                 padding-top: 7px;
                 padding-bottom: 7px;
                 font-size: 15px;
                 }
                 @media (max-width: 370px){
                    font-size: 13px;
                 }
            }
        }
    }
    .profile-wrapper{
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr 320px;
        gap: 40px;
    @media (max-width: 1300px){
        grid-template-columns: 1fr 320px;
        gap: 20px;
    }
    @media (max-width: 960px){
        grid-template-columns: auto;
        grid-template-rows: auto 1fr;
        grid-auto-flow: dense;
        display: flex;
        flex-direction: column-reverse;
    }
        .profile-main{
            padding: 38px 50px;
            display: flex;
            flex-direction: column;
            border-radius: 12px;
            min-height: 400px;
            border: 1px solid #eaeaea;
            @media (max-width:700px) {
                padding: 30px 36px;
            }
            @media (max-width:700px) {
                padding: 30px 26px;
            }
        }
    .profile-navigation_list{
        display: flex;
        height: 457px;
        flex-direction: column;
        border-radius: 12px;
        background-color: #ffffff;
        border: 1px solid #eaeaea;
        align-items: flex-start;
        @media (max-width:960px) {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }
        ul{
            li{
                transition: 0.1s ease-in-out;
                border-bottom: 1px solid #d1d1d1;
                &:hover{
                    background: #d1d1d1;
                }
            }
            .top-li{
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                @media (max-width: 960px){
                    border-top-left-radius: 0;
                border-top-right-radius: 0;
                }
            }
        }
    }
}

.profile-navigation_link_active-first{
    background-color: #d1d1d1;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    @media (max-width: 960px){
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }


}
.profile-navigation_link_active{
    background-color: #d1d1d1;
}
</style>