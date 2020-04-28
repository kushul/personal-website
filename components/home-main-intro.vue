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
          class="text-4xl leading-snug my-4"
        >Based in Mauritius, I'm a Developer and graphic designer</h4>
      </div>
      <div class="author-summary">
        <p
          class="text-lg"
        >Create the highest, grandest vision possible for your life, because you can become what you believe(testing)</p>
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
}

.left-part-wrapper {
  @apply flex items-end justify-center;
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
</style>