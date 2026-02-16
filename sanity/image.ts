import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./env";


const builder = imageUrlBuilder(sanityConfig);

export function urlFor(source: any) {
  return builder.image(source);
}
