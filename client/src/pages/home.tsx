import { useState } from "react";
import { Card } from "@/components/ui/card";
import { StorySection } from "@/components/story-section";
import { RulesSection } from "@/components/rules-section";
import { CodeInput } from "@/components/code-input";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            La Lettre du Futur
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escape Box - 2 ans !
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <StorySection />
          <RulesSection />

          <Card className="p-6">
            {!showSuccess ? (
              <CodeInput onSuccess={() => setShowSuccess(true)} />
            ) : (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-green-600">
                  Accès Autorisé !
                </h2>
                <p className="text-lg">
                  Bravo ! Tu viens de passer la première étape ! Tu peux
                  maintenant ouvrir la boîte...
                </p>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
