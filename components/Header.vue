<i18n lang="yaml">
{
  'en':
    {
      'nav-item1': 'Home',
      'nav-item2': 'About Us',
      'nav-item3': 'Cars',
      'nav-item4': 'Features',
      'contact': 'Contact Us',
      'login': 'Login',
    },
  'de':
    {
      'nav-item1': 'Startseite',
      'nav-item2': 'Über Uns',
      'nav-item3': 'Fahrzeuge',
      'nav-item4': 'Leistungen',
      'contact': 'Kontakt',
      'login': 'Anmelden',
    },
}
</i18n>
<template>
   <header style="background-color: white; border-bottom: 1px solid #f9f9f9">
      <nav class="navbar navbar-expand-lg navbar-light">
         <div class="container">
            <NuxtLink class="logo" :to="localePath('/')"><img src="~/assets/images/logo.svg" alt="logo" /></NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <div>
                  <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 18H32V15H0V18ZM0 10.5H32V7.5H0V10.5ZM0 0V3H32V0H0Z" fill="black" />
                  </svg>
               </div>
            </button>

            <div id="navbarSupportedContent" ref="menus" class="collapse navbar-collapse">
               <ul class="navbar-nav mt-2 m-auto mb-lg-0">
                  <li class="nav-item">
                     <NuxtLink :to="localePath('/')" class="nav-link">{{
                $t('nav-item1')
              }}</NuxtLink>
                  </li>
                  <li class="nav-item">
                     <NuxtLink class="nav-link" :to="localePath('/#about')">{{
                $t('nav-item2')
              }}</NuxtLink>
                  </li>
                  <li class="nav-item">
                     <NuxtLink class="nav-link" :to="localePath('/#cars')">{{
                $t('nav-item3')
              }}</NuxtLink>
                  </li>
                  <li class="nav-item">
                     <NuxtLink class="nav-link" :to="localePath('/#features')">{{
                $t('nav-item4')
              }}</NuxtLink>
                  </li>
               </ul>

               <div class="d-flex align-items-center gap-4 mt-2">
                  <div class="lang__switcher">
                     <div class="lang__switcher-active">
                        <img class="flag" :src="
                    require(`~/assets/images/${
                      getSelectedLang ? 'germany.png' : 'us-flag.png'
                    }`)
                  " alt="" />
                        {{ getSelectedLang ? 'German' : 'English' }}
                     </div>
                     <ul class="lang__switcher-items">
                        <li v-for="(locale, index) in $i18n.locales" :key="index" class="lang__switcher-item" @click="handleChangeLang(locale.code)">
                           <span class="text">{{ locale.name }}</span>
                        </li>
                     </ul>
                  </div>
                  <a href="#contact" class="contact_btn">{{ $t('contact') }}</a>
               </div>
            </div>
         </div>
      </nav>
   </header>
</template>

<script>
export default {
   name: 'Header',
   data() {
      return {
         isMobile: false,
      }
   },
   computed: {
      getSelectedLang() {
         const routePath = this.$route.path.match('de')
         return routePath
      },
   },
   watch: {
      $route(to, from) {
         if (to !== from) {
            this.$refs.menus.classList.remove('show')
         }
      },
   },
   methods: {
      handleChangeLang(langCode) {
         localStorage.setItem('lang', langCode)
         this.$router.replace(this.switchLocalePath(langCode))
         setTimeout(() => {
            window.location.reload()
         }, 100)
      },
   },
}
</script>

<style lang="scss" scoped>
.lang__switcher {
   position: relative;
   width: auto;
}
.lang__switcher-active {
   max-width: 100%;
   padding: 6px 6px;
   display: flex;
   border-radius: 0.25rem;
   justify-content: space-between;
   align-items: center;
   font-size: 0.875rem;
   font-weight: 500;
   text-transform: capitalize;
   cursor: pointer;
   color: var(--color-text);
}
.lang__switcher-items {
   list-style: none;
   width: 100%;
   transition: all 0.1s ease-in-out;
   position: absolute;
   top: 40px;
   left: 0;
   background: #fff;
   visibility: hidden;
   z-index: 5;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
   padding: 0;
}
.lang__switcher:hover .lang__switcher-items {
   visibility: visible;
   top: 35px;
}
.lang__switcher-item {
   font-size: 1rem;
   padding: 6px 10px;
   cursor: pointer;
   user-select: none;
}
.lang__switcher-item:hover {
   background-color: #eeeeee;
}
.logo {
   width: 170px;
}
.flag {
   margin-right: 10px;
   width: 1.563rem;
   height: auto;
}
.nav-item {
   font-weight: 600;
   font-size: 1rem;
   margin: 0.2rem 1rem;
   transition: all 0.5s linear;
}
.nav-item a:hover {
   color: #f23e3d !important;
}
.contact_btn {
   border: none;
   outline: none;
   font-size: 0.875rem;
   border-radius: 0.25rem;
   font-weight: 500;
   color: var(--color-white) !important;
   background-color: var(--color-dark);
   padding: 0.3rem 1rem;
   box-shadow: none;
   transition: all 0.5s ease;
}
.contact_btn:hover {
   background-color: var(--color-primary);
   color: #fff;
}

a.nav-link.nuxt-link-exact-active.nuxt-link-active {
   color: var(--color-primary);
}

a.login__nav-link {
   font-weight: 500;

   &:hover {
      color: var(--color-primary);
   }
}

@media (max-width: 768px) {
}
@media (max-width: 576px) {
   .nav-item {
      text-decoration: none;
      font-size: 1rem;
      color: #cccccc;
      display: block;
      transition: 0.3s;
      font-weight: 600;
      margin: 0.4rem 0.3rem;
   }
}
</style>
