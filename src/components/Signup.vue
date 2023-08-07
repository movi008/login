<script setup>
import { ref, reactive } from 'vue'
import {useRouter} from "vue-router"
const router = useRouter()

const fieldData = reactive({
        name : null,
        email : null,
        password : null
    });

const signup = function(e){
   e.preventDefault()
   router.push({ path: '/welcome' });
}
</script>

<template>
<section class="h-screen bg-gray-50 dark:bg-gray-900">
  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <!-- Left column container with background-->
      <div class="hidden md:block  mb-12 md:mb-0 md:w-6/12 lg:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="w-full"
          alt="Phone image" />
      </div>

      <!-- Right column container with form -->

      <div class="md:w-6/12 lg:ml-6 lg:w-5/12">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up for your account
              </h1>
              <form class="space-y-4 md:space-y-6" @submit="signup">
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                      <input type="text" name="name" id="name" v-model="fieldData.name"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jhon doe" required="">
                  </div> 
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your Email </label>
                      <input type="email" name="email" id="email" v-model="fieldData.email"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div> 
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password </label>
                      <input type="password" name="password" id="password" v-model="fieldData.password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required="">
                  </div>     
                  <button type="submit" class="w-full bg-[#172554] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                  <p class="text-sm  font-light text-white ">
                      Already have an account? <a @click="$router.push('/')"  class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                  </p>
                  <br>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                     {{fieldData}}
                  </p>
              </form>
          </div>
      </div>

      
    </div>
  </div>
</section>
</template>

<style scoped>
</style>
