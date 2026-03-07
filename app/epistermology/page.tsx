import EpistemologySection from "@/components/EpistemologySection";
import LensSection from "@/components/LensSection";

import filmImage from "@/images/film1.png"
import theoryImage from "@/images/theory1.png"
import immersiveImage from "@/images/experience1.png"
import researchImage from "@/images/research1.png"
import sociologyImage from "@/images/sociology1.png"
import techImage from "@/images/tech1.png"


export default function Page() {
    return (
        <div className="bg-white">
        
         <EpistemologySection />

<LensSection
  index={1}
  title="Films & Visual Communication"
  description="Films, documentaries, and visual media serve as mirrors for exploring leadership, conflict, identity, and organisational behaviour. Through this lens, students read cinema as case studies analysing the moral dilemmas, team dynamics, and decision-making embedded in narrative. Film screenings and reflective writing sessions become micro-labs of observation, teaching students how culture, emotion, and storytelling shape organisational life."
  image={filmImage}
/>
<LensSection
  index={2}
  title="Theory & Technicals"
  description="Theory gives management its language; technicals give it structure. Through this lens, students  build conceptual clarity and quantitative fluency, learning to interpret frameworks, models, and  analytical tools. However, these are not ends in themselves. They are instruments of thought,  constantly tested against lived experience."
  image={theoryImage}
/>
<LensSection
  index={3}
  title="Immersive Experiences"
  description="Learning happens when one’s understanding collides with the world. The immersive lens  enables students to step outside the classroom into organisations, communities, markets,  and civic systems to observe, participate, and reflect.  Immersions can be internships, field projects, or live consultancies, but always framed by  inquiry."
  image={immersiveImage}
/><LensSection
  index={4}
  title="Research"
  description="Research is the School’s heartbeat. Every learner is trained to question, design, and validate ideas systematically. Through this lens, students engage with mixed-methods quantitative, qualitative, ethnographic, and design-based learning, learning how to produce evidence and  argument."
  image={researchImage}
/><LensSection
  index={5}
  title="Sociological & Humanism"
  description="This lens introduces learners to the broader humanities, including sociology, psychology, history,  and literature, to understand the moral, social, and emotional dimensions of work. Students  examine how power, identity, culture, and inequality shape organisations and decisions. They  engage with texts and thinkers from philosophy to anthropology, connecting management to  the human condition."
  image={sociologyImage}
/>
<LensSection
  index={6}
  title="Technology"
  description="These lenses do not exist in isolation; they  converge  within each semester’s central question.  A  f ilm may open a discussion that leads to theory; an immersion may provoke research; a  technical model may reveal social implications. Together, they create an ecosystem of  connected learning  , where students move fluidly between  analysis and imagination, data and  empathy, reflection and action."
  image={techImage}
/>


        </div>
    );
}