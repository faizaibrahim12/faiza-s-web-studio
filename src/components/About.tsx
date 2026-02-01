import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "HTML5 & CSS3",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "PostgreSQL",
  "Node.js",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/30 pattern-overlay">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-charcoal to-charcoal-light rounded-2xl overflow-hidden shadow-lg">
                <div className="h-full w-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-display text-6xl font-bold text-primary mb-4">
                      F
                    </div>
                    <div className="font-display text-2xl text-primary-foreground">
                      Faiza Web Solutions
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Building Digital Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Passionate About Creating{" "}
              <span className="text-primary">Digital Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Hi, I'm Faiza — a freelance web developer dedicated to helping
              businesses and individuals establish a powerful online presence.
              With expertise in modern web technologies, I craft websites that
              are not just beautiful but also fast, responsive, and
              SEO-optimized.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My mission is to transform your ideas into reality, creating
              digital solutions that drive results and leave lasting
              impressions. Whether you need a personal portfolio, a business
              website, or a full-fledged e-commerce platform, I'm here to bring
              your vision to life.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
