import { Component } from 'solid-js';

const privacy: Component<{}> = (props) => {
  return (
    <main class='min-h-screen  justify-center   '>
      <section class='container mx-auto flex flex-col items-center justify-center py-12'>
        <h1 class='bg-zinc-50 bg-grain-dark bg-clip-text pt-14 text-center text-4xl font-extrabold tracking-tighter text-transparent '>
          Privacy Policy
        </h1>
        <p class='prose prose-zinc mt-12  text-zinc-300 '>
          Your privacy is important to us. It is This Week in Audio's policy to
          respect your privacy regarding any information we may collect from you
          across our website, thisweekinaudio.com, and other sites we own and
          operate. <br />
          <br /> 1. Information we collect Log data When you visit our website,
          our servers may automatically log the standard data provided by your
          web browser. This data is considered 'non-identifying information', as
          it does not personally identify you on its own. It may include your
          computer’s IP address, your browser type and version, the pages you
          visit, the time and date of your visit, the time spent on each page,
          and other details. Personal information We may ask for personal
          information, such as your name and email address. This data is
          considered identifying information, as it can personally identify you.
          We only request personal information relevant to providing you with a
          service, and only if we truly need it to provide a service.
          <br /> <br /> 2. Legal bases for processing We will process your
          personal information lawfully, fairly and in a transparent manner. We
          collect and process information about you only where we have legal
          bases for doing so. These legal bases depend on the services you use
          and how you use them, meaning we collect and use your information only
          where: - we need it to provide you the service, including to operate
          the service, provide customer support and personalized features and to
          protect the safety and security of the service; - it satisfies a
          legitimate interest (which is not overridden by your data protection
          interests), such as for research and development, to market and
          promote the service and to protect our legal rights and interests; -
          you give us consent to do so for a specific purpose; or - we need to
          process your data to comply with a legal obligation.
          <br /> <br /> 3. Data processing and storage The personal information
          we collect is stored and processed where we or our partners,
          affiliates and third-party providers maintain facilities. We only
          transfer data within jurisdictions subject to data protection laws
          that reflect our commitment to protecting the privacy of our users. We
          will retain your personal information only for as long as necessary to
          provide you with our services.
          <br /> <br /> 4. Your rights and controlling your personal information
          You always retain the right to withhold personal information from us,
          with the understanding that your experience of our website may be
          affected. We will not discriminate against you for exercising any of
          your rights over your personal information. If you provide us with
          personal information, you understand that we will collect, hold, use
          and disclose it in accordance with this privacy policy. You retain the
          right to request details of any personal information we hold about
          you. If we receive personal information about you from a third party,
          we will protect it as set out in this privacy policy. If you are a
          third party providing personal information about somebody else, you
          represent and warrant that you have such person’s consent to provide
          the personal information to us.
          <br /> <br />
          5. Cookies We use “cookies” to collect information about you and your
          activity across our site. A cookie is a small piece of data that our
          website stores on your computer, and accesses each time you visit, so
          we can understand how you use our site. This helps us serve you
          content based on preferences you have specified.
          <br /> <br />
          6. Changes to this policy At our discretion, we may change our privacy
          policy from time to time. Any changes will be reflected here, so we
          encourage you to visit this page regularly. We will also notify our
          registered users of updates to our policy. Your continued use of this
          website after any changes to this policy will be regarded as
          acceptance of our practices around privacy and personal information.{' '}
          <br /> <br />
          7. Business Transfers If we or our assets are acquired, or in the
          unlikely event that we go out of business or enter bankruptcy, we
          would include data, including your personal information, among the
          assets transferred to any parties who acquire us. You acknowledge that
          such transfers may occur, and that any parties who acquire us may
          continue to use your personal information according to this policy. 8.
          Third-Party Services We may link to third-party websites or services
          from our website. We have no control over, and are not responsible
          for, these third-party businesses or their use of your personal
          information. We recommend that you review their privacy policies and
          other agreements governing your use of their services. 9. Contact Us
          If you have any concerns or questions about how we handle your data
          and personal information, feel free to contact us at
          contact@thisweekinaudio.com. <br /> <br />
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </main>
  );
};

export default privacy;
