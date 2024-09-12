import React from "react";
import { graphql } from "gatsby";
import { MainContent } from "../styles/mainContent.styled";
import { ArticleContent } from "../styles/articleContent.styled";
import { RichTextRender } from "../components/richTexRender";
import { Author, BlogTitle, BlogVector, DateContainer, FeatureImage, TagRelationsContainer } from "../styles/blogTemplate.styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PageTitle } from "../styles/typography";
//___

//__Components
  //_Feature Image
    const BlogFeatureImage = ({ content }) => (
      <FeatureImage>
        <GatsbyImage
          image={getImage(content)}
          alt={content.description || ''}
          loading="eager"
        />
      </FeatureImage>
    );
  //_
  //_BlogTitle
    const BlogTemplateTitle = ({ content }) => (
      <BlogTitle>
        <PageTitle className="primary_color">{content ? content : null}</PageTitle>
      </BlogTitle>
    )
  //_
  //_DatePosted
    const DatePosted = ({ content }) => (
      <DateContainer>
      <span className="posted_text">Posted On: </span>
        <span className="blog_date">{content ? content : null}</span>
      </DateContainer>
    )
  //_
  //_BlogAuthor
    const BlogAuthor = ({ content }) => (
      <Author>
        <span className="author_name">
          {content.authorName}
        </span>
        <div className="author_image">
          <GatsbyImage
            image={getImage(content.authorImage)}
            alt={content.authorImage.description || ''}
            loading="eager"
          />
        </div>
      </Author>
    ) 
  //_
  //_BlogArticle
    const BlogArticle = ({ content }) => (
      <ArticleContent className="blog_template_article">
        <RichTextRender content={ content }/>
      </ArticleContent>
    )
  //_
  //_RelatedTags: 
    const RelatedTags = ({ content }) => (
      <TagRelationsContainer>
      <span className="related_tags_title">Tags: </span>
        {content.map(tag =>
          <span key={tag.contentful_id} className="tag">
            {tag.externalName}
          </span>
        )}
      </TagRelationsContainer>
    )
  //_
 


const Blog = ({ data }) => {
  //Data Variables
    const {
      blogTemplateTitle,
      blogTemplateDate,
      blogTemplateAuthor,
      blogTemplateTags, 
      blogTemplateFeature, 
      blogContent 
    } = data.contentfulBlogPost;
    console.log("Template Tags: ", blogTemplateTags);
  return(
    <MainContent className="blog_template_main">
      <BlogVector className="vector_background"/>
      <BlogFeatureImage content={blogTemplateFeature}/>
      <BlogTemplateTitle content={blogTemplateTitle}/>
      <BlogAuthor content={blogTemplateAuthor}/>
      <DatePosted content={blogTemplateDate}/>
      <BlogArticle content={blogContent}/>
      <RelatedTags content={blogTemplateTags}/>
    </MainContent>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(
     slug: {eq: $slug}
    ){
      codeId
      contentful_id
      blogTemplateTitle:blogTitle
      blogTemplateDate:datePosted(formatString: "MMM Do, YYYY")
      blogTemplateAuthor:author {
        authorName
        authorImage {
          contentful_id
          description
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            quality: 100
            resizingBehavior: SCALE
            layout: CONSTRAINED
            width: 120
          )
        }
      }
      blogTemplateFeature:featureImage {
        contentful_id
        description
        gatsbyImageData(
          cropFocus: CENTER
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          quality: 70
          resizingBehavior: SCALE
        )
      }
      blogContent: blogContent{
        raw
      }
      blogTemplateTags:tags {
        codeId
        contentful_id
        externalName
      }
    }
  }
`
export default Blog;