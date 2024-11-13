"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MobileNavigation from "@/components/MobileNavigation";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import SearchForm from "@/components/SearchForm";
import PropertyCard from "@/components/PropertyCard";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import StaggeredCards from "@/components/StaggeredCards";
import MainNav from "@/components/MainNav";

// Hero Section Component
<Hero />;

// Marketing Component
<Marketing
  isReverse={false}
  imageUrl={""}
  title={""}
  description={""}
  url={""}
/>;

// Search Form Component
<SearchForm />;

// Updated Property Card Component
<PropertyCard
  id={undefined}
  title={undefined}
  price={undefined}
  image={undefined}
  beds={undefined}
  baths={undefined}
  sqft={undefined}
/>;

// Feature Section Component
<>
  <FeatureSection title={""} description={""} />
  <Testimonials />
</>;

// Footer Component
<Footer />;

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Animation triggers only once
    amount: 0.3, // Trigger when 30% of element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

<StaggeredCards properties={undefined} />;

// Main Page Component
const HomePage = () => {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern House",
      price: 450000,
      beds: 4,
      baths: 2,
      sqft: 2000,
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Luxury Villa",
      price: 650000,
      beds: 5,
      baths: 3,
      sqft: 3000,
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Cozy Apartment",
      price: 320000,
      beds: 3,
      baths: 2,
      sqft: 1500,
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Family Home",
      price: 550000,
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Beach House",
      price: 750000,
      beds: 5,
      baths: 4,
      sqft: 3500,
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Mountain Retreat",
      price: 480000,
      beds: 3,
      baths: 2,
      sqft: 2200,
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Show MobileNavigation on small screens and MainNav on md: and larger */}
      <div className="block md:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>

      <Hero />
      <AnimatedSection>
        <Marketing
          isReverse={false}
          imageUrl="/marketing1.png"
          title="You're in good hands"
          description="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque."
          url="/"
        />
      </AnimatedSection>

      <AnimatedSection>
        <SearchForm />
      </AnimatedSection>

      <div className="container mx-auto px-4 pt-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8">
            Find your next place to live
          </h2>
        </AnimatedSection>
        <StaggeredCards properties={properties} />
      </div>

      <AnimatedSection>
        <Marketing
          isReverse={true}
          imageUrl="/marketing2.png"
          title="You're in good hands"
          description="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque."
          url="/"
        />
      </AnimatedSection>

      <AnimatedSection>
        <FeatureSection
          title="You're in good hands"
          description="Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque."
        />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
