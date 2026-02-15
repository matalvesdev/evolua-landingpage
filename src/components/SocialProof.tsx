import type { Testimonial } from "@/types";
import TestimonialCard from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    name: "Mariana Costa",
    role: "Fonoaudióloga Clínica",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByE0K8Eh-_8PpfSEieousgVL84khwLfq5Xfc2rn-5Jxb7yBs4amd4S0DQIs1vaxDL8NEMkSeejHwR33TholvPj28-gZOwphrQD8HsTl21y7sS45GULrqrrYntNNNp2um9X15IHer3mZY-ZQ24__9rdSUqKZ9OdhqEDqlKKhnKT_vrF0OEHOBFu1wrVZ9eBm50KQjKy5jNr57ixirWzwY08zwokd0J-xHaUS7nkZ8MpIMkfTPCtK_vb53wVo_OJtb97ujs7CNupv1mD",
    quote:
      "Antes eu passava o fim de semana atualizando prontuários. Com a Evolua, termino tudo antes do paciente sair da sala. É libertador.",
  },
  {
    name: "Fernanda Lima",
    role: "Especialista em Voz",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTUu7eOha-Lv-HA2u9F_KqMaNJ1O30dpkWSLIcL9JH8lFNg7axs6nDLdlS3jAk8df7NAzUCRsnmL0qk4EiL4yHEe2Q_zJGcCodia-KrK_YBijavAa2q4FrIewPFk8Q76L8mBk3wIZ3sl-mhEbgl5Dm5zqfuE6vnoXgDyNpthub_Kp78q4hzOvm2SNbTtO6BT_eNgJJbPxPSdRbMOR19KClatNYkEX6DThOMLtI9e3bZiN3XyS8WjhOyM3UVSNzwPnEtmu5f8zh0uyM",
    quote:
      "A simplicidade do sistema me conquistou. Não precisei de treinamento, é tudo muito intuitivo. Meus pacientes adoram os lembretes automáticos.",
  },
];

export default function SocialProof() {
  return (
    <section
      className="px-6 conversational-container section-fade"
      id="social-proof"
    >
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quem cuida, confia</h2>
        <p className="text-lg text-text-secondary-light leading-relaxed">
          Profissionais que transformaram a gestão de seus consultórios
          compartilham suas experiências.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <a
          href="#pricing"
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          Ver planos{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  );
}
