<template>
  <section class="trading-experience">
    <!-- Title + Subtitle -->
    <div class="text-content">
      <h2>Start Your Crypto Journey</h2>
      <p>Experience to trade 300+ cryptocurrencies</p>
    </div>

    <!-- Button -->
    <button class="cta-button" aria-label="Download Bitzaro Now">
      Download Bitzaro Now
    </button>
  </section>
</template>

<script>
export default {
  name: "TradingExperienceSection",
};
</script>

<style scoped>
.trading-experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-block: 72px;
  background: radial-gradient(
    64.78% 100% at 50% 100%,
    #a464f9 0%,
    #7815f9 50.49%,
    #470c93 100%
  );
  text-align: center;
}



.text-content h2 {
  font-weight: 700;
  color: #ffffff;
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 16px;
}

@media (min-width: 640px) {
  .text-content h2 {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  .text-content h2 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .text-content h2 {
    font-size: 3.75rem;
  }
}

.text-content p {
  font-weight: 500;
  color: #f2f2f2;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .text-content p {
    font-size: 1.125rem;
  }
}

@media (min-width: 768px) {
  .text-content p {
    font-size: 1.25rem;
  }
}

.cta-button {
  width: 250px;
  padding: 12px 20px;
  background-color: #ffffff;
  color: #7815f9;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;
  border: none;
}

@media (min-width: 640px) {
  .cta-button {
    width: 300px;
    font-size: 1.25rem;
  }
}

.cta-button:hover {
  background-color: #f2f2f2;
}
</style>
