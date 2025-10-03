<template>
  <footer class="insights-section">
    <!-- Logo + Address + Button -->
    <div class="footer-left">
      <img :src="bitzaroLogoBlack" alt="Bitzaro logo" class="logo" />

      <address class="address">
        Room 1046, 14/F, Solo Building<br />
        41–43 Carnarvon Road, Tsim Sha Tsui<br />
        Kowloon, Hong Kong
      </address>

      <button class="download-btn" aria-label="Download Bitzaro App">
        Download Bitzaro App
      </button>
    </div>

    <!-- Footer Links -->
    <div class="footer-links">
      <nav v-for="(links, section) in footerData" :key="section" :aria-label="section + ' navigation'">
        <h3 class="section-title">{{ section }}</h3>
        <ul>
          <li v-for="(item, index) in links" :key="index">
            <a :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import bitzaroLogoBlack from "../assets/Logo/Bitzaro_Logo_RGB_CL_Hor 1.png";

export default {
  name: "InsightsSection",
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
.insights-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 16px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .insights-section {
    flex-direction: row;
    justify-content: space-between;
  }
}

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

.logo {
  width: 122px;
  height: auto;
}

.address {
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  color: #5c5c5c;
  font-style: normal;
}

.download-btn {
  background-color: #7815f9;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
  border: none;
}

.download-btn:hover {
  opacity: 0.9;
}

/* Footer links */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-links {
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
  }
}

.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-title {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  color: #5c5c5c;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.footer-links a {
  font-weight: 500;
  font-size: 12px;
  color: black;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #7815f9;
}

@media (min-width: 640px) {
  .footer-links a {
    font-size: 14px;
  }
}
</style>
