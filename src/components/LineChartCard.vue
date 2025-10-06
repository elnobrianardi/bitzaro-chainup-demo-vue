<template>
    <div class="chart-card" :class="{ negative: isNegative, positive: !isNegative }">
        <!-- Left Section -->
        <div class="chart-info">
            <p class="chart-title">{{ title }}</p>
            <h2 class="chart-price">{{ price }}</h2>
            <p class="chart-change">{{ changes }}</p>
            <p class="chart-subtext">24H 2926.24694</p>
        </div>

        <!-- Right Section (Chart) -->
        <div class="chart-container">
            <line-chart :chart-data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
    name: "LineChartCard",
    components: {
        LineChart: {
            extends: Line,
            props: ["chartData", "options"],
            mounted() {
                this.renderWhenReady();
            },
            methods: {
                renderWhenReady() {
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.renderChart(this.chartData, this.options);
                        }, 50);
                    });
                },
            },
            watch: {
                chartData() {
                    this.renderWhenReady();
                },
            },
        },

    },

    props: {
        id: Number,
        price: String,
        title: String,
        changes: String,
        data: Array,
    },
    computed: {
        isNegative() {
            return this.changes.includes("-");
        },
        chartData() {
            return {
                labels: this.data.map((_, i) => i),
                datasets: [
                    {
                        label: this.title,
                        data: this.data.map((d) => d.value),
                        borderColor: this.isNegative ? "#FF4D4D" : "#00C851",
                        backgroundColor: "transparent",
                        borderWidth: 3,
                        pointRadius: 0,
                        tension: 0.1, // smooth curve
                    },
                ],
            };
        },
        chartOptions() {
            const values = this.data.map(d => d.value);
            const range = Math.max(...values) - Math.min(...values);
            const padding = range * 1.2;
            const min = Math.min(...values) - padding;
            const max = Math.max(...values) + padding;

            return {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 1,
                        bottom: 1,
                        left: 1,
                        right: 1,
                    },
                },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{
                        display: false,
                        ticks: { min, max },
                    }],
                },
                legend: { display: false },
                tooltips: { enabled: false },
                elements: {
                    line: { tension: 0.3, borderWidth: 1.5 },
                    point: { radius: 0 },
                },
            };
        },



    },
};
</script>

<style scoped>
.chart-card {
    background-color: #161617;
    color: white;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    margin-bottom: 16px;
}

.chart-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.chart-title {
    font-size: 14px;
    margin-bottom: 6px;
}

.chart-price {
    font-size: 20px;
    font-weight: bold;
    margin: 4px 0;
}

.chart-change {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
}

.chart-subtext {
    font-size: 12px;
    color: #999;
}

.chart-container {
    position: relative;
    width: 140px;
    height: 100px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.chart-container canvas {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 100% !important;
    height: 100% !important;
    pointer-events: none;
}






.positive .chart-change {
    color: #00c851;
}

.negative .chart-change {
    color: #ff4d4d;
}
</style>
