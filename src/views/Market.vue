<template>
  <div class="market-page">
    <NavigationSection />

    <section class="hero-section">
      <MarketHeroSection />
    </section>

    <section class="chart-grid">
      <LineChartCard
        v-for="item in lineChartMockData"
        :key="item.id"
        v-bind="item"
      />
    </section>

    <section class="content-section">
      <TrendingTable />
      <InsightsSectionDark />
    </section>
  </div>
</template>

<script>
import NavigationSection from "../components/NavigationSection.vue";
import MarketHeroSection from "../components/MarketHeroSection.vue";
import LineChartCard from "../components/LineChartCard.vue";
import TrendingTable from "../components/TrendingTable.vue";
import InsightsSectionDark from "../components/InsightsSectionDark.vue";
import { lineChartMockData } from "../data/lineChartData.js";

export default {
  name: "MarketPage",
  components: {
    NavigationSection,
    MarketHeroSection,
    LineChartCard,
    TrendingTable,
    InsightsSectionDark,
  },
  data() {
    return {
      lineChartMockData,
    };
  },
};
</script>

<style scoped>
.market-page {
  width: 100%;
  background-color: #000;
  color: #fff;
}

/* Hero Section */
.hero-section {
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Chart Grid */
.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 0 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 1024px) {
  .chart-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Content Section */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
}
</style>
