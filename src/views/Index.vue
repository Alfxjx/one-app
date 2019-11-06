<template>
  <div class="index-page">this is one-app web-client</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchRequest } from "../http/request";

@Component
export default class Index extends Vue {
  created() {
    // fetchRequest({method:'get',url:'/mock/getArticle.json'}).then((res:any)=>{
    //   console.log(res.data);
    // });
  }
}
</script>

<style lang="scss">
.index-page {
  text-align: center;
}
</style>