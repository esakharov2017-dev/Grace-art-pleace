interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({ 
  children, 
  className = "", 
  as: Tag = "h2" 
}: SectionTitleProps) {
  return (
    <Tag className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1C1C1C] ${className}`}>
      {children}
    </Tag>
  );
}