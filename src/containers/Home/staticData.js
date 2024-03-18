import { ReactComponent as Like } from "assets/images/like.svg";
import { ReactComponent as HelpCenter } from "assets/images/help-center.svg";
import { ReactComponent as MoneyPig } from "assets/images/money-pig.svg";

export const reasonsToChoose = [
  {
    icon: <Like />,
    title: "Service 100% Gratuit",
    description: ["0 commission", "0 frais caché"],
  },
  {
    icon: <MoneyPig />,
    title: "450 euros* d'économies",
    description: [
      "Les tarifs les plus bas sur le marché",
      "jusqu'à 450 euros* d'économies",
    ],
  },
  {
    icon: <HelpCenter />,
    title: "Accompagnement 7/7",
    description: [
      "Un gestionnaire santé dédié et",
      "suivi continu de votre dossier",
    ],
  },
];

export const accordionData = [
  {
    title: "Pourquoi la complémentaire santé est-elle importante ?",
    content:
      "Aujourd’hui, il devient indispensable de souscrire une mutuelle avec des bonnes garanties pour pallier ses frais de santé. La Sécurité sociale prend, certes, en charge une partie des dépenses mais ses remboursements sont bien souvent insuffisants. Par exemple, pour les soins optiques, les remboursements sont très dérisoires. Sans complémentaire santé, votre reste à charge sur vos dépenses médicales sera très élevé.",
  },
  {
    title:
      "Comment puis-je être sûr(e) de choisir la mutuelle qui me convient le mieux ?",
    content:
      "Diapazone propose un service unique avec des experts santé dédiés. Après avoir rempli votre profil, vous avez la possibilité de bénéficier d'un entretien personnalisé avec un expert santé qui vous guidera tout au long du processus de la comparaison à la souscription et répondra à toutes vos questions.",
  },
  {
    title: "Comment Résiler ma mutuelle ?",
    content:
      "Il est possible de résilier votre mutuelle à l’échéance annuelle de votre contrat en respectant un préavis de deux mois si votre adhésion date de moins d’un an. Ou, après une année de contrat, à tout moment, sans frais ni justificatif. Nos services s’occupent de toutes les démarches pour vous gratuitement.",
  },
  {
    title: "Quelle est la mutuelle la moins chère ?",
    content:
      "Le choix dépend entièrement de votre profil et de vos besoins en santé. Plutôt que de privilégier la recherche de la mutuelle la moins coûteuse, nous vous suggérons de mettre l'accent sur celle qui offre le meilleur équilibre entre garanties et prix.",
  },
];

export const testimonials = [
  {
    author: "Aurélie Az",
    date: "01.2024",
    rating: 5,
    feedback:
      "Très bon suivi de mon dossier avec mon conseiller Julien Muller.",
  },
  {
    author: "Stéphane",
    date: "02.2024",
    rating: 4,
    feedback: "Service Très réactif, Mme Lambert est toujours à l’écoute…",
  },
  {
    author: "Claudine",
    date: "02.2024",
    rating: 5,
    feedback:
      "Des tarifs compétitifs ,j’ai réalisé 300 euros d’économies. Merci Diapzone.",
  },
  {
    author: "Florence",
    date: "01.2024",
    rating: 5,
    feedback:
      "La dame que j'ai eu par téléphone m'a bien renseigné, elle a pris le temps de m'expliquer et de m'accompagner dans toutes les démarches. Merci.",
  },
  {
    author: "Chantal",
    date: "03.2024",
    rating: 5,
    feedback:
      "Je suis très satisfaite, rapide, et simple. les prix sont corrects. Merci",
  },
  {
    author: "Hervé",
    date: "03.2024",
    rating: 4,
    feedback:
      "Je suis satisfait du service, les prix me convient, les conseillers sont toujours aimable et prennent en charge mes demandes.",
  },
];

export const steps = [
  "Je renseigne mes besoins et mon budget",
  "Diapazone me propose les meilleurs offres du marché",
  "Je souscris mon nouveau contrat",
  "Diapazone s'occupe même de la résiliation et de toutes les taches administratives",
  "Diapazone m'accompagne toute au long de la vie de mon contrat",
];
