import React from 'react';
import { Card, CardBody, CardImage, CardLabel, CardLink, CardTitle } from '../styles/cards.styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Paragraph } from '../styles/typography';
//___

const BlogCard = ({ content }) => {
  //Console Logs
    console.log("Blog Card: ", content);
  return(
    <Card
      className="blog_card"
    >
      <CardImage className="blog_card_image">
        <GatsbyImage
          image={getImage(content.featureImage)}
          alt={content.featureImage.description || ''}
          className="full_width"
        />
      </CardImage>
      <CardBody className="blog_card_body">
        <CardLabel className='date_label'>{content.date}</CardLabel>
        <CardLink to={`/blogs/${content.slug}`}>
          <CardTitle>
            {content.blogTitle}
          </CardTitle>
        </CardLink>
        <Paragraph dangerouslySetInnerHTML={{__html: content.excerpt.excerpt}}/>
      </CardBody>
    </Card>
  )
}
export default BlogCard