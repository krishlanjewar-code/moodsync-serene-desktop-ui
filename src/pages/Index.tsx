import React from 'react';
import { HeroChatbot } from '@/components/HeroChatbot';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { MoodRefresherQuiz } from '@/components/MoodRefresherQuiz';
import { PrivacySection } from '@/components/PrivacySection';
import { DashboardPreview } from '@/components/DashboardPreview';
import { PsychiatristList } from '@/components/PsychiatristList';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with AI Chatbot */}
      <HeroChatbot />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      {/* Mood Refresher Quiz */}
      <MoodRefresherQuiz />
      
      {/* Privacy First Section */}
      <PrivacySection />
      
      {/* Mood Dashboard Preview */}
      <DashboardPreview />
      
      {/* Real Psychiatrist Contact Section */}
      <PsychiatristList />
      
      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default Index;
