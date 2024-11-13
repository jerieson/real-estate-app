"use client";

// pages/posts.tsx (or any page you'd like to display the data)
import { useEffect, useState } from "react";
import { Property } from "@/types";

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/properties");
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data: Property[] = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <pre>{JSON.stringify(properties, null, 2)}</pre>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
