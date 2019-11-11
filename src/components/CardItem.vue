<template>
  <!-- 每日一文卡片 -->
  <div class="card-item" @click="gotoLink" v-if="info">
    <!-- 文章信息 -->
    <div class="info">
      <div class="author">{{info.author}}</div>
      <div class="tags" v-if="info.tags">
        <span v-for="(item,index) in info.tags" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="title">{{info.title}}</div>
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
  private gotoLink() {
    console.log("跳转");
    // window.location.href = this.response.link;
  }
}
</script>

<style lang="scss" scoped>
$hover-color: green;
.card-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e2e3;
  // background: #ea3;
  padding: 1em;
  border-radius: 8px;
  &:hover {
    box-shadow: 1px 1px 10px 5px #e2e4e6;
  }
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .author {
      &:hover {
        color: $hover-color;
      }
    }
    .tags {
      &:hover {
        color: $hover-color;
      }
      span {
        margin-left: 5px;
      }
    }
  }
  .title {
    font-weight: 700;
    line-height: 36px;
    font-size: 18px;
    // 文字溢出显示省略号
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
      color: $hover-color;
    }
  }
  .description {
    text-align: left;
    line-height: 1.2em;
    // 多行文本溢出
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>