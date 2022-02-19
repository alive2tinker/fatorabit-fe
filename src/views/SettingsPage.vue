<template>
  <app-layout :title="$t('settings')">
    <ion-list-header>
      <ion-label>{{ $t('Account') }}</ion-label>
    </ion-list-header>
    <ion-list>
      <ion-item class="space-x-3" @click="() => router.push({name: 'account.update'})">
        <ion-icon :icon="personOutline"></ion-icon><ion-label>{{ $t('Update Account') }}</ion-label>
      </ion-item>
      <ion-item @click="() => router.push({name: 'account.changePassword'})" class="space-x-2">
        <ion-icon :icon="shieldOutline"></ion-icon> <ion-label>{{ $t('Change Password') }}</ion-label>
      </ion-item>
      <ion-item @click="openLanguageModal" class="space-x-2">
        <ion-icon :icon="globeOutline"></ion-icon> <ion-label>{{ $t('Change Language') }}</ion-label>
      </ion-item>
      <ion-item @click="submitLogout" class="text-red-700">
        <ion-icon :icon="logOutOutline"></ion-icon><ion-label>{{ $t('Logout') }}</ion-label>
      </ion-item>
    </ion-list>
  </app-layout>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
import { IonList, IonItem, IonLabel, IonListHeader, IonIcon, modalController } from "@ionic/vue";
import { shieldOutline, logOutOutline, notificationsOutline,globeOutline, walletOutline,personOutline } from 'ionicons/icons'
import { useRouter } from 'vue-router';
import { mapActions } from 'vuex';
import Modal from '@/components/ModalComponent'
export default {
  components: { AppLayout, IonList, IonItem, IonLabel, IonListHeader, IonIcon },
  setup(){
    const router = useRouter();
    return {
      shieldOutline,
      logOutOutline, notificationsOutline, walletOutline,personOutline,globeOutline,
      router
    }
  },
  methods:{
    submitLogout(){
      this.logout().then(() => {
        this.router.push('/')
      })
    },
    async openLanguageModal(){
      const modal = await modalController
        .create({
          component: Modal,
          initialBreakpoint: 0.5,
          breakpoints: [0, 0.5, 1]
        })
      return modal.present();
    },
    ...mapActions({
      logout: 'auth/logout'
    })
  }
};
</script>

<style>
</style>