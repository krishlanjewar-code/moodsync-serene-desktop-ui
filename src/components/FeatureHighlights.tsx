import React from 'react';
import { Keyboard, Brain, Lightbulb, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Keyboard,
    title: 'Typing Behavior Analysis',
    description: 'Advanced keystroke dynamics reveal emotional patterns in your daily typing, providing insights into your mental state without invasive monitoring.',
    color: 'lavender'
  },
  {
    icon: Brain,
    title: 'Sentiment Detection',
    description: 'Real-time sentiment analysis of your communications helps identify mood shifts and emotional triggers with scientific precision.',
    color: 'pastel-blue'
  },
  {
    icon: Lightbulb,
    title: 'Micro-Intervention Suggestions',
    description: 'Receive personalized, bite-sized wellness activities and coping strategies tailored to your current emotional state.',
    color: 'mint'
  },
  {
    icon: Heart,
    title: 'Mood Refresher Test',
    description: 'Quick 5-7 question assessments help you understand your current mood and receive uplifting, actionable suggestions.',
    color: 'lavender'
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligent Features for{' '}
            <span className="bg-calm-gradient bg-clip-text text-transparent">
              Your Wellbeing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform uses cutting-edge technology to provide personalized mental health support 
            that adapts to your unique emotional patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-gentle transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  feature.color === 'lavender' ? 'bg-lavender-light' :
                  feature.color === 'pastel-blue' ? 'bg-pastel-blue-light' :
                  feature.color === 'mint' ? 'bg-mint-light' : 'bg-accent'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    feature.color === 'lavender' ? 'text-lavender' :
                    feature.color === 'pastel-blue' ? 'text-pastel-blue' :
                    feature.color === 'mint' ? 'text-mint' : 'text-primary'
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium transition-all duration-300"
                >
                  Learn More →
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};