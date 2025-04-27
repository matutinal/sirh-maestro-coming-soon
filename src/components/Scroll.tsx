import { ChevronsDown } from 'lucide-react';

const Scroll = () => {
  const handleScroll = () => {
    const header = document.querySelector('header');
    const targetElement = document.getElementById('prototype');
    
    if (header?.offsetHeight && targetElement) {
      const headerHeight = header.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(elementPosition - headerHeight, 0);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="grid-flow-row justify-items-center">
      <button
        onClick={handleScroll}
        aria-label="Scroll to embed section"
        className="hover:opacity-75 transition-opacity"
      >
        <ChevronsDown className="h-10 w-10 text-indigo-600" />
      </button>
    </div>
  );
};

export default Scroll;