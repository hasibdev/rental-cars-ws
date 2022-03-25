<template>
  <div class="nav-sidebar">
    <!-- logo -->
    <div class="nav-sidebar__logo">
      <nuxt-link :to="localePath('/')">
        <img
          :src="require('@/assets/images/ws-logo.png')"
          class="logo"
          alt=""
          srcset=""
        />
      </nuxt-link>
    </div>

    <!-- navigations -->
    <div class="nav-sidebar__content">
      <ul class="nav-sidebar__links">
        <!-- sin -->
        <li
          v-for="menu in meneus"
          :key="menu.id"
          class="nav-sidebar__link-item"
        >
          <nuxt-link :to="localePath(menu.route)" class="nav-sidebar__link">
            <span class="icon">
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8358 4.90893C17.9552 4.4392 17.8358 3.97046 17.9552 3.50073C17.9552 2.6792 18.4328 2.21045 19.2687 2.21045C19.7463 2.21045 20.2239 2.21045 20.7015 2.21045C21.5373 2.21045 22.0149 2.79712 22.0149 3.50073C22.0149 5.14379 22.0149 6.78686 22.0149 8.42894C22.0149 8.78075 22.1343 9.13353 22.3731 9.36742C23.0896 10.072 23.806 10.7756 24.5224 11.4802C24.6418 11.5971 24.7612 11.7141 24.8806 11.832C25.3582 12.6535 24.7612 13.709 23.806 13.709C23.3284 13.709 22.7313 13.709 22.2537 13.709C22.0149 13.709 22.0149 13.709 22.0149 13.9438C22.0149 16.8772 22.0149 19.9284 22.0149 22.8618C22.0149 23.2136 21.8955 23.5654 21.6567 23.9172C21.4179 24.1521 21.0597 24.27 20.7015 24.27C19.3881 24.27 17.9552 24.27 16.6418 24.27C16.403 24.27 16.403 24.1521 16.403 24.0351C16.403 21.8054 16.403 19.4587 16.403 17.229C16.403 16.9951 16.403 16.7602 16.2836 16.6423C16.0448 15.9387 15.5672 15.469 14.7313 15.352C14.4925 15.352 14.3731 15.352 14.1343 15.352C13.2985 15.352 12.3433 15.352 11.5075 15.352C11.0299 15.352 10.6716 15.469 10.3134 15.7038C9.83581 16.0556 9.71641 16.6423 9.71641 17.229C9.71641 19.5756 9.71641 21.8054 9.71641 24.1521V24.27C9.71641 24.3869 9.71641 24.3869 9.59701 24.3869C9.59701 24.3869 9.59701 24.3869 9.47761 24.3869C8.16421 24.3869 6.73131 24.3869 5.41791 24.3869C4.58211 24.3869 4.10451 23.8002 4.10451 23.0966C4.10451 20.1623 4.10451 17.112 4.10451 14.1787C4.10451 13.8269 4.10451 13.8269 3.74631 13.8269C3.14931 13.8269 2.67161 13.8269 2.07461 13.8269C1.11941 13.709 0.761206 12.7705 1.11941 12.0669C1.23881 11.832 1.47761 11.5971 1.71641 11.3623C4.46271 8.66381 7.08961 5.96532 9.83581 3.38378C10.5522 2.56225 11.2687 1.97558 11.9851 1.27197C12.2239 1.03711 12.5821 0.802246 12.9403 0.802246C13.4179 0.802246 13.6567 0.919188 14.0149 1.15405C14.3731 1.38892 14.6119 1.74072 14.8508 1.97558C15.6866 2.79712 16.5224 3.61865 17.3582 4.4392C17.4776 4.67407 17.597 4.79199 17.8358 4.90893Z"
                />
              </svg>
            </span>
            <h6 class="nav-label">{{ menu.text }}</h6>
          </nuxt-link>
        </li>
      </ul>

      <!-- support links -->
      <ul class="nav-sidebar__user-settings">
        <li>
          <nuxt-link
            to="/dokumentation"
            class="nav-sidebar__user nav-sidebar__link"
          >
            <span class="icon">
              <div class="user-avater">M</div>
            </span>
            <h6 class="nav-label">Masud Khan</h6>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/support" class="nav-sidebar__link">
            <span class="icon">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z"
                />
              </svg>
            </span>
            <h6 class="nav-label">Notifications</h6>
          </nuxt-link>
        </li>
        <li>
          <a href="" class="nav-sidebar__link" @click.prevent="$auth.logout()">
            <span class="icon">
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.6922C0 13.046 0.120001 13.2819 0.360001 13.5177C0.600001 13.7536 0.840001 13.8715 1.2 13.8715H10.32L7.56 16.5837C7.44 16.7017 7.32 16.8196 7.32 16.9375C7.2 17.0554 7.2 17.2912 7.2 17.4092C7.2 17.5271 7.2 17.763 7.32 17.8809C7.44 17.9988 7.44 18.1167 7.56 18.2347C7.68 18.3526 7.8 18.4705 7.92 18.4705C8.04 18.5884 8.28 18.5884 8.4 18.5884C8.52 18.5884 8.76 18.5884 8.88 18.4705C9 18.3526 9.12 18.3526 9.24 18.2347L14.04 13.5177C14.16 13.3998 14.28 13.2818 14.28 13.1639C14.4 12.9281 14.4 12.5743 14.28 12.2206C14.28 12.1026 14.16 11.9847 14.04 11.8667L9.24 7.14983C9.12 7.0319 9 6.91399 8.88 6.91399C8.76 6.91399 8.52 6.79607 8.4 6.79607C8.28 6.79607 8.04 6.79607 7.92 6.91399C7.8 7.03191 7.68 7.0319 7.56 7.14983C7.44 7.26775 7.32 7.38566 7.32 7.50358C7.32 7.62151 7.2 7.85739 7.2 7.97532C7.2 8.09324 7.2 8.32907 7.32 8.44699C7.44 8.56491 7.44 8.68282 7.56 8.80075L10.32 11.513H1.2C0.840001 11.513 0.600001 11.6309 0.360001 11.8667C0.120001 12.1026 0 12.3385 0 12.6922ZM15.6 0.899902H3.6C2.64 0.899902 1.68 1.25369 1.08 1.96123C0.36 2.55085 0 3.49419 0 4.43758V7.97532C0 8.32909 0.120001 8.5649 0.360001 8.80075C0.600001 9.03659 0.840001 9.15456 1.2 9.15456C1.56 9.15456 1.8 9.03659 2.04 8.80075C2.28 8.5649 2.4 8.32909 2.4 7.97532V4.43758C2.4 4.08381 2.52 3.848 2.76 3.61215C3 3.3763 3.24 3.25839 3.6 3.25839H15.6C15.96 3.25839 16.2 3.3763 16.44 3.61215C16.68 3.848 16.8 4.08381 16.8 4.43758V20.9469C16.8 21.3007 16.68 21.5365 16.44 21.7723C16.2 22.0082 15.96 22.1261 15.6 22.1261H3.6C3.24 22.1261 3 22.0082 2.76 21.7723C2.52 21.5365 2.4 21.3007 2.4 20.9469V17.4092C2.4 17.0554 2.28 16.8196 2.04 16.5837C1.8 16.3479 1.56 16.2299 1.2 16.2299C0.840001 16.2299 0.600001 16.3479 0.360001 16.5837C0.120001 16.8196 0 17.0554 0 17.4092V20.9469C0 21.8903 0.36 22.8336 1.08 23.4232C1.68 24.1308 2.64 24.4846 3.6 24.4846H15.6C16.56 24.4846 17.52 24.1308 18.12 23.4232C18.84 22.7157 19.2 21.8903 19.2 20.9469V4.43758C19.2 3.49419 18.84 2.55085 18.12 1.96123C17.52 1.25369 16.56 0.899902 15.6 0.899902Z"
                />
              </svg>
            </span>
            <h6 class="nav-label">Logout</h6>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meneus: [
        {
          id: 1,
          text: 'Deshboard',
          route: '/dashboard',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-sidebar {
  height: 100vh;
}

.nav-sidebar {
  &__logo {
    margin: 2rem 0.875rem 2rem 0.5rem;
    text-align: center;
    width: 60%;

    .logo {
      max-width: 100%;
      height: auto;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 2rem);
    padding-right: 0.875rem;
  }

  &__link {
    height: 3rem;
    width: 3rem;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 0 8px 8px 0;
    transition: background-color 0.2s ease;
    margin-bottom: 1px;
    margin-top: 5px;
    position: relative;

    .icon {
      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--color-light-grey);
      }
    }

    .nav-label {
      position: absolute;
      top: 50%;
      left: 4rem;
      display: block;
      background-color: var(--color-grey);
      padding: 0.5rem;
      border-radius: 6px;
      transform: translateY(-50%);
      font-size: 0.875rem;
      color: var(--color-dark);
      font-weight: 400;
      transition: all 0.3s ease-in-out;
      white-space: nowrap;
      visibility: hidden;

      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-color: var(--color-grey);
        position: absolute;
        top: 50%;
        left: -6px;
        transform: translateY(-50%) rotate(45deg);
      }
    }

    &.nuxt-link-active {
      background-color: var(--color-grey);
      .icon svg {
        fill: var(--color-white);
      }
    }

    &:hover {
      background-color: var(--color-grey);
      .icon svg {
        fill: var(--color-white);
      }
      .nav-label {
        left: 3.5rem;
        visibility: visible;
      }
    }

    &.nav-sidebar__user {
      background: var(--color-grey);
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin: 0 auto;

      .user-avater {
        font-size: 0.875rem;
        color: var(--color-text);
      }
    }
  }

  &__user-settings {
    position: absolute;
    bottom: 1rem;
    left: 0;
  }
}
</style>
