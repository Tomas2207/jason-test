import React from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

interface ReviewsProps {
  rating: number;
}

const Reviews = ({ rating }: ReviewsProps) => {
  const finalRating = Math.floor(rating);
  return (
    <div className="flex gap-2 items-center">
      <p className="text-gray-500  w-[100px]">Reviews</p>
      <div className="flex gap-1 items-center">
        <p className="text-gray-500">{rating}</p>
        {[...Array(5)].map((_, idx) => (
          <span key={idx}>
            {idx < finalRating ? (
              <IoMdStar className="text-[20px] text-yellow-500" />
            ) : (
              <IoMdStarOutline className="text-gray-300 text-[20px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
