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
    <section
      className="min-h-screen flex flex-col justify-center py-24 section-fade"
      id="demo-section"
    >
      <div className="mb-16 text-center px-6 max-w-[780px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Veja a Evolua em ação
        </h2>
        <p className="text-lg text-text-secondary-light leading-relaxed max-w-xl mx-auto">
          Uma interface desenhada para clareza mental. Tudo o que você precisa,
          onde você espera encontrar.
        </p>
      </div>

      <div
        className="relative mx-auto max-w-[780px] px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main image */}
        <div className="relative rounded-2xl shadow-2xl shadow-primary/20 border border-gray-200 overflow-hidden">
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            width={1920}
            height={1080}
            className="w-full h-auto block"
            priority={current === 0}
          />

          {/* Prev/Next buttons */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
            style={{ opacity: isHovered ? 1 : 0 }}
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-gray-700">
              chevron_left
            </span>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
            style={{ opacity: isHovered ? 1 : 0 }}
            aria-label="Próximo"
          >
            <span className="material-symbols-outlined text-gray-700">
              chevron_right
            </span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-500 bg-gray-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100">
            <span className="material-symbols-outlined text-base text-primary">
              timer
            </span>
            {slides[current].alt}
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-end max-w-[780px] mx-auto px-6">
        <a
          href="#social-proof"
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          Quem usa recomenda{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  );
}
