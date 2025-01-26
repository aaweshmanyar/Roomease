import React from "react";
import {
  Bed,
  BookOpen,
  Fan,
  Users,
  Gamepad2,
  ParkingCircle,
  Wifi,
  Thermometer,
  ShowerHead,
  Warehouse,
  CookingPot,
  Lightbulb,
  Monitor,
  Bath,
  LayoutGrid,
  Sofa,
  Sparkles,
} from "lucide-react";
import PropTypes from "prop-types";

// Simple Card component for the structure
const Card = ({ children }) => {
  return <div className="border p-4 rounded-lg shadow-lg">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="font-semibold text-xl mb-4">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <div className="text-2xl font-semibold">{children}</div>;
};

// Component for each feature item
function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center">{icon}</div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}

// Prop types for FeatureItem component
FeatureItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default function FeaturesList() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Room Features */}
        <Card>
          <CardHeader>
            <h2 className="text-black">Room features</h2>
          </CardHeader>
          <CardContent>
            <FeatureItem icon={<BookOpen className="h-6 w-6 text-black" />} text="Desk in Room" />
            <FeatureItem icon={<Thermometer className="h-6 w-6 text-black" />} text="Heating" />
            <FeatureItem icon={<Bed className="h-6 w-6 text-black" />} text="King Single Bed" />
            <FeatureItem icon={<ShowerHead className="h-6 w-6 text-black" />} text="Shared Bathroom" />
            <FeatureItem icon={<Warehouse className="h-6 w-6 text-black" />} text="Wardrobe" />
            <FeatureItem icon={<Fan className="h-6 w-6 text-black" />} text="Ceiling Fan" />
          </CardContent>
        </Card>

        {/* Apartment Features */}
        <Card>
          <CardHeader>
            <h2 className="text-black">Apartment features</h2>
          </CardHeader>
          <CardContent>
            <FeatureItem icon={<CookingPot className="h-6 w-6 text-black" />} text="Premium apartment: brand new kitchen" />
            <FeatureItem icon={<Lightbulb className="h-6 w-6 text-black" />} text="Premium apartment: motion sensor lights" />
            <FeatureItem icon={<Monitor className="h-6 w-6 text-black" />} text="Premium apartment: new appliances" />
            <FeatureItem icon={<Bath className="h-6 w-6 text-black" />} text="Premium apartment: new basin, vanity and toilet" />
            <FeatureItem
              icon={<LayoutGrid className="h-6 w-6 text-black" />}
              text="Premium apartment: new flooring including in bedrooms"
            />
            <FeatureItem icon={<Sofa className="h-6 w-6 text-black" />} text="Premium apartment: new furniture" />
            <FeatureItem icon={<Sparkles className="h-6 w-6 text-black" />} text="Premium apartment: fresh paint" />
          </CardContent>
        </Card>

        {/* Village Features */}
        <Card>
          <CardHeader>
            <h2 className="text-black">Village Features</h2>
          </CardHeader>
          <CardContent>
            <FeatureItem icon={<BookOpen className="h-6 w-6 text-black" />} text="Dedicated Study Space" />
            <FeatureItem icon={<Users className="h-6 w-6 text-black" />} text="Friendly Staff Onsite" />
            <FeatureItem icon={<Gamepad2 className="h-6 w-6 text-black" />} text="Games Room" />
            <FeatureItem icon={<ParkingCircle className="h-6 w-6 text-black" />} text="General Parking" />
            <FeatureItem icon={<ShowerHead className="h-6 w-6 text-black" />} text="On-site Laundry" />
            <FeatureItem icon={<Wifi className="h-6 w-6 text-black" />} text="Free WIFI with a Western Sydney Uni Student ID" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
