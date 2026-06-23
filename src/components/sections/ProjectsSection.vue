<template>
  <div class="project__section-container">
    <div class="project__header">
      Projects
    </div>
    <b-carousel
      class="project__carousel"
      :autoplay="true"
      :interval="6000"
      :pause-hover="true"
      :repeat="true"
      :arrow="true"
      :arrow-hover="false"
      indicator-style="is-dots"
    >
      <b-carousel-item v-for="project of projects" :key="project.title">
        <div
          class="project__image-text-container"
          :class="{ 'project__image-text-container--no-image': !project.image }"
        >
          <div class="project__image-container" v-if="project.image">
            <img
              class="project__image"
              :src="require(`../../assets/${project.image}`)"
              :alt="project.title"
            />
          </div>
          <div class="project__texts">
            <div class="project__title">{{ project.title }}</div>
            <div class="project__desc">
              <span v-for="(line, i) of project.desc" :key="i"
                >{{ line }} <br
              /></span>
            </div>
            <div class="project__stack">
              Tech Stack: <br />
              {{ project.stack.join(", ") }}
            </div>
            <div class="project__link">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                >Visit Project</a
              >
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                >View on GitHub</a
              >
            </div>
          </div>
        </div>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Project } from "../../models/project.model";

@Component({})
export default class ProjectsSection extends Vue {
  projects: Project[] = [
    {
      title: "AI Sales-Lead Agent",
      desc: [
        "A multi-agent AI system that turns business context into discovered sales leads, enriched lead intelligence, prioritised opportunities & actionable outreach strategies",
      ],
      stack: [
        "Python",
        "FastAPI",
        "OpenAI API",
        "Tavily API",
        "SQLAlchemy",
        "PostgreSQL",
      ],
      image: "ai-sales-lead-agent-image.jpg",
      github: "https://github.com/JulianWan1/AI-Sales-Leads-Agents/tree/master",
    },
    {
      title: "Crypto Portfolio Web App",
      desc: [
        "Buy, sell & keep track of owned cryptocurrencies",
        "Includes activity logs of each coin",
      ],
      stack: ["Typescript", "Vue", "NestJs", "Postgres", "Docker"],
      image: "coinapp-main.jpg",
      link: "https://juliancoinapp.com",
    },
  ];
}
</script>

<style lang="scss" scoped>
.project {
  &__section-container {
    @include sectionContainerDefault();
    @include projectSectionContainerReactive();
    display: flex;
    flex-direction: column;
  }

  &__header {
    @include headerDefault();
    padding-left: 8vw;
    padding-right: 2vw;
  }

  &__carousel {
    position: relative;

    // Theme Buefy's default (light) indicator dots & arrows to the dark palette
    ::v-deep .carousel-indicator .indicator-item .indicator-style {
      background: rgba($text-font-color, 0.4);
      border-color: $text-font-color;
    }

    ::v-deep .carousel-indicator .indicator-item.is-active .indicator-style {
      background: $header-font-color;
      border-color: $header-font-color;
    }

    ::v-deep .carousel-arrow .icon {
      color: $header-font-color;
      border-color: $header-font-color;
    }

    // Arrows sit near the carousel edges; the card is narrowed below so they
    // land in the gutters beside it rather than over the content
    ::v-deep .carousel-arrow .icon.has-icons-left {
      left: 2rem;
    }

    ::v-deep .carousel-arrow .icon.has-icons-right {
      right: 2rem;
    }
  }

  &__image-text-container {
    @include projectImageTextContainerReactive();
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 85%;
    margin: 2vh auto 0;
    padding: 2vh;
    height: 70vh;
    text-align: center;
    background-color: rgba(70, 70, 70, 0.25);
  }

  &__image-text-container--no-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .project__texts {
      grid-column: unset;
      grid-row: unset;
      max-width: 70%;
    }
  }

  &__image-container {
    @include projectImageContainerReactive();
    display: flex;
    align-items: center;
    grid-column: 1 / 4;
    grid-row: 1 / 5;
    height: 100%;
  }

  &__image {
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px #1a2f4baa;
  }

  &__texts {
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

  &__title {
    @include projectTitleReactive();
    font-size: 2.5vw;
    align-items: center;
    margin-bottom: 1vh;
    font-weight: 700;
    color: $header-font-color;
  }

  &__link {
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
