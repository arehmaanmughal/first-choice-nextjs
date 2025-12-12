"use client";

import Link from "next/link";
import {
  AcademicCapIcon,
  BookOpenIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserGroupIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  StarIcon,
  ArrowRightIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  TrophyIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Advanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="#" className="flex items-center group">
              <div className="relative">
                <AcademicCapIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 transition-transform group-hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="ml-2 sm:ml-3">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  First Choice
                </span>
                <p className="text-[10px] sm:text-xs text-gray-500 -mt-0.5 sm:-mt-1">Consultants</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="#services"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#testimonials"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex relative px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 mt-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-8 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <div className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold shadow-sm border border-white/20">
                <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                <span className="whitespace-nowrap">Based in United Kingdom</span>
                <ShieldCheckIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 text-green-400" />
              </div>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                  Your Gateway to{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    World-Class
                  </span>{" "}
                  Education
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light">
                  Expert guidance for students seeking admission to top UK
                  universities and international institutions. We make your
                  educational dreams a reality.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-1 sm:pt-2">
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">98%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="hidden sm:block h-5 sm:h-6 md:h-8 lg:h-10 w-px bg-gray-600"></div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-400">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Students Helped</div>
                </div>
                <div className="hidden sm:block h-5 sm:h-6 md:h-8 lg:h-10 w-px bg-gray-600"></div>
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Universities</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Free Consultation
                    <ArrowRightIcon className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">What We Offer</h3>
                    <StarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-yellow-500" />
                  </div>
                  {[
                    "University Application Support",
                    "Visa Assistance & Documentation",
                    "Scholarship Guidance",
                    "Personal Statement Review",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <CheckBadgeIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-indigo-900 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                  <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-600">Average Response Time</span>
                      <span className="font-semibold text-blue-600 flex items-center">
                        <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        2 Hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-600 to-indigo-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Comprehensive Support for Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Educational Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              From application to admission, we provide end-to-end support to ensure
              your success
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpenIcon,
                title: "University Applications",
                description: "Expert guidance through the entire application process for UK and international universities with personalized support.",
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50",
              },
              {
                icon: DocumentTextIcon,
                title: "Personal Statements",
                description: "Professional review and editing of personal statements to make your application stand out from the competition.",
                gradient: "from-indigo-500 to-purple-600",
                bgGradient: "from-indigo-50 to-purple-50",
              },
              {
                icon: GlobeAltIcon,
                title: "Visa Support",
                description: "Complete assistance with visa applications and documentation for UK student visas with guaranteed accuracy.",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: AcademicCapIcon,
                title: "Course Selection",
                description: "Help choosing the right course and university based on your interests, career goals, and academic profile.",
                gradient: "from-pink-500 to-red-600",
                bgGradient: "from-pink-50 to-red-50",
              },
              {
                icon: UserGroupIcon,
                title: "Interview Preparation",
                description: "Mock interviews and coaching to help you excel in university admission interviews with confidence.",
                gradient: "from-red-500 to-orange-600",
                bgGradient: "from-red-50 to-orange-50",
              },
              {
                icon: StarIcon,
                title: "Scholarship Guidance",
                description: "Information and support for applying to scholarships and financial aid programs to fund your education.",
                gradient: "from-orange-500 to-yellow-600",
                bgGradient: "from-orange-50 to-yellow-50",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50`}
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.gradient} mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-indigo-200 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Thousands of Students
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Our proven track record and expert team make us the leading choice
              for education consultancy
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: ChartBarIcon,
                title: "98% Success Rate",
                description: "Our proven track record speaks for itself. We've helped thousands of students secure admission to their dream universities.",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600",
                statColor: "text-blue-600",
                stat: "98%",
              },
              {
                icon: UserGroupIcon,
                title: "Expert Advisors",
                description: "Our team consists of experienced education consultants with in-depth knowledge of UK and international education systems.",
                bgColor: "bg-indigo-100",
                iconColor: "text-indigo-600",
                statColor: "text-indigo-600",
                stat: "50+",
              },
              {
                icon: GlobeAltIcon,
                title: "Global Network",
                description: "Strong partnerships with universities worldwide, giving you access to exclusive opportunities and early application deadlines.",
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600",
                statColor: "text-purple-600",
                stat: "500+",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl ${feature.bgColor} mb-4 sm:mb-6`}>
                  <feature.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${feature.iconColor}`} />
                </div>
                <div className={`text-3xl sm:text-4xl font-bold ${feature.statColor} mb-2`}>
                  {feature.stat}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { label: "Years Experience", value: "15+" },
                { label: "Countries Served", value: "50+" },
                { label: "Success Stories", value: "10K+" },
                { label: "Satisfaction Rate", value: "99%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-400 to-indigo-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4 sm:px-0">
              Real stories from successful applicants who achieved their dreams
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Mitchell",
                university: "Oxford University",
                initials: "SM",
                gradient: "from-blue-600 to-blue-700",
                quote: "First Choice Education made my dream of studying at Oxford University a reality. Their guidance was invaluable throughout the entire process.",
              },
              {
                name: "Ahmed Khan",
                university: "Imperial College London",
                initials: "AK",
                gradient: "from-indigo-600 to-indigo-700",
                quote: "The team helped me navigate the complex visa process and provided excellent support. I couldn't have done it without them!",
              },
              {
                name: "Emma Johnson",
                university: "University of Cambridge",
                initials: "EJ",
                gradient: "from-purple-600 to-purple-700",
                quote: "Professional, responsive, and incredibly knowledgeable. They helped me secure a scholarship I didn't even know existed!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col justify-between"
              >
                <div>

                <div className="flex items-center mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                </div>
                <div className="flex items-center pt-4 sm:pt-6 border-t border-gray-100">
                  <div
                    className={`bg-gradient-to-r ${testimonial.gradient} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="ml-3 sm:ml-4 min-w-0">
                    <p className="font-bold text-gray-900 text-base sm:text-lg truncate">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <AcademicCapIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{testimonial.university}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 px-4 sm:px-0">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Journey?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4 sm:px-0">
              Book a free consultation with our expert advisors today and take the
              first step towards your dream education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-lg sm:rounded-xl flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-blue-100 text-xs sm:text-sm mb-1">Phone</p>
                    <p className="font-bold text-white text-sm sm:text-base md:text-lg break-words">+44 20 1234 5678</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-lg sm:rounded-xl flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-blue-100 text-xs sm:text-sm mb-1">Email</p>
                    <p className="font-bold text-white text-xs sm:text-sm md:text-base lg:text-lg break-all">
                      info@firstchoiceeducation.co.uk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-400 rounded-lg sm:rounded-xl text-sm sm:text-base text-black outline-none focus:border-blue-600 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-400 rounded-lg sm:rounded-xl text-sm sm:text-base text-black outline-none focus:border-blue-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    placeholder="I'm interested in studying..."
                    rows={4}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-400 rounded-lg sm:rounded-xl text-sm sm:text-base text-black outline-none focus:border-blue-600 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center group"
                >
                  Request Free Consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <AcademicCapIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />
                <div className="ml-2 sm:ml-3">
                  <span className="text-xl sm:text-2xl font-bold">First Choice Consultants</span>
                  <p className="text-xs sm:text-sm text-gray-400">Your trusted partner</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mb-4 sm:mb-6">
                Your trusted partner in achieving educational excellence. We've
                helped thousands of students realize their dreams of studying at
                top universities worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="bg-gray-800 px-3 sm:px-4 py-2 rounded-lg border border-gray-700">
                  <div className="text-xs text-gray-400">Certified by</div>
                  <div className="text-xs sm:text-sm font-semibold">UK Education Council</div>
                </div>
                <div className="bg-gray-800 px-3 sm:px-4 py-2 rounded-lg border border-gray-700">
                  <div className="text-xs text-gray-400">Member of</div>
                  <div className="text-xs sm:text-sm font-semibold">IACAC</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    
                    University Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Visa Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Scholarship Guidance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Interview Prep
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
                <li className="flex items-start">
                  <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">London Office</div>
                    <div>United Kingdom</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                  <span className="break-all">+44 20 1234 5678</span>
                </li>
                <li className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                  <span className="break-all">info@firstchoiceeducation.co.uk</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} First Choice Consultants. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
