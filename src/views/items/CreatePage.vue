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
          'border-red-500': v$.form.item.name_ar.$error,
        }"
        :placeholder="$t('item name in Arabic')"
        v-model="form.item.name_ar"
      />
      <input
        :class="{
          'w-full py-2 border focus:ring-teal-500 focus:border-teal-500 bg-gray-200 indent-2 rounded-md': true,
          'border-red-500': v$.form.item.name_en.$error,
        }"
        :placeholder="$t('item name in English')"
        v-model="form.item.name_en"
      />
      <input
      type="number"
        :class="{
          'w-full py-2 border focus:ring-teal-500 focus:border-teal-500 bg-gray-200 indent-2 rounded-md': true,
          'border-red-500': v$.form.item.unitPrice.$error,
        }"
        :placeholder="$t('item unit price')"
        v-model="form.item.unitPrice"
      />
      <select :class="{
          'w-full py-2 border focus:ring-teal-500 focus:border-teal-500 bg-gray-200 indent-2 rounded-md': true,
          'border-red-500': v$.form.item.unitPrice.$error,
        }" v-model="form.item.vatInclusive">
        <option value="" selected>
                                                    {{ $t("Choose") }}
                                                </option>
                                                <option value="no">
                                                    {{ $t("No") }}
                                                </option>
                                                <option value="yes">
                                                    {{ $t("Yes") }}
                                                </option>
                                                <option value="inclusive">{{ $t('Vat Exclusive') }}</option>
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
        item: {
          name_ar: "",
          name_en: "",
          unitPrice: "",
          vatInclusive: "",
        },
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.form.item.name_ar.$touch();
      this.v$.form.item.name_en.$touch();
      this.v$.form.item.unitPrice.$touch();
      this.v$.form.item.vatInclusive.$touch();
      console.log(!this.v$.form.item.$anyDirty);
      if (
        !this.v$.form.item.name_ar.$error &&
        !this.v$.form.item.name_en.$error &&
        !this.v$.form.item.unitPrice.$error &&
        !this.v$.form.item.vatInclusive.$error
      ) {
        this.postItem(this.form)
          .then(() => {
            this.router.push('/tabs/items')
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
        item: {
          name_ar: { required },
          name_en: { required },
          unitPrice: { required },
          vatInclusive: { required },
        },
      },
    };
  },
};
</script>

<style></style>
