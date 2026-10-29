export const profile = {
  name: "Tran Gia Hung",
  handle: "hung-tran",
  role: "System Administrator",
  tagline: "Infrastructure · Security · AI-SOC",
  location: "Binh Tan, Ho Chi Minh City",
  email: "trangiahung251203@gmail.com",
  phone: "0707 709 857",
  status: "Available for opportunities",
  about: [
    "Dedicated System Administrator with a strong background in Information Assurance.",
    "Specializing in infrastructure management, server virtualization, and system optimization.",
    "Proven track record maintaining high uptime across Linux/Windows, web hosting & cloud.",
    "Motivated to scale into a proficient Sysadmin / DevOps Engineer.",
  ],
};

export const skills = [
  {
    category: "Operating Systems",
    color: "green",
    items: ["Linux (Ubuntu, CentOS, AlmaLinux, Kali)", "Windows Server"],
  },
  {
    category: "Virtualization & Cloud",
    color: "cyan",
    items: ["Proxmox VE (Snapshot, Monitoring)", "VMware"],
  },
  {
    category: "Control Panels",
    color: "amber",
    items: ["cPanel", "CyberPanel", "aaPanel"],
  },
  {
    category: "Network Services",
    color: "purple",
    items: ["DNS (A, CNAME, MX, TXT)", "Mail (SMTP, IMAP, POP3)", "SSL/TLS & SSH"],
  },
  {
    category: "Security & Firewalls",
    color: "red",
    items: ["nftables", "WAF (Barracuda)", "SPF / DKIM / DMARC"],
  },
  {
    category: "Automation / AI",
    color: "green",
    items: ["Python", "ELK Stack", "Phi-3 (LLM fine-tune)", "Scikit-learn"],
  },
];

export const experience = [
  {
    company: "VIETNIX",
    role: "System Administrator",
    period: "Apr 2026 — Present",
    status: "active",
    points: [
      {
        title: "Infrastructure & VM Management",
        desc: "Maintained Linux (Ubuntu + aaPanel templates) and Windows VPS on Proxmox VE, managing resource allocation, hardware indicators, automated snapshots.",
      },
      {
        title: "Web Server & Control Panel Administration",
        desc: "Administered cPanel, CyberPanel, aaPanel. Assisted customers with source code integration, DB deployment, file permission auditing.",
      },
      {
        title: "Advanced Troubleshooting",
        desc: "Resolved WordPress/Laravel connection errors by debugging wp-config.php, .env, and fixing misconfigured system permissions.",
      },
      {
        title: "DNS & Mail Security",
        desc: "Architected DNS routing (Cloudflare, A/CNAME/MX). Hardened email deliverability via SPF, DKIM, DMARC TXT records.",
      },
      {
        title: "SSL/TLS Lifecycle",
        desc: "Managed Let's Encrypt automation & commercial Sectigo certs, verifying via HTTP/HTTPS file and CNAME validation.",
      },
    ],
  },
];

export const projects = [
  {
    title: "AI-SOC for Threat Detection & Prevention",
    tag: "SECURITY / AI",
    period: "Sep 2025 — Dec 2025",
    color: "purple",
    tech: ["Python", "Phi-3-mini", "Qwen", "Linux Security"],
    highlights: [
      "Built a security monitoring system detecting Web attacks (SQLi, XSS) and Database threats (Brute Force, Insider Threats).",
      "Designed Hybrid Analysis Workflow: Fast Path (Rules) + Slow Path (Generative AI) for zero-day payloads.",
      "Fine-tuned Phi-3-mini on custom dataset to identify Privilege Escalation bypassing traditional WAFs.",
      "Integrated Automated Response: real-time IP blocking & compromised DB user lockdown.",
    ],
    status: "Defense-in-Depth",
  },
  {
    title: "Barracuda WAF Security Lab",
    tag: "WAF / LOG PIPELINE",
    period: "Jan 2025 — Apr 2025",
    color: "cyan",
    tech: ["VMware", "Barracuda WAF", "ELK Stack", "Scikit-learn"],
    highlights: [
      "Deployed Barracuda WAF on VMware to secure DVWA test application.",
      "Conducted security testing against SQLi, XSS, DDoS, brute-force attacks.",
      "Built real-time monitoring: Filebeat → Logstash → Elasticsearch → Kibana pipeline.",
      "Developed ML model (Logistic Regression, Isolation Forest) to classify malicious queries.",
      "Automated incident response: malicious IPs pushed to Windows Firewall via PowerShell.",
    ],
    status: "Monitoring Active",
  },
];

export const certificates = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2023",
    color: "cyan",
  },
  {
    name: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    year: "2023",
    color: "green",
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    year: "2025",
    color: "purple",
  },
];

export const education = {
  school: "PTF University",
  period: "2021 — 2025",
  major: "Information Assurance",
  courses: ["Network Security", "System Hardening", "Web Security", "Database Security"],
};