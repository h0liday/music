interface CategoryAttributes {
  label: string;
  scheme: string;
  term: string;
  ["im:id"]: string;
}

interface IdAttributes {
  ["im:id"]: string;
}

interface ArtistAttributes {
  href: string;
}

interface ImageAttributes {
  height: string;
}

interface SongCategory {
  attributes: CategoryAttributes;
}

interface SongId {
  attributes: IdAttributes;
  label: string;
}

interface SongArtist {
  attributes?: ArtistAttributes;
  label: string;
}

interface SongImage {
  attributes: ImageAttributes;
  label: string;
}

interface SongItemCount {
  label: string;
}

interface SongName {
  label: string;
}

interface SongPrice {
  label: string;
  attributes: PriceAttributes;
}

interface PriceAttributes {
  amount: string;
  currency: string;
}

interface SongRelease {
  label: string;
  attributes: ReleaseAttributes;
}

interface ReleaseAttributes {
  label: string;
}

interface SongLink {
  attributes: LinkAttributes;
}

interface LinkAttributes {
  href: string;
  rel: string;
  type: string;
}

interface SongRights {
  label: string;
}

interface SongTitle {
  label: string;
}

interface SongContentType {
  attributes: ContentTypeAttributes;
  ["im:contentType"]: IMContentType;
}

interface ContentTypeAttributes {
  term: string;
  label: string;
}

interface IMContentType {
  attributes: ContentTypeAttributes;
}

interface Song {
  category: SongCategory;
  id: SongId;
  ["im:artist"]: SongArtist;
  ["im:image"]: SongImage[];
  ["im:itemCount"]: SongItemCount;
  ["im:name"]: SongName;
  ["im:price"]: SongPrice;
  ["im:releaseDate"]: SongRelease;
  ["im:contentType"]: SongContentType;
  link: SongLink;
  rights: SongRights;
  title: SongTitle;
}

export type { Song };
