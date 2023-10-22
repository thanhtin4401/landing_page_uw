import AboutUsSection from "@/components/AboutUsSection";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContactSection";
import HeaderSection from "@/components/HeaderSection";
import ProductSection from "@/components/ProductSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between pt-[88px] bg-[#F7F8F9]">
      <HeaderSection />
      <ClientSection />
      <ProductSection />
      <ServiceSection />
      <AboutUsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
