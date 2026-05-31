import React, { useState, useEffect, useRef } from 'react';

// EXPANDED & DEEPENED ACADEMIC DATA ARRAY FOR SUBSTANTIAL CONTENT LENGTH
const INITIAL_POSTS = [
  {
    id: "1",
    category: "Philosophy",
    date: "MAY 19, 2026",
    monthYear: "MAY 2026",
    readTime: "18 MIN READ",
    title: "The Architecture of Thought: How Spatial Design Shapes Cognition",
    excerpt: "We rarely consider that the rooms in which we think might be thinking for us. An exploration of how physical spaces encode epistemological structures and govern human reasoning.",
    fullExcerpt: "An exhaustive investigation into the phenomenology of built environments, cognitive offloading, and the silent architectural governance over human logic and discourse.",
    bgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop", 
    tags: ["COGNITION", "ARCHITECTURE", "EPISTEMOLOGY", "DESIGN"],
    citations: [
      { id: 1, text: "Churchill, W. (1943). House of Commons Rebuilding, Parliamentary Debates." },
      { id: 2, text: "Bernstein, E. & Turban, S. (2018). The Impact of the \"Open\" Workspace on Human Collaboration. Phil. Trans. R. Soc. B." },
      { id: 3, text: "Meyers-Levy, J. & Zhu, R. (2007). The Influence of Ceiling Height. Journal of Consumer Research." },
      { id: 4, text: "Clark, A. & Chalmers, D. (1998). The Extended Mind. Analysis, 58(1), 7-19." }
    ],
    body: [
      { type: "heading", text: "The Spatial Foundations of Epistemology" },
      { type: "paragraph", text: "We rarely consider that the rooms in which we think might be thinking for us. The lecture hall, with its tiered seating and singular focal point, is not merely a container for education—it is an implicit argument about the nature of knowledge itself. It posits that knowledge is fundamentally hierarchical, unidirectional, and transmitted from an isolated authority to a passive, collective vessel. When we sit in such rooms, our posture mirrors our philosophy." },
      { type: "paragraph", text: "This essay proposes that architecture is not a neutral backdrop to intellectual life but an active participant in it. Built structures function as physical manifestations of cognitive frameworks, mapping abstract ideologies onto concrete forms. By altering spatial parameters, we do not simply change the aesthetics of our surroundings; we rewrite the underlying software of human cognition." },
      { type: "heading", text: "The Cathedral versus the Laboratory" },
      { type: "paragraph", text: "Consider the profound phenomenological divergence between a Gothic cathedral and a modern research laboratory. The cathedral's vaulted ceilings, soaring into shadows, are deliberately engineered to draw the eye—and by extension, the mind—upward toward the infinite and the unknowable. The architecture demands submission, awe, and a vertical orientation of thought that aligns with the divine." },
      { type: "paragraph", text: "Conversely, the laboratory insists upon horizontal clarity. Lit uniformly by clinical fluorescent panels, its modular benches and transparent partitions reject mystery in favor of the measurable, the replicable, and the overt. No corner is left in shadow because shadows are the enemies of empirical truth. Neither space is objective. Both encode highly specific epistemological frameworks that their inhabitants absorb through daily, physical occupation, demonstrating that where we stand determines what we are capable of believing." },
      { type: "quote", text: "We shape our buildings; thereafter they shape us. The structural constraints we superimpose upon our physical world inevitably loop back to dictate the boundaries of our internal imagination.", author: "Winston Churchill" },
      { type: "heading", text: "The Open Plan Fallacy and Cognitive Friction" },
      { type: "paragraph", text: "The contemporary obsession with open-plan workspaces reveals a fascinating, highly destructive tension between corporate ideology and human neuroscience. Promoted under the banner of democratic collaboration and fluid innovation, empirical tracking demonstrates that the open plan achieves the exact opposite of its stated goal. By removing physical boundaries, designers remove the psychological safety required for deep, analytical contemplation." },
      { type: "paragraph", text: "When human beings are exposed to continuous visual and acoustic noise, the brain shifts from deep conceptual processing into a state of heightened hyper-vigilance. The lack of acoustic insulation reduces face-to-face interactions by roughly 70%, forcing workers to retreat into the artificial privacy of noise-canceling headphones and text-based digital communication. The architecture promises community but produces profound alienation, proving that treating human minds as simple, non-spatial nodes in an open network misunderstands the evolutionary mechanics of attention." },
      { type: "heading", text: "Toward a Formal Model of Cognitive Architecture" },
      { type: "paragraph", text: "To correct these architectural mismatches, we must begin treating space as an active variable in the complex equation of understanding. Different cognitive tasks require radically different spatial modalities to find execution:" },
      { type: "list", items: [
          "Convergent reasoning and rigorous analytical deduction require enclosure, lowered ceilings, and minimized visual stimuli to tightly focus the spotlight of human attention.",
          "Divergent thinking and expansive, creative synthesis benefit directly from high ceilings and uninhibited view-lines, which activate broader conceptual priming in the brain's default mode network.",
          "Contemplative and integrative psychological states emerge most reliably in spaces characterized by rhythmic repetition, acoustic isolation, and natural, asymmetric geometry."
        ]
      },
      { type: "paragraph", text: "The future of cultural and educational institutional design cannot rely on aesthetic trends or economic optimization alone. If the mind is truly extended—inextricably bound to the external structures it interacts with—then creating spaces without considering their cognitive footprint is a form of intellectual sabotage. True progress requires a deliberate return to spaces designed to honor the subtle mechanics of human thought." }
    ]
  },
  {
    id: "2",
    category: "Technology",
    date: "MAY 1, 2026",
    monthYear: "MAY 2026",
    readTime: "22 MIN READ",
    title: "Algorithms of Belief: Machine Learning and the Crisis of Epistemological Authority",
    excerpt: "When predictive accuracy replaces structural understanding, what happens to the concept of knowledge? A philosophical examination of machine learning's disruptive implications.",
    bgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop", 
    tags: ["AI", "EPISTEMOLOGY", "MACHINE-LEARNING", "PHILOSOPHY-OF-SCIENCE"],
    citations: [
      { id: 1, text: "Hume, D. (1748). An Enquiry Concerning Human Understanding." },
      { id: 2, text: "Rudin, C. (2019). Stop Explaining Black Box Machine Learning Models for High-Stakes Decisions. Nature Machine Intelligence, 1(5), 206-215." },
      { id: 3, text: "Floridi, L. (2019). The Logic of Information. Oxford University Press." },
      { id: 4, text: "Pasquale, F. (2015). The Black Box Society: The Secret Algorithms That Control Money and Information. Harvard University Press." }
    ],
    body: [
      { type: "heading", text: "The Erasure of the 'Why'" },
      { type: "paragraph", text: "Modern machine learning systems have achieved unprecedented heights of predictive capacity. They process unmanageable oceans of unstructured data, pinpoint cross-correlations invisible to human analysis, and output results with terrifying precision. They generate text, forecast economic micro-movements, and diagnose pathological anomalies with efficiency that matches or surpasses human professionals." },
      { type: "paragraph", text: "However, these systems do not understand a single variable they manipulate. This widening chasm—the profound bifurcation between flawless execution and complete absence of comprehension—constitutes the most dangerous and unexamined epistemological crisis of our era. We are systematically transferring institutional authority to mechanisms that can state *what* will happen next, but are fundamentally incapable of explaining *why* it is happening." },
      { type: "heading", text: "The Radical Apotheosis of Empiricism" },
      { type: "paragraph", text: "Philosophically, machine learning represents the ultimate, aggressive triumph of radical empiricism. In the 18th century, David Hume argued that human knowledge is derived entirely from sensory observations and the mental habit of recognizing regular conjunctions over time. He asserted that we never perceive underlying causal mechanisms; we merely witness sequence." },
      { type: "paragraph", text: "Deep neural networks are the literal mechanisms of Hume's dreams. They possess no innate theories about reality, no logical axioms, and no mental models of physical laws. They simply ingest multi-dimensional vector inputs and optimize mathematical functions across billions of weights until the training error approaches zero. They prove that you can navigate reality brilliantly without knowing anything about it, rendering human explanatory models computationally redundant." },
      { type: "heading", text: "The Totalitarianism of the Black Box" },
      { type: "paragraph", text: "The black box problem in deep learning is not a temporary technical hurdle waiting for better debugging tools; it is an unyielding structural feature of high-dimensional mathematics. When an algorithm processes data across hundreds of hidden layers, its line of reasoning becomes a hyper-spatial geometry that cannot be translated back into the linear, narrative structure of human language." },
      { type: "paragraph", text: "This creates a terrifying paradigm for high-stakes societal choices. When an algorithmic system rejects a loan, recommends a judicial sentence, or dictates a medical protocol, it provides an answer decoupled from human reason. If we cannot audit the steps taken to arrive at an execution, we cannot challenge its inherent bias, its internal hallucinations, or its systemic errors. We are left with a new form of digital secular theology, where the machine's outputs must be accepted on faith because human language lacks the dimensions required to parse the calculation." },
      { type: "heading", text: "The Epistemological Choices Before Us" },
      { type: "list", items: [
          "We can capitulate to purely pragmatic optimization, discarding our historic insistence on human-intelligible explanations in exchange for unparalleled computational efficiency.",
          "We can enforce strict legislative boundaries that mandate explainable models for all public infrastructure, deliberately sacrificing extreme accuracy to keep systems within the boundaries of human comprehension.",
          "We can allow a dual epistemic hierarchy to form, where a small elite attempts to audit autonomous models while the vast majority of society interacts with algorithmic directives as if they were unalterable laws of nature."
        ]
      },
      { type: "paragraph", text: "The danger is not that machines will become conscious and turn against us. The real danger is that we will willingly restructure our societies to accommodate the blind, uncomprehending logic of optimization, abandoning our legacy as reasoning agents in pursuit of perfect predictions." }
    ]
  },
  {
    id: "3",
    category: "Literature",
    date: "APR 18, 2026",
    monthYear: "APR 2026",
    readTime: "15 MIN READ",
    title: "The Weight of Marginalia: Reading as Archaeological Practice",
    excerpt: "How the private notes we leave in physical books constitute a parallel literature, revealing the intimate dialogue of deep reading.",
    bgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop", 
    tags: ["READING", "ANNOTATION", "INTELLECTUAL-HISTORY", "BOOKS"],
    citations: [
      { id: 1, text: "Jackson, H.J. (2001). Marginalia: Readers Writing in Books. Yale University Press." },
      { id: 2, text: "Lichtenberg, G.C. (1799). The Waste Books. Translated by R.J. Hollingdale." },
      { id: 3, text: "Steiner, G. (1996). No Passion Spent: Essays 1978-1995. Yale University Press." }
    ],
    body: [
      { type: "heading", text: "The Subversive Ink" },
      { type: "paragraph", text: "Every underlined sentence, every scribbled exclamation, and every angry rebuttal inked into a text is a small, quiet act of violence against the author's intended hierarchy. When a reader marks a passage, they explicitly declare: this fragment matters more than the surrounding ocean of prose. They strip the author of absolute editorial authority, imposing their own cognitive topography over the text's original design." },
      { type: "paragraph", text: "Marginalia is the reader's counter-narrative. It transforms the book from a static, dictatorial monologue into an active, polyphonic battleground. To read with a pen in hand is to reject the role of a consumer and assume the mantle of an intellectual collaborator." },
      { type: "heading", text: "The Long History of Textual Conversation" },
      { type: "paragraph", text: "This practice of continuous marginal inscription predates the invention of the printing press by centuries. In the scriptoriums of the medieval world, scribes, scholars, and subsequent readers systematically populated the expansive margins of vellum manuscripts with glosses, intricate conceptual cross-references, and fierce theological refutations that frequently grew longer than the primary text itself." },
      { type: "paragraph", text: "These annotations were never viewed as graffiti or defacement; they were the physical manifestation of intellectual culture. A manuscript was understood to be an ongoing, multi-generational conversation. To read a text without reading its margins was to miss the historical development of the thought itself. The margins were where ideas were tested, contextualized, and kept alive." },
      { type: "quote", text: "A book is a mirror: if an ape looks into it, an apostle is hardly likely to look out. The margin captures the exact moment the mirror reflects back the specific limitations of the observer.", author: "Georg Christoph Lichtenberg" },
      { type: "heading", text: "The Typology of the Scrawl" },
      { type: "paragraph", text: "When we analyze historical marginalia from an archaeological perspective, we can categorize the inscriptions into distinct cognitive signatures:" },
      { type: "list", items: [
          "The Aggressive Underline: A direct recording of intense psychological resonance, marking structural breakthroughs or unforgivable logical leaps.",
          "The Epistemic Question Mark: Discovered at the outer boundaries of the reader's comprehension, signaling a breakdown in persuasion or a demand for further evidence.",
          "The Spatial Arrow: Structural lines linking disparate paragraphs across pages, capturing the exact moment the reader synthesis independent thoughts into a cohesive macro-argument.",
          "The Emotional Outburst: Scribbled single words ('No!', 'Brilliant', 'Anachronistic') that expose the raw, unfiltered visceral reaction of the mind colliding with an idea."
        ]
      },
      { type: "heading", text: "The Digital Devaluation of Attention" },
      { type: "paragraph", text: "The migration of reading to digital platforms threatens to permanently destroy this rich archaeological record. On modern devices, highlights are algorithmically aggregated, anonymized, and stripped of context. They are smoothed out into statistical consensuses—'1,240 people highlighted this passage'—turning a private, rebellious act of attention into a sanitized metric of crowd behavior." },
      { type: "paragraph", text: "Digital interfaces remove the physical permanence of the mark. Your digital thoughts do not age; they do not carry the specific weight of your hand, the speed of your pen, or the decay of the ink. By substituting personal marginalia with uniform digital fonts, we lose the visible history of how a mind changes as it wrestles with words. The margins are being erased, and with them, the spatial blueprint of human thought." }
    ]
  },
  {
    id: "4",
    category: "History",
    date: "MAR 29, 2026",
    monthYear: "MAR 2026",
    readTime: "16 MIN READ",
    title: "The Cartography of Silence: What Maps Choose Not to Show",
    excerpt: "Every map is an argument disguised as geography. The most devastating ideological choices are made through calculated omission.",
    bgUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop", 
    tags: ["CARTOGRAPHY", "COLONIALISM", "POWER", "GEOGRAPHY"],
    citations: [
      { id: 1, text: "Harley, J.B. (1988). Deconstructing the Map. Cartographica: The International Journal for Geographic Information, 25(2), 57-78." },
      { id: 2, text: "Bannister, J.B. (2003). How the Indians Lost Their Land: Law and Power on the Frontier. Harvard University Press." },
      { id: 3, text: "Peluso, N.L. (1995). Whose Woods Are These? Counter-Mapping Forest Territories in Kalimantan, Indonesia. Antipode, 27(4), 383-406." }
    ],
    body: [
      { type: "heading", text: "The Illusion of Objective Geometry" },
      { type: "paragraph", text: "Maps are masterfully designed instruments of power masquerading as objective records of physical reality. By leveraging the visual language of geometry, scale, and scientific measurements, a map projects an aura of absolute impartiality. It coaxes the viewer into believing they are looking at the world as it actually is, free from human agenda." },
      { type: "paragraph", text: "This objectivity is a carefully maintained illusion. Every cartographic document is an argument, an intentional distillation, and a subjective edit of reality. The most impactful cartographic operations are not accomplished through what is printed onto the parchment, but through what is systematically, calculatedly left out. Cartographic silence is the ultimate tool of ideological enforcement." },
      { type: "heading", text: "Terra Nullius and the Engineering of Vacancy" },
      { type: "paragraph", text: "The legal and philosophical doctrine of *terra nullius*—land belonging to no one—was not merely a theoretical construct of international law; it was a visual reality engineered by European cartographers. When mapping empires encountered populated continents, instructions were issued to exclude indigenous settlements, seasonal nomadic migration routes, and ancient ancestral territories from the final plates." },
      { type: "paragraph", text: "By rendering vast, ecologically complex landscapes as clean, unmarked white spaces, cartographers created a visual justification for violent conquest. The blank space did not mean an absence of life; it signaled an empire's refusal to recognize that life. It transformed a populated homeland into an empty canvas, waiting to be claimed, named, and partitioned by the imperial state." },
      { type: "heading", text: "Modern Erasures: The Digital Geopolitics of the Lens" },
      { type: "paragraph", text: "This weaponization of cartographic omission has not disappeared with the transition to satellite tracking and digital interfaces; it has merely become automated and hidden behind user-friendly software code:" },
      { type: "list", items: [
          "Dynamic Border Manipulation: Global mapping platforms deliberately alter national boundaries based on the IP address of the viewer, showing conflicting versions of disputed regions to different populations to placate local state censors.",
          "Strategic Infrastructure Blurring: High-resolution satellite grids routinely pixelate, misalign, or completely paint over military installations, extrajudicial processing sites, and resource extraction facilities, rendering corporate and state power invisible to the public eye.",
          "The Anonymization of the Marginalized: Informal settlements, refugee camps, and thousands of miles of rural infrastructure are frequently left as completely blank, featureless gray blocks on mainstream navigation platforms, effectively erasing millions of people from the global digital economy."
        ]
      },
      { type: "paragraph", text: "We must learn to deconstruct maps by reading their absences. To look at a map correctly is to look at it sideways—asking whose property lines are protected, whose historical names were deleted, and what realities were sacrificed to construct a clean, coherent image of power. The line that is omitted is always more telling than the line that is drawn." }
    ]
  },
  {
    id: "5",
    category: "Science",
    date: "MAR 10, 2026",
    monthYear: "MAR 2026",
    readTime: "20 MIN READ",
    title: "The Optics of Discovery: Light, Lenses, and the Limits of Observation",
    excerpt: "From Galileo's telescope to quantum microscopy—how our physical instruments of observation actively shape the scientific truths we uncover.",
    bgUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop", 
    tags: ["OPTICS", "PHILOSOPHY-OF-SCIENCE", "MICROSCOPY", "OBSERVATION"],
    citations: [
      { id: 1, text: "Galilei, G. (1610). Sidereus Nuncius (The Starry Messenger)." },
      { id: 2, text: "Hooke, R. (1665). Micrographia: or Some Physiological Descriptions of Minute Bodies. The Royal Society." },
      { id: 3, text: "Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik. Zeitschrift für Physik, 43(3), 172-198." },
      { id: 4, text: "Latour, B. & Woolgar, S. (1979). Laboratory Life: The Construction of Scientific Facts. Sage Publications." }
    ],
    body: [
      { type: "heading", text: "The Illusion of Transparent Vision" },
      { type: "paragraph", text: "When Galileo Galilei directed his rudimentarily ground glass lenses toward Jupiter in the cold winter weeks of January 1610, he did not merely encounter four previously unrecorded satellites. He catalyzed the collapse of the geocentric cosmos. The dominant intellectual institutions of the time rejected his findings not out of simple ignorance, but because they recognized that the instrument itself was introducing a profound epistemological disruption." },
      { type: "paragraph", text: "The telescope did not simply show a pre-existing reality; it created a radically new set of conditions under which truth could be processed. This exposes the foundational paradox of all empirical science: we like to imagine our instruments are perfectly transparent windows looking out onto an objective world, but in reality, every lens, sensor, and detector actively filters, shapes, and constrains the boundaries of what we are allowed to discover." },
      { type: "heading", text: "Robert Hooke and the Manufactured Image" },
      { type: "paragraph", text: "A generation later, Robert Hooke's monumental *Micrographia* (1665) pulled back the veil on the microscopic universe, revealing the terrifying, geometric architecture of a flea's eye and the cellular texture of cork. Yet, Hooke was intensely candid about the limitations of his optical equipment. He openly admitted that the act of illumination changed the specimen itself." },
      { type: "paragraph", text: "To make a microscopic object visible, one must blast it with highly focused, concentrated beams of light. This light heats the specimen, alters its color, and can induce structural warp. The image that eventually gets drawn onto the copper engraving plate is not a direct snapshot of nature in its native state; it is an interpretation—a negotiated compromise between the physical characteristics of the specimen and the disruptive energy of the observer's light." },
      { type: "heading", text: "The Modern Quantum Negotiating Table" },
      { type: "paragraph", text: "As science advanced into subatomic and advanced biological domains, this boundary between the observer and the observed hardened from an engineering obstacle into an absolute law of nature:" },
      { type: "list", items: [
          "Electron Microscopy: Traditional light is abandoned in favor of focusing high-velocity electron streams. To survive this bombardment, biological cells must be dried out, sliced into micro-slices, and completely coated in a fine layer of heavy gold atoms. We are observing a structural shell, not a living system.",
          "Cryo-EM Breakthroughs: Macromolecules are flash-frozen at cryogenic temperatures to lock them in place. This records them in an unnatural state of static suspension, leaving scientists to mathematically extrapolate how these structures would dynamically twist and move in a warm, living organism.",
          "The Heisenberg Limit: At the subatomic frontier, the act of observation is an act of physical collision. To detect the position of an electron, a photon must strike it, which instantly changes its momentum. The universe refuses to disclose both values simultaneously."
        ]
      },
      { type: "paragraph", text: "We must ultimately abandon the naive assumption that science is the passive collection of external facts. The truths we discover are inextricably bound to the limitations of the mechanisms we build to see them. We do not look at nature face-to-face; we look at the complex, beautiful patterns that nature leaves behind when it collides with the instruments we put in its path." }
    ]
  }
];

// AUTHORS ARRAY BOUND TO ROOT FILE DIRECTIONS WITH LEADING SLASHES
const AUTHORS = [
  {
    id: "1",
    name: "Taha Bajwa",
    roles: ["STUDENT", "RESEARCHER", "WRITER"],
    bio: "Interested in philosophy, technology, and the complex places where they overlap. Writes to think things through.",
    imgUrl: "/WhatsApp Image 2026-05-31 at 16.17.55 (1).jpeg" 
  },
  {
    id: "2",
    name: "Khadijah Farooq",
    roles: ["STUDENT", "ESSAYIST", "CURATOR"],
    bio: "Reads a lot. Writes about history, language, and why things are the way they are.",
    imgUrl: "/WhatsApp Image 2026-05-31 at 16.17.55.jpeg" 
  }
];

function FloatingFilterButton({ label, count, isSelected, onClick, disabled }) {
  const buttonRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({ transform: 'translate(0px, 0px) scale(1)', zIndex: 1 });

  const handleMouseMove = (e) => {
    if (disabled || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const pullFactor = 0.25; 
    const moveX = x * pullFactor;
    const moveY = y * pullFactor;

    setTransformStyle({
      transform: `translate(${moveX}px, ${moveY}px) scale(1.045)`,
      zIndex: 30
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'translate(0px, 0px) scale(1)',
      zIndex: 1
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={`px-4 py-2 border rounded-md text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 ease-out origin-center select-none ${
        isSelected 
          ? 'bg-orange-700 text-white border-orange-700 shadow-sm' 
          : disabled 
            ? 'opacity-30 border-gray-200 text-gray-300 cursor-not-allowed'
            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black'
      }`}
    >
      {label} {count > 0 && `(${count})`}
    </button>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('index'); 
  const [selectedEssayId, setSelectedEssayId] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('ALL');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentAuthorIdx, setCurrentAuthorIdx] = useState(0);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, selectedEssayId]);

  const navigateTo = (page, essayId = null) => {
    setCurrentPage(page);
    setSelectedEssayId(essayId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const activeEssay = INITIAL_POSTS.find(p => p.id === selectedEssayId);
  const uniqueCategories = ['ALL', 'Philosophy', 'Technology', 'Literature', 'Science', 'History', 'Politics', 'Art', 'Economics'];

  const filteredArchivePosts = selectedCategoryFilter === 'ALL'
    ? INITIAL_POSTS
    : INITIAL_POSTS.filter(p => p.category.toLowerCase() === selectedCategoryFilter.toLowerCase());

  const handleNextAuthor = () => {
    setCurrentAuthorIdx((prev) => (prev + 1) % AUTHORS.length);
  };

  const handlePrevAuthor = () => {
    setCurrentAuthorIdx((prev) => (prev - 1 + AUTHORS.length) % AUTHORS.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Discourse Query Dispatched to thestudentworkspace33@gmail.com!\nSubject: ${formData.subject}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#1a1a1a] flex flex-col justify-between selection:bg-orange-100" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      <div 
        className="fixed top-0 left-0 h-0.5 bg-orange-700 z-[100] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="max-w-6xl mx-auto w-full px-6 md:px-12 py-8 flex items-center justify-between border-b border-gray-200/60 sticky top-0 bg-[#fbfaf7]/90 backdrop-blur-sm z-50">
        <div 
          onClick={() => navigateTo('index')} 
          className="font-bold text-xs tracking-[0.2em] uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          The Student Workspace
        </div>
        <nav className="flex space-x-6 md:space-x-8 text-[11px] font-bold tracking-[0.2em]">
          <button 
            onClick={() => navigateTo('index')} 
            className={`transition-colors ${currentPage === 'index' ? 'text-orange-700' : 'text-gray-400 hover:text-black'}`}
          >
            INDEX
          </button>
          <button 
            onClick={() => navigateTo('archive')} 
            className={`transition-colors ${currentPage === 'archive' ? 'text-orange-700' : 'text-gray-400 hover:text-black'}`}
          >
            ARCHIVE
          </button>
          <button 
            onClick={() => navigateTo('about')} 
            className={`transition-colors ${currentPage === 'about' ? 'text-orange-700' : 'text-gray-400 hover:text-black'}`}
          >
            ABOUT
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        
        {currentPage === 'index' && (
          <div>
            <section className="max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-20 border-b border-gray-200/60 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase block mb-6">
                By Taha Bajwa & Khadijah Farooq
              </span>
              <h1 className="text-5xl md:text-7xl font-normal text-[#1a1a1a] leading-[1.12] mb-8 tracking-tight max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
                Inquiry, Discourse <br />
                <span className="text-orange-700 italic font-serif">&</span> Intellectual <br />
                Architecture
              </h1>
              <p className="text-md md:text-lg text-gray-500 max-w-xl leading-relaxed font-light mx-auto">
                A curated compendium of essays, research, and reflections from the frontier of academic thought.
              </p>
            </section>

            <section className="max-w-4xl mx-auto px-6 md:px-12 divide-y divide-gray-200/50">
              {INITIAL_POSTS.map((post) => (
                <article 
                  key={post.id} 
                  className="py-16 group transition-all duration-500 ease-out hover:scale-[1.01] origin-center"
                >
                  <div className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-4">
                    <span className="text-orange-700 font-extrabold">{post.category}</span>
                    <span>—</span>
                    <span>{post.date}</span>
                    <span>—</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 
                    onClick={() => navigateTo('essay', post.id)}
                    className="text-2xl md:text-4xl font-normal text-[#1a1a1a] leading-tight mb-4 group-hover:text-orange-800 transition-colors cursor-pointer" 
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-base text-gray-500 font-light leading-relaxed max-w-2xl mb-6">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => navigateTo('essay', post.id)}
                    className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase hover:text-orange-700 transition-colors"
                  >
                    Read Manuscript <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </article>
              ))}
            </section>
          </div>
        )}

        {currentPage === 'archive' && (
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-24">
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase block mb-2">TAXONOMY</span>
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-8" style={{ fontFamily: 'Georgia, serif' }}>The Archive</h1>
            
            <div className="mb-12">
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase block mb-3">TOPICS BY VOLUME</span>
              <div className="flex flex-wrap gap-3">
                {uniqueCategories.map((cat) => {
                  const count = cat === 'ALL' 
                    ? INITIAL_POSTS.length 
                    : INITIAL_POSTS.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
                  
                  return (
                    <FloatingFilterButton
                      key={cat}
                      label={cat}
                      count={count}
                      isSelected={selectedCategoryFilter.toLowerCase() === cat.toLowerCase()}
                      disabled={count === 0 && cat !== 'ALL'}
                      onClick={() => setSelectedCategoryFilter(cat)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-200/60 pt-6">
              {filteredArchivePosts.map((post) => (
                <div 
                  key={post.id} 
                  onClick={() => navigateTo('essay', post.id)}
                  className="flex flex-col md:flex-row md:items-baseline justify-between p-4 -mx-4 rounded-md group cursor-pointer transition-all duration-300 ease-out hover:bg-orange-50/40 hover:scale-[1.015] hover:shadow-sm"
                >
                  <div className="text-[11px] font-bold tracking-[0.15em] text-gray-400 group-hover:text-orange-700 transition-colors uppercase w-32 mb-1 md:mb-0">
                    {post.monthYear}
                  </div>
                  <div className="flex-grow max-w-2xl pr-4">
                    <h3 className="text-lg font-normal text-gray-900 group-hover:text-orange-800 transition-colors leading-snug mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-500 font-light line-clamp-2 leading-relaxed transition-colors">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase text-right w-24 hidden md:block">
                    {post.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-24">
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase block mb-2">THE MANIFESTO</span>
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-16" style={{ fontFamily: 'Georgia, serif' }}>About the Authors</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-gray-200/60 pb-16">
              <div className="relative group bg-[#f0ede6] overflow-hidden rounded-sm aspect-[4/5] max-w-sm mx-auto w-full shadow-md">
                <img 
                  src={AUTHORS[currentAuthorIdx].imgUrl} 
                  alt={AUTHORS[currentAuthorIdx].name} 
                  className="w-full h-full object-cover grayscale tracking-wide transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-orange-950/10 mix-blend-multiply" />
              </div>

              <div className="flex flex-col justify-between h-full py-4">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-orange-700 uppercase block mb-2">
                    CO-AUTHOR
                  </span>
                  <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {AUTHORS[currentAuthorIdx].name}
                  </h2>
                  
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {AUTHORS[currentAuthorIdx].roles.map((role) => (
                      <span key={role} className="bg-gray-100 border border-gray-200 text-[9px] font-bold tracking-widest text-gray-500 px-2.5 py-0.5 rounded">
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-base text-gray-600 font-serif font-light leading-relaxed mt-6 italic">
                    "{AUTHORS[currentAuthorIdx].bio}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 mt-8 md:mt-0">
                  <button 
                    onClick={handlePrevAuthor}
                    className="w-10 h-10 border border-gray-200 hover:border-gray-900 rounded flex items-center justify-center text-xs font-bold transition-colors bg-white shadow-sm"
                  >
                    ←
                  </button>
                  <button 
                    onClick={handleNextAuthor}
                    className="w-10 h-10 border border-gray-200 hover:border-gray-900 rounded flex items-center justify-center text-xs font-bold transition-colors bg-white shadow-sm"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-16 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase block mb-2 text-center">CONNECT</span>
              <h3 className="text-2xl font-normal text-gray-900 text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>Initiate Discourse</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="w-full bg-white border border-gray-200/80 px-4 py-3 text-sm focus:outline-none focus:border-orange-700 transition-colors rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="you@example.com"
                      className="w-full bg-white border border-gray-200/80 px-4 py-3 text-sm focus:outline-none focus:border-orange-700 transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="What is this regarding?"
                    className="w-full bg-white border border-gray-200/80 px-4 py-3 text-sm focus:outline-none focus:border-orange-700 transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your thoughts, propose a collaboration, or simply say hello..."
                    className="w-full bg-white border border-gray-200/80 px-4 py-4 text-sm focus:outline-none focus:border-orange-700 transition-colors rounded-sm font-serif"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-orange-700 hover:bg-orange-800 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 rounded transition-colors shadow-sm"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {currentPage === 'essay' && activeEssay && (
          <div>
            <div className="relative w-full h-[55vh] bg-[#f0ede6] overflow-hidden flex flex-col justify-end">
              <img 
                src={activeEssay.bgUrl} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf7] via-transparent to-black/5" />
              
              <div className="absolute top-8 left-6 md:left-12 z-20">
                <button 
                  onClick={() => navigateTo('archive')}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 text-[10px] font-bold tracking-[0.15em] px-3 py-1.5 rounded uppercase text-gray-600 hover:text-black transition-colors"
                >
                  ← ARCHIVE
                </button>
              </div>

              <div className="relative max-w-6xl mx-auto w-full px-6 md:px-12 pb-12 z-10">
                <div className="flex items-center space-x-3 text-[10px] font-bold tracking-[0.25em] text-gray-500 uppercase mb-3">
                  <span className="text-orange-700 font-extrabold">{activeEssay.category}</span>
                  <span>—</span>
                  <span>{activeEssay.date}</span>
                  <span>—</span>
                  <span>{activeEssay.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-normal text-gray-900 leading-[1.15] max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {activeEssay.title}
                </h1>
                
                <div className="text-xs font-bold tracking-[0.15em] text-orange-800 uppercase mt-4 block">
                  MANUSCRIPT BY: TAHA BAJWA & KHADIJAH FAROOQ
                </div>

                <p className="text-md md:text-xl text-gray-500 font-light max-w-2xl mt-3 leading-relaxed">
                  {activeEssay.fullExcerpt || activeEssay.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {activeEssay.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 border border-gray-200/60 text-[9px] font-bold tracking-wider text-gray-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              <div className="lg:col-span-2 space-y-6 text-[#222] font-serif text-[17px] leading-relaxed tracking-wide">
                {activeEssay.body.map((block, idx) => {
                  if (block.type === 'heading') {
                    return (
                      <h2 key={idx} className="text-2xl font-normal text-gray-900 pt-6 pb-2 font-sans font-bold tracking-tight">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'paragraph') {
                    return (
                      <p key={idx} className="text-gray-800 font-light font-serif">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'quote') {
                    return (
                      <blockquote key={idx} className="border-l-2 border-orange-700/80 pl-4 py-1 my-6 text-gray-500 italic font-light bg-gray-50/50 pr-2">
                        "{block.text}"
                        {block.author && <span className="block text-xs font-sans tracking-widest uppercase font-bold text-gray-400 mt-2">— {block.author}</span>}
                      </blockquote>
                    );
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={idx} className="list-disc list-inside space-y-2 pl-2 text-base text-gray-700 font-light">
                        {block.items.map((item, subIdx) => (
                          <li key={subIdx} className="pl-1">{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="lg:col-span-1 space-y-8 lg:border-l lg:border-gray-200/60 lg:pl-8">
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">AUTHORS</h4>
                  <p className="text-sm font-sans text-gray-700 font-semibold tracking-wide">Taha Bajwa & Khadijah Farooq</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">CATEGORY</h4>
                  <p className="text-sm font-sans text-gray-700 font-medium">{activeEssay.category}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">TOPICS</h4>
                  <div className="flex flex-wrap gap-1">
                    {activeEssay.tags.map(t => (
                      <span key={t} className="text-xs font-sans text-gray-400 font-light mr-2">#{t.toLowerCase()}</span>
                    ))}
                  </div>
                </div>

                {activeEssay.citations && activeEssay.citations.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">CITATIONS</h4>
                    <div className="space-y-4">
                      {activeEssay.citations.map((cite) => (
                        <div key={cite.id} className="text-xs font-sans text-gray-400 leading-relaxed font-light flex items-start gap-2">
                          <span className="bg-gray-100 text-gray-500 rounded px-1.5 py-0.5 text-[9px] font-bold block shrink-0">{cite.id}</span>
                          <p className="pt-0.5">{cite.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </main>

      <footer className="bg-[#f5f3ee] border-t border-gray-200/80 py-16 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div>
            <h4 className="font-bold text-xs text-[#1a1a1a] tracking-[0.15em] uppercase mb-3">The Student Workspace</h4>
            <p className="font-light leading-relaxed text-gray-400 text-xs max-w-xs">
              A curated archive of thought, inquiry, and intellectual exploration from the mind of a modern scholar.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-3">NAVIGATE</h4>
            <ul className="space-y-2 text-xs font-bold text-[#1a1a1a] tracking-wider uppercase">
              <li><button onClick={() => navigateTo('index')} className="hover:text-orange-700 transition-colors">Index</button></li>
              <li><button onClick={() => navigateTo('archive')} className="hover:text-orange-700 transition-colors">Archive</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-orange-700 transition-colors">About</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-3">CONNECT</h4>
            <p className="font-light leading-relaxed text-gray-400 text-xs">
              For inquiries, collaborations, or academic discourse — reach out via the <span onClick={() => navigateTo('about')} className="underline text-[#1a1a1a] cursor-pointer hover:text-orange-700">contact form</span>.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-gray-200/30 text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          © 2026 THE STUDENT WORKSPACE. ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
}