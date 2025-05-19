

export const isValidTerm = (term) => {
  const cleaned = term.replace(/[\s\p{P}\p{S}]+/gu, '');
  return cleaned.length > 0;
}


