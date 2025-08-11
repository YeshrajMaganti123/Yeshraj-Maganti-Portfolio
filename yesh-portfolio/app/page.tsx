"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Briefcase,
  Linkedin,
  HeartHandshake,
  Code,
  Award,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const profile = {
  name: "YESHRAJ MAGANTI",
  title: "Data Engineer • AWS · Azure · Snowflake · PySpark",
  location: "USA",
  email: "mr.yeshrajmaganti@gmail.com",
  phone: "+1 (916) 906-4766",
  linkedin: "https://www.linkedin.com/in/yeshraj-maganti",
  github: "",
};

const experiences = [
  {
    company: "District of Columbia",
    role: "Data Engineer",
    location: "Washington, DC",
    period: "June 2025 – Present",
    bullets: [
      "Improved data consistency and quality by using SSIS to process diverse data sources, achieving a 98% data accuracy rate.",
      "Designed and developed modular Python scripts to automate data extraction, transformation, and loading (ETL) processes from APIs, flat files, and databases.",
      "Implemented data quality checks and governance mechanisms, ensuring 99% data accuracy and compliance with industry standards.",
      "Supported the migration of procurement data to SAP Ariba Cloud from legacy systems, ensuring smooth transitions and data accuracy.",
      "Managed reporting: weekly summaries, events, and quarterly updates.",
    ],
  },
  {
    company: "Cohort Data",
    role: "Data Engineer",
    location: "Bridgeport, CT",
    period: "July 2023 – June 2025",
    bullets: [
      "Developed and optimized ETL pipelines in Snowflake, improving data processing efficiency by 40% and enabling seamless scalability for growing datasets.",
      "Boosted query performance by 30% through advanced SQL tuning, reducing data processing time for complex analytics. ",
      "Designed scalable data warehousing solutions in Snowflake, managing terabytes of data for analytics and ensuring reliable, fast reporting with SSRS. ",
      "Build and automated real-time data pipelines using Snowpipe, reducing data latency by 50% and ensuring high system reliability.",
      "Implemented data security measures including encryption and data masking, ensuring compliance with industry regulations and reducing security risks.",
      "Enhanced operational efficiency with advanced Snowflake features like Time Travel and materialized views, improving disaster recovery and process optimization by 25%.",
    ],
  },
  {
    company: "University of Bridgeport",
    role: "Data Engineer",
    location: "Bridgeport, CT",
    period: "Jan 2022 – May 2023",
    bullets: [
      "Optimized Spark SQL queries and data workflows, boosting processing speeds by 35% and enabling the handling of larger datasets with ease.",
      "Engineered AWS-based storage and retrieval systems with S3, RDS, and DynamoDB, improving data access times by 25% and reducing overall storage costs.",
      "Architected cloud infrastructure for data pipelines using AWS Glue, Lambda, and Redshift, increasing pipeline deployment efficiency by 40%.",
      "Led development of end-to-end data pipelines, cutting data transformation time by 30% through automated schema design and API integration.",
      "Collaborated with cross-functional teams to migrate legacy on-premises Teradata systems to cloud-based data warehouses like Snowflake and Redshift.",
      "Designed and optimized ETL workflows in Teradata, improving data processing efficiency and reducing execution time by 30%.",
    ],
  },
  {
    company: "Cognizant Technology Solutions (Credit Suisse)",
    role: "Data Engineer",
    location: "India",
    period: "Dec 2019 – Aug 2021",
    bullets: [
      "Engineered data workflows with Hadoop (HDFS, MapReduce, Hive), enhancing batch processing efficiency by 50% for large-scale financial datasets.",
      "Developed scalable ETL pipelines with Azure Data Factory and Databricks, reducing transformation time by 40% for complex data sets.",
      "Built high-performance distributed data solutions with PySpark on Apache Spark, delivering real-time analytics and improving processing speed by 30%.",
      "Automated deployment and versioning of data pipelines with Azure DevOps, reducing manual intervention by 75% and improving operational efficiency.",
      "Developed PySpark-based distributed data processing jobs using Python to handle terabytes of structured and semi-structured data.",
    ],
  },
  {
    company: "Capgemini",
    role: "Data Engineer",
    location: "India",
    period: "June 2018 – Dec 2019",
    bullets: [
      "Developed serverless applications using AWS Lambda, API Gateway, and the Serverless Framework, cutting infrastructure costs by 35% while improving scalability.",
      "Built scalable serverless data solutions, reducing latency by 40% and enhancing performance by optimizing DynamoDB and Lambda integration.",
    ],
  },
];

// Projects
const projects = [
  {
    name: "Creating Smart Contractors Using NFT in Blockchain",
    period: "Jan 2023 – May 2023",
    summary: [
      "Blockchain enables digital asset value and transactions without intermediaries.",
      "Smart contracts + NFTs (ERC-721) standardize processes and identity.",
      "Implements token transfers, approvals, and ABI with gas estimation.",
    ],
    stack: ["Solidity", "Ethereum", "ERC-721", "Smart Contracts"],
  },
  {
    name: "ML model to Predict Flight Fare (Decision Tree)",
    period: "Aug 2021 – Dec 2021",
    summary: [
      "Predicts optimal ticket timing/price.",
      "Hyperparameter tuning reduced overfitting and improved accuracy.",
    ],
    stack: ["Python", "Decision Tree", "scikit-learn"],
  },
  {
    name: "Health Inspector",
    period: "Apr 2020 – Jun 2020",
    summary: [
      "Java + Spring Boot app modernizing inspection workflows.",
      "Scheduling, realtime data capture, analytics, secure comms with GIS.",
    ],
    stack: ["Java", "Spring Boot", "GIS"],
  },
  {
    name: "Sentimental Analysis On YouTube",
    period: "Jan 2019 – Mar 2019",
    summary: [
      "Retrieves comments and performs sentiment analysis (NLTK).",
      "Reports polarity distribution for comment sets.",
    ],
    stack: ["Python", "NLTK"],
  },
  {
    name: "Online Complaints System (Education)",
    period: "Jan 2018 – May 2018",
    summary: [
      "Web app for grievance redressal with student/staff/admin roles.",
      "Tracks complaints and meets AICTE compliance.",
    ],
    stack: ["Web", "SQL", "Windows stack"],
  },
];

// Volunteer
const volunteer = [
  {
    role: "Coordinator (NSS Chief Coordinator)",
    org: "Prasad V Potluri Siddhartha Institute of Technology",
    period: "Jun 2015 – Mar 2019 · 3 yrs 10 mos",
    impact: [
      "Led NSS operations and initiatives.",
      "Guided volunteers; executed community programs.",
      "Collaborated with NGOs, government, and universities.",
      "Facilitated training and increased participation.",
    ],
    domain: "Social Services",
  },
  {
    role: "Student Worker in Athletics",
    org: "University of Bridgeport",
    period: "Aug 2021 – Dec 2021 · 5 mos",
    impact: ["Supported athletics operations and event logistics."],
  },
];

// Certifications
const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jul 2023",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "Aug 2021",
  },
  {
    title: "Master in Computer Science",
    issuer: "University of Bridgeport",
    issued: "Aug 2021",
    credentialId: "1144105",
  },
  {
    title: "B. Tech in Information Technology",
    issuer: "DEPT OF IT @PVPSIT, VIJAYAWADA",
    issued: "Mar 2019",
  },
  {
    title: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    issued: "Aug 2024",
    expires: "Aug 2026",
    credentialId: "113243134",
  },
  {
    title: "Academy Accreditation - Databricks Lakehouse Fundamentals",
    issuer: "Databricks",
    issued: "Aug 2024",
    expires: "Aug 2025",
    credentialId: "112989596",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Page() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-tight">{profile.name}</div>
          <div className="flex gap-2">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" className="gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" className="gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </a>
            )}
            <a href={`mailto:${profile.email}`}>
              <Button size="sm" className="gap-2">
                <Mail className="h-4 w-4" /> Contact
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Text panel with strong contrast */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 md:p-8 shadow-xl">
              <span className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                Open to Data Engineering Roles
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
                {profile.title}
              </h1>

              <p className="mt-4 text-neutral-700 max-w-2xl">
                Experienced Data Engineer with 5 years building and optimizing scalable data
                solutions across AWS & Azure. Strong in PySpark, SQL, and automated ETL,
                with a focus on data quality, performance, and governance.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-neutral-700">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`}>
                  <Button className="gap-2">
                    <Mail className="h-4 w-4" /> Hire Me
                  </Button>
                </a>
                <a href="#experience">
                  <Button variant="secondary" className="gap-2">
                    <Briefcase className="h-4 w-4" /> Experience
                  </Button>
                </a>
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                )}
                <a href="/resume.pdf" download>
                  <Button variant="ghost" className="gap-2">
                    <Download className="h-4 w-4" /> Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Photo with strong separation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="flex justify-center items-center">
              <div className="avatar-frame w-56 h-56 md:w-64 md:h-64 overflow-hidden border-4 border-whitee">
                <img
                  src="/profile.jpeg" // make sure the path is correct (public folder)
                  alt="Yeshraj Maganti"
                  className="w-full h-full object-contain object-top scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6">Experience</h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6">
          {experiences.map((exp, idx) => (
            <motion.div key={exp.company + idx} variants={item}>
              <Card className="bg-white border border-neutral-200 shadow-xl rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex flex-wrap items-center gap-2 text-neutral-900">
                    <span className="font-extrabold">{exp.role}</span>
                    <span className="text-neutral-700">@ {exp.company}</span>
                  </CardTitle>
                  <div className="text-sm text-neutral-600">
                    {exp.location} • {exp.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-neutral-800">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
          <Code className="h-6 w-6" /> Projects
        </h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} variants={item}>
              <Card className="bg-white border border-neutral-200 shadow-xl rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-neutral-900">{p.name}</CardTitle>
                  <div className="text-sm text-neutral-600">{p.period}</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-neutral-800">
                    {p.summary.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                  {p.stack?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((s: string) => (
                        <Badge key={s} className="bg-neutral-100 border-neutral-200 text-neutral-800">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Licenses & Certifications */}
      <section id="certs" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
          <Award className="h-6 w-6" /> Licenses & Certifications
        </h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <motion.div key={i} variants={item}>
              <Card className="bg-white border border-neutral-200 shadow-xl rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-neutral-900">{c.title}</CardTitle>
                  <div className="text-sm text-neutral-600">{c.issuer}</div>
                </CardHeader>
                <CardContent className="text-neutral-800">
                  <div>
                    Issued: {c.issued}
                    {c.expires ? ` · Expires: ${c.expires}` : ""}
                  </div>
                  {c.credentialId ? <div>Credential ID: {c.credentialId}</div> : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
          <HeartHandshake className="h-6 w-6" /> Volunteer Experience
        </h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          {volunteer.map((v, i) => (
            <motion.div key={i} variants={item}>
              <Card className="bg-white border border-neutral-200 shadow-xl rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-neutral-900">{v.role}</CardTitle>
                  <div className="text-sm text-neutral-600">
                    {v.org} • {v.period}
                  </div>
                </CardHeader>
                <CardContent className="text-neutral-800">
                  {v.domain ? (
                    <div className="mb-2">
                      <Badge className="bg-neutral-100 border-neutral-200 text-neutral-800">
                        {v.domain}
                      </Badge>
                    </div>
                  ) : null}
                  <ul className="list-disc pl-6 space-y-2">
                    {v.impact.map((s: string, j: number) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-between">
          <div className="text-neutral-700">
            © <span suppressHydrationWarning>{year || ""}</span> {profile.name}. All rights reserved.
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${profile.email}`}>
              <Button className="gap-2">
                <Mail className="h-4 w-4" /> Email
              </Button>
            </a>
            <a href={`tel:${profile.phone.replace(/[^+0-9]/g, "")}`}>
              <Button variant="secondary" className="gap-2">
                <Phone className="h-4 w-4" /> Call
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}