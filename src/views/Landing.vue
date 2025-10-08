<template>
  <div class="landing">
    <HeaderSection />

    <!-- Hero Section -->
    <section class="hero">
      <IntroductionSection />
    </section>

    <!-- One App Heading -->
    <section class="one-app">
      <div class="one-app-content">
        <h2>One App, Endless Possibilities</h2>
      </div>
    </section>

    <!-- Trading Experience -->
    <section class="trading">
      <div class="columns">
        <ContentWrapperSection />
        <MainContentSection />
      </div>

      <div class="columns">
        <div class="column-1">
          <FeaturesSection />
          <AppOverviewSection />
        </div>
        <div class="column-2">
          <ComponentNodeSection />
        </div>
      </div>
    </section>

    <!-- Ultimate Web Trading -->
    <section class="ultimate">
      <h2>The Ultimate <br> Web Trading Experience</h2>
      <p>Enjoy Bitzaro right from your desktop</p>
      <div class="launch-desktop">
        <button>Launch on Desktop</button>
        <img :src="Dashboard" alt="Dashboard" />
      </div>
    </section>

    <!-- Community -->
    <section class="community">
      <CommunitySection />
    </section>

    <!-- Bitcoin Investment -->
    <section class="investment">
      <div class="investment-header">
        <h2>
          If you'd invested in <span>Bitcoin</span>
        </h2>
        <img :src="downArrow" alt="Arrow" />
      </div>
      <BitcoinInvestmentSection />
      <p>Based on data from 1 March 2020 - 1 March 2024. Past performances do not guarantee the future.</p>
    </section>

    <!-- Safety -->
    <section class="safety">
      <h2>Your Safety, Our Priority</h2>
      <InvestmentInfoSection />
      <SafetyPrioritySection />
    </section>

    <!-- Insights -->
    <section class="insights">
      <h2>Crypto Latest Insights</h2>
      <CryptoInsightsSection />
    </section>

    <!-- Trading Experience -->
    <section class="trading-experience">
      <TradingExperienceSection />
    </section>

    <!-- Footer -->
    <section class="footer">
      <InsightsSection />
    </section>
  </div>
</template>

<script>
import HeaderSection from "../components/HeaderSection.vue";
import IntroductionSection from "../components/IntroductionSection.vue";
import ContentWrapperSection from "../components/ContentWrapperSection.vue";
import MainContentSection from "../components/MainContentSection.vue";
import FeaturesSection from "../components/FeaturesSection.vue";
import AppOverviewSection from "../components/AppOverviewSection.vue";
import ComponentNodeSection from "../components/ComponentNodeSection.vue";
import CommunitySection from "../components/CommunitySection.vue";
import BitcoinInvestmentSection from "../components/BitcoinInvestmentSection.vue";
import InvestmentInfoSection from "../components/InvestmentInfoSection.vue";
import SafetyPrioritySection from "../components/SafetyPrioritySection.vue";
import CryptoInsightsSection from "../components/CryptoInsightsSection.vue";
import TradingExperienceSection from "../components/TradingExperienceSection.vue";
import InsightsSection from "../components/InsightsSectionWhite.vue";

import downArrow from "../assets/Icon/Arrow/Vector-1.png";
import Dashboard from "../assets/Dashboard_Screen_Capture/Dashboard.png";

export default {
  name: "LandingPage",
  components: {
    HeaderSection,
    IntroductionSection,
    ContentWrapperSection,
    MainContentSection,
    FeaturesSection,
    AppOverviewSection,
    ComponentNodeSection,
    CommunitySection,
    BitcoinInvestmentSection,
    InvestmentInfoSection,
    SafetyPrioritySection,
    CryptoInsightsSection,
    TradingExperienceSection,
    InsightsSection,
  },
  data() {
    return {
      downArrow,
      Dashboard,
    };
  },
};
</script>

<style>
.landing {
  background: white;
  color: black;
  font-family: sans-serif;
  align-items: center;
  justify-items: center;
  width: 100%;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.one-app {
  text-align: center;
  padding: 40px 0;
  width: 100%;
  position: relative;
  z-index: 30;
}

.one-app-content {
  position: absolute;
  z-index: 50;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  top: -72px;
  background: white;
  padding-top: 64px;
  padding-bottom: 48px;
  width: 100%;
}

.one-app h2 {
  font-size: 32px;
  font-weight: bold;
}

.trading {
  max-width: 1200px;
  width: 100%;
}

.columns {
  display: block;
  gap: 20px;
  margin-bottom: 40px;
}

@media (min-width: 768px) {
  .one-app-content h2{
    font-size: 48px;
  }

  .columns {
    display: flex;
    gap: 20px;
    align-items: stretch;
    margin-top: 20px;
  }

  .column-1,
  .column-2 {
    flex: 1;
    max-width: 50%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .column-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  .column-2 {
    display: flex;
    align-items: flex-start;
  }
}





.ultimate {
  text-align: center;
  padding: 60px 0;
  background: #f6f5f7;
  width: 100%;
}

.ultimate h2 {
  font-size: 48px;
  font-weight: 900;
  line-height: 110%;
}

.ultimate p {
  font-size: 24px;
  font-weight: 500;
  color: #1C1C1C;
  margin-top: 16px;
}

.launch-desktop {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ultimate button {
  padding-inline: 56px;
  padding-block: 12px;
  background-color: #7815F9;
  font-size: 16px;
  color: white;
  border-radius: 6px;
  border: none;
  margin-top: 48px;
}

.ultimate img {
  width: 90%;
  max-width: 800px;
  height: auto;
  margin: 40px auto 0;
  border-radius: 8px;
  display: block;
  object-fit: contain;
}


.community {
  background: #f6f5f7;
  padding: 40px 0;
  width: 100%;
}

.investment {
  padding: 60px 0;
  text-align: left;
  max-width: 1200px;
  width: 100%;
}

.investment-header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 48px;
}

.investment h2 {
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
}

.investment span {
  text-decoration: underline;
}

.investment img {
  width: 24px;
  height: 16px;
  margin: 40px 0 0 8px;
}

.investment p{
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: gray;
}

.safety {
  padding: 60px 0;
  background: white;
  text-align: left;
  max-width: 1200px;
  width: 100%;
}

.safety h2 {
  padding-bottom: 56px;
  margin-top: 48px;
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
}

.insights {
  padding-top: 60px;
  background: #fafafa;
  width: 100%;
  max-width: 1200px;
  text-align: left;
}

.insights h2 {
  font-size: 48px;
  line-height: 1;
  font-weight: 900;
}

.trading-experience {
  width: 100%;
}

.footer {
  width: 100%;
  max-width: 1200px;
}
</style>
