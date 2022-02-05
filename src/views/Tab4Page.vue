<template>
  <app-layout :title="$t('settings')">
    <ion-list-header>
      <ion-label>{{ $t('Account') }}</ion-label>
    </ion-list-header>
    <ion-list>
      <ion-item>
        <ion-label>{{ $t('Update Account') }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('Change Password') }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('Update Subscription') }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('Notifications') }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>{{ $t('Logout') }}</ion-label>
      </ion-item>
    </ion-list>
  </app-layout>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
import { IonList, IonItem, IonLabel, IonListHeader } from "@ionic/vue";
export default {
  components: { AppLayout, IonList, IonItem, IonLabel, IonListHeader },
};
</script>

<style>
</style>