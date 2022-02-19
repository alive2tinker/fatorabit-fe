<template>
  <app-layout :title="$t('items')">
    <ion-searchbar v-model="keyword" slot="fixed" :placeholder="$t('Search')"></ion-searchbar>
    <div v-if="filteredItems.length > 0">
      <stacked-list type="items" :data="filteredItems" />
    </div>
    <div class="w-full border border-gray-300 rounded-xl py-4 mt-12" v-else>
      <div class="flex justify-center">
        <ion-icon
          class="w-12 h-12 text-gray-400"
          :src="require('@/assets/icons/invoice.svg')"
        />
      </div>
      <h3 class="text-center text-gray-400">
        {{ $t('No Items have been created yet')}}
      </h3>
    </div>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="() => router.push({name: 'items.create'})">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    </app-layout>
</template>

<script>
import { IonSearchbar, IonIcon, IonFab, IonFabButton } from '@ionic/vue';
import { addOutline } from 'ionicons/icons'
import AppLayout from './layouts/AppLayout.vue'
import { mapActions, mapGetters } from 'vuex';
import StackedList from '@/components/StackedList.vue'
import { useRouter } from 'vue-router';
export default {
  components: { AppLayout, IonSearchbar, IonIcon, IonFab, IonFabButton, StackedList },
  setup(){
    const router = useRouter();
    return {
      addOutline,
      router
    }
  },
  computed:{
    filteredItems(){
      if(this.keyword !== ''){
        return this.items.filter((s) => s.name.includes(this.keyword));
      }else{
        return this.items;
      }
    },
    ...mapGetters({
      items: 'items/all'
    })
  },
  data(){
    return {
      keyword: '',
      loading: true
    }
  },
  mounted(){
    this.fetchItems().then(() => {
      this.loading = false;
    }).catch((error) => {
      alert(error);
    })
  },
  methods: {
    ...mapActions({
      fetchItems: 'items/fetchAll',
    })
  }
}
</script>

<style>

</style>