export interface Results {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  alt_description: string;
}

