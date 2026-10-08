// Mock Data for Executive Product Management Dashboard

// Mock Business Units (Based on WGU Product Org Structure)
const MOCK_BUSINESS_UNITS = [
    { id: 'bu-1', name: 'University Tech', description: 'Student and academic technology platforms', vpName: 'Troy Davis' },
    { id: 'bu-2', name: 'Enterprise Technology', description: 'Enterprise platform services and infrastructure', vpName: 'Rajeev Maria' },
    { id: 'bu-3', name: 'Student Lifecycle Services', description: 'Enrollment, career services, and student operations', vpName: 'Hank Humphreys' },
    { id: 'bu-4', name: 'Infrastructure & Operations', description: 'Platform products and enterprise systems', vpName: 'John Morton' },
    { id: 'bu-5', name: 'Academic Delivery Tech', description: 'Assessment and academic delivery platforms', vpName: 'Jon Fenton' },
    { id: 'bu-6', name: 'WGU Academy', description: 'Academy technology and learning products', vpName: 'Chelsea Barnett' },
    { id: 'bu-7', name: 'Craft Product & Technology', description: 'Craft education platform', vpName: 'Amani Ariel-Wamala' },
    { id: 'bu-8', name: 'WGU Labs', description: 'Innovation and AI-driven products', vpName: 'Ryan Gialames' },
    { id: 'bu-9', name: 'Decision Intelligence', description: 'Enterprise decision platforms and learner analytics', vpName: 'Jennie Sanders' },
    { id: 'bu-10', name: 'Academic Product Management', description: 'Program development and curriculum', vpName: 'Leslie Noggle' }
];

// Mock Product Lines (Based on WGU Product Areas)
const MOCK_PRODUCT_LINES = [
    // University Tech
    { id: 'pl-1', businessUnitId: 'bu-1', name: 'Student Portals', description: 'New Student Portal & Legacy Portal', ownerId: 'po-1', status: 'active' },
    { id: 'pl-2', businessUnitId: 'bu-1', name: 'Experiential Learning Platform', description: 'Work-based & experiential learning systems', ownerId: 'po-2', status: 'active' },
    { id: 'pl-3', businessUnitId: 'bu-1', name: 'Academic Operations', description: 'Compliance & accreditation platforms', ownerId: 'po-3', status: 'active' },
    
    // Enterprise Technology
    { id: 'pl-4', businessUnitId: 'bu-2', name: 'Web Platform & Dev Experience', description: 'Platform engineering & developer tools', ownerId: 'po-4', status: 'active' },
    { id: 'pl-5', businessUnitId: 'bu-2', name: 'Mobile Apps', description: 'myWGU, NGLX, and Academy mobile apps', ownerId: 'po-5', status: 'active' },
    { id: 'pl-6', businessUnitId: 'bu-2', name: 'Enterprise Data Products', description: 'Databricks, ThoughtSpot, data platforms', ownerId: 'po-6', status: 'active' },
    { id: 'pl-7', businessUnitId: 'bu-2', name: 'Identity & Access Management', description: 'IAM, Ping, EntraID, WGUId', ownerId: 'po-7', status: 'active' },
    { id: 'pl-8', businessUnitId: 'bu-2', name: 'AI & ML Platforms', description: 'AI enablement & ML platforms', ownerId: 'po-8', status: 'atRisk' },
    
    // Student Lifecycle Services
    { id: 'pl-9', businessUnitId: 'bu-3', name: 'Enrollment Experience', description: 'Self-service enrollment portal', ownerId: 'po-9', status: 'active' },
    { id: 'pl-10', businessUnitId: 'bu-3', name: 'Career Services Platform', description: 'Career services & alumni portal', ownerId: 'po-10', status: 'active' },
    { id: 'pl-11', businessUnitId: 'bu-3', name: 'Strategic Partnerships', description: 'Partnership management systems', ownerId: 'po-11', status: 'active' },
    
    // Infrastructure & Operations
    { id: 'pl-12', businessUnitId: 'bu-4', name: 'ServiceNow Platform', description: 'Enterprise ServiceNow governance', ownerId: 'po-12', status: 'active' },
    { id: 'pl-13', businessUnitId: 'bu-4', name: 'Salesforce & CRM', description: 'Salesforce platform & Genesys', ownerId: 'po-13', status: 'active' },
    { id: 'pl-14', businessUnitId: 'bu-4', name: 'Enterprise Technology Platforms', description: 'Microsoft 365, Atlassian suite', ownerId: 'po-14', status: 'active' },
    { id: 'pl-15', businessUnitId: 'bu-4', name: 'People & Finance Systems', description: 'Workday, Adaptive, procurement', ownerId: 'po-15', status: 'inReview' },
    
    // Academic Delivery Tech
    { id: 'pl-16', businessUnitId: 'bu-5', name: 'Assessment Management', description: 'Assessment systems & faculty allocation', ownerId: 'po-16', status: 'active' },
    { id: 'pl-17', businessUnitId: 'bu-5', name: 'Enterprise Decision Platforms', description: 'AI-driven decision automation', ownerId: 'po-17', status: 'active' },
    
    // WGU Academy
    { id: 'pl-18', businessUnitId: 'bu-6', name: 'Academy Platform', description: 'WGU Academy technology platform', ownerId: 'po-18', status: 'active' },
    
    // Craft
    { id: 'pl-19', businessUnitId: 'bu-7', name: 'Craft Education Platform', description: 'Craft learning management system', ownerId: 'po-19', status: 'active' },
    
    // WGU Labs
    { id: 'pl-20', businessUnitId: 'bu-8', name: 'AI Innovation Products', description: 'AI Bot & LDA curriculum development', ownerId: 'po-20', status: 'active' },
    
    // Decision Intelligence
    { id: 'pl-21', businessUnitId: 'bu-9', name: 'Learner 360', description: 'Student intelligence & analytics', ownerId: 'po-21', status: 'atRisk' },
    
    // Academic Product Management
    { id: 'pl-22', businessUnitId: 'bu-10', name: 'General Education Programs', description: 'General education curriculum', ownerId: 'po-22', status: 'active' },
    { id: 'pl-23', businessUnitId: 'bu-10', name: 'School of Technology Programs', description: 'Technology degree programs', ownerId: 'po-23', status: 'active' },
    { id: 'pl-24', businessUnitId: 'bu-10', name: 'School of Business Programs', description: 'Business degree programs', ownerId: 'po-24', status: 'active' },
    { id: 'pl-25', businessUnitId: 'bu-10', name: 'School of Education Programs', description: 'Education degree programs', ownerId: 'po-25', status: 'active' }
];

// Mock Product Owners (Based on WGU Product Management Staff)
const MOCK_PRODUCT_OWNERS = [
    { id: 'po-1', name: 'Dave Tanner', email: 'dave.tanner@wgu.edu', role: 'Senior Software Product Manager', director: 'Donna Kelley' },
    { id: 'po-2', name: 'Laura Montoya', email: 'laura.montoya@wgu.edu', role: 'Principal Software Product Manager', director: 'Donna Kelley' },
    { id: 'po-3', name: 'James Delacruz', email: 'james.delacruz@wgu.edu', role: 'Senior Software Product Manager', director: 'Donna Kelley' },
    { id: 'po-4', name: 'Brad Law', email: 'brad.law@wgu.edu', role: 'Senior Software Product Manager', director: 'Heather Owens' },
    { id: 'po-5', name: 'Sutopa Roy', email: 'sutopa.roy@wgu.edu', role: 'Senior Software Product Manager', director: 'Heather Owens' },
    { id: 'po-6', name: 'Garth Gehlbach', email: 'garth.gehlbach@wgu.edu', role: 'Staff Software Product Manager', director: 'Heather Owens' },
    { id: 'po-7', name: 'Miguel Angel Jaime Seade', email: 'miguel.seade@wgu.edu', role: 'Staff Software Product Manager', director: 'Heather Owens' },
    { id: 'po-8', name: 'Ram Kumar Nimmakayala', email: 'ram.nimmakayala@wgu.edu', role: 'Principal Software Product Manager', director: 'Heather Owens' },
    { id: 'po-9', name: 'Hayley Burbank', email: 'hayley.burbank@wgu.edu', role: 'Senior Software Product Manager', director: 'Lisa Moore' },
    { id: 'po-10', name: 'Josh Harman', email: 'josh.harman@wgu.edu', role: 'Staff Software Product Manager', director: 'Lisa Moore' },
    { id: 'po-11', name: 'Laura Conklin', email: 'laura.conklin@wgu.edu', role: 'Staff Software Product Manager', director: 'Lisa Moore' },
    { id: 'po-12', name: 'Traci Musselman', email: 'traci.musselman@wgu.edu', role: 'Principal Software Product Manager', director: 'Chris Jones' },
    { id: 'po-13', name: 'Gilbert Rojas', email: 'gilbert.rojas@wgu.edu', role: 'Senior Software Product Manager', director: 'Chris Jones' },
    { id: 'po-14', name: 'Erik Lindquist', email: 'erik.lindquist@wgu.edu', role: 'Senior Software Product Manager', director: 'Chris Jones' },
    { id: 'po-15', name: 'Elizabeth Christensen', email: 'elizabeth.christensen@wgu.edu', role: 'Staff Software Product Manager', director: 'Chris Jones' },
    { id: 'po-16', name: 'Priyanka Singh', email: 'priyanka.singh@wgu.edu', role: 'Senior Software Product Manager', director: 'Jon Fenton' },
    { id: 'po-17', name: 'Ben Hugo', email: 'ben.hugo@wgu.edu', role: 'Senior Software Product Manager', director: 'Jon Fenton' },
    { id: 'po-18', name: 'Hyrum Jensen', email: 'hyrum.jensen@wgu.edu', role: 'Senior Software Product Manager', director: 'Chelsea Barnett' },
    { id: 'po-19', name: 'Tracy Gillespie', email: 'tracy.gillespie@wgu.edu', role: 'Principal Software Product Manager', director: 'Amani Ariel-Wamala' },
    { id: 'po-20', name: 'June Zhu', email: 'june.zhu@wgu.edu', role: 'Staff Software Product Manager', director: 'Ryan Gialames' },
    { id: 'po-21', name: 'Jesse Phillipps', email: 'jesse.phillipps@wgu.edu', role: 'Staff Software Product Manager', director: 'Heather Owens' },
    { id: 'po-22', name: 'Teresa Carr', email: 'teresa.carr@wgu.edu', role: 'Senior Manager, Academic Product Management', director: 'Leslie Noggle' },
    { id: 'po-23', name: 'Craig Laurence', email: 'craig.laurence@wgu.edu', role: 'Manager, Academic Product Management', director: 'Scott Armstrong' },
    { id: 'po-24', name: 'Jeremiah Baker', email: 'jeremiah.baker@wgu.edu', role: 'Manager, Academic Product Management', director: 'Sherry Cowen' },
    { id: 'po-25', name: 'Sean Crossland', email: 'sean.crossland@wgu.edu', role: 'Manager, Academic Product Management', director: 'Laura Porter-Jones' }
];

// Mock OKRs (WGU Strategic Objectives)
const MOCK_OKRS = [
    { id: 'okr-1', name: 'Q4 2026 - Student Experience Excellence', objective: 'Transform the student experience across all touchpoints', keyResult: 'Achieve 85% student satisfaction score' },
    { id: 'okr-2', name: 'Q4 2026 - Enrollment Growth', objective: 'Increase student enrollment and conversion rates', keyResult: 'Grow enrollment by 15% YoY' },
    { id: 'okr-3', name: 'Q4 2026 - Platform Modernization', objective: 'Modernize core technology platforms', keyResult: 'Migrate 80% of legacy systems to cloud' },
    { id: 'okr-4', name: 'Q4 2026 - AI & Innovation', objective: 'Leverage AI to improve learning outcomes', keyResult: 'Deploy AI-powered features across 5 products' },
    { id: 'okr-5', name: 'Q4 2026 - Operational Excellence', objective: 'Improve operational efficiency and reduce costs', keyResult: 'Reduce operational costs by 12%' },
    { id: 'okr-6', name: 'Q4 2026 - Academic Quality', objective: 'Enhance academic quality and accreditation compliance', keyResult: 'Maintain 100% compliance across all programs' },
    { id: 'okr-7', name: 'Q4 2026 - Career Outcomes', objective: 'Improve graduate career outcomes and employer satisfaction', keyResult: 'Achieve 90% graduate employment rate' }
];

// Mock Business Unit OKRs
const MOCK_BUSINESS_UNIT_OKRS = [
    // University Tech (8 OKRs)
    { 
        id: 'bu-okr-1', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Modernize Student & Academic Experience Platforms',
        keyResult: 'Launch new student portal to 100% of students',
        progress: 75,
        status: 'on-track',
        owner: 'Troy Davis',
        lastCheckin: 'Portal beta testing with 500 students completed successfully. Preparing for full rollout.',
        lastCheckinTime: '1d'
    },
    { 
        id: 'bu-okr-1b', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Improve Learning Experience Platform Integration',
        keyResult: 'Integrate 10 learning tools into unified platform',
        progress: 70,
        status: 'on-track',
        owner: 'Troy Davis',
        lastCheckin: '7 of 10 tools integrated. Final 3 scheduled for next sprint.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-1c', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Enhance Experiential Learning Capabilities',
        keyResult: 'Deploy work-based learning platform to all programs',
        progress: 45,
        status: 'at-risk',
        owner: 'Donna Kelley',
        lastCheckin: 'Platform development complete. Delays in content migration from legacy system.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-1d', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Improve Academic Operations Efficiency',
        keyResult: 'Automate 80% of compliance reporting workflows',
        progress: 62,
        status: 'on-track',
        owner: 'Alan Hansen',
        lastCheckin: 'Automated 50 of 62 compliance reports. On schedule for Q4 completion.',
        lastCheckinTime: '2d'
    },
    { 
        id: 'bu-okr-1e', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Modernize Course Faculty Tools',
        keyResult: 'Increase faculty satisfaction score by 25%',
        progress: 55,
        status: 'at-risk',
        owner: 'Alan Hansen',
        lastCheckin: 'Faculty satisfaction up 15%. Need to accelerate training and adoption.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-1f', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Enhance Student Portal Mobile Experience',
        keyResult: 'Achieve 90% mobile app user satisfaction',
        progress: 82,
        status: 'on-track',
        owner: 'Donna Kelley',
        lastCheckin: 'Mobile app satisfaction at 88%. Final UX improvements in progress.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-1g', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Improve Academic Catalog Management',
        keyResult: 'Reduce catalog update time by 50%',
        progress: 68,
        status: 'on-track',
        owner: 'Donna Kelley',
        lastCheckin: 'New catalog system reducing update time by 35%. On track for 50% target.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-1h', 
        businessUnitId: 'bu-1',
        businessUnit: 'University Tech',
        objective: 'Expand Community and Collaboration Features',
        keyResult: 'Launch student communities platform to 50,000 users',
        progress: 38,
        status: 'behind',
        owner: 'Alan Hansen',
        lastCheckin: 'Currently at 18,000 users. Marketing campaign needed to drive adoption.',
        lastCheckinTime: '6d'
    },
    
    // Enterprise Technology (8 OKRs)
    { 
        id: 'bu-okr-2', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Build AI-Powered Enterprise Platform Capabilities',
        keyResult: 'Deploy AI/ML features in 5 enterprise platforms',
        progress: 60,
        status: 'on-track',
        owner: 'Rajeev Maria',
        lastCheckin: 'Completed AI integration in 3 platforms. Working on data platform integration next.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-2b', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Strengthen Identity & Security Posture',
        keyResult: 'Implement zero-trust architecture for 80% of systems',
        progress: 38,
        status: 'behind',
        owner: 'Rajeev Maria',
        lastCheckin: 'Behind schedule due to complexity. Adding additional security engineers.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-2c', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Modernize Mobile Applications',
        keyResult: 'Achieve 4.5+ star rating across all mobile apps',
        progress: 72,
        status: 'on-track',
        owner: 'Heather Owens',
        lastCheckin: 'myWGU app at 4.6 stars. NGLX app at 4.3 stars, improvements in progress.',
        lastCheckinTime: '2d'
    },
    { 
        id: 'bu-okr-2d', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Enhance Developer Experience & Platform',
        keyResult: 'Reduce average deployment time by 40%',
        progress: 55,
        status: 'at-risk',
        owner: 'Paul Ford',
        lastCheckin: 'Deployment time reduced by 25%. CI/CD pipeline improvements ongoing.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-2e', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Scale Enterprise Data Platform',
        keyResult: 'Migrate 15 data sources to unified data platform',
        progress: 67,
        status: 'on-track',
        owner: 'Heather Owens',
        lastCheckin: '10 of 15 data sources migrated. Remaining sources scheduled for next month.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-2f', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Improve Cloud Infrastructure Efficiency',
        keyResult: 'Reduce cloud infrastructure costs by 20%',
        progress: 48,
        status: 'at-risk',
        owner: 'Paul Ford',
        lastCheckin: 'Cost reduction at 12%. Implementing additional optimization strategies.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-2g', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Enhance Enterprise Payments Platform',
        keyResult: 'Process 100% of payments through new platform',
        progress: 85,
        status: 'on-track',
        owner: 'Paul Ford',
        lastCheckin: 'New payment platform handling 85% of transactions. Final migration underway.',
        lastCheckinTime: '1d'
    },
    { 
        id: 'bu-okr-2h', 
        businessUnitId: 'bu-2',
        businessUnit: 'Enterprise Technology',
        objective: 'Modernize Student Intelligence Platform',
        keyResult: 'Deliver real-time student insights to 100% of advisors',
        progress: 58,
        status: 'on-track',
        owner: 'Heather Owens',
        lastCheckin: 'Platform deployed to 58% of advisors. Training sessions scheduled for remainder.',
        lastCheckinTime: '2d'
    },
    
    // Student Lifecycle Services (7 OKRs)
    { 
        id: 'bu-okr-3', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Increase Enrollment Conversion & Student Retention',
        keyResult: 'Improve enrollment conversion rate by 18%',
        progress: 55,
        status: 'at-risk',
        owner: 'Hank Humphreys',
        lastCheckin: 'Conversion rate up 10% but slower than expected. Need additional marketing support.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-3b', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Expand Career Services & Alumni Engagement',
        keyResult: 'Increase alumni platform engagement by 40%',
        progress: 52,
        status: 'at-risk',
        owner: 'Hank Humphreys',
        lastCheckin: 'Engagement up 21%. Launching alumni networking events to boost participation.',
        lastCheckinTime: '6d'
    },
    { 
        id: 'bu-okr-3c', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Modernize Enrollment Experience Portal',
        keyResult: 'Migrate 100% of enrollments to self-service portal',
        progress: 78,
        status: 'on-track',
        owner: 'Lisa Moore',
        lastCheckin: 'Self-service enrollment at 78%. Remaining students migrating by end of quarter.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-3d', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Enhance Strategic Partnership Platform',
        keyResult: 'Onboard 25 new strategic partners to platform',
        progress: 64,
        status: 'on-track',
        owner: 'Lisa Moore',
        lastCheckin: '16 partners onboarded. 9 more in final stages of integration.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-3e', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Improve Student Affairs Operations',
        keyResult: 'Reduce average case resolution time by 35%',
        progress: 42,
        status: 'at-risk',
        owner: 'Lisa Moore',
        lastCheckin: 'Case resolution time reduced by 18%. Implementing automation to accelerate.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-3f', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Launch Digital Credentials Platform',
        keyResult: 'Issue digital badges to 10,000 students',
        progress: 35,
        status: 'behind',
        owner: 'Mike Iampietro',
        lastCheckin: 'Issued 3,500 badges. Platform issues delaying broader rollout.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-3g', 
        businessUnitId: 'bu-3',
        businessUnit: 'Student Lifecycle Services',
        objective: 'Enhance Total Talent Management',
        keyResult: 'Connect 5,000 students with employment opportunities',
        progress: 68,
        status: 'on-track',
        owner: 'Mike Iampietro',
        lastCheckin: '3,400 students connected. Partnership pipeline strong for Q1.',
        lastCheckinTime: '2d'
    },
    
    // Infrastructure & Operations (8 OKRs)
    { 
        id: 'bu-okr-4', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Optimize Enterprise Systems & Platform Reliability',
        keyResult: 'Achieve 99.9% uptime across all critical platforms',
        progress: 92,
        status: 'on-track',
        owner: 'John Morton',
        lastCheckin: 'Uptime at 99.92% for Q4. All systems performing well.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-4b', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Modernize Enterprise Business Operations Platforms',
        keyResult: 'Complete ServiceNow platform upgrade across all modules',
        progress: 85,
        status: 'on-track',
        owner: 'John Morton',
        lastCheckin: '8 of 10 modules upgraded. Final 2 modules testing in UAT.',
        lastCheckinTime: '2d'
    },
    { 
        id: 'bu-okr-4c', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Enhance Salesforce CRM Capabilities',
        keyResult: 'Deploy new Salesforce modules to all enrollment teams',
        progress: 72,
        status: 'on-track',
        owner: 'Chris Jones',
        lastCheckin: 'CRM deployed to 72% of teams. Training completion on track.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-4d', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Modernize People & Finance Systems',
        keyResult: 'Migrate to Workday Adaptive Planning for all colleges',
        progress: 58,
        status: 'at-risk',
        owner: 'Chris Jones',
        lastCheckin: '3 of 5 colleges migrated. Delays due to data quality issues.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-4e', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Enhance Microsoft 365 Platform',
        keyResult: 'Deploy Teams to 100% of faculty and staff',
        progress: 88,
        status: 'on-track',
        owner: 'Chris Jones',
        lastCheckin: 'Teams adoption at 88%. Final training sessions scheduled.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-4f', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Optimize Atlassian Platform Performance',
        keyResult: 'Reduce Jira page load time by 40%',
        progress: 65,
        status: 'on-track',
        owner: 'Chris Jones',
        lastCheckin: 'Page load time reduced by 28%. Infrastructure upgrades in progress.',
        lastCheckinTime: '6d'
    },
    { 
        id: 'bu-okr-4g', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Modernize Enterprise Communications',
        keyResult: 'Migrate to unified Genesys cloud platform',
        progress: 45,
        status: 'at-risk',
        owner: 'Chris Jones',
        lastCheckin: 'Migration 45% complete. Integration challenges with legacy systems.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-4h', 
        businessUnitId: 'bu-4',
        businessUnit: 'Infrastructure & Operations',
        objective: 'Enhance Procurement Platform',
        keyResult: 'Automate 90% of procurement workflows in Merlin',
        progress: 52,
        status: 'on-track',
        owner: 'Chris Jones',
        lastCheckin: 'Automated 47 of 90 workflows. On schedule for Q4 target.',
        lastCheckinTime: '2d'
    },
    
    // Academic Delivery (7 OKRs)
    { 
        id: 'bu-okr-5', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Enhance Assessment Quality & Faculty Experience',
        keyResult: 'Reduce assessment turnaround time by 30%',
        progress: 45,
        status: 'at-risk',
        owner: 'Jon Fenton',
        lastCheckin: 'Automated grading reducing time by 18%. Need to accelerate faculty adoption.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-5b', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Deploy AI-Powered Decision Platforms',
        keyResult: 'Launch predictive analytics in 5 academic programs',
        progress: 68,
        status: 'on-track',
        owner: 'Jon Fenton',
        lastCheckin: 'Analytics deployed in 3 programs. 2 more launching next month.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-5c', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Improve Faculty Allocation System',
        keyResult: 'Achieve 95% faculty satisfaction with allocation process',
        progress: 58,
        status: 'at-risk',
        owner: 'Karl Lloyd',
        lastCheckin: 'Faculty satisfaction at 78%. Additional training and support needed.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-5d', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Modernize Assessment Management System',
        keyResult: 'Migrate all assessments to new AMS platform',
        progress: 72,
        status: 'on-track',
        owner: 'Karl Lloyd',
        lastCheckin: 'Migrated 72% of assessments. Final batch scheduled for November.',
        lastCheckinTime: '2d'
    },
    { 
        id: 'bu-okr-5e', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Enhance Learner 360 Platform',
        keyResult: 'Deploy student risk indicators to 100% of mentors',
        progress: 82,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: 'Risk indicators deployed to 82% of mentors. Training ongoing.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-5f', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Improve Decision Intelligence Accuracy',
        keyResult: 'Achieve 85% prediction accuracy for student outcomes',
        progress: 75,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: 'Current accuracy at 81%. Model refinements improving predictions.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-5g', 
        businessUnitId: 'bu-5',
        businessUnit: 'Academic Delivery',
        objective: 'Automate Academic Operations Workflows',
        keyResult: 'Reduce manual intervention in 50 academic processes',
        progress: 48,
        status: 'at-risk',
        owner: 'Karl Lloyd',
        lastCheckin: 'Automated 24 processes. Some workflows more complex than anticipated.',
        lastCheckinTime: '6d'
    },
    
    // Academy (8 OKRs)
    { 
        id: 'bu-okr-6', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Scale Academy Platform for Growth',
        keyResult: 'Support 50,000 active Academy learners',
        progress: 68,
        status: 'on-track',
        owner: 'Chelsea Barnett',
        lastCheckin: 'Currently at 34,000 active learners. Platform performance stable.',
        lastCheckinTime: '2d'
    },
    { 
        id: 'bu-okr-6b', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Enhance Academy Mobile Experience',
        keyResult: 'Launch Academy mobile app with 4.5+ star rating',
        progress: 85,
        status: 'on-track',
        owner: 'Olivier Brand',
        lastCheckin: 'App launched with 4.6 star rating. User feedback highly positive.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-6c', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Expand Academy Course Catalog',
        keyResult: 'Add 50 new courses to Academy platform',
        progress: 72,
        status: 'on-track',
        owner: 'Kyle Evans',
        lastCheckin: '36 courses launched. 14 more in final production stages.',
        lastCheckinTime: '3d'
    },
    { 
        id: 'bu-okr-6d', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Improve Academy Learner Retention',
        keyResult: 'Increase course completion rate to 75%',
        progress: 58,
        status: 'at-risk',
        owner: 'Kyle Evans',
        lastCheckin: 'Completion rate at 62%. Implementing engagement features to improve retention.',
        lastCheckinTime: '5d'
    },
    { 
        id: 'bu-okr-6e', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Launch Academy Learning Product Owner Tools',
        keyResult: 'Deploy content authoring platform to all LPOs',
        progress: 48,
        status: 'at-risk',
        owner: 'Wendy Rush',
        lastCheckin: 'Platform deployed to 12 of 25 LPOs. Training taking longer than expected.',
        lastCheckinTime: '1w'
    },
    { 
        id: 'bu-okr-6f', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Enhance Academy Analytics Dashboard',
        keyResult: 'Deliver real-time learner insights to all instructors',
        progress: 65,
        status: 'on-track',
        owner: 'Kyle Evans',
        lastCheckin: 'Dashboard deployed to 65% of instructors. Rollout continuing.',
        lastCheckinTime: '2d'
    },
    { 
        id: 'bu-okr-6g', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Optimize Academy Operations',
        keyResult: 'Reduce operational costs per learner by 15%',
        progress: 42,
        status: 'behind',
        owner: 'Nick Vetock',
        lastCheckin: 'Cost reduction at 8%. Need to accelerate platform efficiency improvements.',
        lastCheckinTime: '4d'
    },
    { 
        id: 'bu-okr-6h', 
        businessUnitId: 'bu-6',
        businessUnit: 'Academy',
        objective: 'Improve Academy Partner Integration',
        keyResult: 'Onboard 15 new employer partners to Academy',
        progress: 73,
        status: 'on-track',
        owner: 'Chelsea Barnett',
        lastCheckin: '11 partners onboarded. 4 more in final contract negotiations.',
        lastCheckinTime: '6d'
    },

    // Craft Product & Technology (8 OKRs)
    {
        id: 'bu-okr-7',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Launch Craft Learning Management System v2',
        keyResult: 'Migrate 100% of active learners to new LMS platform',
        progress: 62,
        status: 'on-track',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: 'Migration tooling complete. 62% of learners moved. Remaining cohorts scheduled through Oct.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-7b',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Improve Learner Engagement & Completion Rates',
        keyResult: 'Increase course completion rate from 54% to 70%',
        progress: 58,
        status: 'on-track',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: 'Completion rate at 63% following new nudge notification system deployment.',
        lastCheckinTime: '3d'
    },
    {
        id: 'bu-okr-7c',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Expand Craft Course Catalog',
        keyResult: 'Publish 25 new employer-aligned micro-credentials',
        progress: 44,
        status: 'at-risk',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: '11 of 25 credentials published. Content review bottleneck identified; additional reviewers being onboarded.',
        lastCheckinTime: '5d'
    },
    {
        id: 'bu-okr-7d',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Integrate Employer Partner Pathways',
        keyResult: 'Connect 10 employer partners to direct-hire pathways in platform',
        progress: 80,
        status: 'on-track',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: '8 partners live with direct-hire pathways. Final 2 in contract finalization.',
        lastCheckinTime: '1d'
    },
    {
        id: 'bu-okr-7e',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Enhance Instructor Tooling & Feedback Loops',
        keyResult: 'Deploy instructor dashboard to 100% of Craft instructors',
        progress: 35,
        status: 'behind',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: 'Dashboard pilot with 8 instructors complete. Broader rollout delayed pending UX revisions.',
        lastCheckinTime: '1w'
    },
    {
        id: 'bu-okr-7f',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Build Mobile-First Learner Experience',
        keyResult: 'Achieve 60% of learning sessions on mobile devices',
        progress: 51,
        status: 'on-track',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: 'Mobile session share at 51%, up from 38% at quarter start. PWA optimizations shipped.',
        lastCheckinTime: '4d'
    },
    {
        id: 'bu-okr-7g',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Improve Platform Reliability & Uptime',
        keyResult: 'Achieve 99.5% platform uptime across all Craft services',
        progress: 88,
        status: 'on-track',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: 'Platform uptime at 99.6% this quarter. One P1 incident in August resolved within SLA.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-7h',
        businessUnitId: 'bu-7',
        businessUnit: 'Craft Product & Technology',
        objective: 'Scale Learner Analytics Capabilities',
        keyResult: 'Deliver learner progress analytics to all enrolled employers',
        progress: 42,
        status: 'at-risk',
        owner: 'Amani Ariel-Wamala',
        lastCheckin: 'Analytics dashboard in QA. Data pipeline latency issues under investigation before broader rollout.',
        lastCheckinTime: '3d'
    },

    // WGU Labs (7 OKRs)
    {
        id: 'bu-okr-8',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Advance AI-Powered Learning Personalization',
        keyResult: 'Deploy personalized learning path AI to 50,000 active students',
        progress: 68,
        status: 'on-track',
        owner: 'Ryan Gialames',
        lastCheckin: 'AI model in production for 34,000 students. Scaling infrastructure provisioned for Q4 expansion.',
        lastCheckinTime: '1d'
    },
    {
        id: 'bu-okr-8b',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Productize AI Tutoring & Coaching Bot',
        keyResult: 'Achieve 10,000 weekly active users on WGU AI Tutor',
        progress: 55,
        status: 'on-track',
        owner: 'Ryan Gialames',
        lastCheckin: 'AI Tutor at 5,500 WAU. Expanded to 3 new programs this month. On pace for target.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-8c',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Develop LDA Curriculum Intelligence Platform',
        keyResult: 'Automate curriculum gap analysis for 80% of degree programs',
        progress: 40,
        status: 'at-risk',
        owner: 'Ryan Gialames',
        lastCheckin: 'LDA tooling covering 40% of programs. NLP model accuracy improvements needed before broader rollout.',
        lastCheckinTime: '4d'
    },
    {
        id: 'bu-okr-8d',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Scale AI Model Operations Infrastructure',
        keyResult: 'Reduce average model inference latency to under 200ms',
        progress: 72,
        status: 'on-track',
        owner: 'Ryan Gialames',
        lastCheckin: 'P50 inference latency at 185ms. P99 at 420ms - still working on tail latency reduction.',
        lastCheckinTime: '3d'
    },
    {
        id: 'bu-okr-8e',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Establish AI Ethics & Responsible AI Framework',
        keyResult: 'Complete bias audits for all student-facing AI models',
        progress: 50,
        status: 'on-track',
        owner: 'Ryan Gialames',
        lastCheckin: '4 of 8 models audited. Findings documented; 2 required remediation now complete.',
        lastCheckinTime: '6d'
    },
    {
        id: 'bu-okr-8f',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Drive AI Innovation Through External Partnerships',
        keyResult: 'Establish 3 new AI research partnerships with universities or industry',
        progress: 67,
        status: 'on-track',
        owner: 'Ryan Gialames',
        lastCheckin: '2 partnerships signed (Stanford HAI, Microsoft Research). Third in final negotiations.',
        lastCheckinTime: '5d'
    },
    {
        id: 'bu-okr-8g',
        businessUnitId: 'bu-8',
        businessUnit: 'WGU Labs',
        objective: 'Improve AI Product Adoption Across Business Units',
        keyResult: 'Achieve AI feature adoption in 7 of 10 business units',
        progress: 43,
        status: 'at-risk',
        owner: 'Ryan Gialames',
        lastCheckin: '3 BUs actively using Labs-built AI features. Enablement sessions scheduled for 4 more BUs.',
        lastCheckinTime: '1w'
    },

    // Decision Intelligence (8 OKRs)
    {
        id: 'bu-okr-9',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Deliver Learner 360 Unified Student Intelligence Platform',
        keyResult: 'Provide unified student view to 100% of student-facing staff',
        progress: 48,
        status: 'at-risk',
        owner: 'Jennie Sanders',
        lastCheckin: 'Data unification for academic and enrollment domains complete. Financial aid domain integration delayed.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-9b',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Enable Self-Service Analytics Across the Enterprise',
        keyResult: 'Onboard 500 business users onto ThoughtSpot self-service analytics',
        progress: 74,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: '370 users onboarded. Training program running bi-weekly. On track for Q4 goal.',
        lastCheckinTime: '3d'
    },
    {
        id: 'bu-okr-9c',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Modernize Enterprise Data Platform on Databricks',
        keyResult: 'Migrate 80% of legacy ETL pipelines to Databricks medallion architecture',
        progress: 61,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: '61% of pipelines migrated. Enrollment and academic data domains complete. HR domain in progress.',
        lastCheckinTime: '4d'
    },
    {
        id: 'bu-okr-9d',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Improve Student Retention Prediction Models',
        keyResult: 'Achieve 85% accuracy on 60-day student attrition prediction',
        progress: 78,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: 'Model at 83% accuracy on holdout set. Additional feature engineering underway to close final gap.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-9e',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Expand Data Governance & Data Quality Program',
        keyResult: 'Certify 90% of tier-1 data assets with data quality scores',
        progress: 52,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: '52% of tier-1 assets certified. Data steward program launched across 4 domains.',
        lastCheckinTime: '5d'
    },
    {
        id: 'bu-okr-9f',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Build Real-Time Decision Automation Platform',
        keyResult: 'Automate 5 high-volume academic decision workflows',
        progress: 40,
        status: 'at-risk',
        owner: 'Jennie Sanders',
        lastCheckin: '2 workflows automated (course recommendation, competency unlocking). 3 more in requirements phase.',
        lastCheckinTime: '1w'
    },
    {
        id: 'bu-okr-9g',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Deliver Executive & Leadership Reporting Suite',
        keyResult: 'Launch automated leadership dashboards replacing 10 manual reports',
        progress: 65,
        status: 'on-track',
        owner: 'Jennie Sanders',
        lastCheckin: '7 dashboards live. 3 remaining in stakeholder review. Final delivery targeted for mid-October.',
        lastCheckinTime: '3d'
    },
    {
        id: 'bu-okr-9h',
        businessUnitId: 'bu-9',
        businessUnit: 'Decision Intelligence',
        objective: 'Enable Proactive Advisor Interventions via Analytics',
        keyResult: 'Increase advisor-initiated outreach driven by analytics signals by 40%',
        progress: 33,
        status: 'behind',
        owner: 'Jennie Sanders',
        lastCheckin: 'Analytics signals integrated into advisor workflow tool. Adoption training behind schedule.',
        lastCheckinTime: '6d'
    },

    // Academic Product Management (9 OKRs)
    {
        id: 'bu-okr-10',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Modernize General Education Curriculum Portfolio',
        keyResult: 'Refresh 100% of Gen Ed courses with updated learning outcomes',
        progress: 55,
        status: 'on-track',
        owner: 'Leslie Noggle',
        lastCheckin: '55 of 100 Gen Ed courses refreshed. Faculty review process streamlined this sprint.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-10b',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Launch New Technology Degree Programs',
        keyResult: 'Gain accreditation approval for 3 new B.S. programs in technology',
        progress: 67,
        status: 'on-track',
        owner: 'Leslie Noggle',
        lastCheckin: '2 programs approved by ACBSP. Third (B.S. Cybersecurity) in final HLC review.',
        lastCheckinTime: '3d'
    },
    {
        id: 'bu-okr-10c',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Align Business Programs with Employer Competency Frameworks',
        keyResult: 'Map 100% of School of Business programs to top 5 employer skill frameworks',
        progress: 44,
        status: 'at-risk',
        owner: 'Leslie Noggle',
        lastCheckin: 'Mapping complete for Accounting and Marketing programs. MBA and Supply Chain mapping in progress.',
        lastCheckinTime: '5d'
    },
    {
        id: 'bu-okr-10d',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Strengthen Teacher Education Program Outcomes',
        keyResult: 'Achieve 90% first-attempt pass rate on state licensure exams',
        progress: 82,
        status: 'on-track',
        owner: 'Leslie Noggle',
        lastCheckin: 'First-attempt pass rate at 88% through Q3. Supplemental prep modules deployed for remaining cohorts.',
        lastCheckinTime: '4d'
    },
    {
        id: 'bu-okr-10e',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Accelerate New Program Time-to-Market',
        keyResult: 'Reduce average new program development cycle from 18 to 12 months',
        progress: 38,
        status: 'at-risk',
        owner: 'Leslie Noggle',
        lastCheckin: 'Process audit complete. 3 workflow bottlenecks identified. Revised playbook drafted, pending faculty senate approval.',
        lastCheckinTime: '1w'
    },
    {
        id: 'bu-okr-10f',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Improve Curriculum Quality Assurance Process',
        keyResult: 'Complete QA review cycle for 100% of courses modified in FY26',
        progress: 71,
        status: 'on-track',
        owner: 'Leslie Noggle',
        lastCheckin: '71% of modified courses through QA. Review team at full capacity; on track for year-end.',
        lastCheckinTime: '2d'
    },
    {
        id: 'bu-okr-10g',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Expand Stackable Credential & Certificate Offerings',
        keyResult: 'Launch 8 new stackable certificates tied to degree pathways',
        progress: 50,
        status: 'on-track',
        owner: 'Leslie Noggle',
        lastCheckin: '4 certificates launched. 2 more in final content development. 2 pending faculty approval.',
        lastCheckinTime: '4d'
    },
    {
        id: 'bu-okr-10h',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Enhance Industry Advisory Board Engagement',
        keyResult: 'Conduct advisory board reviews for 100% of college programs',
        progress: 60,
        status: 'on-track',
        owner: 'Leslie Noggle',
        lastCheckin: 'Advisory reviews complete for Technology and Business colleges. Education and Health Professions scheduled for October.',
        lastCheckinTime: '3d'
    },
    {
        id: 'bu-okr-10i',
        businessUnitId: 'bu-10',
        businessUnit: 'Academic Product Management',
        objective: 'Build Competency-Based Assessment Bank',
        keyResult: 'Create 500 new validated assessment items across all schools',
        progress: 29,
        status: 'behind',
        owner: 'Leslie Noggle',
        lastCheckin: '145 items created and validated. SME recruitment for assessment development behind target. Escalated to VP.',
        lastCheckinTime: '6d'
    }
];

// Mock Epics
const MOCK_EPICS = [
    { id: 'epic-1', productLineId: 'pl-1', title: 'Mobile App Redesign', description: 'Complete overhaul of mobile banking app UI/UX', okrId: 'okr-1', status: 'inProgress', storyCompletion: 75, releaseStatus: 'scheduled' },
    { id: 'epic-2', productLineId: 'pl-1', title: 'Biometric Authentication', description: 'Implement fingerprint and facial recognition', okrId: 'okr-1', status: 'completed', storyCompletion: 100, releaseStatus: 'released' },
    { id: 'epic-3', productLineId: 'pl-2', title: 'Rewards Program Enhancement', description: 'Redesign credit card rewards structure', okrId: 'okr-1', status: 'inProgress', storyCompletion: 45, releaseStatus: 'notReleased' },
    { id: 'epic-4', productLineId: 'pl-2', title: 'Fraud Detection AI', description: 'Implement machine learning fraud detection', okrId: 'okr-5', status: 'completed', storyCompletion: 100, releaseStatus: 'released' },
    { id: 'epic-5', productLineId: 'pl-3', title: 'Automated Savings', description: 'Round-up and goal-based savings features', okrId: 'okr-2', status: 'backlog', storyCompletion: 0, releaseStatus: 'notReleased' },
    { id: 'epic-6', productLineId: 'pl-4', title: 'Cloud Migration', description: 'Migrate core banking platform to cloud', okrId: 'okr-3', status: 'inProgress', storyCompletion: 60, releaseStatus: 'scheduled' },
    { id: 'epic-7', productLineId: 'pl-4', title: 'API Platform', description: 'Build enterprise API platform', okrId: 'okr-3', status: 'completed', storyCompletion: 100, releaseStatus: 'released' },
    { id: 'epic-8', productLineId: 'pl-5', title: 'Stripe Integration', description: 'Integrate Stripe payment processing', okrId: 'okr-1', status: 'completed', storyCompletion: 100, releaseStatus: 'released' },
    { id: 'epic-9', productLineId: 'pl-6', title: 'Real-time Risk Monitoring', description: 'Implement real-time risk assessment', okrId: 'okr-5', status: 'inProgress', storyCompletion: 55, releaseStatus: 'scheduled' },
    { id: 'epic-10', productLineId: 'pl-7', title: 'Mobile Checkout', description: 'Simplified mobile checkout flow', okrId: 'okr-1', status: 'completed', storyCompletion: 100, releaseStatus: 'released' },
    { id: 'epic-11', productLineId: 'pl-7', title: 'Personalized Recommendations', description: 'AI-powered product recommendations', okrId: 'okr-1', status: 'backlog', storyCompletion: 10, releaseStatus: 'notReleased' },
    { id: 'epic-12', productLineId: 'pl-9', title: 'Localized Payments', description: 'Support local payment methods in EMEA', okrId: 'okr-4', status: 'completed', storyCompletion: 100, releaseStatus: 'released' },
    { id: 'epic-13', productLineId: 'pl-9', title: 'Multi-language Support', description: 'Add support for French, German, Spanish', okrId: 'okr-4', status: 'inProgress', storyCompletion: 70, releaseStatus: 'scheduled' },
    { id: 'epic-14', productLineId: 'pl-10', title: 'Mobile-First Banking', description: 'Redesign for APAC mobile-first users', okrId: 'okr-4', status: 'inProgress', storyCompletion: 35, releaseStatus: 'notReleased' },
    { id: 'epic-15', productLineId: 'pl-10', title: 'Cross-border Payments', description: 'Enable international money transfers', okrId: 'okr-4', status: 'backlog', storyCompletion: 0, releaseStatus: 'notReleased' }
];

// Mock User Stories
const MOCK_USER_STORIES = [
    { id: 'story-1', epicId: 'epic-1', title: 'As a user, I want to log in with biometrics', estimate: 8, status: 'completed' },
    { id: 'story-2', epicId: 'epic-1', title: 'As a user, I want to view transaction history', estimate: 5, status: 'completed' },
    { id: 'story-3', epicId: 'epic-1', title: 'As a user, I want to transfer funds between accounts', estimate: 8, status: 'completed' },
    { id: 'story-4', epicId: 'epic-1', title: 'As a user, I want to view account balances', estimate: 3, status: 'completed' },
    { id: 'story-5', epicId: 'epic-1', title: 'As a user, I want to set up recurring transfers', estimate: 5, status: 'inProgress' },
    { id: 'story-6', epicId: 'epic-1', title: 'As a user, I want to receive push notifications', estimate: 8, status: 'pending' },
    { id: 'story-7', epicId: 'epic-2', title: 'As a user, I want to authenticate with fingerprint', estimate: 5, status: 'completed' },
    { id: 'story-8', epicId: 'epic-2', title: 'As a user, I want to authenticate with face ID', estimate: 8, status: 'completed' },
    { id: 'story-9', epicId: 'epic-3', title: 'As a user, I want to redeem rewards online', estimate: 8, status: 'completed' },
    { id: 'story-10', epicId: 'epic-3', title: 'As a user, I want to redeem rewards in-store', estimate: 13, status: 'inProgress' },
    { id: 'story-11', epicId: 'epic-6', title: 'As a developer, I want to deploy to AWS', estimate: 21, status: 'inProgress' },
    { id: 'story-12', epicId: 'epic-6', title: 'As a developer, I want containerized deployments', estimate: 13, status: 'pending' },
    { id: 'story-13', epicId: 'epic-7', title: 'As a partner, I want API documentation', estimate: 8, status: 'completed' },
    { id: 'story-14', epicId: 'epic-7', title: 'As a partner, I want API key management', estimate: 5, status: 'completed' },
    { id: 'story-15', epicId: 'epic-9', title: 'As a risk manager, I want real-time alerts', estimate: 13, status: 'inProgress' },
    { id: 'story-16', epicId: 'epic-12', title: 'As a customer, I want to pay with local methods', estimate: 8, status: 'completed' },
    { id: 'story-17', epicId: 'epic-13', title: 'As a customer, I want German language support', estimate: 5, status: 'completed' },
    { id: 'story-18', epicId: 'epic-13', title: 'As a customer, I want French language support', estimate: 5, status: 'inProgress' }
];

// Mock Problem Briefs
const MOCK_PROBLEM_BRIEFS = [
    { id: 'pb-1', epicId: 'epic-1', title: 'Mobile App User Friction', description: 'High abandonment rate during checkout', status: 'completed' },
    { id: 'pb-2', epicId: 'epic-2', title: 'Security Concerns', description: 'Password-based auth security vulnerabilities', status: 'completed' },
    { id: 'pb-3', epicId: 'epic-3', title: 'Low Rewards Engagement', description: 'Customers not redeeming available rewards', status: 'inProgress' },
    { id: 'pb-4', epicId: 'epic-6', title: 'Legacy System Scalability', description: 'Current platform cannot handle growth', status: 'completed' },
    { id: 'pb-5', epicId: 'epic-9', title: 'Manual Risk Assessment', description: 'Current process is too slow and inaccurate', status: 'completed' },
    { id: 'pb-6', epicId: 'epic-13', title: 'Localization Gaps', description: 'Limited language support affecting EMEA growth', status: 'inProgress' }
];

// Mock Measurement Plans
const MOCK_MEASUREMENT_PLANS = [
    { id: 'mp-1', epicId: 'epic-1', metricName: 'User Retention', baseline: 45, target: 65, unit: 'percentage', owner: 'Sarah Johnson', lastUpdated: '2025-09-01', status: 'active' },
    { id: 'mp-2', epicId: 'epic-2', metricName: 'Security Incidents', baseline: 15, target: 5, unit: 'incidents/month', owner: 'Michael Chen', lastUpdated: '2025-08-15', status: 'active' },
    { id: 'mp-3', epicId: 'epic-3', metricName: 'Rewards Redemption Rate', baseline: 28, target: 45, unit: 'percentage', owner: 'Michael Chen', lastUpdated: '2025-09-05', status: 'active' },
    { id: 'mp-4', epicId: 'epic-6', metricName: 'Platform Uptime', baseline: 98.5, target: 99.9, unit: 'percentage', owner: 'James Wilson', lastUpdated: '2025-09-08', status: 'active' },
    { id: 'mp-5', epicId: 'epic-7', metricName: 'API Response Time', baseline: 250, target: 100, unit: 'ms', owner: 'James Wilson', lastUpdated: '2025-08-20', status: 'active' }
];

// Mock Product Health Metrics
const MOCK_HEALTH_METRICS = [
    { id: 'hm-1', productLineId: 'pl-1', name: 'Active Users', description: 'Daily active users', currentValue: 85000, targetValue: 100000, unit: 'users', status: 'healthy', trend: 'up', lastUpdated: '2025-09-01' },
    { id: 'hm-2', productLineId: 'pl-1', name: 'Customer Satisfaction', description: 'NPS score', currentValue: 72, targetValue: 80, unit: 'nps', status: 'atRisk', trend: 'down', lastUpdated: '2025-08-15' },
    { id: 'hm-3', productLineId: 'pl-1', name: 'App Performance', description: 'Average load time', currentValue: 1.8, targetValue: 2.0, unit: 'seconds', status: 'healthy', trend: 'stable', lastUpdated: '2025-09-05' },
    { id: 'hm-4', productLineId: 'pl-2', name: 'Card Activation Rate', description: 'Percentage of cards activated within 30 days', currentValue: 68, targetValue: 85, unit: 'percentage', status: 'atRisk', trend: 'down', lastUpdated: '2025-08-20' },
    { id: 'hm-5', productLineId: 'pl-2', name: 'Fraud Detection Rate', description: 'Percentage of fraudulent transactions caught', currentValue: 92, targetValue: 95, unit: 'percentage', status: 'atRisk', trend: 'stable', lastUpdated: '2025-09-01' },
    { id: 'hm-6', productLineId: 'pl-3', name: 'Savings Account Growth', description: 'Monthly new savings accounts', currentValue: 5200, targetValue: 6000, unit: 'accounts', status: 'healthy', trend: 'up', lastUpdated: '2025-09-08' },
    { id: 'hm-7', productLineId: 'pl-4', name: 'System Uptime', description: 'Platform availability', currentValue: 99.2, targetValue: 99.9, unit: 'percentage', status: 'atRisk', trend: 'down', lastUpdated: '2025-09-10' },
    { id: 'hm-8', productLineId: 'pl-5', name: 'Transaction Volume', description: 'Monthly transaction count', currentValue: 125000, targetValue: 150000, unit: 'transactions', status: 'healthy', trend: 'up', lastUpdated: '2025-09-05' },
    { id: 'hm-9', productLineId: 'pl-6', name: 'Risk Assessment Time', description: 'Average assessment completion time', currentValue: 45, targetValue: 30, unit: 'minutes', status: 'unhealthy', trend: 'down', lastUpdated: '2025-09-02' },
    { id: 'hm-10', productLineId: 'pl-7', name: 'Conversion Rate', description: 'Website to purchase conversion', currentValue: 3.2, targetValue: 4.0, unit: 'percentage', status: 'atRisk', trend: 'stable', lastUpdated: '2025-08-25' },
    { id: 'hm-11', productLineId: 'pl-7', name: 'Average Order Value', description: 'Average transaction amount', currentValue: 85, targetValue: 95, unit: 'dollars', status: 'unhealthy', trend: 'down', lastUpdated: '2025-09-01' },
    { id: 'hm-12', productLineId: 'pl-9', name: 'Localization Coverage', description: 'Percentage of content localized', currentValue: 75, targetValue: 90, unit: 'percentage', status: 'atRisk', trend: 'up', lastUpdated: '2025-09-05' },
    { id: 'hm-13', productLineId: 'pl-10', name: 'Mobile App Downloads', description: 'Total app downloads in APAC', currentValue: 25000, targetValue: 50000, unit: 'downloads', status: 'unhealthy', trend: 'down', lastUpdated: '2025-08-15' }
];

// Mock Outcomes
const MOCK_OUTCOMES = [
    { id: 'oc-1', epicId: 'epic-2', hypothesizedOutcome: 'Improved security will increase user trust', successMetric: 'User Trust Score', baseline: 68, target: 80, actualResult: 78, outcomeStatus: 'achieved', measurementDate: '2025-08-20' },
    { id: 'oc-2', epicId: 'epic-4', hypothesizedOutcome: 'AI fraud detection will reduce false positives', successMetric: 'False Positive Rate', baseline: 12, target: 8, actualResult: 7.5, outcomeStatus: 'achieved', measurementDate: '2025-08-25' },
    { id: 'oc-3', epicId: 'epic-7', hypothesizedOutcome: 'API platform will enable faster integrations', successMetric: 'Integration Time', baseline: 30, target: 10, actualResult: 8, outcomeStatus: 'achieved', measurementDate: '2025-08-28' },
    { id: 'oc-4', epicId: 'epic-8', hypothesizedOutcome: 'Stripe integration will increase payment success', successMetric: 'Payment Success Rate', baseline: 94, target: 98, actualResult: 96.5, outcomeStatus: 'partiallyAchieved', measurementDate: '2025-08-30' },
    { id: 'oc-5', epicId: 'epic-10', hypothesizedOutcome: 'Mobile checkout will increase conversions', successMetric: 'Mobile Conversion Rate', baseline: 2.8, target: 4.0, actualResult: 3.5, outcomeStatus: 'partiallyAchieved', measurementDate: '2025-09-02' },
    { id: 'oc-6', epicId: 'epic-12', hypothesizedOutcome: 'Local payments will increase regional adoption', successMetric: 'Regional Payment Adoption', baseline: 35, target: 60, actualResult: 52, outcomeStatus: 'partiallyAchieved', measurementDate: '2025-09-05' },
    { id: 'oc-7', epicId: 'epic-3', hypothesizedOutcome: 'Rewards enhancement will increase redemption', successMetric: 'Rewards Redemption', baseline: 28, target: 45, actualResult: null, outcomeStatus: 'awaitingMeasurement', measurementDate: null },
    { id: 'oc-8', epicId: 'epic-6', hypothesizedOutcome: 'Cloud migration will improve performance', successMetric: 'Page Load Time', baseline: 3.5, target: 2.0, actualResult: null, outcomeStatus: 'notYetReleased', measurementDate: null },
    { id: 'oc-9', epicId: 'epic-9', hypothesizedOutcome: 'Real-time monitoring will reduce incident response', successMetric: 'Mean Time to Resolve', baseline: 45, target: 20, actualResult: null, outcomeStatus: 'notYetReleased', measurementDate: null },
    { id: 'oc-10', epicId: 'epic-13', hypothesizedOutcome: 'Localization will increase EMEA engagement', successMetric: 'Regional Engagement', baseline: 42, target: 65, actualResult: null, outcomeStatus: 'notYetReleased', measurementDate: null },
    { id: 'oc-11', epicId: 'epic-14', hypothesizedOutcome: 'Mobile-first design will increase adoption', successMetric: 'Mobile Usage', baseline: 55, target: 75, actualResult: null, outcomeStatus: 'notYetReleased', measurementDate: null }
];

// Mock Attention Items
const MOCK_ATTENTION_ITEMS = [
    { id: 'ai-1', type: 'missingProblemBrief', severity: 'high', affectedProduct: 'Mobile Banking App', description: 'Epic "Mobile App Redesign" has no Problem Brief defined', relatedEpic: 'epic-1', productLineId: 'pl-1' },
    { id: 'ai-2', type: 'missingOutcome', severity: 'high', affectedProduct: 'Credit Card Platform', description: 'Epic "Rewards Program Enhancement" released but no outcome measurement plan', relatedEpic: 'epic-3', productLineId: 'pl-2' },
    { id: 'ai-3', type: 'lowScore', severity: 'high', affectedProduct: 'APAC Expansion', description: 'Product Management Score below 50%', relatedProductLine: 'pl-10', score: 42 },
    { id: 'ai-4', type: 'missingAlignment', severity: 'medium', affectedProduct: 'E-commerce Platform', description: 'Epic "Personalized Recommendations" not connected to any OKR', relatedEpic: 'epic-11', productLineId: 'pl-7' },
    { id: 'ai-5', type: 'atRiskHealth', severity: 'medium', affectedProduct: 'Mobile Banking App', description: 'Customer Satisfaction metric trending downward', relatedHealthMetric: 'hm-2', productLineId: 'pl-1' },
    { id: 'ai-6', type: 'missingHealthMetrics', severity: 'medium', affectedProduct: 'Savings Products', description: 'Product Line has no Product Health metrics defined', relatedProductLine: 'pl-3' },
    { id: 'ai-7', type: 'missingMeasurementPlan', severity: 'medium', affectedProduct: 'Core Banking Platform', description: 'Epic "API Platform" released but no measurement plan', relatedEpic: 'epic-7', productLineId: 'pl-4' },
    { id: 'ai-8', type: 'unhealthyHealth', severity: 'high', affectedProduct: 'APAC Expansion', description: 'Mobile App Downloads metric in unhealthy status', relatedHealthMetric: 'hm-13', productLineId: 'pl-10' }
];

// Mock Historical Data for Trends
const MOCK_HISTORICAL_DATA = [
    { period: 'Q1 2025', practiceScore: 62, healthCoverage: 52, okrAlignment: 54, outcomeMeasurement: 32 },
    { period: 'Q2 2025', practiceScore: 65, healthCoverage: 55, okrAlignment: 56, outcomeMeasurement: 35 },
    { period: 'Q3 2025', practiceScore: 68, healthCoverage: 60, okrAlignment: 60, outcomeMeasurement: 38 },
    { period: 'Q4 2025', practiceScore: 72, healthCoverage: 68, okrAlignment: 58, outcomeMeasurement: 45 }
];

// Export mock data
window.MockData = {
    businessUnits: MOCK_BUSINESS_UNITS,
    productLines: MOCK_PRODUCT_LINES,
    productOwners: MOCK_PRODUCT_OWNERS,
    okrs: MOCK_OKRS,
    businessUnitOKRs: MOCK_BUSINESS_UNIT_OKRS,
    epics: MOCK_EPICS,
    userStories: MOCK_USER_STORIES,
    problemBriefs: MOCK_PROBLEM_BRIEFS,
    measurementPlans: MOCK_MEASUREMENT_PLANS,
    healthMetrics: MOCK_HEALTH_METRICS,
    outcomes: MOCK_OUTCOMES,
    attentionItems: MOCK_ATTENTION_ITEMS,
    historicalData: MOCK_HISTORICAL_DATA
};