// import tw from "twin.macro";

// export const SectionWrapper = tw.div`max-w-pWidth mx-auto`;

interface ISectionWrapper {
  className?: string;
  children: JSX.Element;
}
export const SectionWrapper = ({
  className = "",
  children,
}: ISectionWrapper) => (
  <div className={`${className} mx-auto max-w-7xl px-4 md:px-10 lg:px-16`}>
    {children}
  </div>
);
