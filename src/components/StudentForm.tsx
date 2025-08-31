import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StudentData {
  name: string;
  email: string;
  state: string;
  stream: string;
  marks10th: string;
  marks12th: string;
  percentile: string;
}

interface StudentFormProps {
  onSubmit: (data: StudentData) => void;
}

const StudentForm = ({ onSubmit }: StudentFormProps) => {
  const [formData, setFormData] = useState<StudentData>({
    name: "",
    email: "",
    state: "",
    stream: "",
    marks10th: "",
    marks12th: "",
    percentile: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof StudentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card shadow-medium border-0">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Student Information
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Fill in your details to get personalized college recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="transition-smooth focus:shadow-soft"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="transition-smooth focus:shadow-soft"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state" className="text-sm font-medium">State</Label>
              <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger className="transition-smooth focus:shadow-soft">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stream" className="text-sm font-medium">Stream</Label>
              <Select value={formData.stream} onValueChange={(value) => handleInputChange("stream", value)}>
                <SelectTrigger className="transition-smooth focus:shadow-soft">
                  <SelectValue placeholder="Select your stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="science">Science (PCM/PCB)</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="arts">Arts/Humanities</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Academic Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="marks10th" className="text-sm font-medium">10th Grade Percentage</Label>
                <Input
                  id="marks10th"
                  type="number"
                  placeholder="85"
                  min="0"
                  max="100"
                  value={formData.marks10th}
                  onChange={(e) => handleInputChange("marks10th", e.target.value)}
                  className="transition-smooth focus:shadow-soft"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marks12th" className="text-sm font-medium">12th Grade Percentage</Label>
                <Input
                  id="marks12th"
                  type="number"
                  placeholder="90"
                  min="0"
                  max="100"
                  value={formData.marks12th}
                  onChange={(e) => handleInputChange("marks12th", e.target.value)}
                  className="transition-smooth focus:shadow-soft"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="percentile" className="text-sm font-medium">Entrance Exam Percentile</Label>
                <Input
                  id="percentile"
                  type="number"
                  placeholder="95"
                  min="0"
                  max="100"
                  value={formData.percentile}
                  onChange={(e) => handleInputChange("percentile", e.target.value)}
                  className="transition-smooth focus:shadow-soft"
                  required
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-hero hover:shadow-medium transition-all duration-300 hover:scale-[1.02] text-lg py-6"
          >
            Get College Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentForm;