import styled from "styled-components";
import Modal from "react-modal";

export const global = `
body {
	font-family: Helvetica, Arial, sans-serif;
	font-size: 1rem;
	background: #333745;
	color: white;
}
button {
	cursor: pointer;
}
button:disabled {
  cursor: default;
}
`;

export const Head = styled.div`
  background: #20222b;
  margin-bottom: 4.8rem;
  padding: 1.6rem;
  color: white;
`;

export const HeadTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  text-align: center;
`;

export const HeadSubtitle = styled.p`
  color: #a5afd7;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

export const BigButton = styled.button`
  background: #8357c5;
  border: none;
  border-bottom: 0.6rem solid #693cad;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
  width: 100%;
  &:disabled {
    opacity: 0.5;
  }
`;

export const AddOption = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const AddOptionInput = styled.input`
  background: #333745;
  border: none;
  color: #a5afd7;
  border-bottom: 0.3rem solid #1d2028;
  flex-grow: 1;
  margin: 0 0 1.2rem 0;
  padding: 1.2rem;
  @media only screen and (min-width: 1200px) {
    flex-direction: 0 1.2rem 0 0;
  }
`;

export const Button = styled.button`
  background: #8357c5;
  border: none;
  border-bottom: 0.3rem solid #693cad;
  color: white;
  padding: 0.5rem;
  float: right;
`;

export const RemoveAllButton = styled.button`
  background: #8357c5;
  border: none;
  border-bottom: 0.3rem solid #693cad;
  color: white;
  padding: 0.5rem;
  float: right;
  font-size: 1.5rem;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;

export const StyledModal = styled(Modal)`
  background: #464b5e;
  color: white;
  max-width: 30rem;
  outline: none;
  padding: 3.2rem;
  text-align: center;
`;

export const ModalTitle = styled.h3`
  margin: 0 0 1.6rem 0;
`;

export const ModalBody = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 $l-size 0;
  word-break: break-all;
`;

export const WidgetHeader = styled.div`
  background: #464b5e;
  margin-bottom: 4.8rem;
`;

export const WidgetMessage = styled.p`
  border-bottom: 1px solid #5c627b;
  color: #a5afd7;
  margin: 0;
  padding: 3.2rem;
  text-align: center;
`;

export const Option = styled.div`
  border-bottom: 1px solid #5c627b;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1.6rem;
`;

export const OptionText = styled.p`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 0;
  word-break: break-all;
  border-bottom: 1px solid #5c627b;
`;
