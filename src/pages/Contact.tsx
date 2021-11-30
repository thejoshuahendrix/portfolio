import styled from 'styled-components'

const Input = styled.input`
    height: 30px;
    width: 30%;
    border: .5px solid #444444;
    border-radius: 10px;
    
`
const TextArea = styled.textarea`
    height: 90px;
    width: 30%;
    border: .5px solid #444444;
    border-radius: 10px;
    
`
const Button = styled.button`
    height: 30px;
    width: 60px;
    background: #378337;
    border-radius: 4px;
    color: white;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin: 10% auto 10% auto;
    padding: 20px 0 20px 0;
    width: 80%;
    border: 1px dotted rgba(0,0,0,.1);
    box-shadow: 20px 20px 20px 20px rgba(0,0,0,.1);
`
const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`


const Contact = () => {
    return (
        <FormWrapper>
            <Form>
                <h2>Contact Me!</h2>
                <label>Name</label>
                <Input type="text" name="name" />
                <label>Email</label>
                <Input type="email" name="email" />
                <label>Message</label>
                <TextArea name="message" />
                <Button>Submit</Button>

            </Form>
        </FormWrapper>
    )
}

export default Contact
