<template>
  <section class="main-content">
    <!-- Arrow button -->
    <button class="arrow-btn" aria-label="Learn more about advanced trading">
      <img :src="arrow" class="icon" alt="Arrow icon" />
    </button>

    <!-- Text -->
    <div class="text-content">
      <h3 class="subtitle">❘ Advanced Trading</h3>
      <h2 class="title">
        Step up with advanced
        <span class="nowrap">spot trading</span><br />
        and 25x leverage on Future
      </h2>
    </div>

    <!-- Image -->
    <div class="image-wrapper">
      <img
        class="spot-image"
        :src="spot1"
        alt="Advanced spot trading interface showing trading charts and leverage options"
      />
    </div>
  </section>
</template>

<script setup>
import spot1 from "../assets/GIF/6dd8b16727dce17a403312ece351459126ba8c1a.gif";
import arrow from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
</script>

<style scoped>
/* Ensure no white overflow on small screens */
* {
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
}

.main-content {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 16px 0;
  background: rgba(162, 22, 255, 0.04);
  border-radius: 16px;
  gap: 16px;
  box-sizing: border-box;
}

/* Tablet adjustments */
@media (min-width: 640px) {
  .main-content {
    padding: 32px 24px 0;
    gap: 24px;
  }
}

/* Desktop */
@media (min-width: 768px) {
  .main-content {
    padding: 32px 32px 0;
  }
}

/* Arrow Button */
.arrow-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  z-index: 10;
}
.arrow-btn:hover {
  background: #f1f1f1;
}
.arrow-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(83, 25, 158, 0.4);
}

@media (min-width: 640px) {
  .arrow-btn {
    top: 24px;
    right: 24px;
  }
}

.icon {
  width: 20px;
  height: 20px;
}
@media (min-width: 640px) {
  .icon {
    width: 24px;
    height: 24px;
  }
}

/* Text */
.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
}
@media (min-width: 640px) {
  .text-content {
    gap: 16px;
  }
}

.subtitle {
  font-weight: 500;
  color: #53199e;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
}
@media (min-width: 480px) {
  .subtitle {
    font-size: 18px;
    line-height: 25px;
  }
}
@media (min-width: 640px) {
  .subtitle {
    font-size: 20px;
  }
}

.title {
  font-weight: 500;
  color: #323232;
  font-size: 18px;
  line-height: 28px;
  word-break: break-word;
}
@media (min-width: 480px) {
  .title {
    font-size: 22px;
    line-height: 32px;
  }
}
@media (min-width: 640px) {
  .title {
    font-size: 28px;
    line-height: 38px;
  }
}
@media (min-width: 1024px) {
  .title {
    font-size: 32px;
    line-height: 42px;
  }
}

.nowrap {
  white-space: nowrap;
}

/* Image */
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
}

.spot-image {
  width: 100%;
  max-width: 460px;
  height: auto;
  object-fit: contain;
}
@media (min-width: 1024px) {
  .spot-image {
    max-width: 500px;
  }
}
</style>
