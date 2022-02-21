const steps = [
  {
    content: 'This is a guided tour of our site. You can quit this tour at any time by clicking exit.',
    // disableBeacon: true,
    event: 'click',
    target: '#tour-start',
    title: 'Welcome to Med3.0',
  },

  {
    content: 'This will take you to our sign up page',
    // event: 'click',
    // disableBeacon: true,
    target: '#tour-signup',
    title: 'Proceed to Sign Up',
  },

  {
    content: 'To sign up, begin by giving us some information about yourself. This will be used by doctors to verify your identity, and by you to authenticate with our website.'
    + ' You can sign up as a patient or a doctor, which will determine what kind of user you are, as well as your permissions.',
    placement: 'right',
    target: '#tour-signup-actual',
    title: 'Signing Up',
  },

  {
    content: 'Click here to continue setting up your account.'
    + ' Be sure that your metamask chrome extension is up and running, so that we can connect to your wallet. Follow the steps in metamask to finish setting up your account.',
    placement: 'right',
    target: '#tour-create-account',
    title: 'Connect to Wallet',
  },

  {
    content: 'This is where you can access all sorts of features, such as viewing your files, approving doctors, and accessing medical history.',
    placement: 'center',
    target: '#tour-welcome',
    title: 'Welcome to your Dashboard!',
  },

  {
    content: 'The files tab contains all of your files, which can be uploaded by your doctor. These may include medical history, blood tests, or procedures.',
    placement: 'right',
    target: '#tour-files',
    title: 'Files',
  },

  {
    content: 'The doctors tab shows you which doctors you\'ve authorized, and allows you to grant or revoke authorization to doctors.',
    placement: 'right',
    target: '#tour-doctors',
    title: 'Doctors',
  },

  {
    content: 'The medical history tab contains your medical records, which can be uploaded by your doctor. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-med-history',
    title: 'Medical History',
  },

  {
    content: 'The blood tests tab contains your blood test records, which can be uploaded by your doctor. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-blood-tests',
    title: 'Blood Tests',
  },

  {
    content: 'The procedures tab contains your procedure records, which can be uploaded by your doctor. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-procedures',
    title: 'Procedures',
  },

  {
    content: 'Finally, the profile menu allows you to switch to an admin view, manage your privacy settings, and log out of your account. Happy browsing!',
    placement: 'auto',
    target: '#tour-profile',
    title: 'Profile',
  },
];

export default steps;
