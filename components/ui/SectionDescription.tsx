interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionDescription({ 
  children, 
  className = "" 
}: SectionDescriptionProps) {
  return (
    <p className={`text-base md:text-lg text-[#6D6D6D] leading-relaxed max-w-2xl ${className}`}>
      {children}
    </p>
  );
}