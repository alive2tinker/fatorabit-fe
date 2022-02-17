<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ul role="list" class="divide-y divide-gray-200 mt-14 bg-white">
    <li v-for="item in data" :key="item.id" class="py-4 px-2 flex">
      <a @click="goToResource(item)">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ item.title }}</p>
          <p class="text-sm text-gray-500">{{ item.total }}</p>
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
    type: Object,
  },
  methods: {
      goToResource(item){
          alert('hello')
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
