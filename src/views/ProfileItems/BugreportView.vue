[#4ab749]<template>
    <div class=' h-fi'>
        <div class="pm-header">
            <h1 class="dark:text-white">Հաղորդել Սխալի Մասին</h1>
        </div>
                <form>
                    <div class="mt-6">
                        <label class="font-medium text-[#485656] dark:text-slate-300" for="name">Նկարագրեք սխալը</label>
                        <textarea id="message" rows="4" class="block p-2.5 mt-4 w-full text-sm text-gray-900 bg-gray-50 outline-none rounded-lg border border-gray-300 focus:ring-[#4ab749] focus:border-[#4ab749] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4ab749] dark:focus:border-[#4ab749]" placeholder="Հնարավորինս նկարագրեք տեղի ունեցող սխալը"></textarea>
                    </div>
                    <div class="mt-6">
                        <label class="font-medium text-[#485656] dark:text-slate-300" for="name">Ակնկալիք</label>
                        <textarea id="message" rows="3" class="block p-2.5 mt-4 w-full text-sm text-gray-900 bg-gray-50 outline-none rounded-lg border border-gray-300 focus:ring-[#4ab749] focus:border-[#4ab749] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4ab749] dark:focus:border-[#4ab749]" placeholder="Առաջարկել ձեր լուծման տարբերակը"></textarea>
                    </div>
                    <div class="mt-6">
                        <button class="report-btn dark:hover:bg-slate-600  flex items-center font-[600] rounded text-white">Ողարկել</button>
                    </div>
                </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
  .report-btn{ 
      transition: 0.2s ease-in;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 10px;
      background-color: $green;
      padding-bottom: 10px;
      &:hover{
        background-color: rgb(97, 113, 129) ;
        }
        @media (max-width: 550px){
            padding-left: 12px;
            padding-right: 12px;
            padding-top: 7px;
            padding-bottom: 7px;
            font-size: 15px;
        }
        @media (max-width: 370px){
            font-size: 13px;
        }
    }

    
</style>