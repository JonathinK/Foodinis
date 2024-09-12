import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { DropDownMenu, Hamburger, Header, NavigationContainer, NavListItem, NavListItems, NavLink } from '../styles/header.styled';
import { Logo } from './logo';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import UserIcons from './userIcons';
//___
export const PageHeader = ({ cartItemCount, onCartIconClick }) => {
// Header Data Query
  const data = useStaticQuery(graphql`
    query {
      contentfulHeader {
        contentful_id
        codeId
        content{
          contentful_id
          codeId
          externalName
          content{
            ...HeaderLogo
          }
        }
        navigationItems {
          codeId
          contentful_id
          externalName
          singleLink {
            contentful_id
            externalName
            ctaPageUrl {
              ... on ContentfulPage {
                id
                contentful_id
                codeId
                slug
              }
            }
          }
          navigationLinks {
            contentful_id
            externalName
            ctaPageUrl {
              ... on ContentfulPage {
                id
                contentful_id
                codeId
                slug
              }
            }
            openInNewWindow
            pdf {
              contentful_id
              file {
                fileName
                url
              }
            }
          }
        }
      }
    }
  `)
// Data Variables
const headerData = data.contentfulHeader;
const logoData = headerData.content[0].content;
const navData = headerData.navigationItems;
console.log("HeaderData:", logoData);
// Header Components
const MenuButton = () => {
  return <Hamburger/>
}

const NavigationBar = ({ content }) => {
  return(
    <NavigationContainer className="desktop">
      <NavListItems>
        {content.map((item) => {
        if(item.codeId === "navDropdown"){
          return(
            <NavListItem
              key={item.contentful_id}
            > 
              <span>{item.externalName} <Icon icon="iconamoon:arrow-down-2" /></span>
              <DropDown content={item} isMobile={false}/>
            </NavListItem>
          )
        }else{
          return(
            <NavListItem key={item.contentful_id}>
              <NavLink to={`/${item.singleLink.ctaPageUrl.slug}`}>
                {item.singleLink.externalName}
              </NavLink>
            </NavListItem>
          )
        }
      })}
      </NavListItems>     
    </NavigationContainer>
  )
}
const MobileNavigationDraw = ({ content }) => {
  return(
    <NavigationContainer className="mobile">
      <NavListItems>
        {content.map((item) => {
        if(item.codeId === "navDropdown"){
          return(
            <NavListItem
              key={item.contentful_id}
            > 
              {item.externalName}
              <DropDown content={item} isMobile={true}/>
            </NavListItem>
          )
        }else{
          return(
            <NavListItem key={item.contentful_id}>
              <NavLink to={`/${item.singleLink.ctaPageUrl.slug}`}>
                {item.singleLink.externalName}
              </NavLink>
            </NavListItem>
          )
        }
      })}
      </NavListItems>
      <UserIcons 
        isCart={false} 
        isSearch={true} 
        isUser={true} 
        cartItemCount={cartItemCount}
        className="mobile_user_icons"/>
    </NavigationContainer>
  )
}
const DropDown = ({ isMobile, content }) => {
  return(
    <DropDownMenu className={isMobile ? "mobile_drop_down":"desktop_drop_down"}>
      <NavListItems>
        {content.navigationLinks.map((item) => (
          <NavListItem key={item.contentful_id}>
            {/* Conditionally Render NavLink or PDF Link in the dropdown based on the content */}
            {item.ctaPageUrl ? (
              <NavLink to={`/${content.externalName}/${item.ctaPageUrl.slug}`}>
                {item.externalName}
              </NavLink>
            ) : item.pdf ? (
              <a 
                href={item.pdf.file.url} 
                download
                target={item.openInNewWindow ? '_blank':'_self'} 
                rel={item.openInNewWindow ? 'noopener noreferrer' : ''} 
              >
              {item.externalName}
              </a>
            ) : null}
          </NavListItem>
        ))}
      </NavListItems>
    </DropDownMenu>
  )
}


  return(
    <Header>
      <Logo content={logoData}/>
      <MenuButton/>
      <NavigationBar content={navData}/>
      <UserIcons 
        isSearch={true} 
        isCart={true}
        isUser={true}
        className="header_user_icons"
        cartItemCount={cartItemCount}
        onCartIconClick={onCartIconClick}
      />
      <MobileNavigationDraw content={navData}/>
    </Header>
  )
}