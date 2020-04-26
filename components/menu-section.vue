
<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between py-8 items-center py-3"
  >
    <a class="text-center block md:text-left text-3xl logo-wrapper" href="/">
      <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 86.95 22.04"
        style="enable-background:new 0 0 86.95 22.04;"
        xml:space="preserve"
        class="fill-current w-48"
      >
        <style type="text/css">
  .st0 {
    font-family: 'BradleyHandITCTT-Bold';
  }
  .st1 {
    font-size: 25.7327px;
  }
        </style>
        <text transform="matrix(1 0 0 1 0 18.995)" class="st0 st1">Kushul</text>
      </svg>
    </a>

    <ul class="list-items flex justify-center items-center py-10 md:py-0 md:mr-3">
      <li>
        <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'blog'}">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'projects'}">Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'events'}">Events</nuxt-link>
      </li>
      <li>
        <button class="text-gray-800 ma-0" @click="toggleTheme()">
          <template v-if="$colorMode.preference === 'light'">
            <svg
              width="76"
              height="78"
              viewBox="0 0 76 78"
              fill="none"
              class="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.21 38.9499C55.2081 42.4067 54.1812 45.7853 52.2593 48.6586C50.3374 51.5318 47.6067 53.7707 44.4124 55.0922C41.2182 56.4137 37.7039 56.7584 34.3137 56.0829C30.9236 55.4073 27.8099 53.7417 25.3663 51.2966C22.9227 48.8516 21.2589 45.737 20.5852 42.3464C19.9115 38.9559 20.2583 35.4418 21.5816 32.2483C22.9049 29.0549 25.1454 26.3254 28.0197 24.4052C30.8941 22.4849 34.2733 21.4599 37.73 21.4599C40.0264 21.4599 42.3002 21.9124 44.4217 22.7915C46.5431 23.6706 48.4705 24.959 50.0938 26.5833C51.7171 28.2075 53.0045 30.1356 53.8823 32.2576C54.7602 34.3795 55.2114 36.6536 55.21 38.9499V38.9499ZM40.71 12.6899V3.93994C40.71 3.14429 40.394 2.38123 39.8314 1.81862C39.2688 1.25601 38.5057 0.939941 37.71 0.939941C36.9144 0.939941 36.1513 1.25601 35.5887 1.81862C35.0261 2.38123 34.71 3.14429 34.71 3.93994V12.6899C34.71 13.4856 35.0261 14.2487 35.5887 14.8113C36.1513 15.3739 36.9144 15.6899 37.71 15.6899C38.5057 15.6899 39.2688 15.3739 39.8314 14.8113C40.394 14.2487 40.71 13.4856 40.71 12.6899V12.6899ZM58.4701 22.4699L64.66 16.2899C64.9417 16.0115 65.1658 15.6804 65.3195 15.3154C65.4732 14.9504 65.5535 14.5587 65.5559 14.1626C65.5582 13.7666 65.4825 13.374 65.3331 13.0072C65.1836 12.6404 64.9634 12.3066 64.685 12.0249C64.4066 11.7433 64.0755 11.5192 63.7105 11.3655C63.3455 11.2118 62.9538 11.1315 62.5577 11.1291C62.1617 11.1268 61.7691 11.2025 61.4023 11.3519C61.0355 11.5013 60.7017 11.7215 60.42 11.9999L54.2301 18.1799C53.9353 18.4546 53.6989 18.7858 53.5349 19.1538C53.371 19.5218 53.2828 19.919 53.2757 20.3218C53.2686 20.7247 53.3427 21.1248 53.4936 21.4983C53.6444 21.8719 53.869 22.2112 54.1539 22.4961C54.4388 22.781 54.7781 23.0055 55.1517 23.1564C55.5252 23.3073 55.9253 23.3814 56.3281 23.3743C56.7309 23.3672 57.1282 23.279 57.4962 23.1151C57.8642 22.9511 58.1954 22.7147 58.4701 22.4199V22.4699ZM75.7 38.7099C75.7 37.9143 75.384 37.1512 74.8214 36.5886C74.2588 36.026 73.4957 35.7099 72.7 35.7099H64C63.2044 35.7099 62.4413 36.026 61.8787 36.5886C61.3161 37.1512 61 37.9143 61 38.7099C61 39.5056 61.3161 40.2687 61.8787 40.8313C62.4413 41.3939 63.2044 41.7099 64 41.7099H72.7C73.4957 41.7099 74.2588 41.3939 74.8214 40.8313C75.384 40.2687 75.7 39.5056 75.7 38.7099ZM64.8 66.1499C65.3619 65.5874 65.6774 64.8249 65.6774 64.0299C65.6774 63.2349 65.3619 62.4724 64.8 61.9099L58.6101 55.7199C58.0425 55.1577 57.2748 54.8439 56.4759 54.8477C55.677 54.8514 54.9123 55.1724 54.35 55.7399C53.7878 56.3075 53.474 57.0752 53.4778 57.8741C53.4815 58.673 53.8025 59.4377 54.3701 59.9999L60.56 66.1899C61.1225 66.7517 61.885 67.0673 62.68 67.0673C63.4751 67.0673 64.2375 66.7517 64.8 66.1899V66.1499ZM41 74.0599V65.3099C41 64.5143 40.684 63.7512 40.1214 63.1886C39.5588 62.626 38.7957 62.3099 38 62.3099C37.2044 62.3099 36.4413 62.626 35.8787 63.1886C35.3161 63.7512 35 64.5143 35 65.3099V74.0599C35 74.8556 35.3161 75.6187 35.8787 76.1813C36.4413 76.7439 37.2044 77.0599 38 77.0599C38.7957 77.0599 39.5588 76.7439 40.1214 76.1813C40.684 75.6187 41 74.8556 41 74.0599V74.0599ZM21.7701 22.3199C22.3319 21.7574 22.6474 20.9949 22.6474 20.1999C22.6474 19.4049 22.3319 18.6424 21.7701 18.0799L15.58 11.8899C15.0113 11.36 14.2592 11.0715 13.482 11.0852C12.7048 11.099 11.9632 11.4138 11.4136 11.9635C10.8639 12.5131 10.5491 13.2546 10.5353 14.0319C10.5216 14.8091 10.8101 15.5612 11.34 16.1299L17.53 22.3199C18.0925 22.8817 18.855 23.1973 19.65 23.1973C20.445 23.1973 21.2075 22.8817 21.7701 22.3199V22.3199ZM15 38.5599C15 37.7643 14.684 37.0012 14.1214 36.4386C13.5588 35.876 12.7957 35.5599 12 35.5599H3.30005C2.5044 35.5599 1.74134 35.876 1.17873 36.4386C0.616119 37.0012 0.300049 37.7643 0.300049 38.5599C0.300049 39.3556 0.616119 40.1187 1.17873 40.6813C1.74134 41.2439 2.5044 41.5599 3.30005 41.5599H12C12.7957 41.5599 13.5588 41.2439 14.1214 40.6813C14.684 40.1187 15 39.3556 15 38.5599ZM15.45 65.9999L21.64 59.8099C22.17 59.2412 22.4585 58.4891 22.4447 57.7118C22.431 56.9346 22.1162 56.1931 21.5665 55.6435C21.0169 55.0938 20.2753 54.779 19.4981 54.7652C18.7209 54.7515 17.9687 55.04 17.4 55.5699L11.2 61.7599C10.9216 62.039 10.7009 62.3702 10.5505 62.7345C10.4001 63.0989 10.3229 63.4893 10.3234 63.8835C10.3238 64.2777 10.4019 64.6679 10.5532 65.0319C10.7045 65.3959 10.926 65.7265 11.205 66.0049C11.4841 66.2833 11.8153 66.5041 12.1796 66.6545C12.544 66.8049 12.9344 66.8821 13.3286 66.8816C13.7228 66.8811 14.113 66.803 14.477 66.6518C14.841 66.5005 15.1716 66.279 15.45 65.9999Z"
              />
            </svg>
          </template>
          <template v-else-if="$colorMode.preference === 'sepia'">
            <svg
              width="288"
              height="314"
              viewBox="0 0 288 314"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 145C7 129 45 119 89 115C92 118 96 121 99 123C52 125 16 133 16 142C16 152 64 161 123 161C182 161 230 152 230 142C230 133 196 125 149 123C148 120 147 117 147 114C195 117 238 127 243 145C243 150 243 156 242 161C258 153 272 153 283 163C299 180 276 217 258 233C246 243 232 247 219 243C205 271 183 291 153 291H91C27 291 3 202 3 145ZM115 114H118C120 117 122 120 124 122H121C118 119 116 117 115 114ZM240 178C237 197 232 218 223 236C230 237 238 235 248 227C269 210 274 187 266 178C261 172 250 174 240 178Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 294H237C240 294 243 296 243 299V301C243 304 234 307 225 307H202C201 311 198 314 197 314H46C45 314 42 311 41 307H15C10 307 0 304 0 301V299C0 296 3 294 6 294Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M108 0C204 46 57.9999 70 124 132C5.99993 73 168 52 108 0Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M144 27C227 67 101 88 158 141C56.0001 90 196 72 144 27Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70 0C152 39 27 60 84 114C-18 63 121 44 70 0Z"
              />
            </svg>
          </template>
          <template v-else-if="$colorMode.preference === 'dark'">
            <svg
              width="430"
              height="432"
              viewBox="0 0 430 432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current"
            >
              <path
                d="M372.9 367.2C401.5 338.6 420.5 303.9 430 267.4C355.7 323.3 249.7 317.4 182.1 249.8C114.2 181.9 108.5 75.3 165.2 0.900024C128.1 10.1 92.9999 29.2 63.9999 58.2C-21.3001 143.5 -21.3001 281.8 63.9999 367.2C149.3 452.5 287.6 452.5 372.9 367.2Z"
              />
            </svg>
          </template>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // themes: ['theme-dark', 'theme-light', 'theme-sepia'],
      // currentThemeIndex: 0
    }
  },
  computed: {
    total() {
      // return this.themes.length - 1
    },
    currentTheme() {
      // return this.themes[this.currentThemeIndex]
    }
  },
  mounted() {
    // let localStoreTheme = this.theme
    // localStoreTheme = localStorage.getItem('theme') || 'theme-dark'
    // this.$emit('local-theme', localStoreTheme)
  },
  props: {
    theme: {
      type: String
    }
  },
  methods: {
    toggleTheme() {
      let myTheme = this.$colorMode.preference
      if (myTheme == 'light') {
        myTheme = 'sepia'
      } else if (myTheme == 'dark') {
        myTheme = 'light'
      } else if (myTheme == 'sepia') {
        myTheme = 'dark'
      }
      this.$colorMode.preference = myTheme
      console.log(this.$colorMode.preference)
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  /* @apply hidden; */
  ul {
    li {
    }
  }
}

@screen sm {
  .main-menu {
    @apply flex;
    ul {
      li {
        margin: 10px;

        button {
          transition: all 0.08s ease-in-out;
          cursor: pointer;
          position: relative;
          transition: 0.5s;
          display: flex;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 30px;
          justify-content: center;
          align-items: center;
          z-index: 10;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            // background: #d35400;
            transition: 0.5s;
            transform: scale(0.9);
            z-index: -1;
          }

          &:hover {
            &::before {
              transform: scale(1.2);
              filter: blur(3px);
            }
          }

          img {
            width: 30px;
          }
        }
        a {
          padding: 0 10px;
          position: relative;
          text-decoration: none;
          text-transform: uppercase;
          width: 100%;
          letter-spacing: 0;
          display: block;
          line-height: 35px;
          cursor: pointer;

          &:hover,
          &:active {
            // letter-spacing: 5px !important;
            color: var(--green);
          }

          &::after,
          &::before {
            backface-visibility: hidden;
            border: 1px solid transparent;
            bottom: 0px;
            content: ' ';
            display: block;
            margin: 0 auto;
            position: relative;
            transition: all 280ms ease-in-out;
            width: 0;
          }

          &:hover {
            &::after,
            &::before {
              backface-visibility: hidden;
              transition: width 350ms ease-in-out;
              width: 100%;
              border-color: var(--green);
            }

            &::before {
              bottom: auto;
              top: 0;
              width: 100%;
            }
          }
        }
      }
    }
  }
}

.nuxt-link-exact-active {
  &::after,
  &::before {
    border: 1px solid var(--green) !important;
    bottom: 0px;
    content: ' ';
    display: block;
    position: relative;
    transition: all 280ms ease-in-out;
    width: 100% !important;
  }

  color: var(--green);

  // letter-spacing: 5px !important;;
}

.logo-wrapper {
  svg {
  }
}
</style>