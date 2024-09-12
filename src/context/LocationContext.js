import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const LocationContext = createContext();

// Utility function to calculate distance between two coordinates
// (You can use the Haversine formula or a similar method)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // ... implement distance calculation logic here ...
};

// LocationContext Provider component
export const LocationProvider = ({ children }) => {
  const [deliveryType, setDeliveryType] = useState(localStorage.getItem('deliveryType') || 'pickup');
  const [deliveryDate, setDeliveryDate] = useState(localStorage.getItem('deliveryDate') || null);
  const [deliveryLocation, setDeliveryLocation] = useState(localStorage.getItem('deliveryLocation') || '');
  const [pickupLocations, setPickupLocations] = useState([]);
  const [deliveryZones, setDeliveryZones] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);

  // Fetch pickup locations and delivery zones from Shopify (replace with actual fetch logic)
  const fetchLocationsAndZones = async () => {
    try {
      // Example: fetch from Shopify or another data source
      const locations = await fetchPickupLocationsFromShopify(); // implement this function
      const zones = await fetchDeliveryZonesFromShopify(); // implement this function

      setPickupLocations(locations);
      setDeliveryZones(zones);
    } catch (err) {
      console.error("Failed to fetch locations and zones:", err);
    }
  };

  useEffect(() => {
    fetchLocationsAndZones();
  }, []);

  // Store selected options in localStorage
  useEffect(() => {
    localStorage.setItem('deliveryType', deliveryType);
    localStorage.setItem('deliveryDate', deliveryDate);
    localStorage.setItem('deliveryLocation', deliveryLocation);
  }, [deliveryType, deliveryDate, deliveryLocation]);

  // Validation functions
  const validateDeliveryDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate > today; // Ensure the date is in the future
  };

  const validateDeliveryLocation = (location) => {
    // Example validation: ensure location is within a valid delivery zone
    return deliveryZones.some(zone => {
      const distance = calculateDistance(zone.lat, zone.lon, location.lat, location.lon);
      return distance <= zone.radius;
    });
  };

  const calculateDeliveryFee = (location) => {
    const zone = deliveryZones.find(zone => {
      const distance = calculateDistance(zone.lat, zone.lon, location.lat, location.lon);
      return distance <= zone.radius;
    });

    if (zone) {
      setDeliveryFee(zone.fee);
    } else {
      setDeliveryFee(0); // or set to a default value if outside delivery zones
    }
  };

  // Update state and calculate fee when location changes
  const selectDeliveryLocation = (location) => {
    setDeliveryLocation(location);
    calculateDeliveryFee(location);
  };

  return (
    <LocationContext.Provider value={{
      deliveryType,
      deliveryDate,
      deliveryLocation,
      pickupLocations,
      deliveryFee,
      selectDeliveryType: setDeliveryType,
      selectDeliveryDate: (date) => {
        if (validateDeliveryDate(date)) {
          setDeliveryDate(date);
        } else {
          console.error("Invalid delivery date");
        }
      },
      selectDeliveryLocation,
    }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the LocationContext
export const useLocationContext = () => {
  return useContext(LocationContext);
};