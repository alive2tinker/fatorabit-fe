<template>
  <ion-page :dir="this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <ion-content fullscreen class="ion-padding">
        <div class="w-screen py-10"></div>
      <application-logo color="teal-500"/>
      <ion-header collapse="condense" class="mt-24">
        <ion-toolbar>
          <ion-title size="large" class="text-gray-800">{{
            $t("Sign In")
          }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="py-4 space-y-2">
        <ion-input
        type="email"
          class="border border-gray-300 indent-2"
          :placeholder="$t('Email')"
          v-model="form.email"
        ></ion-input>
        <ion-input
          type="password"
          class="border border-gray-300 indent-2"
          :placeholder="$t('Password')"
          v-model="form.password"
        ></ion-input>
        <button
          @click="() => router.push('/forgot-pass')"
          class="text-teal-500 py-4"
        >
          {{ $t("Forgot Password") }}
        </button>
      </div>
      <button
        class="w-full bg-teal-500 text-white py-3 rounded"
        @click="submitLogin"
      >
        {{ $t("Sign In") }}
      </button>
      <button
        @click="() => router.push('/register')"
        class="text-center text-teal-500 my-4 py-3 w-full"
      >
        {{ $t("You don’t have an account? Sign up") }}
      </button>
    </ion-content>
  </ion-page>
</template>

<script>
import ApplicationLogo from "@/components/ApplicationLogo.vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { mapActions } from "vuex";

export default {
  components: {
    ApplicationLogo,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonContent,
    IonInput,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        device_name: "",
      },
      responseErrors: "",
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    submitLogin() {
      this.form.device_name = `${this.form.email.split("@")[0]}-${Date.now()}`;
      this.login(this.form)
        .then(() => {
          this.router.push("/tabs/home");
        })
        .catch(() => {
          alert('something went wrong')
        });
    },
    ...mapActions({
      login: "auth/login",
    }),
  },
};
</script>

<style>
</style>