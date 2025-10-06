<template>
  <div class="searchbar-container">
    <!-- Tabs -->
    <div class="tabs-wrapper">
      <router-link
        v-for="tab in tabs"
        :key="tab.label"
        :to="tab.path || '#'"
        class="tab-link"
        @click.native="handleClick(tab, index)"
      >
        <p
          class="tab-label"
          :ref="(el) => setTabRef(el, index)"
          :class="{ active: activeTab === tab.path || activeTab === tab.label }"
        >
          {{ tab.label }}
        </p>
      </router-link>

      <!-- Purple underline -->
      <span
        class="tab-underline"
        :style="{
          left: underlineStyle.left + 'px',
          width: underlineStyle.width + 'px',
        }"
      ></span>
    </div>

    <!-- Search -->
    <div class="search-box">
      <div class="search-inner">
        <img :src="searchIcon" alt="search" class="search-icon" />
        <p class="search-placeholder">Search</p>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from "../assets/Icon/Arrow/search.png";

export default {
  name: "SearchBar",
  data() {
    return {
      tabs: [
        { label: "Favourite", path: "/favourite" },
        { label: "Spot", path: "/spot" },
        { label: "Futures", path: null },
      ],
      activeTab: this.$route.path,
      underlineStyle: { left: 0, width: 0 },
      tabsRef: [],
      searchIcon,
    };
  },
  mounted() {
    this.updateUnderline();
  },
  watch: {
    "$route.path"(newPath) {
      this.activeTab = newPath;
      this.$nextTick(() => this.updateUnderline());
    },
  },
  methods: {
    setTabRef(el, index) {
      this.$set(this.tabsRef, index, el);
    },
    handleClick(tab) {
      this.activeTab = tab.path || tab.label;
      this.$nextTick(() => this.updateUnderline());
    },
    updateUnderline() {
      const activeIndex = this.tabs.findIndex(
        (tab) => tab.path === this.activeTab || tab.label === this.activeTab
      );

      const activeEl = this.tabsRef[activeIndex];
      if (activeEl) {
        this.underlineStyle = {
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        };
      }
    },
  },
};
</script>

<style scoped>
.searchbar-container {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #555;
  position: relative;
  width: 100%;
  gap: 16px;
}

@media (min-width: 640px) {
  .searchbar-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
}

/* Tabs */
.tabs-wrapper {
  display: flex;
  color: #ccc;
  padding: 8px;
  gap: 24px;
  position: relative;
  width: 100%;
}

.tab-link {
  text-decoration: none;
  color: inherit;
}

.tab-label {
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.3s;
}

.tab-label:hover {
  color: #b48cff;
}

.tab-label.active {
  color: #913dff;
  font-weight: 500;
}

.tab-underline {
  position: absolute;
  background-color: #913dff;
  height: 4px;
  bottom: 0;
  transition: all 0.3s ease;
  border-radius: 2px;
  z-index: 10;
}

/* Search Box */
.search-box {
  background-color: rgba(241, 238, 247, 0.1);
  border-radius: 9999px;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 250px;
}

.search-inner {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-icon {
  width: 15px;
  height: 15px;
  margin-left: 8px;
}

.search-placeholder {
  color: #ccc;
  font-size: 14px;
  margin-bottom: 2px;
}
</style>
