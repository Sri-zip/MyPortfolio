const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-primary-900">
      {/* Navigation Menu */}
      <nav className="fixed top-8 z-50">
        <div className="px-8 py-4 rounded-full bg-glass-dark backdrop-blur-xl border border-white/10 shadow-glass-sm hover:shadow-glass transition-all duration-500">
          <ul className="flex space-x-10">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-white/90 hover:text-accent-500 transition-colors duration-300 text-lg font-oregano group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Enhanced Flowing Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main flowing gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-teal-800/30 to-emerald-900/50 animate-flow-y"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/30 via-teal-700/20 to-emerald-800/30 animate-flow-x"></div>
        </div>

        {/* Shimmering overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-shimmer"></div>

        {/* Floating bubbles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-bubble"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                background: `radial-gradient(circle at 30% 30%, rgba(167, 243, 208, 0.15), rgba(167, 243, 208, 0.05))`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 10}s`
              }}
            />
          ))}
        </div>

        {/* Light trails */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px animate-light-trail"
              style={{
                width: '100px',
                background: 'linear-gradient(90deg, transparent, rgba(167, 243, 208, 0.2), transparent)',
                top: `${20 + (i * 20)}%`,
                left: '0',
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>

        {/* Soft flowing curves with glow */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 opacity-20"
              style={{ animationDelay: `${i * 2}s` }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M0,50 Q25,30 50,50 T100,50"
                  className="stroke-emerald-300/30 fill-none animate-wave-flow"
                  style={{
                    strokeWidth: '0.5',
                    vectorEffect: 'non-scaling-stroke',
                    filter: 'blur(1px)'
                  }}
                />
                <path
                  d="M0,50 Q25,30 50,50 T100,50"
                  className="stroke-teal-200/10 fill-none animate-wave-flow-delayed"
                  style={{
                    strokeWidth: '2',
                    vectorEffect: 'non-scaling-stroke',
                    filter: 'blur(4px)'
                  }}
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Enhanced floating elements with inner glow */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${15 + (i * 12)}%`,
                left: `${10 + (i * 15)}%`,
                animationDelay: `${i * 1.5}s`
              }}
            >
              <div className="relative">
                <div className={`w-64 h-64 rounded-full blur-3xl animate-float-smooth opacity-10 bg-gradient-to-br from-emerald-300/20 to-teal-300/20`}></div>
                <div className="absolute inset-0 rounded-full animate-pulse-subtle" 
                     style={{
                       background: 'radial-gradient(circle at center, rgba(167, 243, 208, 0.1), transparent 70%)'
                     }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 animate-fade-in font-delius">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 animate-gradient-nature relative">
                Tejal Srivastava
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-accent-500/30 via-accent-400/30 to-accent-500/30 animate-pulse-subtle"></span>
              </span>
            </h1>
            <div className="absolute -inset-1 bg-accent-500/10 blur-2xl rounded-full"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl text-white/90 font-oregano mb-12 animate-fade-in-delayed relative">
            <span className="relative">Welcome to my creative space</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in-delayed-2">
            <button onClick={() => scrollToSection('projects')} 
                    className="px-8 py-3 rounded-lg bg-glass-dark backdrop-blur-xl border border-accent-500/20 text-accent-500 hover:text-white hover:bg-accent-500/20 hover:border-accent-500 hover:shadow-neon transition-all duration-300 group">
              <span className="relative z-10 font-medium">View My Work</span>
              <span className="absolute inset-0 bg-accent-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            
            <button onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 rounded-lg bg-glass-white backdrop-blur-xl border border-white/10 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
              <span className="relative z-10 font-medium">Get in Touch</span>
              <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;