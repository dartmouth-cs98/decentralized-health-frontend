export const defaultSteps = [
  {
    content: 'Welcome to Med 3.0! We\'ve created a medical file sharing system to demonstrate what we envision to be an important future use of blockchain technology. Let\'s check it out!',
    event: 'click',
    target: '#tour-start',
    title: 'Welcome to Med3.0',
  },

  {
    content: 'We\'re assuming you\'ve heard of bitcoin and “the blockchain” countless times in the past few years, but do you understand the underlying technology or its other capabilities? '
    + 'In short, a “blockchain” is a system of recording digital information in a way that makes it very difficult to change, hack, or cheat the system.',
    target: '#tour-start',
    title: 'Blockchain?',
  },

  {
    content: 'A blockchain is, in essence, an extensive record of information “blocks” that is stored chronologically and shared among all users who want to access it. There is no centralized '
    + 'database where this information is kept; rather, each user\'s computer keeps a representation of this data and one can add on more data, creating additional “links” in the “chain”.',
    target: '#tour-start',
    title: 'Blockchain!',
  },

  {
    content: 'This may be confusing now, but all will be cleared up soon! To get started, click “Sign Up” and we\'ll create an account. If you don\'t already have it installed, you\'ll need to '
    + 'download the Google Chrome extension “Metamask” and follow the set-up instructions. Make sure to change your network to the Ropsten test network and get some test Ether from the Ropsten Faucet: https://faucet.ropsten.be/',
    target: '#tour-signup',
    title: 'Sign Up',
  },

  {
    content: 'To sign up, begin by giving us some information about yourself. This will be used by doctors to verify your identity, and by you to authenticate with our website.'
    + ' You can sign up as a patient or a doctor, which will determine what kind of user you are, as well as your permissions.',
    placement: 'right',
    target: '#tour-signup-actual',
    title: 'Account Info',
  },

  {
    content: 'Now it\'s time to connect to Metamask! Metamask is your gateway to the ethereum blockchain. It’s a blockchain wallet that stores your “private keys.” '
    + 'Think of a private key as a signature that proves that you are who you say you are. This gives patients control over who has read and write permissions for their medical data.',
    placement: 'right',
    target: '#tour-signup-broad',
    title: 'Metamask',
  },

  {
    content: 'Click this button to connect your account to Metamask. You\'ll see a popup asking for you to confirm the blockchain transaction. Hit confirm to get the transaction under way! If you don\'t see a popup, make sure you are logged into Metamask.',
    placement: 'right',
    target: '#tour-create-account',
    title: 'Create Account',
  },

  {
    content: 'Now we wait! In the background, our app sent out a call to a “smart contract” on the ethereum blockchain. '
    + 'We provided this contract with a small packet of information which, once added to the blockchain, will give you access to its data in the future. This process takes about a minute, so sit tight!',
    placement: 'left',
    target: '#tour-signup-broad',
    title: 'Transacting',
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
    content: 'The blood tests tab contains blood test records for all your patients, which were uploaded by you and other approved admins. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-doctor-blood-tests',
    title: 'Blood tests',
  },

  {
    content: 'The procedures tab contains records of procedures for all your patients, which were uploaded by you and other approved admins. You can search these records using the search function.',
    placement: 'right',
    target: '#tour-doctor-procedures',
    title: 'Procedures',
  },

  {
    content: 'The medical history tab contains medical history records for all your patients, which were uploaded by you and other approved admins. You can search these records using the search function.',
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
