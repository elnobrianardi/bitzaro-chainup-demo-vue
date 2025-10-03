<template>
  <section class="features-section">
    <!-- Button on top right -->
    <button
      class="arrow-btn"
      aria-label="Learn more about trading cryptocurrencies"
    >
      <img class="icon" alt="" :src="arrowRightAlt4" />
    </button>

    <!-- Image container -->
    <div class="image-container">
      <img
        class="coin-image"
        alt="Cryptocurrency trading illustration"
        :src="coins"
      />
    </div>

    <!-- Text -->
    <h2 class="title">
      <span class="gray">Trade </span>
      <span class="black">300+ cryptos </span>
      <span class="gray">
        <br />
        with Rupiah
      </span>
    </h2>
  </section>
</template>

<script>
import arrowRightAlt4 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import coins from "../assets/Add-On/more-coins@2x.png";

export default {
  name: "FeaturesSection",
  data() {
    return {
      arrowRightAlt4,
      coins
    };
  }
};
</script>

<style scoped>
.features-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  align-items: center;
  box-sizing: border-box;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(
      0deg,
      rgba(246, 247, 248, 1) 0%,
      rgba(246, 247, 248, 1) 100%
    ),
    linear-gradient(
      0deg,
      rgba(239, 242, 245, 1) 0%,
      rgba(239, 242, 245, 1) 100%
    );
}

@media (min-width: 640px) {
  .features-section {
    flex-direction: row;
    gap: 32px;
    padding: 0 28px;
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
  box-shadow: 0 0 0 2px #3b82f6; /* biru ala Tailwind */
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

/* Image */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 180px;
  height: 128px;
  overflow: hidden;
  border-radius: 12px;
  flex-shrink: 0;
}
@media (min-width: 640px) {
  .image-container {
    width: 180px;
    height: 160px;
    max-width: none;
    justify-content: flex-start;
  }
}

.coin-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Text */
.title {
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  letter-spacing: 0;
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
    width: auto;
  }
}

.gray {
  color: #323232;
}
.black {
  color: #000;
}
</style>
