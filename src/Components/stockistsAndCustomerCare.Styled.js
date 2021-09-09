import styled from "styled-components";

export const StyledContainer = styled.div`                              
  display: flex;                                                        
  justify-content: center;                                              
  max-width: 100vw;                                                     
  margin-top: 130px;                                                    
  margin-bottom: 60px;                                                  
                                                                        
`
export const StyledHeader = styled.h1`                                  
  font-family: Raleway, serif;                                          
  font-weight: 700;                                                     
  font-size: 1.3rem;                                                    
  letter-spacing: 5px;                                                  
  color: #242121;                                                       
  display: block;                                                       
  margin: 50px;                                                         
  text-align: center;                                                   
`
export const StyledHeader2 = styled.h1`                                        
  font-family: Raleway, serif;                                          
  font-weight: 600;                                                     
  font-size: 1rem;                                                      
  margin-top: 50px;                                                     
  letter-spacing: 1px;                                                  
  text-align: center;                                                   
`
export const StyledParagraph = styled.p`                                
  font-family: Raleway, serif;                                          
  font-weight: 300;  
  font-size: ${props => props.fontSize};
  font-size: 1rem;                                                      
  text-align: center;                                                   
  display: block;                                                       
  padding-top: 5px;                                                     
  letter-spacing: 2px;                                                  
  margin-bottom: 30px;                                                  
  line-height: 25px;                                                    
                                                                        
`
export const StyledLine = styled.hr`                                    
  border-top: 1px solid black;                                          
  margin-top: 50px;                                                     
  margin-bottom: 50px;                                                  
  width: ${props => props.width};                                       
                                                                        
`

