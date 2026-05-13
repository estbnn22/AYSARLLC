import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export type CategoryConfig = {
  title: string;
  summary: string;
  badge: string;
};

export type GalleryImage = {
  urlPath: string;
  versionedSrc: string;
  lastModified: Date;
};

export type GalleryCategory = CategoryConfig & {
  slug: string;
  images: GalleryImage[];
  lastModified: Date;
};

const categoryConfig: Record<string, CategoryConfig> = {
  dryer: {
    title: "Dryer Repairs",
    summary:
      "Real service examples showing repairs, part replacements, and inside-the-machine diagnostics for common dryer issues.",
    badge: "Laundry",
  },
  microwave: {
    title: "Microwave Repairs",
    summary:
      "Microwave work examples focused on safe troubleshooting, clear diagnosis, and getting everyday kitchen use back on track.",
    badge: "Kitchen",
  },
  oven: {
    title: "Oven Repairs",
    summary:
      "Oven repair examples covering heating issues, worn components, and practical fixes for dependable cooking performance.",
    badge: "Cooking",
  },
  stove: {
    title: "Stove Repairs",
    summary:
      "Stove service examples featuring burner, range, and surface-level repairs completed for local homeowners.",
    badge: "Cooking",
  },
  washer: {
    title: "Washer Repairs",
    summary:
      "Washer repair examples showing diagnosis and hands-on work for laundry machines that need dependable service.",
    badge: "Laundry",
  },
};

const categoryOrder = ["dryer", "washer", "oven", "stove", "microwave"];
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export async function getGalleryCategories(): Promise<GalleryCategory[]> {
  const workRoot = path.join(process.cwd(), "public", "work");
  const directories = await readdir(workRoot, { withFileTypes: true });

  const categories = await Promise.all(
    directories
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const slug = entry.name;
        const config = categoryConfig[slug];

        if (!config) {
          return null;
        }

        const folderPath = path.join(workRoot, slug);
        const files = await readdir(folderPath, { withFileTypes: true });

        const imageNames = files
          .filter((file) => file.isFile())
          .map((file) => file.name)
          .filter((name) => supportedExtensions.has(path.extname(name).toLowerCase()))
          .sort((left, right) => left.localeCompare(right));

        const images = await Promise.all(
          imageNames.map(async (name) => {
            const filePath = path.join(folderPath, name);
            const fileStats = await stat(filePath);
            const version = Math.floor(fileStats.mtimeMs);
            const urlPath = `/work/${slug}/${name}`;

            return {
              urlPath,
              versionedSrc: `${urlPath}?v=${version}`,
              lastModified: fileStats.mtime,
            };
          }),
        );

        if (images.length === 0) {
          return null;
        }

        const lastModified = images.reduce((latest, image) => {
          return image.lastModified > latest ? image.lastModified : latest;
        }, images[0].lastModified);

        return {
          slug,
          images,
          lastModified,
          ...config,
        };
      }),
  );

  return categories
    .filter((category): category is GalleryCategory => category !== null)
    .sort(
      (left, right) =>
        categoryOrder.indexOf(left.slug) - categoryOrder.indexOf(right.slug),
    );
}
