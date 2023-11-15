import React from "react";

interface BreadcrumbProps {
  title: string;
  items: string[];
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <div className="flex">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex">
              <p
                className={`
              ${index === items.length - 1 ? "" : "text-purple-700"}
              `}
              >
                {item}
              </p>
              {index !== items.length - 1 && (
                <span className="mx-2 text-neutral-500">{">"}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
