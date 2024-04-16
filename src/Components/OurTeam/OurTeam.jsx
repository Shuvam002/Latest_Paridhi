



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { team_data } from './output';
import { StyledContainer, Container,CardContainer, Image, Title, SocialMedia } from '../OurTeam/OurTeam.styled';

const OurTeam = () => {
  
  const compareMembers = (a, b) => {
    // First, sort by year in descending order (4th years first)
    if (a.Year > b.Year) return -1;
    if (a.Year < b.Year) return 1;

    // If years are the same, then sort alphabetically by name
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) return -1;
    if (a.Name.toLowerCase() > b.Name.toLowerCase()) return 1;
    
    return 0;
  };

  
  const sortedTeamData = team_data.sort(compareMembers);
  console.log("Image URL:", team_data.Image);
  return (
    <StyledContainer>
      <CardContainer >
        
        {sortedTeamData.map((data, index) => (
          <Container key={index}>
            
            <Image>
              <img src={data.Image} alt={data.Name} />
            </Image>
           
            <Title>
              <h1>{data.Name}</h1>
              <p>{data.Year} Year</p>
            </Title>
            <SocialMedia>
              
            <div className="icons">
              <a href={data.insta_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              </div>
              <div className="icons">
              <a href={data.fb_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              </div>
              
              
              <div className="icons">
              <a href={data.li_link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              </div>
              <div className="icons">
              <a href={data.gmail} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>  
              </div>
            </SocialMedia>
          </Container>
        ))}
      </CardContainer>
    </StyledContainer>
  );
};

export default OurTeam;