<template>
    <swiper  :navigation="true" :loop="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <img class=" event-cover" src="../Images/test/test.jpg" alt="">
            <div class="event-info w-[91%] mb:w-[90%] lg:w-[80%] m-auto rounded bg-slate-800 py-2 px-3  md:py-4 md:px-7 lg:px-8 lg:py-5  relative bottom-[25px] md:bottom-[46px] z-[9999]">
                <div class="flex justify-between">
                    <div class="hidden md:block border-b border-[#4ab749] md:pb-[5px]"><h1 class="text-white slide-text font-light">Touchcast</h1></div>
                    <div class=" border-b border-[#4ab749]  md:pb-[5px] flex"><h1 class="text-white  slide-text    font-light">Yerevam, 123 Hovsep Emin St</h1> </div>
                    <div class=" border-b border-[#4ab749]  md:pb-[5px]"><h1 class="text-white  slide-text   font-light">Հոկտեմբերի 29, 16:30</h1></div>
                    <router-link class="bg-[#ffffff61] transition-all hover:bg-[#4ab749]  slide-text rounded px-[6px] md:py-1  md:px-3  text-white" to="/">Տեսնել ավելին</router-link>
                </div>
            </div>
        </swiper-slide>

       
    </swiper>
  </template>
  <script>

  import { Swiper, SwiperSlide } from "swiper/vue";
  
  import "swiper/css";
  
  

  import "swiper/css/navigation";
  
  import '../assets/swiper.css';
  
  import { Navigation } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
  </script>


  
  
