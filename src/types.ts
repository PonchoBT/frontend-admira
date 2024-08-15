// Google Analytics

export interface VistasPagina {
  fecha: string;
  vistas: number;
}

export interface Sesiones {
  fecha: string;
  sesiones: number;
  tasaRebote: number;
}

export interface Edad {
  rango: string;
  porcentaje: number;
}

export interface Genero {
  tipo: string;
  porcentaje: number;
}

export interface Demografia {
  edad: Edad[];
  género: Genero[];
}

export interface GoogleAnalyticsData {
  vistasPagina: VistasPagina[];
  sesiones: Sesiones[];
  demografía: Demografia;
}

// Google Ads

export interface Campaña {
  nombre: string;
  impresiones: number;
  clics: number;
  conversiones: number;
  costo: number;
}

export interface GoogleAdsData {
  campañas: Campaña[];
}

// Meta Ads

export interface Anuncio {
  nombre: string;
  alcance: number;
  participación: number;
  gastoPublicidad: number;
  conversiones: number;
}

export interface MetaAdsData {
  anuncios: Anuncio[];
}

// CRM


export interface Lead {
  nombre: string;
  costoAdquisición: number;
  valorDeVida: number;
}

export interface CrmData {
  leads: Lead[];
  tasaConversión: number;
}
