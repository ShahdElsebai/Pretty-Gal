import styled from "styled-components";
import {
    StyledContainer,
    StyledHeader,
    StyledHeader2,
    StyledLine,
    StyledParagraph
} from "@Components/pages/stockistsAndCustomerCare.Styled";
import {useForm} from "react-hook-form";

const CustomerCare = () => {
    const{register, handleSubmit, formState: {errors}} = useForm();
    // console.log(errors);

    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <StyledContainer>
            <div>
                <StyledHeader>CUSTOMER CARE</StyledHeader>
                <StyledParagraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br/>
                    Just click “Edit Text” or double click me to add your own content and<br/>
                    make changes to the font. I’m a great place for you to tell a story and<br/>
                    let your users know a little more about you.<br/>
                </StyledParagraph>
                <StyledLine width='60rem'/>
                <StyledInnerContainer>
                    <div>
                        <StyledParagraph>Have any questions or concerns?<br/>
                            We’re always ready to help!
                        </StyledParagraph>
                        <StyledHeader2>Call us at</StyledHeader2>
                        <StyledParagraph>123-456-7890<br/>or send us an email to:<br/>info@mysite.com</StyledParagraph>
                    </div>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <StyledInput placeholder="Name"   {...register("name",{required: true})}/>
                        {errors.name && <p >Name is required!</p>}
                        <StyledInput placeholder="Email" type = "email"  {...register("email",{required: true})}/>
                        {errors.email && <p >Email is required!</p>}
                        <StyledInput placeholder="Subject" {...register("subject",{required: true})} />
                        {errors.subject && <p >Subject is required!</p>}
                        <StyledInput placeholder="Message" paddingBottom='100px' {...register("message",{required: true})}/>
                        {errors.message && <p >Message is required!</p>}

                        <StyledButton>Submit</StyledButton>
                    </StyledForm>
                </StyledInnerContainer>
                <StyledLine width='60rem'/>
                <StyledHeader>RETURNS</StyledHeader>
                <StyledParagraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br/>
                    Just click “Edit Text” or double click me to add your own content and<br/>
                    make changes to the font. I’m a great place for you to tell a story and<br/>
                    let your users know a little more about you.<br/>
                </StyledParagraph>
                <StyledLine width='60rem'/>
                <StyledHeader>FAQ</StyledHeader>
                <StyledInnerContainer>
                    <div>
                        <StyledParagraph fontSize="1.3rem">Do you provide International delivery?</StyledParagraph>
                        <StyledParagraph>I'm a paragraph. Click here to add your own text and edit<br/>
                            me. It’s easy. Just click “Edit Text” or double click me to add<br/>
                            your own content and make changes to the font.<br/>
                        </StyledParagraph>
                        <StyledParagraph fontSize="1.3rem">How do I return an item?</StyledParagraph>
                        <StyledParagraph>I'm a paragraph. Click here to add your own text and edit<br/>
                            me. It’s easy. Just click “Edit Text” or double click me to add<br/>
                            your own content and make changes to the font.<br/>
                        </StyledParagraph>
                        <StyledParagraph fontSize="1.3rem">What is your returns policy?</StyledParagraph>
                        <StyledParagraph>I'm a paragraph. Click here to add your own text and edit<br/>
                            me. It’s easy. Just click “Edit Text” or double click me to add<br/>
                            your own content and make changes to the font.I’m a great<br/>
                            place for you to tell a story and let your users know a little<br/> more about you.
                        </StyledParagraph>
                    </div>
                    <div>
                        <StyledParagraph fontSize="1.3rem">How do I track my order?</StyledParagraph>
                        <StyledParagraph>I'm a paragraph. Click here to add your own text and edit<br/>
                            me. It’s easy. Just click “Edit Text” or double click me to add<br/>
                            your own content and make changes to the font.I’m a great<br/>
                            place for you to tell a story and let your users know a little<br/> more about you.
                        </StyledParagraph>
                        <StyledParagraph fontSize="1.3rem">How can I contact your couriers?</StyledParagraph>
                        <StyledParagraph>I'm a paragraph. Click here to add your own text and edit<br/>
                            me. It’s easy. Just click “Edit Text” or double click me to add<br/>
                            your own content and make changes to the font.
                        </StyledParagraph>
                        <StyledParagraph fontSize="1.3rem">What are your delivery options?</StyledParagraph>
                        <StyledParagraph>I'm a paragraph. Click here to add your own text and edit<br/>
                            me. It’s easy. Just click “Edit Text” or double click me to add<br/>
                            your own content and make changes to the font.
                        </StyledParagraph>
                    </div>
                </StyledInnerContainer>
            </div>
        </StyledContainer>
    )
}
const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledForm = styled.form`
& p{
  color: red;
  margin: 5px;
}
`
const StyledInput = styled.input`
  width: 325px;
  height: 25px;
  display: block;
  font-family: Helvetica,Arial,sans-serif;
  
  margin: 5px;
  padding-left:15px;
  padding-bottom:${props => props.paddingBottom} ;
  outline: none;
  &::placeholder {
    color: gray;
  }
  

  &:hover {
    background: #dfdbdb;
    //outline: none;
  }
 &:focus{
   outline: none;
 }
  
`
const StyledButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  display: block;
  background-color: #3a3535;
  color: white;
  margin: 6px;
  border: none;
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 1rem;

  &:hover {
    background: #666363;
  }
`
export default CustomerCare;