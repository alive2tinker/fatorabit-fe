<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ $t('Change Language') }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="space-y-3">
      <div @click="changeLanguage('ar')" :class="{'bg-white w-full py-4 px-2 rounded-md border-2':true,'border-teal-500':this.$i18n.locale === 'ar'}">العربية</div>
      <div @click="changeLanguage('en')" :class="{'bg-white w-full py-4 px-2 rounded-md border-2':true,'border-teal-500':this.$i18n.locale === 'en'}">English</div>
    </div>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  data() {
    return {
      content: "Content",
    };
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  methods:{
      changeLanguage(nuLocale){
          this.$i18n.locale = nuLocale
          document.body.setAttribute('dir', this.$i18n.locale === 'ar' ? 'rtl' : 'ltr')
      }
  }
});
</script>
