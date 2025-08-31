interface StudentData {
  name: string;
  email: string;
  state: string;
  stream: string;
  marks10th: string;
  marks12th: string;
  percentile: string;
}

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
  minPercentile: number;
  preferredStates: string[];
  streams: string[];
}

const collegeDatabase: Omit<College, 'match'>[] = [
  {
    id: "1",
    name: "Indian Institute of Technology, Delhi",
    location: "New Delhi",
    type: "Government",
    rating: 4.8,
    fees: "₹2.5 Lakhs/year",
    cutoff: "99.5+",
    placement: "₹25-50 LPA",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    minPercentile: 99,
    preferredStates: ["delhi", "punjab", "haryana"],
    streams: ["science"]
  },
  {
    id: "2",
    name: "Shri Ram College of Commerce",
    location: "New Delhi",
    type: "Government",
    rating: 4.6,
    fees: "₹50,000/year",
    cutoff: "98+",
    placement: "₹8-15 LPA",
    courses: ["Commerce", "Economics", "Business Administration"],
    minPercentile: 95,
    preferredStates: ["delhi", "punjab", "haryana"],
    streams: ["commerce"]
  },
  {
    id: "3",
    name: "Lady Shri Ram College",
    location: "New Delhi",
    type: "Government",
    rating: 4.7,
    fees: "₹40,000/year",
    cutoff: "97+",
    placement: "₹6-12 LPA",
    courses: ["Psychology", "English", "Political Science"],
    minPercentile: 94,
    preferredStates: ["delhi", "punjab", "haryana"],
    streams: ["arts"]
  },
  {
    id: "4",
    name: "BITS Pilani",
    location: "Rajasthan",
    type: "Private",
    rating: 4.5,
    fees: "₹5.5 Lakhs/year",
    cutoff: "95+",
    placement: "₹15-30 LPA",
    courses: ["Computer Science", "Electronics", "Chemical Engineering"],
    minPercentile: 90,
    preferredStates: ["rajasthan", "haryana", "delhi"],
    streams: ["science"]
  },
  {
    id: "5",
    name: "Loyola College",
    location: "Chennai, Tamil Nadu",
    type: "Private",
    rating: 4.3,
    fees: "₹1.2 Lakhs/year",
    cutoff: "88+",
    placement: "₹5-10 LPA",
    courses: ["Commerce", "Computer Science", "Mathematics"],
    minPercentile: 85,
    preferredStates: ["tamil-nadu", "karnataka"],
    streams: ["science", "commerce"]
  },
  {
    id: "6",
    name: "St. Xavier's College, Mumbai",
    location: "Mumbai, Maharashtra",
    type: "Private",
    rating: 4.4,
    fees: "₹80,000/year",
    cutoff: "90+",
    placement: "₹6-12 LPA",
    courses: ["Arts", "Science", "Commerce"],
    minPercentile: 88,
    preferredStates: ["maharashtra", "gujarat"],
    streams: ["science", "commerce", "arts"]
  },
  {
    id: "7",
    name: "Jadavpur University",
    location: "Kolkata, West Bengal",
    type: "Government",
    rating: 4.5,
    fees: "₹1.5 Lakhs/year",
    cutoff: "92+",
    placement: "₹8-18 LPA",
    courses: ["Engineering", "Arts", "Science"],
    minPercentile: 87,
    preferredStates: ["west-bengal"],
    streams: ["science", "arts"]
  },
  {
    id: "8",
    name: "Christ University",
    location: "Bangalore, Karnataka",
    type: "Private",
    rating: 4.2,
    fees: "₹2.5 Lakhs/year",
    cutoff: "85+",
    placement: "₹4-8 LPA",
    courses: ["Management", "Engineering", "Humanities"],
    minPercentile: 80,
    preferredStates: ["karnataka", "tamil-nadu"],
    streams: ["science", "commerce", "arts"]
  }
];

export const generateRecommendations = (studentData: StudentData): College[] => {
  const percentile = parseFloat(studentData.percentile);
  const marks12th = parseFloat(studentData.marks12th);
  const marks10th = parseFloat(studentData.marks10th);

  return collegeDatabase
    .filter(college => {
      // Filter by stream
      return college.streams.includes(studentData.stream);
    })
    .map(college => {
      let matchScore = 0;

      // Percentile match (50% weightage)
      if (percentile >= college.minPercentile) {
        const percentileScore = Math.min(100, (percentile / college.minPercentile) * 50);
        matchScore += percentileScore;
      } else {
        matchScore += (percentile / college.minPercentile) * 40; // Partial credit
      }

      // 12th marks contribution (25% weightage)
      const marksScore = Math.min(25, (marks12th / 100) * 25);
      matchScore += marksScore;

      // State preference (15% weightage)
      if (college.preferredStates.includes(studentData.state)) {
        matchScore += 15;
      } else {
        matchScore += 7; // Partial credit for other states
      }

      // Consistency bonus (10% weightage)
      const consistency = Math.abs(marks12th - marks10th) <= 5 ? 10 : 5;
      matchScore += consistency;

      return {
        ...college,
        match: Math.round(Math.min(100, matchScore))
      };
    })
    .sort((a, b) => b.match - a.match)
    .slice(0, 6); // Return top 6 recommendations
};