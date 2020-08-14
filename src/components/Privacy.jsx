/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import tagManager from '../lib/googleTagManager';
import Logo from './Logo';
import Menu from './ZetjeMenu';

const Privacy = () => {

  return (
    <div className="app">
      <Menu />
      <div className="container">

        <div className="page">
          <Logo />
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. We understand this is a huge responsibility and work hard to protect your personal data. Whenever possible, we put you in control. Your personal data will not be shared with third parties for any personal gain or advertising reasons. This policy is meant to help you understand what personal data we collect and process, and why we do this.</p>
          <h2>Introduction</h2>
          <p>
          Stichting LittleBitz (“LittleBitz” or “we”) is a social start-up powered by committed individu-als, companies and organisations from the public and private sector. We are a non-profit foundation with ANBI-status. LittleBitz has its offices at Mauritskade 63, 1092AD, Amsterdam, the Netherlands, and is registered at the Dutch Chamber of Commerce (number 69611017).
          The objective of LittleBitz is to provide financial and other support to victims of humanitarian crises and poverty to promote their rehabilitation. To achieve this goal we have (co-)created various services such as “Zetje”, and “Payroll giving”, enabling you to financially support people worldwide. Please see our website for the most current list of our services. These services are hereinafter jointly and individually referred to as “Service” and “Services”.
          </p>
          <h2>1. Scope of Policy</h2>
          <p>This Privacy Policy describes how we collect, use, process, and disclose personal data on you (“you” or “User”) in conjunction with access to and use of the Services and our websites. </p>
          <h2>2. The personal data we process</h2>
          <p>When using any of our Services, or websites, or otherwise engage in certain activities, such as downloading our mobile application(s), making a donation, requesting services or infor-mation, or contacting us directly, we process the following types of personal data on you:</p>
          <ul>
            <li>Creating and account on the mobile application LittleBitz: To create an account, we re-quest your name and mobile phone number. </li>
            <li>Creating an account on the mobile application Zetje and processing your payment re-quest: If you create a payment request through the mobile application Zetje, we request your name, mobile phone number and email address. To process your payment we also process the payable amount and the allocation formula of the payment. To process the payment through Zetje, LittleBitz shares your name, telephone number, payable amount and the allocation formula of the payment with LittleBitz’ payment service provider Online Betaal Platform (“OBP”). For more information on our collaboration with OBP with regard to Zetje, please see chapter 6.</li>
            <li>Making a donation through any of our Services: If you make a one-off or recurring dona-tion via any Service (through the websites or mobile applications), you provide your payment method information to our Payment Service Provider (“PSP”) partner. To process the payment the PSP partner shares the required information regarding the transaction (date, amount, your initials, your surname) with us. </li>
            <li>Communications with us: We collect your personal data such as your email address, first and last name when you request to receive information about our Services, sign up for the LittleBitz’ newsletter, request to receive customer or technical support, or otherwise communicate with us.</li>
            <li>Using our websites: When you use our websites we collect personal information from you regarding your online activity, browsing history and search history, preferences and location through the use of cookies, web beacons, pixel tags, log files or other similar technologies. For more information on how we process your personal data through cookies and other similar technologies, please see chapter 7.</li>
          </ul>
          <h2>3. Personal data from other sources</h2>
          <p>We may receive personal data from third parties. For example, if you access our Services through an application of a third party, such as the App Store or Google Play Store, or a So-cial Networking Service (“SNS”), we may collect personal data on you from that third-party application that you have made public via your privacy settings therein. Personal data we collect through third-party applications may include your name, your SNS user identification number, your SNS username, profile picture and optionally your email and list of your con-tacts on the SNS.</p>

          <p>We will never share your personal data with an SNS without your permission.</p>

          <h2>4. Why we use your personal data</h2>
          <p>We process your personal data to provide our Services to you and to administer your use of the Services.
Additionally, we may process your personal data:
</p>
          <ul>
            <li>to improve your experience with our services and websites;</li>
            <li>to ensure technical functionality of the Services and websites, develop new features and services,
              and analyse your use of the Services and websites;
            </li>
            <li>to communicate with you for Service-related or research purposes
              including via emails, notifications, or other messages; and/or
            </li>
            <li>to prevent or detect fraud including fraudulent payments
              and fraudulent use of the Services.
            </li>
          </ul>
          <h2>5. Disclosure to and Cooperation with Third Parties</h2>
          <p>We share your personal data with the following third parties:
          </p>
          <ul>
            <li>Technical service providers: We use technical service providers which operate the technical infrastructure that we need to provide the Services and websites, including communication with you, in particular providers which host, store, manage, and main-tain the application, its content and the data we process.</li>
            <li>Financial service providers: When you make donations to LittleBitz, your donation is processed directly by a third-party payment processor Mollie B.V. Where this regards the mobile application Zetje we cooperate with OBP. </li>
            <li>Charitable institutions and partners: We cooperate with (local) verified organisations such as the UNHCR that will forward donations to the recipients. We only share the donated amount and the name of the recipient.</li>
          </ul>
          <h2>6. Zetje</h2>
          <p>For the mobile application “Zetje” we cooperate with OBP as service payment provider. OBP is part of MediaMedics B.V. and has its offices at Kanaalweg 1, 2628 EB, Delft, the Nether-lands and is registered at the Dutch Chamber of Commerce (number 50124498). Where we share your personal data with OBP to execute the payment service request, OBP and LittleBitz act as joint controller, specifically for the following activities:</p>
          <ul>
            <li>Where LittleBitz transfers personal data of the user of Zetje to OBP to execute the payment.</li>
            <li>When OBP processes the personal data of the payer when it receives the payment.</li>
            <li>When OBP transfers personal data of the payer to LittleBitz to execute the payment.  </li>
          </ul>
          <h2>7. Cookies, Third-Party Software Development Kits and Tracking</h2>
          <p>Our websites www.littlebitz.org and www.zetje.org use cookies. A cookie is a small piece of data stored on a User’s device. It usually contains stateful information or information on browser history. By setting a cookie, LittleBitz will remember the User the next time he/she visits the website. Where applicable, we will only use cookies with your consent. You can withdraw your consent at any time. </p>
          <p>We use the following cookies:</p>
          <img src="/img/cookies.png"/>
          <p>We use Google Analytics, a service provided by Google, Inc. (“Google”), to gather infor-mation about how Users engage with our Services. For more information about Google Ana-lytics, please visit www.google.com/policies/privacy/partners/. You can opt out of Google’s collection and processing of data generated by your use of the Services by going to http://tools.google.com/dlpage/gaoptout.</p>
          <h2>8. Exercising your data subject rights</h2>
<p>If you would like to access, correct, transfer (right to data portability), delete or otherwise limit our use of your personal data, we ask you to contact us at: info@littlebitz.org. We will respond to your request within one month. If we cannot comply with your request, for exam-ple due to other legal obligations, we will inform you of our decision.
You may at any time opt-out from receiving our newsletter or other commercial or charitable email correspondence from us. Please use the “unsubscribe” link provided at the end of the correspondence.
</p>

<p>With your permission, LittleBitz may send you emails and/or push notifications with notices that may be of interest to you. You may at any time opt-out from receiving these types of communications by changing the settings within the Service or on your mobile device. Please note that it is not possible to opt-out from receiving push notifications or SMS of a technical and/or functional nature. </p>

<p>You also have the right to lodge a complaint directly with the data protection authority about how your personal data is processed. </p>

<h2>9. Data Retention</h2>
<p>We seek to ensure that we only keep your personal data for the period necessary for the relevant activity or Services or any retention period that is required by law, whichever period is longer. </p>

<h2>10. Security</h2>
<p>To protect your personal data from unauthorized access and abuse we have implemented technical and organizational security measures. We check these security measures regularly and adapt them, as necessary, to the state of technological progress. Our infrastructure is served via HTTPS, so that your smartphone only communicates with our server over a se-cure channel. All payment data is processed by our payment processing partners. Your fi-nancial information is managed securely on our behalf by our payment processor which is a globally trusted (Level 1 DSS PCI compliant) payment company.</p>

<h2>11. Notification of Changes</h2>
<p>This Privacy Policy may change from time to time. Changes will be posted within the Services and on our websites to keep you informed on what personal data is collected and how it is used. Please make sure you read any such notice carefully. If you do not wish to continue using the Service under the new version of the Privacy Policy, please contact us at info@LittleBitz.org.</p>

<h2>11. Contact Us</h2>
<p>If you have any questions or concerns about this Privacy Policy or would like to exercise any of your data subject rights, please contact us at: info@littlebitz.org.</p>

          <p>This document was last updated on 14 July 2020.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
