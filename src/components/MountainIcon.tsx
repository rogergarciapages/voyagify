// src/components/MountainIcon.tsx
import React from "react";

interface MountainIconProps {
  className?: string;
  // Add more props as needed based on SVG attributes
}

const MountainIcon: React.FC<MountainIconProps> = ({ className, ...rest }) => {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

export default MountainIcon;
