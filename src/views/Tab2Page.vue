<template>
  <app-layout :title="$t('invoices')">
    <ion-searchbar slot="fixed" class="bg-white" :placeholder="$t('Search')"></ion-searchbar>
    <div v-if="invoices.length > 0"></div>
    <div class="w-full border border-gray-300 rounded-xl py-4 mt-12" v-else>
      <div class="flex justify-center">
        <ion-icon
          class="w-12 h-12 text-gray-400"
          :src="require('@/assets/icons/invoice.svg')"
        />
      </div>
      <h3 class="text-center text-gray-400">
        {{ $t("No Invoices have been created yet")}}
      </h3>
    </div>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </app-layout>
</template>

<script>
import { IonSearchbar, IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import { addOutline } from "ionicons/icons";
import AppLayout from "./layouts/AppLayout.vue";
import { mapGetters } from "vuex";
export default {
  components: { AppLayout, IonFab, IonSearchbar, IonFabButton, IonIcon },
  computed: {
    ...mapGetters({
      invoices: "invoices/all",
    }),
  },
  setup() {
    return {
      addOutline,
    };
  },
};
</script>

<style>
</style>