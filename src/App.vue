<template>
  <ion-app>
    <ion-router-outlet :key="router.path"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created(){
    document.body.setAttribute('dir', this.$i18n.locale === 'ar' ? 'rtl' : 'ltr')
  },
  setup(){
    const router = useRouter();
    return {
      router
    }
  }
});
</script>
