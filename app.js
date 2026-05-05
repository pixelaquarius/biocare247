document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active nav
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            // Show corresponding view
            const targetId = item.getAttribute('data-target');
            views.forEach(v => {
                if(v.id === targetId) {
                    v.classList.add('active');
                } else {
                    v.classList.remove('active');
                }
            });
        });
    });

    // --- Render Home KPIs ---
    const homeKpiGrid = document.getElementById('home-kpi-grid');
    if (homeKpiGrid) {
        kpiHighlights.forEach(kpi => {
            const el = document.createElement('div');
            el.className = 'kpi-card glass-panel';
            el.innerHTML = `
                <div class="kpi-label">${kpi.label}</div>
                <div class="kpi-value text-${kpi.color}">${kpi.value}</div>
            `;
            homeKpiGrid.appendChild(el);
        });
    }

    // --- Render Master Strategy ---
    const strategyContainer = document.getElementById('strategy-container');
    if (strategyContainer) {
        masterStrategy.forEach(strat => {
            const el = document.createElement('div');
            el.className = 'strategy-card glass-panel';
            el.innerHTML = `
                <h3 class="strategy-category">${strat.id}. ${strat.category}</h3>
                <div class="strategy-block">
                    <h4>Vấn Đề:</h4>
                    <p>${strat.problem}</p>
                </div>
                <div class="strategy-block">
                    <h4>Giải Pháp:</h4>
                    <p>${strat.solution}</p>
                </div>
                <div class="strategy-kpi">
                    <h4>KPI:</h4>
                    <p>${strat.kpi.replace(/\n/g, '<br>')}</p>
                </div>
            `;
            strategyContainer.appendChild(el);
        });
    }

    // --- Render In-App Plan ---
    const inAppTbody = document.getElementById('in-app-tbody');
    if (inAppTbody) {
        actionPlanInApp.forEach(item => {
            const badgeClass = item.priority.includes("Cao") ? "high" : "medium";
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td><strong>${item.item.replace('\n', '<br>')}</strong></td>
                <td>
                    <p style="margin-bottom:8px">${item.todo}</p>
                    <small style="color:var(--text-secondary)">${item.detail.replace(/\n/g, '<br>')}</small>
                </td>
                <td>${item.pic.replace('\n', '<br>')}</td>
                <td>${item.timeline.replace('\n', '<br>')}</td>
                <td><span class="badge ${badgeClass}">${item.priority}</span></td>
            `;
            inAppTbody.appendChild(tr);
        });
    }

    // --- Render Off-App Plan ---
    const offAppTbody = document.getElementById('off-app-tbody');
    if (offAppTbody) {
        actionPlanOffApp.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td><strong>${item.item.replace('\n', '<br>')}</strong></td>
                <td>
                    <p style="margin-bottom:8px">${item.todo}</p>
                    <small style="color:var(--text-secondary)">${item.detail.replace(/\n/g, '<br>')}</small>
                </td>
                <td style="color:var(--amber); font-weight:bold">${item.budget}</td>
                <td style="color:var(--green)">${item.kpi.replace(/\n/g, '<br>')}</td>
            `;
            offAppTbody.appendChild(tr);
        });
    }

    // --- Render Budget Table & Chart ---
    const budgetTbody = document.getElementById('budget-tbody');
    if (budgetTbody) {
        let t1=0, t2=0, t3=0;
        const labels = [];
        const m1Data = [];
        const m2Data = [];
        const m3Data = [];

        budgetData.forEach(item => {
            labels.push(item.item);
            m1Data.push(item.m1);
            m2Data.push(item.m2);
            m3Data.push(item.m3);

            const totalRow = item.m1 + item.m2 + item.m3;
            t1 += item.m1; t2 += item.m2; t3 += item.m3;
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.item}</td>
                <td>${item.m1}</td>
                <td>${item.m2}</td>
                <td>${item.m3}</td>
                <td style="font-weight:bold; color:var(--blue)">${totalRow}</td>
            `;
            budgetTbody.appendChild(tr);
        });

        // Add Total Row
        const trTotal = document.createElement('tr');
        trTotal.style.background = 'rgba(217, 119, 6, 0.2)';
        trTotal.innerHTML = `
            <td><strong>TỔNG CỘNG</strong></td>
            <td><strong>${t1}</strong></td>
            <td><strong>${t2}</strong></td>
            <td><strong>${t3}</strong></td>
            <td style="font-weight:bold; color:var(--gold); font-size:1.1rem">${t1+t2+t3}</td>
        `;
        budgetTbody.appendChild(trTotal);

        // Render Chart.js
        const ctx = document.getElementById('budgetChart');
        if (ctx && window.Chart) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Tháng 1',
                            data: m1Data,
                            backgroundColor: '#3b82f6'
                        },
                        {
                            label: 'Tháng 2',
                            data: m2Data,
                            backgroundColor: '#10b981'
                        },
                        {
                            label: 'Tháng 3',
                            data: m3Data,
                            backgroundColor: '#f59e0b'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true }
                    },
                    plugins: {
                        legend: { labels: { color: '#f8fafc' } }
                    }
                }
            });
        }
    }

    // --- Render KPI Tracker ---
    const kpiTbody = document.getElementById('kpi-tbody');
    if (kpiTbody) {
        kpiTrackerData.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${item.kpi}</strong></td>
                <td style="color:var(--blue); font-weight:600">${item.target}</td>
                <td style="color:var(--text-secondary)">—</td>
                <td style="color:var(--text-secondary)">—</td>
                <td style="color:var(--text-secondary)">—</td>
            `;
            kpiTbody.appendChild(tr);
        });
    }

});
