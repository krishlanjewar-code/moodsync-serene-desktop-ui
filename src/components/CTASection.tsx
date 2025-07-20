import React from 'react';
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Start Feeling{' '}
            <span className="bg-calm-gradient bg-clip-text text-transparent">
              Better Today
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Judgment-free, supportive, science-backed help. Your journey to better mental health 
            starts with a single conversation.
          </p>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
            <Heart className="w-8 h-8 text-mint mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Empathetic AI</h3>
            <p className="text-sm text-muted-foreground text-center">
              AI trained to understand and respond with genuine empathy
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
            <Shield className="w-8 h-8 text-pastel-blue mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Privacy First</h3>
            <p className="text-sm text-muted-foreground text-center">
              Your data stays secure with advanced privacy protection
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30">
            <Sparkles className="w-8 h-8 text-lavender mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Personalized</h3>
            <p className="text-sm text-muted-foreground text-center">
              Tailored insights and suggestions based on your patterns
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-soft transition-all duration-300 hover:scale-105 group"
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">Trusted by</p>
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <span className="font-medium">50,000+ Users</span>
            <span className="font-medium">200+ Professionals</span>
            <span className="font-medium">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};