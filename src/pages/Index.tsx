import { Link } from "react-router-dom";
import {
  ChevronRight,
  Waves,
  Recycle,
  Users,
  BookOpen,
  HelpingHand,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 100%), url('/images/image-3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ocean-deep/80 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <img
            src="/images/logo.png"
            alt="iGEM Sea Titans Logo"
            className="mx-auto mb-8 w-48 md:w-64 animate-float"
          />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white font-heading">
            iGEM Sea Titans
          </h1>

          <p className="text-xl md:text-2xl text-sea-100 max-w-3xl mx-auto mb-10">
            Tackling coastal erosion and plastic pollution through innovative
            synthetic biology solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/project"
              className="px-6 py-3 bg-sea-600 text-white rounded-lg font-medium hover:bg-sea-700 transition-colors flex items-center justify-center"
            >
              Our Project <ChevronRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/human-practices"
              className="px-6 py-3 bg-coral-500 text-white rounded-lg font-medium hover:bg-coral-600 transition-colors flex items-center justify-center"
            >
              Human Practices <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="flex justify-center">
            <a
              href="#mission"
              className="text-white hover:text-sea-300 transition-colors animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ocean-deep font-heading">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              We're dedicated to addressing the dual challenges of coastal
              erosion and plastic pollution in Ghana through innovative
              synthetic biology approaches, community engagement, and
              sustainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-1 bg-gradient-to-r from-sea-500 to-sea-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-sea-100 rounded-full flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-sea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ocean-deep">
                  Coastal Protection
                </h3>
                <p className="text-gray-600">
                  Developing innovative solutions to protect Ghana's coastline
                  from severe erosion affecting communities like Keta, Busua,
                  and Ada.
                </p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-1 bg-gradient-to-r from-sea-500 to-sea-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-sea-100 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-sea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ocean-deep">
                  Plastic Remediation
                </h3>
                <p className="text-gray-600">
                  Creating biotechnology solutions to address the 8.2 billion
                  water sachets and other plastic waste contaminating Ghana's
                  waterways and ocean.
                </p>
              </div>
            </div>

            <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-1 bg-gradient-to-r from-sea-500 to-sea-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-sea-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-sea-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ocean-deep">
                  Community Engagement
                </h3>
                <p className="text-gray-600">
                  Working directly with affected communities to develop
                  sustainable, locally-appropriate solutions that address real
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
            Key Focus Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <HelpingHand className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading">
                  Human Practices
                </h3>
              </div>
              <p className="mb-6">
                Our human practices approach integrates stakeholder engagement,
                education, and community collaboration to ensure our solutions
                are relevant, accepted, and sustainable.
              </p>
              <Link
                to="/human-practices"
                className="inline-flex items-center text-sea-200 hover:text-white transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading">
                  Education & Outreach
                </h3>
              </div>
              <p className="mb-6">
                We engage with schools, community groups, and the public to
                raise awareness about marine pollution, coastal erosion, and how
                synthetic biology can offer sustainable solutions.
              </p>
              <Link
                to="/project"
                className="inline-flex items-center text-sea-200 hover:text-white transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading">
                  Awards & Recognition
                </h3>
              </div>
              <p className="mb-6">
                Our innovative approaches to addressing coastal environmental
                challenges have earned recognition in the iGEM competition and
                from environmental organizations.
              </p>
              <Link
                to="/awards"
                className="inline-flex items-center text-sea-200 hover:text-white transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="glass-card bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading">
                  Team & Partnerships
                </h3>
              </div>
              <p className="mb-6">
                We collaborate with academic institutions, environmental
                organizations, and community groups to leverage diverse
                expertise and maximize our impact.
              </p>
              <Link
                to="/team"
                className="inline-flex items-center text-sea-200 hover:text-white transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ocean-deep font-heading">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Together, we can create cleaner, more resilient coastlines and
              protect marine ecosystems for future generations.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-coral-500 text-white rounded-lg font-medium hover:bg-coral-600 transition-colors inline-flex items-center"
            >
              Get Involved <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Index;
