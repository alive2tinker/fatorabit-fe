<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    document.body.setAttribute('dir', this.$i18n.locale === 'ar' ? 'rtl' : 'ltr')
  },
});
</script>