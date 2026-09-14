"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Relay",
    tagline: "WhatsApp agent for businesses",
    description: "Handles customer conversations on WhatsApp end to end — answering questions, taking orders, and booking appointments in your business's own voice, around the clock. Escalates to a human the moment a conversation needs one.",
    builtFor: "Small and mid-size businesses handling high message volume",
    stack: [] as string[],
    url: "",
    visual: "collab",
  },
  {
    number: "02",
    title: "Scout",
    tagline: "Lead finder, RAG-based",
    description: "Reads through your own data — past deals, notes, call transcripts — to surface the leads most worth chasing this week, with the reasoning attached so your team can trust the call.",
    builtFor: "Sales teams sitting on more data than they can manually review",
    stack: [] as string[],
    url: "",
    visual: "ai",
  },
  {
    number: "03",
    title: "Signal",
    tagline: "AI YouTube Shorts agent",
    description: "Turns a channel's long-form content or a topic brief into ready-to-post Shorts on a schedule — script, cut, captions — so a creator or brand can post daily without a daily edit session.",
    builtFor: "Creators and brands publishing short-form content at volume",
    stack: [] as string[],
    url: "",
    visual: "deploy",
  },
  {
    number: "04",
    title: "EstateFlow",
    tagline: "Real estate operations agent",
    description: "Coordinates the back-and-forth of a property deal — listing updates, viewing requests, buyer follow-up — so agents spend their time closing, not chasing their inbox.",
    builtFor: "Real estate agencies and independent brokers",
    stack: [] as string[],
    url: "",
    visual: "security",
  },
  {
    number: "05",
    title: "WhatsApp Commerce Copilot",
    tagline: "Agentic AI",
    description: "An agentic AI copilot that answers a clothing brand's WhatsApp customers in English, Roman Urdu and Urdu script — with catalogue-grounded replies on sizing, delivery and Cash-on-Delivery confirmation. Built by a four-person squad in Comebck Pakistan Cohort 1.",
    builtFor: "Clothing brands selling to Pakistani customers over WhatsApp",
    stack: ["Agentic AI", "LangChain", "Python", "FastAPI", "React", "Docker"],
    url: "",
    visual: "collab",
  },
  {
    number: "06",
    title: "Cafe POS",
    tagline: "Full-stack point-of-sale for cafés",
    description: "A full-stack POS workspace for café orders, inventory, staff, and reporting — customisable order entry, recorded checkout, printable receipts, menu and recipe maintenance, ingredient stock, staff shifts, and sales analytics in a single interface. Orders are recalculated server-side and stock is deducted transactionally within PostgreSQL.",
    builtFor: "Cafés running orders, stock, staff, and reporting in one place",
    stack: ["React", "Vite", "Express", "PostgreSQL", "TanStack Query"],
    url: "",
    visual: "deploy",
  },
  {
    number: "07",
    title: "AgencyFlow CRM Beta",
    tagline: "CRM platform",
    description: "A beta CRM experience for agencies to organize prospects, manage client relationships, and keep sales activity moving from one place.",
    builtFor: "Agencies that want a clearer, more connected sales workflow",
    stack: ["Next.js", "React", "Vercel"],
    url: "https://agencyflow-crm-beta.vercel.app",
    visual: "ai",
  },
];

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      
      {/* Container */}
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      
      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central node */}
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Orbiting nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            {/* Connection line */}
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
            
            {/* Outer node */}
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
      
      {/* Pulse rings */}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* User A */}
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* User B */}
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* Connection */}
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      
      {/* Data packet */}
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
      
      {/* Sync indicator */}
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Shield */}
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Inner shield */}
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Lock icon */}
      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Keyhole */}
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />
      
      {/* Scan lines */}
      <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-baseline gap-3 mb-4 group-hover:translate-x-2 transition-transform duration-500">
              <h3 className="text-3xl lg:text-4xl font-display">
                {feature.title}
              </h3>
              <span className="text-sm text-muted-foreground">{feature.tagline}</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
            <p className="mt-6 text-sm font-mono text-muted-foreground">
              <span className="text-foreground/50">Built for:</span> {feature.builtFor}
            </p>
            {feature.stack.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {feature.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {feature.url && (
              <a
                href={feature.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-mono text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                View live project →
              </a>
            )}
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What we&apos;ve shipped
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Seven projects, seven problems.
            <br />
            <span className="text-muted-foreground">Each built for a real client problem &mdash; not a demo.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
