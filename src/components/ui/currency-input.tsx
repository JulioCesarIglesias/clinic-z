"use client";

import { Input } from "@/components/ui/input";

interface CurrencyInputProps {
  value?: number;
  onChange: (value: number) => void;
}

export function CurrencyInput({ value = 0, onChange }: CurrencyInputProps) {
  const format = (cents: number) => {
    return (cents / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    const numbersOnly = raw.replace(/\D/g, "");

    const cents = Number(numbersOnly);

    onChange(cents);
  };

  return (
    <Input
      value={value ? `R$ ${format(value)}` : ""}
      onChange={handleChange}
      placeholder="R$ 0,00"
      inputMode="numeric"
      // className="text-right"
    />
  );
}
