<template>
    <BaseNavbar />
    <div class="mt-[153px] max-w-[90%] m-auto">
        <VideoCourseItem />
    </div>
    <div class=" h-96"></div>
    <MainFooter class="bg-black  dark:bg-slate-800" />

</template>
<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
import VideoCourseItem from '@/components/Course/videoCourse-item.vue';
import MainFooter from '@/components/mainFooter.vue';
export default {
    components: { BaseNavbar, VideoCourseItem, MainFooter }
}
</script>
<style lang="scss">
    
</style>