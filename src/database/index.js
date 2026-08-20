/**
 * =============================================================
 *  DATABASE ENTRY POINT
 * =============================================================
 *  Import anything you need from here:
 *
 *    import { projects, profile, stats } from "@/database";
 *
 *  Files in this folder:
 *    profile.js   - your name, bio, socials, navigation
 *    projects.js  - every project (name, image, description, links)
 *    about.js     - skills / experience / education / certifications + stats
 * =============================================================
 */

export {
  profile,
  socials,
  navigation,
  booking,
} from "./profile";

export {
  projects,
  categories,
  fallbackImages,
  getProjectImage,
  getFeaturedProjects,
  getCategoryCounts,
} from "./projects";

export { aboutTabs, stats } from "./about";
