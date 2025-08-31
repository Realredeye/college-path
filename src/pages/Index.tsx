import { useState } from "react";
import { Button } from "@/components/ui/button";
import StudentForm from "@/components/StudentForm";
import CollegeRecommendations from "@/components/CollegeRecommendations";
import { generateRecommendations } from "@/utils/collegeAlgorithm";
import { GraduationCap, Target, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

interface StudentData {
  name: string;
  email: string;
  state: string;
  stream: string;
  marks10th: string;
  marks12th: string;
  percentile: string;
}

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [studentName, setStudentName] = useState("");

  const handleFormSubmit = (data: StudentData) => {
    const results = generateRecommendations(data);
    setRecommendations(results);
    setStudentName(data.name);
  };

  const resetToHome = () => {
    setShowForm(false);
    setRecommendations(null);
    setStudentName("");
  };

  if (recommendations) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                CollegePath
              </span>
            </div>
            <Button variant="outline" onClick={resetToHome}>
              Start Over
            </Button>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-foreground">
              Welcome, {studentName}! 
            </h1>
            <p className="text-muted-foreground">
              Here are your personalized college recommendations
            </p>
          </div>
          <CollegeRecommendations recommendations={recommendations} />
        </main>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                CollegePath
              </span>
            </div>
            <Button variant="ghost" onClick={() => setShowForm(false)}>
              Back to Home
            </Button>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <StudentForm onSubmit={handleFormSubmit} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CollegePath
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Find Your Perfect
                  <span className="block bg-gradient-hero bg-clip-text text-transparent">
                    College Match
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Get personalized college recommendations based on your academic performance, 
                  preferences, and career goals. Start your journey to success today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => setShowForm(true)}
                  className="text-lg px-8 py-6 transition-spring hover:scale-105"
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 transition-smooth hover:shadow-soft"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 scale-110"></div>
              <img
                src={heroImage}
                alt="Students achieving their educational goals"
                className="relative rounded-3xl shadow-strong w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose CollegePath?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our intelligent matching system considers multiple factors to provide 
              you with the most relevant college recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Personalized Matching</h3>
              <p className="text-muted-foreground">
                Advanced algorithm considers your marks, percentile, and preferences
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Success Tracking</h3>
              <p className="text-muted-foreground">
                Get insights on placement records and career outcomes
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Recommendations backed by education experts and data analysis
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Database</h3>
              <p className="text-muted-foreground">
                Access to thousands of colleges across India with detailed information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Find Your Dream College?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students who have found their perfect college match 
              through our intelligent recommendation system.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => setShowForm(true)}
              className="text-lg px-12 py-6 transition-spring hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-semibold bg-gradient-hero bg-clip-text text-transparent">
                CollegePath
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CollegePath. Empowering students to find their perfect college match.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;