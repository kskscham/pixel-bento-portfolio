const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Designed & Built with <span className="text-primary">❤️</span> by Alex
        </p>
        <p className="text-xs text-muted-foreground">
          © 2024 • Pixel-Perfect Portfolio
        </p>
        {/* Pixel decoration */}
        <div className="flex justify-center gap-2 pt-2">
          <div className="w-2 h-2 bg-primary"></div>
          <div className="w-2 h-2 bg-secondary"></div>
          <div className="w-2 h-2 bg-accent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
