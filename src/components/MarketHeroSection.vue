<template>
  <section class="hero-section">
    <!-- Text content -->
    <div class="hero-text">
      <h2 class="hero-title">Welcome to Bitzaro</h2>
      <p class="hero-subtitle">Engineering the Digital Economy</p>
      <button class="hero-button">Sign Up</button>
    </div>

    <!-- Image -->
    <div class="hero-image-wrapper">
      <img :src="HeroImage" alt="Bitzaro Hero" class="hero-image" />
    </div>
  </section>
</template>

<script>
import HeroImage from "../assets/Hero_Section/Image_Inside_Banner_(Hero_Section).png";

export default {
  name: "MarketHeroSection",
  data() {
    return {
      HeroImage,
    };
  },
};
</script>

<style scoped>
.hero-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 32px;
  color: white;
}

@media (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    gap: 40px;
    padding: 100px 20px;
  }
}

/* Text side */
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  width: 100%;
}

@media (min-width: 768px) {
  .hero-text {
    align-items: flex-start;
    text-align: left;
    width: 50%;
    gap: 16px;
  }
}

.hero-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 52px;
  }
}

.hero-subtitle {
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 20px;
  }
}

.hero-button {
  margin-top: 16px;
  padding: 10px 24px;
  background-color: #7815f9;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.hero-button:hover {
  background-color: #6012cc;
}

/* Image side */
.hero-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-image-wrapper {
    width: 50%;
    justify-content: flex-end;
  }
}

.hero-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
