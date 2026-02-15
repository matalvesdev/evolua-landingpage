export default function FeatureSchedule() {
  return (
    <section
      className="py-32 conversational-container section-fade"
      id="pergunta-2"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Sua agenda trabalha para você, ou você para ela?
        </h2>
        <p className="text-lg text-text-secondary-light leading-relaxed">
          Gerenciar faltas, remarcações e lembretes de WhatsApp não deveria ser
          sua tarefa principal. Nossa Agenda Inteligente cuida da logística para
          que você cuide dos pacientes.
        </p>
      </div>

      <div className="relative group">
        <div className="relative glass-card p-8 rounded-3xl">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">
                Próximo Passo
              </h4>
              <p className="text-xl font-bold">Assistente Evolua IA</p>
            </div>
            <span className="material-symbols-outlined text-primary text-3xl">
              auto_awesome
            </span>
          </div>

          <div className="bg-white border border-gray-100 p-4 rounded-2xl mb-4 shadow-sm">
            <p className="text-sm text-gray-800">
              &quot;Dra. Helena, notei que o Lucas completou 10 sessões. Deseja
              gerar um relatório de progresso automaticamente?&quot;
            </p>
          </div>

          <div className="flex gap-3">
            <span className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full">
              Sim, gerar
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">
              Mais tarde
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <a
          href="#pergunta-3"
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          E a segurança?{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  );
}
