"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/screenshots/dashboard.png", alt: "Dashboard - Visão geral da clínica" },
  { src: "/screenshots/relatorios.png", alt: "Relatórios e Evoluções com IA" },
  { src: "/screenshots/gravando.png", alt: "Gravação de evolução por voz" },
  { src: "/screenshots/evolucao.png", alt: "Revisão de evolução gerada por IA" },
  { src: "/screenshots/pacientes.png", alt: "Gestão de pacientes" },
  { src: "/screenshots/prontuario.png", alt: "Prontuário do paciente" },
  { src: "/screenshots/agenda.png", alt: "Agenda inteligente" },
  { src: "/screenshots/tarefas.png", alt: "Gerenciamento de tarefas" },
];

export default function Demo() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <section className="py-24 px-6 section-fade" id="demo-section">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja a Evolua em ação
          </h2>
          <p className="text-lg text-text-secondary-light leading-relaxed max-w-xl mx-auto">
            Uma interface desenhada para clareza mental. Tudo o que você precisa,
            onde você espera encontrar.
          </p>
        </div>

        {/* MacBook Pro Mockup */}
        <div
          className="macbook-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="macbook-lid">
            <div className="macbook-notch" />
            <div className="macbook-screen relative">
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                className="object-cover"
                priority={current === 0}
              />

              {/* Prev/Next */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-20"
                style={{ opacity: isHovered ? 1 : 0 }}
                aria-label="Anterior"
              >
                <span className="material-symbols-outlined text-gray-700">chevron_left</span>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-20"
                style={{ opacity: isHovered ? 1 : 0 }}
                aria-label="Próximo"
              >
                <span className="material-symbols-outlined text-gray-700">chevron_right</span>
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-primary w-6" : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="macbook-base" />
          <div className="macbook-shadow" />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-text-secondary-light mt-2">Precisão na transcrição clínica</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">2h</div>
            <div className="text-text-secondary-light mt-2">Economizadas por dia em média</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">Zero</div>
            <div className="text-text-secondary-light mt-2">Configuração técnica necessária</div>
          </div>
        </div>
      </div>
    </section>
  );
}
