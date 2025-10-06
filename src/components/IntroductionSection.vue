<template>
  <section class="intro-section">
    <!-- Background Image -->
    <img
      :src="heroSection"
      alt="Background gradient overlay"
      class="intro-bg"
    />

    <!-- Main Gradient Overlay -->
    <div class="intro-gradient"></div>

    <!-- Inner content wrapper -->
    <div class="intro-container">
      <div class="intro-content">
        <!-- Text -->
        <div class="intro-text">
          <h1>
            Trade Crypto only <br class="break" /> on Bitzaro
          </h1>
          <p>
            Industry-grade infrastructure empowers you to
            <br class="hidden-sm" />
            trade with confidence
          </p>
          <router-link to="/market">
            <button class="btn-trade" aria-label="Start trading crypto on Bitzaro">
              Trade Crypto
            </button>
          </router-link>
        </div>

        <!-- Phone Mockup with Gradient -->
        <div class="intro-phone">
          <div class="phone-wrapper">
            <img
              :src="phoneMockUp"
              alt="Mobile phones showing crypto trading interface"
              class="phone-img"
            />
            <div
              class="phone-gradient"
              :style="{
                WebkitMaskImage: 'url(' + phoneMockUp + ')',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                WebkitMaskPosition: 'center bottom',
                maskImage: 'url(' + phoneMockUp + ')',
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
                maskPosition: 'center bottom',
                background: 'linear-gradient(to top, #121126 15%, transparent 85%)',
                opacity: 0.9,
                transform: 'translateY(1px) scale(1.01)',
                filter: 'blur(2px)'
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heroSection from "../assets/Hero_Section/Hero_Section.png";
import phoneMockUp from "../assets/Phone_MockUp/PhoneMockUp.png";

export default {
  name: "IntroductionSection",
  data() {
    return {
      heroSection,
      phoneMockUp,
    };
  },
};
</script>

<style scoped>
/* Section container */
.intro-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
  background: #16121f;
  overflow: hidden;
}

/* Background image */
.intro-bg {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 900px;
  object-fit: contain;
}

/* Gradient overlay */
.intro-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(18, 17, 38, 0) 34.38%, #121126 85.78%);
}

/* Inner wrapper */
.intro-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Content layout */
.intro-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  min-height: 650px;
  padding: 32px 0;
  gap: 40px;
}

@media (min-width: 768px) {
  .intro-content {
    flex-direction: row;
  }
}

/* Text */
.intro-text {
  flex: 1;
  color: white;
  text-align: center;
  margin-top: 0;
}
@media (min-width: 768px) {
  .intro-text {
    text-align: left;
    margin-top: 80px;
  }
}
.intro-text h1 {
  font-weight: 900;
  font-size: 32px;
  line-height: 1.2;
}
@media (min-width: 640px) {
  .intro-text h1 {
    font-size: 38px;
  }
}
@media (min-width: 1024px) {
  .intro-text h1 {
    font-size: 52px;
  }
}
@media (min-width: 1280px) {
  .intro-text h1 {
    font-size: 62px;
  }
}
.intro-text p {
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.6;
  color: #e1e1e1;
}
@media (min-width: 768px) {
  .intro-text p {
    font-size: 18px;
  }
}
@media (min-width: 1024px) {
  .intro-text p {
    font-size: 20px;
  }
}

/* CTA button */
.btn-trade {
  margin-top: 44px;
  padding: 10px 20px;
  background: #7815f9;
  border-radius: 6px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-trade:hover {
  background: rgba(120, 21, 249, 0.9);
}
.btn-trade:focus {
  outline: 2px solid #7815f9;
  outline-offset: 2px;
}

/* Phone mockup */
.intro-phone {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
}
@media (min-width: 768px) {
  .intro-phone {
    justify-content: flex-end;
  }
}
.phone-wrapper {
  position: relative;
  width: 280px;
}
@media (min-width: 768px) {
  .phone-wrapper {
    width: 400px;
  }
}
@media (min-width: 1024px) {
  .phone-wrapper {
    width: 583px;
  }
}
.phone-img {
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}
.phone-gradient {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}

/* Utility */
.break {
  display: block;
}
.hidden-sm {
  display: none;
}
@media (min-width: 640px) {
  .hidden-sm {
    display: inline;
  }
}
</style>
