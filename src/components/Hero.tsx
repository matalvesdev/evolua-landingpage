export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 conversational-container text-center mb-24">
      <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
        Uma nova era na Fonoaudiologia
      </span>
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
        E se você pudesse focar apenas no{" "}
        <span className="text-primary">cuidado</span>?
      </h1>
      <p className="text-xl text-text-secondary-light leading-relaxed mb-12">
        Sabemos que sua paixão é transformar vidas através da comunicação. Mas a
        burocracia e os relatórios intermináveis muitas vezes roubam seu tempo
        precioso.
      </p>
      <div className="flex flex-col items-center gap-4">
        <a
          href="#pergunta-1"
          className="group flex items-center gap-2 text-primary font-bold text-lg animate-bounce"
        >
          Descubra como{" "}
          <span className="material-symbols-outlined" aria-hidden="true">expand_more</span>
        </a>
      </div>
    </section>
  );
}
