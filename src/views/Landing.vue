<template>
  <div class="landing">
    <HeaderSection />

    <!-- Hero Section -->
    <section class="hero">
      <IntroductionSection />
    </section>

    <!-- One App Heading -->
    <section class="one-app">
      <h2>One App, Endless Possibilities</h2>
    </section>

    <!-- Trading Experience -->
    <section class="trading">
      <div class="columns">
        <ContentWrapperSection />
        <MainContentSection />
      </div>

      <div class="columns">
        <div>
          <FeaturesSection />
          <AppOverviewSection />
        </div>
        <ComponentNodeSection />
      </div>
    </section>

    <!-- Ultimate Web Trading -->
    <section class="ultimate">
      <h2>The Ultimate Web Trading Experience</h2>
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
      <h2>
        If you'd invested in <span class="underline">Bitcoin</span>
      </h2>
      <img :src="downArrow" alt="Arrow" />
      <BitcoinInvestmentSection />
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
      <TradingExperienceSection />
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
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.one-app {
  text-align: center;
  padding: 40px 0;
}

.one-app h2 {
  font-size: 2rem;
  font-weight: bold;
}

.trading {
  max-width: 1200px;
  margin: auto;
  padding: 40px;
}

.columns {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.ultimate {
  text-align: center;
  padding: 60px 20px;
  background: #f6f5f7;
}

.launch-desktop {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ultimate img {
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
}

.community {
  background: #f6f5f7;
  padding: 40px 0;
}

.investment {
  padding: 40px;
  text-align: center;
}

.investment h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.safety {
  padding: 60px 20px;
  background: white;
  text-align: center;
}

.insights {
  padding: 60px 20px;
  background: #fafafa;
}
</style>
