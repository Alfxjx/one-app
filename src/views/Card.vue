<template>
  <div class="card-wrapper">
    <ul class="card-list">
      <li class="card" v-for="(item,index) in cards" :key="index" :style="[transform(index)]">
        <!-- <div class="content">{{item}}</div> -->
        <card-item :info="item"></card-item>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardItem from "../components/CardItem.vue";
import { CardStyle, ArticleItem } from "../interface";
import { fetchGet } from "../http/request";

@Component({
  components: {
    CardItem
  }
})
export default class Card extends Vue {
  public cards: ArticleItem[] = [];

  public created() {
    this._getCardList();
  }

  public _getCardList() {
    fetchGet("getArticleApi", {}).then((res: any) => {
      if (res.returnCode * 1 !== 0) {
        // TODO
        console.log("toast:error");
      }
      this.cards = res.data;
    });
  }

  public transform(index: number): any {
    let style: CardStyle = {};
    style.opacity = 0.7;
    style.transform = `translate3D(0,0,${-60 * index}px)`;
    style.zIndex = 5 - index;
    style.transitionTimingFunction = "ease";
    style.transitionDuration = `300ms`;
    return style;
  }
}
</script>

<style lang='scss' scoped>
.card-wrapper {
  width: 320px;
  height: 320px;
  .card-list {
    width: 100%;
    height: 100%;
    perspective: 1000px; //子元素视距
    perspective-origin: 50% 150%; //子元素透视位置
    // -webkit-perspective: 1000px;
    // -webkit-perspective-origin: 50% 150%;
    margin: 0;
    padding: 0;
    position: relative;
    .card {
      background: #ea3;
      border: 1px solid #000;
      height: 100%;
      width: 100%;
      border-radius: 4px;
      text-align: center;
      overflow: hidden;
      position: absolute;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      user-select: none;
      pointer-events: auto;
      .content {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>