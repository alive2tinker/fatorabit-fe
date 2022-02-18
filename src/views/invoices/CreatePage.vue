<template>
  <app-layout :title="$t('New Invoice')">
    <div class="h-full flex" v-if="loading">
      <div class="m-auto">
        <spinner-component />
      </div>
    </div>
    <div v-else>
      <p class="text-teal-500">
        {{ $t("step {step}", { step: currentStep + 1 }) }}
      </p>
      <h1 class="-mt-1 py-1.5">{{ $t(steps[currentStep]) }}</h1>
      <div class="py-2 space-y-3">
        <template v-if="currentStep === 0">
          <input
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.title.$error,
            }"
            :placeholder="$t('Invoice Title')"
            v-model="form.title"
          />
          <select
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.customerId.$error,
            }"
            :placeholder="$t('Invoice Title')"
            v-model="form.customerId"
          >
          <option value="">{{ $t('Choose') }}</option>
          <option v-for="(customer, index) in customers" :key="index" :value="customer">{{ customer.name }}</option>
          </select>
          <div v-if="form.customerId === 'new'">
            <input
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.customer.name.$error,
            }"
            :placeholder="$t('Customer Name')"
            v-model="form.customer.name"
          />
          <input
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.customer.address.$error,
            }"
            :placeholder="$t('Customer address')"
            v-model="form.customer.address"
          />
          <input
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.customer.phone.$error,
            }"
            :placeholder="$t('Customer phone')"
            v-model="form.customer.phone"
          />
          </div>
          <h6>{{ $t("Terms and conditions of the invoice") }}</h6>
          <select
            v-model="form.noteId"
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.noteId.$error,
            }"
          >
            <option value="">{{ $t("Choose") }}</option>
            <option v-for="(note, index) in notes" :key="index">
              {{ note.title }}
            </option>
            <option value="new">{{ $t("New") }}</option>
          </select>
          <input
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.note.title.$error,
            }"
            :placeholder="$t('Note Title')"
            v-model="form.note.title"
            v-if="form.noteId === 'new'"
          />
          <textarea
            :class="{
              'w-full py-2 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
              'border-red-500': v$.form.note.description.$error,
            }"
            v-if="form.noteId === 'new'"
            :placeholder="$t('Note details')"
            v-model="form.note.description"
          ></textarea>
        </template>
        <template v-if="currentStep === 1">
          <div v-if="form.items.length > 0">
            <div
              class="space-y-3"
              v-for="(item, index) in form.items"
              :key="index"
            >
              <div class="grid grid-cols-6 gap-2">
                <div class="col-span-3">
                  <select
                    :class="{
                      'w-full py-3 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
                      'border-red-500': v$.form.note.title.$error,
                    }"
                    :placeholder="$t('Item')"
                    v-model="item.item"
                    @change="updateItem(item)"
                  >
                    <option value="">{{ $t("Choose") }}</option>
                    <option
                      v-for="(item, index) in items"
                      :value="item"
                      :key="index"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div class="col-span-2">
                  <select
                    :class="{
                      'w-full py-3 bg-gray-200 border focus:ring-teal-500 focus:border-teal-500 indent-2 rounded-md': true,
                      'border-red-500': v$.form.note.title.$error,
                    }"
                    :placeholder="$t('QTY')"
                    v-model="item.quantity"
                    @change="updateItem(item)"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div class="col-span-1">
                  <ion-button @click="removeItem(index)" color="danger"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      /></svg
                  ></ion-button>
                </div>
              </div>
            </div>
            <button
              @click="newInvoiceItem"
              class="my-3 text-teal-500 font-semibold"
            >
              {{ $t("New Item") }}
            </button>
          </div>
          <div
            class="w-full border border-gray-300 rounded-xl py-4 mt-12"
            v-else
          >
            <div class="flex justify-center">
              <ion-icon
                class="w-12 h-12 text-gray-400"
                :src="require('@/assets/icons/invoice.svg')"
              />
            </div>
            <h3 @click="newInvoiceItem" class="text-center text-gray-400">
              {{ $t("No Items have been created yet") }}
            </h3>
          </div>
        </template>
        <template v-if="currentStep === 2">
          <table>
            <tr>
              <th class="rtl:text-right">{{ $t("Customer") }}</th>
              <td class="px-4">{{ form.customer.name }}</td>
            </tr>
            <tr>
              <th class="rtl:text-right">{{ $t("Address") }}</th>
              <td class="px-4">{{ form.customer.address }}</td>
            </tr>
            <tr>
              <th class="rtl:text-right">{{ $t("Phone") }}</th>
              <td class="px-4">{{ form.customer.phone }}</td>
            </tr>
          </table>
          <h4>{{ $t("Items") }}</h4>
          <div class="divide-y divide-gray-200">
            <div
              class="flex justify-between py-2"
              v-for="(item, index) in form.items"
              :key="index"
            >
              <div class="">{{ item.item.name }}</div>
              <div class="">{{ item.quantity }}</div>
              <div class="">{{ item.subtotal }}</div>
            </div>
          </div>
          <div class="py-4">
            <table>
              <tr>
                <th class="rtl:text-right">{{ $t("Subtotal") }}</th>
                <td class="px-4">{{ invoiceSubtotal }}</td>
              </tr>
              <tr>
                <th class="rtl:text-right">{{ $t("VAT") }}</th>
                <td class="px-4">{{ invoiceVAT }}</td>
              </tr>
              <tr>
                <th class="rtl:text-right">{{ $t("Total") }}</th>
                <td class="px-4">{{ invoiceTotal }}</td>
              </tr>
            </table>
          </div>
        </template>
        <ion-button expand="block" @click="nextStep">{{
          $t("Next")
        }}</ion-button>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";
import useVuelidate from "@vuelidate/core";
import { IonButton } from "@ionic/vue";
import { required, requiredIf } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { mapActions, mapGetters } from "vuex";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
export default {
  components: { AppLayout, IonButton, SpinnerComponent },
  computed: {
    ...mapGetters({
      items: "items/all",
      notes: "notes/all",
      customers: "customers/all"
    }),
    invoiceSubtotal() {
      return this.form.items.reduce((a, b) => a + b.subtotal, 0);
    },
    invoiceVAT() {
      return this.form.items.reduce((a, b) => a + b.vat, 0);
    },
    invoiceTotal() {
      return this.form.items.reduce((a, b) => a + b.total, 0);
    },
  },
  data() {
    return {
      loading: true,
      currentStep: 0,
      steps: [
        "Invoice & Client Information",
        "Invoice Items",
        "Review & Submit",
      ],
      form: {
        title: "",
        customer: {
          name: "",
          address: "",
          phone: "",
          vatRegistration: "",
        },
        customerId: "",
        noteId: "",
        note: {
          title: "",
          description: "",
        },
        subtotal: 0,
        vat: 0,
        total: 0,
        items: [
          {
            item: "",
            quantity: 1,
            subtotal: 0,
            vat: 0,
            total: 0,
          },
        ],
      },
    };
  },
  mounted() {
    this.fetchNotes();
    this.fetchCustomers();
    this.fetchItems().then(() => {
      this.loading = false;
    });
  },
  methods: {
    nextStep() {
      if (this.currentStep === 0) {
        this.v$.form.title.$touch();
        this.v$.form.customer.name.$touch();
        this.v$.form.customer.address.$touch();
        this.v$.form.customer.phone.$touch();
        this.v$.form.noteId.$touch();
        this.v$.form.note.title.$touch();
        this.v$.form.note.description.$touch();

        if (
          !this.v$.form.title.$error &&
          !this.v$.form.customer.name.$error &&
          !this.v$.form.customer.address.$error &&
          !this.v$.form.customer.phone.$error &&
          !this.v$.form.noteId.$error &&
          !this.v$.form.note.title.$error &&
          !this.v$.form.note.description.$error
        ) {
          this.currentStep++;
        }
      } else if (this.currentStep === 1) {
        this.v$.form.items.$touch();
        if (!this.v$.form.items.$error) {
          this.currentStep++;
        }
      } else if (this.currentStep === 2) {
        this.loading = true;
        this.form.subtotal = this.invoiceSubtotal;
        this.form.vat = this.invoiceVAT;
        this.form.total = this.invoiceTotal;

        this.postInvoice(this.form).then((response) => {
          console.log(response);
          this.loading = false;
          this.router.push({
            name: "invoices.show",
            params: { id: response.data.uuid },
          });
        });
      }
    },
    newInvoiceItem() {
      this.form.items.push({
        item: "",
        quantity: "",
        subtotal: 0,
        vat: 0,
        total: 0,
      });
    },
    removeItem(index) {
      if (this.form.items.length > 1) this.form.items.splice(index, 1);
    },
    updateItem(item) {
      if (item.item !== "" && item.quantity !== "") {
        item.subtotal = item.item.unitPrice * item.quantity;
        item.vat = item.subtotal * 0.15;
        item.total = item.subtotal + item.vat;
      }
    },
    ...mapActions({
      fetchItems: "items/fetchAll",
      postInvoice: "invoices/postInvoice",
      fetchNotes: "notes/fetchAll",
      fetchCustomers: "customers/fetchAll"
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
        customerId: { required },
        title: { required },
        customer: {
          name: { required },
          address: { required },
          phone: { required },
        },
        noteId: { required },
        note: {
          title: {
            required: requiredIf(this.form.noteId === "new"),
          },
          description: { required: requiredIf(this.form.noteId === "new") },
        },
        items: {
          required,
          $each: {
            item: { required },
            quantity: { required },
          },
        },
      },
    };
  },
};
</script>

<style></style>
