import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import { mailtrapClient, sender } from "./mailTrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent succesfully", response);
  } catch (error) {
    console.error("Error sending Verification email", error);
    throw new Error(`Error sending Verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "efc669b9-87a7-4b14-a2ae-290743a282e1",
      template_variables: {
        company_info_name: "Suthesh company",
        name: name,
      },
    });
    console.log("welcome email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password ",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "password reset",
    });
  } catch (error) {
    console.error(`error sending password reset email`, error);
    throw new Error(`error sending password reset email ${error}`);
  }
};

export const sendResetSuccessEmail = async(email)=>{
  const recipient =[{email}];
  try {
    const response = await mailtrapClient.send({
      from:sender,
      to :recipient,
      subject:"Password reset successful",
      html:PASSWORD_RESET_SUCCESS_TEMPLATE,
      category:"Password reset",
    });
  } catch (error) {
    console.error(error);
    throw new error(error);
  }
}