import { ContactInfo, WorkExperience, SkillCategory, EducationItem, CertificationItem } from '../types';

export const contactInfo: ContactInfo = {
  name: "Amila Bowen",
  title: "IT Professional",
  location: "Greater Tampa Bay Area, FL",
  phone: "",
  email: "elladavid2494@gmail.com",
  linkedin: "https://www.linkedin.com/in/abowen813/",
  aboutMe: "Hi there! I'm an energetic, warm, and dedicated IT Professional who truly loves solving complex technical puzzles and empowering healthcare teams. I bring deep technical expertise in mission-critical healthcare systems, PACS/DICOM workflows, VMware virtualization, PowerShell automation, and 24/7 high-availability infrastructure. Combining an empathetic, collaborative spirit with a sharp, forward-thinking analytical mindset, I take pride in keeping systems bulletproof and supporting clinicians so they can focus on patient care. When I set my sights on a goal, I give it my absolute all!"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Server Administration",
    categoryKey: "server-admin",
    iconName: "Server",
    skills: [
      "Windows Administration",
      "AWS / Azure",
      "Linux / Ubuntu",
      "HL7, DICOM, FHIR",
      "VMware / Hyper-V",
      "Medical Information Systems (RIS, PACS, EMR, EHR)",
      "PowerShell Scripts"
    ]
  },
  {
    title: "Troubleshooting & Analysis",
    categoryKey: "troubleshooting",
    iconName: "Wrench",
    skills: [
      "AutoTask / Jira / ServiceNow / CSP",
      "Customer Service & Documentation",
      "Root Cause Analysis / Application configurations",
      "AI Tool Integration for IT Operations",
      "Project Planning & Lifecycle Management"
    ]
  },
  {
    title: "Security & Compliance",
    categoryKey: "security",
    iconName: "ShieldCheck",
    skills: [
      "HIPAA Compliance",
      "Active Directory",
      "Certificate Management (IIS & SSL)"
    ]
  },
  {
    title: "Backup & Recovery",
    categoryKey: "backup",
    iconName: "DatabaseBackup",
    skills: [
      "vSphere Snapshot Management",
      "Disk Image Data Recovery"
    ]
  },
  {
    title: "Monitoring & Auditing",
    categoryKey: "monitoring",
    iconName: "Activity",
    skills: [
      "SolarWinds",
      "Application Logs Auditing"
    ]
  }
];

export const experiences: WorkExperience[] = [
  {
    id: "scimage",
    company: "ScImage",
    location: "Tampa, FL",
    workMode: "Remote",
    role: "Technical Support Specialist",
    period: "Dec 2024 – Mar 2026",
    companyDescription: "A healthcare technology company providing enterprise cloud and on-prem imaging solutions for medical facilities.",
    highlights: [
      "Managed Windows servers and workstations to keep medical imaging systems (PACS) running 24/7.",
      "Maintained PACS software and server clients to ensure imaging systems stayed fully operational around the clock.",
      "Provided technical support to doctors and radiologists, helping them use PACS software and access medical images without delay.",
      "Set up and managed virtual machines (VMs) to provide stable environments for testing and technical support.",
      "Wrote PowerShell scripts to automate repetitive tasks, saving time and making systems more reliable.",
      "Monitored server alerts to catch performance issues early and keep clinical platforms online.",
      "Connected medical equipment to imaging systems, ensuring patient data and images moved smoothly between machines.",
      "Managed data backups and recovery plans to protect sensitive healthcare images from loss.",
      "Handled software licenses and security settings to keep systems ready for use and compliant with HIPAA privacy laws.",
      "Used AI tools to find better ways to fix technical problems and set up systems more efficiently.",
      "Wrote help guides and trained medical staff on how to use imaging software and follow technical best practices.",
      "Analyzed software and system logs to quickly find and fix technical issues before they impacted users.",
      "Troubleshot firewall and network connectivity issues to ensure medical data moved securely and without interruption.",
      "Maintained high-availability, mission-critical systems where downtime isn't an option."
    ],
    skills: ["Windows Server", "PACS / DICOM", "VMware", "PowerShell", "HIPAA", "Network Diagnostics", "AI Integration", "Server Monitoring"]
  },
  {
    id: "vasotechnology",
    company: "VasoTechnology",
    location: "Tampa, FL",
    workMode: "Hybrid",
    role: "Application Support Specialist",
    period: "Mar 2022 – Nov 2024",
    duration: "2 yrs 9 mos",
    companyDescription: "A managed service provider nationally supporting clinics and laboratories.",
    highlights: [
      "Server Administration in VMware vSphere for 300+ clients. Supporting Windows-based application and system issues.",
      "Managed application databases of Medical Information System Applications (RIS, PACS, EMR).",
      "Wrote several System Administration Scripts using PowerShell to automate maintenance.",
      "Educated clients on HIPAA best practices and security compliance.",
      "Managed Active Directory Objects, Users, and Group Policies.",
      "Managed application and IIS server internal and external SSL/TLS certificates.",
      "Managed VMware vSphere Snapshots for upgrade and scheduled maintenance.",
      "Recovered deleted data via disk image recovery techniques.",
      "Monitored and configured Network, Applications, and Appliances health metrics via SolarWinds.",
      "Troubleshot application issues utilizing logs from various system sources.",
      "Utilized several ticketing systems across various clients including Jira, AutoTask, and ServiceNow.",
      "Received recognition from many clients for excellent customer service performance.",
      "Collaboratively analyzed root cause for service down issues to prevent recurrence."
    ],
    skills: ["VMware vSphere", "Active Directory", "RIS / PACS / EMR", "PowerShell", "SolarWinds", "IIS Certificates", "Jira / ServiceNow", "Data Recovery"]
  },
  {
    id: "concentrix",
    company: "Concentrix",
    location: "Tampa, FL",
    workMode: "Remote",
    role: "IT Support Specialist",
    period: "Dec 2020 – Aug 2021",
    duration: "9 months",
    companyDescription: "An IT support company contracting with major tech leaders such as Spectrum and Apple to provide technical support services.",
    awards: ["Top Customer Service Performance Award", "Best Average Handle Time Award"],
    highlights: [
      "Assisted end-users with technical products and services from Spectrum.",
      "Researched and documented technical solutions for complex client inquiries.",
      "Troubleshot network equipment, routers, switches, and client endpoint configurations.",
      "Scheduled on-site technician appointments and managed ticketing escalations.",
      "Utilized enterprise ticketing system to track and resolve customer support requests efficiently."
    ],
    skills: ["Customer Service", "Network Hardware", "Technical Troubleshooting", "Ticketing Systems", "Documentation", "End-User Support"]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "hillsborough",
    degree: "Continued Education",
    institution: "Hillsborough Community College",
    period: "2022",
    honors: "Dean’s List"
  },
  {
    id: "mabalacat",
    degree: "BS in Information Technology",
    institution: "Mabalacat City College",
    period: "2010 – 2014",
    honors: "Dean’s List 2012"
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "azure-admin",
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    year: "2024",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: "google-ai",
    name: "Google AI Professional",
    issuer: "Google",
    year: "2026",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "google-pm",
    name: "Google Project Management",
    issuer: "Google",
    year: "2026",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    id: "fortinet-nsa",
    name: "Network Security Associate 1 & 2",
    issuer: "Fortinet",
    year: "2022 & 2023",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
  }
];
