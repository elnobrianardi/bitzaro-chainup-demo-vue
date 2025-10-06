<template>
  <footer class="insights-footer">
    <!-- Logo + Address + Button -->
    <div class="footer-left">
      <img :src="bitzaroLogoBlack" alt="Bitzaro logo" class="footer-logo" />

      <address class="footer-address">
        Room 1046, 14/F, Solo Building <br />
        41–43 Carnarvon Road, Tsim Sha Tsui <br />
        Kowloon, Hong Kong
      </address>

      <button class="footer-button">Download Bitzaro App</button>
    </div>

    <!-- Footer Links -->
    <div class="footer-links">
      <div
        v-for="(links, section) in footerData"
        :key="section"
        class="footer-column"
      >
        <h3 class="footer-section-title">{{ section }}</h3>
        <ul class="footer-list">
          <li v-for="(item, index) in links" :key="index">
            <a :href="item.href" class="footer-link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import bitzaroLogoBlack from "../assets/Logo/BitzaroLogoBlack.png";

export default {
  name: "InsightsSectionDark",
  data() {
    return {
      bitzaroLogoBlack,
      footerData: {
        product: [
          { name: "Bitzaro", href: "#" },
          { name: "Future", href: "#" },
          { name: "Web3", href: "#" },
          { name: "Earn", href: "#" },
          { name: "Bitzaro Token", href: "#" },
        ],
        info: [
          { name: "Market", href: "#" },
          { name: "FAQ", href: "#" },
          { name: "Bitzaro Limit & Fees", href: "#" },
        ],
        learn: [
          { name: "News", href: "#" },
          { name: "Academy", href: "#" },
          { name: "Glossary", href: "#" },
          { name: "Blog", href: "#" },
        ],
        company: [
          { name: "About Us", href: "#" },
          { name: "Contact Us", href: "#" },
          { name: "Career", href: "#" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.insights-footer {
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  border-top: 1px solid rgba(131, 136, 143, 0.4);
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #000;
  color: #f5f7fa;
}

@media (min-width: 768px) {
  .insights-footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

/* Left Section */
.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-left {
    align-items: flex-start;
    text-align: left;
  }
}

.footer-logo {
  width: 122px;
  height: auto;
}

.footer-address {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.6;
  color: #f5f7fa;
}

.footer-button {
  background-color: #7815f9;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.footer-button:hover {
  background-color: #6a0fe0;
}

/* Right Section (Links) */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-links {
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
  }
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-section-title {
  color: #83888f;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #f5f7fa;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #7815f9;
}
</style>
