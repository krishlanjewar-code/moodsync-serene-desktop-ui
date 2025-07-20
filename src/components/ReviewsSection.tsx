import React from 'react';
import { Star, Shield, Heart } from 'lucide-react';

const expertReviews = [
  {
    id: 1,
    name: "Dr. Lisa Meera",
    credentials: "Clinical Psychologist, PhD",
    image: "/api/placeholder/80/80",
    review: "An intelligent step toward daily emotional hygiene. MoodSync's approach to keystroke analysis represents a breakthrough in passive mental health monitoring.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Dr. Robert Thompson",
    credentials: "Psychiatrist, MD",
    image: "/api/placeholder/80/80",
    review: "The privacy-first approach combined with scientific rigor makes this platform uniquely trustworthy for sensitive mental health data.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    credentials: "Behavioral Therapist, PhD",
    image: "/api/placeholder/80/80",
    review: "MoodSync bridges the gap between professional therapy sessions by providing continuous, gentle support. The micro-interventions are particularly well-designed.",
    rating: 5,
    verified: true
  }
];

const userReviews = [
  {
    id: 1,
    name: "Sarah M.",
    review: "It helped me understand my burnout symptoms early! The typing analysis caught patterns I never noticed.",
    rating: 5,
    days: 42
  },
  {
    id: 2,
    name: "Michael R.",
    review: "The mood refresher quiz became part of my daily routine. It's like having a gentle check-in with myself.",
    rating: 5,
    days: 89
  },
  {
    id: 3,
    name: "Emily K.",
    review: "Finally, a mental health app that doesn't feel invasive. The privacy features give me complete peace of mind.",
    rating: 5,
    days: 156
  },
  {
    id: 4,
    name: "David L.",
    review: "The AI suggestions are surprisingly helpful and never feel pushy. Just the right amount of support when I need it.",
    rating: 5,
    days: 73
  },
  {
    id: 5,
    name: "Amanda T.",
    review: "Love how it connects my daily habits to my mood patterns. The dashboard insights are eye-opening!",
    rating: 4,
    days: 127
  },
  {
    id: 6,
    name: "James W.",
    review: "Been using it for stress management during work. The micro-interventions during busy days are perfect.",
    rating: 5,
    days: 201
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-muted-foreground/30'
        }`}
      />
    ))}
  </div>
);

export const ReviewsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What People Are{' '}
            <span className="bg-calm-gradient bg-clip-text text-transparent">
              Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by mental health professionals and loved by users worldwide. 
            See how MoodSync is making a difference in emotional wellness.
          </p>
        </div>

        {/* Expert Reviews Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-mint-light rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-mint" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Expert Reviews</h3>
              <p className="text-muted-foreground">Validated by mental health professionals</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {expertReviews.map((expert) => (
              <div
                key={expert.id}
                className="bg-card rounded-2xl shadow-soft border border-mint/20 p-8 hover:shadow-gentle transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-mint-light rounded-full overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-mint/20 to-pastel-blue/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-mint">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{expert.name}</h4>
                      {expert.verified && (
                        <div className="w-5 h-5 bg-mint rounded-full flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{expert.credentials}</p>
                    <div className="flex items-center gap-2">
                      <StarRating rating={expert.rating} />
                      <span className="text-xs bg-mint/20 text-mint px-2 py-1 rounded-full font-medium">
                        Mental Health Expert
                      </span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-foreground leading-relaxed italic">
                  "{expert.review}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* User Reviews Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-lavender-light rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-lavender" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">User Experiences</h3>
              <p className="text-muted-foreground">Real stories from our community</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userReviews.map((user) => (
              <div
                key={user.id}
                className="bg-card rounded-xl p-6 shadow-gentle border border-lavender/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-lavender-light rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-lavender">
                        {user.name[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{user.name}</h4>
                      <p className="text-xs text-muted-foreground">{user.days} days with MoodSync</p>
                    </div>
                  </div>
                  <StarRating rating={user.rating} />
                </div>
                
                <blockquote className="text-foreground leading-relaxed">
                  "{user.review}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-lavender/5 to-mint/5 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Mental Health Professionals</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};