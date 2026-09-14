"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Work: [
    { name: "Relay — WhatsApp agent", href: "#work" },
    { name: "Scout — lead finder", href: "#work" },
    { name: "Signal — Shorts agent", href: "#work" },
    { name: "EstateFlow — real estate ops", href: "#work" },
  ],
  Company: [
    { name: "Our work", href: "#work" },
    { name: "How a project runs", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  Contact: [
    { name: "fenlyxai@gmail.com", href: "mailto:fenlyxai@gmail.com" },
    { name: "+92 316 7093135", href: "tel:+923167093135" },
    { name: "Start a project", href: "#contact" },
  ],
};

const socialLinks = [
  { name: "Email", href: "mailto:fenlyxai@gmail.com" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Fenlyx</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                We build and run custom AI agents that do your business&apos;s repeat work.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Fenlyx. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:fenlyxai@gmail.com" className="hover:text-foreground transition-colors">
              fenlyxai@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
