<template>
  <section class="crypto-insights">
    <div class="container">
      <!-- Academy Section -->
      <article class="academy">
        <header>
          <h2>❘ Bitzaro Academy</h2>
          <p>Discover the easiest way to learn crypto.</p>
        </header>

        <div class="academy-articles">
          <div
            class="academy-row"
            v-for="row in 2"
            :key="'row-' + row"
          >
            <article
              v-for="article in academyArticles.slice((row - 1) * 3, (row - 1) * 3 + 3)"
              :key="article.id"
              class="academy-card"
            >
              <img :src="article.image" :alt="article.alt" />
              <div class="academy-title">
                {{ article.title }}
              </div>
            </article>
          </div>
        </div>

        <footer>
          <a href="#">Explore Bitzaro Academy</a>
          <img :src="purpleArrow" alt="arrow" />
        </footer>
      </article>

      <!-- News Section -->
      <aside class="news">
        <header>
          <h2>❘ Bitzaro News</h2>
          <p>Get the latest crypto update.</p>
        </header>

        <nav>
          <div
            v-for="(item, index) in newsItems"
            :key="item.id"
          >
            <article class="news-item">
              <div class="news-id">{{ item.id }}</div>
              <h3 class="news-title">{{ item.title }}</h3>
            </article>
            <div
              v-if="index < newsItems.length - 1"
              class="divider"
            ></div>
          </div>
        </nav>

        <footer>
          <a href="#">Read More on Bitzaro News</a>
          <img :src="purpleArrow" alt="arrow" />
        </footer>
      </aside>
    </div>
  </section>
</template>

<script>
import x337812 from "../assets/Latest_Insight/33782.png";
import x33781 from "../assets/Latest_Insight/33781.png";
import VrTrading212 from "../assets/Latest_Insight/26234205_vr_trading_21.png";
import VrTrading21 from "../assets/Latest_Insight/26234205_vr_trading_22.png";
import defi12 from "../assets/Latest_Insight/defi2.png";
import defi1 from "../assets/Latest_Insight/defi1.png";
import purpleArrow from "../assets/Icon/Arrow/Vector.png";

export default {
  name: "CryptoInsightsSection",
  data() {
    return {
      academyArticles: [
        { id: 1, image: x33781, title: "Weekly Signal Bitzaro X Volubit – July 16, 2025", alt: "Element" },
        { id: 2, image: VrTrading21, title: "Market Analysis Jul 14th, 2025: Bitcoin Continues to Hit New All-Time Highs, Targeting $136k in July", alt: "Element vr trading" },
        { id: 3, image: defi1, title: "Top DeFi Lending Protocols in Web3: Strategies, Benefits & Crypto Loan Risks", alt: "Defi" },
        { id: 4, image: defi12, title: "Top DeFi Lending Protocols in Web3: Strategies, Benefits & Crypto Loan Risks", alt: "Defi" },
        { id: 5, image: x337812, title: "Weekly Signal Bitzaro X Volubit – July 16, 2025", alt: "Element" },
        { id: 6, image: VrTrading212, title: "Market Analysis Jul 14th, 2025: Bitcoin Continues to Hit New All-Time Highs, Targeting $136k in July", alt: "Element vr trading" },
      ],
      newsItems: [
        { id: 1, title: "DOGE Rockets 5% Today — Will This Rally Turn Into a Wild Ride?" },
        { id: 2, title: "3 Crypto that Moves Up You Should Watch Tomorrow Friday July 18, 2025" },
        { id: 3, title: "Bitcoin Holds Strong at $118K — Is a Break Above $150K Coming If the GENIUS Act Passes?" },
        { id: 4, title: "Ethereum Skyrockets to $3.350 Today — Is This the Start of ETH's Next Massive Bull Run?" },
        { id: 5, title: "What are Commodity Futures: Examples of Usage, How They Work, and Futures in the Crypto World" },
      ],
      purpleArrow,
    };
  },
};
</script>

<style scoped>
.crypto-insights {
  width: 100%;
  background: #fff;
  padding: 32px 0;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  gap: 32px;
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
  }
}

/* Academy */
.academy {
  flex: 2.75;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fff;
  border-radius: 12px;
  padding-block: 24px;
}

.academy header h2 {
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 500;
}

.academy header p {
  color: #323232;
  font-size: 16px;
}

.academy-articles {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.academy-row {
  display: flex;
  gap: 24px;
}

.academy-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f6f7f8;
  border-radius: 12px;
  overflow: hidden;
}

.academy-card img {
  width: 100%;
  aspect-ratio: 1.59;
  object-fit: cover;
}

.academy-title {
  padding: 8px;
  font-weight: 500;
  color: #1b1b1b;
  font-size: 14px;
  line-height: 22.5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(18px * 2);
}


/* Academy footer */
.academy footer {
  display: flex;
  align-items: center;
  gap: 4px;
}

.academy footer a {
  color: #7815f9;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
}

.academy footer img {
  width: 8px;
  height: 12px;
}

/* News */
.news {
  flex: 1.25;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  background: #fff;
  align-self: flex-start;
}

.news header{
  margin-bottom: 2px;
}

.news header h2 {
  font-size: 20px;
  margin-bottom: 8px;
}

.news header p {
  color: #323232;
  font-size: 16px;
}

.news-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
}

.news-id {
  width: 26px;
  font-weight: 800;
  color: #dde1e7;
  text-align: center;
  font-size: 20px;
}

.news-title {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #1b1b1b;
  font-size: 14px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.divider {
  border-top: 2px dotted #dcdcdc;
}

.news footer {
  display: flex;
  align-items: center;
  gap: 4px;
}

.news footer a {
  color: #7815f9;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
}

.news footer img {
  width: 8px;
  height: 12px;
}

@media (min-width: 1200px) {
  .academy-title {
    font-size: 18px;
  }
  .academy header h2 {
    font-size: 24px;
  }
  .academy header p {
    font-size: 20px;
  }
  .academy footer a {
    font-size: 16px;
  }
  .news header h2 {
    font-size: 24px;
  }
  .news header p {
    font-size: 20px;
  }
  .news-title {
    font-size: 16px;
  }
  .news footer a{
    font-size: 16px;
  }
}
</style>
