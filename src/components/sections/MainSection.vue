<template>
  <div class="main__section-container">
		<div class="main__text-container">
			<div class="main__header">
				Julian Wan
			</div>
			<div class="main__texts">
				<div class="main-sub-texts">
					Full Stack Developer <br>
					2 Years of Working Experience <br>
					Seeking to Learn, Solve & Explore
				</div>
				<div class="main__summary-texts">
					Hey there &#128075; &#128512;, <br>
					I'm a full stack developer who have worked with international team members & clients to achieve successful results.<br>
					Previously, I was a Mechanical Engineering graduate back in 2020 but have made a transition to this field and have been in it since 2021.<br>
					I gained experience and learned rapidly with the help of <a class="main__snappymob" href="https://snappymob.com" target="_blank" rel="noopener noreferrer">snappymob</a>.<br>
					My aim is to contribute my effort to any projects I'm involved in, to continue learning & work with great people along the way. 
				</div>
			</div>
		</div>
		<div class="main__image-container">
			<img class="main__image" src="../../assets/macbook-type.jpg" alt="">
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class ExperienceSection extends Vue{
}

window.addEventListener('scroll', function() {
  var element = document.querySelector('.main__section-container');
  var rect = element!.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    element!.classList.add('scrolled-to');
  }
});

</script>

<style lang="scss" scoped>
.main{

	&__section-container{
		@include sectionContainerDefault();
		@include mainSectionContainerReactive();
		display: flex;
	}

	&__text-container{
		@include textContainerDefault();
		@include mainTextContainerReactive();
		width: 50vw;
	}

	&__header{
		@include headerDefault();
	}

	&__texts{
		font-size: calc(1.2vh + 1.25vw);
		margin-top: 2vh;
	}

	&__image-container{
		@include mainImageContainerReactive();
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	&__image{
		height: auto;
		width: calc(18vw + 16vh);
		margin-bottom: 10vh;
	}

	&__summary-texts{
		@include mainSummaryTextsReactive();
		width: calc(20vh + 20vw);
		font-size: calc(0.6vh + 0.6vw);
		margin-top: 4vh;
		line-height: calc(35px);
		text-align: justify;
	}

	&__snappymob{
		color: rgba(248, 55, 55, 0.9);
		&:hover{
			color: rgba(248, 55, 55, 0.6);
			transition: color $transition-time-links;
		}
	}

}

</style>