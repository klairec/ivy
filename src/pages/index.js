// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="IVY ✌️">
      <li><Link to="/electroLab">Electro Lab tracklist</Link></li>
      <li><Link to="/digressionsAuditives">Digressions Auditives tracklist</Link></li>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage