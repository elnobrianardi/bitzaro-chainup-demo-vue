<template>
  <section
    class="investment-info"
    role="region"
    aria-labelledby="investment-info-heading"
  >
    <h2 id="investment-info-heading" class="sr-only">
      Investment Security Features
    </h2>

    <article
      v-for="feature in investmentFeatures"
      :key="feature.id"
      class="feature-card"
    >
      <div
        class="icon-wrapper"
        role="img"
        :aria-label="feature.title + ' icon'"
      >
        <img class="icon" :src="feature.icon" :alt="feature.title + ' icon'" />
      </div>

      <div class="feature-text">
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.description }}</p>
      </div>
    </article>
  </section>
</template>

<script>
import icon1 from "../assets/Icon/Your Safety, Our Priority/license.svg";
import icon2 from "../assets/Icon/Your Safety, Our Priority/shield_toggle.svg";

export default {
  name: "InvestmentInfoSection",
  data() {
    return {
      investmentFeatures: [
        {
          id: 1,
          icon: icon1,
          title: "Registered and Licensed",
          description:
            "Officially registered and supervised by OJK and/or BAPPEBTI, ISO 27001:2022 certified.",
        },
        {
          id: 2,
          icon: icon2,
          title: "2-Factor Authentication",
          description:
            "Google Authenticator ensures the security of your transactions on Bitzaro.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.investment-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 40px auto;
}

@media (min-width: 768px) {
  .investment-info {
    flex-direction: row;
    gap: 62px;
    margin-bottom: 80px;
  }
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.icon {
  width: 40px;
  height: 40px;
}

.feature-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.feature-title {
  font-weight: 600;
  font-size: 20px;
  color: #1b1b1b;
  line-height: 30px;
}

@media (min-width: 640px) {
  .feature-title {
    font-size: 24px;
  }
}

.feature-desc {
  font-weight: 400;
  font-size: 16px;
  color: #000;
  text-align: left;
  line-height: 30px;
}

@media (min-width: 640px) {
  .feature-desc {
    font-size: 18px;
  }
}

/* sr-only untuk heading */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
