import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Creator Academy - The Six-Month Alternative to College</title>
        <meta name="description" content="La Jolla-based Creator Academy: A six-month alternative to college for creators. Guided by 2x Forbes-featured founder Luke D'Andrea." />
        
        {/* External Libraries */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        
        {/* Custom Styles */}
        <link href="/static/styles.css" rel="stylesheet" />
        
        {/* Tailwind Configuration */}
        <script>
          {`
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'neon-blue': '#00f3ff',
                    'dark-bg': '#0a0a0a',
                    'card-bg': '#1a1a1a',
                  },
                  fontFamily: {
                    'sans': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                  }
                }
              }
            }
          `}
        </script>
      </head>
      <body class="bg-dark-bg text-white overflow-x-hidden">
        {/* Custom Cursor */}
        <div id="custom-cursor" class="custom-cursor"></div>
        
        {/* Fixed Navigation */}
        <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
              <div class="text-xl font-bold">Creator Academy</div>
              <div class="hidden md:flex space-x-8">
                <a href="#program" class="nav-link">Program</a>
                <a href="#outcomes" class="nav-link">Outcomes</a>
                <a href="#curriculum" class="nav-link">Curriculum</a>
                <a href="#tuition" class="nav-link">Tuition</a>
                <a href="#faq" class="nav-link">FAQ</a>
                <a href="/members" class="member-access-btn">Member Access</a>
              </div>
              <button id="mobile-menu-btn" class="md:hidden">
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div id="mobile-menu" class="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg hidden">
          <div class="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#program" class="mobile-nav-link">Program</a>
            <a href="#outcomes" class="mobile-nav-link">Outcomes</a>
            <a href="#curriculum" class="mobile-nav-link">Curriculum</a>
            <a href="#tuition" class="mobile-nav-link">Tuition</a>
            <a href="#faq" class="mobile-nav-link">FAQ</a>
            <a href="/members" class="member-access-btn">Member Access</a>
          </div>
        </div>

        {/* Hero Section */}
        <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div id="hero-3d" class="absolute inset-0"></div>
          <div class="relative z-10 text-center max-w-6xl mx-auto px-6">
            <h1 class="hero-title text-4xl md:text-7xl font-bold mb-8 leading-tight">
              The Six-Month Alternative to College—<br />
              <span class="text-neon-blue">La Jolla–Based.</span> <span class="text-neon-blue">Hands-On.</span><br />
              For Creators.
            </h1>
            
            <h2 class="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Guided by Luke D'Andrea—2× Forbes-featured founder—so creators learn from my failures and wins to turn purpose into a real business with customers, not just a plan.
            </h2>
            
            <div class="trust-bar flex justify-center items-center space-x-8 mb-8 text-sm text-gray-400">
              <span>As featured in</span>
              <a href="/press" class="hover:text-white transition-colors">Forbes</a>
              <span>•</span>
              <a href="/press" class="hover:text-white transition-colors">PRWeb</a>
              <span>•</span>
              <a href="/press" class="hover:text-white transition-colors">HempToday</a>
            </div>
            
            <p class="micro-disclosure text-sm text-gray-400 mb-12">
              By invitation only for members of approved partner organizations. Not open to the public.
            </p>
            
            <div class="cta-buttons space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <a href="/members" class="primary-cta">Access via Member Portal</a>
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="secondary-cta">Request an Invitation</a>
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="tertiary-cta">Parent Info Session (20 min Zoom)</a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        {children}

        {/* What You Get (Outcomes) Section */}
        <section id="outcomes" class="py-20 px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title text-4xl md:text-6xl font-bold mb-8">A Real Company by Graduation</h2>
              <p class="text-xl text-gray-300">In six months, graduates who complete all milestones exit with:</p>
            </div>
            
            <div class="outcomes-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="outcome-card neumorphic-card p-8">
                <div class="outcome-icon text-4xl mb-4">🏢</div>
                <h3 class="text-xl font-semibold mb-2">LLC + EIN filed</h3>
              </div>
              <div class="outcome-card neumorphic-card p-8">
                <div class="outcome-icon text-4xl mb-4">🌐</div>
                <h3 class="text-xl font-semibold mb-2">Brand & conversion-ready website launched</h3>
              </div>
              <div class="outcome-card neumorphic-card p-8">
                <div class="outcome-icon text-4xl mb-4">💡</div>
                <h3 class="text-xl font-semibold mb-2">Sellable offer (E-commerce / Service / SaaS)</h3>
              </div>
              <div class="outcome-card neumorphic-card p-8">
                <div class="outcome-icon text-4xl mb-4">📈</div>
                <h3 class="text-xl font-semibold mb-2">One acquisition channel live</h3>
                <p class="text-sm text-gray-400">(SEO, ads, influencers, or outbound)</p>
              </div>
              <div class="outcome-card neumorphic-card p-8">
                <div class="outcome-icon text-4xl mb-4">💰</div>
                <h3 class="text-xl font-semibold mb-2">First paying customers and a 90-day scale plan</h3>
              </div>
              <div class="outcome-card neumorphic-card p-8">
                <div class="outcome-icon text-4xl mb-4">🎭</div>
                <h3 class="text-xl font-semibold mb-2">Demo Day for parents and invited mentors</h3>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="primary-button">Book Discovery Call</a>
            </div>
          </div>
        </section>

        {/* Why Parents Choose Creator Academy */}
        <section id="program" class="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title text-4xl md:text-6xl font-bold mb-8">Skip four years of theory.<br />Build something real.</h2>
            </div>
            
            <div class="benefits-grid grid md:grid-cols-2 gap-12">
              <div class="benefit-card neumorphic-card p-8">
                <h3 class="text-2xl font-bold mb-4 text-neon-blue">Debt-smart:</h3>
                <p class="text-gray-300">Six months, not four years. Real business skills, not theoretical knowledge that becomes outdated.</p>
              </div>
              <div class="benefit-card neumorphic-card p-8">
                <h3 class="text-2xl font-bold mb-4 text-neon-blue">Accountability:</h3>
                <p class="text-gray-300">Weekly check-ins, milestone tracking, and peer support to ensure progress and completion.</p>
              </div>
              <div class="benefit-card neumorphic-card p-8">
                <h3 class="text-2xl font-bold mb-4 text-neon-blue">Clarity:</h3>
                <p class="text-gray-300">Clear path from idea to profitable business with step-by-step guidance and proven frameworks.</p>
              </div>
              <div class="benefit-card neumorphic-card p-8">
                <h3 class="text-2xl font-bold mb-4 text-neon-blue">Structure & safety:</h3>
                <p class="text-gray-300">Guided environment with experienced mentors, reducing risks and accelerating learning.</p>
              </div>
              <div class="benefit-card neumorphic-card p-8 md:col-span-2">
                <h3 class="text-2xl font-bold mb-4 text-neon-blue">Ownership:</h3>
                <p class="text-gray-300">Students own their businesses, intellectual property, and future. Complete autonomy with experienced guidance.</p>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="secondary-button">Request an Invitation</a>
            </div>
          </div>
        </section>

        {/* Interactive Curriculum Timeline */}
        <section id="curriculum" class="py-20 px-6">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title text-4xl md:text-6xl font-bold mb-8">Curriculum<br />(6 Months, Zero Fluff)</h2>
            </div>
            
            <div class="curriculum-timeline relative">
              <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-neon-blue to-transparent h-full"></div>
              
              <div class="timeline-months space-y-16">
                <div class="month-capsule" data-month="1">
                  <div class="neumorphic-card p-8 max-w-md mx-auto cursor-pointer">
                    <h3 class="text-2xl font-bold mb-4">Month 1: Foundation</h3>
                    <p class="text-gray-300">Business structure, legal setup, market research, and competitor analysis.</p>
                    <div class="month-details hidden mt-6 p-4 bg-gray-800 rounded-lg">
                      <ul class="space-y-2 text-sm">
                        <li>• LLC formation and EIN registration</li>
                        <li>• Market analysis and validation</li>
                        <li>• Customer persona development</li>
                        <li>• Competitive landscape mapping</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="month-capsule" data-month="2">
                  <div class="neumorphic-card p-8 max-w-md mx-auto cursor-pointer">
                    <h3 class="text-2xl font-bold mb-4">Month 2: Product</h3>
                    <p class="text-gray-300">Offer development, pricing strategy, and minimum viable product creation.</p>
                    <div class="month-details hidden mt-6 p-4 bg-gray-800 rounded-lg">
                      <ul class="space-y-2 text-sm">
                        <li>• MVP development and testing</li>
                        <li>• Pricing psychology and strategy</li>
                        <li>• Value proposition refinement</li>
                        <li>• Product-market fit validation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="month-capsule" data-month="3">
                  <div class="neumorphic-card p-8 max-w-md mx-auto cursor-pointer">
                    <h3 class="text-2xl font-bold mb-4">Month 3: Brand</h3>
                    <p class="text-gray-300">Brand identity, messaging, and professional website development.</p>
                    <div class="month-details hidden mt-6 p-4 bg-gray-800 rounded-lg">
                      <ul class="space-y-2 text-sm">
                        <li>• Brand strategy and visual identity</li>
                        <li>• Website design and development</li>
                        <li>• Content strategy and creation</li>
                        <li>• Social media presence setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="month-capsule" data-month="4">
                  <div class="neumorphic-card p-8 max-w-md mx-auto cursor-pointer">
                    <h3 class="text-2xl font-bold mb-4">Month 4: Marketing</h3>
                    <p class="text-gray-300">Customer acquisition, marketing funnels, and conversion optimization.</p>
                    <div class="month-details hidden mt-6 p-4 bg-gray-800 rounded-lg">
                      <ul class="space-y-2 text-sm">
                        <li>• Marketing funnel design</li>
                        <li>• SEO and content marketing</li>
                        <li>• Paid advertising setup</li>
                        <li>• Email marketing automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="month-capsule" data-month="5">
                  <div class="neumorphic-card p-8 max-w-md mx-auto cursor-pointer">
                    <h3 class="text-2xl font-bold mb-4">Month 5: Sales</h3>
                    <p class="text-gray-300">Sales processes, customer onboarding, and first revenue generation.</p>
                    <div class="month-details hidden mt-6 p-4 bg-gray-800 rounded-lg">
                      <ul class="space-y-2 text-sm">
                        <li>• Sales funnel optimization</li>
                        <li>• Customer onboarding systems</li>
                        <li>• Payment processing setup</li>
                        <li>• Customer success strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="month-capsule" data-month="6">
                  <div class="neumorphic-card p-8 max-w-md mx-auto cursor-pointer">
                    <h3 class="text-2xl font-bold mb-4">Month 6: Scale</h3>
                    <p class="text-gray-300">Growth strategies, demo day preparation, and 90-day scaling plan.</p>
                    <div class="month-details hidden mt-6 p-4 bg-gray-800 rounded-lg">
                      <ul class="space-y-2 text-sm">
                        <li>• Growth hacking strategies</li>
                        <li>• Demo day presentation</li>
                        <li>• 90-day scaling roadmap</li>
                        <li>• Investor pitch preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="primary-button">See Full Syllabus - Book Call</a>
            </div>
          </div>
        </section>

        {/* Format & Schedule */}
        <section class="py-20 px-6 bg-gradient-to-b from-gray-900/20 to-transparent">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="section-title text-4xl md:text-6xl font-bold mb-16">Hybrid, High-Accountability</h2>
            
            <div class="format-grid grid md:grid-cols-4 gap-8">
              <div class="format-item neumorphic-card p-6">
                <div class="text-4xl mb-4">🏢</div>
                <h3 class="font-semibold">In Person</h3>
                <p class="text-sm text-gray-400">La Jolla</p>
              </div>
              <div class="format-item neumorphic-card p-6">
                <div class="text-4xl mb-4">👨‍🏫</div>
                <h3 class="font-semibold">1:1 Coaching</h3>
                <p class="text-sm text-gray-400">Weekly</p>
              </div>
              <div class="format-item neumorphic-card p-6">
                <div class="text-4xl mb-4">💻</div>
                <h3 class="font-semibold">Online</h3>
                <p class="text-sm text-gray-400">Hybrid</p>
              </div>
              <div class="format-item neumorphic-card p-6">
                <div class="text-4xl mb-4">📍</div>
                <h3 class="font-semibold">Location</h3>
                <p class="text-sm text-gray-400">La Jolla, CA</p>
              </div>
            </div>
            
            <div class="mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="secondary-button">Parent Info Session (20 min)</a>
            </div>
          </div>
        </section>

        {/* Mentor & Track Record */}
        <section class="py-20 px-6">
          <div class="max-w-6xl mx-auto">
            
            {/* Profile Header */}
            <div class="text-center mb-16">
              <div class="mentor-avatar w-40 h-40 rounded-full mx-auto mb-8 overflow-hidden border-4 border-neon-blue">
                <img src="https://page.gensparksite.com/v1/base64_upload/6cf13c9398cbc950fc51b12b5a653f24" 
                     alt="Luke D'Andrea" 
                     class="w-full h-full object-cover" />
              </div>
              <h2 class="section-title text-4xl md:text-6xl font-bold mb-6">Luke D'Andrea</h2>
              <h3 class="text-2xl md:text-3xl font-bold mb-4 text-neon-blue">2× Forbes-Featured Founder & Creator Academy CEO</h3>
              <p class="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Serial entrepreneur with multiple successful exits and hospital acquisitions. Founded ReNAD Biologics, Riddler Data Intelligence, DRIHP, and Clone Connect. 
                Featured in Forbes for innovation in business and technology. Now dedicated to teaching the next generation of creators.
              </p>
            </div>

            {/* Media & Accolades Section */}
            <div class="accolades-section mb-12">
              <h3 class="text-3xl md:text-4xl font-bold mb-8 text-center">Media & Recognition</h3>
              
              <div class="media-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Forbes E-Commerce Feature */}
                <a href="https://www.forbes.com/sites/javierhasse/2020/06/22/bella-thorne-hemp-clothing/" 
                   target="_blank" 
                   class="media-item neumorphic-card p-4 hover:scale-105 transition-transform duration-300 group">
                  <div class="relative overflow-hidden rounded-lg bg-transparent">
                    <img src="https://page.gensparksite.com/v1/base64_upload/9c42782c227103a363cb76d58ae8da79" 
                         alt="Forbes - E-Commerce Clothing Company" 
                         class="w-full h-36 object-contain" />
                    <div class="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                      <i class="fab fa-forbes mr-1"></i>Forbes
                    </div>
                  </div>
                  <h4 class="text-sm font-semibold mt-3 text-neon-blue">E-Commerce Clothing Company</h4>
                  <p class="text-xs text-gray-400">Forbes Business Feature</p>
                </a>

                {/* Forbes Prophets of Hemp */}
                <a href="https://www.forbes.com/sites/barrettwissman/2019/11/25/prophets-of-hemp/" 
                   target="_blank" 
                   class="media-item neumorphic-card p-4 hover:scale-105 transition-transform duration-300 group">
                  <div class="relative overflow-hidden rounded-lg bg-transparent">
                    <img src="https://page.gensparksite.com/v1/base64_upload/dc4e95dbde968660382a8232c6c5b6e4" 
                         alt="Forbes - Prophets of Hemp Lead Marketer" 
                         class="w-full h-36 object-contain" />
                    <div class="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                      <i class="fab fa-forbes mr-1"></i>Forbes
                    </div>
                  </div>
                  <h4 class="text-sm font-semibold mt-3 text-neon-blue">Prophets of Hemp: Lead Marketer</h4>
                  <p class="text-xs text-gray-400">Forbes Industry Recognition</p>
                </a>

                {/* AI Tool - Hospital Acquisition */}
                <a href="https://www.youtube.com/watch?v=rCNJniA9YiM" 
                   target="_blank" 
                   class="media-item neumorphic-card p-4 hover:scale-105 transition-transform duration-300 group">
                  <div class="relative overflow-hidden rounded-lg bg-transparent">
                    <img src="https://page.gensparksite.com/v1/base64_upload/ca428cd8fc5239c132209ba69fb99810" 
                         alt="AI Tool Built and Sold to Hospitals" 
                         class="w-full h-36 object-contain" />
                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div class="play-button w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <i class="fas fa-play text-white ml-1"></i>
                      </div>
                    </div>
                    <div class="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                      <i class="fab fa-youtube mr-1"></i>Video
                    </div>
                  </div>
                  <h4 class="text-sm font-semibold mt-3 text-neon-blue">AI Tool - Hospital Acquisition</h4>
                  <p class="text-xs text-gray-400">ReNAD Biologics Success Story</p>
                </a>

                {/* CEO Recognition */}
                <a href="https://www.instagram.com/tv/B-N7h7jlkqv/?igsh=NTc4MTIwNjQ2YQ==" 
                   target="_blank" 
                   class="media-item neumorphic-card p-4 hover:scale-105 transition-transform duration-300 group">
                  <div class="relative overflow-hidden rounded-lg bg-transparent">
                    <img src="https://page.gensparksite.com/v1/base64_upload/c891cb8be9612baaa28ba2f4e36129f8" 
                         alt="CEO of Year Speech - 90 CEOs 16 Countries" 
                         class="w-full h-36 object-contain" />
                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div class="play-button w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <i class="fab fa-instagram text-white"></i>
                      </div>
                    </div>
                    <div class="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                      <i class="fab fa-instagram mr-1"></i>IGTV
                    </div>
                  </div>
                  <h4 class="text-sm font-semibold mt-3 text-neon-blue">CEO Recognition Speech</h4>
                  <p class="text-xs text-gray-400">90 CEOs, 16 Countries</p>
                </a>

              </div>
            </div>
            
            {/* Companies Grid */}
            <div class="companies-section text-center">
              <h3 class="text-3xl font-bold mb-8">Founded Companies</h3>
              <div class="companies-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="company-card neumorphic-card p-6">
                  <h4 class="font-semibold text-neon-blue">ReNAD Biologics</h4>
                  <p class="text-sm text-gray-400 mt-2">AI/Healthcare • Hospital Acquisition</p>
                </div>
                <div class="company-card neumorphic-card p-6">
                  <h4 class="font-semibold text-neon-blue">Riddler Data Intelligence</h4>
                  <p class="text-sm text-gray-400 mt-2">AI/ML Platform • Successful Exit</p>
                </div>
                <div class="company-card neumorphic-card p-6">
                  <h4 class="font-semibold text-neon-blue">DRIHP</h4>
                  <p class="text-sm text-gray-400 mt-2">Healthcare Tech • Market Leader</p>
                </div>
                <div class="company-card neumorphic-card p-6">
                  <h4 class="font-semibold text-neon-blue">Clone Connect</h4>
                  <p class="text-sm text-gray-400 mt-2">Social Platform • Growth Stage</p>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" 
                 target="_blank" 
                 class="primary-button">Schedule Meeting with Luke</a>
            </div>
          </div>
        </section>

        {/* Who This Is For / Not For */}
        <section class="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
          <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-4xl md:text-6xl font-bold mb-16 text-center">Who This Is For</h2>
            
            <div class="grid md:grid-cols-2 gap-12">
              <div class="for-column">
                <h3 class="text-2xl font-bold mb-8 text-green-400">✓ For students who:</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <span class="text-green-400 mr-3 mt-1">✓</span>
                    <span>Want to build a real business, not just study about it</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-3 mt-1">✓</span>
                    <span>Are self-motivated and committed to their success</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-3 mt-1">✓</span>
                    <span>Want to avoid traditional college debt</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-3 mt-1">✓</span>
                    <span>Are creative and entrepreneurial by nature</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-400 mr-3 mt-1">✓</span>
                    <span>Value hands-on learning over theoretical study</span>
                  </li>
                </ul>
              </div>
              
              <div class="not-for-column">
                <h3 class="text-2xl font-bold mb-8 text-red-400">✗ Not for:</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <span class="text-red-400 mr-3 mt-1">✗</span>
                    <span>Students who need constant hand-holding</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-3 mt-1">✗</span>
                    <span>Those seeking traditional academic credentials</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-3 mt-1">✗</span>
                    <span>Students who prefer theoretical over practical</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-3 mt-1">✗</span>
                    <span>Those not willing to take calculated risks</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-400 mr-3 mt-1">✗</span>
                    <span>Students who can't commit to intensive program</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="secondary-button">Request an Invitation</a>
            </div>
          </div>
        </section>

        {/* Tuition & Seats */}
        <section id="tuition" class="py-20 px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="section-title text-4xl md:text-6xl font-bold mb-16">Tuition & Seats<br />(Members-Only)</h2>
            
            <div class="tuition-card neumorphic-card p-12">
              <div class="text-6xl mb-6">🔒</div>
              <h3 class="text-2xl font-bold mb-6">Exclusive Access Required</h3>
              <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
                Tuition information and seat availability are exclusively available to verified members of approved partner organizations. 
                Each cohort is limited to 15 students to ensure personalized attention and accountability.
              </p>
              
              <div class="cta-buttons space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
                <a href="/members" class="primary-button">Access via Member Portal</a>
                <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="secondary-button">Request an Invitation</a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Measure */}
        <section class="py-20 px-6 bg-gradient-to-b from-gray-900/20 to-transparent">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="section-title text-4xl md:text-6xl font-bold mb-16">What We Measure</h2>
            
            <div class="milestones-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div class="milestone neumorphic-card p-6">
                <div class="text-3xl mb-2">🏢</div>
                <p class="text-sm font-semibold">LLC/EIN</p>
              </div>
              <div class="milestone neumorphic-card p-6">
                <div class="text-3xl mb-2">💡</div>
                <p class="text-sm font-semibold">Offer</p>
              </div>
              <div class="milestone neumorphic-card p-6">
                <div class="text-3xl mb-2">🌐</div>
                <p class="text-sm font-semibold">Website Live</p>
              </div>
              <div class="milestone neumorphic-card p-6">
                <div class="text-3xl mb-2">📈</div>
                <p class="text-sm font-semibold">Marketing Channel</p>
              </div>
              <div class="milestone neumorphic-card p-6">
                <div class="text-3xl mb-2">💰</div>
                <p class="text-sm font-semibold">First Customer</p>
              </div>
              <div class="milestone neumorphic-card p-6">
                <div class="text-3xl mb-2">🎭</div>
                <p class="text-sm font-semibold">Demo Day</p>
              </div>
            </div>
            
            <div class="mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="primary-button">See Full Program Details</a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" class="py-20 px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="section-title text-4xl md:text-6xl font-bold mb-16 text-center">FAQs</h2>
            
            <div class="faq-list space-y-6">
              <div class="faq-item neumorphic-card">
                <button class="faq-question w-full text-left p-6 font-semibold text-lg flex justify-between items-center">
                  What makes this different from college?
                  <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="faq-answer hidden p-6 pt-0 text-gray-300">
                  <p>Creator Academy focuses on building real businesses with paying customers, not theoretical knowledge. In six months, you'll have what most college graduates lack: a profitable company and practical skills.</p>
                </div>
              </div>
              
              <div class="faq-item neumorphic-card">
                <button class="faq-question w-full text-left p-6 font-semibold text-lg flex justify-between items-center">
                  Who can apply?
                  <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="faq-answer hidden p-6 pt-0 text-gray-300">
                  <p>Creator Academy is by invitation only for members of approved partner organizations. We work with select educational institutions and organizations that share our values of practical, entrepreneurial education.</p>
                </div>
              </div>
              
              <div class="faq-item neumorphic-card">
                <button class="faq-question w-full text-left p-6 font-semibold text-lg flex justify-between items-center">
                  What kind of support do students receive?
                  <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="faq-answer hidden p-6 pt-0 text-gray-300">
                  <p>Each student receives weekly 1:1 coaching sessions with Luke D'Andrea, access to our network of mentors, peer support from their cohort, and comprehensive resources for every aspect of building a business.</p>
                </div>
              </div>
              
              <div class="faq-item neumorphic-card">
                <button class="faq-question w-full text-left p-6 font-semibold text-lg flex justify-between items-center">
                  What happens after graduation?
                  <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="faq-answer hidden p-6 pt-0 text-gray-300">
                  <p>Graduates own their businesses and continue operating them independently. We provide a 90-day scaling plan and ongoing alumni network support to ensure continued growth and success.</p>
                </div>
              </div>
              
              <div class="faq-item neumorphic-card">
                <button class="faq-question w-full text-left p-6 font-semibold text-lg flex justify-between items-center">
                  Is this program accredited?
                  <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="faq-answer hidden p-6 pt-0 text-gray-300">
                  <p>Creator Academy is not accredited as we focus on practical business outcomes rather than academic credentials. Students graduate with real companies, not degrees—which often prove more valuable in the entrepreneurial world.</p>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="secondary-button">Parent Info Session (20 min)</a>
            </div>
          </div>
        </section>

        {/* Sticky Footer Bar */}
        <div id="sticky-footer" class="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-white/10 p-4">
          <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div class="text-center md:text-left">
              <p class="text-sm">Access via Member Portal — Members-Only, 15 Seats</p>
            </div>
            <div class="flex space-x-4">
              <a href="/members" class="primary-button-small">Access Now</a>
              <a href="https://calendly.com/luke-dandrea-interviews/meeting-with-luke-dandrea" target="_blank" class="text-blue-400 hover:text-blue-300 text-sm">Request an Invitation</a>
            </div>
          </div>
        </div>

        {/* Scripts */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
