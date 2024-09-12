/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import { SiteProvider } from "./src/context/site-provider";
import { PageLayout } from "./src/layout/page-layout";

// You can delete this file if you're not using it

export const wrapRootElement = SiteProvider;
export const wrapPageElement = PageLayout;