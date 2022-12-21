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
          <div class="contact__icon-card" v-for="contact of contacts" :key="contact.image">
            <a :href="contact.link" target="_blank" rel="noopener noreferrer">
              <img class="contact__icon-image" :src="require(`../../assets/${contact.image}.png`)" alt="contact-icon">
            </a>
            <div class="contact__icon-desc">{{contact.description}}</div>
          </div>
          <div class="contact__icon-card-discord">
            <img class="contact__icon-image-discord" :src="require(`../../assets/discord.png`)" alt="contact-icon">
            <div class="contact__icon-desc">{{discordUsername}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { GMAIL_ADDRESS, LINKEDIN_URL, DISCORD_USERNAME } from '../../config/.env.config'
import { Contacts } from '../../models/contact.model'

@Component({})
export default class ContactSection extends Vue{

  contacts: Contacts[] = [
    {
      image:`gmail`,
      link:`mailto:${GMAIL_ADDRESS}`,
      linkExists: true,
      description: 'Gmail'
    },
    {
      image:`linkedin`,
      link:`${LINKEDIN_URL}`,
      linkExists: true,
      description: 'LinkedIn'
    },
  ]

  discordUsername = DISCORD_USERNAME;

}
</script>

<style lang="scss" scoped>

.contact{

  &__section-container{
    @include sectionContainerDefault();
    @include contactSectionContainerReactive();
  }

  &__text-container{
    @include textContainerDefault();
  }

  &__header{
    @include headerDefault();
  }

  &__texts{
    font-size: calc(1.5vh + 1.5vw);
    margin-top: 2vh;
  }

  &__links-container{
    @include contactLinksContainerReactive();
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10vh;
    padding-right: 6vw;
  }

  &__icon-card{
    @include contactIconCardReactive();
  }

  &__icon-image{
    @include contactIconImageReactive();
    &:hover{
      opacity: 0.5;
      transition: opacity $transition-time-links;
    }
  }

  &__icon-card-discord{
    @include contactIconCardReactive();
  }

  &__icon-image-discord{
    @include contactIconImageReactive();
  }

  &__icon-desc{
    text-align: center;
    font-size: calc(1vh + 1vw);;
  }

}

</style>