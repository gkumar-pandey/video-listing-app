import React from "react";
interface titleProps {
  title: string;
}

const Title = ({ title }: titleProps) => {
  return (
    <div
      style={{
        fontSize: "1.8rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: "1rem 0rem"
      }}
    >
      {title}
    </div>
  );
};

export default Title;
