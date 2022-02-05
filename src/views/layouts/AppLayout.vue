<template>
  <div>
    <div class="w-screen h-32 bg-main">
      <ion-header>
        <ion-toolbar style="--background:none; color:white">
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title class="text-center">{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
    </div>
    <div class="rounded-t-2xl -mt-4 w-screen h-screen bg-gray-100">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
export default {
  props: ["title"],
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
  },
};
</script>

<style>
</style>