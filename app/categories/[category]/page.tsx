import React from "react";

interface DynamicPageProps {
  params: {
    category: string; // Adjust type if the ID is numeric or UUID
  };
}

const page: React.FC<DynamicPageProps> = ({ params }) => {
  return <div>{params.category}</div>;
};

export default page;
