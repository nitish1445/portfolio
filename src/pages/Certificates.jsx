import { useState } from "react";
import certificates from "../assets/data/certificates";
import CertificateCard from "../components/CertificateCard";
import CertificateModal from "../components/CertificateModal";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="lg:text-center">
        <p className="text-accent-light font-medium mb-2">Learning</p>
        <h1 className="font-display text-4xl font-bold text-white mb-4">
          Certificates
        </h1>
        <p className="text-muted text-lg mb-12">
          Courses and certifications I've completed to keep sharpening my
          skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onView={setSelectedCertificate}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Certificates;
