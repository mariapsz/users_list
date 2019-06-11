import styled from 'styled-components';


export const FormRow = styled.div`
    display: grid; 
`;

export const RowLabel = styled.label`
  color: #9FAECD;
  padding: 2% 0 1% 0;
`;

export const Input = styled.input`
  border: none;
  width: 60%;
  color: #6F7F9E;
  border-bottom: 1px solid  #9FAECD;
   :focus {
   outline-width: 0;
   }
`;

export const Form = styled.form`
  width: 100%;
`;

export const RowWrapper = styled.div`
  height: 80%;
  padding: 1% 0 0 0;
  display: inherit;
`;

export const FormWrapper = styled.div`
    height: 40vh;
    width: 80vh;
    padding: 1vh 0;
    display: flex;
`;

export const InputWrapper = styled.div`
    display: inline-flex;
`;

export const SubmitButton = styled.input`
    width: 25%;
    height: 15%;
    border-radius: 20%/50%;
    border: none;
    color: white;
    background-color: #00E1BB;
`;

export const ErrorMessage = styled.div`
    position: relative;
    background: #88b7d5;
    
    :after, :before {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: "";
      position: absolute;
    }
    
    :before {
      border-color: rgba(194, 225, 245, 0);
      border-right-color: #c2e1f5;
    }
    
    :after {
      border-color: rgba(136, 183, 213, 0);
      border-right-color: #88b7d5;
      border-width: 5px;
    }
`;

export const ErrorMessageWrapper = styled.div`
    width: 40%;
    float: right;
    position: relative;
    right: -8%;
`;