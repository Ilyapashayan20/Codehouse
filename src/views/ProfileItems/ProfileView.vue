    <template>
        <div>
            <div class="pm-header">
                <h1 class="dark:text-white">Պրոֆիլ</h1>
            </div>
            <div class="pf-form">
                <h1 class="dark:text-white">Անձնական տվյալներ</h1>
                <form @submit.prevent>
                    <div class="mt-6">
                        <label class=" font-medium text-[#485656] dark:text-slate-300" for="name">Անուն Ազգանուն</label>
                        <input v-model="userProfile.username" class="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg  outline-none focus:ring-[#4ab749] focus:border-[#4ab749] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4ab749] dark:focus:border-[#4ab749]" type="text" placeholder="Անուն Ազգանուն" >
                    </div>
                    <div class="mt-6">
                        <label class=" font-medium text-[#485656] dark:text-slate-300" for="name">Էլ-հասցե</label>
                        
                        <div :disabled="updateLimitations.update"  class="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg  outline-none focus:ring-[#4ab749] focus:border-[#4ab749] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4ab749] dark:focus:border-[#4ab749]" type="email" required placeholder="example@gmail.com">
                          {{ userProfile.email}}
                        </div>
                        </div>
                    <div class="mt-6">
                        <label class=" font-medium text-[#485656] dark:text-slate-300" for="name">Կոնտակտային տվյալներ</label>
                        <input  v-model="userProfile.contacts"  class="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg  outline-none focus:ring-[#4ab749] focus:border-[#4ab749] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4ab749] dark:focus:border-[#4ab749]" type="text" placeholder="հեռախոսահամար">
                    </div>
                    <div class="mt-6">
                        <label class=" font-medium text-[#485656] dark:text-slate-300" for="name">Անձնական Լուսանկարը </label>
                        
                        <input @change="handleUpload" type="file" class="text-sm text-grey-500 block mt-5
                         file:mr-5 file:py-2 file:px-6
                         file:rounded-full file:border-0
                         file:text-sm file:font-medium
                       file:bg-green-200 file:text-[#4ab749]
                         hover:file:cursor-pointer transition-all hover:file:bg-amber-50
                       hover:file:text-amber-700"/>
                            </div>
                    <div class="mt-6">
                        <button @click="updateProfile" class="profile-save-button dark:hover:bg-slate-600   flex items-center font-[600] rounded text-white">Պահպանել</button>
                    </div>
                </form>
            </div>
        </div>
    </template>
    <script>
    // import { ref } from "vue";
    // import useAuth from '@/compasition/useAuth';
    export default {
        props:{
            user:{
                type:Object,
                required:true
            }
        },
        data(){
            return{
                updateLimitations:{
                    update: true
                },
                userProfile:{...this.user},
            }
        },
        methods:{
            updateProfile(){
                this.$store.dispatch("user/updateProfile",{
                    data: this.userProfile
                })
            },
            handleUpload(e) {
                const self = this
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsArrayBuffer(file);
                reader.onload = function() {
                    self.$store.dispatch("user/uploadImage",{
                      bytes: reader.result,
                      name: file.name,
                      onSuccess: (url) => {
                      self.userProfile.avatar = url;
                    }
                  })
                } 
              }
            }   
    }
    </script>
    <style lang="scss">
        .profile-main{
            background-color: #fff;
            width: 100%;
            .pm-header{
                border-bottom: 1px solid $green;
                width: 100%;
                padding-bottom: 26px;
                h1{
                    font-size: 28px;
                    font-weight: 600;
                    line-height: 32px;
                    letter-spacing: 0em;
                    @media (max-width:700px){
                        font-size: 25px;
                    }
                    @media (max-width:400px){
                        font-size: 21px;
                    }
                }
            }
            .pf-form{
                padding-top: 38px;
                h1{
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 32px;
                    letter-spacing: 0em;
                }
                form{
                    .profile-save-button{
                        background-color: $green;
                 transition: 0.2s ease-in;
                 padding-left: 15px;
                 padding-right: 15px;
                 padding-top: 10px;
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
                }
            }
        }
        
    </style>
