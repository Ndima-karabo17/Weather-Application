import { useEffect } from "react";

interface DetectLocationProps {
  onLocationDetected: (lat: number, lon: number) => void;
}

const DetectLocation = ({ onLocationDetected }: DetectLocationProps) => {
  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onLocationDetected(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, [onLocationDetected]);

  return null;
};

export default DetectLocation;
