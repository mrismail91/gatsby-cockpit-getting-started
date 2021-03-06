import React from 'react'
import Link from 'gatsby-link'
const IndexPage = ({data}) => {
  const { page, projects } = data;

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
      <ul className="project-grid">
        {projects.edges.map(({ node }, index) => (
          <li key={node.slug}  className={`project-item project-${index%3 + 1}`}>
            <Link to={`project/${node.slug}`} className="project-item__inner">
              <h3 className="project-item__title">{node.title}</h3>
            </Link>
          </li>
        ))} 
      </ul>
      <div className="card">
        <p>We love to do stuff that make people happy.</p>
        <Link to="/about" className="button">
          More about us
        </Link>
      </div>      
    </div>
  )
}

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    page(slug: { eq: "home" }) {
      title
      content
    }

    projects: allProject {
      edges {
        node {
          slug
          title
        }
      }
    }

  }
`