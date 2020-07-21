<template>
  <div class="home-main-intro container mx-auto">
    <div class="left-part-wrapper">
      <div class="profile-image-wrapper">
        <div class="name-wrapper">
          <h1>Kushul</h1>
          <h1>Soomaree</h1>
        </div>
        <div class="image-wrapper">
          <img src="../assets/images/kush.png" alt="Kushul Soomaree" />
        </div>
      </div>
    </div>
    <div class="right-part-wrapper flex flex-col justify-center">
      <div class="author-job">
        <h3 class="text-base font-semibold">Software Engineer</h3>
      </div>
      <div class="author-title">
        <h4
          class="text-xl md:text-2xl lg:text-4xl leading-snug my-4"
        >Based in Mauritius, I'm a Developer and graphic designer</h4>
      </div>
      <div class="author-summary">
        <p class="sm:text-lg text-base">
          "Design is everywhere. From the dress you're wearing to the smartphone you're holding, it's
          design."
        </p>
      </div>
      <div class="npx-wrapper mt-4">
        Try
        <span
          class="py-1 px-2 text-copy-primary bg-background-secondary rounded cursor-move inline-block"
        >npx kushul_soomaree</span> on your terminal for a small resume.
      </div>
      <div class="social-media-container">
        <SocialMedia />
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from '../components/social-media'
export default {
  components: {
    SocialMedia
  }
}
</script>

<style lang="scss" scoped>
.home-main-intro {
  height: calc(100vh - 120px);
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
  grid-template-areas: '👨‍🦰 🍌';
}

.npx-wrapper {
  font-family: var(--font-roboto);
  span {
  }
}

.left-part-wrapper {
  @apply flex items-end justify-center;
  grid-area: 👨‍🦰;
}

.right-part-wrapper {
  grid-area: 🍌;
}

.name-wrapper {
  position: absolute;
  z-index: -1;
  h1 {
    font-size: 100px;
    letter-spacing: 10px;
    font-weight: 900;
    line-height: 100px;
    font-family: var(--font-oswald);

    &:last-child {
      margin-left: 50px;
    }
  }
}

.profile-image-wrapper {
  position: relative;
  z-index: 10;

  .image-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 60%;
    }
  }
}

.social-media-container {
  margin: 40px 0;
}

.author-job h3 {
  position: relative;
  color: var(--green);
  &::after {
    content: '';
    width: 70px;
    height: 2px;
    position: absolute;
    margin-left: 20px;
    top: 50%;
    background: var(--green);
  }
}

@media (max-width: 1400px) {
  .home-main-intro {
    grid-template-columns: 1fr 1fr;
  }
  .profile-image-wrapper {
    .image-wrapper {
      img {
        width: 50%;
      }
    }
  }
  .name-wrapper {
    padding: 20px;
    h1 {
      font-size: 60px;
      line-height: 70px;
    }
  }
}

@media (max-width: 1024px) {
  .home-main-intro {
    grid-template-columns: 1fr;
    grid-template-areas: '🍌' '👨‍🦰';
  }

  .right-part-wrapper {
    text-align: center;
  }

  .profile-image-wrapper {
    .image-wrapper {
      justify-content: center;
      padding-left: 50px;
    }
  }
}

@media (max-width: 600px) {
  .home-main-intro {
    grid-gap: 0;
  }
  .name-wrapper {
    display: none;
  }

  .profile-image-wrapper {
    .image-wrapper {
      padding-left: 0;
    }
  }
}

@media (max-width: 960px) and (orientation: landscape) {
  .author-summary {
    display: none;
  }
}
</style>