<template>
    <div>
        <form @submit.prevent="register" class="login-form w-full">
              <div class="">
                <input v-model="form.username" class="block w-full mt-2 px-4 py-2 text-[19px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#4ab749] focus:outline-none" type="text" placeholder="Անուն Ազգանուն">
              </div>
              <div v-if="v$.form.username.$error" class="validation-error mt-2">
                    <p v-if="v$.form.username.$errors.length" class=" text-red-600  text-[12px] md:text-[15px]" > Այս դաշտը պետք է պարունակի նվազագույնը 4 տառ</p>
              </div>
              <div class="mt-4">
                <input v-model="form.email" class="form-control block w-full px-4 py-2 text-[19px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#4ab749] focus:outline-none" type="text" placeholder="էլ-հասցե">
              </div>
              <div v-if="v$.form.email.$error" class="validation-error mt-2">
                    <p v-if="v$.form.email.$errors" class=" text-red-600  text-[12px] md:text-[15px]" > Աժեքը էլփոստի հասցե չէ</p>
              </div>
              <div class="mt-4">
                <input v-model="form.password" class="form-control block w-full px-4 py-2 text-[19px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#4ab749] focus:outline-none" type="password" placeholder="Գաղտնաբառ">
              </div>
              <div v-if="v$.form.password.$error" class="validation-error mt-2">
                    <p v-if="v$.form.password.$errors.length" class=" text-red-600  text-[12px] md:text-[15px]" > Գաղտնաբառը պետք է պարունակի նվազագույնը 6 տառ</p>
              </div>
              <div class="mt-4">
                <input  v-model="form.passwordComfirmation" class="form-control block w-full px-4 py-2 text-[19px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#4ab749] focus:outline-none" type="password" placeholder="Կրկնել Գաղտնաբառը">
              </div>
              <div v-if="v$.form.passwordComfirmation.$error" class="validation-error mt-2">
                 <p v-if="!v$.form.passwordComfirmation.$sameAs" class=" text-red-600  text-[12px] md:text-[15px]" > Պետք է լինի նույնը, ինչ գաղտնաբառը</p>
              </div>
              
              <div class="mt-3">
                <button  v-if='isProcessing' disabled class="link max-h-[44px] flex justify-center text-sm font-bold tracking-wide bg-[#4ab749]  transition-all ease-out text-gray-100 p-3 rounded w-full focus:outline-none" >
                    <svg aria-hidden="true" class=" w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#4ab749]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </button>
                <button  v-else class="link text-sm font-bold tracking-wide bg-[#4ab749] hover:bg-green-300 transition-all ease-out text-gray-100 p-3 rounded w-full focus:outline-none" >Գրանցվել</button>
              </div>
            </form>
    </div>
</template>
<script>

    import  useAuth  from "../composables/useAuth"
    import { useToast } from 'vue-toastification';
    import { useVuelidate } from '@vuelidate/core'
    import { required,minLength,email,sameAs } from '@vuelidate/validators'
export default {
    props: ["showLogin"],
    data(){
        return{
            form:{
                username:'',
                email:'',
                password:'',
                passwordComfirmation: '', 
          },
         
        }
    },
    setup(){
        const toast = useToast();
        const success = () => toast.success('Դուք հաջողությամբ գրանցվեցիք',{
        position: "top-center",
    });
        return {  v$: useVuelidate(), ...useAuth(),success}
              },
   validations(){
      return{
        form:{
          username:{ required , min:minLength(4)  },
          email:{ required,email },
          password:{ required , min:minLength(6)  },
          passwordComfirmation: { required,min:minLength(6),sameAs: sameAs(this.form.password) }
        }
      }
    },
    watch:{
        isProcessing(processing, prevProcessing){
            if(!processing && prevProcessing && !this.error){
                this.success()
            }
        },
        isAuthenticated(isAuth){
        if(isAuth){this.$router.push('/profile')
        return  window.scrollTo(0,0)}
      }
    },
    methods: {
         async register(){
            const isValid = await this.v$.$validate();
            if(isValid){
                this.$store.dispatch("user/register",this.form)
            }
        }
    }


}
</script>
<style lang="scss">
    .login-form{
        max-width: 70%;
        margin: auto;
        @media (max-width:515px) {
            max-width: 80%;
        }
        @media (max-width:408px) {
            max-width: 90%;
        }
    }
    
</style>

