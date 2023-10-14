import AboutUsSection from "@/components/AboutUsSection";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";
import ProductSection from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className=" ">
      <HeaderSection />
      <ClientSection />
      <ProductSection />
      <ServiceSection />
      <AboutUsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
