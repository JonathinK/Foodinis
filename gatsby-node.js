/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async({actions, graphql, reporter}) => {
  //Create Pages Function
  const result = await graphql(`
    query {
      allContentfulPolicyDocuments {
        nodes{
          codeId
          slug
        }
      } 
      allContentfulBlogPost {
        nodes {
          codeId
          slug
        }
      }
      allContentfulPage {
        nodes{
          codeId
          slug
        }
      }
    }
  `)
  //Error Handling
  if(result.errors) {
    reporter.panic('Error Loading Pages', JSON.stringify(result.errors));
  }
  //Policy Page Build
  result.data.allContentfulPolicyDocuments.nodes.forEach(policy => {
    actions.createPage({
      path: policy.slug,
      component: require.resolve('./src/templates/policy-page.js'),
      context: {
        slug: policy.slug
      }
    })
  })
  //Blog Post Build
  result.data.allContentfulBlogPost.nodes.forEach(post => {
    actions.createPage({
      path: `/blogs/${post.slug}`,
      component: require.resolve('./src/templates/blog.js'),
      context: {
        slug: post.slug
      }
    })
  })
  //Catering Delivered Build
  result.data.allContentfulPage.nodes.forEach(page => {
    const {codeId, slug} = page;

    let template;
    let pageSlug;

    switch(codeId){
      case '/':
        return;
      case 'catering_delivered':
         template = require.resolve('./src/templates/catering-delivered.js');
         pageSlug = `/menus/${slug}`;
         break;
      default: 
        return;
    }
    if (template && pageSlug){
      actions.createPage({
        path: pageSlug,
        component: template,
        context: {
          slug: pageSlug
        },
      });
    } else {
      reporter.warn(`Missing template or pageSlu for page: ${slug}`);
    }    
  });
};
