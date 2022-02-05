<template>
  <ion-page>
    <app-layout :title="'invoices'">
      <ion-content>
        <ion-searchbar></ion-searchbar>
      </ion-content>
    </app-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonSearchbar } from '@ionic/vue';
import AppLayout from './layouts/AppLayout.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: {IonContent, IonPage, AppLayout, IonSearchbar },
  data(){
    return {
      invoices:[]
    }
  }
});
</script>
