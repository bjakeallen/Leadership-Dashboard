// Data Models for Executive Product Management Dashboard

// Product Management Scoring Rubric
const SCORING_RUBRIC = {
    complete: { value: 100, label: 'Complete' },
    partiallyComplete: { value: 50, label: 'Partially Complete' },
    missing: { value: 0, label: 'Missing' },
    notApplicable: { value: 0, label: 'Not Applicable' }
};

// Product Management Metrics with weights
const PRODUCT_MANAGEMENT_METRICS = {
    roadmapMilestones: { 
        name: 'Roadmap Milestones', 
        weight: 0.20,
        criteria: ['planned', 'approved', 'communicated']
    },
    problemBriefs: { 
        name: 'Problem Briefs', 
        weight: 0.15,
        criteria: ['defined', 'validated', 'approved']
    },
    measurementPlans: { 
        name: 'Measurement Plans', 
        weight: 0.15,
        criteria: ['defined', 'baseline', 'target']
    },
    epicManagement: { 
        name: 'Epic Management', 
        weight: 0.25,
        criteria: ['backlog', 'prioritized', 'refined']
    },
    storyManagement: { 
        name: 'Story Management', 
        weight: 0.25,
        criteria: ['estimated', 'assigned', 'completed']
    }
};

// Health Status Thresholds
const HEALTH_THRESHOLDS = {
    healthy: { min: 80, label: 'Healthy' },
    atRisk: { min: 50, max: 79, label: 'At Risk' },
    unhealthy: { max: 49, label: 'Unhealthy' },
    noData: { label: 'No Data' }
};

// Outcome Status Definitions
const OUTCOME_STATUSES = {
    notYetReleased: { label: 'Not Yet Released', order: 1 },
    awaitingMeasurement: { label: 'Awaiting Measurement', order: 2 },
    onTrack: { label: 'On Track', order: 3 },
    achieved: { label: 'Outcome Achieved', order: 4 },
    partiallyAchieved: { label: 'Outcome Partially Achieved', order: 5 },
    notAchieved: { label: 'Outcome Not Achieved', order: 6 },
    insufficientData: { label: 'Insufficient Data', order: 7 }
};

// Product Management Statuses
const PRODUCT_STATUS = {
    active: { label: 'Active', healthy: true },
    atRisk: { label: 'At Risk', healthy: false },
    inReview: { label: 'In Review', healthy: false },
    paused: { label: 'Paused', healthy: false }
};

// User Roles
const USER_ROLES = {
    executive: { level: 1, permissions: ['read'] },
    seniorLeader: { level: 2, permissions: ['read', 'readBusinessUnit'] },
    productDirector: { level: 3, permissions: ['read', 'readBusinessUnit', 'manageProducts'] },
    productOwner: { level: 4, permissions: ['read', 'manageOwnProducts'] },
    admin: { level: 5, permissions: ['read', 'write', 'configure'] }
};

// Export for use in other modules
window.ProductDashboard = {
    SCORING_RUBRIC,
    PRODUCT_MANAGEMENT_METRICS,
    HEALTH_THRESHOLDS,
    OUTCOME_STATUSES,
    PRODUCT_STATUS,
    USER_ROLES
};