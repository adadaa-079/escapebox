import { Card, CardContent } from "@/components/ui/card";

export function StorySection() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Lettre à Aude</h2>

        <div className="prose prose-stone dark:prose-invert">
          <p>
            je t'envoie cette lettre pour t'annoncer quelque chose de la plus haute importance. Cela peut te paraître insensé mais ce message, et cette boîte, viennent du Futur. un événement irréparable et inarrêtable va se produire dans quelques jours : une Bombe plus puissante que jamais s'apprête à détruire la terre.
          </p>

          <p>
            seule une femme pouvait l'arrêter, à la condition qu'elle possède un objet. cette femme c'est toi. seulement, la Aude que je connais n'a pas obtenu cet objet à temps.
          </p>

          <p>
            c'est pourquoi j'ai conçu cette Boîte, faite pour n'être ouvrable que par toi, pour que tu trouves l'objet et que tu désamorce la bombe. J'espère que tu arriveras à arriver au bout, avant qu'il ne soit trop tard…
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
