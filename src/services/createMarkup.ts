export function createMarkup(content: string) {
  const plainText = content.replace(/<[^>]*>/g, "");
  const first35Words = plainText.split(" ").slice(0, 35).join(" ");

  return {
    __html: first35Words + "...",
  };
}
