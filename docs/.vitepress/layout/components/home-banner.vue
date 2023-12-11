<script setup>
import { useHomeBanner } from "../use-case";
import { inject } from "vue";
const globalName = inject('$data')
const { title, subTitle, description, inspiring } = useHomeBanner()
import { useData } from "vitepress";
console.log(globalName, 'bbbb')
</script>

<template>
  <div id="home-banner" class="container">
    <h1>
      <span class="name">{{ title }}</span>
      <span class="motto">{{ subTitle }}</span>
    </h1>
    <div class="inspiring-wrapper">
      <div>{{ inspiring }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home-banner{
  padding: 60px 0;
  h1 {
    text-align: center;
    .name {
      transition: all 0.25s ease-in-out 0.04s;
      transform: translateY(0px);
      opacity: 1;
      font-weight: bold;
      margin: 0 auto;
      font-size: 36px;
    }

    .motto {
      position: relative;
      bottom: 0;
      font-size: 14px;
      margin-left: 10px;

      &::before {
        content: '- ';
      }
    }
  }
  .inspiring-wrapper {
    margin: 16px 0;
    height: 24px;
    width: auto;

    div {
      cursor: pointer;
      text-align: center;
      font-size: 20px;
      line-height: 1.6;
      user-select: none;
    }
  }
}
</style>