<template>
  <header
    :class="['header', scrolled ? 'header-scrolled' : 'header-default']"
  >
    <div class="container">
      <!-- Left group -->
      <div class="left-group">
        <router-link to="/">
          <img
            class="logo"
            :src="scrolled ? bitzaroLogoBlack : bitzaroLogoWhite"
            alt="Bitzaro logo"
          />
        </router-link>

        <!-- Desktop nav -->
        <nav class="nav-desktop">
          <router-link
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.href"
            :class="['nav-link', scrolled ? 'text-black' : 'text-white']"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>

      <!-- Right group -->
      <div class="right-group">
        <button :class="['btn-login', scrolled ? 'btn-login-light' : 'btn-login-dark']">
          Login
        </button>
        <button class="btn-signup">Sign Up</button>
        <button :class="['btn-lang', scrolled ? 'lang-light' : 'lang-dark']">
          <img
            class="lang-icon"
            :src="scrolled ? languagePurple : languageWhite"
            alt="Language selector"
          />
        </button>
      </div>

      <!-- Mobile burger button -->
      <button class="burger" @click="toggleMenu">
        <span v-if="menuOpen" :class="['close-icon', scrolled ? 'text-black' : 'text-white']">✕</span>
        <span v-else :class="['menu-icon', scrolled ? 'text-black' : 'text-white']">☰</span>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <div v-if="menuOpen" :class="['mobile-menu', scrolled ? 'mobile-light' : 'mobile-dark']">
      <router-link
        v-for="(item, index) in navigationItems"
        :key="index"
        :to="item.href"
        class="mobile-link"
        @click.native="menuOpen = false"
      >
        {{ item.label }}
      </router-link>
      <div class="mobile-actions">
        <button :class="['btn-login', scrolled ? 'btn-login-light' : 'btn-login-dark']">
          Login
        </button>
        <button class="btn-signup">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<script>
import bitzaroLogoWhite from "../assets/Logo/Bitzaro_Logo_RGB_CL_Hor_Rev 3.png";
import bitzaroLogoBlack from "../assets/Logo/Bitzaro_Logo_RGB_CL_Hor 1.png";
import languagePurple from "../assets/Icon/Your Safety, Our Priority/language.svg";
import languageWhite from "../assets/Icon/Your Safety, Our Priority/language1.svg";

export default {
  name: "HeaderSection",
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      navigationItems: [
        { label: "Market", href: "/market" },
        { label: "Trade", href: "/trade" },
        { label: "Learn", href: "/learn" },
      ],
      bitzaroLogoWhite,
      bitzaroLogoBlack,
      languagePurple,
      languageWhite,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight * 0.7;
      this.scrolled = scrollTop > triggerHeight;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Header container */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  z-index: 50;
  padding: 16px 0;
}
.header-default {
  background: #16121f;
}
.header-scrolled {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #eff4f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Left group */
.left-group {
  display: flex;
  gap: 24px;
}

.logo {
  height: 24px;
  width: 122px;
  object-fit: contain;
}

.nav-desktop {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 6px;
}
.nav-link {
  font-weight: 600;
  font-size: 14px;
  transition: color 0.3s;
  text-decoration: none;
}

.nav-link.text-white {
  color: white;
}

.nav-link.text-black {
  color: black;
}

.nav-link:hover {
  color: #7815f9;
}

/* Right group */
.right-group {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-login {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
.btn-login-light {
  background: #f0effb;
  color: #2f075d;
}
.btn-login-dark {
  background: rgba(241, 238, 247, 0.1);
  color: white;
}
.btn-login-dark:hover {
  background: rgba(241, 238, 247, 0.2);
}

.btn-signup {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  background: #7815f9;
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-signup:hover {
  background: #5c0fbd;
}

.btn-lang {
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.lang-light {
  background: #f0effb;
}
.lang-dark {
  background: rgba(241, 238, 247, 0.1);
}
.lang-dark:hover {
  background: rgba(241, 238, 247, 0.2);
}
.lang-icon {
  width: 24px;
  height: 24px;
}

/* Burger */
.burger {
  display: none;
  border: none;
  background: none;
  cursor: pointer;
}
.menu-icon, .close-icon {
  font-size: 24px;
}

/* Mobile */
.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
}
.mobile-light {
  background: white;
  color: black;
}
.mobile-dark {
  background: #16121f;
  color: white;
}
.mobile-link {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.mobile-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-desktop,
  .right-group {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
