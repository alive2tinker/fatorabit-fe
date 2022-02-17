<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="handleChange"> 
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
            <ion-icon :src="require('@/assets/icons/home.svg')" />
            <span class="w-3 h-1 rounded bg-teal-500" v-if="selectedTab === 'tab1'"></span>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/invoices">
          <ion-icon :src="require('@/assets/icons/invoice.svg')" />
          <span class="w-3 h-1 rounded bg-teal-500" v-if="selectedTab === 'tab2'"></span>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/items">
          <ion-icon :src="require('@/assets/icons/items.svg')" />
          <span class="w-3 h-1 rounded bg-teal-500" v-if="selectedTab === 'tab3'"></span>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/settings">
          <ion-icon :src="require('@/assets/icons/settings.svg')" />
          <span class="w-3 h-1 rounded bg-teal-500" v-if="selectedTab === 'tab4'"></span>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data(){
    return {
      selectedTab: 'tab1'
    }
  },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  },
  methods: {
    handleChange(e){
      this.selectedTab = e.tab;
    }
  }
});
</script>
