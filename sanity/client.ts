import { createClient } from "next-sanity";
import { sanityConfig } from "@/sanity/env";

export const client = createClient(sanityConfig);
