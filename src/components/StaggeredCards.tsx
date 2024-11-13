import { motion, useInView } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { useRef } from "react";

const StaggeredCards = ({ properties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-1 px-3 md:grid-cols-3 gap-8"
    >
      {properties.map((property) => (
        <motion.div
          key={property.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
        >
          <PropertyCard {...property} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredCards;
