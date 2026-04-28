"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

import { selectFreePlan } from "@/actions/plan/select-plan";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FreePlanProps {
  active?: boolean;
  className?: string;
}

export function FreePlan({ active = false, className }: FreePlanProps) {
  const [isLoading, setIsLoading] = useState(false);

  const features = [
    "Cadastro de até 3 médico",
    "Até 50 agendamentos/mês",
    "Cadastro de até 20 pacientes",
  ];

  const handleSelectFree = async () => {
    setIsLoading(true);
    try {
      await selectFreePlan();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">Free</h3>
          {active && (
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              Atual
            </Badge>
          )}
        </div>
        <p className="text-gray-600">
          Para experimentar a plataforma sem compromisso
        </p>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">R$0</span>
          <span className="ml-1 text-gray-600">/ mês</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 border-t border-gray-200 pt-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-gray-400" />
              </div>
              <p className="ml-3 text-gray-600">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button
            className="w-full"
            variant="outline"
            onClick={handleSelectFree}
            disabled={isLoading || active}
          >
            {isLoading ? (
              <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            ) : active ? (
              "Plano atual"
            ) : (
              "Começar grátis"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
