"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8 leading-[0.98] text-balance">
                  Have a repetitive process you&apos;re tired of running by hand?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Tell us what it is. If it&apos;s a good fit for an agent,
                  we&apos;ll say so plainly &mdash; and if it isn&apos;t,
                  we&apos;ll tell you that too.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    <a href="mailto:fenlyxai@gmail.com">
                      Email us
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:fenlyxai@gmail.com"
                      className="text-lg text-foreground hover:underline underline-offset-4 break-all"
                    >
                      fenlyxai@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+923167093135"
                      className="text-lg text-foreground hover:underline underline-offset-4"
                    >
                      +92 316 7093135
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                      Response time
                    </p>
                    <p className="text-lg text-foreground">Within one business day</p>
                  </div>
                </div>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
