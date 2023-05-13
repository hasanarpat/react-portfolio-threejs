import { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";
const Section = styled.div`
	height: 100vh;
	scrool-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;
const Title = styled.h1`
	font-weigth: 200;
`;

const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	@media only screen and (max-width: 768px) {
		width: 300px;
		justify-content: center;
	}
`;
const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;
const TextArea = styled.textarea`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;
const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	border: none;
	font-weigth: bold;
	cursor: pointer;
	border-radius: 5px;
	padding: 20px;
`;

const Right = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	const ref = useRef();
	const [success, setSuccess] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"",
				"",
				ref.current,
				""
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
				},
				(error) => {
					console.log(error.text);
					setSuccess(false);
				}
			);
	};

	return (
		<Section id="contact">
			<Container>
				<Left>
					<Form ref={ref} onSubmit={handleSubmit}>
						<Title>Contact Us</Title>
						<Input placeholder="Name" name="name" />
						<Input placeholder="Email" name="email" />
						<TextArea
							placeholder="Write your message"
							rows={10}
							name="message"
						/>
						<Button type="submit">Send</Button>
					</Form>
					{success && "Your message has been sent."}
				</Left>
				<Right>
					<Map />
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
