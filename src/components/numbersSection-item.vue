<template>
    <div>
        <div class="numbers-section flex justify-between flex-wrap">
            <div class="ns-f">
            <div class="number-block">
                <number class="number" :from="0" :to="getPostsLength" :format="theFormat" :duration="1" :delay="2" easing="Power1.easeOut" />
                <h1>Գրառումներ</h1>
                
            </div>
            </div>
        </div>        
    </div>
</template>
<script>
    
export default {
    computed:{
        postsLength() {
      return  this.$store.state.post.items 
    },
},
    created() {
      this.$store.dispatch("post/getPosts");
  },
  methods:{
    getPostsLength(){
        return this.postsLength.length;
    }
  }
  }

</script>
<style lang="scss">
    .numbers-section{
        
        background-image: url("../Images/bg/slider9.jpg");
        background-position: center center;
        background-size: cover;
        .ns-f{
            width: 100%;
            background-color: $blue;
            opacity: 0.91;
            padding: 15px;
        .number-block{
            padding: 75px 0px ;
            .number{

            }
            h1{

            }
        }
    }
    }
</style>