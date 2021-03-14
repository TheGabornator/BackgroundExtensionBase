import React, { useEffect, useRef, useState } from "react";
import { getRandomImageUrl, imageUrlList } from "../../helpers/background";

export const Background = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const backgroundImageUrl = useRef("");

  useEffect(() => {
    const imageUrl = getRandomImageUrl(imageUrlList);
    if (imageUrl) {
      backgroundImageUrl.current = getRandomImageUrl(imageUrlList);
      setIsLoading(false);
    }
  }, []);

  return (
    <div
      className="Background"
      style={{
        backgroundImage: isLoading
          ? "none"
          : `url(${backgroundImageUrl.current})`,
        opacity: isLoading ? "0" : `1`,
      }}>
      {children}
    </div>
  );
};
