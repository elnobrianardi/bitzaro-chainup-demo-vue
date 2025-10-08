<template>
  <section class="community-section">
    <!-- Row 1: maju -->
    <div class="row" :style="{ animationDuration: duration + 's' }">
      <div class="row-content" ref="rowRef">
        <div
          v-for="(coin, i) in spotTableData"
          :key="'row1-' + i"
          class="crypto-card"
        >
          <img class="crypto-icon" :src="coin.src" :alt="coin.coin" />
          <div class="crypto-info">
            <span class="coin">{{ coin.coin.replace('/USDT', '') }}</span>
            <span class="price">{{ coin.price }}</span>
            <span :class="coin.changeColor">{{ coin.change }}</span>
          </div>
        </div>
      </div>

      <div class="row-content">
        <div
          v-for="(coin, i) in spotTableData"
          :key="'row1-dup-' + i"
          class="crypto-card"
        >
          <img class="crypto-icon" :src="coin.src" :alt="coin.coin" />
          <div class="crypto-info">
            <span class="coin">{{ coin.coin.replace('/USDT', '') }}</span>
            <span class="price">{{ coin.price }}</span>
            <span :class="coin.changeColor">{{ coin.change }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: mundur -->
    <div class="row reverse" :style="{ animationDuration: duration + 's' }">
      <div class="row-content">
        <div
          v-for="(coin, i) in spotTableData"
          :key="'row2-' + i"
          class="crypto-card"
        >
          <img class="crypto-icon" :src="coin.src" :alt="coin.coin" />
          <div class="crypto-info">
            <span class="coin">{{ coin.coin.replace('/USDT', '') }}</span>
            <span class="price">{{ coin.price }}</span>
            <span :class="coin.changeColor">{{ coin.change }}</span>
          </div>
        </div>
      </div>

      <div class="row-content">
        <div
          v-for="(coin, i) in spotTableData"
          :key="'row2-dup-' + i"
          class="crypto-card"
        >
          <img class="crypto-icon" :src="coin.src" :alt="coin.coin" />
          <div class="crypto-info">
            <span class="coin">{{ coin.coin.replace('/USDT', '') }}</span>
            <span class="price">{{ coin.price }}</span>
            <span :class="coin.changeColor">{{ coin.change }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import spotTableData from "../data/spotTableData";

export default {
  name: "CommunitySection",
  data() {
    return {
      spotTableData,
      rowWidth: 0,
      speed: 40,
    };
  },
  computed: {
    duration() {
      return this.rowWidth ? this.rowWidth / this.speed : 0;
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.rowRef) {
        this.rowWidth = this.$refs.rowRef.scrollWidth;
      }
      // resize handler biar responsive
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (this.$refs.rowRef) {
        this.rowWidth = this.$refs.rowRef.scrollWidth;
      }
    },
  },
};
</script>

<style>
.community-section {
  overflow: hidden;
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.row {
  display: flex;
  white-space: nowrap;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.row.reverse {
  animation-name: marquee-reverse;
}

.row-content {
  display: flex;
  gap: 24px;
  padding-right: 24px;
}

.crypto-card {
  min-width: max-content;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
}

/* Responsive icon & text */
.crypto-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.crypto-info {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.coin {
  color: #323232;
  font-weight: 600;
  font-size: 14px;
}

.price {
  color: #323232;
  font-weight: 600;
  font-size: 14px;
}

.text-green-500 {
  color: #16a34a;
  font-weight: 500;
  font-size: 12px;
}

.text-red-500 {
  color: #dc2626;
  font-weight: 500;
  font-size: 12px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* ✅ RESPONSIVE */
@media (max-width: 768px) {
  .crypto-card {
    gap: 12px;
    padding: 8px;
  }

  .crypto-icon {
    width: 22px;
    height: 22px;
  }

  .crypto-info {
    gap: 10px;
  }

  .coin,
  .price {
    font-size: 12px;
  }

  .text-green-500,
  .text-red-500 {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .crypto-card {
    gap: 8px;
    padding: 6px;
  }

  .crypto-icon {
    width: 20px;
    height: 20px;
  }

  .coin,
  .price {
    font-size: 11px;
  }

  .text-green-500,
  .text-red-500 {
    font-size: 9px;
  }
}
</style>
