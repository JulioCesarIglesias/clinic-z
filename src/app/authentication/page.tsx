import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";
import {
  CalendarCheck,
  Shield,
  Stethoscope,
  ArrowLeft,
} from "lucide-react";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      {/* Lado esquerdo - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        {/* Padrão de fundo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 border border-primary-foreground rounded-full" />
          <div className="absolute top-40 left-40 w-96 h-96 border border-primary-foreground rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-primary-foreground rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground w-full">
          {/* Logo e voltar */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                <Stethoscope className="h-7 w-7" />
              </div>
              <span className="text-2xl font-bold">Clinic-Z</span>
            </div>
          </div>

          {/* Conteúdo central */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-balance">
                Gerencie sua clínica com eficiência e simplicidade
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-md">
                A plataforma completa para modernizar a gestão da sua clínica
                médica.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Agendamento Inteligente</p>
                  <p className="text-sm text-primary-foreground/70">
                    Controle completo da sua agenda
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Segurança Garantida</p>
                  <p className="text-sm text-primary-foreground/70">
                    Dados protegidos e em conformidade
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-primary-foreground/60">
            <p>&copy; 2024 Clinic-Z. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>

      {/* Lado direito - Formulário */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Header mobile */}
          <div className="lg:hidden text-center space-y-2">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Stethoscope className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Clinic-Z</span>
            </div>
          </div>

          {/* Título */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Bem-vindo de volta
            </h2>
            <p className="text-muted-foreground">
              Entre na sua conta ou crie uma nova
            </p>
          </div>

          {/* Tabs com formulários */}
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-sm font-medium">
                Entrar
              </TabsTrigger>
              <TabsTrigger value="register" className="text-sm font-medium">
                Criar conta
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-0">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register" className="mt-0">
              <SignUpForm />
            </TabsContent>
          </Tabs>

          {/* Termos */}
          <p className="text-center text-xs text-muted-foreground">
            Ao continuar, você concorda com nossos{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
