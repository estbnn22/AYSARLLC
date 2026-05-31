export const siteUrl = "https://aysarllc.com";

export const businessName = "At Your Service Appliance Repair LLC";
export const businessDisplayName = "At Your Service Appliance Repair";
export const businessDescription =
  "Appliance repair in Grand Prairie, Dallas, Arlington, Irving, Mansfield, Fort Worth, and the wider DFW area. Fast, honest, affordable service for washers, dryers, ovens, stoves, dishwashers, microwaves, and more.";

export const homeTitle = "Appliance Repair in Grand Prairie, Dallas & DFW";
export const homeDescription =
  "At Your Service Appliance Repair LLC provides appliance repair in Grand Prairie and across DFW, including washer repair, dryer repair, oven repair, stove repair, dishwasher repair, and microwave repair.";

export const workPageTitle =
  "Appliance Repair Work Photos in Grand Prairie & DFW";
export const workPageDescription =
  "Browse real appliance repair photos from At Your Service Appliance Repair LLC, including dryer repair, washer repair, oven repair, stove repair, and microwave repair work completed in the DFW area.";

export const logoPath = "/LOGO.png";
export const primaryImagePath = "/IMG_4510.jpeg";

export const contactPhone = "+1-972-670-5309";
export const contactPhoneHref = "tel:+19726705309";
export const contactPhoneDisplay = "(972) 670-5309";
export const contactEmail = "atyourservicea.r2025@gmail.com";

export const socialLinks = {
  facebook:
    "https://www.facebook.com/p/At-Your-Service-Appliance-Repair-Llc-61576208290452/",
  google:
    "https://www.google.com/maps/place/At+Your+Service+Appliance+Repairs,+LLC/@32.7430719,-96.963595,9z/data=!3m1!4b1!4m6!3m5!1s0x689c4dcb113f7c7f:0x568c2629db5b42b1!8m2!3d32.7430719!4d-96.963595!16s%2Fg%2F11md7r9s1c?entry=ttu",
  nextdoor:
    "https://nextdoor.com/pages/at-your-service-appliance-repair-llc-grand-prairie-tx/",
};

export const serviceAreas = [
  "Grand Prairie",
  "Dallas",
  "Arlington",
  "Irving",
  "Mansfield",
  "Fort Worth",
  "Daallas",
  "Duncanville",
  "DeSoto",
  "Cedar Hill",
  "Red Oak",
  "Lancaster",
] as const;

export const servicesOffered = [
  "Washer repair",
  "Dryer repair",
  "Stove repair",
  "Oven repair",
  "Dishwasher repair",
  "Trash compactor repair",
  "Microwave repair",
] as const;

export const defaultKeywords = [
  "appliance repair grand prairie tx",
  "appliance repair dallas tx",
  "appliance repair dfw",
  "washer repair grand prairie",
  "dryer repair grand prairie",
  "oven repair grand prairie",
  "stove repair grand prairie",
  "dishwasher repair grand prairie",
  "microwave repair grand prairie",
  "same day appliance repair dfw",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
