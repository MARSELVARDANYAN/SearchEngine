
export function splitContent(connect) {
  if (typeof connect === 'string') {
    const words = connect
      .trim()
      .split(/\s+/) 
      .filter(word => /^[\p{L}]+$/u.test(word)); 
    
    const uniqueWords = [...new Set(words)];
    return uniqueWords;
  }

  return [];
}
