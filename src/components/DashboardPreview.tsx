import React from 'react';
import { TrendingUp, Heart, Calendar, Target, BarChart3, Activity } from 'lucide-react';

const mockData = {
  moodScore: 78,
  weeklyTrend: [65, 70, 68, 75, 80, 78, 82],
  insights: [
    { icon: Heart, text: "Journaling helped you improve mood 3/5 days last week", positive: true },
    { icon: Activity, text: "Exercise sessions correlated with better sleep quality", positive: true },
    { icon: Calendar, text: "Tuesday tends to be your most challenging day", positive: false }
  ],
  activities: [
    { name: "Morning meditation", completed: 5, total: 7 },
    { name: "Gratitude journaling", completed: 4, total: 7 },
    { name: "Evening reflection", completed: 6, total: 7 }
  ]
};

export const DashboardPreview = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Personal{' '}
            <span className="bg-calm-gradient bg-clip-text text-transparent">
              Mood Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your emotional journey with beautiful visualizations and actionable insights 
            that help you understand patterns and celebrate progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Mood Score */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl shadow-soft border border-border/50 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold text-foreground">Weekly Mood Trend</h3>
                <div className="flex items-center gap-2 text-mint">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">+12% this week</span>
                </div>
              </div>

              {/* Mock Chart */}
              <div className="relative h-64 mb-8">
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {mockData.weeklyTrend.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-8 bg-gradient-to-t from-primary to-lavender rounded-t-lg mb-2 transition-all duration-300 hover:scale-110"
                        style={{ height: `${(value / 100) * 200}px` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Score */}
              <div className="text-center bg-gradient-to-r from-primary/5 to-lavender/5 rounded-xl p-6">
                <div className="text-5xl font-bold text-primary mb-2">{mockData.moodScore}</div>
                <p className="text-muted-foreground">Your current mood score</p>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            {/* Emotional Score Meter */}
            <div className="bg-card rounded-2xl shadow-soft border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Emotional Balance</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Positivity', value: 85, color: 'mint' },
                  { label: 'Energy', value: 72, color: 'pastel-blue' },
                  { label: 'Calmness', value: 90, color: 'lavender' }
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{metric.label}</span>
                      <span className="text-muted-foreground">{metric.value}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          metric.color === 'mint' ? 'bg-mint' :
                          metric.color === 'pastel-blue' ? 'bg-pastel-blue' :
                          'bg-lavender'
                        }`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Progress */}
            <div className="bg-card rounded-2xl shadow-soft border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Weekly Goals</h3>
              </div>
              
              <div className="space-y-4">
                {mockData.activities.map((activity, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">{activity.name}</span>
                      <span className="text-muted-foreground">{activity.completed}/{activity.total}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(activity.completed / activity.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Weekly Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.insights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    insight.positive
                      ? 'bg-mint-light/20 border-mint/30 hover:border-mint/50'
                      : 'bg-lavender-light/20 border-lavender/30 hover:border-lavender/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    insight.positive ? 'bg-mint text-white' : 'bg-lavender text-white'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <p className="text-foreground leading-relaxed">{insight.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};