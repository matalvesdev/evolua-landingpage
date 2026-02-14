export default function Demo() {
  return (
    <section
      className="py-24 px-6 conversational-container section-fade"
      id="demo-section"
    >
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Veja a Evolua em ação
        </h2>
        <p className="text-lg text-text-secondary-light leading-relaxed max-w-xl mx-auto">
          Uma interface desenhada para clareza mental. Tudo o que você precisa,
          onde você espera encontrar.
        </p>
      </div>

      <div className="relative group mx-auto max-w-4xl">
        <div className="relative bg-black rounded-[2rem] shadow-2xl shadow-primary/30 border border-gray-800 overflow-hidden aspect-video transform hover:scale-[1.01] transition-transform duration-500">
          {/* Play overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center group-hover:bg-opacity-90 transition-all cursor-pointer">
            <div className="relative z-10 w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-4xl ml-1">
                    play_arrow
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Control bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-4 w-full">
              <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary transition-colors">
                play_arrow
              </span>
              <div className="h-1 bg-white/30 rounded-full flex-grow relative cursor-pointer group/timeline">
                <div className="absolute left-0 top-0 bottom-0 bg-primary w-1/3 rounded-full"></div>
                <div className="absolute left-1/3 top-1/2 -mt-1.5 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/timeline:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xs text-white font-medium whitespace-nowrap">
                1:24 / 3:45
              </span>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary transition-colors">
                volume_up
              </span>
              <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary transition-colors">
                fullscreen
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-gray-500 bg-gray-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100">
            <span className="material-symbols-outlined text-base text-primary">
              timer
            </span>
            Assista e veja como economizar 2 horas por dia
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
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
