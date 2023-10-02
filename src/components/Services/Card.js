import React, { useState } from "react";
import styles from "./Card.module.css";
import iconMapper from "./iconMapper"; // import the iconMapper

function Card({ iconPath, name }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const IconComponent = iconMapper[iconPath]; // get the relevant SVG based on the iconPath

  return (
    <div>
      <div
        className={styles.main}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {IconComponent && (
          <IconComponent
            className={styles.iconSVG}
            style={{
              marginLeft: "2.2rem",
              height: "50px",
              width: "50px",
              display: "flex",
              alignItems: "center",
            }}
          />
        )}
        <div
          className="mx-auto my-auto text-white"
          style={{ fontFamily: "Gilroy", fontSize: "22px", fontWeight: "600" }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default Card;
