<template>
  <div v-if="!isAuthenticated">
    <transition name="modal-animation">
      <div v-show="modalActive" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="modal-inner flex flex-col ">
             <button class="close"  @click="close"><img src="../Images/icons/close.svg" alt=""></button>
            
            <div class="social-buttons w-[90%] sm:w-[40%] flex justify-center flex-wrap ">
            </div>
            <div v-if="modalActive">
            <div v-if="showLogin">
              <h1 class="text-center text-gray-500 title text-[19px] md:text-[24px] mb-[20px] ">Մուտք գործել</h1>
            <LoginItem />
            <p class="mt-3 text-center">Դեռ հաշիվ չունե՞ք: <span class=" cursor-pointer text-gray-700 font-medium ml-1" @click="showLogin = false">Գրանցվել</span></p>
            </div>
            <div v-else>
              <h1 class="text-center text-gray-500 title text-[19px] md:text-[24px] mb-[20px] ">Գրանցվել</h1>
            <SignupItem :showLogin="showLogin"  />
            <p class="mt-3 text-center">Արդեն գրանցվե՞լ ես: <span class=" cursor-pointer font-medium text-gray-700 ml-1" @click="showLogin = true">Մուտք</span></p>
            </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    </div>
  </template>
  
  <script>
import LoginItem from '../components/login-item.vue';
import SignupItem from '@/components/Signup-item.vue';
import useAuth from '@/composables/useAuth';
import {ref} from 'vue'

  export default {
    props: ["modalActive"],
    setup(props, { emit }) {
      const showLogin = ref(true)
        const close = () => {
            showLogin.value = ref(false)
            emit("close");
        };
       

        return { close,showLogin ,...useAuth()};
    },
    
    components: { LoginItem, SignupItem }
};
  </script>
  
  <style lang="scss" scoped>
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0, 0, 0.4);
    .modal-inner {
      position: relative;
      border-radius: 4px;
      max-width: 640px;
      width: 80%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background-color: #ffffff;
      padding: 64px 16px;
       .close{
        position: absolute;
        transition: 0.2s ease-in;
        background-color: $green;
        top: 15px;
        border-radius: 4px;
        right: 15px;
        padding: 7px;
        font-size: 20px;
        cursor: pointer;
        &:hover {
            background-color: rgb(32, 75, 32) ;
        }
      }
      .social-buttons{
        button{
          transition: transform 0.7s ease-in-out;
        }
      }
    }
  }
  </style>