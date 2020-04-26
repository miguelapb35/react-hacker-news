import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type{
    border-top: 0;
  }

  &:last-of-type{
    margin-bottom: 0;
    padding-bottom: 0;
  }

`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  margin-bottom: 3px;

  a{
    color: white;
    background-color: #000033;
    text-decoration: none;
    padding: 3px;
  }

  @media only screen and (max-width: 600px) {

  a{
    font-size: 14px;
  }
}

`;

export const StoryMeta = styled.div`
  font-style: italic;
  padding-top: 10px;

  > span:first-child{
    margin-right: 10px;
  }

  > span:not(:first-child):before{
    content: '-';
    margin: 0 7px;
  }

  .story__meta-bold{
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || 'red'};
`;

