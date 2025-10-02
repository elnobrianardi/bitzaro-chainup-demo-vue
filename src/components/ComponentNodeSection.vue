<template>
  <section class="component-node">
    <!-- Button in top-right -->
    <button
      class="arrow-btn"
      aria-label="Learn more about Bitzaro Earn"
    >
      <img class="icon" alt="" :src="arrow" />
    </button>

    <!-- Text content -->
    <div class="text-content">
      <h2 class="title">
        <span class="gray">
          Get a bonus every hour with <br />
          Bitzaro Earn
        </span>
        <span class="blue"> up to</span>
        <span class="big-blue"> 25%</span>
        <span class="blue"> APY</span>
      </h2>
    </div>

    <!-- Image below text -->
    <div class="image-wrapper">
      <img
        class="bit-earn-img"
        alt="Bitzaro Earn promotional graphic"
        :src="bitEarn"
      />
    </div>
  </section>
</template>

<script>
import arrow from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import bitEarn from "../assets/Add-On/bit-earn.png";

export default {
  name: "ComponentNodeSection",
  data() {
    return {
      arrow,
      bitEarn
    };
  }
};
</script>

<style scoped>
.component-node {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
      0deg,
      rgba(14, 119, 255, 0.08) 0%,
      rgba(14, 119, 255, 0.08) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
}

@media (min-width: 640px) {
  .component-node {
    height: 352px;
  }
}

/* Button */
.arrow-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 4px;
  background: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  z-index: 10;
}
.arrow-btn:hover {
  background: #f9f9f9;
}
.arrow-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px #1761f5;
}

@media (min-width: 640px) {
  .arrow-btn {
    top: 16px;
    right: 16px;
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

/* Text content */
.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 24px;
  width: 100%;
  z-index: 10;
}
@media (min-width: 640px) {
  .text-content {
    padding: 32px;
  }
}

.title {
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  color: #323232;
  letter-spacing: 0;
}
@media (min-width: 480px) {
  .title {
    font-size: 24px;
    line-height: 36px;
  }
}
@media (min-width: 640px) {
  .title {
    font-size: 30px;
    line-height: 40px;
  }
}
.gray {
  color: #323232;
}
.blue {
  color: #1761f5;
  font-weight: 500;
}
.big-blue {
  color: #1761f5;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
}

/* Image wrapper */
.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;
  height: 200px;
}
@media (min-width: 640px) {
  .image-wrapper {
    height: 220px;
  }
}
.bit-earn-img {
  max-height: 100%;
  width: auto;
  object-fit: contain;
}
</style>
