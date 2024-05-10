export function maskCNPJ(cnpj: string): string {
  // Remove caracteres não numéricos
  const cleanedCNPJ = cnpj.replace(/\D/g, '')

  if (cleanedCNPJ.length < 14) return cleanedCNPJ

  // Aplica a máscara padrão
  return cleanedCNPJ.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5',
  )
}
