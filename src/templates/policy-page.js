import React from "react";
import { graphql } from "gatsby";
import { RichTextRender } from "../components/richTexRender";
import { MainContent } from "../styles/mainContent.styled";
import { ArticleContent } from "../styles/articleContent.styled";

const PolicyPage = ({ data }) => {
  const PolicyContent = data.contentfulPolicyDocuments.documentContent;
  console.log("PolicyData: ", PolicyContent);
  return(
    <MainContent className="policy_page">
      <ArticleContent className="policies"> 
        <RichTextRender content={PolicyContent} />
      </ArticleContent>
    </MainContent>
  )
}
export default PolicyPage

export const query = graphql`
  query($slug: String!){
    contentfulPolicyDocuments(slug: {eq:$slug}){
      contentful_id
      externalName
      codeId
      slug
      documentContent{
        raw
      }
    }
  }
`