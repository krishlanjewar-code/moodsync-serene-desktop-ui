import React from 'react';
import { MessageCircle, Calendar, Star, Shield, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const psychiatrists = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    credentials: "MD, Psychiatrist",
    specialty: "Anxiety & Depression",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 127,
    availability: "Available Today",
    image: "/api/placeholder/150/150",
    verified: true,
    experience: "12 years"
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    credentials: "PhD, Clinical Psychologist",
    specialty: "Cognitive Behavioral Therapy",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 89,
    availability: "Next Available: Tomorrow",
    image: "/api/placeholder/150/150",
    verified: true,
    experience: "8 years"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    credentials: "LCSW, Therapist",
    specialty: "Stress & Burnout",
    location: "New York, NY",
    rating: 4.9,
    reviews: 156,
    availability: "Available Today",
    image: "/api/placeholder/150/150",
    verified: true,
    experience: "15 years"
  },
  {
    id: 4,
    name: "Dr. James Kim",
    credentials: "MD, Psychiatrist",
    specialty: "ADHD & Focus Issues",
    location: "Seattle, WA",
    rating: 4.7,
    reviews: 94,
    availability: "Next Available: 2 days",
    image: "/api/placeholder/150/150",
    verified: true,
    experience: "10 years"
  }
];

export const PsychiatristList = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Speak with a{' '}
            <span className="bg-calm-gradient bg-clip-text text-transparent">
              Real Professional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you need human connection and professional expertise, our verified mental health 
            professionals are here to provide personalized care and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {psychiatrists.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden hover:shadow-gentle transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="relative p-6 bg-gradient-to-br from-primary/5 to-lavender/5">
                <div className="relative">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-lavender/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {doctor.verified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-mint rounded-full flex items-center justify-center shadow-sm">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{doctor.credentials}</p>
                  
                  {doctor.verified && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-mint/20 text-mint rounded-full text-xs font-medium">
                      <Shield className="w-3 h-3" />
                      Verified by MoodSync
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-foreground">{doctor.rating}</span>
                    <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {doctor.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {doctor.experience} experience
                    </div>
                  </div>

                  <div className="bg-accent/20 rounded-lg p-3">
                    <p className="text-sm font-medium text-foreground mb-1">Specialty:</p>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>

                  <div className={`text-sm px-3 py-2 rounded-lg ${
                    doctor.availability.includes('Today') 
                      ? 'bg-mint/20 text-mint' 
                      : 'bg-pastel-blue/20 text-pastel-blue'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        doctor.availability.includes('Today') ? 'bg-mint' : 'bg-pastel-blue'
                      }`} />
                      {doctor.availability}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8"
          >
            View All Professionals
          </Button>
        </div>
      </div>
    </section>
  );
};