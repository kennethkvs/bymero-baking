import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function ContactEmail({ firstName, lastName, message }) {
  const previewText = `Thank you for asking, ${firstName}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Text style={paragraph}>ByMero Baking</Text>
            </Section>
            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>We will get back to you ASAP!</Text>
                <Text style={review}>{message}</Text>
                <Text style={paragraph}>
                  Hey, {firstName} {lastName}! Thank you for your message. We
                  are just starting out ByMero Baking and we are happy to hear
                  from you!
                </Text>
                <Text style={paragraph}>
                  We will try our best to get back to you as soon as possible! I
                  hope you are enjoying your cookies just like we do! :)
                </Text>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Text style={footer}>ByMero Baking, Toronto, ON, Canada</Text>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#cccccc",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
