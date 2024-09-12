import * as React from "react";
import { BottomBar, FollowUs, Footer, FooterBackground, FooterLinks, PolicyLinks } from "../styles/footer.styled";
import { useStaticQuery,graphql } from "gatsby";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { NavLink, NavListItem, NavListItems } from "../styles/header.styled";
import { Logo } from "./logo";
//___
export const PageFooter = () => {
//___Query for footer data
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        externalName
        contentful_id
        codeId
        content {
          codeId
          contentful_id
          content {
            ... on ContentfulMedia {
              ...FooterLogo
            }
            ... on ContentfulContentContainer {
              id
              codeId
              contentful_id
              externalName
              content {
                ... on ContentfulMedia {
                  id
                  codeId
                  contentful_id
                }
              }
            }
            ... on ContentfulText {
              codeId
              contentful_id
              shortSimpleText
              longSimpleText {
                longSimpleText
                id
              }
            }
            ... on ContentfulNavigationItem {
              id
              codeId
              contentful_id
              singleLink {
                externalName
                contentful_id
                ctaPageUrl {
                  ... on ContentfulPage {
                    id
                    codeId
                    contentful_id
                    slug
                  }
                }
              }
              navigationLinks {
                contentful_id
                ctaPageUrl {
                  ... on ContentfulPolicyDocuments {
                    id
                    codeId
                    contentful_id
                    externalName
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
//___Variable for footer data
  const footerData = data.contentfulFooter.content;

//___Footer Components

  //Footer Background
  const Background = (item) => {
    //Return of Footer Background
    return <FooterBackground key={item.contentful_id}/>
  }
  // Footer Follow Us
  const FooterSocials = (item) => {
    return(
      <FollowUs key={item.contentful_id}>
        <a href="https://www.instagram.com/foodinis/">
          <Icon 
            icon="gg:instagram"
            className="instagram"
            aria-label="Follow us on instagram"
          />
        </a>
      </FollowUs>
    )
  }
  //Footer Nav
  const FooterNav = (item) => {
    return(
      <FooterLinks key={item.contentful_id}>
        <NavListItems>
          {item.content.map((items) => {
            return(
              <NavListItem key={items.contentful_id}>
                <NavLink to={`/${items.singleLink.ctaPageUrl.slug}`}>
                  {items.singleLink.externalName}
                </NavLink>
              </NavListItem>
            )
          })}
        </NavListItems>
      </FooterLinks>
    )
  }
  //Policy Links
  const PolicyNav = (item) => {
    //Policy Data Variable
    const policyLinks = item.content[0].navigationLinks;
    //Policy Nav Return
    return(
      <PolicyLinks key={item.contentful_id}>
        <NavListItems>
          {policyLinks.map((items) => {
            return(
              <NavListItem key={items.ctaPageUrl.contentful_id}>
                <NavLink to={`/${items.ctaPageUrl.slug}`}>
                  {items.ctaPageUrl.externalName}
                </NavLink>
              </NavListItem>
            )
          })}
        </NavListItems>
      </PolicyLinks>
    )
  }
  //Bottom Container
  const BottomContainer = (item) => {
    //Makes data easier to find
    const bottomContent = item.content;
    console.log("Bottom_Content", bottomContent);
    return(
      <BottomBar key={item.contentful_id}>
        {bottomContent.map((items) => {
          switch(items.codeId) {
            case "poweredby_container":
              return(
                <div 
                  key={items.contentful_id}
                  className="flex powered"
                >
                  <p>{items.externalName}</p>
                  <div className="powered_icons">
                    <Icon icon="vscode-icons:file-type-gatsby"/>
                    <Icon icon="logos:contentful"/>
                    <Icon icon="logos:shopify"/>
                  </div>
                </div> 
              )
            case "copyright_text":
              return(
                <div 
                  key={items.contentful_id}
                  className="flex copyright"
                >
                  © {new Date().getFullYear()} {items.shortSimpleText}
                </div> 
              )
            case "designed_by_text":
              return(
                <div 
                  key={items.contentful_id}
                  className="flex designed"
                >
                  {items.shortSimpleText} {items.longSimpleText.longSimpleText}
                </div>
              )
            default:
              return null;
        
          }
        })}
      </BottomBar>
    )
  }
//___Footer Component Return
  return(
    <Footer>
      {footerData.map((item) => {
        console.log("footer-items",item)
        switch (item.codeId) {
          case 'footer_background':
            return Background(item)
          case "follow_us_container":
            return FooterSocials(item)
          case 'footer_navItems':
            return FooterNav(item)
          case 'policy_links':
            return PolicyNav(item)
          case 'bottom_footer_container':
            return BottomContainer(item)
          case 'footer_logo':
            return <Logo content={item.content} key={item.contentful_id}/>
          
          default:
            return null;
        }
      })}
    </Footer>
  )
}