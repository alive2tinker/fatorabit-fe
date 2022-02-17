<template>
  <app-layout :title="$t('invoices')">
    <ion-searchbar
      slot="fixed"
      class=""
      :placeholder="$t('Search')"
      v-model="keyword"
    ></ion-searchbar>
    <div v-if="filteredInvoices.length > 0">
      <stacked-list :data="filteredInvoices" type="invoices"/>
    </div>
    <div class="w-full border border-gray-300 rounded-xl py-4 mt-12" v-else>
      <div class="flex justify-center">
        <ion-icon
          class="w-12 h-12 text-gray-400"
          :src="require('@/assets/icons/invoice.svg')"
        />
      </div>
      <h3 class="text-center text-gray-400">
        {{ $t("No Invoices have been created yet") }}
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
import { mapActions, mapGetters } from "vuex";
import StackedList from '@/components/StackedList.vue'
export default {
  components: { AppLayout, IonFab, IonSearchbar, IonFabButton, IonIcon, StackedList },
  computed: {
    ...mapGetters({
      invoices: "invoices/all",
    }),
    filteredInvoices(){
      if(this.keyword !== ''){
        return this.invoices.filter((s) => s.title.includes(this.keyword));
      }else{
        return this.invoices
      }
    }
  },
  data(){
    return {
      keyword: ''
    }
  },
  mounted() {
    this.fetchInvoices()
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
        alert(error);
      });
  },
  setup() {
    return {
      addOutline,
    };
  },
  methods: {
    ...mapActions({
      fetchInvoices: "invoices/fetchInvoices",
    }),
  },
};
</script>

<style></style>
