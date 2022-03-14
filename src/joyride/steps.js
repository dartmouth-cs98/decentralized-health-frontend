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
    content: 'Ensure that "Both" is selected, setting your account with both patient & doctor permissions. This will come in handy later on in the tutorial.',
    placement: 'right',
    target: '#tour-both-select',
    title: 'Patient & Doctor',
  },

  {
    content: 'Now it\'s time to connect to Metamask! Metamask is your gateway to the ethereum blockchain. It\'s a blockchain wallet that stores your “private keys.” '
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

  {
    content: 'You\'ve made it in! This dashboard functions like any other medical file storage system you may have seen, but in the background, it is constantly interacting with the ethereum blockchain and updating records as necessary. '
    + 'To get an idea of how this works, let\'s navigate through the different tabs.',
    placement: 'center',
    target: '#tour-patient-welcome',
    title: 'Welcome to your Dashboard!',
  },

  {
    content: 'The doctors tab shows you which doctors you\'ve authorized, and allows you to grant or revoke authorization to doctors. Let\'s check it out!',
    placement: 'right',
    target: '#tour-patient-doctors',
    title: 'Doctors',
  },

  {
    content: 'Here, you can see a list of doctors who have access to your medical files. It\'s empty now, but we can add ourselves as a doctor!',
    target: '#tour-doctor-list',
    title: 'Doctors List',
  },

  {
    content: 'Click "Add Doctor" to add a new doctor. For now, we can add ourselves as a doctor, as we set our account permissions to both patient & doctor. '
    + 'To paste in your Metamask wallet address, click the metamask extension icon and copy the sequence of characters above “Account” into the text field.',
    target: '#tour-add-doctor',
    title: 'Add Doctor',
  },

  {
    content: 'Great! Now you\'ve granted permission to your doctor account to view and add files to your account. After a bit, your new doctor will appear in this list and you\'ll be able to interact with them and view their account. '
    + 'In order to do this, the application is making a call to retrieve data from the smart contract on the blockchain and display the updated information on your screen. The advantage of data being stored on a blockchain is that '
    + 'you are able to access the information from anywhere in the world with just a computer and an internet connection. Reading information off of a blockchain does not require us to pay any gas since there are no changes being made to '
    + 'the state of the database since we are only viewing the data.',
    placement: 'center',
    target: '#tour-doctor-info',
    title: 'The Power of Blockchain',
  },

  {
    content: 'Let\'s check out how doctors add and view patients\' files. Click on your name and select “Admin View” from the drop-down menu.',
    target: '#demo-customized-button',
    title: 'Switch Views',
  },

  {
    content: 'Now we\'re on our main doctor dashboard. From here, we can view our patients and interact with them.',
    placement: 'center',
    target: '#tour-doctor-welcome',
    title: 'Doctor Dashboard',
  },

  {
    content: 'The patients tab shows you which patients have authorized you to view their records, and allows you to upload files which they can view. Let\'s check it out!',
    placement: 'right',
    target: '#tour-doctor-patients',
    title: 'Patients',
  },

  {
    content: 'Here, you can view the patients that you are assigned to, and upload text files on the behalf of a patient. '
    + 'When a file is uploaded, our application parses and copies the contents of the file, packaging them up nicely in a block, and sending it off to be validated, mined, and then added to the ethereum blockchain.'
    + ' These files will be readable by both you and your patient, and are unalterable after being uploaded, eliminating any risk of this data being tampered with. Click on your patient account in order to add a file.',
    target: '#tour-patient-list',
    placement: 'right',
    title: 'Patients List',
  },

  {
    content: 'Here’s where you can view each patient’s files and basic information. Let’s make this list a bit less empty. Click “Add File” and we’ll upload a file.',
    placement: 'top',
    target: '#tour-single-patient',
    title: 'Add File',
  },

  {
    content: 'At the moment, we can only store textual data on the ethereum blockchain, so we can’t upload images or x-rays. Indicate the file type you want to categorize this file under, and then choose a file ending in .txt from your computer to be uploaded. Finally, click “add file” when ready to add it to the blockchain.',
    placement: 'right',
    target: '#tour-single-patient',
    title: 'Add File',
  },

  {
    content: 'Once you clicked that, our application parsed and copied the contents of the file, packaged them up nicely in a block, and sent it off to be validated, mined, and then added to the ethereum blockchain. Sit tight for a bit, and then you should be able to view this file in the patient’s file list.',
    target: '#tour-add-file',
    title: 'Patient Information',
  },

  {
    content: 'You\'ve made it to the end! We hope this short demo has left you more knowledgeable on blockchains and their potential future applications. Feel free to play around with this system and revisit the tutorial if you\'d like. Otherwise, stay curious!',
    placement: 'center',
    target: '#tour-add-file',
    title: 'Thank You!',
  },
/*
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
  }, */
];

// currently out of use
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
