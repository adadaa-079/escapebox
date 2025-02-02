import { Card, CardContent } from "@/components/ui/card";

export function RulesSection() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Règles de la partie :</h2>

        <div className="prose prose-stone dark:prose-invert">
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Tu ne dois pas utiliser ta force pour forcer l'ouvertur, déchirer,
              ou accéder à n'importe quel partie de la boîte.
            </li>
            <li>
              Il est interdit d'ouvrir un paquet sans qu'on te le demande.
            </li>
            <li>Pour ouvrir la boîte, tu dois trouver le code caché dans le texte et sur la boîte.</li>
            <li>Sauve le monde</li>
          </ul>

          <p className="text-sm text-muted-foreground mt-4">
            Remember: Pour la suite, observe bien le texte, et bon courage !
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
