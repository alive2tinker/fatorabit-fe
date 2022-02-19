<template>
  <ion-page>
    <div class="h-32 w-screen bg-main">
      <ion-header class="mt-7">
        <ion-toolbar style="--background: none; color: white">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
    </div>
    <div class="w-screen h-full rounded-t-xl overflow-hidden -mt-4">
      <ion-content class="ion-padding">
        <slot></slot>
      </ion-content>
    </div>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButtons,
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { useRouter } from 'vue-router';
export default {
  props: ["title"],
  components: {
    IonPage,
    IonContent,
    IonButtons,
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
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
