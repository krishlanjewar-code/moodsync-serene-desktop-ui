import React from 'react';
import { Shield, Cpu, Lock, Globe, Eye, Database } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Database,
    title: 'No Raw Text Stored',
    description: 'Your personal communications remain private. We analyze patterns without storing your actual text content.'
  },
  {
    icon: Cpu,
    title: 'Edge/On-Device Processing',
    description: 'Most analysis happens directly on your device, keeping your data local and secure.'
  },
  {
    icon: Shield,
    title: 'GDPR Compliant',
    description: 'Full compliance with European privacy regulations, giving you complete control over your data.'
  },
  {
    icon: Eye,
    title: 'Anonymous Syncing',
    description: 'Only anonymized mood metadata is synced across devices - never personal identifiers.'
  }
];

export const PrivacySection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-mint-light rounded-2xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-mint" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Privacy{' '}
                  <span className="bg-calm-gradient bg-clip-text text-transparent">
                    First
                  </span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your mental health journey is deeply personal. We've built MoodSync with privacy at its core, 
                ensuring your emotional data remains secure and under your control.
              </p>
            </div>

            <div className="space-y-6">
              {privacyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-xl bg-background/50 border border-border/30 hover:bg-accent/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-mint-light via-pastel-blue-light to-lavender-light rounded-2xl p-12 shadow-soft">
              <div className="relative">
                {/* Central Shield */}
                <div className="w-32 h-32 bg-card rounded-full shadow-gentle flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-16 h-16 text-primary" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-mint rounded-xl flex items-center justify-center shadow-soft opacity-80 animate-pulse">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-6 -right-2 w-14 h-14 bg-pastel-blue rounded-xl flex items-center justify-center shadow-soft opacity-80 animate-pulse" style={{ animationDelay: '1s' }}>
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                
                <div className="absolute -bottom-8 -left-2 w-12 h-12 bg-lavender rounded-xl flex items-center justify-center shadow-soft opacity-80 animate-pulse" style={{ animationDelay: '2s' }}>
                  <Eye className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -right-6 w-18 h-18 bg-primary rounded-xl flex items-center justify-center shadow-soft opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <Globe className="w-8 h-8 text-white" />
                </div>

                {/* Privacy Text */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Your Data, Your Control
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced privacy protection without compromising on insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};