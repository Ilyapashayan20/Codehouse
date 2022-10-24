<template>
    <div class="max-w-[90%] m-auto">
        <div class="relative"><BaseNavbar /></div>
        <div class="Editor">
            
        <div class="editor-block mt-[130px] bg-white dark:bg-slate-800 rounded-[13px] w-full">
            <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white dark:bg-slate-800 space-y-6 sm:p-6">
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 dark:text-white  sm:text-[16px]">
                Ավելացնել Վերնագիր
              </label>
              <div class="mt-3">
                <input v-model="formPost.title" type="text" id="name" name="name" placeholder="Վերնագիր" 
               class="flex-1 py-2 border-b-[1px] border-gray-300 focus:border-[#4ab749] 
                      text-black  font-semibold  w-full  placeholder-gray-300 dark:placeholder-slate-300 dark:bg-slate-800  dark:text-white shadow-sm
                      outline-none">
              </div>
              <div v-if="v$.formPost.title.$error" class="validation-error mt-2">
                    <p v-if="v$.formPost.title.required.$invalid" class=" text-red-600  text-[12px] md:text-[15px]" >Վերնագիրը պարտադիր է!</p>
              </div>
            </div>
            <div>
              <label for="text" class="block text-sm font-medium text-gray-700 dark:text-white   sm:text-[16px]">
                Ավելացնել Տեկստ
              </label>
              <div class="mt-3">
               
                <QuillEditor class="min-h-[100px]" v-model:content="formPost.description" contentType="html"   theme="snow" />
                <!-- <textarea  v-model="formPost.description" id="about" name="text" rows="3" class="dark:placeholder-slate-300 dark:bg-slate-800  dark:text-white shadow-sm min-h-[100px] border-b-[1px] focus-within:outline-none focus:ring-[#0b5be0] focus:border-[#0b5be0] mt-1 block w-full sm:text-sm border-gray-300 "
                 placeholder="Ձեր գրառման մասին"></textarea> -->
              </div>
              <div v-if="v$.formPost.description.$error" class="validation-error mt-2">
                    <p v-if="v$.formPost.description.$errors.length" class=" text-red-600  text-[12px] md:text-[15px]" >Գրառումն պետք է պարունակի նվազագույնը 300 սիմվոլ </p>
              </div>
              <label for="text" class="block text-sm font-medium text-gray-700 dark:text-white  mt-3  sm:text-[16px]">
                Թեմաներ
              </label>
              <div class="mt-3">
                <select v-model="formPost.type" class=" dark:text-slate-300 dark:bg-slate-800 bg-transparent relative z-[2] appearance-none cursor-pointer block w-full pl-3 pr-[44px] py-[9px] text-base rounded  border border-solid transition-all border-gray-300 focus:text-gray-700 focus:bg-transparent link focus:border-[#4ab749] focus:outline-none">
                        <option value="Algorithms" class="link">Algorithms</option>
                        <option value="Web development" class="link">Web Development</option>
                        <option value="Game development" class="link">Game Development</option> 
                        <option value="Mobile development" class="link">Mobile Development</option>
                        <option value="Artificial intelligence " class="link">Artificial Intelligence</option>
                        <option value="Interface design" class="link">Interface Design</option>
                        <option value="Neural networks" class="link">Neural Networks</option>
                        <option value="Data Science" class="link">Data Science</option>
                </select>
              </div>
            </div>
            <div class="grid gap-3">
              <div class="col-span-3 sm:col-span-2">
                <label for="company_website" class="block text-sm font-medium text-gray-700 dark:text-white  sm:text-[16px]">
                  Ավելացնել Կայք
                </label>
                <div class="mt-3 flex rounded-md ">
                  <span class="inline-flex items-center pl-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                
                  </span>
                  <input  v-model="formPost.sitelink" type="text" name="company_website" id="company_website" class="max-w-[300px] min-w-[134px] bg-gray-50 border  border-l-0 text-gray-500 text-sm border-gray-300   flex-1 block w-full rounded-r-md sm:text-sm  focus-within:outline-none" placeholder="https://socity.app">
                </div>
              </div>
              <p v-if="v$.formPost.sitelink.url.$invalid" class=" text-red-600  text-[12px] md:text-[15px]" >Սխալ URL ձևաչափ</p> 
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-white  sm:text-[16px]">
                Ավելացնել Պատկեր
              </label>
              <div class="mt-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300  border-dashed rounded-md">
                <div  class=" text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600 justify-center">
                    <label for="file-upload" class="relative cursor-pointer flex flex-col bg-white dark:bg-slate-800 rounded-md font-medium text-[#4ab749] hover:text-[#4ab749] focus-within:outline-none ">
                      <span class="mb-4" >Պատկերի հղում</span>
                      <input class=" bg-gray-50 border  text-gray-500 text-sm border-gray-300 text-center py-1   block w-full rounded-md sm:text-sm  focus-within:outline-none" placeholder=":https//" v-model="formPost.coverURL" name="file-upload" type="text">
                    </label>
                  </div>
                  <!-- <p  class=" flex items-center text-[#d6ac00] mt-2"> <img class='max-w-[26px] mr-2' src="https://assets.stickpng.com/images/5a81af7d9123fa7bcc9b0793.png" alt=""> Ստուգեք պատկերի առկաությունը</p> -->
                  <img class="mt-6" :src="formPost.coverURL" >
                </div>
              </div>
              <div v-if="v$.formPost.coverURL.$error" class="validation-error mt-2">
                    <p v-if="v$.formPost.coverURL.required.$invalid" class=" text-red-600  text-[12px] md:text-[15px]" >Պատկերիը պարտադիր է!</p>
                    <p v-if="v$.formPost.coverURL.url.$invalid" class=" text-red-600  text-[12px] md:text-[15px]" >Պատկերը սխալ URL ձևաչափ ունի!</p> 
                  </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 dark:bg-slate-700 text-right sm:px-6">
          </div>
        </div>
      </form>
    </div>
        </div>
        <div>
        <div class='editor-button-block flex flex-col  px-[34px] py-[22px] bg-white dark:bg-slate-800 rounded-[13px]'>
            <button class=" w-full justify-center font-[700]  text-[#627070] rounded py-2 px-10 link mb-6 dark:text-slate-300 hover:opacity-75 transition-all flex"><img class="mr-2" src="../Images/icons/save.svg" alt=""> Պահպանել</button>
            <button @click="createPost"  class=" w-full bg-[#4ab749] text-white rounded py-2 px-10 link  dark:hover:text-black dark:hover:bg-white  hover:bg-black transition-all">Հրապարակել</button>
        </div>
        <div class='sidebar mt-4  flex flex-col items-center'>
            <a href="#" class="text-center  text-[#4ab749] text-[18px] link dark:hover:text-white hover:text-[black] transition-all" >Հրապարակման <br> Կանոններ</a>
            <p class='text-[#627070] dark:text-slate-300 px-[10px] mt-3'>
                Չմոռանաք պահպանել <br> ձեր գրառումը։ <br> Բոլոր պահպանված սևագրերը կարելի է գտնել ձեր հաշվի <router-link to="/posts" class="text-[#4ab749]" >«Իմ գրառումները»</router-link> <br> բաժնում
            </p>
        </div>
        </div>
        </div>
    </div>
    <MainFooter class="bg-black dark:bg-slate-800  mt-[82px]" />
    
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import { useVuelidate } from '@vuelidate/core'
import { required,minLength,url } from '@vuelidate/validators'
import useAuth from '@/composables/useAuth';
import { useToast } from 'vue-toastification';
import MainFooter from '@/components/mainFooter.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


const setupInitialData = ()=> ({
          title:'',
          description:null,
          sitelink:'',
          coverURL: '',
          type: 'Algorithms',
          waiting:false,
          views:0
         })

export default {
    name: "EditorView",
    components: { BaseNavbar, MainFooter, QuillEditor },
    data(){
      return{
        formPost:setupInitialData(),
      }
    },
    validations(){
      return{
        formPost:{
          title:{ required , },
          description:{ required, min: minLength(200) },
          sitelink:{  url },
          coverURL: { url }
          
        }
      }
    },
    setup () {
      const toast = useToast()
      const warning = () => toast.warning('Մուտք գործել հրապարակելու համար')
    return { v$: useVuelidate(), ...useAuth(),toast,warning }
      },
    methods: {
   async createPost(){
    const isValid =  await this.v$.$validate()
    if(this.isAuthenticated){
    if(isValid){
      this.v$.$reset()
      this.$store.dispatch("post/createPost",{
        data:this.formPost,
        onSuccess: () =>{
          this.formPost = setupInitialData()
        }
      })
    }
    }else{
      this.warning()
    }
  }
}
    
}
</script>
<style lang="scss">
    .Editor{
        display: flex;
        justify-content: space-between;   
        .editor-button-block {
            margin-left: 44px;
            align-items: center;
            padding: 22px 34px;
            margin-top: 130px;
            @media (max-width: 780px){
                margin-left: 0;
                margin-top: 20px;
            }
            @media (max-width: 440px){
            padding:22px 22px;
        }
            
        }
        .sidebar{
            margin-left: 44px;
            max-width: 320px;
            a{
                @media (max-width: 780px){
                    font-size: 16px;
                }
            }
            p{
                text-align: center;
                @media (max-width: 780px){
                    font-size: 12px;
                    a{
                        font-size: 13px;
                    }
                }
            }
            @media (max-width: 780px){
                margin-left: 0;
                max-width: 100%;
            }
        }
        @media (max-width: 780px) {
            flex-direction: column;
            justify-content: center;
            margin-bottom: 30px;
        }
    }
    .editor-block{
        padding: 22px 34px;
        @media (max-width: 440px){
            padding: 12px 22px;
        }
    }
    
</style>