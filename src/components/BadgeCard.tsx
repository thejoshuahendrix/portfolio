import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from '../types/badges'

interface PropTypes {
    badge: Badge;
}
const BadgeCard = ({ badge }: PropTypes) => {
    return (
        <div>
            <div>

                <h2><FontAwesomeIcon size="2x" icon={[badge.iconType, badge.icon]} /> {badge.title}</h2>
                <p>{badge.description}</p>

            </div>
        </div>
    )
}

export default BadgeCard
