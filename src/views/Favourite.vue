<template>
  <div class="favourite-page">
    <NavigationSection />

    <div class="content">
      <!-- Chart grid -->
      <section class="chart-grid">
        <LineChartCard
          v-for="item in lineChartMockData"
          :key="item.id"
          v-bind="item"
        />
      </section>

      <!-- Search + Filter + Table -->
      <section class="table-section">
        <div class="search-wrapper">
          <SearchBar />
        </div>

        <div class="filter-container">
          <div class="filter-item">Spot</div>
          <div class="filter-item">Future</div>
        </div>

        <FavouriteTable />
        <InsightsSectionDark />
      </section>
    </div>
  </div>
</template>

<script>
import NavigationSection from "../components/NavigationSection.vue";
import LineChartCard from "../components/LineChartCard.vue";
import { lineChartMockData } from "../data/lineChartData";
import InsightsSectionDark from "../components/InsightsSectionDark.vue";
import SearchBar from "../components/SearchBar.vue";
import FavouriteTable from "../components/FavouriteTable.vue";

export default {
  name: "FavouritePage",
  components: {
    NavigationSection,
    LineChartCard,
    InsightsSectionDark,
    SearchBar,
    FavouriteTable,
  },
  data() {
    return {
      lineChartMockData,
    };
  },
};
</script>

<style scoped>
.favourite-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #16121f;
  backdrop-filter: blur(5px) brightness(100%);
  -webkit-backdrop-filter: blur(5px) brightness(100%);
}

.content {
  flex-grow: 1;
}

/* Chart grid section */
.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  padding-top: 120px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .chart-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .chart-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Table and search section */
.table-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.search-wrapper {
  padding-top: 16px;
}

/* Filter buttons */
.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #ccc;
  padding-top: 16px;
  padding-bottom: 32px;
}

.filter-item {
  background-color: #3f3f46;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 14px;
}
</style>
