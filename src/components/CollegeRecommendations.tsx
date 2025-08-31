import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Trophy, Star } from "lucide-react";

interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  rating: number;
  fees: string;
  cutoff: string;
  placement: string;
  courses: string[];
  match: number;
}

interface CollegeRecommendationsProps {
  recommendations: College[];
}

const CollegeRecommendations = ({ recommendations }: CollegeRecommendationsProps) => {
  const getMatchColor = (match: number) => {
    if (match >= 90) return "bg-success text-success-foreground";
    if (match >= 75) return "bg-gradient-accent text-accent-foreground";
    return "bg-secondary text-secondary-foreground";
  };

  const getMatchText = (match: number) => {
    if (match >= 90) return "Excellent Match";
    if (match >= 75) return "Good Match";
    return "Fair Match";
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
          Your College Recommendations
        </h2>
        <p className="text-muted-foreground">
          Based on your academic performance and preferences
        </p>
      </div>

      <div className="grid gap-6">
        {recommendations.map((college) => (
          <Card key={college.id} className="bg-gradient-card shadow-medium border-0 hover:shadow-strong transition-all duration-300 hover:scale-[1.01]">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {college.name}
                  </CardTitle>
                  <CardDescription className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {college.location}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Badge className={`mb-2 ${getMatchColor(college.match)}`}>
                    {college.match}% {getMatchText(college.match)}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 mr-1 fill-current text-accent" />
                    {college.rating}/5
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Type</p>
                  <p className="text-sm text-foreground">{college.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Annual Fees</p>
                  <p className="text-sm text-foreground font-semibold">{college.fees}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Cutoff Percentile</p>
                  <p className="text-sm text-foreground">{college.cutoff}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2 text-accent" />
                  <span className="text-sm font-medium">Average Placement</span>
                </div>
                <p className="text-sm text-foreground ml-6">{college.placement}</p>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-medium">Popular Courses</span>
                </div>
                <div className="flex flex-wrap gap-2 ml-6">
                  {college.courses.map((course, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollegeRecommendations;