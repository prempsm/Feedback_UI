import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function AbouticonLink() {
    return (
        <div class="about-link">
            <Link to='/about'><FaQuestion size={30} /></Link>
        </div>
    )
}

export default AbouticonLink
