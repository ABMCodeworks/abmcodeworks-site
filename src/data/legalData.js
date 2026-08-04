export const LEGAL_UPDATED = "4 August 2026";
export const LEGAL_EFFECTIVE = "4 August 2026";

export const controller = {
  name: "ABM Codeworks",
  location: "Harare, Zimbabwe",
  email: "admin@abmcodeworks.com",
};

const commonRights = [
  "Know whether and how we process your personal information and obtain a copy of it.",
  "Correct inaccurate or incomplete personal information.",
  "Delete personal information, subject to legal and operational exceptions.",
  "Restrict or object to processing, including an unconditional right to object to direct marketing.",
  "Receive information you provided in a portable format where the law provides this right.",
  "Withdraw consent at any time where processing is based on consent, without affecting earlier lawful processing.",
  "Opt out of a sale, sharing for cross-context behavioural advertising, targeted advertising, or qualifying profiling.",
  "Appeal a refusal of a privacy request where applicable and complain to the relevant data-protection authority.",
  "Use an authorised agent and exercise your rights without unlawful discrimination or retaliation.",
];

const commonSecurity = [
  "Access controls and least-privilege administration.",
  "Encryption in transit and, where supported by the product, encryption at rest.",
  "Secure development, dependency review, logging, backups, and incident-response procedures appropriate to the risk.",
  "Contractual confidentiality and security duties for personnel and service providers with access to personal information.",
];

const commonContact = {
  title: "Contact and complaints",
  paragraphs: [
    `ABM Codeworks is the responsible operator. Write to ${controller.email} or ABM Codeworks, ${controller.location}. Put “Privacy” and the product name in the subject line.`,
    "You may also complain to the data-protection authority where you live or work. In Zimbabwe, the Data Protection Authority is the Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ). EEA residents may contact their local supervisory authority, UK residents the Information Commissioner's Office, and US residents their applicable state regulator or attorney general.",
  ],
};

export const websitePrivacy = {
  slug: "/legal/privacy",
  product: "ABM Codeworks website",
  kind: "Privacy Notice",
  title: "Website Privacy Notice",
  description:
    "How ABM Codeworks handles information submitted through this website.",
  intro:
    "This notice applies to abmcodeworks.com, including the contact form, product download pages, and the legal centre. It does not replace the separate privacy notice for a product you use.",
  highlights: [
    "No sale of personal information",
    "No behavioural advertising",
    "Only essential site storage in use",
  ],
  related: [
    { label: "Cookie Notice", to: "/legal/cookies" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "Who is responsible",
      paragraphs: [
        `ABM Codeworks, ${controller.location}, is the controller of personal information described in this notice. Contact: ${controller.email}.`,
      ],
    },
    {
      title: "Information we collect",
      items: [
        {
          label: "Enquiries",
          text: "Name, email address, project type, message, and any information you choose to include when contacting us.",
        },
        {
          label: "Security and technical data",
          text: "IP address, request time, browser or device details, requested URL, error data, and a reCAPTCHA verification token when that protection is enabled.",
        },
        {
          label: "Preference data",
          text: "A local-storage record that remembers that you have seen the site's storage notice.",
        },
        {
          label: "Business records",
          text: "Correspondence, proposals, contracts, billing contacts, and transaction records if an enquiry becomes a customer relationship.",
        },
      ],
    },
    {
      title: "Why we use it and our legal bases",
      items: [
        {
          label: "Respond and take pre-contract steps",
          text: "We use enquiry data to respond, scope work, and prepare proposals because you asked us to do so and, where applicable, to enter into or perform a contract.",
        },
        {
          label: "Operate and secure the site",
          text: "We use limited technical data for our legitimate interests in delivering, troubleshooting, and protecting the site, and to comply with law.",
        },
        {
          label: "Keep required records",
          text: "We retain contract, tax, and accounting records to meet legal obligations and establish or defend legal claims.",
        },
        {
          label: "Communicate about our services",
          text: "We may follow up on an existing enquiry based on legitimate interests. We use consent where the law requires it and honour every marketing opt-out.",
        },
      ],
    },
    {
      title: "Recipients and international transfers",
      paragraphs: [
        "We disclose information only as needed to website hosting and security providers, email-delivery provider Resend, Google reCAPTCHA when enabled, professional advisers, and authorities where legally required. We do not sell personal information or share it for cross-context behavioural advertising.",
        "Providers may process information outside Zimbabwe or your country. Where required, we use adequacy decisions, approved contractual clauses, data-protection agreements, consent, or another lawful transfer mechanism and assess whether additional safeguards are needed.",
      ],
    },
    {
      title: "Retention",
      bullets: [
        "Unsuccessful general enquiries: normally up to 24 months after the last meaningful contact.",
        "Customer, contract, tax, and transaction records: for the contract term and normally up to 7 years afterwards, or longer if law requires.",
        "Security and server logs: normally up to 90 days unless needed to investigate an incident.",
        "Privacy-request records: normally up to 3 years after closure to demonstrate compliance.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Rights vary by location and are subject to lawful exceptions. Depending on the law that applies, you may:",
      ],
      bullets: commonRights,
      note: "ABM Codeworks does not sell personal information, use it for targeted advertising, or use sensitive personal information to infer characteristics. A browser-based opt-out signal therefore does not change our current practices, but we treat it as an opt-out if those practices ever change.",
    },
    {
      title: "Children",
      paragraphs: [
        "This business website is not directed to children. Do not submit personal information if you are under 16 without permission from a parent or guardian. We do not knowingly collect personal information from children under 13 through this site.",
      ],
    },
    commonContact,
  ],
};

export const driftPrivacy = {
  slug: "/drift-mail/privacy",
  product: "Drift Mail",
  kind: "Privacy Notice",
  title: "Drift Mail Privacy Notice",
  description:
    "How Drift Mail handles email data, account credentials, local cache, support information, and privacy rights.",
  intro:
    "Drift Mail is a desktop email client designed to connect your device directly to the email providers you choose. Its core mailbox features are local-first: ABM Codeworks does not receive a copy of your mailbox merely because you use the app.",
  highlights: [
    "No app telemetry or advertising trackers",
    "Mail cache stays on your device",
    "No sale or behavioural-ad sharing",
  ],
  related: [
    { label: "Drift Mail Terms", to: "/drift-mail/terms" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "Who is responsible and when this notice applies",
      paragraphs: [
        `ABM Codeworks, ${controller.location}, is the developer of Drift Mail and the controller of the limited support, licensing, and website information it receives. Contact: ${controller.email}.`,
        "Your email provider is independently responsible for the mailbox it hosts. If an employer, school, or other organisation provides your mailbox, that organisation may also control the email data and your use of Drift Mail.",
      ],
    },
    {
      title: "How the app works",
      items: [
        {
          label: "Provider connection",
          text: "The app connects from your device to the email provider you select using OAuth tokens, app passwords, or IMAP/SMTP credentials. Credentials and tokens are stored using device security and are not sent to ABM Codeworks.",
        },
        {
          label: "Mailbox processing",
          text: "Message headers, bodies, attachments, folders, search indexes, snoozes, tasks, reminders, signatures, unsubscribe links, and account settings are processed on your device to provide the features you request.",
        },
        {
          label: "Encrypted local cache",
          text: "Cached mailbox data is stored locally and encrypted where the app states that encryption is enabled. You control the device, operating-system account, and backup environment in which that cache exists.",
        },
        {
          label: "Remote content",
          text: "Remote images are blocked by default. If you choose to load them or follow a link, the sender or linked service may receive your IP address and device information under its own privacy terms.",
        },
      ],
    },
    {
      title: "Information ABM Codeworks receives",
      items: [
        {
          label: "Support and feedback",
          text: "Your name, email address, messages, diagnostic details you choose to send, and attachments you deliberately include. Do not send mailbox content unless it is necessary and you are authorised to share it.",
        },
        {
          label: "Downloads and website security",
          text: "Ordinary hosting logs such as IP address, browser, requested file, request time, and error or security events.",
        },
        {
          label: "Licence or purchase records",
          text: "If paid plans are introduced, we may receive account, entitlement, transaction, and limited billing details. A payment processor, not Drift Mail, will handle full card details.",
        },
      ],
      note: "Current beta baseline: Drift Mail includes no ABM analytics SDK, advertising SDK, or always-on telemetry. If this changes, we will update this notice before collecting new data and obtain consent where required.",
    },
    {
      title: "Purposes and legal bases",
      items: [
        {
          label: "Provide the app",
          text: "Local mailbox processing is necessary to perform the service you request. Where local law requires another basis, it is performed with your consent through the account and feature choices you make.",
        },
        {
          label: "Support, improve, and secure",
          text: "We process communications and limited diagnostic information to perform our contract and for legitimate interests in support, reliability, abuse prevention, and product improvement.",
        },
        {
          label: "Legal and business records",
          text: "We process licence, transaction, and compliance records to perform contracts, meet legal obligations, and establish or defend legal claims.",
        },
      ],
    },
    {
      title: "Disclosures, sale, and international transfers",
      paragraphs: [
        "Your device communicates with your chosen email provider and any link or remote content you choose to open. ABM Codeworks may use hosting, support, email-delivery, payment, and professional-service providers for the limited data it receives. We may disclose information when required by law, to protect rights and safety, or in a corporate transaction subject to appropriate safeguards.",
        "We do not sell personal information, share it for cross-context behavioural advertising, use it for targeted advertising, or disclose it to data brokers. Providers may operate internationally; where required we use a lawful transfer mechanism and appropriate contractual and technical safeguards.",
      ],
    },
    {
      title: "Retention and deletion",
      bullets: [
        "Mailbox cache, account tokens, tasks, reminders, and settings remain on your device until you remove the account, clear local data, or uninstall the app. Operating-system or user-created backups may retain copies separately.",
        "Support correspondence is normally retained for up to 24 months after the issue closes.",
        "Download and security logs are normally retained for up to 90 days unless required for an incident investigation.",
        "Transaction, licence, tax, and legal records are normally retained for up to 7 years after the relationship ends or as law requires.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "Drift Mail uses device security, app-lock options, encrypted local caching, and remote-image blocking as described in the app. ABM Codeworks also applies proportionate organisational and technical measures to data it receives.",
      ],
      bullets: commonSecurity,
      note: "No system is completely secure. Keep your operating system updated, protect your device and email-provider credentials, use multi-factor authentication where available, and maintain appropriate backups.",
    },
    {
      title: "Your privacy rights",
      paragraphs: [
        "Most Drift Mail content is controlled directly from your device or email provider. For information held by ABM Codeworks, rights vary by location and may include:",
      ],
      bullets: commonRights,
    },
    {
      title: "Children and automated decisions",
      paragraphs: [
        "Drift Mail is a general-audience productivity tool and is not directed to children under 13. Users under 16 should use it only with permission from a parent, guardian, school, or employer as appropriate. ABM Codeworks does not use Drift Mail information to make solely automated decisions that produce legal or similarly significant effects.",
      ],
    },
    {
      title: "Changes to this notice",
      paragraphs: [
        "We will post updates here and change the updated date. We will provide additional notice before a material change takes effect when law requires it, especially before collecting a new category of information or using information for a materially different purpose.",
      ],
    },
    commonContact,
  ],
};

export const billexPrivacy = {
  slug: "/billex/privacy",
  product: "BillEx",
  kind: "Privacy Notice",
  title: "BillEx Privacy Notice",
  description:
    "How BillEx handles account, business, customer, invoice, payment, and technical information.",
  intro:
    "BillEx is an invoicing and billing service. This notice explains how ABM Codeworks uses information to operate BillEx and how we handle the customer and invoice data that subscribers place in the service.",
  highlights: [
    "No sale of personal information",
    "Customer invoice data used only to provide BillEx",
    "Global access, deletion, and opt-out rights",
  ],
  related: [
    { label: "BillEx Terms", to: "/billex/terms" },
    { label: "BillEx DPA", to: "/billex/dpa" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "Our role",
      paragraphs: [
        `ABM Codeworks, ${controller.location}, is the controller of BillEx account, subscription, website, security, and support information. Contact: ${controller.email}.`,
        "For customer, supplier, employee, and invoice-recipient information uploaded by a business subscriber (“Customer Data”), that subscriber normally decides why and how the information is used. The subscriber is the controller or business and ABM Codeworks is its processor or service provider. Requests about Customer Data should first be sent to that subscriber.",
      ],
    },
    {
      title: "Information we process",
      items: [
        {
          label: "Account and identity",
          text: "Name, email, phone number, password verifier or authentication identifier, organisation, role, and account preferences.",
        },
        {
          label: "Business profile",
          text: "Trading and legal names, addresses, tax or company identifiers, logos, banking or payment instructions, invoice numbering, currency, and document templates.",
        },
        {
          label: "Customer and invoice data",
          text: "Customer and supplier contacts, addresses, tax identifiers, invoice line items, descriptions, quantities, prices, discounts, taxes, payment status, notes, attachments, and communications.",
        },
        {
          label: "Subscription and transaction data",
          text: "Plan, entitlement, payment status, billing contact, partial payment-method details supplied by a payment processor, receipts, and tax records. BillEx does not need full payment-card numbers when a processor handles payment.",
        },
        {
          label: "Usage, device, and security data",
          text: "IP address, browser or app version, device type, approximate region derived from IP, login time, feature events, audit history, error records, and security signals.",
        },
        {
          label: "Support and communications",
          text: "Messages, feedback, survey responses, and files or screenshots you choose to send.",
        },
      ],
    },
    {
      title: "Sources of information",
      bullets: [
        "Directly from you when you create an account, configure BillEx, contact support, or use a feature.",
        "From your organisation, its account administrator, or another authorised user.",
        "From customers, suppliers, and invoice recipients whose details an authorised subscriber enters into BillEx.",
        "Automatically from the app, browser, device, and security infrastructure when you use the service.",
        "From payment processors, authentication providers, and integration partners you choose to connect.",
      ],
    },
    {
      title: "Purposes and legal bases",
      items: [
        {
          label: "Provide and personalise BillEx",
          text: "Create accounts, generate and send documents, record status, support collaboration, sync data, and provide requested integrations. Basis: contract and steps requested before contract.",
        },
        {
          label: "Secure and improve the service",
          text: "Authenticate users, prevent fraud and abuse, diagnose errors, maintain audit records, and understand service performance. Basis: legitimate interests, contract, and legal obligations.",
        },
        {
          label: "Bill and administer subscriptions",
          text: "Process payments, taxes, receipts, renewals, and account communications. Basis: contract and legal obligations.",
        },
        {
          label: "Support and product communications",
          text: "Answer requests and send service, security, and feature notices. Basis: contract and legitimate interests. Consent is used where required for optional marketing.",
        },
        {
          label: "Comply and protect",
          text: "Comply with lawful requests, enforce terms, maintain business records, and establish or defend legal claims. Basis: legal obligation and legitimate interests.",
        },
      ],
      note: "BillEx does not make solely automated decisions about individuals that produce legal or similarly significant effects, and does not use invoice data to build advertising profiles.",
    },
    {
      title: "Who receives information",
      bullets: [
        "Your organisation's authorised administrators and users, according to their permissions.",
        "Customers, suppliers, and other recipients when an authorised user sends or shares a BillEx document.",
        "Cloud hosting, storage, security, authentication, email-delivery, support, analytics, and payment providers acting under contract and only for authorised purposes.",
        "Professional advisers, auditors, insurers, regulators, courts, or law-enforcement authorities where necessary and lawful.",
        "A successor in a merger, financing, reorganisation, or sale, subject to confidentiality and applicable law.",
      ],
      note: "ABM Codeworks does not sell personal information, share it for cross-context behavioural advertising, or use Customer Data for targeted advertising. We do not use or disclose sensitive information to infer characteristics about a person.",
    },
    {
      title: "International transfers",
      paragraphs: [
        "BillEx and its contracted providers may process information in Zimbabwe and other countries where services are operated. Those countries may have different privacy laws. Where required, we use adequacy decisions, approved standard contractual clauses or equivalent terms, data-processing agreements, consent, or another lawful mechanism, and apply supplementary technical and organisational safeguards.",
        "For Customer Data, transfer commitments are also set out in the BillEx Data Processing Addendum.",
      ],
    },
    {
      title: "Retention",
      bullets: [
        "Account and Customer Data: for the subscription term and the export/deletion period stated in the Terms, then deleted or de-identified from active systems unless retention is required by law or requested by the subscriber.",
        "Backups: overwritten on a rolling basis, normally within 90 days after active-system deletion, unless isolated for security or legal reasons.",
        "Security and detailed service logs: normally up to 12 months; shorter-lived raw infrastructure logs may be deleted sooner.",
        "Support records: normally up to 24 months after an issue closes.",
        "Contract, subscription, tax, and transaction records: normally up to 7 years after the relationship ends or as law requires.",
      ],
    },
    {
      title: "Security and incidents",
      paragraphs: [
        "We use measures designed for the nature and risk of the information processed, including:",
      ],
      bullets: commonSecurity,
      note: "No online service can guarantee absolute security. If we confirm a personal-data breach, we will notify affected customers, individuals, and regulators as required by applicable law. Zimbabwean breach reporting obligations may require notice to the Data Protection Authority within 24 hours.",
    },
    {
      title: "Your rights",
      paragraphs: [
        "Rights vary by location and are subject to lawful exceptions. You may have the following rights for information controlled by ABM Codeworks:",
      ],
      bullets: commonRights,
      note: "For Customer Data controlled by a BillEx subscriber, contact that subscriber first. We will assist the subscriber with a verified request as required by our contract and applicable law.",
    },
    {
      title: "US state privacy disclosures",
      paragraphs: [
        "In the preceding 12 months, BillEx may have collected the categories described above: identifiers; customer-record information; commercial and transaction information; internet or network activity; approximate location derived from IP; professional information; and limited sensitive information such as account credentials or financial instructions when users choose to store them. We collect these categories from the sources, use them for the purposes, and disclose them to the recipients described in this notice.",
        "We have not sold personal information or shared it for cross-context behavioural advertising. We do not knowingly sell or share personal information of anyone under 16. Residents of states that grant privacy rights may submit access, correction, deletion, portability, opt-out, and appeal requests through the Privacy Requests page.",
      ],
    },
    {
      title: "Children",
      paragraphs: [
        "BillEx is intended for businesses and people old enough to enter a binding contract. It is not directed to children under 13 and we do not knowingly collect their personal information. Users under 18 must have authority from a parent, guardian, or organisation where local law requires it.",
      ],
    },
    {
      title: "Changes to this notice",
      paragraphs: [
        "We will post updates here and change the updated date. If a change materially affects how we use information, we will provide additional notice and request consent where required before the new use begins.",
      ],
    },
    commonContact,
  ],
};

const commonTermsSections = [
  {
    title: "Intellectual property and feedback",
    paragraphs: [
      "ABM Codeworks and its licensors retain all rights in the product, software, branding, documentation, and improvements. These terms grant a limited right to use the product and do not transfer ownership. If you provide feedback, you grant ABM Codeworks a worldwide, perpetual, irrevocable, royalty-free right to use it without identifying you or disclosing your confidential information.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "The product may interoperate with third-party services. Their availability, security, content, and terms are controlled by their providers. ABM Codeworks is not responsible for a third-party service, but remains responsible for its own obligations and for providers it appoints to process personal information on its behalf.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms for legal, security, or product reasons. We will post the new date and provide reasonable advance notice of a material adverse change when practicable. Continued use after the effective date means you accept the revised terms; if you do not agree, stop using the product before then.",
    ],
  },
  {
    title: "Governing law and disputes",
    paragraphs: [
      "Zimbabwean law governs these terms, without regard to conflict-of-law rules. Courts with jurisdiction in Zimbabwe may hear disputes. This choice does not remove any mandatory consumer right, privacy right, or right to bring a claim in another forum that your local law does not allow you to waive. Before filing a claim, each party should give the other written notice and 30 days to try to resolve it informally, unless urgent relief or a statutory deadline makes that impractical.",
    ],
  },
  {
    title: "General",
    paragraphs: [
      "These terms, the applicable privacy notice, and any order or addendum are the entire agreement for the product. An order or signed addendum controls if it expressly conflicts. If a provision is unenforceable, it will be limited to the minimum extent necessary and the rest remains effective. Delay in enforcing a right is not a waiver. You may not assign the agreement without our consent; we may assign it as part of a merger, reorganisation, or sale of the relevant business. Neither party creates a partnership, agency, fiduciary, or employment relationship.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `Questions and legal notices may be sent to ${controller.email} or ABM Codeworks, ${controller.location}. Email notices should include the product name and “Legal Notice” in the subject line.`,
    ],
  },
];

export const driftTerms = {
  slug: "/drift-mail/terms",
  product: "Drift Mail",
  kind: "Terms of Use",
  title: "Drift Mail Terms of Use",
  description:
    "Terms governing installation and use of the Drift Mail desktop application.",
  intro:
    "These terms form an agreement between you and ABM Codeworks when you download, install, or use Drift Mail. If you use Drift Mail for an organisation, you confirm that you have authority to bind it.",
  highlights: [
    "Limited desktop-app licence",
    "You keep ownership of your email",
    "Mandatory consumer rights preserved",
  ],
  related: [
    { label: "Drift Mail Privacy", to: "/drift-mail/privacy" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "Eligibility and acceptance",
      paragraphs: [
        "You must be legally able to enter this agreement. Drift Mail is not directed to children under 13. If you are under the age of legal majority where you live, use the app only with the consent and supervision required by local law.",
      ],
    },
    {
      title: "Licence",
      paragraphs: [
        "Subject to these terms, ABM Codeworks grants you a personal, limited, revocable, non-exclusive, non-transferable licence to install and use Drift Mail on devices you control for lawful personal or internal business email. Any paid-plan limits shown at purchase also apply.",
      ],
      bullets: [
        "Do not copy, rent, sell, sublicense, distribute, or commercially exploit the app except as law or an open-source licence permits.",
        "Do not reverse engineer, bypass security or licence controls, introduce malware, interfere with the service, or use it to gain unauthorised access, except to the extent such restriction is prohibited by law.",
        "Do not use Drift Mail to send spam, phishing, harassment, unlawful content, malware, or communications that violate privacy, intellectual-property, export, sanctions, or electronic-marketing laws.",
      ],
    },
    {
      title: "Your email accounts and content",
      paragraphs: [
        "You retain ownership of your email, contacts, attachments, tasks, reminders, signatures, and account settings. You authorise the app to process that content locally and communicate with the providers you select solely to deliver requested features.",
        "You are responsible for permission to access each account, the legality of messages you send, recipient choices, provider rules, device security, and backups. Removing Drift Mail does not delete mail retained by your provider. Deleting mail through Drift Mail may delete or move it at the provider according to the selected action.",
      ],
    },
    {
      title: "Beta software, updates, and availability",
      paragraphs: [
        "A beta may contain defects, change without notice, lose local settings, or be unavailable. Do not rely on a beta as your only copy of important information. We may provide security fixes, feature changes, or replacement builds, and may stop supporting a version where reasonably necessary for security or compatibility.",
        "We do not promise uninterrupted operation or compatibility with every email provider, protocol, operating system, or provider-side change.",
      ],
    },
    {
      title: "Important data-loss and backup warning",
      paragraphs: [
        "Drift Mail is an email client, not a backup, archival, disaster-recovery, or guaranteed-delivery service. Actions taken in Drift Mail—including delete, move, restore, unsubscribe, account removal, and local-data clearing—may synchronise to your email provider and may be permanent. A local encrypted cache is not an independent backup.",
        "You are solely responsible for maintaining current, independently restorable backups of important messages, attachments, contacts, settings, and other data, and for confirming that important messages were sent, received, retained, or deleted as intended. Test restore procedures before relying on any backup.",
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ABM CODEWORKS IS NOT LIABLE FOR LOSS, DELETION, CORRUPTION, UNAUTHORISED ACCESS, FAILED DELIVERY, FAILED RECOVERY, OR UNAVAILABILITY OF EMAIL OR OTHER DATA, WHETHER CAUSED BY SYNCHRONISATION, USER ACTION, DEVICE OR STORAGE FAILURE, SOFTWARE DEFECT, BETA SOFTWARE, UPDATE, NETWORK FAILURE, MALWARE, SECURITY INCIDENT, EMAIL-PROVIDER ACTION, THIRD-PARTY SERVICE, OR ANY OTHER CAUSE. ABM CODEWORKS DOES NOT GUARANTEE THAT LOST DATA CAN BE RECOVERED.",
      ],
      note: "This warning limits risk and liability only to the extent applicable law allows. It does not exclude a right or liability that cannot legally be waived, including applicable liability for fraud, wilful misconduct, gross negligence, or a mandatory consumer, privacy, or data-protection remedy.",
    },
    {
      title: "Fees and paid plans",
      paragraphs: [
        "If Drift Mail introduces paid features, the price, currency, billing period, taxes, renewal rules, and cancellation method will be shown before purchase. Except where law requires otherwise, charges already incurred are non-refundable. Nothing here limits a statutory cancellation, cooling-off, refund, or warranty right.",
      ],
    },
    ...commonTermsSections.slice(0, 2),
    {
      title: "Suspension and termination",
      paragraphs: [
        "You may stop using Drift Mail and remove it at any time. We may suspend licence or support access for a material breach, security risk, non-payment, unlawful use, or where required by law, normally after notice and an opportunity to cure when appropriate. Provisions that by nature should survive termination—including ownership, accrued payment duties, disclaimers, liability limits, and dispute terms—will survive.",
      ],
    },
    {
      title: "Warranties and liability",
      paragraphs: [
        "To the maximum extent permitted by law, Drift Mail is provided “as is” and “as available.” We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement where those warranties may lawfully be disclaimed.",
        "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, punitive, or consequential loss, or lost profit, revenue, goodwill, business opportunity, or data. Without limiting the separate data-loss warning, ABM Codeworks' aggregate liability relating to Drift Mail will not exceed the greater of the amount you paid for Drift Mail in the 12 months before the event or USD 50. Multiple claims do not increase this cap.",
        "The exclusions and cap apply regardless of the legal theory and even if a remedy fails of its essential purpose or we were advised that loss was possible. They do not apply to liability that cannot legally be limited, including fraud, wilful misconduct, gross negligence where it cannot be excluded, death or personal injury caused by negligence where applicable, or mandatory consumer, privacy, and data-protection rights.",
      ],
    },
    ...commonTermsSections.slice(2),
  ],
};

export const billexTerms = {
  slug: "/billex/terms",
  product: "BillEx",
  kind: "Terms of Service",
  title: "BillEx Terms of Service",
  description:
    "Terms governing BillEx accounts, subscriptions, invoices, customer data, and acceptable use.",
  intro:
    "These terms form an agreement between ABM Codeworks and the person or organisation that creates, buys, or uses a BillEx account. If you act for an organisation, you confirm you have authority to bind it.",
  highlights: [
    "You own your business and invoice data",
    "BillEx is not tax or legal advice",
    "Privacy and processing duties defined",
  ],
  related: [
    { label: "BillEx Privacy", to: "/billex/privacy" },
    { label: "BillEx DPA", to: "/billex/dpa" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "Accounts and authorised users",
      paragraphs: [
        "You must provide accurate information, protect credentials, use multi-factor authentication when available, and promptly report suspected compromise. The account owner controls authorised users and is responsible for their use. A user must be legally able to enter this agreement; BillEx is not directed to children under 13.",
      ],
    },
    {
      title: "The service",
      paragraphs: [
        "BillEx provides tools to create, manage, deliver, and record invoices and related business documents. Features may vary by plan, device, country, and integration. We may improve or change features, but will not materially reduce a paid core feature during its current prepaid term without a reasonable remedy.",
        "BillEx is an administrative tool, not an accountant, tax adviser, lawyer, bank, payment institution, debt collector, or government filing service. You are responsible for document accuracy, tax treatment, legal wording, numbering, record retention, exchange rates, regulatory filings, and professional advice appropriate to your business and location.",
      ],
    },
    {
      title: "Subscriptions, payment, and taxes",
      paragraphs: [
        "Plan price, currency, billing period, included usage, renewal, and cancellation terms are shown when you order. Subscriptions renew only as disclosed at checkout and may be cancelled using the stated method. You authorise applicable charges and are responsible for taxes other than taxes on our income. We may suspend paid features after reasonable notice of overdue amounts.",
        "Except where an order or mandatory law says otherwise, fees for a started billing period are non-refundable. Statutory consumer cancellation, cooling-off, refund, and warranty rights remain unaffected.",
      ],
    },
    {
      title: "Customer Data and privacy roles",
      paragraphs: [
        "You retain all rights in information, logos, contacts, invoice content, and files submitted to BillEx (“Customer Data”). You grant ABM Codeworks a limited, worldwide right to host, copy, transmit, display, and otherwise process Customer Data only to provide, secure, support, and improve the service as allowed by the BillEx Privacy Notice and Data Processing Addendum.",
        "You are responsible for a lawful basis and required notices for Customer Data, the accuracy of recipient details, responding to individual requests, and instructions you give us. Do not upload special-category, highly sensitive, payment-card, health, biometric, criminal-record, or government-identity data unless a BillEx feature expressly supports it and you have completed any legally required assessment and agreement.",
      ],
    },
    {
      title: "Acceptable use",
      bullets: [
        "Do not use BillEx for fraud, false invoices, money laundering, sanctions evasion, tax evasion, unlawful debt collection, harassment, phishing, malware, spam, or deceptive conduct.",
        "Do not access another person's account or data without authority, probe or bypass security, disrupt the service, scrape at unreasonable volume, or use BillEx to build a competing product.",
        "Do not upload unlawful, infringing, defamatory, or malicious content, or information you lack authority to process.",
        "Comply with privacy, tax, accounting, consumer-protection, anti-spam, export-control, and sanctions laws that apply to your use.",
      ],
    },
    {
      title: "Security and service administration",
      paragraphs: [
        "We maintain proportionate technical and organisational safeguards and incident procedures. You are responsible for user permissions, endpoint security, exports, and secure recipient addresses. We may temporarily restrict activity to prevent harm, investigate abuse, comply with law, or protect the service.",
      ],
    },
    {
      title: "Important data-loss, recordkeeping, and backup warning",
      paragraphs: [
        "BillEx is a workflow tool, not your sole accounting ledger, statutory archive, backup, disaster-recovery service, or guarantee that an invoice was received or paid. You are solely responsible for maintaining accurate books and independently restorable exports or backups of invoices, contacts, attachments, payment records, tax records, templates, and other Customer Data for every legally required retention period.",
        "You must regularly export important records, verify exported files, test restore procedures, confirm recipient addresses and delivery, and keep copies outside BillEx. Sync, import, integration, automation, deletion, account closure, or a third-party service may change or remove data. We do not guarantee recovery after deletion, corruption, account termination, or expiry of the post-termination export period.",
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ABM CODEWORKS IS NOT LIABLE FOR LOSS, DELETION, CORRUPTION, INACCURACY, UNAUTHORISED ACCESS, FAILED DELIVERY, FAILED EXPORT, FAILED RECOVERY, OR UNAVAILABILITY OF CUSTOMER DATA OR BUSINESS RECORDS, WHETHER CAUSED BY USER ACTION, CONFIGURATION, SOFTWARE DEFECT, UPDATE, DEVICE OR STORAGE FAILURE, NETWORK FAILURE, MALWARE, SECURITY INCIDENT, INTEGRATION, PAYMENT OR EMAIL PROVIDER, THIRD-PARTY SERVICE, SUSPENSION, TERMINATION, OR ANY OTHER CAUSE.",
      ],
      note: "This warning limits risk and liability only to the extent applicable law allows. It does not exclude a right or liability that cannot legally be waived, including applicable liability for fraud, wilful misconduct, gross negligence, or a mandatory consumer, privacy, or data-protection remedy.",
    },
    ...commonTermsSections.slice(0, 2),
    {
      title: "Suspension, termination, export, and deletion",
      paragraphs: [
        "You may cancel according to your plan. We may suspend or terminate for material breach, security risk, non-payment, unlawful use, or legal requirement, normally after notice and an opportunity to cure where appropriate. On termination, paid access ends and outstanding amounts remain due.",
        "Where the product supports export, you should export Customer Data before termination. Unless a different order states otherwise, we will make Customer Data available for export for 30 days after termination, then delete it from active systems. Backups are overwritten on a rolling basis, normally within a further 90 days. We may retain limited records where law requires or to establish or defend claims.",
      ],
    },
    {
      title: "Confidentiality",
      paragraphs: [
        "Each party will protect the other's non-public business, technical, and financial information using reasonable care and use it only for this agreement. This duty does not cover information that is public without breach, already lawfully known, independently developed, or lawfully received without restriction. A legally compelled disclosure is permitted after notice where lawful.",
      ],
    },
    {
      title: "Warranties and liability",
      paragraphs: [
        "We warrant that BillEx will materially perform as documented under normal authorised use and that we will provide it with reasonable skill and care. Your exclusive remedy for a verified material breach is correction, re-performance, or a pro-rata refund for the affected prepaid period. Other warranties are disclaimed to the maximum extent permitted by law.",
        "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, punitive, or consequential loss, or lost profit, revenue, goodwill, business opportunity, anticipated savings, or data. Without limiting the separate data-loss warning, ABM Codeworks' aggregate liability under these terms will not exceed fees paid or payable for BillEx in the 12 months before the event. Multiple claims do not increase this cap.",
        "The exclusions and cap apply regardless of the legal theory and even if a remedy fails of its essential purpose or a party was advised that loss was possible. The cap does not limit payment duties, your misuse of our intellectual property, your indemnity duties, fraud or wilful misconduct, gross negligence where it cannot be excluded, or liability that mandatory consumer, privacy, data-protection, or other law does not permit a party to limit.",
      ],
    },
    {
      title: "Your indemnity",
      paragraphs: [
        "To the extent permitted by law, an organisation using BillEx will defend and indemnify ABM Codeworks against a third-party claim caused by that organisation's unlawful Customer Data, false or unlawful invoices, violation of recipient rights, or material breach of the Acceptable Use section. We must promptly notify you, allow you to control the defence with reasonable cooperation, and may reject a settlement that admits our fault or imposes an obligation on us without consent.",
      ],
    },
    ...commonTermsSections.slice(2),
  ],
};

export const cookieNotice = {
  slug: "/legal/cookies",
  product: "ABM Codeworks website",
  kind: "Cookie Notice",
  title: "Cookie and Local Storage Notice",
  description:
    "The cookies, local storage, and security technologies used on the ABM Codeworks website.",
  intro:
    "As of the date above, this website does not deploy analytics cookies, advertising pixels, or behavioural trackers. It uses only storage and third-party technology needed for user choices, site delivery, and form security.",
  highlights: [
    "No analytics cookies currently deployed",
    "No advertising pixels",
    "Security and preference storage only",
  ],
  related: [
    { label: "Website Privacy", to: "/legal/privacy" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "What these technologies are",
      paragraphs: [
        "Cookies are small text files stored by a browser. Local storage is a browser feature that stores a small value on the device. Similar technologies can remember choices, maintain security, measure use, or support advertising. We classify them by purpose and do not treat an optional technology as essential merely because it is convenient.",
      ],
    },
    {
      title: "Technologies currently used",
      items: [
        {
          label: "cookie_notice_acknowledged_v1",
          text: "Local storage set by ABM Codeworks after you acknowledge the storage notice. Purpose: remember the notice choice. Typical duration: until you clear site data. Category: strictly necessary preference storage.",
        },
        {
          label: "Hosting and security",
          text: "Our hosting provider may use short-lived request, routing, load-balancing, or security data needed to deliver and protect the site. Category: strictly necessary.",
        },
        {
          label: "Google reCAPTCHA",
          text: "When enabled on the contact form, Google reCAPTCHA processes device, network, interaction, and risk information and may set security cookies to distinguish people from abusive automation. Category: strictly necessary for form security. Google's terms and privacy notice also apply.",
        },
      ],
    },
    {
      title: "Optional technologies",
      paragraphs: [
        "We do not currently use analytics, personalisation, or advertising cookies. If we introduce optional technologies, they will remain off in countries requiring consent until you make an affirmative choice. We will update this notice with provider, purpose, duration, and category information and make withdrawal as easy as acceptance.",
      ],
    },
    {
      title: "Your controls",
      bullets: [
        "Use your browser settings to view, block, or delete cookies and local storage.",
        "Select “Storage notice” in the site footer to reopen the notice.",
        "Blocking essential security technology may prevent the contact form or parts of the site from working.",
        "Because we do not sell or share personal information for behavioural advertising, Global Privacy Control does not change current website behaviour. We will honour it if our practices change and applicable law requires it.",
      ],
    },
    commonContact,
  ],
};

export const privacyRequests = {
  slug: "/legal/privacy-requests",
  product: "ABM Codeworks products",
  kind: "Privacy Rights",
  title: "Privacy Requests and Data Deletion",
  description:
    "How to access, correct, delete, export, restrict, object to, or appeal the use of personal information in ABM Codeworks products.",
  intro:
    "You do not need an account, payment, or legal representative to ask a privacy question. We provide the rights below wherever reasonably possible, even when a particular law does not require every right.",
  highlights: [
    "Requests are free in ordinary cases",
    "Identity checks are limited to verification",
    "No retaliation for using privacy rights",
  ],
  related: [
    { label: "Drift Mail Privacy", to: "/drift-mail/privacy" },
    { label: "BillEx Privacy", to: "/billex/privacy" },
    { label: "Website Privacy", to: "/legal/privacy" },
  ],
  cta: {
    label: "Email a privacy request",
    href: "mailto:admin@abmcodeworks.com?subject=Privacy%20Request",
  },
  sections: [
    {
      title: "Rights you can request",
      bullets: commonRights,
    },
    {
      title: "What to include",
      bullets: [
        "Your name and the email address associated with the service.",
        "The product or service involved: Drift Mail, BillEx, or the ABM Codeworks website.",
        "The right you want to exercise and enough detail to locate the relevant information.",
        "Your country and state or province, so we can apply the correct legal requirements.",
      ],
      note: "Send the request to admin@abmcodeworks.com with “Privacy Request” in the subject. Do not email passwords, full payment-card details, identity documents, or mailbox contents unless we specifically and securely request necessary verification information.",
    },
    {
      title: "How we verify and respond",
      paragraphs: [
        "We match a request to information already held and may ask you to confirm control of an email address or account. We use verification information only for verification and security. If we cannot verify a request, we will explain what is missing. We respond within the period required by applicable law and will notify you if a lawful extension is needed.",
        "An authorised agent may submit a request where law permits. We may ask for signed authority and may still verify your identity directly. A parent or guardian may exercise rights for a child as applicable.",
      ],
    },
    {
      title: "Product-specific deletion",
      items: [
        {
          label: "Drift Mail",
          text: "Remove each email account in the app, clear local data if that option is available, and uninstall the app. This removes Drift Mail's device data but does not delete messages held by your email provider or copies in device backups. Contact your provider for provider-hosted deletion.",
        },
        {
          label: "BillEx account owner",
          text: "Export required records, then use any in-product deletion control or email us. Some invoice, tax, fraud-prevention, payment, and contract records may need to be retained by you or us under applicable law.",
        },
        {
          label: "BillEx invoice recipient",
          text: "Contact the business that issued the invoice because it normally controls that data. You may also contact us; we will securely route the request to the subscriber or assist it without disclosing information to an unauthorised person.",
        },
        {
          label: "Website enquiry",
          text: "Email us from the address used for the enquiry and identify the approximate date. We will delete it unless retention is necessary for a contract, legal duty, security, or claim.",
        },
      ],
    },
    {
      title: "Appeals and complaints",
      paragraphs: [
        "If we deny a request, reply within the time stated in our decision with the subject “Privacy Appeal” and explain why you believe the decision should change. A person not involved in the original decision will review the appeal where required and reasonably practicable.",
        "You may complain to the relevant regulator at any time. In Zimbabwe this is POTRAZ as the Data Protection Authority. In the EEA, contact the supervisory authority where you live, work, or believe an infringement occurred. In the UK, contact the Information Commissioner's Office. In the United States, contact the privacy regulator or attorney general for your state where applicable.",
      ],
    },
  ],
};

export const billexDpa = {
  slug: "/billex/dpa",
  product: "BillEx",
  kind: "Data Processing Addendum",
  title: "BillEx Data Processing Addendum",
  description:
    "Data-processing terms for organisations that use BillEx to process personal information.",
  intro:
    "This Data Processing Addendum (“DPA”) forms part of the BillEx Terms or other agreement between ABM Codeworks and a BillEx customer when ABM Codeworks processes Customer Personal Data for that customer.",
  highlights: [
    "Controller-to-processor terms",
    "Security and breach assistance",
    "International-transfer safeguards",
  ],
  related: [
    { label: "BillEx Privacy", to: "/billex/privacy" },
    { label: "BillEx Terms", to: "/billex/terms" },
    { label: "Privacy Requests", to: "/legal/privacy-requests" },
  ],
  sections: [
    {
      title: "1. Roles and instructions",
      paragraphs: [
        "The customer is the controller or business and ABM Codeworks is the processor or service provider for Customer Personal Data. Each party will comply with privacy law applicable to its role, including Zimbabwe's Cyber and Data Protection Act, the EU or UK GDPR where applicable, and applicable US state privacy law.",
        "ABM Codeworks will process Customer Personal Data only on the customer's documented instructions, including the agreement, product configuration, support requests, and lawful user actions, unless law requires otherwise. We will notify the customer if an instruction appears to infringe applicable privacy law and may pause that processing while the parties resolve it.",
      ],
    },
    {
      title: "2. Processing details",
      items: [
        {
          label: "Subject matter and purpose",
          text: "Hosting and operating BillEx to create, manage, send, store, search, support, secure, export, and delete invoices and related business records.",
        },
        {
          label: "Duration",
          text: "For the agreement term, the post-termination export period, and the backup-deletion cycle, unless law requires longer retention.",
        },
        {
          label: "People",
          text: "The customer's users, personnel, customers, suppliers, invoice recipients, payers, business contacts, and other people whose information an authorised user submits.",
        },
        {
          label: "Data",
          text: "Identity and contact data; business, tax, and billing identifiers; account roles; invoice line items and descriptions; transaction and payment status; communications; attachments; audit, device, and security data. Highly sensitive data is not intended unless expressly supported in writing.",
        },
        {
          label: "Operations",
          text: "Collection, recording, organisation, storage, retrieval, consultation, transmission, restriction, export, deletion, and other operations needed to provide BillEx.",
        },
      ],
    },
    {
      title: "3. Confidentiality and security",
      paragraphs: [
        "ABM Codeworks will ensure people authorised to process Customer Personal Data are bound by confidentiality and will maintain measures appropriate to risk. These include access control, least privilege, encryption in transit, encryption at rest where supported, secure development, vulnerability and dependency management, logging, backup controls, and incident response. The customer remains responsible for account permissions, endpoints, lawful configuration, and secure exports.",
      ],
    },
    {
      title: "4. Subprocessors",
      paragraphs: [
        "The customer gives general written authorisation for ABM Codeworks to appoint subprocessors needed to provide BillEx, including cloud hosting, storage, security, authentication, email delivery, customer support, analytics, and payment infrastructure. We will contractually require each subprocessor to protect Customer Personal Data to a standard no less protective than this DPA for the processing it performs.",
        "On request, we will provide the current subprocessor list. We will give advance notice of a new subprocessor where required by applicable law or the customer's order. A customer may object on reasonable data-protection grounds; the parties will work in good faith on a commercially reasonable solution, which may include disabling the affected feature or terminating it with a pro-rata refund of prepaid unused fees.",
      ],
    },
    {
      title: "5. Individual rights and compliance assistance",
      paragraphs: [
        "Taking account of the nature of processing, ABM Codeworks will provide reasonable assistance for verified access, correction, deletion, restriction, objection, portability, and opt-out requests. If we receive a request concerning Customer Personal Data, we will direct it to the customer or notify the customer and will not respond substantively unless authorised or legally required.",
        "We will reasonably assist with data-protection impact assessments, regulator consultations, security information, records of processing, and other customer compliance duties, taking account of the information available to us. Additional work beyond standard product functionality may be chargeable by prior agreement.",
      ],
    },
    {
      title: "6. Security incidents",
      paragraphs: [
        "After becoming aware of a confirmed breach of Customer Personal Data, ABM Codeworks will notify the customer without undue delay, provide available information needed for the customer's legal notices, take reasonable containment and remediation steps, and keep the customer informed of material developments. Notification is not an admission of fault. The customer is responsible for notices in its controller role; ABM Codeworks remains responsible for notices law directly requires from it, including applicable Zimbabwean obligations.",
      ],
    },
    {
      title: "7. International transfers",
      paragraphs: [
        "Neither party will transfer Customer Personal Data internationally without a lawful mechanism. Where a restricted transfer from the EEA is not covered by adequacy, the EU Standard Contractual Clauses adopted in 2021 apply, using Module Two (controller to processor), with the customer as exporter and ABM Codeworks as importer. For restricted UK transfers, the then-current UK International Data Transfer Addendum applies to those clauses. Equivalent lawful safeguards apply for Zimbabwe and other jurisdictions as required.",
        "This DPA and the service description supply the annex information: the parties and contact details are in the agreement; processing details are in section 2; safeguards are in section 3; and subprocessors are authorised under section 4. The parties will conduct and document transfer assessments and add supplementary measures where required.",
      ],
    },
    {
      title: "8. Return, deletion, and audits",
      paragraphs: [
        "During the agreement and stated export period, the customer may export Customer Data using available features. After that period, ABM Codeworks will delete Customer Personal Data from active systems and allow backups to expire on their normal cycle, unless law requires retention. Retained data remains protected and is processed only for the required purpose.",
        "On reasonable written request, we will provide information needed to demonstrate compliance. If that is insufficient, a customer may conduct an audit no more than once annually through an independent auditor under confidentiality, on reasonable notice, without disrupting systems or exposing another customer's data. The customer bears audit cost unless the audit identifies a material breach by ABM Codeworks.",
      ],
    },
    {
      title: "9. Conflict and contact",
      paragraphs: [
        `This DPA controls over conflicting terms about processing Customer Personal Data. Other agreement terms remain effective. Privacy and DPA questions may be sent to ${controller.email}, ABM Codeworks, ${controller.location}.`,
      ],
    },
  ],
};

export const legalDocuments = [
  websitePrivacy,
  driftPrivacy,
  driftTerms,
  billexPrivacy,
  billexTerms,
  billexDpa,
  cookieNotice,
  privacyRequests,
];
