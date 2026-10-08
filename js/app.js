// Executive Product Management Dashboard - Main Application

// State Management
const AppState = {
    filters: {
        businessUnit: 'all',
        productLine: 'all',
        productOwner: 'all',
        timePeriod: 'q4-2026'
    },
    currentUserRole: 'executive',
    modalVisible: false,
    activePage: 'leadership-summary',
    selectedBusinessUnit: 'all' // Default to show all business units
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    try {
        console.log('[init] start');
        renderNavigation();
        console.log('[init] renderNavigation OK');
        renderBUFilterButtons();
        console.log('[init] renderBUFilterButtons OK');
        renderFilters();
        console.log('[init] renderFilters OK');
        renderPage();
        console.log('[init] renderPage OK');
        attachEventListeners();
        console.log('[init] attachEventListeners OK');
        initSettings();
        console.log('[init] initSettings OK — app ready');
    } catch(e) {
        console.error('[init] CRASHED at step above ↑', e);
    }
}

// Navigation
function renderNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            setActivePage(page);
        });
    });

    // Role selector
    const roleSelect = document.getElementById('role-select');
    roleSelect.addEventListener('change', (e) => {
        AppState.currentUserRole = e.target.value;
        updatePermissions();
    });
}

function setActivePage(page) {
    // Update active page state
    AppState.activePage = page;
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    
    // Update page visibility
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(page).classList.add('active');
    
    // Render page content
    renderPage();
}

// Filters
function renderFilters() {
    // Populate Product Line dropdown
    const plSelect = document.getElementById('filter-product-line');
    plSelect.innerHTML = '<option value="all">All Product Lines</option>';
    MOCK_PRODUCT_LINES
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(pl => {
            const opt = document.createElement('option');
            opt.value = pl.id;
            opt.textContent = pl.name;
            plSelect.appendChild(opt);
        });

    // Populate Product Owner dropdown
    const poSelect = document.getElementById('filter-product-owner');
    poSelect.innerHTML = '<option value="all">All Product Owners</option>';
    MOCK_PRODUCT_OWNERS
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(po => {
            const opt = document.createElement('option');
            opt.value = po.id;
            opt.textContent = po.name;
            poSelect.appendChild(opt);
        });

    // Add event listeners (BU dropdown removed, handled by buttons)
    document.querySelectorAll('.filter-group select').forEach(select => {
        select.addEventListener('change', applyFilters);
    });
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
}

function renderBUFilterButtons() {
    const container = document.getElementById('bu-filter-buttons');
    container.innerHTML = '';

    // "All" button first
    const allBtn = document.createElement('button');
    allBtn.className = 'bu-filter-btn' + (AppState.selectedBusinessUnit === 'all' ? ' active' : '');
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => {
        AppState.selectedBusinessUnit = 'all';
        renderBUFilterButtons();
        renderPage();
        updatePageSubtitle();
    });
    container.appendChild(allBtn);

    // One button per BU
    const seen = new Set();
    MOCK_BUSINESS_UNIT_OKRS.forEach(okr => {
        if (seen.has(okr.businessUnitId)) return;
        seen.add(okr.businessUnitId);

        const btn = document.createElement('button');
        btn.className = 'bu-filter-btn' + (AppState.selectedBusinessUnit === okr.businessUnitId ? ' active' : '');
        btn.textContent = okr.businessUnit;
        btn.addEventListener('click', () => {
            AppState.selectedBusinessUnit = okr.businessUnitId;
            renderBUFilterButtons();
            renderPage();
            updatePageSubtitle();
        });
        container.appendChild(btn);
    });
}

function updatePageSubtitle() {
    const el = document.getElementById('page-subtitle');
    if (!el) return;
    if (AppState.selectedBusinessUnit === 'all') {
        el.textContent = 'Enterprise-wide Product Management overview — All Business Units';
    } else {
        const okr = MOCK_BUSINESS_UNIT_OKRS.find(o => o.businessUnitId === AppState.selectedBusinessUnit);
        el.textContent = `Product Management overview — ${okr ? okr.businessUnit : ''}`;
    }
}

function applyFilters() {
    AppState.filters.productLine = document.getElementById('filter-product-line').value;
    AppState.filters.productOwner = document.getElementById('filter-product-owner').value;
    AppState.filters.timePeriod = document.getElementById('filter-time-period').value;
    renderPage();
}

function resetFilters() {
    document.getElementById('filter-product-line').value = 'all';
    document.getElementById('filter-product-owner').value = 'all';
    document.getElementById('filter-time-period').value = 'q4-2026';
    AppState.selectedBusinessUnit = 'all';
    renderBUFilterButtons();
    applyFilters();
}

function updatePermissions() {
    // Update UI based on user role
    const role = AppState.currentUserRole;
    
    // Show/hide elements based on permissions
    if (role === 'executive') {
        document.querySelectorAll('.edit-btn').forEach(btn => btn.style.display = 'none');
    }
}

function renderPage() {
    const page = AppState.activePage;
    
    switch(page) {
        case 'leadership-summary':
            renderExecutiveSummary();
            break;
        case 'scorecard':
            renderScorecard();
            break;
        case 'health':
            renderHealthDashboard();
            break;
        case 'outcomes':
            renderOutcomesDashboard();
            break;
    }
}

// Leadership Summary
function renderExecutiveSummary() {
    renderExecutiveKPIs();
    renderBusinessUnitOKRs();
    renderExecutiveAttention();
    renderTrendChart();
}

function renderBusinessUnitOKRs() {
    renderBusinessUnitOKRsList();
}

function renderBusinessUnitOKRsList() {
    const tbody = document.getElementById('bu-okrs-tbody');
    tbody.innerHTML = '';

    // Filter OKRs by selected business unit
    let filteredOKRs;
    if (AppState.selectedBusinessUnit === 'all') {
        filteredOKRs = MOCK_BUSINESS_UNIT_OKRS;
    } else {
        filteredOKRs = MOCK_BUSINESS_UNIT_OKRS.filter(okr =>
            okr.businessUnitId === AppState.selectedBusinessUnit
        );
    }

    if (filteredOKRs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="bu-okrs-empty">No OKRs found for this business unit</td></tr>';
        return;
    }

    // Update count badge
    const badge = document.getElementById('okr-count-badge');
    if (badge) badge.textContent = `${filteredOKRs.length} OKRs`;

    // Group OKRs by businessUnit name for time-period-style headers
    const groups = [];
    const seen = new Map();
    filteredOKRs.forEach(okr => {
        const key = okr.businessUnit;
        if (!seen.has(key)) {
            seen.set(key, []);
            groups.push({ label: okr.businessUnit, items: seen.get(key) });
        }
        seen.get(key).push(okr);
    });

    // Avatar color palette (8 colors, picked by charCode of first letter)
    const avatarColor = (name) => name.charCodeAt(0) % 8;

    groups.forEach(group => {
        // Group header row
        const headerRow = document.createElement('tr');
        headerRow.className = 'okr-group-header';
        headerRow.innerHTML = `
            <td colspan="5">
                ${group.label}
                <span class="okr-group-count">${group.items.length}</span>
            </td>
        `;
        tbody.appendChild(headerRow);

        // OKR rows
        group.items.forEach(okr => {
            const statusClass = {
                'on-track':    'on-track',
                'at-risk':     'at-risk',
                'behind':      'behind',
                'not-started': 'not-started'
            }[okr.status] || 'not-started';

            const statusLabel = {
                'on-track':    'On Track',
                'at-risk':     'At Risk',
                'behind':      'Behind',
                'not-started': 'Not Started'
            }[okr.status] || 'Not Started';

            // Owner initials + color
            const nameParts = okr.owner.trim().split(' ');
            const initials = nameParts.length >= 2
                ? nameParts[0][0] + nameParts[nameParts.length - 1][0]
                : nameParts[0].slice(0, 2);
            const colorIdx = avatarColor(okr.owner);

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="okr-title-cell">
                        <div class="okr-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
                                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="okr-title-text">
                            <div class="okr-title">${okr.objective}</div>
                            <div class="okr-kr">${okr.keyResult}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="okr-owner">
                        <div class="okr-owner-avatar" data-color="${colorIdx}">${initials.toUpperCase()}</div>
                        <div class="okr-owner-name">${okr.owner}</div>
                    </div>
                </td>
                <td>
                    <div class="okr-team">
                        <div class="okr-team-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="14" width="18" height="3" rx="1" fill="currentColor" opacity="0.4"/>
                                <rect x="5" y="9"  width="14" height="3" rx="1" fill="currentColor" opacity="0.7"/>
                                <rect x="7" y="4"  width="10" height="3" rx="1" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="okr-team-name">${okr.businessUnit}</div>
                    </div>
                </td>
                <td>
                    <div class="okr-status-cell">
                        <div class="okr-status-row">
                            <span class="okr-status-label ${statusClass}">${statusLabel}</span>
                        </div>
                        <div class="okr-progress-row">
                            <div class="okr-progress-bar">
                                <div class="okr-progress-fill ${statusClass}" style="width:${okr.progress}%"></div>
                            </div>
                            <span class="okr-progress-pct">${okr.progress}%</span>
                        </div>
                        <div class="okr-checkin-time-row">
                            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
                            </svg>
                            ${okr.lastCheckinTime || '—'}
                        </div>
                    </div>
                </td>
                <td>
                    <div class="okr-checkin-note">${okr.lastCheckin || 'No check-in note'}</div>
                    <div class="okr-checkin-ago">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </svg>
                        ${okr.lastCheckinTime || '—'}
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    });
}

function renderExecutiveKPIs() {
    // Filter data by selected business unit
    let filteredProductLines = MOCK_PRODUCT_LINES;
    let filteredHealthMetrics = MOCK_HEALTH_METRICS;
    let filteredEpics = MOCK_EPICS;
    let filteredOutcomes = MOCK_OUTCOMES;
    
    if (AppState.selectedBusinessUnit !== 'all') {
        filteredProductLines = MOCK_PRODUCT_LINES.filter(pl => pl.businessUnitId === AppState.selectedBusinessUnit);
        const productLineIds = filteredProductLines.map(pl => pl.id);
        filteredHealthMetrics = MOCK_HEALTH_METRICS.filter(hm => productLineIds.includes(hm.productLineId));
        filteredEpics = MOCK_EPICS.filter(e => productLineIds.includes(e.productLineId));
        const epicIds = filteredEpics.map(e => e.id);
        filteredOutcomes = MOCK_OUTCOMES.filter(o => epicIds.includes(o.epicId));
    }
    
    // Calculate KPIs from filtered data
    const totalProductLines = filteredProductLines.length;
    const completeProductLines = filteredProductLines.filter(pl => pl.status === 'active').length;
    const healthCoverage = totalProductLines > 0 ? Math.round((new Set(filteredHealthMetrics.map(hm => hm.productLineId)).size / totalProductLines) * 100) : 0;
    
    // OKR alignment
    const epicsWithOKR = filteredEpics.filter(e => e.okrId).length;
    const okrAlignment = filteredEpics.length > 0 ? Math.round((epicsWithOKR / filteredEpics.length) * 100) : 0;
    
    // Outcome measurement
    const releasedEpics = filteredEpics.filter(e => e.releaseStatus === 'released');
    const epicsWithOutcomes = filteredOutcomes.filter(o => o.outcomeStatus !== 'notYetReleased' && o.outcomeStatus !== 'awaitingMeasurement').length;
    const outcomeMeasurement = releasedEpics.length > 0 ? Math.round((epicsWithOutcomes / releasedEpics.length) * 100) : 0;
    
    // Product Management Practice (based on complete product lines)
    const practiceScore = totalProductLines > 0 ? Math.round((completeProductLines / totalProductLines) * 100) : 0;

    // Update KPI cards
    document.getElementById('kpi-practice').textContent = `${practiceScore}%`;
    document.getElementById('kpi-health').textContent = `${healthCoverage}%`;
    document.getElementById('kpi-alignment').textContent = `${okrAlignment}%`;
    document.getElementById('kpi-measurement').textContent = `${outcomeMeasurement}%`;

    // Update trends (only for "all" view)
    if (AppState.selectedBusinessUnit === 'all') {
        const currentData = MOCK_HISTORICAL_DATA[MOCK_HISTORICAL_DATA.length - 1];
        const previousData = MOCK_HISTORICAL_DATA[MOCK_HISTORICAL_DATA.length - 2];
        
        updateTrendElement('kpi-practice-trend', currentData.practiceScore, previousData.practiceScore);
        updateTrendElement('kpi-health-trend', currentData.healthCoverage, previousData.healthCoverage);
        updateTrendElement('kpi-alignment-trend', currentData.okrAlignment, previousData.okrAlignment);
        updateTrendElement('kpi-measurement-trend', currentData.outcomeMeasurement, previousData.outcomeMeasurement);
    } else {
        // For specific BU, show current metrics without trend comparison
        document.getElementById('kpi-practice-trend').textContent = `${completeProductLines} of ${totalProductLines} products active`;
        document.getElementById('kpi-practice-trend').className = 'kpi-trend';
        document.getElementById('kpi-health-trend').textContent = `${new Set(filteredHealthMetrics.map(hm => hm.productLineId)).size} products with health metrics`;
        document.getElementById('kpi-health-trend').className = 'kpi-trend';
        document.getElementById('kpi-alignment-trend').textContent = `${epicsWithOKR} of ${filteredEpics.length} epics aligned`;
        document.getElementById('kpi-alignment-trend').className = 'kpi-trend';
        document.getElementById('kpi-measurement-trend').textContent = `${epicsWithOutcomes} of ${releasedEpics.length} released epics measured`;
        document.getElementById('kpi-measurement-trend').className = 'kpi-trend';
    }
}

function updateTrendElement(elementId, currentValue, previousValue) {
    const element = document.getElementById(elementId);
    const diff = currentValue - previousValue;
    const trendClass = diff >= 0 ? 'positive' : 'negative';
    const trendText = `${diff >= 0 ? '+' : ''}${diff}% vs last quarter`;
    
    element.className = `kpi-trend ${trendClass}`;
    element.textContent = trendText;
}

function renderExecutiveAttention() {
    const container = document.getElementById('attention-list');
    container.innerHTML = '';
    
    const filteredItems = filterData(MOCK_ATTENTION_ITEMS, 'productLineId');
    
    filteredItems.forEach(item => {
        const severityClass = `severity-${item.severity}`;
        const iconClass = item.severity === 'high' ? 'high' : item.severity === 'medium' ? 'medium' : 'low';
        
        const itemElement = document.createElement('div');
        itemElement.className = `attention-item ${severityClass}`;
        itemElement.innerHTML = `
            <div class="attention-icon ${iconClass}">${getSeverityIcon(item.severity)}</div>
            <div class="attention-content">
                <div class="attention-header">
                    <span class="attention-type">${formatAttentionType(item.type)}</span>
                    <span class="attention-severity ${item.severity}">${capitalize(item.severity)}</span>
                </div>
                <div class="attention-item-title">${item.affectedProduct}</div>
                <div class="attention-item-desc">${item.description}</div>
            </div>
            <div class="attention-item-actions">
                <button class="btn-action">View Details</button>
            </div>
        `;
        container.appendChild(itemElement);
    });
}

function getSeverityIcon(severity) {
    switch(severity) {
        case 'high': return '⚠️';
        case 'medium': return '!';
        case 'low': return 'ℹ️';
        default: return '';
    }
}

function formatAttentionType(type) {
    const map = {
        'missingProblemBrief': 'Missing Problem Brief',
        'missingOutcome': 'Missing Outcome',
        'lowScore': 'Low Score',
        'missingAlignment': 'Missing OKR Alignment',
        'atRiskHealth': 'At Risk Health',
        'missingHealthMetrics': 'Missing Health Metrics',
        'missingMeasurementPlan': 'Missing Measurement Plan',
        'unhealthyHealth': 'Unhealthy Health'
    };
    return map[type] || type;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderTrendChart() {
    const canvas = document.getElementById('trend-chart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    
    const data = MOCK_HISTORICAL_DATA;
    const labels = data.map(d => d.period);
    const scores = data.map(d => d.practiceScore);
    
    // Draw chart
    drawTrendChart(ctx, width, height, labels, scores);
}

function drawTrendChart(ctx, width, height, labels, data) {
    const padding = 50;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw data points and line
    const stepX = chartWidth / (data.length - 1);
    const maxVal = 100;
    const stepY = chartHeight / maxVal;
    
    ctx.strokeStyle = '#1a365d';
    ctx.lineWidth = 3;
    ctx.fillStyle = '#1a365d';
    ctx.beginPath();
    
    data.forEach((val, i) => {
        const x = padding + i * stepX;
        const y = height - padding - val * stepY;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        // Draw point
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
    });
    
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#718096';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    
    labels.forEach((label, i) => {
        const x = padding + i * stepX;
        ctx.fillText(label, x, height - padding + 20);
    });
    
    // Draw Y-axis labels
    ctx.textAlign = 'right';
    [0, 25, 50, 75, 100].forEach(val => {
        const y = height - padding - val * stepY;
        ctx.fillText(`${val}%`, padding - 10, y + 4);
    });
}

// Product Management Scorecard
function renderScorecard() {
    const tbody = document.getElementById('scorecard-body');
    tbody.innerHTML = '';

    const selectedBU = AppState.selectedBusinessUnit;

    if (selectedBU === 'all') {
        // ── "All" view: one summary row per BU ──────────────────────────────
        MOCK_BUSINESS_UNITS.forEach(bu => {
            const buProducts = MOCK_PRODUCT_LINES.filter(pl => pl.businessUnitId === bu.id);
            if (buProducts.length === 0) return;

            const buRow = buildBUSummaryRow(bu, buProducts, false);
            tbody.appendChild(buRow);
        });
    } else {
        // ── Single-BU view: BU summary + indented product line rows ─────────
        const bu = MOCK_BUSINESS_UNITS.find(b => b.id === selectedBU);
        const buProducts = MOCK_PRODUCT_LINES.filter(pl => pl.businessUnitId === selectedBU);
        if (!bu || buProducts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="11" class="bu-okrs-empty">No data for this business unit</td></tr>';
            return;
        }

        // BU summary header row
        const buRow = buildBUSummaryRow(bu, buProducts, true);
        tbody.appendChild(buRow);

        // Product line rows sorted by current sort option
        const sortOption = document.getElementById('scorecard-sort').value;
        const sorted = sortProducts([...buProducts], sortOption);

        sorted.forEach(product => {
            const owner = MOCK_PRODUCT_OWNERS.find(po => po.id === product.ownerId);
            const productScore = calculateProductScore(product.id);

            const row = document.createElement('tr');
            row.className = 'scorecard-product-row';
            row.innerHTML = `
                <td colspan="2">
                    <span class="scorecard-indent-arrow">↳</span>
                    <a href="#" class="scorecard-link" data-product="${product.id}">${product.name}</a>
                </td>
                <td>${getMetricStatus(product.id, 'roadmapMilestones')}</td>
                <td>${getMetricStatus(product.id, 'problemBriefs')}</td>
                <td>${getMetricStatus(product.id, 'measurementPlans')}</td>
                <td>${getMetricStatus(product.id, 'epicManagement')}</td>
                <td>${getMetricStatus(product.id, 'storyManagement')}</td>
                <td class="score-value">${productScore}</td>
                <td><span class="status-badge ${getProductStatusClass(product.status)}">${capitalize(product.status)}</span></td>
                <td><button class="btn-action view-details" data-product="${product.id}">View</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Wire up view-details buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openProductDetailModal(e.target.dataset.product);
        });
    });
}

function buildBUSummaryRow(bu, buProducts, expanded) {
    const metrics = ['roadmapMilestones', 'problemBriefs', 'measurementPlans', 'epicManagement', 'storyManagement'];

    // Average each metric across all products in the BU
    const avgMetric = (metricType) => {
        const scores = buProducts.map(p => calculateRawMetricScore(p.id, metricType));
        return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    };

    const avgScore = Math.round(
        buProducts.map(p => calculateProductScore(p.id)).reduce((a, b) => a + b, 0) / buProducts.length
    );

    const scoreClass = avgScore >= 80 ? 'healthy' : avgScore >= 50 ? 'at-risk' : 'unhealthy';

    const metricCells = metrics.map(m => {
        const pct = avgMetric(m);
        const cls = pct >= 80 ? 'healthy' : pct >= 50 ? 'at-risk' : 'unhealthy';
        return `<td><span class="metric-badge ${cls}">${pct}%</span></td>`;
    }).join('');

    const row = document.createElement('tr');
    row.className = 'scorecard-bu-row';
    row.innerHTML = `
        <td class="scorecard-bu-name-cell" colspan="2">
            <span class="scorecard-bu-label">${bu.name}</span>
            <span class="scorecard-bu-count">${buProducts.length} product${buProducts.length !== 1 ? 's' : ''}</span>
        </td>
        ${metricCells}
        <td class="score-value scorecard-bu-score">${avgScore}</td>
        <td><span class="status-badge ${scoreClass}">${scoreClass === 'healthy' ? 'Healthy' : scoreClass === 'at-risk' ? 'At Risk' : 'Needs Work'}</span></td>
        <td></td>
    `;
    return row;
}

function calculateRawMetricScore(productId, metricType) {
    const productEpics = MOCK_EPICS.filter(e => e.productLineId === productId);
    if (productEpics.length === 0) return 0;

    switch (metricType) {
        case 'roadmapMilestones': {
            const withRelease = productEpics.filter(e => e.releaseStatus && e.releaseStatus !== 'notReleased').length;
            return Math.round((withRelease / productEpics.length) * 100);
        }
        case 'problemBriefs': {
            const briefs = MOCK_PROBLEM_BRIEFS.filter(pb => productEpics.some(e => e.id === pb.epicId));
            if (briefs.length === 0) return 0;
            return Math.round((briefs.filter(pb => pb.status === 'completed').length / briefs.length) * 100);
        }
        case 'measurementPlans': {
            const plans = MOCK_MEASUREMENT_PLANS.filter(mp => productEpics.some(e => e.id === mp.epicId));
            if (plans.length === 0) return 0;
            return Math.round((plans.filter(mp => mp.status === 'active').length / plans.length) * 100);
        }
        case 'epicManagement': {
            const managed = productEpics.filter(e => e.status !== 'backlog').length;
            return Math.round((managed / productEpics.length) * 100);
        }
        case 'storyManagement': {
            const epicIds = productEpics.map(e => e.id);
            const stories = MOCK_USER_STORIES.filter(s => epicIds.includes(s.epicId));
            if (stories.length === 0) return 0;
            return Math.round((stories.filter(s => s.status === 'completed').length / stories.length) * 100);
        }
        default: return 0;
    }
}

function calculateProductScore(productId) {
    const productEpics = MOCK_EPICS.filter(e => e.productLineId === productId);
    const productBriefs = MOCK_PROBLEM_BRIEFS.filter(pb => productEpics.some(e => e.id === pb.epicId));
    const productPlans = MOCK_MEASUREMENT_PLANS.filter(mp => productEpics.some(e => e.id === mp.epicId));
    
    // Calculate scores for each metric
    let roadmapScore = 100; // Assume complete if epics exist
    if (productEpics.length === 0) roadmapScore = 0;
    
    let briefScore = 0;
    if (productBriefs.length > 0) {
        const completedBriefs = productBriefs.filter(pb => pb.status === 'completed').length;
        briefScore = Math.round((completedBriefs / productBriefs.length) * 100);
    }
    
    let planScore = 0;
    if (productPlans.length > 0) {
        planScore = 100;
    }
    
    // Calculate overall score
    const score = Math.round((roadmapScore * 0.20) + (briefScore * 0.15) + (planScore * 0.15) + (100 * 0.25) + (100 * 0.25));
    return score;
}

function getMetricStatus(productId, metricType) {
    const productEpics = MOCK_EPICS.filter(e => e.productLineId === productId);

    let pct = 0;

    switch (metricType) {
        case 'roadmapMilestones':
            // Score: has epics and at least one has a release status
            if (productEpics.length === 0) { pct = 0; break; }
            const withRelease = productEpics.filter(e => e.releaseStatus && e.releaseStatus !== 'notReleased').length;
            pct = Math.round((withRelease / productEpics.length) * 100);
            break;

        case 'problemBriefs':
            if (productEpics.length === 0) { pct = 0; break; }
            const briefs = MOCK_PROBLEM_BRIEFS.filter(pb => productEpics.some(e => e.id === pb.epicId));
            if (briefs.length === 0) { pct = 0; break; }
            const completedBriefs = briefs.filter(pb => pb.status === 'completed').length;
            pct = Math.round((completedBriefs / briefs.length) * 100);
            break;

        case 'measurementPlans':
            if (productEpics.length === 0) { pct = 0; break; }
            const plans = MOCK_MEASUREMENT_PLANS.filter(mp => productEpics.some(e => e.id === mp.epicId));
            if (plans.length === 0) { pct = 0; break; }
            pct = Math.round((plans.filter(mp => mp.status === 'active').length / plans.length) * 100);
            break;

        case 'epicManagement':
            if (productEpics.length === 0) { pct = 0; break; }
            const managedEpics = productEpics.filter(e => e.status !== 'backlog').length;
            pct = Math.round((managedEpics / productEpics.length) * 100);
            break;

        case 'storyManagement':
            if (productEpics.length === 0) { pct = 0; break; }
            const epicIds = productEpics.map(e => e.id);
            const stories = MOCK_USER_STORIES.filter(s => epicIds.includes(s.epicId));
            if (stories.length === 0) { pct = 0; break; }
            const doneStories = stories.filter(s => s.status === 'completed').length;
            pct = Math.round((doneStories / stories.length) * 100);
            break;

        default:
            pct = 0;
    }

    if (pct >= 80) return `<span class="metric-badge healthy">${pct}%</span>`;
    if (pct >= 50) return `<span class="metric-badge at-risk">${pct}%</span>`;
    return `<span class="metric-badge unhealthy">${pct}%</span>`;
}

function sortProducts(products, sortOption) {
    const sortFunctions = {
        'score-desc': (a, b) => calculateProductScore(b.id) - calculateProductScore(a.id),
        'score-asc': (a, b) => calculateProductScore(a.id) - calculateProductScore(b.id),
        'business-unit': (a, b) => getBusinessUnitName(a.businessUnitId).localeCompare(getBusinessUnitName(b.businessUnitId)),
        'product-owner': (a, b) => {
            const ownerA = MOCK_PRODUCT_OWNERS.find(po => po.id === a.ownerId);
            const ownerB = MOCK_PRODUCT_OWNERS.find(po => po.id === b.ownerId);
            return (ownerA?.name || '').localeCompare(ownerB?.name || '');
        }
    };
    
    return products.sort(sortFunctions[sortOption] || sortFunctions['score-desc']);
}

function getProductStatusClass(status) {
    switch(status) {
        case 'active': return 'healthy';
        case 'atRisk': return 'at-risk';
        case 'inReview': return 'at-risk';
        case 'paused': return 'unhealthy';
        default: return 'unhealthy';
    }
}

function getBusinessUnitName(id) {
    const bu = MOCK_BUSINESS_UNITS.find(bu => bu.id === id);
    return bu ? bu.name : 'Unknown';
}

// Product Health Dashboard
function renderHealthDashboard() {
    renderHealthSummary();
    renderHealthMetrics();
}

function renderHealthSummary() {
    const container = document.getElementById('health-summary');
    
    const totalProducts = MOCK_PRODUCT_LINES.length;
    const productsWithHealth = new Set(MOCK_HEALTH_METRICS.map(hm => hm.productLineId)).size;
    const healthyCount = MOCK_HEALTH_METRICS.filter(hm => hm.status === 'healthy').length;
    const atRiskCount = MOCK_HEALTH_METRICS.filter(hm => hm.status === 'atRisk').length;
    const unhealthyCount = MOCK_HEALTH_METRICS.filter(hm => hm.status === 'unhealthy').length;
    const noDataCount = MOCK_HEALTH_METRICS.filter(hm => hm.status === 'noData').length;
    
    container.innerHTML = `
        <div class="health-card">
            <h3>Total Products</h3>
            <div class="health-value">${totalProducts}</div>
        </div>
        <div class="health-card">
            <h3>Products with Health Metrics</h3>
            <div class="health-value">${productsWithHealth}</div>
        </div>
        <div class="health-card">
            <h3>Healthy Metrics</h3>
            <div class="health-value" style="color: var(--success-color)">${healthyCount}</div>
        </div>
        <div class="health-card">
            <h3>At Risk Metrics</h3>
            <div class="health-value" style="color: var(--warning-color)">${atRiskCount}</div>
        </div>
        <div class="health-card">
            <h3>Unhealthy Metrics</h3>
            <div class="health-value" style="color: var(--danger-color)">${unhealthyCount}</div>
        </div>
        <div class="health-card">
            <h3>Metrics Missing Data</h3>
            <div class="health-value" style="color: var(--text-secondary)">${noDataCount}</div>
        </div>
    `;
}

function renderHealthMetrics() {
    const container = document.getElementById('health-metrics');
    
    // Get filtered metrics
    let metrics = filterData(MOCK_HEALTH_METRICS, 'productLineId');
    
    metrics.forEach(metric => {
        const product = MOCK_PRODUCT_LINES.find(pl => pl.id === metric.productLineId);
        
        const row = document.createElement('div');
        row.className = 'health-metric-row';
        row.innerHTML = `
            <div class="health-metric-info">
                <div class="health-metric-name">${product?.name} - ${metric.name}</div>
                <div class="health-metric-details">${metric.description}</div>
            </div>
            <div class="health-metric-value">
                <div class="value">${metric.currentValue} ${metric.unit}</div>
                <div class="target">Target: ${metric.targetValue} ${metric.unit}</div>
            </div>
            <div class="health-metric-status">
                <span class="health-status-badge ${metric.status}">${capitalize(metric.status)}</span>
            </div>
            <div class="health-metric-status">
                <span class="health-status-badge ${metric.trend === 'up' ? 'healthy' : metric.trend === 'down' ? 'unhealthy' : 'healthy'}">
                    ${metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'} ${capitalize(metric.trend)}
                </span>
            </div>
        `;
        container.appendChild(row);
    });
}

// Product Outcomes Dashboard
function renderOutcomesDashboard() {
    renderOutcomeKPIs();
    renderOutcomesTable();
}

function renderOutcomeKPIs() {
    const totalEpics = MOCK_EPICS.length;
    const alignedEpics = MOCK_EPICS.filter(e => e.okrId).length;
    const releasedEpics = MOCK_EPICS.filter(e => e.releaseStatus === 'released').length;
    const measuredEpics = MOCK_OUTCOMES.filter(o => o.outcomeStatus !== 'notYetReleased' && o.outcomeStatus !== 'awaitingMeasurement').length;
    const achievedOutcomes = MOCK_OUTCOMES.filter(o => o.outcomeStatus === 'achieved').length;
    
    document.getElementById('outcome-kpi-aligned').textContent = `${Math.round((alignedEpics / totalEpics) * 100)}%`;
    document.getElementById('outcome-kpi-released').textContent = `${Math.round((releasedEpics / totalEpics) * 100)}%`;
    document.getElementById('outcome-kpi-measured').textContent = `${Math.round((measuredEpics / releasedEpics) * 100)}%`;
    document.getElementById('outcome-kpi-achieved').textContent = `${Math.round((achievedOutcomes / measuredEpics) * 100)}%`;
}

function renderOutcomesTable() {
    const tbody = document.getElementById('outcomes-body');
    tbody.innerHTML = '';
    
    // Get outcomes with epic info
    const outcomes = MOCK_OUTCOMES.map(oc => {
        const epic = MOCK_EPICS.find(e => e.id === oc.epicId);
        const productLine = epic ? MOCK_PRODUCT_LINES.find(pl => pl.id === epic.productLineId) : null;
        const okr = epic?.okrId ? MOCK_OKRS.find(o => o.id === epic.okrId) : null;
        return { ...oc, epic, productLine, okr };
    });
    
    // Filter outcomes
    let filteredOutcomes = filterData(outcomes, 'productLineId');
    
    filteredOutcomes.forEach(outcome => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${outcome.productLine ? outcome.productLine.businessUnitId : 'N/A'}</td>
            <td>${outcome.productLine ? outcome.productLine.name : 'N/A'}</td>
            <td>${outcome.okr ? outcome.okr.name : 'Not Aligned'}</td>
            <td>${outcome.epic ? outcome.epic.title : 'N/A'}</td>
            <td>${outcome.epic ? outcome.epic.storyCompletion : 0}%</td>
            <td><span class="outcome-status-badge ${outcome.epic?.releaseStatus === 'released' ? 'achieved' : 'not-released'}">${outcome.epic?.releaseStatus || 'N/A'}</span></td>
            <td><span class="outcome-status-badge ${outcome.outcomeStatus}">${outcome.outcomeStatus}</span></td>
            <td>
                <button class="btn-action view-details">View</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Helper Functions
function filterData(data, ...filterFields) {
    return data.filter(item => {
        // Check BU pill-button filter (selectedBusinessUnit) — applies to all pages
        if (AppState.selectedBusinessUnit !== 'all') {
            const matchesBUPill = filterFields.some(field => {
                if (field === 'businessUnitId') return item.businessUnitId === AppState.selectedBusinessUnit;
                if (field === 'productLineId') {
                    const pl = MOCK_PRODUCT_LINES.find(p => p.id === item[field]);
                    return pl && pl.businessUnitId === AppState.selectedBusinessUnit;
                }
                return false;
            });
            if (!matchesBUPill) return false;
        }

        // Check product line filter
        if (AppState.filters.productLine !== 'all') {
            const matchesProductLine = filterFields.some(field => {
                if (field === 'productLineId') return item[field] === AppState.filters.productLine;
                if (field === 'businessUnitId') {
                    const productLine = MOCK_PRODUCT_LINES.find(pl => pl.id === item.productLineId);
                    return productLine && productLine.id === AppState.filters.productLine;
                }
                return false;
            });
            if (!matchesProductLine) return false;
        }

        // Check product owner filter
        if (AppState.filters.productOwner !== 'all') {
            const matchesOwner = filterFields.some(field => {
                if (field === 'ownerId') return item.ownerId === AppState.filters.productOwner;
                if (field === 'productLineId') {
                    const pl = MOCK_PRODUCT_LINES.find(p => p.id === item[field]);
                    return pl && pl.ownerId === AppState.filters.productOwner;
                }
                return false;
            });
            if (!matchesOwner) return false;
        }

        return true;
    });
}

function openProductDetailModal(productId) {
    const product = MOCK_PRODUCT_LINES.find(pl => pl.id === productId);
    const owner = MOCK_PRODUCT_OWNERS.find(po => po.id === product.ownerId);
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        </div>
        <div class="modal-section">
            <h3>Product Details</h3>
            <div class="modal-grid">
                <div class="modal-item">
                    <label>Product Owner</label>
                    <div class="value">${owner?.name || 'N/A'}</div>
                </div>
                <div class="modal-item">
                    <label>Business Unit</label>
                    <div class="value">${getBusinessUnitName(product.businessUnitId)}</div>
                </div>
                <div class="modal-item">
                    <label>Status</label>
                    <div class="value"><span class="status-badge ${getProductStatusClass(product.status)}">${capitalize(product.status)}</span></div>
                </div>
            </div>
        </div>
        <div class="modal-section">
            <h3>Product Management Metrics</h3>
            <div class="modal-grid">
                <div class="modal-item">
                    <label>Roadmap Milestones</label>
                    <div class="value">Complete</div>
                </div>
                <div class="modal-item">
                    <label>Problem Briefs</label>
                    <div class="value">Complete</div>
                </div>
                <div class="modal-item">
                    <label>Measurement Plans</label>
                    <div class="value">Complete</div>
                </div>
            </div>
        </div>
        <div class="modal-section">
            <h3>Epics</h3>
            <table class="scorecard-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Stories</th>
                        <th>Release</th>
                    </tr>
                </thead>
                <tbody>
                    ${MOCK_EPICS.filter(e => e.productLineId === productId).map(epic => `
                        <tr>
                            <td>${epic.title}</td>
                            <td><span class="status-badge ${epic.status === 'completed' ? 'healthy' : 'at-risk'}">${capitalize(epic.status)}</span></td>
                            <td>${epic.storyCompletion}%</td>
                            <td><span class="outcome-status-badge ${epic.releaseStatus === 'released' ? 'achieved' : 'not-released'}">${capitalize(epic.releaseStatus)}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="modal-actions">
            <button class="btn-secondary" id="close-modal">Close</button>
            <button class="btn-primary">Edit Product</button>
        </div>
    `;
    
    document.getElementById('detail-modal').classList.add('active');
    
    // Add close handler
    document.getElementById('close-modal').addEventListener('click', closeModal);
}

function closeModal() {
    document.getElementById('detail-modal').classList.remove('active');
}

function attachEventListeners() {
    document.getElementById('close-modal').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') {
            closeModal();
        }
    });
}

function initSettings() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;

    // Restore saved preference
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'false');
        }
    });

    // Settings gear button toggle
    const settingsBtn = document.getElementById('settings-btn');
    const settingsDropdown = document.getElementById('settings-dropdown');
    if (settingsBtn && settingsDropdown) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsDropdown.classList.toggle('open');
        });
        document.addEventListener('click', () => {
            settingsDropdown.classList.remove('open');
        });
    }
}