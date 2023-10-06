<template>
  <app-layout :title="$t('New Item')">
    <p class="text-sm text-gray-500">
      {{
        $t(
          "here you can create a new item by submitting the details required in this form"
        )
      }}
    </p>
    <div class="py-7 space-y-3">
      <input
        :class="{
          'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
          'border-red-500': v$.form.nameAr.$error,
        }"
        :placeholder="$t('item name in Arabic')"
        v-model="form.nameAr"
      />
      <input
        :class="{
          'w-full py-2 border focus:ring-teal-500 focus:border-teal-500 bg-gray-200 indent-2 rounded-md': true,
          'border-red-500': v$.form.name.$error,
        }"
        :placeholder="$t('item name in English')"
        v-model="form.name"
      />
      <input
        type="number"
        :class="{
          'w-full py-2 border focus:ring-teal-500 focus:border-teal-500 bg-gray-200 indent-2 rounded-md': true,
          'border-red-500': v$.form.unitPrice.$error,
        }"
        :placeholder="$t('item unit price')"
        v-model="form.unitPrice"
      />
      <select
        :class="{
          'w-full py-2 border focus:ring-teal-500 focus:border-teal-500 bg-gray-200 indent-2 rounded-md': true,
          'border-red-500': v$.form.unitPrice.$error,
        }"
        v-model="form.vatInclusive"
      >
        <option value="" selected>
          {{ $t("Choose") }}
        </option>
        <option value="no">
          {{ $t("No") }}
        </option>
        <option value="yes">
          {{ $t("Yes") }}
        </option>
        <option value="inclusive">{{ $t("Vat Exclusive") }}</option>
      </select>
      <ion-button @click="submitForm" expand="block">{{
        $t("Submit")
      }}</ion-button>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { mapActions } from "vuex";
import { IonButton } from "@ionic/vue";
export default {
  components: { AppLayout, IonButton },
  data() {
    return {
      form: {
        nameAr: "",
        name: "",
        unitPrice: "",
        vatInclusive: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.form.nameAr.$touch();
      this.v$.form.name.$touch();
      this.v$.form.unitPrice.$touch();
      this.v$.form.vatInclusive.$touch();
      console.log(!this.v$.form.$anyDirty);
      if (
        !this.v$.form.nameAr.$error &&
        !this.v$.form.name.$error &&
        !this.v$.form.unitPrice.$error &&
        !this.v$.form.vatInclusive.$error
      ) {
        this.postItem(this.form)
          .then(() => {
            this.router.push("/tabs/items");
          })
          .catch((error) => {
            this.$swal.fire("Oops!", error.message, "error");
          });
      }
    },
    ...mapActions({
      postItem: "items/postItem",
    }),
  },
  setup() {
    const router = useRouter();
    return {
      v$: useVuelidate(),
      router,
    };
  },
  validations() {
    return {
      form: {
        nameAr: { required },
        name: { required },
        unitPrice: { required },
        vatInclusive: { required },
      },
    };
  },
};
</script>

<style></style>
