<template>
  <section class="investment-section">
    <!-- Left content -->
    <div class="left-content">
      <!-- Amount text -->
      <div class="amount-section">
        <p class="amount-text">
          With a principal of 
          <span class="amount-value">Rp {{ formattedAmount }}</span>
        </p>

        <!-- Slider -->
        <input
          type="range"
          :min="minAmount"
          :max="maxAmount"
          v-model.number="amount"
          class="slider"
        />
      </div>

      <!-- Year selector -->
      <div class="year-section">
        <div class="year-label">For</div>
        <div class="year-options" role="radiogroup" aria-label="Investment duration">
          <button
            v-for="option in yearOptions"
            :key="option.value"
            :class="['year-btn', selectedYear === option.value ? 'active' : '']"
            @click="handleYearSelect(option.value)"
            role="radio"
            :aria-checked="selectedYear === option.value"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Right content (Result) -->
    <div class="right-content">
      <div class="result-text">Your principal would've become</div>
      <div class="result-values">
        <div class="principal">Rp 64.377</div>
        <div class="percent">+100.32%</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BitcoinInvestmentSection",
  data() {
    return {
      selectedYear: 1,
      amount: 11000,
      minAmount: 11000,
      maxAmount: 100000,
      yearOptions: [
        { value: 1, label: "1 year" },
        { value: 2, label: "2 years" },
        { value: 3, label: "3 years" },
        { value: 4, label: "4 years" },
      ],
    };
  },
  computed: {
    formattedAmount() {
      return this.amount.toLocaleString();
    },
  },
  methods: {
    handleYearSelect(year) {
      this.selectedYear = year;
    },
  },
};
</script>

<style scoped>
.investment-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
}

@media (min-width: 1024px) {
  .investment-section {
    flex-direction: row;
  }
}

.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.amount-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.amount-text {
  font-size: 18px;
  color: #000;
}

.amount-value {
  font-weight: bold;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 16px;
  border-radius: 9999px;
  border: 1px solid #cdcdcd;
  background: linear-gradient(to right, #7815f9 0%, #e2e5e7 0%);
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: white;
  border: 2px solid #7815f9;
  margin-top: -6px;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: white;
  border: 2px solid #7815f9;
  cursor: pointer;
}

.slider::-webkit-slider-runnable-track {
  height: 16px;
  border-radius: 9999px;
}

.slider::-moz-range-track {
  height: 16px;
  border-radius: 9999px;
}

/* Year selector */
.year-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.year-label {
  font-size: 18px;
  color: #000;
}

.year-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.year-btn {
  flex: 1;
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid #dcdcdc;
  background: transparent;
  color: #2c2c2c;
  cursor: pointer;
  transition: all 0.2s ease;
}

.year-btn:hover {
  border-color: #7815f9;
  background: rgba(120,21,249,0.05);
}

.year-btn.active {
  border-color: #7815f9;
  background: rgba(120,21,249,0.06);
  color: #7815f9;
}

/* Right content */
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

@media (min-width: 1024px) {
  .right-content {
    text-align: center;
    align-items: center;
  }
}

.result-text {
  font-size: 18px;
  text-align: center;
  color: #000;
}

.result-values {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.principal {
  font-size: 32px;
  font-weight: bold;
  color: #25ba7f;
}

.percent {
  font-size: 24px;
  font-weight: 600;
  color: #25ba7f;
}
</style>
