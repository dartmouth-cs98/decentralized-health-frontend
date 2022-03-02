export const defaultSteps = [
  {
    content: 'This is a guided tour of our site. You can quit this tour at any time by clicking exit.',
    event: 'click',
    target: '#tour-start',
    title: 'Welcome to Med3.0',
  },

  {
    content: 'This will take you to our sign up page',
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
    title: 'Finish sign up',
  },
];

export const patientSteps = [
  {
    content: 'This is your dashboard. Here you can view your doctors, your blood tests, procedures, and medical history',
    placement: 'center',
    target: '#tour-patient-welcome',
    title: 'Welcome to your Dashboard!',
  },

  {
    content: 'The files tab contains all of your files, which can be uploaded by your doctor. These may include medical history, blood tests, or procedures.',
    placement: 'right',
    target: '#tour-patient-files',
    title: 'Files',
  },

  {
    content: 'The doctors tab shows you which doctors you\'ve authorized, and allows you to grant or revoke authorization to doctors.',
    placement: 'right',
    target: '#tour-patient-doctors',
    title: 'Doctors',
  },

  {
    content: 'The medical history tab contains your medical records, which can be uploaded by your doctor. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-patient-med-history',
    title: 'Medical history',
  },

  {
    content: 'The blood tests tab contains your blood test records, which can be uploaded by your doctor. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-patient-blood-tests',
    title: 'Blood tests',
  },

  {
    content: 'The procedures tab contains your procedure records, which can be uploaded by your doctor. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-patient-procedures',
    title: 'Procedures',
  },

  {
    content: 'Finally, this menu allows you to switch to a different user view—provided you have created an account as that user with the same wallet address—and log out of your account. Thank you for taking the tour with us. Now you can explore on your own!',
    placement: 'auto',
    target: '#tour-menu',
    title: 'User menu',
  },
];

export const doctorSteps = [
  {
    content: 'This is your dashboard. Here you can view your patients and their records, which are divided into three categories: blood tests, procedures, and medical history.',
    placement: 'center',
    target: '#tour-doctor-welcome',
    title: 'Welcome to your Dashboard!',
  },

  {
    content: 'The patients tab shows you which patients have authorized you to view their records, and allows you to upload files which they can view.',
    placement: 'right',
    target: '#tour-doctor-patients',
    title: 'Patients',
  },

  {
    content: 'The blood tests tab contains blood test records for all your patienta, which were uploaded by you and other approved admins. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-doctor-blood-tests',
    title: 'Blood tests',
  },

  {
    content: 'The procedures tab contains records of procedures for all your patienta, which were uploaded by you and other approved admins. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-doctor-procedures',
    title: 'Procedures',
  },

  {
    content: 'The medical history tab contains medical history records for all your patienta, which were uploaded by you and other approved admins. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-doctor-med-history',
    title: 'Medical histories',
  },

  {
    content: 'Finally, this menu allows you to switch to a different user view—provided you have created an account as that user with the same wallet address—and log out of your account. Thank you for taking the tour with us. Now you can explore on your own!',
    placement: 'auto',
    target: '#tour-menu',
    title: 'User menu',
  },
];
