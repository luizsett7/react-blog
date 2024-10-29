import { Link } from "react-router-dom"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About the React Blog</h2>
      <p>
        A React and Firebase project.
      </p>
      <Link to="/posts/create" className="btn">
        Create Post
      </Link>
    </div>
  )
}

export default About