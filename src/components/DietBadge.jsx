import React from "react";

const DietBadge = ({ diet }) => {
  const getBadgeStyle = (diet) => {
    const styles = {
      vegetarian: "bg-green-100 text-green-800 border-green-200",
      vegan: "bg-emerald-100 text-emerald-800 border-emerald-200",
      "gluten free": "bg-blue-100 text-blue-800 border-blue-200",
      ketogenic: "bg-purple-100 text-purple-800 border-purple-200",
      "dairy free": "bg-yellow-100 text-yellow-800 border-yellow-200",
      paleo: "bg-orange-100 text-orange-800 border-orange-200",
      default: "bg-sage-100 text-sage-800 border-sage-200",
    };
    return styles[diet.toLowerCase()] || styles.default;
  };

  const formatDiet = (diet) => {
    return diet.charAt(0).toUpperCase() + diet.slice(1);
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyle(
        diet
      )}`}
    >
      {formatDiet(diet)}
    </span>
  );
};

export default DietBadge;
