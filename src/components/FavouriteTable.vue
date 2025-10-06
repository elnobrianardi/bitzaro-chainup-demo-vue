<template>
  <div class="favourite-table">
    <h2 class="title">Trending Coins</h2>

    <!-- Scrollable wrapper -->
    <div class="table-wrapper">
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Coins</th>
              <th>Last Price</th>
              <th class="hide-sm">High</th>
              <th class="hide-sm">Low</th>
              <th>Change</th>
              <th class="hide-md">24H Turnover</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in tableData" :key="idx" class="table-row">
              <td>
                <div class="coin-cell">
                  <img :src="starYellow" alt="star" class="star" />
                  <img :src="row.src" :alt="row.coin" class="coin-icon" />
                  <span class="coin-name">{{ row.coin }}</span>
                </div>
              </td>
              <td>{{ row.price }}</td>
              <td class="hide-sm">{{ row.high }}</td>
              <td class="hide-sm">{{ row.low }}</td>
              <td :class="['change', row.changeColor]">{{ row.change }}</td>
              <td class="hide-md">{{ row.turnover }}</td>
              <td class="action" @click="onTrade(row.coin)">Trade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Load more -->
    <div class="load-more">
      <button class="load-btn">Load More Coins</button>
    </div>
  </div>
</template>

<script>
import starYellow from "../assets/Icon/Arrow/kid_star.png";
import tableData from "../data/favouriteTableData";

export default {
  name: "FavouriteTable",
  data() {
    return {
      tableData,
      starYellow,
    };
  },
  methods: {
    onTrade(coin) {
      console.log("Trade clicked:", coin);
    },
  },
};
</script>

<style scoped>
.favourite-table {
  padding: 32px 0;
  color: white;
}

.title {
  font-size: 20px;
  margin-bottom: 24px;
  color: white;
}

/* Scrollable wrapper */
.table-wrapper {
  overflow-x: auto;
}

.table-container {
  min-width: max-content;
}

/* Table base */
.custom-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

.custom-table th {
  text-align: left;
  font-size: 12px;
  color: #9ca3af;
  padding: 8px 0;
}

.custom-table td {
  padding: 8px 0;
  font-size: 13px;
  border-bottom: 1px solid #3f3f46;
}

/* Coin cell */
.coin-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.star {
  width: 16px;
  height: 16px;
}

.coin-icon {
  width: 24px;
  height: 24px;
}

.coin-name {
  font-size: 13px;
}

/* Change column */
.change {
  font-weight: 500;
}

/* Action */
.action {
  color: #913dff;
  text-align: right;
  cursor: pointer;
}

.action:hover {
  text-decoration: underline;
}

/* Load more button */
.load-more {
  display: flex;
  justify-content: center;
}

.load-btn {
  margin: 24px 0;
  padding: 8px 16px;
  border: none;
  border-radius: 12px;
  background-color: #3f3f46;
  color: white;
  font-size: 13px;
  cursor: pointer;
}

.load-btn:hover {
  background-color: #52525b;
}

/* Responsive helpers */
.hide-sm {
  display: none;
}

.hide-md {
  display: none;
}

@media (min-width: 640px) {
  .hide-sm {
    display: table-cell;
  }
}

@media (min-width: 768px) {
  .hide-md {
    display: table-cell;
  }
}
</style>
