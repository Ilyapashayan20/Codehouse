<template>
    <div>
        <div class="container mx-auto">
			<div class="flex justify-center items-center h-screen px-6">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div class="w-full  h-auto bg-[#4ab749] hidden lg:flex lg:w-1/2 bg-cover rounded-l-lg"><img class="max-w-[70%] m-auto h-auto" src="../Images/user/Scenes05.svg"></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">Մոռացել եք Ձեր գաղտնաբառը?</h3>
							<p class="mb-4 text-sm text-gray-700">       
                                Պարզապես մուտքագրեք ձեր էլփոստի հասցեն ստորև, և մենք ձեզ կուղարկենք
                                 հղում՝ ձեր գաղտնաբառը վերականգնելու համար:
							</p>
						</div>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                   էլեկտրոնային հասցե
								</label>
								<label class="mb-2 block text-red-600">{{error}}</label>
								<input v-model="email"
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Enter Email Address..."/>
							</div>
							<div class="mb-6 text-center">
								<button @click="resetPassword"
									class="w-full  px-4 py-2 text-[13px] sm:text-[15px] font-bold text-white bg-[#4ab749] rounded hover:bg-green-300 transition-all focus:outline-none focus:shadow-outline"
									type="button"
								>				
                                Վերականգնել գաղտնաբառը
								</button>
							</div>
							<hr class="mb-6 border-t" />
		
						</form>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import firebase from 'firebase/compat/app'
import { useToast } from 'vue-toastification';
export default {
    data() {
  return {
    email: "",
    error: null,
    emailSending: false,
  };
},
setup(){
	const success = () => useToast().success('Հաղորդագրությունը ուղարկված է!')
	return {success}  
},
methods:{
	resetPassword() {
  if (!this.email) {
    this.error = "Խնդրում ենք մուտքագրել էլ հասցե";
    return;
  }
  this.error = null;
  this.emailSending = true;
  firebase
    .auth()
    .sendPasswordResetEmail(this.email)
    .then(() => {
	this.success();
	this.email = ''
    })
    .catch(error => {
      this.emailSending = false;
      this.error = 'օգտատերը չի գտնվել';
    });
}
}
}
</script>
<style lang="">
    
</style>