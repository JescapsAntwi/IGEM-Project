import { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const ContentSection = ({
  id,
  title,
  children,
  className,
}: ContentSectionProps) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">{title}</h2>
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    </section>
  );
};

export default ContentSection;
