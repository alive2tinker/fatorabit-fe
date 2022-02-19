<template>
  <ion-page :dir="this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <ion-content fullscreen class="ion-padding">
      <application-logo color="teal-500" />
      <ion-header collapse="condense" class="mt-24">
        <ion-toolbar>
          <ion-title size="large" class="text-gray-800">{{
            $t("Sign Up")
          }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="py-4 space-y-2">
        <div>
          <ion-input
          :class="{'border border-gray-300 indent-2 focus:border-teal-500':true, 'border-red-500': Object.keys(responseErrors).includes('name')}"
          :placeholder="$t('Name')"
          v-model="form.name"
        ></ion-input>
          <p class="text-sm text-red-500 py-2">{{ responseErrors.name ? $t(responseErrors.name[0]) : '' }}</p>
        </div>
        <ion-input
          :class="{'border border-gray-300 indent-2 focus:border-teal-500':true, 'border-red-500': Object.keys(responseErrors).includes('phone')}"
          :placeholder="$t('Phone')"
          v-model="form.phone"
        ></ion-input>
        <ion-input
          type="number"
          :class="{'border border-gray-300 indent-2 focus:border-teal-500':true, 'border-red-500': Object.keys(responseErrors).includes('vatRegistration')}"
          :placeholder="$t('VAT Registration')"
          v-model="form.vatRegistration"
        ></ion-input>
        <ion-input
        type="email"
          :class="{'border border-gray-300 indent-2 focus:border-teal-500':true, 'border-red-500': Object.keys(responseErrors).includes('email')}"
          :placeholder="$t('Email')"
          v-model="form.email"
        ></ion-input>
        <ion-input
          :class="{'border border-gray-300 indent-2 focus:border-teal-500':true, 'border-red-500': Object.keys(responseErrors).includes('password')}"
          :placeholder="$t('Password')"
          type="password"
          v-model="form.password"
        ></ion-input>
        <ion-input
          :class="{'border border-gray-300 indent-2 focus:border-teal-500':true, 'border-red-500': Object.keys(responseErrors).includes('password')}"
          type="password"
          :placeholder="$t('Password Confirmation')"
          v-model="form.password_confirmation"
        ></ion-input>
      </div>
      <button
        class="w-full bg-teal-500 text-white py-3 rounded"
        @click="submitRegistration"
      >
        {{ $t("Sign Up") }}
      </button>
      <button
        @click="() => router.push('/login')"
        class="text-center text-teal-500 my-4 py-3 w-full"
      >
        {{ $t("You have an account? Sign In") }}
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        vatRegistration: '',
        phone: '',
        device_name: 'nuDevice'+Math.random(1,1001010)
      },
      errors: [],
      responseErrors: ''
    };
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    submitRegistration() {
      this.register(this.form).then(() => {
          this.router.push('/tabs/home');
      }).catch((error) => {
        // console.log(error.response.data.errors);
        this.responseErrors = error.response.data.errors;
          alert(error.message);
      })
    },
    ...mapActions({
      register: "auth/register",
    }),
  },
};
</script>

<style>
</style>