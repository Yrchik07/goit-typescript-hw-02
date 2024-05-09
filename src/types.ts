export interface Results{
    id: string;
    description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
}
// export interface Image{
//     urls: {
//         raw: string;
//         full: string;
//         regular: string;
//         small: string;
//         thumb: string;
//     };
//     alt_description: string
// }

export interface Image {
    id: string;
    slug: string;
    alternative_slugs: Record<string, string>;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    breadcrumbs: any[]; // Assuming this is an array of any type
    [key: string]: any;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[]; // Assuming this is an array of any type
    sponsorship: any; // Assuming this can be of any type or null
    topic_submissions: Record<string, any>; // Assuming this is a key-value object
    asset_type: string;
    user: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: string;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      total_promoted_photos: number;
      total_illustrations: number;
      total_promoted_illustrations: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string;
        paypal_email: string | null;
      };
    };
    tags: {
      type: string;
      title: string;
    }[];
  }