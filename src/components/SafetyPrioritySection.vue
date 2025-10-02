<template>
  <section
    class="safety-priority"
    aria-labelledby="safety-priority-heading"
  >
    <h2 id="safety-priority-heading" class="sr-only">
      Safety Priority Features
    </h2>

    <article
      v-for="feature in safetyFeatures"
      :key="feature.id"
      class="feature-card"
    >
      <img
        class="feature-icon"
        :src="feature.icon"
        :alt="feature.title + ' icon'"
        role="img"
      />
      <div class="feature-text">
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.description }}</p>
      </div>
    </article>
  </section>
</template>

<script>
import biometric from "../assets/Icon/Your Safety, Our Priority/Savings.svg";
import custodian from "../assets/Icon/Your Safety, Our Priority/fingerprint.svg";

export default {
  name: "SafetyPrioritySection",
  data() {
    return {
      safetyFeatures: [
        {
          id: 1,
          icon: biometric,
          title: "Biometric Logins",
          description:
            "With fingerprint and face ID, only you have access to your Bitzaro account.",
        },
        {
          id: 2,
          icon: custodian,
          title: "World Class Custodian",
          description:
            "Assets are securely stored in PT Kustodian Koin Indonesia (ICC) and Fireblocks, using world-class technology.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.safety-priority {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .safety-priority {
    flex-direction: row;
    gap: 62px;
  }
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
}

.feature-icon {
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
