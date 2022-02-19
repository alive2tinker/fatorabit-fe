<template>
  <app-layout :title="$t('contact us')">
    <div class="w-screen h-full flex" v-if="loading">
      <div class="m-auto">
        <spinner-component></spinner-component>
      </div>
    </div>
    <div v-else>
      <p>
        {{
          $t(
            "here you can contact us about any matter concerning your account with fatorabit"
          )
        }}
      </p>
      <div class="py-4 space-y-3">
        <div>
          <label for="full-name" class="sr-only">Full name</label>
          <input
            type="text"
            v-model="form.name"
            id="full-name"
            autocomplete="name"
            :class="{
              'block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md': true,
              'border-red-500': false,
            }"
            :placeholder="$t('Full name')"
          />
          <p class="text-sm text-red-500"></p>
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :class="{
              'block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md': true,
              'border-red-500': false,
            }"
            :placeholder="$t('Email')"
          />
          <p class="text-sm text-red-500"></p>
        </div>
        <div>
          <label for="phone" class="sr-only">Phone</label>
          <input
            type="text"
            v-model="form.phone"
            id="phone"
            autocomplete="tel"
            :class="{
              'block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md': true,
              'border-red-500': false,
            }"
            :placeholder="$t('Phone')"
          />
          <p class="text-sm text-red-500"></p>
        </div>
        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            :class="{
              'block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md': true,
              'border-red-500': false,
            }"
            :placeholder="$t('Message')"
          />
          <p class="text-sm text-red-500"></p>
        </div>
      </div>
      <ion-button @click="submitContact" expand="block">{{
        $t("Submit")
      }}</ion-button>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "./layouts/AppLayout.vue";
import Request from "@/store/modules/Request";
import SpinnerComponent from '@/components/SpinnerComponent.vue';
export default {
  components: { AppLayout, SpinnerComponent },
  data() {
    return {
      loading: false,
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitContact() {
      this.loading = true;
      Request()
        .post("contacts", this.form)
        .then(() => {
          alert("contact request submitted successfully");
          this.loading = false;
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  setup() {
    return {
      Request,
    };
  },
};
</script>

<style></style>
