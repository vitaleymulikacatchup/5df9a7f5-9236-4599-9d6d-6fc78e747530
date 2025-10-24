"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Briefcase, Calendar, Lightbulb, Mail, Network, Quote, Share2, Star, Target, TrendingUp, Users, Video } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="RPRT"
          button={{
            text: "Contact Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premier Sports + Talent Management"
          description="We handle everything from public relations to career management, endorsements to contract negotiations for elite talent and athletes across diverse market niches."
          tag="RPRT Sports"
          tagIcon={Star}
          buttons={[
            {
              text: "Our Services",
              href: "about"
            },
            {
              text: "Get In Touch",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5989941/pexels-photo-5989941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional talent management team"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="What We Do"
          description="RPRT specializes in comprehensive talent and athlete management, utilizing our vast network of industry contacts to create exceptional opportunities for our clients."
          tag="Expertise"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Talent Management",
              description: "Complete career management from public relations to endorsement deals and contract negotiations",
              icon: Users
            },
            {
              title: "Industry Network",
              description: "Extensive database of talent, brands, and studio contacts built over years of experience",
              icon: Network
            },
            {
              title: "Proven Results",
              description: "Nearly a decade of success as the go-to source for premium talent placement and management",
              icon: TrendingUp
            }
          ]}
          imageSrc="https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Entertainment industry professionals"
          imagePosition="left"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive solutions for talent management, production, marketing, and brand development in the entertainment industry."
          tag="Services"
          tagIcon={Briefcase}
          features={[
            {
              title: "Talent & Athlete Management",
              description: "Complete career management including public relations, endorsements, and contract negotiations for elite talent across various market niches.",
              icon: Star
            },
            {
              title: "Film/TV/UGC Production",
              description: "Full-service production utilizing our talent database and industry contacts to create compelling branded content and entertainment projects.",
              icon: Video
            },
            {
              title: "PR & Product Placement",
              description: "Strategic placement of products in film, TV, music videos, and with celebrities, backed by nearly a decade of industry reputation.",
              icon: Target
            },
            {
              title: "Brand Development & Consulting",
              description: "Expert guidance to help companies infiltrate the Hollywood landscape and achieve exponential marketing growth through industry connections.",
              icon: Lightbulb
            },
            {
              title: "Events Management",
              description: "End-to-end event production from red carpet premieres to product launches, ensuring memorable experiences with comprehensive media coverage.",
              icon: Calendar
            },
            {
              title: "Social Media Marketing",
              description: "Strategic social media campaigns across Twitter, Facebook, Instagram, and TikTok to maximize brand exposure and consumer engagement.",
              icon: Share2
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Success Stories"
          description="Hear from the talent and brands we've helped achieve extraordinary results in the entertainment industry."
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Actress & Producer",
              company: "Independent Films",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Creative Director",
              company: "Major Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9811317/pexels-photo-9811317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Brand Manager",
              company: "Lifestyle Brand",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Talent Agent",
              company: "Entertainment Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7715790/pexels-photo-7715790.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Elevate Your Career?"
          description="Contact us today to discuss how RPRT can help you achieve your goals in the entertainment industry. For our complete client roster, reach out directly."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By submitting, you agree to our terms. We respect your privacy and will respond promptly."
          imageSrc="https://images.pexels.com/photos/3790805/pexels-photo-3790805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="RPRT entertainment office"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Talent Management",
                  href: "services"
                },
                {
                  label: "Film & TV Production",
                  href: "services"
                },
                {
                  label: "PR & Product Placement",
                  href: "services"
                },
                {
                  label: "Brand Consulting",
                  href: "services"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact Info",
              items: [
                {
                  label: "info@rp-rt.com",
                  href: "mailto:info@rp-rt.com"
                },
                {
                  label: "310-806-3672",
                  href: "tel:310-806-3672"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | RPRT Sports + Talent Management"
        />
      </div>
    </ThemeProvider>
  );
}