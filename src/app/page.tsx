import {
  CalendarCheck,
  ChartNoAxesCombined,
  Clock,
  ArrowRight,
  Users,
  Stethoscope,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
              <Stethoscope className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Clinic-Z</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#funcionalidades"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Funcionalidades
            </a>
            <a
              href="#beneficios"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefícios
            </a>
            <a
              href="#sobre"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre
            </a>
          </nav>
          <Button asChild>
            <Link href="/authentication">
              Entrar
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="mr-1 size-3" />
            Sistema de Gestão Clínica
          </Badge>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Gerencie sua clínica com{" "}
            <span className="text-primary">eficiência</span> e{" "}
            <span className="text-primary">simplicidade</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Clinic-Z é a solução completa para gestão de clínicas médicas.
            Controle agendamentos, pacientes, médicos e muito mais em uma única
            plataforma intuitiva.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/authentication">
                Começar Agora
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#funcionalidades">Conhecer Funcionalidades</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Funcionalidades
            </Badge>
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Tudo que você precisa para gerenciar sua clínica
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Ferramentas poderosas e fáceis de usar para otimizar o dia a dia
              da sua clínica
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <CalendarCheck className="size-6 text-primary" />
                </div>
                <CardTitle>Agendamento Inteligente</CardTitle>
                <CardDescription>
                  Sistema completo de agendamento com visualização de horários
                  disponíveis e confirmação automática
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="size-6 text-primary" />
                </div>
                <CardTitle>Gestão de Pacientes</CardTitle>
                <CardDescription>
                  Cadastro completo de pacientes com histórico médico, contatos
                  e informações relevantes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Stethoscope className="size-6 text-primary" />
                </div>
                <CardTitle>Controle de Médicos</CardTitle>
                <CardDescription>
                  Gerencie a equipe médica com especialidades, disponibilidade e
                  valores de consulta
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <ChartNoAxesCombined className="size-6 text-primary" />
                </div>
                <CardTitle>Dashboard Analítico</CardTitle>
                <CardDescription>
                  Visualize métricas importantes, acompanhe o desempenho e tome
                  decisões baseadas em dados
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="size-6 text-primary" />
                </div>
                <CardTitle>Horários Flexíveis</CardTitle>
                <CardDescription>
                  Configure horários de atendimento personalizados para cada
                  médico e especialidade
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-md transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="size-6 text-primary" />
                </div>
                <CardTitle>Segurança de Dados</CardTitle>
                <CardDescription>
                  Seus dados protegidos com as melhores práticas de segurança e
                  conformidade com LGPD
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                Benefícios
              </Badge>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">
                Por que escolher o Clinic-Z?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Desenvolvido pensando nas necessidades reais de clínicas e
                consultórios médicos
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Fácil de usar</h3>
                    <p className="text-sm text-muted-foreground">
                      Interface intuitiva que não requer treinamento extensivo
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Acesso em qualquer lugar</h3>
                    <p className="text-sm text-muted-foreground">
                      Sistema web responsivo, acesse do computador, tablet ou
                      celular
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Suporte dedicado</h3>
                    <p className="text-sm text-muted-foreground">
                      Equipe pronta para ajudar sempre que você precisar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-muted/50 p-8 shadow-lg">
              <CardContent className="space-y-6 p-0">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-muted-foreground">
                    Agendamentos gerenciados
                  </span>
                  <span className="text-2xl font-bold">+10.000</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-muted-foreground">
                    Clínicas utilizando
                  </span>
                  <span className="text-2xl font-bold">+50</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-muted-foreground">
                    Satisfação dos usuários
                  </span>
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Tempo economizado
                  </span>
                  <span className="text-2xl font-bold">+30h/mês</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="sobre" className="border-t bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            Pronto para transformar a gestão da sua clínica?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Comece agora mesmo e descubra como o Clinic-Z pode simplificar o dia
            a dia da sua clínica médica
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8"
            asChild
          >
            <Link href="/authentication">
              Criar minha conta grátis
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <Stethoscope className="size-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Clinic-Z</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Clinic-Z. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Termos
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
