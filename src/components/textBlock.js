import React from 'react';
import { Display, PageTitle, MainHeading, SubHeading, Paragraph, Title, SubTitle, Overline } from '../styles/typography';
//___

//___Components
const DisplayRender = ({ content }) => (
  <Display>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
  </Display>
)
const PageTitleRender = ({ content }) => (
  <PageTitle>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
  </PageTitle>
)
const OverlineRender = ({ content }) => (
  <Overline>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
  </Overline>
)
const MainHeadingRender = ({ content }) => (
  <MainHeading>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
    {content.longSimpleText ? content.longSimpleText : "No Content"}
  </MainHeading>
)
const SubHeadingRender = ({ content }) => (
  <SubHeading>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
    {content.longSimpleText ? content.longSimpleText : "No Content"}
  </SubHeading>
)
const TitleRender = ({ content }) => (
  <Title>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
    {content.longSimpleText ? content.longSimpleText : "No Content"}
  </Title>
)
const SubTitleRender = ({ content }) => (
  <SubTitle>
    {content.shortSimpleText ? content.shortSimpleText : "No Content"}
    {content.longSimpleText ? content.longSimpleText : "No Content"}
  </SubTitle>
) 
const ParagraphRender = ({ content }) => (
  <Paragraph dangerouslySetInnerHTML={{
    __html: content.longSimpleText
  }}/>
)


//Component Render
const TextBlock = ({ content }) => {
  console.log("Text Block: ",
    content
  )
  return(
    <>
      {content.content.map((item) => {
        switch(item.codeId){
          case 'display':
            return <DisplayRender 
                    content={item} 
                    key={item.contentful_id}
                  />
          case 'overline':
            return <OverlineRender
                    content={item}
                    key={item.contentful_id}
                  />
          case 'headline_1':
            return <PageTitleRender 
                    content={item} 
                    key={item.contentful_id}
                  />
          case 'headline_2':
            return <MainHeadingRender 
                    content={item}
                    key={item.contentful_id}
                  />
          case 'headline_3':
            return <SubHeadingRender
                    content={item}
                    key={item.contentful_id}
                  />
          case 'headline_4':
            return <TitleRender
                    content={item}
                    key={item.contentful_id}
                  />
          case 'headline_5':
            return <SubTitleRender
                    content={item}
                    key={item.contentful_id}
                  />
          case 'body':
            return <ParagraphRender 
                    content={item}
                    key={item.contentful_id}
                  />
          default:
            return null
        }
      })}
    </>
  )
}
export default TextBlock