
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="gradient-text font-bold text-lg">AMCHAAR Anas</span>
            <div className="flex">
              <div className="w-3 h-2 bg-morocco-red rounded-l-sm"></div>
              <div className="w-3 h-2 bg-morocco-green rounded-r-sm"></div>
            </div>
          </div>
          
          <div className="text-center md:text-right text-muted-foreground">
            <p>&copy; {currentYear} AMCHAAR Anas. All rights reserved.</p>
            <p className="text-sm">Built with passion for AI and innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
