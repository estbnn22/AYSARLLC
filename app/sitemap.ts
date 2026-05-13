import type { MetadataRoute } from "next";

import { absoluteUrl } from "./lib/site";
import { getGalleryCategories } from "./lib/work-gallery";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await getGalleryCategories();
  const workImages = categories.flatMap((category) =>
    category.images.map((image) => absoluteUrl(image.urlPath)),
  );
  const latestWorkUpdate =
    categories.length > 0
      ? categories.reduce((latest, category) => {
          return category.lastModified > latest
            ? category.lastModified
            : latest;
        }, categories[0].lastModified)
      : new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: latestWorkUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/work"),
      lastModified: latestWorkUpdate,
      changeFrequency: "weekly",
      priority: 0.8,
      images: workImages,
    },
  ];
}
