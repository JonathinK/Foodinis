import React,{ Fragment } from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types";


export const RichTextRender = ({ content, references }) => {
  //Checks to see if there is rich text raw
  const richText = content || null;
  //Hyperlink render: Gets the inline hyperlink and renders it
  const HyperLink = ({children, node}) => {

  }
  //Options
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <i>{text}</i>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
      [MARKS.STRIKETHROUGH]: text => <del>{text}</del>,
      [MARKS.CODE]: text => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.UL]: (node,children) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return (
          <li>
            {children.map((child, index) => {
              // Flatten nested paragraph nodes within list items
              if (child.type === 'p') {
                return <Fragment key={index}>{child.props.children}</Fragment>;
              }
              return child;
            })}
          </li>
        );
      },
      [BLOCKS.HYPERLINK]: (node,children) => <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>,
      [INLINES.ENTRY_HYPERLINK]: HyperLink,
      [BLOCKS.HR]: () => <hr />,
      'text': (node) => {
        // Render text nodes directly
        return node.value;
      }, 
    }
  };
  return(
    <>
      {richText && renderRichText(richText,options)}
    </>
  )
}