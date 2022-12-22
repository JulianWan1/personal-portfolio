<template>
  <div class="project__section-container">
    <div class="project__header">
      Project
    </div>
    <div class="project__image-text-container">
      <div class="project__image-container">
        <img class="project__image" src="../../assets/coinapp-main.jpg" alt="coinapp-main">
      </div>
      <div class="project__texts">
        <div class="project__title">Crypto Portfolio Web App</div>
        <div class="project__desc">
          Buy, sell & keep track of owned cryptocurrencies <br>
          Includes activity logs of each coin <br>
        </div>
        <div class="project__stack">
          Tech Stack: <br>
          Typescript,
          Vue,
          NestJs,
          Postgres,
          Docker
        </div>
        <div class="project__link">
          <a href="https://juliancoinapp.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class ProjectsSection extends Vue{
}
</script>

<style lang="scss" scoped>
.project{

  &__section-container{
    @include sectionContainerDefault();
    @include projectSectionContainerReactive();
    display: flex;
    flex-direction: column;
  }

  &__header{
    @include headerDefault();
    padding-left: 8vw;
    padding-right: 2vw;
  }

  &__image-text-container{
    @include projectImageTextContainerReactive();
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 100px;
    padding: 2vh;
    height: 100%;
    text-align: center;
    background-color:rgba(70, 70, 70, 0.25);
  }

  &__image-container{
    @include projectImageContainerReactive();
    display: flex;
    align-items: center;
    grid-column: 1 / 4;
    grid-row: 1 / 5;
    height: 100%;
  }

  &__image{
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px #1a2f4baa;
  }

  &__texts{
    @include projectTextsContainerReactive();
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2vh;
    grid-column: 4 / 6;
    grid-row: 1 / 5;
    font-size: 1.5vw;
    color: $text-font-color;
  }

  &__title{
    @include projectTitleReactive();
    font-size: 2.5vw;
    align-items: center;
    margin-bottom: 1vh;
    font-weight:700;
    color: $header-font-color;
  }

  &__link{
      align-items: center;
      font-weight: 600;
    a {
      color: rgb(76, 142, 227);
    }
    a:hover {
      color: rgba(76, 142, 227, 0.5);
      transition: color $transition-time-links;
    }
  }

}

</style>