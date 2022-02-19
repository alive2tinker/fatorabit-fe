<template>
  <ion-page>
    <ion-content fullscreen>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonRouterOutlet, IonPage, IonContent } from '@ionic/vue';
export default {
components: {
        IonRouterOutlet,
        IonPage,
        IonContent
    }
}
</script>

<style>

</style>