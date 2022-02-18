<template>
  <app-layout :title="$t('Update Account')">
    <div class="w-full h-full flex" v-if="loading">
      <div class="m-auto">
        <spinner-component></spinner-component>
      </div>
    </div>
    <div v-else>
      <p class="text-gray-400">{{ $t("accountUpdateKey") }}</p>
      <div class="py-4">
        <div class="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
            :placeholder="$t('your new email')"
            v-model="form.email"
          />
        </div>
        <div class="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
            :placeholder="$t('your new phone number')"
            v-model="form.phone"
          />
        </div>
        <ion-button @click="submitUpdate" expand="block" class="mt-4">{{
          $t("Update Account Details")
        }}</ion-button>
        <ion-button
          fill=""
          expand="block"
          @click="() => router.push({ name: 'contactus' })"
          class="text-green-700 uppercase font-semibold"
          >{{ $t("contact us") }}</ion-button
        >
      </div>
    </div>
  </app-layout>
</template>

<script>
import Request from "@/store/modules/Request";
import AppLayout from "../layouts/AppLayout.vue";
import { useRouter } from "vue-router";
import { IonButton } from "@ionic/vue";
import { mapGetters } from "vuex";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
export default {
  components: { AppLayout, IonButton, SpinnerComponent },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data() {
    return {
      loading: true,
      form: {
        email: "",
        phone: "",
      },
    };
  },
  mounted() {
    this.form.email = this.user.email;
    this.form.phone = this.user.phone;
    this.loading = false;
  },
  methods: {
    submitUpdate() {
      this.loading = true;
      Request()
        .post("update-account", this.form)
        .then((response) => {
          console.log(response);
          this.form.email = response.data.email;
          this.form.phone = response.data.phone;
          alert("updated successfully");
          this.loading = false;
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
      Request,
    };
  },
};
</script>

<style></style>
