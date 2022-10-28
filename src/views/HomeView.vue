<template>
  <div class="home ">
    <div class=" relative  "><BaseNavbar /></div>
    <div class="flexible  m-auto">
    <div class="main-section  m-auto flex justify-between">
      <MainPosts :posts="posts" class=" mt-[30px]  2lg:mt-[84px]" />
    </div>
    <MainFooter class="bg-black dark:bg-slate-800" />
    </div>
  </div>
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import MainPosts from '@/components/mainPosts.vue';
import MainFooter from '@/components/mainFooter.vue';
export default {
  props: ["menuActive"],  
    name: "HomeView",
    components: { BaseNavbar, MainPosts, MainFooter },

    computed: {
    posts() {
      return this.$store.state.post.items;
    }
  },
  created() {
    this.$store.dispatch("post/getPosts",10);
  }
}
</script>

<style lang="scss" scoped>
.mbm{
  display: none;
   @media (max-width: 920px){
    display: block;
   }
  }
  .main-section{
    max-width: 70%;
    @media (max-width: 1460px){
      max-width: 85%;
   }
   @media (max-width: 1124px){
      max-width: 90%;
   }
  }
  // .flexible{
  //   height: 100vh;
  //   display: flex;
  //   justify-content: space-between;
  //   flex-direction: column;

  // }
</style>
