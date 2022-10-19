import React from "react"
import { graphql } from "gatsby"

export default function BlogPost(props) {
	const postTitle = props.data.markdownRemark.frontmatter.title
	const postContents = props.data.markdownRemark.html

	return (
		<main style={{
			fontFamily: "Helvetica, sans-serif",
			margin: "auto",
			maxWidth: "550px",
			padding: "1rem 2rem",
		}}>
			<title>{postTitle} | My Personal Blog</title>
			<h1>{postTitle}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: postContents,
				}}
			/>
		</main>
	)
}

export const query = graphql`
	query($id: String) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			html
		}
	}
`