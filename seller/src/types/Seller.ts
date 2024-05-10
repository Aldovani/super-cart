export type Seller = {
  idComerciante: number
  razaoSocial: string | null
  logoUrl: string | null
  bannerUrl: string | null
  cnpj: string
  ativo: number
  validado: number
  email: string
  valorMinEntrega: number | null
  tipo: string
  dataCriacao: string
  dataMod: string
}
