<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-screen h-1/3 rounded-b-2xl py-5 px-2 bg-main">
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <span
              class="h-6 w-6 rounded-full text-white text-center bg-indigo-500"
              >A</span
            >
            <p class="text-white">Abdulmalik Alsufayran</p>
          </div>
        </div>
        <div class="flex py-7 h-auto">
          <div class="m-auto">
            <h4 class="text-gray-300">Total Invoice Amount</h4>
            <h1 class="text-white text-center -mt-2 text-3xl font-bold">
              10000
            </h1>
            <h4 class="text-gray-300 text-center -indent-2 -mt-2">SAR</h4>
          </div>
        </div>
        <div class="flex justify-center"><application-logo /></div>
      </div>
      <div class="px-2 flex justify-between">
        <h3 class="text-gray-800">Recent Invoices</h3>
        <ion-button fill="" class="mt-2" @click="() => router.push('/tabs/tab2')">See All</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import ApplicationLogo from "@/components/ApplicationLogo.vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "Tab1Page",
  components: { IonContent, IonPage, IonButton, ApplicationLogo },
  setup(){
    const router = useRouter();
    return {
      router
    }
  }
});
</script>
