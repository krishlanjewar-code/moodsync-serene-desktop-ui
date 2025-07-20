import React, { useState } from 'react';
import { ChevronRight, RefreshCw, Smile, Heart, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Question {
  id: number;
  text: string;
  options: { value: number; label: string; emoji: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How would you describe your energy level today?",
    options: [
      { value: 1, label: "Very low", emoji: "😴" },
      { value: 2, label: "Somewhat low", emoji: "😌" },
      { value: 3, label: "Moderate", emoji: "🙂" },
      { value: 4, label: "Good", emoji: "😊" },
      { value: 5, label: "Very high", emoji: "🤩" }
    ]
  },
  {
    id: 2,
    text: "How has your sleep quality been recently?",
    options: [
      { value: 1, label: "Very poor", emoji: "😵" },
      { value: 2, label: "Poor", emoji: "😪" },
      { value: 3, label: "Okay", emoji: "😐" },
      { value: 4, label: "Good", emoji: "😌" },
      { value: 5, label: "Excellent", emoji: "😴" }
    ]
  },
  {
    id: 3,
    text: "How connected do you feel to others right now?",
    options: [
      { value: 1, label: "Very isolated", emoji: "😔" },
      { value: 2, label: "Somewhat lonely", emoji: "🙁" },
      { value: 3, label: "Neutral", emoji: "😐" },
      { value: 4, label: "Connected", emoji: "🙂" },
      { value: 5, label: "Very connected", emoji: "🥰" }
    ]
  },
  {
    id: 4,
    text: "How optimistic do you feel about the near future?",
    options: [
      { value: 1, label: "Very pessimistic", emoji: "😰" },
      { value: 2, label: "Somewhat worried", emoji: "😟" },
      { value: 3, label: "Uncertain", emoji: "😐" },
      { value: 4, label: "Hopeful", emoji: "😊" },
      { value: 5, label: "Very optimistic", emoji: "😃" }
    ]
  },
  {
    id: 5,
    text: "How would you rate your stress levels today?",
    options: [
      { value: 5, label: "Very high", emoji: "😫" },
      { value: 4, label: "High", emoji: "😰" },
      { value: 3, label: "Moderate", emoji: "😐" },
      { value: 2, label: "Low", emoji: "😌" },
      { value: 1, label: "Very low", emoji: "😎" }
    ]
  }
];

const getMoodResult = (score: number) => {
  if (score >= 20) {
    return {
      mood: "Flourishing",
      emoji: "🌟",
      color: "mint",
      description: "You're in a great emotional state! Your wellbeing indicators are strong.",
      suggestions: [
        "Keep up your positive routines and self-care practices",
        "Consider sharing your positive energy with others who might need support"
      ]
    };
  } else if (score >= 15) {
    return {
      mood: "Balanced",
      emoji: "🌸",
      color: "pastel-blue",
      description: "You're doing well overall with some areas that could use attention.",
      suggestions: [
        "Try incorporating 10 minutes of mindfulness into your daily routine",
        "Connect with a friend or loved one today"
      ]
    };
  } else if (score >= 10) {
    return {
      mood: "Adjusting",
      emoji: "🌱",
      color: "lavender",
      description: "You're navigating some challenges but showing resilience.",
      suggestions: [
        "Practice deep breathing exercises when feeling overwhelmed",
        "Consider gentle physical activity like a walk in nature"
      ]
    };
  } else {
    return {
      mood: "Needs Support",
      emoji: "🤗",
      color: "lavender",
      description: "It seems like you're going through a difficult time. That's okay.",
      suggestions: [
        "Reach out to a trusted friend, family member, or mental health professional",
        "Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste"
      ]
    };
  }
};

export const MoodRefresherQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (value: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setSelectedOption(null);
  };

  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  const result = getMoodResult(totalScore);

  if (isComplete) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-background to-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-soft border border-border/50 p-12 text-center">
            <div className="text-6xl mb-6">{result.emoji}</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Current Mood: <span className="text-primary">{result.mood}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {result.description}
            </p>

            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Personalized Suggestions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {result.suggestions.map((suggestion, index) => (
                  <div key={index} className="bg-accent/20 rounded-xl p-6 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {index === 0 ? <Heart className="w-4 h-4 text-primary-foreground" /> : <Sun className="w-4 h-4 text-primary-foreground" />}
                      </div>
                      <p className="text-foreground leading-relaxed">{suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Take Quiz Again
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Continue to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Not sure how you're feeling?{' '}
            <span className="bg-calm-gradient bg-clip-text text-transparent">
              Try a Mood Refresher
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A quick assessment to understand your current emotional state and get personalized suggestions.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-muted">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-12">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground leading-relaxed">
                {questions[currentQuestion].text}
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] ${
                    selectedOption === option.value
                      ? 'border-primary bg-primary/10 shadow-gentle'
                      : 'border-border hover:border-primary/50 hover:bg-accent/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-lg text-foreground font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                disabled={selectedOption === null}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};