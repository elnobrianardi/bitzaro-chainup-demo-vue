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
                filter: 'blur(2px)',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroSection from "../assets/Hero_Section/Hero_Section.png";
import phoneMockUp from "../assets/Phone_MockUp/PhoneMockUp.png";
</script>

<style scoped>
/* SECTION */
.intro-section {
  position: relative;
  width: 100%;
  min-height: 110vh;
  padding-top: 60px;
  background: #16121f;
  overflow: hidden;
  margin-inline: auto;
}

/* BACKGROUND IMAGE */
.intro-bg {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 900px;
  object-fit: contain; /* ✅ no cropping */
  object-position: center;
  z-index: 0;
  pointer-events: none;
}

/* GRADIENT OVERLAY */
.intro-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(18,17,38,0) 34.38%, #121126 85.78%);
}

/* CONTAINER */
.intro-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

/* FLEX LAYOUT */
.intro-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  min-height: 650px;
  padding: 32px 0;
  gap: 40px;
}
@media (min-width: 768px) {
  .intro-content {
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }
}

/* TEXT */
.intro-text {
  flex: 1;
  color: white;
  text-align: center;
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
    font-size: 42px;
  }
}
@media (min-width: 1024px) {
  .intro-text h1 {
    font-size: 62px;
  }
}
.intro-text p {
  margin-top: 16px;
  font-size: 16px;
  color: #e1e1e1;
  line-height: 1.6;
}

/* BUTTON */
.btn-trade {
  margin-top: 40px;
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

/* PHONE */
.intro-phone {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
@media (min-width: 768px) {
  .intro-phone {
    justify-content: flex-end;
  }
}

.phone-wrapper {
  position: relative;
  width: clamp(300px, 42vw, 500px);
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media (min-width: 1220px) {
  .phone-wrapper {
    width: clamp(500px, 50vw, 650px); 
  }
}


.phone-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: center;
}

.phone-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* RESPONSIVE FIXES */
@media (max-width: 640px) {
  .intro-section {
    min-height: 100vh;
  }
  .intro-content {
    gap: 24px;
    padding: 24px 0;
  }
  .intro-text p {
    font-size: 14px;
  }
  .btn-trade {
    font-size: 14px;
    padding: 8px 16px;
  }
}
</style>
