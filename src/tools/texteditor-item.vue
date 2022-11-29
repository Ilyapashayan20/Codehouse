<template>
    <div>
        <QuillEditor class="whitespace-normal dark:text-white" theme="snow" />
    </div>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
  components: {
    QuillEditor
  }
}

</script>
<style lang="">
    
</style>