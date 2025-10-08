<template>
  <section class="component-node">
    <!-- Button -->
    <button class="arrow-btn" aria-label="Learn more about Bitzaro Earn">
      <img class="icon" alt="" :src="arrow" />
    </button>

    <!-- Text -->
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

    <!-- Image -->
    <div class="image-wrapper">
      <img class="bit-earn-img" alt="Bitzaro Earn promotional graphic" :src="bitEarn" />
    </div>
  </section>
</template>

<script>
import arrow from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import bitEarn from "../assets/Add-On/bit-earn.png";

export default {
  name: "ComponentNodeSection",
  data() {
    return { arrow, bitEarn };
  },
};
</script>

<style scoped>
.component-node {
  position: relative;
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
    #fff;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* Fix white overflow issue */
* {
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
}

/* Button */
.arrow-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 6px;
  z-index: 10;
}
.arrow-btn:hover {
  background: #f1f1f1;
}
.icon {
  width: 20px;
  height: 20px;
}

/* Text */
.text-content {
  padding: 24px;
  width: 100%;
}
.title {
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  color: #323232;
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
  font-size: 36px;
  line-height: 48px;
}

/* Image */
.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: auto;
  padding: 0 16px 16px;
}
.bit-earn-img {
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;
}

/* Responsive adjustments */
@media (min-width: 480px) {
  .title {
    font-size: 22px;
    line-height: 32px;
  }
  .big-blue {
    font-size: 40px;
    line-height: 52px;
  }
}

@media (min-width: 640px) {
  .component-node {
    height: 352px;
  }
  .text-content {
    padding: 32px;
  }
  .title {
    font-size: 28px;
    line-height: 40px;
  }
  .big-blue {
    font-size: 44px;
    line-height: 56px;
  }
}

@media (min-width: 1024px) {
  .bit-earn-img {
    max-width: 480px;
  }
}
</style>
