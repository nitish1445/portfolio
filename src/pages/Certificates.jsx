import { useState } from "react";
import certificates from "../assets/data/certificates";
import CertificateCard from "../components/CertificateCard";
import CertificateModal from "../components/CertificateModal";
import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 lg:py-20">
        <SectionTitle
          eyebrow="Learning"
          title="Certificates"
          description="Courses and certifications I've completed to keep sharpening my skills."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, i) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onView={setSelectedCertificate}
              index={i}
            />
          ))}
        </div>

        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      </section>

      <Footer />
    </>
  );
};

export default Certificates;
