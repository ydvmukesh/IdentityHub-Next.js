import React from 'react'
interface HeadingProps {
  title?: string;
  sectionClass?: string;
  size?: string;
  className?: string;
  description?: string;
  classDes?: string;
}

const Title: React.FC<HeadingProps> = ({ title = "Heading Here", sectionClass = "text-center", className = "", classDes = "", description }) => {
  return (
    <div className={`section-head md:max-w-2xl mx-auto gap-2 md:gap-3 lg:gap-4 mb-5 md:mb-7 lg:mb-10 ${sectionClass}`}>
      <h2
        className={`section-title ${className}`}
        dangerouslySetInnerHTML={{ __html: title }} // Render HTML content
      />
      {description && <p className={`descritpion ${classDes}`}>{description}</p>}

    </div>
  );
}

export default Title;