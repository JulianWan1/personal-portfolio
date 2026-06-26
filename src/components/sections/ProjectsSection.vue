<template>
  <div class="project__section-container">
    <div class="project__header">
      Projects
    </div>
    <b-carousel
      class="project__carousel"
      :autoplay="false"
      :repeat="true"
      :arrow="true"
      :arrow-hover="false"
      indicator-style="is-dots"
    >
      <b-carousel-item v-for="project of projects" :key="project.title">
        <!-- Whole card is swipeable: Buefy starts a swipe only when the grabbed
             element (event.target) has draggable=true, so every leaf is marked
             draggable. Buefy then calls preventDefault(), which also stops the
             native drag-ghost. (Trade-off: drag-to-select is disabled; double-
             click still selects a word via user-select:text on .project__texts.) -->
        <div
          class="project__image-text-container"
          :class="{ 'project__image-text-container--no-image': !project.image }"
          draggable="true"
        >
          <div class="project__image-container" v-if="project.image" draggable="true">
            <img
              class="project__image"
              :src="require(`../../assets/${project.image}`)"
              :alt="project.title"
            />
          </div>
          <div class="project__texts" draggable="true">
            <div class="project__title" draggable="true">{{ project.title }}</div>
            <div class="project__desc" draggable="true">
              <span v-for="(line, i) of project.desc" :key="i" draggable="true"
                >{{ line }} <br
              /></span>
            </div>
            <div class="project__stack" draggable="true">
              Tech Stack: <br />
              {{ project.stack.join(", ") }}
            </div>
            <div class="project__link" draggable="true">
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
      image: "ai-sales-lead-agent-image.png",
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
    @media(max-width: 1024px){
      justify-content: flex-start;
      // Clear the fixed 50px navbar from inside the section, so the "Projects"
      // title isn't covered when navigating up to it (offset stays 0 to avoid
      // revealing the section above)
      padding-top: 55px;
    }
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

    // Buefy's default arrow is a white circle; re-theme it dark to match the page
    ::v-deep .carousel-arrow .icon {
      background: rgba(70, 70, 70, 0.55);
      color: $header-font-color;
      border: 1px solid rgba($text-font-color, 0.4);
      &:hover {
        background: rgba(70, 70, 70, 0.85);
        border-color: $header-font-color;
      }
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
    // Taller on mobile so the card fills more of the viewport, reducing the bottom
    // whitespace without shrinking the section (which would let Contact peek in)
    @media(max-width: 1024px){
      height: 78vh;
    }
    // Landscape phones: card is side-by-side here, so a shorter height keeps the
    // header + card + pagination dots all within the short viewport
    @media(max-width: 1024px) and (max-height: 450px){
      height: 62vh;
    }
    // Tablet portrait: stack the card (image above text) like phone portrait,
    // centred so the content isn't dwarfed by the tall card
    @media(min-width: 651px) and (max-width: 1024px) and (orientation: portrait){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      // The grid children default to height:100%, which would split the card in
      // half and leave a big gap; size them to content so they stack tightly
      .project__image-container,
      .project__texts{
        height: auto;
        grid-column: unset;
        grid-row: unset;
      }

      .project__texts{
        margin-top: 4vh;
        font-size: calc(1vh + 1vw);
      }

      .project__title{
        font-size: calc(1.5vh + 1.5vw);
      }
    }
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
    max-width: 100%;
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
    // Buefy sets user-select:none on the whole .carousel (and it inherits), so
    // re-enable selection here to keep the card text copyable
    user-select: text;
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
