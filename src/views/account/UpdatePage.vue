<template>
  <app-layout :title="$t('Update Account')">
    <p class="text-gray-400">{{ $t("accountUpdateKey") }}</p>
    <div class="py-4">
      <div class="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
          :placeholder="$t('your new email')"
        />
      </div>
      <div class="mt-1">
        <input
          type="email"
          name="email"
          id="email"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
          :placeholder="$t('your new phone number')"
        />
      </div>
      <ion-button expand="block" class="mt-4">{{ $t('Update Account Details')}}</ion-button>
      <ion-button fill="" expand="block" @click="() => router.push({name:'contactus'})" class="text-green-700 uppercase font-semibold">{{ $t('contact us')}}</ion-button>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";
import { useRouter } from 'vue-router'
import {IonButton} from '@ionic/vue'
export default {
  components: { AppLayout, IonButton },
  setup(){
    const router = useRouter();
    return {
      router
    }
  }
};
</script>

<style>
</style>
