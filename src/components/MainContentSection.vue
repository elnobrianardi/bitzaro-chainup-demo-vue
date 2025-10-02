<template>
  <section class="main-content">
    <!-- Arrow button at top right -->
    <button
      class="arrow-btn"
      aria-label="Learn more about advanced trading"
    >
      <img :src="arrow" class="icon" alt="" />
    </button>

    <!-- Text content -->
    <div class="text-content">
      <h3 class="subtitle">❘ Advanced Trading</h3>

      <h2 class="title">
        Step up with advanced 
        <span class="nowrap">spot trading </span><br />
        and 25x leverage on Future
      </h2>
    </div>

    <!-- Image below the h2 -->
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
.main-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 16px 0;
  background: rgba(162, 22, 255, 0.04); /* #a216ff0a */
  border-radius: 16px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .main-content {
    padding: 32px 24px 0;
    gap: 24px;
  }
}
@media (min-width: 768px) {
  .main-content {
    padding: 32px 32px 0;
  }
}

/* Button */
.arrow-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}
.arrow-btn:hover {
  background: #f9f9f9;
}
.arrow-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(83, 25, 158, 0.5);
}

@media (min-width: 640px) {
  .arrow-btn {
    top: 32px;
    right: 32px;
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
  gap: 8px;
  width: 100%;
  margin-bottom: 0;
}
@media (min-width: 640px) {
  .text-content {
    gap: 16px;
    margin-bottom: 32px;
  }
}

.subtitle {
  font-weight: 500;
  color: #53199e;
  font-size: 18px;
  line-height: 25px;
  white-space: nowrap;
}
@media (min-width: 640px) {
  .subtitle {
    font-size: 20px;
  }
}

.title {
  font-weight: 500;
  color: #323232;
  font-size: 20px;
  line-height: 32px;
}
@media (min-width: 480px) {
  .title {
    font-size: 24px;
  }
}
@media (min-width: 640px) {
  .title {
    font-size: 30px;
    line-height: 40px;
  }
}

.nowrap {
  white-space: nowrap;
}

/* Image */
.image-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.spot-image {
  width: 100%;
  max-width: 458px;
  height: auto;
  object-fit: contain;
}
</style>
