<template>
  <section class="app-overview">
    <!-- Button on top right -->
    <button
      class="arrow-btn"
      aria-label="Learn more about trading cryptocurrencies"
    >
      <img class="icon" alt="" :src="arrowRightAlt4" />
    </button>

    <!-- Image -->
    <img
      class="firebtc"
      alt="Cryptocurrency trading illustration"
      :src="firebtc"
    />

    <!-- Text -->
    <h2 class="title">
      <span class="gray">Swap and discover <br /></span>
      <span class="black">
        <span class="orange">the hottest tokens</span> in Web3
      </span>
    </h2>
  </section>
</template>

<script>
import arrowRightAlt4 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import firebtc from "../assets/Add-On/fire-btc.png";

export default {
  name: "AppOverviewSection",
  data() {
    return {
      arrowRightAlt4,
      firebtc
    };
  }
};
</script>

<style scoped>
.app-overview {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 16px;
  overflow: visible;
  background: linear-gradient(
      0deg,
      rgba(255, 145, 34, 0.1),
      rgba(255, 145, 34, 0.1)
    ),
    linear-gradient(
      0deg,
      rgba(250, 250, 250, 0.2),
      rgba(250, 250, 250, 0.2)
    );
}

@media (min-width: 640px) {
  .app-overview {
    flex-direction: row;
    height: 160px;
    gap: 32px;
    padding: 32px 28px;
  }
}

/* Button */
.arrow-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
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
  box-shadow: 0 0 0 2px #3b82f6;
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

/* FireBTC image */
.firebtc {
  width: 78px;
  height: auto;
  object-fit: contain;
}

/* Title */
.title {
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: left;
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
    width: fit-content;
  }
}

.gray {
  color: #323232;
}
.black {
  color: #000;
}
.orange {
  color: #e37404;
}
</style>
