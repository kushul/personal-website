<template>
  <div class="home-main-intro section-gap">
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
    <div class="right-part-wrapper">
      <div class="author-job">
        <h3>Software Engineer</h3>
      </div>
      <div class="author-title">
        <h4>Based in Mauritius, I'm a Developer and graphic designer</h4>
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
  height: 70vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
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
      width: 50%;
    }
  }
}

.social-media-container {
  margin: 40px 0;
}
</style>