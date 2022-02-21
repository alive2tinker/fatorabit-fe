<template>
  <app-layout :title="invoice.title">
    <div
      class="w-screen h-screen fixed bg-gray-200 bg-opacity-10 flex"
      v-if="loading"
    >
      <div class="m-auto">
        <spinner-component></spinner-component>
      </div>
    </div>
    <div v-else>
      <h4 class="font-semibold text-center text-lg">
        {{ invoice.customer.name }}
      </h4>
      <h5 class="text-lg text-center font-medium text-gray-400">
        {{ invoice.customer.phone }}
      </h5>
      <h5 class="text-lg text-center font-medium text-gray-400">
        {{ invoice.customer.address }}
      </h5>
      <div class="h-24 flex border-b border-t border-gray-300">
        <div class="m-auto">
          <h5 class="text-center">{{ $t("Simplified TAX Invoice") }}</h5>
          <h5 class="text-center">{{ $t('VAT Number: {vatNumber}', {vatNumber: invoice.user.vatRegistration }) }}</h5>
        </div>
      </div>
      <ul class="divide-y border-b border-gray-300 divide-gray-300">
        <li v-for="(item, index) in invoice.items" :key="index">
          <div class="flex justify-between">
            <div>
              <h6>{{ item.item.name }}</h6>
              <h6>{{ item.item.name_ar }}</h6>
            </div>
            <div>
              <h6>{{ item.quantity }}</h6>
            </div>
            <div>
              <h6>{{ item.total }}</h6>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex justify-between">
        <h3 class="font-bold">{{ $t("Subtotal") }}</h3>
        <h3 class="font-bold">{{ invoice.subtotal }}</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="font-bold">{{ $t("VAT") }}</h3>
        <h3 class="font-bold">{{ invoice.vatTotal }}</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="font-bold">{{ $t("Total") }}</h3>
        <h3 class="font-bold">{{ invoice.total }}</h3>
      </div>
      <div class="flex justify-center mt-10">
        <div class="flex justify-between w-56">
          <div
            class="border-t-4 rtl:border-r-4 ltr:border-l-4 border-teal-500 rtl:rounded-tr-xl ltr:rounded-tl-xl w-12 h-12"
          ></div>
          <div
            class="border-t-4 rtl:border-l-4 ltr:border-r-4 border-teal-500 rtl:rounded-tl-xl ltr:rounded-tr-xl w-12 h-12"
          ></div>
        </div>
      </div>
      <div class="flex justify-center -mt-10">
        <img :src="invoice.qrcode" alt="" />
      </div>
      <div class="flex justify-center -mt-10">
        <div class="flex justify-between w-56">
          <div
            class="border-b-4 rtl:border-r-4 ltr:border-l-4 border-teal-500 rtl:rounded-br-xl ltr:rounded-bl-xl w-12 h-12"
          ></div>
          <div
            class="border-b-4 rtl:border-l-4 ltr:border-r-4 border-teal-500 rtl:rounded-bl-xl ltr:rounded-br-xl w-12 h-12"
          ></div>
        </div>
      </div>
      <p class="mt-10 text-gray-400">{{ invoice.note.body }}</p>
    </div>
  </app-layout>
</template>

<script>
import { mapActions } from "vuex";
import AppLayout from "../layouts/AppLayout.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
export default {
  components: {
    AppLayout,
    SpinnerComponent,
  },
  data() {
    return {
      invoice: "",
      loading: true,
    };
  },
  mounted() {
    this.fetchInvoice(this.$route.params.id)
      .then((response) => {
        this.invoice = response.data.data;
        this.loading = false;
      })
      .catch(() => {
        alert("something went wrong");
      });
  },
  methods: {
    ...mapActions({
      fetchInvoice: "invoices/fetchInvoice",
    }),
  },
};
</script>

<style></style>
