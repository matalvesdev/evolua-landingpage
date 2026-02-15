export default function FeatureVoice() {
  return (
    <section
      className="py-24 px-6 conversational-container section-fade"
      id="pergunta-1"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Quanto tempo você gasta digitando relatórios após cada sessão?
        </h2>
        <p className="text-lg text-text-secondary-light leading-relaxed">
          Em média, fonoaudiólogas perdem até 2 horas diárias apenas com
          documentação. A Evolua entende o valor do seu tempo.
        </p>
      </div>

      <div className="glass-card p-8 rounded-3xl border-primary/10 shadow-xl shadow-primary/5 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">mic</span>
          </div>
          <div>
            <h3 className="font-bold text-xl">Relatórios por Voz</h3>
            <p className="text-sm text-text-secondary-light">
              Fale, não digite.
            </p>
          </div>
        </div>
        <p className="text-text-secondary-light italic mb-0">
          &quot;Nossa IA transcreve e estrutura seus áudios clínicos com 98% de
          precisão, transformando pensamentos em prontuários prontos em
          segundos.&quot;
        </p>
      </div>

      <div className="flex justify-end">
        <a
          href="#pergunta-2"
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          O que mais?{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  );
}
