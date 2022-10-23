<template>
     <div class="flex flex-col items-center w-full">
         <h1 class=" text-center leading-[1.3em] text-2xl md:text-4xl text-black font-semibold dark:text-white title"> Վիդեո Դասընթացներ</h1>
         <div class="mt-5 flex items-center ">
           <div class=" w-16 border-b-2 border-[#0B5BE0]"></div>
           <div class=" mx-2 bg-[#0B5BE0] w-[14.3px] h-[14.3px] rounded-full"></div>
           <div class=" w-16 border-b-2 border-[#0B5BE0]"></div>
         </div>
     </div>
    <div class="video-course-section my-8">
        <div class="separate-block ">
    <div class=" video-course-block rounded-lg bg-white dark:bg-slate-800  mb-5  ">
        <div class="video-block w-full">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AhsTTmIdL1k?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-title-block">
            <h1 class="dark:text-white">The Art of Programming Ծրագրավորման արվեստ</h1>
            <div class="video-info-block">
               <p class="link dark:text-slate-300  text-[#838080]"> Ինչպես սովորել համակարգչային ծրագրավորում</p>
               <p class="link dark:text-slate-300  flex items-center">Հեղինակ:<span class="ml-2 text-[#838080] ">Ռուբեն Մեսչիան</span></p>
               <h2 class=" cursor-pointer  text-[#4c4c4c] dark:bg-white  px-[14px] w-fit py-[4px] bg-[#e2e2e2] rounded-[21px]"> JavaScript</h2>
               <a 
               href="https://www.youtube.com/playlist?list=PLkVo56yGU5Pqld7f3jtoE-g_755aPT0NV"
               class="mt-4 text-center hover:bg-black transition-all bg-[#0b5be0] rounded text-white dark:hover:text-black dark:hover:bg-white  link py-[10px] px-[15px]" target="_blank">
               Բացել Դասընթացը
               </a>
            </div>
        </div>
    </div>    
    </div>
    <div class="course-filter rounded-xl h-fit bg-white dark:bg-slate-800">
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c] hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">JavaScript</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">HTML5</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">CSS</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">Python</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">JAVA</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">C++</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">React</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">Vue 3</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">C#</button>
        <button class="dark:bg-white dark:hover:bg-[#0b5be0] cursor-pointer text-[12px]  md:text-[17px] px-[17px] w-fit py-[5px] transition-all text-[#4c4c4c]  hover:bg-[#0b5be0] hover:text-white bg-[#e2e2e2] rounded-[21px]">Firebase</button>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .video-course-section{
        display: flex;
        justify-content: space-between;
        @media (max-width:1230px){
            flex-direction: column-reverse;
        }
        .video-course-block{
            padding: 38px 50px;
            margin-right: 20px;
            display: flex;
            justify-content: space-between;
            .video-block{
                @media (max-width:816px){
                height: 275px;
                }
                @media (max-width:492px){
                    height: 200px;
                }
                @media (max-width:392px){
                    height: 180px;
                }
            }
            @media (max-width:1300px){
                padding: 22px 38px;
            }
            @media (max-width:1230px){
                margin-right: 0px;
            }
            @media (max-width:816px){
                flex-direction: column;
            }
            @media (max-width:684px){
                padding: 18px 27px;
            }
            @media (max-width:420px){
                padding: 12px 12px;

            }
            .video-title-block{
            margin-left: 30px;
            padding: 17px 0px;
            min-width: 391px;
            h1{
                font-size: 23px;
                font-weight: 400;
                @media (max-width:492px){
                    font-size: 17px;
                }
            }
            .video-info-block{
                margin-top: 15px;
                display: flex;
                flex-direction: column;
                @media (max-width:492px){
                    margin-top: 7px;
                }
                h2{
                    font-size: 14px;
                    margin-top: 12px;
                    @media (max-width:492px){
                        font-size: 11px;
                        margin-top: 7px;
                    }
                }
                p{
                    margin-bottom: 8px;
                    font-size: 17px;
                    @media (max-width:492px){
                        margin-bottom: 4px;
                        font-size: 13px;
                    }
                }
                a{
                    font-size: 16px;
                    @media (max-width:492px){
                        font-size: 13px;
                    }
                }
            }
            @media (max-width:1290px){
                min-width: 300px;
            }
            @media (max-width:1229px){
                min-width: 340px;
            }
            @media (max-width:925px){
                min-width: 302px;
            }
            @media (max-width:816px){
                margin-left: 0px;
                padding: 0px;
                padding-top: 14px;
               
            }
            @media (max-width:606px){
                min-width: 0;
            }
            }
        }
        .course-filter{
            padding: 30px 40px;
            display: flex;
            flex-wrap: wrap;
            max-width: 400px;
            button{
                margin: 8px;
                @media (max-width:482px){
                    margin: 3px;
                }
            }
            @media (max-width:1310px){
                padding: 20px 30px;
                max-width: 360px;
            }
            @media (max-width:1230px){
                max-width: 100%;
                margin-bottom: 30px;
                justify-content: center;
            }
            @media (max-width:422px){
                padding: 16px 13px;
            }

        }
    }


    
</style>