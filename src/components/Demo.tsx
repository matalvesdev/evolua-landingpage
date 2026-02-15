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
      <div className="mb-16 text-center conversational-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Veja a Evolua em ação
        </h2>
        <p className="text-lg text-text-secondary-light leading-relaxed max-w-xl mx-auto">
          Uma interface desenhada para clareza mental. Tudo o que você precisa,
          onde você espera encontrar.
        </p>
      </div>

      <div
        className="relative mx-auto"
        style={{ maxWidth: "900px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-primary/30 border border-gray-200 overflow-hidden aspect-video">
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-contain"
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
                  i === current ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-gray-500 bg-gray-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100">
            <span className="material-symbols-outlined text-base text-primary">timer</span>
            {slides[current].alt}
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-end conversational-container">
        <a href="#social-proof" className="text-primary font-bold flex items-center gap-1 hover:underline">
          Quem usa recomenda{" "}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
