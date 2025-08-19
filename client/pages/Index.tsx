import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Mail,
  Plus,
  ArrowLeftRight,
  Star,
  Clock,
  Users,
  DollarSign,
  School,
  Shield,
  Award,
  MessageCircle,
  MapPin,
  Phone,
  Calendar,
  BookOpen,
  GraduationCap,
  Heart,
  Check,
  X,
} from "lucide-react";

const schoolData = {
  school1: {
    name: "Little Stars Preschool",
    subtitle: "Est 2008 Austin • Montessori",
    basicInfo: {
      location: "Austin, TX",
      established: "2008",
      type: "Montessori",
      ageRange: "2-6 years",
      enrollment: "120 students",
      classSize: "12 students",
      teacherRatio: "1:6",
      hours: "7:30 AM - 6:00 PM",
      days: "Monday - Friday",
    },
    ratings: {
      overall: 4.8,
      reviews: 156,
    },
    tuition: {
      fullTimeMonthly: "$1,845",
      partTimeMonthly: "$1,245",
      registration: "$250",
      materials: "$100",
      fieldTrips: "$75",
      afterCare: "$15/day",
      dropInRate: "$45/day",
    },
    academics: {
      curriculum: "Montessori Method",
      teacherCredentials: "Montessori certified",
      specialPrograms: [
        "Music & Movement",
        "Spanish Language",
        "Art & Creativity",
        "Nature Studies",
        "STEM Activities",
      ],
      assessment: "Portfolio-based documentation",
      ageGroups: "Mixed-age classrooms 2.5-6 years",
    },
    staff: {
      headTeacher: "Maria Santos, M.Ed Montessori",
      assistantTeachers: "3 certified assistants",
      specialistTeachers: "Music, Art, Spanish teachers",
      adminStaff: "Director, Admin coordinator",
      totalStaff: "8 staff members",
      experience: "Average 8 years experience",
    },
    admissions: {
      openings: "3 spaces available",
      waitlist: "12 families",
      tourAvailability: "Tuesdays & Thursdays 10am",
      applicationDeadline: "Rolling admissions",
      startDate: "Any time during school year",
      requirements: "Potty trained preferred",
      ageRequirement: "2.5 years minimum",
    },
    safety: {
      securitySystem: "Keycard entry system",
      backgroundChecks: "FBI background checks all staff",
      emergencyPlan: "Monthly emergency drills",
      healthPolicy: "Strict illness policy",
      staffTraining: "CPR/First Aid certified",
      playgroundSafety: "Age-appropriate equipment",
      cameras: "Security cameras in all areas",
      pickup: "Authorized pickup list required",
    },
    reviews: [
      {
        author: "Sarah Johnson",
        rating: 5,
        date: "2 months ago",
        text: "Excellent Montessori program! My daughter has flourished here. The mixed-age classroom environment has really helped her develop independence and leadership skills. Teachers are so patient and nurturing.",
      },
      {
        author: "Mike Chen",
        rating: 4,
        date: "4 months ago",
        text: "Great facilities and outdoor garden space. Teachers are very experienced with Montessori method. Communication with parents could be improved but overall very satisfied with our experience.",
      },
      {
        author: "Lisa Rodriguez",
        rating: 5,
        date: "6 months ago",
        text: "The Montessori approach has been perfect for our son. He's learned to love learning and the practical life activities have made him so independent at home. Highly recommend!",
      },
    ],
    contact: {
      phone: "(512) 555-0123",
      email: "info@littlestarsmontessori.com",
      website: "www.littlestarsmontessori.com",
      address: "2847 Oak Hills Dr, Austin, TX 78745",
    },
  },
  school2: {
    name: "Sunshine Academy",
    subtitle: "Est 2006 Austin • Reggio Emilia",
    basicInfo: {
      location: "Austin, TX",
      established: "2006",
      type: "Reggio Emilia",
      ageRange: "1.5-5 years",
      enrollment: "180 students",
      classSize: "15 students",
      teacherRatio: "1:8",
      hours: "7:00 AM - 6:30 PM",
      days: "Monday - Friday",
    },
    ratings: {
      overall: 4.6,
      reviews: 203,
    },
    tuition: {
      fullTimeMonthly: "$1,695",
      partTimeMonthly: "$1,095",
      registration: "$300",
      materials: "$125",
      fieldTrips: "$50",
      afterCare: "$12/day",
      dropInRate: "$50/day",
    },
    academics: {
      curriculum: "Reggio Emilia Approach",
      teacherCredentials: "Early Childhood Education degrees",
      specialPrograms: [
        "Art Atelier Studio",
        "STEM Laboratory",
        "Mandarin Immersion",
        "Music & Drama",
        "Outdoor Education",
      ],
      assessment: "Project documentation & portfolios",
      ageGroups: "Toddlers (1.5-3), Preschool (3-5)",
    },
    staff: {
      headTeacher: "Dr. Emma Thompson, Ph.D ECE",
      assistantTeachers: "5 certified teachers",
      specialistTeachers: "Art, Music, Mandarin, STEM specialists",
      adminStaff: "Director, Curriculum coordinator",
      totalStaff: "12 staff members",
      experience: "Average 6 years experience",
    },
    admissions: {
      openings: "7 spaces available",
      waitlist: "8 families",
      tourAvailability: "Mondays & Wednesdays 9:30am",
      applicationDeadline: "March 1st for fall enrollment",
      startDate: "August or January",
      requirements: "Age-appropriate readiness",
      ageRequirement: "18 months minimum",
    },
    safety: {
      securitySystem: "Biometric access control",
      backgroundChecks: "Comprehensive background screening",
      emergencyPlan: "Quarterly emergency procedures",
      healthPolicy: "On-site registered nurse",
      staffTraining: "Pediatric first aid certified",
      playgroundSafety: "Safety certified playground equipment",
      cameras: "24/7 monitored security system",
      pickup: "Photo ID required for pickup",
    },
    reviews: [
      {
        author: "David Kim",
        rating: 5,
        date: "1 month ago",
        text: "Amazing Reggio Emilia approach! The project-based learning and art focus has been incredible for our daughter's creativity and critical thinking. The documentation is beautiful.",
      },
      {
        author: "Amanda Foster",
        rating: 4,
        date: "3 months ago",
        text: "Excellent bilingual program and STEM activities. The facilities are top-notch with the art studio and outdoor learning garden. Teachers are very responsive to our needs.",
      },
      {
        author: "Carlos Mendez",
        rating: 5,
        date: "5 months ago",
        text: "Outstanding teachers who really understand child development. The documentation of learning through photos and projects is wonderful to see our son's progress.",
      },
    ],
    contact: {
      phone: "(512) 555-0456",
      email: "hello@sunshineacademy.edu",
      website: "www.sunshineacademy.edu",
      address: "1234 Riverside Dr, Austin, TX 78704",
    },
  },
};

export default function Index() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: School },
    { id: "academics", label: "Academics & Activities", icon: BookOpen },
    { id: "tuition", label: "Tuition & Fees", icon: DollarSign },
    { id: "staff", label: "Staff & Curriculum", icon: Users },
    { id: "admissions", label: "Admissions & Waitlist", icon: Calendar },
    { id: "reviews", label: "Reviews & Feedback", icon: MessageCircle },
    { id: "safety", label: "Safety & Policies", icon: Shield },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
              ? "fill-yellow-200 text-yellow-400"
              : "text-gray-300"
        }`}
      />
    ));
  };

  const renderSchoolCard = (school: any, schoolKey: string) => {
    const isSchool1 = schoolKey === "school1";
    const colorClasses = isSchool1
      ? {
          header: "from-purple-500 to-violet-600",
          accent: "text-purple-700",
          border: "border-purple-200",
        }
      : {
          header: "from-violet-500 to-indigo-600",
          accent: "text-violet-700",
          border: "border-purple-200",
        };

    return (
      <Card
        className={`bg-white/80 backdrop-blur-sm ${colorClasses.border} hover:shadow-lg transition-all duration-300`}
      >
        <CardHeader
          className={`bg-gradient-to-r ${colorClasses.header} text-white rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{school.name}</CardTitle>
              <p
                className={`${isSchool1 ? "text-purple-100" : "text-violet-100"} text-sm`}
              >
                {school.subtitle}
              </p>
            </div>
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30"
            >
              {isSchool1 ? "Popular Choice" : "Top Rated"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          {activeTab === "overview" && (
            <>
              {/* Basic Information */}
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <School className="h-4 w-4 mr-2" />
                  Basic Information
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{school.basicInfo.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Established:
                      </span>
                      <span>{school.basicInfo.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span>{school.basicInfo.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Age Range:</span>
                      <span>{school.basicInfo.ageRange}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Enrollment:</span>
                      <span>{school.basicInfo.enrollment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Class Size:</span>
                      <span>{school.basicInfo.classSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Teacher Ratio:
                      </span>
                      <span>{school.basicInfo.teacherRatio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hours:</span>
                      <span>{school.basicInfo.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Ratings & Reviews
                </h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(school.ratings.overall)}
                  </div>
                  <span className={`text-2xl font-bold ${colorClasses.accent}`}>
                    {school.ratings.overall}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({school.ratings.reviews} reviews)
                  </span>
                </div>
              </div>
            </>
          )}

          {activeTab === "academics" && (
            <div className="space-y-6">
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Curriculum & Teaching Method
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Approach:</span>
                    <span>{school.academics.curriculum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Teacher Credentials:
                    </span>
                    <span>{school.academics.teacherCredentials}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Assessment:</span>
                    <span>{school.academics.assessment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Age Groups:</span>
                    <span>{school.academics.ageGroups}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`font-semibold ${colorClasses.accent} mb-3`}>
                  Special Programs
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {school.academics.specialPrograms.map(
                    (program: string, index: number) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="justify-start"
                      >
                        <Check className="h-3 w-3 mr-1 text-green-600" />
                        {program}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "tuition" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Tuition & Fees
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    Full-Time Monthly Tuition:
                  </span>
                  <span className={`font-semibold ${colorClasses.accent}`}>
                    {school.tuition.fullTimeMonthly}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    Part-Time Monthly Tuition:
                  </span>
                  <span className="font-semibold">
                    {school.tuition.partTimeMonthly}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    Registration Fee:
                  </span>
                  <span>{school.tuition.registration}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Materials Fee:</span>
                  <span>{school.tuition.materials}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Field Trips:</span>
                  <span>{school.tuition.fieldTrips}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">After Care:</span>
                  <span>{school.tuition.afterCare}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Drop-in Rate:</span>
                  <span>{school.tuition.dropInRate}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "staff" && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Staff & Curriculum
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Head Teacher:</span>
                    <span>{school.staff.headTeacher}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Assistant Teachers:
                    </span>
                    <span>{school.staff.assistantTeachers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Specialist Teachers:
                    </span>
                    <span>{school.staff.specialistTeachers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Admin Staff:</span>
                    <span>{school.staff.adminStaff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Staff:</span>
                    <span>{school.staff.totalStaff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>{school.staff.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "admissions" && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Admissions & Waitlist
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Current Openings:
                    </span>
                    <span className="font-semibold text-green-600">
                      {school.admissions.openings}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Waitlist:</span>
                    <span>{school.admissions.waitlist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Tour Availability:
                    </span>
                    <span>{school.admissions.tourAvailability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Application Deadline:
                    </span>
                    <span>{school.admissions.applicationDeadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start Date:</span>
                    <span>{school.admissions.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Requirements:</span>
                    <span>{school.admissions.requirements}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minimum Age:</span>
                    <span>{school.admissions.ageRequirement}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Safety & Policies
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Security System:
                    </span>
                    <span>{school.safety.securitySystem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Background Checks:
                    </span>
                    <span>{school.safety.backgroundChecks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Emergency Plan:
                    </span>
                    <span>{school.safety.emergencyPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Health Policy:
                    </span>
                    <span>{school.safety.healthPolicy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Staff Training:
                    </span>
                    <span>{school.safety.staffTraining}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Playground Safety:
                    </span>
                    <span>{school.safety.playgroundSafety}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cameras:</span>
                    <span>{school.safety.cameras}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Pickup Policy:
                    </span>
                    <span>{school.safety.pickup}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Reviews & Feedback
                </h4>
                <div className="space-y-4">
                  {school.reviews.map((review: any, index: number) => (
                    <div
                      key={index}
                      className={`border-l-4 ${isSchool1 ? "border-purple-200" : "border-violet-200"} pl-4`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm font-medium">
                            {review.author}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <img
                src="/logos/noBgColor.png"
                alt="Logo"
                className="w-[190px]"
              />
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add School
              </Button>
              <Button variant="outline" size="sm">
                <ArrowLeftRight className="h-4 w-4 mr-2" />
                Reset Comparison
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Email Comparison
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-1 bg-white/60 backdrop-blur-sm p-1 rounded-xl border border-purple-100 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-purple-700 border border-purple-200"
                    : "text-muted-foreground hover:text-purple-600"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {renderSchoolCard(schoolData.school1, "school1")}
          {renderSchoolCard(schoolData.school2, "school2")}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
          >
            Schedule Tour
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            Contact Adviser
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}
