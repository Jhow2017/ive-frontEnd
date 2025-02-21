'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const StatsChart = () => {
    const statsChartRef = useRef<HTMLDivElement>(null);

    const initStatsChart = () => {
        if (statsChartRef.current) {
            const chart = echarts.init(statsChartRef.current);
            const option = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    data: ['2020', '2021', '2022', '2023', '2024'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: [820, 932, 1250, 1600, 2100],
                        type: 'line',
                        smooth: true,
                        name: 'Pacientes Atendidos',
                        color: '#4F46E5',
                    },
                ],
            };
            chart.setOption(option);
        }
    };

    useEffect(() => {
        initStatsChart();
    }, []);

    return <div ref={statsChartRef} className="h-[400px]"></div>;
};

export default StatsChart;
