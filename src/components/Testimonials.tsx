"use client";
import React, { useState, useRef, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

interface TestimonialProps {
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lara Madrigal",
    role: "Client",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, fugit rem quas optio dolorum rerum iusto possimus distinctio perspiciatis dolorem ut et dicta cumque, inventore ducimus velit eaque!",
  },
  {
    id: 2,
    name: "Lara Madrigal",
    role: "Client",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, fugit rem quas optio dolorum rerum iusto possimus distinctio perspiciatis dolorem ut et dicta cumque, inventore ducimus velit eaque!",
  },
  {
    id: 3,
    name: "Lara Madrigal",
    role: "Client",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, fugit rem quas optio dolorum rerum iusto possimus distinctio perspiciatis dolorem ut et dicta cumque, inventore ducimus velit eaque!",
  },
];

const Testimonials: React.FC<TestimonialProps> = ({
  testimonials = defaultTestimonials,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  const handleDragStart = (e: MouseEvent | Touch): void => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleDragEnd = (): void => {
    setIsDragging(false);
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const itemWidth = containerRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleDragMove = (e: MouseEvent | Touch): void => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = (): void => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const itemWidth = containerRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex >= 0 && newIndex < testimonials.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollToIndex = (index: number): void => {
    if (containerRef.current && index >= 0 && index < testimonials.length) {
      const itemWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className={`w-full py-20 ${className}`}>
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto px-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col">
            <div className="w-full rounded-full h-0.5 bg-gradient-to-r from-[#FFAC12] to-black mb-6" />
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <div className="flex items-center mt-auto bg-gray-100 p-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="ml-3">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
          onScroll={handleScroll}
          onMouseDown={(e) => handleDragStart(e)}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleDragEnd}
          onMouseMove={(e) => handleDragMove(e)}
          onTouchStart={(e) => handleDragStart(e.touches[0])}
          onTouchEnd={handleDragEnd}
          onTouchMove={(e) => handleDragMove(e.touches[0])}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="min-w-full w-full flex-shrink-0 snap-center px-4"
            >
              <div className="flex flex-col">
                <div
                  className={`${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  } transition-opacity delay-300 duration-500 ease-in w-full rounded-full h-1 bg-gradient-to-r from-[#FFAC12] to-black mb-6`}
                />
                <p className="mb-6">{testimonial.content}</p>
                <div
                  className={`flex items-center p-4 transition-colors duration-300 ${
                    index === currentIndex ? "bg-black" : "bg-gray-100"
                  }`}
                >
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="ml-3">
                    <p
                      className={`font-semibold ${
                        index === currentIndex ? "text-white" : "text-black"
                      }`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-sm ${
                        index === currentIndex
                          ? "text-gray-300"
                          : "text-gray-500"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-[#FFAC12]" : "bg-gray-200"
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
