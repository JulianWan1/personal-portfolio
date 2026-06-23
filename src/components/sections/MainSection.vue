<template>
  <div class="main__section-container">
    <div class="main__text-container">
      <div class="main__header">
        Julian Wan
      </div>
      <div class="main__texts">
        <div class="main__sub-texts">
          Full-Stack & Cloud Engineer <br />
          {{ this.yearsOfExperience() }} Years of Working Experience <br />
        </div>
        <div class="main__summary-texts">
          I enjoy turning complex systems into clear value for both technical
          and non-technical audiences &mdash;
          now moving into more customer-facing, solutions-focused engineering.<br />
          I work across TypeScript/React, Java/Spring Boot, and AWS, from building
          end-to-end AI agents to migrating enterprise services from on-premises
          to the cloud.<br />
          AWS Certified Solutions Architect &ndash; Associate. Always keen to
          learn, solve real problems, and work with great people along the way.
        </div>
      </div>
    </div>
    <div class="main__image-container">
      <img class="main__image" src="../../assets/macbook-type.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dayjs from "dayjs";
@Component({})
export default class ExperienceSection extends Vue {
  yearsOfExperience = function(): string {
    let initialDay = dayjs("2021-03-01");
    let currentYOE = dayjs().diff(initialDay, "month");
    if (currentYOE % 12 > 10) {
      console.log(dayjs().diff(dayjs(initialDay), "year") + 1);
      return `${dayjs().diff(dayjs(initialDay), "year") + 1}`;
    } else if (currentYOE % 12 > 4 && currentYOE % 12 < 10) {
      return `${dayjs().diff(dayjs(initialDay), "year")}+`;
    } else {
      return `${dayjs().diff(dayjs(initialDay), "year")}`;
    }
  };
}

window.addEventListener("scroll", function() {
  var element = document.querySelector(".main__section-container");
  var rect = element!.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    element!.classList.add("scrolled-to");
  }
});
</script>

<style lang="scss" scoped>
.main {
  &__section-container {
    @include sectionContainerDefault();
    @include mainSectionContainerReactive();
    display: flex;
  }

  &__text-container {
    @include textContainerDefault();
    @include mainTextContainerReactive();
    width: 50vw;
  }

  &__header {
    @include headerDefault();
  }

  &__texts {
    margin-top: 2vh;
  }

	&__sub-texts {
    font-size: calc(1.2vh + 1.25vw);
	}

  &__image-container {
    @include mainImageContainerReactive();
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__image {
    height: auto;
    width: calc(18vw + 16vh);
    margin-bottom: 10vh;
  }

  &__summary-texts {
    @include mainSummaryTextsReactive();
    width: calc(20vh + 20vw);
    font-size: calc(0.8vh + 0.7vw);;
    margin-top: 4vh;
    line-height: calc(35px);
    text-align: justify;
  }

  &__snappymob {
    color: rgba(248, 55, 55, 0.9);
    &:hover {
      color: rgba(248, 55, 55, 0.6);
      transition: color $transition-time-links;
    }
  }
}
</style>
