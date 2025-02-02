// Vous pouvez changer ce code par celui que vous souhaitez
const CORRECT_CODE = "894542";

export async function validateCode(
  code: string,
): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (code === CORRECT_CODE) {
    return {
      success: true,
      message: "Access granted",
    };
  }

  // Generate helpful clues based on the attempt
  const clues = [
    "Regarde bien la lettre que je t'ai écrite.",
    "Fais Attention Aux Détails, C'est Important",
  ];

  return {
    success: false,
    message: clues[Math.floor(Math.random() * clues.length)],
  };
}
