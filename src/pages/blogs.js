import React,{useState, useMemo} from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/hero';
import { BlogsFilterBar } from '../components/blogsFilterBar';
import { MainContent } from '../styles/mainContent.styled';
import { BlogsRender } from '../components/blogsRender';
import Pagination from '../components/pagination';
import { parse } from 'date-fns';
//___
//___Date Parse Format
const dateFormat = "MMM do, yyyy - h:mm a";

const Blogs = ({ data }) => {
//Data variables
  const pageData = data.contentfulPage;
  const blogsData = data.allContentfulBlogPost.nodes;
  const heroData = pageData.pageHero;
//

//Unique Tags
  const uniqueTags = [
    ...new Map(blogsData.flatMap(blog => blog.tags).map(tag => [tag.contentful_id, tag])).values()
  ];
//

//Pagination State and Sorting State
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedTag, setSelectedTag] = useState('');
  const [sortCriteria, setSortCriteria] = useState('relevance');
  const articlesPerPage = 6;
//

// Filter blogs by selected tag
  const filteredBlogs = useMemo(() => {
    return selectedTag
      ? blogsData.filter(blog => blog.tags.some(tag => tag.externalName === selectedTag))
      : blogsData;
  }, [selectedTag, blogsData]);
//

// Sort blogs based on sort criteria
  const sortedBlogs = useMemo(() => {
    const sorted = filteredBlogs.slice().sort((a, b) => {
      console.log('Sorting:', sortCriteria);
      console.log('Date A:', a.datePosted);
      console.log('Date B:', b.datePosted);
      const dateA = parse(a.datePosted, dateFormat, new Date());
      const dateB = parse(b.datePosted, dateFormat, new Date());
      console.log('Parsed Date A:', dateA);
      console.log('Parsed Date B:', dateB);
      
      switch (sortCriteria) {
        case 'date-asc':
          console.log('Comparing (asc):', dateB, dateA);
          return dateA - dateB;
        case 'date-desc':
          console.log('Comparing (desc):', dateA, dateB);
          return dateB - dateA;
        default:
          return 0; // For relevance or default case, no sorting applied
      }
    });
    console.log('Sorted Blogs:', sorted);
    return sorted
  }, [sortCriteria, filteredBlogs]);
//

//Calculate total pages
  const totalPages = Math.ceil(sortedBlogs.length / articlesPerPage);
//

//Get Current Articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedBlogs.slice(indexOfFirstArticle, indexOfLastArticle);
//

//Change Page
  const paginate = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
//

// Handle tag change
   const handleTagChange = (tag) => {  
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page when filter changes
  };
//  

// Handle sort change
  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setCurrentPage(1); // Reset to first page when sort changes
  };
//

//Console Logs
  console.log("Page Data:", pageData);
  console.log("Blogs Data:", blogsData);
//

//Component Return
  return(
    <MainContent className="blogs">
      <Hero 
        content={heroData}
        heroClass="text_no_image"
      />
      <BlogsFilterBar
        tags={uniqueTags}
        selectedTag={selectedTag}
        onTagChange={handleTagChange}
        sortCriteria={sortCriteria}
        onSortChange={handleSortChange}
      />
      <BlogsRender blogs={currentArticles}/>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
    </MainContent>
  )
//
}
export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        contentful_id
        codeId
        slug
        datePosted(formatString: "MMM Do, YYYY - h:mm a")
        date:datePosted(formatString: "MMM Do, YYYY")
        time:datePosted(formatString: "h:mm A")
        blogTitle
        excerpt{
          id
          excerpt
        }
        featureImage {
          contentful_id
          description
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 70
            resizingBehavior: SCALE
          )
        }
        tags{
          codeId
          contentful_id
          externalName
        }
      }
    } 
    contentfulPage(codeId: {eq: "blogs"}) {
      id
      codeId
      contentful_id
      pageHero {
        codeId
        contentful_id
        heroType
        externalName
        content {
          codeId
          contentful_id
          externalName
          content {
            ... on ContentfulText {
              id
              codeId
              contentful_id
              longSimpleText {
                id
                longSimpleText
              }
              shortSimpleText
              richText {
                raw
              }
            }
          }
        }
      }
    }
  }
`
export default Blogs