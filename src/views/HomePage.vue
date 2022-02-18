<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-screen h-screen flex" v-if="loading">
        <div class="m-auto">
          <spinner-component></spinner-component>
        </div>
      </div>
      <div v-else>
        <div class="w-screen h-1/3 rounded-b-2xl py-5 px-2 bg-main">
          <ion-chip>
            <ion-avatar>
              <img
                src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
              />
            </ion-avatar>
            <ion-label class="text-white">{{ user.name }}</ion-label>
          </ion-chip>
          <div class="flex py-1 h-auto">
            <div class="m-auto">
              <h4 class="text-gray-300">{{ $t("Total Invoice Amount") }}</h4>
              <h1 class="text-white text-center -mt-2 text-3xl font-bold">
                {{ invoicesTotal }}
              </h1>
              <h4 class="text-gray-300 text-center -indent-2 -mt-2">
                {{ $t("SAR") }}
              </h4>
            </div>
          </div>
          <div class="flex justify-center">
            <application-logo color="teal-500" />
          </div>
        </div>
        <div class="px-2 flex justify-between">
          <h3 class="text-gray-800">{{ $t("Recent Invoices") }}</h3>
          <ion-button
            fill=""
            class="mt-2"
            @click="() => router.push('/tabs/invoices')"
            >{{ $t("See All") }}</ion-button
          >
        </div>
        <div class="px-2">
          <stacked-list type="invoices" :data="latestInvoices"></stacked-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonButton,
  IonChip,
  IonAvatar,
  IonLabel,
} from "@ionic/vue";
import ApplicationLogo from "@/components/ApplicationLogo.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import StackedList from "@/components/StackedList.vue";
import { useRouter } from "vue-router";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonChip,
    IonAvatar,
    IonLabel,
    ApplicationLogo,
    StackedList,
    SpinnerComponent,
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      invoices: "invoices/all",
      invoicesTotal: "invoices/invoicesTotal",
    }),
    latestInvoices() {
      return this.invoices.slice(0, 4);
    },
  },
  data(){
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions({
      fetchInvoices: "invoices/fetchInvoices",
    }),
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
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
