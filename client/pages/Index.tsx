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
  School,
  Clock,
  DollarSign,
  Users,
  Calendar,
  MessageCircle,
  Shield,
  MapPin,
  Check,
} from "lucide-react";

const schoolData = {
  school1: {
    name: "Little Stars Preschool",
    subtitle: "Est 2008 Austin • Montessori",
    generalInfo: {
      address: "123 Main Street, Sample City",
      type: "Preschool",
      grades: "Pre-K",
      gender: "Co-ed",
      language: "English",
    },
    schedule: {
      fullTime: "Yes (Available)",
      partTime: "Yes (Available)",
    },
    tuition: {
      fullTimeMonthly: "$800",
      partTimeMonthly: "$500",
      additionalFees: "Registration $100, Materials $50",
      siblingDiscount: "10%",
      annualIncrease: "5%",
      refundPolicy: "Yes",
    },
    staffCurriculum: {
      teacherRatio: "1:8 (preschool)",
      curriculum: "Montessori",
      extracurriculars: ["Music", "Art", "Sports"],
      specialPrograms: ["Language Immersion"],
      accreditations: "National Early Learning Association",
    },
    admissions: {
      applicationFee: "$50",
      enrollment: "Open",
      waitingList: "Yes",
      priority: "Siblings, Staff",
    },
    reviews: {
      rating: 4.5,
      comment: "Great teachers, small class sizes, and a very caring environment for young kids.",
    },
    safety: {
      securityCameras: "Yes",
      emergencyDrills: "Regular",
      medicalStaff: "Yes",
      pickupPolicy: "Strict ID Check",
      covidProtocols: "Updated",
      nutFreePolicy: "Enforced",
    },
  },
  school2: {
    name: "Sunshine Academy",
    subtitle: "Est 2006 Austin • Reggio Emilia",
    generalInfo: {
      address: "456 Another Street, Sample City",
      type: "Preschool",
      grades: "Pre-K",
      gender: "Co-ed",
      language: "English",
    },
    schedule: {
      fullTime: "Yes (Available)",
      partTime: "Yes (Available)",
    },
    tuition: {
      fullTimeMonthly: "$750",
      partTimeMonthly: "$450",
      additionalFees: "Registration $120, Materials $40",
      siblingDiscount: "8%",
      annualIncrease: "5%",
      refundPolicy: "Yes",
    },
    staffCurriculum: {
      teacherRatio: "1:10 (preschool)",
      curriculum: "Reggio Emilia, Montessori (hybrid)",
      extracurriculars: ["Music", "Dance", "Sports"],
      specialPrograms: ["STEM Focus"],
      accreditations: "Regional Early Education Council",
    },
    admissions: {
      applicationFee: "$60",
      enrollment: "Open",
      waitingList: "Yes",
      priority: "Siblings, Alumni",
    },
    reviews: {
      rating: 4.2,
      comment: "Engaging curriculum and strong parent-teacher communication. Facilities could be improved.",
    },
    safety: {
      securityCameras: "Yes",
      emergencyDrills: "Regular",
      medicalStaff: "Yes",
      pickupPolicy: "Strict ID Check",
      covidProtocols: "Updated",
      nutFreePolicy: "Enforced",
    },
  },
};

export default function Index() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General Information", icon: School },
    { id: "schedule", label: "Schedule & Timetable", icon: Clock },
    { id: "tuition", label: "Tuition & Fees", icon: DollarSign },
    { id: "staff", label: "Staff & Curriculum", icon: Users },
    { id: "admissions", label: "Admissions & Waiting List", icon: Calendar },
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
          {activeTab === "general" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <School className="h-4 w-4 mr-2" />
                General Information
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Address:</span>
                  <span>{school.generalInfo.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{school.generalInfo.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grades:</span>
                  <span>{school.generalInfo.grades}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gender:</span>
                  <span>{school.generalInfo.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <span>{school.generalInfo.language}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <Clock className="h-4 w-4 mr-2" />
                Schedule & Timetable
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Full Time:</span>
                  <span>{school.schedule.fullTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Part Time:</span>
                  <span>{school.schedule.partTime}</span>
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
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    Full Time Monthly:
                  </span>
                  <span className={`font-semibold ${colorClasses.accent}`}>
                    {school.tuition.fullTimeMonthly}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    Part Time Monthly:
                  </span>
                  <span className="font-semibold">
                    {school.tuition.partTimeMonthly}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Additional Fees:</span>
                  <span>{school.tuition.additionalFees}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Sibling Discount:</span>
                  <span>{school.tuition.siblingDiscount}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Annual Increase:</span>
                  <span>{school.tuition.annualIncrease}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Refund Policy:</span>
                  <span>{school.tuition.refundPolicy}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "staff" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <Users className="h-4 w-4 mr-2" />
                Staff & Curriculum
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Teacher Ratio:</span>
                  <span>{school.staffCurriculum.teacherRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Curriculum:</span>
                  <span>{school.staffCurriculum.curriculum}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accreditations:</span>
                  <span>{school.staffCurriculum.accreditations}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    Extracurriculars:
                  </span>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {school.staffCurriculum.extracurriculars.map(
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
                <div>
                  <span className="text-muted-foreground">Special Programs:</span>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {school.staffCurriculum.specialPrograms.map(
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
            </div>
          )}

          {activeTab === "admissions" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Admissions & Waiting List
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Application Fee:</span>
                  <span>{school.admissions.applicationFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enrollment:</span>
                  <span className="font-semibold text-green-600">
                    {school.admissions.enrollment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Waiting List:</span>
                  <span>{school.admissions.waitingList}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Priority:</span>
                  <span>{school.admissions.priority}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Reviews & Feedback
              </h4>
              <div className={`border-l-4 ${isSchool1 ? "border-purple-200" : "border-violet-200"} pl-4`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(school.reviews.rating)}
                  </div>
                  <span className={`text-lg font-bold ${colorClasses.accent}`}>
                    {school.reviews.rating}/5
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {school.reviews.comment}
                </p>
              </div>
            </div>
          )}

          {activeTab === "safety" && (
            <div>
              <h4
                className={`font-semibold ${colorClasses.accent} mb-3 flex items-center`}
              >
                <Shield className="h-4 w-4 mr-2" />
                Safety & Policies
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Security Cameras:</span>
                  <span>{school.safety.securityCameras}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergency Drills:</span>
                  <span>{school.safety.emergencyDrills}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Medical Staff:</span>
                  <span>{school.safety.medicalStaff}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pick-Up Policy:</span>
                  <span>{school.safety.pickupPolicy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">COVID Protocols:</span>
                  <span>{school.safety.covidProtocols}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nut-Free Policy:</span>
                  <span>{school.safety.nutFreePolicy}</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {renderSchoolCard(schoolData.school1, "school1")}
          {renderSchoolCard(schoolData.school2, "school2")}
        </div>

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
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}