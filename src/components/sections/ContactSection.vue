<template>
  <div class="contact__section-container">
    <div class="contact__text-container">
      <div class="contact__header">
        Contact
      </div>
      <div class="contact__texts">
        <div>
          Let's get connected!
        </div>
        <div class="contact__links-container">
          <a
            class="contact__icon-card"
            v-for="contact of contacts"
            :key="contact.image"
            :href="contact.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="contact__icon-image" :src="require(`../../assets/${contact.image}.png`)" alt="contact-icon">
            <div class="contact__icon-desc">{{contact.description}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { GMAIL_ADDRESS, LINKEDIN_URL } from '../../config/.env.config'
import { Contacts } from '../../models/contact.model'

@Component({})
export default class ContactSection extends Vue{

  contacts: Contacts[] = [
    {
      image:`gmail`,
      link:`mailto:${GMAIL_ADDRESS}`,
      description: 'Gmail'
    },
    {
      image:`linkedin`,
      link:`${LINKEDIN_URL}`,
      description: 'LinkedIn'
    },
    {
      image:`github`,
      link:`https://github.com/JulianWan1`,
      description: 'GitHub'
    },
  ]

}
</script>

<style lang="scss" scoped>

.contact{

  &__section-container{
    @include sectionContainerDefault();
    @include contactSectionContainerReactive();
    display: flex;
    flex-direction: column;
  }

  &__text-container{
    @include textContainerDefault();
    flex: 1;
  }

  &__header{
    @include headerDefault();
  }

  &__texts{
    font-size: calc(1.5vh + 1.5vw);
    margin-top: 2vh;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__links-container{
    @include contactLinksContainerReactive();
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto 0;
    padding-right: 6vw;
  }

  &__icon-card{
    @include contactIconCardReactive();
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: transform $transition-time-links, background-color $transition-time-links;
    &:hover{
      transform: scale(1.05);
      background-color: rgba(70, 70, 70, 0.4);
    }
  }

  &__icon-image{
    @include contactIconImageReactive();
  }

  &__icon-desc{
    text-align: center;
    font-size: calc(1vh + 1vw);
    word-break: break-all;
  }

}

</style>