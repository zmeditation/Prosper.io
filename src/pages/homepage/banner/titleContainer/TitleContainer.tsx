import { StyledTitleContainer, TitleContent, LeftSideContent, RightSideContent, StyledYoutubeIcon, VideoContainer, VideoImageContainer } from './TitleContainerStyle';
import ActionButton from '../../../../components/basicComponent/ActionButton';
import './titleContainer.css'
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TitleContainer = () => {
  const navigate = useNavigate()
  return (
    <StyledTitleContainer>
      <div className='title-content'>
        <TitleContent>
          <LeftSideContent>
            <div className='title-text-large'>
              Welcome to
              <br/>
              Prosper 247
            </div>
            <p className='title-text-small'>
              Where Education, Affordability, and Opportunity Meet to Create the <span>Most Dynamic</span> Smart Contract On the Planet
            </p>
            <div className='title-text-button'>
              <ActionButton color="yellow" onClick={()=>navigate('/join')}>Yes I'm Ready!</ActionButton>
              <div className='youtube-link'>
                <Link component={"a"} href="https://youtube.com/channel/UCRvoLct6XdxifQ1eDZP4XZw" target={"_blank"} rel="noopener noreferrer" className='link-container'>
                  <StyledYoutubeIcon/>
                </Link>
              </div>
            </div>
          </LeftSideContent>
          <RightSideContent>
            <VideoContainer>
              <VideoImageContainer/>
            </VideoContainer>
          </RightSideContent>
        </TitleContent>
      </div>
    </StyledTitleContainer>
  )
}