<template>
  <div class="trending-table">
    <h2 class="title">Trending Coins</h2>

    <!-- Scrollable wrapper -->
    <div class="table-wrapper">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>Coins</th>
              <th>Last Price</th>
              <th>Change</th>
              <th class="hide-md">24H Turnover</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, idx) in tableData"
              :key="idx"
              class="table-row"
              @mouseenter="hovered = idx"
              @mouseleave="hovered = null"
              :class="{ hovered: hovered === idx }"
            >
              <td>
                <div class="coin-info">
                  <img :src="row.src" :alt="row.coin" class="coin-icon" />
                  <span class="coin-name">{{ row.coin }}</span>
                </div>
              </td>
              <td>{{ row.price }}</td>
              <td :class="row.changeColor">{{ row.change }}</td>
              <td class="hide-md">{{ row.turnover }}</td>
              <td class="text-right">
                <router-link to="/spot" class="trade-link">Trade</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <router-link to="/spot" class="view-all">
      View All Coins
    </router-link>
  </div>
</template>

<script>
import tableData from "../data/trendingTable";

export default {
  name: "TrendingTable",
  data() {
    return {
      tableData,
      hovered: null,
    };
  },
};
</script>

<style scoped>
.trending-table {
  padding: 32px 16px 160px;
  color: white;
  width: 100%;
}

.title {
  font-size: 22px;
  margin-bottom: 24px;
  font-weight: 600;
}

.table-wrapper {
  overflow-x: auto;
}

.table-container {
  min-width: 600px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table th {
  text-align: left;
  padding: 8px 12px;
  color: #888;
  font-weight: 500;
  border-bottom: 1px solid #333;
  font-size: 13px;
}

.table td {
  padding: 12px;
  vertical-align: middle;
  border-bottom: 1px solid #333;
  font-size: 13px;
}

.table-row:hover {
  background-color: #1f1f1f;
}

.coin-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coin-icon {
  width: 24px;
  height: 24px;
}

.coin-name {
  font-size: 13px;
  white-space: nowrap;
}

.text-right {
  text-align: right;
}

.trade-link {
  color: #913dff;
  text-decoration: none;
  transition: 0.2s;
}

.trade-link:hover {
  text-decoration: underline;
}

.view-all {
  display: block;
  text-align: center;
  margin-top: 16px;
  color: #aaa;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
}

.view-all:hover {
  color: #ccc;
}

/* Responsive */
@media (max-width: 768px) {
  .hide-md {
    display: none;
  }
}
.text-green-400 {
  color: #00c851;
}
.text-red-400 {
  color: #ff4d4d;
}
</style>
