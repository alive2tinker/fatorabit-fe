<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul role="list" class="divide-y divide-gray-200 mt-14 bg-white">
    <li v-for="item in data" :key="item.id" class="py-4 px-2 flex">
      <a @click="goToResource(item)">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ type === 'invoices' ? item.title : item.name }}</p>
          <p class="text-sm text-gray-500">{{ type === 'invoices' ? item.total : item.unitPrice }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  props: {
    data: Object,
    type: String,
  },
  methods: {
      goToResource(item){
          if(this.type === 'invoices'){
              this.router.push({name:'invoices.show', params:{id: item.uuid}})
          }
      }
  },
  setup(){
      const router = useRouter();
      return {
          router
      }
  }
};
</script>
