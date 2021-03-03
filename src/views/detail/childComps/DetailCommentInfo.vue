<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="commentInfo">
    <div class="info-header">
      <div class="header-title"></div>
      <div class="header-moew">
        更多
        <i class="arrow-right"></i>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <!-- <span class="date">{{ commentInfo.created | showDate }}</span> -->
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img
            :src="item"
            v-for="(intem, index) in commentInfo.images"
            :key="index"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "../../../common/utils";
export default {
  name: "detailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      const time = new Date(value * 1000);
      return formatDate(time);
    }
  }
};
</script>
<style scoped></style>
