<template>
    <BaseNavbar />
    <div class="slide m-auto mt-28">
        <EventSliderItem />
        </div>
        <div class="max-w-[90%] m-auto">
        <div class="Upcoming-events mt-4 mb-20">
            <h1 class="ue-title text-[20px] mb:text-[39px] font-[600] dark:text-white">Սպասվող Միջոցառումներ</h1>
            <div class="mt-10 events-grid-block w-full">
              <router-link to="/">
                <div class=" max-w-[430px] max-h-[411px] hover:opacity-50 transition-all flex flex-col rounded-[18px] bg-white dark:bg-slate-800 m-3">
                    <img class="rounded-t-[18px] max-h-[210px]"  src="../Images/test/test2.jpg" alt="">
                        <div class=" pb-5 mb:pb-6 pt-4 px-4 flex flex-col">
                            <h1 class="mb-[2px] text-[17px] mb:text-[25px] dark:text-white">Touchcats</h1>
                            <p class="mb-[5px] text-[14px] mb:text-[18px] dark:text-white">The Complet Guid</p>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/calendar.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Հոկտեմբերի 29</p>
                            </div>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/64-location.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Yerevam, 123 Hovsep Emin St</p>
                            </div>
                        </div>
                </div>
              </router-link>
              <router-link to="/">
                <div class=" max-w-[430px] max-h-[411px] hover:opacity-50 transition-all flex flex-col rounded-[18px] bg-white dark:bg-slate-800 m-3">
                    <img class="rounded-t-[18px] max-h-[210px]"  src="../Images/test/test4.jpg" alt="">
                        <div class=" pb-5 mb:pb-6 pt-4 px-4 flex flex-col">
                            <h1 class="mb-[2px] text-[17px] mb:text-[25px] dark:text-white">Touchcats</h1>
                            <p class="mb-[5px] text-[14px] mb:text-[18px] dark:text-white">The Complet Guid</p>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/calendar.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Հոկտեմբերի 29</p>
                            </div>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/64-location.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Yerevam, 123 Hovsep Emin St</p>
                            </div>
                        </div>
                </div>
              </router-link>
              <router-link to="/">
                <div class=" max-w-[430px] max-h-[411px] hover:opacity-50 transition-all flex flex-col rounded-[18px] bg-white dark:bg-slate-800 m-3">
                    <img class="rounded-t-[18px] max-h-[210px]"  src="../Images/test/test3.jpg" alt="">
                        <div class=" pb-5 mb:pb-6 pt-4 px-4 flex flex-col">
                            <h1 class="mb-[2px] text-[17px] mb:text-[25px] dark:text-white">Touchcats</h1>
                            <p class="mb-[5px] text-[14px] mb:text-[18px] dark:text-white">The Complet Guid</p>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/calendar.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Հոկտեմբերի 29</p>
                            </div>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/64-location.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Yerevam, 123 Hovsep Emin St</p>
                            </div>
                        </div>
                </div>
              </router-link>
                            <router-link to="/">
                <div class=" max-w-[430px] max-h-[411px] hover:opacity-50 transition-all flex flex-col rounded-[18px] bg-white dark:bg-slate-800 m-3">
                    <img class="rounded-t-[18px] max-h-[210px]"  src="../Images/test/test4.jpg" alt="">
                        <div class=" pb-5 mb:pb-6 pt-4 px-4 flex flex-col">
                            <h1 class="mb-[2px] text-[17px] mb:text-[25px] dark:text-white">Touchcats</h1>
                            <p class="mb-[5px] text-[14px] mb:text-[18px] dark:text-white">The Complet Guid</p>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/calendar.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Հոկտեմբերի 29</p>
                            </div>
                            <div class="post-date mb-[5px] flex">
                              <img class="uei" src="../Images/icons/64-location.svg">
                              <p class='text-[#798795] dark:text-slate-50 ml-1 uet '>Yerevam, 123 Hovsep Emin St</p>
                            </div>
                        </div>
                </div>
              </router-link>
            </div>
        </div>
    </div>
    <MainFooter class="bg-black dark:bg-slate-800" />
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import EventSliderItem from '@/components/eventSlider-item.vue';
import MainFooter from '@/components/mainFooter.vue';
export default {
    components: { BaseNavbar, EventSliderItem ,MainFooter}
}
</script>
<style lang="scss">
.slide-text{
 font-size: 22px;
 @media (max-width: 1280px){
 font-size: 18px;
 }
 @media (max-width: 1024px){
  font-size: 14px;
 }
 @media (max-width: 600px){
  font-size: 9px;
 }

}
.slide{
  max-width: 100%;
  @media (max-width: 500px){
    max-width: 100%;
  }
}
.ue-title{
    @media (max-width: 1160px){
        text-align: center;
    }
}
    .events-grid-block{
        display: grid;
        gap: 4px;
        justify-content: center;
        @media (min-width: 740px) {
           grid-template-columns: repeat(2, 1fr); 
        }   
        @media (min-width: 1160px) {
           grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1800px) {
           grid-template-columns: repeat(4, 1fr);
        }
    }
    .uet{
        @media (max-width: 430px){
            font-size: 12px;
        }
    }
    .uei{
        @media (max-width: 430px){
            width: 17px;
        }
    }
</style>