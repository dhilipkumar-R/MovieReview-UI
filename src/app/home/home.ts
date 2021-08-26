
export interface MoviesList {
  id: number;
  filmname: string;
  year: number;
  country: string;
  language: string;
  genre: string;
  rating: string;
}
export interface Movie {
  movie?: string;
  year?: string;
  language?: string;
  genre?: string;
  country?: string;
}

export class MovieResponseModel {
  status?: boolean;
  message?: string;
  exception?: string;
}
