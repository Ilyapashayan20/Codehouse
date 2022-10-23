<template>
    <BaseNavbar />
    <div>
    <section class="about-section-top mt-[77px]">
        <div class="flex items-center h-full justify-center">
            <div class=" max-w-[80%] md:max-w-[60%] flex flex-col items-center">
                <h1 data-aos="zoom-in" class="about-title text-center dark:text-white">Կայք որը օգտվողներին կտրամադրի մի շարք նորություններ և առանձնահատկություններ ծրագրավորման <br> ոլորտի վերջին զարգացումների վերաբերյալ</h1>
                <div class=' block mt-9 '>
                    <router-link class="link about-section-button rounded-[5px]" to="/">Հրապարակումներ</router-link>
                </div>
            </div>
        </div>
    </section>
    <!-- <NumbersSectionItem :posts="posts" class=" max-w-[90%] m-auto mt-9" /> -->
    <div class="contact-info max-w-[90%] m-auto  mt-8 mb-11">
        <div class="flex flex-col items-center w-full">
            <h1 class=" text-center leading-[1.3em] text-2xl md:text-4xl text-black dark:text-white font-semibold title">Կապ մեզ հետ</h1>
            <div class="mt-5 flex items-center ">
                <div class=" w-16 border-b-2 border-[#4ab749]"></div>
                <div class=" mx-2 bg-[#4ab749] w-[14.3px] h-[14.3px] rounded-full"></div>
                <div class=" w-16 border-b-2 border-[#4ab749]"></div>
            </div>
        </div>
        <div class="contacts mb-12 ">
            <SendMessageItem  />
        </div>
    </div>
    
    </div>
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import SendMessageItem from '../tools/sendMessage-item.vue';
// import NumbersSectionItem from '@/components/numbersSection-item.vue';
export default {
    components: { BaseNavbar, SendMessageItem }
}
</script>
<style lang="scss">
    .about-section-top{
        background-image: url('../Images/bg/poster.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 680px;
    }
    .about-title{
        color: #FFFFFF;
    font-family: "Roboto", Sans-serif;
    font-size: 41px;
    line-height: 45px;
    font-weight: 600;

    letter-spacing: 2px;
    @media (max-width: 1185px){
        font-size: 37px;
    }
    @media (max-width: 863px){
        font-size: 29px;
        line-height: 32px;
    }
    @media (max-width: 483px){
        font-size: 19px;
        line-height: 36px;
        margin-bottom: 10px;
        line-height: 25px;
    }
    }
    .about-section-button{
        padding: 17px 30px;  
        background: #fff;
        transition: 0.3s all;
        font-weight: 600;
        display: inline-block;
        border-radius: 5px;
        text-transform: capitalize;
        font-size: 16px;
        &:hover{
            background: $green;
            color:white;
        }
        @media (max-width: 663px){
            padding: 15px 27px;
            font-size: 13px;
        }
        @media (max-width: 483px){
            font-size: 12px;
            padding: 10px 20px;
        }
    }
    .contact-info{
        display: flex;
        flex-direction: column;
    }
</style>