<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="my-10">
        <template v-if="currentStep === 0">
        <img :src="LanguageIllustration" alt="" />
        <h1 class="text-center text-gray-800 font-bold">
          {{ $t("Choose Language") }}
        </h1>
        <div class="py-5 space-y-2">
          <ion-button @click="setLanguage('ar')" expand="block" :fill="language === 'ar' ? 'solid':'outline'"
            >العربية</ion-button
          >
          <ion-button @click="setLanguage('en')" expand="block" :fill="language === 'en' ? 'solid':'outline'"
            >English</ion-button
          >
        </div>
      </template>
      <template v-if="currentStep === 1">
        <div class="flex justify-center">
          <div class="rounded-full w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-500 text-center flex justify-center pt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-12 w-12 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
          </div>
        </div>
        <div class="bg-gray-100 w-full min-h-20 py-3 -mt-5 px-2">
          <h1 class="text-center text-gray-700 text-2xl font-bold">{{ $t('Electronic Invoicing') }}</h1>
          <p class="text-center">{{ $t('Electronic invoicing will be applied in two phases, the first phase “issuance phase” will be applied from December 4, 2021 AD to all taxpayers registered in VAT (excluding taxpayers who are not residing in the Kingdom) and whoever acts on behalf of the taxpayer to issue the invoice. Issuing electronic invoices will be similar to issuing invoices today, but through a compatible electronic billing system and the invoice will include all the required items based on the type of invoice') }}</p>
        </div>
      </template>
      <template v-if="currentStep === 2">
        <div class="flex justify-center">
          <div class="rounded-full w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-500 text-center flex justify-center pt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-12 w-12 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>  
          </div>
        </div>
        <div class="bg-gray-100 w-full min-h-20 py-3 -mt-5 px-2">
          <h1 class="text-center text-gray-700 text-2xl font-bold">{{ $t('Powerful API') }}</h1>
          <p class="text-center">{{ $t('You can integrate your existing systems with our system via our powerful and full blown API. terms and conditions apply') }}</p>  
        </div>
      </template>
      <template v-if="currentStep === 3">
        <div class="flex justify-center">
          <div class="rounded-full w-24 h-24 bg-gradient-to-r from-teal-500 to-cyan-500 text-center flex justify-center pt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-12 w-12 text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
          </div>
        </div>
        <div class="bg-gray-100 w-full min-h-20 py-3 -mt-5 px-2">
          <h1 class="text-center text-gray-700 text-2xl font-bold">{{ $t('Database Backups') }}</h1>
          <p class="text-center">{{ $t('We have backups every hour to ensure that there is nothing lost.') }}</p>  
        </div>
      </template>
      </div>
    </ion-content>
    <ion-footer
      class="ion-no-border"
      style="--background: #ffffff"
      collapse="fade"
    >
      <ion-toolbar>
        <div class="flex justify-between py-4 px-2">
          <div class="flex w-screen mt-5">
            <div
              :class="{
                'h-4 mx-2 bg-teal-500 rounded-full': true,
                'w-12': currentStep === 0,
                'w-4': currentStep !== 0,
              }"
            ></div>
            <div
              :class="{
                'h-4 mx-2 bg-teal-500 rounded-full': true,
                'w-12': currentStep === 1,
                'w-4': currentStep !== 1,
              }"
            ></div>
            <div
              :class="{
                'h-4 mx-2 bg-teal-500 rounded-full': true,
                'w-12': currentStep === 2,
                'w-4': currentStep !== 2,
              }"
            ></div>
            <div
              :class="{
                'h-4 mx-2 bg-teal-500 rounded-full': true,
                'w-12': currentStep === 3,
                'w-4': currentStep !== 3,
              }"
            ></div>
          </div>
          <div class="w-1/2">
            <ion-button @click="nextStep" expand="block">{{
              $t("Next")
            }}</ion-button>
          </div>
        </div>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonFooter, IonToolbar, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import LanguageIllustration from "@/assets/images/language-illustration.jpg";
import {useRouter} from 'vue-router';
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonFooter,
    IonToolbar,
    IonButton
  },
  data() {
    return {
      currentStep: 0,
      language: "ar",
    };
  },
  methods: {
    nextStep() {
      if (this.language === "") 
        alert("you must choose language");
      else if (this.currentStep === 4)
         this.router.push("/tabs/tab1");
      else
        this.currentStep++;
    },
    setLanguage(newLocale) {
      this.language = newLocale;
      this.$i18n.locale = newLocale;
    },
  },
  setup() {
    const router = useRouter();
    return {
      LanguageIllustration,
      router
    };
  },
});
</script>

<style></style>
