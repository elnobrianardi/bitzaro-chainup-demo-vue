<template>
  <section class="content-wrapper">
    <!-- Button positioned top right -->
    <button class="nav-button" aria-label="Navigate to next section">
      <img :src="arrowRightAlt3" class="icon" alt="Arrow icon" />
    </button>

    <div class="content">
      <div class="tag">❘ Beginner Friendly</div>

      <h2 class="title">
        The simplest way to trade, <br />
        perfect for beginner
      </h2>

      <!-- Centered image -->
      <div class="image-wrapper">
        <img
          class="success-image"
          :src="successBuy1"
          alt="Mobile app interface showing successful purchase completion"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import arrowRightAlt3 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import successBuy1 from "../assets/GIF/5186020064e1c2d1d8a3432e146567abe8e7504a.gif";
</script>

<style scoped>
* {
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
}

.content-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 0;
  border-radius: 16px;
  background: linear-gradient(
    0deg,
    rgba(94, 255, 255, 0.08) 0%,
    rgba(94, 255, 255, 0.08) 100%
  );
  overflow: hidden;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .content-wrapper {
    padding: 32px 24px 0;
  }
}

@media (min-width: 768px) {
  .content-wrapper {
    padding: 32px 32px 0;
  }
}

/* Button */
.nav-button {
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
.nav-button:hover {
  background: #f9f9f9;
}
.nav-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(11, 140, 140, 0.5);
}

@media (min-width: 640px) {
  .nav-button {
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

/* Text content */
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}
@media (min-width: 640px) {
  .content {
    gap: 16px;
  }
}

.tag {
  font-weight: 500;
  color: #0b8c8c;
  font-size: 16px;
  line-height: 22px;
  white-space: nowrap;
}
@media (min-width: 480px) {
  .tag {
    font-size: 18px;
    line-height: 25px;
  }
}
@media (min-width: 640px) {
  .tag {
    font-size: 20px;
  }
}

/* Title */
.title {
  font-weight: 500;
  color: #323232;
  font-size: 20px;
  line-height: 28px;
  word-break: break-word;
}
@media (min-width: 480px) {
  .title {
    font-size: 24px;
    line-height: 32px;
  }
}
@media (min-width: 640px) {
  .title {
    font-size: 30px;
    line-height: 40px;
  }
}

/* Image */
.image-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
  padding-bottom: 16px;
}
@media (min-width: 640px) {
  .image-wrapper {
    margin-top: 32px;
  }
}

.success-image {
  width: 100%;
  max-width: 340px;
  height: auto;
  object-fit: contain;
}
@media (min-width: 1024px) {
  .success-image {
    max-width: 380px;
  }
}
</style>
