<template>
  <app-layout :title="$t('settings')">
    <ion-list-header>
      <ion-label>{{ $t('Account') }}</ion-label>
    </ion-list-header>
    <ion-list>
      <ion-item @click="() => router.push({name: 'account.update'})">
        <ion-icon :icon="personOutline"></ion-icon><ion-label>{{ $t('Update Account') }}</ion-label>
      </ion-item>
      <ion-item class="space-x-2">
        <ion-icon :icon="shieldOutline"></ion-icon> <ion-label>{{ $t('Change Password') }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon :icon="walletOutline"></ion-icon><ion-label>{{ $t('Update Subscription') }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon :icon="notificationsOutline"></ion-icon> <ion-label>{{ $t('Notifications') }}</ion-label>
      </ion-item>
      <ion-item class="text-red-700">
        <ion-icon :icon="logOutOutline"></ion-icon><ion-label>{{ $t('Logout') }}</ion-label>
      </ion-item>
    </ion-list>
  </app-layout>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
import { IonList, IonItem, IonLabel, IonListHeader, IonIcon } from "@ionic/vue";
import { shieldOutline, logOutOutline, notificationsOutline, walletOutline,personOutline } from 'ionicons/icons'
import { useRouter } from 'vue-router';
export default {
  components: { AppLayout, IonList, IonItem, IonLabel, IonListHeader, IonIcon },
  setup(){
    const router = useRouter();
    return {
      shieldOutline,
      logOutOutline, notificationsOutline, walletOutline,personOutline,
      router
    }
  }
};
</script>

<style>
</style>