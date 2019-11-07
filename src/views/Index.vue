<template>
  <div class="index-page">
    <!-- 抬头 -->
    <div class="header"></div>
    <!-- 每日一文卡片 -->
    <div class="card" @click="gotoLink">
      <!-- 文章信息 -->
      <div class="title">{{response.title}}</div>
      <div class="info">
        <div class="author">{{response.author}}</div>
        <div class="tags" v-if="response.tags">
          <span v-for="(item,index) in response.tags" :key="index">{{item}}</span>
        </div>
      </div>
      <!-- 简介&link -->
      <div class="description">{{response.description}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchGet } from "../http/request";

@Component
export default class Index extends Vue {
  private response = {
    title: "",
    author: "",
    tags: [],
    description: "",
    link: ""
  };
  private created() {
    this._getArticle();
  }

  private _getArticle() {
    fetchGet("getArticleApi", {}).then((res: any) => {
      if (res.returnCode * 1 !== 0) {
        console.log("err code");
      } else {
        this.response = res.data;
      }
    });
  }

  private gotoLink() {
    console.log("跳转");
    // window.location.href = this.response.link;
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  text-align: center;
}
</style>