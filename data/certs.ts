export type Cert = {
  id: string;
  name: string;
  provider: string;
  status: "In Progress" | "Planned" | "Completed";
  eta?: string;
  notes?: string;
};

// Cloud-security focused set
export const CERTS: Cert[] = [
  {
    id: "secplus",
    name: "CompTIA Security+ (SY0-701)",
    provider: "CompTIA",
    status: "In Progress",
    eta: "Fall 2025",
    notes: "Baseline security, risk, and operations foundations."
  },
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    status: "Planned",
    eta: "Winter 2025",
    notes: "Cloud fundamentals to ground AWS-specific security work."
  },
  {
    id: "aws-saa",
    name: "AWS Solutions Architect – Associate",
    provider: "Amazon Web Services",
    status: "Planned",
    eta: "Spring 2026",
    notes: "Designing secure, reliable AWS architectures."
  },
  {
    id: "aws-security-specialty",
    name: "AWS Security – Specialty",
    provider: "Amazon Web Services",
    status: "Planned",
    eta: "Summer 2026",
    notes: "Identity, detection, incident response, and data protection in AWS."
  },
  {
    id: "gcp-cloud-security-engineer",
    name: "Google Professional Cloud Security Engineer",
    provider: "Google Cloud",
    status: "Planned",
    eta: "TBD",
    notes: "Designing and implementing secure GCP workloads."
  },
  {
    id: "azure-security-engineer",
    name: "Microsoft Azure Security Engineer Associate",
    provider: "Microsoft",
    status: "Planned",
    eta: "TBD",
    notes: "Identity, platform protection, and security operations in Azure."
  }
];
