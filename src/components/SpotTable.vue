<template>
  <div class="spot-table">
    <h2 class="table-title">Trending Coins</h2>

    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th>Coins</th>
            <th>Last Price</th>
            <th class="hide-sm">High</th>
            <th class="hide-sm">Low</th>
            <th>Change</th>
            <th class="hide-md">24H Turnover</th>
            <th class="align-right">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, idx) in tableData" :key="idx" class="table-row">
            <td>
              <div class="coin-cell">
                <img
                  :src="liked[idx] ? starYellow : star"
                  class="icon-star"
                  alt="star"
                  @click="toggleStar(idx)"
                />
                <img :src="row.src" class="coin-icon" :alt="row.coin" />
                <span class="coin-name">{{ row.coin }}</span>
              </div>
            </td>

            <td>{{ row.price }}</td>
            <td class="hide-sm">{{ row.high }}</td>
            <td class="hide-sm">{{ row.low }}</td>
            <td :class="row.changeColor">{{ row.change }}</td>
            <td class="hide-md">{{ row.turnover }}</td>
            <td class="align-right action">Trade</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="load-more">
      <button class="load-btn">Load More Coins</button>
    </div>
  </div>
</template>

<script>
import tableData from "../data/spotTableData";
import starYellow from "../assets/Icon/Arrow/kid_star.png";
import star from "../assets/Icon/Arrow/kid_star1.png";

export default {
  name: "SpotTable",
  data() {
    return {
      tableData,
      starYellow,
      star,
      liked: tableData.map((row) => row.defaultStar),
    };
  },
  methods: {
    toggleStar(index) {
      this.$set(this.liked, index, !this.liked[index]);
    },
  },
};
</script>

<style scoped>
.spot-table {
  padding: 32px 0;
  color: white;
}

.table-title {
  font-size: 1.5rem;
  margin-bottom: 24px;
  font-weight: 600;
}

.table-wrapper {
  overflow-x: auto;
}

.table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  font-size: 14px;
}

.table th {
  text-align: left;
  padding: 8px 0;
  color: #888;
  font-size: 13px;
  font-weight: 500;
}

.table td {
  padding: 10px 0;
  border-bottom: 1px solid #333;
  font-size: 13px;
}

.table-row:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.coin-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-star {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.coin-icon {
  width: 24px;
  height: 24px;
}

.coin-name {
  font-size: 13px;
}

.align-right {
  text-align: right;
}

/* Action link */
.action {
  color: #913dff;
  cursor: pointer;
  transition: 0.2s;
}

.action:hover {
  text-decoration: underline;
}

/* Load more button */
.load-more {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.load-btn {
  background-color: #444;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 13px;
}

.load-btn:hover {
  background-color: #666;
}

/* Responsive hides */
@media (max-width: 768px) {
  .hide-md {
    display: none;
  }
}

@media (max-width: 640px) {
  .hide-sm {
    display: none;
  }
}
</style>
