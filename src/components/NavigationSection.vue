<template>
  <header class="nav-header">
    <div class="nav-container">
      <!-- Left group -->
      <div class="nav-left">
        <router-link to="/">
          <img
            class="logo"
            :src="bitzaroLogoWhite"
            alt="Bitzaro logo"
          />
        </router-link>

        <!-- Desktop navigation -->
        <nav class="nav-links">
          <router-link
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.href"
            class="nav-link"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>

      <!-- Right group -->
      <div class="nav-right">
        <button class="btn-login">Login</button>
        <button class="btn-signup">Sign Up</button>
        <button class="btn-lang">
          <img class="lang-icon" :src="languageWhite" alt="Language selector" />
        </button>
      </div>

      <!-- Mobile burger -->
      <button
        class="burger-btn"
        @click="menuOpen = !menuOpen"
      >
        <span v-if="!menuOpen" class="menu-icon">☰</span>
        <span v-else class="close-icon">✕</span>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <transition name="fade">
      <div v-if="menuOpen" class="mobile-menu">
        <router-link
          v-for="(item, index) in navigationItems"
          :key="index"
          :to="item.href"
          class="mobile-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>

        <div class="mobile-actions">
          <button class="btn-login">Login</button>
          <button class="btn-signup">Sign Up</button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.svg";
import languageWhite from "../assets/Icon/mynaui_globe-1.png";

export default {
  name: "NavigationSection",
  data() {
    return {
      menuOpen: false,
      bitzaroLogoWhite,
      languageWhite,
      navigationItems: [
        { label: "Market", href: "/market" },
        { label: "Trade", href: "/trade" },
        { label: "Learn", href: "/learn" },
      ],
    };
  },
};
</script>

<style scoped>
/* Header base */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #16121f;
  backdrop-filter: blur(5px);
  z-index: 50;
  padding: 16px 0;
}

/* Layout container */
.nav-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Left */
.nav-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  height: 24px;
  object-fit: contain;
}

/* Desktop nav */
.nav-links {
  display: none;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 6px;
  }
}

.nav-link {
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #7815f9;
}

/* Right */
.nav-right {
  display: none;
}

@media (min-width: 768px) {
  .nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.btn-login {
  padding: 8px 16px;
  border-radius: 6px;
  background: rgba(241, 238, 247, 0.1);
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: 'Poppins', sans-serif;
}

.btn-login:hover {
  background: rgba(241, 238, 247, 0.2);
}

.btn-signup {
  padding: 8px 16px;
  border-radius: 6px;
  background: #7815f9;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.btn-signup:hover {
  opacity: 0.9;
}

.btn-lang {
  padding: 6px;
  border-radius: 50%;
  background: rgba(241, 238, 247, 0.1);
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-lang:hover {
  background: rgba(241, 238, 247, 0.2);
}

.lang-icon {
  width: 24px;
  height: 24px;
}

/* Burger (mobile only) */
.burger-btn {
  display: flex;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .burger-btn {
    display: none;
  }
}

/* Mobile dropdown */
.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #16121f;
  padding: 16px 0;
  gap: 12px;
}

.mobile-link {
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-link:hover {
  color: #7815f9;
}

.mobile-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
