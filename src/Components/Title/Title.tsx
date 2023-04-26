import React from "react";
import "./title.css";
interface titleProps {
  title: string;
}

const Title = ({ title }: titleProps) => {
  return <div className="title">{title}</div>;
};

export default Title;
