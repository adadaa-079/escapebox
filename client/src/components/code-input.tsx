import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { validateCode } from "@/lib/validate-code";

const formSchema = z.object({
  code: z
    .string()
    .length(6, "Code must be exactly 6 digits")
    .regex(/^\d+$/, "Code must contain only numbers"),
});

interface CodeInputProps {
  onSuccess: () => void;
}

export function CodeInput({ onSuccess }: CodeInputProps) {
  const [isValidating, setIsValidating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsValidating(true);
    try {
      const result = await validateCode(values.code);

      if (result.success) {
        onSuccess();
      } else {
        toast({
          title: "Accès Refusé",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsValidating(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Entre le code d'accès</h2>
        <p className="text-sm text-muted-foreground">
          Saisissez le code de sécurité à 6 chiffres pour accéder à la prochaine
          étape.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="text-center text-2xl tracking-[0.5em] font-mono"
                    maxLength={6}
                    placeholder="000000"
                    disabled={isValidating}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isValidating}>
            {isValidating ? "Validation..." : "Soumettre le Code"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
