<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-screen h-1/3 rounded-b-2xl py-5 px-2 bg-main">
        <ion-chip>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-label class="text-white">Abdulmalik Alsufayran</ion-label>
        </ion-chip>
        <div class="flex py-1 h-auto">
          <div class="m-auto">
            <h4 class="text-gray-300">{{ $t('Total Invoice Amount') }}</h4>
            <h1 class="text-white text-center -mt-2 text-3xl font-bold">
              10000
            </h1>
            <h4 class="text-gray-300 text-center -indent-2 -mt-2">{{ $t('SAR') }}</h4>
          </div>
        </div>
        <div class="flex justify-center"><application-logo /></div>
      </div>
      <div class="px-2 flex justify-between">
        <h3 class="text-gray-800">{{ $t('Recent Invoices') }}</h3>
        <ion-button
          fill=""
          class="mt-2"
          @click="() => router.push('/tabs/tab2')"
          >{{ $t('See All') }}</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonButton, IonChip, IonAvatar, IonLabel } from "@ionic/vue";
import ApplicationLogo from "@/components/ApplicationLogo.vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Tab1Page",
  components: { IonContent, IonPage, IonButton, IonChip, IonAvatar, IonLabel, ApplicationLogo },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
