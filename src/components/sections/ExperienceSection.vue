<template>
  <div class="experience__section-container">
    <div class="experience__text-container">
      <div class="experience__header">
        Experience
      </div>
      <div class="experience__contents">
        <p class="experience__texts">
          Develop front-end & back-end for both new & existing client apps<br>
          Maintained code & quickly fix bugs when detected<br><br>
        </p>
        <div class="experience__tech-stack-header">
          Tech stack:
        </div>
        <div class="experience__tech-stack-container">
          <div class="experience__tech-icon-card" v-for="tech of technologies" :key="tech.name">
            <img class="experience__tech-icon-image" :src="require(`../../assets/${tech.image}.png`)" alt="tech-icon">
            <div class="tech-icon-desc">{{tech.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Technologies } from '../../models/experience.model'

@Component({})
export default class ExperienceSection extends Vue{

  iconDirectory = '../../assets/';

  technologies: Technologies[] = [
    {
      name: 'TypeScript',
      image:`typescript`
    },
    {
      name: 'Vue',
      image:`vuejs`
    },
    {
      name: 'NestJs',
      image:`nestjs`
    },
    {
      name: 'Postgres',
      image:`postgres`
    },
    {
      name: 'Docker',
      image:`docker`
    },
    {
      name: 'Github',
      image:`github`
    },
    {
      name: 'Ubuntu',
      image:`ubuntu`
    },
    {
      name: 'Linode',
      image:`linode`
    },
    {
      name: 'AWS',
      image:`aws`
    },
  ]

}
</script>

<style lang='scss' scoped>
.experience{

  &__section-container{
    @include sectionContainerDefault();
    @include experienceSectionContainerReactive();
  }

  &__text-container{
    @include textContainerDefault();
  }

  &__header{
    @include headerDefault();
  }

  &__contents{
    font-size: calc(1.5vh + 1.5vw);
    margin-top: 2vh;
  }

  &__texts{
    font-size: calc(1.25vh + 1.25vw);
  }

  &__tech-stack-header{
    @include experienceTechStackHeaderReactive();
    font-size: calc(1.25vh + 1.25vw);
    color: $text-font-color;
  }

  &__tech-stack-container{
    @include experienceTechStackContainer();
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    flex-wrap: wrap;
    padding-right: 6vw;
    margin-top: 2vh;
    font-size: calc(0.6vh + 0.6vw);
  }

  &__tech-icon-card{
    @include experienceTechIconCard();
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 4px;
    height: 15vh;
    width: 15vh;
  }

  &__tech-icon-image{
    @include experienceTechIconImage();
    height: 10vh;
    width: 10vh;
    background-color: rgba(70, 70, 70, 0.5);
    border-radius: 10px;
    padding: calc(0.5vh + 0.5vw);
    box-shadow: 0px 0px 4px 1px rgba(70, 70, 70, 0.85)
  }

}

</style>