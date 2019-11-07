<template>
  <!-- 每日一文卡片 -->
  <div class="card" @click="gotoLink">
    <!-- 文章信息 -->
    <div class="title">{{info.title}}</div>
    <div class="info">
      <div class="author">{{info.author}}</div>
      <div class="tags" v-if="info.tags">
        <span v-for="(item,index) in info.tags" :key="index">{{item}}</span>
      </div>
    </div>
    <!-- 简介&link -->
    <div class="description">{{info.description}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardItem extends Vue {
  @Prop()
  public info: any;
}
</script>

<style lang="scss" scoped>
</style>