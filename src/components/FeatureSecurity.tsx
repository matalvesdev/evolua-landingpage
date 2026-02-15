export default function FeatureSecurity() {
  return (
    <section
      className="py-32 conversational-container section-fade"
      id="pergunta-3"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Onde está guardada a evolução de quem você cuida?
        </h2>
        <p className="text-lg text-text-secondary-light leading-relaxed">
          Seu prontuário não é apenas papel ou um arquivo digital. É a história
          clínica de uma pessoa. Na Evolua, garantimos segurança máxima com a
          leveza de uma interface feita para seres humanos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-primary-light/30 rounded-2xl">
          <span className="material-symbols-outlined text-primary mb-4">
            folder_shared
          </span>
          <h4 className="font-bold mb-2">Prontuário Digital</h4>
          <p className="text-sm text-text-secondary-light">
            Histórico completo e linha do tempo de evolução em um só lugar.
          </p>
        </div>
        <div className="p-6 bg-green-50 rounded-2xl">
          <span className="material-symbols-outlined text-green-600 mb-4">
            verified_user
          </span>
          <h4 className="font-bold mb-2">Sigilo Total</h4>
          <p className="text-sm text-text-secondary-light">
            Dados criptografados conforme as normas de saúde e LGPD.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <a
          href="#demo-section"
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          Ver na prática{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  );
}
