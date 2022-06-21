
import Title from '../Components/Title/Title';
import TeamSlider from './Components/TeamSlider/TeamSlider';

import './Team.css';

import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Team = () => {


    return (<section className="section main-container" id='notre-equipe' >
        <div className="team-container bg-white">
            <Title direction="left" title="Notre Equipe" icon={faPeopleGroup} />
            <div className="section-desc mg-top-100">
                <p className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
                    fuga accusamus sed saepe. Sint tempora incidunt, ducimus inventore
                    officiis vitae temporibus. Libero distinctio unde facere aperiam? Sunt
                    nihil deleniti vel.
                </p>
                <TeamSlider />
            </div>
        </div>
    </section>);
}

export default Team;