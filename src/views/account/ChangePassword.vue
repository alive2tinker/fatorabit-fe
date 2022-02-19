<template>
  <app-layout :title="$t('Change Password')">
    <p class="text-gray-400">
      {{
        $t(
          "Here you can change your current password. if you forgot your current password, please request a new one"
        )
      }}
    </p>
    <div class="py-7 space-y-3">
      <ion-input
        :class="{
          'border border-gray-300 indent-2 focus:border-teal-500': true,
          'border-red-500': false,
        }"
        :placeholder="$t('Current Password')"
        type="password"
        v-model="form.currentPassword"
      ></ion-input>
      <ion-input
        :class="{
          'border border-gray-300 indent-2 focus:border-teal-500': true,
          'border-red-500': false,
        }"
        :placeholder="$t('Password')"
        type="password"
        v-model="form.password"
      ></ion-input>
      <ion-input
        :class="{
          'border border-gray-300 indent-2 focus:border-teal-500': true,
          'border-red-500': false,
        }"
        type="password"
        :placeholder="$t('Password Confirmation')"
        v-model="form.password_confirmation"
      ></ion-input>
    </div>
    <ion-button @click="submitPasswordChange" expand="block">{{
      $t("Submit")
    }}</ion-button>
  </app-layout>
</template>

<script>
import { mapActions } from "vuex";
import AppLayout from "../layouts/AppLayout.vue";
import { IonInput } from "@ionic/vue";
export default {
  components: { AppLayout, IonInput },
  data() {
    return {
      form: {
        currentPassword: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    submitPasswordChange() {
      this.changePassword(this.form)
        .then(() => {
          alert("password changed successfully");
        })
        .catch((error) => {
          alert(error);
        });
    },
    ...mapActions({
      changePassword: "auth/changePassword",
      logout: "auth/logout",
    }),
  },
};
</script>

<style></style>
